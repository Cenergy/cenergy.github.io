/*! For license information please see npm._vue-router3.4.3@vue-router.7ab984cd.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([["npm._vue-router3.4.3@vue-router"],{3211:function(t,e,r){"use strict";function n(t,e){for(var r in e)t[r]=e[r];return t}var o={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var r=e.props,o=e.children,a=e.parent,u=e.data;u.routerView=!0;for(var s=a.$createElement,c=r.name,p=a.$route,f=a._routerViewCache||(a._routerViewCache={}),h=0,l=!1;a&&a._routerRoot!==a;){var d=a.$vnode?a.$vnode.data:{};d.routerView&&h++,d.keepAlive&&a._directInactive&&a._inactive&&(l=!0),a=a.$parent}if(u.routerViewDepth=h,l){var v=f[c],y=v&&v.component;return y?(v.configProps&&i(y,u,v.route,v.configProps),s(y,u,o)):s()}var m=p.matched[h],g=m&&m.components[c];if(!m||!g)return f[c]=null,s();f[c]={component:g},u.registerRouteInstance=function(t,e){var r=m.instances[c];(e&&r!==t||!e&&r===t)&&(m.instances[c]=e)},(u.hook||(u.hook={})).prepatch=function(t,e){m.instances[c]=e.componentInstance},u.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==m.instances[c]&&(m.instances[c]=t.componentInstance)};var w=m.props&&m.props[c];return w&&(n(f[c],{route:p,configProps:w}),i(g,u,p,w)),s(g,u,o)}};function i(t,e,r,o){var i=e.props=function(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0}}(r,o);if(i){i=e.props=n({},i);var a=e.attrs=e.attrs||{};for(var u in i)t.props&&u in t.props||(a[u]=i[u],delete i[u])}}var a=/[!'()*]/g,u=function(t){return"%"+t.charCodeAt(0).toString(16)},s=/%2C/g,c=function(t){return encodeURIComponent(t).replace(a,u).replace(s,",")},p=decodeURIComponent;function f(t,e,r){void 0===e&&(e={});var n,o=r||l;try{n=o(t||"")}catch(t){n={}}for(var i in e){var a=e[i];n[i]=Array.isArray(a)?a.map(h):h(a)}return n}var h=function(t){return null==t||"object"==typeof t?t:String(t)};function l(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach((function(t){var r=t.replace(/\+/g," ").split("="),n=p(r.shift()),o=r.length>0?p(r.join("=")):null;void 0===e[n]?e[n]=o:Array.isArray(e[n])?e[n].push(o):e[n]=[e[n],o]})),e):e}function d(t){var e=t?Object.keys(t).map((function(e){var r=t[e];if(void 0===r)return"";if(null===r)return c(e);if(Array.isArray(r)){var n=[];return r.forEach((function(t){void 0!==t&&(null===t?n.push(c(e)):n.push(c(e)+"="+c(t)))})),n.join("&")}return c(e)+"="+c(r)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var v=/\/?$/;function y(t,e,r,n){var o=n&&n.options.stringifyQuery,i=e.query||{};try{i=m(i)}catch(t){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:b(e,o),matched:t?w(t):[]};return r&&(a.redirectedFrom=b(r,o)),Object.freeze(a)}function m(t){if(Array.isArray(t))return t.map(m);if(t&&"object"==typeof t){var e={};for(var r in t)e[r]=m(t[r]);return e}return t}var g=y(null,{path:"/"});function w(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function b(t,e){var r=t.path,n=t.query;void 0===n&&(n={});var o=t.hash;return void 0===o&&(o=""),(r||"/")+(e||d)(n)+o}function x(t,e){return e===g?t===e:!!e&&(t.path&&e.path?t.path.replace(v,"")===e.path.replace(v,"")&&t.hash===e.hash&&R(t.query,e.query):!(!t.name||!e.name)&&t.name===e.name&&t.hash===e.hash&&R(t.query,e.query)&&R(t.params,e.params))}function R(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var r=Object.keys(t),n=Object.keys(e);return r.length===n.length&&r.every((function(r){var n=t[r],o=e[r];return null==n||null==o?n===o:"object"==typeof n&&"object"==typeof o?R(n,o):String(n)===String(o)}))}function k(t,e){return 0===t.path.replace(v,"/").indexOf(e.path.replace(v,"/"))&&(!e.hash||t.hash===e.hash)&&function(t,e){for(var r in e)if(!(r in t))return!1;return!0}(t.query,e.query)}function E(t,e,r){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var o=e.split("/");r&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var u=i[a];".."===u?o.pop():"."!==u&&o.push(u)}return""!==o[0]&&o.unshift(""),o.join("/")}function A(t){return t.replace(/\/\//g,"/")}var O=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},C=H,_=P,j=function(t,e){return U(P(t,e),e)},S=U,L=F,$=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function P(t,e){for(var r,n=[],o=0,i=0,a="",u=e&&e.delimiter||"/";null!=(r=$.exec(t));){var s=r[0],c=r[1],p=r.index;if(a+=t.slice(i,p),i=p+s.length,c)a+=c[1];else{var f=t[i],h=r[2],l=r[3],d=r[4],v=r[5],y=r[6],m=r[7];a&&(n.push(a),a="");var g=null!=h&&null!=f&&f!==h,w="+"===y||"*"===y,b="?"===y||"*"===y,x=r[2]||u,R=d||v;n.push({name:l||o++,prefix:h||"",delimiter:x,optional:b,repeat:w,partial:g,asterisk:!!m,pattern:R?M(R):m?".*":"[^"+I(x)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&n.push(a),n}function T(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function q(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function U(t,e){for(var r=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(r[n]=new RegExp("^(?:"+t[n].pattern+")$",B(e)));return function(e,n){for(var o="",i=e||{},a=(n||{}).pretty?T:encodeURIComponent,u=0;u<t.length;u++){var s=t[u];if("string"!=typeof s){var c,p=i[s.name];if(null==p){if(s.optional){s.partial&&(o+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be defined')}if(O(p)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var f=0;f<p.length;f++){if(c=a(p[f]),!r[u].test(c))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received `'+JSON.stringify(c)+"`");o+=(0===f?s.prefix:s.delimiter)+c}}else{if(c=s.asterisk?q(p):a(p),!r[u].test(c))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+c+'"');o+=s.prefix+c}}else o+=s}return o}}function I(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function M(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function V(t,e){return t.keys=e,t}function B(t){return t&&t.sensitive?"":"i"}function F(t,e,r){O(e)||(r=e||r,e=[]);for(var n=(r=r||{}).strict,o=!1!==r.end,i="",a=0;a<t.length;a++){var u=t[a];if("string"==typeof u)i+=I(u);else{var s=I(u.prefix),c="(?:"+u.pattern+")";e.push(u),u.repeat&&(c+="(?:"+s+c+")*"),i+=c=u.optional?u.partial?s+"("+c+")?":"(?:"+s+"("+c+"))?":s+"("+c+")"}}var p=I(r.delimiter||"/"),f=i.slice(-p.length)===p;return n||(i=(f?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":n&&f?"":"(?="+p+"|$)",V(new RegExp("^"+i,B(r)),e)}function H(t,e,r){return O(e)||(r=e||r,e=[]),r=r||{},t instanceof RegExp?function(t,e){var r=t.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return V(t,e)}(t,e):O(t)?function(t,e,r){for(var n=[],o=0;o<t.length;o++)n.push(H(t[o],e,r).source);return V(new RegExp("(?:"+n.join("|")+")",B(r)),e)}(t,e,r):function(t,e,r){return F(P(t,r),e,r)}(t,e,r)}C.parse=_,C.compile=j,C.tokensToFunction=S,C.tokensToRegExp=L;var N=Object.create(null);function z(t,e,r){e=e||{};try{var n=N[t]||(N[t]=C.compile(t));return"string"==typeof e.pathMatch&&(e[0]=e.pathMatch),n(e,{pretty:!0})}catch(t){return""}finally{delete e[0]}}function D(t,e,r,o){var i="string"==typeof t?{path:t}:t;if(i._normalized)return i;if(i.name){var a=(i=n({},t)).params;return a&&"object"==typeof a&&(i.params=n({},a)),i}if(!i.path&&i.params&&e){(i=n({},i))._normalized=!0;var u=n(n({},e.params),i.params);if(e.name)i.name=e.name,i.params=u;else if(e.matched.length){var s=e.matched[e.matched.length-1].path;i.path=z(s,u,e.path)}return i}var c=function(t){var e="",r="",n=t.indexOf("#");n>=0&&(e=t.slice(n),t=t.slice(0,n));var o=t.indexOf("?");return o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),{path:t,query:r,hash:e}}(i.path||""),p=e&&e.path||"/",h=c.path?E(c.path,p,r||i.append):p,l=f(c.query,i.query,o&&o.options.parseQuery),d=i.hash||c.hash;return d&&"#"!==d.charAt(0)&&(d="#"+d),{_normalized:!0,path:h,query:l,hash:d}}var J,K=function(){},Q={name:"RouterLink",props:{to:{type:[String,Object],required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:[String,Array],default:"click"}},render:function(t){var e=this,r=this.$router,o=this.$route,i=r.resolve(this.to,o,this.append),a=i.location,u=i.route,s=i.href,c={},p=r.options.linkActiveClass,f=r.options.linkExactActiveClass,h=null==p?"router-link-active":p,l=null==f?"router-link-exact-active":f,d=null==this.activeClass?h:this.activeClass,v=null==this.exactActiveClass?l:this.exactActiveClass,m=u.redirectedFrom?y(null,D(u.redirectedFrom),null,r):u;c[v]=x(o,m),c[d]=this.exact?c[v]:k(o,m);var g=c[v]?this.ariaCurrentValue:null,w=function(t){X(t)&&(e.replace?r.replace(a,K):r.push(a,K))},b={click:X};Array.isArray(this.event)?this.event.forEach((function(t){b[t]=w})):b[this.event]=w;var R={class:c},E=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:s,route:u,navigate:w,isActive:c[d],isExactActive:c[v]});if(E){if(1===E.length)return E[0];if(E.length>1||!E.length)return 0===E.length?t():t("span",{},E)}if("a"===this.tag)R.on=b,R.attrs={href:s,"aria-current":g};else{var A=function t(e){if(e)for(var r,n=0;n<e.length;n++){if("a"===(r=e[n]).tag)return r;if(r.children&&(r=t(r.children)))return r}}(this.$slots.default);if(A){A.isStatic=!1;var O=A.data=n({},A.data);for(var C in O.on=O.on||{},O.on){var _=O.on[C];C in b&&(O.on[C]=Array.isArray(_)?_:[_])}for(var j in b)j in O.on?O.on[j].push(b[j]):O.on[j]=w;var S=A.data.attrs=n({},A.data.attrs);S.href=s,S["aria-current"]=g}else R.on=b}return t(this.tag,R,this.$slots.default)}};function X(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}var Y="undefined"!=typeof window;function W(t,e,r,n){var o=e||[],i=r||Object.create(null),a=n||Object.create(null);t.forEach((function(t){!function t(e,r,n,o,i,a){var u=o.path,s=o.name,c=o.pathToRegexpOptions||{},p=function(t,e,r){return r||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:A(e.path+"/"+t)}(u,i,c.strict);"boolean"==typeof o.caseSensitive&&(c.sensitive=o.caseSensitive);var f={path:p,regex:G(p,c),components:o.components||{default:o.component},instances:{},name:s,parent:i,matchAs:a,redirect:o.redirect,beforeEnter:o.beforeEnter,meta:o.meta||{},props:null==o.props?{}:o.components?o.props:{default:o.props}};if(o.children&&o.children.forEach((function(o){var i=a?A(a+"/"+o.path):void 0;t(e,r,n,o,f,i)})),r[f.path]||(e.push(f.path),r[f.path]=f),void 0!==o.alias)for(var h=Array.isArray(o.alias)?o.alias:[o.alias],l=0;l<h.length;++l){var d={path:h[l],children:o.children};t(e,r,n,d,i,f.path||"/")}s&&(n[s]||(n[s]=f))}(o,i,a,t)}));for(var u=0,s=o.length;u<s;u++)"*"===o[u]&&(o.push(o.splice(u,1)[0]),s--,u--);return{pathList:o,pathMap:i,nameMap:a}}function G(t,e){return C(t,[],e)}function Z(t,e){var r=W(t),n=r.pathList,o=r.pathMap,i=r.nameMap;function a(t,r,a){var u=D(t,r,!1,e),c=u.name;if(c){var p=i[c];if(!p)return s(null,u);var f=p.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!=typeof u.params&&(u.params={}),r&&"object"==typeof r.params)for(var h in r.params)!(h in u.params)&&f.indexOf(h)>-1&&(u.params[h]=r.params[h]);return u.path=z(p.path,u.params),s(p,u,a)}if(u.path){u.params={};for(var l=0;l<n.length;l++){var d=n[l],v=o[d];if(tt(v.regex,u.path,u.params))return s(v,u,a)}}return s(null,u)}function u(t,r){var n=t.redirect,o="function"==typeof n?n(y(t,r,null,e)):n;if("string"==typeof o&&(o={path:o}),!o||"object"!=typeof o)return s(null,r);var u=o,c=u.name,p=u.path,f=r.query,h=r.hash,l=r.params;if(f=u.hasOwnProperty("query")?u.query:f,h=u.hasOwnProperty("hash")?u.hash:h,l=u.hasOwnProperty("params")?u.params:l,c)return i[c],a({_normalized:!0,name:c,query:f,hash:h,params:l},void 0,r);if(p){var d=function(t,e){return E(t,e.parent?e.parent.path:"/",!0)}(p,t);return a({_normalized:!0,path:z(d,l),query:f,hash:h},void 0,r)}return s(null,r)}function s(t,r,n){return t&&t.redirect?u(t,n||r):t&&t.matchAs?function(t,e,r){var n=a({_normalized:!0,path:z(r,e.params)});if(n){var o=n.matched,i=o[o.length-1];return e.params=n.params,s(i,e)}return s(null,e)}(0,r,t.matchAs):y(t,r,n,e)}return{match:a,addRoutes:function(t){W(t,n,o,i)}}}function tt(t,e,r){var n=e.match(t);if(!n)return!1;if(!r)return!0;for(var o=1,i=n.length;o<i;++o){var a=t.keys[o-1],u="string"==typeof n[o]?decodeURIComponent(n[o]):n[o];a&&(r[a.name||"pathMatch"]=u)}return!0}var et=Y&&window.performance&&window.performance.now?window.performance:Date;function rt(){return et.now().toFixed(3)}var nt=rt();function ot(){return nt}function it(t){return nt=t}var at=Object.create(null);function ut(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),r=n({},window.history.state);return r.key=ot(),window.history.replaceState(r,"",e),window.addEventListener("popstate",pt),function(){window.removeEventListener("popstate",pt)}}function st(t,e,r,n){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick((function(){var i=function(){var t=ot();if(t)return at[t]}(),a=o.call(t,e,r,n?i:null);a&&("function"==typeof a.then?a.then((function(t){vt(t,i)})).catch((function(t){})):vt(a,i))}))}}function ct(){var t=ot();t&&(at[t]={x:window.pageXOffset,y:window.pageYOffset})}function pt(t){ct(),t.state&&t.state.key&&it(t.state.key)}function ft(t){return lt(t.x)||lt(t.y)}function ht(t){return{x:lt(t.x)?t.x:window.pageXOffset,y:lt(t.y)?t.y:window.pageYOffset}}function lt(t){return"number"==typeof t}var dt=/^#\d/;function vt(t,e){var r="object"==typeof t;if(r&&"string"==typeof t.selector){var n=dt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(n){var o=t.offset&&"object"==typeof t.offset?t.offset:{};e=function(t,e){var r=document.documentElement.getBoundingClientRect(),n=t.getBoundingClientRect();return{x:n.left-r.left-e.x,y:n.top-r.top-e.y}}(n,o=function(t){return{x:lt(t.x)?t.x:0,y:lt(t.y)?t.y:0}}(o))}else ft(t)&&(e=ht(t))}else r&&ft(t)&&(e=ht(t));e&&window.scrollTo(e.x,e.y)}var yt=Y&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"function"==typeof window.history.pushState}();function mt(t,e){ct();var r=window.history;try{if(e){var o=n({},r.state);o.key=ot(),r.replaceState(o,"",t)}else r.pushState({key:it(rt())},"",t)}catch(r){window.location[e?"replace":"assign"](t)}}function gt(t){mt(t,!0)}function wt(t,e,r){var n=function(o){o>=t.length?r():t[o]?e(t[o],(function(){n(o+1)})):n(o+1)};n(0)}var bt={redirected:2,aborted:4,cancelled:8,duplicated:16};function xt(t,e){return kt(t,e,bt.redirected,'Redirected when going from "'+t.fullPath+'" to "'+function(t){if("string"==typeof t)return t;if("path"in t)return t.path;var e={};return Et.forEach((function(r){r in t&&(e[r]=t[r])})),JSON.stringify(e,null,2)}(e)+'" via a navigation guard.')}function Rt(t,e){return kt(t,e,bt.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function kt(t,e,r,n){var o=new Error(n);return o._isRouter=!0,o.from=t,o.to=e,o.type=r,o}var Et=["params","query","hash"];function At(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Ot(t,e){return At(t)&&t._isRouter&&(null==e||t.type===e)}function Ct(t){return function(e,r,n){var o=!1,i=0,a=null;_t(t,(function(t,e,r,u){if("function"==typeof t&&void 0===t.cid){o=!0,i++;var s,c=Lt((function(e){(function(t){return t.__esModule||St&&"Module"===t[Symbol.toStringTag]})(e)&&(e=e.default),t.resolved="function"==typeof e?e:J.extend(e),r.components[u]=e,--i<=0&&n()})),p=Lt((function(t){var e="Failed to resolve async component "+u+": "+t;a||(a=At(t)?t:new Error(e),n(a))}));try{s=t(c,p)}catch(t){p(t)}if(s)if("function"==typeof s.then)s.then(c,p);else{var f=s.component;f&&"function"==typeof f.then&&f.then(c,p)}}})),o||n()}}function _t(t,e){return jt(t.map((function(t){return Object.keys(t.components).map((function(r){return e(t.components[r],t.instances[r],t,r)}))})))}function jt(t){return Array.prototype.concat.apply([],t)}var St="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;function Lt(t){var e=!1;return function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];if(!e)return e=!0,t.apply(this,r)}}var $t=function(t,e){this.router=t,this.base=function(t){if(!t)if(Y){var e=document.querySelector("base");t=(t=e&&e.getAttribute("href")||"/").replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}(e),this.current=g,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function Pt(t,e,r,n){var o=_t(t,(function(t,n,o,i){var a=function(t,e){return"function"!=typeof t&&(t=J.extend(t)),t.options[e]}(t,e);if(a)return Array.isArray(a)?a.map((function(t){return r(t,n,o,i)})):r(a,n,o,i)}));return jt(n?o.reverse():o)}function Tt(t,e){if(e)return function(){return t.apply(e,arguments)}}function qt(t,e,r){return Pt(t,"beforeRouteEnter",(function(t,n,o,i){return function(t,e,r,n,o){return function(i,a,u){return t(i,a,(function(t){"function"==typeof t&&n.push((function(){!function t(e,r,n,o){r[n]&&!r[n]._isBeingDestroyed?e(r[n]):o()&&setTimeout((function(){t(e,r,n,o)}),16)}(t,e.instances,r,o)})),u(t)}))}}(t,o,i,e,r)}))}$t.prototype.listen=function(t){this.cb=t},$t.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},$t.prototype.onError=function(t){this.errorCbs.push(t)},$t.prototype.transitionTo=function(t,e,r){var n,o=this;try{n=this.router.match(t,this.current)}catch(t){throw this.errorCbs.forEach((function(e){e(t)})),t}this.confirmTransition(n,(function(){var t=o.current;o.updateRoute(n),e&&e(n),o.ensureURL(),o.router.afterHooks.forEach((function(e){e&&e(n,t)})),o.ready||(o.ready=!0,o.readyCbs.forEach((function(t){t(n)})))}),(function(t){r&&r(t),t&&!o.ready&&(o.ready=!0,Ot(t,bt.redirected)?o.readyCbs.forEach((function(t){t(n)})):o.readyErrorCbs.forEach((function(e){e(t)})))}))},$t.prototype.confirmTransition=function(t,e,r){var n=this,o=this.current,i=function(t){!Ot(t)&&At(t)&&(n.errorCbs.length?n.errorCbs.forEach((function(e){e(t)})):console.error(t)),r&&r(t)},a=t.matched.length-1,u=o.matched.length-1;if(x(t,o)&&a===u&&t.matched[a]===o.matched[u])return this.ensureURL(),i(function(t,e){var r=kt(t,e,bt.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return r.name="NavigationDuplicated",r}(o,t));var s=function(t,e){var r,n=Math.max(t.length,e.length);for(r=0;r<n&&t[r]===e[r];r++);return{updated:e.slice(0,r),activated:e.slice(r),deactivated:t.slice(r)}}(this.current.matched,t.matched),c=s.updated,p=s.deactivated,f=s.activated,h=[].concat(function(t){return Pt(t,"beforeRouteLeave",Tt,!0)}(p),this.router.beforeHooks,function(t){return Pt(t,"beforeRouteUpdate",Tt)}(c),f.map((function(t){return t.beforeEnter})),Ct(f));this.pending=t;var l=function(e,r){if(n.pending!==t)return i(Rt(o,t));try{e(t,o,(function(e){!1===e?(n.ensureURL(!0),i(function(t,e){return kt(t,e,bt.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}(o,t))):At(e)?(n.ensureURL(!0),i(e)):"string"==typeof e||"object"==typeof e&&("string"==typeof e.path||"string"==typeof e.name)?(i(xt(o,t)),"object"==typeof e&&e.replace?n.replace(e):n.push(e)):r(e)}))}catch(t){i(t)}};wt(h,l,(function(){var r=[];wt(qt(f,r,(function(){return n.current===t})).concat(n.router.resolveHooks),l,(function(){if(n.pending!==t)return i(Rt(o,t));n.pending=null,e(t),n.router.app&&n.router.app.$nextTick((function(){r.forEach((function(t){t()}))}))}))}))},$t.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},$t.prototype.setupListeners=function(){},$t.prototype.teardownListeners=function(){this.listeners.forEach((function(t){t()})),this.listeners=[]};var Ut=function(t){function e(e,r){t.call(this,e,r),this._startLocation=It(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,r=e.options.scrollBehavior,n=yt&&r;n&&this.listeners.push(ut());var o=function(){var r=t.current,o=It(t.base);t.current===g&&o===t._startLocation||t.transitionTo(o,(function(t){n&&st(e,t,r,!0)}))};window.addEventListener("popstate",o),this.listeners.push((function(){window.removeEventListener("popstate",o)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){mt(A(n.base+t.fullPath)),st(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){gt(A(n.base+t.fullPath)),st(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.ensureURL=function(t){if(It(this.base)!==this.current.fullPath){var e=A(this.base+this.current.fullPath);t?mt(e):gt(e)}},e.prototype.getCurrentLocation=function(){return It(this.base)},e}($t);function It(t){var e=decodeURI(window.location.pathname);return t&&0===e.toLowerCase().indexOf(t.toLowerCase())&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var Mt=function(t){function e(e,r,n){t.call(this,e,r),n&&function(t){var e=It(t);if(!/^\/#/.test(e))return window.location.replace(A(t+"/#"+e)),!0}(this.base)||Vt()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router.options.scrollBehavior,r=yt&&e;r&&this.listeners.push(ut());var n=function(){var e=t.current;Vt()&&t.transitionTo(Bt(),(function(n){r&&st(t.router,n,e,!0),yt||Nt(n.fullPath)}))},o=yt?"popstate":"hashchange";window.addEventListener(o,n),this.listeners.push((function(){window.removeEventListener(o,n)}))}},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){Ht(t.fullPath),st(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){Nt(t.fullPath),st(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;Bt()!==e&&(t?Ht(e):Nt(e))},e.prototype.getCurrentLocation=function(){return Bt()},e}($t);function Vt(){var t=Bt();return"/"===t.charAt(0)||(Nt("/"+t),!1)}function Bt(){var t=window.location.href,e=t.indexOf("#");if(e<0)return"";var r=(t=t.slice(e+1)).indexOf("?");if(r<0){var n=t.indexOf("#");t=n>-1?decodeURI(t.slice(0,n))+t.slice(n):decodeURI(t)}else t=decodeURI(t.slice(0,r))+t.slice(r);return t}function Ft(t){var e=window.location.href,r=e.indexOf("#");return(r>=0?e.slice(0,r):e)+"#"+t}function Ht(t){yt?mt(Ft(t)):window.location.hash=t}function Nt(t){yt?gt(Ft(t)):window.location.replace(Ft(t))}var zt=function(t){function e(e,r){t.call(this,e,r),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,r){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index+1).concat(t),n.index++,e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index).concat(t),e&&e(t)}),r)},e.prototype.go=function(t){var e=this,r=this.index+t;if(!(r<0||r>=this.stack.length)){var n=this.stack[r];this.confirmTransition(n,(function(){e.index=r,e.updateRoute(n)}),(function(t){Ot(t,bt.duplicated)&&(e.index=r)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}($t),Dt=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=Z(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!yt&&!1!==t.fallback,this.fallback&&(e="hash"),Y||(e="abstract"),this.mode=e,e){case"history":this.history=new Ut(this,t.base);break;case"hash":this.history=new Mt(this,t.base,this.fallback);break;case"abstract":this.history=new zt(this,t.base)}},Jt={currentRoute:{configurable:!0}};function Kt(t,e){return t.push(e),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}Dt.prototype.match=function(t,e,r){return this.matcher.match(t,e,r)},Jt.currentRoute.get=function(){return this.history&&this.history.current},Dt.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var r=e.apps.indexOf(t);r>-1&&e.apps.splice(r,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardownListeners()})),!this.app){this.app=t;var r=this.history;if(r instanceof Ut||r instanceof Mt){var n=function(t){r.setupListeners(),function(t){var n=r.current,o=e.options.scrollBehavior;yt&&o&&"fullPath"in t&&st(e,t,n,!1)}(t)};r.transitionTo(r.getCurrentLocation(),n,n)}r.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},Dt.prototype.beforeEach=function(t){return Kt(this.beforeHooks,t)},Dt.prototype.beforeResolve=function(t){return Kt(this.resolveHooks,t)},Dt.prototype.afterEach=function(t){return Kt(this.afterHooks,t)},Dt.prototype.onReady=function(t,e){this.history.onReady(t,e)},Dt.prototype.onError=function(t){this.history.onError(t)},Dt.prototype.push=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!=typeof Promise)return new Promise((function(e,r){n.history.push(t,e,r)}));this.history.push(t,e,r)},Dt.prototype.replace=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!=typeof Promise)return new Promise((function(e,r){n.history.replace(t,e,r)}));this.history.replace(t,e,r)},Dt.prototype.go=function(t){this.history.go(t)},Dt.prototype.back=function(){this.go(-1)},Dt.prototype.forward=function(){this.go(1)},Dt.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},Dt.prototype.resolve=function(t,e,r){var n=D(t,e=e||this.history.current,r,this),o=this.match(n,e),i=o.redirectedFrom||o.fullPath;return{location:n,route:o,href:function(t,e,r){var n="hash"===r?"#"+e:e;return t?A(t+"/"+n):n}(this.history.base,i,this.mode),normalizedTo:n,resolved:o}},Dt.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==g&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(Dt.prototype,Jt),Dt.install=function t(e){if(!t.installed||J!==e){t.installed=!0,J=e;var r=function(t){return void 0!==t},n=function(t,e){var n=t.$options._parentVnode;r(n)&&r(n=n.data)&&r(n=n.registerRouteInstance)&&n(t,e)};e.mixin({beforeCreate:function(){r(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",o),e.component("RouterLink",Q);var i=e.config.optionMergeStrategies;i.beforeRouteEnter=i.beforeRouteLeave=i.beforeRouteUpdate=i.created}},Dt.version="3.4.3",Dt.isNavigationFailure=Ot,Dt.NavigationFailureType=bt,Y&&window.Vue&&window.Vue.use(Dt),e.a=Dt}}]);