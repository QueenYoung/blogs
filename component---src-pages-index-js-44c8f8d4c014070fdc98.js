(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return h});var n=a(0),c=a.n(n),r=a(7),o=a.n(r),l=a(171),u=a.n(l),i=a(153),s=a(151),d=a(150);t.default=function(e){var t=e.location,a=e.data,n=a.site.siteMetadata.title,r=a.allMarkdownRemark.edges;return c.a.createElement(i.a,{location:t,title:n},c.a.createElement(u.a,{title:n,htmlAttributes:{lang:"zh-cn"}}),c.a.createElement(s.a,null),r.map(function(e){var t=e.node,a=t.frontmatter,n=a.title,r=void 0===n?t.fields.slug:n,l=a.spoiler,u=a.date;return c.a.createElement("div",{key:t.fields.slug},c.a.createElement("h3",{className:"blog-index",style:{marginBottom:Object(d.a)(.25)}},c.a.createElement(o.a,{style:{boxShadow:"none"},to:t.fields.slug},r)),c.a.createElement("small",null,u),c.a.createElement("p",{dangerouslySetInnerHTML:{__html:l||t.excerpt}}))}))};var h="2168062249"},150:function(e,t,a){"use strict";a.d(t,"a",function(){return u}),a.d(t,"b",function(){return i});var n=a(154),c=a.n(n),r=a(155),o=a.n(r);a(156);o.a.overrideThemeStyles=function(){return{a:{color:"var(--textLink)"},hr:{background:"var(--hr)"},"a.gatsby-resp-image-link":{boxShadow:"none"},"a.anchor":{boxShadow:"none"},'a.anchor svg[aria-hidden="true"]':{stroke:"var(--textLink)"},"p code":{fontSize:"1rem"},"h1 code, h2 code, h3 code, h4 code, h5 code, h6 code":{fontSize:"inherit"},"li code":{fontSize:"1rem"},blockquote:{color:"inherit",borderLeftColor:"inherit",opacity:"0.8"},"blockquote.translation":{fontSize:"1em"}}},delete o.a.googleFonts;var l=new c.a(o.a);var u=l.rhythm,i=l.scale},151:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(152),o=a.n(r),l=a(150);t.a=function(){return c.a.createElement("div",{style:{display:"flex",alignItems:"center"}},c.a.createElement("img",{src:o.a,alt:"A cat named musa",style:{marginRight:Object(l.a)(.5),marginBottom:0,borderRadius:"50%",width:Object(l.a)(2),height:Object(l.a)(2)}}),c.a.createElement("h4",{style:{margin:0}},"Just Happy"))}},152:function(e,t,a){e.exports=a.p+"static/avatar-6c83ccb0db60a97539ade1fe12738717.jpg"},153:function(e,t,a){"use strict";a(25);var n=a(157),c=a.n(n),r=a(0),o=a.n(r),l=a(160),u=a(74),i=a(76),s=a.n(i),d=(a(158),function(){});function h(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}var m=function e(t){var a=t.onChange,n=s()(t,["onChange"]),c=Object(r.useRef)(null),l=Object(r.useRef)({moved:!1,previouslyChecked:!(!n.checked&&!n.defaultChecked),touchMoved:!1,startX:null,hadFocusAtTouchStart:!1,touchStarted:!1}),u=Object(r.useState)(!1),i=u[0],m=u[1],g=Object(r.useCallback)(function(e){var t=c.current;if(l.current.previouslyChecked=t.checked,e.target!==t&&l.current.moved)return e.preventDefault(),t.focus(),void t.click();a(!t.checked)},[c,l]),f=Object(r.useCallback)(function(e){Object.assign(l.current,{startX:h(e).x,touchStarted:!0,hadFocusAtTouchStart:i}),m(!0)},[l]),b=Object(r.useCallback)(function(e){if(l.current.touchStarted){l.current.touchMoved=!0;var t=l.current.startX;if(null!=t){var n=h(e).x;S&&n+15<t?(a(!1),l.current.startX=n):!S&&n-15>t&&(a(!0),l.current.startX=n)}}},[l]),v=Object(r.useCallback)(function(e){var t=l.current,a=t.touchMoved,n=t.startX,r=t.previouslyChecked,o=t.hadFocusAtTouchStart;if(a){var u=c.current;e.preventDefault(),null!=n&&(r!==S&&u.click(),Object.assign(l.current,{touchedStarted:!1,startX:null,touchMoved:!1})),o||m(!1)}},[l]),k=Object(r.useCallback)(function(){var e=l.current,t=e.startX,a=e.hadFocusAtTouchStart;null!=t&&Object.assign(l.current,{touchStarted:!1,startX:null,touchMoved:!1}),a&&m(!1)},[l]),p=Object(r.useCallback)(function(e){n.onFocus&&n.onFocus(e),l.current.hadFocusAtTouchStart=!0,m(!0)},[l]),y=Object(r.useCallback)(function(e){n.onBlur&&n.onBlur(e),l.hadFocusAtTouchStart=!1,m(!1)},[l]),j=function(t){var a=n.icons;return a?void 0===a[t]?e.defaultProps.icons[t]:a[t]:null},E=n.className,O=(n.icons,n.disabled),S=n.checked,x=s()(n,["className","icons","disabled","checked"]),w="react-toggle"+(S?" react-toggle--checked":"")+(i?" react-toggle--focus":"")+(O?" react-toggle--disabled":"")+(E?" "+E:"");return o.a.createElement("div",{className:w,onClick:g,onTouchStart:f,onTouchMove:b,onTouchEnd:v,onTouchCancel:k},o.a.createElement("div",{className:"react-toggle-track"},o.a.createElement("div",{className:"react-toggle-track-check"},j("checked")),o.a.createElement("div",{className:"react-toggle-track-x"},j("unchecked"))),o.a.createElement("div",{className:"react-toggle-thumb"}),o.a.createElement("input",Object.assign({},x,{checked:S,onChange:d,ref:c,onFocus:p,onBlur:y,className:"react-toggle-screenreader-only",type:"checkbox","aria-label":"Switch between Dark and Light mode"})))},g=(a(159),a(150));function f(){var e=c()(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2.625rem;\n"]);return f=function(){return e},e}function b(){var e=c()(["\n  box-shadow: none;\n  text-decoration: none;\n  color: var(--textTitle);\n"]);return b=function(){return e},e}function v(){var e=c()(["\n  color: var(--textNormal);\n  background: var(--bg);\n  transition: color 0.3s ease-out, background 0.3s ease-out;\n  min-height: 100vh;\n"]);return v=function(){return e},e}var k=l.a.main(v()),p=Object(l.a)(u.Link).attrs({to:"/"})(b()),y=l.a.header(f());t.a=function(e){var t,a=e.location,n=e.title,c=e.children,l=Object(r.useState)(function(){return"undefined"!=typeof localStorage&&"dark"===(t=localStorage.getItem("theme"))}),u=l[0],i=l[1];Object(r.useEffect)(function(){var e=function(e){var t=e.matches;document.body.className=t?"dark":"light",i(t)},a=window.matchMedia("(prefers-color-scheme: dark)");return a&&a.addListener(e),e({matches:void 0===t?a.matches:u}),function(){return a&&a.removeListener(e)}},[]);var s,d="/";return d="/",s=a.pathname===d?o.a.createElement("h1",{style:Object.assign({},Object(g.b)(1),{marginBottom:0,marginTop:0})},o.a.createElement(p,null,n)):o.a.createElement("h3",{style:{fontFamily:"sans-serif",marginTop:0,marginBottom:Object(g.a)(-1)}},o.a.createElement(p,null,n)),o.a.createElement(k,null,o.a.createElement("article",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(g.a)(24),padding:Object(g.a)(1.5)+" "+Object(g.a)(.75)}},o.a.createElement(y,null,s,o.a.createElement(m,{checked:u,icons:{checked:o.a.createElement("span",null,"🌚"),unchecked:o.a.createElement("span",null,"🌞")},onChange:function(e){var t=e?"dark":"light";document.body.className=t,i(e),localStorage.setItem("theme",t)}})),c))}}}]);
//# sourceMappingURL=component---src-pages-index-js-44c8f8d4c014070fdc98.js.map