(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{233:function(e,t,n){"use strict";n.r(t);n(15);var a=n(0),r=n.n(a),o=n(66),l=n(236),i=n(237),c=function(e){var t=e.previous,n=e.next;return r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,t&&r.a.createElement(i.a,{to:t.fields.slug,rel:"prev"},"← ",t.frontmatter.title)),r.a.createElement("li",null,n&&r.a.createElement(i.a,{to:n.fields.slug,rel:"next"},n.frontmatter.title," →")))},s=n(241);n.d(t,"pageQuery",function(){return u});t.default=function(e){var t=e.location,n=e.pageContext,i=e.data,u=i.markdownRemark,m=i.site.siteMetadata.title;return Object(a.useEffect)(function(){document.title="😏  "+u.frontmatter.title},[]),r.a.createElement(s.a,{location:t,title:m},r.a.createElement("hgroup",null,r.a.createElement("h1",{style:{color:"var(--text-title)",transition:"color 0.3s ease-out, background 0.3s ease-out"}},u.frontmatter.title),r.a.createElement("time",{style:Object.assign({},Object(o.b)(-.25),{display:"block",marginBottom:Object(o.a)(1),marginTop:Object(o.a)(-1)})},u.frontmatter.date)),r.a.createElement("main",{style:{fontSize:Object(o.a)(.6)},dangerouslySetInnerHTML:{__html:u.html}}),r.a.createElement("hr",{style:{marginBottom:Object(o.a)(1)}}),r.a.createElement("footer",null,r.a.createElement(l.a,null),r.a.createElement("br",null),r.a.createElement(c,n)))};var u="332236514"},235:function(e,t,n){var a;e.exports=(a=n(239))&&a.default||a},236:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(108),l=n(66),i=n(238),c=n.n(i);function s(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  display: flex;\n  flex-direction: column;\n  h3 {\n    margin: 8px 0;\n    font-size: 16px;\n  }\n"]);return s=function(){return e},e}var u=o.a.aside(s());t.a=function(){return r.a.createElement("figure",{style:{display:"flex",alignItems:"center"}},r.a.createElement("img",{src:c.a,alt:"A cat named musa",style:{marginRight:Object(l.a)(.5),marginBottom:0,borderRadius:"50%",width:Object(l.a)(2),height:Object(l.a)(2)}}),r.a.createElement(u,null,r.a.createElement("h3",null,r.a.createElement("span",{role:"img","aria-label":"personal blogs"},"👤 📜")," ","by ",r.a.createElement("a",{href:"http://github.com/thoamsy"},"thoamsy")),r.a.createElement("h3",null,"Write some personal summary")))}},237:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(83),l=n.n(o);n.d(t,"a",function(){return l.a});n(235),n(12).default.enqueue,r.a.createContext({})},238:function(e,t,n){e.exports=n.p+"static/avatar-6c83ccb0db60a97539ade1fe12738717.jpg"},239:function(e,t,n){"use strict";n.r(t);n(15);var a=n(0),r=n.n(a),o=n(116);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null}},240:function(e,t){!function(e){"object"!=typeof globalThis&&(e.defineProperty(e.prototype,"foobar",{get:function(){this.globalThis=this,delete e.prototype.foobar},configurable:!0}),foobar)}(Object)},241:function(e,t,n){"use strict";n(15);var a=n(237),r=(n(230),n(0)),o=n.n(r),l=n(108),i=(n(240),n(66)),c=n(236);function s(){var e=m(["\n  .page-enter & {\n    transform: translateX(100%);\n    opacity: 0;\n    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);\n  }\n\n  .page-enter-active & {\n    opacity: 1;\n    transform: translateX(0);\n  }\n\n  .page-exit & {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  .page-exit-active & {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n"]);return s=function(){return e},e}function u(){var e=m(["\n  .page-enter & {\n    opacity: 0;\n    transform: translateX(-100%);\n    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);\n  }\n  .page-enter-active & {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  .page-exit & {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  .page-exit-active & {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n"]);return u=function(){return e},e}function m(e,t){return t||(t=e.slice(0)),e.raw=t,e}var f=l.a.div(u()),p=l.a.div(s());function g(){var e=d(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2.625rem;\n"]);return g=function(){return e},e}function b(){var e=d(["\n  box-shadow: none;\n  text-decoration: none;\n  color: var(--text-title);\n"]);return b=function(){return e},e}function d(e,t){return t||(t=e.slice(0)),e.raw=t,e}var y=Object(l.a)(a.a).attrs({to:"/"})(b()),v=l.a.header(g()),E=function(e){e.location;var t=e.isRoot,n=e.title;return t?o.a.createElement("h1",{style:Object.assign({},Object(i.b)(1),{marginBottom:0,marginTop:0})},o.a.createElement(y,null,n)):o.a.createElement("h3",{style:{fontFamily:"sans-serif",marginTop:0,marginBottom:Object(i.a)(-1)}},o.a.createElement(y,null,n))};t.a=function(e){var t=e.location,n=e.title,a=e.children,r="/";r="/blogs/";var l=t.pathname===r,i=l?f:p;return o.a.createElement(i,null,o.a.createElement(v,null,o.a.createElement(E,{title:n,location:t,isRoot:l})),l&&o.a.createElement(c.a,null),a)}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-78b5db0cb92d803a70b6.js.map