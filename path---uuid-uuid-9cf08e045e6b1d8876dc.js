webpackJsonp([65931765013031],{523:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Yangkui's Blog",author:"Yang Kui"}},markdownRemark:{id:"/Users/yk/Documents/blog/src/pages/uuid/UUID.md absPath of file >>> MarkdownRemark",html:'<p>花了一个晚上看了一下 UUID 的实现源码. 发现 UUID 有 5 个版本, 其中的特点分别为:\nV1: 以<strong>机子的网卡和时间戳</strong>以及一些其他的东西作为因子来生成一个唯一的标识符\nV2: 没有提及\nV3: 为了方便同样的标识符生成同样的 uuid, 用 MD5 来 hash 标识符和命名空间\nV4: 生成一个 128 位的随机数来作为唯一标识符\nV5: 和 V3 相似, 不过使用 sha-1 算法, 让标识符更难被预测.</p>\n<p>如果我们仅仅只是为了生成一个唯一的标识符, 就用 V1 和 V4. 但是 V1 其实容易被预测, 所以现在已经不怎么用了, 更多的用 V4 的. 关于到底使用哪个, 可以看 <a href="https://stackoverflow.com/questions/20342058/which-uuid-version-to-use">stackoverflow</a> 的一个帖子.\n那么, UUID 的特点主要是分成:\n<code class="language-text">8-4-4-4-12</code> 的 16 进制表示来展现的, 对应的字节应该是 16(8+4+4+4+12 >> 1) 个. 当然最后会转化成字符串的话, 就变成 16 * 2 + 4(四个短横) 个了.\n其中, 第三部分的第一个字符用来表示算法的版本号, 所以 v4 的版本是 4. 而第四部分的第一位用来表示变种, 我没太搞懂这是什么鬼, 但是可能的取值只能为 <code class="language-text">9 0 a b</code>, 这可以通过 <code class="language-text">bit &amp; 0x3f | 0x80</code> 来做到的.</p>\n<p>我只看了 4 和 5 两个版本的实现, 除去 <code class="language-text">sha-1</code> 和 随机数生成器算法的话, 还是蛮简单的.😎</p>\n<h2>V4</h2>\n<p>V4 就是要求生成一个 128 位的伪随机数. 但是因为有 6 个 位会被强制使用(版本 4 位, 变种 2 位), 就剩下 122 位. 不过光是 122 位, 也就是 <code class="language-text">2 ^ 122</code> 次方, 再根据<strong>生日悖论</strong>, 我们大概知道, 这个世界上有 50% 的几率发生碰撞的概率大概是多少. 反正就是很小. 但是, 这就要求随机数代码的高质量了, 显然这个是交给数学家去实现的咯, 而 nodejs 也内置了相应的代码.\n所以说, V4 版本的实现就是, 使用 nodejs 生成一个 128 位的随机数. 再给固定的位置设置那 6 个 bit, 最后转成我们需要的字符串形式就可以咯!\n那么在 nodejs 这个平台上又会出现哪些问题呢?\n首先, 它的随机数发生器生成的是一个 Buffer 对象, 但是它还是能和数组一样取下标, 并不妨碍我们的正常使用.\n接下来就是 <em>特定位设置</em>, 代码如下</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// 6 就是第 7 个字节</span>\nrnds<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>rnds<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">&amp;</span> <span class="token number">0x0f</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0x40</span>\n<span class="token comment">// 同理第九个字节</span>\nrnds<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>rnds<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">&amp;</span> <span class="token number">0x3f</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0x80</span>\n</code></pre>\n      </div>\n<p>接下来就是将整个 Buffer 转成我们需要的字符串咯! 不过, 就和今天写颜色的代码碰到的问题一样, 对于小于 16 的数, 如果我们直接用 <code class="language-text">toString</code> 的话, 是不会自动补 0 的! 所以我们只能自己手动撸代码来保证 0 的出现. 显然, 只能使用字符串来填充这个 0 呢.\n这个库的实现很暴力, 但是也很巧妙</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> byteToHex <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">256</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  byteToHex<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">0x100</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>通过强制让数变成 3 位的十六进制, 这样就保证 0 时存在的, 然后不取高位, 真的棒!\n最后一步, 就是根据随机数里的值, 对应到这个 byteToHex 中来, 并在合适的位置插入 -, 整个 UUID 就生成咯!\n另外值得一提的是, 其实浏览器也支持一个 <code class="language-text">crypto</code> 的包了, 虽然只有一个函数, 叫做 <code class="language-text">getRandomValues</code>, 这个函数接受一个 <code class="language-text">TypedArray</code> 数组, 并且没有返回值, 属于<strong>mutable</strong>. 我们需要多大的尺寸, 多大的范围, 就传递相应的进去就行咯.</p>\n<p>这样的话, 似乎我也能自己写一个浏览器能用的 V4 版本的 UUID 咯 😎</p>\n<h2>V5</h2>\n<p>V5 要求必须有两个参数提供, <code class="language-text">name, namespace</code>. name 就是你想生成 uuid 的值, 而 namespace 则是一个 16 进制表示的, 16 个字节字符串.\n比如，我们相对我的名字进行解码，就可以 <code class="language-text">v5(&#39;YangKui&#39;, &#39;thisisanamespace&#39;)</code>;\n不过为了方便, 我们干脆用 V4 版本来生成. 但是，单纯的 UUID 是 36 个字节，所以需要先转成 bytes 形式。 可以使用正则表达式来替换.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">let</span> bytes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\nuuid<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/[a-zA-Z0-9]{2}/g</span><span class="token punctuation">,</span> hex <span class="token operator">=></span> bytes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span>hex<span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>同样的，我们还需要对 name 进行编码, 我们可以这样实现:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">stringToBytes</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  str <span class="token operator">=</span> <span class="token function">unescape</span><span class="token punctuation">(</span><span class="token function">encodeURLComponent</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// UTF8 escapse</span>\n  <span class="token keyword">return</span> Uint8Array<span class="token punctuation">.</span><span class="token keyword">from</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>str<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>i <span class="token operator">=></span> i<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>第一行的目的是生成一个都小于 255 的 UTF-8 编码, 像下面这样。</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/blogs/static/A38A178D-6DAC-4F8E-9EEC-001450B372AC-cb0e531a417dd01a2c6a222ff45b732a-e4ad5.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 344px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 12.790697674418606%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAAAsSAAALEgHS3X78AAAAqklEQVQI1z2MSw6CMBRF3Ynxj9IPpaUFBBWIA+e6AgfG/S/gWCBxcPJy3809C50X5IXH+YpQtyjjMC7EX0lmPWN/FJpUGawvMdahMhM7x/fz5vV6sj0kfxY+jGVGqHLqJnI2tBfLrSu43uyUi6A4N5qqzklSGRETUilOQs6y/WEW3u8aX6ZxKOh7TdPKiWFQdN0oklyuisfDEErBcrNjE8cjq92edWTOyXR/kytfVLd1sfsAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="A38A178D 6DAC 4F8E 9EEC 001450B372AC"\n        title=""\n        src="/blogs/static/A38A178D-6DAC-4F8E-9EEC-001450B372AC-cb0e531a417dd01a2c6a222ff45b732a-e4ad5.png"\n        srcset="/blogs/static/A38A178D-6DAC-4F8E-9EEC-001450B372AC-cb0e531a417dd01a2c6a222ff45b732a-e143d.png 148w,\n/blogs/static/A38A178D-6DAC-4F8E-9EEC-001450B372AC-cb0e531a417dd01a2c6a222ff45b732a-359a8.png 295w,\n/blogs/static/A38A178D-6DAC-4F8E-9EEC-001450B372AC-cb0e531a417dd01a2c6a222ff45b732a-e4ad5.png 344w"\n        sizes="(max-width: 344px) 100vw, 344px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>最后, 获得了 name 和 namespace 的编码值后, 只需要对 <code class="language-text">namespace.concat(name)</code> 调用 sha1, 就成了我们需要的 uuid 值， 然后和 v4 一样设置版本号和变种信息.\n至于 sha1 实现原理, 我不太明白, 不过 nodejs 提供了代码. 在它的 <code class="language-text">crypto</code> 模块中, 可以这样使用:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">crypto\n  <span class="token punctuation">.</span><span class="token function">createHash</span><span class="token punctuation">(</span><span class="token string">\'sha1\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span><span class="token string">\'hex\'</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>其中 bytes 就是我们要 hash 的部分. 所以为什么能提供一样的 UUID? 因为 name 和 namespace 都一样, 所以生成的就是一样的啦!\n不过, 我在看了 SHA-1 的源码后, 发现它本身就会对传进来的数据做同样的操作来保证都是 Uint8 类型, 所以说上面的 <code class="language-text">stringToBytes</code> 其实是可以去掉的.</p>',frontmatter:{title:"UUID",date:"2018/01/05"}}},pathContext:{slug:"/uuid/UUID/"}}}});
//# sourceMappingURL=path---uuid-uuid-9cf08e045e6b1d8876dc.js.map