(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"A2+M":function(e,t,r){var n=r("X8hv");e.exports={MDXRenderer:n}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},RIqP:function(e,t,r){var n=r("Ijbi"),o=r("EbDI"),a=r("ZhPi"),c=r("Bnag");e.exports=function(e){return n(e)||o(e)||a(e)||c()}},SksO:function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},X8hv:function(e,t,r){var n=r("sXyB"),o=r("RIqP"),a=r("lSNA"),c=r("8OQS");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r("q1tI"),p=r("7ljp").mdx,f=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=c(e,["scope","children"]),i=f(t),s=u.useMemo((function(){if(!r)return null;var e=l({React:u,mdx:p},i),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return u.createElement(s,l({},a))}},ZhPi:function(e,t,r){var n=r("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},sXyB:function(e,t,r){var n=r("SksO"),o=r("b48C");function a(t,r,c){return o()?e.exports=a=Reflect.construct:e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},a.apply(null,arguments)}e.exports=a},yZlL:function(e,t,r){"use strict";r.r(t),r.d(t,"pageQuery",(function(){return p}));var n=r("q1tI"),o=r.n(n),a=r("Wbzz"),c=r("A2+M"),i=r("6Gk8"),l=r("Bl7J"),u=r("vrFN");t.default=function(e){var t,r=e.data,n=e.location,p=r.mdx,f=(null===(t=r.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",s=r.previous,m=r.next;return o.a.createElement(l.a,{location:n,title:f},o.a.createElement(u.a,{title:p.frontmatter.title,description:p.frontmatter.description||p.excerpt}),o.a.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},o.a.createElement("header",null,o.a.createElement("h1",{itemProp:"headline"},p.frontmatter.title),o.a.createElement("p",null,p.frontmatter.date)),o.a.createElement(c.MDXRenderer,null,p.body),o.a.createElement("hr",null),o.a.createElement("footer",null,o.a.createElement(i.a,null))),o.a.createElement("nav",{className:"blog-post-nav"},o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,s&&o.a.createElement(a.Link,{to:s.fields.slug,rel:"prev"},"← ",s.frontmatter.title)),o.a.createElement("li",null,m&&o.a.createElement(a.Link,{to:m.fields.slug,rel:"next"},m.frontmatter.title," →")))))};var p="2270890493"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-01a2340a24fc42cedcc0.js.map