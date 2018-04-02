webpackJsonp([35672907685451],{521:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Yangkui's Blog",author:"Yang Kui"}},markdownRemark:{id:"/Users/yk/Documents/blog/src/pages/parcel/Parcel 📦 和 React ⚛️ 的使用.md absPath of file >>> MarkdownRemark",html:'<p>Parcel 这种工具虽然号称零配置, 但是在 React 相关开关的时候还需要一些必要的配置才能让整个代码真的跑起来. 特别是如果需要 <strong>Hot Reloader</strong> 的时候. 如果使用 <a href="https://github.com/facebookincubator/create-react-app">create-react-app</a> 确实很方便, 这也是入门和新项目首选. 但是呢, 想上面提到的 <code class="language-text">hot reloader</code> 默认是不支持的, 除非自己先 <code class="language-text">yarn eject</code> <strong>弹射</strong> 出去, 再手动配置 webpack 文件才行! 这个虽然文档上也有详细的记载, 但是感觉就没有那份纯粹性了.\n所以使用 parcel 自己手动来配置的话, 更有一种成就感.</p>\n<p>Parcel 基本教程在之前的文章 [[Parcel 的使用]] 中有简单的介绍, 下面直接进入使用环节.</p>\n<hr>\n<h2>Babel 的基本配置</h2>\n<h3>一些背景介绍</h3>\n<p>我们知道, React 和 Babel 是互相离不开的, 首先 <code class="language-text">JSX</code> 需要 Babel 来转译, 比如</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span> <span class="token operator">=></span> React<span class="token punctuation">.</span><span class="token function">creataElement</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>除了这个, React 对新语法的依赖也蛮大的, 比如 <code class="language-text">Object Spread</code> 语法, 这个在最新的浏览器和 Node 环境已经支持了, 但是还没有完全成为标准, 应该会在今年的 ES9 成为标准, 所以我们还是要依赖 Babel.\n还有 React 组件中大量的 <code class="language-text">this.setState</code>, 在 JS 中 <code class="language-text">this</code> 很容易丢失, 所以我们需要依赖箭头函数, 但是在 <code class="language-text">render</code> 大量使用箭头函数又不是一个好习惯, 一是每次 render 都会生成新的函数, 这又导致依赖这个函数作为 <code class="language-text">props</code> 的组件又一次被渲染.\n一个妥协的方法是在 <code class="language-text">constructor</code> 中<strong>不厌其烦</strong>的写 <code class="language-text">this.foo = this.foo.bind(this)</code>\n先解释一下这样可行的原因, 在 <code class="language-text">class</code> 中, 我们定义一个函数比如</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>\n  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>这个 foo 其实是属于 <code class="language-text">A.prototype</code> 的, 如果转译成 ES5 语法, 大概类似于</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>A<span class="token punctuation">,</span> <span class="token string">\'foo\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n\tvalue<span class="token punctuation">:</span> …<span class="token punctuation">,</span>\n\twriteable<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\tconfigurable<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\tenumerable<span class="token punctuation">:</span> <span class="token boolean">false</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>所以说, 等号右边的 <code class="language-text">this.foo</code> 其实引用的是原型的 foo, 这个时候再赋值给 <code class="language-text">this.foo</code> 其实是没毛病的, 因为这个时候才是赋给 <code class="language-text">this</code> 自己.</p>\n<p>但是, 如果要我们写这个无聊的代码几百次的话, 就再也不想写了. 于是乎有一种新的语法, 英文似乎叫做 <code class="language-text">Class Properties</code>, 支持直接使用 class 语法定义属性, 而不在属于 prototype. 这样就可以写出</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>的语法. 于是我们不仅干掉了, 无聊的 <code class="language-text">bind</code>, 还干掉了整个 <code class="language-text">constructor</code>, 多酷!!!\n还有一种语法, <code class="language-text">::</code>, 这里不介绍.</p>\n<h3>babelrc</h3>\n<p>配置 babel 依赖于一个叫做 <code class="language-text">.babelrc</code>文件, 在 VS Code 中, 如果安装了<strong>文件图标主题</strong>的话, 一旦创建, 会有一个特定的 logo 图标来告诉我们, 没有拼错.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/blogs/static/F82820D6-9363-4A17-B637-C84FE7E037CE-6e66289750658579d27318a94e357528-83253.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 350px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 34.85714285714286%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAAA5ElEQVQoz3WRTQ6CMBCFOQZRBAr+wZQYlagokaigEqIxrl14Bu+fPGvFBhEXL32dmX6dTjW7x2F1qRSH3aO3uq+V45P/+HqsntOqwHeQYDhcwptA/8ANQF9CTJcjnA7g9Knc++g4npLBhirW1KUC2gLYYgGuOcPtYkG3CAM+wSLeIZhEWCUZwihBtE4xW20wnsUiP/3foekSmOjqcW/hvHegmwQahUh2OTZZgfR4kv5QXDCPt1gKcDBeyG6rY/uaoSU8BV5ZwPH9YVRe7Eup59ZmqskCMQ8p4dvMV4dM16v4Jv3mn8p6zgd6NQLAAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="F82820D6 9363 4A17 B637 C84FE7E037CE"\n        title=""\n        src="/blogs/static/F82820D6-9363-4A17-B637-C84FE7E037CE-6e66289750658579d27318a94e357528-83253.png"\n        srcset="/blogs/static/F82820D6-9363-4A17-B637-C84FE7E037CE-6e66289750658579d27318a94e357528-e7b32.png 148w,\n/blogs/static/F82820D6-9363-4A17-B637-C84FE7E037CE-6e66289750658579d27318a94e357528-627a4.png 295w,\n/blogs/static/F82820D6-9363-4A17-B637-C84FE7E037CE-6e66289750658579d27318a94e357528-83253.png 350w"\n        sizes="(max-width: 350px) 100vw, 350px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n配置 react 的方式, 其实十分简单. 首先需要转译 JSX, 但是 JSX 的转移又依赖于 es2015, 所以我们两个都需要转译. 我并没有多长 babel 使用经验, 反正现在有了 <code class="language-text">presets</code>, 而且淘汰了 ES2015, ES2016 这些 presets, 统一使用 <code class="language-text">env</code> preset, 所以 babel 的配置变成了下面这样</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"presets"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"env"</span><span class="token punctuation">,</span> <span class="token string">"react"</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>如果有影响的话, 其实还有一个 <code class="language-text">babel-preset-react-app</code>, 它和上面的 react 的区别就是: react-app 是使用在 <code class="language-text">create-react-app</code>中的配置, 相比 react 会有一些加成, 下面会讲到.</p>\n<p>OK, 其实有了这两个就能写 react 了. 自己写好必要的组件, 和之前一样使用 parcel 就能启动. 但是, 我们还不能使用刚刚提到的那些新语法. 甚至连 React 大量依赖的 <code class="language-text">{...obj}</code> 也不行. 这个时候就还需要安装新的 preset: <code class="language-text">stage-2 stage-3</code>\n于是乎, 为了安装这些, 我们需要运行</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">yarn add -D babel-preset-env babel-preset-react babel-preset-stage-2 babel-preset-stage-3\n</code></pre>\n      </div>\n<p>那这样就能开心的写 React 代码了吗 🧐 还不行, 我目前也搞不清楚为什么, 写 <code class="language-text">async await</code>话, 还是会报错, 尽管这个主流浏览器已经都支持了. 所以, 我在 Google 了一番后, 发现还需要安装一个 babel plugin.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">yarn add -D babel-plugin-transform-runtime\n</code></pre>\n      </div>\n<p>而且这个 runtime 的配置蛮复杂的, 这里不详细介绍了, 大概是这样.</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">"transform-runtime"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    <span class="token property">"polyfill"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token property">"helpers"</span><span class="token operator">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<p>注意, 这段代码紧跟 babelrc 中的 presets 之后另起一行.</p>\n<p>当完全了这些之后我们就可以没有任何问题的写 React ⚛️ 了 😎😎</p>\n<hr>\n<h2>热加载</h2>\n<p>当我确定我要使用热加载的时候, 是因为我看了 Dan 的视频, 以及他说的一段话</p>\n<blockquote>\n<p>I want to encourage you to actually spend time working on developer tools because before you can optimize your app, you should optimize your workflow so you have more time to spend working on your app. Because once enough frustration is gone, your programming actually feels fun again just like it used to do when the tools were simple.</p>\n</blockquote>\n<p>最重要的意思就是, 花点时间研究 🔧 能为我们省下更多的时间提高自己. 于是乎, 我就花了一点时间, 嗯, 也不是一点, 三个小时吧. 终于搞明白, 怎么在 parcel 中使用了. 因为和官方文档有点区别, parcel 的文档介绍的又十分简陋, 再加上 parcel 缓存的问题, 所以被坑了很久. 不过终于还是搞定了. 下面总结一下热加载的配置.</p>\n<p><a href="https://github.com/gaearon/react-hot-loader">react-hot-loader</a> 由 <em>Dan gaearon</em> 开发并开源, 对, 就是 redux 的作者, 是一个特别帅的英国佬. 当然这不是我们讨论的重点, 目前使用的是 V3 版本, V4 在配置上有非常大的提升, 但是因为 parcel 不兼容这个. 所以我们还是使用主流的配置.</p>\n<p>文档该说的都说了, 下面只针对在 parcel 上该怎么用来解释.\n还是安装它</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">yarn add -D react-hot-loader\n</code></pre>\n      </div>\n<p>之后在 <code class="language-text">babelrc</code> 中的 plugins 中配置. 最终的版本为:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"presets"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"env"</span><span class="token punctuation">,</span> <span class="token string">"react"</span><span class="token punctuation">,</span> <span class="token string">"stage-2"</span><span class="token punctuation">,</span> <span class="token string">"stage-3"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span>\n      <span class="token string">"transform-runtime"</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">"polyfill"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n        <span class="token property">"helpers"</span><span class="token operator">:</span> <span class="token boolean">false</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token string">"react-hot-loader/babel"</span><span class="token punctuation">]</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>还没完, 接下来只要在 <code class="language-text">index.js</code> 做一些小操作, 就可以开始了.\n<code class="language-text">index.js</code> 一般作为入口点, 换句话话, 这里应该是你整个项目配置的地方, 也是 <code class="language-text">ReactDOM.render</code>调用的地方, 同时也是你的 html 文件, 应该引用的 JS 文件.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">\'./App\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> AppContainer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-hot-loader\'</span>\n<span class="token keyword">import</span> <span class="token string">\'react-hot-loader/patch\'</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">render</span> <span class="token operator">=</span> Component <span class="token operator">=></span> <span class="token punctuation">{</span>\n  ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>AppContainer<span class="token operator">></span>\n      <span class="token operator">&lt;</span>Component <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>AppContainer<span class="token operator">></span><span class="token punctuation">,</span>\n    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'#root\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">render</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>\nmodule<span class="token punctuation">.</span>hot<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>这是代码的必备成分, <code class="language-text">App</code> 就是你所有代码的合成的组件, render 函数无非就是一个小小的包装. 而 <code class="language-text">AppContainer</code> 就是整个热加载的<strong>能量源泉</strong>. 而 <code class="language-text">module.hot.accept</code> 里的回调, 就是整个源泉的能量使用者.\n和文档中不一样的是, 文档中 <code class="language-text">accept</code> 接受两个参数, 第二个才是回调. 也是我一直被坑的地方, 可能是因为 parcel 针对这个做了某些小小的优化吧.</p>\n<p>这些都写好了, 就可以开始<strong>热加载</strong>之旅了!\n那怎么知道自己的热加载是否成功了呢? 之前提到过, 热加载的前提是不用刷新界面, 因为刷新的话就会丢失所有的状态咯. 所以成功的关键就是<strong>状态没有丢失</strong>.</p>\n<p>不过这句话不是那么的明显 🙂, 其实比较的明显的检测方法就是:\n有一个 input 和任意的 label. 如果我们 input 中填写了某些信息, 再去 label 中修改, input 中的数据没有丢失的话, 就说明热加载成功了. 这真的很重要, 在写表单类似的程序的时候, 我们需要不断的输入然后刷新, 光光这个时间就不知道被浪费了多少.</p>\n<p>补充：这个热加载似乎会引入一个 bug</p>\n<blockquote>\n<p>无法在 <code class="language-text">async</code> 函数中找到 <code class="language-text">this</code><br>\n我不太清楚这是什么原因，在不需要重度依赖 async 的情况下，还是可以接受的。另外，估计 v4 版本已经解决了这个问题吧。感谢开源让生活更美好, 也让我们知道牛逼的程序员到处都是.</p>\n</blockquote>',frontmatter:{title:"Parcel 📦 和 React ⚛️ 的使用",date:"2018/01/07"}}},pathContext:{slug:"/parcel/Parcel 📦 和 React ⚛️ 的使用/"}}}});
//# sourceMappingURL=path---parcel-parcel-📦-和-react-⚛️-的使用-23c98bfdfe44cab2790d.js.map