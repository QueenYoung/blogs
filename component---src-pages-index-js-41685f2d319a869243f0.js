(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return h});n(40),n(42),n(190),n(196);var a=n(205),r=n(39),c=n.n(r),o=n(0),i=n.n(o),l=n(197),s=n.n(l),u=n(187),d=n(28),m="undefined"!=typeof window?window.localStorage:{getItem:function(){},setItem:function(){}},f=function(e){var t=e.to,n=e.title,a=e.date,r=e.spoiler;return i.a.createElement("article",null,i.a.createElement("h3",{className:"blog-index",style:{marginBottom:Object(d.a)(.25)}},i.a.createElement(c.a,{tabIndex:-1,style:{boxShadow:"none"},to:t},n)),i.a.createElement("time",null,i.a.createElement("small",null,a)),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:r}}))};t.default=function(e){var t=e.location,n=e.data,r=e.navigate,c=n.site.siteMetadata.title,l=n.allMarkdownRemark.edges,d=Object(o.useRef)(),h=Object(o.useRef)(+m.getItem("selectedIndex")||-1);Object(o.useEffect)(function(){var e=h.current;d.current&&!Number.isNaN(e)&&-1!==e&&(d.current.firstChild.children[e].focus(),m.setItem("selectedIndex",null))},[d]);var g=Object(o.useRef)(),b=Object(o.useCallback)(function(e){var t=e.key.toLowerCase(),n=h.current;switch(t){case"tab":e.preventDefault();break;case"arrowdown":case"j":n<l.length-1&&(h.current=++n),d.current.firstChild.children[n].focus();break;case"arrowup":case"k":if(n<1)return;h.current=--n,d.current.firstChild.children[n].focus(),n||document.body.scrollIntoView();break;case"g":e.shiftKey?h.current=n=l.length-1:e.key===g.current.key&&e.metaKey===g.current.metaKey&&(h.current=n=0),d.current.firstChild.children[n].focus()}g.current=e},[l.length]);return Object(o.useEffect)(function(){return window.addEventListener("keydown",b),function(){window.removeEventListener("keydown",b)}},[]),i.a.createElement(u.a,{location:t,title:c},i.a.createElement(s.a,{title:c,htmlAttributes:{lang:"zh-cn"}}),i.a.createElement("nav",{ref:d},i.a.createElement(a.a,{defaultIsOpen:!0,initialIsOpen:!0,itemToString:function(e){return e?e.title:""}},function(e){var n=e.getMenuProps,a=e.getItemProps;return i.a.createElement("ol",n({},{suppressRefError:!0}),l.map(function(e,n){var c=e.node,o=c.fields.slug,l=c.frontmatter,s=l.title,u=void 0===s?o:s,d=l.spoiler,h=l.date;return i.a.createElement("li",Object.assign({tabIndex:0},a({key:c.fields.slug,index:n,onKeyDown:function(e){switch(e.preventDefault(),e.key.toLowerCase()){case"enter":case" ":m.setItem("selectedIndex",n),r((t.pathname+o).replace(/\/{2}/g,"/"))}},item:c.frontmatter})),i.a.createElement(f,{to:o,title:u,date:h,spoiler:d||c.excerpt}))}))})))};var h="2168062249"},181:function(e,t,n){var a;e.exports=(a=n(185))&&a.default||a},182:function(e,t,n){"use strict";var a=n(64),r=n.n(a),c=n(0),o=n.n(c),i=n(65),l=n(28),s=n(184),u=n.n(s);function d(){var e=r()(["\n  display: flex;\n  flex-direction: column;\n  h3 {\n    margin: 8px 0;\n    font-size: 16px;\n  }\n"]);return d=function(){return e},e}var m=i.a.aside(d());t.a=function(){return o.a.createElement("figure",{style:{display:"flex",alignItems:"center"}},o.a.createElement("img",{src:u.a,alt:"A cat named musa",style:{marginRight:Object(l.a)(.5),marginBottom:0,borderRadius:"50%",width:Object(l.a)(2),height:Object(l.a)(2)}}),o.a.createElement(m,null,o.a.createElement("h3",null,o.a.createElement("span",{role:"img","aria-label":"personal blogs"},"👤 📜")," ","by ",o.a.createElement("a",{href:"http://github.com/thoamsy"},"thoamsy")),o.a.createElement("h3",null,"Write some personal summary")))}},183:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(3),o=n.n(c),i=n(39),l=n.n(i);n.d(t,"a",function(){return l.a});n(181),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},184:function(e,t,n){e.exports=n.p+"static/avatar-6c83ccb0db60a97539ade1fe12738717.jpg"},185:function(e,t,n){"use strict";n.r(t);n(40);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),i=n(70),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},186:function(e,t){!function(e){"object"!=typeof globalThis&&(e.defineProperty(e.prototype,"foobar",{get:function(){this.globalThis=this,delete e.prototype.foobar},configurable:!0}),foobar)}(Object)},187:function(e,t,n){"use strict";n(40);var a=n(64),r=n.n(a),c=n(183),o=(n(174),n(0)),i=n.n(o),l=n(65),s=(n(186),n(28)),u=n(182),d=n(93),m=n.n(d),f=(n(175),function(){});var h=function e(t){var n=t.onChange,a=m()(t,["onChange"]),r=a.className,c=(a.icons,a.disabled),l=a.onFocus,s=a.checked,u=m()(a,["className","icons","disabled","onFocus","checked"]),d=Object(o.useRef)(null),h=Object(o.useRef)({moved:!1,previouslyChecked:!(!a.checked&&!a.defaultChecked),touchMoved:!1,startX:null,hadFocusAtTouchStart:!1,touchStarted:!1}),g=Object(o.useState)(!1),b=g[0],v=g[1],p=Object(o.useCallback)(function(e){var t=d.current;if(h.current.previouslyChecked=t.checked,e.target!==t&&h.current.moved)return e.preventDefault(),t.focus(),void t.click();n(!t.checked)},[n]),E=Object(o.useCallback)(function(e){l&&l(e),h.current.hadFocusAtTouchStart=!0,v(!0)},[l]),y=function(t){var n=a.icons;return n?void 0===n[t]?e.defaultProps.icons[t]:n[t]:null},k="react-toggle"+(s?" react-toggle--checked":"")+(b?" react-toggle--focus":"")+(c?" react-toggle--disabled":"")+(r?" "+r:"");return i.a.createElement("div",{className:k,onClick:p},i.a.createElement("div",{className:"react-toggle-track"},i.a.createElement("div",{className:"react-toggle-track-check"},y("checked")),i.a.createElement("div",{className:"react-toggle-track-x"},y("unchecked"))),i.a.createElement("div",{className:"react-toggle-thumb"}),i.a.createElement("input",Object.assign({},u,{checked:s,onChange:f,ref:d,onFocus:E,className:"react-toggle-screenreader-only",type:"checkbox","aria-label":"Switch between Dark and Light mode"})))};function g(){var e=r()(["\n  .page-enter & {\n    animation: "," 0.4s forwards;\n  }\n  .page-exit & {\n    animation: "," 0.4s forwards;\n  }\n"]);return g=function(){return e},e}function b(){var e=r()(["\n  .page-enter & {\n    animation: "," 0.4s forwards;\n  }\n  .page-exit & {\n    animation: "," 0.4s forwards;\n  }\n"]);return b=function(){return e},e}function v(){var e=r()(["\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(100%, 0, 0);\n  }\n"]);return v=function(){return e},e}function p(){var e=r()(["\n  from {\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n"]);return p=function(){return e},e}function E(){var e=r()(["\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(-100%, 0, 0);\n  }\n"]);return E=function(){return e},e}function y(){var e=r()(["\n  from {\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n"]);return y=function(){return e},e}var k=Object(l.b)(y()),w=Object(l.b)(E()),j=Object(l.b)(p()),O=Object(l.b)(v()),x=l.a.div(b(),k,w),I=l.a.div(g(),j,O);function R(){var e=r()(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2.625rem;\n"]);return R=function(){return e},e}function C(){var e=r()(["\n  box-shadow: none;\n  text-decoration: none;\n  color: var(--textTitle);\n"]);return C=function(){return e},e}var N=Object(l.a)(c.a).attrs({to:"/"})(C()),S=l.a.header(R()),T=function(e){e.location;var t=e.isRoot,n=e.title;return t?i.a.createElement("h1",{style:Object.assign({},Object(s.b)(1),{marginBottom:0,marginTop:0})},i.a.createElement(N,null,n)):i.a.createElement("h3",{style:{fontFamily:"sans-serif",marginTop:0,marginBottom:Object(s.a)(-1)}},i.a.createElement(N,null,n))},_=function(e){var t,n=e.location,a=e.title,r=e.isRoot,c=Object(o.useState)(function(){return"undefined"!=typeof localStorage&&"dark"===(t=localStorage.getItem("theme"))}),l=c[0],s=c[1];return Object(o.useEffect)(function(){var e=function(e){var t=e.matches;document.body.className=t?"dark":"light",s(t)},n=window.matchMedia("(prefers-color-scheme: dark)");return n&&n.addListener(e),e({matches:void 0===t?n.matches:l}),function(){return n&&n.removeListener(e)}},[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(S,null,i.a.createElement(T,{title:a,location:n,isRoot:r}),i.a.createElement(h,{checked:l,icons:{checked:i.a.createElement("span",null,"🌚"),unchecked:i.a.createElement("span",null,"🌞")},onChange:function(e){var t=e?"dark":"light";document.body.className=t,s(e),localStorage.setItem("theme",t)}})),r&&i.a.createElement(u.a,null))};t.a=function(e){var t=e.location,n=e.title,a=e.children,r="/";void 0!==globalThis.__PATH_PREFIX__&&(r=globalThis.__PATH_PREFIX__+"/");var c=t.pathname===r,o=c?x:I;return i.a.createElement(o,null,i.a.createElement(_,{isRoot:c,title:n,location:t}),a)}}}]);
//# sourceMappingURL=component---src-pages-index-js-41685f2d319a869243f0.js.map