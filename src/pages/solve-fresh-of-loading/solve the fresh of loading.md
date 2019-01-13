---
title: 解决 loading 闪烁的问题
date: 2019-01-12T19:30Z
spoiler: 无条件 loading 是有代价的
---

## 背景

从开始接触异步请求，接触 AJAX 和 Promise 后，就会发现这些操作很**「套路化」**。绝大多数的异步操作似乎都可以类似下面 👇 的代码：

```jsx
async componentDidMount() {
  this.setState({ loading: true });
  try {
    const rep = await fetch(params)
    this.setState({ ...rep.data });
  } finally {
	  this.setState({ loading: false })
  }
}
```

生活很美好吧，umh？不过呢，这让整个交互体验变得不那么「人性化」了。因为我们不论任何时候，网速怎么样，都会加载一个 loading，然后在接口返回的时候，匆匆完事。如果 loading 的 UI 比较小的话，可能不是那么让人讨厌，但想象一个全屏幕的 loading：它出现了一下子又消失了。你这个时候就不会觉得这是很好的用户体验了，反而觉得很蠢。
::NOTE：这里应该引用人机交互指南中，不同的响应延迟需要采取的措施::
所以总结两点，不分青红皂白就 loading，在高速网络下带来的问题

1. 出现 loading，反而让用户觉得变卡了
2. 闪烁的体验让人很分裂

## 一个已经存在的解决方案

React 用户应该都知道 `Suspense`，可惜的是它目前最大的用处仅仅是**Code Splitting**。似乎因为还存在一些不稳定的，React 还没有将它最强大的一面公布出来。当然这是后话，但是如果你看过
[Concurrent Rendering in React - Andrew Clark and Brian Vaughn - React Conf 2018](https://www.youtube.com/watch?v=ByBPyMBTzM0&t=1368s) 或者这个 [Demo](https://github.com/facebook/react/tree/master/fixtures/unstable-async/suspense) ，就知道 `ConcurrentMode` 配合 `Suspense 的 maxDuration` 就能解决上面的问题。比如这样一个场景

> 懒加载路由 A 的组件，500ms 内没有加载成功则显示 loading

这个通过未来的 React 可以轻松做到

```jsx
const LazyHome = lazy(() => import('./home'));

const App = () => {
  return (
    <ConcurrentMode>
      // 省去一些 Route 相关代码
      <Route
        path="/"
        render={props => {
          <Suspense maxDuration={500} fallback={<BeautifulLoading />}>
            <LazyHome {...props} />
          </Suspense>;
        }}
      />
    </ConcurrentMode>
  );
};
```

可是你给我一个现在用不了的解决方案不等于放屁么？根据[官方的说法](https://reactjs.org/blog/2018/11/27/react-16-roadmap.html#tldr)，等到 ConcurrentMode 的完成，至少也到 2019 年的 Q2。虽然一些强大的库，比如 rxjs，似乎也能轻松做到我们的需求，但是它不在讨论范围内。
所以接下来我们才进入本文的正题，**如何用 Promise.race 做到同样的效果**

你可以不用读完，直接看[完成代码](https://codesandbox.io/s/kxzxnnj8vr)就行了

## Promise 的解决方案

主要的实现思路就是通过 `Promise.race`，在**请求和超时**中竞争出优先被 settled 的那个 Promise，作出相应的逻辑。
为了实现的简单，超时的函数应该使用

```js
const timeout = ms => new Promise((_, reject) => setTimeout(reject, ms));
```

使用 reject 而不是 resolve 的好处，可以让代码更加简洁。因为进入 _fulfilled_ 的情况只有一种，那就是请求在超时之前返回了。而在 rejected 状态下，就是超时的逻辑了（**注意 ⚠️，这里不考虑请求异常的情况**）

根据上面的说法，很容易写出一个 naive 的实现

```js
try {
  const rep = await Promise.race([timeout(400), fetch(url)]);
  this.setState(rep);
} catch (e) {
  this.setState({ loading: true });
}
```

很显然，这不符合我们的要求。如果没有进入 `catch` 里，世界和平，但是如果进入 `catch` 里，谁帮我们继续 `this.setState(rep)` 呢？换句话说，它只把一个 loading 丢给你，其他就不管了！

当然这也很简单，我们改进一下

```js
try {
  const rep = await Promise.race([timeout(400), fetch(url)]);
  this.setState(rep);
} catch (e) {
  this.setState({ loading: true });
  const rep = await fetch(url);
  this.setState(rep);
}
```

嗯，感觉我是来搞笑的？这样做当然也不行啊，不是白白发了一次请求么，完全没有效果啊！！！
但是，其实我们已经接近那隧道尽头的光了。如果 `const rep = await fetch(url)` 它不会重新发送请求，而仅仅只是接着第一次调用 `fetch(url)` 的场景，继续运行的话，是不是就解决我们的问题了？

是的，我们只需要将 `fetch(url)` 保存下来，就可以做到了。这是最终实现

```js
try {
  const fetchPromise = fetch(url);
  const rep = await Promise.race([timeout(400), fetchPromise]);
  this.setState(rep);
} catch (e) {
  this.setState({ loading: true });
  const rep = await fetchPromise;
  this.setState(rep);
}
```

It’s Done 😎.

## 让它更加通用

上面的代码已经可以达到我们的目的了，可是它不够通用。我们可以写一个函数，它接收这个 fetch 已经超时时间作为参数，并返回一个新的函数。这样的话，就不需要写太多重复的代码了。

TODO
