webpackJsonp([0xfbb49da3ee22],{409:function(a,n){a.exports={data:{site:{siteMetadata:{title:"Yangkui's Blog",author:"Yang Kui"}},markdownRemark:{id:"/Users/yk/Documents/blog/src/pages/反转字符串/index.md absPath of file >>> MarkdownRemark",html:'<p>这个问题可能非常老，写过代码的都知道使用</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">str\n  <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>但是，需要注意的是，因为 JS 默认使用的是 UCS-2 来编码的，对于中文支持也貌似没问题。可是到了 Unicode 环境下，大量的 emoji，就会出问题咯。\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/blogs/static/A20289F2-4515-4E5E-9C91-1BF74DF84328-51b4d8cf4e13a6267e5cf72a02662488-fc90f.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 10.35294117647059%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsSAAALEgHS3X78AAAAd0lEQVQI1z2MywrCMBAA0zYbom03G1NBEB+ghwpV8Or//9eIET0MA3MYZzZx2h+x0dikzDLP9KvE7XLm9ZgYNJOSEmPEzCilVKsqOefa27bFOfelnxR3d8hTCFthnAe6q6CHNWUX8J0gInjvqz+EECq/3jTNf/gG3U8t3dxDYrkAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="A20289F2 4515 4E5E 9C91 1BF74DF84328"\n        title=""\n        src="/blogs/static/A20289F2-4515-4E5E-9C91-1BF74DF84328-51b4d8cf4e13a6267e5cf72a02662488-fb8a0.png"\n        srcset="/blogs/static/A20289F2-4515-4E5E-9C91-1BF74DF84328-51b4d8cf4e13a6267e5cf72a02662488-1a291.png 148w,\n/blogs/static/A20289F2-4515-4E5E-9C91-1BF74DF84328-51b4d8cf4e13a6267e5cf72a02662488-2bc4a.png 295w,\n/blogs/static/A20289F2-4515-4E5E-9C91-1BF74DF84328-51b4d8cf4e13a6267e5cf72a02662488-fb8a0.png 590w,\n/blogs/static/A20289F2-4515-4E5E-9C91-1BF74DF84328-51b4d8cf4e13a6267e5cf72a02662488-fc90f.png 850w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n就像上面显示的这样。那改怎么解决呢？在 ES6 之前，可能需要通过对 Unicode 内部编码的了解来特别规定某个范围改做什么。但是 ES6 支持了 <code class="language-text">codePoint</code>，我们就不要这种复杂的方式了！\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/blogs/static/3C5A8FC8-2D99-4F4E-907C-89276B8A33BF-d6f147eaaf32b6c07bc00e9b8b362ce8-db317.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 12.520064205457466%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAAAsSAAALEgHS3X78AAAAjElEQVQI15WMywrCMBBFo2byaJKmtaK4KBZKBQtu3Pr/33VsAv0AFwdm5ty5Kl4ibvAMY89rHQmp5/28c05HlFL/szxnrtONdV34fh6ctKPLkRQ8MUZyzjjnaJqmEkKgbVtSStXtt7IbY1DSOeZlQgbDwQqi9VaqN2mx1taHEiyISC3f8d7XTHFlLv4H44hDSNats2QAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="3C5A8FC8 2D99 4F4E 907C 89276B8A33BF"\n        title=""\n        src="/blogs/static/3C5A8FC8-2D99-4F4E-907C-89276B8A33BF-d6f147eaaf32b6c07bc00e9b8b362ce8-fb8a0.png"\n        srcset="/blogs/static/3C5A8FC8-2D99-4F4E-907C-89276B8A33BF-d6f147eaaf32b6c07bc00e9b8b362ce8-1a291.png 148w,\n/blogs/static/3C5A8FC8-2D99-4F4E-907C-89276B8A33BF-d6f147eaaf32b6c07bc00e9b8b362ce8-2bc4a.png 295w,\n/blogs/static/3C5A8FC8-2D99-4F4E-907C-89276B8A33BF-d6f147eaaf32b6c07bc00e9b8b362ce8-fb8a0.png 590w,\n/blogs/static/3C5A8FC8-2D99-4F4E-907C-89276B8A33BF-d6f147eaaf32b6c07bc00e9b8b362ce8-526de.png 885w,\n/blogs/static/3C5A8FC8-2D99-4F4E-907C-89276B8A33BF-d6f147eaaf32b6c07bc00e9b8b362ce8-fa2eb.png 1180w,\n/blogs/static/3C5A8FC8-2D99-4F4E-907C-89276B8A33BF-d6f147eaaf32b6c07bc00e9b8b362ce8-db317.png 1246w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>简单粗暴。</p>',frontmatter:{title:"反转字符串",date:"2018/01/12"}}},pathContext:{slug:"/反转字符串/"}}}});
//# sourceMappingURL=path---反转字符串-9e4906597303847d9bcc.js.map