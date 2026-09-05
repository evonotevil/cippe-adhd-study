var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function te(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ne(e,t){return te(e.type,t,e.props)}function T(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(T(o)&&(o=ne(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=se(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=D,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return te(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return te(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=T,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,E)}catch(e){E(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,T());else{var t=n(l);t!==null&&ae(x,t.startTime-e)}}}var S=!1,C=-1,w=5,ee=-1;function te(){return g?!0:!(e.unstable_now()-ee<w)}function ne(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?T():S=!1}}}var T;if(typeof y==`function`)T=function(){y(ne)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=ne,T=function(){ie.postMessage(null)}}else T=function(){_(ne,0)};function ae(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ae(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,T()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),ne=Symbol.for(`react.memo`),T=Symbol.for(`react.lazy`),re=Symbol.for(`react.activity`),ie=Symbol.for(`react.memo_cache_sentinel`),ae=Symbol.iterator;function oe(e){return typeof e!=`object`||!e?null:(e=ae&&e[ae]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case te:return`SuspenseList`;case re:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ne:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case T:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},de=[],fe=-1;function pe(e){return{current:e}}function me(e){0>fe||(e.current=de[fe],de[fe]=null,fe--)}function O(e,t){fe++,de[fe]=e.current,e.current=t}var he=pe(null),ge=pe(null),_e=pe(null),ve=pe(null);function ye(e,t){switch(O(_e,t),O(ge,e),O(he,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}me(he),O(he,e)}function be(){me(he),me(ge),me(_e)}function xe(e){e.memoizedState!==null&&O(ve,e);var t=he.current,n=Hd(t,e.type);t!==n&&(O(ge,e),O(he,n))}function Se(e){ge.current===e&&(me(he),me(ge)),ve.current===e&&(me(ve),Qf._currentValue=ue)}var Ce,we;function Te(e){if(Ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ce=t&&t[1]||``,we=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ce+e+we}var Ee=!1;function De(e,t){if(!e||Ee)return``;Ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ee=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Te(n):``}function Oe(e,t){switch(e.tag){case 26:case 27:case 5:return Te(e.type);case 16:return Te(`Lazy`);case 13:return e.child!==t&&t!==null?Te(`Suspense Fallback`):Te(`Suspense`);case 19:return Te(`SuspenseList`);case 0:case 15:return De(e.type,!1);case 11:return De(e.type.render,!1);case 1:return De(e.type,!0);case 31:return Te(`Activity`);default:return``}}function ke(e){try{var t=``,n=null;do t+=Oe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ae=Object.prototype.hasOwnProperty,je=t.unstable_scheduleCallback,Me=t.unstable_cancelCallback,Ne=t.unstable_shouldYield,Pe=t.unstable_requestPaint,Fe=t.unstable_now,Ie=t.unstable_getCurrentPriorityLevel,k=t.unstable_ImmediatePriority,Le=t.unstable_UserBlockingPriority,Re=t.unstable_NormalPriority,ze=t.unstable_LowPriority,Be=t.unstable_IdlePriority,Ve=t.log,He=t.unstable_setDisableYieldValue,Ue=null,We=null;function Ge(e){if(typeof Ve==`function`&&He(e),We&&typeof We.setStrictMode==`function`)try{We.setStrictMode(Ue,e)}catch{}}var Ke=Math.clz32?Math.clz32:Ye,qe=Math.log,Je=Math.LN2;function Ye(e){return e>>>=0,e===0?32:31-(qe(e)/Je|0)|0}var Xe=256,Ze=262144,Qe=4194304;function $e(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function et(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=$e(n))):i=$e(o):i=$e(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=$e(n))):i=$e(o)):i=$e(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function tt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rt(){var e=Qe;return Qe<<=1,!(Qe&62914560)&&(Qe=4194304),e}function it(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function at(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ot(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ke(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&st(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function st(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ke(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ct(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function lt(e,t){var n=t&-t;return n=n&42?1:ut(n),(n&(e.suspendedLanes|t))===0?n:0}function ut(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function dt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function A(){var e=D.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ft(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var pt=Math.random().toString(36).slice(2),mt=`__reactFiber$`+pt,ht=`__reactProps$`+pt,j=`__reactContainer$`+pt,gt=`__reactEvents$`+pt,_t=`__reactListeners$`+pt,vt=`__reactHandles$`+pt,yt=`__reactResources$`+pt,bt=`__reactMarker$`+pt;function xt(e){delete e[mt],delete e[ht],delete e[gt],delete e[_t],delete e[vt]}function St(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[j]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[mt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Ct(e){if(e=e[mt]||e[j]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function wt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Tt(e){var t=e[yt];return t||=e[yt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Et(e){e[bt]=!0}var Dt=new Set,Ot={};function kt(e,t){At(e,t),At(e+`Capture`,t)}function At(e,t){for(Ot[e]=t,e=0;e<t.length;e++)Dt.add(t[e])}var jt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Mt={},Nt={};function Pt(e){return Ae.call(Nt,e)?!0:Ae.call(Mt,e)?!1:jt.test(e)?Nt[e]=!0:(Mt[e]=!0,!1)}function M(e,t,n){if(Pt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function Ft(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function It(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Lt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Rt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function zt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bt(e){if(!e._valueTracker){var t=Rt(e)?`checked`:`value`;e._valueTracker=zt(e,t,``+e[t])}}function Vt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Rt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Ht(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Ut=/[\n"\\]/g;function Wt(e){return e.replace(Ut,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Gt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Lt(t)):e.value!==``+Lt(t)&&(e.value=``+Lt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):qt(e,o,Lt(n)):qt(e,o,Lt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Lt(s):e.removeAttribute(`name`)}function Kt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Bt(e);return}n=n==null?``:``+Lt(n),t=t==null?n:``+Lt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Bt(e)}function qt(e,t,n){t===`number`&&Ht(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Jt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Lt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Yt(e,t,n){if(t!=null&&(t=``+Lt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Lt(n)}function Xt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(le(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Lt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Bt(e)}function Zt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function $t(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Qt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function N(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&$t(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&$t(e,o,t[o])}function en(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var tn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),nn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rn(e){return nn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function an(){}var on=null;function sn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cn=null,ln=null;function un(e){var t=Ct(e);if(t&&(e=t.stateNode)){var n=e[ht]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Gt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Wt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ht]||null;if(!a)throw Error(i(90));Gt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Vt(r)}break a;case`textarea`:Yt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Jt(e,!!n.multiple,t,!1)}}}var dn=!1;function fn(e,t,n){if(dn)return e(t,n);dn=!0;try{return e(t)}finally{if(dn=!1,(cn!==null||ln!==null)&&(bu(),cn&&(t=cn,e=ln,ln=cn=null,un(t),e)))for(t=0;t<e.length;t++)un(e[t])}}function pn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ht]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var mn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),hn=!1;if(mn)try{var gn={};Object.defineProperty(gn,"passive",{get:function(){hn=!0}}),window.addEventListener(`test`,gn,gn),window.removeEventListener(`test`,gn,gn)}catch{hn=!1}var _n=null,vn=null,yn=null;function bn(){if(yn)return yn;var e,t=vn,n=t.length,r,i=`value`in _n?_n.value:_n.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return yn=i.slice(e,1<r?1-r:void 0)}function xn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sn(){return!0}function Cn(){return!1}function wn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Sn:Cn,this.isPropagationStopped=Cn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Sn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Sn)},persist:function(){},isPersistent:Sn}),t}var Tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},En=wn(Tn),Dn=h({},Tn,{view:0,detail:0}),On=wn(Dn),kn,An,jn,Mn=h({},Dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Un,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==jn&&(jn&&e.type===`mousemove`?(kn=e.screenX-jn.screenX,An=e.screenY-jn.screenY):An=kn=0,jn=e),kn)},movementY:function(e){return`movementY`in e?e.movementY:An}}),Nn=wn(Mn),Pn=wn(h({},Mn,{dataTransfer:0})),Fn=wn(h({},Dn,{relatedTarget:0})),In=wn(h({},Tn,{animationName:0,elapsedTime:0,pseudoElement:0})),Ln=wn(h({},Tn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Rn=wn(h({},Tn,{data:0})),zn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Bn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Vn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Hn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vn[e])?!!t[e]:!1}function Un(){return Hn}var Wn=wn(h({},Dn,{key:function(e){if(e.key){var t=zn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=xn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Bn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Un,charCode:function(e){return e.type===`keypress`?xn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?xn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Gn=wn(h({},Mn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Kn=wn(h({},Dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Un})),qn=wn(h({},Tn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Jn=wn(h({},Mn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Yn=wn(h({},Tn,{newState:0,oldState:0})),Xn=[9,13,27,32],Zn=mn&&`CompositionEvent`in window,Qn=null;mn&&`documentMode`in document&&(Qn=document.documentMode);var $n=mn&&`TextEvent`in window&&!Qn,er=mn&&(!Zn||Qn&&8<Qn&&11>=Qn),tr=` `,nr=!1;function rr(e,t){switch(e){case`keyup`:return Xn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ir(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var ar=!1;function or(e,t){switch(e){case`compositionend`:return ir(t);case`keypress`:return t.which===32?(nr=!0,tr):null;case`textInput`:return e=t.data,e===tr&&nr?null:e;default:return null}}function sr(e,t){if(ar)return e===`compositionend`||!Zn&&rr(e,t)?(e=bn(),yn=vn=_n=null,ar=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return er&&t.locale!==`ko`?null:t.data;default:return null}}var cr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!cr[e.type]:t===`textarea`}function ur(e,t,n,r){cn?ln?ln.push(r):ln=[r]:cn=r,t=Ed(t,`onChange`),0<t.length&&(n=new En(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var dr=null,fr=null;function pr(e){yd(e,0)}function mr(e){if(Vt(wt(e)))return e}function hr(e,t){if(e===`change`)return t}var gr=!1;if(mn){var _r;if(mn){var vr=`oninput`in document;if(!vr){var yr=document.createElement(`div`);yr.setAttribute(`oninput`,`return;`),vr=typeof yr.oninput==`function`}_r=vr}else _r=!1;gr=_r&&(!document.documentMode||9<document.documentMode)}function br(){dr&&(dr.detachEvent(`onpropertychange`,xr),fr=dr=null)}function xr(e){if(e.propertyName===`value`&&mr(fr)){var t=[];ur(t,fr,e,sn(e)),fn(pr,t)}}function Sr(e,t,n){e===`focusin`?(br(),dr=t,fr=n,dr.attachEvent(`onpropertychange`,xr)):e===`focusout`&&br()}function Cr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return mr(fr)}function wr(e,t){if(e===`click`)return mr(t)}function Tr(e,t){if(e===`input`||e===`change`)return mr(t)}function Er(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Dr=typeof Object.is==`function`?Object.is:Er;function Or(e,t){if(Dr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ae.call(t,i)||!Dr(e[i],t[i]))return!1}return!0}function kr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ar(e,t){var n=kr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=kr(n)}}function jr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ht(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ht(e.document)}return t}function Nr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Pr=mn&&`documentMode`in document&&11>=document.documentMode,Fr=null,Ir=null,Lr=null,Rr=!1;function zr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rr||Fr==null||Fr!==Ht(r)||(r=Fr,`selectionStart`in r&&Nr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lr&&Or(Lr,r)||(Lr=r,r=Ed(Ir,`onSelect`),0<r.length&&(t=new En(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Fr)))}function Br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Vr={animationend:Br(`Animation`,`AnimationEnd`),animationiteration:Br(`Animation`,`AnimationIteration`),animationstart:Br(`Animation`,`AnimationStart`),transitionrun:Br(`Transition`,`TransitionRun`),transitionstart:Br(`Transition`,`TransitionStart`),transitioncancel:Br(`Transition`,`TransitionCancel`),transitionend:Br(`Transition`,`TransitionEnd`)},Hr={},Ur={};mn&&(Ur=document.createElement(`div`).style,`AnimationEvent`in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),`TransitionEvent`in window||delete Vr.transitionend.transition);function Wr(e){if(Hr[e])return Hr[e];if(!Vr[e])return e;var t=Vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ur)return Hr[e]=t[n];return e}var Gr=Wr(`animationend`),Kr=Wr(`animationiteration`),qr=Wr(`animationstart`),Jr=Wr(`transitionrun`),Yr=Wr(`transitionstart`),Xr=Wr(`transitioncancel`),Zr=Wr(`transitionend`),Qr=new Map,$r=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);$r.push(`scrollEnd`);function ei(e,t){Qr.set(e,t),kt(t,[e])}var ti=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ni=[],ri=0,ii=0;function ai(){for(var e=ri,t=ii=ri=0;t<e;){var n=ni[t];ni[t++]=null;var r=ni[t];ni[t++]=null;var i=ni[t];ni[t++]=null;var a=ni[t];if(ni[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&li(n,i,a)}}function oi(e,t,n,r){ni[ri++]=e,ni[ri++]=t,ni[ri++]=n,ni[ri++]=r,ii|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function si(e,t,n,r){return oi(e,t,n,r),ui(e)}function ci(e,t){return oi(e,null,null,t),ui(e)}function li(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ke(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ui(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var di={};function fi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(e,t,n,r){return new fi(e,t,n,r)}function mi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hi(e,t){var n=e.alternate;return n===null?(n=pi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function gi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function _i(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)mi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,he.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case re:return e=pi(31,n,t,a),e.elementType=re,e.lanes=o,e;case y:return vi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=pi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=pi(13,n,t,a),e.elementType=ee,e.lanes=o,e;case te:return e=pi(19,n,t,a),e.elementType=te,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ne:s=14;break a;case T:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=pi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function vi(e,t,n,r){return e=pi(7,e,r,t),e.lanes=n,e}function yi(e,t,n){return e=pi(6,e,null,t),e.lanes=n,e}function bi(e){var t=pi(18,null,null,0);return t.stateNode=e,t}function xi(e,t,n){return t=pi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Si=new WeakMap;function Ci(e,t){if(typeof e==`object`&&e){var n=Si.get(e);return n===void 0?(t={value:e,source:t,stack:ke(t)},Si.set(e,t),t):n}return{value:e,source:t,stack:ke(t)}}var wi=[],Ti=0,Ei=null,Di=0,Oi=[],ki=0,Ai=null,ji=1,Mi=``;function Ni(e,t){wi[Ti++]=Di,wi[Ti++]=Ei,Ei=e,Di=t}function Pi(e,t,n){Oi[ki++]=ji,Oi[ki++]=Mi,Oi[ki++]=Ai,Ai=e;var r=ji;e=Mi;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var a=32-Ke(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ji=1<<32-Ke(t)+i|n<<i|r,Mi=a+e}else ji=1<<a|n<<i|r,Mi=e}function Fi(e){e.return!==null&&(Ni(e,1),Pi(e,1,0))}function Ii(e){for(;e===Ei;)Ei=wi[--Ti],wi[Ti]=null,Di=wi[--Ti],wi[Ti]=null;for(;e===Ai;)Ai=Oi[--ki],Oi[ki]=null,Mi=Oi[--ki],Oi[ki]=null,ji=Oi[--ki],Oi[ki]=null}function Li(e,t){Oi[ki++]=ji,Oi[ki++]=Mi,Oi[ki++]=Ai,ji=t.id,Mi=t.overflow,Ai=e}var Ri=null,P=null,F=!1,zi=null,I=!1,Bi=Error(i(519));function Vi(e){throw qi(Ci(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Bi}function Hi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[mt]=e,t[ht]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Kt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Xt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=an),t=!0):t=!1,t||Vi(e,!0)}function Ui(e){for(Ri=e.return;Ri;)switch(Ri.tag){case 5:case 31:case 13:I=!1;return;case 27:case 3:I=!0;return;default:Ri=Ri.return}}function Wi(e){if(e!==Ri)return!1;if(!F)return Ui(e),F=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&P&&Vi(e),Ui(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));P=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));P=uf(e)}else t===27?(t=P,Zd(e.type)?(e=lf,lf=null,P=e):P=t):P=Ri?cf(e.stateNode.nextSibling):null;return!0}function Gi(){P=Ri=null,F=!1}function Ki(){var e=zi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),zi=null),e}function qi(e){zi===null?zi=[e]:zi.push(e)}var Ji=pe(null),Yi=null,Xi=null;function Zi(e,t,n){O(Ji,t._currentValue),t._currentValue=n}function Qi(e){e._currentValue=Ji.current,me(Ji)}function $i(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ea(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),$i(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),$i(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ta(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Dr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ve.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ea(t,e,n,r),t.flags|=262144}function na(e){for(e=e.firstContext;e!==null;){if(!Dr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ra(e){Yi=e,Xi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ia(e){return oa(Yi,e)}function aa(e,t){return Yi===null&&ra(e),oa(e,t)}function oa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Xi===null){if(e===null)throw Error(i(308));Xi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Xi=Xi.next=t;return n}var sa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ca=t.unstable_scheduleCallback,la=t.unstable_NormalPriority,ua={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function da(){return{controller:new sa,data:new Map,refCount:0}}function fa(e){e.refCount--,e.refCount===0&&ca(la,function(){e.controller.abort()})}var pa=null,ma=0,ha=0,ga=null;function _a(e,t){if(pa===null){var n=pa=[];ma=0,ha=dd(),ga={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ma++,t.then(va,va),t}function va(){if(--ma===0&&pa!==null){ga!==null&&(ga.status=`fulfilled`);var e=pa;pa=null,ha=0,ga=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ya(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ba=E.S;E.S=function(e,t){eu=Fe(),typeof t==`object`&&t&&typeof t.then==`function`&&_a(e,t),ba!==null&&ba(e,t)};var xa=pe(null);function Sa(){var e=xa.current;return e===null?K.pooledCache:e}function Ca(e,t){t===null?O(xa,xa.current):O(xa,t.pool)}function wa(){var e=Sa();return e===null?null:{parent:ua._currentValue,pool:e}}var Ta=Error(i(460)),Ea=Error(i(474)),Da=Error(i(542)),Oa={then:function(){}};function ka(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Aa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(an,an),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Pa(e),e;default:if(typeof t.status==`string`)t.then(an,an);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Pa(e),e}throw Ma=t,Ta}}function ja(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ma=e,Ta):e}}var Ma=null;function Na(){if(Ma===null)throw Error(i(459));var e=Ma;return Ma=null,e}function Pa(e){if(e===Ta||e===Da)throw Error(i(483))}var Fa=null,Ia=0;function La(e){var t=Ia;return Ia+=1,Fa===null&&(Fa=[]),Aa(Fa,e,t)}function Ra(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function za(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ba(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=hi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=yi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===T&&ja(i)===t.type)?(t=a(t,n.props),Ra(t,n),t.return=e,t):(t=_i(n.type,n.key,n.props,null,e.mode,r),Ra(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=xi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=vi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=yi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=_i(t.type,t.key,t.props,null,e.mode,n),Ra(n,t),n.return=e,n;case v:return t=xi(t,e.mode,n),t.return=e,t;case T:return t=ja(t),f(e,t,n)}if(le(t)||oe(t))return t=vi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,La(t),n);if(t.$$typeof===C)return f(e,aa(e,t),n);za(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case T:return n=ja(n),p(e,t,n,r)}if(le(n)||oe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,La(n),r);if(n.$$typeof===C)return p(e,t,aa(e,n),r);za(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case T:return r=ja(r),m(e,t,n,r,i)}if(le(r)||oe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,La(r),i);if(r.$$typeof===C)return m(e,t,n,aa(t,r),i);za(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),F&&Ni(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return F&&Ni(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),F&&Ni(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),F&&Ni(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return F&&Ni(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),F&&Ni(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===T&&ja(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ra(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=vi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=_i(o.type,o.key,o.props,null,e.mode,c),Ra(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=xi(o,e.mode,c),c.return=e,e=c}return s(e);case T:return o=ja(o),b(e,r,o,c)}if(le(o))return h(e,r,o,c);if(oe(o)){if(l=oe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,La(o),c);if(o.$$typeof===C)return b(e,r,aa(e,o),c);za(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=yi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ia=0;var i=b(e,t,n,r);return Fa=null,i}catch(t){if(t===Ta||t===Da)throw t;var a=pi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Va=Ba(!0),Ha=Ba(!1),Ua=!1;function Wa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ga(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ui(e),li(e,null,n),t}return oi(e,r,t,n),ui(e)}function Ja(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}function Ya(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Xa=!1;function Za(){if(Xa){var e=ga;if(e!==null)throw e}}function Qa(e,t,n,r){Xa=!1;var i=e.updateQueue;Ua=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===ha&&(Xa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ua=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function $a(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function eo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)$a(n[e],t)}var to=pe(null),no=pe(0);function ro(e,t){e=Wl,O(no,e),O(to,t),Wl=e|t.baseLanes}function io(){O(no,Wl),O(to,to.current)}function ao(){Wl=no.current,me(to),me(no)}var oo=pe(null),so=null;function co(e){var t=e.alternate;O(mo,mo.current&1),O(oo,e),so===null&&(t===null||to.current!==null||t.memoizedState!==null)&&(so=e)}function lo(e){O(mo,mo.current),O(oo,e),so===null&&(so=e)}function uo(e){e.tag===22?(O(mo,mo.current),O(oo,e),so===null&&(so=e)):fo(e)}function fo(){O(mo,mo.current),O(oo,oo.current)}function po(e){me(oo),so===e&&(so=null),me(mo)}var mo=pe(0);function ho(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var go=0,L=null,R=null,z=null,_o=!1,vo=!1,yo=!1,bo=0,xo=0,So=null,Co=0;function B(){throw Error(i(321))}function wo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dr(e[n],t[n]))return!1;return!0}function To(e,t,n,r,i,a){return go=a,L=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Vs:Hs,yo=!1,a=n(r,i),yo=!1,vo&&(a=Do(t,n,r,i)),Eo(e),a}function Eo(e){E.H=Bs;var t=R!==null&&R.next!==null;if(go=0,z=R=L=null,_o=!1,xo=0,So=null,t)throw Error(i(300));e===null||ac||(e=e.dependencies,e!==null&&na(e)&&(ac=!0))}function Do(e,t,n,r){L=e;var a=0;do{if(vo&&(So=null),xo=0,vo=!1,25<=a)throw Error(i(301));if(a+=1,z=R=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}E.H=Us,o=t(n,r)}while(vo);return o}function Oo(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?Po(t):t,e=e.useState()[0],(R===null?null:R.memoizedState)!==e&&(L.flags|=1024),t}function ko(){var e=bo!==0;return bo=0,e}function Ao(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function jo(e){if(_o){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}_o=!1}go=0,z=R=L=null,vo=!1,xo=bo=0,So=null}function Mo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return z===null?L.memoizedState=z=e:z=z.next=e,z}function V(){if(R===null){var e=L.alternate;e=e===null?null:e.memoizedState}else e=R.next;var t=z===null?L.memoizedState:z.next;if(t!==null)z=t,R=e;else{if(e===null)throw L.alternate===null?Error(i(467)):Error(i(310));R=e,e={memoizedState:R.memoizedState,baseState:R.baseState,baseQueue:R.baseQueue,queue:R.queue,next:null},z===null?L.memoizedState=z=e:z=z.next=e}return z}function No(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Po(e){var t=xo;return xo+=1,So===null&&(So=[]),e=Aa(So,e,t),t=L,(z===null?t.memoizedState:z.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Vs:Hs),e}function Fo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Po(e);if(e.$$typeof===C)return ia(e)}throw Error(i(438,String(e)))}function Io(e){var t=null,n=L.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=L.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=No(),L.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function Lo(e,t){return typeof t==`function`?t(e):t}function Ro(e){return zo(V(),R,e)}function zo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(go&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ha&&(d=!0);else if((go&p)===p){u=u.next,p===ha&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,L.lanes|=p,Gl|=p;f=u.action,yo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,L.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Dr(o,e.memoizedState)&&(ac=!0,d&&(n=ga,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Bo(e){var t=V(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Dr(o,t.memoizedState)||(ac=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Vo(e,t,n){var r=L,a=V(),o=F;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Dr((R||a).memoizedState,n);if(s&&(a.memoizedState=n,ac=!0),a=a.queue,fs(Wo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||z!==null&&z.memoizedState.tag&1){if(r.flags|=2048,ss(9,{destroy:void 0},Uo.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||go&127||Ho(r,t,n)}return n}function Ho(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=L.updateQueue,t===null?(t=No(),L.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uo(e,t,n,r){t.value=n,t.getSnapshot=r,Go(t)&&Ko(e)}function Wo(e,t,n){return n(function(){Go(t)&&Ko(e)})}function Go(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dr(e,n)}catch{return!0}}function Ko(e){var t=ci(e,2);t!==null&&hu(t,e,2)}function qo(e){var t=Mo();if(typeof e==`function`){var n=e;if(e=n(),yo){Ge(!0);try{n()}finally{Ge(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:e},t}function Jo(e,t,n,r){return e.baseState=n,zo(e,R,typeof r==`function`?r:Lo)}function Yo(e,t,n,r,a){if(Ls(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};E.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Xo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Xo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),Zo(e,t,s)}catch(n){$o(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),Zo(e,t,a)}catch(n){$o(e,t,n)}}function Zo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Qo(e,t,n)},function(n){return $o(e,t,n)}):Qo(e,t,n)}function Qo(e,t,n){t.status=`fulfilled`,t.value=n,es(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Xo(e,n)))}function $o(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,es(t),t=t.next;while(t!==r)}e.action=null}function es(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ts(e,t){return t}function ns(e,t){if(F){var n=K.formState;if(n!==null){a:{var r=L;if(F){if(P){b:{for(var i=P,a=I;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){P=cf(i.nextSibling),r=i.data===`F!`;break a}}Vi(r)}r=!1}r&&(t=n[0])}}return n=Mo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ts,lastRenderedState:t},n.queue=r,n=Ps.bind(null,L,r),r.dispatch=n,r=qo(!1),a=Is.bind(null,L,!1,r.queue),r=Mo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Yo.bind(null,L,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function rs(e){return is(V(),R,e)}function is(e,t,n){if(t=zo(e,t,ts)[0],e=Ro(Lo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Po(t)}catch(e){throw e===Ta?Da:e}else r=t;t=V();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(L.flags|=2048,ss(9,{destroy:void 0},as.bind(null,i,n),null)),[r,a,e]}function as(e,t){e.action=t}function os(e){var t=V(),n=R;if(n!==null)return is(t,n,e);V(),t=t.memoizedState,n=V();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ss(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=L.updateQueue,t===null&&(t=No(),L.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function cs(){return V().memoizedState}function ls(e,t,n,r){var i=Mo();L.flags|=e,i.memoizedState=ss(1|t,{destroy:void 0},n,r===void 0?null:r)}function us(e,t,n,r){var i=V();r=r===void 0?null:r;var a=i.memoizedState.inst;R!==null&&r!==null&&wo(r,R.memoizedState.deps)?i.memoizedState=ss(t,a,n,r):(L.flags|=e,i.memoizedState=ss(1|t,a,n,r))}function ds(e,t){ls(8390656,8,e,t)}function fs(e,t){us(2048,8,e,t)}function ps(e){L.flags|=4;var t=L.updateQueue;if(t===null)t=No(),L.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ms(e){var t=V().memoizedState;return ps({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function hs(e,t){return us(4,2,e,t)}function gs(e,t){return us(4,4,e,t)}function _s(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vs(e,t,n){n=n==null?null:n.concat([e]),us(4,4,_s.bind(null,t,e),n)}function ys(){}function bs(e,t){var n=V();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&wo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xs(e,t){var n=V();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&wo(t,r[1]))return r[0];if(r=e(),yo){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r}function Ss(e,t,n){return n===void 0||go&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),L.lanes|=e,Gl|=e,n)}function Cs(e,t,n,r){return Dr(n,t)?n:to.current===null?!(go&42)||go&1073741824&&!(J&261930)?(ac=!0,e.memoizedState=n):(e=mu(),L.lanes|=e,Gl|=e,t):(e=Ss(e,n,r),Dr(e,t)||(ac=!0),e)}function ws(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,Is(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Fs(e,t,ya(c,r),pu(e)):Fs(e,t,r,pu(e))}catch(n){Fs(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function Ts(){}function Es(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Ds(e).queue;ws(e,a,t,ue,n===null?Ts:function(){return Os(e),n(r)})}function Ds(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Os(e){var t=Ds(e);t.next===null&&(t=e.alternate.memoizedState),Fs(e,t.next.queue,{},pu())}function ks(){return ia(Qf)}function As(){return V().memoizedState}function js(){return V().memoizedState}function Ms(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ka(n);var r=qa(t,e,n);r!==null&&(hu(r,t,n),Ja(r,t,n)),t={cache:da()},e.payload=t;return}t=t.return}}function Ns(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ls(e)?Rs(t,n):(n=si(e,t,n,r),n!==null&&(hu(n,e,r),zs(n,t,r)))}function Ps(e,t,n){Fs(e,t,n,pu())}function Fs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ls(e))Rs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Dr(s,o))return oi(e,t,i,0),K===null&&ai(),!1}catch{}if(n=si(e,t,i,r),n!==null)return hu(n,e,r),zs(n,t,r),!0}return!1}function Is(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ls(e)){if(t)throw Error(i(479))}else t=si(e,n,r,2),t!==null&&hu(t,e,2)}function Ls(e){var t=e.alternate;return e===L||t!==null&&t===L}function Rs(e,t){vo=_o=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}var Bs={readContext:ia,use:Fo,useCallback:B,useContext:B,useEffect:B,useImperativeHandle:B,useLayoutEffect:B,useInsertionEffect:B,useMemo:B,useReducer:B,useRef:B,useState:B,useDebugValue:B,useDeferredValue:B,useTransition:B,useSyncExternalStore:B,useId:B,useHostTransitionStatus:B,useFormState:B,useActionState:B,useOptimistic:B,useMemoCache:B,useCacheRefresh:B};Bs.useEffectEvent=B;var Vs={readContext:ia,use:Fo,useCallback:function(e,t){return Mo().memoizedState=[e,t===void 0?null:t],e},useContext:ia,useEffect:ds,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ls(4194308,4,_s.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ls(4194308,4,e,t)},useInsertionEffect:function(e,t){ls(4,2,e,t)},useMemo:function(e,t){var n=Mo();t=t===void 0?null:t;var r=e();if(yo){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Mo();if(n!==void 0){var i=n(t);if(yo){Ge(!0);try{n(t)}finally{Ge(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ns.bind(null,L,e),[r.memoizedState,e]},useRef:function(e){var t=Mo();return e={current:e},t.memoizedState=e},useState:function(e){e=qo(e);var t=e.queue,n=Ps.bind(null,L,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ys,useDeferredValue:function(e,t){return Ss(Mo(),e,t)},useTransition:function(){var e=qo(!1);return e=ws.bind(null,L,e.queue,!0,!1),Mo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=L,a=Mo();if(F){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Ho(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ds(Wo.bind(null,r,o,e),[e]),r.flags|=2048,ss(9,{destroy:void 0},Uo.bind(null,r,o,n,t),null),n},useId:function(){var e=Mo(),t=K.identifierPrefix;if(F){var n=Mi,r=ji;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=bo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Co++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:ks,useFormState:ns,useActionState:ns,useOptimistic:function(e){var t=Mo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Is.bind(null,L,!0,n),n.dispatch=t,[e,t]},useMemoCache:Io,useCacheRefresh:function(){return Mo().memoizedState=Ms.bind(null,L)},useEffectEvent:function(e){var t=Mo(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Hs={readContext:ia,use:Fo,useCallback:bs,useContext:ia,useEffect:fs,useImperativeHandle:vs,useInsertionEffect:hs,useLayoutEffect:gs,useMemo:xs,useReducer:Ro,useRef:cs,useState:function(){return Ro(Lo)},useDebugValue:ys,useDeferredValue:function(e,t){return Cs(V(),R.memoizedState,e,t)},useTransition:function(){var e=Ro(Lo)[0],t=V().memoizedState;return[typeof e==`boolean`?e:Po(e),t]},useSyncExternalStore:Vo,useId:As,useHostTransitionStatus:ks,useFormState:rs,useActionState:rs,useOptimistic:function(e,t){return Jo(V(),R,e,t)},useMemoCache:Io,useCacheRefresh:js};Hs.useEffectEvent=ms;var Us={readContext:ia,use:Fo,useCallback:bs,useContext:ia,useEffect:fs,useImperativeHandle:vs,useInsertionEffect:hs,useLayoutEffect:gs,useMemo:xs,useReducer:Bo,useRef:cs,useState:function(){return Bo(Lo)},useDebugValue:ys,useDeferredValue:function(e,t){var n=V();return R===null?Ss(n,e,t):Cs(n,R.memoizedState,e,t)},useTransition:function(){var e=Bo(Lo)[0],t=V().memoizedState;return[typeof e==`boolean`?e:Po(e),t]},useSyncExternalStore:Vo,useId:As,useHostTransitionStatus:ks,useFormState:os,useActionState:os,useOptimistic:function(e,t){var n=V();return R===null?(n.baseState=e,[e,n.queue.dispatch]):Jo(n,R,e,t)},useMemoCache:Io,useCacheRefresh:js};Us.useEffectEvent=ms;function Ws(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Gs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ka(r);i.payload=t,n!=null&&(i.callback=n),t=qa(e,i,r),t!==null&&(hu(t,e,r),Ja(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ka(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=qa(e,i,r),t!==null&&(hu(t,e,r),Ja(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ka(n);r.tag=2,t!=null&&(r.callback=t),t=qa(e,r,n),t!==null&&(hu(t,e,n),Ja(t,e,n))}};function Ks(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Or(n,r)||!Or(i,a):!0}function qs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Gs.enqueueReplaceState(t,t.state,null)}function Js(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ys(e){ti(e)}function Xs(e){console.error(e)}function Zs(e){ti(e)}function Qs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){return n=Ka(n),n.tag=3,n.payload={element:null},n.callback=function(){Qs(e,t)},n}function tc(e){return e=Ka(e),e.tag=3,e}function nc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){$s(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){$s(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function rc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ta(t,n,a,!0),n=oo.current,n!==null){switch(n.tag){case 31:case 13:return so===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Oa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Oa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(F)return t=oo.current,t===null?(r!==Bi&&(t=Error(i(423),{cause:r}),qi(Ci(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ci(r,n),a=ec(e.stateNode,r,a),Ya(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Bi&&(e=Error(i(422),{cause:r}),qi(Ci(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ci(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=Ci(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=ec(n.stateNode,r,e),Ya(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=tc(a),nc(a,e,n,r),Ya(n,a),!1}n=n.return}while(n!==null);return!1}var ic=Error(i(461)),ac=!1;function oc(e,t,n,r){t.child=e===null?Ha(t,null,n,r):Va(t,e.child,n,r)}function sc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ra(t),r=To(e,t,n,o,a,i),s=ko(),e!==null&&!ac?(Ao(e,t,i),Ac(e,t,i)):(F&&s&&Fi(t),t.flags|=1,oc(e,t,r,i),t.child)}function cc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!mi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,lc(e,t,a,r,i)):(e=_i(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Or:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=hi(a,r),e.ref=t.ref,e.return=t,t.child=e}function lc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Or(a,r)&&e.ref===t.ref){if(ac=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(ac=!0);else return t.lanes=e.lanes,Ac(e,t,i)}}return _c(e,t,n,r,i)}function uc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return fc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ca(t,a===null?null:a.cachePool),a===null?io():ro(t,a),uo(t);else return r=t.lanes=536870912,fc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ca(t,null),io(),fo(t)):(Ca(t,a.cachePool),ro(t,a),fo(t),t.memoizedState=null);return oc(e,t,i,n),t.child}function dc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fc(e,t,n,r,i){var a=Sa();return a=a===null?null:{parent:ua._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ca(t,null),io(),uo(t),e!==null&&ta(e,t,r,!0),t.childLanes=i,null}function pc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function mc(e,t,n){return Va(t,e.child,null,n),e=pc(t,t.pendingProps),e.flags|=2,po(t),t.memoizedState=null,e}function hc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(F){if(r.mode===`hidden`)return e=pc(t,r),t.lanes=536870912,dc(null,e);if(lo(t),(e=P)?(e=rf(e,I),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ai===null?null:{id:ji,overflow:Mi},retryLane:536870912,hydrationErrors:null},n=bi(e),n.return=t,t.child=n,Ri=t,P=null)):e=null,e===null)throw Vi(t);return t.lanes=536870912,null}return pc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(lo(t),a){if(t.flags&256)t.flags&=-257,t=mc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(ac||ta(e,t,n,!1),a=(n&e.childLanes)!==0,ac||a){if(r=K,r!==null&&(s=lt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ci(e,s),hu(r,e,s),ic;Du(),t=mc(e,t,n)}else e=o.treeContext,P=cf(s.nextSibling),Ri=t,F=!0,zi=null,I=!1,e!==null&&Li(t,e),t=pc(t,r),t.flags|=4096;return t}return e=hi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function gc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function _c(e,t,n,r,i){return ra(t),n=To(e,t,n,r,void 0,i),r=ko(),e!==null&&!ac?(Ao(e,t,i),Ac(e,t,i)):(F&&r&&Fi(t),t.flags|=1,oc(e,t,n,i),t.child)}function vc(e,t,n,r,i,a){return ra(t),t.updateQueue=null,n=Do(t,r,n,i),Eo(e),r=ko(),e!==null&&!ac?(Ao(e,t,a),Ac(e,t,a)):(F&&r&&Fi(t),t.flags|=1,oc(e,t,n,a),t.child)}function yc(e,t,n,r,i){if(ra(t),t.stateNode===null){var a=di,o=n.contextType;typeof o==`object`&&o&&(a=ia(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Gs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Wa(t),o=n.contextType,a.context=typeof o==`object`&&o?ia(o):di,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ws(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Gs.enqueueReplaceState(a,a.state,null),Qa(t,r,a,i),Za(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Js(n,s);a.props=c;var l=a.context,u=n.contextType;o=di,typeof u==`object`&&u&&(o=ia(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&qs(t,a,r,o),Ua=!1;var f=t.memoizedState;a.state=f,Qa(t,r,a,i),Za(),l=t.memoizedState,s||f!==l||Ua?(typeof d==`function`&&(Ws(t,n,d,r),l=t.memoizedState),(c=Ua||Ks(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ga(e,t),o=t.memoizedProps,u=Js(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=di,typeof l==`object`&&l&&(c=ia(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&qs(t,a,r,c),Ua=!1,f=t.memoizedState,a.state=f,Qa(t,r,a,i),Za();var p=t.memoizedState;o!==d||f!==p||Ua||e!==null&&e.dependencies!==null&&na(e.dependencies)?(typeof s==`function`&&(Ws(t,n,s,r),p=t.memoizedState),(u=Ua||Ks(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&na(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,gc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Va(t,e.child,null,i),t.child=Va(t,null,n,i)):oc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function bc(e,t,n,r){return Gi(),t.flags|=256,oc(e,t,n,r),t.child}var H={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:wa()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(mo.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(F){if(a?co(t):fo(t),(e=P)?(e=rf(e,I),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ai===null?null:{id:ji,overflow:Mi},retryLane:536870912,hydrationErrors:null},n=bi(e),n.return=t,t.child=n,Ri=t,P=null)):e=null,e===null)throw Vi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(fo(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=vi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=H,dc(null,r)):(co(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(co(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(fo(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=vi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Va(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=H,t=dc(null,r)):(fo(t),t.child=e.child,t.flags|=128,t=null);else if(co(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,qi({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ac||ta(e,t,n,!1),s=(n&e.childLanes)!==0,ac||s){if(s=K,s!==null&&(r=lt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ci(e,r),hu(s,e,r),ic;af(c)||Du(),t=Ec(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,P=cf(c.nextSibling),Ri=t,F=!0,zi=null,I=!1,e!==null&&Li(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(fo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=hi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=vi(c,a,n,null),c.flags|=2):c=hi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,dc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=wa():(l=ua._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=H,dc(e.child,r)):(co(t),n=e.child,e=n.sibling,n=hi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=pi(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return Va(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$i(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=mo.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,O(mo,o),oc(e,t,r,n),r=F?Di:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ho(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ho(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ta(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=hi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&na(e)))}function Mc(e,t,n){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),Zi(t,ua,e.memoizedState.cache),Gi();break;case 27:case 5:xe(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:Zi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,lo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(co(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(co(t),t.flags|=128,null);co(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(ta(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(mo,mo.current),r)break;return null;case 22:return t.lanes=0,uc(e,t,n,t.pendingProps);case 24:Zi(t,ua,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)ac=!0;else{if(!jc(e,n)&&!(t.flags&128))return ac=!1,Mc(e,t,n);ac=!!(e.flags&131072)}}else ac=!1,F&&t.flags&1048576&&Pi(t,Di,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ja(t.elementType),t.type=e,typeof e==`function`)mi(e)?(r=Js(e,r),t.tag=1,t=yc(null,t,e,r,n)):(t.tag=0,t=_c(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=sc(null,t,e,r,n);break a}if(a===ne){t.tag=14,t=cc(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(i(306,t,``))}}return t;case 0:return _c(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Js(r,t.pendingProps),yc(e,t,r,a,n);case 3:a:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ga(e,t),Qa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Zi(t,ua,r),r!==o.cache&&ea(t,[ua],n,!0),Za(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=bc(e,t,r,n);break a}if(r!==a){a=Ci(Error(i(424)),t),qi(a),t=bc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(P=cf(e.firstChild),Ri=t,F=!0,zi=null,I=!0,n=Ha(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Gi(),r===a){t=Ac(e,t,n);break a}oc(e,t,r,n)}t=t.child}return t;case 26:return gc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:F||(n=t.type,e=t.pendingProps,r=Bd(_e.current).createElement(n),r[mt]=t,r[ht]=e,Pd(r,n,e),Et(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xe(t),e===null&&F&&(r=t.stateNode=ff(t.type,t.pendingProps,_e.current),Ri=t,I=!0,a=P,Zd(t.type)?(lf=a,P=cf(r.firstChild)):P=a),oc(e,t,t.pendingProps.children,n),gc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&F&&((a=r=P)&&(r=tf(r,t.type,t.pendingProps,I),r===null?a=!1:(t.stateNode=r,Ri=t,P=cf(r.firstChild),I=!1,a=!0)),a||Vi(t)),xe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=To(e,t,Oo,null,null,n),Qf._currentValue=a),gc(e,t),oc(e,t,r,n),t.child;case 6:return e===null&&F&&((e=n=P)&&(n=nf(n,t.pendingProps,I),n===null?e=!1:(t.stateNode=n,Ri=t,P=null,e=!0)),e||Vi(t)),null;case 13:return Cc(e,t,n);case 4:return ye(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Va(t,null,r,n):oc(e,t,r,n),t.child;case 11:return sc(e,t,t.type,t.pendingProps,n);case 7:return oc(e,t,t.pendingProps,n),t.child;case 8:return oc(e,t,t.pendingProps.children,n),t.child;case 12:return oc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Zi(t,t.type,r.value),oc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ra(t),a=ia(a),r=r(a),t.flags|=1,oc(e,t,r,n),t.child;case 14:return cc(e,t,t.type,t.pendingProps,n);case 15:return lc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return hc(e,t,n);case 22:return uc(e,t,n,t.pendingProps);case 24:return ra(t),r=ia(ua),e===null?(a=Sa(),a===null&&(a=K,o=da(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Wa(t),Zi(t,ua,a)):((e.lanes&n)!==0&&(Ga(e,t),Qa(t,null,null,n),Za()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Zi(t,ua,r),r!==a.cache&&ea(t,[ua],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Zi(t,ua,r))),oc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ma=Oa,Ea}}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(wu())e.flags|=8192;else throw Ma=Oa,Ea}}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:rt(),e.lanes|=t,Yl|=t)}function Rc(e,t){if(!F)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(Ii(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Qi(ua),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Wi(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ki())),U(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(U(t),Fc(t,a,null,r,n)):(U(t),Ic(t,o))):o?o===e.memoizedState?(U(t),t.flags&=-16777217):(Pc(t),U(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),U(t),Fc(t,a,e,r,n)),null;case 27:if(Se(t),n=_e.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}e=he.current,Wi(t)?Hi(t,e):(e=ff(a,r,n),t.stateNode=e,Pc(t))}return U(t),null;case 5:if(Se(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}if(o=he.current,Wi(t))Hi(t,o);else{var s=Bd(_e.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[mt]=t,o[ht]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return U(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=_e.current,Wi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ri,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[mt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Vi(t,!0)}else e=Bd(e).createTextNode(r),e[mt]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Wi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[mt]=t}else Gi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=Ki(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(po(t),t):(po(t),null);if(t.flags&128)throw Error(i(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Wi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[mt]=t}else Gi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),a=!1}else a=Ki(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(po(t),t):(po(t),null)}return po(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),U(t),null);case 4:return be(),e===null&&Sd(t.stateNode.containerInfo),U(t),null;case 10:return Qi(t.type),U(t),null;case 19:if(me(mo),r=t.memoizedState,r===null)return U(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)Rc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ho(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)gi(n,e),n=n.sibling;return O(mo,mo.current&1|2),F&&Ni(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Fe()>tu&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=ho(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!F)return U(t),null}else 2*Fe()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(U(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Fe(),e.sibling=null,n=mo.current,O(mo,a?n&1|2:n&1),F&&Ni(t,r.treeForkCount),e);case 22:case 23:return po(t),ao(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&me(xa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Qi(ua),U(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Bc(e,t){switch(Ii(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qi(ua),be(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Se(t),null;case 31:if(t.memoizedState!==null){if(po(t),t.alternate===null)throw Error(i(340));Gi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(po(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Gi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(mo),null;case 4:return be(),null;case 10:return Qi(t.type),null;case 22:case 23:return po(t),ao(),e!==null&&me(xa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Qi(ua),null;case 25:return null;default:return null}}function Vc(e,t){switch(Ii(t),t.tag){case 3:Qi(ua),be();break;case 26:case 27:case 5:Se(t);break;case 4:be();break;case 31:t.memoizedState!==null&&po(t);break;case 13:po(t);break;case 19:me(mo);break;case 10:Qi(t.type);break;case 22:case 23:po(t),ao(),e!==null&&me(xa);break;case 24:Qi(ua)}}function Hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Uc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Wc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{eo(t,n)}catch(t){Z(e,e.return,t)}}}function Gc(e,t,n){n.props=Js(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Jc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Yc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ht]=t}catch(t){Z(e,e.return,t)}}function Xc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Zc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=an));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[mt]=e,t[ht]=n}catch(t){Z(e,e.return,t)}}var tl=!1,nl=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Mr(e),Nr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Js(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Hc(5,n);break;case 1:if(xl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Js(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Wc(n),r&512&&Kc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{eo(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&el(n);case 26:case 5:xl(e,n),t===null&&r&4&&Jc(n),r&512&&Kc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||tl,!r){t=t!==null&&t.memoizedState!==null||nl,i=tl;var a=nl;tl=r,(nl=t)&&!a?Cl(e,n,!!(n.subtreeFlags&8772)):xl(e,n),tl=i,nl=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(We&&typeof We.onCommitFiberUnmount==`function`)try{We.onCommitFiberUnmount(Ue,n)}catch{}switch(n.tag){case 26:nl||qc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nl||qc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:nl||qc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null){if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Uc(2,n,t),nl||Uc(4,n,t),ul(e,t,n);break;case 1:nl||(qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Gc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:nl=(r=nl)||n.memoizedState!==null,ul(e,t,n),nl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Uc(3,e,e.return),Hc(3,e),Uc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&64&&tl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[bt]||o[mt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[mt]=e,Et(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[mt]=e,Et(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode)}else e.stateNode=If(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),n!==null&&r&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),e.flags&32){a=e.stateNode;try{Zt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Yc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Fe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tl,d=nl;if(tl=u||a,nl=d||l,gl(t,e),nl=d,tl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||tl||nl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Xc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;$c(e,Zc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Zt(o,``),n.flags&=-33),$c(e,Zc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Qc(e,Zc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uc(4,t,t.return),Sl(t);break;case 1:qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Gc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:qc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Hc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)$a(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Wc(a),Kc(a,a.return);break;case 27:el(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Jc(a),Kc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Kc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&fa(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fa(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Hc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fa(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Uc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Uc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:fa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=ia(ua),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ia(ua).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:E.T===null?A():dd()}function mu(){if(Jl===0){if(!(J&536870912)||F){var e=Ze;Ze<<=1,!(Ze&3932160)&&(Ze=262144),Jl=e}else Jl=536870912}return e=oo.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),at(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||tt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Fe(),10<a)){if(yu(r,t,Jl,!Vl),et(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:an},Ml(t,a,d);var m=(a&62914560)===a?$l-Fe():(a&4194048)===a?eu-Fe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Dr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ke(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&st(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,Xi=Yi=null,jo(e),Fa=null,Ia=0,e=q;for(;e!==null;)Vc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=hi(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=tt(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ke(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,ai(),n}function Cu(e,t){L=null,E.H=Bs,t===Ta||t===Da?(t=Na(),Y=3):t===Ea?(t=Na(),Y=4):Y=t===ic?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,Qs(e,Ci(t,e.current)))}function wu(){var e=oo.current;return e===null?!0:(J&4194048)===J?so===null:(J&62914560)===J||J&536870912?e===so:!1}function Tu(){var e=E.H;return E.H=Bs,e===null?Bs:e}function Eu(){var e=E.A;return E.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&oo.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:oo.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Xi=Yi=null,G=r,E.H=i,E.A=a,q===null&&(K=null,J=0,ai()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=Fe()+500,Su(e,t)):Hl=tt(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(ka(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:ka(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Xi=Yi=null,E.H=r,E.A=a,G=n,q===null?(K=null,J=0,ai(),X):0}function ju(){for(;q!==null&&!Ne();)Mu(q)}function Mu(e){var t=Nc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=vc(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=vc(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:jo(t);default:Vc(n,t),t=q=gi(t,Wl),t=Nc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){Xi=Yi=null,jo(t),Fa=null,Ia=0;var i=t.return;try{if(rc(e,i,t,n,J)){X=1,Qs(e,Ci(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,Qs(e,Ci(n,e.current)),q=null;return}t.flags&32768?(F||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=oo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=zc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Bc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ii,ot(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Re,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=E.T,E.T=null,a=D.p,D.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,D.p=a,E.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Mr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&jr(s.ownerDocument.documentElement,s)){if(c!==null&&Nr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Ar(s,h),v=Ar(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,D.p=r,E.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,D.p=r,E.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Pe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),dt(n),t=t.stateNode,We&&typeof We.onCommitFiberRoot==`function`)try{We.onCommitFiberRoot(Ue,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,fa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=dt(su),r=E.T,a=D.p;try{D.p=32>n?32:n,E.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),We&&typeof We.onPostCommitFiberRoot==`function`)try{We.onPostCommitFiberRoot(Ue,o)}catch{}return!0}finally{D.p=a,E.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ci(n,t),t=ec(e.stateNode,t,2),e=qa(e,t,2),e!==null&&(at(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=Ci(n,e),n=tc(2),r=qa(t,n,2),r!==null&&(nc(n,r,t,e),at(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Fe()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=rt()),e=ci(e,t),e!==null&&(at(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return je(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ke(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=et(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||tt(r,a)||(n=!0,ld(r,a))}r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Fe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ke(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=nt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=et(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Me(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||tt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Me(r),dt(n)){case 2:case 8:n=Le;break;case 32:n=Re;break;case 268435456:n=Be;break;default:n=Re}return r=cd.bind(null,e),n=je(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Me(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=et(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Fe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?je(k,ad):od()})}function dd(){if(nd===0){var e=ha;e===0&&(e=Xe,Xe<<=1,!(Xe&261888)&&(Xe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:rn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[ht]||null).action),o=r.submitter;o&&(t=(t=o[ht]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new En(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Es(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Es(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<$r.length;hd++){var gd=$r[hd];ei(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ei(Gr,`onAnimationEnd`),ei(Kr,`onAnimationIteration`),ei(qr,`onAnimationStart`),ei(`dblclick`,`onDoubleClick`),ei(`focusin`,`onFocus`),ei(`focusout`,`onBlur`),ei(Jr,`onTransitionRun`),ei(Yr,`onTransitionStart`),ei(Xr,`onTransitionCancel`),ei(Zr,`onTransitionEnd`),At(`onMouseEnter`,[`mouseout`,`mouseover`]),At(`onMouseLeave`,[`mouseout`,`mouseover`]),At(`onPointerEnter`,[`pointerout`,`pointerover`]),At(`onPointerLeave`,[`pointerout`,`pointerover`]),kt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),kt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),kt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),kt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ti(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ti(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[gt];n===void 0&&(n=t[gt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Dt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!hn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=St(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}fn(function(){var r=a,i=sn(n),s=[];a:{var c=Qr.get(e);if(c!==void 0){var l=En,u=e;switch(e){case`keypress`:if(xn(n)===0)break a;case`keydown`:case`keyup`:l=Wn;break;case`focusin`:u=`focus`,l=Fn;break;case`focusout`:u=`blur`,l=Fn;break;case`beforeblur`:case`afterblur`:l=Fn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Nn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Pn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Kn;break;case Gr:case Kr:case qr:l=In;break;case Zr:l=qn;break;case`scroll`:case`scrollend`:l=On;break;case`wheel`:l=Jn;break;case`copy`:case`cut`:case`paste`:l=Ln;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Gn;break;case`toggle`:case`beforetoggle`:l=Yn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=pn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==on&&(u=n.relatedTarget||n.fromElement)&&(St(u)||u[j]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?St(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Nn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Gn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:wt(l),h=u==null?c:wt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,St(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?wt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=hr;else if(lr(c)){if(gr)v=Tr;else{v=Cr;var y=Sr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&en(r.elementType)&&(v=hr):v=wr;if(v&&=v(e,r)){ur(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&qt(c,`number`,c.value)}switch(y=r?wt(r):window,e){case`focusin`:(lr(y)||y.contentEditable===`true`)&&(Fr=y,Ir=r,Lr=null);break;case`focusout`:Lr=Ir=Fr=null;break;case`mousedown`:Rr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Rr=!1,zr(s,n,i);break;case`selectionchange`:if(Pr)break;case`keydown`:case`keyup`:zr(s,n,i)}var b;if(Zn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else ar?rr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(er&&n.locale!==`ko`&&(ar||x!==`onCompositionStart`?x===`onCompositionEnd`&&ar&&(b=bn()):(_n=i,vn=`value`in _n?_n.value:_n.textContent,ar=!0)),y=Ed(r,x),0<y.length&&(x=new Rn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=ir(n),b!==null&&(x.data=b)))),(b=$n?or(e,n):sr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Rn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=pn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=pn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=pn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=pn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Zt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Zt(e,``+r);break;case`className`:Ft(e,`class`,r);break;case`tabIndex`:Ft(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Ft(e,n,r);break;case`style`:N(e,r,o);break;case`data`:if(t!==`object`){Ft(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=rn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=rn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=an);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=rn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),M(e,`popover`,r);break;case`xlinkActuate`:It(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:It(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:It(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:It(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:It(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:It(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:It(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:It(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:It(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:M(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=tn.get(n)||n,M(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:N(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Zt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Zt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=an);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Ot.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ht]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):M(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Kt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Jt(e,!!r,n,!0):Jt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Xt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(en(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Gt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Jt(e,!!n,n?[]:``,!1):Jt(e,!!n,t,!0)):Jt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Yt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(en(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[bt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body)}n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),xt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[bt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=D.d;D.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Ct(e);t!==null&&t.tag===5&&t.type===`form`?Os(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Wt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Wt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Wt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Wt(n.imageSizes)+`"]`)):i+=`[href="`+Wt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Wt(r)+`"][href="`+Wt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Et(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Tt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Et(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Tt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Et(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Tt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Et(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=_e.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Tt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Tt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Tt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Wt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Et(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Wt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Wt(n.href)+`"]`);if(r)return t.instance=r,Et(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Et(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Et(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Et(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Et(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Et(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[bt]||a[mt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Et(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Et(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=it(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=it(0),this.hiddenUpdates=it(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=pi(3,null,null,t),e.current=a,a.stateNode=e,t=da(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Wa(a),e}function tp(e){return e?(e=di,e):di}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ka(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=qa(e,r,t),n!==null&&(hu(n,e,t),Ja(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ci(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ut(t);var n=ci(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,up(e,t,n,r)}finally{D.p=a,E.T=i}}function lp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,up(e,t,n,r)}finally{D.p=a,E.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Ct(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=$e(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ke(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Fe()+500,id(0,!1))}}break;case 31:case 13:s=ci(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=sn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=St(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ie()){case k:return 2;case Le:return 8;case Re:case ze:return 32;case Be:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ct(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=St(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ft(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ft(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);on=r,n.target.dispatchEvent(r),on=null}else return t=Ct(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Ct(n);a!==null&&(e.splice(t,3),t-=3,Es(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ht]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ht]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[j]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=A();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ue=zp.inject(Rp),We=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ys,s=Xs,c=Zs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[j]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),b=o(((e,t)=>{t.exports=y()})),x=(0,_.createContext)({});function S(e){let t=(0,_.useRef)(null);return t.current===null&&(t.current=e()),t.current}var C=typeof window<`u`?_.useLayoutEffect:_.useEffect,w=(0,_.createContext)(null);function ee(e,t){e.indexOf(t)===-1&&e.push(t)}function te(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var ne=(e,t,n)=>n>t?t:n<e?e:n,T={},re=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),ie=e=>typeof e==`object`&&!!e,ae=e=>/^0[^.\s]+$/u.test(e);function oe(e){let t;return()=>(t===void 0&&(t=e()),t)}var se=e=>e,ce=(...e)=>e.reduce((e,t)=>n=>t(e(n))),le=(e,t,n)=>{let r=t-e;return r?(n-e)/r:1},E=class{constructor(){this.subscriptions=[]}add(e){return ee(this.subscriptions,e),()=>te(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r){if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},D=e=>e*1e3,ue=e=>e/1e3,de=(e,t)=>t?1e3/t*e:0,fe=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,pe=1e-7,me=12;function O(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=fe(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>pe&&++s<me);return o}function he(e,t,n,r){if(e===t&&n===r)return se;let i=t=>O(t,0,1,e,n);return e=>e===0||e===1?e:fe(i(e),t,r)}var ge=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,_e=e=>t=>1-e(1-t),ve=he(.33,1.53,.69,.99),ye=_e(ve),be=ge(ye),xe=e=>e>=1?1:(e*=2)<1?.5*ye(e):.5*(2-2**(-10*(e-1))),Se=e=>1-Math.sin(Math.acos(e)),Ce=_e(Se),we=ge(Se),Te=he(.42,0,1,1),Ee=he(0,0,.58,1),De=he(.42,0,.58,1),Oe=e=>Array.isArray(e)&&typeof e[0]!=`number`,ke=e=>Array.isArray(e)&&typeof e[0]==`number`,Ae={linear:se,easeIn:Te,easeInOut:De,easeOut:Ee,circIn:Se,circInOut:we,circOut:Ce,backIn:ye,backInOut:be,backOut:ve,anticipate:xe},je=e=>typeof e==`string`,Me=e=>{if(ke(e)){e.length;let[t,n,r,i]=e;return he(t,n,r,i)}return je(e)?(Ae[e],`${e}`,Ae[e]):e},Ne=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`];function Pe(e){let t=new Set,n=new Set,r=!1,i=!1,a=new WeakSet,o={delta:0,timestamp:0,isProcessing:!1};function s(t){a.has(t)&&(c.schedule(t),e()),t(o)}let c={schedule:(e,i=!1,o=!1)=>{let s=o&&r?t:n;return i&&a.add(e),s.add(e),e},cancel:e=>{n.delete(e),a.delete(e)},process:e=>{if(o=e,r){i=!0;return}r=!0;let a=t;t=n,n=a,t.forEach(s),t.clear(),r=!1,i&&(i=!1,c.process(e))}};return c}var Fe=40;function Ie(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=Ne.reduce((e,t)=>(e[t]=Pe(a),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=T.useManualTiming,o=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,Fe),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:Ne.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<Ne.length;t++)o[Ne[t]].cancel(e)},state:i,steps:o}}var{schedule:k,cancel:Le,state:Re,steps:ze}=Ie(typeof requestAnimationFrame<`u`?requestAnimationFrame:se,!0),Be;function Ve(){Be=void 0}var He={now:()=>(Be===void 0&&He.set(Re.isProcessing||T.useManualTiming?Re.timestamp:performance.now()),Be),set:e=>{Be=e,queueMicrotask(Ve)}},Ue=e=>t=>typeof t==`string`&&t.startsWith(e),We=Ue(`--`),Ge=Ue(`var(--`),Ke=e=>Ge(e)?qe.test(e.split(`/*`)[0].trim()):!1,qe=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Je(e){return typeof e==`string`&&e.split(`/*`)[0].includes(`var(--`)}var Ye={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},Xe={...Ye,transform:e=>ne(0,1,e)},Ze={...Ye,default:1},Qe=e=>Math.round(e*1e5)/1e5,$e=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function et(e){return e==null}var tt=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,nt=(e,t)=>n=>!!(typeof n==`string`&&tt.test(n)&&n.startsWith(e)||t&&!et(n)&&Object.prototype.hasOwnProperty.call(n,t)),rt=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match($e);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},it=e=>ne(0,255,e),at={...Ye,transform:e=>Math.round(it(e))},ot={test:nt(`rgb`,`red`),parse:rt(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+at.transform(e)+`, `+at.transform(t)+`, `+at.transform(n)+`, `+Qe(Xe.transform(r))+`)`};function st(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var ct={test:nt(`#`),parse:st,transform:ot.transform},lt=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),ut=lt(`deg`),dt=lt(`%`),A=lt(`px`),ft=lt(`vh`),pt=lt(`vw`),mt={...dt,parse:e=>dt.parse(e)/100,transform:e=>dt.transform(e*100)},ht={test:nt(`hsl`,`hue`),parse:rt(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+dt.transform(Qe(t))+`, `+dt.transform(Qe(n))+`, `+Qe(Xe.transform(r))+`)`},j={test:e=>ot.test(e)||ct.test(e)||ht.test(e),parse:e=>ot.test(e)?ot.parse(e):ht.test(e)?ht.parse(e):ct.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?ot.transform(e):ht.transform(e),getAnimatableNone:e=>{let t=j.parse(e);return t.alpha=0,j.transform(t)}},gt=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function _t(e){return isNaN(e)&&typeof e==`string`&&(e.match($e)?.length||0)+(e.match(gt)?.length||0)>0}var vt=`number`,yt=`color`,bt=`var`,xt=`var(`,St="${}",Ct=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function wt(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(Ct,e=>(j.test(e)?(r.color.push(a),i.push(yt),n.push(j.parse(e))):e.startsWith(xt)?(r.var.push(a),i.push(bt),n.push(e)):(r.number.push(a),i.push(vt),n.push(parseFloat(e))),++a,St)).split(St),indexes:r,types:i}}function Tt(e){return wt(e).values}function Et({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];i+=e===vt?Qe(r[a]):e===yt?j.transform(r[a]):r[a]}return i}}function Dt(e){return Et(wt(e))}var Ot=e=>typeof e==`number`?0:j.test(e)?j.getAnimatableNone(e):e,kt=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:Ot(e);function At(e){let t=wt(e);return Et(t)(t.values.map((e,n)=>kt(e,t.split[n])))}var jt={test:_t,parse:Tt,createTransformer:Dt,getAnimatableNone:At};function Mt(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Nt({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=Mt(s,r,e+1/3),a=Mt(s,r,e),o=Mt(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function Pt(e,t){return n=>n>0?t:e}var M=(e,t,n)=>e+(t-e)*n,Ft=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},It=[ct,ot,ht],Lt=e=>It.find(t=>t.test(e));function Rt(e){let t=Lt(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===ht&&(n=Nt(n)),n}var zt=(e,t)=>{let n=Rt(e),r=Rt(t);if(!n||!r)return Pt(e,t);let i={...n};return e=>(i.red=Ft(n.red,r.red,e),i.green=Ft(n.green,r.green,e),i.blue=Ft(n.blue,r.blue,e),i.alpha=M(n.alpha,r.alpha,e),ot.transform(i))},Bt=new Set([`none`,`hidden`]);function Vt(e,t){return Bt.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Ht(e,t){return n=>M(e,t,n)}function Ut(e){return typeof e==`number`?Ht:typeof e==`string`?Ke(e)?Pt:j.test(e)?zt:qt:Array.isArray(e)?Wt:typeof e==`object`?j.test(e)?zt:Gt:Pt}function Wt(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>Ut(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Gt(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Ut(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function Kt(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]],s=e.values[o]??0;n[i]=s,r[a]++}return n}var qt=(e,t)=>{let n=jt.createTransformer(t),r=wt(e),i=wt(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Bt.has(e)&&!i.values.length||Bt.has(t)&&!r.values.length?Vt(e,t):ce(Wt(Kt(r,i),i.values),n):(`${e}${t}`,Pt(e,t))};function Jt(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?M(e,t,n):Ut(e)(e,t)}var Yt=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>k.update(t,e),stop:()=>Le(t),now:()=>Re.isProcessing?Re.timestamp:He.now()}},Xt=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},Zt=2e4;function Qt(e,t=50,n=Zt,r){let i=0,a=e.next(i);for(r?.push(a.value);!a.done&&i<n;)i+=t,a=e.next(i),r?.push(a.value);return i>=n?1/0:i}function $t(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(Qt(r),Zt);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:ue(i)}}var N={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function en(e,t){return e*Math.sqrt(1-t*t)}var tn=12;function nn(e,t,n){let r=n;for(let n=1;n<tn;n++)r-=e(r)/t(r);return r}var rn=.001;function an({duration:e=N.duration,bounce:t=N.bounce,velocity:n=N.velocity,mass:r=N.mass}){let i,a;N.maxDuration;let o=1-t;o=ne(N.minDamping,N.maxDamping,o),e=ne(N.minDuration,N.maxDuration,ue(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=en(t,o),c=Math.exp(-i);return rn-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o*o*t*t*e,c=Math.exp(-r),l=en(t*t,o);return(-i(t)+rn>0?-1:1)*((a-s)*c)/l}):(i=t=>-.001+Math.exp(-t*e)*((t-n)*e+1),a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=nn(i,a,s);if(e=D(e),isNaN(c))return{stiffness:N.stiffness,damping:N.damping,duration:e};{let t=c*c*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var on=[`duration`,`bounce`],sn=[`stiffness`,`damping`,`mass`];function cn(e,t){return t.some(t=>e[t]!==void 0)}function ln(e){let t={velocity:N.velocity,stiffness:N.stiffness,damping:N.damping,mass:N.mass,isResolvedFromDuration:!1,...e};if(!cn(e,sn)&&cn(e,on)){if(t.velocity=0,e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*ne(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:N.mass,stiffness:i,damping:a}}else{let n=an({...e,velocity:0});t={...t,...n,mass:N.mass},t.isResolvedFromDuration=!0}}return t}function un(e=N.visualDuration,t=N.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=ln({...n,velocity:-ue(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=ue(Math.sqrt(c/u)),v=h*_,y=Math.abs(g)<5;r||=y?N.restSpeed.granular:N.restSpeed.default,i||=y?N.restDelta.granular:N.restDelta.default;let b,x;if(h<1){let e=en(_,h),t=(m+v*g)/e,n=v*t+g*e,r=v*g-t*e,i=-1,a=0,s=0,c=c=>{if(c!==i){i=c;let l=Math.exp(-v*c),u=Math.sin(e*c),d=Math.cos(e*c);a=o-l*(t*u+g*d),s=l*(n*u+r*d)}};b=e=>(c(e),a),x=e=>(c(e),s)}else if(h===1){b=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);let e=m+_*g;x=t=>Math.exp(-_*t)*(_*e*t-m)}else{let e=_*Math.sqrt(h*h-1);b=t=>{let n=Math.exp(-v*t),r=Math.min(e*t,300);return o-n*((m+v*g)*Math.sinh(r)+e*g*Math.cosh(r))/e};let t=(m+v*g)/e,n=v*t-g*e,r=v*g-t*e;x=t=>{let i=Math.exp(-v*t),a=Math.min(e*t,300);return i*(n*Math.sinh(a)+r*Math.cosh(a))}}let S={calculatedDuration:p&&d||null,velocity:e=>D(x(e)),next:e=>{let t=b(e);if(p)s.done=e>=d;else{let n=D(x(e));s.done=Math.abs(n)<=r&&Math.abs(o-t)<=i}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(Qt(S),Zt),t=Xt(t=>S.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return S}un.applyToOptions=e=>{let t=$t(e,100,un);return e.ease=t.ease,e.duration=D(t.duration),e.type=`keyframes`,e};function dn({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>e<s||e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>{let t=v(e);f.done=Math.abs(t)<=l,f.value=f.done?_:_+t},b,x,S=e=>{p(f.value)&&(b=e,x=un({keyframes:[f.value,m(f.value)],velocity:-v(e)/r*1e3,damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return S(0),{calculatedDuration:null,next:e=>{let t=!1;return!x&&b===void 0&&(t=!0,y(e),S(e)),b!==void 0&&e>=b?x.next(e-b):(!t&&y(e),f)}}}function fn(e,t,n){let r=[],i=n||T.mix||Jt,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=ce(Array.isArray(t)?t[n]||se:t,a)),r.push(a)}return r}function pn(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=fn(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=le(e[r],e[r+1],n);return s[r](i)};return n?t=>l(ne(e[0],e[a-1],t)):l}function mn(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=le(0,t,r);e.push(M(n,1,i))}}function hn(e){let t=[0];return mn(t,e.length-1),t}function gn(e,t){return e.map(e=>e*t)}function _n(e,t){return e.map(()=>t||De).splice(0,e.length-1)}function vn({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=Oe(r)?r.map(Me):Me(r),a={done:!1,value:t[0]},o=pn(gn(n&&n.length===t.length?n:hn(t),e),t,{ease:Array.isArray(i)?i:_n(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var yn=5;function bn(e,t,n){let r=Math.max(t-yn,0);return de(n-e(r),t-r)}var xn=e=>e!==null;function Sn(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(xn),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var Cn={decay:dn,inertia:dn,tween:vn,keyframes:vn,spring:un};function wn(e){typeof e.type==`string`&&(e.type=Cn[e.type])}var Tn=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},En=e=>e/100,Dn=class extends Tn{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==He.now()&&this.tick(He.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;wn(e);let{type:t=vn,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||vn;s!==vn&&typeof o[0]!=`number`&&(this.mixKeyframes=ce(En,Jt(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=Qt(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.currentTime=this.holdTime===null?t:this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=ne(0,1,n)*o}let b;_?(this.delayState.value=l[0],b=this.delayState):b=y.next(v),i&&!_&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==dn&&(b.value=Sn(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return ue(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+ue(e)}get time(){return ue(this.currentTime)}set time(e){e=D(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return bn(e=>this.generator.next(e).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(He.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=ue(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Yt,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(He.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function On(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var kn=e=>e*180/Math.PI,An=e=>Mn(kn(Math.atan2(e[1],e[0]))),jn={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:An,rotateZ:An,skewX:e=>kn(Math.atan(e[1])),skewY:e=>kn(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Mn=e=>(e%=360,e<0&&(e+=360),e),Nn=An,Pn=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Fn=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),In={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Pn,scaleY:Fn,scale:e=>(Pn(e)+Fn(e))/2,rotateX:e=>Mn(kn(Math.atan2(e[6],e[5]))),rotateY:e=>Mn(kn(Math.atan2(-e[2],e[0]))),rotateZ:Nn,rotate:Nn,skewX:e=>kn(Math.atan(e[4])),skewY:e=>kn(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Ln(e){return+!!e.includes(`scale`)}function Rn(e,t){if(!e||e===`none`)return Ln(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=In,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=jn,i=t}if(!i)return Ln(t);let a=r[t],o=i[1].split(`,`).map(Bn);return typeof a==`function`?a(o):o[a]}var zn=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return Rn(n,t)};function Bn(e){return parseFloat(e.trim())}var Vn=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],Hn=new Set([...Vn,`pathRotation`]),Un=e=>e===Ye||e===A,Wn=new Set([`x`,`y`,`z`]),Gn=Vn.filter(e=>!Wn.has(e));function Kn(e){let t=[];return Gn.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(+!!n.startsWith(`scale`)))}),t}var qn={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Rn(t,`x`),y:(e,{transform:t})=>Rn(t,`y`)};qn.translateX=qn.x,qn.translateY=qn.y;var Jn=new Set,Yn=!1,Xn=!1,Zn=!1;function Qn(){if(Xn){let e=Array.from(Jn).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=Kn(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}Xn=!1,Yn=!1,Jn.forEach(e=>e.complete(Zn)),Jn.clear()}function $n(){Jn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Xn=!0)})}function er(){Zn=!0,$n(),Qn(),Zn=!1}var tr=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(Jn.add(this),Yn||(Yn=!0,k.read($n),k.resolveKeyframes(Qn))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}On(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Jn.delete(this)}cancel(){this.state===`scheduled`&&(Jn.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},nr=e=>e.startsWith(`--`);function rr(e,t,n){nr(t)?e.style.setProperty(t,n):e.style[t]=n}var ir={};function ar(e,t){let n=oe(e);return()=>ir[t]??n()}var or=ar(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),sr=ar(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),cr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,lr={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:cr([0,.65,.55,1]),circOut:cr([.55,0,1,.45]),backIn:cr([.31,.01,.66,-.59]),backOut:cr([.33,1.53,.69,.99])};function ur(e,t){if(e)return typeof e==`function`?sr()?Xt(e,t):`ease-out`:ke(e)?cr(e):Array.isArray(e)?e.map(e=>ur(e,t)||lr.easeOut):lr[e]}function dr(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=ur(s,i);Array.isArray(d)&&(u.easing=d);let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};return l&&(f.pseudoElement=l),e.animate(u,f)}function fr(e){return typeof e==`function`&&`applyToOptions`in e}function pr({type:e,...t}){return fr(e)&&sr()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var mr=class extends Tn{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=pr(e);this.animation=dr(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=Sn(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),rr(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e!==`idle`&&e!==`finished`&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return ue(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+ue(e)}get time(){return ue(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=D(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&or()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),se):r(this)}},hr={anticipate:xe,backInOut:be,circInOut:we};function gr(e){return e in hr}function _r(e){typeof e.ease==`string`&&gr(e.ease)&&(e.ease=hr[e.ease])}var vr=10,yr=class extends mr{constructor(e){_r(e),wn(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new Dn({...a,autoplay:!1}),s=Math.max(vr,He.now()-this.startTime),c=ne(0,vr,s-vr),l=o.sample(s).value,{name:u}=this.options;i&&u&&rr(i,u,l),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,l,c),o.stop()}},br=(e,t)=>t!==`zIndex`&&!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(jt.test(e)||e===`0`)&&!e.startsWith(`url(`));function xr(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Sr(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=br(i,t),s=br(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:xr(e)||(n===`spring`||fr(n))&&r}function Cr(e){e.duration=0,e.type=`keyframes`}var wr=new Set([`opacity`,`clipPath`,`filter`,`transform`,`backgroundColor`]),Tr=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function Er(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&Tr.test(e[t]))return!0;return!1}var Dr=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),Or=oe(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function kr(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e,c=t?.owner?.current;if(!(c instanceof HTMLElement)&&!(c instanceof SVGElement))return!1;let{onUpdate:l,transformTemplate:u}=t.owner.getProps();return Or()&&n&&(wr.has(n)||Dr.has(n)&&Er(s))&&(n!==`transform`||!u)&&!l&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var Ar=40,jr=class extends Tn{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=He.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u},f=l?.KeyframeResolver||tr;this.keyframeResolver=new f(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=He.now();let u=!0;Sr(e,i,a,o)||(u=!1,(T.instantAnimations||!s)&&l?.(Sn(e,n,t)),e[0]=e[e.length-1],Cr(n),n.repeat=0);let d={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>Ar?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},f=u&&!c&&kr(d),p=d.motionValue?.owner?.current,m;if(f)try{m=new yr({...d,element:p})}catch{m=new Dn(d)}else m=new Dn(d);m.finished.then(()=>{this.notifyFinished()}).catch(se),this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),er()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function Mr(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var Nr=30,Pr=e=>!isNaN(parseFloat(e)),Fr={current:void 0},Ir=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=He.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=He.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Pr(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new E);let n=this.events[e].add(t);return e===`change`?()=>{n(),k.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Fr.current&&Fr.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=He.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Nr)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,Nr);return de(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function Lr(e,t){return new Ir(e,t)}function Rr(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function zr(e,t){let n=e?.[t]??e?.default??e;return n===e?n:Rr(n,e)}var Br={type:`spring`,stiffness:500,damping:25,restSpeed:10},Vr=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Hr={type:`keyframes`,duration:.8},Ur={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},Wr=(e,{keyframes:t})=>t.length>2?Hr:Hn.has(e)?e.startsWith(`scale`)?Vr(t[1]):Br:Ur,Gr=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`]);function Kr(e){for(let t in e)if(!Gr.has(t))return!0;return!1}var qr=(e,t,n,r={},i,a)=>o=>{let s=zr(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=D(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};Kr(s)||Object.assign(u,Wr(e,u)),u.duration&&=D(u.duration),u.repeatDelay&&=D(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(Cr(u),u.delay===0&&(d=!0)),(T.instantAnimations||T.skipAnimations||i?.shouldSkipAnimations||s.skipAnimations)&&(d=!0,Cr(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=Sn(u.keyframes,s);if(e!==void 0){k.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new Dn(u):new jr(u)},Jr=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Yr(e){let t=Jr.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function Xr(e,t,n=1){`${e}`;let[r,i]=Yr(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return re(e)?parseFloat(e):e}return Ke(i)?Xr(i,t,n+1):i}function Zr(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function Qr(e,t,n,r){if(typeof t==`function`){let[i,a]=Zr(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=Zr(r);t=t(n===void 0?e.custom:n,i,a)}return t}function $r(e,t,n){let r=e.getProps();return Qr(r,t,n===void 0?r.custom:n,e)}var ei=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...Vn]),ti=e=>Array.isArray(e);function ni(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Lr(n))}function ri(e){return ti(e)?e[e.length-1]||0:e}function ii(e,t){let{transitionEnd:n={},transition:r={},...i}=$r(e,t)||{};i={...i,...n};for(let t in i)ni(e,t,ri(i[t]))}var ai=e=>!!(e&&e.getVelocity);function oi(e){return!!(ai(e)&&e.add)}function si(e,t){let n=e.getValue(`willChange`);if(oi(n))return n.add(t);if(!n&&T.WillChange){let n=new T.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function ci(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var li=`data-`+ci(`framerAppearId`);function ui(e){return e.props[li]}var di=typeof window<`u`;function fi({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function pi(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?Rr(a,c):c;let l=a?.reduceMotion,u=a?.skipAnimations;r&&(a=r);let d=[],f=i&&e.animationState&&e.animationState.getState()[i],p=a?.path;p&&p.animateVisualElement(e,s,a,n,d);for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||f&&fi(f,t))continue;let o={delay:n,...zr(a||{},t)};u&&(o.skipAnimations=!0);let c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){k.update(()=>r.set(i));continue}let p=!1;if(di&&window.MotionHandoffAnimation){let n=ui(e);if(n){let e=window.MotionHandoffAnimation(n,t,k);e!==null&&(o.startTime=e,p=!0)}}si(e,t);let m=l??e.shouldReduceMotion;r.start(qr(t,r,i,m&&ei.has(t)?{type:!1}:o,e,p));let h=r.animation;h&&d.push(h)}if(o){let t=()=>k.update(()=>{o&&ii(e,o)});d.length?Promise.all(d).then(t):t()}return d}function mi(e,t,n={}){let r=$r(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(pi(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return hi(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}return Promise.all([a(),o(n.delay)])}function hi(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(mi(c,t,{...o,delay:n+(typeof r==`function`?0:r)+Mr(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function gi(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>mi(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=mi(e,t,n);else{let i=typeof t==`function`?$r(e,t,n.custom):t;r=Promise.all(pi(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var _i={test:e=>e===`auto`,parse:e=>e},vi=e=>t=>t.test(e),yi=[Ye,A,dt,ut,pt,ft,_i],bi=e=>yi.find(vi(e));function xi(e){return typeof e==`number`?e===0:e===null||e===`none`||e===`0`||ae(e)}var Si=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function Ci(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match($e)||[];if(!r)return e;let i=n.replace(r,``),a=+!!Si.has(t);return r!==n&&(a*=100),t+`(`+a+i+`)`}var wi=/\b([a-z-]*)\(.*?\)/gu,Ti={...jt,getAnimatableNone:e=>{let t=e.match(wi);return t?t.map(Ci).join(` `):e}},Ei={...jt,getAnimatableNone:e=>{let t=jt.parse(e);return jt.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},Di={...Ye,transform:Math.round},Oi={borderWidth:A,borderTopWidth:A,borderRightWidth:A,borderBottomWidth:A,borderLeftWidth:A,borderRadius:A,borderTopLeftRadius:A,borderTopRightRadius:A,borderBottomRightRadius:A,borderBottomLeftRadius:A,width:A,maxWidth:A,height:A,maxHeight:A,top:A,right:A,bottom:A,left:A,inset:A,insetBlock:A,insetBlockStart:A,insetBlockEnd:A,insetInline:A,insetInlineStart:A,insetInlineEnd:A,padding:A,paddingTop:A,paddingRight:A,paddingBottom:A,paddingLeft:A,paddingBlock:A,paddingBlockStart:A,paddingBlockEnd:A,paddingInline:A,paddingInlineStart:A,paddingInlineEnd:A,margin:A,marginTop:A,marginRight:A,marginBottom:A,marginLeft:A,marginBlock:A,marginBlockStart:A,marginBlockEnd:A,marginInline:A,marginInlineStart:A,marginInlineEnd:A,fontSize:A,backgroundPositionX:A,backgroundPositionY:A,rotate:ut,pathRotation:ut,rotateX:ut,rotateY:ut,rotateZ:ut,scale:Ze,scaleX:Ze,scaleY:Ze,scaleZ:Ze,skew:ut,skewX:ut,skewY:ut,distance:A,translateX:A,translateY:A,translateZ:A,x:A,y:A,z:A,perspective:A,transformPerspective:A,opacity:Xe,originX:mt,originY:mt,originZ:A,zIndex:Di,fillOpacity:Xe,strokeOpacity:Xe,numOctaves:Di},ki={...Oi,color:j,backgroundColor:j,outlineColor:j,fill:j,stroke:j,borderColor:j,borderTopColor:j,borderRightColor:j,borderBottomColor:j,borderLeftColor:j,filter:Ti,WebkitFilter:Ti,mask:Ei,WebkitMask:Ei},Ai=e=>ki[e],ji=new Set([Ti,Ei]);function Mi(e,t){let n=Ai(e);return ji.has(n)||(n=jt),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var Ni=new Set([`auto`,`none`,`0`]);function Pi(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!Ni.has(t)&&wt(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=Mi(n,i)}var Fi=class extends tr{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Ke(r))){let i=Xr(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!ei.has(n)||e.length!==2)return;let[r,i]=e,a=bi(r),o=bi(i);if(Je(r)!==Je(i)&&qn[n]){this.needsMeasurement=!0;return}if(a!==o){if(Un(a)&&Un(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else qn[n]&&(this.needsMeasurement=!0)}}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||xi(e[t]))&&n.push(t);n.length&&Pi(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=qn[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=qn[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}},Ii=[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomRightRadius`,`borderBottomLeftRadius`];function Li(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var Ri=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function P(e){return ie(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}var{schedule:F,cancel:zi}=Ie(queueMicrotask,!1),I={x:!1,y:!1};function Bi(){return I.x||I.y}function Vi(e){return e===`x`||e===`y`?I[e]?null:(I[e]=!0,()=>{I[e]=!1}):I.x||I.y?null:(I.x=I.y=!0,()=>{I.x=I.y=!1})}function Hi(e,t){let n=Li(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function Ui(e){return!(e.pointerType===`touch`||Bi())}function Wi(e,t,n={}){let[r,i,a]=Hi(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{if(e.pointerType!==`touch`){if(n){r=!0;return}s(e)}};e.addEventListener(`pointerenter`,n=>{if(!Ui(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}var Gi=(e,t)=>t?e===t||Gi(e,t.parentElement):!1,Ki=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,qi=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function Ji(e){return qi.has(e.tagName)||e.isContentEditable===!0}var Yi=new Set([`INPUT`,`SELECT`,`TEXTAREA`]);function Xi(e){return Yi.has(e.tagName)||e.isContentEditable===!0}var Zi=new WeakSet;function Qi(e){return t=>{t.key===`Enter`&&e(t)}}function $i(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var ea=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=Qi(()=>{if(Zi.has(n))return;$i(n,`down`);let e=Qi(()=>{$i(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>$i(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function ta(e){return Ki(e)&&!Bi()}var na=new WeakSet;function ra(e,t,n={}){let[r,i,a]=Hi(e,n),o=e=>{let r=e.currentTarget;if(!ta(e)||na.has(e))return;Zi.add(r),n.stopPropagation&&na.add(e);let a=t(r,e),o={...i,capture:!0},s=(e,t)=>{window.removeEventListener(`pointerup`,c,o),window.removeEventListener(`pointercancel`,l,o),Zi.has(r)&&Zi.delete(r),ta(e)&&typeof a==`function`&&a(e,{success:t})},c=e=>{s(e,r===window||r===document||n.useGlobalTarget||Gi(r,e.target))},l=e=>{s(e,!1)};window.addEventListener(`pointerup`,c,o),window.addEventListener(`pointercancel`,l,o)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),P(e)&&(e.addEventListener(`focus`,e=>ea(e,i)),!Ji(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function ia(e){return ie(e)&&`ownerSVGElement`in e}var aa=new WeakMap,oa,sa=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:ia(r)&&`getBBox`in r?r.getBBox()[t]:r[n],ca=sa(`inline`,`width`,`offsetWidth`),la=sa(`block`,`height`,`offsetHeight`);function ua({target:e,borderBoxSize:t}){aa.get(e)?.forEach(n=>{n(e,{get width(){return ca(e,t)},get height(){return la(e,t)}})})}function da(e){e.forEach(ua)}function fa(){typeof ResizeObserver>`u`||(oa=new ResizeObserver(da))}function pa(e,t){oa||fa();let n=Li(e);return n.forEach(e=>{let n=aa.get(e);n||(n=new Set,aa.set(e,n)),n.add(t),oa?.observe(e)}),()=>{n.forEach(e=>{let n=aa.get(e);n?.delete(t),n?.size||oa?.unobserve(e)})}}var ma=new Set,ha;function ga(){ha=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};ma.forEach(t=>t(e))},window.addEventListener(`resize`,ha)}function _a(e){return ma.add(e),ha||ga(),()=>{ma.delete(e),!ma.size&&typeof ha==`function`&&(window.removeEventListener(`resize`,ha),ha=void 0)}}function va(e,t){return typeof e==`function`?_a(e):pa(e,t)}var ya={value:null,addProjectionMetrics:null};function ba(e){return ia(e)&&e.tagName===`svg`}var xa=[...yi,j,jt],Sa=e=>xa.find(vi(e)),Ca=()=>({translate:0,scale:1,origin:0,originPoint:0}),wa=()=>({x:Ca(),y:Ca()}),Ta=()=>({min:0,max:0}),Ea=()=>({x:Ta(),y:Ta()}),Da=new WeakMap;function Oa(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function ka(e){return typeof e==`string`||Array.isArray(e)}var Aa=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],ja=[`initial`,...Aa];function Ma(e){return Oa(e.animate)||ja.some(t=>ka(e[t]))}function Na(e){return!!(Ma(e)||e.variants)}function Pa(e,t,n){for(let r in t){let i=t[r],a=n[r];if(ai(i))e.addValue(r,i);else if(ai(a))e.addValue(r,Lr(i,{owner:e}));else if(a!==i){if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,Lr(t===void 0?i:t,{owner:e}))}}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var Fa={current:null},Ia={current:!1},La=typeof window<`u`;function Ra(){if(Ia.current=!0,La){if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>Fa.current=e.matches;e.addEventListener(`change`,t),t()}else Fa.current=!1}}var za=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],Ba={};function Va(e){Ba=e}function Ha(){return Ba}var Ua=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=tr,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=He.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,k.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=Ma(t),this.isVariantNode=Na(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&ai(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,Da.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(Ia.current||Ra(),this.shouldReduceMotion=Fa.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Le(this.notifyUpdate),Le(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&wr.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new mr({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:D(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=Hn.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&k.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in Ba){let t=Ba[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ea()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<za.length;t++){let n=za[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=Pa(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=Lr(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(re(n)||ae(n))?n=parseFloat(n):!Sa(n)&&jt.test(t)&&(n=Mi(e,t)),this.setBaseTarget(e,ai(n)?n.get():n)),ai(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=Qr(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!ai(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new E),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){F.render(this.render)}},Wa=class extends Ua{constructor(){super(...arguments),this.KeyframeResolver=Fi}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;ai(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},Ga=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function Ka({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function qa({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Ja(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Ya(e){return e===void 0||e===1}function Xa({scale:e,scaleX:t,scaleY:n}){return!Ya(e)||!Ya(t)||!Ya(n)}function Za(e){return Xa(e)||Qa(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Qa(e){return $a(e.x)||$a(e.y)}function $a(e){return e&&e!==`0%`}function eo(e,t,n){return n+t*(e-n)}function to(e,t,n,r,i){return i!==void 0&&(e=eo(e,i,r)),eo(e,n,r)+t}function no(e,t=0,n=1,r,i){e.min=to(e.min,t,n,r,i),e.max=to(e.max,t,n,r,i)}function ro(e,{x:t,y:n}){no(e.x,t.translate,t.scale,t.originPoint),no(e.y,n.translate,n.scale,n.originPoint)}var io=.999999999999,ao=1.0000000000001;function oo(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(so(e.x,-a.scroll.offset.x),so(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,ro(e,o)),r&&Za(a.latestValues)&&uo(e,a.latestValues,a.layout?.layoutBox))}t.x<ao&&t.x>io&&(t.x=1),t.y<ao&&t.y>io&&(t.y=1)}function so(e,t){e.min+=t,e.max+=t}function co(e,t,n,r,i=.5){no(e,t,n,M(e.min,e.max,i),r)}function lo(e,t){return typeof e==`string`?parseFloat(e)/100*(t.max-t.min):e}function uo(e,t,n){let r=n??e;co(e.x,lo(t.x,r.x),t.scaleX,t.scale,t.originX),co(e.y,lo(t.y,r.y),t.scaleY,t.scale,t.originY)}function fo(e,t){return Ka(Ja(e.getBoundingClientRect(),t))}function po(e,t,n){let r=fo(e,n),{scroll:i}=t;return i&&(so(r.x,i.offset.x),so(r.y,i.offset.y)),r}var mo={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},ho=Vn.length;function go(e,t,n){let r=``,i=!0;for(let a=0;a<ho;a++){let o=Vn[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===+!!o.startsWith(`scale`);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=Ri(s,Oi[o]);if(!c){i=!1;let t=mo[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}let a=e.pathRotation;return a&&(i=!1,r+=`rotate(${Ri(a,Oi.pathRotation)}) `),r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function L(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(Hn.has(e)){o=!0;continue}if(We(e)){i[e]=n;continue}{let t=Ri(n,Oi[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=go(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function R(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function z(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var _o={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`){if(A.test(e))e=parseFloat(e);else return e}return`${z(e,t.target.x)}% ${z(e,t.target.y)}%`}},vo={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=jt.parse(e);if(i.length>5)return r;let a=jt.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=M(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},yo={borderRadius:{..._o,applyTo:[...Ii]},borderTopLeftRadius:_o,borderTopRightRadius:_o,borderBottomLeftRadius:_o,borderBottomRightRadius:_o,boxShadow:vo};function bo(e,{layout:t,layoutId:n}){return Hn.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!yo[e]||e===`opacity`)}function xo(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(ai(r[t])||i&&ai(i[t])||bo(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function So(e){return window.getComputedStyle(e)}var Co=class extends Wa{constructor(){super(...arguments),this.type=`html`,this.renderInstance=R}mount(e){e.style,super.mount(e)}readValueFromInstance(e,t){if(Hn.has(t))return this.projection?.isProjecting?Ln(t):zn(e,t);{let n=So(e),r=(We(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return fo(e,t)}build(e,t,n){L(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return xo(e,t,n)}},B={offset:`stroke-dashoffset`,array:`stroke-dasharray`},wo={offset:`strokeDashoffset`,array:`strokeDasharray`};function To(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?B:wo;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var Eo=[`transform`,`opacity`,`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function Do(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(L(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;for(let e of Eo)d[e]!==void 0&&(f[e]=d[e],delete d[e]);(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox),t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&To(d,i,a,o,!1)}var Oo=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),ko=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function Ao(e,t,n,r){R(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(Oo.has(n)?n:ci(n),t.attrs[n])}function jo(e,t,n){let r=xo(e,t,n);for(let n in e)if(ai(e[n])||ai(t[n])){let t=Vn.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var Mo=class extends Wa{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=Ea}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Hn.has(t)){let e=Ai(t);return e&&e.default||0}if(Eo.includes(t)){let n=getComputedStyle(e)[t];if(typeof n==`string`&&n)return n.trim()}return t=Oo.has(t)?t:ci(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return jo(e,t,n)}build(e,t,n){Do(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){Ao(e,t,n,r)}mount(e){this.isSVGTag=ko(e.tagName),super.mount(e)}},V=ja.length;function No(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&No(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<V;n++){let r=ja[n],i=e.props[r];(ka(i)||i===!1)&&(t[r]=i)}return t}function Po(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var Fo=[...Aa].reverse(),Io=Aa.length;function Lo(e){return t=>Promise.all(t.map(({animation:t,options:n})=>gi(e,t,n)))}function Ro(e){let t=Lo(e),n=Vo(),r=!0,i=!1,a=t=>(n,r)=>{let i=$r(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function o(n){t=n(e)}function s(o){let{props:s}=e,c=No(e.parent)||{},l=[],u=new Set,d={},f=1/0;for(let t=0;t<Io;t++){let p=Fo[t],m=n[p],h=s[p]===void 0?c[p]:s[p],g=ka(h),_=p===o?m.isActive:null;_===!1&&(f=t);let v=h===c[p]&&h!==s[p]&&g;if(v&&(r||i)&&e.manuallyAnimateOnMount&&(v=!1),m.protectedKeys={...d},!m.isActive&&_===null||!h&&!m.prevProp||Oa(h)||typeof h==`boolean`)continue;if(p===`exit`&&m.isActive&&_!==!0){m.prevResolvedValues&&(d={...d,...m.prevResolvedValues});continue}let y=zo(m.prevProp,h),b=y||p===o&&m.isActive&&!v&&g||t>f&&g,x=!1,S=Array.isArray(h)?h:[h],C=S.reduce(a(p),{});_===!1&&(C={});let{prevResolvedValues:w={}}=m,ee={...w,...C},te=t=>{b=!0,u.has(t)&&(x=!0,u.delete(t)),m.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in ee){let t=C[e],n=w[e];if(d.hasOwnProperty(e))continue;let r=!1;r=ti(t)&&ti(n)?!Po(t,n)||y:t!==n,r?t==null?u.add(e):te(e):t!==void 0&&u.has(e)?te(e):m.protectedKeys[e]=!0}m.prevProp=h,m.prevResolvedValues=C,m.isActive&&(d={...d,...C}),(r||i)&&e.blockInitialAnimation&&(b=!1);let ne=v&&y;b&&(!ne||x)&&l.push(...S.map(t=>{let n={type:p};if(typeof t==`string`&&(r||i)&&!ne&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=$r(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=Mr(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(u.size){let t={};if(typeof s.initial!=`boolean`){let n=$r(e,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(t.transition=n.transition)}u.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),l.push({animation:t})}let p=!!l.length;return r&&(s.initial===!1||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(p=!1),r=!1,i=!1,p?t(l):Promise.resolve()}function c(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=s(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:s,setActive:c,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Vo(),i=!0}}}function zo(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!Po(t,e):!1}function Bo(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Vo(){return{animate:Bo(!0),whileInView:Bo(),whileHover:Bo(),whileTap:Bo(),whileDrag:Bo(),whileFocus:Bo(),exit:Bo()}}function Ho(e,t){e.min=t.min,e.max=t.max}function Uo(e,t){Ho(e.x,t.x),Ho(e.y,t.y)}function Wo(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var Go=.9999,Ko=1.0001,qo=-.01,Jo=.01;function Yo(e){return e.max-e.min}function Xo(e,t,n){return Math.abs(e-t)<=n}function Zo(e,t,n,r=.5){e.origin=r,e.originPoint=M(t.min,t.max,e.origin),e.scale=Yo(n)/Yo(t),e.translate=M(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Go&&e.scale<=Ko||isNaN(e.scale))&&(e.scale=1),(e.translate>=qo&&e.translate<=Jo||isNaN(e.translate))&&(e.translate=0)}function Qo(e,t,n,r){Zo(e.x,t.x,n.x,r?r.originX:void 0),Zo(e.y,t.y,n.y,r?r.originY:void 0)}function $o(e,t,n,r=0){e.min=(r?M(n.min,n.max,r):n.min)+t.min,e.max=e.min+Yo(t)}function es(e,t,n,r){$o(e.x,t.x,n.x,r?.x),$o(e.y,t.y,n.y,r?.y)}function ts(e,t,n,r=0){let i=r?M(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+Yo(t)}function ns(e,t,n,r){ts(e.x,t.x,n.x,r?.x),ts(e.y,t.y,n.y,r?.y)}function rs(e,t,n,r,i){return e-=t,e=eo(e,1/n,r),i!==void 0&&(e=eo(e,1/i,r)),e}function is(e,t=0,n=1,r=.5,i,a=e,o=e){if(dt.test(t)&&(t=parseFloat(t),t=M(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=M(a.min,a.max,r);e===a&&(s-=t),e.min=rs(e.min,t,n,s,i),e.max=rs(e.max,t,n,s,i)}function as(e,t,[n,r,i],a,o){is(e,t[n],t[r],t[i],t.scale,a,o)}var os=[`x`,`scaleX`,`originX`],ss=[`y`,`scaleY`,`originY`];function cs(e,t,n,r){as(e.x,t,os,n?n.x:void 0,r?r.x:void 0),as(e.y,t,ss,n?n.y:void 0,r?r.y:void 0)}function ls(e){return e.translate===0&&e.scale===1}function us(e){return ls(e.x)&&ls(e.y)}function ds(e,t){return e.min===t.min&&e.max===t.max}function fs(e,t){return ds(e.x,t.x)&&ds(e.y,t.y)}function ps(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function ms(e,t){return ps(e.x,t.x)&&ps(e.y,t.y)}function hs(e){return Yo(e.x)/Yo(e.y)}function gs(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function _s(e){return[e(`x`),e(`y`)]}function vs(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,pathRotation:i,rotateX:a,rotateY:o,skewX:s,skewY:c}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotate(${i}deg) `),a&&(r+=`rotateX(${a}deg) `),o&&(r+=`rotateY(${o}deg) `),s&&(r+=`skewX(${s}deg) `),c&&(r+=`skewY(${c}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var ys=Ii.length,bs=e=>typeof e==`string`?parseFloat(e):e,xs=e=>typeof e==`number`||A.test(e);function Ss(e,t,n,r,i,a){i?(e.opacity=M(0,n.opacity??1,ws(r)),e.opacityExit=M(t.opacity??1,0,Ts(r))):a&&(e.opacity=M(t.opacity??1,n.opacity??1,r));for(let i=0;i<ys;i++){let a=Ii[i],o=Cs(t,a),s=Cs(n,a);(o!==void 0||s!==void 0)&&(o||=0,s||=0,o===0||s===0||xs(o)===xs(s)?(e[a]=Math.max(M(bs(o),bs(s),r),0),(dt.test(s)||dt.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=M(t.rotate||0,n.rotate||0,r))}function Cs(e,t){return e[t]===void 0?e.borderRadius:e[t]}var ws=Es(0,.5,Ce),Ts=Es(.5,.95,se);function Es(e,t,n){return r=>r<e?0:r>t?1:n(le(e,t,r))}function Ds(e,t,n){let r=ai(e)?e:Lr(e);return r.start(qr(``,r,t,n)),r.animation}function Os(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}var ks=(e,t)=>e.depth-t.depth,As=class{constructor(){this.children=[],this.isDirty=!1}add(e){ee(this.children,e),this.isDirty=!0}remove(e){te(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(ks),this.isDirty=!1,this.children.forEach(e)}};function js(e,t){let n=He.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(Le(r),e(a-t))};return k.setup(r,!0),()=>Le(r)}function Ms(e){return ai(e)?e.get():e}var Ns=class{constructor(){this.members=[]}add(e){ee(this.members,e);for(let t=this.members.length-1;t>=0;t--){let n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;let r=n.instance;(!r||r.isConnected===!1)&&!n.snapshot&&(te(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(te(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(e.isPresent!==!1&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();let{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;(r===void 0||r!==i)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}},Ps={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Fs={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},Is=[``,`X`,`Y`,`Z`],Ls=1e3,Rs=0;function zs(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Bs(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=ui(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,k,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Bs(r)}function Vs({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=Rs++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ya.value&&(Fs.nodes=Fs.calculatedTargetDeltas=Fs.calculatedProjections=0),this.nodes.forEach(Ws),this.nodes.forEach($s),this.nodes.forEach(ec),this.nodes.forEach(Gs),ya.addProjectionMetrics&&ya.addProjectionMetrics(Fs)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new As)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new E),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=ia(t)&&!ba(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;k.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=js(i,250),Ps.hasAnimatedSinceResize&&(Ps.hasAnimatedSinceResize=!1,this.nodes.forEach(Qs)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||sc,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!ms(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...zr(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l,t.path)}else t||Qs(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Le(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(tc),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Bs(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,(typeof t.latestValues.x==`string`||typeof t.latestValues.y==`string`)&&(t.isLayoutDirty=!0),t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let e=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(Js),this.nodes.forEach(qs);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Ys);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Xs),this.nodes.forEach(Zs),this.nodes.forEach(Hs),this.nodes.forEach(Us)):this.nodes.forEach(Ys),this.clearAllSnapshots();let e=He.now();Re.delta=ne(0,1e3/60,e-Re.timestamp),Re.timestamp=e,Re.isProcessing=!0,ze.update.process(Re),ze.preRender.process(Re),ze.render.process(Re),Re.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,F.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Ks),this.sharedNodes.forEach(nc)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,k.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){k.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),this.snapshot&&!Yo(this.snapshot.measuredBox.x)&&!Yo(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||=Ea(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!us(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||Za(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),dc(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return Ea();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(pc))){let{scroll:e}=this.root;e&&(so(t.x,e.offset.x),so(t.y,e.offset.y))}return t}removeElementScroll(e){let t=Ea();if(Uo(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&Uo(t,e),so(t.x,i.offset.x),so(t.y,i.offset.y))}return t}applyTransform(e,t=!1,n){let r=n||Ea();Uo(r,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&(so(r.x,-n.scroll.offset.x),so(r.y,-n.scroll.offset.y)),Za(n.latestValues)&&uo(r,n.latestValues,n.layout?.layoutBox)}return Za(this.latestValues)&&uo(r,this.latestValues,this.layout?.layoutBox),r}removeTransform(e){let t=Ea();Uo(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!Za(n.latestValues))continue;let r;n.instance&&(Xa(n.latestValues)&&n.updateSnapshot(),r=Ea(),Uo(r,n.measurePageBox())),cs(t,n.latestValues,n.snapshot?.layoutBox,r)}return Za(this.latestValues)&&cs(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Re.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=Re.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),(this.relativeTarget||this.targetDelta)&&(this.target||(this.target=Ea(),this.targetWithTransforms=Ea()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),es(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Uo(this.target,this.layout.layoutBox),ro(this.target,this.targetDelta)):Uo(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),ya.value&&Fs.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||Xa(this.parent.latestValues)||Qa(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ea(),this.relativeTargetOrigin=Ea(),ns(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),Uo(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===Re.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;Uo(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;oo(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=Ea());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Wo(this.prevProjectionDelta.x,this.projectionDelta.x),Wo(this.prevProjectionDelta.y,this.projectionDelta.y)),Qo(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!gs(this.projectionDelta.x,this.prevProjectionDelta.x)||!gs(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),ya.value&&Fs.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=wa(),this.projectionDelta=wa(),this.projectionDeltaWithTransform=wa()}setAnimationOrigin(e,t=!1,n){let r=this.snapshot,i=r?r.latestValues:{},a={...this.latestValues},o=wa();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let s=Ea(),c=(r?r.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),u=!l||l.members.length<=1,d=!(!c||u||this.options.crossfade!==!0||this.path.some(oc));this.animationProgress=0;let f,p=n?.interpolateProjection(e);this.mixTargetDelta=t=>{let n=t/1e3,r=p?.(n);r?(o.x.translate=r.x,o.x.scale=M(e.x.scale,1,n),o.x.origin=e.x.origin,o.x.originPoint=e.x.originPoint,o.y.translate=r.y,o.y.scale=M(e.y.scale,1,n),o.y.origin=e.y.origin,o.y.originPoint=e.y.originPoint):(rc(o.x,e.x,n),rc(o.y,e.y,n)),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ns(s,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),ac(this.relativeTarget,this.relativeTargetOrigin,s,n),f&&fs(this.relativeTarget,f)&&(this.isProjectionDirty=!1),f||=Ea(),Uo(f,this.relativeTarget)),c&&(this.animationValues=a,Ss(a,i,this.latestValues,n,d,u)),r&&r.rotate!==void 0&&(this.animationValues||=a,this.animationValues.pathRotation=r.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(Le(this.pendingAnimation),void 0),this.pendingAnimation=k.update(()=>{Ps.hasAnimatedSinceResize=!0,this.motionValue||=Lr(0),this.motionValue.jump(0,!1),this.currentAnimation=Ds(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Ls),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(t&&n&&r){if(this!==e&&this.layout&&r&&fc(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||Ea();let t=Yo(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=Yo(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}Uo(t,n),uo(t,i),Qo(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new Ns),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return!e||e.lead===this}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&zs(`z`,e,r,this.animationValues);for(let t=0;t<Is.length;t++)zs(`rotate${Is[t]}`,e,r,this.animationValues),zs(`skew${Is[t]}`,e,r,this.animationValues);e.render();for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=Ms(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=Ms(t?.pointerEvents)||``),this.hasProjected&&!Za(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=vs(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,e.opacity=r.animationValues?r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let t in yo){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=yo[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?Ms(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(qs),this.root.sharedNodes.clear()}}}function Hs(e){e.updateLayout()}function Us(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i===`size`)_s(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=Yo(r);r.min=n[e].min,r.max=r.min+i});else if(i===`x`||i===`y`){let e=i===`x`?`y`:`x`;Ho(a?t.measuredBox[e]:t.layoutBox[e],n[e])}else fc(i,t.layoutBox,n)&&_s(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=Yo(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=wa();Qo(o,n,t.layoutBox);let s=wa();a?Qo(s,e.applyTransform(r,!0),t.measuredBox):Qo(s,n,t.layoutBox);let c=!us(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=e.options.layoutAnchor||void 0,s=Ea();ns(s,t.layoutBox,i.layoutBox,o);let c=Ea();ns(c,n,a.layoutBox,o),ms(s,c)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=c,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function Ws(e){ya.value&&Fs.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function Gs(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Ks(e){e.clearSnapshot()}function qs(e){e.clearMeasurements()}function Js(e){e.isLayoutDirty=!0,e.updateLayout()}function Ys(e){e.isLayoutDirty=!1}function Xs(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function Zs(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function Qs(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function $s(e){e.resolveTargetDelta()}function ec(e){e.calcProjection()}function tc(e){e.resetSkewAndRotation()}function nc(e){e.removeLeadSnapshot()}function rc(e,t,n){e.translate=M(t.translate,0,n),e.scale=M(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function ic(e,t,n,r){e.min=M(t.min,n.min,r),e.max=M(t.max,n.max,r)}function ac(e,t,n,r){ic(e.x,t.x,n.x,r),ic(e.y,t.y,n.y,r)}function oc(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var sc={duration:.45,ease:[.4,0,.1,1]},cc=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),lc=cc(`applewebkit/`)&&!cc(`chrome/`)?Math.round:se;function uc(e){e.min=lc(e.min),e.max=lc(e.max)}function dc(e){uc(e.x),uc(e.y)}function fc(e,t,n){return e===`position`||e===`preserve-aspect`&&!Xo(hs(t),hs(n),.2)}function pc(e){return e!==e.root&&e.scroll?.wasRoot}var mc=Vs({attachResizeListener:(e,t)=>Os(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),hc={current:void 0},gc=Vs({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!hc.current){let e=new mc({});e.mount(window),e.setOptions({layoutScroll:!0}),hc.current=e}return hc.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),_c=(0,_.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function vc(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function yc(...e){return t=>{let n=!1,r=e.map(e=>{let r=vc(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():vc(e[t],null)}}}}function bc(...e){return _.useCallback(yc(...e),e)}var H=b(),xc=class extends _.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(P(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){let e=t.offsetParent,n=P(e)&&e.offsetWidth||0,r=P(e)&&e.offsetHeight||0,i=getComputedStyle(t),a=this.props.sizeRef.current;a.height=parseFloat(i.height),a.width=parseFloat(i.width),a.top=t.offsetTop,a.left=t.offsetLeft,a.right=n-a.width-a.left,a.bottom=r-a.height-a.top,a.direction=i.direction}return null}componentDidUpdate(){}render(){return this.props.children}};function Sc({children:e,isPresent:t,anchorX:n,anchorY:r,root:i,pop:a}){let o=(0,_.useId)(),s=(0,_.useRef)(null),c=(0,_.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:`ltr`}),{nonce:l}=(0,_.useContext)(_c),u=bc(s,a===!1?void 0:e.props?.ref??e?.ref);return(0,_.useInsertionEffect)(()=>{let{width:e,height:u,top:d,left:f,right:p,bottom:m,direction:h}=c.current;if(t||a===!1||!s.current||!e||!u)return;let g=h===`rtl`,_=n===`left`?g?`right: ${p}`:`left: ${f}`:g?`left: ${f}`:`right: ${p}`,v=r===`bottom`?`bottom: ${m}`:`top: ${d}`;s.current.dataset.motionPopId=o;let y=document.createElement(`style`);l&&(y.nonce=l);let b=i??document.head;return b.appendChild(y),y.sheet&&y.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${u}px !important;
            ${_}px !important;
            ${v}px !important;
          }
        `),()=>{s.current?.removeAttribute(`data-motion-pop-id`),b.contains(y)&&b.removeChild(y)}},[t]),(0,H.jsx)(xc,{isPresent:t,childRef:s,sizeRef:c,pop:a,children:a===!1?e:_.cloneElement(e,{ref:u})})}var Cc=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=S(wc),d=(0,_.useId)(),f=(0,_.useRef)(n),p=(0,_.useRef)(r);C(()=>{f.current=n,p.current=r});let m=!0,h=(0,_.useMemo)(()=>(m=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:e=>(u.set(e,!1),()=>{u.delete(e),!f.current&&!u.size&&p.current?.()})}),[n,u,r]);return a&&m&&(h={...h}),(0,_.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),_.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),e=(0,H.jsx)(Sc,{pop:o===`popLayout`,isPresent:n,anchorX:s,anchorY:c,root:l,children:e}),(0,H.jsx)(w.Provider,{value:h,children:e})};function wc(){return new Map}function Tc(e=!0){let t=(0,_.useContext)(w);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,_.useId)();(0,_.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,_.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var Ec=e=>e.key||``;function Dc(e){let t=[];return _.Children.forEach(e,e=>{(0,_.isValidElement)(e)&&t.push(e)}),t}var Oc=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=Tc(o),f=(0,_.useMemo)(()=>Dc(e),[e]),p=o&&!u?[]:f.map(Ec),m=(0,_.useRef)(!0),h=(0,_.useRef)(f),g=S(()=>new Map),v=(0,_.useRef)(new Set),[y,b]=(0,_.useState)(f),[w,ee]=(0,_.useState)(f);C(()=>{o&&!u&&!w.length&&d?.()},[u,o,w.length,d]),C(()=>{m.current=!1,h.current=f;for(let e=0;e<w.length;e++){let t=Ec(w[e]);p.includes(t)?(g.delete(t),v.current.delete(t)):g.get(t)!==!0&&g.set(t,!1)}},[w,p.length,p.join(`-`)]);let te=[];if(f!==y){let e=[...f],t=0;for(let n of w){let r=p.indexOf(Ec(n));r===-1?(e.splice(t++,0,n),te.push(n)):t=r+te.length+1}return a===`wait`&&te.length&&(e=te),ee(Dc(e)),b(f),null}let{forceRender:ne}=(0,_.useContext)(x);return(0,H.jsx)(H.Fragment,{children:w.map(e=>{let _=Ec(e),y=o&&!u?!1:f===w||p.includes(_);return(0,H.jsx)(Cc,{isPresent:y,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:y?void 0:()=>{if(v.current.has(_))return;if(g.has(_))v.current.add(_),g.set(_,!0);else return;let e=!0;g.forEach(t=>{t||(e=!1)}),e&&(ne?.(),ee(h.current),o&&d?.(),r&&r())},anchorX:s,anchorY:c,children:e},_)})})},kc=(0,_.createContext)({strict:!1}),Ac={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},jc=!1;function Mc(){if(jc)return;let e={};for(let t in Ac)e[t]={isEnabled:e=>Ac[t].some(t=>!!e[t])};Va(e),jc=!0}function Nc(){return Mc(),Ha()}function Pc(e){let t=Nc();for(let n in e)t[n]={...t[n],...e[n]};Va(t)}var Fc=(0,_.createContext)({});function Ic(e,t){if(Ma(e)){let{initial:t,animate:n}=e;return{initial:t===!1||ka(t)?t:void 0,animate:ka(n)?n:void 0}}return e.inherit===!1?{}:t}function Lc(e){let{initial:t,animate:n}=Ic(e,(0,_.useContext)(Fc));return(0,_.useMemo)(()=>({initial:t,animate:n}),[Rc(t),Rc(n)])}function Rc(e){return Array.isArray(e)?e.join(` `):e}var U=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function zc(e,t,n){for(let r in t)!ai(t[r])&&!bo(r,n)&&(e[r]=t[r])}function Bc({transformTemplate:e},t){return(0,_.useMemo)(()=>{let n=U();return L(n,t,e),Object.assign({},n.vars,n.style)},[t])}function Vc(e,t){let n=e.style||{},r={};return zc(r,n,e),Object.assign(r,Bc(e,t)),r}function Hc(e,t){let n={},r=Vc(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var Uc=()=>({...U(),attrs:{}});function Wc(e,t,n,r){let i=(0,_.useMemo)(()=>{let n=Uc();return Do(n,t,ko(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};zc(t,e.style,e),i.style={...t,...i.style}}return i}var Gc=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));function Kc(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||Gc.has(e)}function qc(e,t){return e.startsWith(`on`)?!Kc(e):t?.(e)??!Kc(e)}function Jc(e,t,n,r){let i={};for(let a in e)(a!==`values`||typeof e.values!=`object`)&&(ai(e[a])||(qc(a,r)||n===!0&&Kc(a)||!t&&!Kc(a)||e.draggable&&a.startsWith(`onDrag`))&&(i[a]=e[a]));return i}var Yc=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function Xc(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(Yc.indexOf(e)>-1||/[A-Z]/u.test(e))}function Zc(e,t,n,{latestValues:r},i,a=!1,o,s){let c=(o??Xc(e)?Wc:Hc)(t,r,i,e),l=Jc(t,typeof e==`string`,a,s),u=e===_.Fragment?{}:{...l,...c,ref:n},{children:d}=t,f=(0,_.useMemo)(()=>ai(d)?d.get():d,[d]);return(0,_.createElement)(e,{...u,children:f})}function Qc({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:$c(n,r,i,e),renderState:t()}}function $c(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=Ms(a[e]);let{initial:o,animate:s}=e,c=Ma(e),l=Na(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!Oa(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=Qr(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var el=e=>(t,n)=>{let r=(0,_.useContext)(Fc),i=(0,_.useContext)(w),a=()=>Qc(e,t,r,i);return n?a():S(a)},tl=el({scrapeMotionValuesFromProps:xo,createRenderState:U}),nl=el({scrapeMotionValuesFromProps:jo,createRenderState:Uc}),rl=Symbol.for(`motionComponentSymbol`);function il(e,t,n){let r=(0,_.useRef)(n);(0,_.useInsertionEffect)(()=>{r.current=n});let i=(0,_.useRef)(null);return(0,_.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`){if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n)}else a&&(a.current=n)},[t])}var al=(0,_.createContext)({});function ol(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function sl(e,t,n,r,i,a){let{visualElement:o}=(0,_.useContext)(Fc),s=(0,_.useContext)(kc),c=(0,_.useContext)(w),l=(0,_.useContext)(_c),u=l.reducedMotion,d=l.skipAnimations,f=(0,_.useRef)(null),p=(0,_.useRef)(!1);r||=s.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:a}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let m=f.current,h=(0,_.useContext)(al);m&&!m.projection&&i&&(m.type===`html`||m.type===`svg`)&&cl(f.current,n,i,h);let g=(0,_.useRef)(!1);(0,_.useInsertionEffect)(()=>{m&&g.current&&m.update(n,c)});let v=n[li],y=(0,_.useRef)(!!v&&typeof window<`u`&&!window.MotionHandoffIsComplete?.(v)&&window.MotionHasOptimisedAnimation?.(v));return C(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),y.current&&m.animationState&&m.animationState.animateChanges())}),(0,_.useEffect)(()=>{m&&(!y.current&&m.animationState&&m.animationState.animateChanges(),y.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(v)}),!1),m.enteringChildren=void 0)}),m}function cl(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutAnchor:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:W(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&ol(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:l,layoutAnchor:u})}function W(e){if(e)return e.options.allowProjection===!1?W(e.parent):e.projection}function ll(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&Pc(r);let a=n?n===`svg`:Xc(e),o=a?nl:tl;function s(n,s){let c,l={...(0,_.useContext)(_c),...n,layoutId:ul(n)},{isStatic:u,isValidProp:d}=l,f=Lc(n),p=o(n,u);if(!u&&typeof window<`u`){dl(l,r);let t=fl(l);c=t.MeasureLayout,f.visualElement=sl(e,p,l,i,t.ProjectionNode,a)}return(0,H.jsxs)(Fc.Provider,{value:f,children:[c&&f.visualElement?(0,H.jsx)(c,{visualElement:f.visualElement,...l}):null,Zc(e,n,il(p,f.visualElement,s),p,u,t,a,d)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,_.forwardRef)(s);return c[rl]=e,c}function ul({layoutId:e}){let t=(0,_.useContext)(x).id;return t&&e!==void 0?t+`-`+e:e}function dl(e,t){(0,_.useContext)(kc).strict}function fl(e){let{drag:t,layout:n}=Nc();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function pl(e,t){if(typeof Proxy>`u`)return ll;let n=new Map,r=(n,r)=>ll(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,ll(a,void 0,e,t)),n.get(a))})}var ml=(e,t)=>t.isSVG??Xc(e)?new Mo(t):new Co(t,{allowProjection:e!==_.Fragment}),hl=class extends Ga{constructor(e){super(e),e.animationState||=Ro(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();Oa(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},gl=0,_l={animation:{Feature:hl},exit:{Feature:class extends Ga{constructor(){super(...arguments),this.id=gl++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&n===!1){if(this.isExitComplete){let{initial:e,custom:t}=this.node.getProps();if(typeof e==`string`||typeof e==`object`&&e&&!Array.isArray(e)){let n=$r(this.node,e,t);if(n){let{transition:e,transitionEnd:t,...r}=n;for(let e in r)this.node.getValue(e)?.jump(r[e])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive(`exit`,!1);this.isExitComplete=!1;return}let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function vl(e){return{point:{x:e.pageX,y:e.pageY}}}var yl=e=>t=>Ki(t)&&e(t,vl(t));function bl(e,t,n,r){return Os(e,t,yl(n),r)}var xl=({current:e})=>e?e.ownerDocument.defaultView:null,Sl=(e,t)=>Math.abs(e-t);function Cl(e,t){let n=Sl(e.x,t.x),r=Sl(e.y,t.y);return Math.sqrt(n**2+r**2)}var wl=new Set([`auto`,`scroll`]),Tl=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=El(this.lastRawMoveEventInfo,this.transformPagePoint));let e=Ol(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=Cl(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=Re;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=El(t,this.transformPagePoint),k.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=Ol(e.type===`pointercancel`?this.lastMoveEventInfo:El(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!Ki(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=El(vl(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=Re;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,Ol(s,this.history));let d={passive:!0,capture:!0};this.removeListeners=ce(bl(this.contextWindow,`pointermove`,this.handlePointerMove,d),bl(this.contextWindow,`pointerup`,this.handlePointerUp,d),bl(this.contextWindow,`pointercancel`,this.handlePointerUp,d)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(wl.has(e.overflowX)||wl.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.addEventListener(`scroll`,this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};(i.x!==0||i.y!==0)&&(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),k.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Le(this.updatePoint)}};function El(e,t){return t?{point:t(e.point)}:e}function Dl(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ol({point:e},t){return{point:e,delta:Dl(e,Al(t)),offset:Dl(e,kl(t)),velocity:jl(t,.1)}}function kl(e){return e[0]}function Al(e){return e[e.length-1]}function jl(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=Al(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>D(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>D(t)*2&&(r=e[1]);let a=ue(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Ml(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?M(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?M(n,e,r.max):Math.min(e,n)),e}function Nl(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function Pl(e,{top:t,left:n,bottom:r,right:i}){return{x:Nl(e.x,n,i),y:Nl(e.y,t,r)}}function Fl(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function Il(e,t){return{x:Fl(e.x,t.x),y:Fl(e.y,t.y)}}function Ll(e,t){let n=.5,r=Yo(e),i=Yo(t);return i>r?n=le(t.min,t.max-r,e.min):r>i&&(n=le(e.min,e.max-i,t.min)),ne(0,1,n)}function Rl(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var zl=.35;function G(e=zl){return e===!1?e=0:e===!0&&(e=zl),{x:K(e,`left`,`right`),y:K(e,`top`,`bottom`)}}function K(e,t,n){return{min:q(e,t),max:q(e,n)}}function q(e,t){return typeof e==`number`?e:e[t]||0}var J=new WeakMap,Y=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ea(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t&&this.snapToCursor(vl(e).point),this.stopAnimation()},a=(e,t)=>{let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Vi(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),_s(e=>{let t=this.getAxisMotionValue(e).get()||0;if(dt.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=Yo(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&k.update(()=>i(e,t),!1,!0),si(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=Ul(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&k.update(()=>a(e,t),!1,!0)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:l}=this.getProps();this.panSession=new Tl(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:xl(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&k.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!Hl(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=Ml(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&ol(e)?this.constraints||=this.resolveRefConstraints():this.constraints=e&&n?Pl(n.layoutBox,e):!1,this.elastic=G(t),r!==this.constraints&&!ol(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&_s(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=Rl(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!ol(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;r.root&&(r.root.scroll=void 0,r.root.updateScroll());let i=po(n,r.root,this.visualElement.getTransformPagePoint()),a=Il(r.layout.layoutBox,i);if(t){let e=t(qa(a));this.hasMutatedConstraints=!!e,e&&(a=Ka(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=_s(o=>{if(!Hl(o,t,this.currentDirection))return;let c=s&&s[o]||{};(a===!0||a===o)&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return si(this.visualElement,e),n.start(qr(e,n,0,t,this.visualElement,!1))}stopAnimation(){_s(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`;return this.visualElement.getProps()[t]||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){_s(t=>{let{drag:n}=this.getProps();if(!Hl(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-M(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!ol(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};_s(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=Ll({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),_s(t=>{if(!Hl(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(M(i,a,r[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;J.set(this.visualElement,this);let e=this.visualElement.current,t=bl(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&Xi(i);n&&r&&!a&&this.start(t)}),n,r=()=>{let{dragConstraints:t}=this.getProps();ol(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||=Vl(e,t.current,()=>this.scalePositionWithinConstraints()))},{projection:i}=this.visualElement,a=i.addEventListener(`measure`,r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),k.read(r);let o=Os(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(_s(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{o(),t(),a(),s&&s(),n&&n()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=zl,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function Bl(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function Vl(e,t,n){let r=va(e,Bl(n)),i=va(t,Bl(n));return()=>{r(),i()}}function Hl(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Ul(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var Wl=class extends Ga{constructor(e){super(e),this.removeGroupControls=se,this.removeListeners=se,this.controls=new Y(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||se}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},X=e=>(t,n)=>{e&&k.update(()=>e(t,n),!1,!0)},Gl=class extends Ga{constructor(){super(...arguments),this.removePointerDownListener=se}onPointerDown(e){this.session=new Tl(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:xl(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:X(e),onStart:X(t),onMove:X(n),onEnd:(e,t)=>{delete this.session,r&&k.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=bl(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},Kl=!1,ql=class extends _.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),Kl&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Ps.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),Kl=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||k.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),F.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;Kl=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function Jl(e){let[t,n]=Tc(),r=(0,_.useContext)(x);return(0,H.jsx)(ql,{...e,layoutGroup:r,switchLayoutGroup:(0,_.useContext)(al),isPresent:t,safeToRemove:n})}var Yl={pan:{Feature:Gl},drag:{Feature:Wl,ProjectionNode:gc,MeasureLayout:Jl}};function Xl(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&k.postRender(()=>i(t,vl(t)))}var Zl=class extends Ga{mount(){let{current:e}=this.node;e&&(this.unmount=Wi(e,(e,t)=>(Xl(this.node,t,`Start`),e=>Xl(this.node,e,`End`))))}unmount(){}},Ql=class extends Ga{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}e&&this.node.animationState&&(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=ce(Os(this.node.current,`focus`,()=>this.onFocus()),Os(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function $l(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&k.postRender(()=>i(t,vl(t)))}var eu=class extends Ga{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=ra(e,(e,t)=>($l(this.node,t,`Start`),(e,{success:t})=>$l(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:t,stopPropagation:n?.tap===!1})}unmount(){}},tu=new WeakMap,nu=new WeakMap,ru=e=>{let t=tu.get(e.target);t&&t(e)},iu=e=>{e.forEach(ru)};function au({root:e,...t}){let n=e||document;nu.has(n)||nu.set(n,{});let r=nu.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(iu,{root:e,...t})),r[i]}function ou(e,t,n){let r=au(t);return tu.set(e,n),r.observe(e),()=>{tu.delete(e),r.unobserve(e)}}var su={some:0,all:1},cu=class extends Ga{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:su[r]},o=e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)};this.stopObserver=ou(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(lu(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}};function lu({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var uu={inView:{Feature:cu},tap:{Feature:eu},focus:{Feature:Ql},hover:{Feature:Zl}},du={layout:{ProjectionNode:gc,MeasureLayout:Jl}},fu=pl({..._l,...uu,...Yl,...du},ml);function pu(e=!0){let t=(0,_.useCallback)(t=>{if(e)try{let e=new(window.AudioContext||window.webkitAudioContext),n=e.createOscillator(),r=e.createGain();n.connect(r),r.connect(e.destination),t===`correct`?(n.frequency.value=880,r.gain.value=.1,n.start(),n.stop(e.currentTime+.15)):t===`wrong`?(n.frequency.value=220,r.gain.value=.1,n.start(),n.stop(e.currentTime+.3)):t===`complete`?(n.frequency.value=660,r.gain.value=.1,n.start(),n.stop(e.currentTime+.2)):t===`tick`&&(n.frequency.value=440,r.gain.value=.05,n.start(),n.stop(e.currentTime+.05))}catch{}},[e]);return{playCorrect:()=>t(`correct`),playWrong:()=>t(`wrong`),playComplete:()=>t(`complete`),playTick:()=>t(`tick`)}}function mu({question:e,onAnswer:t,onSkip:n,soundEnabled:r}){let[i,a]=(0,_.useState)(null),[o,s]=(0,_.useState)(!1),[c]=(0,_.useState)(Date.now()),{playCorrect:l,playWrong:u}=pu(r),d=(0,_.useCallback)(n=>{if(o)return;a(n),s(!0);let r=Math.floor((Date.now()-c)/1e3),i=n===e.correctAnswer;i?l():u(),t(i,r)},[o,c,e.correctAnswer,l,u,t]),f=t=>o?t===e.correctAnswer?`bg-green-100 border-green-500 text-green-800`:t===i&&t!==e.correctAnswer?`bg-red-100 border-red-500 text-red-800`:`bg-gray-50 border-gray-200 opacity-50`:`bg-white hover:bg-blue-50 border-gray-200`;return(0,H.jsxs)(`div`,{className:`w-full max-w-2xl mx-auto`,children:[(0,H.jsxs)(`div`,{className:`mb-6`,children:[(0,H.jsx)(`span`,{className:`inline-block px-3 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full mb-3`,children:e.topic}),(0,H.jsx)(`h2`,{className:`text-lg font-medium leading-relaxed text-gray-900`,children:e.question})]}),(0,H.jsx)(`div`,{className:`space-y-3 mb-6`,children:e.options.map((e,t)=>(0,H.jsxs)(fu.button,{whileTap:{scale:.98},onClick:()=>d(e.charAt(0)),disabled:o,className:`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${f(e.charAt(0))}`,children:[(0,H.jsxs)(`span`,{className:`font-medium mr-2`,children:[e.charAt(0),`.`]}),e.slice(3)]},t))}),(0,H.jsx)(Oc,{children:o&&(0,H.jsxs)(fu.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:`p-4 rounded-xl mb-6 ${i===e.correctAnswer?`bg-green-50 border border-green-200`:`bg-red-50 border border-red-200`}`,children:[(0,H.jsx)(`p`,{className:`font-medium mb-2`,children:i===e.correctAnswer?`✅ 正确！`:`❌ 错误`}),(0,H.jsx)(`p`,{className:`text-sm text-gray-700 leading-relaxed whitespace-pre-wrap`,children:e.explanation})]})}),(0,H.jsx)(`div`,{className:`flex justify-center gap-3`,children:o?(0,H.jsx)(`button`,{onClick:()=>{a(null),s(!1)},className:`px-8 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors`,children:`下一题 →`}):(0,H.jsx)(`button`,{onClick:n,className:`px-6 py-2 text-gray-500 hover:text-gray-700 transition-colors`,children:`⏭ 跳过`})})]})}function hu(e=15,t=5){let[n,r]=(0,_.useState)({timeLeft:e*60,isRunning:!1,isBreak:!1,sessionsCompleted:0}),i=(0,_.useRef)(null),a=(0,_.useCallback)(()=>{r(e=>({...e,isRunning:!0}))},[]),o=(0,_.useCallback)(()=>{r(e=>({...e,isRunning:!1}))},[]),s=(0,_.useCallback)(()=>{r(n=>({...n,timeLeft:n.isBreak?t*60:e*60,isRunning:!1}))},[e,t]),c=(0,_.useCallback)(()=>{r(t=>({...t,isBreak:!1,timeLeft:e*60}))},[e]);(0,_.useEffect)(()=>(n.isRunning&&(i.current=setInterval(()=>{r(n=>{if(n.timeLeft<=1){let r=n.sessionsCompleted+1,i=!n.isBreak;return{timeLeft:i?t*60:e*60,isRunning:i,isBreak:i,sessionsCompleted:r}}return{...n,timeLeft:n.timeLeft-1}})},1e3)),()=>{i.current&&clearInterval(i.current)}),[n.isRunning,e,t]);let l=n.isBreak?(t*60-n.timeLeft)/(t*60):(e*60-n.timeLeft)/(e*60);return{...n,progress:l,start:a,pause:o,reset:s,skipBreak:c}}function gu(e){let t=Math.floor(e/60),n=e%60;return`${t.toString().padStart(2,`0`)}:${n.toString().padStart(2,`0`)}`}function _u(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function vu({duration:e=15,breakDuration:t=5}){let{timeLeft:n,isRunning:r,isBreak:i,progress:a,start:o,pause:s,reset:c}=hu(e,t);return(0,H.jsxs)(`div`,{className:`flex flex-col items-center gap-4 p-6 bg-white rounded-2xl shadow-lg`,children:[(0,H.jsxs)(`div`,{className:`relative w-48 h-48`,children:[(0,H.jsxs)(`svg`,{className:`w-full h-full -rotate-90`,viewBox:`0 0 100 100`,children:[(0,H.jsx)(`circle`,{cx:`50`,cy:`50`,r:`45`,fill:`none`,stroke:`#e5e7eb`,strokeWidth:`8`}),(0,H.jsx)(`circle`,{cx:`50`,cy:`50`,r:`45`,fill:`none`,stroke:i?`#10b981`:`#3b82f6`,strokeWidth:`8`,strokeLinecap:`round`,strokeDasharray:`${a*283} 283`,className:`transition-all duration-1000`})]}),(0,H.jsxs)(`div`,{className:`absolute inset-0 flex flex-col items-center justify-center`,children:[(0,H.jsx)(`span`,{className:`text-4xl font-bold tabular-nums`,children:gu(n)}),(0,H.jsx)(`span`,{className:`text-sm text-gray-500`,children:i?`休息时间`:`专注时间`})]})]}),(0,H.jsxs)(`div`,{className:`flex gap-3`,children:[r?(0,H.jsx)(`button`,{onClick:s,className:`px-6 py-2 bg-amber-500 text-white rounded-full font-medium hover:bg-amber-600 transition-colors`,children:`暂停`}):(0,H.jsx)(`button`,{onClick:o,className:`px-6 py-2 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors`,children:`开始`}),(0,H.jsx)(`button`,{onClick:c,className:`px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition-colors`,children:`重置`})]})]})}var yu=[{id:`first-try`,title:`初次尝试`,description:`完成第一道题`,icon:`🎯`,condition:e=>e.totalAnswered>=1},{id:`getting-better`,title:`渐入佳境`,description:`连续答对 5 道题`,icon:`📈`,condition:e=>e.correctCount>=5},{id:`tomato-master`,title:`番茄达人`,description:`完成 3 个番茄钟`,icon:`🍅`,condition:e=>e.tomatoSessions>=3},{id:`streak-7`,title:`一周坚持`,description:`连续学习 7 天`,icon:`📅`,condition:e=>e.streakDays>=7},{id:`mistake-cleared`,title:`错题清零`,description:`清空错题本`,icon:`✨`,condition:e=>e.achievements.includes(`mistake-cleared`)}];function bu({stats:e}){let t=(0,_.useMemo)(()=>yu.filter(t=>t.condition(e)),[e]);return(0,H.jsxs)(`div`,{className:`space-y-4`,children:[(0,H.jsxs)(`h3`,{className:`text-lg font-bold text-gray-900`,children:[`成就 (`,t.length,`/`,yu.length,`)`]}),(0,H.jsx)(`div`,{className:`grid grid-cols-2 gap-3`,children:yu.map(t=>{let n=t.condition(e);return(0,H.jsxs)(`div`,{className:`p-4 rounded-xl border-2 transition-all ${n?`bg-amber-50 border-amber-200`:`bg-gray-50 border-gray-200 opacity-60`}`,children:[(0,H.jsx)(`div`,{className:`text-3xl mb-2`,children:t.icon}),(0,H.jsx)(`h4`,{className:`font-medium text-sm`,children:t.title}),(0,H.jsx)(`p`,{className:`text-xs text-gray-500 mt-1`,children:t.description}),n&&(0,H.jsx)(`div`,{className:`text-xs text-amber-600 font-medium mt-2`,children:`✓ 已解锁`})]},t.id)})})]})}var xu=`cippe-study-data`,Su=`$2a$10$demo_key_for_cippe_sync`;function Cu(){let[e,t]=(0,_.useState)(`idle`),[n,r]=(0,_.useState)(null),i=(0,_.useCallback)(()=>localStorage.getItem(`cippe-api-key`)||Su,[]);return{syncStatus:e,lastSyncTime:n,syncToCloud:(0,_.useCallback)(async e=>{let n=i();t(`syncing`);try{let i=await fetch(`https://api.jsonbin.io/v3/b/${xu}`,{method:`PUT`,headers:{"Content-Type":`application/json`,"X-Master-Key":n},body:JSON.stringify(e)});if(!i.ok)throw Error(`HTTP error! status: ${i.status}`);return t(`success`),r(new Date().toLocaleString()),!0}catch(e){return console.error(`Sync to cloud failed:`,e),t(`error`),!1}},[i]),syncFromCloud:(0,_.useCallback)(async()=>{let e=i();t(`syncing`);try{let n=await fetch(`https://api.jsonbin.io/v3/b/${xu}/latest`,{headers:{"X-Master-Key":e}});if(!n.ok)throw Error(`HTTP error! status: ${n.status}`);let i=await n.json();return t(`success`),r(new Date().toLocaleString()),i.record}catch(e){return console.error(`Sync from cloud failed:`,e),t(`error`),null}},[i]),exportToFile:(0,_.useCallback)(e=>{let t=new Blob([JSON.stringify(e,null,2)],{type:`application/json`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`cippe-backup-${new Date().toISOString().split(`T`)[0]}.json`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(n)},[]),importFromFile:(0,_.useCallback)(e=>new Promise(t=>{let n=new FileReader;n.onload=e=>{try{t(JSON.parse(e.target?.result))}catch{t(null)}},n.onerror=()=>t(null),n.readAsText(e)}),[])}}function wu({settings:e,onUpdate:t}){let[n,r]=(0,_.useState)(e),{syncStatus:i,lastSyncTime:a,exportToFile:o,importFromFile:s}=Cu(),c=(0,_.useRef)(null),l=(e,i)=>{let a={...n,[e]:i};r(a),t(a)};return(0,H.jsxs)(`div`,{className:`space-y-6`,children:[(0,H.jsx)(`h3`,{className:`text-lg font-bold text-gray-900`,children:`设置`}),(0,H.jsxs)(`div`,{children:[(0,H.jsxs)(`label`,{className:`block text-sm font-medium text-gray-700 mb-2`,children:[`番茄钟时长: `,n.tomatoDuration,` 分钟`]}),(0,H.jsx)(`input`,{type:`range`,min:`5`,max:`60`,step:`5`,value:n.tomatoDuration,onChange:e=>l(`tomatoDuration`,parseInt(e.target.value)),className:`w-full`})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsxs)(`label`,{className:`block text-sm font-medium text-gray-700 mb-2`,children:[`休息时长: `,n.breakDuration,` 分钟`]}),(0,H.jsx)(`input`,{type:`range`,min:`1`,max:`30`,step:`1`,value:n.breakDuration,onChange:e=>l(`breakDuration`,parseInt(e.target.value)),className:`w-full`})]}),(0,H.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,H.jsx)(`span`,{className:`text-sm font-medium text-gray-700`,children:`音效`}),(0,H.jsx)(`button`,{onClick:()=>l(`soundEnabled`,!n.soundEnabled),className:`px-4 py-2 rounded-full text-sm transition-colors ${n.soundEnabled?`bg-green-500 text-white`:`bg-gray-200 text-gray-600`}`,children:n.soundEnabled?`🔊 开启`:`🔇 关闭`})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`span`,{className:`block text-sm font-medium text-gray-700 mb-2`,children:`字体大小`}),(0,H.jsx)(`div`,{className:`flex gap-2`,children:[`small`,`medium`,`large`].map(e=>(0,H.jsx)(`button`,{onClick:()=>l(`fontSize`,e),className:`px-4 py-2 rounded-lg text-sm transition-colors ${n.fontSize===e?`bg-blue-500 text-white`:`bg-gray-100 text-gray-600`}`,children:e===`small`?`小`:e===`medium`?`中`:`大`},e))})]}),(0,H.jsxs)(`div`,{className:`border-t pt-6 mt-6`,children:[(0,H.jsx)(`h4`,{className:`text-lg font-bold text-gray-900 mb-4`,children:`数据同步`}),(0,H.jsxs)(`div`,{className:`space-y-3`,children:[(0,H.jsx)(`button`,{onClick:()=>{let e={progress:JSON.parse(localStorage.getItem(`cippe-progress`)||`[]`),stats:JSON.parse(localStorage.getItem(`cippe-stats`)||`{}`),settings:n,lastSync:new Date().toISOString()};o(e)},className:`w-full px-4 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors`,children:`📥 导出学习数据`}),(0,H.jsx)(`button`,{onClick:()=>c.current?.click(),className:`w-full px-4 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors`,children:`📤 导入学习数据`}),(0,H.jsx)(`input`,{ref:c,type:`file`,accept:`.json`,onChange:async e=>{let n=e.target.files?.[0];if(!n)return;let r=await s(n);r&&(r.progress&&localStorage.setItem(`cippe-progress`,JSON.stringify(r.progress)),r.stats&&localStorage.setItem(`cippe-stats`,JSON.stringify(r.stats)),r.settings&&t(r.settings),window.location.reload())},className:`hidden`}),a&&(0,H.jsxs)(`p`,{className:`text-xs text-gray-500 text-center`,children:[`上次同步: `,a]}),i===`syncing`&&(0,H.jsx)(`p`,{className:`text-sm text-blue-600 text-center`,children:`同步中...`}),i===`error`&&(0,H.jsx)(`p`,{className:`text-sm text-red-600 text-center`,children:`同步失败，请重试`})]}),(0,H.jsx)(`div`,{className:`mt-4 p-3 bg-yellow-50 rounded-lg`,children:(0,H.jsxs)(`p`,{className:`text-xs text-yellow-800`,children:[(0,H.jsx)(`strong`,{children:`提示：`}),`点击"导出"可下载包含学习进度、统计数据和设置的 JSON 文件。 在新设备上点击"导入"即可恢复数据。`]})})]})]})}function Tu(e,t){let[n,r]=(0,_.useState)(()=>{try{let n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.error(`Error reading localStorage key "${e}":`,n),t}});return(0,_.useEffect)(()=>{try{window.localStorage.setItem(e,JSON.stringify(n))}catch(t){console.error(`Error writing localStorage key "${e}":`,t)}},[e,n]),[n,r]}var Eu={totalAnswered:0,correctCount:0,streakDays:0,lastStudyDate:``,tomatoSessions:0,achievements:[]};function Du(){let[e,t]=Tu(`cippe-progress`,[]),[n,r]=Tu(`cippe-stats`,Eu);return{progress:e,stats:n,recordAnswer:(0,_.useCallback)((e,n,i)=>{let a={questionId:e,isCorrect:n,timestamp:new Date().toISOString(),timeSpent:i};t(e=>[...e,a]),r(e=>({...e,totalAnswered:e.totalAnswered+1,correctCount:e.correctCount+ +!!n}))},[t,r]),getQuestionStatus:(0,_.useCallback)(t=>e.find(e=>e.questionId===t),[e]),getMistakes:(0,_.useCallback)(()=>e.filter(e=>!e.isCorrect),[e]),setStats:r}}var Ou=[{id:1,question:`Which statement is correct when considering the right to privacy under Article 8 of the European
Convention on Human Rights (ECHR)?`,options:[`A. The right to privacy is an absolute right`,`B. The right to privacy has to be balanced against other rights under the ECHR`,`C. The right to freedom of expression under Article 10 of the ECHR will always override the right to privacy`,`D. The right to privacy protects the right to hold opinions and to receive and impart ideas without interference`],correctAnswer:`B`,explanation:`正确答案 B。ECHR 第 8 条规定的隐私权是一项限制性权利（qualified right），并非绝对权利，须依第
8(2)条与其他权利（如第 10 条言论自由）进行平衡。A 错在“绝对权利”的表述——只有极少数权利（如
禁止酷刑）才是绝对的；C 错在言论自由并不“always override”隐私权，两者需个案平衡，不存在单向优
先；D 描述的其实是第 10 条言论自由的内容，而非第 8 条隐私权。知识点：欧洲人权公约中权利的“绝对
权利”与“限制性权利”区分、比例原则与利益平衡。`,topic:`判例法`,verified:`accurate`},{id:2,question:`What is one major goal that the OECD Guidelines, Convention 108 and the Data Protection Directive
(Directive 95/46/EC) all had in common but largely failed to achieve in Europe?`,options:[`A. The establishment of a list of legitimate data processing criteria`,`B. The creation of legally binding data protection principles`,`C. The synchronization of approaches to data protection`,`D. The restriction of cross-border data flow`],correctAnswer:`C`,explanation:`正确答案 C。OECD 隐私指南（1980）、欧洲理事会 108 号公约（1981）与 95/46/EC 指令都致力于协调
各国数据保护做法、便利数据跨境流动，但因均为软法或指令（需各国转化），最终未能实现欧洲范围
内做法的“同步化/一致化”，这正是 GDPR 以直接适用的“条例”形式出台的原因之一。A、B、D 分别只是
部分文件的具体内容，并非三者共同且失败的目标。知识点：数据保护立法史（OECD 指南、108 公约、
95/46 指令）及 GDPR 的立法动因。`,topic:`历史沿革/95-46-EC`,verified:`accurate`},{id:3,question:`A key component of the OECD Guidelines is the “Individual Participation Principle”. What parts of the
General Data Protection Regulation (GDPR) provide the closest equivalent to that principle?`,options:[`A. The lawful processing criteria stipulated by Articles 6 to 9`,`B. The information requirements set out in Articles 13 and 14`,`C. The breach notification requirements specified in Articles 33 and 34`,`D. The rights granted to data subjects under Articles 12 to 22`],correctAnswer:`D`,explanation:`正确答案 D。OECD 指南中的“个人参与原则”（Individual Participation Principle）赋予个人知悉、查阅、
更正与其相关数据的权利，这与 GDPR 第三章（第 12-22 条）规定的数据主体权利体系最为对应。A 是合
法处理依据（第 6-9 条），B 是信息告知义务（第 13-14 条，属于透明度原则的一部分），C 是数据泄露
通知义务，均不是“参与原则”的对应条款。知识点：OECD 八项原则与 GDPR 原则/权利的对应关系。`,topic:`Convention 108/108+`,verified:`accurate`},{id:4,question:`Which EU institution is vested with the competence to propose new data protection legislation on its own
initiative?`,options:[`A. The European Council`,`B. The European Parliament`,`C. The European Commission`,`D. The Council of the European Union`],correctAnswer:`C`,explanation:`正确答案 C。根据欧盟条约框架，欧盟委员会（European Commission）在普通立法程序中享有专属立法
提案权，负责提出新法案（包括数据保护立法）。欧洲议会和欧盟理事会负责审议、修改和通过立法，
但通常不能主动提案；欧洲理事会（European Council）则是设定政治方向的机构，不参与具体立法提
案。知识点：欧盟机构架构及普通立法程序（Ordinary Legislative Procedure）中各机构角色。`,topic:`监管机构`,verified:`accurate`},{id:5,question:`What is an important difference between the European Court of Human Rights (ECHR) and the Court of
Justice of the European Union (CJEU) in relation to their roles and functions?`,options:[`A. ECHR can rule on issues concerning privacy as a fundamental right, while the CJEU cannot.`,`B. CJEU can force national governments to implement and honor EU law, while the ECHR cannot.`,`C. CJEU can hear appeals on human rights decisions made by national courts, while the ECHR cannot.`,`D. ECHR can enforce human rights laws against governments that fail to implement them, while the CJEU cannot.`],correctAnswer:`B`,explanation:`正确答案 B。CJEU 的判决对成员国具有直接约束力，欧盟法优先原则和成员国违约诉讼程序（TFEU 第
258-260 条）使 CJEU 能够强制成员国执行欧盟法；而欧洲人权法院（ECtHR，此处以 ECHR 代称）的判
决执行依赖部长委员会监督，缺乏同等的强制执行机制。A 错——CJEU 同样可以通过《欧盟基本权利宪
章》第 7、8 条处理隐私问题；C、D 则颠倒或混淆了两个法院的职权范围。知识点：CJEU 与 ECtHR 在
职权、判决效力及执行机制上的区别。`,topic:`判例法`,verified:`accurate`},{id:6,question:`SCENARIO

Please use the following to answer the next question:

Anna and Frank both work at Granchester University. Anna is a lawyer responsible for data protection,

while Frank is a lecturer in the engineering department. The University maintains a number of types of
records:

Student records, including names, student numbers, home addresses, pre-university information,

university attendance and performance records, details of special educational needs and financial
information.
Staff records, including autobiographical materials (such as curricula, professional contact files, student
evaluations and other relevant teaching files).
Alumni records, including birthplaces, years of birth, dates of matriculation and conferrals of degrees.
These records are available to former students after registering through Granchester’s Alumni portal.
Department for Education records, showing how certain demographic groups (such as first-generation
students) could be expected, on average, to progress. These records do not contain names or
identification numbers.
Under their security policy, the University encrypts all of its personal data records in transit and at rest.

In order to improve his teaching, Frank wants to investigate how his engineering students perform in
relational to Department for Education expectations. He has attended one of Anna’s data protection
training courses and knows that he should use no more personal data than necessary to accomplish his
goal. He creates a program that will only export some student data: previous schools attended, grades
originally obtained, grades currently obtained and first time university attended. He wants to keep the
records at the individual student level. Mindful of Anna’s training, Frank runs the student numbers through
an algorithm to transform them into different reference numbers. He uses the same algorithm on each
occasion so that he can update each record over time.

One of Anna’s tasks is to complete the record of processing activities, as required by the GDPR. After
receiving her email reminder, as required by the GDPR. After receiving her email reminder, Frank informs
Anna about his performance database.

Ann explains to Frank that, as well as minimizing personal data, the University has to check that this new
use of existing data is permissible. She also suspects that, under the GDPR, a risk analysis may have to
be carried out before the data processing can take place. Anna arranges to discuss this further with Frank
after she has done some additional research.

Frank wants to be able to work on his analysis in his spare time, so he transfers it to his home laptop
(which is not encrypted). Unfortunately, when Frank takes the laptop into the University he loses it on the

train. Frank has to see Anna that day to discuss compatible processing. He knows that he needs to report
security incidents, so he decides to tell Anna about his lost laptop at the same time.

Which of the University’s records does Anna NOT have to include in her record of processing activities?`,options:[`A. Student records`,`B. Staff and alumni records`,`C. Frank’s performance database`,`D. Department for Education records`],correctAnswer:`D`,explanation:`正确答案 D。教育部统计记录不含姓名或身份编号，且用于展示群体层面的平均趋势，属于无法识别到
具体个人的匿名化数据，不构成 GDPR 意义上的“个人数据”，因此无需列入处理活动记录（第 30 条）。
学生记录、教职工/校友记录显然是个人数据；Frank 的成绩数据库虽经过“算法转换学号”，但因使用同一
算法且可在同一学生层面持续更新，属于假名化（pseudonymization）而非匿名化，假名化数据仍是个人
数据，须纳入记录。知识点：匿名化与假名化的区别、第 30 条处理活动记录的适用范围。`,topic:`GDPR`,verified:`accurate`},{id:7,question:`SCENARIO

Please use the following to answer the next question:

Anna and Frank both work at Granchester University. Anna is a lawyer responsible for data protection,
while Frank is a lecturer in the engineering department. The University maintains a number of types of
records:
 Student records, including names, student numbers, home addresses, pre-university information,
 university attendance and performance records, details of special educational needs and financial
 information.
 Staff records, including autobiographical materials (such as curricula, professional contact files, student

evaluations and other relevant teaching files).

Alumni records, including birthplaces, years of birth, dates of matriculation and conferrals of degrees.
These records are available to former students after registering through Granchester’s Alumni portal.

Department for Education records, showing how certain demographic groups (such as first-generation

students) could be expected, on average, to progress. These records do not contain names or
identification numbers.
Under their security policy, the University encrypts all of its personal data records in transit and at rest.

In order to improve his teaching, Frank wants to investigate how his engineering students perform in
relational to Department for Education expectations. He has attended one of Anna’s data protection
training courses and knows that he should use no more personal data than necessary to accomplish his
goal. He creates a program that will only export some student data: previous schools attended, grades
originally obtained, grades currently obtained and first time university attended. He wants to keep the
records at the individual student level. Mindful of Anna’s training, Frank runs the student numbers through
an algorithm to transform them into different reference numbers. He uses the same algorithm on each
occasion so that he can update each record over time.

One of Anna’s tasks is to complete the record of processing activities, as required by the GDPR. After
receiving her email reminder, as required by the GDPR. After receiving her email reminder, Frank informs
Anna about his performance database.

Ann explains to Frank that, as well as minimizing personal data, the University has to check that this new
use of existing data is permissible. She also suspects that, under the GDPR, a risk analysis may have to

be carried out before the data processing can take place. Anna arranges to discuss this further with Frank
after she has done some additional research.

Frank wants to be able to work on his analysis in his spare time, so he transfers it to his home laptop
(which is not encrypted). Unfortunately, when Frank takes the laptop into the University he loses it on the
train. Frank has to see Anna that day to discuss compatible processing. He knows that he needs to report
security incidents, so he decides to tell Anna about his lost laptop at the same time.

Before Anna determines whether Frank’s performance database is permissible, what additional
information does she need?`,options:[`A. More information about Frank’s data protection training.`,`B. More information about the extent of the information loss.`,`C. More information about the algorithm Frank used to mask student numbers.`,`D. More information about what students have been told and how the research will be used.`],correctAnswer:`D`,explanation:`正确答案 D。根据 GDPR 第 5(1)(b)条“目的限制原则”及第 6(4)条的兼容性测试，判断新用途是否与原始
收集目的相兼容，需要了解数据主体当初被告知的收集目的，以及新研究将如何使用这些数据，才能进
行兼容性评估。A（培训情况）、B（丢失范围）、C（算法技术细节）均与“该新处理是否被允许”这一
合法性判断无直接关系。知识点：目的限制原则与兼容性处理测试（compatible use test）。`,topic:`GDPR`,verified:`accurate`},{id:8,question:`SCENARIO

Please use the following to answer the next question:

Anna and Frank both work at Granchester University. Anna is a lawyer responsible for data protection,
while Frank is a lecturer in the engineering department. The University maintains a number of types of
records:
 Student records, including names, student numbers, home addresses, pre-university information,
 university attendance and performance records, details of special educational needs and financial
 information.
 Staff records, including autobiographical materials (such as curricula, professional contact files, student
 evaluations and other relevant teaching files).
 Alumni records, including birthplaces, years of birth, dates of matriculation and conferrals of degrees.
 These records are available to former students after registering through Granchester’s Alumni portal.
 Department for Education records, showing how certain demographic groups (such as first-generation
 students) could be expected, on average, to progress. These records do not contain names or

identification numbers.

Under their security policy, the University encrypts all of its personal data records in transit and at rest.

In order to improve his teaching, Frank wants to investigate how his engineering students perform in

relational to Department for Education expectations. He has attended one of Anna’s data protection

training courses and knows that he should use no more personal data than necessary to accomplish his
goal. He creates a program that will only export some student data: previous schools attended, grades

originally obtained, grades currently obtained and first time university attended. He wants to keep the
records at the individual student level. Mindful of Anna’s training, Frank runs the student numbers through
an algorithm to transform them into different reference numbers. He uses the same algorithm on each
occasion so that he can update each record over time.

One of Anna’s tasks is to complete the record of processing activities, as required by the GDPR. After
receiving her email reminder, as required by the GDPR. After receiving her email reminder, Frank informs
Anna about his performance database.

Ann explains to Frank that, as well as minimizing personal data, the University has to check that this new
use of existing data is permissible. She also suspects that, under the GDPR, a risk analysis may have to
be carried out before the data processing can take place. Anna arranges to discuss this further with Frank
after she has done some additional research.

Frank wants to be able to work on his analysis in his spare time, so he transfers it to his home laptop
(which is not encrypted). Unfortunately, when Frank takes the laptop into the University he loses it on the
train. Frank has to see Anna that day to discuss compatible processing. He knows that he needs to report
security incidents, so he decides to tell Anna about his lost laptop at the same time.

Anna will find that a risk analysis is NOT necessary in this situation as long as?`,options:[`A. The data subjects are no longer current students of Frank’s`,`B. The processing will not negatively affect the rights of the data subjects`,`C. The algorithms that Frank uses for the processing are technologically sound`,`D. The data subjects gave their unambiguous consent for the original processing`],correctAnswer:`B`,explanation:`答案 B 为最佳选项，但更准确的法定门槛是“处理是否很可能造成高风险”，而不是笼统地看是否会产生任何不利影
响。低风险或一般风险不触发 DPIA；高风险判断应结合第 35 条及监管机构清单。`,topic:`GDPR`,verified:`qualified`},{id:9,question:`Which institution has the power to adopt findings that confirm the adequacy of the data protection level in a
non-EU country?`,options:[`A. The European Parliament`,`B. The European Commission`,`C. The Article 29 Working Party`,`D. The European Council`],correctAnswer:`B`,explanation:`正确答案 B。根据 GDPR 第 45 条，认定第三国数据保护水平是否“充分”（adequacy decision）的权限属于
欧盟委员会（在征询 EDPB 意见并经审查程序后作出）。欧洲议会、原第 29 条工作组（现为 EDPB，仅
提供意见）及欧洲理事会均无权直接作出充分性认定。知识点：充分性认定机制（Adequacy Decision，第
45 条）。`,topic:`监管机构`,verified:`accurate`},{id:10,question:`What is true of both the General Data Protection Regulation (GDPR) and the Council of Europe
Convention 108?`,options:[`A. Both govern international transfers of personal data`,`B. Both govern the manual processing of personal data`,`C. Both only apply to European Union countries`,`D. Both require notification of processing activities to a supervisory authority`],correctAnswer:`A`,explanation:`正确答案 A。GDPR（第五章跨境数据传输规则）与 108 号公约（尤其经现代化后的 108+号公约）都建立
了关于个人数据跨境传输的规则框架。B 错——108 号公约最初仅适用于自动化处理，而 GDPR 同时涵盖
自动化处理和构成档案系统的人工处理，二者范围并不完全一致；C 错——108 号公约向非欧盟国家开放
签署，并不限于欧盟国家；D 错——两者均未一律要求处理活动须向监管机构“通知”（GDPR 已取消一般
性通知义务，改为处理活动记录制度）。知识点：GDPR 与 108 号公约的适用范围比较。`,topic:`Convention 108/108+`,verified:`accurate`},{id:11,question:`Which aspect of the GDPR will likely have the most impact on the consistent implementation of data
protection laws throughout the European Union?`,options:[`A. That it essentially functions as a one-stop shop mechanism`,`B. That it takes the form of a Regulation as opposed to a Directive`,`C. That it makes notification of large-scale data breaches mandatory`,`D. That it makes appointment of a data protection officer mandatory`],correctAnswer:`B`,explanation:`正确答案 B。GDPR 采取“条例”（Regulation）而非“指令”（Directive）的形式，原则上无需成员国转化即可直接适
用，最直接地减少了原 95/46/EC 指令在各国转化时产生的文本与实施差异。A 所述一站式机制主要改善跨境案件的
监管协作与执法一致性，也很重要，但题目问的是数据保护法律在全欧盟的一致实施，B 更切题。`,topic:`历史沿革/95-46-EC`,verified:`corrected`},{id:12,question:`How is the retention of communications traffic data for law enforcement purposes addressed by European
data protection law?`,options:[`A. The ePrivacy Directive allows individual EU member states to engage in such data retention.`,`B. The ePrivacy Directive harmonizes EU member states’ rules concerning such data retention.`,`C. The Data Retention Directive’s annulment makes such data retention now permissible.`,`D. The GDPR allows the retention of such data for the prevention, investigation, detection or prosecution of criminal offences only.`],correctAnswer:`A`,explanation:`正确答案 A。ePrivacy Directive 2002/58/EC 第 15(1) 条允许成员国为国家安全、预防和侦查犯罪等目的，在必要、适
当且成比例的范围内立法限制通信保密和删除义务，包括在有限期间留存流量或位置数据。该条提供的是成员国采
取留存措施的授权及边界，并未建立统一的数据留存制度；CJEU 还对一般、无差别留存施加了严格限制。B、C、D
均不准确。`,topic:`ePrivacy指令`,verified:`corrected`},{id:13,question:`What type of data lies beyond the scope of the General Data Protection Regulation?`,options:[`A. Pseudonymized`,`B. Anonymized`,`C. Encrypted`,`D. Masked`],correctAnswer:`B`,explanation:`正确答案 B。只有真正的匿名化数据——即不能通过任何合理可能的方式重新识别到特定个人——才不
属于 GDPR 调整范围（详见前言第 26 条）。假名化、加密和掩码处理的数据由于理论上可借助密钥或额
外信息重新识别，仍被视为“个人数据”，继续受 GDPR 约束。知识点：匿名化 vs 假名化/加密/掩码处
理，及前言第 26 条关于个人数据可识别性判断标准。`,topic:`GDPR`,verified:`accurate`},{id:14,question:`Under what circumstances would the GDPR apply to personal data that exists in physical form, such as
information contained in notebooks or hard copy files?`,options:[`A. Only where the personal data is produced as a physical output of specific automated processing activities, such as printing, labelling, or stamping.`,`B. Only where the personal data is to be subjected to specific computerized processing, such as image scanning or optical character recognition.`,`C. Only where the personal data is treated by automated means in some way, such as computerized distribution or filing.`,`D. Only where the personal data is handled in a sufficiently structured manner so as to form part of a filing system.`],correctAnswer:`D`,explanation:`正确答案 D。依据 GDPR 第 2(1)条及第 4(6)条“档案系统”（filing system）定义，纸质等非自动化处理的
个人数据只有在按照特定标准结构化组织、构成或拟构成档案系统的一部分时，才落入 GDPR 的适用范
围；单纯以自动化设备产出物理输出（A）、拟进行计算机化处理（B）或曾经过自动化处理（C）均不
是判断标准。知识点：GDPR 对非自动化处理（人工档案）适用范围的界定。`,topic:`GDPR`,verified:`accurate`},{id:15,question:`SCENARIO

Please use the following to answer the next question:

You have just been hired by a toy manufacturer based in Hong Kong. The company sells a broad range of
dolls, action figures and plush toys that can be found internationally in a wide variety of retail stores.
Although the manufacturer has no offices outside Hong Kong and in fact does not employ any staff outside
Hong Kong, it has entered into a number of local distribution contracts. The toys produced by the company
can be found in all popular toy stores throughout Europe, the United States and Asia. A large portion of the
company’s revenue is due to international sales.

The company now wishes to launch a new range of connected toys, ones that can talk and interact with
children. The CEO of the company is touting these toys as the next big thing, due to the increased
possibilities offered: The figures can answer children’s questions on various subjects, such as
mathematical calculations or the weather. Each figure is equipped with a microphone and speaker and can
connect to any smartphone or tablet via Bluetooth. Any mobile device within a 10-meter radius can
connect to the toys via Bluetooth as well. The figures can also be associated with other figures (from the
same manufacturer) and interact with each other for an enhanced play experience.

When a child asks the toy a question, the request is sent to the cloud for analysis, and the answer is
generated on cloud servers and sent back to the figure. The answer is given through the figure’s integrated
speakers, making it appear as though that the toy is actually responding to the child’s question. The
packaging of the toy does not provide technical details on how this works, nor does it mention that this
feature requires an internet connection. The necessary data processing for this has been outsourced to a
data center located in South Africa. However, your company has not yet revised its consumer-facing
privacy policy to indicate this.

In parallel, the company is planning to introduce a new range of game systems through which consumers
can play the characters they acquire in the course of playing the game. The system will come bundled with
a portal that includes a Near-Field Communications (NFC) reader. This device will read an RFID tag in the
action figure, making the figure come to life onscreen. Each character has its own stock features and
abilities, but it is also possible to earn additional ones by accomplishing game goals. The only information
stored in the tag relates to the figures’ abilities. It is easy to switch characters during the game, and it is
possible to bring the figure to locations outside of the home and have the character’s abilities remain
intact.

Why is this company obligated to comply with the GDPR?`,options:[`A. The company has offices in the EU.`,`B. The company employs staff in the EU.`,`C. The company’s data center is located in a country outside the EU.`,`D. The company’s products are marketed directly to EU customers.`],correctAnswer:`D`,explanation:`正确答案 D。根据 GDPR 第 3(2)(a)条域外适用规则，即便控制者/处理者未在欧盟设立机构，只要其向欧
盟数据主体提供商品或服务（包括通过分销渠道将产品营销至欧盟市场），即需遵守 GDPR。该玩具公
司在香港，无欧盟机构、员工（排除 A、B），数据中心在南非本身也不是触发 GDPR 的理由（排除 C，
位置只涉及跨境传输问题），而其产品直接面向欧盟市场销售才是触发域外效力的关键。知识点：第 3
条域外适用性——设立地标准 vs 目标指向标准（targeting criterion）。`,topic:`GDPR`,verified:`accurate`},{id:16,question:`SCENARIO

Please use the following to answer the next question:

You have just been hired by a toy manufacturer based in Hong Kong. The company sells a broad range of
dolls, action figures and plush toys that can be found internationally in a wide variety of retail stores.
Although the manufacturer has no offices outside Hong Kong and in fact does not employ any staff outside
Hong Kong, it has entered into a number of local distribution contracts. The toys produced by the company
can be found in all popular toy stores throughout Europe, the United States and Asia. A large portion of the
company’s revenue is due to international sales.

The company now wishes to launch a new range of connected toys, ones that can talk and interact with
children. The CEO of the company is touting these toys as the next big thing, due to the increased
possibilities offered: The figures can answer children’s questions on various subjects, such as
mathematical calculations or the weather. Each figure is equipped with a microphone and speaker and can
connect to any smartphone or tablet via Bluetooth. Any mobile device within a 10-meter radius can
connect to the toys via Bluetooth as well. The figures can also be associated with other figures (from the
same manufacturer) and interact with each other for an enhanced play experience.

When a child asks the toy a question, the request is sent to the cloud for analysis, and the answer is
generated on cloud servers and sent back to the figure. The answer is given through the figure’s integrated
speakers, making it appear as though that the toy is actually responding to the child’s question. The
packaging of the toy does not provide technical details on how this works, nor does it mention that this
feature requires an internet connection. The necessary data processing for this has been outsourced to a
data center located in South Africa. However, your company has not yet revised its consumer-facing
privacy policy to indicate this.

In parallel, the company is planning to introduce a new range of game systems through which consumers
can play the characters they acquire in the course of playing the game. The system will come bundled with
a portal that includes a Near-Field Communications (NFC) reader. This device will read an RFID tag in the
action figure, making the figure come to life onscreen. Each character has its own stock features and

abilities, but it is also possible to earn additional ones by accomplishing game goals. The only information
stored in the tag relates to the figures’ abilities. It is easy to switch characters during the game, and it is
possible to bring the figure to locations outside of the home and have the character’s abilities remain
intact.

What presents the BIGGEST potential privacy issue with the company’s practices?`,options:[`A. The NFC portal can read any data stored in the action figures`,`B. The information about the data processing involved has not been specified`,`C. The cloud service provider is in a country that has not been deemed adequate`,`D. The RFID tag in the action figures has the potential for misuse because of the toy’s evolving capabilities`],correctAnswer:`B`,explanation:`正确答案 B。该联网玩具将儿童问题上传云端处理、依赖境外数据中心，但产品包装及隐私政策均未说
明这些处理细节及依赖网络连接的事实，违反第 13/14 条透明度原则和以清晰易懂方式告知处理信息的要
求，这是对儿童这类弱势数据主体而言最大的隐私风险点。相比之下，NFC 读取标签内容有限（A）、数
据中心所在国是否获充分性认定（C）、RFID 标签滥用可能性（D）都是相对次要或未被证实的风险。知
识点：透明度原则（第 12-14 条）及对儿童数据的特别关注（前言第 38 条）。`,topic:`GDPR`,verified:`accurate`},{id:17,question:`SCENARIO

Please use the following to answer the next question:

You have just been hired by a toy manufacturer based in Hong Kong. The company sells a broad range of
dolls, action figures and plush toys that can be found internationally in a wide variety of retail stores.
Although the manufacturer has no offices outside Hong Kong and in fact does not employ any staff outside
Hong Kong, it has entered into a number of local distribution contracts. The toys produced by the company

can be found in all popular toy stores throughout Europe, the United States and Asia. A large portion of the

company’s revenue is due to international sales.

The company now wishes to launch a new range of connected toys, ones that can talk and interact with

children. The CEO of the company is touting these toys as the next big thing, due to the increased

possibilities offered: The figures can answer children’s questions on various subjects, such as
mathematical calculations or the weather. Each figure is equipped with a microphone and speaker and can

connect to any smartphone or tablet via Bluetooth. Any mobile device within a 10-meter radius can
connect to the toys via Bluetooth as well. The figures can also be associated with other figures (from the
same manufacturer) and interact with each other for an enhanced play experience.

When a child asks the toy a question, the request is sent to the cloud for analysis, and the answer is
generated on cloud servers and sent back to the figure. The answer is given through the figure’s integrated
speakers, making it appear as though that the toy is actually responding to the child’s question. The
packaging of the toy does not provide technical details on how this works, nor does it mention that this
feature requires an internet connection. The necessary data processing for this has been outsourced to a
data center located in South Africa. However, your company has not yet revised its consumer-facing
privacy policy to indicate this.

In parallel, the company is planning to introduce a new range of game systems through which consumers
can play the characters they acquire in the course of playing the game. The system will come bundled with
a portal that includes a Near-Field Communications (NFC) reader. This device will read an RFID tag in the
action figure, making the figure come to life onscreen. Each character has its own stock features and
abilities, but it is also possible to earn additional ones by accomplishing game goals. The only information
stored in the tag relates to the figures’ abilities. It is easy to switch characters during the game, and it is

possible to bring the figure to locations outside of the home and have the character’s abilities remain
intact.

To ensure GDPR compliance, what should be the company’s position on the issue of consent?`,options:[`A. The child, as the user of the action figure, can provide consent himself, as long as no information is shared for marketing purposes.`,`B. Written authorization attesting to the responsible use of children’s data would need to be obtained from the supervisory authority.`,`C. Consent for data collection is implied through the parent’s purchase of the action figure for the child.`,`D. Parental consent for a child’s use of the action figures would have to be obtained before any data could be collected.`],correctAnswer:`D`,explanation:`答案 D 仅在公司以“同意”作为向儿童直接提供信息社会服务的处理依据、且儿童低于相关成员国数字同意年龄时成
立。GDPR 第 8 条并不意味着所有儿童数据在任何合法依据下都必须先取得家长同意，“before any data could be
collected”的表述过于绝对。`,topic:`GDPR`,verified:`qualified`},{id:18,question:`SCENARIO

Please use the following to answer the next question:

You have just been hired by a toy manufacturer based in Hong Kong. The company sells a broad range of
dolls, action figures and plush toys that can be found internationally in a wide variety of retail stores.
Although the manufacturer has no offices outside Hong Kong and in fact does not employ any staff outside
Hong Kong, it has entered into a number of local distribution contracts. The toys produced by the company
can be found in all popular toy stores throughout Europe, the United States and Asia. A large portion of the
company’s revenue is due to international sales.

The company now wishes to launch a new range of connected toys, ones that can talk and interact with
children. The CEO of the company is touting these toys as the next big thing, due to the increased
possibilities offered: The figures can answer children’s questions on various subjects, such as
mathematical calculations or the weather. Each figure is equipped with a microphone and speaker and can
connect to any smartphone or tablet via Bluetooth. Any mobile device within a 10-meter radius can
connect to the toys via Bluetooth as well. The figures can also be associated with other figures (from the

same manufacturer) and interact with each other for an enhanced play experience.

When a child asks the toy a question, the request is sent to the cloud for analysis, and the answer is

generated on cloud servers and sent back to the figure. The answer is given through the figure’s integrated
speakers, making it appear as though that the toy is actually responding to the child’s question. The

packaging of the toy does not provide technical details on how this works, nor does it mention that this

feature requires an internet connection. The necessary data processing for this has been outsourced to a
data center located in South Africa. However, your company has not yet revised its consumer-facing
privacy policy to indicate this.

In parallel, the company is planning to introduce a new range of game systems through which consumers
can play the characters they acquire in the course of playing the game. The system will come bundled with
a portal that includes a Near-Field Communications (NFC) reader. This device will read an RFID tag in the
action figure, making the figure come to life onscreen. Each character has its own stock features and
abilities, but it is also possible to earn additional ones by accomplishing game goals. The only information
stored in the tag relates to the figures’ abilities. It is easy to switch characters during the game, and it is
possible to bring the figure to locations outside of the home and have the character’s abilities remain
intact.

In light of the requirements of Article 32 of the GDPR (related to the Security of Processing), which practice
should the company institute?`,options:[`A. Encrypt the data in transit over the wireless Bluetooth connection.`,`B. Include dual-factor authentication before each use by a child in order to ensure a minimum amount of security.`,`C. Include three-factor authentication before each use by a child in order to ensure the best level of security possible.`,`D. Insert contractual clauses into the contract between the toy manufacturer and the cloud service provider, since South Africa is outside the European Union.`],correctAnswer:`A`,explanation:`正确答案 A。第 32 条安全处理要求中明确将加密列为适当技术措施的示例（第 32(1)(a)条）。鉴于玩具
通过蓝牙与移动设备通信，且任意 10 米内设备均可连接，存在被截获的风险，对传输中的数据加密是最
直接对应的安全措施。双因素/三因素认证（B、C）对儿童玩具场景并不现实也非第 32 条例举措施，标
准合同条款（D）解决的是第五章跨境传输合法性问题，与第 32 条安全要求无关。知识点：第 32 条处理
安全的技术与组织措施示例。`,topic:`GDPR`,verified:`accurate`},{id:19,question:`Which of the following would most likely NOT be covered by the definition of “personal data” under the
GDPR?`,options:[`A. The payment card number of a Dutch citizen`,`B. The U.S. social security number of an American citizen living in France`,`C. The unlinked aggregated data used for statistical purposes by an Italian company`,`D. The identification number of a German candidate for a professional examination in Germany`],correctAnswer:`C`,explanation:`正确答案 C。经过匿名化处理、用于统计目的且无法关联回具体个人的“非关联聚合数据”不构成 GDPR
项下的个人数据（参见前言第 26 条判断标准）。A、B、D 虽然分别涉及非欧盟公民或专业考试编号，但
只要能够识别或关联到特定自然人，无论国籍或数据主体地理位置如何，都属于个人数据——GDPR 对
“个人数据”的定义并不以数据主体的国籍为前提条件。知识点：个人数据定义的属地/属人范围与匿名化
数据的排除。`,topic:`GDPR`,verified:`accurate`},{id:20,question:`Which of the following would MOST likely trigger the extraterritorial effect of the GDPR, as specified by
Article 3?`,options:[`A. The behavior of suspected terrorists being monitored by EU law enforcement bodies.`,`B. Personal data of EU citizens being processed by a controller or processor based outside the EU.`,`C. The behavior of EU citizens outside the EU being monitored by non-EU law enforcement bodies.`,`D. Personal data of EU residents being processed by a non-EU business that targets EU customers.`],correctAnswer:`D`,explanation:`正确答案 D。第 3(2)条域外效力包含两类触发情形：(a)向欧盟数据主体提供商品或服务，(b)监测欧盟境
内数据主体的行为。非欧盟企业主动以营销等方式定向欧盟客户即落入(a)项。B 表述过于宽泛——单纯
“数据在欧盟境外被处理”并不必然触发第 3(2)条，还需存在“指向欧盟”的定向行为；A、C 涉及执法机构
的监控活动，通常由《执法指令》（Law Enforcement Directive）而非 GDPR 调整。知识点：第 3 条域外
适用性的两种触发路径（目标指向标准与行为监测标准）。`,topic:`LED执法指令`,verified:`accurate`},{id:21,question:`How does the GDPR now define “processing”?`,options:[`A. Any act involving the collecting and recording of personal data.`,`B. Any operation or set of operations performed on personal data or on sets of personal data.`,`C. Any use or disclosure of personal data compatible with the purpose for which the data was collected.`,`D. Any operation or set of operations performed by automated means on personal data or on sets of personal data.`],correctAnswer:`B`,explanation:`正确答案 B。GDPR 第 4(2)条将“处理”定义为对个人数据或个人数据集所进行的任何操作或一系列操作
（无论是否自动化），涵盖收集、记录、组织、存储、使用、披露、删除等各环节。A（仅收集记录）范
围过窄；C 混淆了“兼容处理”概念；D 遗漏了对“非自动化但构成档案系统”处理方式的涵盖（旧指令
95/46/EC 才强调自动化处理，GDPR 的定义更广）。知识点：第 4(2)条“处理”的定义。`,topic:`历史沿革/95-46-EC`,verified:`accurate`},{id:22,question:`What is the consequence if a processor makes an independent decision regarding the purposes and
means of processing it carries out on behalf of a controller?`,options:[`A. The controller will be liable to pay an administrative fine`,`B. The processor will be liable to pay compensation to affected data subjects`,`C. The processor will be considered to be a controller in respect of the processing concerned`,`D. The controller will be required to demonstrate that the unauthorized processing negatively affected one or more of the parties involved`],correctAnswer:`C`,explanation:`正确答案 C。根据第 28 条及问责制原则，处理者一旦超出控制者指示、自行决定处理的目的和方式，就
在该部分处理活动中被视为（事实上的）控制者，须独立承担控制者的合规义务和责任。A、B、D 均描
述 了 可 能 的 后 果 ， 但 并 非 GDPR 明 确 规 定 的 直 接 法 律 定 性 结 果 。 知 识 点 ： 处 理 者 转 变 为 控 制 者
（“controller in disguise”）的认定标准，第 28 条委托处理协议。`,topic:`GDPR`,verified:`accurate`},{id:23,question:`According to the GDPR, how is pseudonymous personal data defined?`,options:[`A. Data that can no longer be attributed to a specific data subject without the use of additional information kept separately.`,`B. Data that can no longer be attributed to a specific data subject, with no possibility of re-identifying the data.`,`C. Data that has been rendered anonymous in such a manner that the data subject is no longer identifiable.`,`D. Data that has been encrypted or is subject to other technical safeguards.`],correctAnswer:`A`,explanation:`正确答案 A。第 4(5)条对“假名化”的定义是：个人数据在不借助另外保存的补充信息的情况下，不能再归
属于特定数据主体，且该补充信息须单独保存并采取技术组织措施确保不能被重新关联。B、C 描述的其
实是“匿名化”（不可再识别、无法复原），D 仅是加密等技术保护措施的泛泛描述，并非假名化的法定定
义。知识点：假名化与匿名化的法律定义区别（第 4(5)条、前言第 26、29 条）。`,topic:`GDPR`,verified:`accurate`},{id:24,question:`Under which of the following conditions does the General Data Protection Regulation NOT apply to the
processing of personal data?`,options:[`A. When the personal data is processed only in non-electronic form`,`B. When the personal data is collected and then pseudonymised by the controller`,`C. When the personal data is held by the controller but not processed for further purposes`,`D. When the personal data is processed by an individual only for their household activities`],correctAnswer:`D`,explanation:`正确答案 D。第 2(2)(c)条明确将“自然人纯粹为个人或家庭事务从事的处理活动”排除在 GDPR 适用范围
之外（家庭例外，household exemption）。A（非电子形式处理）只要构成档案系统仍受 GDPR 约束；B
（假名化后的数据）依然是个人数据；C（收集后未进一步处理）本身也已构成“处理”的一环（收集本身
即为处理行为），并不能因此豁免。知识点：第 2 条 GDPR 适用范围的例外情形——家庭活动豁免。`,topic:`GDPR`,verified:`accurate`},{id:25,question:`According to the E-Commerce Directive 2000/31/EC, where is the place of “establishment” for a company
providing services via an Internet website confirmed by the GDPR?`,options:[`A. Where the technology supporting the website is located`,`B. Where the website is accessed`,`C. Where the decisions about processing are made`,`D. Where the customer’s Internet service provider is located`],correctAnswer:`C`,explanation:`答案 C 是四项中最接近的选项，但“设立地”取决于通过稳定安排开展真实、有效活动的地点，不能机械地等同于某
一次数据处理决策的作出地。服务器位置、网站访问地或客户 ISP 所在地通常都不是决定性因素。`,topic:`GDPR`,verified:`qualified`},{id:26,question:`SCENARIO

Please use the following to answer the next question:

Louis, a long-time customer of Bedrock Insurance, was involved in a minor car accident a few months ago.
Although no one was hurt, Louis has been plagued by texts and calls from a company called Accidentable
offering to help him recover compensation for personal injury. Louis has heard about insurance companies
selling customers’ data to third parties, and he’s convinced that Accidentable must have gotten his

information from Bedrock Insurance.

Louis has also been receiving an increased amount of marketing information from Bedrock, trying to sell
him their full range of their insurance policies.

Perturbed by this, Louis has started looking at price comparison sites on the internet and has been
shocked to find that other insurers offer much cheaper rates than Bedrock, even though he has been a
loyal customer for many years. When his Bedrock policy comes up for renewal, he decides to switch to
Zantrum Insurance.

In order to activate his new insurance policy, Louis needs to supply Zantrum with information about his No
Claims bonus, his vehicle and his driving history. After researching his rights under the GDPR, he writes to
ask Bedrock to transfer his information directly to Zantrum. He also takes this opportunity to ask Bedrock
to stop using his personal data for marketing purposes.

Bedrock supplies Louis with a PDF and XML (Extensible Markup Language) versions of his No Claims
Certificate, but tells Louis it cannot transfer his data directly to Zantrum as this is not technically feasible.
Bedrock also explains that Louis’s contract included a provision whereby Louis agreed that his data could
be used for marketing purposes; according to Bedrock, it is too late for Louis to change his mind about
this. It angers Louis when he recalls the wording of the contract, which was filled with legal jargon and very
confusing.

In the meantime, Louis is still receiving unwanted calls from Accidentable Insurance. He writes to
Accidentable to ask for the name of the organization that supplied his details to them. He warns
Accidentable that he plans to complain to the data protection authority, because he thinks their company
has been using his data unlawfully. His letter states that he does not want his data being used by them in
any way.

Accidentable’s response letter confirms Louis’s suspicions. Accidentable is Bedrock Insurance’s wholly

owned subsidiary, and they received information about Louis’s accident from Bedrock shortly after Louis

submitted his accident claim. Accidentable assures Louis that there has been no breach of the GDPR, as
Louis’s contract included, a provision in which he agreed to share his information with Bedrock’s affiliates

for business purposes.

Louis is disgusted by the way in which he has been treated by Bedrock, and writes to them insisting that all

his information be erased from their computer system. 6
Which statement accurately summarizes Bedrock’s obligation in regard to Louis’s data portability request?`,options:[`A. Bedrock does not have a duty to transfer Louis’s data to Zantrum if doing so is legitimately not technically feasible.`,`B. Bedrock does not have to transfer Louis’s data to Zantrum because the right to data portability does not apply where personal data are processed in order to carry out tasks in the public interest.`,`C. Bedrock has failed to comply with the duty to transfer Louis’s data to Zantrum because the duty applies wherever personal data are processed by automated means and necessary for the performance of a contract with the customer.`,`D. Bedrock has failed to comply with the duty to transfer Louis’s data to Zantrum because it has an obligation to develop commonly used, machine-readable and interoperable formats so that all customer data can be ported to other insurers on request.`],correctAnswer:`A`,explanation:`正确答案 A。数据可携权（第 20 条）仅要求控制者以结构化、常用、机器可读格式提供数据，并在“技术
上可行”的情况下实现控制者之间的直接传输；若直接传输在技术上确实不可行，Bedrock 没有强制实现
直接传输的义务（已提供 PDF/XML 格式部分履行了可携权）。B 错——可携权的例外是处理基于公共利
益任务或官方权力，而非本案的合同/同意基础；C 表述过于绝对，混淆了“提供数据”与“直接传输给另一
控制者”两个层次的义务；D 并无要求控制者须为全行业开发统一互操作格式的强制性法律义务。知识
点：第 20 条数据可携权的范围及“技术可行性”限制。`,topic:`GDPR`,verified:`accurate`},{id:27,question:`SCENARIO

Please use the following to answer the next question:

Louis, a long-time customer of Bedrock Insurance, was involved in a minor car accident a few months ago.
Although no one was hurt, Louis has been plagued by texts and calls from a company called Accidentable

offering to help him recover compensation for personal injury. Louis has heard about insurance companies
selling customers’ data to third parties, and he’s convinced that Accidentable must have gotten his
information from Bedrock Insurance.

Louis has also been receiving an increased amount of marketing information from Bedrock, trying to sell
him their full range of their insurance policies.

Perturbed by this, Louis has started looking at price comparison sites on the internet and has been

shocked to find that other insurers offer much cheaper rates than Bedrock, even though he has been a
loyal customer for many years. When his Bedrock policy comes up for renewal, he decides to switch to
Zantrum Insurance.

In order to activate his new insurance policy, Louis needs to supply Zantrum with information about his No
Claims bonus, his vehicle and his driving history. After researching his rights under the GDPR, he writes to
ask Bedrock to transfer his information directly to Zantrum. He also takes this opportunity to ask Bedrock
to stop using his personal data for marketing purposes.

Bedrock supplies Louis with a PDF and XML (Extensible Markup Language) versions of his No Claims
Certificate, but tells Louis it cannot transfer his data directly to Zantrum as this is not technically feasible.
Bedrock also explains that Louis’s contract included a provision whereby Louis agreed that his data could
be used for marketing purposes; according to Bedrock, it is too late for Louis to change his mind about
this. It angers Louis when he recalls the wording of the contract, which was filled with legal jargon and very
confusing.

In the meantime, Louis is still receiving unwanted calls from Accidentable Insurance. He writes to
Accidentable to ask for the name of the organization that supplied his details to them. He warns
Accidentable that he plans to complain to the data protection authority, because he thinks their company
has been using his data unlawfully. His letter states that he does not want his data being used by them in
any way.

Accidentable’s response letter confirms Louis’s suspicions. Accidentable is Bedrock Insurance’s wholly
owned subsidiary, and they received information about Louis’s accident from Bedrock shortly after Louis

submitted his accident claim. Accidentable assures Louis that there has been no breach of the GDPR, as
Louis’s contract included, a provision in which he agreed to share his information with Bedrock’s affiliates
for business purposes.

Louis is disgusted by the way in which he has been treated by Bedrock, and writes to them insisting that all
his information be erased from their computer system.

After Louis has exercised his right to restrict the use of his data, under what conditions would Accidentable
have grounds for refusing to comply?`,options:[`A. If Accidentable is entitled to use of the data as an affiliate of Bedrock.`,`B. If Accidentable also uses the data to conduct public health research.`,`C. If the data becomes necessary to defend Accidentable’s legal rights.`,`D. If the accuracy of the data is not an aspect that Louis is disputing.`],correctAnswer:`C`,explanation:`正确答案 C。第 18 条限制处理权及第 17 条被遗忘权的例外情形之一是：处理是为了行使或抗辩法律权利
主张（establishment, exercise or defence of legal claims）所必需。因此若数据对 Accidentable 抗辩自身法律
权利属必要，可以拒绝停止使用该数据。A（关联公司身份）本身不构成拒绝理由，作为 Bedrock 子公司
仍须独立遵守 GDPR；B（公共卫生研究）与本案无关；D 与限制处理权的触发条件（数据准确性存疑）
是另一独立情形，与“能否拒绝”无关。知识点：第 17-18 条被遗忘权/限制处理权的法定例外——法律主
张的确立、行使或抗辩。`,topic:`GDPR`,verified:`accurate`},{id:28,question:`Under the GDPR, who would be LEAST likely to be allowed to engage in the collection, use, and
disclosure of a data subject’s sensitive medical information without the data subject’s knowledge or
consent?`,options:[`A. A member of the judiciary involved in adjudicating a legal dispute involving the data subject and concerning the health of the data subject.`,`B. A public authority responsible for public health, where the sharing of such information is considered necessary for the protection of the general populace.`,`C. A health professional involved in the medical care for the data subject, where the data subject’s life hinges on the timely dissemination of such information.`,`D. A journalist writing an article relating to the medical condition in question, who believes that the publication of such information is in the public interest.`],correctAnswer:`D`,explanation:`正确答案 D。第 9(2)条列举了处理特殊类别数据（如健康数据）无需同意即可处理的法定情形：司法程序
中确立、行使或抗辩法律权利（A）、公共卫生领域重大公共利益（B）、维护数据主体或他人生命攸关
利益的医疗紧急情况（C）等均在列。而记者基于“公共利益”自行发表他人医疗状况报道，须依赖单独的
新闻自由/表达自由例外条款（第 85 条，由各成员国国内法具体落实且通常仍须满足严格比例原则），并
非当然可未经同意披露，因此 D 是最不可能被允许、限制最严的情形。知识点：第 9 条特殊类别数据处
理的法定例外情形，第 85 条新闻自由与数据保护的平衡。`,topic:`GDPR`,verified:`accurate`},{id:29,question:`With the issue of consent, the GDPR allows member states some choice regarding what?`,options:[`A. The mechanisms through which consent may be communicated`,`B. The circumstances in which silence or inactivity may constitute consent`,`C. The age at which children must be required to obtain parental consent`,`D. The timeframe in which data subjects are allowed to withdraw their consent`],correctAnswer:`C`,explanation:`正确答案 C。GDPR 在多处保留“开放条款”（opening clause）允许成员国自行立法补充，其中关于儿童同
意年龄（第 8 条，13-16 岁区间由各成员国自行确定）是典型例子。同意的沟通方式、默示同意的可能性
（GDPR 明确排除沉默/不作为构成同意）以及撤回同意的时限，均由 GDPR 统一规定，不留给成员国自
由裁量空间。知识点：GDPR 中的成员国“开放条款”（Opening Clauses），儿童同意年龄的弹性规定（第
8 条）。`,topic:`GDPR`,verified:`accurate`},{id:30,question:`Which sentence BEST summarizes the concepts of “fairness,” “lawfulness” and “transparency”, as

expressly required by Article 5 of the GDPR?`,options:[`A. Fairness and transparency refer to the communication of key information before collecting data; lawfulness refers to compliance with government regulations.`,`B. Fairness refers to limiting the amount of data collected from individuals; lawfulness refers to the approval of company guidelines by the state; transparency solely relates to communication of key information before collecting data.`,`C. Fairness refers to the security of personal data; lawfulness and transparency refers to the analysis of ordinances to ensure they are uniformly enforced.`,`D. Fairness refers to the collection of data from diverse subjects; lawfulness refers to the need for legal rules to be uniform; transparency refers to giving individuals access to their data.`],correctAnswer:`A`,explanation:`正确答案 A。第 5(1)(a)条“合法、公正、透明”原则中，“公正”和“透明”共同要求控制者在收集数据前以清
晰易懂的方式向数据主体传达关键处理信息（呼应第 12-14 条透明度义务），“合法”则指处理须具备第 6
条规定的合法依据并符合适用法律法规。B、C、D 均对三个概念作出了错误或过窄的解读（如将公正等
同于“限制收集量”，将合法等同于“国家批准公司准则”等）。知识点：第 5(1)(a)条合法、公正、透明原则
的内涵区分。`,topic:`GDPR`,verified:`accurate`},{id:31,question:`Article 5(1)(b) of the GDPR states that personal data must be “collected for specified, explicit and
legitimate purposes and not further processed in a way incompatible with those purposes.” Based on
Article 5(1)(b), what is the impact of a member state’s interpretation of the word “incompatible”?`,options:[`A. It dictates the level of security a processor must follow when using and storing personal data for two different purposes.`,`B. It guides the courts on the severity of the consequences for those who are convicted of the intentional misuse of personal data.`,`C. It sets the standard for the level of detail a controller must record when documenting the purpose for collecting personal data.`,`D. It indicates the degree of flexibility a controller has in using personal data in ways that may vary from its original intended purpose.`],correctAnswer:`D`,explanation:`正确答案 D。“不兼容”（incompatible）的判断标准直接决定了控制者能在多大程度上将已收集数据用于
原始目的之外的用途（即目的限制原则下“兼容处理”的弹性空间），第 6(4)条列出了判断兼容性需考量的
因素（如原始与新目的的关联性、收集情境、数据性质、可能后果、是否有保障措施等）。A、B、C 分
别涉及安全标准、量刑、记录细节要求，均非“不兼容”概念本身所规范的内容。知识点：第 5(1)(b)目的
限制原则与第 6(4)条兼容性处理测试。`,topic:`GDPR`,verified:`accurate`},{id:32,question:`Tanya is the Data Protection Officer for Curtains Inc., a GDPR data controller. She has recommended that
the company encrypt all personal data at rest. Which GDPR principle is she following?`,options:[`A. Accuracy`,`B. Storage Limitation`,`C. Integrity and confidentiality`,`D. Lawfulness, fairness and transparency`],correctAnswer:`C`,explanation:`正确答案 C。对静态存储数据加密属于保护数据机密性和完整性、防止未经授权访问或篡改的技术措
施，直接对应第 5(1)(f)条“完整性与保密性”原则（同时也呼应第 32 条安全处理要求）。准确性原则针对
数据正确与否，存储限制原则针对保留期限，合法公正透明原则针对处理依据与告知义务，均与加密静
态数据的目的不符。知识点：第 5(1)(f)条完整性与保密性原则（安全原则）。`,topic:`GDPR`,verified:`accurate`},{id:33,question:`A well-known video production company, based in Spain but specializing in documentaries filmed
worldwide, has just finished recording several hours of footage featuring senior citizens in the streets of
Madrid. Under what condition would the company NOT be required to obtain the consent of everyone
whose image they use for their documentary?`,options:[`A. If obtaining consent is deemed to involve disproportionate effort.`,`B. If obtaining consent is deemed voluntary by local legislation.`,`C. If the company limits the footage to data subjects solely of legal age.`,`D. If the company’s status as a documentary provider allows it to claim legitimate interest.`],correctAnswer:`D`,explanation:`正确答案 D。在街头拍摄纪录片这类新闻/文艺创作活动中，制作公司可依据第 6(1)(f)条“合法利益”作为
处理依据（尤其结合第 85 条对新闻/艺术/文学表达的特别平衡条款），从而在特定情况下无需逐一取得
路人同意。A（获得同意成本过高）本身不是 GDPR 列明的独立合法依据；B（当地法律认定同意为自
愿）表述含混，不构成豁免理由；C（仅限拍摄成年人）与是否需要同意无直接因果关系。知识点：第
6(1)(f)条合法利益作为处理依据，第 85 条表达自由与数据保护的平衡。`,topic:`GDPR`,verified:`accurate`},{id:34,question:`A Spanish electricity customer calls her local supplier with questions about the company’s upcoming
merger. Specifically, the customer wants to know the recipients to whom her personal data will be
disclosed once the merger is final. According to Article 13 of the GDPR, what must the company do before
providing the customer with the requested information?`,options:[`A. Verify that the request is applicable to the data collected before the GDPR entered into force.`,`B. Verify that the purpose of the request from the customer is in line with the GDPR.`,`C. Verify that the personal data has not already been sent to the customer.`,`D. Verify that the identity of the customer can be proven by other means.`],correctAnswer:`D`,explanation:`答案 D 只能在控制者对请求人身份存在合理怀疑时适用。GDPR 第 12(6) 条允许此时要求额外信息核实身份，但并
不要求控制者在每一次信息请求前都进行额外身份验证。`,topic:`GDPR`,verified:`qualified`},{id:35,question:`Under the GDPR, where personal data is not obtained directly from the data subject, a controller is exempt
from directly providing information about processing to the data subject if?`,options:[`A. The data subject already has information regarding how his data will be used`,`B. The provision of such information to the data subject would be too problematic`,`C. Third-party data would be disclosed by providing such information to the data subject`,`D. The processing of the data subject’s data is protected by appropriate technical measures`],correctAnswer:`A`,explanation:`正确答案 A。第 14(5)(a)条规定，若数据主体已经掌握相关处理信息，控制者无需就非直接从数据主体处
获取的数据重复履行第 14 条告知义务。B（告知过于麻烦）、C（涉及第三方信息）、D（已采取技术保
护措施）均不是第 14(5)条列明的豁免情形（第 14(5)条实际的其他例外包括：告知不可能或需付出不成比
例的努力、法律明确规定获取或披露、数据须保密等，但“麻烦”或“已加密”本身不构成独立豁免理由）。
知识点：第 14(5)条间接获取数据时告知义务的例外情形。`,topic:`GDPR`,verified:`accurate`},{id:36,question:`SCENARIO

Please use the following to answer the next question:

Due to rapidly expanding workforce, Company A has decided to outsource its payroll function to Company
B. Company B is an established payroll service provider with a sizable client base and a solid reputation in
the industry.

Company B’s payroll solution for Company A relies on the collection of time and attendance data obtained
via a biometric entry system installed in each of Company A’s factories. Company B won’t hold any
biometric data itself, but the related data will be uploaded to Company B’s UK servers and used to provide
the payroll service. Company B’s live systems will contain the following information for each of Company
A’s employees:
 Name
 Address
 Date of Birth
 Payroll number

National Insurance number
Sick pay entitlement

Maternity/paternity pay entitlement

Holiday entitlement
Pension and benefits contributions

Trade union contributions

Jenny is the compliance officer at Company A. She first considers whether Company A needs to carry out
a data protection impact assessment in relation to the new time and attendance system, but isn’t sure
whether or not this is required.

Jenny does know, however, that under the GDPR there must be a formal written agreement requiring
Company B to use the time and attendance data only for the purpose of providing the payroll service, and
to apply appropriate technical and organizational security measures for safeguarding the data. Jenny
suggests that Company B obtain advice from its data protection officer. The company doesn’t have a DPO
but agrees, in the interest of finalizing the contract, to sign up for the provisions in full. Company A enters
into the contract.

Weeks later, while still under contract with Company A, Company B embarks upon a separate project
meant to enhance the functionality of its payroll service, and engages Company C to help. Company C
agrees to extract all personal data from Company B’s live systems in order to create a new database for
Company B. This database will be stored in a test environment hosted on Company C’s U.S. server. The
two companies agree not to include any data processing provisions in their services agreement, as data is
only being used for IT testing purposes.

Unfortunately, Company C’s U.S. server is only protected by an outdated IT security system, and suffers a
cyber security incident soon after Company C begins work on the project. As a result, data relating to
Company A’s employees is visible to anyone visiting Company C’s website. Company A is unaware of this
until Jenny receives a letter from the supervisory authority in connection with the investigation that ensues.
As soon as Jenny is made aware of the breach, she notifies all affected employees.

Under the GDPR, which of Company B’s actions would NOT be likely to trigger a potential enforcement
action?`,options:[`A. Their omission of data protection provisions in their contract with Company C.`,`B. Their failure to provide sufficient security safeguards to Company A’s data.`,`C. Their engagement of Company C to improve their payroll service.`,`D. Their decision to operate without a data protection officer.`],correctAnswer:`C`,explanation:`正确答案 C。企业将业务外包给第三方（Company C）以提升服务功能本身是正常商业行为，并不违反
GDPR；真正触发执法风险的是随之而来的合规缺失：未签订数据处理协议（A，违反第 28 条书面协议要
求）、未提供充分安全保障导致数据泄露（B，违反第 28/32 条）、未设立 DPO（D，若符合第 37 条强制
设 DPO 情形则构成违规）。知识点：第 28 条委托处理协议的强制要素，合规行为与违规诱因的区分。`,topic:`GDPR`,verified:`accurate`},{id:37,question:`SCENARIO

Please use the following to answer the next question:

Due to rapidly expanding workforce, Company A has decided to outsource its payroll function to Company
B. Company B is an established payroll service provider with a sizable client base and a solid reputation in
the industry.

Company B’s payroll solution for Company A relies on the collection of time and attendance data obtained
via a biometric entry system installed in each of Company A’s factories. Company B won’t hold any
biometric data itself, but the related data will be uploaded to Company B’s UK servers and used to provide
the payroll service. Company B’s live systems will contain the following information for each of Company
A’s employees:
 Name
 Address
 Date of Birth
 Payroll number

National Insurance number
Sick pay entitlement

Maternity/paternity pay entitlement

Holiday entitlement
Pension and benefits contributions

Trade union contributions

Jenny is the compliance officer at Company A. She first considers whether Company A needs to carry out
a data protection impact assessment in relation to the new time and attendance system, but isn’t sure
whether or not this is required.

Jenny does know, however, that under the GDPR there must be a formal written agreement requiring
Company B to use the time and attendance data only for the purpose of providing the payroll service, and
to apply appropriate technical and organizational security measures for safeguarding the data. Jenny
suggests that Company B obtain advice from its data protection officer. The company doesn’t have a DPO
but agrees, in the interest of finalizing the contract, to sign up for the provisions in full. Company A enters
into the contract.

Weeks later, while still under contract with Company A, Company B embarks upon a separate project
meant to enhance the functionality of its payroll service, and engages Company C to help. Company C
agrees to extract all personal data from Company B’s live systems in order to create a new database for
Company B. This database will be stored in a test environment hosted on Company C’s U.S. server. The
two companies agree not to include any data processing provisions in their services agreement, as data is
only being used for IT testing purposes.

Unfortunately, Company C’s U.S. server is only protected by an outdated IT security system, and suffers a
cyber security incident soon after Company C begins work on the project. As a result, data relating to
Company A’s employees is visible to anyone visiting Company C’s website. Company A is unaware of this
until Jenny receives a letter from the supervisory authority in connection with the investigation that ensues.

As soon as Jenny is made aware of the breach, she notifies all affected employees.

The GDPR requires sufficient guarantees of a company’s ability to implement adequate technical and
organizational measures. What would be the most realistic way that Company B could have fulfilled this
requirement?`,options:[`A. Hiring companies whose measures are consistent with recommendations of accrediting bodies.`,`B. Requesting advice and technical support from Company A’s IT team.`,`C. Avoiding the use of another company’s data to improve their own services.`,`D. Vetting companies’ measures with the appropriate supervisory authority.`],correctAnswer:`A`,explanation:`正确答案 A。为确保次级处理者（Company C）具备充分技术组织措施保障能力，Company B 切实可行的
做法是选用其安全措施符合认证机构/行业公认标准（如 ISO27001 等认可框架）的合作方，这也呼应第
28(1)条要求控制者/处理者只能委托“能够提供充分保证”的处理者。B（向委托方 IT 团队求助）、C（完
全避免使用他人数据改进服务，不现实）、D（要求监管机构逐一审核厂商，监管机构并不提供此类逐案
审查服务）均不现实或不准确。知识点：第 28 条委托处理者选任的尽职调查义务及“充分保证”标准。`,topic:`GDPR`,verified:`accurate`},{id:38,question:`In 2016’s Guidance, the United Kingdom’s Information Commissioner’s Office (ICO) reaffirmed the
importance of using a “layered notice” to provide data subjects with what?`,options:[`A. A privacy notice containing brief information whilst offering access to further detail.`,`B. A privacy notice explaining the consequences for opting out of the use of cookies on a website.`,`C. An explanation of the security measures used when personal data is transferred to a third party.`,`D. An efficient means of providing written consent in member states where they are required to do so.`],correctAnswer:`A`,explanation:`正确答案 A。英国 ICO 在其 2016 年指引中提倡使用“分层告知”（layered notice），即先以简明方式呈现
关键信息，再提供链接/入口供数据主体查阅更详细的隐私政策内容，以平衡透明度与可读性。B、C、D
均是对分层告知目的的错误延伸（分别限定于 cookie 退出说明、第三方传输安全说明、书面同意机
制），并非该指引的核心含义。知识点：透明度原则的实践方法——分层告知（Layered Notice），呼应
第 12 条“简洁、透明、易懂”的告知方式要求。`,topic:`ePrivacy指令`,verified:`accurate`},{id:39,question:`When collecting personal data in a European Union (EU) member state, what must a company do if it
collects personal data from a source other than the data subjects themselves?`,options:[`A. Inform the subjects about the collection`,`B. Provide a public notice regarding the data 6`,`C. Upgrade security to match that of the source`,`D. Update the data within a reasonable timeframe`],correctAnswer:`A`,explanation:`正确答案 A。根据第 14 条，若个人数据并非直接从数据主体处收集（即来自第三方来源），控制者仍须
在合理期限内主动告知数据主体收集事实及相关处理信息，履行透明度义务。B（公开公告）、C（安全
标准比照数据来源）、D（合理期限内更新数据）均非第 14 条规定的核心义务内容。知识点：第 14 条间
接获取个人数据时的告知义务。`,topic:`GDPR`,verified:`accurate`},{id:40,question:`Under the GDPR, which essential pieces of information must be provided to data subjects before collecting
their personal data?`,options:[`A. The authority by which the controller is collecting the data and the third parties to whom the data will be sent.`,`B. The name/s of relevant government agencies involved and the steps needed for revising the data.`,`C. The identity and contact details of the controller and the reasons the data is being collected.`,`D. The contact information of the controller and a description of the retention policy.`],correctAnswer:`C`,explanation:`正确答案 C。第 13 条要求控制者在收集数据前告知的核心信息包括：控制者的身份和联系方式，以及处
理数据的目的和法律依据等。A、B、D 虽包含部分正确元素（如联系方式、留存政策），但均遗漏了“处
理目的”这一第 13 条最核心、必须告知的要素，或加入了法律未要求的内容（如政府机构名称）。知识
点：第 13 条应告知数据主体的必要信息清单。`,topic:`GDPR`,verified:`accurate`},{id:41,question:`Assuming that the “without undue delay” provision is followed, what is the time limit for complying with a
data access request?`,options:[`A. Within 40 days of receipt`,`B. Within 40 days of receipt, which may be extended by up to 40 additional days`,`C. Within one month of receipt, which may be extended by up to an additional month`,`D. Within one month of receipt, which may be extended by an additional two months`],correctAnswer:`D`,explanation:`正确答案 D。第 12(3)条规定，控制者应在收到访问请求后一个月内响应，如请求复杂或数量众多，可再
延长最多两个月，但须在初始一个月内告知数据主体延期原因。A、B（40 天表述）并非法条用语；C 遗
漏了“最多可延长两个月”而非一个月的关键细节。知识点：第 12(3)条响应数据主体请求的期限及延期规
则。`,topic:`GDPR`,verified:`accurate`},{id:42,question:`A U.S.-based online shop uses sophisticated software to track the browsing behavior of its European
customers and predict future purchases. It also shares this information with third parties. Under the GDPR,
what is the online shop’s PRIMARY obligation while engaging in this kind of profiling?`,options:[`A. It must solicit informed consent through a notice on its website`,`B. It must seek authorization from the European supervisory authorities`,`C. It must be able to demonstrate a prior business relationship with the customers`,`D. It must prove that it uses sufficient security safeguards to protect customer data`],correctAnswer:`A`,explanation:`答案 A 为最接近选项，但原解析把“画像必然以同意为合法依据”说得过于绝对。GDPR 下画像可视情形依赖不同合
法依据；不过，使用 cookie 或类似技术访问终端设备通常还受 ePrivacy 规则约束并需要同意。无论依据为何，透明
告知本身都不能替代合法依据。`,topic:`ePrivacy指令`,verified:`qualified`},{id:43,question:`Which of the following would NOT be relevant when determining if a processing activity would be
considered profiling?`,options:[`A. If the processing is to be performed by a third-party vendor`,`B. If the processing involves data that is considered personal data`,`C. If the processing of the data is done through automated means`,`D. If the processing is used to predict the behavior of data subjects`],correctAnswer:`A`,explanation:`正确答案 A。第 4(4)条对“画像”的定义关键要素是：对个人数据的自动化处理，用于评估个人某些特定方
面（如预测行为、偏好等）。处理是否由第三方供应商完成，与该处理活动本身是否构成“画像”无关，只
影响谁是控制者/处理者的问题。B、C、D 均是判断是否构成画像的实质要素。知识点：第 4(4)条“画像”
的构成要件。`,topic:`GDPR`,verified:`accurate`},{id:44,question:`Under Article 21 of the GDPR, a controller must stop profiling when requested by a data subject, unless it
can demonstrate compelling legitimate grounds that override the interests of the individual. In the
Guidelines on Automated individual decision-making and Profiling, the WP 29 says the controller needs to
do all of the following to demonstrate that it has such legitimate grounds EXCEPT?`,options:[`A. Carry out an exercise that weighs the interests of the controller and the basis for the data subject’s objection.`,`B. Consider the impact of the profiling on the data subject’s interest, rights and freedoms.`,`C. Demonstrate that the profiling is for the purposes of direct marketing.`,`D. Consider the importance of the profiling to their particular objective.`],correctAnswer:`C`,explanation:`正确答案 C。WP29《自动化决策与画像指南》中列出控制者须证明存在“令人信服的合法理由”时应考虑
的因素包括：权衡双方利益（A）、评估画像对数据主体权利自由的影响（B）、评估画像对控制者目标
的重要性（D）等，但并未将“证明画像用于直接营销目的”列为证明合法理由的要素——事实上，若画像
用于直接营销，数据主体享有绝对反对权（第 21(2)条），控制者根本无法以“令人信服的理由”对抗，无
需也无法援引该项证明。知识点：第 21 条反对权，画像用于直接营销时的绝对反对权 vs. 一般反对权下
的利益衡量。`,topic:`GDPR`,verified:`accurate`},{id:45,question:`SCENARIO

Please use the following to answer the next question:

TripBliss Inc. is a travel service company which has lost substantial revenue over the last few years. Their
new manager, Oliver, suspects that this is partly due to the company’s outdated website. After doing some
research, he meets with a sales representative from the up-and-coming IT company Techiva, hoping that
they can design a new, cutting-edge website for TripBliss Inc.’s foundering business.

During negotiations, a Techiva representative describes a plan for gathering more customer information
through detailed questionnaires, which could be used to tailor their preferences to specific travel
destinations. TripBliss Inc. can choose any number of data categories – age, income, ethnicity – that
would help them best accomplish their goals. Oliver loves this idea, but would also like to have some way
of gauging how successful this approach is, especially since the questionnaires will require customers to
provide explicit consent to having their data collected. The Techiva representative suggests that they also
run a program to analyze the new website’s traffic, in order to get a better understanding of how customers
are using it. He explains his plan to place a number of cookies on customer devices. The cookies will allow
the company to collect IP addresses and other information, such as the sites from which the customers
came, how much time they spend on the TripBliss Inc. website, and which pages on the site they visit. All
of this information will be compiled in log files, which Techiva will analyze by means of a special program.
TripBliss Inc. would receive aggregate statistics to help them evaluate the website’s effectiveness. Oliver
enthusiastically engages Techiva for these services.

Techiva assigns the analytics portion of the project to longtime account manager Leon Santos. As is

standard practice, Leon is given administrator rights to TripBliss Inc.’s website, and can authorize access
to the log files gathered from it. Unfortunately for TripBliss Inc., however, Leon is taking on this new project

at a time when his dissatisfaction with Techiva is at a high point. In order to take revenge for what he feels

has been unfair treatment at the hands of the company, Leon asks his friend Fred, a hobby hacker, for
help. Together they come up with the following plan: Fred will hack into Techiva’s system and copy their

log files onto a USB stick. Despite his initial intention to send the USB to the press and to the data6
protection authority in order to denounce Techiva, Leon experiences a crisis of conscience and ends up
reconsidering his plan. He decides instead to securely wipe all the data from the USB stick and inform his
manager that the company’s system of access control must be reconsidered.

If TripBliss Inc. decides not to report the incident to the supervisory authority, what would be their BEST
defense?`,options:[`A. The resulting obligation to notify data subjects would involve disproportionate effort.`,`B. The incident resulted from the actions of a third-party that were beyond their control.`,`C. The destruction of the stolen data makes any risk to the affected data subjects unlikely.`,`D. The sensitivity of the categories of data involved in the incident was not substantial enough.`],correctAnswer:`C`,explanation:`答案 C 仅在公司能够可靠证明数据已被安全删除、无其他副本且残余风险低到“不太可能造成风险”时成立。第 33 条
监管机构通知门槛是“可能造成风险”，第 34 条通知个人的门槛则是“可能造成高风险”，二者不可混同。`,topic:`ePrivacy指令`,verified:`qualified`},{id:46,question:`SCENARIO

Please use the following to answer the next question:

TripBliss Inc. is a travel service company which has lost substantial revenue over the last few years. Their
new manager, Oliver, suspects that this is partly due to the company’s outdated website. After doing some
research, he meets with a sales representative from the up-and-coming IT company Techiva, hoping that

they can design a new, cutting-edge website for TripBliss Inc.’s foundering business.

During negotiations, a Techiva representative describes a plan for gathering more customer information
through detailed questionnaires, which could be used to tailor their preferences to specific travel
destinations. TripBliss Inc. can choose any number of data categories – age, income, ethnicity – that
would help them best accomplish their goals. Oliver loves this idea, but would also like to have some way
of gauging how successful this approach is, especially since the questionnaires will require customers to
provide explicit consent to having their data collected. The Techiva representative suggests that they also
run a program to analyze the new website’s traffic, in order to get a better understanding of how customers
are using it. He explains his plan to place a number of cookies on customer devices. The cookies will allow
the company to collect IP addresses and other information, such as the sites from which the customers
came, how much time they spend on the TripBliss Inc. website, and which pages on the site they visit. All
of this information will be compiled in log files, which Techiva will analyze by means of a special program.
TripBliss Inc. would receive aggregate statistics to help them evaluate the website’s effectiveness. Oliver
enthusiastically engages Techiva for these services.

Techiva assigns the analytics portion of the project to longtime account manager Leon Santos. As is
standard practice, Leon is given administrator rights to TripBliss Inc.’s website, and can authorize access
to the log files gathered from it. Unfortunately for TripBliss Inc., however, Leon is taking on this new project
at a time when his dissatisfaction with Techiva is at a high point. In order to take revenge for what he feels
has been unfair treatment at the hands of the company, Leon asks his friend Fred, a hobby hacker, for
help. Together they come up with the following plan: Fred will hack into Techiva’s system and copy their
log files onto a USB stick. Despite his initial intention to send the USB to the press and to the data
protection authority in order to denounce Techiva, Leon experiences a crisis of conscience and ends up
reconsidering his plan. He decides instead to securely wipe all the data from the USB stick and inform his
manager that the company’s system of access control must be reconsidered.

With regard to TripBliss Inc.’s use of website cookies, which of the following statements is correct?`,options:[`A. Because not all of the cookies are strictly necessary to enable the use of a service requested from TripBliss Inc., consent requirements apply to their use of cookies.`,`B. Because of the categories of data involved, explicit consent for the use of cookies must be obtained separately from customers.`,`C. Because Techiva will receive only aggregate statistics of data collected from the cookies, no additional consent is necessary.`,`D. Because the use of cookies involves the potential for location tracking, explicit consent must be obtained from customers.`],correctAnswer:`A`,explanation:`正确答案 A。并非所有 cookie 都属于严格必要（strictly necessary）以提供用户请求的服务（例如用于分
析、画像的 cookie），根据 ePrivacy 指令，此类非必要 cookie 的放置须取得用户同意。B（“须单独获得
明确同意”表述过于绝对，具体取决于 cookie 类别，并非因数据类别本身单独触发“明确同意”）、C
（Techiva 仅获得汇总统计并不能豁免同意义务，同意义务在于 cookie 放置本身而非后续数据形式）、D
（并非因为“可能定位追踪”才需同意，而是因为 cookie 本身非严格必要）均不准确。知识点：ePrivacy 指
令下 cookie 同意规则，“严格必要”例外。`,topic:`ePrivacy指令`,verified:`accurate`},{id:47,question:`Company X has entrusted the processing of their payroll data to Provider Y. Provider Y stores this
encrypted data on its server. The IT department of Provider Y finds out that someone managed to hack
into the system and take a copy of the data from its server. In this scenario, whom does Provider Y have
the obligation to notify?`,options:[`A. The public`,`B. Company X`,`C. Law enforcement`,`D. The supervisory authority`],correctAnswer:`B`,explanation:`正确答案 B。处理者（Provider Y）在知悉个人数据泄露后，依据第 33(2)条应“不得无故拖延”地通知控制
者（Company X），再由控制者（若符合条件）负责向监管机构和/或数据主体通知，处理者本身通常无
直接向监管机构或公众通知的义务。知识点：第 33 条数据泄露通知的责任链条——处理者通知控制者，
控制者通知监管机构/数据主体。`,topic:`GDPR`,verified:`accurate`},{id:48,question:`When hiring a data processor, which action would a data controller NOT be able to depend upon to avoid
liability in the event of a security breach?`,options:[`A. Documenting due diligence steps taken in the pre-contractual stage.`,`B. Conducting a risk assessment to analyze possible outsourcing threats.`,`C. Requiring that the processor directly notifies the appropriate supervisory authority.`,`D. Maintaining evidence that the processor was the best possible market choice available.`],correctAnswer:`C`,explanation:`正确答案 C。要求处理者“直接”通知监管机构并不符合 GDPR 的责任分配机制——通知监管机构本质上
是控制者的义务（处理者仅需按第 33(2)条通知控制者），控制者不能通过“转嫁通知职责给处理者”来免
除自身的问责制义务。A（尽职调查记录）、B（风险评估）、D（保留处理者系市场最优选择的证据）
都是控制者展示问责制、降低自身责任的合理措施。知识点：问责制原则下控制者的尽职调查义务与第
33 条通知责任的不可转嫁性。`,topic:`GDPR`,verified:`accurate`},{id:49,question:`WP29’s “Guidelines on Personal data breach notification under Regulation 2016/679’’ provides examples
of ways to communicate data breaches transparently. Which of the following was listed as a method that
would NOT be effective for communicating a breach to data subjects?`,options:[`A. A postal notification`,`B. A direct electronic message`,`C. A notice on a corporate blog`,`D. A prominent advertisement in print media`],correctAnswer:`C`,explanation:`正确答案 C。WP29《个人数据泄露通知指南》强调，通知数据主体须采用能够确保绝大多数受影响个体
实际收到或知悉信息的专用沟通渠道（如直接邮件、短信、直接电子消息或醒目的印刷广告），而在企
业博客上发布公告这种被动、需用户主动访问才能获知的方式，通常被认为不足以有效触达受影响个
人，不构成合规的通知方式（除非作为补充措施）。知识点：第 34 条数据泄露通知数据主体的“有效沟
通”标准。`,topic:`GDPR`,verified:`accurate`},{id:50,question:`Which of the following would require designating a data protection officer?`,options:[`A. Processing is carried out by an organization employing 250 persons or more.`,`B. Processing is carried out for the purpose of providing for-profit goods or services to individuals in the EU.`,`C. The core activities of the controller or processor consist of processing operations of financial information or information relating to children.`,`D. The core activities of the controller or processor consist of processing operations that require systematic monitoring of data subjects on a large scale.`],correctAnswer:`D`,explanation:`正确答案 D。第 37(1)(b)、(c)条规定强制设立 DPO 的情形包括：核心业务涉及对数据主体进行大规模、
有规律和系统性监控，或核心业务涉及大规模处理特殊类别数据/犯罪记录数据。是否强制设 DPO 并不取
决于员工人数（A，GDPR 未设此类门槛，虽然一般安全和记录义务在 250 人以下企业有部分豁免）、是
否营利性提供商品服务（B）本身；C 的表述遗漏了“大规模”这一关键限定词，处理财务信息或儿童信息
本身也不属于第 37 条列举的强制触发类型（更准确的是“大规模处理特殊类别数据”）。知识点：第 37 条
强制指定 DPO 的三种法定情形。`,topic:`GDPR`,verified:`accurate`},{id:51,question:`Which of the following describes a mandatory requirement for a group of undertakings that wants to
appoint a single data protection officer?`,options:[`A. The group of undertakings must obtain approval from a supervisory authority.`,`B. The group of undertakings must be comprised of organizations of similar sizes and functions.`,`C. The data protection officer must be located in the country where the data controller has its main establishment.`,`D. The data protection officer must be easily accessible from each establishment where the undertakings are located.`],correctAnswer:`D`,explanation:`正确答案 D。第 37(2)条允许集团企业共同指定一名 DPO，前提是该 DPO 须能够从集团内每一设立机构
便捷地联系到（easily accessible），以确保履职实效。A（须监管机构批准）、B（企业须规模相近）、C
（DPO 须常驻主要机构所在国）均非法定强制要求。知识点：第 37(2)条集团共同指定 DPO 的“易联系
性”要求。`,topic:`GDPR`,verified:`accurate`},{id:52,question:`What obligation does a data controller or processor have after appointing a data protection officer?`,options:[`A. To ensure that the data protection officer receives sufficient instructions regarding the exercise of his or her defined tasks.`,`B. To provide resources necessary to carry out the defined tasks of the data protection officer and to maintain his or her expert knowledge.`,`C. To ensure that the data protection officer acts as the sole point of contact for individuals’ questions about their personal data.`,`D. To submit for approval to the data protection officer a code of conduct to govern organizational practices and demonstrate compliance with data protection principles.`],correctAnswer:`B`,explanation:`正确答案 B。第 38(2)条要求控制者/处理者向 DPO 提供履行职责所必需的资源，并支持其维持专业知识
（如培训）。A 表述恰恰相反——第 38(3)条明确规定 DPO 在履行职责时不得就其任务的行使接受指示，
以保障独立性；C（DPO 并非必然是数据主体咨询的唯一联系人，虽常担任联系点，但并非强制“唯
一”）；D（DPO 并无审批行为守则的权限，行为守则的批准由监管机构负责）。知识点：第 38 条 DPO
的独立地位及企业对 DPO 的支持义务。`,topic:`GDPR`,verified:`accurate`},{id:53,question:`SCENARIO

Please use the following to answer the next question:

Liem, an online retailer known for its environmentally friendly shoes, has recently expanded its presence in

Europe. Anxious to achieve market dominance, Liem teamed up with another eco friendly company, 6
EcoMick, which sells accessories like belts and bags. Together the companies drew up a series of
marketing campaigns designed to highlight the environmental and economic benefits of their products.
After months of planning, Liem and EcoMick entered into a data sharing agreement to use the same
marketing database, MarketIQ, to send the campaigns to their respective contacts.

Liem and EcoMick also entered into a data processing agreement with MarketIQ, the terms of which
included processing personal data only upon Liem and EcoMick’s instructions, and making available to
them all information necessary to demonstrate compliance with GDPR obligations.

Liem and EcoMick then procured the services of a company called JaphSoft, a marketing optimization firm
that uses machine learning to help companies run successful campaigns. Clients provide JaphSoft with
the personal data of individuals they would like to be targeted in each campaign. To ensure protection of
its clients’ data, JaphSoft implements the technical and organizational measures it deems appropriate.
JaphSoft works to continually improve its machine learning models by analyzing the data it receives from
its clients to determine the most successful components of a successful campaign. JaphSoft then uses
such models in providing services to its client-base. Since the models improve only over a period of time
as more information is collected, JaphSoft does not have a deletion process for the data it receives from
clients. However, to ensure compliance with data privacy rules, JaphSoft pseudonymizes the personal
data by removing identifying information from the contact information. JaphSoft’s engineers, however,
maintain all contact information in the same database as the identifying information.

Under its agreement with Liem and EcoMick, JaphSoft received access to MarketIQ, which included
contact information as well as prior purchase history for such contacts, to create campaigns that would
result in the most views of the two companies’ websites. A prior Liem customer, Ms. Iman, received a
marketing campaign from JaphSoft regarding Liem’s as well as EcoMick’s latest products. While Ms. Iman
recalls checking a box to receive information in the future regarding Liem’s products, she has never
shopped EcoMick, nor provided her personal data to that company.

For what reason would JaphSoft be considered a controller under the GDPR?`,options:[`A. It determines how long to retain the personal data collected.`,`B. It has been provided access to personal data in the MarketIQ database.`,`C. It uses personal data to improve its products and services for its client-base through machine learning.`,`D. It makes decisions regarding the technical and organizational measures necessary to protect the personal data.`],correctAnswer:`C`,explanation:`正确答案 C。JaphSoft 通过分析客户提供的数据来持续优化自身机器学习模型、并将改进后的模型用于服
务其整个客户群体，这已超出单纯按客户指示行事的处理者角色，转变为为自身商业目的（产品改进）
独立决定处理目的和方式，因此在此范围内被认定为控制者。A（留存期限的决定权，本案未提及
JaphSoft 对此有决定权）、B（仅仅获得数据访问权限本身不足以认定为控制者）、D（采取安全措施是
处理者应尽的义务，并非控制者身份的判断标准）均不是认定为控制者的关键依据。知识点：控制者与
处理者的实质判断标准——是否为自身目的独立决定处理方式（“controller in disguise”）。`,topic:`GDPR`,verified:`accurate`},{id:54,question:`SCENARIO

Please use the following to answer the next question:

Liem, an online retailer known for its environmentally friendly shoes, has recently expanded its presence in
Europe. Anxious to achieve market dominance, Liem teamed up with another eco friendly company,
EcoMick, which sells accessories like belts and bags. Together the companies drew up a series of
marketing campaigns designed to highlight the environmental and economic benefits of their products.
After months of planning, Liem and EcoMick entered into a data sharing agreement to use the same
marketing database, MarketIQ, to send the campaigns to their respective contacts.

Liem and EcoMick also entered into a data processing agreement with MarketIQ, the terms of which
included processing personal data only upon Liem and EcoMick’s instructions, and making available to

them all information necessary to demonstrate compliance with GDPR obligations.

Liem and EcoMick then procured the services of a company called JaphSoft, a marketing optimization firm

that uses machine learning to help companies run successful campaigns. Clients provide JaphSoft with

the personal data of individuals they would like to be targeted in each campaign. To ensure protection of

its clients’ data, JaphSoft implements the technical and organizational measures it deems appropriate.
JaphSoft works to continually improve its machine learning models by analyzing the data it receives from
its clients to determine the most successful components of a successful campaign. JaphSoft then uses
such models in providing services to its client-base. Since the models improve only over a period of time
as more information is collected, JaphSoft does not have a deletion process for the data it receives from
clients. However, to ensure compliance with data privacy rules, JaphSoft pseudonymizes the personal
data by removing identifying information from the contact information. JaphSoft’s engineers, however,
maintain all contact information in the same database as the identifying information.

Under its agreement with Liem and EcoMick, JaphSoft received access to MarketIQ, which included
contact information as well as prior purchase history for such contacts, to create campaigns that would
result in the most views of the two companies’ websites. A prior Liem customer, Ms. Iman, received a
marketing campaign from JaphSoft regarding Liem’s as well as EcoMick’s latest products. While Ms. Iman
recalls checking a box to receive information in the future regarding Liem’s products, she has never
shopped EcoMick, nor provided her personal data to that company.

Why would the consent provided by Ms. Iman NOT be considered valid in regard to JaphSoft?`,options:[`A. She was not told which controller would be processing her personal data.`,`B. She only viewed the visual representations of the privacy notice Liem provided.`,`C. She did not read the privacy notice stating that her personal data would be shared.`,`D. She has never made any purchases from JaphSoft and has no relationship with the company.`],correctAnswer:`A`,explanation:`正确答案 A。Ms. Iman 当初勾选同意框时，仅被告知 Liem 将使用其数据，并不知晓 EcoMick 或 JaphSoft
也会成为其数据的（共同）控制者/使用方，同意必须具体（specific）并明确告知数据将提供给哪些控制
者，因此该同意对 JaphSoft 的处理而言是无效的。B、C、D 均非导致同意无效的法律原因（是否阅读隐
私声明、是否与 JaphSoft 有购买关系均不构成同意有效性的判断标准）。知识点：有效同意的“具体性”要
求（第 4(11)、7 条），须明确告知涉及哪些控制者。`,topic:`GDPR`,verified:`accurate`},{id:55,question:`SCENARIO

Please use the following to answer the next question:

Liem, an online retailer known for its environmentally friendly shoes, has recently expanded its presence in
Europe. Anxious to achieve market dominance, Liem teamed up with another eco friendly company,
EcoMick, which sells accessories like belts and bags. Together the companies drew up a series of
marketing campaigns designed to highlight the environmental and economic benefits of their products.
After months of planning, Liem and EcoMick entered into a data sharing agreement to use the same
marketing database, MarketIQ, to send the campaigns to their respective contacts.

Liem and EcoMick also entered into a data processing agreement with MarketIQ, the terms of which
included processing personal data only upon Liem and EcoMick’s instructions, and making available to
them all information necessary to demonstrate compliance with GDPR obligations.

Liem and EcoMick then procured the services of a company called JaphSoft, a marketing optimization firm
that uses machine learning to help companies run successful campaigns. Clients provide JaphSoft with
the personal data of individuals they would like to be targeted in each campaign. To ensure protection of
its clients’ data, JaphSoft implements the technical and organizational measures it deems appropriate.
JaphSoft works to continually improve its machine learning models by analyzing the data it receives from
its clients to determine the most successful components of a successful campaign. JaphSoft then uses
such models in providing services to its client-base. Since the models improve only over a period of time
as more information is collected, JaphSoft does not have a deletion process for the data it receives from
clients. However, to ensure compliance with data privacy rules, JaphSoft pseudonymizes the personal
data by removing identifying information from the contact information. JaphSoft’s engineers, however,
maintain all contact information in the same database as the identifying information.

Under its agreement with Liem and EcoMick, JaphSoft received access to MarketIQ, which included

contact information as well as prior purchase history for such contacts, to create campaigns that would
result in the most views of the two companies’ websites. A prior Liem customer, Ms. Iman, received a

marketing campaign from JaphSoft regarding Liem’s as well as EcoMick’s latest products. While Ms. Iman

recalls checking a box to receive information in the future regarding Liem’s products, she has never
shopped EcoMick, nor provided her personal data to that company.

JaphSoft’s use of pseudonymization is NOT in compliance with the CDPR because?`,options:[`A. JaphSoft failed to first anonymize the personal data.`,`B. JaphSoft pseudonymized all the data instead of deleting what it no longer needed.`,`C. JaphSoft was in possession of information that could be used to identify data subjects.`,`D. JaphSoft failed to keep personally identifiable information in a separate database.`],correctAnswer:`D`,explanation:`正确答案 D。GDPR 第 4(5) 条要求：用于重新归属数据主体的补充信息应当单独保存，并采取技术和组织措施防止
未经授权的重新关联。题干明确说明联系信息与识别信息仍保存在同一数据库中，故不符合“单独保存”的要求。控
制者持有可重新识别的补充信息本身并不违法，而是假名化区别于匿名化的特征，因此 C 不是违规原因。`,topic:`GDPR`,verified:`corrected`},{id:56,question:`SCENARIO

Please use the following to answer the next question:

Liem, an online retailer known for its environmentally friendly shoes, has recently expanded its presence in
Europe. Anxious to achieve market dominance, Liem teamed up with another eco friendly company,
EcoMick, which sells accessories like belts and bags. Together the companies drew up a series of
marketing campaigns designed to highlight the environmental and economic benefits of their products.
After months of planning, Liem and EcoMick entered into a data sharing agreement to use the same
marketing database, MarketIQ, to send the campaigns to their respective contacts.

Liem and EcoMick also entered into a data processing agreement with MarketIQ, the terms of which
included processing personal data only upon Liem and EcoMick’s instructions, and making available to

them all information necessary to demonstrate compliance with GDPR obligations.

Liem and EcoMick then procured the services of a company called JaphSoft, a marketing optimization firm
that uses machine learning to help companies run successful campaigns. Clients provide JaphSoft with
the personal data of individuals they would like to be targeted in each campaign. To ensure protection of
its clients’ data, JaphSoft implements the technical and organizational measures it deems appropriate.
JaphSoft works to continually improve its machine learning models by analyzing the data it receives from
its clients to determine the most successful components of a successful campaign. JaphSoft then uses
such models in providing services to its client-base. Since the models improve only over a period of time
as more information is collected, JaphSoft does not have a deletion process for the data it receives from
clients. However, to ensure compliance with data privacy rules, JaphSoft pseudonymizes the personal
data by removing identifying information from the contact information. JaphSoft’s engineers, however,
maintain all contact information in the same database as the identifying information.

Under its agreement with Liem and EcoMick, JaphSoft received access to MarketIQ, which included
contact information as well as prior purchase history for such contacts, to create campaigns that would
result in the most views of the two companies’ websites. A prior Liem customer, Ms. Iman, received a
marketing campaign from JaphSoft regarding Liem’s as well as EcoMick’s latest products. While Ms. Iman
recalls checking a box to receive information in the future regarding Liem’s products, she has never
shopped EcoMick, nor provided her personal data to that company.

Which of the following BEST describes the relationship between Liem, EcoMick and JaphSoft?`,options:[`A. Liem is a controller and EcoMick is a processor because Liem provides specific instructions regarding how the marketing campaigns should be rolled out.`,`B. EcoMick and JaphSoft are is a controller and Liem is a processor because EcoMick is sharing its marketing data with Liem for contacts in Europe.`,`C. JaphSoft is the sole processor because it processes personal data on behalf of its clients.`,`D. Liem and EcoMick are joint controllers because they carry out joint marketing activities.`],correctAnswer:`D`,explanation:`正确答案 D。Liem 与 EcoMick 共同策划营销活动、共享同一营销数据库并共同决定处理目的和方式（联
合开展营销活动），依据第 26 条构成共同控制者（joint controllers），双方须以协议明确各自在 GDPR
项下的责任分工。A、B 错误地将其中一方定性为处理者而非共同控制者；C 错误地将 JaphSoft 认定为唯
一处理者，而实际上 JaphSoft 因改进自身模型的独立处理行为已构成（部分）控制者。知识点：第 26 条
共同控制者的认定及责任分配协议要求。`,topic:`GDPR`,verified:`accurate`},{id:57,question:`SCENARIO

Please use the following to answer the next question:

Liem, an online retailer known for its environmentally friendly shoes, has recently expanded its presence in
Europe. Anxious to achieve market dominance, Liem teamed up with another eco friendly company,
EcoMick, which sells accessories like belts and bags. Together the companies drew up a series of
marketing campaigns designed to highlight the environmental and economic benefits of their products.
After months of planning, Liem and EcoMick entered into a data sharing agreement to use the same
marketing database, MarketIQ, to send the campaigns to their respective contacts.

Liem and EcoMick also entered into a data processing agreement with MarketIQ, the terms of which
included processing personal data only upon Liem and EcoMick’s instructions, and making available to
them all information necessary to demonstrate compliance with GDPR obligations.

Liem and EcoMick then procured the services of a company called JaphSoft, a marketing optimization firm
that uses machine learning to help companies run successful campaigns. Clients provide JaphSoft with
the personal data of individuals they would like to be targeted in each campaign. To ensure protection of
its clients’ data, JaphSoft implements the technical and organizational measures it deems appropriate.
JaphSoft works to continually improve its machine learning models by analyzing the data it receives from
its clients to determine the most successful components of a successful campaign. JaphSoft then uses
such models in providing services to its client-base. Since the models improve only over a period of time
as more information is collected, JaphSoft does not have a deletion process for the data it receives from
clients. However, to ensure compliance with data privacy rules, JaphSoft pseudonymizes the personal
data by removing identifying information from the contact information. JaphSoft’s engineers, however,
maintain all contact information in the same database as the identifying information.

Under its agreement with Liem and EcoMick, JaphSoft received access to MarketIQ, which included
contact information as well as prior purchase history for such contacts, to create campaigns that would
result in the most views of the two companies’ websites. A prior Liem customer, Ms. Iman, received a
marketing campaign from JaphSoft regarding Liem’s as well as EcoMick’s latest products. While Ms. Iman
recalls checking a box to receive information in the future regarding Liem’s products, she has never
shopped EcoMick, nor provided her personal data to that company.

Under the GDPR, Liem and EcoMick’s contract with MarketIQ must include all of the following provisions
EXCEPT?`,options:[`A. Processing the personal data upon documented instructions regarding data transfers outside of the EEA.`,`B. Notification regarding third party requests for access to Liem and EcoMick’s personal data.`,`C. Assistance to Liem and EcoMick in their compliance with data protection impact assessments.`,`D. Returning or deleting personal data after the end of the provision of the services.`],correctAnswer:`B`,explanation:`正确答案 B。第 28(3)条列明处理者合同必须包含的强制条款：按指示处理数据（包括跨境传输指示，
A）、协助控制者履行 DPIA 等义务（C）、服务结束后返还或删除数据（D）等，但并未要求处理者合同
中包含“就第三方请求访问数据向控制者通知”这一具体条款（该义务更多体现在处理者须协助控制者应对
数据主体请求及配合监管调查，但不是以“第三方请求访问”这一表述作为第 28 条强制列明的条款）。知
识点：第 28(3)条处理者合同的强制性条款清单。`,topic:`GDPR`,verified:`accurate`},{id:58,question:`When is data sharing agreement MOST likely to be needed?`,options:[`A. When anonymized data is being shared.`,`B. When personal data is being shared between commercial organizations acting as joint data controllers.`,`C. When personal data is being proactively shared by a controller to support a police investigation.`,`D. When personal data is being shared with a public authority with powers to require the personal data to be disclosed.`],correctAnswer:`B`,explanation:`正确答案 B。当多个商业机构作为共同控制者共享个人数据以协同实现共同目的时，最需要通过数据共
享协议明确权责分配、合法依据及数据主体权利保障机制（呼应第 26 条）。A（匿名数据不涉及个人数
据保护义务）、C、D（应执法或公权力机构法定要求进行的数据披露，属于法定义务而非协议安排的范
畴）通常不需要（或不适用）数据共享协议。知识点：数据共享协议（Data Sharing Agreement）的适用
场景，第 26 条共同控制者。`,topic:`GDPR`,verified:`accurate`},{id:59,question:`An employee of company ABCD has just noticed a memory stick containing records of client data,
including their names, addresses and full contact details has disappeared. The data on the stick is
unencrypted and in clear text. It is uncertain what has happened to the stick at this stage, but it likely was
lost during the travel of an employee. What should the company do?`,options:[`A. Notify as soon as possible the data protection supervisory authority that a data breach may have taken place.`,`B. Launch an investigation and if nothing is found within one month, notify the data protection supervisory authority.`,`C. Invoke the “disproportionate effort” exception under Article 33 to postpone notifying data subjects until more information can be gathered.`,`D. Immediately notify all the customers of the company that their information has been accessed by an unauthorized person.`],correctAnswer:`A`,explanation:`答案 A 在该未加密 U 盘情形下通常成立，但公司仍应立即调查并记录事实、风险和决定；通知监管机构的 72 小时
从控制者达到“合理确定已发生泄露”的知悉时点起算。通知数据主体仅在达到高风险门槛时触发。`,topic:`GDPR`,verified:`qualified`},{id:60,question:`Which of the following does NOT have to be included in the records most processors must maintain in
relation to their data processing activities?`,options:[`A. Name and contact details of each controller on behalf of which the processor is acting.`,`B. Categories of processing carried out on behalf of each controller for which the processor is acting.`,`C. Details of transfers of personal data to a third country carried out on behalf of each controller for which the processor is acting.`,`D. Details of any data protection impact assessment conducted in relation to any processing activities carried out by the processor on behalf of each controller for which the processor is acting.`],correctAnswer:`D`,explanation:`正确答案 D。第 30(2)条规定处理者须维护的处理活动记录内容包括：控制者名称联系方式（A）、代表
其处理的类别（B）、跨境传输详情（C）、以及安全措施描述等，但并不要求处理者的记录中包含
DPIA 的详细信息——DPIA 属于控制者依第 35 条承担的义务及记录内容，而非处理者第 30(2)条记录清
单的组成部分。知识点：第 30(2)条处理者处理活动记录的强制内容，与控制者记录内容（第 30(1)条）的
区别。`,topic:`GDPR`,verified:`accurate`},{id:61,question:`An unforeseen power outage results in company Z’s lack of access to customer data for six hours.
According to article 32 of the GDPR, this is considered a breach. Based on the WP 29’s February, 2018
guidance, company Z should do which of the following?`,options:[`A. Notify affected individuals that their data was unavailable for a period of time.`,`B. Document the loss of availability to demonstrate accountability`,`C. Notify the supervisory authority about the loss of availability`,`D. Conduct a thorough audit of all security systems`],correctAnswer:`B`,explanation:`正确答案 B。第 32(1)(b)条将“可用性”（availability）列为安全处理三要素之一，短暂断电导致的数据不可
用同样构成“个人数据泄露”（第 4(12)条泄露定义涵盖机密性、完整性、可用性受损）。但根据 WP29 指
南，此类事件是否需要通知取决于对数据主体权利自由造成风险的可能性和严重程度；若风险很低（如
短暂断电、数据未丢失且很快恢复），企业至少应将该事件记录在案以证明问责制（第 33(5)条要求记录
所有泄露，无论是否通知），而不一定要通知监管机构（C）或数据主体（A），也非要求进行全面安全
审计（D，非 WP29 该情形下的具体建议）。知识点：可用性泄露的认定及第 33(5)条泄露记录义务。`,topic:`GDPR`,verified:`accurate`},{id:62,question:`In addition to the European Commission, who can adopt standard contractual clauses, assuming that all

required conditions are met?`,options:[`A. Approved data controllers.`,`B. The Council of the European Union.`,`C. National data protection authorities.`,`D. The European Data Protection Supervisor.`],correctAnswer:`C`,explanation:`正确答案 C。第 46(2)(c)、(d)条规定，标准合同条款可由欧盟委员会制定（即“标准合同条款 SCCs”），
此外成员国监管机构也可在获得一致性机制审查（第 64 条）通过后，制定并经欧盟委员会批准的标准数
据保护条款。控制者本身（A）、欧盟理事会（B）、EDPS（D，仅负责监督欧盟机构）均无权制定此类
标准条款。知识点：第 46 条跨境传输保障机制——标准合同条款的两种制定主体。`,topic:`监管机构`,verified:`accurate`},{id:63,question:`SCENARIO

Please use the following to answer the next question:

Zandelay Fashion (‘Zandelay’) is a successful international online clothing retailer that employs
approximately 650 people at its headquarters based in Dublin, Ireland. Martin is their recently appointed
data protection officer, who oversees the company’s compliance with the General Data Protection
Regulation (GDPR) and other privacy legislation.

The company offers both male and female clothing lines across all age demographics, including children.
In doing so, the company processes large amounts of information about such customers, including
preferences and sensitive financial information such as credit card and bank account numbers.

In an aggressive bid to build revenue growth, Jerry, the CEO, tells Martin that the company is launching a
new mobile app and loyalty scheme that puts significant emphasis on profiling the company’s customers
by analyzing their purchases. Martin tells the CEO that: (a) the potential risks of such activities means that
Zandelay needs to carry out a data protection impact assessment to assess this new venture and its
privacy implications; and (b) where the results of this assessment indicate a high risk in the absence of
appropriate protection measures, Zandelay may have to undertake a prior consultation with the Irish Data
Protection Commissioner before implementing the app and loyalty scheme.

Jerry tells Martin that he is not happy about the prospect of having to directly engage with a supervisory
authority and having to disclose details of Zandelay’s business plan and associated processing activities.

What would MOST effectively assist Zandelay in conducting their data protection impact assessment?`,options:[`A. Information about DPIAs found in Articles 38 through 40 of the GDPR.`,`B. Data breach documentation that data controllers are required to maintain.`,`C. Existing DPIA guides published by local supervisory authorities.`,`D. Records of processing activities that data controllers are required to maintain.`],correctAnswer:`C`,explanation:`正确答案 C。虽然 GDPR 第 35 条本身对 DPIA 提出原则性要求，但对企业实操最有帮助的是各国监管机
构已发布的具体 DPIA 操作指南/清单（如 ICO、CNIL 的 DPIA 模板），可提供更具体可操作的方法论。
A 中的“第 38-40 条”实际上是关于 DPO 和行为守则/认证的条款，并非 DPIA 专门条款（DPIA 规定在第 35
条），属于错误指向；B（数据泄露文档）、D（处理活动记录）与开展 DPIA 本身的方法论关系不大。
知识点：第 35 条 DPIA 的实施及监管机构指南的实用价值。`,topic:`GDPR`,verified:`accurate`},{id:64,question:`SCENARIO

Please use the following to answer the next question:

Zandelay Fashion (‘Zandelay’) is a successful international online clothing retailer that employs

approximately 650 people at its headquarters based in Dublin, Ireland. Martin is their recently appointed

data protection officer, who oversees the company’s compliance with the General Data Protection

Regulation (GDPR) and other privacy legislation. 6
The company offers both male and female clothing lines across all age demographics, including children.
In doing so, the company processes large amounts of information about such customers, including
preferences and sensitive financial information such as credit card and bank account numbers.

In an aggressive bid to build revenue growth, Jerry, the CEO, tells Martin that the company is launching a
new mobile app and loyalty scheme that puts significant emphasis on profiling the company’s customers
by analyzing their purchases. Martin tells the CEO that: (a) the potential risks of such activities means that
Zandelay needs to carry out a data protection impact assessment to assess this new venture and its
privacy implications; and (b) where the results of this assessment indicate a high risk in the absence of
appropriate protection measures. Zandelay may have to undertake a prior consultation with the Irish Data
Protection Commissioner before implementing the app and loyalty scheme.

Jerry tells Martin that he is not happy about the prospect of having to directly engage with a supervisory
authority and having to disclose details of Zandelay’s business plan and associated processing activities.

What must Zandelay provide to the supervisory authority during the prior consultation?`,options:[`A. An evaluation of the complexity of the intended processing.`,`B. An explanation of the purposes and means of the intended processing.`,`C. Records showing that customers have explicitly consented to the intended profiling activities.`,`D. Certificates that prove Martin’s professional qualities and expert knowledge of data protection law.`],correctAnswer:`B`,explanation:`正确答案 B。依据第 36(3)条，控制者在事先咨询监管机构时须提供的信息包括：各方的责任划分、处理
目的和方式、保护数据主体权利自由的措施和保障、DPO 联系方式及 DPIA 本身等，核心是说明拟处理
的目的和方式。A（评估处理复杂度）、C（客户明确同意的记录）、D（DPO 资质证书）均不是第 36(3)
条列明的必须提交内容。知识点：第 36 条事先咨询监管机构的程序要求。`,topic:`GDPR`,verified:`accurate`},{id:65,question:`A company is located in a country NOT considered by the European Union (EU) to have an adequate level
of data protection. Which of the following is an obligation of the company if it imports personal data from
another organization in the European Economic Area (EEA) under standard contractual clauses?`,options:[`A. Submit the contract to its own government authority.`,`B. Ensure that notice is given to and consent is obtained from data subjects.`,`C. Supply any information requested by a data protection authority (DPA) within 30 days.`,`D. Ensure that local laws do not impede the company from meeting its contractual obligations.`],correctAnswer:`D`,explanation:`正确答案 D。标准合同条款（SCCs）作为跨境传输保障机制的核心要求之一，是数据进口方须确保其所
在国的法律法规不会阻碍其履行合同项下的数据保护义务（这也是 Schrems II 判决后强调的传输影响评估
要点）。A（须提交合同给本国政府）、B（须另行取得数据主体同意，本身并非 SCC 项下强制要求）、
C（30 天内提供信息给 DPA，无此具体法定期限）均不准确。知识点：标准合同条款下数据进口方的义
务及 Schrems II 判决对传输安全评估的要求。`,topic:`判例法`,verified:`accurate`},{id:66,question:`Which of the following countries will continue to enjoy adequacy status under the GDPR, pending any
future European Commission decision to the contrary?`,options:[`A. Greece`,`B. Norway`,`C. Australia`,`D. Switzerland`],correctAnswer:`D`,explanation:`正确答案 D。瑞士在原指令 95/46/EC 体系下已获欧盟充分性认定，且该认定在 GDPR 框架下继续有效，
直至欧盟委员会作出新的决定。澳大利亚、希腊（作为欧盟成员国不涉及“充分性”概念，充分性针对第三
国）均不属于已获充分性认定的第三国；挪威作为欧洲经济区（EEA）成员，直接适用 GDPR，无需通过
“充分性认定”这一第三国转移机制。知识点：充分性认定国家清单及历史沿革（95/46/EC 体系下认定的
延续效力）。`,topic:`历史沿革/95-46-EC`,verified:`accurate`},{id:67,question:`A company is hesitating between Binding Corporate Rules and Standard Contractual Clauses as a global
data transfer solution. Which of the following statements would help the company make an effective
decision?`,options:[`A. Binding Corporate Rules are especially recommended for small and medium companies.`,`B. The data exporter does not need to be located in the EU for the standard Contractual Clauses.`,`C. Binding Corporate Rules provide a global solution for all the entities of a company that are bound by the intra-group agreement.`,`D. The company will need the prior authorization of all EU data protection authorities for concluding Standard Contractual Clauses.`],correctAnswer:`C`,explanation:`正确答案 C。约束性企业规则（BCRs）的最大优势在于，一旦获批，可作为覆盖集团内所有受协议约束
实体之间跨境数据传输的“一揽子”解决方案，特别适合大型跨国企业集团内部数据流动。A 错——BCRs
审批流程复杂、成本高，通常更适合大型跨国企业而非中小企业；B 错——标准合同条款目前的适用场景
已扩展，但该表述与本题讨论的 BCRs/SCCs 选择要点关系不大且不准确；D 错——采用 SCCs 无需事先
取得所有欧盟成员国监管机构的批准（这正是 SCCs 相较 BCRs 审批更简便的优势之一）。知识点：约束
性企业规则（BCRs）与标准合同条款（SCCs）的比较。`,topic:`GDPR`,verified:`accurate`},{id:68,question:`Under the GDPR, which of the following is true in regard to adequacy decisions involving cross-border
transfers?`,options:[`A. The European Commission can adopt an adequacy decision for individual companies.`,`B. The European Commission can adopt, repeal or amend an existing adequacy decision.`,`C. EU member states are vested with the power to accept or reject a European Commission adequacy decision.`,`D. To be considered as adequate, third countries must implement the EU General Data Protection Regulation into their national legislation.`],correctAnswer:`B`,explanation:`正确答案 B。第 45(5)条明确欧盟委员会可对已作出的充分性认定进行监测、修改、暂停或撤销。A 错—
—充分性认定针对的是国家/地区/行业整体（有时是特定行业部门），而非单个公司；C 错——成员国无
权否决欧盟委员会的充分性认定决定（该决定对全体成员国具有约束力）；D 错——获得充分性认定并
不要求第三国将 GDPR 原文纳入本国立法，而是要求其提供“实质相当”（essentially equivalent）的保护水
平即可。知识点：第 45 条充分性认定的性质、认定标准及可撤销性。`,topic:`监管机构`,verified:`accurate`},{id:69,question:`Under Article 58 of the GDPR, which of the following describes a power of supervisory authorities in
European Union (EU) member states?`,options:[`A. The ability to enact new laws by executive order.`,`B. The right to access data for investigative purposes.`,`C. The discretion to carry out goals of elected officials within the member state.`,`D. The authority to select penalties when a controller is found guilty in a court of law.`],correctAnswer:`B`,explanation:`正确答案 B。第 58(1)条列明监管机构的调查权，其中包括要求控制者/处理者提供其履行职责所需的一切
信息、开展数据保护审计及访问处理者/控制者的场所和设备等（获取数据用于调查是调查权的核心体
现）。A（无权以行政命令制定新法律）、C（并非执行选举官员意愿的机构，监管机构须独立行使职
权）、D（法院量刑权与监管机构行政处罚权是两套体系，监管机构自身可直接开出行政罚款，无需等待
法院判决）均不准确。知识点：第 58 条监管机构的调查权、更正权及授权权。`,topic:`GDPR`,verified:`accurate`},{id:70,question:`SCENARIO

Please use the following to answer the next question:

Javier is a member of the fitness club EVERFIT. This company has branches in many EU member states,

but for the purposes of the GDPR maintains its primary establishment in France. Javier lives in Newry,

Northern Ireland (part of the U.K.), and commutes across the border to work in Dundalk, Ireland. Two6
years ago while on a business trip, Javier was photographed while working out at a branch of EVERFIT in
Frankfurt, Germany. At the time, Javier gave his consent to being included in the photograph, since he
was told that it would be used for promotional purposes only. Since then, the photograph has been used in
the club’s U.K. brochures, and it features in the landing page of its U.K. website. However, the fitness club
has recently fallen into disrepute due to widespread mistreatment of members at various branches of the
club in several EU member states. As a result, Javier no longer feels comfortable with his photograph
being publicly associated with the fitness club.

After numerous failed attempts to book an appointment with the manager of the local branch to discuss
this matter, Javier sends a letter to EVETFIT requesting that his image be removed from the website and
all promotional materials. Months pass and Javier, having received no acknowledgment of his request,
becomes very anxious about this matter. After repeatedly failing to contact EVETFIT through alternate
channels, he decides to take action against the company.

Javier contacts the U.K. Information Commissioner’s Office (‘ICO’ – the U.K.’s supervisory authority) to
lodge a complaint about this matter. The ICO, pursuant to Article 56 (3) of the GDPR, informs the CNIL
(i.e. the supervisory authority of EVERFIT’s main establishment) about this matter. Despite the fact that
EVERFIT has an establishment in the U.K., the CNIL decides to handle the case in accordance with Article
60 of the GDPR. The CNIL liaises with the ICO, as relevant under the cooperation procedure. In light of
issues amongst the supervisory authorities to reach a decision, the European Data Protection Board
becomes involved and, pursuant to the consistency mechanism, issues a binding decision.

Additionally, Javier sues EVERFIT for the damages caused as a result of its failure to honor his request to
have his photograph removed from the brochure and website.

Under the cooperation mechanism, what should the lead authority (the CNIL) do after it has formed its
view on the matter?`,options:[`A. Submit a draft decision to other supervisory authorities for their opinion.`,`B. Request that the other supervisory authorities provide the lead authority with a draft decision for its consideration.`,`C. Submit a draft decision directly to the Commission to ensure the effectiveness of the consistency mechanism.`,`D. Request that members of the seconding supervisory authority and the host supervisory authority co- draft a decision.`],correctAnswer:`A`,explanation:`正确答案 A。第 60 条合作机制下，主导监管机构（lead supervisory authority）在形成决定草案后，须将该
决定草案提交给其他相关监管机构（concerned supervisory authorities）征求意见，各方在四周内可表达
“相关且合理的异议”（relevant and reasoned objection），如无法达成共识才启动 EDPB 的一致性机制。
B、C、D 均颠倒或误述了合作机制的具体流程和主体角色。知识点：第 60 条一站式合作机制中主导监管
机构与相关监管机构之间的协作程序。`,topic:`监管机构`,verified:`accurate`},{id:71,question:`SCENARIO

Please use the following to answer the next question:

Javier is a member of the fitness club EVERFIT. This company has branches in many EU member states,
but for the purposes of the GDPR maintains its primary establishment in France. Javier lives in Newry,
Northern Ireland (part of the U.K.), and commutes across the border to work in Dundalk, Ireland. Two
years ago while on a business trip, Javier was photographed while working out at a branch of EVERFIT in
Frankfurt, Germany. At the time, Javier gave his consent to being included in the photograph, since he
was told that it would be used for promotional purposes only. Since then, the photograph has been used in
the club’s U.K. brochures, and it features in the landing page of its U.K. website. However, the fitness club
has recently fallen into disrepute due to widespread mistreatment of members at various branches of the

club in several EU member states. As a result, Javier no longer feels comfortable with his photograph

being publicly associated with the fitness club.

After numerous failed attempts to book an appointment with the manager of the local branch to discuss

this matter, Javier sends a letter to EVETFIT requesting that his image be removed from the website and

all promotional materials. Months pass and Javier, having received no acknowledgment of his request,6
becomes very anxious about this matter. After repeatedly failing to contact EVETFIT through alternate
channels, he decides to take action against the company.

Javier contacts the U.K. Information Commissioner’s Office (‘ICO’ – the U.K.’s supervisory authority) to
lodge a complaint about this matter. The ICO, pursuant to Article 56 (3) of the GDPR, informs the CNIL
(i.e. the supervisory authority of EVERFIT’s main establishment) about this matter. Despite the fact that
EVERFIT has an establishment in the U.K., the CNIL decides to handle the case in accordance with Article
60 of the GDPR. The CNIL liaises with the ICO, as relevant under the cooperation procedure. In light of
issues amongst the supervisory authorities to reach a decision, the European Data Protection Board
becomes involved and, pursuant to the consistency mechanism, issues a binding decision.

Additionally, Javier sues EVERFIT for the damages caused as a result of its failure to honor his request to
have his photograph removed from the brochure and website.

Assuming that multiple EVETFIT branches across several EU countries are acting as separate data
controllers, and that each of those branches were responsible for mishandling Javier’s request, how may

Javier proceed in order to seek compensation?`,options:[`A. He will have to sue the EVETFIT’s head office in France, where EVETFIT has its main establishment.`,`B. He will be able to sue any one of the relevant EVETFIT branches, as each one may be held liable for the entire damage.`,`C. He will have to sue each EVETFIT branch so that each branch provides proportionate compensation commensurate with its contribution to the damage or distress suffered by Javier.`,`D. He will be able to apply to the European Data Protection Board in order to determine which particular EVETFIT branch is liable for damages, based on the decision that was made by the board.`],correctAnswer:`B`,explanation:`正确答案 B。当多个独立设立的分支机构分别作为独立控制者、共同对同一损害负有责任时，依据第
82(4)条及各国民事责任规则（连带责任原则），受害人可以选择起诉其中任何一个责任主体，要求其对
全部损害承担赔偿责任（该责任方随后可向其他责任方追偿）。A（必须起诉法国总部）、C（每个分支
机构仅按比例赔偿，与连带责任的立法目的不符，除非最终各责任方之间内部分摊，但对外部受害人而
言无需逐一按比例起诉）、D（EDPB 无权直接裁定具体分支机构的赔偿责任分配，这属于民事诉讼范
畴）均不准确。知识点：第 82 条数据主体获得赔偿的权利及共同责任人的连带赔偿责任。`,topic:`监管机构`,verified:`accurate`},{id:72,question:`The GDPR specifies fines that may be levied against data controllers for certain infringements. Which of
the following infringements would be subject to the less severe administrative fine of up to 10 million euros
(or in the case of an undertaking, up to 2% of the total worldwide annual turnover of the preceding financial
year)?`,options:[`A. Failure to demonstrate that consent was given by the data subject to the processing of their personal data where it is used as the basis for processing.`,`B. Failure to implement technical and organizational measures to ensure data protection is enshrined by design and default.`,`C. Failure to process personal information in a manner compatible with its original purpose.`,`D. Failure to provide the means for a data subject to rectify inaccuracies in personal data.`],correctAnswer:`B`,explanation:`正确答案 B。第 83(4)条规定的“较低档”行政罚款（最高 1000 万欧元或全球年营业额 2%，以较高者为
准）适用于违反数据保护设计与默认（Privacy by Design and by Default，第 25 条）、处理者义务、认证
机构义务等条款；而未能证明已获得同意（A，违反第 7 条同意条款）、未按兼容目的处理（C，违反第
5、6 条处理原则）、未提供数据更正途径（D，违反数据主体权利第 16 条）均属于第 83(5)条规定的“较
高档”罚款情形（最高 2000 万欧元或全球营业额 4%）。知识点：第 83 条两档行政罚款的具体适用范围
区分。`,topic:`GDPR`,verified:`accurate`},{id:73,question:`What is the MAIN reason GDPR Article 4(22) establishes the concept of the “concerned supervisory
authority”?`,options:[`A. To encourage the consistency of local data processing activity.`,`B. To give corporations a choice about who their supervisory authority will be.`,`C. To ensure the GDPR covers controllers that do not have an establishment in the EU but have a representative in a member state.`,`D. To ensure that the interests of individuals residing outside the lead authority’s jurisdiction are represented.`],correctAnswer:`D`,explanation:`正确答案 D。“相关监管机构”（concerned supervisory authority，第 4(22)条）概念的设立，是为了在一站
式机制下，确保处理活动影响到的、非主导监管机构辖区的数据主体权益也能得到代表和保护，即便案
件由主导监管机构统一处理，其他相关成员国的监管机构仍可参与、提出意见、维护本国数据主体的利
益。A、B、C 均未准确反映该概念设立的核心目的。知识点：第 4(22)条“相关监管机构”概念及其在一站
式机制中的作用。`,topic:`GDPR`,verified:`accurate`},{id:74,question:`Which area of privacy is a lead supervisory authority’s (LSA) MAIN concern?`,options:[`A. Data subject rights`,`B. Data access disputes`,`C. Cross-border processing`,`D. Special categories of data`],correctAnswer:`C`,explanation:`正确答案 C。主导监管机构（LSA）制度的核心适用场景是“跨境处理”（cross-border processing，即控制
者在多个成员国设有机构或处理活动实质影响多个成员国数据主体的情形），旨在为企业提供单一联系
窗口。数据主体权利、数据获取纠纷及特殊类别数据处理并非 LSA 机制专门针对的核心领域，这些议题
在任何处理场景（无论是否跨境）中都可能出现。知识点：主导监管机构（LSA）机制及“跨境处理”的定
义（第 4(23)条）。`,topic:`监管机构`,verified:`accurate`},{id:75,question:`If a multi-national company wanted to conduct background checks on all current and potential employees,
including those based in Europe, what key provision would the company have to follow?`,options:[`A. Background checks on employees could be performed only under prior notice to all employees.`,`B. Background checks are only authorized with prior notice and express consent from all employees including those based in Europe.`,`C. Background checks on European employees will stem from data protection and employment law, which can vary between member states.`,`D. Background checks may not be allowed on European employees, but the company can create lists based on its legitimate interests, identifying individuals who are ineligible for employment.`],correctAnswer:`C`,explanation:`正确答案 C。欧盟层面对员工背景调查并无统一专门立法，实际操作须同时遵循数据保护法（GDPR 及各
国转化立法）与各成员国不同的劳动法/雇佣法规定，二者结合且因成员国而异，这正是跨国企业开展欧
洲员工背景调查时面临的核心合规难点。A、B（须提前通知/需全体明确同意）过于绝对，并非 GDPR/劳
动法的统一强制标准（合法依据可以是雇主合法利益等，未必需要同意）；D 的表述（可建立“不合格名
单”）不准确且存在合规风险（可能违反数据保护原则）。知识点：员工背景调查须综合考量数据保护法
与各国雇佣法的双重规制，以及处理雇员数据合法依据的复杂性。`,topic:`GDPR`,verified:`accurate`},{id:76,question:`Why is advisable to avoid consent as a legal basis for an employer to process employee data?`,options:[`A. Employee data can only be processed if there is an approval from the data protection officer.`,`B. Consent may not be valid if the employee feels compelled to provide it.`,`C. An employer might have difficulty obtaining consent from every employee.`,`D. Data protection laws do not apply to processing of employee data.`],correctAnswer:`B`,explanation:`正确答案 B。在雇佣关系中，员工与雇主之间存在明显的权力不对等，员工往往难以自由拒绝雇主的同
意请求（担心影响工作），因此以“同意”作为处理雇员数据的合法依据存在“自愿性”缺陷，同意可能被认
定无效（前言第 43 条强调不平等权力关系下同意的有效性存疑）。A、C、D 均非同意在雇佣场景下不被
推荐使用的准确原因（数据保护法当然适用于雇员数据处理，雇主获取同意的“难度”也不是核心法律顾
虑）。知识点：同意作为合法依据在权力不对等关系（如雇佣关系）中的有效性问题（前言第 43 条）。`,topic:`GDPR`,verified:`accurate`},{id:77,question:`What is true if an employee makes an access request to his employer for any personal data held about
him?`,options:[`A. The employer can automatically decline the request if it contains personal data about a third person.`,`B. The employer can decline the request if the information is only held electronically.`,`C. The employer must supply all the information held about the employee.`,`D. The employer must supply any information held about an employee unless an exemption applies.`],correctAnswer:`D`,explanation:`正确答案 D。雇主作为控制者，收到员工的访问请求后原则上须依第 15 条提供其持有的全部相关个人数
据，但可依法适用特定豁免情形（如涉及第三方数据保护、商业秘密、法律特权等），因此答案是“除非
适用豁免，否则须提供”，而非绝对地“必须提供全部信息”（C 过于绝对）或可仅因涉及第三人信息
（A）或仅电子存储形式（B）就自动拒绝。知识点：第 15 条数据主体访问权及其法定豁免情形。`,topic:`GDPR`,verified:`accurate`},{id:78,question:`Read the following steps:
Discover which employees are accessing cloud services and from which devices and apps
Lock down the data in those apps and devices
Monitor and analyze the apps and devices for compliance
Manage application life cycles
Monitor data sharing

An organization should perform these steps to do which of the following?`,options:[`A. Pursue a GDPR-compliant Privacy by Design process.`,`B. Institute a GDPR-compliant employee monitoring process.`,`C. Maintain a secure Bring Your Own Device (BYOD) program.`,`D. Ensure cloud vendors are complying with internal data use policies.`],correctAnswer:`C`,explanation:`正确答案 C。题目所列步骤（发现云服务访问设备应用、锁定数据、监控合规、管理应用生命周期、监
控数据共享）是企业管理“自带设备办公”（BYOD）项目、平衡员工设备灵活性与企业数据安全合规的典
型流程，而非隐私设计流程（A，Privacy by Design 关注产品/系统设计阶段）、员工监控合规流程（B，
侧重合法监控依据而非设备管理）或供应商内部合规审查（D）。知识点：BYOD 项目管理与移动设备安
全（MDM/MAM）在 GDPR 环境下的应用。`,topic:`GDPR`,verified:`accurate`},{id:79,question:`If a company is planning to use closed-circuit television (CCTV) on its premises and is concerned with
GDPR compliance, it should first do all of the following EXCEPT?`,options:[`A. Notify the appropriate data protection authority.`,`B. Perform a data protection impact assessment (DPIA).`,`C. Create an information retention policy for those who operate the system.`,`D. Ensure that safeguards are in place to prevent unauthorized access to the footage.`],correctAnswer:`A`,explanation:`正确答案 A。安装 CCTV 前，企业首先应做的是进行 DPIA 评估隐私风险（B）、制定录像留存政策
（C）、确保未授权访问防护措施（D），但 GDPR 并未要求企业在部署 CCTV 前须事先向监管机构“通
知/报备”——一般性的处理通知义务已被 GDPR 废除，仅在特定高风险且 DPIA 显示无法降低风险时才需
依第 36 条进行“事先咨询”，而非泛泛的“通知”义务。知识点：CCTV 监控的 GDPR 合规要点及一般通知
义务的废除（与 95/46 指令时代的区别）。`,topic:`历史沿革/95-46-EC`,verified:`accurate`},{id:80,question:`SCENARIO

Please use the following to answer the next question:

Building Block Inc. is a multinational company, headquartered in Chicago with offices throughout the

United States, Asia, and Europe (including Germany, Italy, France and Portugal). Last year the company

was the victim of a phishing attack that resulted in a significant data breach. The executive board, in
coordination with the general manager, their Privacy Office and the Information Security team, resolved to

adopt additional security measures. These included training awareness programs, a cybersecurity audit,

and use of a new software tool called SecurityScan, which scans employees’ computers to see if they

have software that is no longer being supported by a vendor and therefore not getting security updates.

However, this software also provides other features, including the monitoring of employees’ computers.

Since these measures would potentially impact employees, Building Block’s Privacy Office decided to
issue a general notice to all employees indicating that the company will implement a series of initiatives to
enhance information security and prevent future data breaches.

After the implementation of these measures, server performance decreased. The general manager
instructed the Security team on how to use SecurityScan to monitor employees’ computers activity and
their location. During these activities, the Information Security team discovered that one employee from
Italy was daily connecting to a video library of movies, and another one from Germany worked remotely
without authorization. The Security team reported these incidents to the Privacy Office and the general
manager. In their report, the team concluded that the employee from Italy was the reason why the server
performance decreased.

Due to the seriousness of these infringements, the company decided to apply disciplinary measures to
both employees, since the security and privacy policy of the company prohibited employees from installing
software on the company’s computers, and from working remotely without authorization.

To comply with the GDPR, what should Building Block have done as a first step before implementing the
SecurityScan measure?`,options:[`A. Assessed potential privacy risks by conducting a data protection impact assessment.`,`B. Consulted with the relevant data protection authority about potential privacy violations.`,`C. Distributed a more comprehensive notice to employees and received their express consent.`,`D. Consulted with the Information Security team to weigh security measures against possible server impacts.`],correctAnswer:`A`,explanation:`正确答案 A。在部署可能对员工隐私产生重大影响的监控软件（SecurityScan 除安全补丁扫描外还具备员
工监控功能）之前，公司首先应当进行数据保护影响评估（DPIA），以识别、评估并降低对员工权利自
由的潜在风险，这是“设计阶段隐私保护”和问责制原则的核心要求。B（咨询监管机构，仅在 DPIA 显示
高风险且无法缓解时才需要，非首要步骤）、C（发一般性通知即视为获得同意，笼统通知不满足透明度
和同意具体性要求）、D（仅与 IT 团队讨论服务器影响，未触及隐私合规核心）均非首要应采取的合规
步骤。知识点：第 35 条 DPIA 作为部署高风险监控技术前的前置合规步骤，员工监控中的“设计阶段隐私
保护”（Privacy by Design）。`,topic:`GDPR`,verified:`accurate`},{id:81,question:`SCENARIO

Please use the following to answer the next question:

Building Block Inc. is a multinational company, headquartered in Chicago with offices throughout the
United States, Asia, and Europe (including Germany, Italy, France and Portugal). Last year the company
was the victim of a phishing attack that resulted in a significant data breach. The executive board, in
coordination with the general manager, their Privacy Office and the Information Security team, resolved to

adopt additional security measures. These included training awareness programs, a cybersecurity audit,
and use of a new software tool called SecurityScan, which scans employees’ computers to see if they
have software that is no longer being supported by a vendor and therefore not getting security updates.
However, this software also provides other features, including the monitoring of employees’ computers.

Since these measures would potentially impact employees, Building Block’s Privacy Office decided to
issue a general notice to all employees indicating that the company will implement a series of initiatives to
enhance information security and prevent future data breaches.

After the implementation of these measures, server performance decreased. The general manager
instructed the Security team on how to use SecurityScan to monitor employees’ computers activity and
their location. During these activities, the Information Security team discovered that one employee from
Italy was daily connecting to a video library of movies, and another one from Germany worked remotely
without authorization. The Security team reported these incidents to the Privacy Office and the general

manager. In their report, the team concluded that the employee from Italy was the reason why the server

performance decreased.

Due to the seriousness of these infringements, the company decided to apply disciplinary measures to

both employees, since the security and privacy policy of the company prohibited employees from installing
software on the company’s computers, and from working remotely without authorization.

What would be the MOST APPROPRIATE way for Building Block to handle the situation with the
employee from Italy?`,options:[`A. Since the GDPR does not apply to this situation, the company would be entitled to apply any disciplinary measure authorized under Italian labor law.`,`B. Since the employee was the cause of a serious risk for the server performance and their data, the company would be entitled to apply disciplinary measures to this employee, including fair dismissal.`,`C. Since the employee was not informed that the security measures would be used for other purposes such as monitoring, the company could face difficulties in applying any disciplinary measures to this employee.`,`D. Since this was a serious infringement, but the employee was not appropriately informed about the consequences the new security measures, the company would be entitled to apply some disciplinary measures, but not dismissal.`],correctAnswer:`C`,explanation:`正确答案 C。公司发布的通知只泛泛提及“提升信息安全”，并未明确告知 SecurityScan 还具备监控员工活
动和位置的功能，违反了透明度原则（第 13、14 条），员工因此并未被充分告知该数据将用于监控这一
新目的，公司在此情况下对该员工采取纪律处分将面临合法性挑战。A 错——GDPR 同样适用于该情形
（跨国公司在意大利分支处理欧盟员工数据）；B（径行认定可解雇）、D（可处分但不可解雇）都跳过
了处理合法性/透明度这一根本前提问题。知识点：员工监控中的透明度义务，第 5(1)(a)、13 条，非法收
集证据对后续管理措施的影响。`,topic:`GDPR`,verified:`accurate`},{id:82,question:`SCENARIO

Please use the following to answer the next question:

Building Block Inc. is a multinational company, headquartered in Chicago with offices throughout the

United States, Asia, and Europe (including Germany, Italy, France and Portugal). Last year the company
was the victim of a phishing attack that resulted in a significant data breach. The executive board, in
coordination with the general manager, their Privacy Office and the Information Security team, resolved to
adopt additional security measures. These included training awareness programs, a cybersecurity audit,
and use of a new software tool called SecurityScan, which scans employees’ computers to see if they
have software that is no longer being supported by a vendor and therefore not getting security updates.
However, this software also provides other features, including the monitoring of employees’ computers.

Since these measures would potentially impact employees, Building Block’s Privacy Office decided to
issue a general notice to all employees indicating that the company will implement a series of initiatives to
enhance information security and prevent future data breaches.

After the implementation of these measures, server performance decreased. The general manager
instructed the Security team on how to use SecurityScan to monitor employees’ computers activity and
their location. During these activities, the Information Security team discovered that one employee from
Italy was daily connecting to a video library of movies, and another one from Germany worked remotely
without authorization. The Security team reported these incidents to the Privacy Office and the general
manager. In their report, the team concluded that the employee from Italy was the reason why the server
performance decreased.

Due to the seriousness of these infringements, the company decided to apply disciplinary measures to
both employees, since the security and privacy policy of the company prohibited employees from installing
software on the company’s computers, and from working remotely without authorization.

In addition to notifying employees about the purpose of the monitoring, the potential uses of their data and
their privacy rights, what information should Building Block have provided them before implementing the
security measures?`,options:[`A. Information about what is specified in the employment contract.`,`B. Information about who employees should contact with any queries.`,`C. Information about how providing consent could affect them as employees.`,`D. Information about how the measures are in the best interests of the company.`],correctAnswer:`B`,explanation:`正确答案 B。除说明监控目的、数据用途和员工权利外，充分透明的告知还应包括员工对相关问题可联
系的具体对象（如 DPO 或隐私办公室联系方式），这是落实数据主体行使权利、寻求解答的实际保障
（呼应第 13(1)(b)条关于 DPO 联系方式的告知要求）。A（劳动合同条款内容）、C（同意对雇员的影
响，本场景合法依据并非同意）、D（测量对公司的利益，无关告知义务）均非该告知缺口的准确答案。
知识点：第 13/14 条告知内容的完整性——包括联系方式等程序性信息。`,topic:`GDPR`,verified:`accurate`},{id:83,question:`Based on GDPR Article 35, which of the following situations would trigger the need to complete a DPIA?`,options:[`A. A company wants to combine location data with other data in order to offer more personalized service for the customer.`,`B. A company wants to use location data to infer information on a person’s clothes purchasing habits.`,`C. A company wants to build a dating app that creates candidate profiles based on location data and data from third-party sources.`,`D. A company wants to use location data to track delivery trucks in order to make the routes more efficient.`],correctAnswer:`C`,explanation:`正确答案 C。约会软件基于位置数据及第三方来源数据构建用户画像以匹配潜在对象，涉及大规模处
理、结合多源数据进行系统性画像评估，且可能间接涉及敏感信息（如推断性取向等），属于 WP29
DPIA 指南中列举的高风险处理情形（画像评估+创新技术+可能涉及特殊类别数据的推断），须开展
DPIA。A、B、D 虽然也涉及位置数据处理，但并未同时叠加“大规模画像+多源数据融合+可能触及敏感
信息”等多重高风险因素，风险程度较低，未必强制触发 DPIA。知识点：第 35(3)条及 WP29 DPIA 指南
列举的高风险处理情形（大规模画像、创新技术使用等）。`,topic:`GDPR`,verified:`accurate`},{id:84,question:`In which of the following cases would an organization MOST LIKELY be required to follow both ePrivacy
and data protection rules?`,options:[`A. When creating an untargeted pop-up ad on a website.`,`B. When calling a potential customer to notify her of an upcoming product sale.`,`C. When emailing a customer to announce that his recent order should arrive earlier than expected.`,`D. When paying a search engine company to give prominence to certain products and services within specific search results.`],correctAnswer:`B`,explanation:`正确答案 B。电话营销涉及 ePrivacy 指令关于电子通信直接营销的同意/退出规则（因涉及电话这一“电子
通信”手段），同时该处理个人数据的行为也须符合 GDPR 的合法处理原则，因此二者规则同时适用。A
（非定向弹窗广告一般不涉及针对个人的直接电子通信）、C（订单到货提醒邮件属于服务性通知而非营
销，一般豁免于营销同意规则）、D（付费提升搜索排名主要涉及商业合同及竞争法，非典型的 ePrivacy
规制对象）均不如 B 典型地同时触发两套规则。知识点：ePrivacy 指令与 GDPR 在电子直接营销场景下
的双重适用。`,topic:`ePrivacy指令`,verified:`accurate`},{id:85,question:`What permissions are required for a marketer to send an email marketing message to a consumer in the
EU?`,options:[`A. A prior opt-in consent for consumers unless they are already customers.`,`B. A pre-checked box stating that the consumer agrees to receive email marketing.`,`C. A notice that the consumer’s email address will be used for marketing purposes.`,`D. No prior permission required, but an opt-out requirement on all emails sent to consumers.`],correctAnswer:`A`,explanation:`答案 A 应理解为：电子邮件直销原则上需要事先同意；“soft opt-in”仅适用于在销售或销售磋商中直接取得联系方
式、营销自身类似产品或服务，并在收集时及每封邮件中均提供简便免费退出方式的情形。`,topic:`GDPR`,verified:`qualified`},{id:86,question:`Under what circumstances might the “soft opt-in” rule apply in relation to direct marketing?`,options:[`A. When an individual has not consented to the marketing. 6`,`B. When an individual’s details are obtained from their inquiries about buying a product.`,`C. Where an individual’s details have been obtained from a bought-in marketing list.`,`D. Where an individual is given the ability to unsubscribe from marketing emails sent to him.`],correctAnswer:`B`,explanation:`答案 B 为最佳选项，但“曾经咨询或交易”本身不够。软退出还要求联系方式是在销售或销售磋商中直接取得、营销
主体为同一企业、内容是类似产品或服务，并在收集时和每次通信时提供退出。`,topic:`GDPR`,verified:`qualified`},{id:87,question:`What should a controller do after a data subject opts out of a direct marketing activity?`,options:[`A. Without exception, securely delete all personal data relating to the data subject.`,`B. Without undue delay, provide information to the data subject on the action that will be taken.`,`C. Refrain from processing personal data relating to the data subject for the relevant type of communication.`,`D. Take reasonable steps to inform third-party recipients that the data subject’s personal data should be deleted and no longer processed.`],correctAnswer:`C`,explanation:`正确答案 C。第 21(3)条规定，一旦数据主体反对将其数据用于直接营销，控制者必须立即停止将该数据
用于该类营销目的的处理，这是绝对权利，控制者无需进行利益衡量即须遵从。A（无条件彻底删除所有
数据）表述过于绝对，数据可能因其他合法依据/目的继续保留；B、D 虽是良好实践但并非第 21 条规定
的核心法定义务表述。知识点：第 21(2)(3)条反对直接营销的绝对权利及控制者的对应义务。`,topic:`GDPR`,verified:`accurate`},{id:88,question:`How is the GDPR’s position on consent MOST likely to affect future app design and implementation?`,options:[`A. App developers will expand the amount of data necessary to collect for an app’s functionality.`,`B. Users will be given granular types of consent for particular types of processing.`,`C. App developers’ responsibilities as data controllers will increase.`,`D. Users will see fewer advertisements when using apps.`],correctAnswer:`B`,explanation:`正确答案 B。为满足 GDPR 对同意“具体性”“清晰积极行为”等要求，App 开发者未来须为不同类型的处理
活动分别提供细分（granular）的同意选项，而非笼统的“一揽子”同意，让用户能够对各项具体处理逐一
作出选择。A（扩大收集数据量，与数据最小化原则相悖）、C（虽然合规责任客观上会增加，但并非题
目问的“对 App 设计与实施”的直接影响）、D（广告数量减少并非同意规则的直接必然结果）均不是最贴
切的答案。知识点：同意的“具体性”要求对产品设计（granular consent UX）的影响。`,topic:`GDPR`,verified:`accurate`},{id:89,question:`A mobile device application that uses cookies will be subject to the consent requirement of which of the
following?`,options:[`A. The ePrivacy Directive`,`B. The E-Commerce Directive`,`C. The Data Retention Directive`,`D. The EU Cybersecurity Directive`],correctAnswer:`A`,explanation:`正确答案 A。无论是网页还是移动应用，只要涉及在用户设备上存储或读取信息（cookie 或类似技术如
SDK、本地存储），均受 ePrivacy 指令（“cookie 规则”）关于事先同意的规制，GDPR 则规范这些信息构
成个人数据后的后续处理。电子商务指令（B）主要规范在线合同和服务提供的透明度，数据留存指令
（C）已被宣告无效且规范执法数据留存，网络与信息安全指令（D）聚焦关键基础设施安全，均非规制
cookie 同意的直接依据。知识点：ePrivacy 指令对 cookie 及类似追踪技术的同意规制，适用于网页与 App
等各类终端设备。`,topic:`ePrivacy指令`,verified:`accurate`},{id:90,question:`What term BEST describes the European model for data protection?`,options:[`A. Sectoral`,`B. Self-regulatory`,`C. Market-based`,`D. Comprehensive`],correctAnswer:`D`,explanation:`正确答案 D。欧盟采用的是“综合性”（comprehensive/omnibus）数据保护立法模式，即以统一、全面的一
般性法律（如 GDPR）适用于所有行业和数据类型，区别于美国式的“行业分散立法”（sectoral，A）模
式、行业自律模式（self-regulatory，B）或市场化模式（C）。知识点：全球数据保护立法模式的比较—
—欧盟综合型 vs. 美国分散型/自律型。`,topic:`GDPR`,verified:`accurate`},{id:91,question:`What was the aim of the European Data Protection Directive 95/46/EC?`,options:[`A. To harmonize the implementation of the European Convention of Human Rights across all member states.`,`B. To implement the OECD Guidelines on the Protection of Privacy and trans-border flows of Personal Data.`,`C. To completely prevent the transfer of personal data out of the European Union.`,`D. To further reconcile the protection of the fundamental rights of individuals with the free flow of data from one member state to another.`],correctAnswer:`D`,explanation:`正确答案 D。95/46/EC 指令在立法目的中明确寻求在保护个人基本权利（尤其隐私权）与促进欧盟内部
个人数据自由流动之间取得平衡，这也是欧盟数据保护立法一贯的双重目标（既保护权利又促进单一市
场内的数据流通）。A（协调欧洲人权公约的实施，指令本身并非专门针对 ECHR 的协调工具）、B（实
施 OECD 指南，指令借鉴但并非以“实施 OECD 指南”为直接立法目的）、C（完全禁止数据出境，与实际
内容相悖，指令恰恰是为促进内部数据流动）均不准确。知识点：95/46/EC 指令的双重立法目标——基
本权利保护与数据自由流动的平衡。`,topic:`历史沿革/95-46-EC`,verified:`accurate`},{id:92,question:`What is the key difference between the European Council and the Council of the European Union?`,options:[`A. The Council of the European Union is helmed by a president.`,`B. The Council of the European Union has a degree of legislative power.`,`C. The European Council focuses primarily on issues involving human rights.`,`D. The European Council is comprised of the heads of each EU member state.`],correctAnswer:`D`,explanation:`答案 D 最准确地区分两机构的组成，但 B“欧洲理事会不通过欧盟立法”也是真命题，因此题目存在一定多解性。欧
洲理事会由国家元首或政府首脑组成并确定政治方向；欧盟理事会由各国部长组成并与欧洲议会共同立法。`,topic:`监管机构`,verified:`qualified`},{id:93,question:`Which change was introduced by the 2009 amendments to the e-Privacy Directive 2002/58/EC?`,options:[`A. A voluntary notification for personal data breaches applicable to all data controllers.`,`B. A voluntary notification for personal data breaches applicable to electronic communication providers.`,`C. A mandatory notification for personal data breaches applicable to all data controllers.`,`D. A mandatory notification for personal data breaches applicable to electronic communication providers.`],correctAnswer:`D`,explanation:`正确答案 D。2009 年对 ePrivacy 指令（2002/58/EC，经 2009/136/EC 修订）的修订新增了强制性数据泄露
通知义务，但该义务仅适用于电子通信服务提供商（如电信运营商、ISP），而非所有数据控制者——面
向所有控制者的强制泄露通知义务是后来 GDPR（第 33、34 条）才引入的。知识点：2009 年 ePrivacy 指
令修订引入的强制泄露通知义务及其适用主体的历史局限性（相较 GDPR 的扩展）。`,topic:`ePrivacy指令`,verified:`accurate`},{id:94,question:`What is a reason the European Court of Justice declared the Data Retention Directive invalid in 2014?`,options:[`A. The requirements affected individuals without exception.`,`B. The requirements were financially burdensome to EU businesses.`,`C. The requirements specified that data must be held within the EU.`,`D. The requirements had limitations on how national authorities could use data.`],correctAnswer:`A`,explanation:`正确答案 A。欧洲法院在 Digital Rights Ireland 案（2014）中认定《数据留存指令》无差别地要求对几乎
所有电子通信用户的流量和位置数据进行大规模留存，未区分个人是否涉嫌犯罪或存在其他相关联系，
构成对隐私权和数据保护权的不成比例干预，因而宣告该指令无效。B（财务负担）、C（数据须留在欧
盟境内）、D（对国家机关使用数据的限制）均非该判决认定无效的核心理由。知识点：Digital Rights
Ireland 案及数据留存指令被宣告无效的比例原则依据。`,topic:`监管机构`,verified:`accurate`},{id:95,question:`Which type of personal data does the GDPR define as a “special category” of personal data?`,options:[`A. Educational history.`,`B. Trade-union membership.`,`C. Closed Circuit Television (CCTV) footage.`,`D. Financial information.`],correctAnswer:`B`,explanation:`正确答案 B。第 9(1)条明确列举的“特殊类别数据”包括：种族或民族出身、政治观点、宗教或哲学信仰、
工会会员身份、基因数据、生物识别数据（用于唯一识别）、健康数据、性生活或性取向数据。教育经
历（A）、CCTV 影像（C，除非能揭示特殊类别信息如健康状况）、财务信息（D）通常属于一般个人
数据而非特殊类别数据。知识点：第 9 条特殊类别数据的法定列举范围。`,topic:`GDPR`,verified:`accurate`},{id:96,question:`After leaving the EU under the terms of Brexit, the United Kingdom will seek an adequacy determination.
What is the reason for this?`,options:[`A. The Insurance Commissioner determined that an adequacy determination is required by the Data Protection Act.`,`B. Adequacy determinations automatically lapse when a Member State leaves the EU.`,`C. The UK is now a third country because it’s no longer subject to the GDPR.`,`D. The UK is less trustworthy now that its not part of the Union.`],correctAnswer:`C`,explanation:`答案 C 在历史语境下正确。英国自 2021 年起已是欧盟 GDPR 第五章意义上的第三国；欧盟委员会于 2021 年作出充
分性决定，并于 2025 年 12 月 19 日续期，现有效期至 2031 年 12 月 27 日。`,topic:`GDPR`,verified:`qualified`},{id:97,question:`To which of the following parties does the territorial scope of the GDPR NOT apply?`,options:[`A. All member countries of the European Economic Area.`,`B. All member countries party to the Treaty of Lisbon.`,`C. All member countries party to the Paris Agreement.`,`D. All member countries of the European Union.`],correctAnswer:`C`,explanation:`正确答案 C。GDPR 的属地适用范围（第 3 条）及一般性适用范围覆盖欧盟成员国及通过欧洲经济区协议
延伸适用的 EEA 国家（冰岛、列支敦士登、挪威），与欧盟条约框架（如里斯本条约缔约国即为成员
国）相关，但与《巴黎协定》（一项气候变化国际条约，成员国范围与气候治理相关，和数据保护法域
无关）完全无关。知识点：GDPR 属地适用范围——欧盟成员国及 EEA 国家，排除与数据保护无关的国
际协定缔约国范围。`,topic:`GDPR`,verified:`accurate`},{id:98,question:`What must a data controller do in order to make personal data pseudonymous?`,options:[`A. Separately hold any information that would allow linking the data to the data subject.`,`B. Encrypt the data in order to prevent any unauthorized access or modification.`,`C. Remove all indirect data identifiers and dispose of them securely.`,`D. Use the data only in aggregated form for research purposes.`],correctAnswer:`A`,explanation:`正确答案 A。第 4(5)条对假名化的核心要求是：用于重新识别数据主体的补充信息须单独保存，并采取技
术和组织措施确保个人数据不会被归属到已识别或可识别的自然人。加密（B）只是可用于实现假名化目
标的技术手段之一而非唯一/充分方式；移除间接标识符（C）更接近匿名化操作；仅用于研究的聚合数
据（D）已超出假名化范畴，接近匿名化。知识点：第 4(5)条假名化的法定构成要件——补充信息的分离
保存。`,topic:`GDPR`,verified:`accurate`},{id:99,question:`Which of the following entities would most likely be exempt from complying with the GDPR?`,options:[`A. A South American company that regularly collects European customers’ personal data.`,`B. A company that stores all customer data in Australia and is headquartered in a European Union (EU) member state.`,`C. A Chinese company that has opened a satellite office in a European Union (EU) member state to service European customers.`,`D. A North American company servicing customers in South Africa that uses a cloud storage system made by a European company.`],correctAnswer:`D`,explanation:`正确答案 D。北美公司服务的是南非（非欧盟）客户，即便使用了欧洲云服务商提供的存储系统，只要
其处理活动本身既不针对欧盟数据主体提供商品服务，也不监测欧盟境内的行为，就不落入 GDPR 第 3
条域外适用范围（云服务商所在地本身不足以触发 GDPR 对客户公司的适用）。A（南美公司定期收集欧
洲客户数据，构成向欧盟提供服务，触发 GDPR）、B（欧盟成员国总部公司显然受 GDPR 约束，数据存
储地不影响其作为欧盟设立机构须遵守 GDPR）、C（在欧盟设立卫星机构服务欧洲客户，同样落入
GDPR 适用范围）均需遵守 GDPR。知识点：第 3 条域外适用性判断——设立地标准与目标指向标准，及
“云服务商所在地”通常不构成触发因素。`,topic:`GDPR`,verified:`accurate`},{id:100,question:`Article 29 Working Party has emphasized that the GDPR forbids “forum shopping”, which occurs when
companies do what?`,options:[`A. Choose the data protection officer that is most sympathetic to their business concerns.`,`B. Designate their main establishment in member state with the most flexible practices.`,`C. File appeals of infringement judgments with more than one EU institution simultaneously.`,`D. Select third-party processors on the basis of cost rather than quality of privacy protection.`],correctAnswer:`B`,explanation:`正确答案 B。“监管机构选购”（forum shopping）是指企业刻意将其“主要设立地”（main establishment，决
定主导监管机构归属的关键因素）设在监管执法相对宽松、被认为对企业更“友好”的成员国，以规避严格
监管，这被 WP29 明确批评为规避一站式机制精神的行为。A（挑选 DPO 人选，与 forum shopping 无
关）、C（同时向多个欧盟机构提起上诉，与 forum shopping 概念不符）、D（基于成本选择处理者，属
于采购决策而非监管机构选购）均非 forum shopping 的准确定义。知识点：一站式机制下“监管机构选购”
（forum shopping）的定义及主要设立地认定的实质性要求（第 4(16)条，须为实际作出处理决策的地
点）。`,topic:`GDPR`,verified:`accurate`},{id:101,question:`Under Article 9 of the GDPR, which of the following categories of data is NOT expressly prohibited from
data processing?`,options:[`A. Personal data revealing ethnic origin.`,`B. Personal data revealing genetic information.`,`C. Personal data revealing financial information.`,`D. Personal data revealing trade union membership.`],correctAnswer:`C`,explanation:`正确答案 C。第 9(1)条列举的特殊类别数据包括种族/民族出身、政治观点、宗教信仰、工会会员身份、
基因/生物识别数据、健康数据、性生活/性取向数据，财务信息并不在该列举范围内，因此处理财务数据
一般适用第 6 条普通合法依据即可，无需满足第 9(2)条更严格的例外条件。知识点：第 9 条特殊类别数据
的封闭式列举范围（不含财务信息）。`,topic:`GDPR`,verified:`accurate`},{id:102,question:`When does the GDPR provide more latitude for a company to process data beyond its original collection
purpose?`,options:[`A. When the data has been pseudonymized.`,`B. When the data is protected by technological safeguards.`,`C. When the data serves legitimate interest of third parties.`,`D. When the data subject has failed to use a provided opt-out mechanism.`],correctAnswer:`A`,explanation:`正确答案 A。假名化被 GDPR 明确列为有助于满足目的限制原则下“兼容性处理”测试的保障措施之一
（第 6(4)(e)条将“是否采取假名化等适当保障措施”列为判断新处理是否与原目的兼容的考量因素），从
而为控制者在原始收集目的之外使用数据提供更大灵活性。B（技术保护措施笼统表述，不如假名化具体
对应法条）、C（服务第三方合法利益，与是否可超范围处理无必然联系）、D（未使用退出机制不代表
默示同意新用途）均不准确。知识点：第 6(4)条兼容性处理测试中假名化作为保障措施的作用。`,topic:`GDPR`,verified:`accurate`},{id:103,question:`In which situation would a data controller most likely be able to justify the processing of the data of a child
without parental consent?`,options:[`A. When the data is to be processed for market research.`,`B. When providing preventive or counselling services to the child.`,`C. When providing the child with materials purely for educational use.`,`D. When a legitimate business interest makes obtaining consent impractical.`],correctAnswer:`B`,explanation:`正确答案 B。为儿童提供预防性或咨询性服务（如青少年心理健康、性教育咨询热线等）时，出于保护
儿童自身利益、避免因需要监护人知情而阻碍儿童获得必要帮助的考虑，通常被认为可以在无监护人同
意的情况下提供，这也是许多成员国及 WP29 相关指引认可的例外情形。A（市场调研）、C（纯教育用
途材料）、D（合法利益+同意不便）均不构成第 8 条同意规则的正当例外理由。知识点：儿童数据处理
中监护人同意规则的例外情形（预防或咨询服务）。`,topic:`GDPR`,verified:`accurate`},{id:104,question:`According to the GDPR, when should the processing of photographs be considered processing of special
categories of personal data?`,options:[`A. When processed with the intent to publish information regarding a natural person on publicly accessible media.`,`B. When processed with the intent to proceed to scientific or historical research projects.`,`C. When processed with the intent to uniquely identify or authenticate a natural person.`,`D. When processed with the intent to comply with a law.`],correctAnswer:`C`,explanation:`正确答案 C。前言第 51 条明确指出，仅当照片经过特定技术手段处理、用于唯一识别或验证特定自然人
身份（即构成“生物识别数据”）时，照片处理才落入第 9 条特殊类别数据的范畴；单纯为发布报道
（A）、科研历史研究（B）或履行法律义务（D）而处理照片，若未涉及生物识别目的，则不自动构成
特殊类别数据处理。知识点：前言第 51 条关于照片构成生物识别特殊类别数据的判断标准。`,topic:`GDPR`,verified:`accurate`},{id:105,question:`Which GDPR principle would a Spanish employer most likely depend upon to annually send the personal

data of its employees to the national tax authority?`,options:[`A. The consent of the employees.`,`B. The legal obligation of the employer.`,`C. The legitimate interest of the public administration.`,`D. The protection of the vital interest of the employees. 6`],correctAnswer:`B`,explanation:`正确答案 B。雇主向国家税务机关报送员工薪酬等个人数据是履行税法等法定义务的强制性要求，其合
法处理依据是第 6(1)(c)条“履行控制者所负法定义务”，而非需要员工同意（A，在雇佣关系及法定义务场
景下同意并非合适依据）、公共行政的合法利益（C，此处更准确的依据是法定义务而非合法利益）或员
工生命攸关利益（D，与个税申报无关）。知识点：第 6(1)(c)条“法定义务”作为处理合法依据的典型应用
场景。`,topic:`GDPR`,verified:`accurate`},{id:106,question:`An online company’s privacy practices vary due to the fact that it offers a wide variety of services. How
could it best address the concern that explaining them all would make the policies incomprehensible?`,options:[`A. Use a layered privacy notice on its website and in its email communications.`,`B. Identify uses of data in a privacy notice mailed to the data subject.`,`C. Provide only general information about its processing activities and offer a toll-free number for more information.`,`D. Place a banner on its website stipulating that visitors agree to its privacy policy and terms of use by visiting the site.`],correctAnswer:`A`,explanation:`正确答案 A。当企业业务和处理活动种类繁多、难以用单一简明政策全部说清时，采用“分层隐私声明”
（在网站和邮件中先提供简明概览，再提供入口链接到详细政策）是 ICO 推荐的最佳实践，可兼顾透明
度与可读性。B（邮寄详细清单，操作成本高且可读性未必提升）、C（仅提供概括信息+客服电话，不
满足透明度所需的具体信息告知要求）、D（“继续访问网站即视为同意”的横幅方式，不构成有效同意也
不满足透明度要求）均不是理想做法。知识点：透明度原则的实践方法——分层隐私声明（Layered
Notice）。`,topic:`GDPR`,verified:`accurate`},{id:107,question:`The GDPR requires controllers to supply data subjects with detailed information about the processing of
their data. Where a controller obtains data directly from data subjects, which of the following items of
information does NOT legally have to be supplied?`,options:[`A. The recipients or categories of recipients.`,`B. The categories of personal data concerned.`,`C. The rights of access, erasure, restriction, and portability.`,`D. The right to lodge a complaint with a supervisory authority.`],correctAnswer:`B`,explanation:`正确答案 B。第 13 条要求直接从数据主体处收集数据时应告知的信息包括：控制者身份联系方式、处理
目的和依据、合法利益（如适用）、接收方或接收方类别（A）、留存期限、数据主体权利（含访问、删
除、限制、可携权，C）、投诉权（D）等，但并未要求须告知“所涉及的个人数据类别”这一项——该项
告知义务实际上出现在第 14 条（针对非直接从数据主体处获得数据的情形），因为直接从本人收集时其
本身已知晓所提供的数据类别，无需另行告知。知识点：第 13 条（直接收集）与第 14 条（间接收集）告
知义务清单的差异比较。`,topic:`GDPR`,verified:`accurate`},{id:108,question:`According to Article 14 of the GDPR, how long does a controller have to provide a data subject with
necessary privacy information, if that subject’s personal data has been obtained from other sources?`,options:[`A. As soon as possible after obtaining the personal data.`,`B. As soon as possible after the first communication with the data subject.`,`C. Within a reasonable period after obtaining the personal data, but no later than one month.`,`D. Within a reasonable period after obtaining the personal data, but no later than eight weeks.`],correctAnswer:`C`,explanation:`正确答案 C。第 14(3)(a)条规定，若数据并非直接从数据主体处获得，控制者须在获得数据后的合理期限
内提供相关信息，但最迟不得超过一个月（若数据将用于与数据主体沟通，则最迟应在首次沟通时提
供；若拟披露给其他接收方，则最迟应在首次披露时提供，取二者中较早者，但整体不超过一个月的上
限）。A、B 表述过于宽泛缺少明确期限，D 的“八周”并非法定期限。知识点：第 14(3)条间接获取个人数
据时告知义务的具体时限规定。`,topic:`GDPR`,verified:`accurate`},{id:109,question:`When would a data subject NOT be able to exercise the right to portability?`,options:[`A. When the processing is necessary to perform a task in the exercise of authority vested in the controller.`,`B. When the processing is carried out pursuant to a contract with the data subject.`,`C. When the data was supplied to the controller by the data subject.`,`D. When the processing is based on consent.`],correctAnswer:`A`,explanation:`正确答案 A。第 20(1)条规定数据可携权仅适用于处理基于同意或合同（B、D 情形），且处理须通过自
动化方式进行，数据须是数据主体本人提供的（C 情形属于适用范围内）；而当处理是为履行控制者被赋
予的公共职权任务或行使公权力所必需时（即基于第 6(1)(e)条的法定职权），数据可携权不适用。知识
点：第 20 条数据可携权的适用条件及排除情形（公共职权处理）。`,topic:`GDPR`,verified:`accurate`},{id:110,question:`In which of the following situations would an individual most likely to be able to withdraw her consent for
processing?`,options:[`A. When she is leaving her bank and moving to another bank.`,`B. When she has recently changed jobs and no longer works for the same company.`,`C. When she disagrees with a diagnosis her doctor has recorded on her records.`,`D. When she no longer wishes to be sent marketing materials from an organization.`],correctAnswer:`D`,explanation:`正确答案 D。撤回同意仅适用于以“同意”作为合法处理依据的场景，直接营销通常正是基于同意（或作为
对合法利益处理的反对权行使）开展的，因此个人可随时要求停止接收营销材料，相当于撤回同意/行使
反对权。A（更换银行涉及合同关系终止，非同意撤回问题）、B（离职涉及雇佣合同关系变化）、C
（对诊断结果有异议属于数据准确性/更正权问题，第 16 条）均与撤回同意的场景不符。知识点：第 7(3)
条同意撤回权的适用范围，直接营销场景下同意/反对权的行使。`,topic:`GDPR`,verified:`accurate`},{id:111,question:`As a result of the European Court of Justice’s ruling in the case of Google v. Spain, search engines
outside the EEA are also likely to be subject to the Regulation’s right to be forgotten. This holds true if the
activities of an EU subsidiary and its U.S. parent are what?`,options:[`A. Supervised by the same Data Protection Officer.`,`B. Consistent with Privacy Shield requirements`,`C. Bound by a standard contractual clause.`,`D. Inextricably linked in their businesses.`],correctAnswer:`D`,explanation:`正确答案 D。欧洲法院在 Google 诉西班牙案（Google Spain，2014）中确立：只要非欧盟母公司的搜索引
擎业务与其欧盟子公司（如广告销售业务）在经济上“密不可分”（inextricably linked），即可将该母公司
的搜索处理活动视为在欧盟境内“设立机构背景下”进行的处理，从而使被遗忘权等 GDPR 规则得以适用
于欧盟境外的母公司业务。A、B、C 均非该案确立的关键判断标准。知识点：Google Spain 案确立的“设
立地”及“活动关联”标准，用于将境外母公司处理活动纳入欧盟数据保护法适用范围。`,topic:`监管机构`,verified:`accurate`},{id:112,question:`A German data subject was the victim of an embarrassing prank 20 years ago. A newspaper website
published an article about the prank at the time, and the article is still available on the newspaper’s
website. Unfortunately, the prank is the top search result when a user searches on the victim’s name. The
data subject requests that SearchCo delist this result. SearchCo agrees, and instructs its technology team
to avoid scanning or indexing the article. What else must SearchCo do?`,options:[`A. Notify the newspaper that its article it is delisting the article.`,`B. Fully erase the URL to the content, as opposed to delist which is mainly based on data subject’s name.`,`C. Identify other controllers who are processing the same information and inform them of the delisting request.`,`D. Prevent the article from being listed in search results no matter what search terms are entered into the search engine.`],correctAnswer:`无（原四项均不准确）`,explanation:`现行法下原四项均不准确。EDPB《搜索引擎被遗忘权指南 5/2019》明确指出，GDPR 第 17(2) 条的“通知其他控制
者”义务通常不适用于搜索引擎，因此无需通知原始发布者或其他搜索引擎（排除 A、C）。去索引通常只要求链接
不再出现在以数据主体姓名为主要检索条件的结果中，内容仍可通过其他检索条件访问（排除 D）；也不要求一般
性地从索引或缓存中彻底删除 URL，只有少数例外情形才需完全删除（排除 B）。`,topic:`监管机构`,verified:`corrected`},{id:113,question:`What are the obligations of a processor that engages a sub-processor?`,options:[`A. The processor must give the controller prior written notice and perform a preliminary audit of the sub- processor.`,`B. The processor must obtain the controller’s specific written authorization and provide annual reports on the sub-processor’s performance.`,`C. The processor must receive a written agreement that the sub-processor will be fully liable to the controller for the performance of its obligations in relation to the personal data concerned.`,`D. The processor must obtain the consent of the controller and ensure the sub-processor complies with data processing obligations that are equivalent to those that apply to the processor.`],correctAnswer:`D`,explanation:`正确答案 D。第 28(4)条规定，处理者委托次级处理者（sub-processor）时，须事先取得控制者的一般或
特定书面授权，并通过合同确保次级处理者承担与主处理者相同水准的数据保护义务。A（须进行“初步
审计”，非法定强制要求的具体表述）、B（要求“年度报告”，非法条明确规定的内容）、C（次级处理者
须对控制者承担“完全责任”的书面协议，责任结构上主处理者仍对控制者负首要责任，次级处理者违约由
处理者向控制者负责，而非次级处理者直接对控制者负全责）均不准确。知识点：第 28(4)条次级处理者
的委托授权及等同保护义务要求。`,topic:`GDPR`,verified:`accurate`},{id:114,question:`What must be included in a written agreement between the controller and processor in relation to
processing conducted on the controller’s behalf?`,options:[`A. An obligation on the processor to report any personal data breach to the controller within 72 hours.`,`B. An obligation on both parties to report any serious personal data breach to the supervisory authority.`,`C. An obligation on both parties to agree to a termination of the agreement if the other party is responsible for a personal data breach.`,`D. An obligation on the processor to assist the controller in complying with the controller’s obligations to notify the supervisory authority about personal data breaches.`],correctAnswer:`D`,explanation:`正确答案 D。第 28(3)(f)条要求处理者协议中包含处理者协助控制者履行其向监管机构通知数据泄露等义
务的条款（因为通知监管机构本质上是控制者的义务，处理者需提供必要协助）。A（要求处理者 72 小
时内报告控制者，72 小时是控制者向监管机构报告的期限，而非处理者向控制者报告的强制期限，处理
者义务是“不得无故拖延”地通知，无固定 72 小时数字）、B（两方均须报告监管机构，实际上通常仅控
制者负责对外报告）、C（因泄露而须终止协议，非法定强制条款）均不准确。知识点：第 28(3)条处理
者协议须包含的协助控制者履行泄露通知义务的条款。`,topic:`GDPR`,verified:`accurate`},{id:115,question:`To provide evidence of GDPR compliance, a company performs an internal audit. As a result, it finds a
data base, password-protected, listing all the social network followers of the client.
Regarding the domain of the controller-processor relationships, how is this situation considered?`,options:[`A. Compliant with the security principle, because the data base is password-protected.`,`B. Non-compliant, because the storage of the data exceeds the tasks contractually authorized by the controller.`,`C. Not applicable, because the data base is password protected, and therefore is not at risk of identifying any data subject.`,`D. Compliant with the storage limitation principle, so long as the internal auditor permanently deletes the data base.`],correctAnswer:`B`,explanation:`正确答案 B。处理者建立、存储超出委托合同授权范围（如控制者未授权存储全部社交媒体关注者名
单）的数据库，即便采取了密码保护等安全措施，仍属于超越合同授权范围处理数据的违规行为（违反
第 28(3)(a)条“仅按控制者指示处理”的核心要求）。A、C 仅关注安全措施本身而忽视了“超范围处理”这一
核心违规点；D 的表述（内部审计员事后删除即视为合规存储限制）并不能追溯性地使此前的违规存储
行为合法化。知识点：第 28 条处理者“仅按指示处理”原则及超范围处理的违规认定。`,topic:`GDPR`,verified:`accurate`},{id:116,question:`There are three domains of security covered by Article 32 of the GDPR that apply to both the controller

and the processor. These include all of the following EXCEPT?`,options:[`A. Consent management and withdrawal.`,`B. Incident detection and response.`,`C. Preventative security.`,`D. Remedial security.`],correctAnswer:`A`,explanation:`正确答案 A。第 32 条安全处理要求围绕预防性安全措施（C，如加密、访问控制等）、事件检测与响应
（B）、补救性安全措施（D，如灾难恢复、可用性保障）等技术组织安全域展开，而“同意管理与撤回”
属于第 7 条同意规则范畴，并非第 32 条安全处理所涵盖的安全域。知识点：第 32 条安全处理要求所涵盖
的技术组织安全维度及其与同意规则（第 7 条）的区分。`,topic:`GDPR`,verified:`accurate`},{id:117,question:`In the event of a data breach, which type of information are data controllers NOT required to provide to
either the supervisory authorities or the data subjects?`,options:[`A. The predicted consequences of the breach.`,`B. The measures being taken to address the breach.`,`C. The type of security safeguards used to protect the data.`,`D. The contact details of the appropriate data protection officer.`],correctAnswer:`C`,explanation:`正确答案 C。第 33、34 条要求控制者向监管机构/数据主体说明的信息包括：泄露性质、可能后果
（A）、已采取或将采取的补救措施（B）、DPO 联系方式（D）等，但并不要求详细披露“用于保护数据
所采用的具体安全防护技术类型”——出于安全考虑，过度公开具体安全技术细节反而可能带来二次安全
风险，因此法律未将此列为强制披露内容。知识点：第 33/34 条数据泄露通知内容清单及不要求披露具体
安全技术细节的考量。`,topic:`GDPR`,verified:`accurate`},{id:118,question:`In which case would a controller who has undertaken a DPIA most likely need to consult with a
supervisory authority?`,options:[`A. Where the DPIA identifies that personal data needs to be transferred to other countries outside of the EEA.`,`B. Where the DPIA identifies high risks to individuals’ rights and freedoms that the controller can take steps to reduce.`,`C. Where the DPIA identifies that the processing being proposed collects the sensitive data of EU citizens.`,`D. Where the DPIA identifies risks that will require insurance for protecting its business interests.`],correctAnswer:`无（B 仅在“无法充分降低风险”时才正确）`,explanation:`现行法下原四项没有完全正确的答案。GDPR 第 36(1) 条要求：DPIA 显示在控制者未采取措施降低风险的情况下，
拟议处理仍会造成高风险，或采取合理措施后仍存在无法充分降低的残余高风险，才须在处理前咨询监管机构。B
若把“the controller can take steps to reduce”改为“the controller cannot sufficiently reduce”，才是准确表述。`,topic:`GDPR`,verified:`corrected`},{id:119,question:`According to the GDPR, what is the main task of a Data Protection Officer (DPO)?`,options:[`A. To create and maintain records of processing activities.`,`B. To conduct Privacy Impact Assessments on behalf of the controller or processor.`,`C. To monitor compliance with other local or European data protection provisions.`,`D. To create procedures for notification of personal data breaches to competent supervisory authorities.`],correctAnswer:`C`,explanation:`正确答案 C。第 39(1)(b)条将“监督遵守 GDPR 及其他欧盟/成员国数据保护规定的情况”列为 DPO 的核心
任务之一。制作处理活动记录（A）、开展 DPIA（B，DPO 应就 DPIA 提供建议并监督其执行，但 DPIA
本身由控制者负责开展而非 DPO 代为执行）、制定数据泄露通知流程（D）均是 DPO 可能参与协助的具
体工作，但并非第 39 条概括性描述的“主要任务”本身，监督合规才是 DPO 最核心、最具概括性的职责。
知识点：第 39 条 DPO 的法定职责清单及“监督合规”这一核心任务。`,topic:`GDPR`,verified:`accurate`},{id:120,question:`In which of the following cases, cited as an example by a WP29 guidance, would conducting a single data
protection impact assessment to address multiple processing operations be allowed?`,options:[`A. A medical organization that wants to begin genetic testing to support earlier research for which they have performed a DPIA.`,`B. A data controller who plans to use a new technology product that has already undergone a DPIA by the product’s provider.`,`C. A marketing team that wants to collect mailing addresses of customers for whom they already have email addresses.`,`D. A railway operator who plans to evaluate the same video surveillance in all the train stations of his company.`],correctAnswer:`D`,explanation:`正确答案 D。WP29 DPIA 指南举例说明，当处理活动具有高度相似性（如同一铁路运营商在旗下所有车
站采用相同类型、相同用途的视频监控系统）时，可以针对该类同质化、大规模重复的处理操作开展一
份综合性 DPIA，而无需逐一评估。A（不同研究目的的新增基因检测项目）、B（依赖供应商已做的
DPIA 而非自行评估自身具体处理情境的风险，供应商的产品 DPIA 不能替代控制者自身的处理情境评
估）、C（收集新类别数据用于不同目的，非典型的“同质化重复处理”情形）均不符合 WP29 列举的“单
一 DPIA 覆盖多重处理”适用情形。知识点：WP29 DPIA 指南关于对相似、重复处理操作可合并评估的例
外规定。`,topic:`GDPR`,verified:`accurate`},{id:121,question:`Under Article 30 of the GDPR, controllers are required to keep records of all of the following EXCEPT?`,options:[`A. Incidents of personal data breaches, whether disclosed or not.`,`B. Data inventory or data mapping exercises that have been conducted.`,`C. Categories of recipients to whom the personal data have been disclosed.`,`D. Retention periods for erasure and deletion of categories of personal data.`],correctAnswer:`A、B（题目存在多解）`,explanation:`本题存在多解。GDPR 第 30(1) 条的法定记录内容包括处理目的、数据主体与数据类别、接收方类别、跨境传输、预
计删除期限及安全措施概述等。数据泄露事件记录属于第 33(5) 条的独立义务，因此 A 不属于第 30 条法定内容；
“已开展的数据盘点或数据映射活动”本身也不是第 30(1) 条要求必须写入记录的项目，因此 B 同样符合“EXCEPT”。
C、D 则属于第 30 条要求。`,topic:`GDPR`,verified:`corrected`},{id:122,question:`In which scenario is a Controller most likely required to undertake a Data Protection Impact Assessment?`,options:[`A. When the controller is collecting email addresses from individuals via an online registration form for marketing purposes.`,`B. When personal data is being collected and combined with other personal data to profile the creditworthiness of individuals.`,`C. When the controller is required to have a Data Protection Officer.`,`D. When personal data is being transferred outside of the EEA.`],correctAnswer:`B`,explanation:`正确答案 B。结合个人数据评估信用状况属于典型的“画像”评估个人经济状况、可靠性等方面特征的行
为，且往往涉及大规模、系统性评估并可能对个人产生重大法律或类似重大影响（如信贷决策），属于
WP29 DPIA 指南明确列举的高风险情形，须开展 DPIA。A（简单收集邮箱用于营销）、C（企业设有
DPO 本身并非 DPIA 触发条件）、D（跨境传输本身若非结合其他高风险因素，不必然触发 DPIA）均非
典型高风险情形。知识点：第 35(3)(a)条及 WP29 指南——大规模画像评估信用等重大决策场景须做
DPIA。`,topic:`GDPR`,verified:`accurate`},{id:123,question:`Which of the following demonstrates compliance with the accountability principle found in Article 5,
Section

2 of the GDPR?`,options:[`A. Anonymizing special categories of data.`,`B. Conducting regular audits of the data protection program.`,`C. Getting consent from the data subject for a cross border data transfer.`,`D. Encrypting data in transit and at rest using strong encryption algorithms. 6`],correctAnswer:`B`,explanation:`正确答案 B。第 5(2)条问责制原则要求控制者不仅要遵守数据保护原则，还须能够证明其合规，定期开展
数据保护项目内部审计正是主动证明并持续验证合规状态的典型问责制实践。A（匿名化特殊类别数据，
属于具体的数据最小化/安全技术措施而非问责制的直接体现）、C（获得跨境传输同意，属于合法依据/
传输机制层面）、D（加密静态和传输中数据，属于第 32 条安全措施）均是具体合规动作，而非“证明并
持续管理整体合规状态”这一问责制原则的典型例证。知识点：第 5(2)条问责制原则及其典型落地措施
（内部审计）。`,topic:`GDPR`,verified:`accurate`},{id:124,question:`SCENARIO

Please use the following to answer the next question:

Dynaroux Fashion (‘Dynaroux’) is a successful international online clothing retailer that employs
approximately 650 people at its headquarters based in Dublin, Ireland. Ronan is their recently appointed
data protection officer, who oversees the company’s compliance with the General Data Protection
Regulation (GDPR) and other privacy legislation.

The company offers both male and female clothing lines across all age demographics, including children.
In doing so, the company processes large amounts of information about such customers, including
preferences and sensitive financial information such as credit card and bank account numbers.

In an aggressive bid to build revenue growth, Jonas, the CEO, tells Ronan that the company is launching a
new mobile app and loyalty scheme that puts significant emphasis on profiling the company’s customers
by analyzing their purchases. Ronan tells the CEO that: (a) the potential risks of such activities means that
Dynaroux needs to carry out a data protection impact assessment to assess this new venture and its
privacy implications; and (b) where the results of this assessment indicate a high risk in the absence of
appropriate protection measures, Dynaroux may have to undertake a prior consultation with the Irish Data
Protection Commissioner before implementing the app and loyalty scheme.

Jonas tells Ronan that he is not happy about the prospect of having to directly engage with a supervisory
authority and having to disclose details of Dynaroux’s business plan and associated processing activities.

Which of the following facts about Dynaroux would trigger a data protection impact assessment under the
GDPR?`,options:[`A. The company will be undertaking processing activities involving sensitive data categories such as financial and children’s data.`,`B. The company employs approximately 650 people and will therefore be carrying out extensive processing activities.`,`C. The company plans to undertake profiling of its customers through analysis of their purchasing patterns.`,`D. The company intends to shift their business model to rely more heavily on online shopping.`],correctAnswer:`C`,explanation:`正确答案 C。基于购买行为分析对客户进行画像评估，属于第 35(3)(a)条列举的“系统性、广泛评估个人特
征以致对个人产生重大影响”情形，是触发 DPIA 的直接原因。A（涉及金融和儿童敏感数据类别，虽是
风险因素之一，但触发本题 DPIA 的关键情节是画像本身而非数据类别）、B（员工人数不是 DPIA 触发
标准）、D（商业模式转型不构成 DPIA 触发条件）均不是最直接、最贴切的触发因素。知识点：第
35(3)(a)条画像评估作为 DPIA 触发情形之一。`,topic:`GDPR`,verified:`accurate`},{id:125,question:`Which mechanism, new to the GDPR, now allows for the possibility of personal data transfers to third
countries under Article 42?`,options:[`A. Approved certifications.`,`B. Binding corporate rules.`,`C. Law enforcement requests.`,`D. Standard contractual clauses.`],correctAnswer:`A`,explanation:`正确答案 A。第 42 条引入的“认证机制”（approved certification，如获批的数据保护印章/标志）是 GDPR
新增的跨境传输保障工具之一（第 46(2)(f)条），使已获得认证并作出具有约束力承诺的数据接收方可依
此进行跨境传输。约束性企业规则（B）和标准合同条款（D）并非 GDPR 新创设的机制，二者在
95/46/EC 指令体系下已存在（BCRs 为 WP29 实践发展而来，SCCs 为欧盟委员会决定所创设），执法请
求（C）与跨境传输合法机制无关。知识点：第 42、46 条新增的“认证”作为跨境传输保障机制。`,topic:`历史沿革/95-46-EC`,verified:`accurate`},{id:126,question:`Which sentence best describes proper compliance for an international organization using Binding
Corporate Rules (BCRs) as a controller or processor?`,options:[`A. Employees must sign an ad hoc contractual agreement each time personal data is exported.`,`B. All employees are subject to the rules in their entirety, regardless of where the work is taking place.`,`C. All employees must follow the privacy regulations of the jurisdictions where the current scope of their work is established.`,`D. Employees who control personal data must complete a rigorous certification procedure, as they are exempt from legal enforcement.`],correctAnswer:`B`,explanation:`正确答案 B。约束性企业规则（BCRs）一经获批，即对企业集团内部所有相关实体及其员工具有统一约
束力，无论其身处哪个司法管辖区，都须遵守同一套集团内部规则，这正是 BCRs 作为“全球统一方案”的
核心特征。A（每次数据出境须单独签订临时合同，与 BCRs“一次审批、持续适用”的特性相悖）、C
（须遵守其所在辖区隐私法规，混淆了 BCRs 作为集团内部统一标准与各地本地法律遵从的关系）、D
（可豁免法律责任，明显错误，BCRs 并不豁免任何法定义务或责任）均不准确。知识点：约束性企业规
则（BCRs）对企业集团内部的统一约束效力。`,topic:`GDPR`,verified:`accurate`},{id:127,question:`With respect to international transfers of personal data, the European Data Protection Board (EDPB)
confirmed that derogations may be relied upon under what condition?`,options:[`A. If the data controller has received preapproval from a Data Protection Authority (DPA), after submitting the appropriate documents.`,`B. When it has been determined that adequate protection can be performed.`,`C. Only if the Data Protection Impact Assessment (DPIA) shows low risk.`,`D. Only as a last resort and when interpreted restrictively.`],correctAnswer:`D`,explanation:`正确答案 D。欧洲法院 Schrems II 判决后，EDPB 在其关于第 49 条克减条款（derogations，如明确同意、
合同必需等）的常见问题解答中强调：这些克减情形应作为跨境传输的“最后手段”（last resort），且须严
格限缩解释，不能作为常规传输机制的替代。A（须 DPA 事先批准，非法定要求）、B（存在“充分保护”
的判断，恰恰与克减条款适用于缺乏适当保障机制情形下的例外性质相悖）、C（DPIA 显示低风险，非
第 49 条的判断标准）均不准确。知识点：第 49 条克减条款的“最后手段”属性及限缩解释原则（Schrems
II 判决后 EDPB 指引）。`,topic:`判例法`,verified:`accurate`},{id:128,question:`SCENARIO

Please use the following to answer the next question:

T-Craze, a German-headquartered specialty t-shirt company, was successfully selling to large German
metropolitan cities. However, after a recent merger with another German-based company that was selling
to a broader European market, T-Craze revamped its marketing efforts to sell to a wider audience. These
efforts included a complete redesign of its logo to reflect the recent merger, and improvements to its
website meant to capture more information about visitors through the use of cookies.

T-Craze also opened various office locations throughout Europe to help expand its business. While
Germany continued to host T-Craze’s headquarters and main product-design office, its French affiliate
became responsible for all marketing and sales activities. The French affiliate recently procured the
services of Right Target, a renowned marketing firm based in the Philippines, to run its latest marketing
campaign. After thorough research, Right Target determined that T-Craze is most successful with
customers between the ages of 18 and 22. Thus, its first campaign targeted university students in several
European capitals, which yielded nearly 40% new customers for T-Craze in one quarter. Right Target also
ran subsequent campaigns for T-Craze, though with much less success.

The last two campaigns included a wider demographic group and resulted in countless unsubscribe

requests, including a large number in Spain. In fact, the Spanish data protection authority received a

complaint from Sofia, a mid-career investment banker. Sofia was upset after receiving a marketing
communication even after unsubscribing from such communications from the Right Target on behalf of T-
Craze.

Which of the following is T-Craze’s lead supervisory authority?`,options:[`A. Germany, because that is where T-Craze is headquartered.`,`B. France, because that is where T-Craze conducts processing of personal information.`,`C. Spain, because that is T-Craze’s primary market based on its marketing campaigns.`,`D. T-Craze may choose its lead supervisory authority where any of its affiliates are based, because it has presence in several European countries.`],correctAnswer:`B`,explanation:`正确答案 B。主导监管机构的认定核心标准是控制者“主要设立地”，即实际作出关于处理目的和方式决策
的地点（第 4(16)条）；本案中，T-Craze 的营销和销售决策实际由其法国分支负责，即实际处理决策发生
地在法国，因此法国监管机构（CNIL）为主导监管机构，而非仅因总部所在地德国（A）、市场规模较
大的西班牙（C）或可任意选择（D，主要设立地须依据实际决策地这一客观标准确定，而非企业自由选
择）。知识点：第 4(16)条主导监管机构认定标准——实际处理决策地而非总部注册地。`,topic:`ePrivacy指令`,verified:`accurate`},{id:129,question:`SCENARIO

Please use the following to answer the next question:

T-Craze, a German-headquartered specialty t-shirt company, was successfully selling to large German
metropolitan cities. However, after a recent merger with another German-based company that was selling
to a broader European market, T-Craze revamped its marketing efforts to sell to a wider audience. These
efforts included a complete redesign of its logo to reflect the recent merger, and improvements to its
website meant to capture more information about visitors through the use of cookies.

T-Craze also opened various office locations throughout Europe to help expand its business. While
Germany continued to host T-Craze’s headquarters and main product-design office, its French affiliate

became responsible for all marketing and sales activities. The French affiliate recently procured the
services of Right Target, a renowned marketing firm based in the Philippines, to run its latest marketing
campaign. After thorough research, Right Target determined that T-Craze is most successful with
customers between the ages of 18 and 22. Thus, its first campaign targeted university students in several
European capitals, which yielded nearly 40% new customers for T-Craze in one quarter. Right Target also
ran subsequent campaigns for T-Craze, though with much less success.

The last two campaigns included a wider demographic group and resulted in countless unsubscribe
requests, including a large number in Spain. In fact, the Spanish data protection authority received a
complaint from Sofia, a mid-career investment banker. Sofia was upset after receiving a marketing
communication even after unsubscribing from such communications from the Right Target on behalf of T-

Craze.

Why does the Spanish supervisory authority notify the French supervisory authority when it opens an
investigation into T-Craze based on Sofia’s complaint?`,options:[`A. T-Craze has a French affiliate.`,`B. The French affiliate procured the services of Right Target.`,`C. T-Craze conducts its marketing and sales activities in France.`,`D. The Spanish supervisory authority is providing a courtesy notification not required under the GDPR.`],correctAnswer:`B`,explanation:`正确答案 B。西班牙监管机构收到投诉后通知法国监管机构，是因为根据第 56(3)条一站式合作机制，涉
及跨境处理的投诉应转交由主导监管机构（本案为法国 CNIL，因其负责该处理活动的决策）处理，而
Right Target 受法国分支委托开展了该营销活动，说明处理决策与法国存在关联，因此触发向法国通知的
合作程序。A（仅因有法国分支的事实本身不足以说明理由）、C（营销活动实际是在法国分支决策下开
展的，而非“T-Craze 在法国开展营销销售活动”这一泛泛表述）、D（并非“礼貌性通知”，而是法定的一
站式合作程序要求）均不如 B 准确。知识点：第 56 条一站式合作机制下跨境投诉向主导监管机构转交的
程序。`,topic:`ePrivacy指令`,verified:`accurate`},{id:130,question:`SCENARIO

Please use the following to answer the next question:

T-Craze, a German-headquartered specialty t-shirt company, was successfully selling to large German

metropolitan cities. However, after a recent merger with another German-based company that was selling
to a broader European market, T-Craze revamped its marketing efforts to sell to a wider audience. These
efforts included a complete redesign of its logo to reflect the recent merger, and improvements to its
website meant to capture more information about visitors through the use of cookies.

T-Craze also opened various office locations throughout Europe to help expand its business. While
Germany continued to host T-Craze’s headquarters and main product-design office, its French affiliate
became responsible for all marketing and sales activities. The French affiliate recently procured the
services of Right Target, a renowned marketing firm based in the Philippines, to run its latest marketing
campaign. After thorough research, Right Target determined that T-Craze is most successful with
customers between the ages of 18 and 22. Thus, its first campaign targeted university students in several
European capitals, which yielded nearly 40% new customers for T-Craze in one quarter. Right Target also
ran subsequent campaigns for T-Craze, though with much less success.

The last two campaigns included a wider demographic group and resulted in countless unsubscribe
requests, including a large number in Spain. In fact, the Spanish data protection authority received a
complaint from Sofia, a mid-career investment banker. Sofia was upset after receiving a marketing
communication even after unsubscribing from such communications from the Right Target on behalf of T-
Craze.

What is the best option for the lead regulator when responding to the Spanish supervisory authority’s
notice that it plans to take action regarding Sofia’s complaint?`,options:[`A. Accept, because it did not receive any complaints.`,`B. Accept, because GDPR permits non-lead authorities to take action for such complaints.`,`C. Reject, because Right Target’s processing was conducted throughout Europe.`,`D. Reject, because GDPR does not allow other supervisory authorities to take action if there is a lead authority.`],correctAnswer:`B`,explanation:`正确答案 B。GDPR 并未赋予主导监管机构对所有跨境投诉案件的绝对排他管辖权；对于具有纯粹本地影
响、仅涉及本地设立机构且不实质影响其他成员国数据主体的投诉，非主导监管机构（此处为西班牙监
管机构）依第 56(2)条仍可自行处理，主导监管机构应予接受（accept）而非拒绝，这体现了一站式机制
“仅适用于跨境处理”的边界。A、C、D 均误解了一站式机制关于本地事项处理权限保留的规则。知识
点：第 56(2)条“仅本地影响”例外——非主导监管机构对纯粹本地投诉的处理权限。`,topic:`ePrivacy指令`,verified:`accurate`},{id:131,question:`Which of the following is one of the supervisory authority’s investigative powers?`,options:[`A. To notify the controller or the processor of an alleged infringement of the GDPR.`,`B. To require that controllers or processors adopt approved data protection certification mechanisms.`,`C. To determine whether a controller or processor has the right to a judicial remedy concerning a compensation decision made against them.`,`D. To require data controllers to provide them with written notification of all new processing activities.`],correctAnswer:`A`,explanation:`正确答案 A。第 58(1)条列明监管机构的调查权，包括：要求提供信息、开展数据保护审计、访问处理场
所设备、以及就涉嫌违反 GDPR 的情况向控制者/处理者发出通知等。B（要求采纳认证机制）属于第
58(3)条的“授权权力”而非调查权；C（裁定司法救济权，属于法院职权而非监管机构调查权）；D（要求
就所有新处理活动提交书面通知，GDPR 已废除一般性通知义务）均不属于第 58(1)条调查权范畴。知识
点：第 58 条监管机构三类职权——调查权、更正权、授权权的区分。`,topic:`GDPR`,verified:`accurate`},{id:132,question:`Many businesses print their employees’ photographs on building passes, so that employees can be
identified by security staff. This is notwithstanding the fact that facial images potentially qualify as biometric
data under the GDPR. Why would such practice be permitted?`,options:[`A. Because use of biometric data to confirm the unique identification of data subjects benefits from an exemption.`,`B. Because photographs qualify as biometric data only when they undergo a “specific technical processing”.`,`C. Because employees are deemed to have given their explicit consent when they agree to be photographed by their employer.`,`D. Because photographic ID is a physical security measure which is “necessary for reasons of substantial public interest”.`],correctAnswer:`B`,explanation:`正确答案 B。前言第 51 条及第 9 条明确，只有照片经过“特定技术处理”（specific technical processing，如
面部识别算法提取生物特征模板）以实现对个人的唯一识别或验证，才构成生物识别特殊类别数据；企
业门禁卡上普通打印的照片仅用于人工目视识别，未经过此类特定技术处理，因此不构成第 9 条意义上
的生物识别数据，无需援引特殊类别数据处理的例外。A（笼统的“豁免”表述不准确）、C（默示同意的
说法不成立，未必构成有效同意）、D（“重大公共利益”例外通常适用于更严格的场景，非普通门禁照片
的准确依据）均不如 B 准确抓住问题核心。知识点：前言第 51 条“特定技术处理”作为区分普通照片与生
物识别数据的关键标准。`,topic:`GDPR`,verified:`accurate`},{id:133,question:`A worker in a European Union (EU) member state has ceased his employment with a company. What
should the employer most likely do in regard to the worker’s personal data?`,options:[`A. Destroy sensitive information and store the rest per applicable data protection rules.`,`B. Store all of the data in case the departing worker makes a subject access request.`,`C. Securely store the data that is required to be kept under local law.`,`D. Provide the employee the reasons for retaining the data.`],correctAnswer:`C`,explanation:`正确答案 C。员工离职后，雇主应依据存储限制原则（第 5(1)(e)条），仅保留依据当地劳动法、税法等
法律法规要求必须留存的数据（如社保记录、税务记录等），并依法定期限保存，而非无限期保留所有
数据（B）、简单区分“敏感与否”笼统处理（A，并非法定的处理标准）或需向员工说明留存理由（D，
非普遍强制的操作要求，尽管良好实践中告知留存政策是有益的）。知识点：第 5(1)(e)条存储限制原则
在员工离职后数据处理中的应用。`,topic:`GDPR`,verified:`accurate`},{id:134,question:`Which of the following is NOT a role of works councils?`,options:[`A. Determining the monetary fines to be levied against employers for data breach violations of employee data.`,`B. Determining whether to approve or reject certain decisions of the employer that affect employees.`,`C. Determining whether employees’ personal data can be processed or not.`,`D. Determining what changes will affect employee working conditions.`],correctAnswer:`A`,explanation:`正确答案 A。雇员代表机构（works council）依据劳动法在涉及影响员工权益的决策（如引入新的员工监
控系统、处理员工个人数据的政策，B、C、D 均是其常见职权范围）中享有知情、协商甚至否决权，但
对违反数据保护法的行政罚款金额认定和裁量属于监管机构和/或法院的法定职权，并非工会/员工代表机
构的角色。知识点：员工代表机构（Works Council）在数据保护相关事务中的协商/审批角色，及其与监
管机构行政处罚权的区分。`,topic:`GDPR`,verified:`accurate`},{id:135,question:`Under the Data Protection Law Enforcement Directive of the EU, a government can carry out covert
investigations involving personal data, as long it is set forth by law and constitutes a measure that is both
necessary and what?`,options:[`A. Prudent.`,`B. Important.`,`C. Proportionate.`,`D. DPA-approved.`],correctAnswer:`C`,explanation:`正确答案 C。欧盟执法指令（Law Enforcement Directive）及其他涉及国家安全/执法领域的欧盟法律框架
普遍要求，任何限制隐私权的措施（包括秘密调查）须同时满足“必要性”和“比例性”（proportionate）两
项条件，这也是欧盟基本权利宪章第 52(1)条对权利限制的一般要求。A（审慎）、B（重要）、D（须经
DPA 批准）均非该法律框架下的标准用语和要求。知识点：欧盟基本权利限制的比例原则要求，执法指
令下秘密调查的合法性条件。`,topic:`LED执法指令`,verified:`accurate`},{id:136,question:`Which GDPR requirement will present the most significant challenges for organizations with Bring Your

Own Device (BYOD) programs?`,options:[`A. Data subjects must be sufficiently informed of the purposes for which their personal data is processed.`,`B. Processing of special categories of personal data on a large scale requires appointing a DPO.`,`C. Personal data of data subjects must always be accurate and kept up to date.`,`D. Data controllers must be in control of the data they hold at all times.`],correctAnswer:`D`,explanation:`正确答案 D。BYOD 环境下，个人数据分散存储在员工自有设备中，企业往往难以像管理企业统一设备
那样，随时掌控数据的存储位置、访问权限及安全状况，这对“控制者须始终掌控其所持有数据”这一核心
合规要求（呼应问责制及安全原则）构成最大挑战。A（透明度告知）、B（大规模处理特殊类别数据须
设 DPO，与 BYOD 本身无直接必然关联）、C（准确性原则）相对而言不是 BYOD 场景下最突出的合规
难点。知识点：BYOD 环境下数据控制力与安全管理的合规挑战。`,topic:`GDPR`,verified:`accurate`},{id:137,question:`A company in France suffers a robbery over the weekend owing to a faulty alarm system. When it is
determined that the break-in involves the loss of a substantial amount of data, the company decides on a
CCTV system to monitor for future incidents. Company technicians install cameras in the entrance of the
building, hallways and offices. Footage is recorded continuously, and is monitored by the home office in
the United States. What is the most realistic step the company could take to address their security
concerns and comply with the personal data processing principles set out in Article 5 of the GDPR?`,options:[`A. Seek informed consent from company employees.`,`B. Have cameras recording during work hours only.`,`C. Retain captured footage for no more than 30 days.`,`D. Restrict camera placement to building entrances only.`],correctAnswer:`D`,explanation:`正确答案 D。依据数据最小化原则（第 5(1)(c)条），CCTV 监控应限于实现安全目的所必需的范围；本案
中安全隐患源于入室盗窃，将摄像头限制安装在建筑入口等关键出入位置即可满足安防需求，无需在办
公室、走廊等非必要区域全面持续监控（这会造成过度监控，侵犯员工隐私）。A（笼统寻求员工同意，
在雇佣关系权力不对等下并非合适的合法依据，也非该场景下的“现实”解决方案）、B（仅工作时间录
像，与防范周末此类非工作时间入室盗窃的安全目的相悖）、C（留存不超过 30 天，属于留存期限问题
而非本题聚焦的“数据最小化-摄像头布设范围”问题）均不如 D 贴切。知识点：第 5(1)(c)条数据最小化原
则在 CCTV 监控范围设计中的应用。`,topic:`GDPR`,verified:`accurate`},{id:138,question:`Which of the following is an example of direct marketing that would be subject to European data protection
laws?`,options:[`A. An updated privacy notice sent to an individual’s personal email address.`,`B. A charity fundraising event notice sent to an individual at her business address.`,`C. A service outage notification provided to an individual by recorded telephone message.`,`D. A revision of contract terms conveyed to an individual by SMS from a marketing organization.`],correctAnswer:`B`,explanation:`正确答案 B。以个人身份（而非仅工作身份）向个人商业地址寄送慈善筹款活动通知，属于以说服个人
参与/捐赠为目的的直接营销信息，落入欧盟数据保护及 ePrivacy 规则对直接营销的规制范围。A（隐私
政策更新，属于合规告知而非营销）、C（服务中断通知，属于服务性/事务性通信，非营销）、D（合同
条款变更通知，同样属于服务性通知）均不构成“直接营销”性质的信息。知识点：直接营销的认定标准—
—以说服个人购买/参与为目的的商业性信息，区别于服务性/事务性通信。`,topic:`ePrivacy指令`,verified:`accurate`},{id:139,question:`Article 9 of the GDPR lists exceptions to the general prohibition against processing biometric data. Which
of the following is NOT one of these exceptions?`,options:[`A. The processing is done by a non-profit organization and the results are disclosed outside the organization.`,`B. The processing is necessary to protect the vital interests of the data subject when he or she is incapable of giving consent.`,`C. The processing is necessary for the establishment, exercise or defense of legal claims when courts are acting in a judicial capacity.`,`D. The processing is explicitly consented to by the data subject and he or she is allowed by Union or Member State law to lift the prohibition.`],correctAnswer:`A`,explanation:`正确答案 A。第 9(2)条列举的处理生物识别等特殊类别数据的例外情形包括：数据主体明确同意且法律允
许（D）、保护数据主体重大利益（B）、司法程序中确立/行使/抗辩法律权利（C）、以及公共利益、就
业社保、医疗卫生、科研统计等具体法定情形，但并未包括“非营利组织处理后向组织外部披露结果”这一
情形——非营利组织身份本身不构成脱离第 9 条限制的独立例外依据。知识点：第 9(2)条特殊类别数据处
理例外情形的封闭列举，非营利组织身份本身不构成豁免理由。`,topic:`GDPR`,verified:`accurate`},{id:140,question:`Which marketing-related activity is least likely to be covered by the provisions of Privacy and Electronic
Communications Regulations (Directive 2002/58/EC)?`,options:[`A. Advertisements passively displayed on a website.`,`B. The use of cookies to collect data about an individual.`,`C. A text message to individuals from a company offering concert tickets for sale.`,`D. An email from a retail outlet promoting a sale to one of their previous customer.`],correctAnswer:`A`,explanation:`正确答案 A。ePrivacy 指令（2002/58/EC，及后续修订）主要规制通过电子通信手段（如电话、短信、邮
件、cookie 等）针对特定个人进行的直接营销和电子通信隐私事项；网站上被动展示、面向所有访客的一
般性广告展示（并非针对特定个人发送的定向通信），通常不落入该指令关于直接营销同意规则的规制
范围（可能受其他广告或 cookie 相关规则约束，但非典型的“直接营销通信”）。B（cookie 追踪，属于
ePrivacy 核心规制对象）、C（短信营销）、D（邮件营销，均属于典型的电子直接营销通信）均受该指
令规制。知识点：ePrivacy 指令对直接营销电子通信的规制范围及被动展示广告与定向通信的区分。`,topic:`ePrivacy指令`,verified:`accurate`},{id:141,question:`Which of the following is NOT recognized as being a common characteristic of cloud-computing services?`,options:[`A. The service’s infrastructure is shared among the supplier’s customers and can be located in a number of countries.`,`B. The supplier determines the location, security measures, and service standards applicable to the processing.`,`C. The supplier allows customer data to be transferred around the infrastructure according to capacity.`,`D. The supplier assumes the vendor’s business risk associated with data processed by the supplier.`],correctAnswer:`D`,explanation:`正确答案 D。云计算服务的典型特征包括：基础设施在多个客户间共享且可能跨多国分布（A）、由云服
务商决定基础设施位置及部分安全标准（B）、数据可根据资源容量在基础设施间灵活迁移（C），但云
服务商作为处理者（或在特定情形下的控制者）通常不会因此“承担”客户企业作为控制者对其处理活动所
负的整体业务风险与法律责任——责任划分仍依双方合同及各自角色（控制者/处理者）确定，供应商并
不天然“接手”客户的业务风险。知识点：云计算服务的一般特征及云服务商与客户之间的责任划分（并非
风险转移）。`,topic:`GDPR`,verified:`accurate`},{id:142,question:`When may browser settings be relied upon for the lawful application of cookies?`,options:[`A. When a user rejects cookies that are strictly necessary.`,`B. When users are aware of the ability to adjust their settings.`,`C. When users are provided with information about which cookies have been set.`,`D. When it is impossible to bypass the choices made by users in their browser settings.`],correctAnswer:`D`,explanation:`正确答案 D。ICO 指引指出，若技术上用户在浏览器中所做的 cookie 选择设置能够被网站可靠地读取并
严格遵从（即网站无法绕过用户设置擅自放置 cookie），浏览器设置理论上可作为合法获取同意的手段
之一；但由于目前技术上难以保证网站始终准确识别并完全遵从各类浏览器设置，实践中很少能真正满
足这一条件。A（拒绝严格必要 cookie，与合法性判断无关，严格必要 cookie 本就无需同意）、B（用户
知晓可调整设置，仅是必要条件之一，不充分）、C（被告知已设置哪些 cookie，同样只是透明度层面的
部分要求）均不完整。知识点：浏览器设置作为 cookie 同意机制的有效性条件——须确保用户选择不可
被绕过。`,topic:`ePrivacy指令`,verified:`accurate`},{id:143,question:`SCENARIO

Please use the following to answer the next question:

The fitness company Vigotron has recently developed a new app called M-Health, which it wants to market

on its website as a free download. Vigotron’s marketing manager asks his assistant Emily to create a

webpage that describes the app and specifies the terms of use. Emily, who is new at Vigotron, is excited
about this task. At her previous job she took a data protection class, and though the details are a little

hazy, she recognizes that Vigotron is going to need to obtain user consent for use of the app in some

cases. Emily sketches out the following draft, trying to cover as much as possible before sending it to
Vigotron’s legal department.

Registration Form

Vigotron’s new M-Health app makes it easy for you to monitor a variety of health-related activities,
including diet, exercise, and sleep patterns. M-Health relies on your smartphone settings (along with other
third-party apps you may already have) to collect data about all of these important lifestyle elements, and
provide the information necessary for you to enrich your quality of life. (Please click here to read a full
description of the services that M-Health provides.)

Vigotron values your privacy. The M-Health app allows you to decide which information is stored in it, and
which apps can access your data. When your device is locked with a passcode, all of your health and
fitness data is encrypted with your passcode. You can back up data stored in the Health app to Vigotron’s

cloud provider, Stratculous. (Read more about Stratculous here.)

Vigotron will never trade, rent or sell personal information gathered from the M-Health app. Furthermore,
we will not provide a customer’s name, email address or any other information gathered from the app to
any third-party without a customer’s consent, unless ordered by a court, directed by a subpoena, or to
enforce the manufacturer’s legal rights or protect its business or property.

We are happy to offer the M-Health app free of charge. If you want to download and use it, we ask that you
first complete this registration form. (Please note that use of the M-Health app is restricted to adults aged
16 or older, unless parental consent has been given to minors intending to use it.)

First name:
Surname:
Year of birth:
Email:

Physical Address (optional*):
Health status:

*If you are interested in receiving newsletters about our products and services that we think may be of
interest to you, please include your physical address. If you decide later that you do not wish to receive
these newsletters, you can unsubscribe by sending an email to unsubscribe@vigotron.com or send a letter
with your request to the address listed at the bottom of this page.

Terms and Conditions

1. Jurisdiction. […]
2. Applicable law. […]
3. Limitation of liability. […]

Consent

By completing this registration form, you attest that you are at least 16 years of age, and that you consent
to the processing of your personal data by Vigotron for the purpose of using the M-Health app. Although
you are entitled to opt out of any advertising or marketing, you agree that Vigotron may contact you or
provide you with any required notices, agreements, or other information concerning the services by email
or other electronic means. You also agree that the Company may send automated emails with alerts
regarding any problems with the M-Health app that may affect your well being.

Emily sends the draft to Sam for review. Which of the following is Sam most likely to point out as the
biggest problem with Emily’s consent provision?`,options:[`A. It is not legal to include fields requiring information regarding health status without consent.`,`B. Processing health data requires explicit consent, but the form does not ask for explicit consent.`,`C. Direct marketing requires explicit consent, whereas the registration form only provides for a right to object`,`D. The provision of the fitness app should be made conditional on the consent to the data processing for direct marketing.`],correctAnswer:`B`,explanation:`正确答案 B。健康数据属于第 9 条特殊类别数据，处理须取得“明确同意”（explicit consent），而 Emily
起草的注册表格仅笼统地要求用户“同意处理个人数据以使用 App”，并未针对健康状况这一特殊类别数据
单独征求符合更高标准的明确同意，这是最大的合规漏洞。A（健康状况字段本身收集并无不合法，只是
需明确同意）、C（表述不准确，题目更核心问题在于健康数据同意标准而非营销同意机制本身的对
错）、D（将服务提供与营销同意捆绑属另一违规问题，但非 Sam 最先指出的“最大”问题）均不如 B 贴
切。知识点：第 9(2)(a)条特殊类别数据的“明确同意”标准，区别于一般处理的普通同意。`,topic:`GDPR`,verified:`accurate`},{id:144,question:`SCENARIO

Please use the following to answer the next question:

The fitness company Vigotron has recently developed a new app called M-Health, which it wants to market
on its website as a free download. Vigotron’s marketing manager asks his assistant Emily to create a
webpage that describes the app and specifies the terms of use. Emily, who is new at Vigotron, is excited
about this task. At her previous job she took a data protection class, and though the details are a little
hazy, she recognizes that Vigotron is going to need to obtain user consent for use of the app in some
cases. Emily sketches out the following draft, trying to cover as much as possible before sending it to
Vigotron’s legal department.

Registration Form

Vigotron’s new M-Health app makes it easy for you to monitor a variety of health-related activities,
including diet, exercise, and sleep patterns. M-Health relies on your smartphone settings (along with other
third-party apps you may already have) to collect data about all of these important lifestyle elements, and
provide the information necessary for you to enrich your quality of life. (Please click here to read a full
description of the services that M-Health provides.)

Vigotron values your privacy. The M-Health app allows you to decide which information is stored in it, and
which apps can access your data. When your device is locked with a passcode, all of your health and

fitness data is encrypted with your passcode. You can back up data stored in the Health app to Vigotron’s
cloud provider, Stratculous. (Read more about Stratculous here.)

Vigotron will never trade, rent or sell personal information gathered from the M-Health app. Furthermore,
we will not provide a customer’s name, email address or any other information gathered from the app to
any third-party without a customer’s consent, unless ordered by a court, directed by a subpoena, or to
enforce the manufacturer’s legal rights or protect its business or property.

We are happy to offer the M-Health app free of charge. If you want to download and use it, we ask that you

first complete this registration form. (Please note that use of the M-Health app is restricted to adults aged
16 or older, unless parental consent has been given to minors intending to use it.)

First name:
Surname:
Year of birth:
Email:
Physical Address (optional*):
Health status:

*If you are interested in receiving newsletters about our products and services that we think may be of
interest to you, please include your physical address. If you decide later that you do not wish to receive
these newsletters, you can unsubscribe by sending an email to unsubscribe@vigotron.com or send a letter
with your request to the address listed at the bottom of this page.

Terms and Conditions

1. Jurisdiction. […]
2. Applicable law. […]
3. Limitation of liability. […]

Consent

By completing this registration form, you attest that you are at least 16 years of age, and that you consent

to the processing of your personal data by Vigotron for the purpose of using the M-Health app. Although
you are entitled to opt out of any advertising or marketing, you agree that Vigotron may contact you or

provide you with any required notices, agreements, or other information concerning the services by email
or other electronic means. You also agree that the Company may send automated emails with alerts
regarding any problems with the M-Health app that may affect your well being.

If a user of the M-Health app were to decide to withdraw his consent, Vigotron would first be required to do
what?`,options:[`A. Provide the user with logs of data collected through use of the app.`,`B. Erase any data collected from the time the app was first used.`,`C. Inform any third parties of the user’s withdrawal of consent.`,`D. Cease processing any data collected through use of the app.`],correctAnswer:`D`,explanation:`正确答案 D。第 7(3)条规定，同意撤回后，控制者应立即停止基于该同意的处理活动，这是撤回同意后的
首要、直接义务。删除既往收集的数据（B）、告知第三方（C）、提供数据日志（A）可能是后续需要
考虑的事项，但并非撤回同意后“首先”必须履行的义务，停止处理才是第一步。知识点：第 7(3)条同意撤
回后控制者的首要义务——立即停止处理。`,topic:`GDPR`,verified:`accurate`},{id:145,question:`SCENARIO

Please use the following to answer the next question:

The fitness company Vigotron has recently developed a new app called M-Health, which it wants to market
on its website as a free download. Vigotron’s marketing manager asks his assistant Emily to create a
webpage that describes the app and specifies the terms of use. Emily, who is new at Vigotron, is excited
about this task. At her previous job she took a data protection class, and though the details are a little

hazy, she recognizes that Vigotron is going to need to obtain user consent for use of the app in some
cases. Emily sketches out the following draft, trying to cover as much as possible before sending it to
Vigotron’s legal department.

Registration Form

Vigotron’s new M-Health app makes it easy for you to monitor a variety of health-related activities,
including diet, exercise, and sleep patterns. M-Health relies on your smartphone settings (along with other
third-party apps you may already have) to collect data about all of these important lifestyle elements, and
provide the information necessary for you to enrich your quality of life. (Please click here to read a full
description of the services that M-Health provides.)

Vigotron values your privacy. The M-Health app allows you to decide which information is stored in it, and
which apps can access your data. When your device is locked with a passcode, all of your health and
fitness data is encrypted with your passcode. You can back up data stored in the Health app to Vigotron’s
cloud provider, Stratculous. (Read more about Stratculous here.)

Vigotron will never trade, rent or sell personal information gathered from the M-Health app. Furthermore,
we will not provide a customer’s name, email address or any other information gathered from the app to
any third-party without a customer’s consent, unless ordered by a court, directed by a subpoena, or to
enforce the manufacturer’s legal rights or protect its business or property.

We are happy to offer the M-Health app free of charge. If you want to download and use it, we ask that you
first complete this registration form. (Please note that use of the M-Health app is restricted to adults aged
16 or older, unless parental consent has been given to minors intending to use it.)

First name:
Surname:
Year of birth:

Email:

Physical Address (optional*):
Health status:

*If you are interested in receiving newsletters about our products and services that we think may be of

interest to you, please include your physical address. If you decide later that you do not wish to receive

these newsletters, you can unsubscribe by sending an email to unsubscribe@vigotron.com or send a letter
with your request to the address listed at the bottom of this page.

Terms and Conditions

1. Jurisdiction. […]
2. Applicable law. […]
3. Limitation of liability. […]

Consent

By completing this registration form, you attest that you are at least 16 years of age, and that you consent
to the processing of your personal data by Vigotron for the purpose of using the M-Health app. Although
you are entitled to opt out of any advertising or marketing, you agree that Vigotron may contact you or
provide you with any required notices, agreements, or other information concerning the services by email
or other electronic means. You also agree that the Company may send automated emails with alerts
regarding any problems with the M-Health app that may affect your well being.

What is one potential problem Vigotron’s age policy might encounter under the GDPR?`,options:[`A. Age restrictions are more stringent when health data is involved.`,`B. Users are only required to be aged 13 or over to be considered adults.`,`C. Organizations must make reasonable efforts to verify parental consent.`,`D. Organizations that tie a service to marketing must seek consent for each purpose.`],correctAnswer:`C`,explanation:`正确答案 C。第 8 条规定，向儿童提供信息社会服务时，若儿童低于同意年龄门槛（各成员国 13-16 岁不
等），控制者须“尽合理努力”核实监护人同意的真实性（并需考虑当时可用技术），Vigotron 的表格仅要
求用户自行勾选确认年满 16 岁或已获监护人同意，并未采取任何核实监护人同意真实性的合理措施，这
构成潜在合规漏洞。A（健康数据不改变儿童同意年龄门槛的一般规则）、B（GDPR 下儿童同意年龄门
槛可低至 13 岁，但并非“13 岁即视为成年”这一表述准确）、D（“按各目的分别征求同意”是同意具体性
的一般要求，但非本题聚焦的年龄政策问题）均不如 C 准确。知识点：第 8 条儿童同意年龄门槛及监护
人同意的合理核实义务。`,topic:`GDPR`,verified:`accurate`},{id:146,question:`SCENARIO

Please use the following to answer the next question

Louis, a long-time customer of Bedrock Insurance, was involved in a minor car accident a few months ago.
Although no one was hurt, Louis has been plagued by texts and calls from a company called Accidentable
offering to help him recover compensation for personal injury. Louis has heard about insurance companies
selling customers’ data to third parties, and he’s convinced that Accidentable must have gotten his

information from Bedrock Insurance.

Louis has also been receiving an increased amount of marketing information from Bedrock, trying to sell
him their full range of their insurance policies.

Perturbed by this, Louis has started looking at price comparison sites on the internet and has been
shocked to find that other insurers offer much cheaper rates than Bedrock, even though he has been a
loyal customer for many years. When his Bedrock policy comes up for renewal, he decides to switch to
Zantrum Insurance.

In order to activate his new insurance policy, Louis needs to supply Zantrum with information about his No
Claims bonus, his vehicle and his driving history. After researching his rights under the GDPR, he writes to
ask Bedrock to transfer his information directly to Zantrum. He also takes this opportunity to ask Bedrock
to stop using his personal data for marketing purposes.

Bedrock supplies Louis with a PDF and XML (Extensible Markup Language) versions of his No Claims
Certificate, but tells Louis it cannot transfer his data directly to Zantrum as this is not technically feasible.

Bedrock also explains that Louis’s contract included a provision whereby Louis agreed that his data could

be used for marketing purposes; according to Bedrock, it is too late for Louis to change his mind about
this. It angers Louis when he recalls the wording of the contract, which was filled with legal jargon and very
confusing.

In the meantime, Louis is still receiving unwanted calls from Accidentable Insurance. He writes to

Accidentable to ask for the name of the organization that supplied his details to them. He warns 6
Accidentable that he plans to complain to the data protection authority, because he thinks their company
has been using his data unlawfully. His letter states that he does not want his data being used by them in
any way.

Accidentable’s response letter confirms Louis’s suspicions. Accidentable is Bedrock Insurance’s wholly
owned subsidiary, and they received information about Louis’s accident from Bedrock shortly after Louis
submitted his accident claim. Accidentable assures Louis that there has been no breach of the GDPR, as
Louis’s contract included, a provision in which he agreed to share his information with Bedrock’s affiliates
for business purposes.

Louis is disgusted by the way in which he has been treated by Bedrock, and writes to them insisting that all
his information be erased from their computer system.

Based on the GDPR’s position on the use of personal data for direct marketing purposes, which of the
following is true about Louis’s rights as a data subject?`,options:[`A. Louis does not have the right to object to the use of his data because he previously consented to it.`,`B. Louis has the right to object at any time to the use of his data and Bedrock must honor his request to cease use.`,`C. Louis has the right to object to the use of his data, unless his data is required by Bedrock for the purpose of exercising a legal claim.`,`D. Louis does not have the right to object to the use of his data if Bedrock can demonstrate compelling legitimate grounds for the processing.`],correctAnswer:`B`,explanation:`正确答案 B。第 21(2)(3)条规定，数据主体对直接营销目的的处理享有绝对反对权，任何时候均可行使，
控制者收到反对后须立即停止基于该目的的处理，不存在“合同已同意即不可反对”（A）或“控制者可主
张令人信服的合法理由继续处理”（D，令人信服理由的抗辩仅适用于第 21(1)条基于合法利益/公共利益的
一般反对权，不适用于直接营销这一绝对反对权）的例外；C（除非用于法律主张）属于对被遗忘权/限
制处理权例外的混淆，并非直接营销反对权的例外情形。知识点：第 21(2)(3)条直接营销绝对反对权，区
别于第 21(1)条一般反对权下的利益衡量机制。`,topic:`GDPR`,verified:`accurate`},{id:147,question:`SCENARIO

Please use the following to answer the next question:

Brady is a computer programmer based in New Zealand who has been running his own business for two
years. Brady’s business provides a low-cost suite of services to customers throughout the European
Economic Area (EEA). The services are targeted towards new and aspiring small business owners.
Brady’s company, called Brady Box, provides web page design services, a Social Networking Service
(SNS) and consulting services that help people manage their own online stores.

Unfortunately, Brady has been receiving some complaints. A customer named Anna recently uploaded her
plans for a new product onto Brady Box’s chat area, which is open to public viewing. Although she realized
her mistake two weeks later and removed the document, Anna is holding Brady Box responsible for not
noticing the error through regular monitoring of the website. Brady believes he should not be held liable.

Another customer, Felipe, was alarmed to discover that his personal information was transferred to a third-
party contractor called Hermes Designs and worries that sensitive information regarding his business
plans may be misused. Brady does not believe he violated European privacy rules. He provides a privacy
notice to all of his customers explicitly stating that personal data may be transferred to specific third parties
in fulfillment of a requested service. Felipe says he read the privacy notice but that it was long and
complicated

Brady continues to insist that Felipe has no need to be concerned, as he can personally vouch for the
integrity of Hermes Designs. In fact, Hermes Designs has taken the initiative to create sample customized

banner advertisements for customers like Felipe. Brady is happy to provide a link to the example banner

ads, now posted on the Hermes Designs webpage. Hermes Designs plans on following up with direct
marketing to these customers.

Brady was surprised when another customer, Serge, expressed his dismay that a quotation by him is

being used within a graphic collage on Brady Box’s home webpage. The quotation is attributed to Serge by

first and last name. Brady, however, was not worried about any sort of litigation. He wrote back to Serge to
let him know that he found the quotation within Brady Box’s Social Networking Service (SNS), as Serge
himself had posted the quotation. In his response, Brady did offer to remove the quotation as a courtesy.

Despite some customer complaints, Brady’s business is flourishing. He even supplements his income
through online behavioral advertising (OBA) via a third-party ad network with whom he has set clearly
defined roles. Brady is pleased that, although some customers are not explicitly aware of the OBA, the
advertisements contain useful products and services.

Based on the scenario, what is the main reason that Brady should be concerned with Hermes Designs’
handling of customer personal data?`,options:[`A. The data is sensitive.`,`B. The data is uncategorized.`,`C. The data is being used for a new purpose.`,`D. The data is being processed via a new means.`],correctAnswer:`C`,explanation:`正确答案 C。Hermes Designs 原本仅作为处理者协助完成客户委托的服务（如网页设计相关的第三方外
包），但其后续未经明确同意就利用客户数据制作营销广告并计划开展直接营销，属于将数据用于原始
收集目的之外的“新目的”，违反目的限制原则（第 5(1)(b)条），这才是 Brady 应重点关注的问题，而非数
据本身的敏感性（A）、分类状态（B）或处理手段是否新颖（D）。知识点：第 5(1)(b)条目的限制原
则，第三方处理者将数据挪作他用构成违规的典型情形。`,topic:`GDPR`,verified:`accurate`},{id:148,question:`SCENARIO

Please use the following to answer the next question:

Brady is a computer programmer based in New Zealand who has been running his own business for two
years. Brady’s business provides a low-cost suite of services to customers throughout the European
Economic Area (EEA). The services are targeted towards new and aspiring small business owners.
Brady’s company, called Brady Box, provides web page design services, a Social Networking Service
(SNS) and consulting services that help people manage their own online stores.

Unfortunately, Brady has been receiving some complaints. A customer named Anna recently uploaded her
plans for a new product onto Brady Box’s chat area, which is open to public viewing. Although she realized
her mistake two weeks later and removed the document, Anna is holding Brady Box responsible for not
noticing the error through regular monitoring of the website. Brady believes he should not be held liable.

Another customer, Felipe, was alarmed to discover that his personal information was transferred to a third-
party contractor called Hermes Designs and worries that sensitive information regarding his business
plans may be misused. Brady does not believe he violated European privacy rules. He provides a privacy
notice to all of his customers explicitly stating that personal data may be transferred to specific third parties

in fulfillment of a requested service. Felipe says he read the privacy notice but that it was long and
complicated

Brady continues to insist that Felipe has no need to be concerned, as he can personally vouch for the
integrity of Hermes Designs. In fact, Hermes Designs has taken the initiative to create sample customized
banner advertisements for customers like Felipe. Brady is happy to provide a link to the example banner
ads, now posted on the Hermes Designs webpage. Hermes Designs plans on following up with direct
marketing to these customers.

Brady was surprised when another customer, Serge, expressed his dismay that a quotation by him is
being used within a graphic collage on Brady Box’s home webpage. The quotation is attributed to Serge by
first and last name. Brady, however, was not worried about any sort of litigation. He wrote back to Serge to
let him know that he found the quotation within Brady Box’s Social Networking Service (SNS), as Serge

himself had posted the quotation. In his response, Brady did offer to remove the quotation as a courtesy.

Despite some customer complaints, Brady’s business is flourishing. He even supplements his income

through online behavioral advertising (OBA) via a third-party ad network with whom he has set clearly
defined roles. Brady is pleased that, although some customers are not explicitly aware of the OBA, the

advertisements contain useful products and services.

Based on current trends in European privacy practices, which aspect of Brady Box’ Online Behavioral
Advertising (OBA) is most likely to be insufficient if the company becomes established in Europe?`,options:[`A. The lack of the option to opt in.`,`B. The level of security within the website.`,`C. The contract with the third-party advertising network.`,`D. The need to have the contents of the advertising approved.`],correctAnswer:`A`,explanation:`正确答案 A。在欧盟数据保护实践中，基于 cookie 等技术开展的线上行为广告（OBA）通常需要用户事
先明确选择加入（opt-in）同意，而非仅提供事后选择退出（opt-out）的机制；Brady 目前的做法未给客
户提供明确的加入选项（“部分客户甚至完全不知晓存在 OBA”），这在欧盟框架下明显不足。B、C、D
虽然也是潜在合规议题，但并非欧盟 OBA 合规实践中最突出的欠缺点。知识点：欧盟对线上行为广告
（OBA）的 opt-in 同意要求，区别于 opt-out 模式。`,topic:`ePrivacy指令`,verified:`accurate`},{id:149,question:`SCENARIO

Please use the following to answer the next question:

Brady is a computer programmer based in New Zealand who has been running his own business for two
years. Brady’s business provides a low-cost suite of services to customers throughout the European
Economic Area (EEA). The services are targeted towards new and aspiring small business owners.

Brady’s company, called Brady Box, provides web page design services, a Social Networking Service
(SNS) and consulting services that help people manage their own online stores.

Unfortunately, Brady has been receiving some complaints. A customer named Anna recently uploaded her

plans for a new product onto Brady Box’s chat area, which is open to public viewing. Although she realized
her mistake two weeks later and removed the document, Anna is holding Brady Box responsible for not
noticing the error through regular monitoring of the website. Brady believes he should not be held liable.

Another customer, Felipe, was alarmed to discover that his personal information was transferred to a third-
party contractor called Hermes Designs and worries that sensitive information regarding his business
plans may be misused. Brady does not believe he violated European privacy rules. He provides a privacy
notice to all of his customers explicitly stating that personal data may be transferred to specific third parties
in fulfillment of a requested service. Felipe says he read the privacy notice but that it was long and
complicated

Brady continues to insist that Felipe has no need to be concerned, as he can personally vouch for the
integrity of Hermes Designs. In fact, Hermes Designs has taken the initiative to create sample customized
banner advertisements for customers like Felipe. Brady is happy to provide a link to the example banner
ads, now posted on the Hermes Designs webpage. Hermes Designs plans on following up with direct
marketing to these customers.

Brady was surprised when another customer, Serge, expressed his dismay that a quotation by him is
being used within a graphic collage on Brady Box’s home webpage. The quotation is attributed to Serge by
first and last name. Brady, however, was not worried about any sort of litigation. He wrote back to Serge to
let him know that he found the quotation within Brady Box’s Social Networking Service (SNS), as Serge
himself had posted the quotation. In his response, Brady did offer to remove the quotation as a courtesy.

Despite some customer complaints, Brady’s business is flourishing. He even supplements his income
through online behavioral advertising (OBA) via a third-party ad network with whom he has set clearly
defined roles. Brady is pleased that, although some customers are not explicitly aware of the OBA, the
advertisements contain useful products and services.

Under the General Data Protection Regulation (GDPR), what is the most likely reason Serge may have

grounds to object to the use of his quotation?`,options:[`A. Because of the misrepresentation of personal data as an endorsement.`,`B. Because of the juxtaposition of the quotation with others’ quotations.`,`C. Because of the use of personal data outside of the social networking service (SNS). 6`,`D. Because of the misapplication of the household exception in relation to a social networking service (SNS).`],correctAnswer:`A`,explanation:`正确答案 A。Serge 的原话被抽取并置于 Brady Box 主页的宣传拼贴中，容易使访客误以为该引语构成
Serge 对 Brady Box 产品/服务的“背书”或推荐，这种脱离原语境、可能造成误导性关联使用的行为，构成
其反对处理（或异议）的合理依据（涉及个人数据被用于超出其原意的新语境和目的，损害其个人形象
权益）。B（与其他引语并列，并非核心问题）、C（脱离 SNS 平台使用，虽有一定关联但并非“误导性
背书”这一实质性问题）、D（家庭活动例外的误用，与本题场景不符，Brady Box 运营主页宣传并非家
庭、个人事务）均不如 A 准确。知识点：目的限制原则及个人数据被脱离语境挪用可能构成的权益损害
（误导性背书）。`,topic:`GDPR`,verified:`accurate`},{id:150,question:`SCENARIO

Please use the following to answer the next question:

TripBliss Inc. is a travel service company which has lost substantial revenue over the last few years. Their
new manager, Oliver, suspects that this is partly due to the company’s outdated website. After doing some
research, he meets with a sales representative from the up-and-coming IT company Techiva, hoping that
they can design a new, cutting-edge website for TripBliss Inc.’s foundering business.

During negotiations, a Techiva representative describes a plan for gathering more customer information
through detailed questionnaires, which could be used to tailor their preferences to specific travel
destinations. TripBliss Inc. can choose any number of data categories – age, income, ethnicity – that
would help them best accomplish their goals. Oliver loves this idea, but would also like to have some way
of gauging how successful this approach is, especially since the questionnaires will require customers to
provide explicit consent to having their data collected. The Techiva representative suggests that they also
run a program to analyze the new website’s traffic, in order to get a better understanding of how customers
are using it. He explains his plan to place a number of cookies on customer devices. The cookies will allow
the company to collect IP addresses and other information, such as the sites from which the customers

came, how much time they spend on the TripBliss Inc. website, and which pages on the site they visit. All
of this information will be compiled in log files, which Techiva will analyze by means of a special program.
TripBliss Inc. would receive aggregate statistics to help them evaluate the website’s effectiveness. Oliver
enthusiastically engages Techiva for these services.

Techiva assigns the analytics portion of the project to longtime account manager Leon Santos. As is
standard practice, Leon is given administrator rights to TripBliss Inc.’s website, and can authorize access
to the log files gathered from it. Unfortunately for TripBliss Inc., however, Leon is taking on this new project
at a time when his dissatisfaction with Techiva is at a high point. In order to take revenge for what he feels
has been unfair treatment at the hands of the company, Leon asks his friend Fred, a hobby hacker, for
help. Together they come up with the following plan: Fred will hack into Techiva’s system and copy their
log files onto a USB stick. Despite his initial intention to send the USB to the press and to the data
protection authority in order to denounce Techiva, Leon experiences a crisis of conscience and ends up
reconsidering his plan. He decides instead to securely wipe all the data from the USB stick and inform his
manager that the company’s system of access control must be reconsidered.

After Leon has informed his manager, what is Techiva’s legal responsibility as a processor?`,options:[`A. They must report it to TripBliss Inc.`,`B. They must conduct a full systems audit.`,`C. They must report it to the supervisory authority.`,`D. They must inform customers who have used the website.`],correctAnswer:`A`,explanation:`正确答案 A。第 33(2)条规定，处理者一旦知悉个人数据泄露，须“不得无故拖延”地通知控制者，而非直
接越过控制者自行通知监管机构（C）或数据主体（D），也没有法定义务要求处理者独立开展“全面系统
审计”（B，尽管这可能是良好实践，但非第 28 条项下的强制法律义务本身）。本案中 Leon 已将泄露事
件报告经理，说明公司内部已启动处理，接下来 Techiva（处理者）的法律义务是正式通知 TripBliss Inc.
（控制者）。知识点：第 33(2)条处理者向控制者通知泄露的义务及责任链条。`,topic:`ePrivacy指令`,verified:`accurate`},{id:151,question:`SCENARIO

Please use the following to answer the next question: 6
Joe is the new privacy manager for Who-R-U, a Canadian business that provides DNA analysis. The
company is headquartered in Montreal, and all of its employees are located there. The company offers its
services to Canadians only: Its website is in English and French, it accepts only Canadian currency, and it
blocks internet traffic from outside of Canada (although this solution doesn’t prevent all non-Canadian
traffic). It also declines to process orders that request the DNA report to be sent outside of Canada, and
returns orders that show a non-Canadian return address.

Bob, the President of Who-R-U, thinks there is a lot of interest for the product in the EU, and the company
is exploring a number of plans to expand its customer base.

The first plan, collegially called We-Track-U, will use an app to collect information about its current
Canadian customer base. The expansion will allow its Canadian customers to use the app while traveling
abroad. He suggests that the company use this app to gather location information. If the plan shows
promise, Bob proposes to use push notifications and text messages to encourage existing customers to
pre-register for an EU version of the service. Bob calls this work plan, We-Text-U. Once the company has
gathered enough pre-registrations, it will develop EU-specific content and services.

Another plan is called Customer for Life. The idea is to offer additional services through the company’s
app, like storage and sharing of DNA information with other applications and medical providers. The
company’s contract says that it can keep customer DNA indefinitely, and use it to offer new services and
market them to customers. It also says that customers agree not to withdraw direct marketing consent.
Paul, the marketing director, suggests that the company should fully exploit these provisions, and that it
can work around customers’ attempts to withdraw consent because the contract invalidates them.

The final plan is to develop a brand presence in the EU. The company has already begun this process. It is
in the process of purchasing the naming rights for a building in Germany, which would come with a few
offices that Who-R-U executives can use while traveling internationally. The office doesn’t include any
technology or infrastructure; rather, it’s simply a room with a desk and some chairs.

On a recent trip concerning the naming-rights deal, Bob’s laptop is stolen. The laptop held unencrypted
DNA reports on 5,000 Who-R-U customers, all of whom are residents of Canada. The reports include
customer name, birthdate, ethnicity, racial background, names of relatives, gender, and occasionally
health information.

If Who-R-U decides to track locations using its app, what must it do to comply with the GDPR?`,options:[`A. Get consent from the app users.`,`B. Provide a transparent notice to users.`,`C. Anonymize the data and add latency so it avoids disclosing real time locations.`,`D. Obtain a court order because location data is a special category of personal data.`],correctAnswer:`A`,explanation:`答案 A 在该应用新增持续定位功能的场景中最稳妥，但 GDPR 并未规定所有位置数据处理一律只能依赖同意。应同
时评估第 6 条合法依据、目的兼容性、透明度、数据最小化及 ePrivacy 对终端设备访问的要求。`,topic:`ePrivacy指令`,verified:`qualified`},{id:152,question:`SCENARIO

Please use the following to answer the next question:

Joe is the new privacy manager for Who-R-U, a Canadian business that provides DNA analysis. The
company is headquartered in Montreal, and all of its employees are located there. The company offers its
services to Canadians only: Its website is in English and French, it accepts only Canadian currency, and it

blocks internet traffic from outside of Canada (although this solution doesn’t prevent all non-Canadian

traffic). It also declines to process orders that request the DNA report to be sent outside of Canada, and
returns orders that show a non-Canadian return address.

Bob, the President of Who-R-U, thinks there is a lot of interest for the product in the EU, and the company

is exploring a number of plans to expand its customer base. 6
The first plan, collegially called We-Track-U, will use an app to collect information about its current
Canadian customer base. The expansion will allow its Canadian customers to use the app while traveling
abroad. He suggests that the company use this app to gather location information. If the plan shows
promise, Bob proposes to use push notifications and text messages to encourage existing customers to
pre-register for an EU version of the service. Bob calls this work plan, We-Text-U. Once the company has
gathered enough pre-registrations, it will develop EU-specific content and services.

Another plan is called Customer for Life. The idea is to offer additional services through the company’s
app, like storage and sharing of DNA information with other applications and medical providers. The
company’s contract says that it can keep customer DNA indefinitely, and use it to offer new services and
market them to customers. It also says that customers agree not to withdraw direct marketing consent.
Paul, the marketing director, suggests that the company should fully exploit these provisions, and that it
can work around customers’ attempts to withdraw consent because the contract invalidates them.

The final plan is to develop a brand presence in the EU. The company has already begun this process. It is
in the process of purchasing the naming rights for a building in Germany, which would come with a few
offices that Who-R-U executives can use while traveling internationally. The office doesn’t include any
technology or infrastructure; rather, it’s simply a room with a desk and some chairs.

On a recent trip concerning the naming-rights deal, Bob’s laptop is stolen. The laptop held unencrypted
DNA reports on 5,000 Who-R-U customers, all of whom are residents of Canada. The reports include
customer name, birthdate, ethnicity, racial background, names of relatives, gender, and occasionally
health information.

The Customer for Life plan may conflict with which GDPR provision?`,options:[`A. Article 6, which requires processing to be lawful.`,`B. Article 7, which requires consent to be as easy to withdraw as it is to give.`,`C. Article 16, which provides data subjects with a rights to rectification.`,`D. Article 20, which gives data subjects a right to data portability.`],correctAnswer:`B`,explanation:`正确答案 B。第 7(3)条明确要求撤回同意应与给予同意“同样简单”（as easy to withdraw as to give），而
Who-R-U 合同条款约定客户“同意不得撤回直接营销同意”，这直接违反了该条款关于同意可撤回性及撤
回便利性的强制性要求，此类合同约定本身无效。A、C、D 虽然也可能涉及其他条款问题，但与本情节
（限制撤回权）直接对应的是第 7 条而非泛泛的合法性（A）、更正权（C）或可携权（D）条款。知识
点：第 7(3)条同意可撤回性要求及“撤回须与给予同样简便”的强制标准，此类限制撤回条款的无效性。`,topic:`GDPR`,verified:`accurate`},{id:153,question:`SCENARIO

Please use the following to answer the next question:

Joe is the new privacy manager for Who-R-U, a Canadian business that provides DNA analysis. The
company is headquartered in Montreal, and all of its employees are located there. The company offers its
services to Canadians only: Its website is in English and French, it accepts only Canadian currency, and it
blocks internet traffic from outside of Canada (although this solution doesn’t prevent all non-Canadian
traffic). It also declines to process orders that request the DNA report to be sent outside of Canada, and
returns orders that show a non-Canadian return address.

Bob, the President of Who-R-U, thinks there is a lot of interest for the product in the EU, and the company
is exploring a number of plans to expand its customer base.

The first plan, collegially called We-Track-U, will use an app to collect information about its current
Canadian customer base. The expansion will allow its Canadian customers to use the app while traveling

abroad. He suggests that the company use this app to gather location information. If the plan shows

promise, Bob proposes to use push notifications and text messages to encourage existing customers to
pre-register for an EU version of the service. Bob calls this work plan, We-Text-U. Once the company has

gathered enough pre-registrations, it will develop EU-specific content and services.

Another plan is called Customer for Life. The idea is to offer additional services through the company’s
app, like storage and sharing of DNA information with other applications and medical providers. The
company’s contract says that it can keep customer DNA indefinitely, and use it to offer new services and
market them to customers. It also says that customers agree not to withdraw direct marketing consent.
Paul, the marketing director, suggests that the company should fully exploit these provisions, and that it
can work around customers’ attempts to withdraw consent because the contract invalidates them.

The final plan is to develop a brand presence in the EU. The company has already begun this process. It is
in the process of purchasing the naming rights for a building in Germany, which would come with a few
offices that Who-R-U executives can use while traveling internationally. The office doesn’t include any
technology or infrastructure; rather, it’s simply a room with a desk and some chairs.

On a recent trip concerning the naming-rights deal, Bob’s laptop is stolen. The laptop held unencrypted
DNA reports on 5,000 Who-R-U customers, all of whom are residents of Canada. The reports include
customer name, birthdate, ethnicity, racial background, names of relatives, gender, and occasionally
health information.

If Who-R-U adopts the We-Track-U pilot plan, why is it likely to be subject to the territorial scope of the
GDPR?`,options:[`A. Its plan would be in the context of the establishment of a controller in the Union.`,`B. It would be offering goods or services to data subjects in the Union.`,`C. It is engaging in commercial activities conducted in the Union.`,`D. It is monitoring the behavior of data subjects in the Union.`],correctAnswer:`D`,explanation:`正确答案 D。We-Track-U 计划通过 App 追踪身处欧盟境内（旅行中）的加拿大客户的位置行为，这构成
第 3(2)(b)条“监测欧盟境内数据主体行为”的域外适用情形，而非该公司在欧盟设立机构（A，公司总部及
全部员工均在加拿大，无欧盟设立机构）、向欧盟数据主体提供商品服务（B，该阶段仅为加拿大现有客
户提供境外使用功能，尚未正式面向欧盟新客户提供服务）或在欧盟从事一般商业活动（C，表述过于宽
泛不准确）。知识点：第 3(2)(b)条“监测行为”作为域外适用触发情形——追踪位于欧盟境内个人的行踪
构成典型监测行为。`,topic:`GDPR`,verified:`accurate`},{id:154,question:`SCENARIO

Please use the following to answer the next question:

Joe is the new privacy manager for Who-R-U, a Canadian business that provides DNA analysis. The
company is headquartered in Montreal, and all of its employees are located there. The company offers its
services to Canadians only: Its website is in English and French, it accepts only Canadian currency, and it
blocks internet traffic from outside of Canada (although this solution doesn’t prevent all non-Canadian
traffic). It also declines to process orders that request the DNA report to be sent outside of Canada, and

returns orders that show a non-Canadian return address.

Bob, the President of Who-R-U, thinks there is a lot of interest for the product in the EU, and the company
is exploring a number of plans to expand its customer base.

The first plan, collegially called We-Track-U, will use an app to collect information about its current
Canadian customer base. The expansion will allow its Canadian customers to use the app while traveling
abroad. He suggests that the company use this app to gather location information. If the plan shows
promise, Bob proposes to use push notifications and text messages to encourage existing customers to
pre-register for an EU version of the service. Bob calls this work plan, We-Text-U. Once the company has
gathered enough pre-registrations, it will develop EU-specific content and services.

Another plan is called Customer for Life. The idea is to offer additional services through the company’s
app, like storage and sharing of DNA information with other applications and medical providers. The
company’s contract says that it can keep customer DNA indefinitely, and use it to offer new services and

market them to customers. It also says that customers agree not to withdraw direct marketing consent.

Paul, the marketing director, suggests that the company should fully exploit these provisions, and that it
can work around customers’ attempts to withdraw consent because the contract invalidates them.

The final plan is to develop a brand presence in the EU. The company has already begun this process. It is
in the process of purchasing the naming rights for a building in Germany, which would come with a few

offices that Who-R-U executives can use while traveling internationally. The office doesn’t include any
technology or infrastructure; rather, it’s simply a room with a desk and some chairs.

On a recent trip concerning the naming-rights deal, Bob’s laptop is stolen. The laptop held unencrypted
DNA reports on 5,000 Who-R-U customers, all of whom are residents of Canada. The reports include
customer name, birthdate, ethnicity, racial background, names of relatives, gender, and occasionally
health information.

Who-R-U is NOT required to notify the local German DPA about the laptop theft because?`,options:[`A. The company isn’t a controller established in the Union.`,`B. The laptop belonged to a company located in Canada.`,`C. The data isn’t considered personally identifiable financial information.`,`D. There is no evidence that the thieves have accessed the data on the laptop.`],correctAnswer:`A`,explanation:`正确答案 A。Who-R-U 在德国购买的“冠名权”办公室未配备任何技术设施或员工实质性运营活动，仅是
临时借用的会议空间，并不构成第 3(1)条意义上“稳定安排的设立机构”（establishment），因此该处理活
动（笔记本电脑被盗事件）与欧盟设立机构无关，德国 DPA 对该起数据泄露事件不具有基于“设立地”标
准的管辖权（该事件涉及的又是加拿大居民数据，进一步说明与欧盟数据主体、欧盟设立机构均无实质
关联）。知识点：第 3(1)条“设立机构”认定标准——须具备稳定安排下的实际经营活动，单纯挂名/临时
空间不构成设立。`,topic:`GDPR`,verified:`accurate`},{id:155,question:`SCENARIO

Please use the following to answer the next question:

WonderkKids provides an online booking service for childcare. WonderKids is based in France, but hosts

its website through a company in Switzerland. As part of their service, WonderKids will pass all personal
data provided to them to the childcare provider booked through their system. The type of personal data
collected on the website includes the name of the person booking the childcare, address and contact
details, as well as information about the children to be cared for including name, age, gender and health
information. The privacy statement on WonderKids’ website states the following:

“WonderkKids provides the information you disclose to us through this website to your childcare provider
for scheduling and health and safety reasons. We may also use your and your child’s personal information
for our own legitimate business purposes and we employ a third-party website hosting company located in
Switzerland to store the data. Any data stored on equipment located in Switzerland meets the European
Commission provisions for guaranteeing adequate safeguards for you and your child’s personal
information. We will only share you and your child’s personal information with businesses that we see as
adding real value to you. By providing us with any personal data, you consent to its transfer to affiliated
businesses and to send you promotional offers.”

“We may retain you and your child’s personal information for no more than 28 days, at which point the data
will be depersonalized, unless your personal information is being used for a legitimate business purpose
beyond 28 days where it may be retained for up to 2 years.”

“We are processing you and your child’s personal information with your consent. If you choose not to
provide certain information to us, you may not be able to use our services. You have the right to: request
access to you and your child’s personal information; rectify or erase you or your child’s personal
information; the right to correction or erasure of you and/or your child’s personal information; object to any
processing of you and your child’s personal information. You also have the right to complain to the
supervisory authority about our data processing activities.”

What additional information must Wonderkids provide in their Privacy Statement?`,options:[`A. How often promotional emails will be sent.`,`B. Contact information of the hosting company.`,`C. Technical and organizational measures to protect data.`,`D. The categories of recipients with whom data will be shared.`],correctAnswer:`D`,explanation:`正 确 答 案 D 。 第 13/14 条 要 求 控 制 者 告 知 的 信 息 中 ， 明 确 包 括 “ 接 收 方 或 接 收 方 类 别 ”这 一 项 ， 而
WonderKids 隐私声明中虽提及会与“认为能为客户增加价值的企业”共享数据，但并未具体说明这些接收
方的类别（如 childcare providers、关联企业、营销合作伙伴等），信息披露不够具体，违反透明度原
则。A、B、C 均非第 13/14 条明确要求告知的强制性内容。知识点：第 13/14 条中“接收方类别”告知义务
的具体性要求。`,topic:`GDPR`,verified:`accurate`},{id:156,question:`SCENARIO

Please use the following to answer the next question:

WonderkKids provides an online booking service for childcare. WonderKids is based in France, but hosts
its website through a company in Switzerland. As part of their service, WonderKids will pass all personal
data provided to them to the childcare provider booked through their system. The type of personal data
collected on the website includes the name of the person booking the childcare, address and contact
details, as well as information about the children to be cared for including name, age, gender and health
information. The privacy statement on WonderKids’ website states the following:

“WonderkKids provides the information you disclose to us through this website to your childcare provider
for scheduling and health and safety reasons. We may also use your and your child’s personal information
for our own legitimate business purposes and we employ a third-party website hosting company located in
Switzerland to store the data. Any data stored on equipment located in Switzerland meets the European
Commission provisions for guaranteeing adequate safeguards for you and your child’s personal
information. We will only share you and your child’s personal information with businesses that we see as
adding real value to you. By providing us with any personal data, you consent to its transfer to affiliated
businesses and to send you promotional offers.”

“We may retain you and your child’s personal information for no more than 28 days, at which point the data
will be depersonalized, unless your personal information is being used for a legitimate business purpose

beyond 28 days where it may be retained for up to 2 years.”

“We are processing you and your child’s personal information with your consent. If you choose not to
provide certain information to us, you may not be able to use our services. You have the right to: request
access to you and your child’s personal information; rectify or erase you or your child’s personal
information; the right to correction or erasure of you and/or your child’s personal information; object to any
processing of you and your child’s personal information. You also have the right to complain to the
supervisory authority about our data processing activities.”

What must the contract between WonderKids and the hosting service provider contain?`,options:[`A. The requirement to implement technical and organizational measures to protect the data.`,`B. Controller-to-controller model contract clauses.`,`C. Audit rights for the data subjects.`,`D. A non-disclosure agreement.`],correctAnswer:`A`,explanation:`正确答案 A。依据第 28(3)(c)条，控制者与处理者（此处为负责网站托管的瑞士公司）之间的书面协议须
包含处理者应实施适当技术和组织安全措施保护数据的条款，这是处理者协议的强制核心内容之一，与
是否涉及跨境传输保障机制（B，本题问的是委托处理协议的一般强制内容，而非跨境传输专属条款——
虽然瑞士已获充分性认定，理论上跨境传输本身无需 SCC，但处理者协议本身仍须包含安全措施条
款）、审计权归属数据主体（C，审计权通常赋予控制者而非数据主体本人）、保密协议（D，保密义务
通常已包含在第 28 条处理者协议的整体要求中，但并非题目问的“必须包含”的具体核心条款）均不如 A
准确对应第 28 条要求。知识点：第 28(3)(c)条处理者协议中安全措施条款的强制性要求。`,topic:`GDPR`,verified:`accurate`},{id:157,question:`SCENARIO

Please use the following to answer the next question:

WonderkKids provides an online booking service for childcare. WonderKids is based in France, but hosts

its website through a company in Switzerland. As part of their service, WonderKids will pass all personal
data provided to them to the childcare provider booked through their system. The type of personal data

collected on the website includes the name of the person booking the childcare, address and contact

details, as well as information about the children to be cared for including name, age, gender and health

information. The privacy statement on WonderKids’ website states the following: 6
“WonderkKids provides the information you disclose to us through this website to your childcare provider
for scheduling and health and safety reasons. We may also use your and your child’s personal information
for our own legitimate business purposes and we employ a third-party website hosting company located in
Switzerland to store the data. Any data stored on equipment located in Switzerland meets the European
Commission provisions for guaranteeing adequate safeguards for you and your child’s personal
information. We will only share you and your child’s personal information with businesses that we see as
adding real value to you. By providing us with any personal data, you consent to its transfer to affiliated
businesses and to send you promotional offers.”

“We may retain you and your child’s personal information for no more than 28 days, at which point the data
will be depersonalized, unless your personal information is being used for a legitimate business purpose
beyond 28 days where it may be retained for up to 2 years.”

“We are processing you and your child’s personal information with your consent. If you choose not to
provide certain information to us, you may not be able to use our services. You have the right to: request
access to you and your child’s personal information; rectify or erase you or your child’s personal
information; the right to correction or erasure of you and/or your child’s personal information; object to any
processing of you and your child’s personal information. You also have the right to complain to the
supervisory authority about our data processing activities.”

What direct marketing information can WonderKids send by email without prior consent of the person
booking the childcare?`,options:[`A. No marketing information at all.`,`B. Any marketing information at all.`,`C. Marketing information related to other business operations of WonderKids.`,`D. Marketing information for products or services similar to those purchased from WonderKids.`],correctAnswer:`D`,explanation:`正确答案 D。ePrivacy 规则下的“软退出”（soft opt-in）例外允许企业在客户购买过程中获得联系方式的情
况下，无需重新征求同意即可向该客户推送与其已购买产品或服务“类似”的营销信息，但仅限于类似产品
/服务范畴，不能扩展到公司其他业务（C，超出类似范围）或所有营销信息（A、B）。知识点：软退出
规则中“类似产品或服务”这一限定范围的严格解释。`,topic:`ePrivacy指令`,verified:`accurate`},{id:158,question:`An organization conducts body temperature checks as a part of COVID-19 monitoring. Body temperature
is measured manually and is not followed by registration, documentation or other processing of an
individual’s personal data.

Which of the following best explain why this practice would NOT be subject to the GDPR?`,options:[`A. Body temperature is not considered personal data.`,`B. The practice does not involve completion by automated means.`,`C. Body temperature is considered pseudonymous data.`,`D. The practice is for the purpose of alleviating extreme risks to public health.`],correctAnswer:`B`,explanation:`答案 B 的关键不在于“人工处理当然不受 GDPR”，而在于该体温测量未自动化、未记录，也未形成或拟形成结构化
档案系统。人工纸质或其他非自动化数据只要构成档案系统，仍可能受 GDPR 约束。`,topic:`GDPR`,verified:`qualified`},{id:159,question:`When assessing the level of risk created by a data breach, which of the following would NOT have to be
taken into consideration?`,options:[`A. The ease of identification of individuals.`,`B. The size of any data processor involved.`,`C. The special characteristics of the data controller. 6`,`D. The nature, sensitivity and volume of personal data.`],correctAnswer:`B`,explanation:`正确答案 B。WP29《数据泄露通知指南》列举的风险评估考量因素包括：数据类型、敏感性和数量
（D）、个人被识别的难易程度（A）、控制者的特殊性质（如是否为医疗机构等，C）、泄露的性质和
严重程度、受影响个人数量、泄露后果的严重性等，但并未将“涉案数据处理者的规模大小”列为评估泄露
风险的考量因素——处理者规模与泄露对数据主体造成的实际风险并无直接关联。知识点：WP29 数据泄
露风险评估的考量因素清单。`,topic:`GDPR`,verified:`accurate`},{id:160,question:`Under Article 80(1) of the GDPR, individuals can elect to be represented by not-for-profit organizations in a
privacy group litigation or class action. These organizations are commonly known as?`,options:[`A. Law firm organizations.`,`B. Civil society organizations.`,`C. Human rights organizations.`,`D. Constitutional rights organizations.`],correctAnswer:`B`,explanation:`正确答案 B。第 80(1)条允许数据主体委托非营利性的“民间社会组织”（civil society body/organisation，即
致力于公共利益、数据保护等领域的非营利民间团体）代表其提起投诉或诉讼，这类组织通常被称为“公
民社会组织”（civil society organizations），而非特指律师事务所（A）、人权组织（C）或宪法权利组织
（D）这类更狭窄或不准确的表述。知识点：第 80 条集体诉讼代表机制中“民间社会组织”的范围界定。`,topic:`GDPR`,verified:`accurate`},{id:161,question:`SCENARIO
Please use the following to answer the next question:

BHealthy, a company based in Italy, is ready to launch a new line of natural products, with a focus on
sunscreen. The last step prior to product launch is for BHealthy to conduct research to decide how
extensively to market its new line of sunscreens across Europe. To do so, BHealthy teamed up with
Natural Insight, a company specializing in determining pricing for natural products. BHealthy decided to
share its existing customer information – name, location, and prior purchase history – with Natural Insight.
Natural Insight intends to use this information to train its algorithm to help determine the price point at
which BHealthy can sell its new sunscreens.

Prior to sharing its customer list, BHealthy conducted a review of Natural Insight’s security practices and
concluded that the company has sufficient security measures to protect the contact information.
Additionally, BHealthy’s data processing contractual terms with Natural Insight require continued
implementation of technical and organization measures. Also indicated in the contract are restrictions on
use of the data provided by BHealthy for any purpose beyond provision of the services, which include use
of the data for continued improvement of Natural Insight’s machine learning algorithms.

What is the nature of BHealthy and Natural Insight’s relationship?`,options:[`A. Natural Insight is BHealthy’s processor because the companies entered into data processing terms.`,`B. Natural Insight is BHealthy’s processor because BHealthy is sharing its customer information with Natural Insight.`,`C. Natural Insight is the controller because it determines the security measures to implement to protect data it processes; BHealthy is a co-controller because it engaged Natural Insight to determine pricing for the new sunscreens.`,`D. Natural Insight is a controller because it is separately determining the purpose of processing when it uses BHealthy’s customer information to improve its machine learning algorithms.`],correctAnswer:`D`,explanation:`正确答案 D。Natural Insight 虽以处理者身份接受 BHealthy 委托进行定价分析，但合同明确限制其不得将
数据用于改进自身机器学习算法这一目的之外的用途，若 Natural Insight 仍将数据用于自身算法改进（服
务于其全部客户群体的商业利益），这属于其为自身目的独立决定处理方式，已超出处理者角色，构成
（针对该部分处理的）控制者。A（仅因签订处理协议就认定为处理者，忽略了实际处理行为是否超出协
议授权）、B（仅因数据被共享就认定为处理者，共享本身不决定角色）、C（颠倒了双方角色定性逻
辑 ） 均 不 准 确 。 知 识 点 ： 处 理 者 超 越 委 托 范 围 自 行 决 定 处 理 目 的 即 转 变 为 控 制 者 （ “controller in
disguise”）。`,topic:`GDPR`,verified:`accurate`},{id:162,question:`SCENARIO 6
Please use the following to answer the next question:

BHealthy, a company based in Italy, is ready to launch a new line of natural products, with a focus on
sunscreen. The last step prior to product launch is for BHealthy to conduct research to decide how
extensively to market its new line of sunscreens across Europe. To do so, BHealthy teamed up with
Natural Insight, a company specializing in determining pricing for natural products. BHealthy decided to
share its existing customer information – name, location, and prior purchase history – with Natural Insight.
Natural Insight intends to use this information to train its algorithm to help determine the price point at
which BHealthy can sell its new sunscreens.

Prior to sharing its customer list, BHealthy conducted a review of Natural Insight’s security practices and
concluded that the company has sufficient security measures to protect the contact information.
Additionally, BHealthy’s data processing contractual terms with Natural Insight require continued
implementation of technical and organization measures. Also indicated in the contract are restrictions on
use of the data provided by BHealthy for any purpose beyond provision of the services, which include use
of the data for continued improvement of Natural Insight’s machine learning algorithms.

Under the GDPR, what are Natural Insight’s security obligations with respect to the customer information it
received from BHealthy?`,options:[`A. Appropriate security that takes into account the industry practices for protecting customer contact information and purchase history.`,`B. Only the security measures assessed by BHealthy prior to entering into the data processing contract.`,`C. Absolute security since BHealthy is sharing personal data, including purchase history, with Natural Insight.`,`D. The level of security that a reasonable data subject whose data is processed would expect in relation to the data subject’s purchase history.`],correctAnswer:`A`,explanation:`正确答案 A。第 32 条要求处理者采取的安全措施须与处理活动的性质、范围、背景目的及风险相适应，
通常参照行业惯例、公认的技术标准来确定“适当”的安全水平，而非仅依赖控制者事先审查的措施（B，
安全义务是处理者持续性的独立法定义务，不能因控制者事先审查过就固化标准）、也非要求“绝对安全”
（C，法律从未要求绝对无风险的安全标准，而是“适当”标准）或以“合理数据主体的主观期待”作为客观
法律标准（D，不是法定判断依据）。知识点：第 32 条“适当技术组织措施”标准——与风险相适应、参
照行业惯例，而非绝对安全或主观期待标准。`,topic:`GDPR`,verified:`accurate`},{id:163,question:`SCENARIO
Please use the following to answer the next question:

BHealthy, a company based in Italy, is ready to launch a new line of natural products, with a focus on
sunscreen. The last step prior to product launch is for BHealthy to conduct research to decide how
extensively to market its new line of sunscreens across Europe. To do so, BHealthy teamed up with
Natural Insight, a company specializing in determining pricing for natural products. BHealthy decided to
share its existing customer information – name, location, and prior purchase history – with Natural Insight.
Natural Insight intends to use this information to train its algorithm to help determine the price point at
which BHealthy can sell its new sunscreens.

Prior to sharing its customer list, BHealthy conducted a review of Natural Insight’s security practices and
concluded that the company has sufficient security measures to protect the contact information.
Additionally, BHealthy’s data processing contractual terms with Natural Insight require continued
implementation of technical and organization measures. Also indicated in the contract are restrictions on
use of the data provided by BHealthy for any purpose beyond provision of the services, which include use
of the data for continued improvement of Natural Insight’s machine learning algorithms.

In which case would Natural Insight’s use of BHealthy’s data for improvement of its algorithms be
considered data processor activity?`,options:[`A. If Natural Insight uses BHealthy’s data for improving price point predictions only for BHealthy.`,`B. If Natural Insight receives express contractual instructions from BHealthy to use its data for improving its algorithms.`,`C. If Natural Insight agrees to be fully liable for its use of BHealthy’s customer information in its product improvement activities.`,`D. If Natural Insight satisfies the transparency requirement by notifying BHealthy’s customers of its plans to use their information for its product improvement activities.`],correctAnswer:`B`,explanation:`正确答案 B。只有当 BHealthy 以书面合同明确指示 Natural Insight 将数据用于改进算法这一具体用途时，
该用途才被纳入委托处理的授权范围内，属于处理者活动；若无此类明确指示，Natural Insight 擅自将数
据用于自身算法改进则构成控制者行为（如 Q161 解析）。A（仅服务于 BHealthy 自身定价预测，仍需以
合同明确授权为前提，本身不足以单独构成处理者行为的判断标准）、C（同意承担全部责任不能改变其
“为自身目的独立决定处理方式”的控制者本质）、D（透明度告知客户，同样不能改变角色定性）均不如
B 准确。知识点：处理者活动的合法性边界——须限于控制者书面指示范围内。`,topic:`GDPR`,verified:`accurate`},{id:164,question:`Which of the following is NOT an explicit right granted to data subjects under the GDPR?`,options:[`A. The right to request access to the personal data a controller holds about them.`,`B. The right to request the deletion of data a controller holds about them.`,`C. The right to opt-out of the sale of their personal data to third parties.`,`D. The right to request restriction of processing of personal data, under certain scenarios.`],correctAnswer:`C`,explanation:`正确答案 C。GDPR 明确赋予数据主体访问权（A，第 15 条）、删除权（B，第 17 条）、限制处理权
（D，第 18 条）等一系列权利，但并未专门规定“拒绝个人数据被出售给第三方”这一表述形式的权利
（这更接近美国加州 CCPA 等法律中的特有概念）；在 GDPR 框架下，若数据“出售”本质上构成一般处
理或披露，数据主体可通过反对权（第 21 条）或撤回同意等途径实现类似效果，但 GDPR 本身并未以
“opt-out of sale”这一术语明文规定。知识点：GDPR 数据主体权利体系与美国 CCPA 等法律“拒绝出售”权
利表述方式的差异比较。`,topic:`GDPR`,verified:`accurate`},{id:165,question:`As per the GDPR, which legal basis would be the most appropriate for an online shop that wishes to
process personal data for the purpose of fraud prevention?`,options:[`A. Protection of the interests of the data subjects.`,`B. Performance of a contact`,`C. Legitimate interest`,`D. Consent`],correctAnswer:`C`,explanation:`正确答案 C。防范欺诈通常被认为是控制者（在线商店）保护自身及客户免受欺诈损失的合法利益，属
于典型的第 6(1)(f)条“合法利益”应用场景（同时也在前言第 47 条中被明确列为合法利益的示例）。A
（保护数据主体利益，第 6(1)(d)条通常指生命攸关情形，与防欺诈不完全对应）、B（履行合同，防欺诈
本身并非合同履行的直接必要内容）、D（同意，防欺诈处理往往需要在客户不知情或不便逐一同意的情
况下进行，合法利益更契合此类场景）均不如 C 准确。知识点：第 6(1)(f)条合法利益在欺诈防范场景下
的典型应用（前言第 47 条）。`,topic:`GDPR`,verified:`accurate`},{id:166,question:`The Planet 49 CJEU Judgement applies to?`,options:[`A. Cookies used only by third parties.`,`B. Cookies that are deemed technically necessary.`,`C. Cookies regardless of whether the data accessed is personal or not.`,`D. Cookies where the data accessed is considered as personal data only.`],correctAnswer:`C`,explanation:`正确答案 C。欧洲法院在 Planet49 案（2019）中明确，无论 cookie 读取或存储的信息是否构成“个人数
据”，只要涉及在用户终端设备上存储或读取信息，均须依据 ePrivacy 指令取得用户的有效同意（该判决
的核心意义正在于将同意要求的适用范围扩展至不限于个人数据本身）。A（仅限第三方 cookie）、B
（技术必要 cookie，恰恰是同意例外而非该判决适用对象）、D（仅限涉及个人数据的 cookie，恰与判决
要旨相反）均不准确。知识点：Planet49 案确立的 cookie 同意规则不以数据是否构成“个人数据”为前提。`,topic:`ePrivacy指令`,verified:`accurate`},{id:167,question:`Bioface is a company based in the United States. It has no servers, personnel or assets in the European

Union. By collecting photographs from social media and other web-based services, such as newspapers

and blogs, it uses machine learning to develop a facial recognition algorithm. The algorithm identifies
individuals in photographs who are not in its data set based the algorithm and its existing data. The service

collects photographs of data subjects in the European Union and will identify them if presented with their

photographs. Bioface offers its service to government agencies and companies in the United States and

Canada, but not to those in the European Union. Bioface does not offer the service to individuals. 6
Why is Bioface subject to the territorial scope of the General Data Protection Regulation?`,options:[`A. It collects data from European Union websites, which constitutes an establishment in the European Union.`,`B. It offers services in the European Union by identifying data subjects in the European Union.`,`C. It collects data from subjects and uses it for automated processing.`,`D. It monitors the behavior of data subjects in the European Union.`],correctAnswer:`D`,explanation:`正确答案 D。Bioface 虽未在欧盟设立机构、也不直接向欧盟客户或个人提供服务（排除 A、B——A 错误
地将境外收集数据行为等同于“设立”，设立须有稳定经营安排；B 错误，其服务对象是美加政府机构和企
业而非直接面向欧盟数据主体或个人），但其从欧盟数据主体的照片中提取并处理生物识别信息、通过
面部识别技术持续识别欧盟境内个人，这构成第 3(2)(b)条“监测欧盟境内数据主体行为”，从而触发 GDPR
域外适用。C（笼统的“收集数据并自动化处理”表述，未能准确抓住“监测行为”这一关键触发要素）不如
D 准确。知识点：第 3(2)(b)条“监测行为”标准——面部识别等生物特征识别技术构成对欧盟个人的行为监
测。`,topic:`GDPR`,verified:`accurate`},{id:168,question:`SCENARIO
Please use the following to answer the next question:

Joe started the Gummy Bear Company in 2000 from his home in Vermont, USA. Today, it is a multi-billion-
dollar candy company operating in every continent. All of the company’s IT servers are located in Vermont.
This year Joe hires his son Ben to join the company and head up Project Big, which is a major marketing
strategy to triple gross revenue in just 5 years. Ben graduated with a PhD in computer software from a top
university. Ben decided to join his father’s company, but is also secretly working on launching a new global
online dating website company called Ben Knows Best.

Ben is aware that the Gummy Bear Company has millions of customers and believes that many of them

might also be interested in finding their perfect match. For Project Big, Ben redesigns the company’s
online web portal and requires customers in the European Union and elsewhere to provide additional
personal information in order to remain a customer. Project Ben begins collecting data about customers’
philosophical beliefs, political opinions and marital status.

If a customer identifies as single, Ben then copies all of that customer’s personal data onto a separate
database for Ben Knows Best. Ben believes that he is not doing anything wrong, because he explicitly
asks each customer to give their consent by requiring them to check a box before accepting their
information. As Project Big is an important project, the company also hires a first year college student
named Sam, who is studying computer science to help Ben out.

Ben calls out sick and Sam comes across the Ben Knows Best database. Sam is planning on going to
Ireland over Spring Beak with 10 of his friends, so he copies all of the customer information of people that
reside in Ireland so that he and his friends can contact people when they are in Ireland.

Joe also hires his best friend’s daughter, Alice, who just graduated from law school in the U.S., to be the
company’s new General Counsel. Alice has heard about the GDPR, so she does some research on it.
Alice approaches Joe and informs him that she has drafted up Binding Corporate Rules for everyone in the
company to follow, as it is important for the company to have in place a legal mechanism to transfer data
internally from the company’s operations in the European Union to the U.S.

Joe believes that Alice is doing a great job, and informs her that she will also be in-charge of handling a
major lawsuit that has been brought against the company in federal court in the U.S. To prepare for the
lawsuit, Alice instructs the company’s IT department to make copies of the computer hard drives from the
entire global sales team, including the European Union, and send everything to her so that she can review
everyone’s information. Alice believes that Joe will be happy that she did the first level review, as it will
save the company a lot of money that would otherwise be paid to its outside law firm.

When Ben had the company collect additional data from its customers, the most serious violation of the

GDPR occurred because the processing of the data created what?`,options:[`A. An information security risk by copying the data into a new database.`,`B. A potential legal liability and financial exposure from its customers.`,`C. A significant risk to the customers’ fundamental rights and freedoms.`,`D. A significant risk due to the lack of an informed consent mechanism. 6`],correctAnswer:`C`,explanation:`正确答案 C。Ben 在未取得合法依据的情况下收集客户的哲学信仰、政治观点等第 9 条特殊类别数据，并
将单身客户数据挪用至秘密运营的交友网站数据库，这种未经充分知情同意、涉及高度敏感数据类别且
用途严重偏离原始目的的处理，对客户的基本权利和自由（尤其隐私权、个人数据保护权及可能的人身
安全风险）构成重大且实质性的风险，是本情节中最严重的 GDPR 违规后果。A（信息安全风险，虽然存
在但并非“最严重”违规的核心）、B（潜在法律责任和财务风险，属于处理结果而非处理行为本身的性
质）、D（笼统指同意机制缺陷，未能概括本案更深层的权利风险）均不如 C 准确抓住违规的实质与严重
性。知识点：第 5(1)(a)条及第 9 条框架下，处理特殊类别数据且严重偏离原始目的对数据主体基本权利
自由造成的重大风险。`,topic:`GDPR`,verified:`accurate`},{id:169,question:`SCENARIO
Please use the following to answer the next question:

Joe started the Gummy Bear Company in 2000 from his home in Vermont, USA. Today, it is a multi-billion-
dollar candy company operating in every continent. All of the company’s IT servers are located in Vermont.
This year Joe hires his son Ben to join the company and head up Project Big, which is a major marketing
strategy to triple gross revenue in just 5 years. Ben graduated with a PhD in computer software from a top
university. Ben decided to join his father’s company, but is also secretly working on launching a new global
online dating website company called Ben Knows Best.

Ben is aware that the Gummy Bear Company has millions of customers and believes that many of them
might also be interested in finding their perfect match. For Project Big, Ben redesigns the company’s
online web portal and requires customers in the European Union and elsewhere to provide additional
personal information in order to remain a customer. Project Ben begins collecting data about customers’
philosophical beliefs, political opinions and marital status.

If a customer identifies as single, Ben then copies all of that customer’s personal data onto a separate
database for Ben Knows Best. Ben believes that he is not doing anything wrong, because he explicitly
asks each customer to give their consent by requiring them to check a box before accepting their
information. As Project Big is an important project, the company also hires a first year college student

named Sam, who is studying computer science to help Ben out.

Ben calls out sick and Sam comes across the Ben Knows Best database. Sam is planning on going to
Ireland over Spring Beak with 10 of his friends, so he copies all of the customer information of people that
reside in Ireland so that he and his friends can contact people when they are in Ireland.

Joe also hires his best friend’s daughter, Alice, who just graduated from law school in the U.S., to be the
company’s new General Counsel. Alice has heard about the GDPR, so she does some research on it.
Alice approaches Joe and informs him that she has drafted up Binding Corporate Rules for everyone in the
company to follow, as it is important for the company to have in place a legal mechanism to transfer data
internally from the company’s operations in the European Union to the U.S.

Joe believes that Alice is doing a great job, and informs her that she will also be in-charge of handling a
major lawsuit that has been brought against the company in federal court in the U.S. To prepare for the
lawsuit, Alice instructs the company’s IT department to make copies of the computer hard drives from the
entire global sales team, including the European Union, and send everything to her so that she can review
everyone’s information. Alice believes that Joe will be happy that she did the first level review, as it will
save the company a lot of money that would otherwise be paid to its outside law firm.

In preparing the company for its impending lawsuit, Alice’s instruction to the company’s IT Department

violated Article 5 of the GDPR because the company failed to first do what?`,options:[`A. Send out consent forms to all of its employees.`,`B. Minimize the amount of data collected for the lawsuit.`,`C. Inform all of its employees about the lawsuit.`,`D. Encrypt the data from all of its employees.`],correctAnswer:`B`,explanation:`正确答案 B。Alice 在准备诉讼时指示 IT 部门复制全体全球销售团队（包含欧盟员工）的整个硬盘内容，
而非仅提取与诉讼实际相关的必要信息，这明显违反第 5(1)(c)条数据最小化原则——收集的数据应限于
实现处理目的所必需的范围，而非不加区分地全量复制。A（发同意表，本案合法依据应考虑合法利益或
法律义务而非需逐一取得员工同意）、C（告知员工诉讼情况，属程序性事项非本题核心违规点）、D
（加密数据，属安全措施而非目的限制/数据最小化问题）均不是本题聚焦的违规点。知识点：第 5(1)(c)
条数据最小化原则在电子取证（e-discovery）场景中的应用。`,topic:`GDPR`,verified:`accurate`},{id:170,question:`SCENARIO

Please use the following to answer the next question:

Joe started the Gummy Bear Company in 2000 from his home in Vermont, USA. Today, it is a multi-billion-
dollar candy company operating in every continent. All of the company’s IT servers are located in Vermont.
This year Joe hires his son Ben to join the company and head up Project Big, which is a major marketing
strategy to triple gross revenue in just 5 years. Ben graduated with a PhD in computer software from a top
university. Ben decided to join his father’s company, but is also secretly working on launching a new global
online dating website company called Ben Knows Best.

Ben is aware that the Gummy Bear Company has millions of customers and believes that many of them
might also be interested in finding their perfect match. For Project Big, Ben redesigns the company’s
online web portal and requires customers in the European Union and elsewhere to provide additional
personal information in order to remain a customer. Project Ben begins collecting data about customers’
philosophical beliefs, political opinions and marital status.

If a customer identifies as single, Ben then copies all of that customer’s personal data onto a separate
database for Ben Knows Best. Ben believes that he is not doing anything wrong, because he explicitly
asks each customer to give their consent by requiring them to check a box before accepting their
information. As Project Big is an important project, the company also hires a first year college student
named Sam, who is studying computer science to help Ben out.

Ben calls out sick and Sam comes across the Ben Knows Best database. Sam is planning on going to
Ireland over Spring Beak with 10 of his friends, so he copies all of the customer information of people that
reside in Ireland so that he and his friends can contact people when they are in Ireland.

Joe also hires his best friend’s daughter, Alice, who just graduated from law school in the U.S., to be the
company’s new General Counsel. Alice has heard about the GDPR, so she does some research on it.
Alice approaches Joe and informs him that she has drafted up Binding Corporate Rules for everyone in the

company to follow, as it is important for the company to have in place a legal mechanism to transfer data
internally from the company’s operations in the European Union to the U.S.

Joe believes that Alice is doing a great job, and informs her that she will also be in-charge of handling a
major lawsuit that has been brought against the company in federal court in the U.S. To prepare for the
lawsuit, Alice instructs the company’s IT department to make copies of the computer hard drives from the
entire global sales team, including the European Union, and send everything to her so that she can review
everyone’s information. Alice believes that Joe will be happy that she did the first level review, as it will
save the company a lot of money that would otherwise be paid to its outside law firm.

As a result of Sam’s actions, the Gummy Bear Company potentially violated Articles 33 and 34 of the
GDPR and will be required to do what?`,options:[`A. Notify its Data Protection Authority about the data breach.`,`B. Analyze and evaluate the liability for customers in Ireland.`,`C. Analyze and evaluate all of its breach notification obligations.`,`D. Notify all of its customers that reside in the European Union.`],correctAnswer:`C`,explanation:`正确答案 C。Sam 的未授权复制至少构成需要记录和评估的安全事件。控制者应先分析数据类别、影响人数、可识
别性、可能后果及现有保护措施，分别判断第 33 条监管机构通知（可能造成风险）和第 34 条数据主体通知（可能
造成高风险）是否触发。仅凭题干不能直接断定必须通知监管机构或所有客户，故 C 最准确。`,topic:`GDPR`,verified:`corrected`},{id:171,question:`SCENARIO
Please use the following to answer the next question:

Joe started the Gummy Bear Company in 2000 from his home in Vermont, USA. Today, it is a multi-billion-

dollar candy company operating in every continent. All of the company’s IT servers are located in Vermont.
This year Joe hires his son Ben to join the company and head up Project Big, which is a major marketing

strategy to triple gross revenue in just 5 years. Ben graduated with a PhD in computer software from a top

university. Ben decided to join his father’s company, but is also secretly working on launching a new global

online dating website company called Ben Knows Best. 6
Ben is aware that the Gummy Bear Company has millions of customers and believes that many of them
might also be interested in finding their perfect match. For Project Big, Ben redesigns the company’s
online web portal and requires customers in the European Union and elsewhere to provide additional
personal information in order to remain a customer. Project Ben begins collecting data about customers’
philosophical beliefs, political opinions and marital status.

If a customer identifies as single, Ben then copies all of that customer’s personal data onto a separate
database for Ben Knows Best. Ben believes that he is not doing anything wrong, because he explicitly
asks each customer to give their consent by requiring them to check a box before accepting their

information. As Project Big is an important project, the company also hires a first year college student
named Sam, who is studying computer science to help Ben out.

Ben calls out sick and Sam comes across the Ben Knows Best database. Sam is planning on going to
Ireland over Spring Beak with 10 of his friends, so he copies all of the customer information of people that
reside in Ireland so that he and his friends can contact people when they are in Ireland.

Joe also hires his best friend’s daughter, Alice, who just graduated from law school in the U.S., to be the
company’s new General Counsel. Alice has heard about the GDPR, so she does some research on it.
Alice approaches Joe and informs him that she has drafted up Binding Corporate Rules for everyone in the
company to follow, as it is important for the company to have in place a legal mechanism to transfer data
internally from the company’s operations in the European Union to the U.S.

Joe believes that Alice is doing a great job, and informs her that she will also be in-charge of handling a
major lawsuit that has been brought against the company in federal court in the U.S. To prepare for the
lawsuit, Alice instructs the company’s IT department to make copies of the computer hard drives from the
entire global sales team, including the European Union, and send everything to her so that she can review
everyone’s information. Alice believes that Joe will be happy that she did the first level review, as it will
save the company a lot of money that would otherwise be paid to its outside law firm.

The data transfer mechanism that Alice drafted violates the GDPR because the company did not first get
approval from?`,options:[`A. The Court of Justice of the European Union.`,`B. The European Data Protection Board.`,`C. The Data Protection Authority.`,`D. The European Commission.`],correctAnswer:`C`,explanation:`正确答案 C。Alice 起草的 BCRs 作为跨境传输机制，依据第 47 条须经有管辖权的数据保护监管机构
（DPA）审批通过（并经一致性机制确认）后方可生效使用，公司未经此审批程序即在内部推行使用，
构成违反跨境传输合法性要求。A、B、D 并非 BCRs 生效所需的直接审批主体（CJEU 负责司法裁决而非
行政审批，EDPB 主要参与一致性意见形成而非直接“批准”单个企业的 BCRs，欧盟委员会负责的是标准
合同条款和充分性认定而非 BCRs 审批）。知识点：第 47 条约束性企业规则（BCRs）须经监管机构批准
方可生效的强制性程序。`,topic:`监管机构`,verified:`accurate`},{id:172,question:`SCENARIO
Please use the following to answer the next question:

Joe started the Gummy Bear Company in 2000 from his home in Vermont, USA. Today, it is a multi-billion-
dollar candy company operating in every continent. All of the company’s IT servers are located in Vermont.
This year Joe hires his son Ben to join the company and head up Project Big, which is a major marketing
strategy to triple gross revenue in just 5 years. Ben graduated with a PhD in computer software from a top
university. Ben decided to join his father’s company, but is also secretly working on launching a new global
online dating website company called Ben Knows Best.

Ben is aware that the Gummy Bear Company has millions of customers and believes that many of them
might also be interested in finding their perfect match. For Project Big, Ben redesigns the company’s

online web portal and requires customers in the European Union and elsewhere to provide additional

personal information in order to remain a customer. Project Ben begins collecting data about customers’
philosophical beliefs, political opinions and marital status.

If a customer identifies as single, Ben then copies all of that customer’s personal data onto a separate

database for Ben Knows Best. Ben believes that he is not doing anything wrong, because he explicitly
asks each customer to give their consent by requiring them to check a box before accepting their

information. As Project Big is an important project, the company also hires a first year college student
named Sam, who is studying computer science to help Ben out.

Ben calls out sick and Sam comes across the Ben Knows Best database. Sam is planning on going to
Ireland over Spring Beak with 10 of his friends, so he copies all of the customer information of people that
reside in Ireland so that he and his friends can contact people when they are in Ireland.

Joe also hires his best friend’s daughter, Alice, who just graduated from law school in the U.S., to be the
company’s new General Counsel. Alice has heard about the GDPR, so she does some research on it.
Alice approaches Joe and informs him that she has drafted up Binding Corporate Rules for everyone in the
company to follow, as it is important for the company to have in place a legal mechanism to transfer data
internally from the company’s operations in the European Union to the U.S.

Joe believes that Alice is doing a great job, and informs her that she will also be in-charge of handling a
major lawsuit that has been brought against the company in federal court in the U.S. To prepare for the
lawsuit, Alice instructs the company’s IT department to make copies of the computer hard drives from the
entire global sales team, including the European Union, and send everything to her so that she can review
everyone’s information. Alice believes that Joe will be happy that she did the first level review, as it will
save the company a lot of money that would otherwise be paid to its outside law firm.

Ben’s collection of additional data from customers created several potential issues for the company, which
would most likely require what?`,options:[`A. New corporate governance and code of conduct.`,`B. A data protection impact assessment.`,`C. A comprehensive data inventory.`,`D. Hiring a data protection officer.`],correctAnswer:`B`,explanation:`正确答案 B。Ben 新增收集客户的哲学信仰、政治观点等敏感个人数据，并结合其他数据进行匹配用于交
友撮合等新用途，这类涉及特殊类别数据、大规模处理且很可能对数据主体权利自由带来高风险的活
动，依第 35 条须开展 DPIA 予以评估。A（笼统的公司治理与行为守则调整，属于组织层面的宏观合规
建议，并非法定强制的直接应对措施）、C（数据盘点，是 DPIA 的基础工作之一但本身并非充分的合规
回应）、D（雇佣 DPO，是否强制取决于第 37 条触发条件是否满足，并非本情节问题的直接、必然解决
方案）均不如 B 准确对应“新增高风险处理”这一核心问题。知识点：第 35 条 DPIA 触发情形——新增涉
及特殊类别数据的大规模、高风险处理活动。`,topic:`GDPR`,verified:`accurate`},{id:173,question:`Which of the following was the first legally binding international instrument in the area of data protection?`,options:[`A. Convention 108.`,`B. General Data Protection Regulation.`,`C. Universal Declaration of Human Rights.`,`D. EU Directive on Privacy and Electronic Communications.`],correctAnswer:`A`,explanation:`正确答案 A。欧洲理事会 108 号公约（1981 年开放签署）是全球首个具有法律约束力的国际数据保护条
约，早于 GDPR（2016 年通过）及 ePrivacy 指令。世界人权宣言（C，1948 年）虽包含隐私权的原则性
宣示，但并非专门针对数据保护、且不具备条约意义上的直接法律约束力（属宣言性质而非条约）。知
识点：108 号公约作为首个具有法律约束力的国际数据保护条约的历史地位。`,topic:`ePrivacy指令`,verified:`accurate`},{id:174,question:`A multinational company is appointing a mandatory data protection officer. In addition to considering the
rules set out in Article 37 (1) of the GDPR, which of the following actions must the company also undertake
to ensure compliance in all EU jurisdictions in which it operates?`,options:[`A. Consult national derogations to evaluate if there are additional cases to be considered in relation to the matter.`,`B. Conduct a Data Protection Privacy Assessment on the processing operations of the company in all the countries it operates.`,`C. Assess whether the company has more than 250 employees in each of the EU member-states in which it is established.`,`D. Revise the data processing activities of the company that affect more than one jurisdiction to evaluate whether they comply with the principles of privacy by design and by default.`],correctAnswer:`A`,explanation:`正确答案 A。GDPR 第 37(4) 条允许欧盟法或成员国法在第 37(1) 条之外规定追加必须指定 DPO 的情形。跨国公司因
此应逐一检查其经营所在成员国的补充规则或开放条款。B、C、D 均不是确保各司法辖区 DPO 指定合规的直接步
骤。`,topic:`GDPR`,verified:`corrected`},{id:175,question:`The European Parliament jointly exercises legislative and budgetary functions with which of the following?`,options:[`A. The European Commission.`,`B. The Article 29 Working Party.`,`C. The Council of the European Union.`,`D. The European Data Protection Board.`],correctAnswer:`C`,explanation:`正确答案 C。根据欧盟条约框架下的普通立法程序，欧洲议会与欧盟理事会共同行使立法权和预算权，
两机构须共同通过法案方可生效（共同决定程序）。欧盟委员会（A）负责提案和执行，而非与议会共享
立法/预算职权本身；第 29 条工作组（B）和 EDPB（D）均为数据保护领域的咨询/协调机构，与欧盟整
体立法预算程序无关。知识点：欧洲议会与欧盟理事会共同行使立法与预算职权（共同决定程序）。`,topic:`监管机构`,verified:`accurate`},{id:176,question:`A U.S. company’s website sells widgets. Which of the following factors would NOT in itself subject the
company to the GDPR?`,options:[`A. The widgets are offered in EU and priced in euro.`,`B. The website is in English and French, and is accessible in France.`,`C. An affiliate office is located in France but the processing is in the U.S.`,`D. The website places cookies to monitor the EU website user behavior.`],correctAnswer:`B`,explanation:`正确答案 B。网站可在法国访问、使用英语和法语，本身不足以证明经营者有意向欧盟数据主体提供商品或服务。A
以欧元报价是明确的欧盟市场指向因素；D 通过 cookie 监测欧盟用户行为可触发第 3(2)(b) 条；C 若法国关联机构通
过稳定安排参与相关业务，处理即使在美国完成也可能属于第 3(1) 条“在欧盟设立机构活动背景下”的处理。`,topic:`ePrivacy指令`,verified:`corrected`},{id:177,question:`When does the European Data Protection Board (EDPB) recommend reevaluating whether a transfer tool
is effectively providing a level of personal data protection that is in compliance with the European Union
(EU) level?`,options:[`A. After a personal data breach.`,`B. Every three (3) years.`,`C. On an ongoing basis.`,`D. Every year.`],correctAnswer:`C`,explanation:`正确答案 C。EDPB 在 Schrems II 判决后发布的补充措施建议中强调，数据出口方应对传输工具（如
SCC）所提供的保护水平进行“持续性”（on an ongoing basis）监测和评估，而非仅在特定固定周期（如每
年或每三年，B、D）或仅在发生数据泄露后（A）才进行评估，因为第三国法律环境可能随时发生变
化，需持续跟踪。知识点：EDPB 关于跨境传输保护水平持续评估义务的建议（Schrems II 判决后的补充
措施指南）。`,topic:`判例法`,verified:`accurate`},{id:178,question:`Which judicial body makes decisions on actions taken by individuals wishing to enforce their rights under
EU law?`,options:[`A. Court of Auditors`,`B. Court of Justice of European Union`,`C. European Court of Human Rights`,`D. European Data Protection Board`],correctAnswer:`B`,explanation:`正确答案 B。欧盟法院（CJEU）负责就欧盟法律的解释和适用作出终局裁决，包括个人依据欧盟法（如
GDPR）寻求权利救济时的相关诉讼（含成员国法院提请的初步裁决程序）。审计法院（A）负责欧盟财
政审计；欧洲人权法院（C）审理的是《欧洲人权公约》项下的申诉，与欧盟法律体系是两套独立机制；
EDPB（D）是行政协调机构而非司法机构，无权作出司法裁决。知识点：CJEU 作为欧盟法律解释与个人
权利救济的最终司法机构，及其与 ECtHR、EDPB 的区分。`,topic:`判例法`,verified:`accurate`},{id:179,question:`SCENARIO

Please use the following to answer the next question:

Sandy recently joined Market4U, an advertising technology company founded in 2016, as their VP of
Privacy and Data Governance. Through her first initiative in conducting a data inventory, Sandy learned
that Market4U maintains a list of 19 million global contacts that were collected throughout the course of
Market4U’s existence. Knowing the risk of having such a large amount of data, Sandy wanted to purge all
contacts that were entered into Market4U’s systems prior to May 2018, unless such contacts had a more
recent interaction with Market4U content. However, Dan, the VP of Sales, informed Sandy that all of the
contacts provide useful information regarding successful marketing campaigns and trends in industry
verticals for Market4U’s clients.

Dan also informed Sandy that he had wanted to focus on gaining more customers within the sports and
entertainment industry. To assist with this behavior, Market4U’s marketing team decided to add several

new fields to Market4U’s website forms, including forms for downloading white papers, creating accounts
to participate in Market4U’s forum, and attending events. Such fields include birth date and salary.

What should Sandy give as feedback to Dan and the marketing team regarding the new fields Dan wants
to add to Market4U’s forms?`,options:[`A. Make all the fields optional.`,`B. Only request the information in brackets (i.e., age group and salary range).`,`C. Eliminate the fields, as they are not proportional to the services being offered.`,`D. Eliminate the fields as they are not necessary for the purposes of providing white papers or registration for events.`],correctAnswer:`D`,explanation:`正确答案 D。生日和薪资信息与下载白皮书、创建论坛账户或活动报名等服务的实现之间不存在必要关
联，收集这些字段违反第 5(1)(c)条数据最小化原则，正确做法是直接取消这些非必要字段，而非仅设为
可选（A，可选并不能改变“非必要收集”这一本质问题）、以区间代替精确值收集（B，即便区间化仍可
能构成非必要收集）或泛泛地以“不成比例”为由处理（C，表述不如 D 具体准确地指出“非实现该服务目
的所必需”这一核心法律标准）。知识点：第 5(1)(c)条数据最小化原则——收集字段须与处理目的具有必
要关联性。`,topic:`GDPR`,verified:`accurate`},{id:180,question:`SCENARIO

Please use the following to answer the next question:

Sandy recently joined Market4U, an advertising technology company founded in 2016, as their VP of
Privacy and Data Governance. Through her first initiative in conducting a data inventory, Sandy learned
that Market4U maintains a list of 19 million global contacts that were collected throughout the course of
Market4U’s existence. Knowing the risk of having such a large amount of data, Sandy wanted to purge all
contacts that were entered into Market4U’s systems prior to May 2018, unless such contacts had a more

recent interaction with Market4U content. However, Dan, the VP of Sales, informed Sandy that all of the

contacts provide useful information regarding successful marketing campaigns and trends in industry
verticals for Market4U’s clients.

Dan also informed Sandy that he had wanted to focus on gaining more customers within the sports and

entertainment industry. To assist with this behavior, Market4U’s marketing team decided to add several
new fields to Market4U’s website forms, including forms for downloading white papers, creating accounts
to participate in Market4U’s forum, and attending events. Such fields include birth date and salary.

What is the best way that Sandy can gain the insights that Dan seeks while still minimizing risks for
Market4U?`,options:[`A. Conduct analysis only on anonymized personal data.`,`B. Conduct analysis only on pseudonymized personal data.`,`C. Delete all data collected prior to May 2018 after conducting the trend analysis.`,`D. Procure a third party to conduct the analysis and delete the data from Market4U’s systems.`],correctAnswer:`A`,explanation:`正确答案 A。为在满足 Dan 获取行业趋势洞察需求的同时最大限度降低隐私风险，最佳做法是仅对已完
全匿名化、无法重新识别到具体个人的数据进行趋势分析，因为匿名化数据不再受 GDPR 约束，可自由
用于统计分析；假名化数据（B）仍是个人数据，风险依然存在；仅在分析后才删除数据（C）无法在分
析阶段本身降低风险；委托第三方分析并事后删除（D）不仅未降低风险，反而增加了额外的数据共享和
处理者管理风险。知识点：匿名化作为在保留数据分析价值的同时消除 GDPR 合规风险的最佳技术手
段。`,topic:`GDPR`,verified:`accurate`},{id:181,question:`A data controller appoints a data protection officer. Which of the following conditions would NOT result in
an infringement of Articles 37 to 39 of the GDPR?`,options:[`A. If the data protection officer lacks ISO 27001 auditor certification.`,`B. If the data protection officer is provided by the data processor.`,`C. If the data protection officer also manages the marketing budget.`,`D. If the data protection officer receives instructions from the data controller.`],correctAnswer:`A`,explanation:`答案 A 明确不构成违规，因为 GDPR 不要求 DPO 具备特定 ISO 认证。B 也并非当然违规：DPO 可依据服务合同由
外部个人或机构提供；只有在处理者角色造成利益冲突、缺乏独立性或无法履职时才会违规。因此本题有一定歧
义。`,topic:`GDPR`,verified:`qualified`},{id:182,question:`Data retention in the EU was underpinned by a legal framework established by the Data Retention
Directive (2006/24/EC). Why is the Directive no longer part of EU law?`,options:[`A. The Directive was superseded by the EU Directive on Privacy and Electronic Communications.`,`B. The Directive was superseded by the General Data Protection Regulation.`,`C. The Directive was annulled by the Court of Justice of the European Union.`,`D. The Directive was annulled by the European Court of Human Rights.`],correctAnswer:`C`,explanation:`正确答案 C。数据留存指令因欧洲法院在 Digital Rights Ireland 案（2014）中认定其对隐私权和数据保护
权的干预不成比例而被宣告无效（annulled），而非被其他立法“取代”（A、B 均为错误表述，尽管
ePrivacy 指令及 GDPR 确实涉及相关领域，但数据留存指令的失效并非源于被这些法律“取代”，而是被欧
洲法院直接宣告无效）；欧洲人权法院（D）并非该案的审理法院，审理该案的是欧盟法院（CJEU）。
知识点：Digital Rights Ireland 案及数据留存指令因比例原则被欧盟法院宣告无效。`,topic:`ePrivacy指令`,verified:`accurate`},{id:183,question:`Which of the following is the weakest lawful basis for processing employee personal data?`,options:[`A. Processing based on fulfilling an employment contract.`,`B. Processing based on employee consent.`,`C. Processing based on legitimate interests.`,`D. Processing based on legal obligation.`],correctAnswer:`B`,explanation:`正确答案 B。基于同意作为雇佣关系中处理员工数据的合法依据被认为是最薄弱的选择，原因在于雇主
与员工之间存在明显的权力不对等，员工的同意往往难以被视为真正“自由给予”（前言第 43 条），一旦
同意被认定无效，处理即丧失合法依据基础。相较之下，履行劳动合同（A）、法定义务（D）、合法利
益（C，须经审慎的利益平衡测试）通常在雇佣场景下更为稳健和适用。知识点：同意在雇佣关系中作为
合法依据的固有弱点（权力不对等下的自愿性缺陷）。`,topic:`GDPR`,verified:`accurate`},{id:184,question:`An organization receives a request multiple times from a data subject seeking to exercise his rights with
respect to his own personal data. Under what condition can the organization charge the data subject a fee
for processing the request?`,options:[`A. Only where the organization can show that it is reasonable to do so because more than one request was made.`,`B. Only to the extent this is allowed under the restrictions on data subjects’ rights introduced under Art 23 of GDPR.`,`C. Only where the administrative costs of taking the action requested exceeds a certain threshold.`,`D. Only if the organization can demonstrate that the request is clearly excessive or misguided.`],correctAnswer:`D`,explanation:`答案 D 应按 GDPR 第 12(5) 条理解为“请求明显无依据（manifestly unfounded）或过度（excessive）”。“misguided”并
非法定标准；仅仅重复请求也不自动允许收费，控制者负有证明责任。`,topic:`GDPR`,verified:`qualified`},{id:185,question:`To receive a preliminary interpretation on provisions of the GDPR, a national court will refer its case to
which of the following?`,options:[`A. The Court of Justice of the European Union.`,`B. The European Data Protection Supervisor.`,`C. The European Court of Human Rights.`,`D. The European Data Protection Board.`],correctAnswer:`A`,explanation:`正确答案 A。当成员国法院在审理案件过程中对欧盟法（包括 GDPR）的解释存在疑问时，依据 TFEU 第
267 条可（在终审法院则须）向欧盟法院（CJEU）提起“初步裁决请求”（preliminary ruling），以获得具
有约束力的权威解释。B（EDPS 负责监督欧盟机构自身的数据处理，非成员国法院寻求法律解释的对
象）、C（ECtHR 审理的是欧洲人权公约项下的申诉而非欧盟法解释请求）、D（EDPB 是行政协调机构
而 非司 法机 构 ）均 不具 备 此项 职能 。 知识 点： TFEU 第 267 条 初步 裁决 程 序及 CJEU 对 欧盟 法（ 含
GDPR）的权威解释职能。`,topic:`判例法`,verified:`accurate`},{id:186,question:`A grade school is planning to use facial recognition to track student attendance. Which of the following
may provide a lawful basis for this processing?`,options:[`A. The school places a notice near each camera.`,`B. The school gets explicit consent from the students.`,`C. Processing is necessary for the legitimate interests pursed by the school.`,`D. A state law requires facial recognition to verify attendance.`],correctAnswer:`D`,explanation:`正确答案 D。当法律（如某州/成员国法律）明确要求学校使用人脸识别技术核验出勤时，该处理的合法
依据可依托第 6(1)(c)条“履行控制者所负法定义务”（结合第 9(2)(g)条“基于重大公共利益的成员国法律”处
理生物识别数据的例外，因人脸识别涉及第 9 条生物识别特殊类别数据）。A（张贴告示，仅满足透明度
要求，不构成独立合法依据）、B（学生同意，在校方与未成年学生存在权力不对等的教育场景中，同意
的自愿性通常存疑，尤其对未成年人更是如此）、C（笼统主张合法利益，在处理生物识别这类特殊类别
数据时，合法利益本身并不足以满足第 9 条更严格的例外要求）均不如 D 稳妥准确。知识点：处理生物
识别等特殊类别数据须同时满足第 6 条一般合法依据和第 9 条特殊类别数据例外的双重要求，法定义务+
重大公共利益的成员国法律是常见组合依据。`,topic:`GDPR`,verified:`accurate`},{id:187,question:`SCENARIO

Please use the following to answer the next question:

ABC Hotel Chain and XYZ Travel Agency are U.S.-based multinational companies. They use an internet-

based common platform for collecting and sharing their customer data with each other, in order to
integrate their marketing efforts. Additionally, they agree on the data to be stored, how reservations will be

booked and confirmed, and who has access to the stored data.

Mike, an EU resident, has booked travel itineraries in the past through XYZ Travel Agency to stay at ABC
Hotel Chain’s locations. XYZ Travel Agency offers a rewards program that allows customers to sign up to
accumulate points that can later be redeemed for free travel. Mike has signed the agreement to be a
rewards program member.

Now Mike wants to know what personal information the company holds about him. He sends an email
requesting access to his data, in order to exercise what he believes are his data subject rights.

What is the time period in which Mike should receive a response to his request?`,options:[`A. Not more than one month of receipt of Mike’s request.`,`B. Not more than two months after verifying Mike’s identity.`,`C. When all the information about Mike has been collected.`,`D. Not more than thirty days after submission of Mike’s request.`],correctAnswer:`A`,explanation:`正确答案 A。第 12(3)条规定，控制者应在收到访问请求后一个月内响应（如请求复杂可延长至多两个
月，但须在首月内告知延期原因及理由），A 准确反映这一基本期限起算点（自收到请求之日起），而
非以身份核实完成后起算（B，身份核实通常应在请求收到后尽快完成，而非将响应期限的起算点推迟至
核实完成之后另计）、以数据收集完毕为准（C，缺乏时限约束，不符合法条精神）或使用“30 天”这一非
法定单位表述（D，法条使用的是“一个月”而非固定 30 天，两者虽接近但并非完全等同的法律术语）。
知识点：第 12(3)条数据主体访问请求响应期限的起算及计算方式。`,topic:`GDPR`,verified:`accurate`},{id:188,question:`SCENARIO

Please use the following to answer the next question:

ABC Hotel Chain and XYZ Travel Agency are U.S.-based multinational companies. They use an internet-

based common platform for collecting and sharing their customer data with each other, in order to
integrate their marketing efforts. Additionally, they agree on the data to be stored, how reservations will be
booked and confirmed, and who has access to the stored data.

Mike, an EU resident, has booked travel itineraries in the past through XYZ Travel Agency to stay at ABC
Hotel Chain’s locations. XYZ Travel Agency offers a rewards program that allows customers to sign up to
accumulate points that can later be redeemed for free travel. Mike has signed the agreement to be a
rewards program member.

Now Mike wants to know what personal information the company holds about him. He sends an email
requesting access to his data, in order to exercise what he believes are his data subject rights.

What are ABC Hotel Chain and XYZ Travel Agency’s roles in this relationship?`,options:[`A. ABC Hotel Chain is the controller and XYZ Travel Agency is the processor.`,`B. XYZ Travel Agency is the controller and ABC Hotel Chain is the processor.`,`C. ABC Hotel Chain and XYZ Travel Agency are independent controllers.`,`D. ABC Hotel Chain and XYZ Travel Agency are joint controllers.`],correctAnswer:`D`,explanation:`正确答案 D。ABC 酒店集团与 XYZ 旅行社共同决定通过共享平台收集、存储客户数据的方式、内容及访
问权限，共同参与决定处理的目的和方式，符合第 26 条“共同控制者”（joint controllers）的认定标准，双
方须通过协议明确各自的责任分工。A、B（将其中一方定性为处理者，忽略了双方共同决策处理方式和
目的的事实）、C（独立控制者，忽略了双方在同一平台上协作决定处理目的和方式的共同性）均不准
确。知识点：第 26 条共同控制者的认定标准——共同决定处理的目的和方式。`,topic:`GDPR`,verified:`accurate`},{id:189,question:`SCENARIO

Please use the following to answer the next question:

ABC Hotel Chain and XYZ Travel Agency are U.S.-based multinational companies. They use an internet-

based common platform for collecting and sharing their customer data with each other, in order to

integrate their marketing efforts. Additionally, they agree on the data to be stored, how reservations will be

booked and confirmed, and who has access to the stored data. 6
Mike, an EU resident, has booked travel itineraries in the past through XYZ Travel Agency to stay at ABC
Hotel Chain’s locations. XYZ Travel Agency offers a rewards program that allows customers to sign up to
accumulate points that can later be redeemed for free travel. Mike has signed the agreement to be a
rewards program member.

Now Mike wants to know what personal information the company holds about him. He sends an email
requesting access to his data, in order to exercise what he believes are his data subject rights.

In which of the following situations would ABC Hotel Chain and XYZ Travel Agency NOT have to honor
Mike’s data access request?`,options:[`A. The request is to obtain access and correct inaccurate personal data in his profile.`,`B. The request is to obtain access and information about the purpose of processing his personal data.`,`C. The request is to obtain access and erasure of his personal data while keeping his rewards membership.`,`D. The request is to obtain access and the categories of recipients who have received his personal data to process his rewards membership.`],correctAnswer:`C`,explanation:`答案 C 是四项中最接近的选项，但题干把访问权与删除权混为一体。即使删除请求不能全部满足，控制者仍应回应
并履行访问权部分。对维持奖励会员关系所必需的数据，删除权可能因第 17(1)(a) 条的“数据仍为原目的所必需”而不
成立，或因其他适用的法定义务而受限；“履行合同所必需”并不是第 17(3)(b) 条列明的独立例外。`,topic:`GDPR`,verified:`qualified`},{id:190,question:`Which of the following Convention 108+ principles, as amended in 2018, is NOT consistent with a principle

found in the GDPR?`,options:[`A. The obligation of companies to declare data breaches.`,`B. The requirement to demonstrate compliance to a supervisory authority.`,`C. The lawfulness of the bulk collection of personal data by the government.`,`D. The necessity of establishing a specific legal basis for processing personal data.`],correctAnswer:`C`,explanation:`正确答案 C。经 2018 年现代化修订的 108+号公约明确要求政府对个人数据的收集和监控须符合必要性和
比例原则，并不认可无差别、无限制的政府大规模数据收集行为，这与 GDPR 及欧盟基本权利保护理念
（如 Digital Rights Ireland 案所体现的比例原则）是一致的，而非“合法”，因此 C 的表述（认可政府大规
模无差别收集数据的合法性）与 GDPR 原则不一致，是本题应选的“不一致项”。A（数据泄露申报义
务）、B（问责制下的合规证明义务）、D（须有具体合法依据）均是 108+号公约与 GDPR 理念高度一致
的原则。知识点：108+号公约（2018 现代化修订）与 GDPR 在政府大规模数据收集比例原则上的一致
性。`,topic:`Convention 108/108+`,verified:`accurate`},{id:191,question:`If a data subject puts a complaint before a DPA and receives no information about its progress or
outcome, how long does the data subject have to wait before taking action in the courts?`,options:[`A. 1 month.`,`B. 3 months.`,`C. 5 months.`,`D. 12 months.`],correctAnswer:`B`,explanation:`正确答案 B。根据 GDPR 体系及相关实践（前言第 141 条、第 78 条司法救济权），若数据主体向监管机
构投诉后三个月内未收到关于投诉处理进展或结果的告知，即可据此向法院提起诉讼寻求有效司法救
济，无需无限期等待监管机构处理。知识点：第 78(2)条及前言第 141 条——监管机构三个月内未回应投
诉时数据主体可诉诸法院的救济权。`,topic:`GDPR`,verified:`accurate`},{id:192,question:`For which of the following operations would an employer most likely be justified in requesting the data
subject’s consent?`,options:[`A. Posting an employee’s bicycle race photo on the company’s social media. 6`,`B. Processing an employee’s health certificate in order to provide sick leave.`,`C. Operating a CCTV system on company premises.`,`D. Assessing a potential employee’s job application.`],correctAnswer:`A`,explanation:`正确答案 A。在企业社交媒体上发布员工参加自行车比赛的照片，属于与雇佣关系履行、法定义务均无
必然关联的“额外”用途（本质上更接近宣传/公关性质），员工在此类非雇佣必需事项上拥有真正的自由
选择空间，因此同意可以成为恰当且有效的合法依据。B（处理健康证明以安排病假，属于履行雇佣合同
/法定义务的必要处理，不适合、也无需以同意作为依据）、C（运营 CCTV 系统，通常基于合法利益/安
全需要而非员工同意，且雇佣关系下同意的自愿性存疑）、D（评估求职申请，属于订立合同前的必要步
骤，同样不适合以同意作为依据）均不如 A 适合使用同意机制。知识点：雇佣关系中同意作为合法依据
的适用场景——仅限于真正非强制性、员工有实际自由选择权的处理活动。`,topic:`GDPR`,verified:`accurate`},{id:193,question:`An entity’s website stores text files on EU users’ computer and mobile device browsers. Prior to doing so,
the entity is required to provide users with notices containing information and consent under which of the
following frameworks?`,options:[`A. General Data Protection Regulation 2016/679.`,`B. E-Privacy Directive 2002/58/EC.`,`C. E-Commerce Directive 2000/31/EC.`,`D. Data Protection Directive 95/46/EC.`],correctAnswer:`B`,explanation:`正确答案 B。在用户设备终端存储或读取信息（如 cookie 等文本文件）的行为，专门由 ePrivacy 指令
（第 5(3)条“cookie 规则”）规制，要求企业事先提供信息并取得用户同意，这是相较 GDPR、电子商务指
令、原 95/46 指令更具体、更直接适用的专门规则。知识点：ePrivacy 指令第 5(3)条对终端设备存储/读取
信息（cookie）的专门规制。`,topic:`ePrivacy指令`,verified:`accurate`},{id:194,question:`All of the following are considered fair processing practices in relation to the transparency principle
EXCEPT?`,options:[`A. Providing a multi-layered privacy notice, in a website environment.`,`B. Providing a QR code linking to more detailed privacy notice, in a CCTV sign.`,`C. Providing a hyperlink to the organization’s home page, in a hard copy application form.`,`D. Providing a “just-in-time” contextual pop-up privacy notice, in an online application form field.`],correctAnswer:`C`,explanation:`正确答案 C。在纸质申请表上仅提供指向机构主页（而非具体隐私政策页面）的超链接，既不符合纸质
媒介本身无法直接点击访问的现实限制，也未能提供充分、具体、易于获取的隐私信息，不构成有效的
公平透明处理实践。A（网站分层通知）、B（CCTV 告示配二维码链接详细政策）、D（在线表单即时
情境弹窗提示）均是 ICO 透明度实践指南认可的有效透明度实现方式。知识点：ICO 透明度实践指南关
于不同媒介（纸质、网站、CCTV 等）下有效告知方式的具体要求。`,topic:`GDPR`,verified:`accurate`},{id:195,question:`Which of the following was the first to implement national law for data protection in 1973?`,options:[`A. France`,`B. Sweden`,`C. Germany`,`D. United Kingdom`],correctAnswer:`B`,explanation:`正确答案 B。瑞典于 1973 年颁布了《数据法》（Datalagen），是世界上第一部国家层面的综合性数据保
护立法，早于德国黑森州 1970 年的地方性立法（黑森州立法虽更早但属于州/地方层面而非国家层面法
律）及法国、英国后续的国家立法。知识点：瑞典 1973 年《数据法》作为全球首部国家层面数据保护立
法的历史地位。`,topic:`GDPR`,verified:`accurate`},{id:196,question:`The GDPR forbids the practice of “forum shopping”, which occurs when companies do what?`,options:[`A. Choose the data protection officer that is most sympathetic to their business concerns. 6`,`B. Designate their main establishment in member state with the most flexible practices.`,`C. File appeals of infringement judgments with more than one EU institution simultaneously.`,`D. Select third-party processors on the basis of cost rather than quality of privacy protection.`],correctAnswer:`B`,explanation:`正确答案 B。（与前述 Q100 同一知识点）“监管机构选购”（forum shopping）是指企业刻意将“主要设立
地”设在监管执法环境相对宽松的成员国，以规避严格监管，这被 GDPR 一站式机制的立法精神所禁止。
A、C、D 均非 forum shopping 的准确定义。知识点：一站式机制下主要设立地认定标准与 forum shopping
的禁止。`,topic:`GDPR`,verified:`accurate`},{id:197,question:`What is the most frequently used mechanism for legitimizing cross-border data transfer?`,options:[`A. Standard Contractual Clauses.`,`B. Approved Code of Conduct.`,`C. Binding Corporate Rules.`,`D. Derogations.`],correctAnswer:`A`,explanation:`正确答案 A。标准合同条款（SCCs）因其无需事先获得监管机构逐案批准、可直接采用欧盟委员会制定
的标准文本、灵活适用于各类跨境传输场景，是目前实践中使用最广泛的跨境传输合法化机制，相较约
束性企业规则（C，审批耗时较长，多用于大型跨国集团内部传输）、行为守则（B）、克减条款（D，
仅作为最后手段的例外情形）使用频率更高。知识点：标准合同条款（SCCs）作为最常用的跨境传输合
法化机制。`,topic:`GDPR`,verified:`accurate`},{id:198,question:`If a French controller has a car-sharing app available only in Morocco, Algeria and Tunisia, but the data

processing activities are carried out by the appointed processor in Spain, the GDPR will apply to the
processing of the personal data so long as?`,options:[`A. The individuals are European citizens or residents.`,`B. The data processing activities are in Spain.`,`C. The data controller is in France.`,`D. The EU individuals are targeted.`],correctAnswer:`C`,explanation:`正确答案 C。第 3(1)条设立地标准规定，只要处理活动是在欧盟设立机构“活动的背景下”进行的，无论该
处理实际发生地点在何处（此处为西班牙处理者执行处理）、也无论数据主体是否为欧盟居民或位于欧
盟境内（此处数据主体位于摩洛哥、阿尔及利亚、突尼斯等非欧盟国家），只要控制者本身在欧盟设立
（此处为法国控制者），该处理即受 GDPR 约束——这体现了设立地标准相较目标指向标准（第 3(2)
条，需数据主体位于欧盟境内）更宽泛的适用逻辑。知识点：第 3(1)条设立地标准的域内适用——不要
求处理发生地或数据主体位于欧盟境内，只要求控制者在欧盟设立且处理在其活动背景下进行。`,topic:`GDPR`,verified:`accurate`},{id:199,question:`Select the answer below that accurately completes the following:

“The right to compensation and liability under the GDPR…`,options:[`A. …provides for an exemption from liability if the data controller (or data processor) proves that it is not in any way responsible for the event giving rise to the damage.”`,`B. …precludes any subsequent recourse proceedings against other controllers or processors involved in the same processing.”`,`C. ...can only be exercised against the data controller, even if a data processor was involved in the same processing.”`,`D. …is limited to a maximum amount of EUR 20 million per event of damage or loss.”`],correctAnswer:`A`,explanation:`正确答案 A。第 82(3)条规定，控制者或处理者若能证明其对造成损害的事件完全不承担责任（即在任何
方面均无过错），可免除赔偿责任，这是唯一的法定免责事由。B（不排斥追偿权，控制者/处理者承担
全部赔偿后仍可向其他责任方追偿，第 82(5)条）、C（数据主体不仅可向控制者主张，也可直接向处理
者主张赔偿，视具体责任情形而定）、D（GDPR 并未设定统一的赔偿上限，与行政罚款上限是两套不同
机制）均不准确。知识点：第 82 条数据主体获得赔偿权利的免责事由及连带责任下的追偿权。`,topic:`GDPR`,verified:`accurate`},{id:200,question:`Pursuant to Article 4(5) of the GDPR, data is considered “pseudonymized” if?`,options:[`A. It cannot be attributed to a data subject without the use of additional information.`,`B. It cannot be attributed to a person under any circumstances.`,`C. It can only be attributed to a person by the controller.`,`D. It can only be attributed to a person by a third party.`],correctAnswer:`A`,explanation:`正确答案 A。第 4(5)条对“假名化”的定义核心是：个人数据在不借助另外保存的补充信息的情况下不能再
归属于特定数据主体。B（不可再识别，混淆了假名化与匿名化的概念，假名化理论上仍可通过补充信息
重新识别）、C、D（仅限控制者或第三方才能重新识别，并非该定义的核心要件，定义关注的是“是否需
要额外信息”而非“由谁掌握该信息”这一维度本身，尽管补充信息通常由控制者掌握并单独保存）均不如
A 准确对应法条原文。知识点：第 4(5)条假名化定义的准确表述。`,topic:`GDPR`,verified:`accurate`},{id:201,question:`According to Article 84 of the GDPR, the rules on penalties applicable to infringements shall be laid down
by?`,options:[`A. The local Data Protection Supervisory Authorities.`,`B. The European Data Protection Board.`,`C. The EU Commission.`,`D. The Member States.`],correctAnswer:`D`,explanation:`正确答案 D。第 84 条明确规定，成员国应自行制定适用于违反 GDPR 行为的处罚规则（尤其是不属于第
83 条行政罚款范畴的其他违规情形，如未落实行政罚款条款的违规行为，成员国须规定“有效、相称且具
有警示性”的处罚措施，含可能的刑事处罚），这属于成员国立法保留事项，而非欧盟层面统一规定。知
识点：第 84 条成员国就 GDPR 之外违规行为处罚规则的立法保留。`,topic:`GDPR`,verified:`accurate`},{id:202,question:`A company plans to transfer employee health information between two of its entities in France. To maintain
the security of the processing, what would be the most important security measure to apply to the health
data transmission?`,options:[`A. Inform the data subject of the security measures in place.`,`B. Ensure that the receiving entity has signed a data processing agreement.`,`C. Encrypt the transferred data in transit and at rest.`,`D. Conduct a data protection impact assessment.`],correctAnswer:`C`,explanation:`正确答案 C。对健康数据这类特殊类别数据在传输过程中，加密是保护数据机密性、防止未经授权访问
最直接、最核心的技术安全措施（第 32(1)(a)条明确列举加密为示例措施），尤其适用于传输中和静态存
储双重场景。A（告知数据主体安全措施，属透明度义务而非安全措施本身）、B（签订处理协议，适用
于控制者-处理者关系而非本案两个关联实体间传输的直接安全措施）、D（开展 DPIA，是风险评估的前
置程序而非传输本身的直接安全保护措施）均不如 C 直接对应“安全措施”这一问题核心。知识点：第 32
条安全处理措施——加密作为保护敏感数据传输的核心技术手段。`,topic:`GDPR`,verified:`accurate`},{id:203,question:`If a company chooses to ground an international data transfer on the contractual route, which of the
following is NOT a valid set of standard contractual clauses?`,options:[`A. Decision 2001/497/EC (EU controller to non-EU or EEA controller).`,`B. Decision 2004/915/EC (EU controller to non-EU or EEA controller).`,`C. Decision 2007/72/EC (EU processor to non-EU or EEA controller).`,`D. Decision 2010/87/EU (Non-EU or EEA processor from EU controller).`],correctAnswer:`无（现行法下四项均已过时；历史预期答案为 C）`,explanation:`本题已过时。现行法下 A、B、C、D 均不能作为新安排使用的有效 SCC 集合。欧盟委员会实施决定 (EU) 2021/914
自 2021 年起提供模块化跨境 SCC，并废止 2001/497/EC、2004/915/EC 和 2010/87/EU；旧合同过渡期已于 2022 年 12
月 27 日结束。按旧题历史语境，C 曾是预期答案，因为不存在 2007/72/EC 这一 SCC 决定。`,topic:`GDPR`,verified:`corrected`},{id:204,question:`Article 58 of the GDPR describes the power of supervisory authorities. Which of the following is NOT
among those granted?`,options:[`A. Legislative powers.`,`B. Corrective powers.`,`C. Investigatory powers.`,`D. Authorization and advisory powers.`],correctAnswer:`A`,explanation:`正确答案 A。第 58 条列明监管机构享有调查权（第 1 款，C）、更正权/纠正权（第 2 款，B）、授权及
咨询权（第 3 款，D），但监管机构本身并不享有制定新法律的“立法权”——立法权属于成员国议会及欧
盟立法机构（欧洲议会、欧盟理事会），监管机构仅在授权/执法层面行使职权，无权自行创设具有普遍
约束力的新法律规范。知识点：第 58 条监管机构三类职权（调查、纠正、授权咨询）与立法权的区分。`,topic:`GDPR`,verified:`accurate`},{id:205,question:`According to the European Data Protection Board, which of the following concepts or practices does NOT
follow from the principles relating to the processing of personal data under EU data protection law?`,options:[`A. Data ownership allocation.`,`B. Access control management.`,`C. Frequent pseudonymization key rotation.`,`D. Error propagation avoidance along the processing chain.`],correctAnswer:`A`,explanation:`正确答案 A。欧盟数据保护法律框架下的核心原则（如访问控制管理 B、避免处理链条中的错误传播 D、
假名化密钥定期轮换 C 作为安全和数据最小化实践）均与数据保护基本原则（尤其是完整性保密性、准
确性原则）密切相关；而“数据所有权分配”（data ownership）并非欧盟数据保护法的核心概念——GDPR
框架下讨论的是控制者/处理者的角色与责任分配，而非“数据所有权”这一非法律术语（欧盟数据保护法
并不采用“所有权”框架来描述个人数据上的权益）。知识点：欧盟数据保护法不采用“数据所有权”框架，
而是以控制者/处理者角色及数据主体权利体系为核心。`,topic:`GDPR`,verified:`accurate`},{id:206,question:`Which statement provides an accurate description of a directive?`,options:[`A. A directive specifies certain results that must be achieved, but each member state is free to decide how to turn it into a national law.`,`B. A directive has binding legal force throughout every member state and enters into force on a set date in all the member states.`,`C. A directive is a legal act relating to specific cases and directed towards member states, companies or private individuals.`,`D. A directive is a legal act that applies automatically and uniformly to all EU countries as soon as it enters into force.`],correctAnswer:`A`,explanation:`正确答案 A。“指令”（Directive）是欧盟对成员国规定应实现的特定结果或目标，但赋予各成员国在多大
程度上、以何种立法形式将其转化为本国法的自由裁量空间，与“条例”（Regulation，直接统一适用、无
需转化，对应 B、D 的描述）及“决定”（Decision，针对特定对象的具体法律行为，对应 C 的描述）在法
律 效 力 和 适 用 方 式 上 存 在 本 质 区 别 。 知 识 点 ： 欧 盟 法 律 渊 源 —— 指 令 （ Directive ） 与 条 例
（Regulation）、决定（Decision）的效力区别。`,topic:`GDPR`,verified:`accurate`},{id:207,question:`Which aspect of processing does the GDPR allow processors to determine for themselves?`,options:[`A. The question of whether the controller needs to be informed about the substitution of another processor carrying out specific processing activities on behalf of the controller.`,`B. Their own purposes for the processing, if such purposes are compatible with those for which the personal data were initially collected.`,`C. The parameters of their marketing campaigns using personal data relating to the controller's customers.`,`D. Their own type of hardware or software and the specific security measures for the processing. 6`],correctAnswer:`D`,explanation:`正确答案 D。处理者虽须按照控制者的指示行事，但在具体的技术实现层面，如选用何种硬件/软件、部
署哪些具体安全措施细节，处理者通常拥有一定的自主决定空间（只要能达到第 32 条要求的适当安全水
平并符合控制者的整体指示）。A（更换次级处理者须事先告知/取得控制者授权，非处理者可自行决定
的事项）、B（处理者不得为自身兼容目的自行处理数据，否则将转变为控制者）、C（处理者不能自行
决定营销活动参数，这属于目的和方式层面的决策，超出处理者权限）均不属于处理者可自主决定的范
畴。知识点：处理者在遵从控制者指示前提下，对具体技术安全实现方式享有的有限自主空间（第 28、
32 条）。`,topic:`GDPR`,verified:`accurate`},{id:208,question:`Two companies, Gellcoat and Freifish, make plans to launch a co-branded product, the prototype of which
is called Gellifish 5337. The companies want to organize an event to introduce the new product, so they
decide to share data from their client databases and come up with a list of people to invite. They agree on
the content of the invitations and together build an app to gather feedback at the event.

In this scenario, Gellcoat and Freifish are considered to be?`,options:[`A. Joint controllers with respect to the personal data related to the event and separate controllers for their other purposes.`,`B. Joint controllers for all purposes because they have merged their databases and their data is now jointly owned.`,`C. Separate controllers because joint controllership requires a written designation in a contract.`,`D. Separate controllers and processors since they are each providing services to the other.`],correctAnswer:`A`,explanation:`正确答案 A。Gellcoat 与 Freifish 共同决定该联合营销活动的处理目的和方式（共享数据库邀请名单、共
同设计邀请函内容、共建反馈 App），就该特定活动而言构成共同控制者；但对于各自其他业务范围内
的处理活动（如各自其他产品线的客户数据处理），双方仍各自独立作为单独控制者，共同控制者身份
并不自动延伸至合作范围之外的所有处理活动。B（笼统认定“数据库合并即所有目的下均为共同控制
者”，扩大了共同控制者认定的范围）、C（共同控制者身份并非必须以书面合同形式“指定”才能成立，
实质性共同决策的事实本身即可认定，尽管第 26 条确实要求以协议明确责任分工）、D（将双方定性为
互为处理者，忽略了双方实际共同决策处理目的和方式的事实）均不准确。知识点：共同控制者身份的
认定应限于共同决策的具体处理活动范围内，而非自动扩展至合作双方的全部业务。`,topic:`GDPR`,verified:`accurate`},{id:209,question:`According to guidance from the European Data Protection Board, in which of the following cases would a
controller established outside of the EU not be subject to the GDPR?`,options:[`A. If the controller monitors the behavior of persons on the territory of the Republic of Switzerland.`,`B. If the controller has a fully-owned branch office in the EU overseeing all its European operations, including marketing and advertising.`,`C. If the controller has its some of its offices and servers based in the EU without having a legal branch or subsidiary in any EU Member State.`,`D. If the controller uses the services of an EU-based processor without offering goods or services to persons on EU territory or monitoring their behavior.`],correctAnswer:`D`,explanation:`【经复核，本题参考答案有误，正确答案应为 D，理由见文末【答案修正】说明】原解析（针对原答案
A）：正确答案 A。第 3(2)(b)条“监测行为”标准仅适用于监测“欧盟境内”数据主体的行为，瑞士并非欧盟
成员国，若控制者仅监测瑞士境内人员行为而不涉及欧盟境内数据主体，则不落入 GDPR 第 3(2)(b)条域
外适用范围（除非瑞士个人当时身处欧盟境内被监测，情况另当别论，但题目情形为监测瑞士境内人
员）。B（在欧盟设有全资分支机构负责营销广告等业务，构成第 3(1)条设立地关联标准，触发 GDPR 适
用）、C（在欧盟设有办公室和服务器，即便无正式法律分支机构，仍可能构成“稳定安排”的设立，触发
适用）、D（使用欧盟处理者的服务，若控制者本身既不提供商品服务也不监测欧盟个人行为，则不适用
GDPR，这与 D 选项描述一致，因此 D 不是本题应选的“不适用”反例——需重新审视，实际上 D 描述的
正是“不适用”的情形，但题目问的是“不受 GDPR 约束”的情形，A、D 都可能符合，但根据 EDPB 相关指
南，A 更精确地对应“监测非欧盟地域”这一明确排除因素，是标准答案）。知识点：第 3(2)(b)条监测行为
标准仅限于监测欧盟境内数据主体，监测欧盟境外人员（即便地理相邻如瑞士）不触发该项域外适用。
 【答案修正】原答案标注为 A，经核查 EDPB《3/2018 号关于 GDPR 域外适用范围指南》原文，正确答
案应为 D。该指南明确指出：“a 'non-EU' controller will not become subject to the GDPR simply because it
chooses to use a processor in the Union”（非欧盟控制者不会仅因使用了欧盟境内的处理者而当然受 GDPR
约束），这正是选项 D 所描述的情形（使用欧盟处理者、且未向欧盟提供商品服务或监测欧盟个人行
为），也是该指南中被反复引用的经典示例。而选项 A（监测瑞士境内人员）虽然结论上也不触发第
3(2)(b)条，但并非该指南原文引用的具体示例，题干“According to guidance from the EDPB”明确指向指南
原文内容，因此 D 比 A 更准确、更贴合题意。`,topic:`监管机构`,verified:`accurate`},{id:210,question:`SCENARIO

Please use the following to answer the next question:

CreditPlaya, SA is an established Spanish online insurance company whose exclusive activity is providing
health insurance for legal residents of Spain, regardless of their nationality.

CreditPlaya autonomously manages its own website, through which a potential customer, engaging in a

free pre-contractual activity, enters his or her full name, e-mail address, tax identification number (to verify
residence in Spain), age, profession, and the full names of any other adult members of his or her family.

With this data, CreditPlaya immediately sends an email granting or denying eligibility for a health insurance

policy. In the case of eligibility, the email also contains the eventual cost of the policy and two PDF
documents – one with the contractual Terms and Conditions, and the other with the privacy notice as

required by Article 13 of the GDPR.

The CreditPlaya Information Tracking System (ITS) is very efficient, with a low rate of unpaid insurance
policies. The ITS is automatically fed by the information provided by every applicant, whose data is then
used to refine insurance policy rates.

To ensure their back-up procedures, in January 2021 CreditPlaya started sending weekly copies of the
whole database with all the applicants' personal data to an independent company in Uruguay. The

information was sent through state-of-the-art encrypting tools, but once in Uruguay was stored without any
encryption method.

In March 2022, the entire data base stored on the Uruguay's company servers was encrypted by malicious
ransomware. There was no evidence that the data was accessed by unauthorized persons, much less
altered or exfiltrated. Despite the incident, CreditPlaya found that they could rely on the locally based
Spanish back-up information and carry on its activity without interrupting its operations. The incident
caused the termination of the professional relationship between the two companies.

According to the GDPR, current CreditPlaya customers who have expressly accepted the policy Terms
and Conditions would NOT be granted which of the following rights?`,options:[`A. The Right To Object.`,`B. The Right to Erasure.`,`C. The Right to Data Portability.`,`D. The Right Not to be Subject to Profiling.`],correctAnswer:`D`,explanation:`正确答案 D。“不受制于纯自动化决策（含画像）的权利”（第 22 条）仅适用于对个人产生法律效力或类
似重大影响的“完全自动化决策”，而 CreditPlaya 的核保决策虽然自动生成，但题目未表明该决策会对客
户产生此类重大自动化决策效果达到触发第 22 条特别保护门槛的程度（且该处理是订立/履行保险合同所
必需，属于第 22(2)(a)条允许自动化决策的例外情形），因此客户在此类基于合同必需的自动化承保场景
下，其“不受纯自动化决策约束”的绝对权利受到限制。反对权（A）、删除权（B，除非有例外理由）、
可携权（C，基于合同的自动化处理数据可携权通常适用）在一般情况下仍可正常行使。知识点：第 22
条免受自动化决策约束权利的例外——订立/履行合同所必需的自动化决策。`,topic:`GDPR`,verified:`accurate`},{id:211,question:`SCENARIO

Please use the following to answer the next question:

CreditPlaya, SA is an established Spanish online insurance company whose exclusive activity is providing
health insurance for legal residents of Spain, regardless of their nationality.

CreditPlaya autonomously manages its own website, through which a potential customer, engaging in a
free pre-contractual activity, enters his or her full name, e-mail address, tax identification number (to verify
residence in Spain), age, profession, and the full names of any other adult members of his or her family.

With this data, CreditPlaya immediately sends an email granting or denying eligibility for a health insurance
policy. In the case of eligibility, the email also contains the eventual cost of the policy and two PDF
documents – one with the contractual Terms and Conditions, and the other with the privacy notice as
required by Article 13 of the GDPR.

The CreditPlaya Information Tracking System (ITS) is very efficient, with a low rate of unpaid insurance
policies. The ITS is automatically fed by the information provided by every applicant, whose data is then

used to refine insurance policy rates.

To ensure their back-up procedures, in January 2021 CreditPlaya started sending weekly copies of the
whole database with all the applicants' personal data to an independent company in Uruguay. The

information was sent through state-of-the-art encrypting tools, but once in Uruguay was stored without any

encryption method.

In March 2022, the entire data base stored on the Uruguay's company servers was encrypted by malicious

ransomware. There was no evidence that the data was accessed by unauthorized persons, much less
altered or exfiltrated. Despite the incident, CreditPlaya found that they could rely on the locally based

Spanish back-up information and carry on its activity without interrupting its operations. The incident

caused the termination of the professional relationship between the two companies.

The disclosure of personal data to the independent company in Uruguay should be regulated by which of
the following?`,options:[`A. Binding Corporate Rules.`,`B. A controller/processor agreement.`,`C. An ad hoc authorization from the EU Commission.`,`D. An ad hoc authorization from the Spanish Data Protection Authority.`],correctAnswer:`B`,explanation:`答案 B 正确：独立乌拉圭公司若代表 CreditPlaya 处理数据，双方须签订第 28 条控制者—处理者协议。乌拉圭已获
欧盟充分性认定，因此通常无需另行使用 SCC；但仍须满足安全、指示处理、分包等第 28 条要求。`,topic:`GDPR`,verified:`qualified`},{id:212,question:`SCENARIO

Please use the following to answer the next question:

CreditPlaya, SA is an established Spanish online insurance company whose exclusive activity is providing
health insurance for legal residents of Spain, regardless of their nationality.

CreditPlaya autonomously manages its own website, through which a potential customer, engaging in a

free pre-contractual activity, enters his or her full name, e-mail address, tax identification number (to verify
residence in Spain), age, profession, and the full names of any other adult members of his or her family.

With this data, CreditPlaya immediately sends an email granting or denying eligibility for a health insurance
policy. In the case of eligibility, the email also contains the eventual cost of the policy and two PDF
documents – one with the contractual Terms and Conditions, and the other with the privacy notice as
required by Article 13 of the GDPR.

The CreditPlaya Information Tracking System (ITS) is very efficient, with a low rate of unpaid insurance
policies. The ITS is automatically fed by the information provided by every applicant, whose data is then
used to refine insurance policy rates.

To ensure their back-up procedures, in January 2021 CreditPlaya started sending weekly copies of the
whole database with all the applicants' personal data to an independent company in Uruguay. The
information was sent through state-of-the-art encrypting tools, but once in Uruguay was stored without any
encryption method.

In March 2022, the entire data base stored on the Uruguay's company servers was encrypted by malicious
ransomware. There was no evidence that the data was accessed by unauthorized persons, much less
altered or exfiltrated. Despite the incident, CreditPlaya found that they could rely on the locally based
Spanish back-up information and carry on its activity without interrupting its operations. The incident
caused the termination of the professional relationship between the two companies.

The privacy notice provided by CreditPlaya contravenes Article 13 of the GDPR because?`,options:[`A. The document is delivered after the personal data has been obtained.`,`B. The document is separated from the document listing Terms and Conditions.`,`C. The document is not written in the language of the average prospective customer.`,`D. The document fails to mention the applicable security measures for the processing.`],correctAnswer:`A`,explanation:`正确答案 A。第 13 条要求控制者应在“收集个人数据时”（at the time when personal data are obtained）即向
数据主体提供隐私声明，而 CreditPlaya 是在收集数据、作出核保决定后才随邮件一并发送隐私声明，属
于事后告知，违反了第 13 条关于告知时点的强制性要求。B（与条款文件分开提供，本身并不违反
GDPR，甚至是良好实践）、C（语言问题，题目未提及存在语言障碍）、D（未提及安全措施，非第 13
条强制要求告知的核心内容）均不构成本案违规的准确原因。知识点：第 13 条告知义务的时点要求——
须在收集数据时提供，而非事后随附。`,topic:`GDPR`,verified:`accurate`},{id:213,question:`SCENARIO

Please use the following to answer the next question:

CreditPlaya, SA is an established Spanish online insurance company whose exclusive activity is providing
health insurance for legal residents of Spain, regardless of their nationality.

CreditPlaya autonomously manages its own website, through which a potential customer, engaging in a
free pre-contractual activity, enters his or her full name, e-mail address, tax identification number (to verify
residence in Spain), age, profession, and the full names of any other adult members of his or her family.

With this data, CreditPlaya immediately sends an email granting or denying eligibility for a health insurance
policy. In the case of eligibility, the email also contains the eventual cost of the policy and two PDF

documents – one with the contractual Terms and Conditions, and the other with the privacy notice as
required by Article 13 of the GDPR.

The CreditPlaya Information Tracking System (ITS) is very efficient, with a low rate of unpaid insurance
policies. The ITS is automatically fed by the information provided by every applicant, whose data is then
used to refine insurance policy rates.

To ensure their back-up procedures, in January 2021 CreditPlaya started sending weekly copies of the
whole database with all the applicants' personal data to an independent company in Uruguay. The
information was sent through state-of-the-art encrypting tools, but once in Uruguay was stored without any
encryption method.

In March 2022, the entire data base stored on the Uruguay's company servers was encrypted by malicious
ransomware. There was no evidence that the data was accessed by unauthorized persons, much less
altered or exfiltrated. Despite the incident, CreditPlaya found that they could rely on the locally based
Spanish back-up information and carry on its activity without interrupting its operations. The incident
caused the termination of the professional relationship between the two companies.

If the data on the Uruguay company's servers had been encrypted, what kind of security measure would
this be considered?`,options:[`A. A remediation security measure.`,`B. A prevention security measure.`,`C. A corrective security measure.`,`D. A detection security measure.`],correctAnswer:`B`,explanation:`正确答案 B。对静态存储数据进行加密属于预防性安全措施（preventative security），旨在事先降低数据
被未经授权访问或泄露的风险，而非在事件发生后采取的补救性（remedial/corrective，A、C）或检测性
（detection，D）措施。知识点：第 32 条安全措施的分类——预防性、检测性、补救性措施及加密的预防
性质。`,topic:`GDPR`,verified:`accurate`},{id:214,question:`SCENARIO

Please use the following to answer the next question:

CreditPlaya, SA is an established Spanish online insurance company whose exclusive activity is providing
health insurance for legal residents of Spain, regardless of their nationality.

CreditPlaya autonomously manages its own website, through which a potential customer, engaging in a
free pre-contractual activity, enters his or her full name, e-mail address, tax identification number (to verify

residence in Spain), age, profession, and the full names of any other adult members of his or her family.

With this data, CreditPlaya immediately sends an email granting or denying eligibility for a health insurance

policy. In the case of eligibility, the email also contains the eventual cost of the policy and two PDF
documents – one with the contractual Terms and Conditions, and the other with the privacy notice as
required by Article 13 of the GDPR.

The CreditPlaya Information Tracking System (ITS) is very efficient, with a low rate of unpaid insurance
policies. The ITS is automatically fed by the information provided by every applicant, whose data is then
used to refine insurance policy rates.

To ensure their back-up procedures, in January 2021 CreditPlaya started sending weekly copies of the
whole database with all the applicants' personal data to an independent company in Uruguay. The
information was sent through state-of-the-art encrypting tools, but once in Uruguay was stored without any
encryption method.

In March 2022, the entire data base stored on the Uruguay's company servers was encrypted by malicious
ransomware. There was no evidence that the data was accessed by unauthorized persons, much less
altered or exfiltrated. Despite the incident, CreditPlaya found that they could rely on the locally based
Spanish back-up information and carry on its activity without interrupting its operations. The incident
caused the termination of the professional relationship between the two companies.

The content of the email that CreditPlaya sends does not comply with GDPR requirements because it
lacks what?`,options:[`A. The list of information with regard to personal data that were not obtained from the data subject, according to Article 14.`,`B. The list of the processors and subprocessors involved in the processing, as required by Article 28.`,`C. The list of processing activities as set out in the records of processing activities, according to Article 30.`,`D. The list of technical and organizational measures that will be implemented, according to Article 32.`],correctAnswer:`A`,explanation:`正确答案 A。由于部分申请人数据可能并非直接从数据主体本人处获得（如“家庭其他成年成员的姓名”是
由申请人代为提供，而非该家庭成员本人直接提供），依据第 14 条，控制者对此类非直接获取的数据负
有特定的告知义务（如告知数据来源），而 CreditPlaya 发送的隐私声明未能针对这部分数据履行第 14 条
特有的告知要求。B、C、D 均非本案隐私声明内容缺失的准确指向。知识点：第 14 条间接获取个人数据
（如通过申请人代填家庭成员信息）时控制者的特定告知义务。`,topic:`GDPR`,verified:`accurate`},{id:215,question:`SCENARIO

Please use the following to answer the next question:

CreditPlaya, SA is an established Spanish online insurance company whose exclusive activity is providing
health insurance for legal residents of Spain, regardless of their nationality.

CreditPlaya autonomously manages its own website, through which a potential customer, engaging in a
free pre-contractual activity, enters his or her full name, e-mail address, tax identification number (to verify

residence in Spain), age, profession, and the full names of any other adult members of his or her family.

With this data, CreditPlaya immediately sends an email granting or denying eligibility for a health insurance
policy. In the case of eligibility, the email also contains the eventual cost of the policy and two PDF
documents – one with the contractual Terms and Conditions, and the other with the privacy notice as
required by Article 13 of the GDPR.

The CreditPlaya Information Tracking System (ITS) is very efficient, with a low rate of unpaid insurance
policies. The ITS is automatically fed by the information provided by every applicant, whose data is then
used to refine insurance policy rates.

To ensure their back-up procedures, in January 2021 CreditPlaya started sending weekly copies of the

whole database with all the applicants' personal data to an independent company in Uruguay. The
information was sent through state-of-the-art encrypting tools, but once in Uruguay was stored without any
encryption method.

In March 2022, the entire data base stored on the Uruguay's company servers was encrypted by malicious
ransomware. There was no evidence that the data was accessed by unauthorized persons, much less

altered or exfiltrated. Despite the incident, CreditPlaya found that they could rely on the locally based
Spanish back-up information and carry on its activity without interrupting its operations. The incident
caused the termination of the professional relationship between the two companies.

The refinement of the CreditPlaya Information Tracking System (ITS) is a processing activity that should
be?`,options:[`A. Explained in the privacy notice, with a list of the special categories of applicants' data.`,`B. Specified in the Terms and Conditions document sent to applicants.`,`C. Capable of allowing applicants to exercise their Right to Object.`,`D. Subject to the explicit consent of the applicants.`],correctAnswer:`C`,explanation:`正确答案 C。CreditPlaya 利用申请人数据持续优化其信息追踪系统（ITS）以完善保费定价，这属于对个
人数据的画像/评估类处理，即便基于合法利益，数据主体依第 21(1)条仍应享有反对此类处理的权利（除
非控制者能证明存在令人信服的合法理由）；处理设计上应确保申请人能够便捷行使该反对权，而非仅
限于书面条款说明（B）、笼统纳入隐私声明特殊类别数据说明（A，该处理未必涉及特殊类别数据）或
一律要求明确同意（D，若合法依据是合法利益而非同意，则无需以同意作为该项处理的依据，但仍须保
留反对权入口）。知识点：第 21 条反对权在基于合法利益的画像/评估处理中的落实要求。`,topic:`GDPR`,verified:`accurate`},{id:216,question:`The Planet 49 decision clarified all of the following issues regarding cookies EXCEPT?`,options:[`A. Whether a pre-ticked box constitutes valid consent under the ePrivacy Directive and the GDPR.`,`B. Whether consent may be bundled to cover a number of activities or purposes at the same time.`,`C. Whether is it necessary to provide information about the duration of cookies and any third-party cookies.`,`D. Whether users may be forced to provide their consent as a condition for benefiting from goods or services being offered.`],correctAnswer:`D`,explanation:`正确答案 D。Planet49 案主要澄清的问题包括：预勾选同意框不构成有效同意（A）、同意不得笼统打包
覆盖多个不同处理目的（B，须具体明确）、须告知 cookie 存续时间及第三方 cookie 相关信息（C，属透
明度告知内容）；但该案并未就“是否可以将同意作为获得商品/服务的强制条件”（即同意与服务提供“捆
绑”问题，通常涉及第 7(4)条同意自由性判断）作出裁决，该问题并非 Planet49 案的争议焦点。知识点：
Planet49 案的具体裁决范围——不涉及“同意作为获取服务前提条件”这一问题（该问题主要由第 7(4)条及
其他案例/指南规制）。`,topic:`ePrivacy指令`,verified:`accurate`},{id:217,question:`Pursuant to Article 17 and EDPB Guidelines 5/2019 on RTBF criteria in search engines cases, all of the
following would be valid grounds for data subject delisting requests EXCEPT?`,options:[`A. The personal data has been collected in relation to the offer of information society services (ISS) to a child.`,`B. The data subject withdraws consent and there is no other legal basis for the processing.`,`C. The personal data is no longer necessary in relation to the search engine provider's processing.`,`D. The processing is necessary for exercising the right of freedom of expression and information.`],correctAnswer:`D`,explanation:`正确答案 D。EDPB《5/2019 号指南》关于搜索引擎场景下被遗忇权（去索引）标准列举的有效去索引理
由包括：数据涉及向儿童提供信息社会服务时收集（A）、同意被撤回且无其他合法依据（B）、数据不
再为处理目的所必需（C）等；但若处理（即搜索结果的呈现）本身是为行使表达自由和信息获取权所必
需（言论自由与信息公众利益的平衡），则这恰恰构成拒绝去索引请求的正当理由，而非支持去索引的
依据，因此 D 不属于有效的去索引申请理由，反而是反对去索引的抗辩事由。知识点：EDPB 指南
5/2019 下搜索引擎去索引的有效理由及言论自由抗辩的区分。`,topic:`监管机构`,verified:`accurate`},{id:218,question:`Article 58 of the GDPR describes the powers of supervisory authorities. Which of the following is NOT
among those granted?`,options:[`A. Legislative powers.`,`B. Corrective powers.`,`C. Investigatory powers.`,`D. Authorization and advisory powers.`],correctAnswer:`A`,explanation:`正确答案 A。（与 Q204 同一知识点重复出现）第 58 条监管机构职权分为调查权（C）、纠正权（B）、
授权咨询权（D）三大类，不包含立法权（A）。知识点：第 58 条监管机构三类职权不含立法权。`,topic:`GDPR`,verified:`accurate`},{id:219,question:`Which of the following statements is inconsistent with the EDPB's position on qualifying a given
processing as a “transfer” under Chapter V of the GDPR?`,options:[`A. Transfers subject to the GDPR can only occur when two separate parties – each of them a controller, joint controller or processor – are involved.`,`B. Transfers subject to the GDPR may involve data disclosures between entities belonging to the same corporate group (intra-group data disclosures).`,`C. Transfers subject to the GDPR may involve remote access of personal data from a third country during a business trip of an employee of the controller for the given processing.`,`D. Transfers in which a controller or processor makes personal data available to another controller, joint controller, or processor needs to be subject to the GDPR for the given processing.`],correctAnswer:`C`,explanation:`正确答案 C。EDPB《跨境传输认定指南》明确“传输”须满足三要件：涉及控制者/处理者向另一（独立
的）控制者、共同控制者或处理者披露/提供个人数据（A、D）、可涵盖集团内部披露（B，同一企业集
团内不同法律实体之间的数据流动同样可构成“传输”）；但员工本人在出差至第三国期间，以受雇于该控
制者的身份、代表该控制者远程访问位于欧盟的个人数据数据库，并不构成两个独立主体之间的数据“传
输”（因为访问者仍是同一控制者的员工，并非独立的另一方接收数据），EDPB 明确将此类情形排除在
“传输”认定之外。知识点：EDPB 跨境传输认定指南——员工出差远程访问不构成第五章意义上的“传
输”。`,topic:`监管机构`,verified:`accurate`},{id:220,question:`To comply with the GDPR and the EU Court of Justice's decision in Schrems II, the European Commission
issued what are commonly referred to as the new standard contractual clauses (SCCs). As a result,
businesses must do all of the following EXCEPT?`,options:[`A. Consider the new optional docking clause, which expressly permits adding new parties to the SCCs.`,`B. Migrate all contracts entered into before September 27, 2021, that use the old SCCs to the new SCCs by December 27, 2022.`,`C. Take steps to flow down the new SCCs to relevant parts of their supply chain using the new SCCs as of September 27, 2021, if the business is a data importer.`,`D. Implement the new SCCs in the U.K. following Brexit, as the U.K. Information Commissioner's Office does not have the authority to publish its own set of SCCs.`],correctAnswer:`D`,explanation:`答案 D 正确。英国脱欧后建立了自己的国际数据传输协议（IDTA）及英国附加条款，并非无权制定。B 所述迁移期
限属于历史性要求，已于 2022 年 12 月 27 日届满；新安排应使用现行欧盟 SCC。`,topic:`判例法`,verified:`qualified`},{id:221,question:`A company would like to implement CCTV monitoring in its offices for safety and security purposes. Which
of the following would be the best legal basis for the company to rely upon?`,options:[`A. Public interest.`,`B. Individual consent.`,`C. Legitimate interest.`,`D. Exercise of public authority.`],correctAnswer:`C`,explanation:`正确答案 C。企业为办公场所安全目的部署 CCTV 监控，通常被认为是保护企业财产及人员安全的合法
利益，属于第 6(1)(f)条“合法利益”的典型应用场景（须经必要性与比例性平衡测试）。A（公共利益，通
常适用于公权力机构而非普通企业）、B（个人同意，在雇佣关系权力不对等下并非合适或稳健的依
据）、D（行使公权力，同样不适用于私营企业）均不如合法利益贴切。知识点：第 6(1)(f)条合法利益作
为企业安防监控（CCTV）的典型合法依据。`,topic:`GDPR`,verified:`accurate`},{id:222,question:`The EDPB's Guidelines 8/2020 on the Targeting of Social Media Users stipulates that in order to rely on
legitimate interest as a legal basis to process personal data, three tests must be passed. Which of the
following is NOT one of the three tests?`,options:[`A. Purpose test.`,`B. Necessity test.`,`C. Balancing test.`,`D. Adequacy test.`],correctAnswer:`D`,explanation:`正确答案 D。EDPB《8/2020 号指南》关于合法利益作为社交媒体用户定向投放合法依据的三重测试为：
目的测试（确认存在合法利益，A）、必要性测试（处理是否为实现该利益所必需，B）、平衡测试（该
利益是否超越数据主体的权利自由，C），并不包含所谓的“适当性测试”（adequacy test，该术语更多用
于跨境传输的“充分性认定”概念，与合法利益三重测试无关，属于混淆概念的干扰项）。知识点：EDPB
指南 8/2020 关于合法利益的三重测试（目的、必要性、平衡）。`,topic:`监管机构`,verified:`accurate`},{id:223,question:`The GDPR's list of processor obligations regarding cloud computing includes all of the following EXCEPT?`,options:[`A. Controllers must be given notice of any subprocessors and have a right of objection.`,`B. Individuals authorized to process the personal data are subject to an obligation of confidentiality.`,`C. Any personal data related to data subjects must be securely maintained for a maximum of ten years.`,`D. Processors must implement technical and organizational measures to ensure a level of security appropriate to the risk.`],correctAnswer:`C`,explanation:`正确答案 C。第 28 条关于云计算处理者义务的清单包括：次级处理者的告知与异议权（A）、处理人员
保密义务（B）、适当技术组织安全措施（D）等，但 GDPR 并未设定统一的“最长十年”数据留存期限—
—留存期限应依据具体处理目的、适用法律及存储限制原则个案确定，而非法律统一规定的固定期限。
知识点：第 28 条云处理者义务清单，及 GDPR 并不设定统一法定留存期限（留存期限须依处理目的个案
判断）。`,topic:`GDPR`,verified:`accurate`},{id:224,question:`The origin of privacy as a fundamental human right can be found in which document?`,options:[`A. Universal Declaration of Human Rights 1948.`,`B. European Convention of Human Rights 1953.`,`C. OECD Guidelines on the Protection of Privacy 1980.`,`D. Charter of Fundamental Rights of the European Union 2000.`],correctAnswer:`A`,explanation:`正确答案 A。1948 年《世界人权宣言》第 12 条首次在国际人权文件中明确将“隐私”确立为一项基本人权
（任何人的私生活、家庭、住宅或通信不得任意干涉），早于欧洲人权公约（B，1953 年生效）、OECD
隐私准则（C，1980 年）及欧盟基本权利宪章（D，2000 年）。知识点：世界人权宣言第 12 条作为隐私
权确立为基本人权的国际法源头。`,topic:`Convention 108/108+`,verified:`accurate`},{id:225,question:`What is the primary purpose of Convention 108+, which amends the Convention for the Protection of
Individuals with regard to Automatic Processing of Personal Data?`,options:[`A. To issue updated guidelines for data transfers from the EU to third-country signatories to the Convention.`,`B. To modify the process for third countries to obtain an adequacy decision from the European Commission.`,`C. To strengthen data protection in line with the European and international regulatory framework.`,`D. To establish new data subject rights and safeguards for consumers in the EU member states.`],correctAnswer:`C`,explanation:`正确答案 C。经 2018 年现代化修订的 108+号公约的主要目的是使该公约与包括 GDPR 在内的欧洲及国际
最新数据保护监管框架保持同步，强化和更新其保护标准（如新增问责制、假名化、数据泄露通知等概
念），而非专门针对跨境传输指引修订（A）、修改充分性认定获取流程（B，充分性认定属欧盟法律框
架下的概念，非 108 公约本身的直接内容）或专门为欧盟消费者创设新权利（D，108 公约面向所有缔约
国而非仅欧盟消费者）。知识点：108+号公约现代化修订的主要目的——与欧洲/国际数据保护监管框架
保持一致并强化保护水平。`,topic:`Convention 108/108+`,verified:`accurate`},{id:226,question:`Which of the following regulates the use of electronic communications services within the European
Union?`,options:[`A. Regulation (EU) 2015/2120 of the European Parliament and of the Council of 25 November 2015.`,`B. Regulation (EU) 2017/1953 of the European Parliament and of the Council of 25 October 2017.`,`C. Directive 2002/58/EC of the European Parliament and of the Council of 12 July 2002.`,`D. Directive (EU) 2019/789 of the European Parliament and of the Council of 17 April 2019.`],correctAnswer:`C`,explanation:`正 确 答 案 C 。 规 范 欧 盟 电 子 通 信 服 务 隐 私 事 项 （ 如 cookie 、 直 接 营 销 、 通 信 保 密 ） 的 核 心 法 律 是
2002/58/EC 号指令（即 ePrivacy 指令），A（2015/2120 号条例涉及网络中立及漫游费用规则）、B（虚构
或与本主题无关的条例编号）、D（2019/789 号指令涉及广播节目跨境传输规则）均与电子通信隐私规制
无直接关联。知识点：2002/58/EC 号 ePrivacy 指令作为欧盟电子通信隐私规制的核心法律依据。`,topic:`ePrivacy指令`,verified:`accurate`},{id:227,question:`What was the main failing of Convention 108 that led to the creation of the Data Protection Directive
(Directive 95/46/EC)?`,options:[`A. It did not account for the rapid growth of the Internet.`,`B. It did not include protections for sensitive personal data.`,`C. It was implemented in a fragmented manner by a small number of states.`,`D. Its penalties for violations of data protection rights were widely viewed as insufficient.`],correctAnswer:`C`,explanation:`正确答案 C。108 号公约作为一项国际条约，其效力和保护水平的落地依赖各缔约国自行批准和转化为国
内法，但历史上仅有少数国家真正批准并有效实施，导致欧盟内部数据保护水平参差不齐、难以形成统
一市场，这正是促使欧盟以更具强制约束力的 95/46/EC 指令取而代之的主要原因。A（未预见互联网发
展，非主要历史原因，指令出台时互联网尚处早期）、B（未涵盖敏感数据保护，108 号公约实际上已包
含特殊类别数据的相关条款）、D（处罚力度不足，并非公认的核心历史原因）均不如 C 准确。知识点：
108 号公约因缔约国实施不均衡而催生 95/46/EC 指令的历史背景。`,topic:`历史沿革/95-46-EC`,verified:`accurate`},{id:228,question:`SCENARIO

Please use the following to answer the next question:

Jane starts her new role as a Data Protection Officer (DPO) at a Malta-based company that allows anyone
to buy and sell cryptocurrencies via its online platform. The company stores and processes the personal
data of its customers in a dedicated data center located in Malta (EU).

People wishing to trade cryptocurrencies are required to open an online account on the platform. They
then must successfully pass a Know Your Customer (KYC) due diligence procedure aimed at preventing
money laundering and ensuring compliance with applicable financial regulations.

The non-European customers are also required to waive all their GDPR rights by reading a disclaimer
written in bold and ticking a checkbox on a separate page in order to get their account approved on the
platform.

All customers must likewise accept the terms of service of the platform. The terms of service also include a
privacy policy section, saying, among other things, that if a customer fails the KYC process, its KYC data

will be automatically shared with the national anti-money laundering agency.

The KYC procedure requires customers to answer many questions, including whether they have any

criminal convictions, whether they use recreational drugs or have problems with alcohol, and whether they

have a terminal illness. While providing this data, customers see a conspicuous message saying that this

data is meant only to prevent fraud and account takeover, and will be never shared with private third
parties.
The company regularly conducts external security testing of its online systems by independent
cybersecurity companies from the EU. At the final stage of testing, the company provides cybersecurity
assessors with access to its central database to review security permissions, roles and policies. Personal
data in the database is encrypted; however, cybersecurity assessors usually have access to the decryption
keys obtained while running initial security testing. The assessors must strictly follow the guidelines
imposed by the company during the entire testing and auditing process.

All customer data, including trading activities and all internal communications with technical support, are
permanently stored in a secured AWS S3 Glacier cloud data storage, located in Ireland, for backup and
compliance purposes. The data is securely transferred to the cloud and then is properly encrypted while at
rest by using AWS-native encryption mechanisms. These mechanisms give AWS the necessary technical
means to encrypt and decrypt the data when such is required by the company. There is no data
processing agreement between AWS and the company.

Are the cybersecurity assessors required to sign a data processing agreement with the company in order
to comply with the GDPR?`,options:[`A. No, the assessors do not qualify as data processors as they only have access to encrypted data.`,`B. No, the assessors do not qualify as data processors as they do not copy the data to their facilities.`,`C. Yes, the assessors are considered to be joint data controllers and must sign a mutual data processing agreement.`,`D. Yes, the assessors are data processors and their processing of personal data must be governed by a separate contract or other legal act.`],correctAnswer:`D`,explanation:`正确答案 D。网络安全评估人员作为独立主体，接受公司委托对其系统进行安全测试并获得访问加密数
据密钥的权限，其处理行为（即便是临时性、测试性质）已构成对个人数据的处理，依第 28 条须与委托
方签订处理者协议或其他具有同等约束力的法律文件，明确其数据处理义务和安全保障要求，而非因数
据加密（A）或未将数据复制到自有设施（B）就当然豁免处理者身份及协议义务；将其定性为“共同控制
者”（C）也不准确，因为评估人员是按公司指示、为公司利益进行测试，并非独立决定处理目的和方
式。知识点：第 28 条处理者身份认定及协议要求——即便是临时性、有限访问权限的第三方服务提供
商，只要处理个人数据即须签订处理者协议。`,topic:`GDPR`,verified:`accurate`},{id:229,question:`SCENARIO

Please use the following to answer the next question:

Jane starts her new role as a Data Protection Officer (DPO) at a Malta-based company that allows anyone
to buy and sell cryptocurrencies via its online platform. The company stores and processes the personal
data of its customers in a dedicated data center located in Malta (EU).

People wishing to trade cryptocurrencies are required to open an online account on the platform. They
then must successfully pass a Know Your Customer (KYC) due diligence procedure aimed at preventing
money laundering and ensuring compliance with applicable financial regulations.

The non-European customers are also required to waive all their GDPR rights by reading a disclaimer
written in bold and ticking a checkbox on a separate page in order to get their account approved on the
platform.

All customers must likewise accept the terms of service of the platform. The terms of service also include a
privacy policy section, saying, among other things, that if a customer fails the KYC process, its KYC data
will be automatically shared with the national anti-money laundering agency.

The KYC procedure requires customers to answer many questions, including whether they have any
criminal convictions, whether they use recreational drugs or have problems with alcohol, and whether they

have a terminal illness. While providing this data, customers see a conspicuous message saying that this

data is meant only to prevent fraud and account takeover, and will be never shared with private third
parties.

The company regularly conducts external security testing of its online systems by independent
cybersecurity companies from the EU. At the final stage of testing, the company provides cybersecurity

assessors with access to its central database to review security permissions, roles and policies. Personal
data in the database is encrypted; however, cybersecurity assessors usually have access to the decryption
keys obtained while running initial security testing. The assessors must strictly follow the guidelines
imposed by the company during the entire testing and auditing process.

All customer data, including trading activities and all internal communications with technical support, are
permanently stored in a secured AWS S3 Glacier cloud data storage, located in Ireland, for backup and
compliance purposes. The data is securely transferred to the cloud and then is properly encrypted while at
rest by using AWS-native encryption mechanisms. These mechanisms give AWS the necessary technical
means to encrypt and decrypt the data when such is required by the company. There is no data
processing agreement between AWS and the company.

Should Jane modify the required GDPR rights waiver for non-European residents?`,options:[`A. Yes, the waiver must not apply to any residents of countries with an adequacy decision from the EC.`,`B. Yes, this clause must be entirely removed as all customers, regardless of residence or nationality, shall enjoy the same individual rights granted under GDPR.`,`C. No, the non-EU residents are not protected by GDPR unless they are physically located in the EU.`,`D. No, but all non-EU residents must manually sign a separate waiver to ensure its lawfulness and enforceability under GDPR.`],correctAnswer:`B`,explanation:`答案 B 正确，因为控制者设立于马耳他，相关处理在该欧盟设立机构活动背景下进行，GDPR 适用不取决于客户国
籍或居住地。数据主体的强制性权利不能通过勾选“放弃”。`,topic:`GDPR`,verified:`qualified`},{id:230,question:`SCENARIO

Please use the following to answer the next question:

Jane starts her new role as a Data Protection Officer (DPO) at a Malta-based company that allows anyone
to buy and sell cryptocurrencies via its online platform. The company stores and processes the personal
data of its customers in a dedicated data center located in Malta (EU).

People wishing to trade cryptocurrencies are required to open an online account on the platform. They
then must successfully pass a Know Your Customer (KYC) due diligence procedure aimed at preventing
money laundering and ensuring compliance with applicable financial regulations.

The non-European customers are also required to waive all their GDPR rights by reading a disclaimer
written in bold and ticking a checkbox on a separate page in order to get their account approved on the
platform.

All customers must likewise accept the terms of service of the platform. The terms of service also include a
privacy policy section, saying, among other things, that if a customer fails the KYC process, its KYC data
will be automatically shared with the national anti-money laundering agency.

The KYC procedure requires customers to answer many questions, including whether they have any
criminal convictions, whether they use recreational drugs or have problems with alcohol, and whether they
have a terminal illness. While providing this data, customers see a conspicuous message saying that this
data is meant only to prevent fraud and account takeover, and will be never shared with private third
parties.

The company regularly conducts external security testing of its online systems by independent
cybersecurity companies from the EU. At the final stage of testing, the company provides cybersecurity

assessors with access to its central database to review security permissions, roles and policies. Personal

data in the database is encrypted; however, cybersecurity assessors usually have access to the decryption
keys obtained while running initial security testing. The assessors must strictly follow the guidelines

imposed by the company during the entire testing and auditing process.

All customer data, including trading activities and all internal communications with technical support, are

permanently stored in a secured AWS S3 Glacier cloud data storage, located in Ireland, for backup and
compliance purposes. The data is securely transferred to the cloud and then is properly encrypted while at
rest by using AWS-native encryption mechanisms. These mechanisms give AWS the necessary technical
means to encrypt and decrypt the data when such is required by the company. There is no data
processing agreement between AWS and the company.

Which of the following must be a component of the anti-money-laundering data-sharing practice of the
platform?`,options:[`A. The terms of service shall also enumerate all applicable anti-money laundering laws.`,`B. Customers shall have an opt-out feature to restrict data sharing with law enforcement agencies after the registration.`,`C. The terms of service shall include the address of the anti-money laundering agency and contacts of the investigators who may access the data.`,`D. Customers shall receive a clear and conspicuous notice about such data sharing before submitting their data during the registration process.`],correctAnswer:`D`,explanation:`正确答案 D。依据反洗钱数据共享的透明度要求（并结合 GDPR 第 13/14 条告知义务），客户应在提交数
据前即被清晰、醒目地告知其数据可能因 KYC 未通过而被共享给反洗钱机构，这是保障客户知情权、避
免处理目的被隐瞒的关键要素。A（须在条款中列明所有适用反洗钱法律，过于宽泛不实际）、B（须提
供退出反洗钱数据共享的选项，反洗钱义务属于法定强制要求，通常不允许客户自由选择退出）、C（须
列明反洗钱机构地址及调查人员联系方式，非必要且不现实的具体要求）均不准确。知识点：反洗钱数
据共享场景下的透明度告知要求（须于收集前清晰告知）。`,topic:`GDPR`,verified:`accurate`},{id:231,question:`SCENARIO

Please use the following to answer the next question:

Jane starts her new role as a Data Protection Officer (DPO) at a Malta-based company that allows anyone
to buy and sell cryptocurrencies via its online platform. The company stores and processes the personal
data of its customers in a dedicated data center located in Malta (EU).

People wishing to trade cryptocurrencies are required to open an online account on the platform. They
then must successfully pass a Know Your Customer (KYC) due diligence procedure aimed at preventing
money laundering and ensuring compliance with applicable financial regulations.

The non-European customers are also required to waive all their GDPR rights by reading a disclaimer
written in bold and ticking a checkbox on a separate page in order to get their account approved on the
platform.

All customers must likewise accept the terms of service of the platform. The terms of service also include a
privacy policy section, saying, among other things, that if a customer fails the KYC process, its KYC data
will be automatically shared with the national anti-money laundering agency.

The KYC procedure requires customers to answer many questions, including whether they have any
criminal convictions, whether they use recreational drugs or have problems with alcohol, and whether they
have a terminal illness. While providing this data, customers see a conspicuous message saying that this
data is meant only to prevent fraud and account takeover, and will be never shared with private third
parties.

The company regularly conducts external security testing of its online systems by independent
cybersecurity companies from the EU. At the final stage of testing, the company provides cybersecurity
assessors with access to its central database to review security permissions, roles and policies. Personal
data in the database is encrypted; however, cybersecurity assessors usually have access to the decryption
keys obtained while running initial security testing. The assessors must strictly follow the guidelines
imposed by the company during the entire testing and auditing process.

All customer data, including trading activities and all internal communications with technical support, are
permanently stored in a secured AWS S3 Glacier cloud data storage, located in Ireland, for backup and

compliance purposes. The data is securely transferred to the cloud and then is properly encrypted while at
rest by using AWS-native encryption mechanisms. These mechanisms give AWS the necessary technical

means to encrypt and decrypt the data when such is required by the company. There is no data

processing agreement between AWS and the company. 6

What is potentially wrong with the backup system operated in the AWS cloud?`,options:[`A. The AWS servers are located in the EU but in a country different than the location of the corporate headquarters.`,`B. It is unlawful to process any personal data in a cloud unless the cloud is certified as GDPR-compliant by a competent supervisory authority.`,`C. The data storage period has to be revised, and a data processing agreement with AWS must be signed.`,`D. AWS is a U.S. company, and no personal data of European residents may be transferred to it without explicit written consent from data subjects.`],correctAnswer:`C`,explanation:`正确答案 C。公司与 AWS 之间缺乏依第 28 条要求的书面数据处理协议，这是明显的合规缺口，须尽快
签订该协议，同时留存期限（“永久存储”backup 数据）也应结合存储限制原则重新审视评估是否合理必
要，而非无限期保留。A（AWS 服务器位于爱尔兰这一欧盟成员国境内，与总部所在国不同本身不构成
问题，因为爱尔兰仍属欧盟境内，不涉及跨境传输合规问题）、B（并无“云须经监管机构认证”这一强制
性法律要求，认证是可选的合规工具而非强制前提，第 42 条认证机制是自愿性质）、D（AWS 作为美国
公司在欧盟境内设有数据中心并将数据存储于爱尔兰境内运营，此类情形不构成向美国境外传输个人数
据，因此 D 的假设本身不成立）均不准确。知识点：第 28 条处理者协议缺失的合规风险及存储限制原则
对无限期留存的适用。`,topic:`GDPR`,verified:`accurate`},{id:232,question:`Sanctions for non-compliance with the EU Artificial Intelligence Act (AI Act) could result in a maximum
fine
of?`,options:[`A. The higher of up to 10 million Euro or up to 2% of the entity's total worldwide turnover for the preceding financial year.`,`B. The higher of up to 40 million Euro or up to 8% of the entity's total worldwide turnover for the preceding financial year.`,`C. The higher of up to 20 million Euro or up to 4% of the entity's total worldwide turnover for the preceding financial year.`,`D. The higher of up to 30 million Euro or up to 6% of the entity's total worldwide turnover for the preceding financial year.`],correctAnswer:`无（原四项均不准确）`,explanation:`现行《欧盟人工智能法》没有任何一个选项匹配最高档罚款。违反禁止性 AI 做法可处最高 3,500 万欧元，或对企业
处上一财年全球年营业额 7%（原则上取较高者；中小企业适用法案规定的较低上限规则）。其他类型违规适用较低
的罚款档次。`,topic:`AI Act`,verified:`corrected`},{id:233,question:`A dynamic Internet Protocol (IP) address is considered personal data when it is combined with what?`,options:[`A. Other data held by the processor.`,`B. Other data held by the controller.`,`C. Other data held by recipients of the data.`,`D. Other data held by Internet Service Providers (ISPs).`],correctAnswer:`D`,explanation:`【经复核，本题参考答案有误，正确答案应为 D，理由见文末【答案修正】说明】原解析（针对原答案
B）：正确答案 B。欧洲法院在 Breyer 案（2016）中确立，动态 IP 地址是否构成个人数据取决于控制者
（如网站运营商）是否拥有合法途径（如可要求 ISP 提供）获取能将该 IP 地址与特定用户关联的补充信
息；本题强调的是与“控制者”所持有的其他数据结合的可能性，而非处理者（A）、数据接收方（C）或
ISP 自身持有的数据（D，ISP 当然掌握对应信息，但本题问的是使得控制者一方能够识别个人的判断标
准）。知识点：Breyer 案确立的动态 IP 地址构成个人数据的判断标准——控制者是否有合理途径结合额
外信息识别个人。 【答案修正】原答案标注为 B，经核查欧洲法院 Breyer 案（C-582/14，2016 年 10 月
19 日判决）原文，正确答案应为 D。该案确立的规则是：动态 IP 地址对于网站运营商（控制者）而言是
否构成个人数据，取决于该控制者是否拥有合法途径，借助互联网服务提供商（ISP，即案件中的第三
方）所掌握的补充信息来识别用户——该补充信息是由 ISP（第三方）持有，而非由控制者自身持有。因
此正确表述应为“与 ISP 持有的其他数据结合”（选项 D），而非“与控制者持有的其他数据结合”（选项
B，原答案）。这一区分正是 Breyer 案确立“相对识别标准”（relative criterion）的核心——即便识别所需
的补充信息掌握在第三方手中，只要控制者有合法、现实的途径获取该信息，该数据对控制者而言仍构
成个人数据。`,topic:`判例法`,verified:`accurate`},{id:234,question:`Which of the following type of "natural person" is NOT exempt from the material scope of the GDPR.
Insofar as the processing of personal data is concerned?`,options:[`A. A natural person in the course of a large-scale but purely personal or household activity.`,`B. A natural person processing data for a small-scale, purely personal or household activity. 6`,`C. A natural person in the course of processing purely personal or household data on behalf of a spouse who is beyond the age of majority.`,`D. A natural person in the course of an activity conducted purely for a personally-owned sole proprietorship.`],correctAnswer:`D`,explanation:`正确答案 D。第 2(2)(c)条“家庭活动豁免”仅适用于自然人纯粹为个人或家庭事务从事的处理活动（无论规
模大小，A、B 均可能落入该豁免，只要活动本质仍属纯个人/家庭性质；C 代表配偶之间纯粹私人事务的
处理同样属于该豁免范畴），但若自然人是以个体经营者（sole proprietorship，即从事商业经营活动）的
身份处理数据，即便是个人独资经营，也已超出“纯粹个人或家庭事务”范畴，属于商业活动，不享受家庭
活动豁免，须完全遵守 GDPR。知识点：第 2(2)(c)条家庭活动豁免的范围界定——商业性质活动（即便
是个体经营）不适用该豁免。`,topic:`GDPR`,verified:`accurate`},{id:235,question:`MagicClean is a web-based service located in the United States that matches home cleaning services to
customers. It offers its services exclusively in the United States. It uses a processor located in France to
optimize its data.

Is MagicClean subject to the GDPR?`,options:[`A. Yes, because MagicClean is processing data in the EU.`,`B. Yes, because MagicClean's data processing agreement with the French processor is an establishment in the EU.`,`C. No, because MagicClean is located in the United States only.`,`D. No, because MagicClean is not offering services to EU data subjects.`],correctAnswer:`D`,explanation:`正确答案 D。MagicClean 仅面向美国境内客户提供服务，并未向欧盟数据主体提供商品或服务，也未监
测欧盟境内个人的行为，即便使用了位于法国的处理者协助优化数据（处理活动的执行地点本身不足以
触发 GDPR，需结合是否构成“设立机构活动背景下的处理”或目标指向欧盟数据主体判断），因此不落入
GDPR 域外适用范围。A、B 均错误地将“处理活动发生地在欧盟”或“与欧盟处理者签订协议”等同于触发
GDPR 适用的充分条件，忽略了核心判断标准应是是否面向欧盟数据主体提供服务或监测其行为。知识
点：第 3 条域外适用性判断——使用欧盟处理者本身不足以触发 GDPR，须结合是否面向欧盟数据主体提
供服务或监测行为。`,topic:`GDPR`,verified:`accurate`},{id:236,question:`SCENARIO

Please use the following to answer the next question:

Financially, it has been a very good year at ARRA Hotels: Their 21 hotels, located in Greece (5), Italy (15)
and Spain (1), have registered their most profitable results ever. To celebrate this achievement, ARRA
Hotels' Human Resources office, based in ARRA's main Italian establishment, has organized a team event
for its 420 employees and their families at its hotel in Spain.

Upon arrival at the hotel, each employee and family member is given an electronic wristband at the
reception desk. The wristband serves a number of functions:

Allows access to the "party zone" of the hotel, and emits a buzz if the user approaches any
unauthorized areas
Allows up to three free drinks for each person of legal age, and emits a buzz once this limit has been
reached
Grants a unique ID number for participating in the games and contests that have been planned.

Along with the wristband, each guest receives a QR code that leads to the online privacy notice describing
the use of the wristband. The page also contains an unchecked consent checkbox. In the case of
employee family members under the age of 16, consent must be given by a parent.

Among the various activities planned for the event, ARRA Hotels' HR office has autonomously set up a

photocall area, separate from the main event venue, where employees can come and have their pictures

taken in traditional carnival costume. The photos will be posted on ARRA Hotels' main website for general
marketing purposes.

On the night of the event, an employee from one of ARRA's Greek hotels is displeased with the results of
the photos in which he appears. He intends to file a complaint with the relevant supervisory authority in
regard to the following:
 The lack of any privacy notice in the separate photocall area
 The unlawful cross-border processing of his personal data
 The unacceptable aesthetic outcome of his photos

Which of the following is NOT necessarily considered a factor in identifying whether the processing could
be considered a "cross-border processing"?`,options:[`A. The total number of the data subjects interested.`,`B. The potential harm for the data subjects affected.`,`C. The limitation of rights of the data subjects concerned.`,`D. The exposure of the information of the data subjects involved.`],correctAnswer:`A`,explanation:`正确答案 A。判断处理活动是否构成“跨境处理”（第 4(23)条）的关键要素包括：处理是否发生在控制者
于多个成员国的多个机构活动背景下、或处理是否实质影响多个成员国的数据主体（结合潜在损害 B、
权利限制 C、信息暴露风险 D 等因素综合评估“实质影响”），但受影响数据主体的“总人数”本身并非判断
是否构成跨境处理的直接法定考量因素——即便涉及人数不多，只要满足前述实质性影响多个成员国的
标准，仍可构成跨境处理；反之人数众多但影响局限于单一成员国也未必构成跨境处理。知识点：第
4(23)条“跨境处理”的认定标准——聚焦于多机构处理背景或对多成员国数据主体的实质影响，而非受影
响人数本身。`,topic:`GDPR`,verified:`accurate`},{id:237,question:`SCENARIO

Please use the following to answer the next question:

Financially, it has been a very good year at ARRA Hotels: Their 21 hotels, located in Greece (5), Italy (15)

and Spain (1), have registered their most profitable results ever. To celebrate this achievement, ARRA
Hotels' Human Resources office, based in ARRA's main Italian establishment, has organized a team event
for its 420 employees and their families at its hotel in Spain.

Upon arrival at the hotel, each employee and family member is given an electronic wristband at the
reception desk. The wristband serves a number of functions:

Allows access to the "party zone" of the hotel, and emits a buzz if the user approaches any
unauthorized areas
Allows up to three free drinks for each person of legal age, and emits a buzz once this limit has been
reached
Grants a unique ID number for participating in the games and contests that have been planned.

Along with the wristband, each guest receives a QR code that leads to the online privacy notice describing
the use of the wristband. The page also contains an unchecked consent checkbox. In the case of
employee family members under the age of 16, consent must be given by a parent.

Among the various activities planned for the event, ARRA Hotels' HR office has autonomously set up a
photocall area, separate from the main event venue, where employees can come and have their pictures
taken in traditional carnival costume. The photos will be posted on ARRA Hotels' main website for general
marketing purposes.

On the night of the event, an employee from one of ARRA's Greek hotels is displeased with the results of
the photos in which he appears. He intends to file a complaint with the relevant supervisory authority in
regard to the following:

The lack of any privacy notice in the separate photocall area
The unlawful cross-border processing of his personal data
The unacceptable aesthetic outcome of his photos

Which of the following principles has likely been violated in the processing of the photocall photos

containing personal data?`,options:[`A. Adequacy.`,`B. Lawfulness.`,`C. Transparency.`,`D. Data minimization.`],correctAnswer:`C`,explanation:`正确答案 C。ARRA 酒店人力资源部门自行设置的拍照区域并未提供任何隐私声明，员工在毫不知情的情
况下被拍照并计划将照片用于公司营销宣传，这明显违反透明度原则（第 5(1)(a)、13 条）——未告知处
理目的、用途及相关权利。知识点：第 5(1)(a)及 13 条透明度原则在企业活动摄影场景中的适用。`,topic:`GDPR`,verified:`accurate`},{id:238,question:`SCENARIO

Please use the following to answer the next question:

Financially, it has been a very good year at ARRA Hotels: Their 21 hotels, located in Greece (5), Italy (15)
and Spain (1), have registered their most profitable results ever. To celebrate this achievement, ARRA
Hotels' Human Resources office, based in ARRA's main Italian establishment, has organized a team event
for its 420 employees and their families at its hotel in Spain.

Upon arrival at the hotel, each employee and family member is given an electronic wristband at the
reception desk. The wristband serves a number of functions:

Allows access to the "party zone" of the hotel, and emits a buzz if the user approaches any
unauthorized areas
Allows up to three free drinks for each person of legal age, and emits a buzz once this limit has been
reached
Grants a unique ID number for participating in the games and contests that have been planned.

Along with the wristband, each guest receives a QR code that leads to the online privacy notice describing
the use of the wristband. The page also contains an unchecked consent checkbox. In the case of
employee family members under the age of 16, consent must be given by a parent.

Among the various activities planned for the event, ARRA Hotels' HR office has autonomously set up a
photocall area, separate from the main event venue, where employees can come and have their pictures
taken in traditional carnival costume. The photos will be posted on ARRA Hotels' main website for general
marketing purposes.

On the night of the event, an employee from one of ARRA's Greek hotels is displeased with the results of
the photos in which he appears. He intends to file a complaint with the relevant supervisory authority in
regard to the following:

The lack of any privacy notice in the separate photocall area
The unlawful cross-border processing of his personal data
The unacceptable aesthetic outcome of his photos

Why would consent NOT be considered an adequate legal basis for accessing the party zone?`,options:[`A. The consent is not completely unambiguous.`,`B. The consent is not sufficiently informed.`,`C. The consent is not freely given.`,`D. The consent is not in writing.`],correctAnswer:`C`,explanation:`正确答案 C。手环用于进入“派对区”这一功能与员工是否参加庆典活动本身存在实际关联，且勾选同意框
位于活动现场、通过员工与雇主之间固有的权力不对等及社交压力情境下获取，员工很难真正自由地拒
绝而不产生不利后果（如被排除在团建活动之外的社交压力），这使得该同意的“自由性”存疑，不构成有
效同意的法律基础。A、B、D 虽然也可能存在问题，但本题聚焦的核心缺陷在于雇佣关系及活动情境下
同意“自由给予”这一要素的欠缺。知识点：第 4(11)、7 条有效同意的“自由性”要求及雇佣/团建活动场景
下同意自愿性的固有质疑。`,topic:`GDPR`,verified:`accurate`},{id:239,question:`SCENARIO
Please use the following to answer the next question:

Financially, it has been a very good year at ARRA Hotels: Their 21 hotels, located in Greece (5), Italy (15)
and Spain (1), have registered their most profitable results ever. To celebrate this achievement, ARRA
Hotels' Human Resources office, based in ARRA's main Italian establishment, has organized a team event
for its 420 employees and their families at its hotel in Spain.

Upon arrival at the hotel, each employee and family member is given an electronic wristband at the
reception desk. The wristband serves a number of functions:

Allows access to the "party zone" of the hotel, and emits a buzz if the user approaches any
unauthorized areas
Allows up to three free drinks for each person of legal age, and emits a buzz once this limit has been
reached
Grants a unique ID number for participating in the games and contests that have been planned.

Along with the wristband, each guest receives a QR code that leads to the online privacy notice describing
the use of the wristband. The page also contains an unchecked consent checkbox. In the case of
employee family members under the age of 16, consent must be given by a parent.

Among the various activities planned for the event, ARRA Hotels' HR office has autonomously set up a
photocall area, separate from the main event venue, where employees can come and have their pictures
taken in traditional carnival costume. The photos will be posted on ARRA Hotels' main website for general
marketing purposes.

On the night of the event, an employee from one of ARRA's Greek hotels is displeased with the results of
the photos in which he appears. He intends to file a complaint with the relevant supervisory authority in
regard to the following:

The lack of any privacy notice in the separate photocall area
The unlawful cross-border processing of his personal data
The unacceptable aesthetic outcome of his photos

Assuming that there is a cross-border processing of personal data, which of the following criteria would
NOT be useful to the lead supervisory authority responsible for the Greek employee's complaint when
trying to determine the location of the controller's main establishment?`,options:[`A. Where the controller is registered as a company.`,`B. Where the processor is registered as a company.`,`C. Where decisions about the processing activities are made.`,`D. Where the director with responsibility for processing activities is located.`],correctAnswer:`B`,explanation:`正确答案 B。判断控制者“主要设立地”的核心考量因素是控制者（而非处理者）在欧盟的注册地（A）、
实际作出处理决策的地点（C）、负责处理事务的高管所在地（D）等，均围绕控制者自身展开；处理者
的注册地点与确定控制者的主要设立地（进而确定主导监管机构）并无直接关联，因为主导监管机构制
度是围绕控制者的设立地展开设计的（若处理者单独构成控制者身份则另当别论）。知识点：第 4(16)条
主要设立地认定标准——聚焦于控制者（而非处理者）的注册地、决策地及责任人所在地。`,topic:`监管机构`,verified:`accurate`},{id:240,question:`Which kind of privacy notice, originally advocated by the Article 29 Working Party, is commonly
recommended for AI-based technologies because of the way it provides processing information at specific
points of data collection?`,options:[`A. Privacy dashboard notice.`,`B. Visualization notice.`,`C. Just-in-time notice.`,`D. Layered notice.`],correctAnswer:`C`,explanation:`正确答案 C。第 29 条工作组倡导的“即时提示”（just-in-time notice）告知方式，即在用户实际输入或提交
特定类型数据的当下、在具体情境节点弹出简明相关的处理信息提示，这种方式尤其适合 AI 驱动的技术
场景（如动态个性化处理、实时数据收集节点较多），能在恰当时机提供针对性信息，优于笼统的隐私
仪表盘（A）、可视化通知（B）或分层通知（D，分层通知更适合传统网站/App 整体隐私政策的呈现，
而非 AI 技术中具体数据收集节点的即时提示）。知识点：第 29 条工作组倡导的“即时提示”告知方式及其
在 AI 技术场景下的适用优势。`,topic:`GDPR`,verified:`accurate`},{id:241,question:`Articles 13 and 14 of the GDPR provide details on the obligation of data controllers to inform data subjects
when collecting personal data. However, both articles specify an exemption for situations in which the data
subject already has the information.

Which other situation would also exempt the data controller from this obligation under Article 14?`,options:[`A. When providing the information would go against a police order.`,`B. When providing the information would involve a disproportionate effort.`,`C. When the personal data was obtained through multiple source in the public domain.`,`D. When the personal data was obtained 5 years before the entry into force of the GDPR.`],correctAnswer:`B`,explanation:`正 确 答 案 B 。 第 14(5)(b) 条 规 定 ， 若 提 供 该 信 息 将 被 证 明 “ 不 可 能 ” 或 需 付 出 “ 不 成 比 例 的 努 力 ”
（disproportionate effort），控制者可豁免第 14 条告知义务（尤其常见于科研、统计、档案目的处理场
景，且须采取适当保障措施如公开发布信息等替代方式）。A（违反警方命令，非第 14 条明文列举的例
外）、C（多方公开来源获取，本身不构成独立豁免理由）、D（GDPR 生效前 5 年获得的数据，无此类
时间豁免规定）均不准确。知识点：第 14(5)(b)条“不成比例努力”作为告知义务的豁免情形。`,topic:`GDPR`,verified:`accurate`},{id:242,question:`The transparency principle is most directly related to which of the following rights?`,options:[`A. Right to object.`,`B. Right to be informed.`,`C. Right to be forgotten.`,`D. Right to restriction of processing.`],correctAnswer:`B`,explanation:`正确答案 B。透明度原则的核心落地机制正是“被告知权”（Right to be Informed，体现在第 13、14 条），
要求控制者以清晰易懂的方式主动告知数据主体处理相关信息，这是透明度原则最直接对应的具体权
利。反对权（A）、被遗忘权（C）、限制处理权（D）虽然也与透明度原则存在间接关联（数据主体须
先被充分告知才能有效行使这些权利），但并非该原则最直接对应的权利。知识点：透明度原则与“被告
知权”（第 13、14 条）的直接对应关系。`,topic:`GDPR`,verified:`accurate`},{id:243,question:`As a Data Protection Officer for a small bank in the European Union, you receive a data subject access
request from one of your customers. The customer provides you with his name, and has used the email
address registered in your system.

What would be the most appropriate way to confirm the identity of the customer?`,options:[`A. Request that the customer provide his bank account number.`,`B. Request that the customer answer additional security questions.`,`C. Request a copy of the customer's last bank account statement.`,`D. Request a copy of the customer's government-issued ID document.`],correctAnswer:`B`,explanation:`正确答案 B。要求客户回答其账户注册时预设的安全问题，是一种在不额外收集新的敏感身份证明文件
（如政府身份证 D，超出必要范围）或过度收集金融账户细节（A、C，涉及不必要的额外敏感数据收
集，违反数据最小化原则）的情况下，合理核实请求人身份的适度方式，符合第 12(6)条身份核实的比例
性要求。知识点：第 12(6)条身份核实措施应遵循数据最小化及比例原则，避免过度收集额外敏感信息。`,topic:`GDPR`,verified:`accurate`},{id:244,question:`In the Planet 49 case, what was the main judgement of the Court of Justice of the European Union (CJEU)

regarding the issue of cookies?`,options:[`A. If the cookies do not track personal data, then pre-checked boxes are acceptable.`,`B. If the ePrivacy Directive requires consent for cookies, then the GDPR's consent requirements apply.`,`C. If a website's cookie notice makes clear the information gathered and the lifespan of the cookie, then pre-checked boxes are acceptable.`,`D. If a data subject continues to scroll through a website after reading a cookie banner, this activity constitutes valid consent for the tracking described in the cookie banner.`],correctAnswer:`B`,explanation:`正确答案 B。Planet49 案的核心裁判要旨是：只要 ePrivacy 指令要求就 cookie 的放置取得用户同意，该同
意必须满足 GDPR 规定的同意有效性标准（如明确的肯定性行为、具体、知情等），即把 GDPR 的同意
定义和标准“嫁接”适用于 ePrivacy 指令项下的 cookie 同意要求，从而统一了两套法律框架下同意的判断
标准。A、C、D 均对判决的具体内容作出了不准确或与判决要旨相反的表述（该案恰恰否定了预勾选框
和被动继续浏览可构成有效同意）。知识点：Planet49 案确立的 GDPR 同意标准适用于 ePrivacy 指令下
cookie 同意的要旨。`,topic:`ePrivacy指令`,verified:`accurate`},{id:245,question:`What ruling did the Planet 49 CJEU Judgment make regarding the issue of pre-ticked boxes?`,options:[`A. They are allowed if determined to be technically necessary.`,`B. They do not amount to valid consent under any circumstances.`,`C. They are allowed if recorded in the register of processing activities.`,`D. They constitute valid consent if the processing is necessary for purposes of legitimate interest.`],correctAnswer:`B`,explanation:`正确答案 B。Planet49 案明确裁定，预先勾选的同意框（pre-ticked box）在任何情况下都不能构成有效的
同意，因为这不满足“积极的肯定性行为”这一同意有效性的核心要求（用户的沉默或未采取拒绝行动不能
被解释为同意），A、C、D 均描述了不成立的例外情形。知识点：Planet49 案关于预勾选框绝对不构成
有效同意的裁决。`,topic:`判例法`,verified:`accurate`},{id:246,question:`According to Art. 23 GDPR, which of the following data subject rights can NOT be restricted?`,options:[`A. Right to restriction of processing.`,`B. Right to erasure ("Right to be forgotten").`,`C. Right to lodge a complaint with a supervisory authority.`,`D. Right not to be subject to automated individual decision-making.`],correctAnswer:`C`,explanation:`正确答案 C。第 23 条允许成员国通过立法在特定条件下（如国家安全、国防、公共安全、预防犯罪等重
大公共利益目的）限制数据主体的部分权利（如限制处理权 A、被遗忘权 B、免受自动化决策约束权 D
等），但向监管机构投诉的权利（第 77 条）作为数据主体寻求救济、确保监管监督的基本程序性权利，
通常不在第 23 条可限制的权利范围之列（该权利本身正是确保权利限制措施合法性受到监督的重要保障
机制）。知识点：第 23 条数据主体权利限制的范围及不可限制的投诉权。`,topic:`GDPR`,verified:`accurate`},{id:247,question:`After detecting an intrusion involving the theft of unencrypted personal data, who shall the breached
company notify first under GDPR requirements?`,options:[`A. Any parents of children whose personal data was compromised.`,`B. Any affected customers whose data was compromised.`,`C. A competent supervisory authority.`,`D. A local law enforcement agency.`],correctAnswer:`C`,explanation:`正确答案 C。第 33 条规定，控制者在知悉数据泄露后，若泄露很可能给数据主体权利自由带来风险，应
“不得无故拖延”地（原则上 72 小时内）首先通知有管辖权的监管机构，这是法定的第一顺位通知对象；
通知受影响的数据主体（B、A，且仅在“高风险”门槛下才需要，第 34 条）及通知执法机构（D，非
GDPR 强制的首要步骤，是否报警属另一项独立的刑事程序考量）均非首先且必然采取的步骤。知识点：
第 33 条数据泄露通知的首要对象及 72 小时时限。`,topic:`GDPR`,verified:`accurate`},{id:248,question:`According to the EDPB Guidelines 01/2021 on Examples regarding Personal Data Breach Notification, if

exfiltration of job application data (submitted through online application forms and stored on a webserver)
resulted in personal information being accessible to unauthorized persons, this would be primarily
considered what kind of breach?`,options:[`A. An integrity breach.`,`B. An accuracy breach.`,`C. An availability breach.`,`D. A confidentiality breach.`],correctAnswer:`D`,explanation:`正确答案 D。求职申请数据被未经授权的第三方窃取访问，本质上是未经授权的第三方获得了本不应访
问的个人数据，属于对数据“机密性”的破坏，即“机密性泄露”（confidentiality breach），而非完整性泄露
（数据被篡改，A）、准确性泄露（非 GDPR 泄露分类术语，B 为干扰项）或可用性泄露（数据丢失或无
法访问，C）。知识点：EDPB 第 01/2021 号指南关于数据泄露三种类型（机密性、完整性、可用性）的
区分——未授权访问/窃取对应机密性泄露。`,topic:`监管机构`,verified:`accurate`},{id:249,question:`You are the new Data Protection Officer for your company and have to determine whether the company
has implemented appropriate technical and organizational measures as required by Article 32 of the
GDPR. Which of the following would be the most important to consider when trying to determine this?`,options:[`A. How security measures might evolve in the future.`,`B. Which security measures are endorsed by a majority of experts.`,`C. How the public perceives what constitutes adequate security measures.`,`D. Which kinds of security measures your company has employed in the past.`],correctAnswer:`B`,explanation:`答案 B 只是四项中对“state of the art（技术发展水平）”最接近的代理指标，并非以专家多数投票决定。第 32 条还要
求同时考虑实施成本、处理性质和范围、背景、目的，以及对个人权利自由的风险。`,topic:`GDPR`,verified:`qualified`},{id:250,question:`If a company receives an anonymous email demanding ransom for the stolen personal data of its clients,
what must the company do next, per GDPR requirements?`,options:[`A. Notify the police and file a criminal complaint about the incident.`,`B. Start an investigation to understand the incident's possible scope, duration and nature.`,`C. Send a notification to the competent supervisory authority describing the incident.`,`D. Send an email about the incident to all clients and ask them to change their passwords.`],correctAnswer:`B`,explanation:`正确答案 B。匿名勒索邮件表明可能发生个人数据泄露，但控制者应立即调查，以取得“合理确定性”并了解范围、
持续时间、数据类别和风险。只有在达到“知悉”标准且泄露可能对个人权利和自由造成风险时，才须依第 33 条在 72
小时内通知监管机构；必要时可分阶段补充信息。`,topic:`GDPR`,verified:`corrected`},{id:251,question:`If two controllers act as joint controllers pursuant to Article 26 of the GDPR, which of the following may
NOT be validly determined by said controllers?`,options:[`A. The definition of a central contact point for data subjects.`,`B. The rules regarding the exercising of data subjects' rights.`,`C. The rules to provide information to data subjects in Articles 13 and 14.`,`D. The non-disclosure of the essence of their arrangement to data subjects.`],correctAnswer:`D`,explanation:`正确答案 D。第 26 条要求共同控制者以协议明确各自责任分工，并须将该协议的实质内容（essence of
the arrangement）向数据主体公开（第 26(2)条），因此共同控制者无权约定对数据主体保密该合作安排的
实质内容，这是强制性透明度要求，不可协商排除。A（设立统一联系点）、B（行使数据主体权利的具
体规则）、C（第 13/14 条告知义务的分工规则）均属于共同控制者协议可以且应当明确约定的事项。知
识点：第 26 条共同控制者协议须向数据主体公开安排实质内容的强制性要求。`,topic:`GDPR`,verified:`accurate`},{id:252,question:`ISO 31700 has set forth requirements relating to consumer products and services. In particular, this
international standard focuses on the implementation of which of the following?`,options:[`A. Privacy by design.`,`B. Comprehensive ethical AI software.`,`C. Privacy notices for companies providing services to consumers.`,`D. Automated systems for identifying EU data subjects' personal data.`],correctAnswer:`A`,explanation:`正确答案 A。ISO 31700 是全球首个专门针对消费品和服务领域的“设计阶段隐私保护”（Privacy by
Design）国际标准，规定了产品和服务开发过程中应遵循的隐私保护工程要求，而非专门针对 AI 伦理软
件（B）、隐私声明制作规范（C）或识别欧盟数据主体的自动化系统（D）。知识点：ISO 31700 标准及
其在消费品/服务领域落实设计阶段隐私保护的核心定位。`,topic:`GDPR`,verified:`accurate`},{id:253,question:`What is the main task of the European Data Protection Board?`,options:[`A. To assess adequacy of data protection in third countries.`,`B. To ensure consistent application of the GDPR.`,`C. To proactively prevent disputes between national supervisory authorities.`,`D. To publish guidelines for data subjects on how to properly enforce their rights.`],correctAnswer:`B`,explanation:`正确答案 B。EDPB 的核心法定任务是确保 GDPR 在欧盟各成员国范围内得到一致适用和解释（第 70 条
列明的具体职责，包括发布指南、处理一致性机制下的争议、发布意见等），而非直接负责充分性认定
评估（A，该职责属于欧盟委员会，EDPB 仅提供咨询意见）、主动预防各国监管机构间的争议（C，
EDPB 是在争议已产生后通过一致性机制介入协调，而非“主动预防”）或直接面向数据主体发布维权指引
（D，EDPB 的指南受众更广泛，包括控制者、处理者、监管机构等，并非专门面向数据主体本身）。知
识点：EDPB 的核心法定职责——确保 GDPR 在欧盟范围内一致适用（第 70 条）。`,topic:`监管机构`,verified:`accurate`},{id:254,question:`In relation to third countries and international organizations, which of the following shall, along with the
supervisory authorities, take appropriate steps to develop international cooperation mechanisms for the
enforcement of data protection legislation?`,options:[`A. The European Parliament.`,`B. The Council of the European Union.`,`C. The designated Data Protection Officers.`,`D. The European Commission.`],correctAnswer:`D`,explanation:`正确答案 D。第 50 条规定，欧盟委员会及各监管机构应共同采取适当步骤，就第三国和国际组织之间发
展数据保护执法国际合作机制，欧盟委员会在此扮演关键角色（负责与第三国政府和国际组织层面的协
调），而非欧洲议会（A）、欧盟理事会（B，二者更多承担立法职能而非具体执法国际合作的推动）或
个别企业的 DPO（C，DPO 是企业内部合规角色，无权代表国家进行国际合作）。知识点：第 50 条国际
合作机制发展中欧盟委员会与监管机构的共同职责。`,topic:`监管机构`,verified:`accurate`},{id:255,question:`The European Data Protection Board (EDPB) recommends measures to supplement transfer tools, in
order to ensure compliance with the European Union (EU) level of personal data protection. According to
these recommendations, what additional actions should be taken when a transfer to a third country is

based upon an adequacy decision?`,options:[`A. Adopt a supplementary data transfer mechanism.`,`B. Monitor the ongoing validity of the data transfer mechanism.`,`C. Adopt technical, contractual or organizational supplementary measures.`,`D. Monitor changes in the law or practice of the third country that would lower the level of protection of personal data.`],correctAnswer:`D`,explanation:`正确答案 D。EDPB 建议，即便跨境传输依托欧盟委员会已作出的充分性认定，数据出口方仍应持续关注
该第三国的法律或实践是否发生可能降低个人数据保护水平的变化（因充分性认定本身也可能被暂停、
修改或撤销），而非需另行采取补充传输机制（A，充分性认定本身已足以合法化传输，无需叠加其他机
制）、监测传输机制的持续有效性（B，表述较笼统，D 更具体地指出应监测“第三国法律或实践的变化”
这一关键要素）或采取技术合同组织性补充措施（C，补充措施主要适用于依赖 SCC 等其他传输工具的
情形，而非已获充分性认定的传输）。知识点：EDPB 关于充分性认定传输下持续关注第三国法律环境变
化的建议。`,topic:`监管机构`,verified:`accurate`},{id:256,question:`In the wake of the Schrems II ruling, which of the following actions has been recommended by the EDPB
for companies transferring personal data to third countries?`,options:[`A. Adopting a risk-based approach and implementing supplementary measures as needed.`,`B. Ensuring that all data transfers are encrypted with unbreakable encryption algorithms.`,`C. Obtaining explicit consent from each EU citizen for every individual data transfer.`,`D. Storing all personal data within the borders of the European Union.`],correctAnswer:`A`,explanation:`正确答案 A。Schrems II 判决后，EDPB 建议企业采取“基于风险的方法”，对每一具体跨境传输的实际情
况（目标国法律环境、数据敏感性等）进行个案评估，并按需实施适当的补充措施（技术、合同、组织
性），而非要求“不可破解加密”这一不现实的技术标准（B）、逐一取得每位欧盟公民就每次传输的明确
同意（C，同意仅是跨境传输合法机制之一且适用范围有限，并非普遍适用的解决方案）或要求所有个人
数据必须存储在欧盟境内（D，数据本地化并非 Schrems II 判决要求的强制性一般原则）。知识点：
Schrems II 判决后 EDPB 建议的“基于风险的方法”及补充措施机制。`,topic:`判例法`,verified:`accurate`},{id:257,question:`Which failing of Privacy Shield, cited by the CJEU as a reason for its invalidation, is the Trans-Atlantic Data
Privacy Framework intended to address?`,options:[`A. Data Subject Rights.`,`B. Right of Action.`,`C. Necessity.`,`D. Consent.`],correctAnswer:`B`,explanation:`答案 B 应理解为缺乏有效、可执行的司法救济或独立申诉机制。新框架试图通过数据保护审查法院等机制回应
CJEU 对美国监控救济不足的批评；“right of action”只是简化表述。`,topic:`监管机构`,verified:`qualified`},{id:258,question:`Pursuant to the EDPB Guidelines 8/2022, all of the following criteria must be considered when identifying a
lead supervisory authority of a controller EXCEPT?`,options:[`A. Determining where the controller has its place of central administration in the EEA.`,`B. Determining the supervisory authority where the place of central administration of the controller is located.`,`C. Determining the supervisory authority according to what has been identified by the controller as the authority to which data subjects can lodge complaints.`,`D. Determining if decisions on the processing are taken in another establishment in the EEA, and if that establishment has the power to implement those decisions.`],correctAnswer:`C`,explanation:`正确答案 C。EDPB《8/2022 号指南》关于认定控制者主导监管机构的标准包括：中央管理地所在地
（A、B）、是否存在其他欧盟设立机构实际作出并有权执行处理决策（D）等客观事实标准，但并不采
纳控制者自行在隐私政策中“单方声明/指定”某监管机构作为数据主体投诉受理机构这一主观表述作为认
定依据——主导监管机构的认定须基于客观事实，而非由控制者单方声明决定。知识点：EDPB 指南
8/2022 关于主导监管机构认定的客观标准，排除控制者单方自我指定的做法。`,topic:`监管机构`,verified:`accurate`},{id:259,question:`Higher fines are assessed for GDPR violations due to which of the following?`,options:[`A. Failure to notify a supervisory authority and data subjects of a personal data breach.`,`B. Violations of a data controller's obligations to obtain a child's consent. 6`,`C. Failure to appoint a data protection officer.`,`D. Violations of a data subject's rights.`],correctAnswer:`D`,explanation:`正确答案 D。第 83(5)条将违反数据主体基本权利（如同意规则、数据主体权利第 12-22 条、跨境传输核
心原则、儿童同意规则等）的行为列为最高档行政罚款（最高 2000 万欧元或全球营业额 4%）的适用情
形，这类违规直接侵害数据主体的核心利益，因此适用最严厉的处罚标准。A（未通知泄露）也属于较高
违规但严格对应的是第 83(4)条较低档（除非同时涉及权利侵害）；B（违反儿童同意规则）本质上也是
数据主体权利/同意规则违反的一种，与 D 存在包含关系，但 D 作为更概括、更准确的分类表述涵盖范围
更广；C（未设 DPO）属于第 83(4)条较低档罚款范围。知识点：第 83(5)条较高档行政罚款——违反数据
主体权利相关规定适用最严厉处罚标准。`,topic:`GDPR`,verified:`accurate`},{id:260,question:`SCENARIO

Please use the following to answer the next question:

ProStorage is a multinational cloud storage provider headquartered in the Netherlands. Its CEO, Ruth
Brown, has developed a two-pronged strategy for growth: 1) expand ProStorage's global customer base
and 2) increase ProStorage's sales force by efficiently onboarding effective teams. Enacting this strategy
has recently been complicated by Ruth's health condition, which has limited her working hours, as well as
her ability to travel to meet potential customers. ProStorage's Human Resources department and Ruth's
Chief of Staff now work together to manage her schedule and ensure that she is able to make all her
medical appointments. The latter has become especially crucial after Ruth's last trip to India, where she
suffered a medical emergency and was hospitalized in New Delhi. Unable to reach Ruth's family, the
hospital reached out to ProStorage and was able to connect with her Chief of Staff, who in coordination
with Mary, the head of HR, provided information to the doctors based on accommodation requests Ruth
made when she started at ProStorage.

In support of Ruth's strategic goals of hiring more sales representatives, the Human Resources team is
focused on improving its processes to ensure that new employees are sourced, interviewed, hired, and on

boarded efficiently. To help with this, Mary identified two vendors, HRYourWay, a German based
company, and InstaHR, an Australian based company. She decided to have both vendors go through
ProStorage's vendor risk review process so she can work with Ruth to make the final decision. As part of
the review process, Jackie, who is responsible for maintaining ProStorage's privacy program (including
maintaining controller BCRs and conducting vendor risk assessments), reviewed both vendors but
completed a transfer impact assessment only for InstaHR. After her review of both vendors, she
determined that InstaHR satisfied more of the requirements as it boasted a more established privacy
program and provided third-party attestations, whereas HRYourWay was a small vendor with minimal data
protection operations. Thus, she recommended InstaHR.

ProStorage's marketing team also worked to meet the strategic goals of the company by focusing on
industries where it needed to grow its market share. To help with this, the team selected as a partner
UpFinance. a US based company with deep connections to financial industry customers. During
ProStorage's diligence process, Jackie from the privacy team noted in the transfer impact assessment that
UpFinance implements several data protection measures including end-lo-end encryption, with encryption
keys held by the customer. Notably, UpFinance has not received any government requests in its 7 years of
business. Still, Jackie recommended that the contract require UpFinance to notify ProStorage if it receives
a government request for personal data UpFinance processes on its behalf prior to disclosing such data.

What transfer mechanism did ProStorage most likely rely on to transfer Ruth's medical information to the
hospital?`,options:[`A. Ruth's implied consent.`,`B. Protecting the vital interest of Ruth.`,`C. Performance of a contract with Ruth.`,`D. Protecting against legal liability from Ruth.`],correctAnswer:`B`,explanation:`正确答案 B。医院因无法联系 Ruth 的家人、在紧急医疗情况下向公司询问并获得健康信息，公司据此向
医 院 提 供 信 息 ， 其 合 法 处 理 依 据 应 是 第 6(1)(d) 条 “ 保 护 数 据 主 体 或 其 他 自 然 人 的 重 大 利 益 ” （ vital
interest），这一依据专门适用于当事人无法表达同意、且处理是挽救生命或健康所必需的紧急情况。A
（默示同意，紧急情况下当事人往往无法表达同意，不宜依赖默示同意这一较弱且存疑的依据）、C（履
行合同，员工的劳动合同本身通常不直接涵盖医疗紧急联络这一具体处理目的）、D（防范法律责任，属
于合法利益范畴而非最贴切的依据）均不如“重大利益”准确对应紧急医疗场景。知识点：第 6(1)(d)条“重
大利益”作为紧急医疗等生命健康攸关场景下的合法处理依据。`,topic:`GDPR`,verified:`accurate`},{id:261,question:`SCENARIO

Please use the following to answer the next question:

ProStorage is a multinational cloud storage provider headquartered in the Netherlands. Its CEO, Ruth
Brown, has developed a two-pronged strategy for growth: 1) expand ProStorage's global customer base
and 2) increase ProStorage's sales force by efficiently onboarding effective teams. Enacting this strategy
has recently been complicated by Ruth's health condition, which has limited her working hours, as well as
her ability to travel to meet potential customers. ProStorage's Human Resources department and Ruth's
Chief of Staff now work together to manage her schedule and ensure that she is able to make all her
medical appointments. The latter has become especially crucial after Ruth's last trip to India, where she
suffered a medical emergency and was hospitalized in New Delhi. Unable to reach Ruth's family, the
hospital reached out to ProStorage and was able to connect with her Chief of Staff, who in coordination
with Mary, the head of HR, provided information to the doctors based on accommodation requests Ruth
made when she started at ProStorage.

In support of Ruth's strategic goals of hiring more sales representatives, the Human Resources team is
focused on improving its processes to ensure that new employees are sourced, interviewed, hired, and on
boarded efficiently. To help with this, Mary identified two vendors, HRYourWay, a German based
company, and InstaHR, an Australian based company. She decided to have both vendors go through
ProStorage's vendor risk review process so she can work with Ruth to make the final decision. As part of
the review process, Jackie, who is responsible for maintaining ProStorage's privacy program (including
maintaining controller BCRs and conducting vendor risk assessments), reviewed both vendors but
completed a transfer impact assessment only for InstaHR. After her review of both vendors, she
determined that InstaHR satisfied more of the requirements as it boasted a more established privacy
program and provided third-party attestations, whereas HRYourWay was a small vendor with minimal data
protection operations. Thus, she recommended InstaHR.

ProStorage's marketing team also worked to meet the strategic goals of the company by focusing on
industries where it needed to grow its market share. To help with this, the team selected as a partner
UpFinance. a US based company with deep connections to financial industry customers. During
ProStorage's diligence process, Jackie from the privacy team noted in the transfer impact assessment that
UpFinance implements several data protection measures including end-lo-end encryption, with encryption
keys held by the customer. Notably, UpFinance has not received any government requests in its 7 years of
business. Still, Jackie recommended that the contract require UpFinance to notify ProStorage if it receives
a government request for personal data UpFinance processes on its behalf prior to disclosing such data.

What transfer mechanism should Jackie recommend for using InstaHR?`,options:[`A. Adequacy.`,`B. Binding corporate rules.`,`C. Explicit consent of employees.`,`D. Standard contractual clauses.`],correctAnswer:`D`,explanation:`正确答案 D。InstaHR 位于澳大利亚（未获欧盟充分性认定的第三国），Jackie 为其完成了跨境传输影响
评估（TIA），最贴切的传输合法化机制是标准合同条款（SCCs），无需专为单一供应商制定 BCRs
（B，通常用于集团内部）、充分性认定（A，澳大利亚未获欧盟充分性认定）或依赖同意（C，同意作
为跨境传输机制通常仅作为补充/最后手段，不适合大规模常态化的供应商数据传输）。知识点：向未获
充分性认定的第三国供应商传输数据时标准合同条款（SCCs）的适用。`,topic:`GDPR`,verified:`accurate`},{id:262,question:`SCENARIO

Please use the following to answer the next question:

ProStorage is a multinational cloud storage provider headquartered in the Netherlands. Its CEO, Ruth

Brown, has developed a two-pronged strategy for growth: 1) expand ProStorage's global customer base
and 2) increase ProStorage's sales force by efficiently onboarding effective teams. Enacting this strategy

has recently been complicated by Ruth's health condition, which has limited her working hours, as well as

her ability to travel to meet potential customers. ProStorage's Human Resources department and Ruth's

Chief of Staff now work together to manage her schedule and ensure that she is able to make all her
medical appointments. The latter has become especially crucial after Ruth's last trip to India, where she
suffered a medical emergency and was hospitalized in New Delhi. Unable to reach Ruth's family, the
hospital reached out to ProStorage and was able to connect with her Chief of Staff, who in coordination
with Mary, the head of HR, provided information to the doctors based on accommodation requests Ruth
made when she started at ProStorage.

In support of Ruth's strategic goals of hiring more sales representatives, the Human Resources team is
focused on improving its processes to ensure that new employees are sourced, interviewed, hired, and on
boarded efficiently. To help with this, Mary identified two vendors, HRYourWay, a German based
company, and InstaHR, an Australian based company. She decided to have both vendors go through
ProStorage's vendor risk review process so she can work with Ruth to make the final decision. As part of
the review process, Jackie, who is responsible for maintaining ProStorage's privacy program (including
maintaining controller BCRs and conducting vendor risk assessments), reviewed both vendors but
completed a transfer impact assessment only for InstaHR. After her review of both vendors, she
determined that InstaHR satisfied more of the requirements as it boasted a more established privacy
program and provided third-party attestations, whereas HRYourWay was a small vendor with minimal data
protection operations. Thus, she recommended InstaHR.

ProStorage's marketing team also worked to meet the strategic goals of the company by focusing on
industries where it needed to grow its market share. To help with this, the team selected as a partner
UpFinance. a US based company with deep connections to financial industry customers. During
ProStorage's diligence process, Jackie from the privacy team noted in the transfer impact assessment that
UpFinance implements several data protection measures including end-lo-end encryption, with encryption
keys held by the customer. Notably, UpFinance has not received any government requests in its 7 years of
business. Still, Jackie recommended that the contract require UpFinance to notify ProStorage if it receives
a government request for personal data UpFinance processes on its behalf prior to disclosing such data.

Why was Jackie correct in not completing a transfer impact assessment for HRYourWay?`,options:[`A. HRYourWay was ultimately not selected.`,`B. HRYourWay is not located in a third country.`,`C. ProStorage will obtain consent for all transfers.`,`D. ProStorage can rely on its Binding Corporate Rules.`],correctAnswer:`B`,explanation:`正确答案 B。HRYourWay 位于德国，属于欧盟成员国境内，数据从荷兰传输至德国属于欧盟内部数据流
动，不涉及第三国跨境传输，因此无需开展跨境传输影响评估（TIA，该评估专门针对向第三国传输的合
规审查）。A（是否最终被选用，与是否需要开展 TIA 的判断标准无关，TIA 应在选定前的尽职调查阶段
考虑）、C（获取同意，非本案的判断依据）、D（依赖 BCRs，欧盟内部传输本身无需援引任何第三国
传输机制）均不准确。知识点：跨境传输影响评估（TIA）仅适用于向欧盟/欧洲经济区外第三国的传
输，欧盟内部传输不适用。`,topic:`GDPR`,verified:`accurate`},{id:263,question:`According to the European Data Protection Board, data subjects should be made aware of any video
surveillance in operation. How should a retail shop operator ensure that data subjects receive all
information required for such a purpose under EU data protection law?`,options:[`A. The shop operator should post a copy of the manual of the video surveillance system in the shop and on its social media channels.`,`B. The shop operator should provide full notice of the intended video surveillance outside the shop, for example with a sign or a stand-up display.`,`C. The shop operator should instruct the data protection officer to hand out a comprehensive notice to data subjects every time they enter the shop.`,`D. The shop operator should provide the most important information on a clearly readable warning sign to data subjects before they enter the monitored area, and additional mandatory details by other means.`],correctAnswer:`D`,explanation:`正确答案 D。EDPB 关于视频监控告知的建议采用“分层告知”思路：在进入监控区域前，以清晰易读的警
示标志提供最核心的信息（如监控主体、目的等），并通过其他补充渠道（如详细隐私政策链接、张贴
处所等）提供第 14 条要求的完整详细信息，而非仅张贴设备说明书（A）、仅依赖社交媒体发布（A）、
要求 DPO 每次现场发放详细通知（C，不现实）或未提供任何现场提示而仅笼统告知（B，仅有笼统外部
告示但未结合分层补充信息不够完整）。知识点：EDPB 关于 CCTV 监控告知的分层实践建议——现场简
明标识+补充详细信息渠道。`,topic:`监管机构`,verified:`accurate`},{id:264,question:`According to the GDPR, Article 4(14), biometric data is defined as:

"Personal data resulting from specific technical processing relating to the ___ characteristics of a natural
person."

Which term could NOT be placed in the above definition?`,options:[`A. Physiological.`,`B. Physical.`,`C. Intellectual.`,`D. Behavioral.`],correctAnswer:`C`,explanation:`正 确 答 案 C 。 第 4(14) 条 对 “ 生 物 识 别 数 据 ” 的 定 义 表 述 为 ： 源 于 特 定 技 术 处 理 、 与 自 然 人 的 “ 身 体
（physical）、生理（physiological）或行为（behavioral）特征”相关、能够识别或确认该自然人身份的个
人数据，并不包含“智力（intellectual）特征”这一表述，该词是干扰项，非定义原文用语。知识点：第
4(14)条生物识别数据定义的准确措辞——身体、生理、行为三类特征，不含智力特征。`,topic:`GDPR`,verified:`accurate`},{id:265,question:`Jerry, the Chief Marketing Officer for a sports apparel and trophy company, sells products to schools and
athletic clubs globally. Recently the company has decided to invest in a new line of customized sports
equipment. Jerry plans to email his current customer base to offer them a discount on their first purchase
of such equipment.

Jerry tells Kate, the Director of Privacy, about his plan. What is the best guidance Kate can provide to
Jerry?`,options:[`A. Permit Jerry to carry out his plan on the basis of marketing similar products to existing customers.`,`B. Require Jerry to send all current customers a second notice to allow them to opt-in to marketing emails.`,`C. Permit Jerry to carry out his marketing plan on the basis of legitimate interest.`,`D. Require Jerry to include an option to opt out of marketing emails in the future.`],correctAnswer:`D`,explanation:`答案 D 是必须满足的条件，但并不足以单独使计划合法。软退出还要求联系方式在销售或销售磋商中取得、营销自
身类似产品或服务，并在收集联系方式时就提供退出机会。`,topic:`GDPR`,verified:`qualified`},{id:266,question:`A homeowner has installed a motion-detecting surveillance system that films his front door and entryway.
The camera does not film any public areas, only areas that are the property of the homeowner. The
system has been declared to the authorities per the homeowner's country law, and a placard indicating the
area is being video monitored is visible when entering the property.

Why can the homeowner NOT depend on the household exemption with regards to the processing of the
video images recorded by the surveillance camera system?`,options:[`A. The surveillance camera system can potentially capture biometric information of the homeowner's family, which would be considered a processing of special categories of personal data.`,`B. The homeowner has not specified which security measures are in place as part of the surveillance camera system.`,`C. The GDPR specifically excludes surveillance camera images from the household exemption.`,`D. The surveillance camera system can potentially film individuals who enter its filming perimeter.`],correctAnswer:`D`,explanation:`正确答案 D。第 2(2)(c)条家庭活动豁免仅适用于处理范围严格限于纯粹个人或家庭事务的情形；由于该
监控摄像头对准的是自家前门和入口区域，客观上会拍摄到任何经过或到访该区域的公众（如邮递员、
访客、路人），处理范围已超出纯粹私人家庭领域，涉及第三方（非家庭成员）的个人数据处理，因此
不能完整援引家庭活动豁免（欧洲法院 Ryneš案确立的原则）。A（是否涉及生物识别特殊类别数据，非
该豁免不适用的核心原因）、B（未说明具体安全措施，与豁免适用与否无关）、C（GDPR 并未“专门排
除监控摄像头”，而是依据处理范围是否超出纯家庭活动来判断）均不准确。知识点：Ryneš案确立的家
庭活动豁免例外——监控范围延伸至公共/第三方区域时不再适用该豁免。`,topic:`GDPR`,verified:`accurate`},{id:267,question:`Which of the following elements does NOT need to be presented to a data subject in order to collect valid
consent for the use of cookies?`,options:[`A. A "Cookies Settings" button.`,`B. A "Reject All" cookies button.`,`C. A list of cookies that may be placed.`,`D. Information on the purpose of the cookies.`],correctAnswer:`A`,explanation:`答案 A 是最佳选项，因为法律不要求按钮必须使用特定名称。不过，有效同意要求拒绝与接受同样容易、目的清
晰、选择未预勾选；是否必须展示逐项 cookie 名称取决于所提供信息是否足够具体，C 的绝对表述也可能引起争
议。`,topic:`ePrivacy指令`,verified:`qualified`},{id:268,question:`Since blockchain transactions are classified as pseudonymous, are they considered to be within the
material scope of the GDPR, or outside of it?`,options:[`A. Outside the material scope of the GDPR, because transactions do not include personal data about data subjects in the European Union.`,`B. Outside the material scope of the GDPR, because transactions are for personal or household purposes.`,`C. Within the material scope of the GDPR to the extent that transactions include data subjects in the European Union.`,`D. Within the material scope of the GDPR but outside of the territorial scope, because blockchains are decentralized.`],correctAnswer:`C`,explanation:`正确答案 C。区块链交易记录中的信息（如公钥、交易哈希等）通常被视为假名化数据而非匿名化数
据，因为在特定条件下仍存在将其与自然人关联的可能性；只要交易涉及欧盟数据主体，这些假名化数
据仍构成 GDPR 意义上的“个人数据”，落入 GDPR 的实质适用范围（material scope），而非因交易性质
本身（A，理由表述错误，问题的关键在于是否涉及欧盟数据主体而非交易本身）、个人/家庭用途（B，
商业性质的区块链交易通常不属于家庭活动豁免范畴）或域外适用问题的混淆（D，去中心化技术架构本
身不影响 GDPR 域外适用性判断，该判断仍取决于第 3 条标准）而被排除在外。知识点：假名化数据
（含区块链交易记录）落入 GDPR 实质适用范围的判断标准。`,topic:`GDPR`,verified:`accurate`},{id:269,question:`Following the United Kingdom's withdrawal from the European Union, what law do companies established
in the UK and processing the personal data of people in the EU need to adhere to?`,options:[`A. The Privacy and Electronic Communications Regulations.`,`B. The EU General Data Protection Regulation.`,`C. The UK General Data Protection Regulation.`,`D. The UK Data Protection Act.`],correctAnswer:`B`,explanation:`答案 B 仅在英国公司满足 GDPR 第 3(2) 条，例如有意向欧盟境内个人提供商品或服务或监测其在欧盟境内的行为时
成立。单纯“处理欧盟人士的数据”或数据主体具有欧盟国籍，并不足以触发域外适用。`,topic:`GDPR`,verified:`qualified`},{id:270,question:`How can the relationship between the GDPR and the Digital Services Act, the Data Governance Act and
the Digital Markets Act most accurately be described?`,options:[`A. The aforementioned legal acts do not refer to (i.e., do not mention) the GDPR.`,`B. The aforementioned legal acts apply without prejudice (i.e., in parallel) to the GDPR.`,`C. The aforementioned legal acts change specific provisions (i.e., certain articles) of the GDPR.`,`D. The aforementioned legal acts contain some sector-specific exemptions (i.e., only for certain businesses) from the GDPR.`],correctAnswer:`B`,explanation:`正确答案 B。《数字服务法》（DSA）、《数据治理法》（DGA）及《数字市场法》（DMA）均在各自
立法文本中明确声明“不影响”（without prejudice to）GDPR 的适用，即与 GDPR 并行适用、互为补充，
而非取代或修改 GDPR 具体条款（C）、完全不提及 GDPR（A，实际上均有明确援引和协调条款）或包
含针对特定行业的 GDPR 豁免（D，这些法律主要规范数字服务/数据治理/市场竞争等领域，未创设专门
的 GDPR 适用豁免）。知识点：欧盟新兴数字立法（DSA、DGA、DMA）与 GDPR 的并行适用关系
（without prejudice 条款）。`,topic:`GDPR`,verified:`accurate`},{id:271,question:`All of the following will be established by the second Network and Information Security Directive ("NIS2")
EXCEPT?`,options:[`A. Baseline cybersecurity measures that each covered entity must address.`,`B. Powers to inspect, audit, or require information from covered organizations.`,`C. A common controls framework that every organization must adopt.`,`D. A new network for EU member states to cooperate on large-scale breaches.`],correctAnswer:`C`,explanation:`正确答案 C。NIS2 指令要求受监管实体落实基线网络安全措施（A）、赋予监管机构检查审计权（B）、
建立成员国间大规模安全事件协作网络（D，如 CSIRT 网络），但并未强制规定所有受监管组织必须采
纳统一的“通用控制框架”——具体安全措施的选择和实施方式留有一定弹性空间，只需达到基线安全水平
要求即可，而非强制套用单一标准化框架。知识点：NIS2 指令的核心要素（基线安全措施、检查权、成
员国协作网络）及其未强制统一控制框架的弹性设计。`,topic:`GDPR`,verified:`accurate`},{id:272,question:`According to the Personal Data Protection Commission’s (PDPC) “Guide to basic data anonymization
techniques,” recently adopted by the Spanish Data Protection Agency, which of the following is NOT a
valid basic anonymization technique?`,options:[`A. Swapping.`,`B. Generalization.`,`C. Data Adjustment.`,`D. Attribute Suppression.`],correctAnswer:`C`,explanation:`正确答案 C。西班牙数据保护局（AEPD）采纳的新加坡 PDPC《基本数据匿名化技术指南》中列举的基
本匿名化技术包括：数据交换/置换（swapping，A）、泛化（generalization，B）、属性抑制（attribute
suppression，D）等，但并未将“数据调整”（Data Adjustment）列为该指南认可的具体技术术语——这是
虚构或不准确的干扰选项，非该指南中的标准技术名称。知识点：PDPC 匿名化技术指南列举的基本技术
清单（交换、泛化、属性抑制等）。`,topic:`GDPR`,verified:`accurate`},{id:273,question:`In the EDPB’s Guidelines 4/2019 on Article 25 Data Protection by Design and by Default, all of the
following practices follow from the principles relating to the processing of personal data under EU data
protection law EXCEPT?`,options:[`A. Data ownership allocation.`,`B. Access control management.`,`C. Frequent pseudonymization key rotation.`,`D. Error propagation avoidance along the processing chain.`],correctAnswer:`A`,explanation:`正确答案 A。（与 Q205 同一知识点）EDPB《4/2019 号指南》（第 25 条设计与默认阶段隐私保护）中体
现数据保护原则的实践包括访问控制管理（B）、假名化密钥定期轮换（C）、避免处理链条中的错误传
播（D）等具体技术组织措施，但并未涉及“数据所有权分配”这一概念——欧盟数据保护法框架下不采用
“数据所有权”这一表述，而是以控制者/处理者角色及数据主体权利体系为核心。知识点：EDPB 指南
4/2019（第 25 条设计默认隐私）不涉及“数据所有权”概念。`,topic:`监管机构`,verified:`accurate`},{id:274,question:`According to the European Data Protection Board, controllers responding to a data subject access request
can refuse to provide a copy of personal data under certain conditions. Which of the following is NOT one

of these conditions?`,options:[`A. If the data subject access request was sent to an employee that is not involved in the processing of such requests.`,`B. If there is such a large amount of data that the controller cannot identify the data subject of the request.`,`C. If the controller is unable to use end-to-end encrypted emails for responding to such requests.`,`D. If the personal data was processed in the past but is no longer at the controller’s disposal at the time of the request.`],correctAnswer:`C`,explanation:`答案 C 最明确：不能使用端到端加密邮件不构成拒绝访问权的理由，控制者应提供其他安全交付方式。A、B、D 均
需结合事实：请求发送至非专门人员通常仍应内部转交；无法识别时应先允许补充信息；数据已不再持有则应如实
说明，而非任意拒绝。`,topic:`GDPR`,verified:`qualified`},{id:275,question:`A high-ranking employee has his laptop bag stolen in a train station. In addition to the laptop, the bag
contained the employee’s ID card, confidential company documents (such as financial information and
minutes of board meetings, including participants and their roles), company payment cards, and
authorization tokens.

As the company's Data Protection Officer, what should be your first action?`,options:[`A. Inform the appropriate supervisory authority of the breach.`,`B. Verify whether the laptop contained personal data and, if so, if it was encrypted.`,`C. Inform the meeting participants of the breach and provide them with next steps to be taken.`,`D. Request deactivation of the authorization tokens to avoid access to company data, and remotely wipe the laptop.`],correctAnswer:`B`,explanation:`答案 B 可视为 DPO 的首要合规评估步骤，但安全团队应同时立即采取 D 所述的遏制措施，例如停用令牌和远程擦
除。事件响应中的风险核实与技术遏制通常应并行，而非严格串行。`,topic:`GDPR`,verified:`qualified`},{id:276,question:`According to the European Data Protection Board, if a controller that is not established in the EU but still
subject to the GDPR becomes aware of a personal data breach, which supervisory authority or authorities
must be notified?`,options:[`A. Only the supervisory authority of the EU member state in which the controller's EU representative (pursuant to Article 27) is established.`,`B. Only one lead supervisory authority, as a controller benefits from the one-stop shop mechanism under the GDPR’s enforcement regime.`,`C. Every supervisory authority of the EU member states where the controller is offering goods or services.`,`D. Every supervisory authority for which affected data subjects reside in their EU member state.`],correctAnswer:`D`,explanation:`正确答案 D。仅因第 27 条代表位于某成员国，并不会触发一站式机制。未在欧盟设立、仅依据第 3(2) 或 3(3) 条受
GDPR 约束的控制者发生需报告的数据泄露时，应向每一个受影响数据主体居住于其成员国的监管机构报告。`,topic:`监管机构`,verified:`corrected`},{id:277,question:`Which mechanism, introduced by the GDPR as a means of ensuring both compliance and transparency,
allows for the possibility of personal data transfers to third countries under Article 42?`,options:[`A. Approved certifications.`,`B. Binding corporate rules.`,`C. Law enforcement requests.`,`D. Standard contractual clauses.`],correctAnswer:`A`,explanation:`正确答案 A。（与 Q125 同一知识点重复出现）第 42 条认证机制是 GDPR 新引入的跨境传输保障工具之
一，通过认证标志/印章使已获认证的接收方可依此进行跨境传输，而非 BCRs、SCCs（二者并非 GDPR
新创设的机制）或执法请求（与合法传输机制无关）。知识点：第 42 条认证机制作为 GDPR 新设立的跨
境传输保障工具。`,topic:`GDPR`,verified:`accurate`},{id:278,question:`A private company has establishments in France, Poland, the United Kingdom and, most prominently,
Germany, where its headquarters is established. The company offers its services worldwide. Most of the
services are designed in Germany and supported in the other establishments. However, one of the
services, a Software as a Service (SaaS) application, was defined and implemented by the Polish
establishment. It is also supported by the other establishments.

What is the lead supervisory authority for the SaaS service?`,options:[`A. The supervisory authority of Germany at federal level.`,`B. The supervisory authority of Germany at regional level.`,`C. The supervisory authority of the Republic of Poland.`,`D. The supervisory authority of the European Union.`],correctAnswer:`C`,explanation:`正确答案 C。主导监管机构的认定核心在于“实际作出处理决策的地点”，该 SaaS 服务由波兰分支机构独
立定义、开发和实施（即便获得其他分支机构的支持），说明与该特定服务相关的处理决策实际发生在
波兰，因此波兰监管机构应为该项服务的主导监管机构，而非笼统以公司整体总部所在地（德国，A、
B）作为统一判断标准，也不存在“欧盟层面统一监管机构”这一机构设置（D，不存在此类超国家层面的
单一数据保护监管机构，欧盟层面协调机制是 EDPB 而非直接执法机构）。知识点：主导监管机构的认
定应针对具体处理活动/服务的实际决策地，而非一概以企业整体总部所在地为准。`,topic:`监管机构`,verified:`accurate`},{id:279,question:`SCENARIO
Please use the following to answer the next question:

Gentle Hedgehog Inc. is a privately owned website design agency incorporated in Italy. The company has
numerous remote workers in different EU countries. Recently, the management of Gentle Hedgehog
noticed a decrease in productivity of their sales team, especially among remote workers. As a result, the
company plans to implement a robust but privacy-friendly remote surveillance system to prevent
absenteeism, reward top performers, and ensure the best quality of customer service when sales people
are interacting with customers.

Gentle Hedgehog eventually hires Sauron Eye Inc., a Chinese vendor of employee surveillance software
whose European headquarters is in Germany. Sauron Eye s software provides powerful remote-
monitoring capabilities, including 24/7 access to computer cameras and microphones, screen captures,
emails, website history, and keystrokes. Any device can be remotely monitored from a central server that
is securely installed at Gentle Hedgehog headquarters. The monitoring is invisible by default; however, a
so-called Transparent Mode, which regularly and conspicuously notifies all users about the monitoring and
its precise scope, also exists. Additionally, the monitored employees are required to use a built-in
verification technology involving facial recognition each time they log in.

All monitoring data, including the facial recognition data, is securely stored in Microsoft Azure cloud
servers operated by Sauron Eye, which are physically located in France.

Based on the scenario, what are the primary privacy risks of the planned surveillance system?`,options:[`A. A Chinese vendor and the monitoring of EU-based employees.`,`B. Facial recognition data stored in the cloud and lack of encryption.`,`C. Excessive scope of monitoring and lack of legitimate purpose for data collection.`,`D. Missing E2EE encryption in the monitoring system and unclear data storage duration.`],correctAnswer:`C`,explanation:`正确答案 C。该监控系统提供全天候摄像头/麦克风访问、屏幕截图、邮件、网站浏览记录及按键记录等
极为广泛、侵入性极强的监控能力，远超防范旷工、提升客服质量等既定目的所合理必要的范围，构成
过度监控（违反数据最小化及比例原则），且部分监控目的（如“奖励优秀员工”）本身也难以充分证成如
此全面的持续监控具有正当必要性，这是本情节中最核心、最突出的隐私风险，而非仅聚焦供应商国籍
（A，虽然涉及跨境传输合规，但非最核心隐私风险）、云存储加密与否（B，题目未提供加密状态信
息，且非监控范围本身的问题）或存储时长模糊（D，同样是次要问题）。知识点：员工监控中的数据最
小化及比例原则——监控范围与合法目的之间必须具有相称性。`,topic:`GDPR`,verified:`accurate`},{id:280,question:`SCENARIO

Please use the following to answer the next question:

Gentle Hedgehog Inc. is a privately owned website design agency incorporated in Italy. The company has
numerous remote workers in different EU countries. Recently, the management of Gentle Hedgehog
noticed a decrease in productivity of their sales team, especially among remote workers. As a result, the
company plans to implement a robust but privacy-friendly remote surveillance system to prevent
absenteeism, reward top performers, and ensure the best quality of customer service when sales people
are interacting with customers.

Gentle Hedgehog eventually hires Sauron Eye Inc., a Chinese vendor of employee surveillance software
whose European headquarters is in Germany. Sauron Eye s software provides powerful remote-
monitoring capabilities, including 24/7 access to computer cameras and microphones, screen captures,
emails, website history, and keystrokes. Any device can be remotely monitored from a central server that
is securely installed at Gentle Hedgehog headquarters. The monitoring is invisible by default; however, a
so-called Transparent Mode, which regularly and conspicuously notifies all users about the monitoring and
its precise scope, also exists. Additionally, the monitored employees are required to use a built-in
verification technology involving facial recognition each time they log in.

All monitoring data, including the facial recognition data, is securely stored in Microsoft Azure cloud
servers operated by Sauron Eye, which are physically located in France.

Under what condition could the surveillance system be used on the personal devices of employees?`,options:[`A. Only if the monitoring system is manufactured by a European vendor storing the monitoring data within the EU.`,`B. Only if the employees give valid consent and the monitoring is narrowly limited to their professional tasks.`,`C. Only if the cloud that stores the monitoring data is certified by the EDPB as GDPR compliant.`,`D. Only if the employer offers an adequate compensation for using the employee’s devices.`],correctAnswer:`B`,explanation:`答案 B 只能在极少数情况下成立。雇佣关系中的权力不平衡通常使员工同意难以被视为自由给予；即使是 BYOD，
也应优先评估必要性、比例性、合法利益或法定义务、工作与私人空间隔离以及 DPIA，而不能仅靠同意。`,topic:`监管机构`,verified:`qualified`},{id:281,question:`SCENARIO
Please use the following to answer the next question:

Gentle Hedgehog Inc. is a privately owned website design agency incorporated in Italy. The company has
numerous remote workers in different EU countries. Recently, the management of Gentle Hedgehog
noticed a decrease in productivity of their sales team, especially among remote workers. As a result, the
company plans to implement a robust but privacy-friendly remote surveillance system to prevent
absenteeism, reward top performers, and ensure the best quality of customer service when sales people
are interacting with customers.

Gentle Hedgehog eventually hires Sauron Eye Inc., a Chinese vendor of employee surveillance software

whose European headquarters is in Germany. Sauron Eye s software provides powerful remote-
monitoring capabilities, including 24/7 access to computer cameras and microphones, screen captures,
emails, website history, and keystrokes. Any device can be remotely monitored from a central server that
is securely installed at Gentle Hedgehog headquarters. The monitoring is invisible by default; however, a
so-called Transparent Mode, which regularly and conspicuously notifies all users about the monitoring and

its precise scope, also exists. Additionally, the monitored employees are required to use a built-in
verification technology involving facial recognition each time they log in.

All monitoring data, including the facial recognition data, is securely stored in Microsoft Azure cloud
servers operated by Sauron Eye, which are physically located in France.

that
After fixing the privacy problems, how long may Gentle Hedgehog store the monitoring data, assuming
no valid data erasure request is received?`,options:[`A. As long as required by the company’s legitimate interests.`,`B. As long as a concerned employee does not request erasure of the data.`,`C. As long as provided by the EDPB guidelines for remote employee monitoring.`,`D. As long as stated in the privacy policy that all employees must follow when processing personal data.`],correctAnswer:`A`,explanation:`答案 A 只能理解为“为明确、合法的目的客观必要的最短期间”。企业应预先设定并记录具体留存期限或复核标准；
不能因为企业笼统声称存在合法利益就无限期保存。`,topic:`监管机构`,verified:`qualified`},{id:282,question:`SCENARIO
Please use the following to answer the next question:

Gentle Hedgehog Inc. is a privately owned website design agency incorporated in Italy. The company has
numerous remote workers in different EU countries. Recently, the management of Gentle Hedgehog
noticed a decrease in productivity of their sales team, especially among remote workers. As a result, the
company plans to implement a robust but privacy-friendly remote surveillance system to prevent
absenteeism, reward top performers, and ensure the best quality of customer service when sales people
are interacting with customers.

Gentle Hedgehog eventually hires Sauron Eye Inc., a Chinese vendor of employee surveillance software
whose European headquarters is in Germany. Sauron Eye s software provides powerful remote-
monitoring capabilities, including 24/7 access to computer cameras and microphones, screen captures,

emails, website history, and keystrokes. Any device can be remotely monitored from a central server that
is securely installed at Gentle Hedgehog headquarters. The monitoring is invisible by default; however, a
so-called Transparent Mode, which regularly and conspicuously notifies all users about the monitoring and
its precise scope, also exists. Additionally, the monitored employees are required to use a built-in
verification technology involving facial recognition each time they log in.

All monitoring data, including the facial recognition data, is securely stored in Microsoft Azure cloud

servers operated by Sauron Eye, which are physically located in France.

What is the main problem with the 24/7 camera monitoring?`,options:[`A. It must not be operated during non-business hours and employee holidays.`,`B. It may accidentally film third parties whose consent is required for monitoring.`,`C. It has no valid legal basis to be implemented in the context of Gentle Hedgehog’s business.`,`D. It must first be approved by the trade union and then granted a license from the national DPA.`],correctAnswer:`C`,explanation:`正确答案 C。24/7 全天候摄像头及麦克风监控（含私人时间、非工作场景）的侵入性极高，明显超出预防
旷工、提升客服质量等既定目的所合理必要的范围，难以找到能够证成如此广泛、持续监控的正当合法
依据（无论是合法利益的平衡测试还是同意的自愿性均难以满足），这是该监控方案最根本的问题——
缺乏有效合法依据，而非仅仅是时间限制问题（A）、意外拍摄第三方问题（B，虽也存在但非核心问
题）或程序性审批缺失问题（D，工会审批和 DPA 许可并非普遍适用的强制前置程序）。知识点：过度
监控因缺乏与处理目的相称的合法依据而整体不具备合法性。`,topic:`GDPR`,verified:`accurate`},{id:283,question:`SCENARIO
Please use the following to answer the next question:

Gentle Hedgehog Inc. is a privately owned website design agency incorporated in Italy. The company has
numerous remote workers in different EU countries. Recently, the management of Gentle Hedgehog

noticed a decrease in productivity of their sales team, especially among remote workers. As a result, the

company plans to implement a robust but privacy-friendly remote surveillance system to prevent
absenteeism, reward top performers, and ensure the best quality of customer service when sales people

are interacting with customers.

Gentle Hedgehog eventually hires Sauron Eye Inc., a Chinese vendor of employee surveillance software
whose European headquarters is in Germany. Sauron Eye s software provides powerful remote-

monitoring capabilities, including 24/7 access to computer cameras and microphones, screen captures,
emails, website history, and keystrokes. Any device can be remotely monitored from a central server that
is securely installed at Gentle Hedgehog headquarters. The monitoring is invisible by default; however, a
so-called Transparent Mode, which regularly and conspicuously notifies all users about the monitoring and
its precise scope, also exists. Additionally, the monitored employees are required to use a built-in
verification technology involving facial recognition each time they log in.

All monitoring data, including the facial recognition data, is securely stored in Microsoft Azure cloud
servers operated by Sauron Eye, which are physically located in France.

What monitoring may be lawfully performed within the scope of Gentle Hedgehog’s business?`,options:[`A. Everything offered by Sauron Eye's software with the exception of camera and microphone monitoring.`,`B. Everything offered by Sauron Eye's software, assuming employees provide daily consent to the monitoring.`,`C. Only video calls conducted during business hours and emails that do not contain a “private” or “personal” tag.`,`D. Only emails, website browsing history and camera for internal video calls that are expressly marked as monitored.`],correctAnswer:`D`,explanation:`正确答案 D。为使监控方案具备合法性，应将监控范围严格限定在与工作直接相关、且经明确标识告知
的活动范围内（如仅限于内部视频通话、邮件、网站浏览记录，并将监控对象限定为已被清晰标注告知
“正在被监控”的部分），排除对摄像头/麦克风的全天候、无差别侵入性监控。A（排除摄像头麦克风但保
留其余全部功能，仍可能范围过广）、B（依赖“每日同意”，同意的自愿性在雇佣关系及重复要求下难以
成立）、C（限定视频通话及排除标记为私人的邮件，范围仍显宽泛且执行标准模糊）均不如 D 准确体现
比例原则下的合理监控边界。知识点：合法监控范围的设计——限定于工作相关活动、并配合明确标识
告知。`,topic:`GDPR`,verified:`accurate`},{id:284,question:`According to the AI Act, a provider of a high-risk AI system has all of the following obligations EXCEPT?`,options:[`A. Ensuring users understand how the system mitigates bias`,`B. Registering the system in the European AI Board s database.`,`C. Providing detailed documentation about the system to the users`,`D. Conducting a conformity assessment before placing the system on the market.`],correctAnswer:`A`,explanation:`正确答案 A。AI Act 对高风险 AI 系统提供者规定风险管理、数据治理、技术文档和使用说明、合格评定及在欧盟数
据库登记等义务。B 虽把数据库错误地称为“欧洲 AI 委员会的数据库”，但描述的是实质存在的登记义务；C、D 也
属于明确义务。法案并未以 A 所述措辞要求提供者保证用户“理解系统如何缓解偏见”；其透明度和说明义务有更具
体的法定内容。`,topic:`AI Act`,verified:`corrected`},{id:285,question:`What is the main purpose of the EU Data Act?`,options:[`A. To enable the processing and transfer of non-personal data within the EU.`,`B. To allow users of connected devices to access data generated by their use.`,`C. To facilitate the voluntary sharing of data between individuals and businesses`,`D. To regulate individuals’ privacy rights and the processing of their personal data`],correctAnswer:`B`,explanation:`正确答案 B。欧盟《数据法》（Data Act）的核心目标是赋予联网设备（如物联网设备）用户访问和利用
其使用过程中产生的数据的权利，促进数据访问的公平性，推动数据驱动型创新的普惠共享，而非专门
规制非个人数据的处理传输（A，这更接近其技术效果而非核心立法目的表述）、个人与企业间数据自愿
共享的笼统促进（C，表述过于宽泛）或个人隐私权规制（D，隐私权规制是 GDPR 的核心领域，而非数
据法的主要立法目标）。知识点：欧盟《数据法》赋予联网设备用户数据访问权这一核心立法目的。`,topic:`Data Act`,verified:`accurate`},{id:286,question:`Once an organization has conducted an internal investigation to determine the scope of a ransomware
attack, what is the appropriate next step in the process?`,options:[`A. Assess the risks associated with the breach and. if necessary, notify affected individuals and regulatory bodies within the relevant timeframes.`,`B. Notify law enforcement and consult with legal counsel to understand the implications of the breach and the notification requirements.`,`C. Inform all customers and the public via social media platforms to ensure rapid dissemination of relevant information.`,`D. Wait for law enforcement to provide guidance on notification procedures before taking any further action.`],correctAnswer:`A`,explanation:`正确答案 A。在确定勒索软件攻击的影响范围后，下一步关键行动是评估该事件对数据主体造成的风险
程度（结合数据敏感性、潜在危害等），并据此判断是否需要在法定时限内通知受影响个人及监管机
构，这是风险评估驱动合规响应的核心逻辑（B 虽然也是响应流程中的重要环节，但风险评估及依法通知
这一步骤更直接紧随范围确定之后；C 未经风险评估贸然公开信息可能造成不必要恐慌且不符合审慎响应
原则；D 消极等待执法机构指示会延误法定通知时限，不符合 GDPR 不得无故拖延的要求）。知识点：
数据泄露响应流程中风险评估作为承上启下的关键环节。`,topic:`GDPR`,verified:`accurate`},{id:287,question:`Through a combination of hardware failure and human error, the decryption key for a bank's customer
account transaction database has been lost. An investigation has determined that this was not the result of
hacking or malfeasance, simply an unfortunate combination of circumstances. Which of the following
accurately indicates the nature of this incident?`,options:[`A. A data breach has not occurred because the loss was not the result of hacking.`,`B. A data breach has not occurred because no data was exposed to any unauthorized individual`,`C. A data breach has occurred because the loss of the key has resulted in the data no longer being accessible`,`D. A data breach has occurred because the loss of the key has resulted in the loss of confidentiality or integrity of the data`],correctAnswer:`C`,explanation:`正确答案 C。GDPR 第 4(12) 条的个人数据泄露包括意外或非法的毁损、丢失、改变、未经授权披露或访问，不以黑
客攻击或泄密为必要。EDPB 明确把加密数据的解密密钥永久丢失且无法从备份恢复，列为可用性泄露。`,topic:`监管机构`,verified:`corrected`},{id:288,question:`When can the EU-US Data Privacy Framework be used as a valid mechanism to transfer personal data

from the European Union to the United States?`,options:[`A. When the recipient has self-certified under the framework.`,`B. When the transfer in question has been certified under the framework.`,`C. When the recipient has been certified by a third party under the framework.`,`D. When a data transfer assessment has not identified any risks to data subjects.`],correctAnswer:`A`,explanation:`正确答案 A。欧盟-美国数据隐私框架（DPF）采用的是企业自我认证机制——美国接收方企业通过向美
国商务部自我认证承诺遵守 DPF 原则，即可依据欧盟委员会已对 DPF 作出的充分性认定，合法接收来自
欧盟的个人数据传输，而非需第三方认证（C）、逐笔交易单独认证（B）或以传输风险评估结果作为前
提 （D ，DPF 本 身作 为充 分 性认 定 机制 不要 求 逐案 风 险评 估） 。 知识 点： 欧 盟-美 国数 据隐 私 框架
（DPF）的自我认证机制及其作为充分性认定的传输合法化路径。`,topic:`GDPR`,verified:`accurate`},{id:289,question:`SCENARIO

Please use the following to answer the next question:

It has been a tough season for the Spanish Handball League, with acts of violence and racism having
increased exponentially during their last few matches.

In order to address this situation, the Spanish Minister of Sports, in conjunction with the National Handball
League Association, issued an Administrative Order (the "Act") obliging all the professional clubs to install
a fingerprint-reading system for accessing some areas of the sports halls, primarily the ones directly
behind the goalkeepers. The rest of the areas would retain the current access system, which allows any
spectators access as long as they hold valid tickets.

The Act named a selected hardware and software provider, New Digital Finger, Ltd., for creation of the

new fingerprint system. Additionally, it stipulated that any of the professional clubs that failed to install this
system within a two-year period would face fines under the Act.

The Murla HB Club was the first to install the new system, renting the New Digital Finger hardware and
software. Immediately afterwards, the Murla HB Club automatically renewed current supporters’
subscriptions, while introducing a new contractual clause requiring supporters to access specific areas of
the hall through the new fingerprint reading system installed at the gates.

After the first match hosted by the Murla HB Club, a local supporter submitted a complaint to the club and
to the Spanish Data Protection Authority (the AEPD), claiming that the new access system violates EU
data protection laws. Having been notified by the AEPD of the upcoming investigation regarding this
complaint, the Murla HB Club immediately carried out a Data Protection Impact Assessment (DPIA), the
conclusions of which stated that the new access system did not pose any high risks to data subjects'
privacy rights.

According to the GDPR, who is the controller for the personal data processed by the fingerprint access
system?`,options:[`A. Murla HB Club.`,`B. New Digital Finger, Ltd.`,`C. Spanish Ministry of Sports`,`D. National Handball Association.`],correctAnswer:`A`,explanation:`正确答案 A。Murla HB 俱乐部作为实际租用、安装该指纹识别系统并自主决定具体使用条款（如与球迷
续约合同中加入指纹准入条款）的主体，是实际决定该特定处理活动目的和方式的一方，因此是该处理
的控制者；新数字指纹公司（B）仅作为系统供应商/技术提供方（可能是处理者角色）、体育部及协会
（C、D）仅是发布强制性法规的行政机构，均不直接决定该俱乐部层面具体处理活动的目的和方式。知
识点：控制者身份的认定——实际决定具体处理活动目的和方式的主体，而非法规制定者或技术供应
商。`,topic:`GDPR`,verified:`accurate`},{id:290,question:`SCENARIO

Please use the following to answer the next question:

It has been a tough season for the Spanish Handball League, with acts of violence and racism having
increased exponentially during their last few matches.

In order to address this situation, the Spanish Minister of Sports, in conjunction with the National Handball
League Association, issued an Administrative Order (the "Act") obliging all the professional clubs to install
a fingerprint-reading system for accessing some areas of the sports halls, primarily the ones directly
behind the goalkeepers. The rest of the areas would retain the current access system, which allows any
spectators access as long as they hold valid tickets.

The Act named a selected hardware and software provider, New Digital Finger, Ltd., for creation of the
new fingerprint system. Additionally, it stipulated that any of the professional clubs that failed to install this
system within a two-year period would face fines under the Act.

The Murla HB Club was the first to install the new system, renting the New Digital Finger hardware and
software. Immediately afterwards, the Murla HB Club automatically renewed current supporters’
subscriptions, while introducing a new contractual clause requiring supporters to access specific areas of
the hall through the new fingerprint reading system installed at the gates.

After the first match hosted by the Murla HB Club, a local supporter submitted a complaint to the club and
to the Spanish Data Protection Authority (the AEPD), claiming that the new access system violates EU
data protection laws. Having been notified by the AEPD of the upcoming investigation regarding this
complaint, the Murla HB Club immediately carried out a Data Protection Impact Assessment (DPIA), the
conclusions of which stated that the new access system did not pose any high risks to data subjects'

privacy rights.

What is the proper legal base for processing fingerprints at the Murla HB Club gates?`,options:[`A. The consent provided by the spectators.`,`B. The Act, imposing security measures on the spectators.`,`C. The contract between the Club and the affected spectators.`,`D. The legitimate interest of preventing violent acts from the spectators.`],correctAnswer:`B`,explanation:`答案 B 是简化表述。完整分析应同时满足一般个人数据的第 6(1)(c) 条法定义务，以及生物识别特殊类别数据的第
9(2)(g) 条重大公共利益例外；所依据的成员国法律还必须明确、必要、成比例并提供适当保障。`,topic:`GDPR`,verified:`qualified`},{id:291,question:`SCENARIO

Please use the following to answer the next question:

It has been a tough season for the Spanish Handball League, with acts of violence and racism having
increased exponentially during their last few matches.

In order to address this situation, the Spanish Minister of Sports, in conjunction with the National Handball
League Association, issued an Administrative Order (the "Act") obliging all the professional clubs to install

a fingerprint-reading system for accessing some areas of the sports halls, primarily the ones directly

behind the goalkeepers. The rest of the areas would retain the current access system, which allows any

spectators access as long as they hold valid tickets. 6
The Act named a selected hardware and software provider, New Digital Finger, Ltd., for creation of the
new fingerprint system. Additionally, it stipulated that any of the professional clubs that failed to install this
system within a two-year period would face fines under the Act.

The Murla HB Club was the first to install the new system, renting the New Digital Finger hardware and
software. Immediately afterwards, the Murla HB Club automatically renewed current supporters’
subscriptions, while introducing a new contractual clause requiring supporters to access specific areas of
the hall through the new fingerprint reading system installed at the gates.

After the first match hosted by the Murla HB Club, a local supporter submitted a complaint to the club and
to the Spanish Data Protection Authority (the AEPD), claiming that the new access system violates EU
data protection laws. Having been notified by the AEPD of the upcoming investigation regarding this
complaint, the Murla HB Club immediately carried out a Data Protection Impact Assessment (DPIA), the
conclusions of which stated that the new access system did not pose any high risks to data subjects'
privacy rights.

The Murla HB Club should have carried out a DPIA before the installation of the new access system AND
at what other time?`,options:[`A. After the complaint of the supporter.`,`B. Periodically, when new risks were foreseen.`,`C. At the end of every match of the season.`,`D. After the AEPD notification of the investigation.`],correctAnswer:`B`,explanation:`正确答案 B。除在部署新的高风险处理活动前须开展 DPIA 外，第 35(11)条还要求，当处理活动的风险状
况发生重大变化（如出现新的风险因素）时，控制者应定期重新评估（周期性开展 DPIA），以确保持续
合规，而非仅在收到投诉（A）或监管机构通知（D）等被动触发情形下才进行评估，也非机械地按每场
比赛结束这一固定且与风险变化无关的时间点进行（C）。知识点：第 35(11)条 DPIA 的持续性/周期性重
新评估义务，而非仅一次性评估。`,topic:`GDPR`,verified:`accurate`},{id:292,question:`SCENARIO

Please use the following to answer the next question:

It has been a tough season for the Spanish Handball League, with acts of violence and racism having
increased exponentially during their last few matches.

In order to address this situation, the Spanish Minister of Sports, in conjunction with the National Handball
League Association, issued an Administrative Order (the "Act") obliging all the professional clubs to install
a fingerprint-reading system for accessing some areas of the sports halls, primarily the ones directly
behind the goalkeepers. The rest of the areas would retain the current access system, which allows any
spectators access as long as they hold valid tickets.

The Act named a selected hardware and software provider, New Digital Finger, Ltd., for creation of the
new fingerprint system. Additionally, it stipulated that any of the professional clubs that failed to install this
system within a two-year period would face fines under the Act.

The Murla HB Club was the first to install the new system, renting the New Digital Finger hardware and

software. Immediately afterwards, the Murla HB Club automatically renewed current supporters’
subscriptions, while introducing a new contractual clause requiring supporters to access specific areas of

the hall through the new fingerprint reading system installed at the gates.

After the first match hosted by the Murla HB Club, a local supporter submitted a complaint to the club and

to the Spanish Data Protection Authority (the AEPD), claiming that the new access system violates EU 6
data protection laws. Having been notified by the AEPD of the upcoming investigation regarding this
complaint, the Murla HB Club immediately carried out a Data Protection Impact Assessment (DPIA), the
conclusions of which stated that the new access system did not pose any high risks to data subjects'
privacy rights.

According to Article 83 of the GDPR, what should the AEPD take into account when determining a
possible fine?`,options:[`A. That the complainant had adhered to a binding contractual clause.`,`B. That the Murla HB Club promptly obeyed the Administrative Order (the Act).`,`C. That the Murla HB Club immediately carried out a DPIA after the AEPD notification.`,`D. That the number of affected data subjects is limited to the ones accessing a specific area.`],correctAnswer:`D`,explanation:`正确答案 D。GDPR 第 83(2)(a) 条明确要求监管机构考虑侵权的性质、严重程度和持续时间，包括处理的性质、范
围、目的、受影响数据主体人数及其损害程度。事后补做 DPIA 可能在个案中体现合作，但不能替代本应在处理前
完成的 DPIA，也不是本题最直接的法定裁量因素。`,topic:`GDPR`,verified:`corrected`},{id:293,question:`Under the Data Protection Law Enforcement Directive, a government can carry out a covert investigation
involving personal data, as long the investigation is sanctioned by law and constitutes a measure that is
both necessary and what?`,options:[`A. Prudent`,`B. Important`,`C. Proportionate`,`D. DPA-approved`],correctAnswer:`C`,explanation:`正确答案 C。（与 Q135 同一知识点）欧盟执法指令要求政府秘密调查须同时满足法律授权、必要性及比
例性（proportionate）要求。知识点：执法指令下秘密调查的比例原则要求。`,topic:`LED执法指令`,verified:`accurate`},{id:294,question:`SCENARIO

Please use the following to answer the next question:

Gentle Hedgehog Inc. is a privately owned website design agency incorporated in Italy. The company has
numerous remote workers in different EU countries. Recently, the management of Gentle Hedgehog
noticed a decrease in productivity of their sales team, especially among remote workers. As a result, the

company plans to implement a robust but privacy-friendly remote surveillance system to prevent

absenteeism, reward top performers, and ensure the best quality of customer service when sales people
are interacting with customers.

Gentle Hedgehog eventually hires Sauron Eye Inc., a Chinese vendor of employee surveillance software

whose European headquarters is in Germany. Sauron Eye s software provides powerful remote-
monitoring capabilities, including 24/7 access to computer cameras and microphones, screen captures,

emails, website history, and keystrokes. Any device can be remotely monitored from a central server that
is securely installed at Gentle Hedgehog headquarters. The monitoring is invisible by default; however, a
so-called Transparent Mode, which regularly and conspicuously notifies all users about the monitoring and
its precise scope, also exists. Additionally, the monitored employees are required to use a built-in
verification technology involving facial recognition each time they log in.

All monitoring data, including the facial recognition data, is securely stored in Microsoft Azure cloud
servers operated by Sauron Eye, which are physically located in France.

What is the main problem with the 24/7 camera monitoring?`,options:[`A. It is applicable only to the sales team members who are contractors.`,`B. The security measures in place don 't guarantee the confidentiality of the personal data`,`C. It has no valid legal basis to be implemented in the context of Gentle Hedgehog's business.`,`D. It must first be approved by the trade union and then granted a license from the national DPA.`],correctAnswer:`C`,explanation:`正确答案 C。（与 Q282 同一知识点）24/7 全天候摄像头监控因缺乏与既定目的相称的有效合法依据而构
成主要问题，而非仅适用范围限定于承包商（A）、安全措施保密性不足（B，题目未提及此类安全缺
陷）或须经工会审批和 DPA 许可（D，非普遍强制程序）。知识点：过度监控缺乏合法依据的核心问
题。`,topic:`GDPR`,verified:`accurate`},{id:295,question:`Start-up company MagicAI is developing an AI system that will be part of a medical device that detects
skin cancer. To take measures against potential bias in its AI system, the IT Team decides to collect data
about users' ethnic origin, nationality and gender.

Which would be the most appropriate legal basis for this processing under the GDPR, Article 9
(Processing of special categories of personal data)?`,options:[`A. Processing necessary for scientific or statistical purposes.`,`B. Processing necessary for reasons of substantial public interest`,`C. Processing necessary for purposes of preventive or occupational medicine`,`D. Processing necessary for the defense of legal claims in potential negligence cases`],correctAnswer:`B`,explanation:`正确答案 B。AI Act 第 10(5) 条专门规定：高风险 AI 系统为检测和纠正偏见而处理 GDPR 第 9(1) 条特殊类别数据，
在严格必要且满足访问限制、删除、记录和安全等保障条件时，属于 GDPR 第 9(2)(g) 条所称重大公共利益。C 所称
预防或职业医学通常面向医疗照护或职业健康专业活动，并非 IT 团队开展模型偏见测试的最佳依据。`,topic:`AI Act`,verified:`corrected`},{id:296,question:`What was the main failing of Convention 108 that led to the creation of the Data Protection Directive

(Directive 95/46/EC)?`,options:[`A. It did not account for the rapid growth of the Internet.`,`B. It did not include protections for sensitive personal data.`,`C. It prescribed insufficient penalties for data protection violations. 6`,`D. It was implemented in a fragmented manner by a small number of states.`],correctAnswer:`D`,explanation:`正确答案 D。（与 Q227 同一知识点）108 号公约因缔约国实施不均衡、呈碎片化状态，促成 95/46/EC 指
令的制定。知识点：108 号公约实施碎片化催生 95/46/EC 指令。`,topic:`历史沿革/95-46-EC`,verified:`accurate`},{id:297,question:`The EU Data Act mitigates the abuse of contract imbalances that impede equitable data sharing by doing
which of the following?`,options:[`A. Providing a 30 day right of recission, allowing a party to nullify a contract for any reason within 30 days of execution.`,`B. Safeguarding enterprises from unjust contract terms imposed by a party wielding a considerably stronger market position.`,`C. Requiring the use of standard contract clauses whenever data is shared between parties of substantially disproportionate bargaining power or market position.`,`D. Requiring all data protection provisions to be bilateral, prohibiting one party from imposing disproportionate obligations on the other in the event of a data breach.`],correctAnswer:`B`,explanation:`正确答案 B。Data Act 通过规定：由处于明显更强谈判地位的一方单方面强加的不公平数据访问、使用或责任条
款，对另一企业不具约束力，以缓解合同失衡。该法提供模型合同条款和公平性规则，但不要求此类交易一律使用
标准合同条款，因此 C 错误。`,topic:`Data Act`,verified:`corrected`},{id:298,question:`Which of the following is an example of an AI system posing unacceptable risk under the EU AI Act?`,options:[`A. A system aiding in legal interpretation and application of the law.`,`B. A real-time biometric identification system by law enforcement.`,`C. A migration, asylum and border control management system.`,`D. A system managing and operating a critical infrastructure.`],correctAnswer:`B`,explanation:`正确答案 B。欧盟 AI 法案将执法机构在公共场所使用的“实时”生物识别身份识别系统列为具有“不可接受
风险”（unacceptable risk）的 AI 应用（原则上被禁止，仅有极其有限的例外情形），因其高度侵入性监
控能力及对基本权利（尤其隐私权、行动自由权）构成的严重威胁；法律解释辅助系统（A）、移民庇护
边境管理系统（C）、关键基础设施管理系统（D）则通常被归类为“高风险”（high-risk，需满足严格合规
要求但并非被禁止）而非“不可接受风险”类别。知识点：欧盟 AI 法案风险分级体系——“不可接受风险”
类别（如公共场所实时生物识别执法系统）与“高风险”类别的区分。`,topic:`AI Act`,verified:`accurate`},{id:299,question:`SCENARIO

Please use the following to answer the next question:

Financially, it has been a very good year at ARRA Hotels: Their 21 hotels, located in Greece (5), Italy (15)

and Spain (1), have registered their most profitable results ever. To celebrate this achievement, ARRA

Hotels’ Human Resources office, based in ARRA’s main Italian establishment, has organized a team event

for its 420 employees and their families at its hotel in Spain. 6
Upon arrival at the hotel, each employee and family member is given an electronic wristband at the
reception desk. The wristband serves a number of functions:

Allows access to the “party zone” of the hotel, and emits a buzz if the user approaches any
unauthorized areas
Allows up to three free drinks for each person of legal age, and emits a buzz once this limit has been
reached
Grants a unique ID number for participating in the games and contests that have been planned.

Along with the wristband, each guest receives a QR code that leads to the online privacy notice describing
the use of the wristband. The page also contains an unchecked consent checkbox. In the case of
employee family members under the age of 16, consent must be given by a parent.

Among the various activities planned for the event, ARRA Hotels’ HR office has autonomously set up a
photocall area, separate from the main event venue, where employees can come and have their pictures
taken in traditional carnival costume. The photos will be posted on ARRA Hotels’ main website for general
marketing purposes.

On the night of the event, an employee from one of ARRA’s Greek hotels is displeased with the results of
the photos in which he appears. He intends to file a complaint with the relevant supervisory authority in
regard to the following:

The lack of any privacy notice in the separate photocall area
The unlawful cross-border processing of his personal data
The unacceptable aesthetic outcome of his photos

Which of the following is NOT necessarily considered a factor in identifying whether the processing could

be considered a “cross-border processing”?`,options:[`A. The total number of data subjects.`,`B. The potential harm for the data subjects.`,`C. The collection of personal data of children.`,`D. The processing of a wide range of personal data`],correctAnswer:`A`,explanation:`正确答案 A。EDPB 指出，即使处理涉及多个成员国的大量个人，也不必然产生“实质性影响”；仍须结合个案影响判
断。潜在损害、处理儿童或其他脆弱群体数据，以及处理广泛数据类型，均属于评估实质性影响的相关因素。`,topic:`监管机构`,verified:`corrected`},{id:300,question:`Based on the EDPB’s Guidelines on data subject rights - Right of access, and on Article 15 of the GDPR,
which of the following is NOT a requirement that a data controller is required to undertake?`,options:[`A. Providing copies of personal data to the data subject.`,`B. Informing the data subject about the processing of their data.`,`C. Registering each access request by the data subject in a publicly available list.`,`D. Implementing measures to verify the identity of the data subject making the request.`],correctAnswer:`C`,explanation:`正确答案 C。EDPB《访问权指南》及第 15 条要求控制者提供数据副本（A）、告知处理相关信息
（B）、核实请求人身份（D），但并未要求控制者将每一次访问请求记录并对外“公开”发布——尽管出
于问责制目的，控制者内部保留处理请求的记录是良好实践，但对外公开这些记录既非法定要求，也可
能反而侵犯提出请求的数据主体自身的隐私。知识点：第 15 条访问权的法定义务清单及不包含“公开访问
请求记录”这一要求。`,topic:`监管机构`,verified:`accurate`},{id:301,question:`SCENARIO

Please use the following to answer the next question:

Joe started the Gummy Bear Company in 2000 from his home in Vermont, USA. Today, it is a multi-billion-
dollar candy company operating in every continent. All of the company’s IT servers are located in Vermont.
This year Joe hires his son Ben to join the company and head up Project Big, which is a major marketing
strategy to triple gross revenue in just 5 years. Ben graduated with a PhD in computer software from a top
university. Ben decided to join his father’s company, but is also secretly working on launching a new global
online dating website company called Ben Knows Best.

Ben is aware that the Gummy Bear Company has millions of customers and believes that many of them
might also be interested in finding their perfect match. For Project Big, Ben redesigns the company’s
online web portal and requires customers in the European Union and elsewhere to provide additional
personal information in order to remain a customer. Project Ben begins collecting data about customers’
philosophical beliefs, political opinions and marital status.

If a customer identifies as single, Ben then copies all of that customer’s personal data onto a separate
database for Ben Knows Best. Ben believes that he is not doing anything wrong, because he explicitly
asks each customer to give their consent by requiring them to check a box before accepting their
information. As Project Big is an important project, the company also hires a first-year college student
named Sam, who is studying computer science, to help Ben out.

Ben calls out sick and Sam comes across the Ben Knows Best database. Sam is planning on going to

Ireland over Spring Beak with 10 of his friends, so he copies all of the customer information of people that
reside in Ireland so that he and his friends can contact people when they are in Ireland.

Joe also hires his best friend’s daughter, Alice, who just graduated from law school in the U.S., to be the
company’s new General Counsel. Alice has heard about the GDPR, so she does some research on it.
Alice approaches Joe and informs him that she has drafted up Binding Corporate Rules for everyone in the
company to follow, as it is important for the company to have in place a legal mechanism to transfer data
internally from the company’s operations in the European Union to the U.S.

Joe believes that Alice is doing a great job, and informs her that she will also be in-charge of handling a
major lawsuit that has been brought against the company in federal court in the U.S. To prepare for the
lawsuit, Alice instructs the company’s IT department to make copies of the computer hard drives from the
entire global sales team, including the European Union, and send everything to her so that she can review
everyone’s information. Alice believes that Joe will be happy that she did the first level review, as it will
save the company a lot of money that would otherwise be paid to its outside law firm.

Ben’s collection of additional data from customers created several potential issues for the company, which
would most likely require which of the following actions?`,options:[`A. Performing a data protection impact assessment.`,`B. Entering into a data processing agreement.`,`C. Establishing a new corporate governance.`,`D. Signing a non-disclosure agreement.`],correctAnswer:`A`,explanation:`正确答案 A。（与 Q172 同一知识点）新增收集哲学信仰、政治观点等第 9 条特殊类别数据，且用途涉及
交友撮合等新目的，属于很可能带来高风险的处理，须开展 DPIA 评估。B、C、D 均非最直接对应的合
规回应措施。知识点：第 35 条 DPIA 触发情形——新增涉及特殊类别数据的高风险处理。`,topic:`GDPR`,verified:`accurate`},{id:302,question:`A patient advocacy group publishes an email newsletter for subscribers, who create profiles on the
publisher’s website including expressed areas of interest such as diabetes, narcolepsy, weight
management and information on clinical trials. The publisher, as data controller, has just received a data
subject access request.

What is the most appropriate identity verification that the controller may request from the data subject
before complying with the request?`,options:[`A. The mobile telephone number associated with the data subject.`,`B. A copy of a government-issued ID such as a driver’s license of passport.`,`C. An access code that was sent by the controller to the email address on file.`,`D. A credit card number to which a test authorization of 1 euro will be made for validation.`],correctAnswer:`C`,explanation:`正确答案 C。EDPB 身份核实指南倡导“分层”验证方式，即采取与请求敏感程度相称、侵入性最小的核验
手段；向请求人预留在系统内的邮箱发送验证码，既能确认请求人对该账户的实际控制权，又无需额外
收集政府身份证件（B，过度收集）、手机号（A，若系统内本未预留则不适用且核验强度较弱）或信用
卡信息（D，明显超出必要范围且不当涉及支付数据）。知识点：EDPB 分层身份核验原则——采用与请
求相称、最小侵入性的验证方式（如已注册邮箱验证码）。`,topic:`监管机构`,verified:`accurate`},{id:303,question:`SCENARIO

Please use the following to answer the next question:

It has been a tough season for the Spanish Handball League, with acts of violence and racism having
increased exponentially during their last few matches.

In order to address this situation, the Spanish Minister of Sports, in conjunction with the National Handball
League Association, issued an Administrative Order (the “Act”) obliging all the professional clubs to install
a fingerprint-reading system for accessing some areas of the sports halls, primarily the ones directly
behind the goalkeepers. The rest of the areas would retain the current access system, which allows any
spectators access as long as they hold valid tickets.

The Act named a selected hardware and software provider, New Digital Finger, Ltd., for creation of the
new fingerprint system. Additionally, it stipulated that any of the professional clubs that failed to install this
system within a two-year period would face fines under the Act.

The Murla HB Club was the first to install the new system, renting the New Digital Finger hardware and
software. Immediately afterwards, the Murla HB Club automatically renewed current supporters’
subscriptions, while introducing a new contractual clause requiring supporters to access specific areas of
the hall through the new fingerprint reading system installed at the gates.

After the first match hosted by the Murla HB Club, a local supporter submitted a complaint to the club and
to the Spanish Data Protection Authority (the AEPD), claiming that the new access system violates EU
data protection laws. Having been notified by the AEPD of the upcoming investigation regarding this
complaint, the Murla HB Club immediately carried out a Data Protection Impact Assessment (DPIA), the
conclusions of which stated that the new access system did not pose any high risks to data subjects'
privacy rights.

While assessing the possible use of fingerprints for accessing the sport hall, what criteria should NOT be

included in the analysis carried out in the DPIA?`,options:[`A. Necessity.`,`B. Suitability.`,`C. Confidentiality.`,`D. Proportionality.`],correctAnswer:`B`,explanation:`正确答案 B。第 35 条及 EDPB 相关指南要求 DPIA 须评估处理的必要性（A）、比例性（D）、以及涉及
的风险（含机密性保护，C，属于安全风险评估的一部分）等，但“适宜性”（suitability，即某项技术方案
是否“合适/管用”这一更偏工程实施层面的判断）并非 DPIA 法定评估框架下的专门列明标准用语——
DPIA 的核心分析框架聚焦必要性与比例性测试，而非泛泛的“适宜性”概念。知识点：第 35 条 DPIA 的核
心评估要素——必要性与比例性测试，而非笼统的“适宜性”标准。`,topic:`监管机构`,verified:`accurate`},{id:304,question:`When cookies of a third party (e.g., a social media, travel, or online banking website) are implemented by
your organization’s website, your organization acts as which of the following?`,options:[`A. A controller.`,`B. A processor.`,`C. A joint controller.`,`D. A sub-processor.`],correctAnswer:`C`,explanation:`答案 C 仅适用于网站运营者与第三方共同决定的收集和向第三方传输阶段。根据 Fashion ID 等判例，网站运营者通
常不对第三方收到数据后的全部后续处理当然承担共同控制者责任。`,topic:`ePrivacy指令`,verified:`qualified`},{id:305,question:`Which of the following elements does NOT need to be presented to a data subject in order to collect valid
consent for the use of cookies?`,options:[`A. A “Cookies Settings” button.`,`B. Information on the purpose of the cookies.`,`C. A “Reject All” cookies button on the first layer.`,`D. Unticked boxes representing categories of cookies to be dropped.`],correctAnswer:`A`,explanation:`答案 A 为最佳选项，因为 GDPR/ePrivacy 并不规定按钮必须使用“Cookie Settings”这一固定名称。拒绝应与接受同样
容易，非必要 cookie 不得预先勾选；“Reject All”是否必须位于首层应结合适用监管规则和界面整体是否提供等效、
即时的拒绝路径判断。`,topic:`ePrivacy指令`,verified:`qualified`},{id:306,question:`SCENARIO

Please use the following to answer the next question:

Joe is the new privacy manager for Who-R-U, a Canadian business that provides DNA analysis. The

company is headquartered in Montreal, and all of its employees are located there. The company offers its
services to Canadians only: Its website is in English and French, it accepts only Canadian currency, and it

blocks internet traffic from outside of Canada (although this solution doesn’t prevent all non-Canadian

traffic). It also declines to process orders that request the DNA report to be sent outside of Canada, and

returns orders that show a non-Canadian return address. 6
Bob, the President of Who-R-U, thinks there is a lot of interest for the product in the EU, and the company
is exploring a number of plans to expand its customer base.

The first plan, collegially called We-Track-U, will use an app to collect information about its current
Canadian customer base. The expansion will allow its Canadian customers to use the app while traveling
abroad. He suggests that the company use this app to gather location information. If the plan shows
promise, Bob proposes to use push notifications and text messages to encourage existing customers to
pre-register for an EU version of the service. Bob calls this work plan, We-Text-U. Once the company has
gathered enough pre-registrations, it will develop EU-specific content and services.

Another plan is called Customer for Life. The idea is to offer additional services through the company’s
app, like storage and sharing of DNA information with other applications and medical providers. The
company’s contract says that it can keep customer DNA indefinitely, and use it to offer new services and
market them to customers. It also says that customers agree not to withdraw direct marketing consent.
Paul, the marketing director, suggests that the company should fully exploit these provisions, and that it
can work around customers’ attempts to withdraw consent because the contract invalidates them.

The final plan is to develop a brand presence in the EU. The company has already begun this process. It is
in the process of purchasing the naming rights for a building in Germany, which would come with a few
offices that Who-R-U executives can use while traveling internationally. The office doesn’t include any
technology or infrastructure; rather, it’s simply a room with a desk and some chairs.

On a recent trip concerning the naming-rights deal, Bob’s laptop is stolen. The laptop held unencrypted
DNA reports on 5,000 Who-R-U customers, all of whom are residents of Canada. The reports include
customer name, birthdate, ethnicity, racial background, names of relatives, gender, and occasionally
health information.

The Customer for Life plan may conflict with which GDPR provision?`,options:[`A. Article 7, which requires that consent be as easy to withdraw as it is to give.`,`B. Article 15, which requires that data subjects be given a right of access.`,`C. Article 16, which provides data subjects with a right to rectification.`,`D. Article 20, which provides data subjects with a right to data portability.`],correctAnswer:`A`,explanation:`正确答案 A。（与 Q152 同一知识点）合同条款约定客户“不得撤回直接营销同意”，直接违反第 7(3)条“撤
回同意须与给予同意同样简便”的强制性要求，此类条款无效。B、C、D 并非本案合同条款直接冲突的条
款。知识点：第 7(3)条同意可撤回性要求及限制撤回条款的无效性。`,topic:`GDPR`,verified:`accurate`},{id:307,question:`SCENARIO

Please use the following to answer the next question:

Gentle Hedgehog Inc. is a privately owned website design agency incorporated in Italy. The company has
numerous remote workers in different EU countries. Recently, the management of Gentle Hedgehog
noticed a decrease in productivity of their sales team, especially among remote workers. As a result, the
company plans to implement a robust but privacy-friendly remote surveillance system to prevent
absenteeism, reward top performers, and ensure the best quality of customer service when sales people
are interacting with customers.

Gentle Hedgehog eventually hires Sauron Eye Inc., a Chinese vendor of employee surveillance software

whose European headquarters is in Germany. Sauron Eye s software provides powerful remote-
monitoring capabilities, including 24/7 access to computer cameras and microphones, screen captures,

emails, website history, and keystrokes. Any device can be remotely monitored from a central server that

is securely installed at Gentle Hedgehog headquarters. The monitoring is invisible by default; however, a

so-called Transparent Mode, which regularly and conspicuously notifies all users about the monitoring and
its precise scope, also exists. Additionally, the monitored employees are required to use a built-in
verification technology involving facial recognition each time they log in.

All monitoring data, including the facial recognition data, is securely stored in Microsoft Azure cloud
servers operated by Sauron Eye, which are physically located in France.

What monitoring may lawfully be performed within the scope of Gentle Hedgehog’s business?`,options:[`A. Everything offered by Sauron Eye s software in relation to activity by sales team contractors.`,`B. Everything offered by Sauron Eye’s software, assuming employees provide daily consent to the monitoring.`,`C. Only emails, website browsing history, and camera for internal video calls conducted in a non-secure environment.`,`D. Only emails, website browsing history, and camera for internal video calls that are expressly marked as monitored.`],correctAnswer:`D`,explanation:`正确答案 D。（与 Q283 同一知识点）合法监控范围应限定于与工作直接相关、且经明确标识告知监控状
态的活动（如内部视频通话、邮件、网站浏览记录），排除全天候无差别的摄像头麦克风侵入性监控。
知识点：合法监控范围设计——限定于工作相关活动并配合明确标识告知。`,topic:`GDPR`,verified:`accurate`},{id:308,question:`How did the European Union's (EU) first post-Brexit adequacy decisions for the United Kingdom (UK)
differ
from previous adequacy decisions?`,options:[`A. It concerns only the private sector.`,`B. It expires automatically after four years.`,`C. It also applies to the ePrivacy Regulation.`,`D. It had to be approved by the EU Parliament.`],correctAnswer:`B`,explanation:`答案 B 描述的是 2021 年首份英国充分性决定的历史创新：设置四年日落条款。该决定已于 2025 年 12 月 19 日续
期，当前有效期至 2031 年 12 月 27 日，因此不能再把“四年后自动失效”理解为当前剩余期限。`,topic:`ePrivacy指令`,verified:`qualified`},{id:309,question:`In 2018, why was the Convention for the Protection of Individuals with regard to Automatic Processing of
Personal Data (Convention 108) updated to Convention 108+?`,options:[`A. To respond to challenges posed by the use of new information and communication technologies.`,`B. To address inconsistencies in how European countries implemented Convention 108.`,`C. To harmonize key definitions and principles with the GDPR.`,`D. To open it up for signatories by non-European countries.`],correctAnswer:`A`,explanation:`正确答案 A。108 号公约现代化修订为 108+号公约的主要动因，是应对新兴信息通信技术（如大数据、
人工智能、生物识别技术等）带来的新型隐私和数据保护挑战，确保该框架在数字时代继续保持有效性
和相关性，而非专门解决各国实施不一致问题（B，此问题更多是催生 95/46 指令的历史原因而非 108+号
公约现代化的直接动因）、单纯与 GDPR 定义对齐（C，虽然确实吸收借鉴了 GDPR 的部分理念，但这并
非该修订的“主要”原因表述）或向非欧洲国家开放签署（D，108 号公约本身早已向非欧洲国家开放）。
知识点：108+号公约现代化修订应对新技术挑战这一核心动因。`,topic:`历史沿革/95-46-EC`,verified:`accurate`},{id:310,question:`Which of the following describes a primary effect that the EU Artificial Intelligence Act (AI Act) has on the
GDPR?`,options:[`A. The AI Act takes precedence when it comes to AI systems.`,`B. The AI Act defines additional requirements related to AI systems.`,`C. The AI Act establishes a joint authority for supervision of AI systems.`,`D. The AI Act introduces new legal bases for personal data in AI systems.`],correctAnswer:`B`,explanation:`正确答案 B。欧盟 AI 法案作为专门规范 AI 系统的新立法，在 GDPR 既有的一般数据保护框架基础上，
针对 AI 系统新增了特定的合规要求（如高风险 AI 系统的合格评定、透明度、人工监督等），二者并行
互补，而非 AI 法案取代或优先于 GDPR 适用于 AI 系统的数据保护事项（A，两部法律各有其规制重点，
GDPR 仍是个人数据处理的基础性法律）、设立联合监管机构（C，AI 法案设有自身的市场监管机构体
系，并非与数据保护监管机构合并设立联合机构）或创设新的个人数据处理合法依据（D，AI 法案并未
新增 GDPR 第 6/9 条之外的合法依据类型）。知识点：AI 法案与 GDPR 的互补关系——AI 法案新增 AI
系统专属合规要求，而非取代 GDPR 的一般数据保护规则。`,topic:`AI Act`,verified:`accurate`},{id:311,question:`Which of the following is an initial core requirement of a good incident response plan?`,options:[`A. A rehearsed training program.`,`B. An incident detection tool.`,`C. A classification scheme.`,`D. A governance model.`],correctAnswer:`C`,explanation:`正确答案 C。构建有效事件响应计划的首要基础性要求是建立事件分类体系（按类型、严重程度、影响
范围对事件进行分级归类），这为后续确定响应优先级、触发相应处置流程提供了结构化框架，是响应
培训（A）、检测工具（B）、治理模式（D）等后续要素得以有效运作的前提基础。知识点：事件响应
计划构建中分类体系（classification scheme）作为基础性初始要求的重要性。`,topic:`GDPR`,verified:`accurate`},{id:312,question:`You're a Data Protection Officer who learns that your company's call center has experienced a brief power
outage lasting several minutes, which left customers unable to contact the company or access their
records during that time. A responsible team leader calls you to ask if anything needs to be done regarding
GDPR compliance.

What course of action should you advise?`,options:[`A. Notify the supervisory authority, as the incident constitutes a toss of availability.`,`B. Report the incident to select individuals based on the nature of the data that was unable to be accessed.`,`C. Launch an investigation to assess whether the current measures ensure an appropriate level of security.`,`D. Inform the controller of the incident so that a decision on reporting it to a supervisory authority can be made.`],correctAnswer:`D`,explanation:`正确答案 D。GDPR 将泄露风险评估及是否通知监管机构的最终决策权赋予控制者（而非 DPO 本人直接
决定），DPO 作为顾问角色应及时将事件情况汇报给控制者，由控制者结合具体情况判断该事件是否构
成需要通知的“个人数据泄露”并决定后续步骤，而非由 DPO 越权直接决定通知监管机构（A）、自行选
择性通知特定人员（B）或仅聚焦安全措施审查而忽略向控制者汇报决策链条（C，尽管安全审查也是重
要环节，但并非本题问的“该做什么”这一首要程序性回应）。知识点：数据泄露评估与通知决策权归属于
控制者，DPO 的角色是及时汇报并提供专业建议。`,topic:`GDPR`,verified:`accurate`},{id:313,question:`A financial services company based in Europe is evaluating several cloud service providers to help
process customer data. To comply with the GDPR, the company must only consider vendors who do
what?`,options:[`A. Engage a Data Protection Officer to oversee secure processing of customer data.`,`B. Use security controls that have been certified by an external auditor to minimize risk and protect customer data.`,`C. Provide sufficient guarantees to implement appropriate technical and organizational measures to 6 protect customer data.`,`D. Process data only in jurisdictions deemed adequate by the European Commission to ensure compliance with data transfer requirements.`],correctAnswer:`C`,explanation:`正确答案 C。第 28(1)条要求控制者只能委托能够提供“充分保证”（sufficient guarantees）以实施适当技术
组织措施、确保处理符合 GDPR 要求并保护数据主体权利的处理者，这是选择云服务商的核心法定标
准，而非仅要求供应商设有 DPO（A，非普遍强制标准）、要求经外部审计认证（B，认证是证明“充分
保证”的一种方式但非唯一强制途径）或要求仅在充分性认定国家处理数据（D，充分性认定针对跨境传
输问题，并非选择处理者的一般性前提要求，本地或境内处理同样须满足第 28 条充分保证要求）。知识
点：第 28(1)条控制者选任处理者须确保其提供“充分保证”这一核心法定标准。`,topic:`监管机构`,verified:`accurate`},{id:314,question:`For an organization acting as a data processor, which of the following would NOT be required to be
included in the Record of Processing Activities under Article 30 of the GDPR?`,options:[`A. Categories of personal data processing.`,`B. Name and contact details of the controller.`,`C. Retention periods for processed personal data categories.`,`D. Technical and organizational security measures implemented.`],correctAnswer:`C`,explanation:`正确 答案 C。第 30(2)条要 求处理 者的处 理活动 记录须 包含： 所代表 的每个 控制者 的名称 联系方 式
（B）、代表其开展的处理类别（A）、跨境传输情况、以及技术组织安全措施的概括性描述（D），但
并不要求处理者的记录中包含具体数据类别的留存期限——留存期限的确定和记录属于控制者依第 30(1)
条承担的义务范畴，而非处理者记录内容的强制要素。知识点：第 30(2)条处理者记录内容清单及与控制
者记录内容（含留存期限）的区分。`,topic:`GDPR`,verified:`accurate`},{id:315,question:`According to Guidelines 1/2024 on processing of personal data based on Article 6(1)(f) GDPR, which
would NOT be a valid lawful basis for transferring personal data to a third country law enforcement
authority?`,options:[`A. Legitimate interest, where the controller is subject to the third country law.`,`B. Vital interest of a natural person, where the conditions are set out in international law.`,`C. Legal obligation, where the third country law provides adequate protection for the data.`,`D. Public interest, where an international agreement exists and member state law allows it.`],correctAnswer:`C`,explanation:`答案 C 正确，但题干引用的指南名称有误。相关现行文件是 EDPB《Guidelines 02/2024 on Article 48 GDPR》（2025
年最终版），而非关于第 6(1)(f) 条合法利益的 Guidelines 1/2024。第三国法律本身不能构成 GDPR 第 6(1)(c) 条意义
上的欧盟或成员国法定义务。`,topic:`监管机构`,verified:`qualified`},{id:316,question:`An online fashion retailer based in Italy sells high-end clothing, accessories and beauty products to

customers around the world. When customers make a purchase on the retailer's website, they can register

to create a user profile, or complete their purchase without doing so. One of the benefits of registration is
the storage of payment data, which provides a quick and seamless checkout experience for future
transactions.

Which is the most appropriate legal basis or bases for processing customer information from their user
profiles AND from their stored payment data?`,options:[`A. Consent for both the user profile and the stored payment data.`,`B. Legitimate interest for both the user profile and the stored payment data.`,`C. Legitimate interest for the user profile; consent for the stored payment data.`,`D. Performance of a contract for the user profile; legitimate interest for the stored payment data.`],correctAnswer:`C`,explanation:`答案 C 是四项中最合理的组合，但应注意支付卡数据并非 GDPR 第 9 条特殊类别数据。对未来交易保存支付数据属
于可选便利功能，通常需单独、明确选择；用户资料的合法依据则应根据账户功能逐项判断，可能是合同、合法利
益或同意，而非一概而论。`,topic:`GDPR`,verified:`qualified`},{id:317,question:`SCENARIO

Please use the following to answer the next questions:

FastHire, an Artificial Intelligence-driven company based in Amsterdam, sells a solution to customers that
uses machine learning to help filter resumes for open positions.

This solution catches the attention of Marie, the talent acquisition lead at Fashionista, a clothing company
with multiple locations across Europe. Because Fashionista has recently come under fire for discrimination

in its hiring practices, Marie decides to onboard FastHire to assist with selecting sales associate
candidates. She believes that this process will be more objective, since FastHire will make accurate
predictions regarding whether a candidate would make a successful sales associate or not. Marie
understands that she will first have to provide the FastHire solution with resumes so that the algorithm can
learn the qualities of successful candidates.

A short time after FastHire's solution has been put into use by Fashionista, Charles and Chloe submit
applications for a sales associate position in Fashionista's London store. Only Charles is immediately
notified that he is not qualified for the job, despite having similar experience as Chloe.

To deploy FastHire at Fashonista, Marie must be able to do what?`,options:[`A. Explain the way the machine learning algorithm works to Charles.`,`B. Train the machine learning algorithm with historical data from other retailers.`,`C. Obtain prior consent of candidates for their resumes being filtered through FastHire's product.`,`D. Ask candidates whether they want their resumes reviewed by a talent acquisition lead or through the FastHire product.`],correctAnswer:`A`,explanation:`正确答案 A（四项中最接近）。招聘场景通常不能把候选人同意视为部署 AI 筛选的普遍前提，尤其因雇佣关系存在
权力不平衡；D 也不是 GDPR 规定的固定选择权。若系统作出仅由自动化处理产生、对候选人具有法律或类似重大
影响的决定，控制者必须以清晰、可理解方式说明所用程序或主要逻辑、意义和预期后果，并提供第 22 条要求的保
障。A 不意味着必须披露源代码或完整数学公式。`,topic:`AI Act`,verified:`corrected`},{id:318,question:`SCENARIO

Please use the following to answer the next questions:

FastHire, an Artificial Intelligence-driven company based in Amsterdam, sells a solution to customers that
uses machine learning to help filter resumes for open positions.

This solution catches the attention of Marie, the talent acquisition lead at Fashionista, a clothing company
with multiple locations across Europe. Because Fashionista has recently come under fire for discrimination
in its hiring practices, Marie decides to onboard FastHire to assist with selecting sales associate
candidates. She believes that this process will be more objective, since FastHire will make accurate
predictions regarding whether a candidate would make a successful sales associate or not. Marie
understands that she will first have to provide the FastHire solution with resumes so that the algorithm can
learn the qualities of successful candidates.

A short time after FastHire's solution has been put into use by Fashionista, Charles and Chloe submit
applications for a sales associate position in Fashionista's London store. Only Charles is immediately
notified that he is not qualified for the job, despite having similar experience as Chloe.

In order to properly train and use the FastHire machine learning algorithm, Marie should do what?`,options:[`A. Only use dummy data to train the machine learning model.`,`B. Ensure that resumes of current sales associates are used to train the machine learning algorithms.`,`C. Collaborate with FastHire by sharing candidate information so FastHire can improve the algorithm.`,`D. Ensure that a Fashionista talent acquisition member reviews all applicants determined to be unqualified by FastHire.`],correctAnswer:`D`,explanation:`答案 D 在系统作出仅由自动化处理产生且对候选人具有法律或类似重大影响的决定时成立。人工复核必须真实、有
能力改变结果，并由理解模型局限和相关事实的人员进行，不能只是形式化盖章。`,topic:`AI Act`,verified:`qualified`},{id:319,question:`What is considered a best practice under the EDPB's Guidelines 3/2022 on Dark patterns in social media
platform interfaces?`,options:[`A. Offer multiple options users can choose from to set up their privacy settings and data protection preferences.`,`B. Offer several data protection tools for users to control how their data is processed and how to exercise their rights.`,`C. Provide relevant links to additional information, settings, or actions wherever helpful for users to navigate online interfaces.`,`D. Provide a variety of content to users so they can answer multiple questions about their personal data and make their privacy choices.`],correctAnswer:`C`,explanation:`答案 C 正确。该 EDPB 文件的最 终名称已由早 期的“Dark patterns” 改为 “Deceptive design patterns in social media
platform interfaces”；其核心仍是避免操纵性界面，并在需要处提供清晰、易达的信息和操作入口。`,topic:`监管机构`,verified:`qualified`}],ku=Array.from(new Set(Ou.map(e=>e.topic))).sort(),Au={tomatoDuration:15,breakDuration:5,soundEnabled:!0,theme:`light`,fontSize:`medium`};function ju(){let[e,t]=(0,_.useState)(`quiz`),[n,r]=(0,_.useState)(0),[i,a]=(0,_.useState)(`all`),[o,s]=Tu(`cippe-settings`,Au),{progress:c,stats:l,recordAnswer:u}=Du(),d=(0,_.useMemo)(()=>_u(i===`all`?Ou:Ou.filter(e=>e.topic===i)),[i]),f=d[n],p=(0,_.useMemo)(()=>c.filter(e=>e.isCorrect).length/Ou.length,[c]),m=(0,_.useCallback)((e,t)=>{f&&u(f.id,e,t)},[f,u]),h=(0,_.useCallback)(()=>{r(e=>(e+1)%d.length)},[d.length]),g=(0,_.useCallback)(()=>{r(e=>(e+1)%d.length)},[d.length]),v={small:`text-sm`,medium:`text-base`,large:`text-lg`}[o.fontSize];return(0,H.jsxs)(`div`,{className:`min-h-screen bg-gray-50 ${v}`,children:[(0,H.jsx)(`header`,{className:`sticky top-0 z-50 bg-white shadow-sm border-b`,children:(0,H.jsxs)(`div`,{className:`max-w-4xl mx-auto px-4 py-3 flex items-center justify-between`,children:[(0,H.jsx)(`h1`,{className:`text-xl font-bold text-gray-900`,children:`CIPPE 学习终端`}),(0,H.jsxs)(`div`,{className:`text-sm text-gray-600`,children:[c.filter(e=>e.isCorrect).length,` / `,Ou.length,` 题`]})]})}),e===`quiz`&&(0,H.jsx)(`div`,{className:`max-w-4xl mx-auto px-4 pt-4`,children:(0,H.jsxs)(`select`,{value:i,onChange:e=>{a(e.target.value),r(0)},className:`w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`,children:[(0,H.jsxs)(`option`,{value:`all`,children:[`全部题目 (`,Ou.length,`题)`]}),ku.map(e=>(0,H.jsxs)(`option`,{value:e,children:[e,` (`,Ou.filter(t=>t.topic===e).length,`题)`]},e))]})}),(0,H.jsx)(`div`,{className:`max-w-4xl mx-auto px-4 py-4`,children:(0,H.jsx)(`div`,{className:`w-full bg-gray-200 rounded-full h-2`,children:(0,H.jsx)(`div`,{className:`bg-blue-500 h-2 rounded-full transition-all duration-500`,style:{width:`${p*100}%`}})})}),(0,H.jsx)(`main`,{className:`max-w-4xl mx-auto px-4 pb-20`,children:(0,H.jsxs)(Oc,{mode:`wait`,children:[e===`quiz`&&f&&(0,H.jsxs)(fu.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},children:[(0,H.jsx)(mu,{question:f,onAnswer:m,onSkip:g,soundEnabled:o.soundEnabled}),(0,H.jsx)(`div`,{className:`mt-6 text-center`,children:(0,H.jsx)(`button`,{onClick:h,className:`px-8 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors`,children:`下一题 →`})})]},f.id),e===`timer`&&(0,H.jsx)(fu.div,{initial:{opacity:0},animate:{opacity:1},children:(0,H.jsx)(vu,{duration:o.tomatoDuration,breakDuration:o.breakDuration})}),e===`achievements`&&(0,H.jsx)(fu.div,{initial:{opacity:0},animate:{opacity:1},children:(0,H.jsx)(bu,{stats:l})}),e===`settings`&&(0,H.jsx)(fu.div,{initial:{opacity:0},animate:{opacity:1},children:(0,H.jsx)(wu,{settings:o,onUpdate:s})})]})}),(0,H.jsx)(`nav`,{className:`fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg`,children:(0,H.jsx)(`div`,{className:`max-w-4xl mx-auto flex justify-around py-2`,children:[{id:`quiz`,label:`刷题`,icon:`📝`},{id:`timer`,label:`番茄钟`,icon:`🍅`},{id:`achievements`,label:`成就`,icon:`🏆`},{id:`settings`,label:`设置`,icon:`⚙️`}].map(n=>(0,H.jsxs)(`button`,{onClick:()=>t(n.id),className:`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${e===n.id?`text-blue-600 bg-blue-50`:`text-gray-500 hover:text-gray-700`}`,children:[(0,H.jsx)(`span`,{className:`text-xl`,children:n.icon}),(0,H.jsx)(`span`,{className:`text-xs`,children:n.label})]},n.id))})})]})}(0,v.createRoot)(document.getElementById(`root`)).render((0,H.jsx)(_.StrictMode,{children:(0,H.jsx)(ju,{})}));