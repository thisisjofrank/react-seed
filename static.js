!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,t,n){Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}({"./node_modules/node-libs-browser/node_modules/process/browser.js":function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function i(e){if(p===clearTimeout)return clearTimeout(e);if((p===r||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}function a(){h&&d&&(h=!1,d.length?m=d.concat(m):v=-1,m.length&&s())}function s(){if(!h){var e=o(a);h=!0;for(var t=m.length;t;){for(d=m,m=[];++v<t;)d&&d[v].run();v=-1,t=m.length}d=null,h=!1,i(e)}}function c(e,t){this.fun=e,this.array=t}function u(){}var l,p,f=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{p="function"==typeof clearTimeout?clearTimeout:r}catch(e){p=r}}();var d,m=[],h=!1,v=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new c(e,t)),1!==m.length||h||o(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=u,f.addListener=u,f.once=u,f.off=u,f.removeListener=u,f.removeAllListeners=u,f.emit=u,f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},"./node_modules/preact-compat/server.js":function(e,t,n){function r(e){return e.default||e}var o=r(n("./node_modules/preact-render-to-string/dist/index.js"));e.exports={renderToString:o,renderToStaticMarkup:o}},"./node_modules/preact-compat/src/index.js":function(e,t,n){"use strict";(function(e){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e){var t=e.nodeName,n=e.attributes;e.attributes={},t.defaultProps&&w(e.attributes,t.defaultProps),n&&w(e.attributes,n),n=e.attributes,e.children&&!e.children.length&&(e.children=void 0),e.children&&(n.children=e.children)}function i(e,t){var n=void 0,r=void 0,o=void 0;if(t){for(o in t)if(n=B.test(o))break;if(n){r=e.attributes={};for(o in t)t.hasOwnProperty(o)&&(r[B.test(o)?o.replace(/([A-Z0-9])/,"-$1").toLowerCase():o]=t[o])}}}function a(e,t,r){var o=t&&t._preactCompatRendered;o&&o.parentNode!==t&&(o=null),o||(o=t.children[0]);for(var i=t.childNodes.length;i--;)t.childNodes[i]!==o&&t.removeChild(t.childNodes[i]);var a=n.i(V.render)(e,t,o);return t&&(t._preactCompatRendered=a),"function"==typeof r&&r(),a&&a._component||a.base}function s(e,t,r,o){var i=n.i(V.h)(K,{context:e.context},t),s=a(i,r);return o&&o(s),s}function c(e){var t=e._preactCompatRendered;return!(!t||t.parentNode!==e)&&(n.i(V.render)(n.i(V.h)(Y),e,t),!0)}function u(e){return m.bind(null,e)}function l(e,t){for(var n=t||0;n<e.length;n++){var r=e[n];Array.isArray(r)?l(r):r&&"object"===("undefined"==typeof r?"undefined":L(r))&&!y(r)&&(r.props&&r.type||r.attributes&&r.nodeName||r.children)&&(e[n]=m(r.type||r.nodeName,r.props||r.attributes,r.children))}}function p(e){return"function"==typeof e&&!(e.prototype&&e.prototype.render)}function f(e){return C({displayName:e.displayName||e.name,render:function(t,n,r){return e(t,r)}})}function d(e){var t=e[re];return t?t===!0?e:t:(t=f(e),Object.defineProperty(t,re,{configurable:!0,value:!0}),t.displayName=e.displayName,t.propTypes=e.propTypes,t.defaultProps=e.defaultProps,Object.defineProperty(e,re,{configurable:!0,value:t}),t)}function m(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return l(t,2),h(V.h.apply(void 0,t))}function h(e){e.preactCompatNormalized=!0,x(e),p(e.nodeName)&&(e.nodeName=d(e.nodeName));var t=e.attributes.ref,n=t&&("undefined"==typeof t?"undefined":L(t));return!ee||"string"!==n&&"number"!==n||(e.attributes.ref=b(t,ee)),g(e),e}function v(e,t){if(!y(e))return e;for(var r=e.attributes||e.props,o=n.i(V.h)(e.nodeName||e.type,r,e.children||r&&r.children),i=arguments.length,a=Array(i>2?i-2:0),s=2;s<i;s++)a[s-2]=arguments[s];return h(V.cloneElement.apply(void 0,[o,t].concat(a)))}function y(e){return e&&(e instanceof J||e.$$typeof===H)}function b(e,t){return t._refProxies[e]||(t._refProxies[e]=function(n){t&&t.refs&&(t.refs[e]=n,null===n&&(delete t._refProxies[e],t=null))})}function g(e){var t=e.nodeName,n=e.attributes;if(n&&"string"==typeof t){var r={};for(var o in n)r[o.toLowerCase()]=o;if(r.onchange){t=t.toLowerCase();var i="input"===t&&"checkbox"===String(n.type).toLowerCase()?"onclick":"oninput",a=r[i]||i;n[a]||(n[a]=P([n[r[i]],n[r.onchange]]))}}}function x(e){var t=e.attributes;if(t){var n=t.className||t.class;n&&(t.className=n)}}function w(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function _(e,t){for(var n in e)if(!(n in t))return!0;for(var r in t)if(e[r]!==t[r])return!0;return!1}function N(){}function C(e){function t(t,r){w(this,e),n&&j(this,n),O(this),D.call(this,t,r,$),S.call(this,t,r)}var n=e.mixins&&k(e.mixins);return e.statics&&w(t,e.statics),e.propTypes&&(t.propTypes=e.propTypes),e.defaultProps&&(t.defaultProps=e.defaultProps),e.getDefaultProps&&(t.defaultProps=e.getDefaultProps()),N.prototype=D.prototype,t.prototype=new N,t.prototype.constructor=t,t.displayName=e.displayName||"Component",t}function k(e){for(var t={},n=0;n<e.length;n++){var r=e[n];for(var o in r)r.hasOwnProperty(o)&&"function"==typeof r[o]&&(t[o]||(t[o]=[])).push(r[o])}return t}function j(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=P(t[n].concat(e[n]||n)))}function O(e){for(var t in e){var n=e[t];"function"!=typeof n||n.__bound||F.hasOwnProperty(t)||((e[t]=n.bind(e)).__bound=!0)}}function E(e,t,n){if("string"==typeof t&&(t=e.constructor.prototype[t]),"function"==typeof t)return t.apply(e,n)}function P(e){return function(){for(var t=void 0,n=0;n<e.length;n++){var r=E(this,e[n],arguments);"undefined"!=typeof r&&(t=r)}return t}}function S(e,t){T.call(this,e,t),this.componentWillReceiveProps=P([T,this.componentWillReceiveProps||"componentWillReceiveProps"]),this.render=P([T,A,this.render||"render",M])}function T(e,t){if(e){var n=e.children;if(n&&Array.isArray(n)&&1===n.length&&(e.children=n[0],e.children&&"object"===L(e.children)&&(e.children.length=1,e.children[0]=e.children)),q){var r="function"==typeof this?this:this.constructor,o=this.propTypes||r.propTypes;if(o)for(var i in o)if(o.hasOwnProperty(i)&&"function"==typeof o[i]){var a=this.displayName||r.name,s=o[i](e,i,a,"prop");s&&console.error(new Error(s.message||s))}}}}function A(e){ee=this}function M(){ee===this&&(ee=null)}function D(e,t,n){V.Component.call(this,e,t),this.getInitialState&&(this.state=this.getInitialState()),this.refs={},this._refProxies={},n!==$&&S.call(this,e,t)}function U(e,t){D.call(this,e,t)}var R=n("./node_modules/proptypes/index.js"),I=n.n(R),V=n("./node_modules/preact/dist/preact.js");n.n(V);n.d(t,"version",function(){return G}),n.d(t,"DOM",function(){return te}),n.d(t,"Children",function(){return X}),n.d(t,"render",function(){return a}),n.d(t,"createClass",function(){return C}),n.d(t,"createFactory",function(){return u}),n.d(t,"createElement",function(){return m}),n.d(t,"cloneElement",function(){return v}),n.d(t,"isValidElement",function(){return y}),n.d(t,"findDOMNode",function(){return oe}),n.d(t,"unmountComponentAtNode",function(){return c}),n.d(t,"Component",function(){return D}),n.d(t,"PureComponent",function(){return U}),n.d(t,"unstable_renderSubtreeIntoContainer",function(){return s});var L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),G="15.1.0",z="a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan".split(" "),H="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,F={constructor:1,render:1,shouldComponentUpdate:1,componentWillReceiveProps:1,componentWillUpdate:1,componentDidUpdate:1,componentWillMount:1,componentDidMount:1,componentWillUnmount:1,componentDidUnmount:1},B=/^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vert|word|writing|x)[A-Z]/,$={},q="undefined"!=typeof e&&{NODE_ENV:"production"}&&!1,Y=function(){return null},J=n.i(V.h)("").constructor;J.prototype.$$typeof=H,J.prototype.preactCompatUpgraded=!1,J.prototype.preactCompatNormalized=!1,Object.defineProperty(J.prototype,"type",{get:function(){return this.nodeName},set:function(e){this.nodeName=e},configurable:!0}),Object.defineProperty(J.prototype,"props",{get:function(){return this.attributes},set:function(e){this.attributes=e},configurable:!0});var Z=V.options.vnode;V.options.vnode=function(e){if(!e.preactCompatUpgraded){e.preactCompatUpgraded=!0;var t=e.nodeName,n=e.attributes;n||(n=e.attributes={}),"function"==typeof t?(t[re]===!0||t.prototype&&"isReactComponent"in t.prototype)&&(e.preactCompatNormalized||h(e),o(e)):n&&i(e,n)}Z&&Z(e)};for(var K=function(){function e(){r(this,e)}return W(e,[{key:"getChildContext",value:function(){return this.props.context}},{key:"render",value:function(e){return e.children[0]}}]),e}(),Q=[],X={map:function(e,t,n){return e=X.toArray(e),n&&n!==e&&(t=t.bind(n)),e.map(t)},forEach:function(e,t,n){e=X.toArray(e),n&&n!==e&&(t=t.bind(n)),e.forEach(t)},count:function(e){return e=X.toArray(e),e.length},only:function(e){if(e=X.toArray(e),1!==e.length)throw new Error("Children.only() expects only one child.");return e[0]},toArray:function(e){return Array.isArray&&Array.isArray(e)?e:Q.concat(e)}},ee=void 0,te={},ne=z.length;ne--;)te[z[ne]]=u(z[ne]);var re="undefined"!=typeof Symbol?Symbol.for("__preactCompatWrapper"):"__preactCompatWrapper",oe=function(e){return e&&e.base||e};D.prototype=new V.Component,w(D.prototype,{constructor:D,isReactComponent:{},replaceState:function(e,t){this.setState(e,t);for(var n in this.state)n in e||delete this.state[n]},getDOMNode:function(){return this.base},isMounted:function(){return!!this.base}}),U.prototype=new D({},{},$),U.prototype.shouldComponentUpdate=function(e,t){return _(this.props,e)||_(this.state,t)},n.d(t,"PropTypes",function(){return I.a}),t.default={version:G,DOM:te,PropTypes:I.a,Children:X,render:a,createClass:C,createFactory:u,createElement:m,cloneElement:v,isValidElement:y,findDOMNode:oe,unmountComponentAtNode:c,Component:D,PureComponent:U,unstable_renderSubtreeIntoContainer:s}}).call(t,n("./node_modules/node-libs-browser/node_modules/process/browser.js"))},"./node_modules/preact-render-to-string/dist/index.js":function(e,t,n){!function(t,n){e.exports=n()}(this,function(){function e(e){var t="";for(var n in e){var r=e[n];null!=r&&(t&&(t+=" "),t+=v(n),t+=": ",t+=r,"number"!=typeof r||s[n]||(t+="px"),t+=";")}return t}function t(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function n(e,t){for(var n in t)e[n]=t[n];return e}function r(e){var t=e.nodeName.defaultProps,r=n({},t||e.attributes);return t&&n(r,e.attributes),e.children&&(r.children=e.children),r}function o(a,s,c,p){var d=a||g,v=d.nodeName,y=d.attributes,b=d.children,w=!1;s=s||{},c=c||{};var _=c.pretty,N="string"==typeof _?_:"\t";if(null==a)return"<!---->";if(!v)return l(a);if("function"==typeof v){if(w=!0,!c.shallow||!p&&c.renderRootComponent!==!1){var C=r(a),k=void 0;if(v.prototype&&"function"==typeof v.prototype.render){var j=new v(C,s);j.props=C,j.context=s,j.componentWillMount&&j.componentWillMount(),k=j.render(j.props,j.state,j.context),j.getChildContext&&(s=n(n({},s),j.getChildContext()))}else k=v(C,s);return o(k,s,c,c.shallowHighOrder!==!1)}v=i(v)}var O="",E=void 0;if(y){var P=u(y);c&&c.sortAttributes===!0&&P.sort();for(var S=0;S<P.length;S++){var T=P[S],A=y[T];if("children"!==T&&(c&&c.allAttributes||"key"!==T&&"ref"!==T)){if("className"===T){if(y.class)continue;T="class"}"class"===T&&A&&"object"==typeof A?A=t(A):"style"===T&&A&&"object"==typeof A&&(A=e(A));var M=c.attributeHook&&c.attributeHook(T,A,s,c,w);if(M||""===M)O+=M;else if("dangerouslySetInnerHTML"===T)E=A&&A.__html;else if((A||0===A)&&"function"!=typeof A){if(A===!0&&(A=T,!c||!c.xml)){O+=" "+T;continue}O+=" "+T+'="'+l(A)+'"'}}}}var D=O.replace(/^\n\s*/," ");if(D===O||~D.indexOf("\n")?~O.indexOf("\n")&&(O+="\n"):O=D,O="<"+v+O+">",E)_&&h(E)&&(E="\n"+N+m(E,N)),O+=E;else{for(var U=b&&b.length,R=[],I=~O.indexOf("\n"),V=0;V<U;V++){var L=b[V];if(!f(L)){var W=o(L,s,c,!0);!I&&_&&h(W)&&(I=!0),R.push(W)}}if(I)for(var G=R.length;G--;)R[G]="\n"+N+m(R[G],N);if(R.length)O+=R.join("");else if(c&&c.xml)return O.substring(0,O.length-1)+" />"}return(c.jsx||x.indexOf(v)===-1)&&(_&&~O.indexOf("\n")&&(O+="\n"),O+="</"+v+">"),O}function i(e){var t=e.prototype;t&&t.constructor;return e.displayName||e.name||t&&(t.displayName||t.name)||a(e)}function a(e){var t=Function.prototype.toString.call(e),n=(t.match(/^\s*function\s+([^\( ]+)/)||g)[1];if(!n){for(var r=-1,o=b.length;o--;)if(b[o]===e){r=o;break}r<0&&(r=b.push(e)-1),n="UnnamedComponent"+r}return n}var s={boxFlex:1,boxFlexGroup:1,columnCount:1,fillOpacity:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,fontWeight:1,lineClamp:1,lineHeight:1,opacity:1,order:1,orphans:1,strokeOpacity:1,widows:1,zIndex:1,zoom:1},c={"<":"&lt;",">":"&gt;",'"':"&quot;","&":"&amp;"},u=Object.keys||function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t},l=function(e){return String(e).replace(/[<>"&]/g,p)},p=function(e){return c[e]||e},f=function(e){return null==e||e===!1},d=function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return function(n){return t[n]||(t[n]=e(n))}},m=function(e,t){return String(e).replace(/(\n+)/g,"$1"+(t||"\t"))},h=function(e,t,n){return String(e).length>(t||40)||!n&&String(e).indexOf("\n")!==-1||String(e).indexOf("<")!==-1},v=d(function(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()}),y={shallow:!0},b=[],g={},x=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"];o.render=o;var w=function(e,t){return o(e,t,y)};return o.shallowRender=w,o})},"./node_modules/preact/dist/preact.js":function(e,t,n){!function(e,n){n(t)}(this,function(e){function t(e,t,n){this.nodeName=e,this.attributes=t,this.children=n,this.key=t&&t.key}function n(e,n){var r,o,i,a,s=[];for(a=arguments.length;a-- >2;)W.push(arguments[a]);for(n&&n.children&&(W.length||W.push(n.children),delete n.children);W.length;)if((o=W.pop())instanceof Array)for(a=o.length;a--;)W.push(o[a]);else null!=o&&o!==!1&&("number"!=typeof o&&o!==!0||(o=String(o)),i="string"==typeof o,i&&r?s[s.length-1]+=o:(s.push(o),r=i));var c=new t(e,n||void 0,s);return L.vnode&&L.vnode(c),c}function r(e,t){if(t)for(var n in t)e[n]=t[n];return e}function o(e){return r({},e)}function i(e,t){for(var n=t.split("."),r=0;r<n.length&&e;r++)e=e[n[r]];return e}function a(e){return"function"==typeof e}function s(e){return"string"==typeof e}function c(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function u(e,t){return n(e.nodeName,r(o(e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function l(e,t,n){var r=t.split(".");return function(t){for(var o=t&&t.target||this,a={},c=a,u=s(n)?i(t,n):o.nodeName?o.type.match(/^che|rad/)?o.checked:o.value:t,l=0;l<r.length-1;l++)c=c[r[l]]||(c[r[l]]=!l&&e.state[r[l]]||{});c[r[l]]=u,e.setState(a)}}function p(e){!e._dirty&&(e._dirty=!0)&&1==J.push(e)&&(L.debounceRendering||F)(f)}function f(){var e,t=J;for(J=[];e=t.pop();)e._dirty&&D(e)}function d(e){var t=e&&e.nodeName;return t&&a(t)&&!(t.prototype&&t.prototype.render)}function m(e,t){return e.nodeName(y(e),t||B)}function h(e,t){return s(t)?e instanceof Text:s(t.nodeName)?v(e,t.nodeName):a(t.nodeName)?e._componentConstructor===t.nodeName||d(t):void 0}function v(e,t){return e.normalizedNodeName===t||z(e.nodeName)===z(t)}function y(e){var t=o(e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function b(e){var t=e.parentNode;t&&t.removeChild(e)}function g(e,t,n,r,o){if("className"===t&&(t="class"),"class"===t&&r&&"object"==typeof r&&(r=c(r)),"key"===t);else if("class"!==t||o)if("style"===t){if((!r||s(r)||s(n))&&(e.style.cssText=r||""),r&&"object"==typeof r){if(!s(n))for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"!=typeof r[i]||q[i]?r[i]:r[i]+"px"}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html);else if("o"==t[0]&&"n"==t[1]){var u=e._listeners||(e._listeners={});t=z(t.substring(2)),r?u[t]||e.addEventListener(t,w,!!Y[t]):u[t]&&e.removeEventListener(t,w,!!Y[t]),u[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e)x(e,t,null==r?"":r),null!=r&&r!==!1||e.removeAttribute(t);else{var l=o&&t.match(/^xlink\:?(.+)/);null==r||r===!1?l?e.removeAttributeNS("http://www.w3.org/1999/xlink",z(l[1])):e.removeAttribute(t):"object"==typeof r||a(r)||(l?e.setAttributeNS("http://www.w3.org/1999/xlink",z(l[1]),r):e.setAttribute(t,r))}else e.className=r||""}function x(e,t,n){try{e[t]=n}catch(e){}}function w(e){return this._listeners[e.type](L.event&&L.event(e)||e)}function _(e){if(b(e),e instanceof Element){e._component=e._componentConstructor=null;var t=e.normalizedNodeName||z(e.nodeName);(Z[t]||(Z[t]=[])).push(e)}}function N(e,t){var n=z(e),r=Z[n]&&Z[n].pop()||(t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e));return r.normalizedNodeName=n,r}function C(){for(var e;e=K.pop();)L.afterMount&&L.afterMount(e),e.componentDidMount&&e.componentDidMount()}function k(e,t,n,r,o,i){Q++||(X=o instanceof SVGElement);var a=j(e,t,n,r);return o&&a.parentNode!==o&&o.appendChild(a),--Q||i||C(),a}function j(e,t,n,r){for(var o=t&&t.attributes;d(t);)t=m(t,n);if(null==t&&(t=""),s(t)){if(e){if(e instanceof Text&&e.parentNode)return e.nodeValue!=t&&(e.nodeValue=t),e;P(e)}return document.createTextNode(t)}if(a(t.nodeName))return U(e,t,n,r);var i=e,c=t.nodeName,u=X,l=t.children;if(s(c)||(c=String(c)),X="svg"===c||"foreignObject"!==c&&X,e){if(!v(e,c)){for(i=N(c,X);e.firstChild;)i.appendChild(e.firstChild);P(e)}}else i=N(c,X);l&&1===l.length&&"string"==typeof l[0]&&1===i.childNodes.length&&i.firstChild instanceof Text?i.firstChild.nodeValue!=l[0]&&(i.firstChild.nodeValue=l[0]):(l&&l.length||i.firstChild)&&O(i,l,n,r);var p=i[$];if(!p){i[$]=p={};for(var f=i.attributes,h=f.length;h--;)p[f[h].name]=f[h].value}return S(i,t.attributes,p),o&&"function"==typeof o.ref&&(p.ref=o.ref)(i),X=u,i}function O(e,t,n,r){var o,i,s,c,u=e.childNodes,l=[],p={},f=0,d=0,m=u.length,v=0,y=t&&t.length;if(m)for(var b=0;b<m;b++){var g=u[b],x=y?(i=g._component)?i.__key:(i=g[$])?i.key:null:null;x||0===x?(f++,p[x]=g):l[v++]=g}if(y)for(var b=0;b<y;b++){s=t[b],c=null;var x=s.key;if(null!=x)f&&x in p&&(c=p[x],p[x]=void 0,f--);else if(!c&&d<v){for(o=d;o<v;o++)if(i=l[o],i&&h(i,s)){c=i,l[o]=void 0,o===v-1&&v--,o===d&&d++;break}!c&&d<v&&a(s.nodeName)&&r&&(c=l[d],l[d++]=void 0)}c=j(c,s,n,r),c&&c!==e&&c!==u[b]&&e.insertBefore(c,u[b]||null)}if(f)for(var b in p)p[b]&&P(p[b]);d<v&&E(l)}function E(e,t){for(var n=e.length;n--;)e[n]&&P(e[n],t)}function P(e,t){var n=e._component;n?R(n,!t):(e[$]&&e[$].ref&&e[$].ref(null),t||_(e),e.childNodes&&e.childNodes.length&&E(e.childNodes,t))}function S(e,t,n){for(var r in n)t&&r in t||null==n[r]||g(e,r,n[r],n[r]=void 0,X);if(t)for(var o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||g(e,o,n[o],n[o]=t[o],X)}function T(e){var t=e.constructor.name,n=ee[t];n?n.push(e):ee[t]=[e]}function A(e,t,n){var r=new e(t,n),o=ee[e.name];if(I.call(r,t,n),o)for(var i=o.length;i--;)if(o[i].constructor===e){r.nextBase=o[i].nextBase,o.splice(i,1);break}return r}function M(e,t,n,r,o){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||o?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&L.syncComponentUpdates===!1&&e.base?p(e):D(e,1,o)),e.__ref&&e.__ref(e))}function D(e,t,n,i){if(!e._disable){var s,c,u,l,p=e.props,f=e.state,h=e.context,v=e.prevProps||p,b=e.prevState||f,g=e.prevContext||h,x=e.base,w=e.nextBase,_=x||w,N=e._component;if(x&&(e.props=v,e.state=b,e.context=g,2!==t&&e.shouldComponentUpdate&&e.shouldComponentUpdate(p,f,h)===!1?s=!0:e.componentWillUpdate&&e.componentWillUpdate(p,f,h),e.props=p,e.state=f,e.context=h),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!s){for(e.render&&(c=e.render(p,f,h)),e.getChildContext&&(h=r(o(h),e.getChildContext()));d(c);)c=m(c,h);var j,O,E=c&&c.nodeName;if(a(E)){u=N;var S=y(c);u&&u.constructor===E?M(u,S,1,h):(j=u,u=A(E,S,h),u.nextBase=u.nextBase||w,u._parentComponent=e,e._component=u,M(u,S,0,h),D(u,1,n,!0)),O=u.base}else l=_,j=N,j&&(l=e._component=null),(_||1===t)&&(l&&(l._component=null),O=k(l,c,h,n||!x,_&&_.parentNode,!0));if(_&&O!==_&&u!==N){var T=_.parentNode;T&&O!==T&&(T.replaceChild(O,_),j||(_._component=null,P(_)))}if(j&&R(j,O!==_),e.base=O,O&&!i){for(var U=e,I=e;I=I._parentComponent;)(U=I).base=O;O._component=U,O._componentConstructor=U.constructor}}!x||n?K.unshift(e):s||(e.componentDidUpdate&&e.componentDidUpdate(v,b,g),L.afterUpdate&&L.afterUpdate(e));var V,W=e._renderCallbacks;if(W)for(;V=W.pop();)V.call(e);Q||i||C()}}function U(e,t,n,r){for(var o=e&&e._component,i=e,a=o&&e._componentConstructor===t.nodeName,s=a,c=y(t);o&&!s&&(o=o._parentComponent);)s=o.constructor===t.nodeName;return o&&s&&(!r||o._component)?(M(o,c,3,n,r),e=o.base):(o&&!a&&(R(o,!0),e=i=null),o=A(t.nodeName,c,n),e&&!o.nextBase&&(o.nextBase=e,i=null),M(o,c,1,n,r),e=o.base,i&&e!==i&&(i._component=null,P(i))),e}function R(e,t){L.beforeUnmount&&L.beforeUnmount(e);var n=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var r=e._component;r?R(r,t):n&&(n[$]&&n[$].ref&&n[$].ref(null),e.nextBase=n,t&&(b(n),T(e)),E(n.childNodes,!t)),e.__ref&&e.__ref(null),e.componentDidUnmount&&e.componentDidUnmount()}function I(e,t){this._dirty=!0,this.context=t,this.props=e,this.state||(this.state={})}function V(e,t,n){return k(n,e,{},!1,t)}var L={},W=[],G={},z=function(e){return G[e]||(G[e]=e.toLowerCase())},H="undefined"!=typeof Promise&&Promise.resolve(),F=H?function(e){H.then(e)}:setTimeout,B={},$="undefined"!=typeof Symbol?Symbol.for("preactattr"):"__preactattr_",q={boxFlex:1,boxFlexGroup:1,columnCount:1,fillOpacity:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,fontWeight:1,lineClamp:1,lineHeight:1,opacity:1,order:1,orphans:1,strokeOpacity:1,widows:1,zIndex:1,zoom:1},Y={blur:1,error:1,focus:1,load:1,resize:1,scroll:1},J=[],Z={},K=[],Q=0,X=!1,ee={};r(I.prototype,{linkState:function(e,t){var n=this._linkedStates||(this._linkedStates={});return n[e+t]||(n[e+t]=l(this,e,t))},setState:function(e,t){var n=this.state;this.prevState||(this.prevState=o(n)),r(n,a(e)?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),p(this)},forceUpdate:function(){D(this,2)},render:function(){}}),e.h=n,e.cloneElement=u,e.Component=I,e.render=V,e.rerender=f,e.options=L})},"./node_modules/proptypes/index.js":function(e,t,n){var r,o,i;!function(n,a){o=[t,e],r=a,i="function"==typeof r?r.apply(t,o):r,!(void 0!==i&&(e.exports=i))}(this,function(e,t){"use strict";function n(e){var t=e&&(_&&e[_]||e[N]);if("function"==typeof t)return t}function r(e){function t(t,n,r,o,i,a){if(o=o||C,a=a||r,null==n[r]){var s=x[i];return t?new Error("Required "+s+" `"+a+"` was not specified in "+("`"+o+"`.")):null}return e(n,r,o,i,a)}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n}function o(e){function t(t,n,r,o,i){var a=t[n],s=h(a);if(s!==e){var c=x[o],u=v(a);return new Error("Invalid "+c+" `"+i+"` of type "+("`"+u+"` supplied to `"+r+"`, expected ")+("`"+e+"`."))}return null}return r(t)}function i(){return r(w.thatReturns(null))}function a(e){function t(t,n,r,o,i){var a=t[n];if(!Array.isArray(a)){var s=x[o],c=h(a);return new Error("Invalid "+s+" `"+i+"` of type "+("`"+c+"` supplied to `"+r+"`, expected an array."))}for(var u=0;u<a.length;u++){var l=e(a,u,r,o,i+"["+u+"]");if(l instanceof Error)return l}return null}return r(t)}function s(){function e(e,t,n,r,o){if(!g.isValidElement(e[t])){var i=x[r];return new Error("Invalid "+i+" `"+o+"` supplied to "+("`"+n+"`, expected a single ReactElement."))}return null}return r(e)}function c(e){function t(t,n,r,o,i){if(!(t[n]instanceof e)){var a=x[o],s=e.name||C,c=y(t[n]);return new Error("Invalid "+a+" `"+i+"` of type "+("`"+c+"` supplied to `"+r+"`, expected ")+("instance of `"+s+"`."))}return null}return r(t)}function u(e){function t(t,n,r,o,i){for(var a=t[n],s=0;s<e.length;s++)if(a===e[s])return null;var c=x[o],u=JSON.stringify(e);return new Error("Invalid "+c+" `"+i+"` of value `"+a+"` "+("supplied to `"+r+"`, expected one of "+u+"."))}return r(Array.isArray(e)?t:function(){return new Error("Invalid argument supplied to oneOf, expected an instance of array.")})}function l(e){function t(t,n,r,o,i){var a=t[n],s=h(a);if("object"!==s){var c=x[o];return new Error("Invalid "+c+" `"+i+"` of type "+("`"+s+"` supplied to `"+r+"`, expected an object."))}for(var u in a)if(a.hasOwnProperty(u)){var l=e(a,u,r,o,i+"."+u);if(l instanceof Error)return l}return null}return r(t)}function p(e){function t(t,n,r,o,i){for(var a=0;a<e.length;a++){var s=e[a];if(null==s(t,n,r,o,i))return null}var c=x[o];return new Error("Invalid "+c+" `"+i+"` supplied to "+("`"+r+"`."))}return r(Array.isArray(e)?t:function(){return new Error("Invalid argument supplied to oneOfType, expected an instance of array.")})}function f(){function e(e,t,n,r,o){if(!m(e[t])){var i=x[r];return new Error("Invalid "+i+" `"+o+"` supplied to "+("`"+n+"`, expected a ReactNode."))}return null}return r(e)}function d(e){function t(t,n,r,o,i){var a=t[n],s=h(a);if("object"!==s){var c=x[o];return new Error("Invalid "+c+" `"+i+"` of type `"+s+"` "+("supplied to `"+r+"`, expected `object`."))}for(var u in e){var l=e[u];if(l){var p=l(a,u,r,o,i+"."+u);if(p)return p}}return null}return r(t)}function m(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(m);if(null===e||g.isValidElement(e))return!0;var t=n(e);if(!t)return!1;var r,o=t.call(e);if(t!==e.entries){for(;!(r=o.next()).done;)if(!m(r.value))return!1}else for(;!(r=o.next()).done;){var i=r.value;if(i&&!m(i[1]))return!1}return!0;default:return!1}}function h(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":t}function v(e){var t=h(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function y(e){return e.constructor&&e.constructor.name?e.constructor.name:C}var b="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,g={};g.isValidElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===b};var x={prop:"prop",context:"context",childContext:"child context"},w={thatReturns:function(e){return function(){return e}}},_="function"==typeof Symbol&&Symbol.iterator,N="@@iterator",C="<<anonymous>>",k={array:o("array"),bool:o("boolean"),func:o("function"),number:o("number"),object:o("object"),string:o("string"),any:i(),arrayOf:a,element:s(),instanceOf:c,node:f(),objectOf:l,oneOf:u,oneOfType:p,shape:d};t.exports=k})},"./node_modules/svg-inline-react/dist/index.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return y&&"string"==typeof e&&"<svg"===e.trim().substr(0,4)}function c(e){var t=new h;return t.parseFromString(e,"image/svg+xml")}function u(e){switch(e){case"class":return"className";default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e,t,n){for(var r=!0;r;){var o=e,i=t,a=n;r=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,i);if(void 0!==s){if("value"in s)return s.value;var c=s.get;if(void 0===c)return;return c.call(a)}var u=Object.getPrototypeOf(o);if(null===u)return;e=u,t=i,n=a,r=!0,s=u=void 0}},d=n("./node_modules/preact-compat/src/index.js"),m=r(d),h="undefined"!=typeof window&&window.DOMParser,v=v||{};v.env=v.env||{};var y="undefined"!=typeof h&&null!=h.prototype&&null!=h.prototype.parseFromString;"production"===v.env.NODE_ENV||y||console.info("<InlineSVG />: `raw` prop works only when `window.DOMParser` exists.");var b=function(e){function t(e){i(this,t),f(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this._extractSVGProps=this._extractSVGProps.bind(this)}return a(t,e),p(t,null,[{key:"defaultProps",value:{element:"i",raw:!1,src:""},enumerable:!0},{key:"propTypes",value:{src:m.default.PropTypes.string.isRequired,element:m.default.PropTypes.string,raw:m.default.PropTypes.bool},enumerable:!0}]),p(t,[{key:"_serializeAttrs",value:function(e){for(var t={},n=void 0,r=0;r<e.length;r++)n=u(e[r].name),t[n]=e[r].value;return t}},{key:"_extractSVGProps",value:function(e){var t=c(e).documentElement.attributes;return t.length>0?this._serializeAttrs(t):null}},{key:"_stripSVG",value:function(e){return c(e).documentElement.innerHTML}},{key:"componentWillReceiveProps",value:function(e){var t=e.children;"production"!==v.env.NODE_ENV&&null!=t&&console.info("<InlineSVG />: `children` prop will be ignored.");
}},{key:"render",value:function(){var e=void 0,t=void 0,n=void 0,r=this.props,i=r.element,a=r.raw,c=r.src,u=o(r,["element","raw","src"]);return a===!0&&s(c)&&(e="svg",n=this._extractSVGProps(c),t=this._stripSVG(c)),t=t||c,e=e||i,n=n||{},m.default.createElement(e,l({},n,u,{src:null,children:null,dangerouslySetInnerHTML:{__html:t}}))}}]),t}(m.default.Component);t.default=b,e.exports=t.default},"./package.json":function(e,t){e.exports={name:"react-seed",description:"React Seed",version:"1.0.0",author:"Oliver Turner <oliver.turner@codedsignal.co.uk>",homepage:"https://github.com/oliverturner/react-seed",repository:"git@github.com:oliverturner/react-seed.git",dependencies:{"npm-run-all":"3.1.1",react:"15.4.1","react-dom":"15.4.1","react-hot-loader":"3.0.0-beta.6"},devDependencies:{autoprefixer:"6.5.3","babel-core":"6.18.2","babel-eslint":"7.1.1","babel-loader":"6.2.8","babel-plugin-lodash":"3.2.10","babel-preset-es2015":"6.18.0","babel-preset-react":"6.16.0",copyfiles:"1.0.0","cross-env":"3.1.3","css-loader":"0.26.0",eslint:"3.11.0","eslint-config-airbnb":"13.0.0","eslint-import-resolver-webpack":"0.7.0","eslint-plugin-import":"2.2.0","eslint-plugin-jsx-a11y":"2.2.3","eslint-plugin-react":"6.7.1","extract-text-webpack-plugin":"^2.0.0-beta.4","favicons-webpack-plugin":"0.0.7","file-loader":"0.9.0","gh-pages":"0.12.0","html-loader":"0.4.4","html-webpack-plugin":"2.24.1",husky:"0.11.9","json-loader":"0.5.4","lodash-webpack-plugin":"0.10.6","offline-plugin":"3.4.2","postcss-browser-reporter":"0.5.0","postcss-cssnext":"2.8.0","postcss-focus":"1.0.0","postcss-loader":"1.1.1","postcss-reporter":"2.0.0",preact:"6.4.0","preact-compat":"3.9.2",rimraf:"2.5.4","sanitize.css":"4.1.0","static-site-generator-webpack-plugin":"3.1.0","style-loader":"0.13.1",stylelint:"7.6.0","stylelint-config-standard":"15.0.0","svg-inline-loader":"0.7.1","svg-inline-react":"1.0.2","url-loader":"0.5.7",webpack:"2.1.0-beta.25","webpack-dev-server":"2.1.0-beta.10"},license:"MIT",main:"src/index.js",scripts:{test:"echo 'Choose your own adventure! Jest is nice...'",clean:"rimraf dist",copy:"copyfiles -u 1 public/**/* dist",lint:"run-s lint:*","lint:css":"stylelint --config config/linters/.stylelintrc.js ./src/**/*.{pcss,scss,css}","lint:js":"eslint --config ./config/linters/.eslintrc.js --ext .jsx --ext .js ./src ./config","webpack:dev":"cross-env NODE_ENV=development webpack-dev-server --env.dev --config config/webpack/webpack.dev.babel.js --hot","webpack:prod":"cross-env NODE_ENV=production webpack --env.prod -p --config config/webpack/webpack.prod.babel.js",critical:"critical ./dist/index.html --inline --base ./dist -H index.html > /dev/null","gh-pages":"gh-pages -d dist",start:"npm run webpack:dev",build:"run-s clean copy webpack:prod critical",deploy:"run-s build gh-pages",precommit:"npm run lint"}}},"./src/assets/icons/github.svg":function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" enable-background="new 0 0 50 50"><path fill-rule="evenodd" clip-rule="evenodd" d="M25 10c-8.3 0-15 6.7-15 15 0 6.6 4.3 12.2 10.3 14.2.8.1 1-.3 1-.7v-2.6c-4.2.9-5.1-2-5.1-2-.7-1.7-1.7-2.2-1.7-2.2-1.4-.9.1-.9.1-.9 1.5.1 2.3 1.5 2.3 1.5 1.3 2.3 3.5 1.6 4.4 1.2.1-1 .5-1.6 1-2-3.3-.4-6.8-1.7-6.8-7.4 0-1.6.6-3 1.5-4-.2-.4-.7-1.9.1-4 0 0 1.3-.4 4.1 1.5 1.2-.3 2.5-.5 3.8-.5 1.3 0 2.6.2 3.8.5 2.9-1.9 4.1-1.5 4.1-1.5.8 2.1.3 3.6.1 4 1 1 1.5 2.4 1.5 4 0 5.8-3.5 7-6.8 7.4.5.5 1 1.4 1 2.8v4.1c0 .4.3.9 1 .7 6-2 10.2-7.6 10.2-14.2C40 16.7 33.3 10 25 10z"></path></svg>'},"./src/assets/icons/leaf.svg":function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><g><path d="M1011.328 134.496c-110.752-83.928-281.184-134.034-455.91-134.034-216.12 0-392.226 75.456-483.16 207.020-42.708 61.79-66.33 134.958-70.208 217.474-3.454 73.474 8.884 154.726 36.684 242.146 94.874-284.384 359.82-507.102 665.266-507.102 0 0-285.826 75.232-465.524 308.192-0.112 0.138-2.494 3.090-6.614 8.698-36.080 48.278-67.538 103.162-91.078 165.328-39.87 94.83-76.784 224.948-76.784 381.782h128c0 0-19.43-122.222 14.36-262.79 55.89 7.556 105.858 11.306 150.852 11.306 117.678 0 201.37-25.46 263.388-80.124 55.568-48.978 86.198-114.786 118.624-184.456 49.524-106.408 105.654-227.010 268.654-320.152 9.33-5.332 15.362-14.992 16.056-25.716s-4.040-21.080-12.606-27.572z"></path></g></svg>'},"./src/components/masthead/index.jsx":function(e,t,n){"use strict";var r=n("./node_modules/preact-compat/src/index.js"),o=n("./node_modules/svg-inline-react/dist/index.js"),i=n.n(o),a=n("./src/assets/icons/leaf.svg"),s=n.n(a),c=n("./src/components/masthead/styles.pcss"),u=n.n(c),l=function(e){var t=e.children;return r.default.createElement("header",{className:u.a.masthead},r.default.createElement("h1",{className:u.a.masthead__title},t),r.default.createElement("a",{className:u.a.masthead__logo},r.default.createElement(i.a,{src:s.a}),"logo"))};l.propTypes={children:r.PropTypes.node.isRequired},t.a=l},"./src/components/masthead/styles.pcss":function(e,t){e.exports={masthead:"_1bkJhegmGgDz1dHawcLHOx",masthead__title:"_1lKmx6rUxcIG8srLODRf9u",masthead__logo:"_122_nR8Lx4r9Y_OriVrO8H"}},"./src/containers/home/index.jsx":function(e,t,n){"use strict";var r=n("./node_modules/preact-compat/src/index.js"),o=n("./node_modules/svg-inline-react/dist/index.js"),i=n.n(o),a=n("./src/components/masthead/index.jsx"),s=n("./src/assets/icons/github.svg"),c=n.n(s),u=n("./src/containers/home/styles.pcss"),l=n.n(u),p=n("./package.json"),f=(n.n(p),function(){return r.default.createElement("main",{className:l.a.app},r.default.createElement("div",{className:l.a.wrap},r.default.createElement(a.a,null,"seed"),r.default.createElement("a",{className:l.a.link,href:p.homepage},r.default.createElement(i.a,{src:c.a}),"Fork me on Github!")))});t.a=f},"./src/containers/home/styles.pcss":function(e,t){e.exports={app:"_2jfM-V8ow65f4L5GTnGa0T",wrap:"_2oCTCpEYfMsmbTVYMIC1AY",fadeInUp:"_3_KZDMUyAD0mLgeF62EyqW",link:"_3kvjJeo4axYC1ORzsEvKL"}},"./src/static.jsx":function(e,t,n){"use strict";var r=n("./node_modules/preact-compat/src/index.js"),o=n("./node_modules/preact-compat/server.js"),i=n.n(o),a=n("./src/containers/home/index.jsx"),s=n("./src/template.js");t.default=function(e,t){console.log("--- locals:\n",e,"\n---"),t(null,n.i(s.a)({title:e.title,react:i.a.renderToString(r.default.createElement(a.a,null))}))}},"./src/template.js":function(e,t,n){"use strict";var r=function(e){var t=e.title,n=e.react;return'\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <!-- critical -->\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n\n    <!-- chrome pwa -->\n    <link rel="manifest" href="/icons/manifest.json">\n\n    <title>'+t+'</title>\n    <link rel="stylesheet" href="/app.css" >\n  </head>\n  <body>\n    <div id="root">'+n+'</div>\n    <script src="/app.js" async></script>\n  </body>\n</html>\n\n'};t.a=r},1:function(e,t,n){e.exports=n("./src/static.jsx")}})});
//# sourceMappingURL=static.js.map