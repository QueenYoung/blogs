(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return h});var n=a(0),r=a.n(n),c=a(32),o=a.n(c),l=a(174),u=a.n(l),i=a(156),s=a(154),d=a(150);t.default=function(e){var t=e.location,a=e.data,n=a.site.siteMetadata.title,c=a.allMarkdownRemark.edges;return r.a.createElement(i.a,{location:t,title:n},r.a.createElement(u.a,{title:n,htmlAttributes:{lang:"zh-cn"}}),r.a.createElement(s.a,null),c.map(function(e){var t=e.node,a=t.frontmatter,n=a.title,c=void 0===n?t.fields.slug:n,l=a.spoiler,u=a.date;return r.a.createElement("div",{key:t.fields.slug},r.a.createElement("h3",{className:"blog-index",style:{marginBottom:Object(d.a)(.25)}},r.a.createElement(o.a,{style:{boxShadow:"none"},to:t.fields.slug},c)),r.a.createElement("small",null,u),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:l||t.excerpt}}))}))};var h="2168062249"},150:function(e,t,a){"use strict";a.d(t,"a",function(){return u}),a.d(t,"b",function(){return i});var n=a(157),r=a.n(n),c=a(158),o=a.n(c);a(159);o.a.overrideThemeStyles=function(){return{a:{color:"var(--textLink)"},hr:{background:"var(--hr)"},"a.gatsby-resp-image-link":{boxShadow:"none"},"a.anchor":{boxShadow:"none"},'a.anchor svg[aria-hidden="true"]':{stroke:"var(--textLink)"},"p code":{fontSize:"1rem"},"h1 code, h2 code, h3 code, h4 code, h5 code, h6 code":{fontSize:"inherit"},"li code":{fontSize:"1rem"},blockquote:{color:"inherit",borderLeftColor:"inherit",opacity:"0.8"},"blockquote.translation":{fontSize:"1em"}}},delete o.a.googleFonts;var l=new r.a(o.a);var u=l.rhythm,i=l.scale},151:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},152:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(4),o=a.n(c),l=a(32),u=a.n(l);a.d(t,"a",function(){return u.a});a(151),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},153:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),l=a(55),u=a(2),i=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};i.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=i},154:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(155),o=a.n(c),l=a(150);t.a=function(){return r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement("img",{src:o.a,alt:"A cat named musa",style:{marginRight:Object(l.a)(.5),marginBottom:0,borderRadius:"50%",width:Object(l.a)(2),height:Object(l.a)(2)}}),r.a.createElement("h4",{style:{margin:0}},"Just Happy"))}},155:function(e,t,a){e.exports=a.p+"static/avatar-6c83ccb0db60a97539ade1fe12738717.jpg"},156:function(e,t,a){"use strict";a(33);var n=a(160),r=a.n(n),c=a(0),o=a.n(c),l=a(163),u=a(152),i=a(74),s=a.n(i),d=(a(161),function(){});function h(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}var m=function e(t){var a=t.onChange,n=s()(t,["onChange"]),r=Object(c.useRef)(null),l=Object(c.useRef)({moved:!1,previouslyChecked:!(!n.checked&&!n.defaultChecked),touchMoved:!1,startX:null,hadFocusAtTouchStart:!1,touchStarted:!1}),u=Object(c.useState)(!1),i=u[0],m=u[1],g=Object(c.useCallback)(function(e){var t=r.current;if(l.current.previouslyChecked=t.checked,e.target!==t&&l.current.moved)return e.preventDefault(),t.focus(),void t.click();a(!t.checked)},[r,l]),f=Object(c.useCallback)(function(e){Object.assign(l.current,{startX:h(e).x,touchStarted:!0,hadFocusAtTouchStart:i}),m(!0)},[l]),b=Object(c.useCallback)(function(e){if(l.current.touchStarted){l.current.touchMoved=!0;var t=l.current.startX;if(null!=t){var n=h(e).x;S&&n+15<t?(a(!1),l.current.startX=n):!S&&n-15>t&&(a(!0),l.current.startX=n)}}},[l]),v=Object(c.useCallback)(function(e){var t=l.current,a=t.touchMoved,n=t.startX,c=t.previouslyChecked,o=t.hadFocusAtTouchStart;if(a){var u=r.current;e.preventDefault(),null!=n&&(c!==S&&u.click(),Object.assign(l.current,{touchedStarted:!1,startX:null,touchMoved:!1})),o||m(!1)}},[l]),k=Object(c.useCallback)(function(){var e=l.current,t=e.startX,a=e.hadFocusAtTouchStart;null!=t&&Object.assign(l.current,{touchStarted:!1,startX:null,touchMoved:!1}),a&&m(!1)},[l]),p=Object(c.useCallback)(function(e){n.onFocus&&n.onFocus(e),l.current.hadFocusAtTouchStart=!0,m(!0)},[l]),j=Object(c.useCallback)(function(e){n.onBlur&&n.onBlur(e),l.hadFocusAtTouchStart=!1,m(!1)},[l]),y=function(t){var a=n.icons;return a?void 0===a[t]?e.defaultProps.icons[t]:a[t]:null},E=n.className,O=(n.icons,n.disabled),S=n.checked,x=s()(n,["className","icons","disabled","checked"]),C="react-toggle"+(S?" react-toggle--checked":"")+(i?" react-toggle--focus":"")+(O?" react-toggle--disabled":"")+(E?" "+E:"");return o.a.createElement("div",{className:C,onClick:g,onTouchStart:f,onTouchMove:b,onTouchEnd:v,onTouchCancel:k},o.a.createElement("div",{className:"react-toggle-track"},o.a.createElement("div",{className:"react-toggle-track-check"},y("checked")),o.a.createElement("div",{className:"react-toggle-track-x"},y("unchecked"))),o.a.createElement("div",{className:"react-toggle-thumb"}),o.a.createElement("input",Object.assign({},x,{checked:S,onChange:d,ref:r,onFocus:p,onBlur:j,className:"react-toggle-screenreader-only",type:"checkbox","aria-label":"Switch between Dark and Light mode"})))},g=(a(162),a(150));function f(){var e=r()(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2.625rem;\n"]);return f=function(){return e},e}function b(){var e=r()(["\n  box-shadow: none;\n  text-decoration: none;\n  color: var(--textTitle);\n"]);return b=function(){return e},e}function v(){var e=r()(["\n  color: var(--textNormal);\n  background: var(--bg);\n  transition: color 0.3s ease-out, background 0.3s ease-out;\n  min-height: 100vh;\n"]);return v=function(){return e},e}var k=l.a.main(v()),p=Object(l.a)(u.a).attrs({to:"/"})(b()),j=l.a.header(f());t.a=function(e){var t,a=e.location,n=e.title,r=e.children,l=Object(c.useState)(window.__preferTheme),u=l[0],i=l[1],s="/";return s="/",t=a.pathname===s?o.a.createElement("h1",{style:Object.assign({},Object(g.b)(1),{marginBottom:0,marginTop:0})},o.a.createElement(p,null,n)):o.a.createElement("h3",{style:{fontFamily:"sans-serif",marginTop:0,marginBottom:Object(g.a)(-1)}},o.a.createElement(p,null,n)),o.a.createElement(k,null,o.a.createElement("article",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(g.a)(24),padding:Object(g.a)(1.5)+" "+Object(g.a)(.75)}},o.a.createElement(j,null,t,o.a.createElement(m,{checked:u,icons:{checked:o.a.createElement("span",null,"🌚"),unchecked:o.a.createElement("span",null,"🌞")},onChange:function(e){var t=e?"dark":"light";document.body.className=t,i(e),localStorage.setItem("theme",t)}})),r))}}}]);
//# sourceMappingURL=component---src-pages-index-js-3581f8e74ada4ea5fb69.js.map