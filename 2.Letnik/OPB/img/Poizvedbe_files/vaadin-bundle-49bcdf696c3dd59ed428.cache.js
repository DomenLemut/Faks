!function(e){function t(t){for(var n,r,a=t[0],i=t[1],s=0,c=[];s<a.length;s++)r=a[s],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&c.push(o[r][0]),o[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(l&&l(t);c.length;)c.shift()()}var n={},o={1:0};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=a);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.src=function(e){return r.p+"build/vaadin-"+({}[e]||e)+"-"+{0:"75ea0a73d89038cd93ad",4:"4d83ce38a18d8bbd0949",6:"325e6e3c08653dbbdbb0"}[e]+".cache.js"}(e);var l=new Error;i=function(t){s.onerror=s.onload=null,clearTimeout(c);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var c=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},r.m=e,r.c=n,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="VAADIN/",r.oe=function(e){throw console.error(e),e};var a=window.webpackJsonp=window.webpackJsonp||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var l=i;r(r.s=254)}([,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(25);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class o{constructor(e){this.value=e.toString()}toString(){return this.value}}function r(e){if(e instanceof o)return e.value;throw new Error("non-literal value passed to Polymer's htmlLiteral function: "+e)}var a=function(e,...t){var n=document.createElement("template");return n.innerHTML=t.reduce((t,n,a)=>t+function(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof o)return r(e);throw new Error("non-template value passed to Polymer's html function: "+e)}(n)+e[a+1],e[0]),n}},,,function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return h}));n(25);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var o=0,r=0,a=[],i=0,s=document.createTextNode("");new window.MutationObserver((function(){for(var e=a.length,t=0;t<e;t++){var n=a[t];if(n)try{n()}catch(e){setTimeout(()=>{throw e})}}a.splice(0,e),r+=e})).observe(s,{characterData:!0});var l={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},c={run:e=>window.requestAnimationFrame(e),cancel(e){window.cancelAnimationFrame(e)}},d={run:e=>window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16),cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},h={run:e=>(s.textContent=i++,a.push(e),o++),cancel(e){var t=e-r;if(t>=0){if(!a[t])throw new Error("invalid async handle: "+e);a[t]=null}}}},,function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var o=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:e=>e},,function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i}));n(25),n(29),n(9);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class o{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,r.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),r.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,n){return e instanceof o?e._cancelAsync():e=new o,e.setConfig(t,n),e}}var r=new Set,a=function(e){r.add(e)},i=function(){var e=Boolean(r.size);return r.forEach(e=>{try{e.flush()}catch(e){setTimeout(()=>{throw e})}}),e}},,function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(97),r=n(6);n.d(t,"b",(function(){return r.a}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var a=Object(o.a)(HTMLElement)},,function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"g",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"i",(function(){return s})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return c})),n.d(t,"a",(function(){return h})),n.d(t,"h",(function(){return f}));n(25);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function o(e){return e.indexOf(".")>=0}function r(e){var t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function a(e,t){return 0===e.indexOf(t+".")}function i(e,t){return 0===t.indexOf(e+".")}function s(e,t,n){return t+n.slice(e.length)}function l(e,t){return e===t||a(e,t)||i(e,t)}function c(e){if(Array.isArray(e)){for(var t=[],n=0;n<e.length;n++)for(var o=e[n].toString().split("."),r=0;r<o.length;r++)t.push(o[r]);return t.join(".")}return e}function d(e){return Array.isArray(e)?c(e).split("."):e.toString().split(".")}function h(e,t,n){for(var o=e,r=d(t),a=0;a<r.length;a++){if(!o)return;o=o[r[a]]}return n&&(n.path=r.join(".")),o}function f(e,t,n){var o=e,r=d(t),a=r[r.length-1];if(r.length>1){for(var i=0;i<r.length-1;i++){if(!(o=o[r[i]]))return}o[a]=n}else o[t]=n;return r.join(".")}},,function(e,t,n){"use strict";n.d(t,"h",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"f",(function(){return l})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d})),n.d(t,"g",(function(){return h}));n(25);var o=n(56),r=!window.ShadyDOM,a=(Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback,Object(o.a)(document.baseURI||window.location.href)),i=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,s=!1,l=!1,c=!1,d=!1,h=!1},,,function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(54),r=n(107),a=e=>class extends(Object(r.a)(e)){static finalize(){super.finalize();var e=this.prototype._template,t=this.template&&this.template.parentElement&&this.template.parentElement.id===this.is,n=Object.getPrototypeOf(this.prototype)._template;n&&!t&&Array.from(n.content.querySelectorAll("style[include]")).forEach(t=>{this._includeStyle(t.getAttribute("include"),e)}),this._includeMatchingThemes(e)}static _includeMatchingThemes(e){var t=o.a.prototype.modules,n=!1,r=this.is+"-default-theme";Object.keys(t).sort((e,t)=>{var n=0===e.indexOf("vaadin-"),o=0===t.indexOf("vaadin-"),r=["lumo-","material-"],a=r.filter(t=>0===e.indexOf(t)).length>0,i=r.filter(e=>0===t.indexOf(e)).length>0;return n!==o?n?-1:1:a!==i?a?-1:1:0}).forEach(o=>{if(o!==r){var a=t[o].getAttribute("theme-for");a&&a.split(" ").forEach(t=>{new RegExp("^"+t.split("*").join(".*")+"$").test(this.is)&&(n=!0,this._includeStyle(o,e))})}}),!n&&t[r]&&this._includeStyle(r,e)}static _includeStyle(e,t){if(t&&!t.content.querySelector(`style[include="${e}"]`)){var n=document.createElement("style");n.setAttribute("include",e),t.content.appendChild(n)}}}},,function(e,t,n){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(e,t){return e}},,function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(25);var o=n(134),r=n(9),a=n(11);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function i(e){return"slot"===e.localName}var s=class{static getFlattenedNodes(e){var t=Object(a.a)(e);return i(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>i(e)?(e=e,Object(a.a)(e).assignedNodes({flatten:!0})):[e]).reduce((e,t)=>e.concat(t),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){i(this._target)?this._listenSlots([this._target]):Object(a.a)(this._target).children&&(this._listenSlots(Object(a.a)(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){i(this._target)?this._unlistenSlots([this._target]):Object(a.a)(this._target).children&&(this._unlistenSlots(Object(a.a)(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,r.c.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(var t=0;t<e.length;t++){var n=e[t];n.addedNodes&&this._listenSlots(n.addedNodes),n.removedNodes&&this._unlistenSlots(n.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;for(var e,t={target:this._target,addedNodes:[],removedNodes:[]},n=this.constructor.getFlattenedNodes(this._target),r=Object(o.a)(n,this._effectiveNodes),a=0;a<r.length&&(e=r[a]);a++)for(var i,s=0;s<e.removed.length&&(i=e.removed[s]);s++)t.removedNodes.push(i);for(var l,c=0;c<r.length&&(l=r[c]);c++)for(var d=l.index;d<l.index+l.addedCount;d++)t.addedNodes.push(n[d]);this._effectiveNodes=n;var h=!1;return(t.addedNodes.length||t.removedNodes.length)&&(h=!0,this.callback.call(this._target,t)),h}_listenSlots(e){for(var t=0;t<e.length;t++){var n=e[t];i(n)&&n.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(var t=0;t<e.length;t++){var n=e[t];i(n)&&n.removeEventListener("slotchange",this._boundSchedule)}}}},,function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(25);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var o=0;function r(){}r.prototype.__mixinApplications,r.prototype.__mixinSet;var a=function(e){var t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);var n=o++;return function(o){var r=o.__mixinSet;if(r&&r[n])return o;var a=t,i=a.get(o);i||(i=e(o),a.set(o,i));var s=Object.create(i.__mixinSet||r||null);return s[n]=!0,i.__mixinSet=s,i}}},,function(e,t,n){"use strict";n.r(t),n.d(t,"gestures",(function(){return O})),n.d(t,"recognizers",(function(){return L})),n.d(t,"deepTargetFind",(function(){return I})),n.d(t,"addListener",(function(){return P})),n.d(t,"removeListener",(function(){return F})),n.d(t,"register",(function(){return R})),n.d(t,"setTouchAction",(function(){return N})),n.d(t,"prevent",(function(){return B})),n.d(t,"resetMouseCanceller",(function(){return j})),n.d(t,"findOriginalTarget",(function(){return V})),n.d(t,"add",(function(){return G})),n.d(t,"remove",(function(){return W}));n(25);var o=n(9),r=n(13),a=n(19),i=n(11),s="string"==typeof document.head.style.touchAction,l="__polymerGesturesHandled",c="__polymerGesturesTouchAction",d=["mousedown","mousemove","mouseup","click"],h=[0,1,4,2],f=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function u(e){return d.indexOf(e)>-1}var m=!1;function p(e){if(!u(e)&&"touchend"!==e)return s&&m&&a.c?{passive:!0}:void 0}!function(){try{var e=Object.defineProperty({},"passive",{get(){m=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();var b=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),g=[],_={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},v={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function y(e){var t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];var n=e.getRootNode();if(e.id)for(var o=n.querySelectorAll(`label[for = ${e.id}]`),r=0;r<o.length;r++)t.push(o[r])}return t}var w=function(e){var t,n=e.sourceCapabilities;if((!n||n.firesTouchEvents)&&(e[l]={skip:!0},"click"===e.type)){for(var o=!1,r=k(e),a=0;a<r.length;a++){if(r[a].nodeType===Node.ELEMENT_NODE)if("label"===r[a].localName)g.push(r[a]);else if(t=r[a],_[t.localName])for(var i=y(r[a]),s=0;s<i.length;s++)o=o||g.indexOf(i[s])>-1;if(r[a]===C.mouse.target)return}if(o)return;e.preventDefault(),e.stopPropagation()}};function A(e){for(var t,n=b?["click"]:d,o=0;o<n.length;o++)t=n[o],e?(g.length=0,document.addEventListener(t,w,!0)):document.removeEventListener(t,w,!0)}function x(e){var t=e.type;if(!u(t))return!1;if("mousemove"===t){var n=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!f&&(n=h[e.which]||0),Boolean(1&n)}return 0===(void 0===e.button?0:e.button)}var C={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function S(e,t,n){e.movefn=t,e.upfn=n,document.addEventListener("mousemove",t),document.addEventListener("mouseup",n)}function E(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",(function(e){C.mouse.mouseIgnoreJob||A(!0),C.mouse.target=k(e)[0],C.mouse.mouseIgnoreJob=r.a.debounce(C.mouse.mouseIgnoreJob,o.d.after(2500),(function(){A(),C.mouse.target=null,C.mouse.mouseIgnoreJob=null}))}),!!m&&{passive:!0});var k=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],O={},L=[];function I(e,t){for(var n=document.elementFromPoint(e,t),o=n;o&&o.shadowRoot&&!window.ShadyDOM;){if(o===(o=o.shadowRoot.elementFromPoint(e,t)))break;o&&(n=o)}return n}function T(e){var t=k(e);return t.length>0?t[0]:e.target}function z(e){var t,n=e.type,o=e.currentTarget.__polymerGestures;if(o){var r=o[n];if(r){if(!e[l]&&(e[l]={},"touch"===n.slice(0,5))){var a=(e=e).changedTouches[0];if("touchstart"===n&&1===e.touches.length&&(C.touch.id=a.identifier),C.touch.id!==a.identifier)return;s||"touchstart"!==n&&"touchmove"!==n||function(e){var t=e.changedTouches[0],n=e.type;if("touchstart"===n)C.touch.x=t.clientX,C.touch.y=t.clientY,C.touch.scrollDecided=!1;else if("touchmove"===n){if(C.touch.scrollDecided)return;C.touch.scrollDecided=!0;var o=function(e){for(var t,n="auto",o=k(e),r=0;r<o.length;r++)if((t=o[r])[c]){n=t[c];break}return n}(e),r=!1,a=Math.abs(C.touch.x-t.clientX),i=Math.abs(C.touch.y-t.clientY);e.cancelable&&("none"===o?r=!0:"pan-x"===o?r=i>a:"pan-y"===o&&(r=a>i)),r?e.preventDefault():B("track")}}(e)}if(!(t=e[l]).skip){for(var i,d=0;d<L.length;d++)r[(i=L[d]).name]&&!t[i.name]&&i.flow&&i.flow.start.indexOf(e.type)>-1&&i.reset&&i.reset();for(var h,f=0;f<L.length;f++)r[(h=L[f]).name]&&!t[h.name]&&(t[h.name]=!0,h[n](e))}}}}function P(e,t,n){return!!O[t]&&(function(e,t,n){var o=O[t],r=o.deps,a=o.name,i=e.__polymerGestures;i||(e.__polymerGestures=i={});for(var s,l,c=0;c<r.length;c++)s=r[c],b&&u(s)&&"click"!==s||((l=i[s])||(i[s]=l={_count:0}),0===l._count&&e.addEventListener(s,z,p(s)),l[a]=(l[a]||0)+1,l._count=(l._count||0)+1);e.addEventListener(t,n),o.touchAction&&N(e,o.touchAction)}(e,t,n),!0)}function F(e,t,n){return!!O[t]&&(function(e,t,n){var o=O[t],r=o.deps,a=o.name,i=e.__polymerGestures;if(i)for(var s,l,c=0;c<r.length;c++)s=r[c],(l=i[s])&&l[a]&&(l[a]=(l[a]||1)-1,l._count=(l._count||1)-1,0===l._count&&e.removeEventListener(s,z,p(s)));e.removeEventListener(t,n)}(e,t,n),!0)}function R(e){L.push(e);for(var t=0;t<e.emits.length;t++)O[e.emits[t]]=e}function N(e,t){s&&e instanceof HTMLElement&&o.c.run(()=>{e.style.touchAction=t}),e[c]=t}function M(e,t,n){var o=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(o.detail=n,Object(i.a)(e).dispatchEvent(o),o.defaultPrevented){var r=n.preventer||n.sourceEvent;r&&r.preventDefault&&r.preventDefault()}}function B(e){var t=function(e){for(var t,n=0;n<L.length;n++){t=L[n];for(var o=0;o<t.emits.length;o++)if(t.emits[o]===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function j(){C.mouse.mouseIgnoreJob&&C.mouse.mouseIgnoreJob.flush()}function D(e,t,n,o){t&&M(t,e,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:o,prevent:function(e){return B(e)}})}function H(e,t,n){if(e.prevent)return!1;if(e.started)return!0;var o=Math.abs(e.x-t),r=Math.abs(e.y-n);return o>=5||r>=5}function $(e,t,n){if(t){var o,r=e.moves[e.moves.length-2],a=e.moves[e.moves.length-1],i=a.x-e.x,s=a.y-e.y,l=0;r&&(o=a.x-r.x,l=a.y-r.y),M(t,"track",{state:e.state,x:n.clientX,y:n.clientY,dx:i,dy:s,ddx:o,ddy:l,sourceEvent:n,hover:function(){return I(n.clientX,n.clientY)}})}}function q(e,t,n){var o=Math.abs(t.clientX-e.x),r=Math.abs(t.clientY-e.y),a=T(n||t);!a||v[a.localName]&&a.hasAttribute("disabled")||(isNaN(o)||isNaN(r)||o<=25&&r<=25||function(e){if("click"===e.type){if(0===e.detail)return!0;var t=T(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;var n=t.getBoundingClientRect(),o=e.pageX,r=e.pageY;return!(o>=n.left&&o<=n.right&&r>=n.top&&r<=n.bottom)}return!1}(t))&&(e.prevent||M(a,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:n}))}R({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){E(this.info)},mousedown:function(e){if(x(e)){var t=T(e),n=this;S(this.info,(function(e){x(e)||(D("up",t,e),E(n.info))}),(function(e){x(e)&&D("up",t,e),E(n.info)})),D("down",t,e)}},touchstart:function(e){D("down",T(e),e.changedTouches[0],e)},touchend:function(e){D("up",T(e),e.changedTouches[0],e)}}),R({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,E(this.info)},mousedown:function(e){if(x(e)){var t=T(e),n=this,o=function(e){var o=e.clientX,r=e.clientY;H(n.info,o,r)&&(n.info.state=n.info.started?"mouseup"===e.type?"end":"track":"start","start"===n.info.state&&B("tap"),n.info.addMove({x:o,y:r}),x(e)||(n.info.state="end",E(n.info)),t&&$(n.info,t,e),n.info.started=!0)};S(this.info,o,(function(e){n.info.started&&o(e),E(n.info)})),this.info.x=e.clientX,this.info.y=e.clientY}},touchstart:function(e){var t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){var t=T(e),n=e.changedTouches[0],o=n.clientX,r=n.clientY;H(this.info,o,r)&&("start"===this.info.state&&B("tap"),this.info.addMove({x:o,y:r}),$(this.info,t,n),this.info.state="track",this.info.started=!0)},touchend:function(e){var t=T(e),n=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:n.clientX,y:n.clientY}),$(this.info,t,n))}}),R({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){x(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){x(e)&&q(this.info,e)},touchstart:function(e){var t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){q(this.info,e.changedTouches[0],e)}});var V=T,G=P,W=F},,function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var o=n(9),r=n(13),a=n(38),i=n(65),s=n(163);function l(){}var c,d=function(){if("function"==typeof s.a)return Object(s.a)(l)};window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){d&&d()};var h=new Set,f=e=>class extends(Object(i.a)(e)){static finalize(){super.finalize();var{is:e}=this;e&&!h.has(e)&&(window.Vaadin.registrations.push(this),h.add(e),window.Vaadin.developmentModeCallback&&(c=r.a.debounce(c,o.b,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),Object(a.a)(c)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}}},,function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(i=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),a=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([r]).join("\n")}var i,s,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var o=n(105),r=(n(78),n(208),n(25),n(101)),a=n(83),i=n(48),s=n(19),l=n(11),c=Object(i.a)(Object(a.b)(Object(r.a)(HTMLElement)));customElements.define("dom-bind",class extends c{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),s.f)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(){this.mutableData=!0}connectedCallback(){this.style.display="none",this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){Object(l.a)(Object(l.a)(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(var e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){var e;if(!this.__children){if(!(e=e||this.querySelector("template"))){var t=new MutationObserver(()=>{if(!(e=this.querySelector("template")))throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()});return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(var n=this.root.firstChild;n;n=n.nextSibling)this.__children[this.__children.length]=n;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});n(198),n(209);var d=n(15),h=n(29),f=n(134),u=n(97),m=Object(h.a)(e=>{var t=Object(u.a)(e);return class extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){var n=t.path;if(n==JSCompiler_renameProperty("items",this)){var o=t.base||[],r=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),r){var a=Object(f.a)(o,r);this.__applySplices(a)}this.__lastItems=o,this.__lastMulti=e}else if(t.path==JSCompiler_renameProperty("items",this)+".splices")this.__applySplices(t.value.indexSplices);else{var i=n.slice((JSCompiler_renameProperty("items",this)+".").length),s=parseInt(i,10);i.indexOf(".")<0&&i==s&&this.__deselectChangedIdx(s)}}__applySplices(e){for(var t=this,n=this.__selectedMap,o=function(o){var r=e[o];n.forEach((e,t)=>{e<r.index||(e>=r.index+r.removed.length?n.set(t,e+r.addedCount-r.removed.length):n.set(t,-1))});for(var a=0;a<r.addedCount;a++){var i=r.index+a;n.has(t.items[i])&&n.set(t.items[i],i)}},r=0;r<e.length;r++)o(r);this.__updateLinks();var a=0;n.forEach((e,t)=>{e<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),a,1):this.selected=this.selectedItem=null,n.delete(t)):a++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){var e=0;this.__selectedMap.forEach(t=>{t>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${t}`,`${JSCompiler_renameProperty("selected",this)}.${e++}`)})}else this.__selectedMap.forEach(e=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${e}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${e}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){var t=this.__selectedIndexForItemIndex(e);if(t>=0){var n=0;this.__selectedMap.forEach((e,o)=>{t==n++&&this.deselect(o)})}}__selectedIndexForItemIndex(e){var t=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${e}`];if(t)return parseInt(t.slice((JSCompiler_renameProperty("selected",this)+".").length),10)}deselect(e){var t,n=this.__selectedMap.get(e);n>=0&&(this.__selectedMap.delete(e),this.multi&&(t=this.__selectedIndexForItemIndex(n)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),t,1):this.selected=this.selectedItem=null)}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){var t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),t):this.selected=this.selectedItem=t)}}})(d.a);class p extends m{static get is(){return"array-selector"}static get template(){return null}}customElements.define(p.is,p);n(73),n(210),n(6);var b=Object(o.a)(HTMLElement).prototype},,function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));n(25);var o=n(13);n.d(t,"a",(function(){return o.b}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var r=function(){var e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=Object(o.c)()}while(e||t)}},,function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return f}));n(25);var o=n(11),r=(n(19),n(27)),a=(n(38),n(13),Element.prototype),i=a.matches||a.matchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector||a.webkitMatchesSelector,s=function(e,t){return i.call(e,t)};class l{constructor(e){this.node=e}observeNodes(e){return new r.a(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(Object(o.a)(this.node).contains(e))return!0;for(var t=e,n=e.ownerDocument;t&&t!==n&&t!==this.node;)t=Object(o.a)(t).parentNode||Object(o.a)(t).host;return t===this.node}getOwnerRoot(){return Object(o.a)(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?Object(o.a)(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){for(var e=[],t=Object(o.a)(this.node).assignedSlot;t;)e.push(t),t=Object(o.a)(t).assignedSlot;return e}importNode(e,t){var n=this.node instanceof Document?this.node:this.node.ownerDocument;return Object(o.a)(n).importNode(e,t)}getEffectiveChildNodes(){return r.a.getFlattenedNodes(this.node)}queryDistributedElements(e){for(var t,n=this.getEffectiveChildNodes(),o=[],r=0,a=n.length;r<a&&(t=n[r]);r++)t.nodeType===Node.ELEMENT_NODE&&s(t,e)&&o.push(t);return o}get activeElement(){var e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}function c(e,t){for(var n=function(n){var o=t[n];Object.defineProperty(e,o,{get:function(){return this.node[o]},configurable:!0})},o=0;o<t.length;o++)n(o)}class d{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}l.prototype.cloneNode,l.prototype.appendChild,l.prototype.insertBefore,l.prototype.removeChild,l.prototype.replaceChild,l.prototype.setAttribute,l.prototype.removeAttribute,l.prototype.querySelector,l.prototype.querySelectorAll,l.prototype.parentNode,l.prototype.firstChild,l.prototype.lastChild,l.prototype.nextSibling,l.prototype.previousSibling,l.prototype.firstElementChild,l.prototype.lastElementChild,l.prototype.nextElementSibling,l.prototype.previousElementSibling,l.prototype.childNodes,l.prototype.children,l.prototype.classList,l.prototype.textContent,l.prototype.innerHTML;var h=l;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(l.prototype).forEach(t=>{"activeElement"!=t&&(e.prototype[t]=l.prototype[t])}),c(e.prototype,["classList"]),h=e,Object.defineProperties(d.prototype,{localTarget:{get(){return this.event.currentTarget},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(e,t){for(var n=function(n){var o=t[n];e[o]=function(){return this.node[o].apply(this.node,arguments)}},o=0;o<t.length;o++)n(o)}(l.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),c(l.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(e,t){for(var n=function(n){var o=t[n];Object.defineProperty(e,o,{get:function(){return this.node[o]},set:function(e){this.node[o]=e},configurable:!0})},o=0;o<t.length;o++)n(o)}(l.prototype,["textContent","innerHTML"]);var f=function(e){if((e=e||document)instanceof h)return e;if(e instanceof d)return e;var t=e.__domApi;return t||(t=e instanceof Event?new d(e):new h(e),e.__domApi=t),t}},,function(e,t,n){"use strict";n(90),n(73);var o=document.createElement("template");o.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Square */\n      --lumo-space-xs: 0.25rem;\n      --lumo-space-s: 0.5rem;\n      --lumo-space-m: 1rem;\n      --lumo-space-l: 1.5rem;\n      --lumo-space-xl: 2.5rem;\n\n      /* Wide */\n      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);\n      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);\n      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);\n      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);\n      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);\n\n      /* Tall */\n      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);\n      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);\n      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);\n      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);\n      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);\n    }\n  </style>\n</custom-style>",document.head.appendChild(o.content)},,function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var o,r,a=!(window.ShadyDOM&&window.ShadyDOM.inUse);function i(e){o=(!e||!e.shimcssproperties)&&(a||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(r=window.ShadyCSS.cssBuild),window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?o=window.ShadyCSS.nativeCss:window.ShadyCSS?(i(window.ShadyCSS),window.ShadyCSS=void 0):i(window.WebComponents&&window.WebComponents.flags);var s=o},,function(e,t,n){"use strict";n(90),n(73),n(54);var o=document.createElement("template");o.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Base (background) */\n      --lumo-base-color: #FFF;\n\n      /* Tint */\n      --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);\n      --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);\n      --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);\n      --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);\n      --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);\n      --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);\n      --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);\n      --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);\n      --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);\n      --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);\n      --lumo-tint: #FFF;\n\n      /* Shade */\n      --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);\n      --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);\n      --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);\n      --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);\n      --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);\n      --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);\n      --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);\n      --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);\n      --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);\n      --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);\n      --lumo-shade: hsl(214, 35%, 15%);\n\n      /* Contrast */\n      --lumo-contrast-5pct: var(--lumo-shade-5pct);\n      --lumo-contrast-10pct: var(--lumo-shade-10pct);\n      --lumo-contrast-20pct: var(--lumo-shade-20pct);\n      --lumo-contrast-30pct: var(--lumo-shade-30pct);\n      --lumo-contrast-40pct: var(--lumo-shade-40pct);\n      --lumo-contrast-50pct: var(--lumo-shade-50pct);\n      --lumo-contrast-60pct: var(--lumo-shade-60pct);\n      --lumo-contrast-70pct: var(--lumo-shade-70pct);\n      --lumo-contrast-80pct: var(--lumo-shade-80pct);\n      --lumo-contrast-90pct: var(--lumo-shade-90pct);\n      --lumo-contrast: var(--lumo-shade);\n\n      /* Text */\n      --lumo-header-text-color: var(--lumo-contrast);\n      --lumo-body-text-color: var(--lumo-contrast-90pct);\n      --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n      --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n      --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n      /* Primary */\n      --lumo-primary-color: hsl(214, 90%, 52%);\n      --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);\n      --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);\n      --lumo-primary-text-color: var(--lumo-primary-color);\n      --lumo-primary-contrast-color: #FFF;\n\n      /* Error */\n      --lumo-error-color: hsl(3, 100%, 61%);\n      --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);\n      --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);\n      --lumo-error-text-color: hsl(3, 92%, 53%);\n      --lumo-error-contrast-color: #FFF;\n\n      /* Success */\n      --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */\n      --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);\n      --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);\n      --lumo-success-text-color: hsl(145, 100%, 32%);\n      --lumo-success-contrast-color: #FFF;\n    }\n  </style>\n</custom-style><dom-module id="lumo-color">\n  <template>\n    <style>\n      [theme~="dark"] {\n        /* Base (background) */\n        --lumo-base-color: hsl(214, 35%, 21%);\n\n        /* Tint */\n        --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);\n        --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);\n        --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);\n        --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);\n        --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);\n        --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);\n        --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);\n        --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);\n        --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);\n        --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);\n        --lumo-tint: hsl(214, 100%, 98%);\n\n        /* Shade */\n        --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);\n        --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);\n        --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);\n        --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);\n        --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);\n        --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);\n        --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);\n        --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);\n        --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);\n        --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);\n        --lumo-shade: hsl(214, 33%, 13%);\n\n        /* Contrast */\n        --lumo-contrast-5pct: var(--lumo-tint-5pct);\n        --lumo-contrast-10pct: var(--lumo-tint-10pct);\n        --lumo-contrast-20pct: var(--lumo-tint-20pct);\n        --lumo-contrast-30pct: var(--lumo-tint-30pct);\n        --lumo-contrast-40pct: var(--lumo-tint-40pct);\n        --lumo-contrast-50pct: var(--lumo-tint-50pct);\n        --lumo-contrast-60pct: var(--lumo-tint-60pct);\n        --lumo-contrast-70pct: var(--lumo-tint-70pct);\n        --lumo-contrast-80pct: var(--lumo-tint-80pct);\n        --lumo-contrast-90pct: var(--lumo-tint-90pct);\n        --lumo-contrast: var(--lumo-tint);\n\n        /* Text */\n        --lumo-header-text-color: var(--lumo-contrast);\n        --lumo-body-text-color: var(--lumo-contrast-90pct);\n        --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n        --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n        --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n        /* Primary */\n        --lumo-primary-color: hsl(214, 86%, 55%);\n        --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);\n        --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);\n        --lumo-primary-text-color: hsl(214, 100%, 70%);\n        --lumo-primary-contrast-color: #FFF;\n\n        /* Error */\n        --lumo-error-color: hsl(3, 90%, 63%);\n        --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);\n        --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);\n        --lumo-error-text-color: hsl(3, 100%, 67%);\n\n        /* Success */\n        --lumo-success-color: hsl(145, 65%, 42%);\n        --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);\n        --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);\n        --lumo-success-text-color: hsl(145, 85%, 47%);\n      }\n\n      html {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      [theme~="dark"] {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        color: var(--lumo-header-text-color);\n      }\n\n      a {\n        color: var(--lumo-primary-text-color);\n      }\n\n      blockquote {\n        color: var(--lumo-secondary-text-color);\n      }\n\n      code,\n      pre {\n        background-color: var(--lumo-contrast-10pct);\n        border-radius: var(--lumo-border-radius-m);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-color-legacy">\n  <template>\n    <style include="lumo-color">\n      :host {\n        color: var(--lumo-body-text-color) !important;\n        background-color: var(--lumo-base-color) !important;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(o.content)},,function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(25);var o=n(29),r=n(31),a=Object(o.a)(e=>class extends e{_addEventListenerToNode(e,t,n){Object(r.addListener)(e,t,n)||super._addEventListenerToNode(e,t,n)}_removeEventListenerFromNode(e,t,n){Object(r.removeListener)(e,t,n)||super._removeEventListenerFromNode(e,t,n)}})},,function(e,t,n){"use strict";n(90),n(73);var o=document.createElement("template");o.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Border radius */\n      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */\n      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */\n      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */\n      --lumo-border-radius: 0.25em; /* Deprecated */\n\n      /* Shadow */\n      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);\n      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);\n      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);\n      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);\n      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);\n\n      /* Clickable element cursor */\n      --lumo-clickable-cursor: default;\n    }\n  </style>\n</custom-style>",document.head.appendChild(o.content)},,function(e,t,n){"use strict";n.d(t,"p",(function(){return c})),n.d(t,"m",(function(){return d})),n.d(t,"j",(function(){return h})),n.d(t,"f",(function(){return f})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return b})),n.d(t,"e",(function(){return g})),n.d(t,"l",(function(){return _})),n.d(t,"n",(function(){return v})),n.d(t,"q",(function(){return y})),n.d(t,"i",(function(){return w})),n.d(t,"g",(function(){return A})),n.d(t,"o",(function(){return x})),n.d(t,"h",(function(){return C})),n.d(t,"d",(function(){return S})),n.d(t,"k",(function(){return E}));var o=n(44),r=n(67),a=n(69),i=new Set;function s(e){var t=e.textContent;if(!i.has(t)){i.add(t);var n=e.cloneNode(!0);document.head.appendChild(n)}}function l(e){return e.hasAttribute("shady-unscoped")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function c(e,t){return e?("string"==typeof e&&(e=Object(r.b)(e)),t&&f(e,t),Object(r.d)(e,o.b)):""}function d(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=Object(r.b)(e.textContent)),e.__cssRules||null}function h(e){return Boolean(e.parent)&&e.parent.type===r.e.KEYFRAMES_RULE}function f(e,t,n,o){if(e){var i=!1,s=e.type;if(o&&s===r.e.MEDIA_RULE){var l=e.selector.match(a.e);l&&(window.matchMedia(l[1]).matches||(i=!0))}s===r.e.STYLE_RULE?t(e):n&&s===r.e.KEYFRAMES_RULE?n(e):s===r.e.MIXIN_RULE&&(i=!0);var c=e.rules;if(c&&!i)for(var d,h=0,u=c.length;h<u&&(d=c[h]);h++)f(d,t,n,o)}}function u(e,t,n,o){var r=function(e,t){var n=document.createElement("style");t&&n.setAttribute("scope",t);return n.textContent=e,n}(e,t);return b(r,n,o),r}var m=null;function p(e){var t=document.createComment(" Shady DOM styles for "+e+" "),n=m?m.nextSibling:null,o=document.head;return o.insertBefore(t,n||o.firstChild),m=t,t}function b(e,t,n){t=t||document.head;var o=n&&n.nextSibling||t.firstChild;(t.insertBefore(e,o),m)?e.compareDocumentPosition(m)===Node.DOCUMENT_POSITION_PRECEDING&&(m=e):m=e}function g(e,t){for(var n=0,o=t,r=e.length;o<r;o++)if("("===e[o])n++;else if(")"===e[o]&&0==--n)return o;return-1}function _(e,t){var n=e.indexOf("var(");if(-1===n)return t(e,"","","");var o=g(e,n+3),r=e.substring(n+4,o),a=e.substring(0,n),i=_(e.substring(o+1),t),s=r.indexOf(",");return-1===s?t(a,r.trim(),"",i):t(a,r.substring(0,s).trim(),r.substring(s+1).trim(),i)}function v(e,t){o.c?e.setAttribute("class",t):window.ShadyDOM.nativeMethods.setAttribute.call(e,"class",t)}var y=window.ShadyDOM&&window.ShadyDOM.wrap||(e=>e);function w(e){var t=e.localName,n="",o="";return t?t.indexOf("-")>-1?n=t:(o=t,n=e.getAttribute&&e.getAttribute("is")||""):(n=e.is,o=e.extends),{is:n,typeExtension:o}}function A(e){for(var t=[],n=e.querySelectorAll("style"),r=0;r<n.length;r++){var a=n[r];l(a)?o.c||(s(a),a.parentNode.removeChild(a)):(t.push(a.textContent),a.parentNode.removeChild(a))}return t.join("").trim()}function x(e){for(var t=[],n="",o=0;o>=0&&o<e.length;o++)if("("===e[o]){var r=g(e,o);n+=e.slice(o,r+1),o=r}else","===e[o]?(t.push(n),n=""):n+=e[o];return n&&t.push(n),t}function C(e){if(void 0!==o.a)return o.a;if(void 0===e.__cssBuild){var t=e.getAttribute("css-build");if(t)e.__cssBuild=t;else{var n=function(e){var t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){var n=t.textContent.trim().split(":");if("css-build"===n[0])return n[1]}return""}(e);""!==n&&function(e){var t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}(e),e.__cssBuild=n}}return e.__cssBuild||""}function S(e){return""!==C(e)}function E(e=""){return!(""===e||!o.b)&&(o.c?"shadow"===e:"shady"===e)}},,function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(25);var o=n(56),r=n(19),a={},i={};function s(e,t){a[e]=i[e.toLowerCase()]=t}function l(e){return a[e]||i[e.toLowerCase()]}class c extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){var n=l(e);return n&&t?n.querySelector(t):n}return null}attributeChangedCallback(e,t,n,o){t!==n&&this.register()}get assetpath(){if(!this.__assetpath){var e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=Object(o.c)(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=Object(o.a)(t)}return this.__assetpath}register(e){if(e=e||this.id){if(r.f&&void 0!==l(e))throw s(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,s(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}var t}}c.prototype.modules=a,customElements.define("dom-module",c)},,function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return c}));n(25);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var o,r,a=/(url\()([^)]*)(\))/g,i=/(^\/)|(^#)|(^[\w-\d]*:)/;function s(e,t){if(e&&i.test(e))return e;if(void 0===o){o=!1;try{var n=new URL("b","http://a");n.pathname="c%20d",o="http://a/c%20d"===n.href}catch(e){}}return t||(t=document.baseURI||window.location.href),o?new URL(e,t).href:(r||((r=document.implementation.createHTMLDocument("temp")).base=r.createElement("base"),r.head.appendChild(r.base),r.anchor=r.createElement("a"),r.body.appendChild(r.anchor)),r.base.href=t,r.anchor.href=e,r.anchor.href||e)}function l(e,t){return e.replace(a,(function(e,n,o,r){return n+"'"+s(o.replace(/["']/g,""),t)+"'"+r}))}function c(e){return e.substring(0,e.lastIndexOf("/")+1)}},,function(e,t,n){"use strict";n(90),n(73),n(54);var o=document.createElement("template");o.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Font families */\n      --lumo-font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n      /* Font sizes */\n      --lumo-font-size-xxs: .75rem;\n      --lumo-font-size-xs: .8125rem;\n      --lumo-font-size-s: .875rem;\n      --lumo-font-size-m: 1rem;\n      --lumo-font-size-l: 1.125rem;\n      --lumo-font-size-xl: 1.375rem;\n      --lumo-font-size-xxl: 1.75rem;\n      --lumo-font-size-xxxl: 2.5rem;\n\n      /* Line heights */\n      --lumo-line-height-xs: 1.25;\n      --lumo-line-height-s: 1.375;\n      --lumo-line-height-m: 1.625;\n    }\n\n  </style>\n</custom-style><dom-module id="lumo-typography">\n  <template>\n    <style>\n      html {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */\n      :host {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      small,\n      [theme~="font-size-s"] {\n        font-size: var(--lumo-font-size-s);\n        line-height: var(--lumo-line-height-s);\n      }\n\n      [theme~="font-size-xs"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-weight: 600;\n        line-height: var(--lumo-line-height-xs);\n        margin-top: 1.25em;\n      }\n\n      h1 {\n        font-size: var(--lumo-font-size-xxxl);\n        margin-bottom: 0.75em;\n      }\n\n      h2 {\n        font-size: var(--lumo-font-size-xxl);\n        margin-bottom: 0.5em;\n      }\n\n      h3 {\n        font-size: var(--lumo-font-size-xl);\n        margin-bottom: 0.5em;\n      }\n\n      h4 {\n        font-size: var(--lumo-font-size-l);\n        margin-bottom: 0.5em;\n      }\n\n      h5 {\n        font-size: var(--lumo-font-size-m);\n        margin-bottom: 0.25em;\n      }\n\n      h6 {\n        font-size: var(--lumo-font-size-xs);\n        margin-bottom: 0;\n        text-transform: uppercase;\n        letter-spacing: 0.03em;\n      }\n\n      p,\n      blockquote {\n        margin-top: 0.5em;\n        margin-bottom: 0.75em;\n      }\n\n      a {\n        text-decoration: none;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      hr {\n        display: block;\n        align-self: stretch;\n        height: 1px;\n        border: 0;\n        padding: 0;\n        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);\n        background-color: var(--lumo-contrast-10pct);\n      }\n\n      blockquote {\n        border-left: 2px solid var(--lumo-contrast-30pct);\n      }\n\n      b,\n      strong {\n        font-weight: 600;\n      }\n\n      /* RTL specific styles */\n\n      blockquote[dir="rtl"] {\n        border-left: none;\n        border-right: 2px solid var(--lumo-contrast-30pct);\n      }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(o.content)},,,function(e,t,n){"use strict";n.d(t,"b",(function(){return v})),n.d(t,"a",(function(){return y}));n(25);var o=n(101),r=n(83),a=n(19),i=n(11),s=null;function l(){return s}l.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:l,writable:!0}});var c=Object(o.a)(l),d=Object(r.a)(c);var h=Object(o.a)(class{});class f extends h{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);for(var t=this.children=[],n=this.root.firstChild;n;n=n.nextSibling)t.push(n),n.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);var o=this.__templatizeOptions;(e&&o.instanceProps||!o.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(var t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(var n in e)this._setPendingProperty(n,e[n])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,e=>{e.model=this,n(e)});else{var o=this.__dataHost.__dataHost;o&&o._addEventListenerToNode(e,t,n)}}_showHideChildren(e){for(var t=this.children,n=0;n<t.length;n++){var o=t[n];if(Boolean(e)!=Boolean(o.__hideTemplateChildren__))if(o.nodeType===Node.TEXT_NODE)e?(o.__polymerTextContent__=o.textContent,o.textContent=""):o.textContent=o.__polymerTextContent__;else if("slot"===o.localName)if(e)o.__polymerReplaced__=document.createComment("hidden-slot"),Object(i.a)(Object(i.a)(o).parentNode).replaceChild(o.__polymerReplaced__,o);else{var r=o.__polymerReplaced__;r&&Object(i.a)(Object(i.a)(r).parentNode).replaceChild(o,r)}else o.style&&(e?(o.__polymerDisplay__=o.style.display,o.style.display="none"):o.style.display=o.__polymerDisplay__);o.__hideTemplateChildren__=e,o._showHideChildren&&o._showHideChildren(e)}}_setUnmanagedPropertyToNode(e,t,n){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(e,t,n)}get parentModel(){var e=this.__parentModel;if(!e){var t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}f.prototype.__dataHost,f.prototype.__templatizeOptions,f.prototype._methodHost,f.prototype.__templatizeOwner,f.prototype.__hostProps;var u=Object(r.a)(f);function m(e){var t=e.__dataHost;return t&&t._methodHost||t}function p(e,t,n){var o=n.mutableData?u:f;v.mixin&&(o=v.mixin(o));var r=class extends o{};return r.prototype.__templatizeOptions=n,r.prototype._bindTemplate(e),function(e,t,n,o){var r=n.hostProps||{};for(var a in o.instanceProps){delete r[a];var i=o.notifyInstanceProp;i&&e.prototype._addPropertyEffect(a,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:_(a,i)})}if(o.forwardHostProp&&t.__dataHost)for(var s in r)e.prototype._addPropertyEffect(s,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(e,t,n){e.__dataHost._setPendingPropertyOrPath("_host_"+t,n[t],!0,!0)}})}(r,e,t,n),r}function b(e,t,n){var o=n.forwardHostProp;if(o){var r=t.templatizeTemplateClass;if(!r){var a=n.mutableData?d:c;r=t.templatizeTemplateClass=class extends a{};var i=t.hostProps;for(var l in i)r.prototype._addPropertyEffect("_host_"+l,r.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:g(l,o)}),r.prototype._createNotifyingProperty("_host_"+l)}!function(e,t){s=e,Object.setPrototypeOf(e,t.prototype),new t,s=null}(e,r),e.__dataProto&&Object.assign(e.__data,e.__dataProto),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties()}}function g(e,t){return function(e,n,o){t.call(e.__templatizeOwner,n.substring("_host_".length),o[n])}}function _(e,t){return function(e,n,o){t.call(e.__templatizeOwner,e,n,o[n])}}function v(e,t,n){if(a.f&&!m(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(n=n||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;var o=(t?t.constructor:f)._parseTemplate(e),r=o.templatizeInstanceClass;r||(r=p(e,o,n),o.templatizeInstanceClass=r),b(e,o,n);var i=class extends r{};return i.prototype._methodHost=m(e),i.prototype.__dataHost=e,i.prototype.__templatizeOwner=t,i.prototype.__hostProps=o.hostProps,i=i}function y(e,t){for(var n;t;)if(n=t.__templatizeInstance){if(n.__dataHost==e)return n;t=n.__dataHost}else t=Object(i.a)(t).parentNode;return null}},,function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return d}));n(25);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var o=!1,r=[],a=[];function i(){o=!0,requestAnimationFrame((function(){o=!1,s(r),setTimeout((function(){!function(e){for(var t=0,n=e.length;t<n;t++)l(e.shift())}(a)}))}))}function s(e){for(;e.length;)l(e.shift())}function l(e){var t=e[0],n=e[1],o=e[2];try{n.apply(t,o)}catch(e){setTimeout(()=>{throw e})}}function c(e,t,n){o||i(),r.push([e,t,n])}function d(e,t,n){o||i(),a.push([e,t,n])}},,function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o,r=n(95),a=[];new MutationObserver((function(){var e=s();a.forEach(t=>{i(t,e)})})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});var i=function(e,t){t?e.setAttribute("dir",t):e.removeAttribute("dir")},s=function(){return document.documentElement.getAttribute("dir")},l=e=>class extends e{static get properties(){return{dir:{type:String,readOnly:!0}}}static finalize(){super.finalize(),o||(o=r.a.detectScrollType())}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")||(this.__subscribe(),i(this,s()))}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),"dir"===e){var o=n===s()&&-1===a.indexOf(this),r=!n&&t&&-1===a.indexOf(this),l=n!==s()&&t===s();o||r?(this.__subscribe(),i(this,s())):l&&this.__subscribe(!1)}}disconnectedCallback(){super.disconnectedCallback(),this.__subscribe(!1),this.removeAttribute("dir")}__subscribe(e=!0){e?-1===a.indexOf(this)&&a.push(this):a.indexOf(this)>-1&&a.splice(a.indexOf(this),1)}__getNormalizedScrollLeft(e){return r.a.getNormalizedScrollLeft(o,this.getAttribute("dir")||"ltr",e)}__setNormalizedScrollLeft(e,t){return r.a.setNormalizedScrollLeft(o,this.getAttribute("dir")||"ltr",e,t)}}},,function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return s}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class o{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function r(e){return function e(t,n){var o=n.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=o.trim(),t.parent){var r=t.previous?t.previous.end:t.parent.start;o=(o=(o=function(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){for(var e=arguments[1],t=6-e.length;t--;)e="0"+e;return"\\"+e}))}(o=n.substring(r,t.start-1))).replace(d.multipleSpaces," ")).substring(o.lastIndexOf(";")+1);var a=t.parsedSelector=t.selector=o.trim();t.atRule=0===a.indexOf(u),t.atRule?0===a.indexOf(f)?t.type=s.MEDIA_RULE:a.match(d.keyframesRule)&&(t.type=s.KEYFRAMES_RULE,t.keyframesName=t.selector.split(d.multipleSpaces).pop()):0===a.indexOf(h)?t.type=s.MIXIN_RULE:t.type=s.STYLE_RULE}var i=t.rules;if(i)for(var l,c=0,m=i.length;c<m&&(l=i[c]);c++)e(l,n);return t}(function(e){var t=new o;t.start=0,t.end=e.length;for(var n=t,r=0,a=e.length;r<a;r++)if(e[r]===l){n.rules||(n.rules=[]);var i=n,s=i.rules[i.rules.length-1]||null;(n=new o).start=r+1,n.parent=i,n.previous=s,i.rules.push(n)}else e[r]===c&&(n.end=r+1,n=n.parent||t);return t}(e=e.replace(d.comments,"").replace(d.port,"")),e)}function a(e,t,n=""){var o="";if(e.cssText||e.rules){var r=e.rules;if(r&&!function(e){var t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(h)}(r))for(var s,f=0,u=r.length;f<u&&(s=r[f]);f++)o=a(s,t,o);else(o=(o=t?e.cssText:function(e){return function(e){return e.replace(d.mixinApply,"").replace(d.varApply,"")}(e=i(e))}(e.cssText)).trim())&&(o="  "+o+"\n")}return o&&(e.selector&&(n+=e.selector+" "+l+"\n"),n+=o,e.selector&&(n+=c+"\n\n")),n}function i(e){return e.replace(d.customProp,"").replace(d.mixinProp,"")}var s={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},l="{",c="}",d={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},h="--",f="@media",u="@"},,function(e,t,n){"use strict";n.d(t,"g",(function(){return o})),n.d(t,"f",(function(){return r})),n.d(t,"h",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return d}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var o=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,r=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,a=/(--[\w-]+)\s*([:,;)]|$)/gi,i=/(animation\s*:)|(animation-name\s*:)/,s=/@media\s(.*)/,l=/\{[^}]*\}/g,c="(?:^|[^.#[:])",d="($|[.:[\\s>+~])"},,function(e,t,n){"use strict";n(90),n(73);var o=document.createElement("template");o.innerHTML="<custom-style>\n  <style>\n    html {\n      --lumo-size-xs: 1.625rem;\n      --lumo-size-s: 1.875rem;\n      --lumo-size-m: 2.25rem;\n      --lumo-size-l: 2.75rem;\n      --lumo-size-xl: 3.5rem;\n\n      /* Icons */\n      --lumo-icon-size-s: 1.25em;\n      --lumo-icon-size-m: 1.5em;\n      --lumo-icon-size-l: 2.25em;\n      /* For backwards compatibility */\n      --lumo-icon-size: var(--lumo-icon-size-m);\n    }\n  </style>\n</custom-style>",document.head.appendChild(o.content)},,function(e,t,n){"use strict";var o=n(161),r=n(82),a=n(44),i=new o.a;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,n){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,n){},styleSubtree(e,t){i.processStyles(),Object(r.c)(e,t)},styleElement(e){i.processStyles()},styleDocument(e){i.processStyles(),Object(r.c)(document.body,e)},getComputedStyleValue:(e,t)=>Object(r.b)(e,t),flushCustomStyles(){},nativeCss:a.b,nativeShadow:a.c,cssBuild:a.a}),window.ShadyCSS.CustomStyleInterface=i;var s=n(99),l=window.ShadyCSS.CustomStyleInterface;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class c extends HTMLElement{constructor(){super(),this._style=null,l.addCustomStyle(this)}getStyle(){if(this._style)return this._style;var e=this.querySelector("style");if(!e)return null;this._style=e;var t=e.getAttribute("include");return t&&(e.removeAttribute("include"),e.textContent=Object(s.a)(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",c)},,function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
var o=!1;window.addEventListener("keydown",()=>{o=!0},{capture:!0}),window.addEventListener("mousedown",()=>{o=!1},{capture:!0});var r=e=>class extends((e=>class extends e{static get properties(){var e={tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}};return window.ShadyDOM&&(e.tabIndex=e.tabindex),e}})(e)){static get properties(){return{autofocus:{type:Boolean},_previousTabIndex:{type:Number},disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}ready(){this.addEventListener("focusin",e=>{e.composedPath()[0]===this?this.contains(e.relatedTarget)||this._focus():-1===e.composedPath().indexOf(this.focusElement)||this.disabled||this._setFocused(!0)}),this.addEventListener("focusout",e=>this._setFocused(!1)),super.ready();var e=e=>{e.composed||e.target.dispatchEvent(new CustomEvent(e.type,{bubbles:!0,composed:!0,cancelable:!1}))};this.shadowRoot.addEventListener("focusin",e),this.shadowRoot.addEventListener("focusout",e),this.addEventListener("keydown",e=>{if(!e.defaultPrevented&&9===e.keyCode)if(e.shiftKey)this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),this._setFocused(!1),setTimeout(()=>this._isShiftTabbing=!1,0);else{var t=window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);if(t&&parseFloat(t[1])>=63&&parseFloat(t[1])<66&&this.parentNode&&this.nextSibling){var n=document.createElement("input");n.style.position="absolute",n.style.opacity="0",n.tabIndex=this.tabIndex,this.parentNode.insertBefore(n,this.nextSibling),n.focus(),n.addEventListener("focusout",()=>this.parentNode.removeChild(n))}}}),this.autofocus&&!this.disabled&&window.requestAnimationFrame(()=>{this._focus(),this._setFocused(!0),this.setAttribute("focus-ring","")})}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){e?this.setAttribute("focused",""):this.removeAttribute("focused"),e&&o?this.setAttribute("focus-ring",""):this.removeAttribute("focus-ring")}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(){this.focusElement&&!this._isShiftTabbing&&(this.focusElement.focus(),this._setFocused(!0))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement&&(this.focusElement.blur(),this._setFocused(!1))}_disabledChanged(e){this.focusElement.disabled=e,e?(this.blur(),this._previousTabIndex=this.tabindex,this.tabindex=-1,this.setAttribute("aria-disabled","true")):(void 0!==this._previousTabIndex&&(this.tabindex=this._previousTabIndex),this.removeAttribute("aria-disabled"))}_tabindexChanged(e){void 0!==e&&(this.focusElement.tabIndex=e),this.disabled&&this.tabindex&&(-1!==this.tabindex&&(this._previousTabIndex=this.tabindex),this.tabindex=e=void 0),window.ShadyDOM&&this.setProperties({tabIndex:e,tabindex:e})}click(){this.disabled||super.click()}}},,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(103),r=(n(25),function(e){var t;return t="function"==typeof e?e:r.Class(e),customElements.define(t.is,t),t});r.Class=o.a},,function(e,t,n){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/t.a={}},,function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var o=n(69);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function r(e,t){for(var n in t)null===n?e.style.removeProperty(n):e.style.setProperty(n,t[n])}function a(e,t){var n=window.getComputedStyle(e).getPropertyValue(t);return n?n.trim():""}function i(e){var t=o.f.test(e)||o.g.test(e);return o.f.lastIndex=0,o.g.lastIndex=0,t}},function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var o=n(29);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function r(e,t,n,o,r){var a;r&&(a="object"==typeof n&&null!==n)&&(o=e.__dataTemp[t]);var i=o!==n&&(o==o||n==n);return a&&i&&(e.__dataTemp[t]=n),i}var a=Object(o.a)(e=>class extends e{_shouldPropertyChange(e,t,n){return r(this,e,t,n,!0)}}),i=Object(o.a)(e=>class extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,n){return r(this,e,t,n,this.mutableData)}});a._mutablePropertyChange=r},,,function(e,t,n){"use strict";n(73),n(90);var o=document.createElement("template");o.innerHTML='<custom-style>\n  <style>\n    @font-face {\n      font-family: \'lumo-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEcAAsAAAAAIiwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2MAABd4h9To2WhlYWQAAA3kAAAAMAAAADZa/6SsaGhlYQAADhQAAAAdAAAAJAbpA35obXR4AAAONAAAABAAAACspBAAAGxvY2EAAA5EAAAAWAAAAFh55IAsbWF4cAAADpwAAAAfAAAAIAFKAXBuYW1lAAAOvAAAATEAAAIuUUJZCHBvc3QAAA/wAAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wgc1Z9N0jpNnEL6kbRVS6HA2hQYGh9TGR1CbCqa2rXrWOkQE/sHNJgmtZvoVNZqE1B1DNHxzTQxCehUTYiJTQyENui0qSLezr3PduyQfgmRWOfde8+9551z7rnn/O4jLoJ/bRP0UaKQMLFJjpBAvphLZC3Dk0ok7WBzR2/upJs7Ryw/nfFbln/uuN/apCvwrKLrSvUqRufbm5pn0fs0w4gYxnGVP6qHnO4bWiDQGQgwtS6lm3lB3QoX1M2vwEmuzirF39y+Es2+DJ8d1pkyqBIqoze3D1+Zz4DrFoazxI8dWwMrDlZ2DMqQAR9AROsJU+2cmlTPazTco52F1xTa2a2+K8vvq92dVHmtLoPeQX/AZPRYGthDYOeZjBjKoFsVGulR3lWU95WeCK44qHU7MhWUGUKZDT3oKUcG2GWuh+EDDfUYA/jhAhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgRW95uEtpJ1Vfn9XiLriRBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKiflqHRSoWZc3m11Wa/fJdFgXD4sSYfleJBKd8GMz7J8dZn/cGRCcKGDnA2Ge3fKzcvlnTDNthGWLXzX/WaXtUAmRgeLlHSr30r0G9UTXMb0AtmwzOoy73fkSlHZkduw/TYuU9cAD4YutPoxTTsA3797wVr4Z/1NC5zARHr4vtxJjxIfiZMhMkbWk+14BnJZKwqGZwDfswLyxWDSg11rFLJF7Nopxjd1h1/QOT+oezgfu3Yq+Hk+duf5x+40o1GTkaIgikK/IEnC6aYxCUBaZJSN4XTYFjU/YMNIKqJwhDGOCCI8FDXnXmXjtGhGJyShqjAOnBOkW2JG9S7GgYeMWAU5JzhnWmBOaOM+CKEPoqSfFDC2Unq+DLlUgUVUFFLZGJg6jtlojsdsa8kPObPuJdi5dnBdBsLJMGTWDa4t2JvtwuPo9s+Y86suv/W33QG1rAaOAUV+vx4K6f2D04PVKlC7WLSrZzAi45ZV6lIC7WoXqmRyvUqoVwrzUoVsIjeTXWQv+RH5GTlBXiB/In8ln0IbBCAFOajAJrgZYyOHWqOfUe/aHjI12R6OQo1jCgt215l+4f6XPb+0MNou0V+43n2F77tSfRb24d7zitgnKmvYHs69zugaPvBwv6ioXkb2LdL65Atw51uLkXlu1bhMMRcXSPcYoqKIRlh34lQP8/5JbuUFye4vxD6/6MxFF11C0uVLr9Ulgw44tS3pMViNLUExbycFgLIct+QDMibRimx1ydUz8FXZiuOIDBOMVX2nUZc+huNE5XUJ81uiJoiabwqaVF0uacKbau/pl4R2VW0XXlJra6boVrYG646TF5NYzwy4vjENVrDlcNpZPl8DH6XX8XWCx0mvWVZY6KFLrvsY66/zPict5FnxaNUR/juvZCM3TvD60E2W1tZizbXTPDuabcm0nbbzpWKpmA1ayBQ8giedLUM+A0kNjBjQjmuYz7YrgIXYvmF63ZLBwSXrpn9Tb9wwdd/U1H0PMQK3XcO8ul3WT7PyPPdpy0TemKxNRcJNauiXJnnUDpUppQWs4SnUIy0EESGYqJYQLGHxzaGWwVIaS6Y7mQFM8ZjYDQ3axjf61SWjU33JwOZA1pwaG1L9mzf71aHRdX1JHw6Fp0aXhNwbqyeGNg4NbdzGCBxoz4ZXjy4Nu69Zr6sDY6vMrLU5nA1P8JkbdWXJ6ERfMryvNh1JfQ9+T4dIhGvK9w3dxjBBzatsQ/MlOHVIDnYpDz6odAXlQ01t2Pa5Iafd8MMpxAeDKP0C6CjgVLT5osB6icUx01lWjXxzT/GyRF2welEM5Z/7jG3VjQ1SrNn5IbyzOG5dobB3/QHxyZvsXcoz8IoEwS7plCg+zxHQk424q9BfEpkESJbFHQusDBSWFkuBkoPO0kLKwRVYjxGXlHTcTDQMJ/H6TX9afkO7mnraTO1feTnZAXLu4cp7HAXMmNG1yeFk9TgS/NHhZR/4QoBTr/ZB+6hCgyl15Nq1UbN6nE1/ZnP1U2cizCBpvs8cJQZJ4LkYx5N/yZPAUZNQQ0V4f3BQllWrK3YRzl30dOT6RVn2upNur6woSa8CqpdT/aKnBM4o3jNur9d9xqtUT6veBEt9Ca9at+ERzEEhUkR8sa5mQ4aVvJoVeEA8zI4ei5mULXFGyU7z/6TAeYLVcpzSWZY8PYYF5yrTV60sT0+XV141vX++Wf16V2bFeGVPZXxFpkvyeKTWLlzfW0mnKxsY6Y3294/0998SCfX1blm5pbcvFGlq/r07MRAMhYIDiW5JFKWW3vdrEpCsZSJG+om7Zu/PSScZJhNkLbmW5Wsr12pWqW5zKtlwRS4bFOxUw17mCzy6lskCDl1WYOGWDYrADrMA7BDDweWWNd5koiJnR1dz+ytLP2q0SqPB1lnK2ccB7RYe4FSoPks3iB3t4txTSHctb2sy1ivk0pvHuCNm6w1f6wxv3+OCgN78LqdQnUVh7R0oTAp0zOf2rbW770Vu5C2dIyGdTnHo8zSji7dppj0USoVCz+lhRMTh53Teq9VbGfbjuSbAooSdXayY4PYHg374C6f7gl1B/DXuJ4/QXxOBdJFJspFsI3egpoWUUCjlTIFnNYNl+ZyZKmBeYKGHkD1QyDlhaKbKwKcIJqJ4TLJ2OmdY/JWXae4DdGBw8HZ7eXcgFF2zr2SoalDry5iKqoa0Puhe3hPQ2s3elTYM+MI+n3rK0KgL7/La3GeMLt6m7u912vGnvtORiIa0qBmhqVi+XW9XNBmqb8eVgKzIHfGI5bNoG7X0UCzeISmqIcO/nY8FH7U8avX9fx/ST+hx0sezPw9Qy8Mum3GWf2N4Uy/yIYGVBXbJHWIZp7dfTcptdMTr9Qmq7DaiK/ukqCL4kt4RUfS5XPnMtmT22/mQFqF7emSqtrlu8SVElxDRJrZODkpuwe0VfTfjdEp1f7A7v+fozNBXUJ/6WTuK2TtFlpFVZAZ3LcFvUi1Z2p2YT+EMAkGJVStOzLTAPg4IqWIAlzRSjOBkl2zxj3TKycpzT/MnvX3uaSMWM+gU0rkXjohhefVRMaps3/kLMSKv23lT23uxQrkQjyOJleMDsdhAnD6ZGElWZ5MjCXzCE/hkWX+WF4knzGhVOyK2eQZekV3eyo0zL8kuYWCnDCvjjhAkcTPOBDXVdoav3HVcFnQjLvtV9S2p0zA6JegPwMQxt+yFb3ll9zGlq/5dRKb3cEyQYoaNYpharJ7xCB7AWxsLY3jjZXY0XsZj0Wjwc9I6PP/dKABnCZaqHpaZEACxk4ZeLZSKNgZABl+lYQX1sJQOSX3n6r410evcoud5JeAGUXVP9H1tZOKejTq4Ono0z0erro1FrnOpohva1d/hTdtVsQdKN5W9RlT3NjD0nznyKNTgKAMfWNWcyodV0IGLPIHOF0o4JyqufaK4z6WIIzuGh3d8c8cwQg8ER+OVxyrjdm8vNuhts4LoOihGxIMuUdgzwiYN7xhh1+oZnJNuTG7gQZvu4XWZ9GAZZjGEubwePqYhtKDTH+9VQkl17/iGybsnJ+8+sKtyPrcll9ty65Zsdst/9iqpEKh7M5VdBxh3csOdNc6tW3I1uyM1PzOXegSOrLFsFNI2O27M+TF2ApnN9MUv5ud6LjxIvEQnHRzxIu4IsA9MLFkJn2tcZoZ7ON7dXe7ujrc8HrusPKamlqXwd77lQUuLpilau4PUMapueBb7irU4RoUXEYXuVuIGlRGmOp+2lNkaRPVziOqmlaZvaqG4dFgSj0jxEJWrv12IUWntmw+rfQarRE0Aph4ocI6nlUlGqs+u3/+T/ethW62PpHp2eHbZstnh/wOO95yDAHicY2BkYGAA4pmJ6QHx/DZfGbiZXwBFGGpUNzQi6P+vmacy3QJyORiYQKIANoULVXicY2BkYGAO+p8FJF8wAAHzVAZGBlSgDQBW9gNvAAAAeJxjYGBgYH4xNDAAzwQmjwAAAAAATgCaAOgBCgEsAU4BcAGaAcQB7gIaApwC6ASaBLwE1gTyBQ4FKgV6BdAF/gZEBmYGtgcYB5AIGAhSCGoI/glGCb4J2goECjwKggq4CvALUAuWC7x4nGNgZGBg0GZMYRBlAAEmIOYCQgaG/2A+AwAYlAG8AHicbZE9TsMwGIbf9A/RSggEYmHxAgtq+jN2ZGj3Dt3T1GlTOXHkuBW9AyfgEByCgTNwCA7BW/NJlVBtyd/jx+8XKwmAa3whwnFE6Ib1OBq44O6Pm6Qb4Rb5QbiNHh6FO/RD4S6eMRHu4RaaT4halzR3eBVu4Apvwk36d+EW+UO4jXt8Cnfov4W7WOBHuIen6MXsCtvPU1vWc73emcSdxIkW2tW5LdUoHp7kTJfaJV6v1PKg6v167H2mMmcLNbWl18ZYVTm71amPN95Xk8EgEx+ntoDBDgUs+siRspaoMef7rukNEriziXNuwS7Hmoe9wggxv+e55IzJMqQTeNYV00scuNbY8+YxrUfGfcaMZb/CNPQe04bT0lThbEuT0sfYhK6K/23Amf3Lx+H24hcj4GScAAAAeJxtjtlugzAQRbkJUEJIuu/7vqR8lGNPAcWx0YAb5e/LklR96EgenSufGY038PqKvf9rhgGG8BEgxA4ijBBjjAQTTLGLPezjAIc4wjFOcIoznOMCl7jCNW5wizvc4wGPeMIzXvCKN7zjAzN8eonQRWZSSaYmjvug6ase98hFltexMJmmVNmV2WBvdNgZUc+ujAWzXW3UDnu1w43asStHc8GpzAXX/py0jqTQZJTgkcxJLpaCF0lD32xNt+43tAsn29Dft02uDKS2cjGUNgsk26qK2lFthYoU27INPqmiDqg5goe0pqR5qSoqMdek/CUZFywL46rEsiImleqiqoMyt4baXlu/1GLdNFf5zbcNmdr1YUWCZe47o+zUmb/DoStbw3cVsef9ALjjiPQA) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --lumo-icons-align-center: "\\ea01";\n      --lumo-icons-align-left: "\\ea02";\n      --lumo-icons-align-right: "\\ea03";\n      --lumo-icons-angle-down: "\\ea04";\n      --lumo-icons-angle-left: "\\ea05";\n      --lumo-icons-angle-right: "\\ea06";\n      --lumo-icons-angle-up: "\\ea07";\n      --lumo-icons-arrow-down: "\\ea08";\n      --lumo-icons-arrow-left: "\\ea09";\n      --lumo-icons-arrow-right: "\\ea0a";\n      --lumo-icons-arrow-up: "\\ea0b";\n      --lumo-icons-bar-chart: "\\ea0c";\n      --lumo-icons-bell: "\\ea0d";\n      --lumo-icons-calendar: "\\ea0e";\n      --lumo-icons-checkmark: "\\ea0f";\n      --lumo-icons-chevron-down: "\\ea10";\n      --lumo-icons-chevron-left: "\\ea11";\n      --lumo-icons-chevron-right: "\\ea12";\n      --lumo-icons-chevron-up: "\\ea13";\n      --lumo-icons-clock: "\\ea14";\n      --lumo-icons-cog: "\\ea15";\n      --lumo-icons-cross: "\\ea16";\n      --lumo-icons-download: "\\ea17";\n      --lumo-icons-dropdown: "\\ea18";\n      --lumo-icons-edit: "\\ea19";\n      --lumo-icons-error: "\\ea1a";\n      --lumo-icons-eye: "\\ea1b";\n      --lumo-icons-eye-disabled: "\\ea1c";\n      --lumo-icons-menu: "\\ea1d";\n      --lumo-icons-minus: "\\ea1e";\n      --lumo-icons-ordered-list: "\\ea1f";\n      --lumo-icons-phone: "\\ea20";\n      --lumo-icons-photo: "\\ea21";\n      --lumo-icons-play: "\\ea22";\n      --lumo-icons-plus: "\\ea23";\n      --lumo-icons-redo: "\\ea24";\n      --lumo-icons-reload: "\\ea25";\n      --lumo-icons-search: "\\ea26";\n      --lumo-icons-undo: "\\ea27";\n      --lumo-icons-unordered-list: "\\ea28";\n      --lumo-icons-upload: "\\ea29";\n      --lumo-icons-user: "\\ea2a";\n    }\n  </style>\n</custom-style>',document.head.appendChild(o.content)},,function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));var o=n(15),r=n(27),a=n(65),i=n(139),s=n(13),l=n(9),c=e=>class extends e{static get properties(){return{resizable:{type:Boolean,value:function(){if("vaadin-grid-column-group"!==this.localName){var e=this.parentNode;return e&&"vaadin-grid-column-group"===e.localName&&e.resizable||!1}}},_headerTemplate:{type:Object},_footerTemplate:{type:Object},frozen:{type:Boolean,value:!1},hidden:{type:Boolean},header:{type:String},textAlign:{type:String},_lastFrozen:{type:Boolean,value:!1},_order:Number,_reorderStatus:Boolean,_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,headerRenderer:Function,footerRenderer:Function}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells.*)","_frozenChanged(frozen, _headerCell, _footerCell, _cells.*)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*)","_pathOrHeaderChanged(path, header, _headerCell, _footerCell, _cells.*, renderer, headerRenderer, _bodyTemplate, _headerTemplate)","_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells.*)","_lastFrozenChanged(_lastFrozen)","_setBodyTemplateOrRenderer(_bodyTemplate, renderer, _cells, _cells.*)","_setHeaderTemplateOrRenderer(_headerTemplate, headerRenderer, _headerCell)","_setFooterTemplateOrRenderer(_footerTemplate, footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)"]}connectedCallback(){super.connectedCallback(),this._bodyTemplate&&(this._bodyTemplate.templatizer._grid=this._grid),this._headerTemplate&&(this._headerTemplate.templatizer._grid=this._grid),this._footerTemplate&&(this._footerTemplate.templatizer._grid=this._grid),this._templateObserver.flush(),this._bodyTemplate||this._templateObserver.callback(),requestAnimationFrame(()=>{this._allCells.forEach(e=>{e._content.parentNode||this._grid&&this._grid.appendChild(e._content)})})}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame(()=>{this._findHostGrid()||this._allCells.forEach(e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)})}),this._gridValue=void 0}_findHostGrid(){for(var e=this;e&&!/^vaadin.*grid(-pro)?$/.test(e.localName);)e=e.assignedSlot?e.assignedSlot.parentNode:e.parentNode;return e||void 0}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(e=>e)}constructor(){super(),this._templateObserver=new r.a(this,e=>{this._headerTemplate=this._prepareHeaderTemplate(),this._footerTemplate=this._prepareFooterTemplate(),this._bodyTemplate=this._prepareBodyTemplate()})}_prepareHeaderTemplate(){return this._prepareTemplatizer(this._findTemplate(!0)||null,{})}_prepareFooterTemplate(){return this._prepareTemplatizer(this._findTemplate(!1,!0)||null,{})}_prepareBodyTemplate(){return this._prepareTemplatizer(this._findTemplate()||null)}_prepareTemplatizer(e,t){if(e&&!e.templatizer){var n=new i.a;n._grid=this._grid,n.dataHost=this.dataHost,n._instanceProps=t||n._instanceProps,n.template=e,e.templatizer=n}return e}_renderHeaderAndFooter(){this.headerRenderer&&this._headerCell&&this.__runRenderer(this.headerRenderer,this._headerCell),this.footerRenderer&&this._footerCell&&this.__runRenderer(this.footerRenderer,this._footerCell)}__runRenderer(e,t,n){var o=[t._content,this];n&&n.item&&o.push(n),e.apply(this,o)}__setColumnTemplateOrRenderer(e,t,n){if(!this.hidden){if(e&&t)throw new Error("You should only use either a renderer or a template");n.forEach(n=>{var o=this._grid.__getRowModel(n.parentElement);if(t)n._renderer=t,(o.item||t===this.headerRenderer||t===this.footerRenderer)&&this.__runRenderer(t,n,o);else if(n._template!==e){n._template=e,n._content.innerHTML="",e.templatizer._grid=e.templatizer._grid||this._grid;var r=e.templatizer.createInstance();n._content.appendChild(r.root),n._instance=r,o.item&&n._instance.setProperties(o)}})}}_setBodyTemplateOrRenderer(e,t,n,o){(e||t)&&n&&this.__setColumnTemplateOrRenderer(e,t,n)}_setHeaderTemplateOrRenderer(e,t,n){(e||t)&&n&&this.__setColumnTemplateOrRenderer(e,t,[n])}_setFooterTemplateOrRenderer(e,t,n){(e||t)&&n&&(this.__setColumnTemplateOrRenderer(e,t,[n]),this._grid.__updateHeaderFooterRowVisibility(n.parentElement))}_selectFirstTemplate(e=!1,t=!1){return r.a.getFlattenedNodes(this).filter(n=>"template"===n.localName&&n.classList.contains("header")===e&&n.classList.contains("footer")===t)[0]}_findTemplate(e,t){var n=this._selectFirstTemplate(e,t);return n&&this.dataHost&&(n._rootDataHost=this.dataHost._rootDataHost||this.dataHost),n}_flexGrowChanged(e,t,n,o){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach(t=>t.style.flexGrow=e)}_orderChanged(e,t,n,o){this._allCells.forEach(t=>t.style.order=e)}_widthChanged(e,t,n,o){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach(t=>t.style.width=e),this._grid&&this._grid.__forceReflow&&this._grid.__forceReflow()}_frozenChanged(e,t,n,o){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",e),this._allCells.forEach(t=>this._toggleAttribute("frozen",e,t)),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(e){this._allCells.forEach(t=>this._toggleAttribute("last-frozen",e,t)),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=e)}_pathOrHeaderChanged(e,t,n,o,r,a,i,s,l){var c=void 0!==t;if(!i&&!l&&c&&n&&this.__setTextContent(n._content,t),e&&r.value){if(!a&&!s){this.__setColumnTemplateOrRenderer(void 0,(t,n,{item:o})=>this.__setTextContent(t,this.get(e,o)),r.value)}i||l||c||!n||null===t||this.__setTextContent(n._content,this._generateHeader(e))}n&&this._grid.__updateHeaderFooterRowVisibility(n.parentElement)}__setTextContent(e,t){e.textContent!==t&&(e.textContent=t)}_generateHeader(e){return e.substr(e.lastIndexOf(".")+1).replace(/([A-Z])/g,"-$1").toLowerCase().replace(/-/g," ").replace(/^./,e=>e.toUpperCase())}_toggleAttribute(e,t,n){n.hasAttribute(e)===!t&&(t?n.setAttribute(e,""):n.removeAttribute(e))}_reorderStatusChanged(e,t,n,o){this._allCells.forEach(t=>t.setAttribute("reorder-status",e))}_resizableChanged(e,t){void 0!==e&&void 0!==t&&t&&[t].concat(this._emptyCells).forEach(t=>{if(t){var n=t.querySelector('[part~="resize-handle"]');if(n&&t.removeChild(n),e){var o=document.createElement("div");o.setAttribute("part","resize-handle"),t.appendChild(o)}}})}_textAlignChanged(e,t,n,o){var r;void 0!==e&&(-1!==["start","end","center"].indexOf(e)?("ltr"===getComputedStyle(this._grid).direction?"start"===e?r="left":"end"===e&&(r="right"):"start"===e?r="right":"end"===e&&(r="left"),this._allCells.forEach(t=>{t._content.style.textAlign=e,getComputedStyle(t._content).textAlign!==e&&(t._content.style.textAlign=r)})):console.warn('textAlign can only be set as "start", "end" or "center"'))}_hiddenChanged(e,t,n,o){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",e),!!e!=!!this._previousHidden&&this._grid&&(!0===e&&this._allCells.forEach(e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)}),this._grid._debouncerHiddenChanged=s.a.debounce(this._grid._debouncerHiddenChanged,l.a,()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)}),this._grid._updateLastFrozen&&this._grid._updateLastFrozen(),this._grid.notifyResize&&this._grid.notifyResize(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=e}};class d extends(c(Object(a.a)(o.a))){static get is(){return"vaadin-grid-column"}static get properties(){return{width:{type:String,value:"100px"},flexGrow:{type:Number,value:1},renderer:Function,path:{type:String},autoWidth:{type:Boolean,value:!1},_bodyTemplate:{type:Object},_cells:Array}}}customElements.define(d.is,d)},,function(e,t,n){"use strict";class o extends HTMLElement{static get version(){return"1.6.1"}}customElements.define("vaadin-lumo-styles",o)},,,function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));n(25);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var o={},r=/-[a-z]/g,a=/([A-Z])/g;function i(e){return o[e]||(o[e]=e.indexOf("-")<0?e:e.replace(r,e=>e[1].toUpperCase()))}function s(e){return o[e]||(o[e]=e.replace(a,"-$1").toLowerCase())}},,function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));
/**
@license
Copyright (c) 2020 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class o{static detectScrollType(){var e=document.createElement("div");e.textContent="ABCD",e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e);var t="reverse";return e.scrollLeft>0?t="default":(e.scrollLeft=2,e.scrollLeft<2&&(t="negative")),document.body.removeChild(e),t}static getNormalizedScrollLeft(e,t,n){var{scrollLeft:o}=n;if("rtl"!==t||!e)return o;switch(e){case"negative":return n.scrollWidth-n.clientWidth+o;case"reverse":return n.scrollWidth-n.clientWidth-o}return o}static setNormalizedScrollLeft(e,t,n,o){if("rtl"===t&&e)switch(e){case"negative":n.scrollLeft=n.clientWidth-n.scrollWidth+o;break;case"reverse":n.scrollLeft=n.scrollWidth-n.clientWidth-o;break;default:n.scrollLeft=o}else n.scrollLeft=o}}},,function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));n(25);var o=n(19),r=n(29),a=n(99),i=n(56),s=n(54),l=n(101);var c=[];var d=n(137);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var h=Object(r.a)(e=>{var t=Object(d.a)(e);function n(e){var t=Object.getPrototypeOf(e);return t.prototype instanceof r?t:null}function o(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){var t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){var n=e.properties;n&&(t=function(e){var t={};for(var n in e){var o=e[n];t[n]="function"==typeof o?{type:o}:o}return t}(n))}e.__ownProperties=t}return e.__ownProperties}class r extends t{static get observedAttributes(){if(!this.hasOwnProperty("__observedAttributes")){t=this.prototype,c.push(t);var e=this._properties;this.__observedAttributes=e?Object.keys(e).map(e=>this.attributeNameForProperty(e)):[]}var t;return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){var e=n(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){var e=o(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){var e=n(this);this.__properties=Object.assign({},e&&e._properties,o(this))}return this.__properties}static typeForProperty(e){var t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r}),f=n(11),u=window.ShadyCSS&&window.ShadyCSS.cssBuild,m=Object(r.a)(e=>{var t=h(Object(l.a)(e));return class extends t{static get polymerElementVersion(){return"3.2.0"}static _finalizeClass(){super._finalizeClass();var e,t=((e=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",e))||(e.__ownObservers=e.hasOwnProperty(JSCompiler_renameProperty("observers",e))?e.observers:null),e.__ownObservers);t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){var e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):o.b||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(var t in e)n=this.prototype,o=t,r=e[t],a=e,r.computed&&(r.readOnly=!0),r.computed&&(n._hasReadOnlyEffect(o)?console.warn(`Cannot redefine computed property '${o}'.`):n._createComputedProperty(o,r.computed,a)),r.readOnly&&!n._hasReadOnlyEffect(o)?n._createReadOnlyProperty(o,!r.computed):!1===r.readOnly&&n._hasReadOnlyEffect(o)&&console.warn(`Cannot make readOnly property '${o}' non-readOnly.`),r.reflectToAttribute&&!n._hasReflectEffect(o)?n._createReflectedProperty(o):!1===r.reflectToAttribute&&n._hasReflectEffect(o)&&console.warn(`Cannot make reflected property '${o}' non-reflected.`),r.notify&&!n._hasNotifyEffect(o)?n._createNotifyingProperty(o):!1===r.notify&&n._hasNotifyEffect(o)&&console.warn(`Cannot make notify property '${o}' non-notify.`),r.observer&&n._createPropertyObserver(o,r.observer,a[r.observer]),n._addPropertyToAttributeMap(o);var n,o,r,a}static createObservers(e,t){for(var n=this.prototype,o=0;o<e.length;o++)n._createMethodObserver(e[o],t)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(e){var t=null;if(e&&(!o.f||o.a)&&(t=s.a.import(e,"template"),o.f&&!t))throw new Error("strictTemplatePolicy: expecting dom-module or null template for "+e);return t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){var e=this.importMeta;if(e)this._importPath=Object(i.a)(e.url);else{var t=s.a.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=o.d,this.importPath=this.constructor.importPath;var e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;var t=e._properties;for(var n in t){var o=t[n];"value"in o&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[n]=o)}}return e.__propertyDefaults}(this.constructor);if(e)for(var t in e){var n=e[t];if(!this.hasOwnProperty(t)){var r="function"==typeof n.value?n.value.call(this):n.value;this._hasAccessor(t)?this._setPendingProperty(t,r,!0):this[t]=r}}}static _processStyleText(e,t){return Object(i.b)(e,t)}static _finalizeTemplate(e){var t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;var n=this.importPath;!function(e,t,n,o){if(!u){for(var r=t.content.querySelectorAll("style"),i=Object(a.c)(t),s=Object(a.b)(n),l=t.content.firstElementChild,c=0;c<s.length;c++){var d=s[c];d.textContent=e._processStyleText(d.textContent,o),t.content.insertBefore(d,l)}for(var h=0,f=0;f<i.length;f++){var m=i[f],p=r[h];p!==m?(m=m.cloneNode(!0),p.parentNode.insertBefore(m,p)):h++,m.textContent=e._processStyleText(m.textContent,o)}}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,n)}(this,t,e,n?Object(i.c)(n):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){var t=Object(f.a)(this);if(t.attachShadow)return e?(t.shadowRoot||t.attachShadow({mode:"open"}),t.shadowRoot.appendChild(e),o.g&&window.ShadyDOM&&ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=Object(i.c)(this.importPath)),Object(i.c)(e,t)}static _parseTemplateContent(e,t,n){return t.dynamicFns=t.dynamicFns||this._properties,super._parseTemplateContent(e,t,n)}static _addTemplatePropertyEffect(e,t,n){return o.b&&!(t in this._properties)&&console.warn(`Property '${t}' used in template but not declared in 'properties'; attribute will not be observed.`),super._addTemplatePropertyEffect(e,t,n)}}})},,function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return f}));var o=n(54),r=n(56);function a(e){return o.a.import(e)}function i(e){var t=e.body?e.body:e,n=Object(r.b)(t.textContent,e.baseURI),o=document.createElement("style");return o.textContent=n,o}function s(e){for(var t=e.trim().split(/\s+/),n=[],o=0;o<t.length;o++)n.push(...l(t[o]));return n}function l(e){var t=a(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){var n=[];n.push(...h(t));var o=t.querySelector("template");o&&n.push(...c(o,t.assetpath)),t._styles=n}return t._styles}function c(e,t){if(!e._styles){for(var n=[],o=e.content.querySelectorAll("style"),a=0;a<o.length;a++){var i=o[a],l=i.getAttribute("include");l&&n.push(...s(l).filter((function(e,t,n){return n.indexOf(e)===t}))),t&&(i.textContent=Object(r.b)(i.textContent,t)),n.push(i)}e._styles=n}return e._styles}function d(e){var t=a(e);return t?h(t):[]}function h(e){for(var t=[],n=e.querySelectorAll("link[rel=import][type~=css]"),o=0;o<n.length;o++){var r=n[o];if(r.import){var a=r.import,s=r.hasAttribute("shady-unscoped");if(s&&!a._unscopedStyle){var l=i(a);l.setAttribute("shady-unscoped",""),a._unscopedStyle=l}else a._style||(a._style=i(a));t.push(s?a._unscopedStyle:a._style)}}return t}function f(e){for(var t=e.trim().split(/\s+/),n="",o=0;o<t.length;o++)n+=u(t[o]);return n}function u(e){var t=a(e);if(t&&void 0===t._cssText){var n=m(t),o=t.querySelector("template");o&&(n+=function(e,t){for(var n="",o=c(e,t),r=0;r<o.length;r++){var a=o[r];a.parentNode&&a.parentNode.removeChild(a),n+=a.textContent}return n}(o,t.assetpath)),t._cssText=n||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}function m(e){for(var t="",n=h(e),o=0;o<n.length;o++)t+=n[o].textContent;return t}},,function(e,t,n){"use strict";n.d(t,"a",(function(){return G}));n(25);var o=n(11),r=n(29),a=n(17),i=n(93),s=n(136),l=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),c={"dom-if":!0,"dom-repeat":!0};function d(e){var t=e.getAttribute("is");if(t&&c[t]){var n=e;for(n.removeAttribute("is"),e=n.ownerDocument.createElement(t),n.parentNode.replaceChild(e,n),e.appendChild(n);n.attributes.length;)e.setAttribute(n.attributes[0].name,n.attributes[0].value),n.removeAttribute(n.attributes[0].name)}return e}function h(e,t){var n=t.parentInfo&&h(e,t.parentInfo);if(!n)return e;l.currentNode=n;for(var o=l.firstChild(),r=0;o;o=l.nextSibling())if(t.parentIndex===r++)return o}function f(e,t,n,o){o.id&&(t[o.id]=n)}function u(e,t,n){if(n.events&&n.events.length)for(var o,r=0,a=n.events;r<a.length&&(o=a[r]);r++)e._addMethodEventListenerToNode(t,o.name,o.value,e)}function m(e,t,n){n.templateInfo&&(t._templateInfo=n.templateInfo)}var p=Object(r.a)(e=>class extends e{static _parseTemplate(e,t){if(!e._templateInfo){var n=e._templateInfo={};n.nodeInfoList=[],n.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,n,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,n){return this._parseTemplateNode(e.content,t,n)}static _parseTemplateNode(e,t,n){var o,r=e;return"template"!=r.localName||r.hasAttribute("preserve-content")?"slot"===r.localName&&(t.hasInsertionPoint=!0):o=this._parseTemplateNestedTemplate(r,t,n)||o,l.currentNode=r,l.firstChild()&&(o=this._parseTemplateChildNodes(r,t,n)||o),r.hasAttributes&&r.hasAttributes()&&(o=this._parseTemplateNodeAttributes(r,t,n)||o),o}static _parseTemplateChildNodes(e,t,n){if("script"!==e.localName&&"style"!==e.localName){l.currentNode=e;for(var o,r=l.firstChild(),a=0;r;r=o){if("template"==r.localName&&(r=d(r)),l.currentNode=r,o=l.nextSibling(),r.nodeType===Node.TEXT_NODE){for(var i=o;i&&i.nodeType===Node.TEXT_NODE;)r.textContent+=i.textContent,o=l.nextSibling(),e.removeChild(i),i=o;if(t.stripWhiteSpace&&!r.textContent.trim()){e.removeChild(r);continue}}var s={parentIndex:a,parentInfo:n};this._parseTemplateNode(r,t,s)&&(s.infoIndex=t.nodeInfoList.push(s)-1),l.currentNode=r,l.parentNode()&&a++}}}static _parseTemplateNestedTemplate(e,t,n){var o=this._parseTemplate(e,t);return(o.content=e.content.ownerDocument.createDocumentFragment()).appendChild(e.content),n.templateInfo=o,!0}static _parseTemplateNodeAttributes(e,t,n){for(var o,r=!1,a=Array.from(e.attributes),i=a.length-1;o=a[i];i--)r=this._parseTemplateNodeAttribute(e,t,n,o.name,o.value)||r;return r}static _parseTemplateNodeAttribute(e,t,n,o,r){return"on-"===o.slice(0,3)?(e.removeAttribute(o),n.events=n.events||[],n.events.push({name:o.slice(3),value:r}),!0):"id"===o&&(n.id=r,!0)}static _contentForTemplate(e){var t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);var t=this.constructor._parseTemplate(e),n=t.nodeInfoList,o=t.content||e.content,r=document.importNode(o,!0);r.__noInsertionPoint=!t.hasInsertionPoint;var a=r.nodeList=new Array(n.length);r.$={};for(var i,s=0,l=n.length;s<l&&(i=n[s]);s++){var c=a[s]=h(r,i);f(0,r.$,c,i),m(0,c,i),u(this,c,i)}return r=r}_addMethodEventListenerToNode(e,t,n,o){var r=function(e,t,n){return e=e._methodHost||e,function(t){e[n]?e[n](t,t.detail):console.warn("listener method `"+n+"` not defined")}}(o=o||e,0,n);return this._addEventListenerToNode(e,t,r),r}_addEventListenerToNode(e,t,n){e.addEventListener(t,n)}_removeEventListenerFromNode(e,t,n){e.removeEventListener(t,n)}}),b=n(19),g=0,_={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},v=/[A-Z]/;function y(e,t){var n=e[t];if(n){if(!e.hasOwnProperty(t))for(var o in n=e[t]=Object.create(e[t]))for(var r=n[o],a=n[o]=Array(r.length),i=0;i<r.length;i++)a[i]=r[i]}else n=e[t]={};return n}function w(e,t,n,o,r,a){if(t){var i=!1,s=g++;for(var l in n)A(e,t,s,l,n,o,r,a)&&(i=!0);return i}return!1}function A(e,t,n,o,r,i,s,l){var c=!1,d=t[s?Object(a.g)(o):o];if(d)for(var h,f=0,u=d.length;f<u&&(h=d[f]);f++)h.info&&h.info.lastRun===n||s&&!x(o,h.trigger)||(h.info&&(h.info.lastRun=n),h.fn(e,o,r,i,h.info,s,l),c=!0);return c}function x(e,t){if(t){var n=t.name;return n==e||!(!t.structured||!Object(a.b)(n,e))||!(!t.wildcard||!Object(a.c)(n,e))}return!0}function C(e,t,n,o,r){var a="string"==typeof r.method?e[r.method]:r.method,i=r.property;a?a.call(e,e.__data[i],o[i]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function S(e,t,n){var o=Object(a.g)(t);return o!==t&&(E(e,Object(i.a)(o)+"-changed",n[t],t),!0)}function E(e,t,n,r){var a={value:n,queueProperty:!0};r&&(a.path=r),Object(o.a)(e).dispatchEvent(new CustomEvent(t,{detail:a}))}function k(e,t,n,o,r,i){var s=(i?Object(a.g)(t):t)!=t?t:null,l=s?Object(a.a)(e,s):e.__data[t];s&&void 0===l&&(l=n[t]),E(e,r.eventName,l,s)}function O(e,t,n,o,r){var a=e.__data[t];b.e&&(a=Object(b.e)(a,r.attrName,"attribute",e)),e._propertyToAttribute(t,r.attrName,a)}function L(e,t,n,o,r){var a=N(e,t,n,o,r),i=r.methodInfo;e.__dataHasAccessor&&e.__dataHasAccessor[i]?e._setPendingProperty(i,a,!0):e[i]=a}function I(e,t,n,o,r,a,s){n.bindings=n.bindings||[];var l={kind:o,target:r,parts:a,literal:s,isCompound:1!==a.length};if(n.bindings.push(l),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(l)){var{event:c,negate:d}=l.parts[0];l.listenerEvent=c||Object(i.a)(r)+"-changed",l.listenerNegate=d}for(var h=t.nodeInfoList.length,f=0;f<l.parts.length;f++){var u=l.parts[f];u.compoundIndex=f,T(e,t,l,u,h)}}function T(e,t,n,o,r){if(!o.literal)if("attribute"===n.kind&&"-"===n.target[0])console.warn("Cannot set attribute "+n.target+' because "-" is not a valid attribute starting character');else for(var a=o.dependencies,i={index:r,binding:n,part:o,evaluator:e},s=0;s<a.length;s++){var l=a[s];"string"==typeof l&&((l=H(l)).wildcard=!0),e._addTemplatePropertyEffect(t,l.rootProperty,{fn:z,info:i,trigger:l})}}function z(e,t,n,o,r,i,s){var l=s[r.index],c=r.binding,d=r.part;if(i&&d.source&&t.length>d.source.length&&"property"==c.kind&&!c.isCompound&&l.__isPropertyEffectsClient&&l.__dataHasAccessor&&l.__dataHasAccessor[c.target]){var h=n[t];t=Object(a.i)(d.source,c.target,t),l._setPendingPropertyOrPath(t,h,!1,!0)&&e._enqueueClient(l)}else{!function(e,t,n,o,r){r=function(e,t,n,o){if(n.isCompound){var r=e.__dataCompoundStorage[n.target];r[o.compoundIndex]=t,t=r.join("")}"attribute"!==n.kind&&("textContent"!==n.target&&("value"!==n.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t));return t}(t,r,n,o),b.e&&(r=Object(b.e)(r,n.target,n.kind,t));if("attribute"==n.kind)e._valueToNodeAttribute(t,r,n.target);else{var a=n.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[a]?t[_.READ_ONLY]&&t[_.READ_ONLY][a]||t._setPendingProperty(a,r)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,a,r)}}(e,l,c,d,r.evaluator._evaluateBinding(e,d,t,n,o,i))}}function P(e,t){if(t.isCompound){for(var n=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),o=t.parts,r=new Array(o.length),a=0;a<o.length;a++)r[a]=o[a].literal;var i=t.target;n[i]=r,t.literal&&"property"==t.kind&&(e[i]=t.literal)}}function F(e,t,n){if(n.listenerEvent){var o=n.parts[0];e.addEventListener(n.listenerEvent,(function(e){!function(e,t,n,o,r){var i,s=e.detail,l=s&&s.path;l?(o=Object(a.i)(n,o,l),i=s&&s.value):i=e.currentTarget[n],i=r?!i:i,t[_.READ_ONLY]&&t[_.READ_ONLY][o]||!t._setPendingPropertyOrPath(o,i,!0,Boolean(l))||s&&s.queueProperty||t._invalidateProperties()}(e,t,n.target,o.source,o.negate)}))}}function R(e,t,n,o,r,a){a=t.static||a&&("object"!=typeof a||a[t.methodName]);for(var i,s={methodName:t.methodName,args:t.args,methodInfo:r,dynamicFn:a},l=0;l<t.args.length&&(i=t.args[l]);l++)i.literal||e._addPropertyEffect(i.rootProperty,n,{fn:o,info:s,trigger:i});a&&e._addPropertyEffect(t.methodName,n,{fn:o,info:s})}function N(e,t,n,o,r){var a=e._methodHost||e,i=a[r.methodName];if(i){var s=e._marshalArgs(r.args,t,n);return i.apply(a,s)}r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}var M=[],B=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function j(e){for(var t="",n=0;n<e.length;n++){t+=e[n].literal||""}return t}function D(e){var t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){var n={methodName:t[1],static:!0,args:M};return t[2].trim()?function(e,t){return t.args=e.map((function(e){var n=H(e);return n.literal||(t.static=!1),n}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),n):n}return null}function H(e){var t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),n={name:t,value:"",literal:!1},o=t[0];switch("-"===o&&(o=t[1]),o>="0"&&o<="9"&&(o="#"),o){case"'":case'"':n.value=t.slice(1,-1),n.literal=!0;break;case"#":n.value=Number(t),n.literal=!0}return n.literal||(n.rootProperty=Object(a.g)(t),n.structured=Object(a.d)(t),n.structured&&(n.wildcard=".*"==t.slice(-2),n.wildcard&&(n.name=t.slice(0,-2)))),n}function $(e,t,n){var o=Object(a.a)(e,n);return void 0===o&&(o=t[n]),o}function q(e,t,n,o){e.notifyPath(n+".splices",{indexSplices:o}),e.notifyPath(n+".length",t.length)}function V(e,t,n,o,r,a){q(e,t,n,[{index:o,addedCount:r,removed:a,object:t,type:"splice"}])}var G=Object(r.a)(e=>{var t=p(Object(s.a)(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return _}_initializeProperties(){super._initializeProperties(),W.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){var t=this[_.READ_ONLY];for(var n in e)t&&t[n]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=e[n])}_addPropertyEffect(e,t,n){this._createPropertyAccessor(e,t==_.READ_ONLY);var o=y(this,t)[e];o||(o=this[t][e]=[]),o.push(n)}_removePropertyEffect(e,t,n){var o=y(this,t)[e],r=o.indexOf(n);r>=0&&o.splice(r,1)}_hasPropertyEffect(e,t){var n=this[t];return Boolean(n&&n[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,_.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,_.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,_.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,_.COMPUTE)}_setPendingPropertyOrPath(e,t,n,o){if(o||Object(a.g)(Array.isArray(e)?e[0]:e)!==e){if(!o){var r=Object(a.a)(this,e);if(!(e=Object(a.h)(this,e,t))||!super._shouldPropertyChange(e,t,r))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,n))return function(e,t,n){var o,r=e.__dataLinkedPaths;if(r)for(var i in r){var s=r[i];Object(a.c)(i,t)?(o=Object(a.i)(i,s,t),e._setPendingPropertyOrPath(o,n,!0,!0)):Object(a.c)(s,t)&&(o=Object(a.i)(s,i,t),e._setPendingPropertyOrPath(o,n,!0,!0))}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,n);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,n){n===e[t]&&"object"!=typeof n||(e[t]=n)}_setPendingProperty(e,t,n){var o=this.__dataHasPaths&&Object(a.d)(e),r=o?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,r[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),o?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(o||this[_.NOTIFY]&&this[_.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=n),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){var e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(var t=0;t<e.length;t++){var n=e[t];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(var n in e)!t&&this[_.READ_ONLY]&&this[_.READ_ONLY][n]||this._setPendingPropertyOrPath(n,e[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,n){var o=this.__dataHasPaths;this.__dataHasPaths=!1,function(e,t,n,o){var r=e[_.COMPUTE];if(r)for(var a=t;w(e,r,a,n,o);)Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),a=e.__dataPending,e.__dataPending=null}(this,t,n,o);var r=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(t,n,o),this._flushClients(),w(this,this[_.REFLECT],t,n,o),w(this,this[_.OBSERVE],t,n,o),r&&function(e,t,n,o,r){var a,i,s=e[_.NOTIFY],l=g++;for(var c in t)t[c]&&(s&&A(e,s,l,c,n,o,r)||r&&S(e,c,n))&&(a=!0);a&&(i=e.__dataHost)&&i._invalidateProperties&&i._invalidateProperties()}(this,r,t,n,o),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,n){this[_.PROPAGATE]&&w(this,this[_.PROPAGATE],e,t,n);for(var o=this.__templateInfo;o;)w(this,o.propertyEffects,e,t,n,o.nodeList),o=o.nextTemplateInfo}linkPaths(e,t){e=Object(a.f)(e),t=Object(a.f)(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=Object(a.f)(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){var n={path:""};q(this,Object(a.a)(this,e,n),n.path,t)}get(e,t){return Object(a.a)(t||this,e)}set(e,t,n){n?Object(a.h)(n,e,t):this[_.READ_ONLY]&&this[_.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){var n={path:""},o=Object(a.a)(this,e,n),r=o.length,i=o.push(...t);return t.length&&V(this,o,n.path,r,t.length,[]),i}pop(e){var t={path:""},n=Object(a.a)(this,e,t),o=Boolean(n.length),r=n.pop();return o&&V(this,n,t.path,n.length,0,[r]),r}splice(e,t,n,...o){var r,i={path:""},s=Object(a.a)(this,e,i);return t<0?t=s.length-Math.floor(-t):t&&(t=Math.floor(t)),r=2===arguments.length?s.splice(t):s.splice(t,n,...o),(o.length||r.length)&&V(this,s,i.path,t,o.length,r),r}shift(e){var t={path:""},n=Object(a.a)(this,e,t),o=Boolean(n.length),r=n.shift();return o&&V(this,n,t.path,0,0,[r]),r}unshift(e,...t){var n={path:""},o=Object(a.a)(this,e,n),r=o.unshift(...t);return t.length&&V(this,o,n.path,0,t.length,[]),r}notifyPath(e,t){var n;if(1==arguments.length){var o={path:""};t=Object(a.a)(this,e,o),n=o.path}else n=Array.isArray(e)?Object(a.f)(e):e;this._setPendingPropertyOrPath(n,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var n;this._addPropertyEffect(e,_.READ_ONLY),t&&(this["_set"+(n=e,n[0].toUpperCase()+n.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,n){var o={property:e,method:t,dynamicFn:Boolean(n)};this._addPropertyEffect(e,_.OBSERVE,{fn:C,info:o,trigger:{name:e}}),n&&this._addPropertyEffect(t,_.OBSERVE,{fn:C,info:o,trigger:{name:t}})}_createMethodObserver(e,t){var n=D(e);if(!n)throw new Error("Malformed observer expression '"+e+"'");R(this,n,_.OBSERVE,N,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,_.NOTIFY,{fn:k,info:{eventName:Object(i.a)(e)+"-changed",property:e}})}_createReflectedProperty(e){var t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,_.REFLECT,{fn:O,info:{attrName:t}})}_createComputedProperty(e,t,n){var o=D(t);if(!o)throw new Error("Malformed computed expression '"+t+"'");R(this,o,_.COMPUTE,L,e,n)}_marshalArgs(e,t,n){for(var o=this.__data,r=[],i=0,s=e.length;i<s;i++){var{name:l,structured:c,wildcard:d,value:h,literal:f}=e[i];if(!f)if(d){var u=Object(a.c)(l,t),m=$(o,n,u?t:l);h={path:u?t:l,value:m,base:u?Object(a.a)(o,l):m}}else h=c?$(o,n,l):o[l];r[i]=h}return r}static addPropertyEffect(e,t,n){this.prototype._addPropertyEffect(e,t,n)}static createPropertyObserver(e,t,n){this.prototype._createPropertyObserver(e,t,n)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,n){this.prototype._createComputedProperty(e,t,n)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){var n=this.constructor._parseTemplate(e),o=this.__templateInfo==n;if(!o)for(var r in n.propertyEffects)this._createPropertyAccessor(r);if(t&&((n=Object.create(n)).wasPreBound=o,!o&&this.__templateInfo)){var a=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=a.nextTemplateInfo=n,n.previousTemplateInfo=a,n}return this.__templateInfo=n}static _addTemplatePropertyEffect(e,t,n){(e.hostProps=e.hostProps||{})[t]=!0;var o=e.propertyEffects=e.propertyEffects||{};(o[t]=o[t]||[]).push(n)}_stampTemplate(e){W.beginHosting(this);var t=super._stampTemplate(e);W.endHosting(this);var n=this._bindTemplate(e,!0);if(n.nodeList=t.nodeList,!n.wasPreBound)for(var o=n.childNodes=[],r=t.firstChild;r;r=r.nextSibling)o.push(r);return t.templateInfo=n,function(e,t){var{nodeList:n,nodeInfoList:o}=t;if(o.length)for(var r=0;r<o.length;r++){var a=o[r],i=n[r],s=a.bindings;if(s)for(var l=0;l<s.length;l++){var c=s[l];P(i,c),F(i,e,c)}i.__dataHost=e}}(this,n),this.__dataReady&&w(this,n.propertyEffects,this.__data,null,!1,n.nodeList),t}_removeBoundDom(e){var t=e.templateInfo;t.previousTemplateInfo&&(t.previousTemplateInfo.nextTemplateInfo=t.nextTemplateInfo),t.nextTemplateInfo&&(t.nextTemplateInfo.previousTemplateInfo=t.previousTemplateInfo),this.__templateInfoLast==t&&(this.__templateInfoLast=t.previousTemplateInfo),t.previousTemplateInfo=t.nextTemplateInfo=null;for(var n=t.childNodes,o=0;o<n.length;o++){var r=n[o];r.parentNode.removeChild(r)}}static _parseTemplateNode(e,t,n){var o=super._parseTemplateNode(e,t,n);if(e.nodeType===Node.TEXT_NODE){var r=this._parseBindings(e.textContent,t);r&&(e.textContent=j(r)||" ",I(this,t,n,"text","textContent",r),o=!0)}return o}static _parseTemplateNodeAttribute(e,t,n,o,r){var a=this._parseBindings(r,t);if(a){var s=o,l="property";v.test(o)?l="attribute":"$"==o[o.length-1]&&(o=o.slice(0,-1),l="attribute");var c=j(a);return c&&"attribute"==l&&("class"==o&&e.hasAttribute("class")&&(c+=" "+e.getAttribute(o)),e.setAttribute(o,c)),"input"===e.localName&&"value"===s&&e.setAttribute(s,""),e.removeAttribute(s),"property"===l&&(o=Object(i.b)(o)),I(this,t,n,l,o,a,c),!0}return super._parseTemplateNodeAttribute(e,t,n,o,r)}static _parseTemplateNestedTemplate(e,t,n){var o=super._parseTemplateNestedTemplate(e,t,n),r=n.templateInfo.hostProps;for(var a in r){I(this,t,n,"property","_host_"+a,[{mode:"{",source:a,dependencies:[a]}])}return o}static _parseBindings(e,t){for(var n,o=[],r=0;null!==(n=B.exec(e));){n.index>r&&o.push({literal:e.slice(r,n.index)});var a=n[1][0],i=Boolean(n[2]),s=n[3].trim(),l=!1,c="",d=-1;"{"==a&&(d=s.indexOf("::"))>0&&(c=s.substring(d+2),s=s.substring(0,d),l=!0);var h=D(s),f=[];if(h){for(var{args:u,methodName:m}=h,p=0;p<u.length;p++){var b=u[p];b.literal||f.push(b)}var g=t.dynamicFns;(g&&g[m]||h.static)&&(f.push(m),h.dynamicFn=!0)}else f.push(s);o.push({source:s,mode:a,negate:i,customEvent:l,signature:h,dependencies:f,event:c}),r=B.lastIndex}if(r&&r<e.length){var _=e.substring(r);_&&o.push({literal:_})}return o.length?o:null}static _evaluateBinding(e,t,n,o,r,i){var s;return s=t.signature?N(e,n,o,0,t.signature):n!=t.source?Object(a.a)(e,t.source):i&&Object(a.d)(n)?Object(a.a)(e,n):e.__data[n],t.negate&&(s=!s),s}}});var W=new class{constructor(){this.stack=[]}registerHost(e){this.stack.length&&this.stack[this.stack.length-1]._enqueueClient(e)}beginHosting(e){this.stack.push(e)}endHosting(e){var t=this.stack.length;t&&this.stack[t-1]==e&&this.stack.pop()}}},,function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f}));var o=n(105),r=n(19),a={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},i={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},s=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},i);function l(e,t){return h({},Object(o.a)(t),e)}function c(e,t,n,o){for(var r in function(e,t,n){for(var o=e._noAccessors,r=Object.getOwnPropertyNames(e),a=0;a<r.length;a++){var i=r[a];if(!(i in n))if(o)t[i]=e[i];else{var s=Object.getOwnPropertyDescriptor(e,i);s&&(s.configurable=!0,Object.defineProperty(t,i,s))}}}(t,e,o),a)t[r]&&(n[r]=n[r]||[],n[r].push(t[r]))}function d(e,t){for(var n in t){var o=e[n],r=t[n];e[n]=!("value"in r)&&o&&"value"in o?Object.assign({value:o.value},r):r}}function h(e,t,n){var o,a={};class l extends t{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(o)for(var t,n=0;n<o.length;n++)(t=o[n]).properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}else super._finalizeClass()}static get properties(){var t={};if(o)for(var n=0;n<o.length;n++)d(t,o[n].properties);return d(t,e.properties),t}static get observers(){var t=[];if(o)for(var n,r=0;r<o.length;r++)(n=o[r]).observers&&(t=t.concat(n.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();var e=a.created;if(e)for(var t=0;t<e.length;t++)e[t].call(this)}_registered(){var e=l.prototype;if(!e.hasOwnProperty("__hasRegisterFinished")){e.__hasRegisterFinished=!0,super._registered(),r.b&&f(e);var t=Object.getPrototypeOf(this),n=a.beforeRegister;if(n)for(var o=0;o<n.length;o++)n[o].call(t);if(n=a.registered)for(var i=0;i<n.length;i++)n[i].call(t)}}_applyListeners(){super._applyListeners();var e=a.listeners;if(e)for(var t=0;t<e.length;t++){var n=e[t];if(n)for(var o in n)this._addMethodEventListenerToNode(this,o,n[o])}}_ensureAttributes(){var e=a.hostAttributes;if(e)for(var t=e.length-1;t>=0;t--){var n=e[t];for(var o in n)this._ensureAttribute(o,n[o])}super._ensureAttributes()}ready(){super.ready();var e=a.ready;if(e)for(var t=0;t<e.length;t++)e[t].call(this)}attached(){super.attached();var e=a.attached;if(e)for(var t=0;t<e.length;t++)e[t].call(this)}detached(){super.detached();var e=a.detached;if(e)for(var t=0;t<e.length;t++)e[t].call(this)}attributeChanged(e,t,n){super.attributeChanged();var o=a.attributeChanged;if(o)for(var r=0;r<o.length;r++)o[r].call(this,e,t,n)}}if(n){Array.isArray(n)||(n=[n]);var h=t.prototype.behaviors;o=function e(t,n,o){n=n||[];for(var r=t.length-1;r>=0;r--){var a=t[r];a?Array.isArray(a)?e(a,n):n.indexOf(a)<0&&(!o||o.indexOf(a)<0)&&n.unshift(a):console.warn("behavior is null, check for missing or 404 import")}return n}(n,null,h),l.prototype.behaviors=h?h.concat(n):o}var f=t=>{o&&function(e,t,n){for(var o=0;o<t.length;o++)c(e,t[o],n,s)}(t,o,a),c(t,e,a,i)};return r.b||f(l.prototype),l.generatedFrom=e,l}var f=function(e,t){e||console.warn("Polymer.Class requires `info` argument");var n=t?t(Object(o.a)(HTMLElement)):Object(o.a)(HTMLElement);return(n=h(e,n,e.behaviors)).is=n.prototype.is=e.is,n}},,function(e,t,n){"use strict";n.d(t,"a",(function(){return q}));var o=n(52),r=n(69),a=n(82),i=(n(67),/;\s*/m),s=/^\s*(initial)|(inherit)\s*$/,l=/\s*!important/;class c{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}var d=null;class h{constructor(){this._currentElement=null,this._measureElement=null,this._map=new c}detectMixin(e){return Object(a.a)(e)}gatherStyles(e){var t=Object(o.g)(e.content);if(t){var n=document.createElement("style");return n.textContent=t,e.content.insertBefore(n,e.content.firstChild),n}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));var n=e._gatheredStyle;return n?this.transformStyle(n,t):null}transformStyle(e,t=""){var n=Object(o.m)(e);return this.transformRules(n,t),e.textContent=Object(o.p)(n),n}transformCustomStyle(e){var t=Object(o.m)(e);return Object(o.f)(t,e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)}),e.textContent=Object(o.p)(t),t}transformRules(e,t){this._currentElement=t,Object(o.f)(e,e=>{this.transformRule(e)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(r.g,(e,n,o,r)=>this._produceCssProperties(e,n,o,r,t)),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){for(var t=e;t.parent;)t=t.parent;var n={},r=!1;return Object(o.f)(t,t=>{(r=r||t===e)||t.selector===e.selector&&Object.assign(n,this._cssTextToMap(t.parsedCssText))}),n}_consumeCssProperties(e,t){for(var n=null;n=r.f.exec(e);){var o=n[0],a=n[1],i=n.index,s=i+o.indexOf("@apply"),l=i+o.length,c=e.slice(0,s),d=e.slice(l),h=t?this._fallbacksFromPreviousRules(t):{};Object.assign(h,this._cssTextToMap(c));var f=this._atApplyToCssProperties(a,h);e=`${c}${f}${d}`,r.f.lastIndex=i+f.length}return e}_atApplyToCssProperties(e,t){e=e.replace(i,"");var n=[],o=this._map.get(e);if(o||(this._map.set(e,{}),o=this._map.get(e)),o){var r,a,s;this._currentElement&&(o.dependants[this._currentElement]=!0);var c=o.properties;for(r in c)a=[r,": var(",e,"_-_",r],(s=t&&t[r])&&a.push(",",s.replace(l,"")),a.push(")"),l.test(c[r])&&a.push(" !important"),n.push(a.join(""))}return n.join("; ")}_replaceInitialOrInherit(e,t){var n=s.exec(t);return n&&(t=n[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){for(var n,o,r,a,i=e.split(";"),s={},l=0;l<i.length;l++)(r=i[l])&&(a=r.split(":")).length>1&&(n=a[0].trim(),o=a.slice(1).join(":"),t&&(o=this._replaceInitialOrInherit(n,o)),s[n]=o);return s}_invalidateMixinEntry(e){if(d)for(var t in e.dependants)t!==this._currentElement&&d(t)}_produceCssProperties(e,t,n,r,a){if(n&&Object(o.l)(n,(e,t)=>{t&&this._map.get(t)&&(r=`@apply ${t};`)}),!r)return e;var i=this._consumeCssProperties(""+r,a),s=e.slice(0,e.indexOf("--")),l=this._cssTextToMap(i,!0),c=l,d=this._map.get(t),h=d&&d.properties;h?c=Object.assign(Object.create(h),l):this._map.set(t,c);var f,u,m=[],p=!1;for(f in c)void 0===(u=l[f])&&(u="initial"),h&&!(f in h)&&(p=!0),m.push(`${t}_-_${f}: ${u}`);return p&&this._invalidateMixinEntry(d),d&&(d.properties=c),n&&(s=`${e};${s}`),`${s}${m.join("; ")};`}}h.prototype.detectMixin=h.prototype.detectMixin,h.prototype.transformStyle=h.prototype.transformStyle,h.prototype.transformCustomStyle=h.prototype.transformCustomStyle,h.prototype.transformRules=h.prototype.transformRules,h.prototype.transformRule=h.prototype.transformRule,h.prototype.transformTemplate=h.prototype.transformTemplate,h.prototype._separator="_-_",Object.defineProperty(h.prototype,"invalidCallback",{get:()=>d,set(e){d=e}});var f=h,u=n(80),m=n(126),p=(n(161),n(44)),b=new f;class g{constructor(){this.customStyleInterface=null,b.invalidCallback=m.a}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{b.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,t){if(this.ensure(),!Object(o.d)(e)){u.a[t]=e;var n=b.transformTemplate(e,t);e._styleAst=n}}flushCustomStyles(){if(this.ensure(),this.customStyleInterface){var e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(var t=0;t<e.length;t++){var n=e[t],o=this.customStyleInterface.getStyleForCustomStyle(n);o&&b.transformCustomStyle(o)}this.customStyleInterface.enqueued=!1}}}styleSubtree(e,t){if(this.ensure(),t&&Object(a.c)(e,t),e.shadowRoot){this.styleElement(e);for(var n=e.shadowRoot.children||e.shadowRoot.childNodes,o=0;o<n.length;o++)this.styleSubtree(n[o])}else for(var r=e.children||e.childNodes,i=0;i<r.length;i++)this.styleSubtree(r[i])}styleElement(e){this.ensure();var{is:t}=Object(o.i)(e),n=u.a[t];if((!n||!Object(o.d)(n))&&n&&!m.c(n)){m.d(n)||(this.prepareTemplate(n,t),m.b(n));var r=e.shadowRoot;if(r){var a=r.querySelector("style");a&&(a.__cssRules=n._styleAst,a.textContent=Object(o.p)(n._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){var _=new g,v=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(e,t,n){_.flushCustomStyles(),_.prepareTemplate(e,t)},prepareTemplateStyles(e,t,n){window.ShadyCSS.prepareTemplate(e,t,n)},prepareTemplateDom(e,t){},styleSubtree(e,t){_.flushCustomStyles(),_.styleSubtree(e,t)},styleElement(e){_.flushCustomStyles(),_.styleElement(e)},styleDocument(e){_.flushCustomStyles(),_.styleDocument(e)},getComputedStyleValue:(e,t)=>Object(a.b)(e,t),flushCustomStyles(){_.flushCustomStyles()},nativeCss:p.b,nativeShadow:p.c,cssBuild:p.a},v&&(window.ShadyCSS.CustomStyleInterface=v)}window.ShadyCSS.ApplyShim=b;var y=n(97),w=n(48),A=n(136),x=n(29),C=/:host\(:dir\((ltr|rtl)\)\)/g,S=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,E=/:dir\((?:ltr|rtl)\)/,k=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),O=[],L=null,I="";function T(){I=document.documentElement.getAttribute("dir")}function z(e){e.__autoDirOptOut||e.setAttribute("dir",I)}function P(){T(),I=document.documentElement.getAttribute("dir");for(var e=0;e<O.length;e++)z(O[e])}var F=Object(x.a)(e=>{k||L||(T(),(L=new MutationObserver(P)).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));var t=Object(A.a)(e);class n extends t{static _processStyleText(e,t){return e=super._processStyleText(e,t),!k&&E.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){var t=e;return t=(t=t.replace(C,':host([dir="$1"])')).replace(S,':host([dir="$2"]) $1')}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(L&&L.takeRecords().length&&P(),O.push(this),z(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){var e=O.indexOf(this);e>-1&&O.splice(e,1)}}}return n.__activateDir=!1,n});n(63);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function R(){document.body.removeAttribute("unresolved")}"interactive"===document.readyState||"complete"===document.readyState?R():window.addEventListener("DOMContentLoaded",R);var N=n(40),M=n(31),B=n(13),j=n(9),D=n(17),H=n(11),$=window.ShadyCSS,q=Object(x.a)(e=>{var t=F(Object(w.a)(Object(y.a)(e))),n={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class o extends t{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(e,t,n,o){t!==n&&(super.attributeChangedCallback(e,t,n,o),this.attributeChanged(e,t,n))}attributeChanged(e,t,n){}_initializeProperties(){var e=Object.getPrototypeOf(this);e.hasOwnProperty("__hasRegisterFinished")||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),this._applyListeners()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,n){this._propertyToAttribute(e,t,n)}serializeValueToAttribute(e,t,n){this._valueToNodeAttribute(n||this,e,t)}extend(e,t){if(!e||!t)return e||t;for(var n,o=Object.getOwnPropertyNames(t),r=0;r<o.length&&(n=o[r]);r++){var a=Object.getOwnPropertyDescriptor(t,n);a&&Object.defineProperty(e,n,a)}return e}mixin(e,t){for(var n in t)e[n]=t[n];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){var t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,n){n=n||{},t=null==t?{}:t;var o=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});o.detail=t;var r=n.node||this;return Object(H.a)(r).dispatchEvent(o),o}listen(e,t,n){e=e||this;var o=this.__boundListeners||(this.__boundListeners=new WeakMap),r=o.get(e);r||(r={},o.set(e,r));var a=t+n;r[a]||(r[a]=this._addMethodEventListenerToNode(e,t,n,this))}unlisten(e,t,n){e=e||this;var o=this.__boundListeners&&this.__boundListeners.get(e),r=t+n,a=o&&o[r];a&&(this._removeEventListenerFromNode(e,t,a),o[r]=null)}setScrollDirection(e,t){Object(M.setTouchAction)(t||this,n[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){var e=Object(H.a)(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){var e=Object(N.a)(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Object(N.a)(this).getEffectiveChildNodes()}queryDistributedElements(e){return Object(N.a)(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){for(var e,t=this.getEffectiveChildNodes(),n=[],o=0;e=t[o];o++)e.nodeType!==Node.COMMENT_NODE&&n.push(e.textContent);return n.join("")}queryEffectiveChildren(e){var t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){var t=this.root.querySelector(e||"slot");return t?Object(N.a)(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(e){return this!==e&&Object(H.a)(this).contains(e)&&Object(H.a)(this).getRootNode()===Object(H.a)(e).getRootNode()}isLocalDescendant(e){return this.root===Object(H.a)(e).getRootNode()}scopeSubtree(e,t){}getComputedStyleValue(e){return $.getComputedStyleValue(this,e)}debounce(e,t,n){return this._debouncers=this._debouncers||{},this._debouncers[e]=B.a.debounce(this._debouncers[e],n>0?j.d.after(n):j.c,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};var t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};var t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};var t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?j.d.run(e.bind(this),t):~j.c.run(e.bind(this))}cancelAsync(e){e<0?j.c.cancel(~e):j.d.cancel(e)}create(e,t){var n=document.createElement(e);if(t)if(n.setProperties)n.setProperties(t);else for(var o in t)n[o]=t[o];return n}elementMatches(e,t){return Object(N.b)(t||this,e)}toggleAttribute(e,t){var n=this;return 3===arguments.length&&(n=arguments[2]),1==arguments.length&&(t=!n.hasAttribute(e)),t?(Object(H.a)(n).setAttribute(e,""),!0):(Object(H.a)(n).removeAttribute(e),!1)}toggleClass(e,t,n){n=n||this,1==arguments.length&&(t=!n.classList.contains(e)),t?n.classList.add(e):n.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,n,o){o=o||this,this.transform("translate3d("+e+","+t+","+n+")",o)}arrayDelete(e,t){var n;if(Array.isArray(e)){if((n=e.indexOf(t))>=0)return e.splice(n,1)}else if((n=Object(D.a)(this,e).indexOf(t))>=0)return this.splice(e,n,1);return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return o.prototype.is="",o})},,function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o=e=>class extends e{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),"theme"===e&&this._setTheme(n)}}},,function(e,t,n){"use strict";var o=n(35),r=n.n(o),a=n(110),i=n(111),s=n(112),l=n(113),c=r()(!1);c.i(a.a),c.i(i.a),c.i(s.a),c.i(l.a),c.push([e.i,"",""]),t.a=c},function(e,t,n){"use strict";var o=n(35),r=n.n(o)()(!1);r.push([e.i,"[slot='drawer'] {\n  background-image: linear-gradient(0deg, var(--lumo-shade-5pct), var(--lumo-shade-5pct));\n}\n\n[slot='drawer'] nav a {\n  text-decoration: none;\n  transition: color 140ms;\n}\n\n[slot='drawer'] nav a .la {\n  margin-top: calc(var(--lumo-space-xs) * 0.5);\n}\n\n[slot='drawer'] nav a::before {\n  border-radius: var(--lumo-border-radius);\n  bottom: calc(var(--lumo-space-xs) * 0.5);\n  content: '';\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: calc(var(--lumo-space-xs) * 0.5);\n  transition: background-color 140ms;\n}\n\n[slot='drawer'] nav a[highlight] {\n  color: var(--lumo-primary-text-color);\n}\n\n[slot='drawer'] nav a[highlight]::before {\n  background-color: var(--lumo-primary-color-10pct);\n}\n\n[slot='drawer'] footer vaadin-context-menu {\n  align-items: center;\n  display: flex;\n}\n",""]),t.a=r},function(e,t,n){"use strict";var o=n(35),r=n.n(o)()(!1);r.push([e.i,".hello-world-view {\n  display: block;\n  padding: 1em;\n}\n",""]),t.a=r},function(e,t,n){"use strict";var o=n(35),r=n.n(o)()(!1);r.push([e.i,"/* === Screen readers === */\n.sr-only {\n  border-width: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n/* === Background color === */\n.bg-base {\n  background-color: var(--lumo-base-color);\n}\n\n.bg-transparent {\n  background-color: transparent;\n}\n\n.bg-contrast-5 {\n  background-color: var(--lumo-contrast-5pct);\n}\n.bg-contrast-10 {\n  background-color: var(--lumo-contrast-10pct);\n}\n.bg-contrast-20 {\n  background-color: var(--lumo-contrast-20pct);\n}\n.bg-contrast-30 {\n  background-color: var(--lumo-contrast-30pct);\n}\n.bg-contrast-40 {\n  background-color: var(--lumo-contrast-40pct);\n}\n.bg-contrast-50 {\n  background-color: var(--lumo-contrast-50pct);\n}\n.bg-contrast-60 {\n  background-color: var(--lumo-contrast-60pct);\n}\n.bg-contrast-70 {\n  background-color: var(--lumo-contrast-70pct);\n}\n.bg-contrast-80 {\n  background-color: var(--lumo-contrast-80pct);\n}\n.bg-contrast-90 {\n  background-color: var(--lumo-contrast-90pct);\n}\n.bg-contrast {\n  background-color: var(--lumo-contrast);\n}\n\n.bg-primary {\n  background-color: var(--lumo-primary-color);\n}\n.bg-primary-50 {\n  background-color: var(--lumo-primary-color-50pct);\n}\n.bg-primary-10 {\n  background-color: var(--lumo-primary-color-10pct);\n}\n\n.bg-error {\n  background-color: var(--lumo-error-color);\n}\n.bg-error-50 {\n  background-color: var(--lumo-error-color-50pct);\n}\n.bg-error-10 {\n  background-color: var(--lumo-error-color-10pct);\n}\n\n.bg-success {\n  background-color: var(--lumo-success-color);\n}\n.bg-success-50 {\n  background-color: var(--lumo-success-color-50pct);\n}\n.bg-success-10 {\n  background-color: var(--lumo-success-color-10pct);\n}\n\n/* === Border === */\n.border-0 {\n  border: none;\n}\n.border {\n  border: 1px solid;\n}\n.border-b {\n  border-bottom: 1px solid;\n}\n.border-l {\n  border-left: 1px solid;\n}\n.border-r {\n  border-right: 1px solid;\n}\n.border-t {\n  border-top: 1px solid;\n}\n\n/* === Border color === */\n.border-contrast-5 {\n  border-color: var(--lumo-contrast-5pct);\n}\n.border-contrast-10 {\n  border-color: var(--lumo-contrast-10pct);\n}\n.border-contrast-20 {\n  border-color: var(--lumo-contrast-20pct);\n}\n.border-contrast-30 {\n  border-color: var(--lumo-contrast-30pct);\n}\n.border-contrast-40 {\n  border-color: var(--lumo-contrast-40pct);\n}\n.border-contrast-50 {\n  border-color: var(--lumo-contrast-50pct);\n}\n.border-contrast-60 {\n  border-color: var(--lumo-contrast-60pct);\n}\n.border-contrast-70 {\n  border-color: var(--lumo-contrast-70pct);\n}\n.border-contrast-80 {\n  border-color: var(--lumo-contrast-80pct);\n}\n.border-contrast-90 {\n  border-color: var(--lumo-contrast-90pct);\n}\n.border-contrast {\n  border-color: var(--lumo-contrast);\n}\n\n.border-primary {\n  border-color: var(--lumo-primary-color);\n}\n.border-primary-50 {\n  border-color: var(--lumo-primary-color-50pct);\n}\n.border-primary-10 {\n  border-color: var(--lumo-primary-color-10pct);\n}\n\n.border-error {\n  border-color: var(--lumo-error-color);\n}\n.border-error-50 {\n  border-color: var(--lumo-error-color-50pct);\n}\n.border-error-10 {\n  border-color: var(--lumo-error-color-10pct);\n}\n\n.border-success {\n  border-color: var(--lumo-success-color);\n}\n.border-success-50 {\n  border-color: var(--lumo-success-color-50pct);\n}\n.border-success-10 {\n  border-color: var(--lumo-success-color-10pct);\n}\n\n/* === Border radius === */\n.rounded-none {\n  border-radius: 0;\n}\n.rounded-s {\n  border-radius: var(--lumo-border-radius-s);\n}\n.rounded-m {\n  border-radius: var(--lumo-border-radius-m);\n}\n.rounded-l {\n  border-radius: var(--lumo-border-radius-l);\n}\n\n/* === Align content === */\n.content-center {\n  align-content: center;\n}\n.content-end {\n  align-content: flex-end;\n}\n.content-start {\n  align-content: flex-start;\n}\n.content-around {\n  align-content: space-around;\n}\n.content-between {\n  align-content: space-between;\n}\n.content-evenly {\n  align-content: space-evenly;\n}\n.content-stretch {\n  align-content: stretch;\n}\n\n/* === Align items === */\n.items-baseline {\n  align-items: baseline;\n}\n.items-center {\n  align-items: center;\n}\n.items-end {\n  align-items: flex-end;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-stretch   {\n  align-items: stretch;\n}\n\n/* === Align self === */\n.self-auto {\n  align-self: auto;\n}\n.self-baseline {\n  align-self: baseline;\n}\n.self-center {\n  align-self: center;\n}\n.self-end {\n  align-self: flex-end;\n}\n.self-start {\n  align-self: flex-start;\n}\n.self-stretch   {\n  align-self: stretch;\n}\n\n/* === Justify content === */\n.justify-center {\n  justify-content: center;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-start {\n  justify-content: flex-start;\n}\n.justify-around {\n  justify-content: space-around;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.justify-evenly {\n  justify-content: space-evenly;\n}\n\n/* === Box shadows === */\n.shadow-xs {\n  box-shadow: var(--lumo-box-shadow-xs);\n}\n.shadow-s {\n  box-shadow: var(--lumo-box-shadow-s);\n}\n.shadow-m {\n  box-shadow: var(--lumo-box-shadow-m);\n}\n.shadow-l {\n  box-shadow: var(--lumo-box-shadow-l);\n}\n.shadow-xl {\n  box-shadow: var(--lumo-box-shadow-xl);\n}\n\n/* === Flex === */\n.flex-auto {\n  flex: auto;\n}\n.flex-none {\n  flex: none;\n}\n\n/* === Flex direction === */\n.flex-col {\n  flex-direction: column;\n}\n.flex-col-reverse {\n  flex-direction: column-reverse;\n}\n.flex-row {\n  flex-direction: row;\n}\n.flex-row-reverse {\n  flex-direction: row-reverse;\n}\n\n/* === Flex grow === */\n.flex-grow-0 {\n  flex-grow: 0;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n\n/* === Flex shrink === */\n.flex-shrink-0 {\n  flex-shrink: 0;\n}\n.flex-shrink {\n  flex-shrink: 1;\n}\n\n/* === Flex wrap === */\n.flex-nowrap {\n  flex-wrap: nowrap;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse;\n}\n\n/* === Responsive design === */\n@media (min-width: 640px) {\n  .sm\\:flex-col {\n    flex-direction: column;\n  }\n  .sm\\:flex-row {\n    flex-direction: row;\n  }\n}\n\n@media (min-width: 768px) {\n  .md\\:flex-col {\n    flex-direction: column;\n  }\n  .md\\:flex-row {\n    flex-direction: row;\n  }\n}\n@media (min-width: 1024px) {\n  .lg\\:flex-col {\n    flex-direction: column;\n  }\n  .lg\\:flex-row {\n    flex-direction: row;\n  }\n}\n@media (min-width: 1280px) {\n  .xl\\:flex-col {\n    flex-direction: column;\n  }\n  .xl\\:flex-row {\n    flex-direction: row;\n  }\n}\n@media (min-width: 1536px) {\n  .\\32xl\\:flex-col {\n    flex-direction: column;\n  }\n  .\\32xl\\:flex-row {\n    flex-direction: row;\n  }\n}\n\n/* === Gap === */\n.gap-xs {\n  gap: var(--lumo-space-xs);\n}\n.gap-s {\n  gap: var(--lumo-space-s);\n}\n.gap-m {\n  gap: var(--lumo-space-m);\n}\n.gap-l {\n  gap: var(--lumo-space-l);\n}\n.gap-xl {\n  gap: var(--lumo-space-xl);\n}\n\n/* === Gap (column) === */\n.gap-x-xs {\n  column-gap: var(--lumo-space-xs);\n}\n.gap-x-s {\n  column-gap: var(--lumo-space-s);\n}\n.gap-x-m {\n  column-gap: var(--lumo-space-m);\n}\n.gap-x-l {\n  column-gap: var(--lumo-space-l);\n}\n.gap-x-xl {\n  column-gap: var(--lumo-space-xl);\n}\n\n/* === Gap (row) === */\n.gap-y-xs {\n  row-gap: var(--lumo-space-xs);\n}\n.gap-y-s {\n  row-gap: var(--lumo-space-s);\n}\n.gap-y-m {\n  row-gap: var(--lumo-space-m);\n}\n.gap-y-l {\n  row-gap: var(--lumo-space-l);\n}\n.gap-y-xl {\n  row-gap: var(--lumo-space-xl);\n}\n\n/* === Grid auto flow === */\n.grid-flow-col {\n  grid-auto-flow: column;\n}\n.grid-flow-row {\n  grid-auto-flow: row;\n}\n\n/* === Grid columns === */\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.grid-cols-3 {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.grid-cols-4 {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.grid-cols-5 {\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n}\n.grid-cols-6 {\n  grid-template-columns: repeat(6, minmax(0, 1fr));\n}\n.grid-cols-7 {\n  grid-template-columns: repeat(7, minmax(0, 1fr));\n}\n.grid-cols-8 {\n  grid-template-columns: repeat(8, minmax(0, 1fr));\n}\n.grid-cols-9 {\n  grid-template-columns: repeat(9, minmax(0, 1fr));\n}\n.grid-cols-10 {\n  grid-template-columns: repeat(10, minmax(0, 1fr));\n}\n.grid-cols-11 {\n  grid-template-columns: repeat(11, minmax(0, 1fr));\n}\n.grid-cols-12 {\n  grid-template-columns: repeat(12, minmax(0, 1fr));\n}\n\n/* === Grid rows === */\n.grid-rows-1 {\n  grid-template-rows: repeat(1, minmax(0, 1fr));\n}\n.grid-rows-2 {\n  grid-template-rows: repeat(2, minmax(0, 1fr));\n}\n.grid-rows-3 {\n  grid-template-rows: repeat(3, minmax(0, 1fr));\n}\n.grid-rows-4 {\n  grid-template-rows: repeat(4, minmax(0, 1fr));\n}\n.grid-rows-5 {\n  grid-template-rows: repeat(5, minmax(0, 1fr));\n}\n.grid-rows-6 {\n  grid-template-rows: repeat(6, minmax(0, 1fr));\n}\n\n/* === Span (column) === */\n.col-span-1 {\n  grid-column: span 1 / span 1;\n}\n.col-span-2 {\n  grid-column: span 2 / span 2;\n}\n.col-span-3 {\n  grid-column: span 3 / span 3;\n}\n.col-span-4 {\n  grid-column: span 4 / span 4;\n}\n.col-span-5 {\n  grid-column: span 5 / span 5;\n}\n.col-span-6 {\n  grid-column: span 6 / span 6;\n}\n.col-span-7 {\n  grid-column: span 7 / span 7;\n}\n.col-span-8 {\n  grid-column: span 8 / span 8;\n}\n.col-span-9 {\n  grid-column: span 9 / span 9;\n}\n.col-span-10 {\n  grid-column: span 10 / span 10;\n}\n.col-span-11 {\n  grid-column: span 11 / span 11;\n}\n.col-span-12 {\n  grid-column: span 12 / span 12;\n}\n\n/* === Span (row) === */\n.row-span-1 {\n  grid-row: span 1 / span 1;\n}\n.row-span-2 {\n  grid-row: span 2 / span 2;\n}\n.row-span-3 {\n  grid-row: span 3 / span 3;\n}\n.row-span-4 {\n  grid-row: span 4 / span 4;\n}\n.row-span-5 {\n  grid-row: span 5 / span 5;\n}\n.row-span-6 {\n  grid-row: span 6 / span 6;\n}\n\n/* === Responsive design === */\n@media (min-width: 640px) {\n  .sm\\:grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .sm\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .sm\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .sm\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .sm\\:grid-cols-5 {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n  .sm\\:grid-cols-6 {\n    grid-template-columns: repeat(6, minmax(0, 1fr));\n  }\n  .sm\\:grid-cols-7 {\n    grid-template-columns: repeat(7, minmax(0, 1fr));\n  }\n  .sm\\:grid-cols-8 {\n    grid-template-columns: repeat(8, minmax(0, 1fr));\n  }\n  .sm\\:grid-cols-9 {\n    grid-template-columns: repeat(9, minmax(0, 1fr));\n  }\n  .sm\\:grid-cols-10 {\n    grid-template-columns: repeat(10, minmax(0, 1fr));\n  }\n  .sm\\:grid-cols-11 {\n    grid-template-columns: repeat(11, minmax(0, 1fr));\n  }\n  .sm\\:grid-cols-12 {\n    grid-template-columns: repeat(12, minmax(0, 1fr));\n  }\n}\n\n@media (min-width: 768px) {\n  .md\\:grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .md\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .md\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .md\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .md\\:grid-cols-5 {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n  .md\\:grid-cols-6 {\n    grid-template-columns: repeat(6, minmax(0, 1fr));\n  }\n  .md\\:grid-cols-7 {\n    grid-template-columns: repeat(7, minmax(0, 1fr));\n  }\n  .md\\:grid-cols-8 {\n    grid-template-columns: repeat(8, minmax(0, 1fr));\n  }\n  .md\\:grid-cols-9 {\n    grid-template-columns: repeat(9, minmax(0, 1fr));\n  }\n  .md\\:grid-cols-10 {\n    grid-template-columns: repeat(10, minmax(0, 1fr));\n  }\n  .md\\:grid-cols-11 {\n    grid-template-columns: repeat(11, minmax(0, 1fr));\n  }\n  .md\\:grid-cols-12 {\n    grid-template-columns: repeat(12, minmax(0, 1fr));\n  }\n}\n@media (min-width: 1024px) {\n  .lg\\:grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .lg\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .lg\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .lg\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .lg\\:grid-cols-5 {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n  .lg\\:grid-cols-6 {\n    grid-template-columns: repeat(6, minmax(0, 1fr));\n  }\n  .lg\\:grid-cols-7 {\n    grid-template-columns: repeat(7, minmax(0, 1fr));\n  }\n  .lg\\:grid-cols-8 {\n    grid-template-columns: repeat(8, minmax(0, 1fr));\n  }\n  .lg\\:grid-cols-9 {\n    grid-template-columns: repeat(9, minmax(0, 1fr));\n  }\n  .lg\\:grid-cols-10 {\n    grid-template-columns: repeat(10, minmax(0, 1fr));\n  }\n  .lg\\:grid-cols-11 {\n    grid-template-columns: repeat(11, minmax(0, 1fr));\n  }\n  .lg\\:grid-cols-12 {\n    grid-template-columns: repeat(12, minmax(0, 1fr));\n  }\n}\n@media (min-width: 1280px) {\n  .xl\\:grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .xl\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .xl\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .xl\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .xl\\:grid-cols-5 {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n  .xl\\:grid-cols-6 {\n    grid-template-columns: repeat(6, minmax(0, 1fr));\n  }\n  .xl\\:grid-cols-7 {\n    grid-template-columns: repeat(7, minmax(0, 1fr));\n  }\n  .xl\\:grid-cols-8 {\n    grid-template-columns: repeat(8, minmax(0, 1fr));\n  }\n  .xl\\:grid-cols-9 {\n    grid-template-columns: repeat(9, minmax(0, 1fr));\n  }\n  .xl\\:grid-cols-10 {\n    grid-template-columns: repeat(10, minmax(0, 1fr));\n  }\n  .xl\\:grid-cols-11 {\n    grid-template-columns: repeat(11, minmax(0, 1fr));\n  }\n  .xl\\:grid-cols-12 {\n    grid-template-columns: repeat(12, minmax(0, 1fr));\n  }\n}\n@media (min-width: 1536px) {\n  .\\32xl\\:grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .\\32xl\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .\\32xl\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .\\32xl\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .\\32xl\\:grid-cols-5 {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n  .\\32xl\\:grid-cols-6 {\n    grid-template-columns: repeat(6, minmax(0, 1fr));\n  }\n  .\\32xl\\:grid-cols-7 {\n    grid-template-columns: repeat(7, minmax(0, 1fr));\n  }\n  .\\32xl\\:grid-cols-8 {\n    grid-template-columns: repeat(8, minmax(0, 1fr));\n  }\n  .\\32xl\\:grid-cols-9 {\n    grid-template-columns: repeat(9, minmax(0, 1fr));\n  }\n  .\\32xl\\:grid-cols-10 {\n    grid-template-columns: repeat(10, minmax(0, 1fr));\n  }\n  .\\32xl\\:grid-cols-11 {\n    grid-template-columns: repeat(11, minmax(0, 1fr));\n  }\n  .\\32xl\\:grid-cols-12 {\n    grid-template-columns: repeat(12, minmax(0, 1fr));\n  }\n}\n\n/* === Box sizing === */\n.box-border {\n  box-sizing: border-box;\n}\n.box-content {\n  box-sizing: content-box;\n}\n\n/* === Display === */\n.block {\n  display: block;\n}\n.flex {\n  display: flex;\n}\n.hidden {\n  display: none;\n}\n.inline {\n  display: inline;\n}\n.inline-block {\n  display: inline-block;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.inline-grid {\n  display: inline-grid;\n}\n.grid {\n  display: grid;\n}\n\n/* === Overflow === */\n.overflow-auto {\n  overflow: auto;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.overflow-scroll {\n  overflow: scroll;\n}\n\n/* === Position === */\n.absolute {\n  position: absolute;\n}\n.fixed {\n  position: fixed;\n}\n.static {\n  position: static;\n}\n.sticky {\n  position: sticky;\n}\n.relative {\n  position: relative;\n}\n\n/* === Responsive design === */\n@media (min-width: 640px) {\n  .sm\\:flex {\n    display: flex;\n  }\n  .sm\\:hidden {\n    display: none;\n  }\n}\n@media (min-width: 768px) {\n  .md\\:flex {\n    display: flex;\n  }\n  .md\\:hidden {\n    display: none;\n  }\n}\n@media (min-width: 1024px) {\n  .lg\\:flex {\n    display: flex;\n  }\n  .lg\\:hidden {\n    display: none;\n  }\n}\n@media (min-width: 1280px) {\n  .xl\\:flex {\n    display: flex;\n  }\n  .xl\\:hidden {\n    display: none;\n  }\n}\n@media (min-width: 1536px) {\n  .\\32xl\\:flex {\n    display: flex;\n  }\n  .\\32xl\\:hidden {\n    display: none;\n  }\n}\n\n/* === Height === */\n.h-0 {\n  height: 0;\n}\n.h-xs {\n  height: var(--lumo-size-xs);\n}\n.h-s {\n  height: var(--lumo-size-s);\n}\n.h-m {\n  height: var(--lumo-size-m);\n}\n.h-l {\n  height: var(--lumo-size-l);\n}\n.h-xl {\n  height: var(--lumo-size-xl);\n}\n.h-auto {\n  height: auto;\n}\n.h-full {\n  height: 100%;\n}\n.h-screen {\n  height: 100vh;\n}\n\n/* === Height (max) === */\n.max-h-full {\n  max-height: 100%;\n}\n.max-h-screen {\n  max-height: 100vh;\n}\n\n/* === Height (min) === */\n.min-h-0 {\n  min-height: 0;\n}\n.min-h-full {\n  min-height: 100%;\n}\n.min-h-screen {\n  min-height: 100vh;\n}\n\n/* === Icon sizing === */\n.icon-s {\n  height: var(--lumo-icon-size-s);\n  width: var(--lumo-icon-size-s);\n}\n.icon-m {\n  height: var(--lumo-icon-size-m);\n  width: var(--lumo-icon-size-m);\n}\n.icon-l {\n  height: var(--lumo-icon-size-l);\n  width: var(--lumo-icon-size-l);\n}\n\n/* === Width === */\n.w-xs {\n  width: var(--lumo-size-xs);\n}\n.w-s {\n  width: var(--lumo-size-s);\n}\n.w-m {\n  width: var(--lumo-size-m);\n}\n.w-l {\n  width: var(--lumo-size-l);\n}\n.w-xl {\n  width: var(--lumo-size-xl);\n}\n.w-auto {\n  width: auto;\n}\n.w-full {\n  width: 100%;\n}\n\n/* === Width (max) === */\n.max-w-full {\n  max-width: 100%;\n}\n.max-w-max {\n  max-width: max-content;\n}\n.max-w-min {\n  max-width: min-content;\n}\n.max-w-screen-sm {\n  max-width: 640px;\n}\n.max-w-screen-md {\n  max-width: 768px;\n}\n.max-w-screen-lg {\n  max-width: 1024px;\n}\n.max-w-screen-xl {\n  max-width: 1280px;\n}\n.max-w-screen-2xl {\n  max-width: 1536px;\n}\n\n/* === Width (min) === */\n.min-w-0 {\n  min-width: 0;\n}\n.min-w-full {\n  min-width: 100%;\n}\n.min-w-max {\n  min-width: max-content;\n}\n.min-w-min {\n  min-width: min-content;\n}\n\n/* === Margin === */\n.m-auto {\n  margin: auto;\n}\n.m-0 {\n  margin: 0;\n}\n.m-xs {\n  margin: var(--lumo-space-xs);\n}\n.m-s {\n  margin: var(--lumo-space-s);\n}\n.m-m {\n  margin: var(--lumo-space-m);\n}\n.m-l {\n  margin: var(--lumo-space-l);\n}\n.m-xl {\n  margin: var(--lumo-space-xl);\n}\n\n/* === Margin (bottom) === */\n.mb-auto {\n  margin-bottom: auto;\n}\n.mb-0 {\n  margin-bottom: 0;\n}\n.mb-xs {\n  margin-bottom: var(--lumo-space-xs);\n}\n.mb-s {\n  margin-bottom: var(--lumo-space-s);\n}\n.mb-m {\n  margin-bottom: var(--lumo-space-m);\n}\n.mb-l {\n  margin-bottom: var(--lumo-space-l);\n}\n.mb-xl {\n  margin-bottom: var(--lumo-space-xl);\n}\n\n/* === Margin (end) === */\n.me-auto {\n  margin-inline-end: auto;\n}\n.me-0 {\n  margin-inline-end: 0;\n}\n.me-xs {\n  margin-inline-end: var(--lumo-space-xs);\n}\n.me-s {\n  margin-inline-end: var(--lumo-space-s);\n}\n.me-m {\n  margin-inline-end: var(--lumo-space-m);\n}\n.me-l {\n  margin-inline-end: var(--lumo-space-l);\n}\n.me-xl {\n  margin-inline-end: var(--lumo-space-xl);\n}\n\n/* === Margin (horizontal) === */\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.mx-0 {\n  margin-left: 0;\n  margin-right: 0;\n}\n.mx-xs {\n  margin-left: var(--lumo-space-xs);\n  margin-right: var(--lumo-space-xs);\n}\n.mx-s {\n  margin-left: var(--lumo-space-s);\n  margin-right: var(--lumo-space-s);\n}\n.mx-m {\n  margin-left: var(--lumo-space-m);\n  margin-right: var(--lumo-space-m);\n}\n.mx-l {\n  margin-left: var(--lumo-space-l);\n  margin-right: var(--lumo-space-l);\n}\n.mx-xl {\n  margin-left: var(--lumo-space-xl);\n  margin-right: var(--lumo-space-xl);\n}\n\n/* === Margin (left) === */\n.ml-auto {\n  margin-left: auto;\n}\n.ml-0 {\n  margin-left: 0;\n}\n.ml-xs {\n  margin-left: var(--lumo-space-xs);\n}\n.ml-s {\n  margin-left: var(--lumo-space-s);\n}\n.ml-m {\n  margin-left: var(--lumo-space-m);\n}\n.ml-l {\n  margin-left: var(--lumo-space-l);\n}\n.ml-xl {\n  margin-left: var(--lumo-space-xl);\n}\n\n/* === Margin (right) === */\n.mr-auto {\n  margin-right: auto;\n}\n.mr-0 {\n  margin-right: 0;\n}\n.mr-xs {\n  margin-right: var(--lumo-space-xs);\n}\n.mr-s {\n  margin-right: var(--lumo-space-s);\n}\n.mr-m {\n  margin-right: var(--lumo-space-m);\n}\n.mr-l {\n  margin-right: var(--lumo-space-l);\n}\n.mr-xl {\n  margin-right: var(--lumo-space-xl);\n}\n\n/* === Margin (start) === */\n.ms-auto {\n  margin-inline-start: auto;\n}\n.ms-0 {\n  margin-inline-start: 0;\n}\n.ms-xs {\n  margin-inline-start: var(--lumo-space-xs);\n}\n.ms-s {\n  margin-inline-start: var(--lumo-space-s);\n}\n.ms-m {\n  margin-inline-start: var(--lumo-space-m);\n}\n.ms-l {\n  margin-inline-start: var(--lumo-space-l);\n}\n.ms-xl {\n  margin-inline-start: var(--lumo-space-xl);\n}\n\n/* === Margin (top) === */\n.mt-auto {\n  margin-top: auto;\n}\n.mt-0 {\n  margin-top: 0;\n}\n.mt-xs {\n  margin-top: var(--lumo-space-xs);\n}\n.mt-s {\n  margin-top: var(--lumo-space-s);\n}\n.mt-m {\n  margin-top: var(--lumo-space-m);\n}\n.mt-l {\n  margin-top: var(--lumo-space-l);\n}\n.mt-xl {\n  margin-top: var(--lumo-space-xl);\n}\n\n/* === Margin (vertical) === */\n.my-auto {\n  margin-bottom: auto;\n  margin-top: auto;\n}\n.my-0 {\n  margin-bottom: 0;\n  margin-top: 0;\n}\n.my-xs {\n  margin-bottom: var(--lumo-space-xs);\n  margin-top: var(--lumo-space-xs);\n}\n.my-s {\n  margin-bottom: var(--lumo-space-s);\n  margin-top: var(--lumo-space-s);\n}\n.my-m {\n  margin-bottom: var(--lumo-space-m);\n  margin-top: var(--lumo-space-m);\n}\n.my-l {\n  margin-bottom: var(--lumo-space-l);\n  margin-top: var(--lumo-space-l);\n}\n.my-xl {\n  margin-bottom: var(--lumo-space-xl);\n  margin-top: var(--lumo-space-xl);\n}\n\n/* === Padding === */\n.p-0 {\n  padding: 0;\n}\n.p-xs {\n  padding: var(--lumo-space-xs);\n}\n.p-s {\n  padding: var(--lumo-space-s);\n}\n.p-m {\n  padding: var(--lumo-space-m);\n}\n.p-l {\n  padding: var(--lumo-space-l);\n}\n.p-xl {\n  padding: var(--lumo-space-xl);\n}\n\n/* === Padding (bottom) === */\n.pb-0 {\n  padding-bottom: 0;\n}\n.pb-xs {\n  padding-bottom: var(--lumo-space-xs);\n}\n.pb-s {\n  padding-bottom: var(--lumo-space-s);\n}\n.pb-m {\n  padding-bottom: var(--lumo-space-m);\n}\n.pb-l {\n  padding-bottom: var(--lumo-space-l);\n}\n.pb-xl {\n  padding-bottom: var(--lumo-space-xl);\n}\n\n/* === Padding (end) === */\n.pe-0 {\n  padding-inline-end: 0;\n}\n.pe-xs {\n  padding-inline-end: var(--lumo-space-xs);\n}\n.pe-s {\n  padding-inline-end: var(--lumo-space-s);\n}\n.pe-m {\n  padding-inline-end: var(--lumo-space-m);\n}\n.pe-l {\n  padding-inline-end: var(--lumo-space-l);\n}\n.pe-xl {\n  padding-inline-end: var(--lumo-space-xl);\n}\n\n/* === Padding (horizontal) === */\n.px-0 {\n  padding-left: 0;\n  padding-right: 0;\n}\n.px-xs {\n  padding-left: var(--lumo-space-xs);\n  padding-right: var(--lumo-space-xs);\n}\n.px-s {\n  padding-left: var(--lumo-space-s);\n  padding-right: var(--lumo-space-s);\n}\n.px-m {\n  padding-left: var(--lumo-space-m);\n  padding-right: var(--lumo-space-m);\n}\n.px-l {\n  padding-left: var(--lumo-space-l);\n  padding-right: var(--lumo-space-l);\n}\n.px-xl {\n  padding-left: var(--lumo-space-xl);\n  padding-right: var(--lumo-space-xl);\n}\n\n/* === Padding (left) === */\n.pl-0 {\n  padding-left: 0;\n}\n.pl-xs {\n  padding-left: var(--lumo-space-xs);\n}\n.pl-s {\n  padding-left: var(--lumo-space-s);\n}\n.pl-m {\n  padding-left: var(--lumo-space-m);\n}\n.pl-l {\n  padding-left: var(--lumo-space-l);\n}\n.pl-xl {\n  padding-left: var(--lumo-space-xl);\n}\n\n/* === Padding (right) === */\n.pr-0 {\n  padding-right: 0;\n}\n.pr-xs {\n  padding-right: var(--lumo-space-xs);\n}\n.pr-s {\n  padding-right: var(--lumo-space-s);\n}\n.pr-m {\n  padding-right: var(--lumo-space-m);\n}\n.pr-l {\n  padding-right: var(--lumo-space-l);\n}\n.pr-xl {\n  padding-right: var(--lumo-space-xl);\n}\n\n/* === Padding (start) === */\n.ps-0 {\n  padding-inline-start: 0;\n}\n.ps-xs {\n  padding-inline-start: var(--lumo-space-xs);\n}\n.ps-s {\n  padding-inline-start: var(--lumo-space-s);\n}\n.ps-m {\n  padding-inline-start: var(--lumo-space-m);\n}\n.ps-l {\n  padding-inline-start: var(--lumo-space-l);\n}\n.ps-xl {\n  padding-inline-start: var(--lumo-space-xl);\n}\n\n/* === Padding (top) === */\n.pt-0 {\n  padding-top: 0;\n}\n.pt-xs {\n  padding-top: var(--lumo-space-xs);\n}\n.pt-s {\n  padding-top: var(--lumo-space-s);\n}\n.pt-m {\n  padding-top: var(--lumo-space-m);\n}\n.pt-l {\n  padding-top: var(--lumo-space-l);\n}\n.pt-xl {\n  padding-top: var(--lumo-space-xl);\n}\n\n/* === Padding (vertical) === */\n.py-0 {\n  padding-bottom: 0;\n  padding-top: 0;\n}\n.py-xs {\n  padding-bottom: var(--lumo-space-xs);\n  padding-top: var(--lumo-space-xs);\n}\n.py-s {\n  padding-bottom: var(--lumo-space-s);\n  padding-top: var(--lumo-space-s);\n}\n.py-m {\n  padding-bottom: var(--lumo-space-m);\n  padding-top: var(--lumo-space-m);\n}\n.py-l {\n  padding-bottom: var(--lumo-space-l);\n  padding-top: var(--lumo-space-l);\n}\n.py-xl {\n  padding-bottom: var(--lumo-space-xl);\n  padding-top: var(--lumo-space-xl);\n}\n\n/* === Spacing === */\n.space-xs > *:not(:last-child) {\n  margin: var(--lumo-space-xs);\n}\n.space-s > *:not(:last-child) {\n  margin: var(--lumo-space-s);\n}\n.space-m > *:not(:last-child) {\n  margin: var(--lumo-space-m);\n}\n.space-l > *:not(:last-child) {\n  margin: var(--lumo-space-l);\n}\n.space-xl > *:not(:last-child) {\n  margin: var(--lumo-space-xl);\n}\n\n/* === Spacing (bottom) === */\n.spacing-b-xs > *:not(:last-child) {\n  margin-bottom: var(--lumo-space-xs);\n}\n.spacing-b-s > *:not(:last-child) {\n  margin-bottom: var(--lumo-space-s);\n}\n.spacing-b-m > *:not(:last-child) {\n  margin-bottom: var(--lumo-space-m);\n}\n.spacing-b-l > *:not(:last-child) {\n  margin-bottom: var(--lumo-space-l);\n}\n.spacing-b-xl > *:not(:last-child) {\n  margin-bottom: var(--lumo-space-xl);\n}\n\n/* === Spacing (end) === */\n.spacing-e-xs > *:not(:last-child) {\n  margin-inline-end: var(--lumo-space-xs);\n}\n.spacing-e-s > *:not(:last-child) {\n  margin-inline-end: var(--lumo-space-s);\n}\n.spacing-e-m > *:not(:last-child) {\n  margin-inline-end: var(--lumo-space-m);\n}\n.spacing-e-l > *:not(:last-child) {\n  margin-inline-end: var(--lumo-space-l);\n}\n.spacing-e-xl > *:not(:last-child) {\n  margin-inline-end: var(--lumo-space-xl);\n}\n\n/* === Spacing (horizontal) === */\n.spacing-x-xs > *:not(:last-child) {\n  margin-left: var(--lumo-space-xs);\n  margin-right: var(--lumo-space-xs);\n}\n.spacing-x-s > *:not(:last-child) {\n  margin-left: var(--lumo-space-s);\n  margin-right: var(--lumo-space-s);\n}\n.spacing-x-m > *:not(:last-child) {\n  margin-left: var(--lumo-space-m);\n  margin-right: var(--lumo-space-m);\n}\n.spacing-x-l > *:not(:last-child) {\n  margin-left: var(--lumo-space-l);\n  margin-right: var(--lumo-space-l);\n}\n.spacing-x-xl > *:not(:last-child) {\n  margin-left: var(--lumo-space-xl);\n  margin-right: var(--lumo-space-xl);\n}\n\n/* === Spacing (left) === */\n.spacing-l-xs > *:not(:last-child) {\n  margin-left: var(--lumo-space-xs);\n}\n.spacing-l-s > *:not(:last-child) {\n  margin-left: var(--lumo-space-s);\n}\n.spacing-l-m > *:not(:last-child) {\n  margin-left: var(--lumo-space-m);\n}\n.spacing-l-l > *:not(:last-child) {\n  margin-left: var(--lumo-space-l);\n}\n.spacing-l-xl > *:not(:last-child) {\n  margin-left: var(--lumo-space-xl);\n}\n\n/* === Spacing (right) === */\n.spacing-r-xs > *:not(:last-child) {\n  margin-right: var(--lumo-space-xs);\n}\n.spacing-r-s > *:not(:last-child) {\n  margin-right: var(--lumo-space-s);\n}\n.spacing-r-m > *:not(:last-child) {\n  margin-right: var(--lumo-space-m);\n}\n.spacing-r-l > *:not(:last-child) {\n  margin-right: var(--lumo-space-l);\n}\n.spacing-r-xl > *:not(:last-child) {\n  margin-right: var(--lumo-space-xl);\n}\n\n/* === Spacing (start) === */\n.spacing-s-xs > *:not(:last-child) {\n  margin-inline-start: var(--lumo-space-xs);\n}\n.spacing-s-s > *:not(:last-child) {\n  margin-inline-start: var(--lumo-space-s);\n}\n.spacing-s-m > *:not(:last-child) {\n  margin-inline-start: var(--lumo-space-m);\n}\n.spacing-s-l > *:not(:last-child) {\n  margin-inline-start: var(--lumo-space-l);\n}\n.spacing-s-xl > *:not(:last-child) {\n  margin-inline-start: var(--lumo-space-xl);\n}\n\n/* === Spacing (top) === */\n.spacing-t-xs > *:not(:last-child) {\n  margin-top: var(--lumo-space-xs);\n}\n.spacing-t-s > *:not(:last-child) {\n  margin-top: var(--lumo-space-s);\n}\n.spacing-t-m > *:not(:last-child) {\n  margin-top: var(--lumo-space-m);\n}\n.spacing-t-l > *:not(:last-child) {\n  margin-top: var(--lumo-space-l);\n}\n.spacing-t-xl > *:not(:last-child) {\n  margin-top: var(--lumo-space-xl);\n}\n\n/* === Spacing (vertical) === */\n.spacing-y-xs > *:not(:last-child) {\n  margin-bottom: var(--lumo-space-xs);\n  margin-top: var(--lumo-space-xs);\n}\n.spacing-y-s > *:not(:last-child) {\n  margin-bottom: var(--lumo-space-s);\n  margin-top: var(--lumo-space-s);\n}\n.spacing-y-m > *:not(:last-child) {\n  margin-bottom: var(--lumo-space-m);\n  margin-top: var(--lumo-space-m);\n}\n.spacing-y-l > *:not(:last-child) {\n  margin-bottom: var(--lumo-space-l);\n  margin-top: var(--lumo-space-l);\n}\n.spacing-y-xl > *:not(:last-child) {\n  margin-bottom: var(--lumo-space-xl);\n  margin-top: var(--lumo-space-xl);\n}\n\n/* === Font size === */\n.text-2xs {\n  font-size: var(--lumo-font-size-xxs);\n}\n.text-xs {\n  font-size: var(--lumo-font-size-xs);\n}\n.text-s {\n  font-size: var(--lumo-font-size-s);\n}\n.text-m {\n  font-size: var(--lumo-font-size-m);\n}\n.text-l {\n  font-size: var(--lumo-font-size-l);\n}\n.text-xl {\n  font-size: var(--lumo-font-size-xl);\n}\n.text-2xl {\n  font-size: var(--lumo-font-size-xxl);\n}\n.text-3xl {\n  font-size: var(--lumo-font-size-xxxl);\n}\n\n/* === Font weight === */\n.font-thin {\n  font-weight: 100; \n}\n.font-extralight {\n  font-weight: 200; \n}\n.font-light {\n  font-weight: 300; \n}\n.font-normal {\n  font-weight: 400; \n}\n.font-medium {\n  font-weight: 500; \n}\n.font-semibold {\n  font-weight: 600; \n}\n.font-bold {\n  font-weight: 700; \n}\n.font-extrabold {\n  font-weight: 800; \n}\n.font-black {\n  font-weight: 900; \n}\n\n/* === Line height === */\n.leading-none {\n  line-height: 1;\n}\n.leading-xs {\n  line-height: var(--lumo-line-height-xs);\n}\n.leading-s {\n  line-height: var(--lumo-line-height-s);\n}\n.leading-m {\n  line-height: var(--lumo-line-height-m);\n}\n\n/* === List style type === */\n.list-none {\n  list-style-type: none;\n}\n\n/* === Text alignment === */\n.text-left {\n  text-align: left;\n}\n.text-center {\n  text-align: center;\n}\n.text-right {\n  text-align: right;\n}\n.text-justify {\n  text-align: justify;\n}\n\n/* === Text color === */\n.text-header {\n  color: var(--lumo-header-text-color);\n}\n.text-body {\n  color: var(--lumo-body-text-color);\n}\n.text-secondary {\n  color: var(--lumo-secondary-text-color);\n}\n.text-tertiary {\n  color: var(--lumo-tertiary-text-color);\n}\n.text-disabled {\n  color: var(--lumo-disabled-text-color);\n}\n.text-primary {\n  color: var(--lumo-primary-text-color);\n}\n.text-primary-contrast {\n  color: var(--lumo-primary-contrast-color);\n}\n.text-error {\n  color: var(--lumo-error-text-color);\n}\n.text-error-contrast {\n  color: var(--lumo-error-contrast-color);\n}\n.text-success {\n  color: var(--lumo-success-text-color);\n}\n.text-success-contrast {\n  color: var(--lumo-success-contrast-color);\n}\n\n/* === Text overflow === */\n.overflow-clip {\n  text-overflow: clip;\n}\n.overflow-ellipsis {\n  text-overflow: ellipsis;\n}\n\n/* === Text transform === */\n.capitalize {\n  text-transform: capitalize;\n}\n.lowercase {\n  text-transform: lowercase;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n\n/* === Whitespace === */\n.whitespace-normal {\n  white-space: normal;\n}\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n.whitespace-pre {\n  white-space: pre;\n}\n.whitespace-pre-line {\n  white-space: pre-line;\n}\n.whitespace-pre-wrap {\n  white-space: pre-wrap;\n}\n\n/* === Responsive design === */\n@media (min-width: 640px) {\n  .sm\\:text-2xs {\n    font-size: var(--lumo-font-size-xxs);\n  }\n  .sm\\:text-xs {\n    font-size: var(--lumo-font-size-xs);\n  }\n  .sm\\:text-s {\n    font-size: var(--lumo-font-size-s);\n  }\n  .sm\\:text-m {\n    font-size: var(--lumo-font-size-m);\n  }\n  .sm\\:text-l {\n    font-size: var(--lumo-font-size-l);\n  }\n  .sm\\:text-xl {\n    font-size: var(--lumo-font-size-xl);\n  }\n  .sm\\:text-2xl {\n    font-size: var(--lumo-font-size-xxl);\n  }\n  .sm\\:text-3xl {\n    font-size: var(--lumo-font-size-xxxl);\n  }\n}\n@media (min-width: 768px) {\n  .md\\:text-2xs {\n    font-size: var(--lumo-font-size-xxs);\n  }\n  .md\\:text-xs {\n    font-size: var(--lumo-font-size-xs);\n  }\n  .md\\:text-s {\n    font-size: var(--lumo-font-size-s);\n  }\n  .md\\:text-m {\n    font-size: var(--lumo-font-size-m);\n  }\n  .md\\:text-l {\n    font-size: var(--lumo-font-size-l);\n  }\n  .md\\:text-xl {\n    font-size: var(--lumo-font-size-xl);\n  }\n  .md\\:text-2xl {\n    font-size: var(--lumo-font-size-xxl);\n  }\n  .md\\:text-3xl {\n    font-size: var(--lumo-font-size-xxxl);\n  }\n}\n@media (min-width: 1024px) {\n  .lg\\:text-2xs {\n    font-size: var(--lumo-font-size-xxs);\n  }\n  .lg\\:text-xs {\n    font-size: var(--lumo-font-size-xs);\n  }\n  .lg\\:text-s {\n    font-size: var(--lumo-font-size-s);\n  }\n  .lg\\:text-m {\n    font-size: var(--lumo-font-size-m);\n  }\n  .lg\\:text-l {\n    font-size: var(--lumo-font-size-l);\n  }\n  .lg\\:text-xl {\n    font-size: var(--lumo-font-size-xl);\n  }\n  .lg\\:text-2xl {\n    font-size: var(--lumo-font-size-xxl);\n  }\n  .lg\\:text-3xl {\n    font-size: var(--lumo-font-size-xxxl);\n  }\n}\n@media (min-width: 1280px) {\n  .xl\\:text-2xs {\n    font-size: var(--lumo-font-size-xxs);\n  }\n  .xl\\:text-xs {\n    font-size: var(--lumo-font-size-xs);\n  }\n  .xl\\:text-s {\n    font-size: var(--lumo-font-size-s);\n  }\n  .xl\\:text-m {\n    font-size: var(--lumo-font-size-m);\n  }\n  .xl\\:text-l {\n    font-size: var(--lumo-font-size-l);\n  }\n  .xl\\:text-xl {\n    font-size: var(--lumo-font-size-xl);\n  }\n  .xl\\:text-2xl {\n    font-size: var(--lumo-font-size-xxl);\n  }\n  .xl\\:text-3xl {\n    font-size: var(--lumo-font-size-xxxl);\n  }\n}\n@media (min-width: 1536px) {\n  .\\32xl\\:text-2xs {\n    font-size: var(--lumo-font-size-xxs);\n  }\n  .\\32xl\\:text-xs {\n    font-size: var(--lumo-font-size-xs);\n  }\n  .\\32xl\\:text-s {\n    font-size: var(--lumo-font-size-s);\n  }\n  .\\32xl\\:text-m {\n    font-size: var(--lumo-font-size-m);\n  }\n  .\\32xl\\:text-l {\n    font-size: var(--lumo-font-size-l);\n  }\n  .\\32xl\\:text-xl {\n    font-size: var(--lumo-font-size-xl);\n  }\n  .\\32xl\\:text-2xl {\n    font-size: var(--lumo-font-size-xxl);\n  }\n  .\\32xl\\:text-3xl {\n    font-size: var(--lumo-font-size-xxxl);\n  }\n}\n",""]),t.a=r},function(e,t,n){"use strict";var o=n(35),r=n.n(o),a=n(22),i=n.n(a),s=n(114),l=n(115),c=n(116),d=n(117),h=n(118),f=n(119),u=n(120),m=n(121),p=n(122),b=n(123),g=n(124),_=n(125),v=r()(!1),y=i()(s.a),w=i()(l.a),A=i()(c.a),x=i()(d.a),C=i()(h.a),S=i()(f.a),E=i()(u.a),k=i()(m.a),O=i()(p.a),L=i()(b.a),I=i()(g.a),T=i()(_.a);v.push([e.i,'.la,.lab,.lad,.lal,.lar,.las{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-block;font-style:normal;font-variant:normal;text-rendering:auto;line-height:1}.la-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}.la-xs{font-size:.75em}.la-sm{font-size:.875em}.la-1x{font-size:1em}.la-2x{font-size:2em}.la-3x{font-size:3em}.la-4x{font-size:4em}.la-5x{font-size:5em}.la-6x{font-size:6em}.la-7x{font-size:7em}.la-8x{font-size:8em}.la-9x{font-size:9em}.la-10x{font-size:10em}.la-fw{text-align:center;width:1.25em}.la-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.la-ul>li{position:relative}.la-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.la-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.la-pull-left{float:left}.la-pull-right{float:right}.la.la-pull-left,.lab.la-pull-left,.lal.la-pull-left,.lar.la-pull-left,.las.la-pull-left{margin-right:.3em}.la.la-pull-right,.lab.la-pull-right,.lal.la-pull-right,.lar.la-pull-right,.las.la-pull-right{margin-left:.3em}.la-spin{-webkit-animation:la-spin 2s infinite linear;animation:la-spin 2s infinite linear}.la-pulse{-webkit-animation:la-spin 1s infinite steps(8);animation:la-spin 1s infinite steps(8)}@-webkit-keyframes la-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes la-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.la-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.la-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.la-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.la-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.la-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.la-flip-both,.la-flip-horizontal.la-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .la-flip-both,:root .la-flip-horizontal,:root .la-flip-vertical,:root .la-rotate-180,:root .la-rotate-270,:root .la-rotate-90{-webkit-filter:none;filter:none}.la-stack{display:inline-block;height:2em;line-height:2em;position:relative;vertical-align:middle;width:2.5em}.la-stack-1x,.la-stack-2x{left:0;position:absolute;text-align:center;width:100%}.la-stack-1x{line-height:inherit}.la-stack-2x{font-size:2em}.la-inverse{color:#fff}.la-500px:before{content:"\\f26e"}.la-accessible-icon:before{content:"\\f368"}.la-accusoft:before{content:"\\f369"}.la-acquisitions-incorporated:before{content:"\\f6af"}.la-ad:before{content:"\\f641"}.la-address-book:before{content:"\\f2b9"}.la-address-card:before{content:"\\f2bb"}.la-adjust:before{content:"\\f042"}.la-adn:before{content:"\\f170"}.la-adobe:before{content:"\\f778"}.la-adversal:before{content:"\\f36a"}.la-affiliatetheme:before{content:"\\f36b"}.la-air-freshener:before{content:"\\f5d0"}.la-airbnb:before{content:"\\f834"}.la-algolia:before{content:"\\f36c"}.la-align-center:before{content:"\\f037"}.la-align-justify:before{content:"\\f039"}.la-align-left:before{content:"\\f036"}.la-align-right:before{content:"\\f038"}.la-alipay:before{content:"\\f642"}.la-allergies:before{content:"\\f461"}.la-amazon:before{content:"\\f270"}.la-amazon-pay:before{content:"\\f42c"}.la-ambulance:before{content:"\\f0f9"}.la-american-sign-language-interpreting:before{content:"\\f2a3"}.la-amilia:before{content:"\\f36d"}.la-anchor:before{content:"\\f13d"}.la-android:before{content:"\\f17b"}.la-angellist:before{content:"\\f209"}.la-angle-double-down:before{content:"\\f103"}.la-angle-double-left:before{content:"\\f100"}.la-angle-double-right:before{content:"\\f101"}.la-angle-double-up:before{content:"\\f102"}.la-angle-down:before{content:"\\f107"}.la-angle-left:before{content:"\\f104"}.la-angle-right:before{content:"\\f105"}.la-angle-up:before{content:"\\f106"}.la-angry:before{content:"\\f556"}.la-angrycreative:before{content:"\\f36e"}.la-angular:before{content:"\\f420"}.la-ankh:before{content:"\\f644"}.la-app-store:before{content:"\\f36f"}.la-app-store-ios:before{content:"\\f370"}.la-apper:before{content:"\\f371"}.la-apple:before{content:"\\f179"}.la-apple-alt:before{content:"\\f5d1"}.la-apple-pay:before{content:"\\f415"}.la-archive:before{content:"\\f187"}.la-archway:before{content:"\\f557"}.la-arrow-alt-circle-down:before{content:"\\f358"}.la-arrow-alt-circle-left:before{content:"\\f359"}.la-arrow-alt-circle-right:before{content:"\\f35a"}.la-arrow-alt-circle-up:before{content:"\\f35b"}.la-arrow-circle-down:before{content:"\\f0ab"}.la-arrow-circle-left:before{content:"\\f0a8"}.la-arrow-circle-right:before{content:"\\f0a9"}.la-arrow-circle-up:before{content:"\\f0aa"}.la-arrow-down:before{content:"\\f063"}.la-arrow-left:before{content:"\\f060"}.la-arrow-right:before{content:"\\f061"}.la-arrow-up:before{content:"\\f062"}.la-arrows-alt:before{content:"\\f0b2"}.la-arrows-alt-h:before{content:"\\f337"}.la-arrows-alt-v:before{content:"\\f338"}.la-artstation:before{content:"\\f77a"}.la-assistive-listening-systems:before{content:"\\f2a2"}.la-asterisk:before{content:"\\f069"}.la-asymmetrik:before{content:"\\f372"}.la-at:before{content:"\\f1fa"}.la-atlas:before{content:"\\f558"}.la-atlassian:before{content:"\\f77b"}.la-atom:before{content:"\\f5d2"}.la-audible:before{content:"\\f373"}.la-audio-description:before{content:"\\f29e"}.la-autoprefixer:before{content:"\\f41c"}.la-avianex:before{content:"\\f374"}.la-aviato:before{content:"\\f421"}.la-award:before{content:"\\f559"}.la-aws:before{content:"\\f375"}.la-baby:before{content:"\\f77c"}.la-baby-carriage:before{content:"\\f77d"}.la-backspace:before{content:"\\f55a"}.la-backward:before{content:"\\f04a"}.la-bacon:before{content:"\\f7e5"}.la-balance-scale:before{content:"\\f24e"}.la-balance-scale-left:before{content:"\\f515"}.la-balance-scale-right:before{content:"\\f516"}.la-ban:before{content:"\\f05e"}.la-band-aid:before{content:"\\f462"}.la-bandcamp:before{content:"\\f2d5"}.la-barcode:before{content:"\\f02a"}.la-bars:before{content:"\\f0c9"}.la-baseball-ball:before{content:"\\f433"}.la-basketball-ball:before{content:"\\f434"}.la-bath:before{content:"\\f2cd"}.la-battery-empty:before{content:"\\f244"}.la-battery-full:before{content:"\\f240"}.la-battery-half:before{content:"\\f242"}.la-battery-quarter:before{content:"\\f243"}.la-battery-three-quarters:before{content:"\\f241"}.la-battle-net:before{content:"\\f835"}.la-bed:before{content:"\\f236"}.la-beer:before{content:"\\f0fc"}.la-behance:before{content:"\\f1b4"}.la-behance-square:before{content:"\\f1b5"}.la-bell:before{content:"\\f0f3"}.la-bell-slash:before{content:"\\f1f6"}.la-bezier-curve:before{content:"\\f55b"}.la-bible:before{content:"\\f647"}.la-bicycle:before{content:"\\f206"}.la-biking:before{content:"\\f84a"}.la-bimobject:before{content:"\\f378"}.la-binoculars:before{content:"\\f1e5"}.la-biohazard:before{content:"\\f780"}.la-birthday-cake:before{content:"\\f1fd"}.la-bitbucket:before{content:"\\f171"}.la-bitcoin:before{content:"\\f379"}.la-bity:before{content:"\\f37a"}.la-black-tie:before{content:"\\f27e"}.la-blackberry:before{content:"\\f37b"}.la-blender:before{content:"\\f517"}.la-blender-phone:before{content:"\\f6b6"}.la-blind:before{content:"\\f29d"}.la-blog:before{content:"\\f781"}.la-blogger:before{content:"\\f37c"}.la-blogger-b:before{content:"\\f37d"}.la-bluetooth:before{content:"\\f293"}.la-bluetooth-b:before{content:"\\f294"}.la-bold:before{content:"\\f032"}.la-bolt:before{content:"\\f0e7"}.la-bomb:before{content:"\\f1e2"}.la-bone:before{content:"\\f5d7"}.la-bong:before{content:"\\f55c"}.la-book:before{content:"\\f02d"}.la-book-dead:before{content:"\\f6b7"}.la-book-medical:before{content:"\\f7e6"}.la-book-open:before{content:"\\f518"}.la-book-reader:before{content:"\\f5da"}.la-bookmark:before{content:"\\f02e"}.la-bootstrap:before{content:"\\f836"}.la-border-all:before{content:"\\f84c"}.la-border-none:before{content:"\\f850"}.la-border-style:before{content:"\\f853"}.la-bowling-ball:before{content:"\\f436"}.la-box:before{content:"\\f466"}.la-box-open:before{content:"\\f49e"}.la-boxes:before{content:"\\f468"}.la-braille:before{content:"\\f2a1"}.la-brain:before{content:"\\f5dc"}.la-bread-slice:before{content:"\\f7ec"}.la-briefcase:before{content:"\\f0b1"}.la-briefcase-medical:before{content:"\\f469"}.la-broadcast-tower:before{content:"\\f519"}.la-broom:before{content:"\\f51a"}.la-brush:before{content:"\\f55d"}.la-btc:before{content:"\\f15a"}.la-buffer:before{content:"\\f837"}.la-bug:before{content:"\\f188"}.la-building:before{content:"\\f1ad"}.la-bullhorn:before{content:"\\f0a1"}.la-bullseye:before{content:"\\f140"}.la-burn:before{content:"\\f46a"}.la-buromobelexperte:before{content:"\\f37f"}.la-bus:before{content:"\\f207"}.la-bus-alt:before{content:"\\f55e"}.la-business-time:before{content:"\\f64a"}.la-buy-n-large:before{content:"\\f8a6"}.la-buysellads:before{content:"\\f20d"}.la-calculator:before{content:"\\f1ec"}.la-calendar:before{content:"\\f133"}.la-calendar-alt:before{content:"\\f073"}.la-calendar-check:before{content:"\\f274"}.la-calendar-day:before{content:"\\f783"}.la-calendar-minus:before{content:"\\f272"}.la-calendar-plus:before{content:"\\f271"}.la-calendar-times:before{content:"\\f273"}.la-calendar-week:before{content:"\\f784"}.la-camera:before{content:"\\f030"}.la-camera-retro:before{content:"\\f083"}.la-campground:before{content:"\\f6bb"}.la-canadian-maple-leaf:before{content:"\\f785"}.la-candy-cane:before{content:"\\f786"}.la-cannabis:before{content:"\\f55f"}.la-capsules:before{content:"\\f46b"}.la-car:before{content:"\\f1b9"}.la-car-alt:before{content:"\\f5de"}.la-car-battery:before{content:"\\f5df"}.la-car-crash:before{content:"\\f5e1"}.la-car-side:before{content:"\\f5e4"}.la-caret-down:before{content:"\\f0d7"}.la-caret-left:before{content:"\\f0d9"}.la-caret-right:before{content:"\\f0da"}.la-caret-square-down:before{content:"\\f150"}.la-caret-square-left:before{content:"\\f191"}.la-caret-square-right:before{content:"\\f152"}.la-caret-square-up:before{content:"\\f151"}.la-caret-up:before{content:"\\f0d8"}.la-carrot:before{content:"\\f787"}.la-cart-arrow-down:before{content:"\\f218"}.la-cart-plus:before{content:"\\f217"}.la-cash-register:before{content:"\\f788"}.la-cat:before{content:"\\f6be"}.la-cc-amazon-pay:before{content:"\\f42d"}.la-cc-amex:before{content:"\\f1f3"}.la-cc-apple-pay:before{content:"\\f416"}.la-cc-diners-club:before{content:"\\f24c"}.la-cc-discover:before{content:"\\f1f2"}.la-cc-jcb:before{content:"\\f24b"}.la-cc-mastercard:before{content:"\\f1f1"}.la-cc-paypal:before{content:"\\f1f4"}.la-cc-stripe:before{content:"\\f1f5"}.la-cc-visa:before{content:"\\f1f0"}.la-centercode:before{content:"\\f380"}.la-centos:before{content:"\\f789"}.la-certificate:before{content:"\\f0a3"}.la-chair:before{content:"\\f6c0"}.la-chalkboard:before{content:"\\f51b"}.la-chalkboard-teacher:before{content:"\\f51c"}.la-charging-station:before{content:"\\f5e7"}.la-chart-area:before{content:"\\f1fe"}.la-chart-bar:before{content:"\\f080"}.la-chart-line:before{content:"\\f201"}.la-chart-pie:before{content:"\\f200"}.la-check:before{content:"\\f00c"}.la-check-circle:before{content:"\\f058"}.la-check-double:before{content:"\\f560"}.la-check-square:before{content:"\\f14a"}.la-cheese:before{content:"\\f7ef"}.la-chess:before{content:"\\f439"}.la-chess-bishop:before{content:"\\f43a"}.la-chess-board:before{content:"\\f43c"}.la-chess-king:before{content:"\\f43f"}.la-chess-knight:before{content:"\\f441"}.la-chess-pawn:before{content:"\\f443"}.la-chess-queen:before{content:"\\f445"}.la-chess-rook:before{content:"\\f447"}.la-chevron-circle-down:before{content:"\\f13a"}.la-chevron-circle-left:before{content:"\\f137"}.la-chevron-circle-right:before{content:"\\f138"}.la-chevron-circle-up:before{content:"\\f139"}.la-chevron-down:before{content:"\\f078"}.la-chevron-left:before{content:"\\f053"}.la-chevron-right:before{content:"\\f054"}.la-chevron-up:before{content:"\\f077"}.la-child:before{content:"\\f1ae"}.la-chrome:before{content:"\\f268"}.la-chromecast:before{content:"\\f838"}.la-church:before{content:"\\f51d"}.la-circle:before{content:"\\f111"}.la-circle-notch:before{content:"\\f1ce"}.la-city:before{content:"\\f64f"}.la-clinic-medical:before{content:"\\f7f2"}.la-clipboard:before{content:"\\f328"}.la-clipboard-check:before{content:"\\f46c"}.la-clipboard-list:before{content:"\\f46d"}.la-clock:before{content:"\\f017"}.la-clone:before{content:"\\f24d"}.la-closed-captioning:before{content:"\\f20a"}.la-cloud:before{content:"\\f0c2"}.la-cloud-download-alt:before{content:"\\f381"}.la-cloud-meatball:before{content:"\\f73b"}.la-cloud-moon:before{content:"\\f6c3"}.la-cloud-moon-rain:before{content:"\\f73c"}.la-cloud-rain:before{content:"\\f73d"}.la-cloud-showers-heavy:before{content:"\\f740"}.la-cloud-sun:before{content:"\\f6c4"}.la-cloud-sun-rain:before{content:"\\f743"}.la-cloud-upload-alt:before{content:"\\f382"}.la-cloudscale:before{content:"\\f383"}.la-cloudsmith:before{content:"\\f384"}.la-cloudversify:before{content:"\\f385"}.la-cocktail:before{content:"\\f561"}.la-code:before{content:"\\f121"}.la-code-branch:before{content:"\\f126"}.la-codepen:before{content:"\\f1cb"}.la-codiepie:before{content:"\\f284"}.la-coffee:before{content:"\\f0f4"}.la-cog:before{content:"\\f013"}.la-cogs:before{content:"\\f085"}.la-coins:before{content:"\\f51e"}.la-columns:before{content:"\\f0db"}.la-comment:before{content:"\\f075"}.la-comment-alt:before{content:"\\f27a"}.la-comment-dollar:before{content:"\\f651"}.la-comment-dots:before{content:"\\f4ad"}.la-comment-medical:before{content:"\\f7f5"}.la-comment-slash:before{content:"\\f4b3"}.la-comments:before{content:"\\f086"}.la-comments-dollar:before{content:"\\f653"}.la-compact-disc:before{content:"\\f51f"}.la-compass:before{content:"\\f14e"}.la-compress:before{content:"\\f066"}.la-compress-arrows-alt:before{content:"\\f78c"}.la-concierge-bell:before{content:"\\f562"}.la-confluence:before{content:"\\f78d"}.la-connectdevelop:before{content:"\\f20e"}.la-contao:before{content:"\\f26d"}.la-cookie:before{content:"\\f563"}.la-cookie-bite:before{content:"\\f564"}.la-copy:before{content:"\\f0c5"}.la-copyright:before{content:"\\f1f9"}.la-cotton-bureau:before{content:"\\f89e"}.la-couch:before{content:"\\f4b8"}.la-cpanel:before{content:"\\f388"}.la-creative-commons:before{content:"\\f25e"}.la-creative-commons-by:before{content:"\\f4e7"}.la-creative-commons-nc:before{content:"\\f4e8"}.la-creative-commons-nc-eu:before{content:"\\f4e9"}.la-creative-commons-nc-jp:before{content:"\\f4ea"}.la-creative-commons-nd:before{content:"\\f4eb"}.la-creative-commons-pd:before{content:"\\f4ec"}.la-creative-commons-pd-alt:before{content:"\\f4ed"}.la-creative-commons-remix:before{content:"\\f4ee"}.la-creative-commons-sa:before{content:"\\f4ef"}.la-creative-commons-sampling:before{content:"\\f4f0"}.la-creative-commons-sampling-plus:before{content:"\\f4f1"}.la-creative-commons-share:before{content:"\\f4f2"}.la-creative-commons-zero:before{content:"\\f4f3"}.la-credit-card:before{content:"\\f09d"}.la-critical-role:before{content:"\\f6c9"}.la-crop:before{content:"\\f125"}.la-crop-alt:before{content:"\\f565"}.la-cross:before{content:"\\f654"}.la-crosshairs:before{content:"\\f05b"}.la-crow:before{content:"\\f520"}.la-crown:before{content:"\\f521"}.la-crutch:before{content:"\\f7f7"}.la-css3:before{content:"\\f13c"}.la-css3-alt:before{content:"\\f38b"}.la-cube:before{content:"\\f1b2"}.la-cubes:before{content:"\\f1b3"}.la-cut:before{content:"\\f0c4"}.la-cuttlefish:before{content:"\\f38c"}.la-d-and-d:before{content:"\\f38d"}.la-d-and-d-beyond:before{content:"\\f6ca"}.la-dashcube:before{content:"\\f210"}.la-database:before{content:"\\f1c0"}.la-deaf:before{content:"\\f2a4"}.la-delicious:before{content:"\\f1a5"}.la-democrat:before{content:"\\f747"}.la-deploydog:before{content:"\\f38e"}.la-deskpro:before{content:"\\f38f"}.la-desktop:before{content:"\\f108"}.la-dev:before{content:"\\f6cc"}.la-deviantart:before{content:"\\f1bd"}.la-dharmachakra:before{content:"\\f655"}.la-dhl:before{content:"\\f790"}.la-diagnoses:before{content:"\\f470"}.la-diaspora:before{content:"\\f791"}.la-dice:before{content:"\\f522"}.la-dice-d20:before{content:"\\f6cf"}.la-dice-d6:before{content:"\\f6d1"}.la-dice-five:before{content:"\\f523"}.la-dice-four:before{content:"\\f524"}.la-dice-one:before{content:"\\f525"}.la-dice-six:before{content:"\\f526"}.la-dice-three:before{content:"\\f527"}.la-dice-two:before{content:"\\f528"}.la-digg:before{content:"\\f1a6"}.la-digital-ocean:before{content:"\\f391"}.la-digital-tachograph:before{content:"\\f566"}.la-directions:before{content:"\\f5eb"}.la-discord:before{content:"\\f392"}.la-discourse:before{content:"\\f393"}.la-divide:before{content:"\\f529"}.la-dizzy:before{content:"\\f567"}.la-dna:before{content:"\\f471"}.la-dochub:before{content:"\\f394"}.la-docker:before{content:"\\f395"}.la-dog:before{content:"\\f6d3"}.la-dollar-sign:before{content:"\\f155"}.la-dolly:before{content:"\\f472"}.la-dolly-flatbed:before{content:"\\f474"}.la-donate:before{content:"\\f4b9"}.la-door-closed:before{content:"\\f52a"}.la-door-open:before{content:"\\f52b"}.la-dot-circle:before{content:"\\f192"}.la-dove:before{content:"\\f4ba"}.la-download:before{content:"\\f019"}.la-draft2digital:before{content:"\\f396"}.la-drafting-compass:before{content:"\\f568"}.la-dragon:before{content:"\\f6d5"}.la-draw-polygon:before{content:"\\f5ee"}.la-dribbble:before{content:"\\f17d"}.la-dribbble-square:before{content:"\\f397"}.la-dropbox:before{content:"\\f16b"}.la-drum:before{content:"\\f569"}.la-drum-steelpan:before{content:"\\f56a"}.la-drumstick-bite:before{content:"\\f6d7"}.la-drupal:before{content:"\\f1a9"}.la-dumbbell:before{content:"\\f44b"}.la-dumpster:before{content:"\\f793"}.la-dumpster-fire:before{content:"\\f794"}.la-dungeon:before{content:"\\f6d9"}.la-dyalog:before{content:"\\f399"}.la-earlybirds:before{content:"\\f39a"}.la-ebay:before{content:"\\f4f4"}.la-edge:before{content:"\\f282"}.la-edit:before{content:"\\f044"}.la-egg:before{content:"\\f7fb"}.la-eject:before{content:"\\f052"}.la-elementor:before{content:"\\f430"}.la-ellipsis-h:before{content:"\\f141"}.la-ellipsis-v:before{content:"\\f142"}.la-ello:before{content:"\\f5f1"}.la-ember:before{content:"\\f423"}.la-empire:before{content:"\\f1d1"}.la-envelope:before{content:"\\f0e0"}.la-envelope-open:before{content:"\\f2b6"}.la-envelope-open-text:before{content:"\\f658"}.la-envelope-square:before{content:"\\f199"}.la-envira:before{content:"\\f299"}.la-equals:before{content:"\\f52c"}.la-eraser:before{content:"\\f12d"}.la-erlang:before{content:"\\f39d"}.la-ethereum:before{content:"\\f42e"}.la-ethernet:before{content:"\\f796"}.la-etsy:before{content:"\\f2d7"}.la-euro-sign:before{content:"\\f153"}.la-evernote:before{content:"\\f839"}.la-exchange-alt:before{content:"\\f362"}.la-exclamation:before{content:"\\f12a"}.la-exclamation-circle:before{content:"\\f06a"}.la-exclamation-triangle:before{content:"\\f071"}.la-expand:before{content:"\\f065"}.la-expand-arrows-alt:before{content:"\\f31e"}.la-expeditedssl:before{content:"\\f23e"}.la-external-link-alt:before{content:"\\f35d"}.la-external-link-square-alt:before{content:"\\f360"}.la-eye:before{content:"\\f06e"}.la-eye-dropper:before{content:"\\f1fb"}.la-eye-slash:before{content:"\\f070"}.la-facebook:before{content:"\\f09a"}.la-facebook-f:before{content:"\\f39e"}.la-facebook-messenger:before{content:"\\f39f"}.la-facebook-square:before{content:"\\f082"}.la-fan:before{content:"\\f863"}.la-fantasy-flight-games:before{content:"\\f6dc"}.la-fast-backward:before{content:"\\f049"}.la-fast-forward:before{content:"\\f050"}.la-fax:before{content:"\\f1ac"}.la-feather:before{content:"\\f52d"}.la-feather-alt:before{content:"\\f56b"}.la-fedex:before{content:"\\f797"}.la-fedora:before{content:"\\f798"}.la-female:before{content:"\\f182"}.la-fighter-jet:before{content:"\\f0fb"}.la-figma:before{content:"\\f799"}.la-file:before{content:"\\f15b"}.la-file-alt:before{content:"\\f15c"}.la-file-archive:before{content:"\\f1c6"}.la-file-audio:before{content:"\\f1c7"}.la-file-code:before{content:"\\f1c9"}.la-file-contract:before{content:"\\f56c"}.la-file-csv:before{content:"\\f6dd"}.la-file-download:before{content:"\\f56d"}.la-file-excel:before{content:"\\f1c3"}.la-file-export:before{content:"\\f56e"}.la-file-image:before{content:"\\f1c5"}.la-file-import:before{content:"\\f56f"}.la-file-invoice:before{content:"\\f570"}.la-file-invoice-dollar:before{content:"\\f571"}.la-file-medical:before{content:"\\f477"}.la-file-medical-alt:before{content:"\\f478"}.la-file-pdf:before{content:"\\f1c1"}.la-file-powerpoint:before{content:"\\f1c4"}.la-file-prescription:before{content:"\\f572"}.la-file-signature:before{content:"\\f573"}.la-file-upload:before{content:"\\f574"}.la-file-video:before{content:"\\f1c8"}.la-file-word:before{content:"\\f1c2"}.la-fill:before{content:"\\f575"}.la-fill-drip:before{content:"\\f576"}.la-film:before{content:"\\f008"}.la-filter:before{content:"\\f0b0"}.la-fingerprint:before{content:"\\f577"}.la-fire:before{content:"\\f06d"}.la-fire-alt:before{content:"\\f7e4"}.la-fire-extinguisher:before{content:"\\f134"}.la-firefox:before{content:"\\f269"}.la-first-aid:before{content:"\\f479"}.la-first-order:before{content:"\\f2b0"}.la-first-order-alt:before{content:"\\f50a"}.la-firstdraft:before{content:"\\f3a1"}.la-fish:before{content:"\\f578"}.la-fist-raised:before{content:"\\f6de"}.la-flag:before{content:"\\f024"}.la-flag-checkered:before{content:"\\f11e"}.la-flag-usa:before{content:"\\f74d"}.la-flask:before{content:"\\f0c3"}.la-flickr:before{content:"\\f16e"}.la-flipboard:before{content:"\\f44d"}.la-flushed:before{content:"\\f579"}.la-fly:before{content:"\\f417"}.la-folder:before{content:"\\f07b"}.la-folder-minus:before{content:"\\f65d"}.la-folder-open:before{content:"\\f07c"}.la-folder-plus:before{content:"\\f65e"}.la-font:before{content:"\\f031"}.la-font-awesome:before{content:"\\f2b4"}.la-font-awesome-alt:before{content:"\\f35c"}.la-font-awesome-flag:before{content:"\\f425"}.la-font-awesome-logo-full:before{content:"\\f4e6"}.la-fonticons:before{content:"\\f280"}.la-fonticons-fi:before{content:"\\f3a2"}.la-football-ball:before{content:"\\f44e"}.la-fort-awesome:before{content:"\\f286"}.la-fort-awesome-alt:before{content:"\\f3a3"}.la-forumbee:before{content:"\\f211"}.la-forward:before{content:"\\f04e"}.la-foursquare:before{content:"\\f180"}.la-free-code-camp:before{content:"\\f2c5"}.la-freebsd:before{content:"\\f3a4"}.la-frog:before{content:"\\f52e"}.la-frown:before{content:"\\f119"}.la-frown-open:before{content:"\\f57a"}.la-fulcrum:before{content:"\\f50b"}.la-funnel-dollar:before{content:"\\f662"}.la-futbol:before{content:"\\f1e3"}.la-galactic-republic:before{content:"\\f50c"}.la-galactic-senate:before{content:"\\f50d"}.la-gamepad:before{content:"\\f11b"}.la-gas-pump:before{content:"\\f52f"}.la-gavel:before{content:"\\f0e3"}.la-gem:before{content:"\\f3a5"}.la-genderless:before{content:"\\f22d"}.la-get-pocket:before{content:"\\f265"}.la-gg:before{content:"\\f260"}.la-gg-circle:before{content:"\\f261"}.la-ghost:before{content:"\\f6e2"}.la-gift:before{content:"\\f06b"}.la-gifts:before{content:"\\f79c"}.la-git:before{content:"\\f1d3"}.la-git-alt:before{content:"\\f841"}.la-git-square:before{content:"\\f1d2"}.la-github:before{content:"\\f09b"}.la-github-alt:before{content:"\\f113"}.la-github-square:before{content:"\\f092"}.la-gitkraken:before{content:"\\f3a6"}.la-gitlab:before{content:"\\f296"}.la-gitter:before{content:"\\f426"}.la-glass-cheers:before{content:"\\f79f"}.la-glass-martini:before{content:"\\f000"}.la-glass-martini-alt:before{content:"\\f57b"}.la-glass-whiskey:before{content:"\\f7a0"}.la-glasses:before{content:"\\f530"}.la-glide:before{content:"\\f2a5"}.la-glide-g:before{content:"\\f2a6"}.la-globe:before{content:"\\f0ac"}.la-globe-africa:before{content:"\\f57c"}.la-globe-americas:before{content:"\\f57d"}.la-globe-asia:before{content:"\\f57e"}.la-globe-europe:before{content:"\\f7a2"}.la-gofore:before{content:"\\f3a7"}.la-golf-ball:before{content:"\\f450"}.la-goodreads:before{content:"\\f3a8"}.la-goodreads-g:before{content:"\\f3a9"}.la-google:before{content:"\\f1a0"}.la-google-drive:before{content:"\\f3aa"}.la-google-play:before{content:"\\f3ab"}.la-google-plus:before{content:"\\f2b3"}.la-google-plus-g:before{content:"\\f0d5"}.la-google-plus-square:before{content:"\\f0d4"}.la-google-wallet:before{content:"\\f1ee"}.la-gopuram:before{content:"\\f664"}.la-graduation-cap:before{content:"\\f19d"}.la-gratipay:before{content:"\\f184"}.la-grav:before{content:"\\f2d6"}.la-greater-than:before{content:"\\f531"}.la-greater-than-equal:before{content:"\\f532"}.la-grimace:before{content:"\\f57f"}.la-grin:before{content:"\\f580"}.la-grin-alt:before{content:"\\f581"}.la-grin-beam:before{content:"\\f582"}.la-grin-beam-sweat:before{content:"\\f583"}.la-grin-hearts:before{content:"\\f584"}.la-grin-squint:before{content:"\\f585"}.la-grin-squint-tears:before{content:"\\f586"}.la-grin-stars:before{content:"\\f587"}.la-grin-tears:before{content:"\\f588"}.la-grin-tongue:before{content:"\\f589"}.la-grin-tongue-squint:before{content:"\\f58a"}.la-grin-tongue-wink:before{content:"\\f58b"}.la-grin-wink:before{content:"\\f58c"}.la-grip-horizontal:before{content:"\\f58d"}.la-grip-lines:before{content:"\\f7a4"}.la-grip-lines-vertical:before{content:"\\f7a5"}.la-grip-vertical:before{content:"\\f58e"}.la-gripfire:before{content:"\\f3ac"}.la-grunt:before{content:"\\f3ad"}.la-guitar:before{content:"\\f7a6"}.la-gulp:before{content:"\\f3ae"}.la-h-square:before{content:"\\f0fd"}.la-hacker-news:before{content:"\\f1d4"}.la-hacker-news-square:before{content:"\\f3af"}.la-hackerrank:before{content:"\\f5f7"}.la-hamburger:before{content:"\\f805"}.la-hammer:before{content:"\\f6e3"}.la-hamsa:before{content:"\\f665"}.la-hand-holding:before{content:"\\f4bd"}.la-hand-holding-heart:before{content:"\\f4be"}.la-hand-holding-usd:before{content:"\\f4c0"}.la-hand-lizard:before{content:"\\f258"}.la-hand-middle-finger:before{content:"\\f806"}.la-hand-paper:before{content:"\\f256"}.la-hand-peace:before{content:"\\f25b"}.la-hand-point-down:before{content:"\\f0a7"}.la-hand-point-left:before{content:"\\f0a5"}.la-hand-point-right:before{content:"\\f0a4"}.la-hand-point-up:before{content:"\\f0a6"}.la-hand-pointer:before{content:"\\f25a"}.la-hand-rock:before{content:"\\f255"}.la-hand-scissors:before{content:"\\f257"}.la-hand-spock:before{content:"\\f259"}.la-hands:before{content:"\\f4c2"}.la-hands-helping:before{content:"\\f4c4"}.la-handshake:before{content:"\\f2b5"}.la-hanukiah:before{content:"\\f6e6"}.la-hard-hat:before{content:"\\f807"}.la-hashtag:before{content:"\\f292"}.la-hat-cowboy:before{content:"\\f8c0"}.la-hat-cowboy-side:before{content:"\\f8c1"}.la-hat-wizard:before{content:"\\f6e8"}.la-haykal:before{content:"\\f666"}.la-hdd:before{content:"\\f0a0"}.la-heading:before{content:"\\f1dc"}.la-headphones:before{content:"\\f025"}.la-headphones-alt:before{content:"\\f58f"}.la-headset:before{content:"\\f590"}.la-heart:before{content:"\\f004"}.la-heart-broken:before{content:"\\f7a9"}.la-heartbeat:before{content:"\\f21e"}.la-helicopter:before{content:"\\f533"}.la-highlighter:before{content:"\\f591"}.la-hiking:before{content:"\\f6ec"}.la-hippo:before{content:"\\f6ed"}.la-hips:before{content:"\\f452"}.la-hire-a-helper:before{content:"\\f3b0"}.la-history:before{content:"\\f1da"}.la-hockey-puck:before{content:"\\f453"}.la-holly-berry:before{content:"\\f7aa"}.la-home:before{content:"\\f015"}.la-hooli:before{content:"\\f427"}.la-hornbill:before{content:"\\f592"}.la-horse:before{content:"\\f6f0"}.la-horse-head:before{content:"\\f7ab"}.la-hospital:before{content:"\\f0f8"}.la-hospital-alt:before{content:"\\f47d"}.la-hospital-symbol:before{content:"\\f47e"}.la-hot-tub:before{content:"\\f593"}.la-hotdog:before{content:"\\f80f"}.la-hotel:before{content:"\\f594"}.la-hotjar:before{content:"\\f3b1"}.la-hourglass:before{content:"\\f254"}.la-hourglass-end:before{content:"\\f253"}.la-hourglass-half:before{content:"\\f252"}.la-hourglass-start:before{content:"\\f251"}.la-house-damage:before{content:"\\f6f1"}.la-houzz:before{content:"\\f27c"}.la-hryvnia:before{content:"\\f6f2"}.la-html5:before{content:"\\f13b"}.la-hubspot:before{content:"\\f3b2"}.la-i-cursor:before{content:"\\f246"}.la-ice-cream:before{content:"\\f810"}.la-icicles:before{content:"\\f7ad"}.la-icons:before{content:"\\f86d"}.la-id-badge:before{content:"\\f2c1"}.la-id-card:before{content:"\\f2c2"}.la-id-card-alt:before{content:"\\f47f"}.la-igloo:before{content:"\\f7ae"}.la-image:before{content:"\\f03e"}.la-images:before{content:"\\f302"}.la-imdb:before{content:"\\f2d8"}.la-inbox:before{content:"\\f01c"}.la-indent:before{content:"\\f03c"}.la-industry:before{content:"\\f275"}.la-infinity:before{content:"\\f534"}.la-info:before{content:"\\f129"}.la-info-circle:before{content:"\\f05a"}.la-instagram:before{content:"\\f16d"}.la-intercom:before{content:"\\f7af"}.la-internet-explorer:before{content:"\\f26b"}.la-invision:before{content:"\\f7b0"}.la-ioxhost:before{content:"\\f208"}.la-italic:before{content:"\\f033"}.la-itch-io:before{content:"\\f83a"}.la-itunes:before{content:"\\f3b4"}.la-itunes-note:before{content:"\\f3b5"}.la-java:before{content:"\\f4e4"}.la-jedi:before{content:"\\f669"}.la-jedi-order:before{content:"\\f50e"}.la-jenkins:before{content:"\\f3b6"}.la-jira:before{content:"\\f7b1"}.la-joget:before{content:"\\f3b7"}.la-joint:before{content:"\\f595"}.la-joomla:before{content:"\\f1aa"}.la-journal-whills:before{content:"\\f66a"}.la-js:before{content:"\\f3b8"}.la-js-square:before{content:"\\f3b9"}.la-jsfiddle:before{content:"\\f1cc"}.la-kaaba:before{content:"\\f66b"}.la-kaggle:before{content:"\\f5fa"}.la-key:before{content:"\\f084"}.la-keybase:before{content:"\\f4f5"}.la-keyboard:before{content:"\\f11c"}.la-keycdn:before{content:"\\f3ba"}.la-khanda:before{content:"\\f66d"}.la-kickstarter:before{content:"\\f3bb"}.la-kickstarter-k:before{content:"\\f3bc"}.la-kiss:before{content:"\\f596"}.la-kiss-beam:before{content:"\\f597"}.la-kiss-wink-heart:before{content:"\\f598"}.la-kiwi-bird:before{content:"\\f535"}.la-korvue:before{content:"\\f42f"}.la-landmark:before{content:"\\f66f"}.la-language:before{content:"\\f1ab"}.la-laptop:before{content:"\\f109"}.la-laptop-code:before{content:"\\f5fc"}.la-laptop-medical:before{content:"\\f812"}.la-laravel:before{content:"\\f3bd"}.la-lastfm:before{content:"\\f202"}.la-lastfm-square:before{content:"\\f203"}.la-laugh:before{content:"\\f599"}.la-laugh-beam:before{content:"\\f59a"}.la-laugh-squint:before{content:"\\f59b"}.la-laugh-wink:before{content:"\\f59c"}.la-layer-group:before{content:"\\f5fd"}.la-leaf:before{content:"\\f06c"}.la-leanpub:before{content:"\\f212"}.la-lemon:before{content:"\\f094"}.la-less:before{content:"\\f41d"}.la-less-than:before{content:"\\f536"}.la-less-than-equal:before{content:"\\f537"}.la-level-down-alt:before{content:"\\f3be"}.la-level-up-alt:before{content:"\\f3bf"}.la-life-ring:before{content:"\\f1cd"}.la-lightbulb:before{content:"\\f0eb"}.la-line:before{content:"\\f3c0"}.la-link:before{content:"\\f0c1"}.la-linkedin:before{content:"\\f08c"}.la-linkedin-in:before{content:"\\f0e1"}.la-linode:before{content:"\\f2b8"}.la-linux:before{content:"\\f17c"}.la-lira-sign:before{content:"\\f195"}.la-list:before{content:"\\f03a"}.la-list-alt:before{content:"\\f022"}.la-list-ol:before{content:"\\f0cb"}.la-list-ul:before{content:"\\f0ca"}.la-location-arrow:before{content:"\\f124"}.la-lock:before{content:"\\f023"}.la-lock-open:before{content:"\\f3c1"}.la-long-arrow-alt-down:before{content:"\\f309"}.la-long-arrow-alt-left:before{content:"\\f30a"}.la-long-arrow-alt-right:before{content:"\\f30b"}.la-long-arrow-alt-up:before{content:"\\f30c"}.la-low-vision:before{content:"\\f2a8"}.la-luggage-cart:before{content:"\\f59d"}.la-lyft:before{content:"\\f3c3"}.la-magento:before{content:"\\f3c4"}.la-magic:before{content:"\\f0d0"}.la-magnet:before{content:"\\f076"}.la-mail-bulk:before{content:"\\f674"}.la-mailchimp:before{content:"\\f59e"}.la-male:before{content:"\\f183"}.la-mandalorian:before{content:"\\f50f"}.la-map:before{content:"\\f279"}.la-map-marked:before{content:"\\f59f"}.la-map-marked-alt:before{content:"\\f5a0"}.la-map-marker:before{content:"\\f041"}.la-map-marker-alt:before{content:"\\f3c5"}.la-map-pin:before{content:"\\f276"}.la-map-signs:before{content:"\\f277"}.la-markdown:before{content:"\\f60f"}.la-marker:before{content:"\\f5a1"}.la-mars:before{content:"\\f222"}.la-mars-double:before{content:"\\f227"}.la-mars-stroke:before{content:"\\f229"}.la-mars-stroke-h:before{content:"\\f22b"}.la-mars-stroke-v:before{content:"\\f22a"}.la-mask:before{content:"\\f6fa"}.la-mastodon:before{content:"\\f4f6"}.la-maxcdn:before{content:"\\f136"}.la-mdb:before{content:"\\f8ca"}.la-medal:before{content:"\\f5a2"}.la-medapps:before{content:"\\f3c6"}.la-medium:before{content:"\\f23a"}.la-medium-m:before{content:"\\f3c7"}.la-medkit:before{content:"\\f0fa"}.la-medrt:before{content:"\\f3c8"}.la-meetup:before{content:"\\f2e0"}.la-megaport:before{content:"\\f5a3"}.la-meh:before{content:"\\f11a"}.la-meh-blank:before{content:"\\f5a4"}.la-meh-rolling-eyes:before{content:"\\f5a5"}.la-memory:before{content:"\\f538"}.la-mendeley:before{content:"\\f7b3"}.la-menorah:before{content:"\\f676"}.la-mercury:before{content:"\\f223"}.la-meteor:before{content:"\\f753"}.la-microchip:before{content:"\\f2db"}.la-microphone:before{content:"\\f130"}.la-microphone-alt:before{content:"\\f3c9"}.la-microphone-alt-slash:before{content:"\\f539"}.la-microphone-slash:before{content:"\\f131"}.la-microscope:before{content:"\\f610"}.la-microsoft:before{content:"\\f3ca"}.la-minus:before{content:"\\f068"}.la-minus-circle:before{content:"\\f056"}.la-minus-square:before{content:"\\f146"}.la-mitten:before{content:"\\f7b5"}.la-mix:before{content:"\\f3cb"}.la-mixcloud:before{content:"\\f289"}.la-mizuni:before{content:"\\f3cc"}.la-mobile:before{content:"\\f10b"}.la-mobile-alt:before{content:"\\f3cd"}.la-modx:before{content:"\\f285"}.la-monero:before{content:"\\f3d0"}.la-money-bill:before{content:"\\f0d6"}.la-money-bill-alt:before{content:"\\f3d1"}.la-money-bill-wave:before{content:"\\f53a"}.la-money-bill-wave-alt:before{content:"\\f53b"}.la-money-check:before{content:"\\f53c"}.la-money-check-alt:before{content:"\\f53d"}.la-monument:before{content:"\\f5a6"}.la-moon:before{content:"\\f186"}.la-mortar-pestle:before{content:"\\f5a7"}.la-mosque:before{content:"\\f678"}.la-motorcycle:before{content:"\\f21c"}.la-mountain:before{content:"\\f6fc"}.la-mouse:before{content:"\\f8cc"}.la-mouse-pointer:before{content:"\\f245"}.la-mug-hot:before{content:"\\f7b6"}.la-music:before{content:"\\f001"}.la-napster:before{content:"\\f3d2"}.la-neos:before{content:"\\f612"}.la-network-wired:before{content:"\\f6ff"}.la-neuter:before{content:"\\f22c"}.la-newspaper:before{content:"\\f1ea"}.la-nimblr:before{content:"\\f5a8"}.la-node:before{content:"\\f419"}.la-node-js:before{content:"\\f3d3"}.la-not-equal:before{content:"\\f53e"}.la-notes-medical:before{content:"\\f481"}.la-npm:before{content:"\\f3d4"}.la-ns8:before{content:"\\f3d5"}.la-nutritionix:before{content:"\\f3d6"}.la-object-group:before{content:"\\f247"}.la-object-ungroup:before{content:"\\f248"}.la-odnoklassniki:before{content:"\\f263"}.la-odnoklassniki-square:before{content:"\\f264"}.la-oil-can:before{content:"\\f613"}.la-old-republic:before{content:"\\f510"}.la-om:before{content:"\\f679"}.la-opencart:before{content:"\\f23d"}.la-openid:before{content:"\\f19b"}.la-opera:before{content:"\\f26a"}.la-optin-monster:before{content:"\\f23c"}.la-orcid:before{content:"\\f8d2"}.la-osi:before{content:"\\f41a"}.la-otter:before{content:"\\f700"}.la-outdent:before{content:"\\f03b"}.la-page4:before{content:"\\f3d7"}.la-pagelines:before{content:"\\f18c"}.la-pager:before{content:"\\f815"}.la-paint-brush:before{content:"\\f1fc"}.la-paint-roller:before{content:"\\f5aa"}.la-palette:before{content:"\\f53f"}.la-palfed:before{content:"\\f3d8"}.la-pallet:before{content:"\\f482"}.la-paper-plane:before{content:"\\f1d8"}.la-paperclip:before{content:"\\f0c6"}.la-parachute-box:before{content:"\\f4cd"}.la-paragraph:before{content:"\\f1dd"}.la-parking:before{content:"\\f540"}.la-passport:before{content:"\\f5ab"}.la-pastafarianism:before{content:"\\f67b"}.la-paste:before{content:"\\f0ea"}.la-patreon:before{content:"\\f3d9"}.la-pause:before{content:"\\f04c"}.la-pause-circle:before{content:"\\f28b"}.la-paw:before{content:"\\f1b0"}.la-paypal:before{content:"\\f1ed"}.la-peace:before{content:"\\f67c"}.la-pen:before{content:"\\f304"}.la-pen-alt:before{content:"\\f305"}.la-pen-fancy:before{content:"\\f5ac"}.la-pen-nib:before{content:"\\f5ad"}.la-pen-square:before{content:"\\f14b"}.la-pencil-alt:before{content:"\\f303"}.la-pencil-ruler:before{content:"\\f5ae"}.la-penny-arcade:before{content:"\\f704"}.la-people-carry:before{content:"\\f4ce"}.la-pepper-hot:before{content:"\\f816"}.la-percent:before{content:"\\f295"}.la-percentage:before{content:"\\f541"}.la-periscope:before{content:"\\f3da"}.la-person-booth:before{content:"\\f756"}.la-phabricator:before{content:"\\f3db"}.la-phoenix-framework:before{content:"\\f3dc"}.la-phoenix-squadron:before{content:"\\f511"}.la-phone:before{content:"\\f095"}.la-phone-alt:before{content:"\\f879"}.la-phone-slash:before{content:"\\f3dd"}.la-phone-square:before{content:"\\f098"}.la-phone-square-alt:before{content:"\\f87b"}.la-phone-volume:before{content:"\\f2a0"}.la-photo-video:before{content:"\\f87c"}.la-php:before{content:"\\f457"}.la-pied-piper:before{content:"\\f2ae"}.la-pied-piper-alt:before{content:"\\f1a8"}.la-pied-piper-hat:before{content:"\\f4e5"}.la-pied-piper-pp:before{content:"\\f1a7"}.la-piggy-bank:before{content:"\\f4d3"}.la-pills:before{content:"\\f484"}.la-pinterest:before{content:"\\f0d2"}.la-pinterest-p:before{content:"\\f231"}.la-pinterest-square:before{content:"\\f0d3"}.la-pizza-slice:before{content:"\\f818"}.la-place-of-worship:before{content:"\\f67f"}.la-plane:before{content:"\\f072"}.la-plane-arrival:before{content:"\\f5af"}.la-plane-departure:before{content:"\\f5b0"}.la-play:before{content:"\\f04b"}.la-play-circle:before{content:"\\f144"}.la-playstation:before{content:"\\f3df"}.la-plug:before{content:"\\f1e6"}.la-plus:before{content:"\\f067"}.la-plus-circle:before{content:"\\f055"}.la-plus-square:before{content:"\\f0fe"}.la-podcast:before{content:"\\f2ce"}.la-poll:before{content:"\\f681"}.la-poll-h:before{content:"\\f682"}.la-poo:before{content:"\\f2fe"}.la-poo-storm:before{content:"\\f75a"}.la-poop:before{content:"\\f619"}.la-portrait:before{content:"\\f3e0"}.la-pound-sign:before{content:"\\f154"}.la-power-off:before{content:"\\f011"}.la-pray:before{content:"\\f683"}.la-praying-hands:before{content:"\\f684"}.la-prescription:before{content:"\\f5b1"}.la-prescription-bottle:before{content:"\\f485"}.la-prescription-bottle-alt:before{content:"\\f486"}.la-print:before{content:"\\f02f"}.la-procedures:before{content:"\\f487"}.la-product-hunt:before{content:"\\f288"}.la-project-diagram:before{content:"\\f542"}.la-pushed:before{content:"\\f3e1"}.la-puzzle-piece:before{content:"\\f12e"}.la-python:before{content:"\\f3e2"}.la-qq:before{content:"\\f1d6"}.la-qrcode:before{content:"\\f029"}.la-question:before{content:"\\f128"}.la-question-circle:before{content:"\\f059"}.la-quidditch:before{content:"\\f458"}.la-quinscape:before{content:"\\f459"}.la-quora:before{content:"\\f2c4"}.la-quote-left:before{content:"\\f10d"}.la-quote-right:before{content:"\\f10e"}.la-quran:before{content:"\\f687"}.la-r-project:before{content:"\\f4f7"}.la-radiation:before{content:"\\f7b9"}.la-radiation-alt:before{content:"\\f7ba"}.la-rainbow:before{content:"\\f75b"}.la-random:before{content:"\\f074"}.la-raspberry-pi:before{content:"\\f7bb"}.la-ravelry:before{content:"\\f2d9"}.la-react:before{content:"\\f41b"}.la-reacteurope:before{content:"\\f75d"}.la-readme:before{content:"\\f4d5"}.la-rebel:before{content:"\\f1d0"}.la-receipt:before{content:"\\f543"}.la-record-vinyl:before{content:"\\f8d9"}.la-recycle:before{content:"\\f1b8"}.la-red-river:before{content:"\\f3e3"}.la-reddit:before{content:"\\f1a1"}.la-reddit-alien:before{content:"\\f281"}.la-reddit-square:before{content:"\\f1a2"}.la-redhat:before{content:"\\f7bc"}.la-redo:before{content:"\\f01e"}.la-redo-alt:before{content:"\\f2f9"}.la-registered:before{content:"\\f25d"}.la-remove-format:before{content:"\\f87d"}.la-renren:before{content:"\\f18b"}.la-reply:before{content:"\\f3e5"}.la-reply-all:before{content:"\\f122"}.la-replyd:before{content:"\\f3e6"}.la-republican:before{content:"\\f75e"}.la-researchgate:before{content:"\\f4f8"}.la-resolving:before{content:"\\f3e7"}.la-restroom:before{content:"\\f7bd"}.la-retweet:before{content:"\\f079"}.la-rev:before{content:"\\f5b2"}.la-ribbon:before{content:"\\f4d6"}.la-ring:before{content:"\\f70b"}.la-road:before{content:"\\f018"}.la-robot:before{content:"\\f544"}.la-rocket:before{content:"\\f135"}.la-rocketchat:before{content:"\\f3e8"}.la-rockrms:before{content:"\\f3e9"}.la-route:before{content:"\\f4d7"}.la-rss:before{content:"\\f09e"}.la-rss-square:before{content:"\\f143"}.la-ruble-sign:before{content:"\\f158"}.la-ruler:before{content:"\\f545"}.la-ruler-combined:before{content:"\\f546"}.la-ruler-horizontal:before{content:"\\f547"}.la-ruler-vertical:before{content:"\\f548"}.la-running:before{content:"\\f70c"}.la-rupee-sign:before{content:"\\f156"}.la-sad-cry:before{content:"\\f5b3"}.la-sad-tear:before{content:"\\f5b4"}.la-safari:before{content:"\\f267"}.la-salesforce:before{content:"\\f83b"}.la-sass:before{content:"\\f41e"}.la-satellite:before{content:"\\f7bf"}.la-satellite-dish:before{content:"\\f7c0"}.la-save:before{content:"\\f0c7"}.la-schlix:before{content:"\\f3ea"}.la-school:before{content:"\\f549"}.la-screwdriver:before{content:"\\f54a"}.la-scribd:before{content:"\\f28a"}.la-scroll:before{content:"\\f70e"}.la-sd-card:before{content:"\\f7c2"}.la-search:before{content:"\\f002"}.la-search-dollar:before{content:"\\f688"}.la-search-location:before{content:"\\f689"}.la-search-minus:before{content:"\\f010"}.la-search-plus:before{content:"\\f00e"}.la-searchengin:before{content:"\\f3eb"}.la-seedling:before{content:"\\f4d8"}.la-sellcast:before{content:"\\f2da"}.la-sellsy:before{content:"\\f213"}.la-server:before{content:"\\f233"}.la-servicestack:before{content:"\\f3ec"}.la-shapes:before{content:"\\f61f"}.la-share:before{content:"\\f064"}.la-share-alt:before{content:"\\f1e0"}.la-share-alt-square:before{content:"\\f1e1"}.la-share-square:before{content:"\\f14d"}.la-shekel-sign:before{content:"\\f20b"}.la-shield-alt:before{content:"\\f3ed"}.la-ship:before{content:"\\f21a"}.la-shipping-fast:before{content:"\\f48b"}.la-shirtsinbulk:before{content:"\\f214"}.la-shoe-prints:before{content:"\\f54b"}.la-shopping-bag:before{content:"\\f290"}.la-shopping-basket:before{content:"\\f291"}.la-shopping-cart:before{content:"\\f07a"}.la-shopware:before{content:"\\f5b5"}.la-shower:before{content:"\\f2cc"}.la-shuttle-van:before{content:"\\f5b6"}.la-sign:before{content:"\\f4d9"}.la-sign-in-alt:before{content:"\\f2f6"}.la-sign-language:before{content:"\\f2a7"}.la-sign-out-alt:before{content:"\\f2f5"}.la-signal:before{content:"\\f012"}.la-signature:before{content:"\\f5b7"}.la-sim-card:before{content:"\\f7c4"}.la-simplybuilt:before{content:"\\f215"}.la-sistrix:before{content:"\\f3ee"}.la-sitemap:before{content:"\\f0e8"}.la-sith:before{content:"\\f512"}.la-skating:before{content:"\\f7c5"}.la-sketch:before{content:"\\f7c6"}.la-skiing:before{content:"\\f7c9"}.la-skiing-nordic:before{content:"\\f7ca"}.la-skull:before{content:"\\f54c"}.la-skull-crossbones:before{content:"\\f714"}.la-skyatlas:before{content:"\\f216"}.la-skype:before{content:"\\f17e"}.la-slack:before{content:"\\f198"}.la-slack-hash:before{content:"\\f3ef"}.la-slash:before{content:"\\f715"}.la-sleigh:before{content:"\\f7cc"}.la-sliders-h:before{content:"\\f1de"}.la-slideshare:before{content:"\\f1e7"}.la-smile:before{content:"\\f118"}.la-smile-beam:before{content:"\\f5b8"}.la-smile-wink:before{content:"\\f4da"}.la-smog:before{content:"\\f75f"}.la-smoking:before{content:"\\f48d"}.la-smoking-ban:before{content:"\\f54d"}.la-sms:before{content:"\\f7cd"}.la-snapchat:before{content:"\\f2ab"}.la-snapchat-ghost:before{content:"\\f2ac"}.la-snapchat-square:before{content:"\\f2ad"}.la-snowboarding:before{content:"\\f7ce"}.la-snowflake:before{content:"\\f2dc"}.la-snowman:before{content:"\\f7d0"}.la-snowplow:before{content:"\\f7d2"}.la-socks:before{content:"\\f696"}.la-solar-panel:before{content:"\\f5ba"}.la-sort:before{content:"\\f0dc"}.la-sort-alpha-down:before{content:"\\f15d"}.la-sort-alpha-down-alt:before{content:"\\f881"}.la-sort-alpha-up:before{content:"\\f15e"}.la-sort-alpha-up-alt:before{content:"\\f882"}.la-sort-amount-down:before{content:"\\f160"}.la-sort-amount-down-alt:before{content:"\\f884"}.la-sort-amount-up:before{content:"\\f161"}.la-sort-amount-up-alt:before{content:"\\f885"}.la-sort-down:before{content:"\\f0dd"}.la-sort-numeric-down:before{content:"\\f162"}.la-sort-numeric-down-alt:before{content:"\\f886"}.la-sort-numeric-up:before{content:"\\f163"}.la-sort-numeric-up-alt:before{content:"\\f887"}.la-sort-up:before{content:"\\f0de"}.la-soundcloud:before{content:"\\f1be"}.la-sourcetree:before{content:"\\f7d3"}.la-spa:before{content:"\\f5bb"}.la-space-shuttle:before{content:"\\f197"}.la-speakap:before{content:"\\f3f3"}.la-speaker-deck:before{content:"\\f83c"}.la-spell-check:before{content:"\\f891"}.la-spider:before{content:"\\f717"}.la-spinner:before{content:"\\f110"}.la-splotch:before{content:"\\f5bc"}.la-spotify:before{content:"\\f1bc"}.la-spray-can:before{content:"\\f5bd"}.la-square:before{content:"\\f0c8"}.la-square-full:before{content:"\\f45c"}.la-square-root-alt:before{content:"\\f698"}.la-squarespace:before{content:"\\f5be"}.la-stack-exchange:before{content:"\\f18d"}.la-stack-overflow:before{content:"\\f16c"}.la-stackpath:before{content:"\\f842"}.la-stamp:before{content:"\\f5bf"}.la-star:before{content:"\\f005"}.la-star-and-crescent:before{content:"\\f699"}.la-star-half:before{content:"\\f089"}.la-star-half-alt:before{content:"\\f5c0"}.la-star-of-david:before{content:"\\f69a"}.la-star-of-life:before{content:"\\f621"}.la-staylinked:before{content:"\\f3f5"}.la-steam:before{content:"\\f1b6"}.la-steam-square:before{content:"\\f1b7"}.la-steam-symbol:before{content:"\\f3f6"}.la-step-backward:before{content:"\\f048"}.la-step-forward:before{content:"\\f051"}.la-stethoscope:before{content:"\\f0f1"}.la-sticker-mule:before{content:"\\f3f7"}.la-sticky-note:before{content:"\\f249"}.la-stop:before{content:"\\f04d"}.la-stop-circle:before{content:"\\f28d"}.la-stopwatch:before{content:"\\f2f2"}.la-store:before{content:"\\f54e"}.la-store-alt:before{content:"\\f54f"}.la-strava:before{content:"\\f428"}.la-stream:before{content:"\\f550"}.la-street-view:before{content:"\\f21d"}.la-strikethrough:before{content:"\\f0cc"}.la-stripe:before{content:"\\f429"}.la-stripe-s:before{content:"\\f42a"}.la-stroopwafel:before{content:"\\f551"}.la-studiovinari:before{content:"\\f3f8"}.la-stumbleupon:before{content:"\\f1a4"}.la-stumbleupon-circle:before{content:"\\f1a3"}.la-subscript:before{content:"\\f12c"}.la-subway:before{content:"\\f239"}.la-suitcase:before{content:"\\f0f2"}.la-suitcase-rolling:before{content:"\\f5c1"}.la-sun:before{content:"\\f185"}.la-superpowers:before{content:"\\f2dd"}.la-superscript:before{content:"\\f12b"}.la-supple:before{content:"\\f3f9"}.la-surprise:before{content:"\\f5c2"}.la-suse:before{content:"\\f7d6"}.la-swatchbook:before{content:"\\f5c3"}.la-swift:before{content:"\\f8e1"}.la-swimmer:before{content:"\\f5c4"}.la-swimming-pool:before{content:"\\f5c5"}.la-symfony:before{content:"\\f83d"}.la-synagogue:before{content:"\\f69b"}.la-sync:before{content:"\\f021"}.la-sync-alt:before{content:"\\f2f1"}.la-syringe:before{content:"\\f48e"}.la-table:before{content:"\\f0ce"}.la-table-tennis:before{content:"\\f45d"}.la-tablet:before{content:"\\f10a"}.la-tablet-alt:before{content:"\\f3fa"}.la-tablets:before{content:"\\f490"}.la-tachometer-alt:before{content:"\\f3fd"}.la-tag:before{content:"\\f02b"}.la-tags:before{content:"\\f02c"}.la-tape:before{content:"\\f4db"}.la-tasks:before{content:"\\f0ae"}.la-taxi:before{content:"\\f1ba"}.la-teamspeak:before{content:"\\f4f9"}.la-teeth:before{content:"\\f62e"}.la-teeth-open:before{content:"\\f62f"}.la-telegram:before{content:"\\f2c6"}.la-telegram-plane:before{content:"\\f3fe"}.la-temperature-high:before{content:"\\f769"}.la-temperature-low:before{content:"\\f76b"}.la-tencent-weibo:before{content:"\\f1d5"}.la-tenge:before{content:"\\f7d7"}.la-terminal:before{content:"\\f120"}.la-text-height:before{content:"\\f034"}.la-text-width:before{content:"\\f035"}.la-th:before{content:"\\f00a"}.la-th-large:before{content:"\\f009"}.la-th-list:before{content:"\\f00b"}.la-the-red-yeti:before{content:"\\f69d"}.la-theater-masks:before{content:"\\f630"}.la-themeco:before{content:"\\f5c6"}.la-themeisle:before{content:"\\f2b2"}.la-thermometer:before{content:"\\f491"}.la-thermometer-empty:before{content:"\\f2cb"}.la-thermometer-full:before{content:"\\f2c7"}.la-thermometer-half:before{content:"\\f2c9"}.la-thermometer-quarter:before{content:"\\f2ca"}.la-thermometer-three-quarters:before{content:"\\f2c8"}.la-think-peaks:before{content:"\\f731"}.la-thumbs-down:before{content:"\\f165"}.la-thumbs-up:before{content:"\\f164"}.la-thumbtack:before{content:"\\f08d"}.la-ticket-alt:before{content:"\\f3ff"}.la-times:before{content:"\\f00d"}.la-times-circle:before{content:"\\f057"}.la-tint:before{content:"\\f043"}.la-tint-slash:before{content:"\\f5c7"}.la-tired:before{content:"\\f5c8"}.la-toggle-off:before{content:"\\f204"}.la-toggle-on:before{content:"\\f205"}.la-toilet:before{content:"\\f7d8"}.la-toilet-paper:before{content:"\\f71e"}.la-toolbox:before{content:"\\f552"}.la-tools:before{content:"\\f7d9"}.la-tooth:before{content:"\\f5c9"}.la-torah:before{content:"\\f6a0"}.la-torii-gate:before{content:"\\f6a1"}.la-tractor:before{content:"\\f722"}.la-trade-federation:before{content:"\\f513"}.la-trademark:before{content:"\\f25c"}.la-traffic-light:before{content:"\\f637"}.la-train:before{content:"\\f238"}.la-tram:before{content:"\\f7da"}.la-transgender:before{content:"\\f224"}.la-transgender-alt:before{content:"\\f225"}.la-trash:before{content:"\\f1f8"}.la-trash-alt:before{content:"\\f2ed"}.la-trash-restore:before{content:"\\f829"}.la-trash-restore-alt:before{content:"\\f82a"}.la-tree:before{content:"\\f1bb"}.la-trello:before{content:"\\f181"}.la-tripadvisor:before{content:"\\f262"}.la-trophy:before{content:"\\f091"}.la-truck:before{content:"\\f0d1"}.la-truck-loading:before{content:"\\f4de"}.la-truck-monster:before{content:"\\f63b"}.la-truck-moving:before{content:"\\f4df"}.la-truck-pickup:before{content:"\\f63c"}.la-tshirt:before{content:"\\f553"}.la-tty:before{content:"\\f1e4"}.la-tumblr:before{content:"\\f173"}.la-tumblr-square:before{content:"\\f174"}.la-tv:before{content:"\\f26c"}.la-twitch:before{content:"\\f1e8"}.la-twitter:before{content:"\\f099"}.la-twitter-square:before{content:"\\f081"}.la-typo3:before{content:"\\f42b"}.la-uber:before{content:"\\f402"}.la-ubuntu:before{content:"\\f7df"}.la-uikit:before{content:"\\f403"}.la-umbraco:before{content:"\\f8e8"}.la-umbrella:before{content:"\\f0e9"}.la-umbrella-beach:before{content:"\\f5ca"}.la-underline:before{content:"\\f0cd"}.la-undo:before{content:"\\f0e2"}.la-undo-alt:before{content:"\\f2ea"}.la-uniregistry:before{content:"\\f404"}.la-universal-access:before{content:"\\f29a"}.la-university:before{content:"\\f19c"}.la-unlink:before{content:"\\f127"}.la-unlock:before{content:"\\f09c"}.la-unlock-alt:before{content:"\\f13e"}.la-untappd:before{content:"\\f405"}.la-upload:before{content:"\\f093"}.la-ups:before{content:"\\f7e0"}.la-usb:before{content:"\\f287"}.la-user:before{content:"\\f007"}.la-user-alt:before{content:"\\f406"}.la-user-alt-slash:before{content:"\\f4fa"}.la-user-astronaut:before{content:"\\f4fb"}.la-user-check:before{content:"\\f4fc"}.la-user-circle:before{content:"\\f2bd"}.la-user-clock:before{content:"\\f4fd"}.la-user-cog:before{content:"\\f4fe"}.la-user-edit:before{content:"\\f4ff"}.la-user-friends:before{content:"\\f500"}.la-user-graduate:before{content:"\\f501"}.la-user-injured:before{content:"\\f728"}.la-user-lock:before{content:"\\f502"}.la-user-md:before{content:"\\f0f0"}.la-user-minus:before{content:"\\f503"}.la-user-ninja:before{content:"\\f504"}.la-user-nurse:before{content:"\\f82f"}.la-user-plus:before{content:"\\f234"}.la-user-secret:before{content:"\\f21b"}.la-user-shield:before{content:"\\f505"}.la-user-slash:before{content:"\\f506"}.la-user-tag:before{content:"\\f507"}.la-user-tie:before{content:"\\f508"}.la-user-times:before{content:"\\f235"}.la-users:before{content:"\\f0c0"}.la-users-cog:before{content:"\\f509"}.la-usps:before{content:"\\f7e1"}.la-ussunnah:before{content:"\\f407"}.la-utensil-spoon:before{content:"\\f2e5"}.la-utensils:before{content:"\\f2e7"}.la-vaadin:before{content:"\\f408"}.la-vector-square:before{content:"\\f5cb"}.la-venus:before{content:"\\f221"}.la-venus-double:before{content:"\\f226"}.la-venus-mars:before{content:"\\f228"}.la-viacoin:before{content:"\\f237"}.la-viadeo:before{content:"\\f2a9"}.la-viadeo-square:before{content:"\\f2aa"}.la-vial:before{content:"\\f492"}.la-vials:before{content:"\\f493"}.la-viber:before{content:"\\f409"}.la-video:before{content:"\\f03d"}.la-video-slash:before{content:"\\f4e2"}.la-vihara:before{content:"\\f6a7"}.la-vimeo:before{content:"\\f40a"}.la-vimeo-square:before{content:"\\f194"}.la-vimeo-v:before{content:"\\f27d"}.la-vine:before{content:"\\f1ca"}.la-vk:before{content:"\\f189"}.la-vnv:before{content:"\\f40b"}.la-voicemail:before{content:"\\f897"}.la-volleyball-ball:before{content:"\\f45f"}.la-volume-down:before{content:"\\f027"}.la-volume-mute:before{content:"\\f6a9"}.la-volume-off:before{content:"\\f026"}.la-volume-up:before{content:"\\f028"}.la-vote-yea:before{content:"\\f772"}.la-vr-cardboard:before{content:"\\f729"}.la-vuejs:before{content:"\\f41f"}.la-walking:before{content:"\\f554"}.la-wallet:before{content:"\\f555"}.la-warehouse:before{content:"\\f494"}.la-water:before{content:"\\f773"}.la-wave-square:before{content:"\\f83e"}.la-waze:before{content:"\\f83f"}.la-weebly:before{content:"\\f5cc"}.la-weibo:before{content:"\\f18a"}.la-weight:before{content:"\\f496"}.la-weight-hanging:before{content:"\\f5cd"}.la-weixin:before{content:"\\f1d7"}.la-whatsapp:before{content:"\\f232"}.la-whatsapp-square:before{content:"\\f40c"}.la-wheelchair:before{content:"\\f193"}.la-whmcs:before{content:"\\f40d"}.la-wifi:before{content:"\\f1eb"}.la-wikipedia-w:before{content:"\\f266"}.la-wind:before{content:"\\f72e"}.la-window-close:before{content:"\\f410"}.la-window-maximize:before{content:"\\f2d0"}.la-window-minimize:before{content:"\\f2d1"}.la-window-restore:before{content:"\\f2d2"}.la-windows:before{content:"\\f17a"}.la-wine-bottle:before{content:"\\f72f"}.la-wine-glass:before{content:"\\f4e3"}.la-wine-glass-alt:before{content:"\\f5ce"}.la-wix:before{content:"\\f5cf"}.la-wizards-of-the-coast:before{content:"\\f730"}.la-wolf-pack-battalion:before{content:"\\f514"}.la-won-sign:before{content:"\\f159"}.la-wordpress:before{content:"\\f19a"}.la-wordpress-simple:before{content:"\\f411"}.la-wpbeginner:before{content:"\\f297"}.la-wpexplorer:before{content:"\\f2de"}.la-wpforms:before{content:"\\f298"}.la-wpressr:before{content:"\\f3e4"}.la-wrench:before{content:"\\f0ad"}.la-x-ray:before{content:"\\f497"}.la-xbox:before{content:"\\f412"}.la-xing:before{content:"\\f168"}.la-xing-square:before{content:"\\f169"}.la-y-combinator:before{content:"\\f23b"}.la-yahoo:before{content:"\\f19e"}.la-yammer:before{content:"\\f840"}.la-yandex:before{content:"\\f413"}.la-yandex-international:before{content:"\\f414"}.la-yarn:before{content:"\\f7e3"}.la-yelp:before{content:"\\f1e9"}.la-yen-sign:before{content:"\\f157"}.la-yin-yang:before{content:"\\f6ad"}.la-yoast:before{content:"\\f2b1"}.la-youtube:before{content:"\\f167"}.la-youtube-square:before{content:"\\f431"}.la-zhihu:before{content:"\\f63f"}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}@font-face{font-family:\'Line Awesome Brands\';font-style:normal;font-weight:400;font-display:auto;src:url('+y+');src:url(../fonts/la-brands-400.eot?#iefix) format("embedded-opentype"),url('+w+') format("woff2"),url('+A+') format("woff"),url('+x+") format(\"truetype\"),url(../fonts/la-brands-400.svg#lineawesome) format(\"svg\")}.lab{font-family:'Line Awesome Brands'}@font-face{font-family:'Line Awesome Free';font-style:normal;font-weight:400;font-display:auto;src:url("+C+');src:url(../fonts/la-regular-400.eot?#iefix) format("embedded-opentype"),url('+S+') format("woff2"),url('+E+') format("woff"),url('+k+") format(\"truetype\"),url(../fonts/la-regular-400.svg#lineawesome) format(\"svg\")}.lar{font-family:'Line Awesome Free';font-weight:400}@font-face{font-family:'Line Awesome Free';font-style:normal;font-weight:900;font-display:auto;src:url("+O+');src:url(../fonts/la-solid-900.eot?#iefix) format("embedded-opentype"),url('+L+') format("woff2"),url('+I+') format("woff"),url('+T+") format(\"truetype\"),url(../fonts/la-solid-900.svg#lineawesome) format(\"svg\")}.la,.las{font-family:'Line Awesome Free';font-weight:900}.la.la-glass:before{content:\"\\f000\"}.la.la-meetup{font-family:'Line Awesome Brands';font-weight:400}.la.la-star-o{font-family:'Line Awesome Free';font-weight:400}.la.la-star-o:before{content:\"\\f005\"}.la.la-remove:before{content:\"\\f00d\"}.la.la-close:before{content:\"\\f00d\"}.la.la-gear:before{content:\"\\f013\"}.la.la-trash-o{font-family:'Line Awesome Free';font-weight:400}.la.la-trash-o:before{content:\"\\f2ed\"}.la.la-file-o{font-family:'Line Awesome Free';font-weight:400}.la.la-file-o:before{content:\"\\f15b\"}.la.la-clock-o{font-family:'Line Awesome Free';font-weight:400}.la.la-clock-o:before{content:\"\\f017\"}.la.la-arrow-circle-o-down{font-family:'Line Awesome Free';font-weight:400}.la.la-arrow-circle-o-down:before{content:\"\\f358\"}.la.la-arrow-circle-o-up{font-family:'Line Awesome Free';font-weight:400}.la.la-arrow-circle-o-up:before{content:\"\\f35b\"}.la.la-play-circle-o{font-family:'Line Awesome Free';font-weight:400}.la.la-play-circle-o:before{content:\"\\f144\"}.la.la-repeat:before{content:\"\\f01e\"}.la.la-rotate-right:before{content:\"\\f01e\"}.la.la-refresh:before{content:\"\\f021\"}.la.la-list-alt{font-family:'Line Awesome Free';font-weight:400}.la.la-dedent:before{content:\"\\f03b\"}.la.la-video-camera:before{content:\"\\f03d\"}.la.la-picture-o{font-family:'Line Awesome Free';font-weight:400}.la.la-picture-o:before{content:\"\\f03e\"}.la.la-photo{font-family:'Line Awesome Free';font-weight:400}.la.la-photo:before{content:\"\\f03e\"}.la.la-image{font-family:'Line Awesome Free';font-weight:400}.la.la-image:before{content:\"\\f03e\"}.la.la-pencil:before{content:\"\\f303\"}.la.la-map-marker:before{content:\"\\f3c5\"}.la.la-pencil-square-o{font-family:'Line Awesome Free';font-weight:400}.la.la-pencil-square-o:before{content:\"\\f044\"}.la.la-share-square-o{font-family:'Line Awesome Free';font-weight:400}.la.la-share-square-o:before{content:\"\\f14d\"}.la.la-check-square-o{font-family:'Line Awesome Free';font-weight:400}.la.la-check-square-o:before{content:\"\\f14a\"}.la.la-arrows:before{content:\"\\f0b2\"}.la.la-times-circle-o{font-family:'Line Awesome Free';font-weight:400}.la.la-times-circle-o:before{content:\"\\f057\"}.la.la-check-circle-o{font-family:'Line Awesome Free';font-weight:400}.la.la-check-circle-o:before{content:\"\\f058\"}.la.la-mail-forward:before{content:\"\\f064\"}.la.la-eye{font-family:'Line Awesome Free';font-weight:400}.la.la-eye-slash{font-family:'Line Awesome Free';font-weight:400}.la.la-warning:before{content:\"\\f071\"}.la.la-calendar:before{content:\"\\f073\"}.la.la-arrows-v:before{content:\"\\f338\"}.la.la-arrows-h:before{content:\"\\f337\"}.la.la-bar-chart{font-family:'Line Awesome Free';font-weight:400}.la.la-bar-chart:before{content:\"\\f080\"}.la.la-bar-chart-o{font-family:'Line Awesome Free';font-weight:400}.la.la-bar-chart-o:before{content:\"\\f080\"}.la.la-twitter-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-facebook-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-gears:before{content:\"\\f085\"}.la.la-thumbs-o-up{font-family:'Line Awesome Free';font-weight:400}.la.la-thumbs-o-up:before{content:\"\\f164\"}.la.la-thumbs-o-down{font-family:'Line Awesome Free';font-weight:400}.la.la-thumbs-o-down:before{content:\"\\f165\"}.la.la-heart-o{font-family:'Line Awesome Free';font-weight:400}.la.la-heart-o:before{content:\"\\f004\"}.la.la-sign-out:before{content:\"\\f2f5\"}.la.la-linkedin-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-linkedin-square:before{content:\"\\f08c\"}.la.la-thumb-tack:before{content:\"\\f08d\"}.la.la-external-link:before{content:\"\\f35d\"}.la.la-sign-in:before{content:\"\\f2f6\"}.la.la-github-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-lemon-o{font-family:'Line Awesome Free';font-weight:400}.la.la-lemon-o:before{content:\"\\f094\"}.la.la-square-o{font-family:'Line Awesome Free';font-weight:400}.la.la-square-o:before{content:\"\\f0c8\"}.la.la-bookmark-o{font-family:'Line Awesome Free';font-weight:400}.la.la-bookmark-o:before{content:\"\\f02e\"}.la.la-twitter{font-family:'Line Awesome Brands';font-weight:400}.la.la-facebook{font-family:'Line Awesome Brands';font-weight:400}.la.la-facebook:before{content:\"\\f39e\"}.la.la-facebook-f{font-family:'Line Awesome Brands';font-weight:400}.la.la-facebook-f:before{content:\"\\f39e\"}.la.la-github{font-family:'Line Awesome Brands';font-weight:400}.la.la-credit-card{font-family:'Line Awesome Free';font-weight:400}.la.la-feed:before{content:\"\\f09e\"}.la.la-hdd-o{font-family:'Line Awesome Free';font-weight:400}.la.la-hdd-o:before{content:\"\\f0a0\"}.la.la-hand-o-right{font-family:'Line Awesome Free';font-weight:400}.la.la-hand-o-right:before{content:\"\\f0a4\"}.la.la-hand-o-left{font-family:'Line Awesome Free';font-weight:400}.la.la-hand-o-left:before{content:\"\\f0a5\"}.la.la-hand-o-up{font-family:'Line Awesome Free';font-weight:400}.la.la-hand-o-up:before{content:\"\\f0a6\"}.la.la-hand-o-down{font-family:'Line Awesome Free';font-weight:400}.la.la-hand-o-down:before{content:\"\\f0a7\"}.la.la-arrows-alt:before{content:\"\\f31e\"}.la.la-group:before{content:\"\\f0c0\"}.la.la-chain:before{content:\"\\f0c1\"}.la.la-scissors:before{content:\"\\f0c4\"}.la.la-files-o{font-family:'Line Awesome Free';font-weight:400}.la.la-files-o:before{content:\"\\f0c5\"}.la.la-floppy-o{font-family:'Line Awesome Free';font-weight:400}.la.la-floppy-o:before{content:\"\\f0c7\"}.la.la-navicon:before{content:\"\\f0c9\"}.la.la-reorder:before{content:\"\\f0c9\"}.la.la-pinterest{font-family:'Line Awesome Brands';font-weight:400}.la.la-pinterest-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-google-plus-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-google-plus{font-family:'Line Awesome Brands';font-weight:400}.la.la-google-plus:before{content:\"\\f0d5\"}.la.la-money{font-family:'Line Awesome Free';font-weight:400}.la.la-money:before{content:\"\\f3d1\"}.la.la-unsorted:before{content:\"\\f0dc\"}.la.la-sort-desc:before{content:\"\\f0dd\"}.la.la-sort-asc:before{content:\"\\f0de\"}.la.la-linkedin{font-family:'Line Awesome Brands';font-weight:400}.la.la-linkedin:before{content:\"\\f0e1\"}.la.la-rotate-left:before{content:\"\\f0e2\"}.la.la-legal:before{content:\"\\f0e3\"}.la.la-tachometer:before{content:\"\\f3fd\"}.la.la-dashboard:before{content:\"\\f3fd\"}.la.la-comment-o{font-family:'Line Awesome Free';font-weight:400}.la.la-comment-o:before{content:\"\\f075\"}.la.la-comments-o{font-family:'Line Awesome Free';font-weight:400}.la.la-comments-o:before{content:\"\\f086\"}.la.la-flash:before{content:\"\\f0e7\"}.la.la-clipboard{font-family:'Line Awesome Free';font-weight:400}.la.la-paste{font-family:'Line Awesome Free';font-weight:400}.la.la-paste:before{content:\"\\f328\"}.la.la-lightbulb-o{font-family:'Line Awesome Free';font-weight:400}.la.la-lightbulb-o:before{content:\"\\f0eb\"}.la.la-exchange:before{content:\"\\f362\"}.la.la-cloud-download:before{content:\"\\f381\"}.la.la-cloud-upload:before{content:\"\\f382\"}.la.la-bell-o{font-family:'Line Awesome Free';font-weight:400}.la.la-bell-o:before{content:\"\\f0f3\"}.la.la-cutlery:before{content:\"\\f2e7\"}.la.la-file-text-o{font-family:'Line Awesome Free';font-weight:400}.la.la-file-text-o:before{content:\"\\f15c\"}.la.la-building-o{font-family:'Line Awesome Free';font-weight:400}.la.la-building-o:before{content:\"\\f1ad\"}.la.la-hospital-o{font-family:'Line Awesome Free';font-weight:400}.la.la-hospital-o:before{content:\"\\f0f8\"}.la.la-tablet:before{content:\"\\f3fa\"}.la.la-mobile:before{content:\"\\f3cd\"}.la.la-mobile-phone:before{content:\"\\f3cd\"}.la.la-circle-o{font-family:'Line Awesome Free';font-weight:400}.la.la-circle-o:before{content:\"\\f111\"}.la.la-mail-reply:before{content:\"\\f3e5\"}.la.la-github-alt{font-family:'Line Awesome Brands';font-weight:400}.la.la-folder-o{font-family:'Line Awesome Free';font-weight:400}.la.la-folder-o:before{content:\"\\f07b\"}.la.la-folder-open-o{font-family:'Line Awesome Free';font-weight:400}.la.la-folder-open-o:before{content:\"\\f07c\"}.la.la-smile-o{font-family:'Line Awesome Free';font-weight:400}.la.la-smile-o:before{content:\"\\f118\"}.la.la-frown-o{font-family:'Line Awesome Free';font-weight:400}.la.la-frown-o:before{content:\"\\f119\"}.la.la-meh-o{font-family:'Line Awesome Free';font-weight:400}.la.la-meh-o:before{content:\"\\f11a\"}.la.la-keyboard-o{font-family:'Line Awesome Free';font-weight:400}.la.la-keyboard-o:before{content:\"\\f11c\"}.la.la-flag-o{font-family:'Line Awesome Free';font-weight:400}.la.la-flag-o:before{content:\"\\f024\"}.la.la-mail-reply-all:before{content:\"\\f122\"}.la.la-star-half-o{font-family:'Line Awesome Free';font-weight:400}.la.la-star-half-o:before{content:\"\\f089\"}.la.la-star-half-empty{font-family:'Line Awesome Free';font-weight:400}.la.la-star-half-empty:before{content:\"\\f089\"}.la.la-star-half-full{font-family:'Line Awesome Free';font-weight:400}.la.la-star-half-full:before{content:\"\\f089\"}.la.la-code-fork:before{content:\"\\f126\"}.la.la-chain-broken:before{content:\"\\f127\"}.la.la-shield:before{content:\"\\f3ed\"}.la.la-calendar-o{font-family:'Line Awesome Free';font-weight:400}.la.la-calendar-o:before{content:\"\\f133\"}.la.la-maxcdn{font-family:'Line Awesome Brands';font-weight:400}.la.la-html5{font-family:'Line Awesome Brands';font-weight:400}.la.la-css3{font-family:'Line Awesome Brands';font-weight:400}.la.la-ticket:before{content:\"\\f3ff\"}.la.la-minus-square-o{font-family:'Line Awesome Free';font-weight:400}.la.la-minus-square-o:before{content:\"\\f146\"}.la.la-level-up:before{content:\"\\f3bf\"}.la.la-level-down:before{content:\"\\f3be\"}.la.la-pencil-square:before{content:\"\\f14b\"}.la.la-external-link-square:before{content:\"\\f360\"}.la.la-compass{font-family:'Line Awesome Free';font-weight:400}.la.la-caret-square-o-down{font-family:'Line Awesome Free';font-weight:400}.la.la-caret-square-o-down:before{content:\"\\f150\"}.la.la-toggle-down{font-family:'Line Awesome Free';font-weight:400}.la.la-toggle-down:before{content:\"\\f150\"}.la.la-caret-square-o-up{font-family:'Line Awesome Free';font-weight:400}.la.la-caret-square-o-up:before{content:\"\\f151\"}.la.la-toggle-up{font-family:'Line Awesome Free';font-weight:400}.la.la-toggle-up:before{content:\"\\f151\"}.la.la-caret-square-o-right{font-family:'Line Awesome Free';font-weight:400}.la.la-caret-square-o-right:before{content:\"\\f152\"}.la.la-toggle-right{font-family:'Line Awesome Free';font-weight:400}.la.la-toggle-right:before{content:\"\\f152\"}.la.la-eur:before{content:\"\\f153\"}.la.la-euro:before{content:\"\\f153\"}.la.la-gbp:before{content:\"\\f154\"}.la.la-usd:before{content:\"\\f155\"}.la.la-dollar:before{content:\"\\f155\"}.la.la-inr:before{content:\"\\f156\"}.la.la-rupee:before{content:\"\\f156\"}.la.la-jpy:before{content:\"\\f157\"}.la.la-cny:before{content:\"\\f157\"}.la.la-rmb:before{content:\"\\f157\"}.la.la-yen:before{content:\"\\f157\"}.la.la-rub:before{content:\"\\f158\"}.la.la-ruble:before{content:\"\\f158\"}.la.la-rouble:before{content:\"\\f158\"}.la.la-krw:before{content:\"\\f159\"}.la.la-won:before{content:\"\\f159\"}.la.la-btc{font-family:'Line Awesome Brands';font-weight:400}.la.la-bitcoin{font-family:'Line Awesome Brands';font-weight:400}.la.la-bitcoin:before{content:\"\\f15a\"}.la.la-file-text:before{content:\"\\f15c\"}.la.la-sort-alpha-asc:before{content:\"\\f15d\"}.la.la-sort-alpha-desc:before{content:\"\\f881\"}.la.la-sort-amount-asc:before{content:\"\\f160\"}.la.la-sort-amount-desc:before{content:\"\\f884\"}.la.la-sort-numeric-asc:before{content:\"\\f162\"}.la.la-sort-numeric-desc:before{content:\"\\f886\"}.la.la-youtube-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-youtube{font-family:'Line Awesome Brands';font-weight:400}.la.la-xing{font-family:'Line Awesome Brands';font-weight:400}.la.la-xing-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-youtube-play{font-family:'Line Awesome Brands';font-weight:400}.la.la-youtube-play:before{content:\"\\f167\"}.la.la-dropbox{font-family:'Line Awesome Brands';font-weight:400}.la.la-stack-overflow{font-family:'Line Awesome Brands';font-weight:400}.la.la-instagram{font-family:'Line Awesome Brands';font-weight:400}.la.la-flickr{font-family:'Line Awesome Brands';font-weight:400}.la.la-adn{font-family:'Line Awesome Brands';font-weight:400}.la.la-bitbucket{font-family:'Line Awesome Brands';font-weight:400}.la.la-bitbucket-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-bitbucket-square:before{content:\"\\f171\"}.la.la-tumblr{font-family:'Line Awesome Brands';font-weight:400}.la.la-tumblr-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-long-arrow-down:before{content:\"\\f309\"}.la.la-long-arrow-up:before{content:\"\\f30c\"}.la.la-long-arrow-left:before{content:\"\\f30a\"}.la.la-long-arrow-right:before{content:\"\\f30b\"}.la.la-apple{font-family:'Line Awesome Brands';font-weight:400}.la.la-windows{font-family:'Line Awesome Brands';font-weight:400}.la.la-android{font-family:'Line Awesome Brands';font-weight:400}.la.la-linux{font-family:'Line Awesome Brands';font-weight:400}.la.la-dribbble{font-family:'Line Awesome Brands';font-weight:400}.la.la-skype{font-family:'Line Awesome Brands';font-weight:400}.la.la-foursquare{font-family:'Line Awesome Brands';font-weight:400}.la.la-trello{font-family:'Line Awesome Brands';font-weight:400}.la.la-gratipay{font-family:'Line Awesome Brands';font-weight:400}.la.la-gittip{font-family:'Line Awesome Brands';font-weight:400}.la.la-gittip:before{content:\"\\f184\"}.la.la-sun-o{font-family:'Line Awesome Free';font-weight:400}.la.la-sun-o:before{content:\"\\f185\"}.la.la-moon-o{font-family:'Line Awesome Free';font-weight:400}.la.la-moon-o:before{content:\"\\f186\"}.la.la-vk{font-family:'Line Awesome Brands';font-weight:400}.la.la-weibo{font-family:'Line Awesome Brands';font-weight:400}.la.la-renren{font-family:'Line Awesome Brands';font-weight:400}.la.la-pagelines{font-family:'Line Awesome Brands';font-weight:400}.la.la-stack-exchange{font-family:'Line Awesome Brands';font-weight:400}.la.la-arrow-circle-o-right{font-family:'Line Awesome Free';font-weight:400}.la.la-arrow-circle-o-right:before{content:\"\\f35a\"}.la.la-arrow-circle-o-left{font-family:'Line Awesome Free';font-weight:400}.la.la-arrow-circle-o-left:before{content:\"\\f359\"}.la.la-caret-square-o-left{font-family:'Line Awesome Free';font-weight:400}.la.la-caret-square-o-left:before{content:\"\\f191\"}.la.la-toggle-left{font-family:'Line Awesome Free';font-weight:400}.la.la-toggle-left:before{content:\"\\f191\"}.la.la-dot-circle-o{font-family:'Line Awesome Free';font-weight:400}.la.la-dot-circle-o:before{content:\"\\f192\"}.la.la-vimeo-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-try:before{content:\"\\f195\"}.la.la-turkish-lira:before{content:\"\\f195\"}.la.la-plus-square-o{font-family:'Line Awesome Free';font-weight:400}.la.la-plus-square-o:before{content:\"\\f0fe\"}.la.la-slack{font-family:'Line Awesome Brands';font-weight:400}.la.la-wordpress{font-family:'Line Awesome Brands';font-weight:400}.la.la-openid{font-family:'Line Awesome Brands';font-weight:400}.la.la-institution:before{content:\"\\f19c\"}.la.la-bank:before{content:\"\\f19c\"}.la.la-mortar-board:before{content:\"\\f19d\"}.la.la-yahoo{font-family:'Line Awesome Brands';font-weight:400}.la.la-google{font-family:'Line Awesome Brands';font-weight:400}.la.la-reddit{font-family:'Line Awesome Brands';font-weight:400}.la.la-reddit-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-stumbleupon-circle{font-family:'Line Awesome Brands';font-weight:400}.la.la-stumbleupon{font-family:'Line Awesome Brands';font-weight:400}.la.la-delicious{font-family:'Line Awesome Brands';font-weight:400}.la.la-digg{font-family:'Line Awesome Brands';font-weight:400}.la.la-pied-piper-pp{font-family:'Line Awesome Brands';font-weight:400}.la.la-pied-piper-alt{font-family:'Line Awesome Brands';font-weight:400}.la.la-drupal{font-family:'Line Awesome Brands';font-weight:400}.la.la-joomla{font-family:'Line Awesome Brands';font-weight:400}.la.la-spoon:before{content:\"\\f2e5\"}.la.la-behance{font-family:'Line Awesome Brands';font-weight:400}.la.la-behance-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-steam{font-family:'Line Awesome Brands';font-weight:400}.la.la-steam-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-automobile:before{content:\"\\f1b9\"}.la.la-cab:before{content:\"\\f1ba\"}.la.la-envelope-o{font-family:'Line Awesome Free';font-weight:400}.la.la-envelope-o:before{content:\"\\f0e0\"}.la.la-deviantart{font-family:'Line Awesome Brands';font-weight:400}.la.la-soundcloud{font-family:'Line Awesome Brands';font-weight:400}.la.la-file-pdf-o{font-family:'Line Awesome Free';font-weight:400}.la.la-file-pdf-o:before{content:\"\\f1c1\"}.la.la-file-word-o{font-family:'Line Awesome Free';font-weight:400}.la.la-file-word-o:before{content:\"\\f1c2\"}.la.la-file-excel-o{font-family:'Line Awesome Free';font-weight:400}.la.la-file-excel-o:before{content:\"\\f1c3\"}.la.la-file-powerpoint-o{font-family:'Line Awesome Free';font-weight:400}.la.la-file-powerpoint-o:before{content:\"\\f1c4\"}.la.la-file-image-o{font-family:'Line Awesome Free';font-weight:400}.la.la-file-image-o:before{content:\"\\f1c5\"}.la.la-file-photo-o{font-family:'Line Awesome Free';font-weight:400}.la.la-file-photo-o:before{content:\"\\f1c5\"}.la.la-file-picture-o{font-family:'Line Awesome Free';font-weight:400}.la.la-file-picture-o:before{content:\"\\f1c5\"}.la.la-file-archive-o{font-family:'Line Awesome Free';font-weight:400}.la.la-file-archive-o:before{content:\"\\f1c6\"}.la.la-file-zip-o{font-family:'Line Awesome Free';font-weight:400}.la.la-file-zip-o:before{content:\"\\f1c6\"}.la.la-file-audio-o{font-family:'Line Awesome Free';font-weight:400}.la.la-file-audio-o:before{content:\"\\f1c7\"}.la.la-file-sound-o{font-family:'Line Awesome Free';font-weight:400}.la.la-file-sound-o:before{content:\"\\f1c7\"}.la.la-file-video-o{font-family:'Line Awesome Free';font-weight:400}.la.la-file-video-o:before{content:\"\\f1c8\"}.la.la-file-movie-o{font-family:'Line Awesome Free';font-weight:400}.la.la-file-movie-o:before{content:\"\\f1c8\"}.la.la-file-code-o{font-family:'Line Awesome Free';font-weight:400}.la.la-file-code-o:before{content:\"\\f1c9\"}.la.la-vine{font-family:'Line Awesome Brands';font-weight:400}.la.la-codepen{font-family:'Line Awesome Brands';font-weight:400}.la.la-jsfiddle{font-family:'Line Awesome Brands';font-weight:400}.la.la-life-ring{font-family:'Line Awesome Free';font-weight:400}.la.la-life-bouy{font-family:'Line Awesome Free';font-weight:400}.la.la-life-bouy:before{content:\"\\f1cd\"}.la.la-life-buoy{font-family:'Line Awesome Free';font-weight:400}.la.la-life-buoy:before{content:\"\\f1cd\"}.la.la-life-saver{font-family:'Line Awesome Free';font-weight:400}.la.la-life-saver:before{content:\"\\f1cd\"}.la.la-support{font-family:'Line Awesome Free';font-weight:400}.la.la-support:before{content:\"\\f1cd\"}.la.la-circle-o-notch:before{content:\"\\f1ce\"}.la.la-rebel{font-family:'Line Awesome Brands';font-weight:400}.la.la-ra{font-family:'Line Awesome Brands';font-weight:400}.la.la-ra:before{content:\"\\f1d0\"}.la.la-resistance{font-family:'Line Awesome Brands';font-weight:400}.la.la-resistance:before{content:\"\\f1d0\"}.la.la-empire{font-family:'Line Awesome Brands';font-weight:400}.la.la-ge{font-family:'Line Awesome Brands';font-weight:400}.la.la-ge:before{content:\"\\f1d1\"}.la.la-git-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-git{font-family:'Line Awesome Brands';font-weight:400}.la.la-hacker-news{font-family:'Line Awesome Brands';font-weight:400}.la.la-y-combinator-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-y-combinator-square:before{content:\"\\f1d4\"}.la.la-yc-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-yc-square:before{content:\"\\f1d4\"}.la.la-tencent-weibo{font-family:'Line Awesome Brands';font-weight:400}.la.la-qq{font-family:'Line Awesome Brands';font-weight:400}.la.la-weixin{font-family:'Line Awesome Brands';font-weight:400}.la.la-wechat{font-family:'Line Awesome Brands';font-weight:400}.la.la-wechat:before{content:\"\\f1d7\"}.la.la-send:before{content:\"\\f1d8\"}.la.la-paper-plane-o{font-family:'Line Awesome Free';font-weight:400}.la.la-paper-plane-o:before{content:\"\\f1d8\"}.la.la-send-o{font-family:'Line Awesome Free';font-weight:400}.la.la-send-o:before{content:\"\\f1d8\"}.la.la-circle-thin{font-family:'Line Awesome Free';font-weight:400}.la.la-circle-thin:before{content:\"\\f111\"}.la.la-header:before{content:\"\\f1dc\"}.la.la-sliders:before{content:\"\\f1de\"}.la.la-futbol-o{font-family:'Line Awesome Free';font-weight:400}.la.la-futbol-o:before{content:\"\\f1e3\"}.la.la-soccer-ball-o{font-family:'Line Awesome Free';font-weight:400}.la.la-soccer-ball-o:before{content:\"\\f1e3\"}.la.la-slideshare{font-family:'Line Awesome Brands';font-weight:400}.la.la-twitch{font-family:'Line Awesome Brands';font-weight:400}.la.la-yelp{font-family:'Line Awesome Brands';font-weight:400}.la.la-newspaper-o{font-family:'Line Awesome Free';font-weight:400}.la.la-newspaper-o:before{content:\"\\f1ea\"}.la.la-paypal{font-family:'Line Awesome Brands';font-weight:400}.la.la-google-wallet{font-family:'Line Awesome Brands';font-weight:400}.la.la-cc-visa{font-family:'Line Awesome Brands';font-weight:400}.la.la-cc-mastercard{font-family:'Line Awesome Brands';font-weight:400}.la.la-cc-discover{font-family:'Line Awesome Brands';font-weight:400}.la.la-cc-amex{font-family:'Line Awesome Brands';font-weight:400}.la.la-cc-paypal{font-family:'Line Awesome Brands';font-weight:400}.la.la-cc-stripe{font-family:'Line Awesome Brands';font-weight:400}.la.la-bell-slash-o{font-family:'Line Awesome Free';font-weight:400}.la.la-bell-slash-o:before{content:\"\\f1f6\"}.la.la-trash:before{content:\"\\f2ed\"}.la.la-copyright{font-family:'Line Awesome Free';font-weight:400}.la.la-eyedropper:before{content:\"\\f1fb\"}.la.la-area-chart:before{content:\"\\f1fe\"}.la.la-pie-chart:before{content:\"\\f200\"}.la.la-line-chart:before{content:\"\\f201\"}.la.la-lastfm{font-family:'Line Awesome Brands';font-weight:400}.la.la-lastfm-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-ioxhost{font-family:'Line Awesome Brands';font-weight:400}.la.la-angellist{font-family:'Line Awesome Brands';font-weight:400}.la.la-cc{font-family:'Line Awesome Free';font-weight:400}.la.la-cc:before{content:\"\\f20a\"}.la.la-ils:before{content:\"\\f20b\"}.la.la-shekel:before{content:\"\\f20b\"}.la.la-sheqel:before{content:\"\\f20b\"}.la.la-meanpath{font-family:'Line Awesome Brands';font-weight:400}.la.la-meanpath:before{content:\"\\f2b4\"}.la.la-buysellads{font-family:'Line Awesome Brands';font-weight:400}.la.la-connectdevelop{font-family:'Line Awesome Brands';font-weight:400}.la.la-dashcube{font-family:'Line Awesome Brands';font-weight:400}.la.la-forumbee{font-family:'Line Awesome Brands';font-weight:400}.la.la-leanpub{font-family:'Line Awesome Brands';font-weight:400}.la.la-sellsy{font-family:'Line Awesome Brands';font-weight:400}.la.la-shirtsinbulk{font-family:'Line Awesome Brands';font-weight:400}.la.la-simplybuilt{font-family:'Line Awesome Brands';font-weight:400}.la.la-skyatlas{font-family:'Line Awesome Brands';font-weight:400}.la.la-diamond{font-family:'Line Awesome Free';font-weight:400}.la.la-diamond:before{content:\"\\f3a5\"}.la.la-intersex:before{content:\"\\f224\"}.la.la-facebook-official{font-family:'Line Awesome Brands';font-weight:400}.la.la-facebook-official:before{content:\"\\f09a\"}.la.la-pinterest-p{font-family:'Line Awesome Brands';font-weight:400}.la.la-whatsapp{font-family:'Line Awesome Brands';font-weight:400}.la.la-hotel:before{content:\"\\f236\"}.la.la-viacoin{font-family:'Line Awesome Brands';font-weight:400}.la.la-medium{font-family:'Line Awesome Brands';font-weight:400}.la.la-y-combinator{font-family:'Line Awesome Brands';font-weight:400}.la.la-yc{font-family:'Line Awesome Brands';font-weight:400}.la.la-yc:before{content:\"\\f23b\"}.la.la-optin-monster{font-family:'Line Awesome Brands';font-weight:400}.la.la-opencart{font-family:'Line Awesome Brands';font-weight:400}.la.la-expeditedssl{font-family:'Line Awesome Brands';font-weight:400}.la.la-battery-4:before{content:\"\\f240\"}.la.la-battery:before{content:\"\\f240\"}.la.la-battery-3:before{content:\"\\f241\"}.la.la-battery-2:before{content:\"\\f242\"}.la.la-battery-1:before{content:\"\\f243\"}.la.la-battery-0:before{content:\"\\f244\"}.la.la-object-group{font-family:'Line Awesome Free';font-weight:400}.la.la-object-ungroup{font-family:'Line Awesome Free';font-weight:400}.la.la-sticky-note-o{font-family:'Line Awesome Free';font-weight:400}.la.la-sticky-note-o:before{content:\"\\f249\"}.la.la-cc-jcb{font-family:'Line Awesome Brands';font-weight:400}.la.la-cc-diners-club{font-family:'Line Awesome Brands';font-weight:400}.la.la-clone{font-family:'Line Awesome Free';font-weight:400}.la.la-hourglass-o{font-family:'Line Awesome Free';font-weight:400}.la.la-hourglass-o:before{content:\"\\f254\"}.la.la-hourglass-1:before{content:\"\\f251\"}.la.la-hourglass-2:before{content:\"\\f252\"}.la.la-hourglass-3:before{content:\"\\f253\"}.la.la-hand-rock-o{font-family:'Line Awesome Free';font-weight:400}.la.la-hand-rock-o:before{content:\"\\f255\"}.la.la-hand-grab-o{font-family:'Line Awesome Free';font-weight:400}.la.la-hand-grab-o:before{content:\"\\f255\"}.la.la-hand-paper-o{font-family:'Line Awesome Free';font-weight:400}.la.la-hand-paper-o:before{content:\"\\f256\"}.la.la-hand-stop-o{font-family:'Line Awesome Free';font-weight:400}.la.la-hand-stop-o:before{content:\"\\f256\"}.la.la-hand-scissors-o{font-family:'Line Awesome Free';font-weight:400}.la.la-hand-scissors-o:before{content:\"\\f257\"}.la.la-hand-lizard-o{font-family:'Line Awesome Free';font-weight:400}.la.la-hand-lizard-o:before{content:\"\\f258\"}.la.la-hand-spock-o{font-family:'Line Awesome Free';font-weight:400}.la.la-hand-spock-o:before{content:\"\\f259\"}.la.la-hand-pointer-o{font-family:'Line Awesome Free';font-weight:400}.la.la-hand-pointer-o:before{content:\"\\f25a\"}.la.la-hand-peace-o{font-family:'Line Awesome Free';font-weight:400}.la.la-hand-peace-o:before{content:\"\\f25b\"}.la.la-registered{font-family:'Line Awesome Free';font-weight:400}.la.la-creative-commons{font-family:'Line Awesome Brands';font-weight:400}.la.la-gg{font-family:'Line Awesome Brands';font-weight:400}.la.la-gg-circle{font-family:'Line Awesome Brands';font-weight:400}.la.la-tripadvisor{font-family:'Line Awesome Brands';font-weight:400}.la.la-odnoklassniki{font-family:'Line Awesome Brands';font-weight:400}.la.la-odnoklassniki-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-get-pocket{font-family:'Line Awesome Brands';font-weight:400}.la.la-wikipedia-w{font-family:'Line Awesome Brands';font-weight:400}.la.la-safari{font-family:'Line Awesome Brands';font-weight:400}.la.la-chrome{font-family:'Line Awesome Brands';font-weight:400}.la.la-firefox{font-family:'Line Awesome Brands';font-weight:400}.la.la-opera{font-family:'Line Awesome Brands';font-weight:400}.la.la-internet-explorer{font-family:'Line Awesome Brands';font-weight:400}.la.la-television:before{content:\"\\f26c\"}.la.la-contao{font-family:'Line Awesome Brands';font-weight:400}.la.la-500px{font-family:'Line Awesome Brands';font-weight:400}.la.la-amazon{font-family:'Line Awesome Brands';font-weight:400}.la.la-calendar-plus-o{font-family:'Line Awesome Free';font-weight:400}.la.la-calendar-plus-o:before{content:\"\\f271\"}.la.la-calendar-minus-o{font-family:'Line Awesome Free';font-weight:400}.la.la-calendar-minus-o:before{content:\"\\f272\"}.la.la-calendar-times-o{font-family:'Line Awesome Free';font-weight:400}.la.la-calendar-times-o:before{content:\"\\f273\"}.la.la-calendar-check-o{font-family:'Line Awesome Free';font-weight:400}.la.la-calendar-check-o:before{content:\"\\f274\"}.la.la-map-o{font-family:'Line Awesome Free';font-weight:400}.la.la-map-o:before{content:\"\\f279\"}.la.la-commenting:before{content:\"\\f4ad\"}.la.la-commenting-o{font-family:'Line Awesome Free';font-weight:400}.la.la-commenting-o:before{content:\"\\f4ad\"}.la.la-houzz{font-family:'Line Awesome Brands';font-weight:400}.la.la-vimeo{font-family:'Line Awesome Brands';font-weight:400}.la.la-vimeo:before{content:\"\\f27d\"}.la.la-black-tie{font-family:'Line Awesome Brands';font-weight:400}.la.la-fonticons{font-family:'Line Awesome Brands';font-weight:400}.la.la-reddit-alien{font-family:'Line Awesome Brands';font-weight:400}.la.la-edge{font-family:'Line Awesome Brands';font-weight:400}.la.la-credit-card-alt:before{content:\"\\f09d\"}.la.la-codiepie{font-family:'Line Awesome Brands';font-weight:400}.la.la-modx{font-family:'Line Awesome Brands';font-weight:400}.la.la-fort-awesome{font-family:'Line Awesome Brands';font-weight:400}.la.la-usb{font-family:'Line Awesome Brands';font-weight:400}.la.la-product-hunt{font-family:'Line Awesome Brands';font-weight:400}.la.la-mixcloud{font-family:'Line Awesome Brands';font-weight:400}.la.la-scribd{font-family:'Line Awesome Brands';font-weight:400}.la.la-pause-circle-o{font-family:'Line Awesome Free';font-weight:400}.la.la-pause-circle-o:before{content:\"\\f28b\"}.la.la-stop-circle-o{font-family:'Line Awesome Free';font-weight:400}.la.la-stop-circle-o:before{content:\"\\f28d\"}.la.la-bluetooth{font-family:'Line Awesome Brands';font-weight:400}.la.la-bluetooth-b{font-family:'Line Awesome Brands';font-weight:400}.la.la-gitlab{font-family:'Line Awesome Brands';font-weight:400}.la.la-wpbeginner{font-family:'Line Awesome Brands';font-weight:400}.la.la-wpforms{font-family:'Line Awesome Brands';font-weight:400}.la.la-envira{font-family:'Line Awesome Brands';font-weight:400}.la.la-wheelchair-alt{font-family:'Line Awesome Brands';font-weight:400}.la.la-wheelchair-alt:before{content:\"\\f368\"}.la.la-question-circle-o{font-family:'Line Awesome Free';font-weight:400}.la.la-question-circle-o:before{content:\"\\f059\"}.la.la-volume-control-phone:before{content:\"\\f2a0\"}.la.la-asl-interpreting:before{content:\"\\f2a3\"}.la.la-deafness:before{content:\"\\f2a4\"}.la.la-hard-of-hearing:before{content:\"\\f2a4\"}.la.la-glide{font-family:'Line Awesome Brands';font-weight:400}.la.la-glide-g{font-family:'Line Awesome Brands';font-weight:400}.la.la-signing:before{content:\"\\f2a7\"}.la.la-viadeo{font-family:'Line Awesome Brands';font-weight:400}.la.la-viadeo-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-snapchat{font-family:'Line Awesome Brands';font-weight:400}.la.la-snapchat-ghost{font-family:'Line Awesome Brands';font-weight:400}.la.la-snapchat-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-pied-piper{font-family:'Line Awesome Brands';font-weight:400}.la.la-first-order{font-family:'Line Awesome Brands';font-weight:400}.la.la-yoast{font-family:'Line Awesome Brands';font-weight:400}.la.la-themeisle{font-family:'Line Awesome Brands';font-weight:400}.la.la-google-plus-official{font-family:'Line Awesome Brands';font-weight:400}.la.la-google-plus-official:before{content:\"\\f2b3\"}.la.la-google-plus-circle{font-family:'Line Awesome Brands';font-weight:400}.la.la-google-plus-circle:before{content:\"\\f2b3\"}.la.la-font-awesome{font-family:'Line Awesome Brands';font-weight:400}.la.la-fa{font-family:'Line Awesome Brands';font-weight:400}.la.la-fa:before{content:\"\\f2b4\"}.la.la-handshake-o{font-family:'Line Awesome Free';font-weight:400}.la.la-handshake-o:before{content:\"\\f2b5\"}.la.la-envelope-open-o{font-family:'Line Awesome Free';font-weight:400}.la.la-envelope-open-o:before{content:\"\\f2b6\"}.la.la-linode{font-family:'Line Awesome Brands';font-weight:400}.la.la-address-book-o{font-family:'Line Awesome Free';font-weight:400}.la.la-address-book-o:before{content:\"\\f2b9\"}.la.la-vcard:before{content:\"\\f2bb\"}.la.la-address-card-o{font-family:'Line Awesome Free';font-weight:400}.la.la-address-card-o:before{content:\"\\f2bb\"}.la.la-vcard-o{font-family:'Line Awesome Free';font-weight:400}.la.la-vcard-o:before{content:\"\\f2bb\"}.la.la-user-circle-o{font-family:'Line Awesome Free';font-weight:400}.la.la-user-circle-o:before{content:\"\\f2bd\"}.la.la-user-o{font-family:'Line Awesome Free';font-weight:400}.la.la-user-o:before{content:\"\\f007\"}.la.la-id-badge{font-family:'Line Awesome Free';font-weight:400}.la.la-drivers-license:before{content:\"\\f2c2\"}.la.la-id-card-o{font-family:'Line Awesome Free';font-weight:400}.la.la-id-card-o:before{content:\"\\f2c2\"}.la.la-drivers-license-o{font-family:'Line Awesome Free';font-weight:400}.la.la-drivers-license-o:before{content:\"\\f2c2\"}.la.la-quora{font-family:'Line Awesome Brands';font-weight:400}.la.la-free-code-camp{font-family:'Line Awesome Brands';font-weight:400}.la.la-telegram{font-family:'Line Awesome Brands';font-weight:400}.la.la-thermometer-4:before{content:\"\\f2c7\"}.la.la-thermometer:before{content:\"\\f2c7\"}.la.la-thermometer-3:before{content:\"\\f2c8\"}.la.la-thermometer-2:before{content:\"\\f2c9\"}.la.la-thermometer-1:before{content:\"\\f2ca\"}.la.la-thermometer-0:before{content:\"\\f2cb\"}.la.la-bathtub:before{content:\"\\f2cd\"}.la.la-s15:before{content:\"\\f2cd\"}.la.la-window-maximize{font-family:'Line Awesome Free';font-weight:400}.la.la-window-restore{font-family:'Line Awesome Free';font-weight:400}.la.la-times-rectangle:before{content:\"\\f410\"}.la.la-window-close-o{font-family:'Line Awesome Free';font-weight:400}.la.la-window-close-o:before{content:\"\\f410\"}.la.la-times-rectangle-o{font-family:'Line Awesome Free';font-weight:400}.la.la-times-rectangle-o:before{content:\"\\f410\"}.la.la-bandcamp{font-family:'Line Awesome Brands';font-weight:400}.la.la-grav{font-family:'Line Awesome Brands';font-weight:400}.la.la-etsy{font-family:'Line Awesome Brands';font-weight:400}.la.la-imdb{font-family:'Line Awesome Brands';font-weight:400}.la.la-ravelry{font-family:'Line Awesome Brands';font-weight:400}.la.la-eercast{font-family:'Line Awesome Brands';font-weight:400}.la.la-eercast:before{content:\"\\f2da\"}.la.la-snowflake-o{font-family:'Line Awesome Free';font-weight:400}.la.la-snowflake-o:before{content:\"\\f2dc\"}.la.la-superpowers{font-family:'Line Awesome Brands';font-weight:400}.la.la-wpexplorer{font-family:'Line Awesome Brands';font-weight:400}.la.la-spotify{font-family:'Line Awesome Brands';font-weight:400}\n",""]),t.a=v},function(e,t,n){"use strict";t.a=n.p+"static/line-awesome/dist/line-awesome/fonts/la-brands-400.eot"},function(e,t,n){"use strict";t.a=n.p+"static/line-awesome/dist/line-awesome/fonts/la-brands-400.woff2"},function(e,t,n){"use strict";t.a=n.p+"static/line-awesome/dist/line-awesome/fonts/la-brands-400.woff"},function(e,t,n){"use strict";t.a=n.p+"static/line-awesome/dist/line-awesome/fonts/la-brands-400.ttf"},function(e,t,n){"use strict";t.a=n.p+"static/line-awesome/dist/line-awesome/fonts/la-regular-400.eot"},function(e,t,n){"use strict";t.a=n.p+"static/line-awesome/dist/line-awesome/fonts/la-regular-400.woff2"},function(e,t,n){"use strict";t.a=n.p+"static/line-awesome/dist/line-awesome/fonts/la-regular-400.woff"},function(e,t,n){"use strict";t.a=n.p+"static/line-awesome/dist/line-awesome/fonts/la-regular-400.ttf"},function(e,t,n){"use strict";t.a=n.p+"static/line-awesome/dist/line-awesome/fonts/la-solid-900.eot"},function(e,t,n){"use strict";t.a=n.p+"static/line-awesome/dist/line-awesome/fonts/la-solid-900.woff2"},function(e,t,n){"use strict";t.a=n.p+"static/line-awesome/dist/line-awesome/fonts/la-solid-900.woff"},function(e,t,n){"use strict";t.a=n.p+"static/line-awesome/dist/line-awesome/fonts/la-solid-900.ttf"},function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return d}));var o=n(80),r=(n(67),"_applyShimCurrentVersion"),a="_applyShimNextVersion",i=Promise.resolve();function s(e){var t=o.a[e];t&&function(e){e[r]=e[r]||0,e._applyShimValidatingVersion=e._applyShimValidatingVersion||0,e[a]=(e[a]||0)+1}(t)}function l(e){return e[r]===e[a]}function c(e){return!l(e)&&e._applyShimValidatingVersion===e[a]}function d(e){e._applyShimValidatingVersion=e[a],e._validating||(e._validating=!0,i.then((function(){e[r]=e[a],e._validating=!1})))}},,function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(36);var o=n(40),r=n(19),a=new Set,i={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(a.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)}),this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(e){this._notifyingDescendant?e.stopPropagation():r.h||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=Object(o.a)(e).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function t(){document.removeEventListener("readystatechange",t),e()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(e){e!==this&&e._findParent()}),this):(a.forEach((function(e){e!==this&&e._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?a.delete(this):a.add(this)}}},,function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var o=n(15),r=n(61),a=n(63),i=n(27),s=n(23),l=n(65),c=Element.prototype,d=c.matches||c.matchesSelector||c.mozMatchesSelector||c.msMatchesSelector||c.oMatchesSelector||c.webkitMatchesSelector;var h=n(6),f=0,u={},m=e=>{var t="vaadin-overlay-content-"+ ++f,n=document.createElement("template"),o=document.createElement("style");o.textContent=":host { display: block; }"+e,n.content.appendChild(o),window.ShadyCSS&&window.ShadyCSS.prepareTemplate(n,t);var r=class extends HTMLElement{static get is(){return t}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(document.importNode(n.content,!0)))}connectedCallback(){window.ShadyCSS&&window.ShadyCSS.styleElement(this)}};return customElements.define(r.is,r),u[e]=t,t};
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class p extends(Object(s.a)(Object(l.a)(o.a))){static get template(){return h.a`
    <style>
      :host {
        z-index: 200;
        position: fixed;

        /*
          Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part.
        */

        /*
          Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport.
        */
        top: 0;
        right: 0;
        bottom: var(--vaadin-overlay-viewport-bottom);
        left: 0;

        /* Use flexbox alignment for the overlay part. */
        display: flex;
        flex-direction: column; /* makes dropdowns sizing easier */
        /* Align to center by default. */
        align-items: center;
        justify-content: center;

        /* Allow centering when max-width/max-height applies. */
        margin: auto;

        /* The host is not clickable, only the overlay part is. */
        pointer-events: none;

        /* Remove tap highlight on touch devices. */
        -webkit-tap-highlight-color: transparent;

        /* CSS API for host */
        --vaadin-overlay-viewport-bottom: 0;
      }

      :host([hidden]),
      :host(:not([opened]):not([closing])) {
        display: none !important;
      }

      [part="overlay"] {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
        pointer-events: auto;

        /* Prevent overflowing the host in MSIE 11 */
        max-width: 100%;
        box-sizing: border-box;

        -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
      }

      [part="backdrop"] {
        z-index: -1;
        content: "";
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        pointer-events: auto;
      }
    </style>

    <div id="backdrop" part="backdrop" hidden\$="{{!withBackdrop}}"></div>
    <div part="overlay" id="overlay" tabindex="0">
      <div part="content" id="content">
        <slot></slot>
      </div>
    </div>
`}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,template:{type:Object,notify:!0},instanceProps:{type:Object},content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldInstanceProps:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_templateOrRendererChanged(template, renderer, owner, model, instanceProps, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),this._observer=new i.a(this,e=>{this._setTemplateFromNodes(e.addedNodes)}),this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this),/iPad|iPhone|iPod/.test(navigator.userAgent)&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}ready(){super.ready(),this._observer.flush(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{})}_detectIosNavbar(){if(this.opened){var e=window.innerHeight,t=window.innerWidth>e,n=document.documentElement.clientHeight;t&&n>e?this.style.setProperty("--vaadin-overlay-viewport-bottom",n-e+"px"):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}}_setTemplateFromNodes(e){this.template=e.filter(e=>e.localName&&"template"===e.localName)[0]||this.template}close(e){var t=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),t.defaultPrevented||(this.opened=!1)}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}_ironOverlayCanceled(e){e.preventDefault()}_mouseDownListener(e){this._mouseDownInside=e.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(e){this._mouseUpInside=e.composedPath().indexOf(this.$.overlay)>=0}_outsideClickListener(e){if(-1!==e.composedPath().indexOf(this.$.overlay)||this._mouseDownInside||this._mouseUpInside)return this._mouseDownInside=!1,void(this._mouseUpInside=!1);if(this._last){var t=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}}_keydownListener(e){if(this._last)if("Tab"===e.key&&this.focusTrap&&!e.defaultPrevented)this._cycleTab(e.shiftKey?-1:1),e.preventDefault();else if("Escape"===e.key||"Esc"===e.key){var t=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}}_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}_openedChanged(e,t){this._instance||this._ensureTemplatized(),e?(this.__restoreFocusNode=this._getActiveElement(),this._animatedOpening(),Object(a.a)(this,()=>{this.focusTrap&&!this.contains(document._activeElement||document.activeElement)&&this._cycleTab(0,0);var e=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(e)}),this.modeless||this._addGlobalListeners()):t&&(this._animatedClosing(),this.modeless||this._removeGlobalListeners())}_hiddenChanged(e){e&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){var e=getComputedStyle(this).getPropertyValue("animation-name");return!("none"===getComputedStyle(this).getPropertyValue("display"))&&e&&"none"!=e}_enqueueAnimation(e,t){var n=`__${e}Handler`,o=e=>{e&&e.target!==this||(t(),this.removeEventListener("animationend",o),delete this[n])};this[n]=o,this.addEventListener("animationend",o)}_flushAnimation(e){var t=`__${e}Handler`;"function"==typeof this[t]&&this[t]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening","");var e=()=>{document.addEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this.removeAttribute("opening")};this._shouldAnimate()?this._enqueueAnimation("opening",e):e()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_animatedClosing(){if(this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder){if(this._exitModalState(),this.restoreFocusOnClose&&this.__restoreFocusNode){var e=this._getActiveElement();(e===document.body||this._deepContains(e))&&this.__restoreFocusNode.focus(),this.__restoreFocusNode=null}this.setAttribute("closing","");var t=()=>{document.removeEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this._detachOverlay(),this.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),this.removeAttribute("closing")};this._shouldAnimate()?this._enqueueAnimation("closing",t):t()}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}static get __attachedInstances(){return Array.from(document.body.children).filter(e=>e instanceof p&&!e.hasAttribute("closing")).sort((e,t)=>e.__zIndex-t.__zIndex||0)}get _last(){return this===p.__attachedInstances.pop()}_modelessChanged(e){e?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0),document.addEventListener("keydown",this._boundKeydownListener)}_enterModalState(){"none"!==document.body.style.pointerEvents&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),p.__attachedInstances.forEach(e=>{e!==this&&(e.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents="none")})}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0),document.removeEventListener("keydown",this._boundKeydownListener)}_exitModalState(){void 0!==this._previousDocumentPointerEvents&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);for(var e,t=p.__attachedInstances;(e=t.pop())&&(e===this||(e.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),e.modeless)););}_removeOldContent(){this.content&&this._contentNodes&&(this._observer.disconnect(),this._contentNodes.forEach(e=>{e.parentNode===this.content&&this.content.removeChild(e)}),this._originalContentPart&&(this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content),this.$.content=this._originalContentPart,this._originalContentPart=void 0),this._observer.connect(),this._contentNodes=void 0,this.content=void 0)}_stampOverlayTemplate(e,t){this._removeOldContent(),e._Templatizer||(e._Templatizer=Object(r.b)(e,this,{instanceProps:t,forwardHostProp:function(e,t){this._instance&&this._instance.forwardHostProp(e,t)}})),this._instance=new e._Templatizer({}),this._contentNodes=Array.from(this._instance.root.childNodes);var n,o,a=e._templateRoot||(e._templateRoot=e.getRootNode());if(a!==document){var i=window.ShadyCSS&&!window.ShadyCSS.nativeShadow;this.$.content.shadowRoot||this.$.content.attachShadow({mode:"open"});var s=Array.from(a.querySelectorAll("style")).reduce((e,t)=>e+t.textContent,"");if(i){var l=window.ShadyCSS.ScopingShim._styleInfoForNode(a.host);l&&(s+=l._getStyleRules().parsedCssText,s+="}")}if(s=s.replace(/:host/g,":host-nomatch"))if(i){var c=(o=u[n=s]||m(n),document.createElement(o));c.id="content",c.setAttribute("part","content"),this.$.content.parentNode.replaceChild(c,this.$.content),c.className=this.$.content.className,this._originalContentPart=this.$.content,this.$.content=c}else{var d=document.createElement("style");d.textContent=s,this.$.content.shadowRoot.appendChild(d),this._contentNodes.unshift(d)}this.$.content.shadowRoot.appendChild(this._instance.root),this.content=this.$.content.shadowRoot}else this.appendChild(this._instance.root),this.content=this}_removeNewRendererOrTemplate(e,t,n,o){e!==t?this.template=void 0:n!==o&&(this.renderer=void 0)}render(){this.renderer&&this.renderer.call(this.owner,this.content,this.owner,this.model)}_templateOrRendererChanged(e,t,n,o,r,a){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for overlay content");var i=this._oldOwner!==n||this._oldModel!==o;this._oldModel=o,this._oldOwner=n;var s=this._oldInstanceProps!==r||this._oldTemplate!==e;this._oldInstanceProps=r,this._oldTemplate=e;var l=this._oldRenderer!==t;this._oldRenderer=t;var c=this._oldOpened!==a;if(this._oldOpened=a,e&&s)this._stampOverlayTemplate(e,r);else if(t&&(l||c||i)){if(this.content=this,l)for(;this.content.firstChild;)this.content.removeChild(this.content.firstChild);a&&this.render()}}_isFocused(e){return e&&e.getRootNode().activeElement===e}_focusedIndex(e){return(e=e||this._getFocusableElements()).indexOf(e.filter(this._isFocused).pop())}_cycleTab(e,t){var n=this._getFocusableElements();void 0===t&&(t=this._focusedIndex(n)),(t+=e)>=n.length?t=0:t<0&&(t=n.length-1),n[t].focus()}_getFocusableElements(){return class{static getTabbableNodes(e){var t=[];return this._collectTabbableNodes(e,t)?this._sortByTabIndex(t):t}static isFocusable(e){return d.call(e,"input, select, textarea, button, object")?d.call(e,":not([disabled])"):d.call(e,"a[href], area[href], iframe, [tabindex], [contentEditable]")}static isTabbable(e){return this.isFocusable(e)&&d.call(e,':not([tabindex="-1"])')&&this._isVisible(e)}static _normalizedTabIndex(e){if(this.isFocusable(e)){var t=e.getAttribute("tabindex")||0;return Number(t)}return-1}static _collectTabbableNodes(e,t){if(e.nodeType!==Node.ELEMENT_NODE||!this._isVisible(e))return!1;var n,o=e,r=this._normalizedTabIndex(o),a=r>0;if(r>=0&&t.push(o),n="slot"===o.localName?o.assignedNodes({flatten:!0}):(o.shadowRoot||o).children)for(var i=0;i<n.length;i++)a=this._collectTabbableNodes(n[i],t)||a;return a}static _isVisible(e){var t=e.style;return"hidden"!==t.visibility&&"none"!==t.display&&("hidden"!==(t=window.getComputedStyle(e)).visibility&&"none"!==t.display)}static _sortByTabIndex(e){var t=e.length;if(t<2)return e;var n=Math.ceil(t/2),o=this._sortByTabIndex(e.slice(0,n)),r=this._sortByTabIndex(e.slice(n));return this._mergeSortByTabIndex(o,r)}static _mergeSortByTabIndex(e,t){for(var n=[];e.length>0&&t.length>0;)this._hasLowerTabOrder(e[0],t[0])?n.push(t.shift()):n.push(e.shift());return n.concat(e,t)}static _hasLowerTabOrder(e,t){var n=Math.max(e.tabIndex,0),o=Math.max(t.tabIndex,0);return 0===n||0===o?o>n:n>o}}.getTabbableNodes(this.$.overlay)}_getActiveElement(){var e=document._activeElement||document.activeElement;for(e&&e!==document.documentElement&&e instanceof Element!=!1||(e=document.body);e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}_deepContains(e){if(this.contains(e))return!0;for(var t=e,n=e.ownerDocument;t&&t!==n&&t!==this;)t=t.parentNode||t.host;return t===this}bringToFront(){var e="",t=p.__attachedInstances.filter(e=>e!==this).pop();t&&(e=t.__zIndex+1);this.style.zIndex=e,this.__zIndex=e||parseFloat(getComputedStyle(this).zIndex)}}customElements.define(p.is,p)},,function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n(15),r=n(23),a=n(65),i=n(185),s=n(6);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class l extends(Object(i.a)(Object(r.a)(Object(a.a)(o.a)))){static get template(){return s.a`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }
    </style>
    <div part="content">
      <slot></slot>
    </div>
`}static get is(){return"vaadin-item"}static get version(){return"2.3.0"}constructor(){super(),this.value}}customElements.define(l.is,l)},,function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(25);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function o(e,t,n){return{index:e,removed:t,addedCount:n}}function r(e,t,n,r,a,s){var l,c=0,d=0,h=Math.min(n-t,s-a);if(0==t&&0==a&&(c=function(e,t,n){for(var o=0;o<n;o++)if(!i(e[o],t[o]))return o;return n}(e,r,h)),n==e.length&&s==r.length&&(d=function(e,t,n){var o=e.length,r=t.length,a=0;for(;a<n&&i(e[--o],t[--r]);)a++;return a}(e,r,h-c)),a+=c,s-=d,(n-=d)-(t+=c)==0&&s-a==0)return[];if(t==n){for(l=o(t,[],0);a<s;)l.removed.push(r[a++]);return[l]}if(a==s)return[o(t,[],n-t)];var f=function(e){for(var t=e.length-1,n=e[0].length-1,o=e[t][n],r=[];t>0||n>0;)if(0!=t)if(0!=n){var a=e[t-1][n-1],i=e[t-1][n],s=e[t][n-1],l=void 0;(l=i<s?i<a?i:a:s<a?s:a)==a?(a==o?r.push(0):(r.push(1),o=a),t--,n--):l==i?(r.push(3),t--,o=i):(r.push(2),n--,o=s)}else r.push(3),t--;else r.push(2),n--;return r.reverse(),r}(function(e,t,n,o,r,a){for(var s=a-r+1,l=n-t+1,c=new Array(s),d=0;d<s;d++)c[d]=new Array(l),c[d][0]=d;for(var h=0;h<l;h++)c[0][h]=h;for(var f=1;f<s;f++)for(var u=1;u<l;u++)if(i(e[t+u-1],o[r+f-1]))c[f][u]=c[f-1][u-1];else{var m=c[f-1][u]+1,p=c[f][u-1]+1;c[f][u]=m<p?m:p}return c}(e,t,n,r,a,s));l=void 0;for(var u=[],m=t,p=a,b=0;b<f.length;b++)switch(f[b]){case 0:l&&(u.push(l),l=void 0),m++,p++;break;case 1:l||(l=o(m,[],0)),l.addedCount++,m++,l.removed.push(r[p]),p++;break;case 2:l||(l=o(m,[],0)),l.addedCount++,m++;break;case 3:l||(l=o(m,[],0)),l.removed.push(r[p]),p++}return l&&u.push(l),u}function a(e,t){return r(e,0,e.length,t,0,t.length)}function i(e,t){return e===t}},,function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n(25);for(var o=n(29),r=n(93),a=n(137),i={},s=HTMLElement.prototype;s;){for(var l=Object.getOwnPropertyNames(s),c=0;c<l.length;c++)i[l[c]]=!0;s=Object.getPrototypeOf(s)}var d=Object(o.a)(e=>{var t=Object(a.a)(e);return class extends t{static createPropertiesForAttributes(){for(var e=this.observedAttributes,t=0;t<e.length;t++)this.prototype._createPropertyAccessor(Object(r.b)(e[t]))}static attributeNameForProperty(e){return Object(r.a)(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(var t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){this.hasAttribute(e)||this._valueToNodeAttribute(this,t,e)}_serializeValue(e){switch(typeof e){case"object":if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(e){return""}default:return super._serializeValue(e)}}_deserializeValue(e,t){var n;switch(t){case Object:try{n=JSON.parse(e)}catch(t){n=e}break;case Array:try{n=JSON.parse(e)}catch(t){n=null,console.warn("Polymer::Attributes: couldn't decode Array as JSON: "+e)}break;case Date:n=isNaN(e)?String(e):Number(e),n=new Date(n);break;default:n=super._deserializeValue(e,t)}return n}_definePropertyAccessor(e,t){!function(e,t){if(!i[t]){var n=e[t];void 0!==n&&(e.__data?e._setPendingProperty(t,n):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=n))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}})},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(25);var o=n(29),r=n(9),a=n(11),i=r.c,s=Object(o.a)(e=>class extends e{static createProperties(e){var t=this.prototype;for(var n in e)n in t||t._createPropertyAccessor(n)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){if(this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[e]){var t=this.constructor.attributeNameForProperty(e);this.__dataAttributes[t]=e}}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this._getProperty(e)},set:t?function(){}:function(t){this._setProperty(e,t)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(var e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,n){var o=this.__data[e],r=this._shouldPropertyChange(e,t,o);return r&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=o),this.__data[e]=t,this.__dataPending[e]=t),r}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,i.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){var e=this.__data,t=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(e,t,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,n))}_shouldPropertiesChange(e,t,n){return Boolean(t)}_propertiesChanged(e,t,n){}_shouldPropertyChange(e,t,n){return n!==t&&(n==n||t==t)}attributeChangedCallback(e,t,n,o){t!==n&&this._attributeToProperty(e,n),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,n,o)}_attributeToProperty(e,t,n){if(!this.__serializing){var o=this.__dataAttributes,r=o&&o[e]||e;this[r]=this._deserializeValue(t,n||this.constructor.typeForProperty(r))}}_propertyToAttribute(e,t,n){this.__serializing=!0,n=arguments.length<3?this[e]:n,this._valueToNodeAttribute(this,n,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,n){var o=this._serializeValue(t);void 0===o?e.removeAttribute(n):("class"!==n&&"name"!==n&&"slot"!==n||(e=Object(a.a)(e)),e.setAttribute(n,o))}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return null!=e?e.toString():void 0}}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}})},function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var o=n(13),r=n(9),a=class e{constructor(e,t,n){this.grid=e,this.parentCache=t,this.parentItem=n,this.itemCaches={},this.items={},this.effectiveSize=0,this.size=0,this.pendingRequests={}}isLoading(){return Boolean(Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter(e=>this.itemCaches[e].isLoading())[0])}getItemForIndex(e){var{cache:t,scaledIndex:n}=this.getCacheAndIndex(e);return t.items[n]}updateSize(){this.effectiveSize=!this.parentItem||this.grid._isExpanded(this.parentItem)?this.size+Object.keys(this.itemCaches).reduce((e,t)=>{var n=this.itemCaches[t];return n.updateSize(),e+n.effectiveSize},0):0}ensureSubCacheForScaledIndex(t){if(!this.itemCaches[t]){var n=new e(this.grid,this,this.items[t]);this.itemCaches[t]=n,this.grid._loadPage(0,n)}}getCacheAndIndex(e){for(var t=e,n=Object.keys(this.itemCaches),o=0;o<n.length;o++){var r=Number(n[o]),a=this.itemCaches[r];if(t<=r)return{cache:this,scaledIndex:t};if(t<=r+a.effectiveSize)return a.getCacheAndIndex(t-r-1);t-=a.effectiveSize}return{cache:this,scaledIndex:t}}},i=e=>class extends e{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged"},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_cache:{type:Object,value:function(){return new a(this)}},itemIdPath:{type:String,value:null},expandedItems:{type:Object,notify:!0,value:()=>[]}}}static get observers(){return["_sizeChanged(size)","_itemIdPathChanged(itemIdPath)","_expandedItemsChanged(expandedItems.*)"]}_sizeChanged(e){var t=e-this._cache.size;this._cache.size+=t,this._cache.effectiveSize+=t,this._effectiveSize=this._cache.effectiveSize,this._increasePoolIfNeeded(0),this._debounceIncreasePool&&this._debounceIncreasePool.flush()}_getItem(e,t){if(!(e>=this._effectiveSize)){t.index=e;var{cache:n,scaledIndex:o}=this._cache.getCacheAndIndex(e),r=n.items[o];r?(this._toggleAttribute("loading",!1,t),this._updateItem(t,r),this._isExpanded(r)&&n.ensureSubCacheForScaledIndex(o)):(this._toggleAttribute("loading",!0,t),this._loadPage(this._getPageForIndex(o),n))}}_expandedInstanceChangedCallback(e,t){void 0!==e.item&&(t?this.expandItem(e.item):this.collapseItem(e.item))}getItemId(e){return this.itemIdPath?this.get(this.itemIdPath,e):e}_isExpanded(e){return this.__expandedKeys.has(this.getItemId(e))}_expandedItemsChanged(e){this.__cacheExpandedKeys(),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,this._assignModels()}_itemIdPathChanged(e){this.__cacheExpandedKeys()}__cacheExpandedKeys(){this.expandedItems&&(this.__expandedKeys=new Set,this.expandedItems.forEach(e=>{this.__expandedKeys.add(this.getItemId(e))}))}expandItem(e){this._isExpanded(e)||this.push("expandedItems",e)}collapseItem(e){this._isExpanded(e)&&this.splice("expandedItems",this._getItemIndexInArray(e,this.expandedItems),1)}_getIndexLevel(e){for(var{cache:t}=this._cache.getCacheAndIndex(e),n=0;t.parentCache;)t=t.parentCache,n++;return n}_canPopulate(){return Boolean(this._hasData&&this._columnTree)}_loadPage(e,t){if(!t.pendingRequests[e]&&this.dataProvider){this._setLoading(!0),t.pendingRequests[e]=!0;var n={page:e,pageSize:this.pageSize,sortOrders:this._mapSorters(),filters:this._mapFilters(),parentItem:t.parentItem};this._debounceIncreasePool&&this._debounceIncreasePool.flush(),this.dataProvider(n,(a,i)=>{void 0!==i?t.size=i:n.parentItem&&(t.size=a.length);var s=Array.from(this.$.items.children).map(e=>e._item);a.forEach((n,o)=>{var r=e*this.pageSize+o;t.items[r]=n,this._isExpanded(n)&&s.indexOf(n)>-1&&t.ensureSubCacheForScaledIndex(r)}),this._hasData=!0,delete t.pendingRequests[e],this._debouncerApplyCachedData=o.a.debounce(this._debouncerApplyCachedData,r.d.after(0),()=>{this._setLoading(!1),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,Array.from(this.$.items.children).filter(e=>!e.hidden).forEach(e=>{this._cache.getItemForIndex(e.index)&&this._getItem(e.index,e)}),this._increasePoolIfNeeded(0),this.__scrollToPendingIndex()}),this._cache.isLoading()||this._debouncerApplyCachedData.flush(),this.__flushPendingRecalculateColumnWidths()})}}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){this._cache=new a(this),Array.from(this.$.items.children).forEach(e=>{Array.from(e.children).forEach(e=>{e._instance&&e._instance._setPendingProperty("item",{},!1)})}),this._cache.size=this.size||0,this._cache.updateSize(),this._hasData=!1,this._assignModels(),this._effectiveSize&&this._initialPoolCreated||this._loadPage(0,this._cache)}_pageSizeChanged(e,t){void 0!==t&&e!==t&&this.clearCache()}_checkSize(){void 0===this.size&&0===this._effectiveSize&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows. Set the total number of items to the `size` property, or provide the total number of items in the second argument of the `dataProvider`’s `callback` call.")}_dataProviderChanged(e,t){void 0!==t&&this.clearCache(),e&&this.items&&this.items.length&&this._scrollToIndex(this._firstVisibleIndex),this._ensureFirstPageLoaded(),this._debouncerCheckSize=o.a.debounce(this._debouncerCheckSize,r.d.after(2e3),this._checkSize.bind(this)),this._scrollHandler()}_ensureFirstPageLoaded(){this._hasData||this._loadPage(0,this._cache)}_itemsEqual(e,t){return this.getItemId(e)===this.getItemId(t)}_getItemIndexInArray(e,t){var n=-1;return t.forEach((t,o)=>{this._itemsEqual(t,e)&&(n=o)}),n}scrollToIndex(e){super.scrollToIndex(e),isNaN(e)||!this._cache.isLoading()&&this.clientHeight||(this.__pendingScrollToIndex=e)}__scrollToPendingIndex(){if(this.__pendingScrollToIndex&&this.$.items.children.length){var e=this.__pendingScrollToIndex;delete this.__pendingScrollToIndex,this._debounceIncreasePool&&this._debounceIncreasePool.flush(),this.scrollToIndex(e)}}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(15),r=n(61);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class a extends class extends o.a{}{static get is(){return"vaadin-grid-templatizer"}static get properties(){return{dataHost:Object,template:Object,_templateInstances:{type:Array,value:function(){return[]}},_parentPathValues:{value:function(){return{}}},_grid:Object}}static get observers(){return["_templateInstancesChanged(_templateInstances.*, _parentPathValues.*)"]}constructor(){super(),this._instanceProps={detailsOpened:!0,index:!0,item:!0,selected:!0,expanded:!0,level:!0}}createInstance(){this._ensureTemplatized();var e=new this._TemplateClass({});return this.addInstance(e),e}addInstance(e){-1===this._templateInstances.indexOf(e)&&(this._templateInstances.push(e),requestAnimationFrame(()=>this.notifyPath("_templateInstances.*",this._templateInstances)))}removeInstance(e){var t=this._templateInstances.indexOf(e);this.splice("_templateInstances",t,1)}_ensureTemplatized(){this._TemplateClass||(this._TemplateClass=Object(r.b)(this.template,this,{instanceProps:this._instanceProps,parentModel:!0,forwardHostProp:function(e,t){this._forwardParentProp(e,t),this._templateInstances&&this._templateInstances.forEach(n=>n.notifyPath(e,t))},notifyInstanceProp:function(e,t,n){if("index"!==t&&"item"!==t){var o=`__${t}__`;if(e[o]!==n){e[o]=n;var r=Array.from(this._grid.$.items.children).filter(t=>this._grid._itemsEqual(t._item,e.item))[0];r&&Array.from(r.children).forEach(e=>{e._instance&&(e._instance[o]=n,e._instance.notifyPath(t,n))});if(Array.isArray(this._grid.items)&&0===t.indexOf("item.")){var a=this._grid.items.indexOf(e.item),i=t.slice("item.".length);this._grid.notifyPath(`items.${a}.${i}`,n)}var s=`_${t}InstanceChangedCallback`;this._grid&&this._grid[s]&&this._grid[s](e,n)}}}}))}_forwardParentProp(e,t){this._parentPathValues[e]=t,this._templateInstances.forEach(n=>n.notifyPath(e,t))}_templateInstancesChanged(e,t){var n,o;if("_templateInstances"===e.path)n=0,o=this._templateInstances.length;else{if("_templateInstances.splices"!==e.path)return;n=e.value.index,o=e.value.addedCount}Object.keys(this._parentPathValues||{}).forEach(e=>{for(var t=n;t<n+o;t++)this._templateInstances[t].set(e,this._parentPathValues[e])})}}customElements.define(a.is,a)},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
var o=class{static _updateColumnOrders(e,t,n){var o=1;e.forEach(e=>{o%10==0&&o++,e._order=n+o*t,o++})}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n(9),r=n(13),a=n(6).a`<dom-module id="vaadin-text-field-shared-styles">
  <template>
    <style>
      :host {
        display: inline-flex;
        outline: none;
      }

      :host::before {
        content: "\\2003";
        width: 0;
        display: inline-block;
        /* Size and position this element on the same vertical position as the input-field element
           to make vertical align for the host element work as expected */
      }

      :host([hidden]) {
        display: none !important;
      }

      .vaadin-text-field-container,
      .vaadin-text-area-container {
        display: flex;
        flex-direction: column;
        min-width: 100%;
        max-width: 100%;
        width: var(--vaadin-text-field-default-width, 12em);
      }

      [part="label"]:empty {
        display: none;
      }

      [part="input-field"] {
        display: flex;
        align-items: center;
        flex: auto;
      }

      .vaadin-text-field-container [part="input-field"] {
        flex-grow: 0;
      }

      /* Reset the native input styles */
      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea) {
        -webkit-appearance: none;
        -moz-appearance: none;
        outline: none;
        margin: 0;
        padding: 0;
        border: 0;
        border-radius: 0;
        min-width: 0;
        font: inherit;
        font-size: 1em;
        line-height: normal;
        color: inherit;
        background-color: transparent;
        /* Disable default invalid style in Firefox */
        box-shadow: none;
      }

      [part="input-field"] ::slotted(*) {
        flex: none;
      }

      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
        flex: auto;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }

      [part="input-field"] ::slotted(textarea) {
        resize: none;
      }

      [part="value"]::-ms-clear,
      [part="input-field"] ::slotted(input)::-ms-clear {
        display: none;
      }

      [part="clear-button"] {
        cursor: default;
      }

      [part="clear-button"]::before {
        content: "✕";
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(a.content);var i={default:["list","autofocus","pattern","autocapitalize","autocorrect","maxlength","minlength","name","placeholder","autocomplete","title","disabled","readonly","required"],accessible:["invalid"]},s={DEFAULT:"default",ACCESSIBLE:"accessible"},l=e=>class extends e{static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String},autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,value:!1},errorMessage:{type:String,value:"",observer:"_errorMessageChanged"},i18n:{type:Object,value:()=>({clear:"Clear"})},label:{type:String,value:"",observer:"_labelChanged"},helperText:{type:String,value:"",observer:"_helperTextChanged"},maxlength:{type:Number},minlength:{type:Number},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,reflectToAttribute:!0},required:{type:Boolean,reflectToAttribute:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},hasValue:{type:Boolean,reflectToAttribute:!0},preventInvalidInput:{type:Boolean},_enabledCharPattern:String,_labelId:String,_helperTextId:String,_errorId:String,_inputId:String,_hasSlottedHelper:Boolean}}static get observers(){return["_stateChanged(disabled, readonly, clearButtonVisible, hasValue)","_hostPropsChanged("+i.default.join(", ")+")","_hostAccessiblePropsChanged("+i.accessible.join(", ")+")","_getActiveErrorId(invalid, errorMessage, _errorId, helperText, _helperTextId, _hasSlottedHelper)","_getActiveLabelId(label, _labelId, _inputId)","__observeOffsetHeight(errorMessage, invalid, label, helperText)","__enabledCharPatternChanged(_enabledCharPattern)"]}get focusElement(){if(this.shadowRoot){var e=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);return e||this.shadowRoot.querySelector('[part="value"]')}}get inputElement(){return this.focusElement}get _slottedTagName(){return"input"}_createConstraintsObserver(){this._createMethodObserver("_constraintsChanged(required, minlength, maxlength, pattern)")}_onInput(e){if(this.__preventInput)return e.stopImmediatePropagation(),void(this.__preventInput=!1);if(this.preventInvalidInput){var t=this.inputElement;if(t.value.length>0&&!this.checkValidity())return t.value=this.value||"",this.setAttribute("input-prevented",""),void(this._inputDebouncer=r.a.debounce(this._inputDebouncer,o.d.after(200),()=>{this.removeAttribute("input-prevented")}))}e.__fromClearButton||(this.__userInput=!0),this.value=e.target.value,this.__userInput=!1}_stateChanged(e,t,n,o){!e&&!t&&n&&o?this.$.clearButton.removeAttribute("hidden"):this.$.clearButton.setAttribute("hidden",!0)}_onChange(e){if(!this._valueClearing){var t=new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable});this.dispatchEvent(t)}}_valueChanged(e,t){""===e&&void 0===t||(this.hasValue=""!==e&&null!=e,this.__userInput||(void 0!==e?this.inputElement.value=e:this.value=this.inputElement.value="",this.invalid&&this.validate()))}_labelChanged(e){this._setOrToggleAttribute("has-label",!!e,this)}_helperTextChanged(e){this._setOrToggleAttribute("has-helper",!!e,this)}_errorMessageChanged(e){this._setOrToggleAttribute("has-error-message",!!e,this)}_onHelperSlotChange(){var e=this.shadowRoot.querySelector('[name="helper"]').assignedNodes({flatten:!0});this._hasSlottedHelper=e.filter(e=>3!==e.nodeType).length,this._hasSlottedHelper?this.setAttribute("has-helper","slotted"):""!==this.helperText&&null!==this.helperText||this.removeAttribute("has-helper")}_onSlotChange(){var e=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);this.value&&(this.inputElement.value=this.value,this.validate()),e&&!this._slottedInput?(this._validateSlottedValue(e),this._addInputListeners(e),this._addIEListeners(e),this._slottedInput=e):!e&&this._slottedInput&&(this._removeInputListeners(this._slottedInput),this._removeIEListeners(this._slottedInput),this._slottedInput=void 0),Object.keys(s).map(e=>s[e]).forEach(e=>this._propagateHostAttributes(i[e].map(e=>this[e]),e))}_hostPropsChanged(...e){this._propagateHostAttributes(e,s.DEFAULT)}_hostAccessiblePropsChanged(...e){this._propagateHostAttributes(e,s.ACCESSIBLE)}_validateSlottedValue(e){e.value!==this.value&&(console.warn("Please define value on the vaadin-text-field component!"),e.value="")}_propagateHostAttributes(e,t){var n=this.inputElement,o=i[t];t===s.ACCESSIBLE?o.forEach((t,o)=>{this._setOrToggleAttribute(t,e[o],n),this._setOrToggleAttribute("aria-"+t,!!e[o]&&"true",n)}):o.forEach((t,o)=>{this._setOrToggleAttribute(t,e[o],n)})}_setOrToggleAttribute(e,t,n){e&&n&&(t?n.setAttribute(e,"boolean"==typeof t?"":t):n.removeAttribute(e))}_constraintsChanged(e,t,n,o){this.invalid&&(e||t||n||o?this.validate():this.invalid=!1)}checkValidity(){return this.required||this.pattern||this.maxlength||this.minlength||this.__forceCheckValidity?this.inputElement.checkValidity():!this.invalid}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange),e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus),e.addEventListener("paste",this._boundOnPaste),e.addEventListener("drop",this._boundOnDrop),e.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange),e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus),e.removeEventListener("paste",this._boundOnPaste),e.removeEventListener("drop",this._boundOnDrop),e.removeEventListener("beforeinput",this._boundOnBeforeInput)}ready(){super.ready(),this._createConstraintsObserver(),this._boundOnInput=this._onInput.bind(this),this._boundOnChange=this._onChange.bind(this),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this);var e=this.shadowRoot.querySelector('[part="value"]');this._slottedInput=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`),this._addInputListeners(e),this._addIEListeners(e),this._slottedInput&&(this._addIEListeners(this._slottedInput),this._addInputListeners(this._slottedInput)),this.shadowRoot.querySelector('[name="input"], [name="textarea"]').addEventListener("slotchange",this._onSlotChange.bind(this)),this._onHelperSlotChange(),this.shadowRoot.querySelector('[name="helper"]').addEventListener("slotchange",this._onHelperSlotChange.bind(this)),window.ShadyCSS&&window.ShadyCSS.nativeCss||this.updateStyles(),this.$.clearButton.addEventListener("mousedown",()=>this._valueClearing=!0),this.$.clearButton.addEventListener("mouseleave",()=>this._valueClearing=!1),this.$.clearButton.addEventListener("click",this._onClearButtonClick.bind(this)),this.addEventListener("keydown",this._onKeyDown.bind(this));var t=l._uniqueId=1+l._uniqueId||0;this._errorId=`${this.constructor.is}-error-${t}`,this._labelId=`${this.constructor.is}-label-${t}`,this._helperTextId=`${this.constructor.is}-helper-${t}`,this._inputId=`${this.constructor.is}-input-${t}`,this.shadowRoot.querySelector('[part="error-message"]').addEventListener("transitionend",()=>{this.__observeOffsetHeight()})}validate(){return!(this.invalid=!this.checkValidity())}clear(){this.value=""}_onBlur(){this.validate()}_onFocus(){this.autoselect&&(this.inputElement.select(),setTimeout(()=>{try{this.inputElement.setSelectionRange(0,9999)}catch(e){}}))}_onClearButtonClick(e){e.preventDefault(),this.inputElement.focus(),this.clear(),this._valueClearing=!1,navigator.userAgent.match(/Trident/)&&(this.__preventInput=!1);var t=new Event("input",{bubbles:!0,composed:!0});t.__fromClearButton=!0;var n=new Event("change",{bubbles:!this._slottedInput});n.__fromClearButton=!0,this.inputElement.dispatchEvent(t),this.inputElement.dispatchEvent(n)}_onKeyDown(e){if(27===e.keyCode&&this.clearButtonVisible){var t=!!this.value;this.clear(),t&&this.inputElement.dispatchEvent(new Event("change",{bubbles:!this._slottedInput}))}this._enabledCharPattern&&!this.__shouldAcceptKey(e)&&e.preventDefault()}__shouldAcceptKey(e){return e.metaKey||e.ctrlKey||!e.key||1!==e.key.length||this.__enabledCharRegExp.test(e.key)}_onPaste(e){if(this._enabledCharPattern){var t=(e.clipboardData||window.clipboardData).getData("text");this.__enabledTextRegExp.test(t)||e.preventDefault()}}_onDrop(e){if(this._enabledCharPattern){var t=e.dataTransfer.getData("text");this.__enabledTextRegExp.test(t)||e.preventDefault()}}_onBeforeInput(e){this._enabledCharPattern&&e.data&&!this.__enabledTextRegExp.test(e.data)&&e.preventDefault()}__enabledCharPatternChanged(e){this.__enabledCharRegExp=e&&new RegExp("^"+e+"$"),this.__enabledTextRegExp=e&&new RegExp("^"+e+"*$")}_addIEListeners(e){navigator.userAgent.match(/Trident/)&&(this._shouldPreventInput=()=>{this.__preventInput=!0,requestAnimationFrame(()=>{this.__preventInput=!1})},e.addEventListener("focusin",this._shouldPreventInput),e.addEventListener("focusout",this._shouldPreventInput),this._createPropertyObserver("placeholder",this._shouldPreventInput))}_removeIEListeners(e){navigator.userAgent.match(/Trident/)&&(e.removeEventListener("focusin",this._shouldPreventInput),e.removeEventListener("focusout",this._shouldPreventInput))}_getActiveErrorId(e,t,n,o,r,a){var i=[];(o||a)&&i.push(r),t&&e&&i.push(n),this._setOrToggleAttribute("aria-describedby",i.join(" "),this.focusElement)}_getActiveLabelId(e,t,n){var o=n;e&&(o=`${t} ${n}`),this.focusElement.setAttribute("aria-labelledby",o)}_getErrorMessageAriaHidden(e,t,n){return(!(t&&e?n:void 0)).toString()}_dispatchIronResizeEventIfNeeded(e,t){var n="__previous"+e;void 0!==this[n]&&this[n]!==t&&this.dispatchEvent(new CustomEvent("iron-resize",{bubbles:!0,composed:!0})),this[n]=t}__observeOffsetHeight(){this.__observeOffsetHeightDebouncer=r.a.debounce(this.__observeOffsetHeightDebouncer,o.a,()=>{this._dispatchIronResizeEventIfNeeded("Height",this.offsetHeight)})}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),window.ShadyCSS&&window.ShadyCSS.nativeCss||!/^(focused|focus-ring|invalid|disabled|placeholder|has-value)$/.test(e)||this.updateStyles(),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&this.root){this.root.querySelectorAll("*").forEach(e=>{e.style["-webkit-backface-visibility"]="visible",e.style["-webkit-backface-visibility"]=""})}}get __data(){return this.__dataValue||{}}set __data(e){this.__dataValue=e}}},,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(15),r=n(141),a=n(75),i=n(23),s=n(33),l=n(6);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class c extends(Object(s.a)(Object(r.a)(Object(a.a)(Object(i.a)(o.a))))){static get template(){return l.a`
    <style include="vaadin-text-field-shared-styles">
      /* polymer-cli linter breaks with empty line */
    </style>

    <div class="vaadin-text-field-container">

      <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>

      <div part="input-field" id="[[_inputId]]">

        <slot name="prefix"></slot>

        <slot name="input">
          <input part="value">
        </slot>

        <div part="clear-button" id="clearButton" role="button" aria-label\$="[[i18n.clear]]"></div>
        <slot name="suffix"></slot>

      </div>

      <div part="helper-text" id="[[_helperTextId]]">
        <slot name="helper">[[helperText]]</slot>
      </div>

      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>

    </div>
`}static get is(){return"vaadin-text-field"}static get version(){return"2.8.4"}static get properties(){return{list:{type:String},pattern:{type:String},title:{type:String}}}}customElements.define(c.is,c)},,function(e,t,n){"use strict";n(217),n(148)},,function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var o=n(15),r=n(48),a=n(23),i=n(75),s=n(33),l=n(6),c=n(31);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class d extends(Object(s.a)(Object(i.a)(Object(a.a)(Object(r.a)(o.a))))){static get template(){return l.a`
    <style>
      :host {
        display: inline-block;
        position: relative;
        outline: none;
        white-space: nowrap;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Ensure the button is always aligned on the baseline */
      .vaadin-button-container::before {
        content: "\\2003";
        display: inline-block;
        width: 0;
      }

      .vaadin-button-container {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        min-height: inherit;
        text-shadow: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="prefix"],
      [part="suffix"] {
        flex: none;
      }

      [part="label"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }
    </style>
    <div class="vaadin-button-container">
      <div part="prefix">
        <slot name="prefix"></slot>
      </div>
      <div part="label">
        <slot></slot>
      </div>
      <div part="suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
    <button id="button" type="button"></button>
`}static get is(){return"vaadin-button"}static get version(){return"2.4.0"}ready(){super.ready(),this.setAttribute("role","button"),this.$.button.setAttribute("role","presentation"),this._addActiveListeners(),window.ShadyDOM&&window.ShadyDOM.flush()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this.removeAttribute("active")}_addActiveListeners(){Object(c.addListener)(this,"down",()=>!this.disabled&&this.setAttribute("active","")),Object(c.addListener)(this,"up",()=>this.removeAttribute("active")),this.addEventListener("keydown",e=>!this.disabled&&[13,32].indexOf(e.keyCode)>=0&&this.setAttribute("active","")),this.addEventListener("keyup",()=>this.removeAttribute("active")),this.addEventListener("blur",()=>this.removeAttribute("active"))}get focusElement(){return this.$.button}}customElements.define(d.is,d)},,function(e,t,n){"use strict";n(211),n(202)},,function(e,t,n){"use strict";n.d(t,"a",(function(){return ee}));var o=n(36),r=n(23),a=n(63),i=n(9),s=n(38),l=n(128),c=n(182),d=n(103),h=n(13),f=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),u=f&&f[1]>=8,m=i.a,p=i.b,b=i.c,g=Object(d.a)({behaviors:[l.a,c.a],_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_collection:null,_lastVisibleIndexVal:null,_maxPages:2,_focusedVirtualIndex:-1,_itemsPerRow:1,_rowHeight:0,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return(this.grid?this._physicalRows*this._rowHeight:this._physicalSize)-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var e=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,e-this._physicalCount)},set _virtualStart(e){e=this._clamp(e,0,this._maxVirtualStart),this.grid&&(e-=e%this._itemsPerRow),this._virtualStartVal=e},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(e){(e%=this._physicalCount)<0&&(e=this._physicalCount+e),this.grid&&(e-=e%this._itemsPerRow),this._physicalStartVal=e},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(e){this._physicalCountVal=e},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var e=this._firstVisibleIndexVal;if(null==e){var t=this._physicalTop+this._scrollOffset;e=this._iterateItems((function(e,n){return(t+=this._getPhysicalSizeIncrement(e))>this._scrollPosition?this.grid?n-n%this._itemsPerRow:n:this.grid&&this._virtualCount-1===n?n-n%this._itemsPerRow:void 0}))||0,this._firstVisibleIndexVal=e}return e},get lastVisibleIndex(){var e=this._lastVisibleIndexVal;if(null==e){if(this.grid)e=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1);else{var t=this._physicalTop+this._scrollOffset;this._iterateItems((function(n,o){t<this._scrollBottom&&(e=o),t+=this._getPhysicalSizeIncrement(n)}))}this._lastVisibleIndexVal=e}return e},get _scrollOffset(){return this._scrollerPaddingTop},attached:function(){this._debounce("_render",this._render,m),this.listen(this,"iron-resize","_resizeHandler")},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler")},updateViewportBoundaries:function(){var e=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(e["padding-top"],10),this._isRTL=Boolean("rtl"===e.direction),this._viewportWidth=this.$.items.offsetWidth,this._viewportHeight=this._scrollTargetHeight,this.grid&&this._updateGridMetrics()},_scrollHandler:function(){var e=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop)),t=e-this._scrollPosition,n=t>=0;if(this._scrollPosition=e,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t-=this._scrollOffset;var o=Math.round(t/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+o,this._physicalStart=this._physicalStart+o,this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage,this._update()}else if(this._physicalCount>0){var r=this._getReusables(n);n?(this._physicalTop=r.physicalTop,this._virtualStart=this._virtualStart+r.indexes.length,this._physicalStart=this._physicalStart+r.indexes.length):(this._virtualStart=this._virtualStart-r.indexes.length,this._physicalStart=this._physicalStart-r.indexes.length),this._update(r.indexes,n?null:r.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),b)}},_getReusables:function(e){var t,n,o,r=[],a=this._hiddenContentSize*this._ratio,i=this._virtualStart,s=this._virtualEnd,l=this._physicalCount,c=this._physicalTop+this._scrollOffset,d=this._physicalBottom+this._scrollOffset,h=this._scrollTop,f=this._scrollBottom;for(e?(t=this._physicalStart,n=h-c):(t=this._physicalEnd,n=d-f);n-=o=this._getPhysicalSizeIncrement(t),!(r.length>=l||n<=a);)if(e){if(s+r.length+1>=this._virtualCount)break;if(c+o>=h-this._scrollOffset)break;r.push(t),c+=o,t=(t+1)%l}else{if(i-r.length<=0)break;if(c+this._physicalSize-o<=f)break;r.push(t),c-=o,t=0===t?l-1:t-1}return{indexes:r,physicalTop:c-this._scrollOffset}},_update:function(e,t){if(!(e&&0===e.length||0===this._physicalCount)){if(this._manageFocus(),this._assignModels(e),this._updateMetrics(e),t)for(;t.length;){var n=t.pop();this._physicalTop-=this._getPhysicalSizeIncrement(n)}this._positionItems(),this._updateScrollerSize()}},_isClientFull:function(){return 0!=this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(e){var t=this._clamp(this._physicalCount+e,3,this._virtualCount-this._virtualStart),n=(t=this._convertIndexToCompleteRow(t))-this._physicalCount,o=Math.round(.5*this._physicalCount);if(!(n<0)){if(n>0){var r=window.performance.now();[].push.apply(this._physicalItems,this._createPool(n));for(var a=0;a<n;a++)this._physicalSizes.push(0);this._physicalCount=this._physicalCount+n,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart=this._physicalStart+n),this._update(),this._templateCost=(window.performance.now()-r)/n,o=Math.round(.5*this._physicalCount)}this._virtualEnd>=this._virtualCount-1||0===o||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,o)),p):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,o),b))}},_render:function(){if(this.isAttached&&this._isVisible)if(0!==this._physicalCount){var e=this._getReusables(!0);this._physicalTop=e.physicalTop,this._virtualStart=this._virtualStart+e.indexes.length,this._physicalStart=this._physicalStart+e.indexes.length,this._update(e.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(3))},_itemsChanged:function(e){"items"===e.path&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._collection=(this.items,null),this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._removeFocusedItem(),this._debounce("_render",this._render,m))},_iterateItems:function(e,t){var n,o,r,a;if(2===arguments.length&&t){for(a=0;a<t.length;a++)if(n=t[a],o=this._computeVidx(n),null!=(r=e.call(this,n,o)))return r}else{for(n=this._physicalStart,o=this._virtualStart;n<this._physicalCount;n++,o++)if(null!=(r=e.call(this,n,o)))return r;for(n=0;n<this._physicalStart;n++,o++)if(null!=(r=e.call(this,n,o)))return r}},_computeVidx:function(e){return e>=this._physicalStart?this._virtualStart+(e-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+e},_updateMetrics:function(e){if(this._isVisible){Object(s.b)();var t=0,n=0,o=this._physicalAverageCount,r=this._physicalAverage;this._iterateItems((function(e,o){n+=this._physicalSizes[e],this._physicalSizes[e]=this._physicalItems[e].offsetHeight,t+=this._physicalSizes[e],this._physicalAverageCount+=this._physicalSizes[e]?1:0}),e),this.grid?(this._updateGridMetrics(),this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight):(n=1===this._itemsPerRow?n:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight,this._physicalSize=this._physicalSize+t-n,this._itemsPerRow=1),this._physicalAverageCount!==o&&(this._physicalAverage=Math.round((r*o+t)/this._physicalAverageCount))}},_positionItems:function(){this._adjustScrollPosition();var e=this._physicalTop;this._iterateItems((function(t,n){this.translate3d(0,e+"px",0,this._physicalItems[t]),e+=this._physicalSizes[t]}))},_getPhysicalSizeIncrement:function(e){return this.grid?this._computeVidx(e)%this._itemsPerRow!=this._itemsPerRow-1?0:this._rowHeight:this._physicalSizes[e]},_adjustScrollPosition:function(){var e=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(0!==e){this._physicalTop=this._physicalTop-e;var t=this._scrollTop;!u&&t>0&&this._resetScrollPosition(t-e)}},_resetScrollPosition:function(e){this.scrollTarget&&e>=0&&(this._scrollTop=e,this._scrollPosition=this._scrollTop)},_updateScrollerSize:function(e){this.grid?this._estScrollHeight=this._virtualRowCount*this._rowHeight:this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,((e=(e=(e=e||0===this._scrollHeight)||this._scrollPosition>=this._estScrollHeight-this._physicalSize)||this.grid&&this.$.items.style.height<this._estScrollHeight)||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=this._estScrollHeight+"px",this._scrollHeight=this._estScrollHeight)},scrollToIndex:function(e){if(!("number"!=typeof e||e<0||e>this.items.length-1)&&(Object(s.b)(),0!==this._physicalCount)){e=this._clamp(e,0,this._virtualCount-1),(!this._isIndexRendered(e)||e>=this._maxVirtualStart)&&(this._virtualStart=this.grid?e-2*this._itemsPerRow:e-1),this._manageFocus(),this._assignModels(),this._updateMetrics(),this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;for(var t=this._physicalStart,n=this._virtualStart,o=0,r=this._hiddenContentSize;n<e&&o<=r;)o+=this._getPhysicalSizeIncrement(t),t=(t+1)%this._physicalCount,n++;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+o),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null}},_resetAverage:function(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",(function(){this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this.updateViewportBoundaries(),this._isVisible?(this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)}),m)},_convertIndexToCompleteRow:function(e){return this._itemsPerRow=this._itemsPerRow||1,this.grid?Math.ceil(e/this._itemsPerRow)*this._itemsPerRow:e},_isIndexRendered:function(e){return e>=this._virtualStart&&e<=this._virtualEnd},_getPhysicalIndex:function(e){return(this._physicalStart+(e-this._virtualStart))%this._physicalCount},_clamp:function(e,t,n){return Math.min(n,Math.max(t,e))},_debounce:function(e,t,n){this._debouncers=this._debouncers||{},this._debouncers[e]=h.a.debounce(this._debouncers[e],n,t.bind(this)),Object(h.b)(this._debouncers[e])}});
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class _ extends g{static get is(){return"vaadin-grid-scroller"}static get properties(){return{size:{type:Number,notify:!0},_vidxOffset:{value:0}}}static get observers(){return["_effectiveSizeChanged(_effectiveSize)"]}connectedCallback(){super.connectedCallback(),this._scrollHandler()}_updateScrollerItem(e,t){}_afterScroll(){}_getRowTarget(){}_createScrollerRows(){}_canPopulate(){}scrollToIndex(e){this._warnPrivateAPIAccess("scrollToIndex"),this._scrollingToIndex=!0,e=Math.min(Math.max(e,0),this._effectiveSize-1),this.$.table.scrollTop=e/this._effectiveSize*(this.$.table.scrollHeight-this.$.table.offsetHeight),this._scrollHandler(),this._accessIronListAPI(()=>this._maxScrollTop)&&this._virtualCount<this._effectiveSize&&this._adjustVirtualIndexOffset(1e6),this._accessIronListAPI(()=>super.scrollToIndex(e-this._vidxOffset)),this._scrollHandler();var t=Array.from(this.$.items.children).filter(t=>t.index===e)[0];if(t){var n=t.getBoundingClientRect().top-this.$.header.getBoundingClientRect().bottom;Math.abs(n)>1&&(this.$.table.scrollTop+=n,this._scrollHandler())}this._scrollingToIndex=!1}_effectiveSizeChanged(e){var t,n=0;if(this._iterateItems((e,o)=>{if(o===this._firstVisibleIndex){var r=this._physicalItems[e];t=r.index,n=r.getBoundingClientRect().top}}),this.items&&e<this.items.length&&(this._scrollTop=0),!Array.isArray(this.items)){var o=this._edge||this._ie?3e4:1e5;this.items={length:Math.min(e,o)}}this._accessIronListAPI(()=>super._itemsChanged({path:"items"})),this._virtualCount=Math.min(this.items.length,e)||0,0===this._scrollTop&&(this._accessIronListAPI(()=>this._scrollToIndex(Math.min(e-1,t))),this._iterateItems((e,o)=>{var r=this._physicalItems[e];if(r.index===t&&(this.$.table.scrollTop+=Math.round(r.getBoundingClientRect().top-n)),r.index===this._focusedItemIndex&&this._itemsFocusable&&this.$.items.contains(this.shadowRoot.activeElement)){var a=Array.from(this._itemsFocusable.parentElement.children).indexOf(this._itemsFocusable);r.children[a].focus()}})),this._assignModels(),requestAnimationFrame(()=>this._update()),this.__updateFooterPositioning(),this._ie&&(this.$.table.style.display="block",setTimeout(()=>{this.$.table.style.display="flex",this._translateStationaryElements()}))}_positionItems(){var e;this._adjustScrollPosition(),isNaN(this._physicalTop)&&(e=!0,this._physicalTop=0);var t=this._physicalTop;this._iterateItems((e,n)=>{this._physicalItems[e].style.transform=`translateY(${t}px)`,t+=this._physicalSizes[e]}),e&&this._scrollToIndex(0)}_increasePoolIfNeeded(e){0===e&&this._scrollingToIndex||!this._canPopulate()||!this._effectiveSize||(this._initialPoolCreated?this._optPhysicalSize!==1/0&&(this._debounceIncreasePool=h.a.debounce(this._debounceIncreasePool,i.a,()=>{this._updateMetrics();var e=this._optPhysicalSize-this._physicalSize,t=Math.ceil(e/this._physicalAverage);this._physicalCount+t>this._effectiveSize&&(t=Math.max(0,this._effectiveSize-this._physicalCount)),this._physicalSize&&t>0&&this._optPhysicalSize!==1/0&&(super._increasePoolIfNeeded(t),this.__reorderChildNodes()),this.__flushPendingRecalculateColumnWidths()})):(this._initialPoolCreated=!0,super._increasePoolIfNeeded(25)))}__reorderChildNodes(){var e=Array.from(this.$.items.childNodes);!!e.reduce((e,t,n,o)=>{if(0===n||o[n-1].index===t.index-1)return e},!0)||e.sort((e,t)=>e.index-t.index).forEach(e=>this.$.items.appendChild(e))}_createPool(e){var t=document.createDocumentFragment(),n=this._createScrollerRows(e);n.forEach(e=>t.appendChild(e)),this._getRowTarget().appendChild(t);var o=this.querySelector("[slot]");if(o){var r=o.getAttribute("slot");o.setAttribute("slot","foo-bar"),o.setAttribute("slot",r)}return Object(a.a)(this,()=>this.notifyResize()),n}_assignModels(e){this._iterateItems((e,t)=>{var n=this._physicalItems[e];this._toggleAttribute("hidden",t>=this._effectiveSize,n),this._updateScrollerItem(n,t+(this._vidxOffset||0))},e)}_scrollHandler(){var e=this.$.table.scrollTop-this._scrollPosition;this._accessIronListAPI(super._scrollHandler);var t=this._vidxOffset;this._accessIronListAPI(()=>this._maxScrollTop)&&this._virtualCount<this._effectiveSize?this._adjustVirtualIndexOffset(e):this._vidxOffset=0,this._vidxOffset!==t&&this._update(),this._afterScroll()}_adjustVirtualIndexOffset(e){if(Math.abs(e)>1e4){if(this._noScale)return void(this._noScale=!1);var t=this.$.table.scrollTop/(this.$.table.scrollHeight-this.$.table.offsetHeight),n=t*this._effectiveSize;this._vidxOffset=Math.round(n-t*this._virtualCount)}else{var o=this._vidxOffset||0;0===this._scrollTop?(this._vidxOffset=0,o!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<1e3&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,100),o!==this._vidxOffset&&super.scrollToIndex(this.firstVisibleIndex+(o-this._vidxOffset)),this._noScale=!0);var r=this._effectiveSize-this._virtualCount;this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=r,o!==this._vidxOffset&&super.scrollToIndex(this._virtualCount)):this.firstVisibleIndex>this._virtualCount-1e3&&this._vidxOffset<r&&(this._vidxOffset+=Math.min(r-this._vidxOffset,100),o!==this._vidxOffset&&super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-o)),this._noScale=!0)}}_accessIronListAPI(e){this._warnPrivateAPIAccessAsyncEnabled=!1;var t=e.apply(this);return this._debouncerWarnPrivateAPIAccess=h.a.debounce(this._debouncerWarnPrivateAPIAccess,i.a,()=>this._warnPrivateAPIAccessAsyncEnabled=!0),t}_debounceRender(e,t){super._debounceRender(()=>this._accessIronListAPI(e),t)}_warnPrivateAPIAccess(e){this._warnPrivateAPIAccessAsyncEnabled&&console.warn(`Accessing private API (${e})!`)}_render(){this._accessIronListAPI(super._render)}_createFocusBackfillItem(){}_multiSelectionChanged(){}clearSelection(){}_itemsChanged(){}_manageFocus(){}_removeFocusedItem(){}get _firstVisibleIndex(){return this._accessIronListAPI(()=>super.firstVisibleIndex)}get _lastVisibleIndex(){return this._accessIronListAPI(()=>super.lastVisibleIndex)}_scrollToIndex(e){this._accessIronListAPI(()=>this.scrollToIndex(e))}get firstVisibleIndex(){return this._warnPrivateAPIAccess("firstVisibleIndex"),super.firstVisibleIndex}set firstVisibleIndex(e){this._warnPrivateAPIAccess("firstVisibleIndex"),super.firstVisibleIndex=e}get lastVisibleIndex(){return this._warnPrivateAPIAccess("lastVisibleIndex"),super.lastVisibleIndex}set lastVisibleIndex(e){this._warnPrivateAPIAccess("lastVisibleIndex"),super.lastVisibleIndex=e}updateViewportBoundaries(){this._warnPrivateAPIAccess("updateViewportBoundaries"),super.updateViewportBoundaries.apply(this,arguments)}_resizeHandler(){super._resizeHandler(),Object(s.b)()}__isCreatingRows(){var e=this._debouncers&&this._debouncers._increasePoolIfNeeded&&this._debouncers._increasePoolIfNeeded.isActive(),t=this._debounceIncreasePool&&this._debounceIncreasePool.isActive();return e||t}}customElements.define(_.is,_);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
var v=e=>class extends e{static get observers(){return["_a11yUpdateGridSize(size, _columnTree, _columnTree.*)"]}_a11yGetHeaderRowCount(e){return e.filter(e=>e.some(e=>e._headerTemplate||e.headerRenderer||e.path||e.header)).length}_a11yGetFooterRowCount(e){return e.filter(e=>e.some(e=>e._headerTemplate||e.headerRenderer)).length}_a11yUpdateGridSize(e,t){if(void 0!==e&&void 0!==t){var n=t[t.length-1];this.$.table.setAttribute("aria-rowcount",e+this._a11yGetHeaderRowCount(t)+this._a11yGetFooterRowCount(t)),this.$.table.setAttribute("aria-colcount",n&&n.length||0),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}}_a11yUpdateHeaderRows(){Array.from(this.$.header.children).forEach((e,t)=>e.setAttribute("aria-rowindex",t+1))}_a11yUpdateFooterRows(){Array.from(this.$.footer.children).forEach((e,t)=>e.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+t+1))}_a11yUpdateRowRowindex(e,t){e.setAttribute("aria-rowindex",t+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(e,t){e.setAttribute("aria-selected",Boolean(t)),Array.from(e.children).forEach(e=>e.setAttribute("aria-selected",Boolean(t)))}_a11yUpdateRowLevel(e,t){e.setAttribute("aria-level",t+1)}_a11yUpdateRowDetailsOpened(e,t){Array.from(e.children).forEach(e=>{"boolean"==typeof t?e.setAttribute("aria-expanded",t):e.hasAttribute("aria-expanded")&&e.removeAttribute("aria-expanded")})}_a11ySetRowDetailsCell(e,t){Array.from(e.children).forEach(e=>{e!==t&&e.setAttribute("aria-controls",t.id)})}_a11yUpdateCellColspan(e,t){e.setAttribute("aria-colspan",Number(t))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(e=>{for(var t=e.parentNode;t&&"vaadin-grid-cell-content"!==t.localName;)t=t.parentNode;t&&t.assignedSlot&&t.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(e.direction)]||"none")})}},y=n(183),w=e=>class extends e{static get properties(){return{items:Array}}static get observers(){return["_itemsChanged(items, items.*, isAttached)"]}_itemsChanged(e,t,n){if(n){if(!Array.isArray(e))return null==e&&(this.size=0),void(this.dataProvider===this._arrayDataProvider&&(this.dataProvider=void 0));this.size=e.length,this.dataProvider=this.dataProvider||this._arrayDataProvider,this.clearCache(),this._ensureFirstPageLoaded()}}_arrayDataProvider(e,t){var n=(Array.isArray(this.items)?this.items:[]).slice(0);this._filters&&this._checkPaths(this._filters,"filtering",n)&&(n=this._filter(n)),this.size=n.length,e.sortOrders.length&&this._checkPaths(this._sorters,"sorting",n)&&(n=n.sort(this._multiSort.bind(this)));var o=e.page*e.pageSize,r=o+e.pageSize;t(n.slice(o,r),n.length)}_checkPaths(e,t,n){if(!n.length)return!1;var r=!0;for(var a in e){var i=e[a].path;if(i&&-1!==i.indexOf(".")){var s=i.replace(/\.[^\.]*$/,"");void 0===o.a.get(s,n[0])&&(console.warn(`Path "${i}" used for ${t} does not exist in all of the items, ${t} is disabled.`),r=!1)}}return r}_multiSort(e,t){return this._sorters.map(n=>"asc"===n.direction?this._compare(o.a.get(n.path,e),o.a.get(n.path,t)):"desc"===n.direction?this._compare(o.a.get(n.path,t),o.a.get(n.path,e)):0).reduce((e,t)=>e||t,0)}_normalizeEmptyValue(e){return[void 0,null].indexOf(e)>=0?"":isNaN(e)?e.toString():e}_compare(e,t){return(e=this._normalizeEmptyValue(e))<(t=this._normalizeEmptyValue(t))?-1:e>t?1:0}_filter(e){return e.filter((e,t)=>0===this._filters.filter(t=>{var n=this._normalizeEmptyValue(o.a.get(t.path,e)),r=this._normalizeEmptyValue(t.value).toString().toLowerCase();return-1===n.toString().toLowerCase().indexOf(r)}).length)}},A=n(48),x=n(31),C=e=>class extends(Object(A.a)(e)){ready(){super.ready();var e=this.$.scroller;Object(x.addListener)(e,"track",this._onHeaderTrack.bind(this)),e.addEventListener("touchmove",t=>e.hasAttribute("column-resizing")&&t.preventDefault()),e.addEventListener("contextmenu",e=>"resize-handle"==e.target.getAttribute("part")&&e.preventDefault()),e.addEventListener("mousedown",e=>"resize-handle"===e.target.getAttribute("part")&&e.preventDefault())}_onHeaderTrack(e){var t=e.target;if("resize-handle"===t.getAttribute("part")){var n=t.parentElement._column;for(this._toggleAttribute("column-resizing",!0,this.$.scroller);"vaadin-grid-column-group"===n.localName;)n=Array.prototype.slice.call(n._childColumns,0).sort((function(e,t){return e._order-t._order})).filter((function(e){return!e.hidden})).pop();var o=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]')),r=o.filter(e=>e._column===n)[0];if(r.offsetWidth){var a=window.getComputedStyle(r),i=10+parseInt(a.paddingLeft)+parseInt(a.paddingRight)+parseInt(a.borderLeftWidth)+parseInt(a.borderRightWidth)+parseInt(a.marginLeft)+parseInt(a.marginRight),s=r.offsetWidth+(this.__isRTL?r.getBoundingClientRect().left-e.detail.x:e.detail.x-r.getBoundingClientRect().right);n.width=Math.max(i,s)+"px",n.flexGrow=0}o.sort((function(e,t){return e._column._order-t._column._order})).forEach((function(e,t,n){t<n.indexOf(r)&&(e._column.width=e.offsetWidth+"px",e._column.flexGrow=0)})),"end"===e.detail.state&&(this._toggleAttribute("column-resizing",!1,this.$.scroller),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:n}}))),this._resizeHandler()}}},S=n(138),E=n(27),k=n(15),O=e=>class extends e{ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(e){for(var t=0;t<e.length;t++)if("vaadin-grid-column-group"===e[t].localName)return!0;return!1}_getChildColumns(e){return E.a.getFlattenedNodes(e).filter(this._isColumnElement)}_flattenColumnGroups(e){return e.map(e=>"vaadin-grid-column-group"===e.localName?this._getChildColumns(e):[e]).reduce((e,t)=>e.concat(t),[])}_getColumnTree(){for(var e=[],t=E.a.getFlattenedNodes(this).filter(this._isColumnElement);e.push(t),this._hasColumnGroups(t);)t=this._flattenColumnGroups(t);return e}_updateColumnTree(){var e=this._getColumnTree();this._arrayEquals(e,this._columnTree)||(this._columnTree=e)}_addNodeObserver(){this._observer=new E.a(this,e=>{var t=e.addedNodes.filter(e=>"template"===e.localName&&e.classList.contains("row-details"))[0];t&&this._rowDetailsTemplate!==t&&(this._rowDetailsTemplate=t);var n=e=>e.filter(this._isColumnElement).length>0;if(n(e.addedNodes)||n(e.removedNodes)){var o=e.removedNodes.reduce((e,t)=>e.concat(t._allCells),[]),r=e=>o.filter(t=>t._content.contains(e)).length;this.__removeSorters(this._sorters.filter(r)),this.__removeFilters(this._filters.filter(r)),this._updateColumnTree()}this._debouncerCheckImports=h.a.debounce(this._debouncerCheckImports,i.d.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()})}_arrayEquals(e,t){if(!e||!t||e.length!=t.length)return!1;for(var n=0,o=e.length;n<o;n++)if(e[n]instanceof Array&&t[n]instanceof Array){if(!this._arrayEquals(e[n],t[n]))return!1}else if(e[n]!=t[n])return!1;return!0}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach(e=>{var t=this.querySelector(e);!t||t instanceof k.a||console.warn(`Make sure you have imported the required module for <${e}> element.`)})}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(e=>this._updateFirstAndLastColumnForRow(e))}_updateFirstAndLastColumnForRow(e){Array.from(e.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort((e,t)=>e._column._order-t._column._order).forEach((e,t,n)=>{this._toggleAttribute("first-column",0===t,e),this._toggleAttribute("last-column",t===n.length-1,e)})}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/.test(e.localName)}}
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/,L=e=>class extends e{getEventContext(e){var t={},n=e.composedPath(),o=n[n.indexOf(this.$.table)-3];return o?(t.section=["body","header","footer","details"].filter(e=>o.getAttribute("part").indexOf(e)>-1)[0],o._column&&(t.column=o._column),"body"!==t.section&&"details"!==t.section||Object.assign(t,this.__getRowModel(o.parentElement)),t):t}}
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/,I=e=>class extends e{static get properties(){return{_filters:{type:Array,value:function(){return[]}}}}ready(){super.ready(),this.addEventListener("filter-changed",this._filterChanged.bind(this))}_filterChanged(e){e.stopPropagation(),this.__addFilter(e.target),this.__applyFilters()}__removeFilters(e){0!=e.length&&(this._filters=this._filters.filter(t=>e.indexOf(t)<0),this.__applyFilters())}__addFilter(e){-1===this._filters.indexOf(e)&&this._filters.push(e)}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache()}_mapFilters(){return this._filters.map(e=>({path:e.path,value:e.value}))}},T=n(139),z=e=>class extends e{static get properties(){return{detailsOpenedItems:{type:Array,value:function(){return[]}},_rowDetailsTemplate:Object,rowDetailsRenderer:Function,_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems.*, _rowDetailsTemplate, rowDetailsRenderer)","_rowDetailsTemplateOrRendererChanged(_rowDetailsTemplate, rowDetailsRenderer)"]}_rowDetailsTemplateOrRendererChanged(e,t){if(e&&t)throw new Error("You should only use either a renderer or a template for row details");if(e||t){if(e&&!e.templatizer){var n=new T.a;n._grid=this,n.dataHost=this.dataHost,n.template=e,e.templatizer=n}this._columnTree&&Array.from(this.$.items.children).forEach(e=>{e.querySelector("[part~=details-cell]")||(this._updateRow(e,this._columnTree[this._columnTree.length-1]),this._a11yUpdateRowDetailsOpened(e,!1)),delete e.querySelector("[part~=details-cell]")._instance}),this.detailsOpenedItems.length&&(Array.from(this.$.items.children).forEach(this._toggleDetailsCell,this),this._update())}}_detailsOpenedItemsChanged(e,t,n){"detailsOpenedItems.length"!==e.path&&e.value&&Array.from(this.$.items.children).forEach(e=>{this._toggleDetailsCell(e,e._item),this._a11yUpdateRowDetailsOpened(e,this._isDetailsOpened(e._item)),this._toggleAttribute("details-opened",this._isDetailsOpened(e._item),e)})}_configureDetailsCell(e){e.setAttribute("part","cell details-cell"),this._toggleAttribute("frozen",!0,e)}_toggleDetailsCell(e,t){var n=e.querySelector('[part~="details-cell"]');if(n){var o=!this._isDetailsOpened(t),r=!!n.hidden!==o;(n._instance||n._renderer)&&n.hidden===o||(n.hidden=o,o?e.style.removeProperty("padding-bottom"):(this.rowDetailsRenderer?(n._renderer=this.rowDetailsRenderer,n._renderer.call(this,n._content,this,{index:e.index,item:t})):this._rowDetailsTemplate&&!n._instance&&(n._instance=this._rowDetailsTemplate.templatizer.createInstance(),n._content.innerHTML="",n._content.appendChild(n._instance.root),this._updateItem(e,t)),Object(s.b)(),e.style.setProperty("padding-bottom",n.offsetHeight+"px"),requestAnimationFrame(()=>this.notifyResize()))),r&&(this._updateMetrics(),this._positionItems())}}_updateDetailsCellHeights(){Array.from(this.$.items.querySelectorAll('[part~="details-cell"]:not([hidden])')).forEach(e=>{e.parentElement.style.setProperty("padding-bottom",e.offsetHeight+"px")})}_isDetailsOpened(e){return this.detailsOpenedItems&&-1!==this._getItemIndexInArray(e,this.detailsOpenedItems)}openItemDetails(e){this._isDetailsOpened(e)||this.push("detailsOpenedItems",e)}closeItemDetails(e){this._isDetailsOpened(e)&&this.splice("detailsOpenedItems",this._getItemIndexInArray(e,this.detailsOpenedItems),1)}_detailsOpenedInstanceChangedCallback(e,t){super._detailsOpenedInstanceChangedCallback&&super._detailsOpenedInstanceChangedCallback(e,t),t?this.openItemDetails(e.item):this.closeItemDetails(e.item)}}
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/,P=e=>class extends e{get _timeouts(){return{SCROLLING:500,IGNORE_WHEEL:500}}static get properties(){return{_frozenCells:{type:Array,value:()=>[]},_rowWithFocusedElement:Element,_deltaYAcc:{type:Number,value:0},_useSticky:{type:Boolean,value:window.CSS&&window.CSS.supports&&(window.CSS.supports("position","sticky")||window.CSS.supports("position","-webkit-sticky"))}}}static get observers(){return["_scrollViewportHeightUpdated(_viewportHeight)"]}set _scrollTop(e){this.$.table.scrollTop=e}get _scrollTop(){return this.$.table.scrollTop}constructor(){super(),this._scrollLineHeight=this._getScrollLineHeight()}_getScrollLineHeight(){var e=document.createElement("div");e.style.fontSize="initial",e.style.display="none",document.body.appendChild(e);var t=window.getComputedStyle(e).fontSize;return document.body.removeChild(e),t?window.parseInt(t):void 0}_scrollViewportHeightUpdated(e){this._scrollPageHeight=e-this.$.header.clientHeight-this.$.footer.clientHeight-this._scrollLineHeight}ready(){super.ready(),this.$.outerscroller=document.createElement("div"),this.scrollTarget=this.$.table,this.addEventListener("wheel",this._onWheel),this.$.items.addEventListener("focusin",e=>{var t=e.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=e.composedPath()[t-1]}),this.$.items.addEventListener("focusout",()=>this._rowWithFocusedElement=void 0),this.scrollTarget.addEventListener("mousedown",()=>this.__mouseDown=!0),this.scrollTarget.addEventListener("mouseup",()=>{this.__mouseDown=!1,this.__pendingReorder&&(this.__pendingReorder=!1,setTimeout(()=>this._reorderRows(),this._timeouts.SCROLLING))})}scrollToIndex(e){this._accessIronListAPI(()=>super.scrollToIndex(e))}_onWheel(e){if(!e.ctrlKey&&!this._hasScrolledAncestor(e.target,e.deltaX,e.deltaY)){var t=this.$.table,n=e.deltaY;if(e.deltaMode===WheelEvent.DOM_DELTA_LINE?n*=this._scrollLineHeight:e.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(n*=this._scrollPageHeight),this._wheelAnimationFrame)return this._deltaYAcc+=n,void e.preventDefault();n+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this._debouncerWheelAnimationFrame=h.a.debounce(this._debouncerWheelAnimationFrame,i.a,()=>this._wheelAnimationFrame=!1);var o=Math.abs(e.deltaX)+Math.abs(n);this._canScroll(t,e.deltaX,n)?(e.preventDefault(),t.scrollTop+=n,t.scrollLeft+=e.deltaX,this._scrollHandler(),this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=h.a.debounce(this._debouncerIgnoreNewWheel,i.d.after(this._timeouts.IGNORE_WHEEL),()=>this._ignoreNewWheel=!1)):this._hasResidualMomentum&&o<=this._previousMomentum||this._ignoreNewWheel?e.preventDefault():o>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=o}}_hasScrolledAncestor(e,t,n){return"vaadin-grid-cell-content"!==e.localName&&(!(!this._canScroll(e,t,n)||-1===["auto","scroll"].indexOf(getComputedStyle(e).overflow))||(e!==this&&e.parentElement?this._hasScrolledAncestor(e.parentElement,t,n):void 0))}_canScroll(e,t,n){return n>0&&e.scrollTop<e.scrollHeight-e.offsetHeight||n<0&&e.scrollTop>0||t>0&&e.scrollLeft<e.scrollWidth-e.offsetWidth||t<0&&e.scrollLeft>0}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame(()=>this._toggleAttribute("scrolling",!0,this.$.scroller))),this._debounceScrolling=h.a.debounce(this._debounceScrolling,i.d.after(this._timeouts.SCROLLING),()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this._toggleAttribute("scrolling",!1,this.$.scroller),this._reorderRows()})}_afterScroll(){this._translateStationaryElements(),this.hasAttribute("reordering")||this._scheduleScrolling(),this._updateOverflow()}_updateOverflow(){var e="",t=this.$.table;t.scrollTop<t.scrollHeight-t.clientHeight&&(e+=" bottom"),t.scrollTop>0&&(e+=" top"),t.scrollLeft<t.scrollWidth-t.clientWidth&&(e+=" right"),t.scrollLeft>0&&(e+=" left"),this._debounceOverflow=h.a.debounce(this._debounceOverflow,i.a,()=>{var t=e.trim();t.length>0&&this.getAttribute("overflow")!==t?this.setAttribute("overflow",t):0==t.length&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")})}_reorderRows(){if(this.__mouseDown)this.__pendingReorder=!0;else{var e=this.$.items,t=e.querySelectorAll("tr");if(t.length){var n=this._virtualStart+this._vidxOffset,o=this._rowWithFocusedElement||Array.from(t).filter(e=>!e.hidden)[0];if(o){var r=o.index-n,a=Array.from(t).indexOf(o)-r;if(a>0)for(var i=0;i<a;i++)e.appendChild(t[i]);else if(a<0)for(var s=t.length+a;s<t.length;s++)e.insertBefore(t[s],t[0]);if(this._safari){var{transform:l}=this.$.header.style;this.$.header.style.transform="",setTimeout(()=>this.$.header.style.transform=l)}}}}}_frozenCellsChanged(){this._debouncerCacheElements=h.a.debounce(this._debouncerCacheElements,i.c,()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach((function(e){e.style.transform=""})),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._updateScrollerMeasurements(),this._translateStationaryElements()}),this._updateLastFrozen()}_updateScrollerMeasurements(){this._frozenCells.length>0&&this.__isRTL&&(this.__scrollerMetrics={scrollWidth:this.$.table.scrollWidth,clientWidth:this.$.table.clientWidth})}_updateLastFrozen(){if(this._columnTree){var e=this._columnTree[this._columnTree.length-1].slice(0);e.sort((e,t)=>e._order-t._order);var t=e.reduce((e,t,n)=>(t._lastFrozen=!1,t.frozen&&!t.hidden?n:e),void 0);void 0!==t&&(e[t]._lastFrozen=!0)}}_translateStationaryElements(){var e=Math.max(0,this._scrollLeft),t=Math.max(0,this._scrollTop),n=0,o=0,r=0;if(this._useSticky||(n=e,o=t,r=this.$.table.clientHeight-this.$.footer.offsetHeight-this.$.footer.offsetTop),this.$.header.style.transform=this._getTranslate(-e+n,o),this.$.footer.style.transform=this._getTranslate(-e+n,o+r),this.$.items.style.transform=this._getTranslate(-e+n,0),this._frozenCells.length>0)for(var a=this.__isRTL?this.__getNormalizedScrollLeft(this.$.table)+this.__scrollerMetrics.clientWidth-this.__scrollerMetrics.scrollWidth:this._scrollLeft,i=this._getTranslate(a,0),s=0;s<this._frozenCells.length;s++)this._frozenCells[s].style.transform=i}_getTranslate(e,t){return`translate(${e}px, ${t}px)`}}
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/,F=e=>class extends e{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[]}}}static get observers(){return["_selectedItemsChanged(selectedItems.*)"]}_isSelected(e){return this.selectedItems&&this._getItemIndexInArray(e,this.selectedItems)>-1}selectItem(e){this._isSelected(e)||this.push("selectedItems",e)}deselectItem(e){var t=this._getItemIndexInArray(e,this.selectedItems);t>-1&&this.splice("selectedItems",t,1)}_toggleItem(e){-1===this._getItemIndexInArray(e,this.selectedItems)?this.selectItem(e):this.deselectItem(e)}_selectedItemsChanged(e){!this.$.items.children.length||"selectedItems"!==e.path&&"selectedItems.splices"!==e.path||Array.from(this.$.items.children).forEach(e=>{this._updateItem(e,e._item)})}_selectedInstanceChangedCallback(e,t){super._selectedInstanceChangedCallback&&super._selectedInstanceChangedCallback(e,t),t?this.selectItem(e.item):this.deselectItem(e.item)}}
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/,R=e=>class extends e{static get properties(){return{multiSort:{type:Boolean,value:!1},_sorters:{type:Array,value:function(){return[]}},_previousSorters:{type:Array,value:function(){return[]}}}}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged),window.ShadyDOM&&i.c.run(()=>{var e=this.querySelectorAll("vaadin-grid-sorter");Array.from(e).forEach(e=>{e instanceof k.a&&e.dispatchEvent(new CustomEvent("sorter-changed",{bubbles:!0,composed:!0}))})})}_onSorterChanged(e){var t=e.target;e.stopPropagation(),this.__updateSorter(t),this.__applySorters()}__removeSorters(e){0!=e.length&&(this._sorters=this._sorters.filter(t=>e.indexOf(t)<0),this.multiSort&&this.__updateSortOrders(),this.__applySorters())}__updateSortOrders(){this._sorters.forEach((e,t)=>e._order=this._sorters.length>1?t:null,this)}__updateSorter(e){if(e.direction||-1!==this._sorters.indexOf(e))if(e._order=null,this.multiSort)this._removeArrayItem(this._sorters,e),e.direction&&this._sorters.unshift(e),this.__updateSortOrders(),this._sorters.forEach((e,t)=>e._order=this._sorters.length>1?t:null,this);else if(e.direction){var t=this._sorters.filter(t=>t!=e);this._sorters=[e],t.forEach(e=>{e._order=null,e.direction=null})}}__applySorters(){this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.clearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map(e=>({path:e.path,direction:e.direction}))}_removeArrayItem(e,t){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/,N=e=>class extends e{static get properties(){return{cellClassNameGenerator:Function}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)"]}__cellClassNameGeneratorChanged(e){this.generateCellClassNames()}generateCellClassNames(){Array.from(this.$.items.children).filter(e=>!e.hidden).forEach(e=>this._generateCellClassNames(e,this.__getRowModel(e)))}_generateCellClassNames(e,t){Array.from(e.children).forEach(e=>{if(e.__generatedClasses&&e.__generatedClasses.forEach(t=>e.classList.remove(t)),this.cellClassNameGenerator){var n=this.cellClassNameGenerator(e._column,t);e.__generatedClasses=n&&n.split(" ").filter(e=>e.length>0),e.__generatedClasses&&e.__generatedClasses.forEach(t=>e.classList.add(t))}})}}
/**
@license
Copyright (c) 2019 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/,M="between",B="on-top-or-between",j="on-grid",D="on-top",H="above",$="below",q="empty",V=e=>class extends e{static get properties(){return{dropMode:String,rowsDraggable:Boolean,dragFilter:Function,dropFilter:Function,__dndAutoScrollThreshold:{value:50}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter)"]}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",e=>{this.dropMode&&(e.preventDefault(),e.stopPropagation())})}_onDragStart(e){if(this.rowsDraggable){var t=e.target;if("vaadin-grid-cell-content"===t.localName&&(t=t.assignedSlot.parentNode.parentNode),t.parentNode!==this.$.items)return;if(e.stopPropagation(),this._toggleAttribute("dragging-rows",!0,this),this._safari){var n=t.style.transform;t.style.top=/translateY\((.*)\)/.exec(n)[1],t.style.transform="none",requestAnimationFrame(()=>{t.style.top="",t.style.transform=n})}var o=t.getBoundingClientRect();window.ShadyDOM||(this._ios?e.dataTransfer.setDragImage(t):e.dataTransfer.setDragImage(t,e.clientX-o.left,e.clientY-o.top));var r=[t];this._isSelected(t._item)&&(r=this.__getViewportRows().filter(e=>this._isSelected(e._item)).filter(e=>!this.dragFilter||this.dragFilter(this.__getRowModel(e)))),e.dataTransfer.setData("text",this.__formatDefaultTransferData(r)),t.setAttribute("dragstart",r.length>1?r.length:""),this.updateStyles({"--_grid-drag-start-x":e.clientX-o.left+20+"px","--_grid-drag-start-y":e.clientY-o.top+10+"px"}),requestAnimationFrame(()=>{t.removeAttribute("dragstart"),this.updateStyles({"--_grid-drag-start-x":"","--_grid-drag-start-y":""})});var a=new CustomEvent("grid-dragstart",{detail:{draggedItems:r.map(e=>e._item),setDragData:(t,n)=>e.dataTransfer.setData(t,n),setDraggedItemsCount:e=>t.setAttribute("dragstart",e)}});a.originalEvent=e,this.dispatchEvent(a)}}_onDragEnd(e){this._toggleAttribute("dragging-rows",!1,this),e.stopPropagation();var t=new CustomEvent("grid-dragend");t.originalEvent=e,this.dispatchEvent(t)}_onDragLeave(e){e.stopPropagation(),this._clearDragStyles()}_onDragOver(e){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(e.clientY))return void this._clearDragStyles();var t=e.composedPath().filter(e=>"tr"===e.localName)[0];if(this._effectiveSize&&this.dropMode!==j)if(t&&t.parentNode===this.$.items){var n=t.getBoundingClientRect();if(this._dropLocation=D,this.dropMode===M){var o=e.clientY-n.top<n.bottom-e.clientY;this._dropLocation=o?H:$}else this.dropMode===B&&(e.clientY-n.top<n.height/3?this._dropLocation=H:e.clientY-n.top>n.height/3*2&&(this._dropLocation=$))}else{if(t)return;if(this.dropMode!==M&&this.dropMode!==B)return;t=Array.from(this.$.items.children).filter(e=>!e.hidden).pop(),this._dropLocation=$}else this._dropLocation=q;if(t&&t.hasAttribute("drop-disabled"))return void(this._dropLocation=void 0);e.stopPropagation(),e.preventDefault(),this._dropLocation===q?this._toggleAttribute("dragover",!0,this):t?(this._dragOverItem=t._item,t.getAttribute("dragover")!==this._dropLocation&&t.setAttribute("dragover",this._dropLocation)):this._clearDragStyles()}}__dndAutoScroll(e){if(this.__dndAutoScrolling)return!0;var t=this.$.header.getBoundingClientRect().bottom,n=this.$.footer.getBoundingClientRect().top,o=t-e+this.__dndAutoScrollThreshold,r=e-n+this.__dndAutoScrollThreshold,a=0;if(r>0?a=2*r:o>0&&(a=2*-o),a){var i=this.$.table.scrollTop;if(this.$.table.scrollTop+=a,i!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout(()=>this.__dndAutoScrolling=!1,20),this._scrollHandler(),!0}}__getViewportRows(){var e=this.$.header.getBoundingClientRect().bottom,t=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter(n=>{var o=n.getBoundingClientRect();return o.bottom>e&&o.top<t})}_clearDragStyles(){this.removeAttribute("dragover"),Array.from(this.$.items.children).forEach(e=>e.removeAttribute("dragover"))}_onDrop(e){if(this.dropMode){e.stopPropagation(),e.preventDefault();var t=e.dataTransfer.types&&Array.from(e.dataTransfer.types).map(t=>({type:t,data:e.dataTransfer.getData(t)}));this._clearDragStyles();var n=new CustomEvent("grid-drop",{bubbles:e.bubbles,cancelable:e.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:t}});n.originalEvent=e,this.dispatchEvent(n)}}__formatDefaultTransferData(e){return e.map(e=>Array.from(e.children).filter(e=>!e.hidden&&-1===e.getAttribute("part").indexOf("details-cell")).sort((e,t)=>e._column._order>t._column._order?1:-1).map(e=>e._content.textContent.trim()).filter(e=>e).join("\t")).join("\n")}_dragDropAccessChanged(e,t,n,o){this.filterDragAndDrop()}filterDragAndDrop(){Array.from(this.$.items.children).filter(e=>!e.hidden).forEach(e=>{this._filterDragAndDrop(e,this.__getRowModel(e))})}_filterDragAndDrop(e,t){var n=!this.rowsDraggable||this.dragFilter&&!this.dragFilter(t),o=!this.dropMode||this.dropFilter&&!this.dropFilter(t);(window.ShadyDOM?[e]:Array.from(e.children).map(e=>e._content)).forEach(e=>{n?e.removeAttribute("draggable"):e.setAttribute("draggable",!0)}),this._toggleAttribute("drag-disabled",n,e),this._toggleAttribute("drop-disabled",o,e)}}
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/,G=e=>class extends e{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged"},_itemsFocusable:{type:Object,observer:"_focusableChanged"},_footerFocusable:{type:Object,observer:"_focusableChanged"},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number,interacting:{type:Boolean,value:!1,reflectToAttribute:!0,readOnly:!0,observer:"_interactingChanged"}}}ready(){super.ready(),this._ios||this._android||(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onCellFocusIn.bind(this)),this.$.table.addEventListener("focusout",this._onCellFocusOut.bind(this)),this.addEventListener("mousedown",()=>{this._toggleAttribute("navigating",!1,this),this._isMousedown=!0}),this.addEventListener("mouseup",()=>this._isMousedown=!1))}_focusableChanged(e,t){t&&t.setAttribute("tabindex","-1"),e&&this._updateGridSectionFocusTarget(e)}_interactingChanged(){this._updateGridSectionFocusTarget(this._headerFocusable),this._updateGridSectionFocusTarget(this._itemsFocusable),this._updateGridSectionFocusTarget(this._footerFocusable)}_onKeyDown(e){var t,n=e.key;switch("Up"!==n&&"Down"!==n&&"Left"!==n&&"Right"!==n||(n="Arrow"+n),"Esc"===n&&(n="Escape"),"Spacebar"===n&&(n=" "),n){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":t="Navigation";break;case"Enter":case"Escape":case"F2":t="Interaction";break;case"Tab":t="Tab";break;case" ":t="Space"}this._detectInteracting(e),this.interacting&&"Interaction"!==t&&(t=void 0),t&&this[`_on${t}KeyDown`](e,n)}_ensureScrolledToIndex(e){Array.from(this.$.items.children).filter(t=>t.index===e)[0]||this._scrollToIndex(e)}_onNavigationKeyDown(e,t){function n(e){return Array.prototype.indexOf.call(e.parentNode.children,e)}this._scrollHandler(),e.preventDefault();var o=this._lastVisibleIndex-this._firstVisibleIndex-1,r=0,a=0;switch(t){case"ArrowRight":r=this.__isRTL?-1:1;break;case"ArrowLeft":r=this.__isRTL?1:-1;break;case"Home":r=-1/0,e.ctrlKey&&(a=-1/0);break;case"End":r=1/0,e.ctrlKey&&(a=1/0);break;case"ArrowDown":a=1;break;case"ArrowUp":a=-1;break;case"PageDown":a=o;break;case"PageUp":a=-o}var i=e.composedPath()[0],s=n(i),l=this._elementMatches(i,'[part~="details-cell"]'),c=i.parentNode,d=c.parentNode,h=(d===this.$.items?this._effectiveSize:d.children.length)-1,f=d===this.$.items?void 0!==this._focusedItemIndex?this._focusedItemIndex:c.index:n(c),u=Math.max(0,Math.min(f+a,h)),m=!1;if(d===this.$.items){var p=c._item,b=this._cache.getItemForIndex(u);(m=l?0===a:1===a&&this._isDetailsOpened(p)||-1===a&&u!==f&&this._isDetailsOpened(b))!==l&&(1===a&&m||-1===a&&!m)&&(u=f)}if(d!==this.$.items)if(u>f)for(;u<h&&d.children[u].hidden;)u++;else if(u<f)for(;u>0&&d.children[u].hidden;)u--;void 0===this._focusedColumnOrder&&(this._focusedColumnOrder=l?0:this._getColumns(d,f).filter(e=>!e.hidden)[s]._order);var g=this._getColumns(d,u).filter(e=>!e.hidden),_=g.map(e=>e._order).sort((e,t)=>e-t),v=_.length-1,y=_.indexOf(_.slice(0).sort((e,t)=>Math.abs(e-this._focusedColumnOrder)-Math.abs(t-this._focusedColumnOrder))[0]),w=0===a&&l?y:Math.max(0,Math.min(y+r,v));w!==y&&(this._focusedColumnOrder=void 0),d===this.$.items&&this._ensureScrolledToIndex(u),this._toggleAttribute("navigating",!0,this);var A=g.reduce((e,t,n)=>(e[t._order]=n,e),{})[_[w]],x=d===this.$.items?Array.from(d.children).filter(e=>e.index===u)[0]:d.children[u];if(x){var C=m?Array.from(x.children).filter(e=>this._elementMatches(e,'[part~="details-cell"]'))[0]:x.children[A];if(this._scrollHorizontallyToCell(C),d===this.$.items&&(this._focusedItemIndex=u),d===this.$.items){var S=C.getBoundingClientRect(),E=this.$.footer.getBoundingClientRect().top,k=this.$.header.getBoundingClientRect().bottom;S.bottom>E?(this.$.table.scrollTop+=S.bottom-E,this._scrollHandler()):S.top<k&&(this.$.table.scrollTop-=k-S.top,this._scrollHandler())}C.focus()}}_onInteractionKeyDown(e,t){var n,o=e.composedPath()[0],r="input"===o.localName&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/i.test(o.type);switch(t){case"Enter":n=!this.interacting||!r;break;case"Escape":n=!1;break;case"F2":n=!this.interacting}var{cell:a}=this._getGridEventLocation(e);if(this.interacting!==n&&null!==a)if(n){var i=a._content.querySelector("[focus-target]")||a._content.firstElementChild;i&&(e.preventDefault(),i.focus(),this._setInteracting(!0),this._toggleAttribute("navigating",!1,this))}else e.preventDefault(),this._focusedColumnOrder=void 0,a.focus(),this._setInteracting(!1),this._toggleAttribute("navigating",!0,this)}_predictFocusStepTarget(e,t){var n=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit],o=n.indexOf(e);for(o+=t;o>=0&&o<=n.length-1&&(!n[o]||n[o].parentNode.hidden);)o+=t;return n[o]}_onTabKeyDown(e){var t=this._predictFocusStepTarget(e.composedPath()[0],e.shiftKey?-1:1);if(t===this.$.table)this.$.table.focus();else if(t===this.$.focusexit)this.$.focusexit.focus();else if(t===this._itemsFocusable){var n=t,o=this._itemsFocusable.parentNode;if(this._ensureScrolledToIndex(this._focusedItemIndex),o.index!==this._focusedItemIndex){var r=Array.from(o.children).indexOf(this._itemsFocusable),a=Array.from(this.$.items.children).filter(e=>e.index===this._focusedItemIndex)[0];a&&(n=a.children[r])}e.preventDefault(),n.focus()}else e.preventDefault(),t.focus();this._toggleAttribute("navigating",!0,this)}_onSpaceKeyDown(e){e.preventDefault();var t=e.composedPath()[0];t._content&&t._content.firstElementChild||this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(t.parentElement)}}))}_onKeyUp(e){if(/^( |SpaceBar)$/.test(e.key)){e.preventDefault();var t=e.composedPath()[0];if(t._content&&t._content.firstElementChild){var n=this.hasAttribute("navigating");t._content.firstElementChild.click(),this._toggleAttribute("navigating",n,this)}}}_onFocusIn(e){this._isMousedown||this._toggleAttribute("navigating",!0,this);var t=e.composedPath()[0];t===this.$.table||t===this.$.focusexit?(this._predictFocusStepTarget(t,t===this.$.table?1:-1).focus(),this._setInteracting(!1)):this._detectInteracting(e)}_onFocusOut(e){this._toggleAttribute("navigating",!1,this),this._detectInteracting(e)}_onCellFocusIn(e){var{section:t,cell:n}=this._getGridEventLocation(e);this._detectInteracting(e),t&&n&&(this._activeRowGroup=t,this.$.header===t?this._headerFocusable=n:this.$.items===t?this._itemsFocusable=n:this.$.footer===t&&(this._footerFocusable=n),n._content.dispatchEvent(new CustomEvent("cell-focusin",{bubbles:!1}))),this._detectFocusedItemIndex(e)}_onCellFocusOut(e){3===e.composedPath().indexOf(this.$.table)&&e.composedPath()[0]._content.dispatchEvent(new CustomEvent("cell-focusout",{bubbles:!1}))}_detectInteracting(e){var t=e.composedPath().some(e=>"vaadin-grid-cell-content"===e.localName);this._setInteracting(t)}_detectFocusedItemIndex(e){var{section:t,row:n}=this._getGridEventLocation(e);t===this.$.items&&(this._focusedItemIndex=n.index)}_updateGridSectionFocusTarget(e){if(e){var t=this._getGridSectionFromFocusTarget(e),n=this.interacting&&t===this._activeRowGroup;e.tabIndex=n?-1:0}}_preventScrollerRotatingCellFocus(e,t){e.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items&&(this._navigatingIsHidden=!0,this._toggleAttribute("navigating",!1,this)),t===this._focusedItemIndex&&this._navigatingIsHidden&&(this._navigatingIsHidden=!1,this._toggleAttribute("navigating",!0,this))}_getColumns(e,t){var n=this._columnTree.length-1;return e===this.$.header?n=t:e===this.$.footer&&(n=this._columnTree.length-1-t),this._columnTree[n]}_resetKeyboardNavigation(){if(this.$.header.firstElementChild&&(this._headerFocusable=Array.from(this.$.header.firstElementChild.children).filter(e=>!e.hidden)[0]),this.$.items.firstElementChild){var e=this._iterateItems((e,t)=>{if(this._firstVisibleIndex===t)return this.$.items.children[e]});e&&(this._itemsFocusable=Array.from(e.children).filter(e=>!e.hidden)[0])}this.$.footer.firstElementChild&&(this._footerFocusable=Array.from(this.$.footer.firstElementChild.children).filter(e=>!e.hidden)[0])}_scrollHorizontallyToCell(e){if(!e.hasAttribute("frozen")&&!this._elementMatches(e,'[part~="details-cell"]')){for(var t=e.getBoundingClientRect(),n=e.parentNode,o=Array.from(n.children).indexOf(e),r=this.$.table.getBoundingClientRect(),a=r.left,i=r.right,s=o-1;s>=0;s--){var l=n.children[s];if(!l.hasAttribute("hidden")&&!this._elementMatches(l,'[part~="details-cell"]')&&l.hasAttribute("frozen")){a=l.getBoundingClientRect().right;break}}for(var c=o+1;c<n.children.length;c++){var d=n.children[c];if(!d.hasAttribute("hidden")&&!this._elementMatches(d,'[part~="details-cell"]')&&d.hasAttribute("frozen")){i=d.getBoundingClientRect().left;break}}t.left<a&&(this.$.table.scrollLeft+=Math.round(t.left-a)),t.right>i&&(this.$.table.scrollLeft+=Math.round(t.right-i))}}_elementMatches(e,t){return e.matches?e.matches(t):-1!==Array.from(e.parentNode.querySelectorAll(t)).indexOf(e)}_getGridEventLocation(e){var t=e.composedPath(),n=t.indexOf(this.$.table);return{section:n>=1?t[n-1]:null,row:n>=2?t[n-2]:null,cell:n>=3?t[n-3]:null}}_getGridSectionFromFocusTarget(e){return e===this._headerFocusable?this.$.header:e===this._itemsFocusable?this.$.items:e===this._footerFocusable?this.$.footer:null}},W=n(140),U=n(40),Y=n(19),K=e=>class extends(Object(A.a)(e)){static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree, _columnTree.*)"]}ready(){super.ready(),Object(x.addListener)(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(e){this.hasAttribute("reordering")&&e.preventDefault()}_onTouchStart(e){this._startTouchReorderTimeout=setTimeout(()=>{this._onTrackStart({detail:{x:e.touches[0].clientX,y:e.touches[0].clientY}})},100)}_onTouchMove(e){this._draggedColumn&&e.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(e){if("start"===e.detail.state){var t=e.composedPath(),n=t[t.indexOf(this.$.header)-2];if(!n||!n._content)return;var o=this.getRootNode().activeElement;if(n._content.contains(this.getRootNode().activeElement)&&(!this._ie||!this._isFocusable(o)))return;if(this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(e)}else"track"===e.detail.state?this._onTrack(e):"end"===e.detail.state&&this._onTrackEnd(e)}_onTrackStart(e){if(this.columnReorderingAllowed){var t=e.path||Object(U.a)(e).path;if(!t||!t.filter(e=>e.hasAttribute&&e.hasAttribute("draggable"))[0]){var n=this._cellFromPoint(e.detail.x,e.detail.y);if(n&&-1!==n.getAttribute("part").indexOf("header-cell")){for(this._toggleAttribute("reordering",!0,this),this._draggedColumn=n._column;1===this._draggedColumn.parentElement.childElementCount;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(n),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._autoScroller()}}}}_onTrack(e){if(this._draggedColumn){var t=this._cellFromPoint(e.detail.x,e.detail.y);if(t){var n=this._getTargetColumn(t,this._draggedColumn);this._isSwapAllowed(this._draggedColumn,n)&&this._isSwappableByPosition(n,e.detail.x)&&this._swapColumnOrders(this._draggedColumn,n),this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._lastDragClientX=e.detail.x}}}_onTrackEnd(){this._draggedColumn&&(this._toggleAttribute("reordering",!1,this),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(){return this._columnTree.slice(0).pop().filter(e=>!e.hidden).sort((e,t)=>e._order-t._order)}_cellFromPoint(e,t){var n;if(e=e||0,t=t||0,this._draggedColumn||this._toggleAttribute("no-content-pointer-events",!0,this.$.scroller),Y.h?n=this.shadowRoot.elementFromPoint(e,t):"vaadin-grid-cell-content"===(n=document.elementFromPoint(e,t)).localName&&(n=n.assignedSlot.parentNode),this._toggleAttribute("no-content-pointer-events",!1,this.$.scroller),n&&n._column)return n}_updateGhostPosition(e,t){var n=this._reorderGhost.getBoundingClientRect(),o=e-n.width/2,r=t-n.height/2,a=parseInt(this._reorderGhost._left||0),i=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=a-(n.left-o),this._reorderGhost._top=i-(n.top-r),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_getInnerText(e){return e.localName?"none"===getComputedStyle(e).display?"":Array.from(e.childNodes).map(e=>this._getInnerText(e)).join(""):e.textContent}_updateGhost(e){var t=this._reorderGhost;t.textContent=this._getInnerText(e._content);var n=window.getComputedStyle(e);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach(e=>t.style[e]=n[e]),t}_updateOrders(e,t){void 0!==e&&void 0!==t&&(e[0].forEach((e,t)=>e._order=0),W.a._updateColumnOrders(e[0],this._orderBaseScope,0))}_setSiblingsReorderStatus(e,t){Array.from(e.parentNode.children).filter(t=>/column/.test(t.localName)&&this._isSwapAllowed(t,e)).forEach(e=>e._reorderStatus=t)}_autoScroller(){if(this._lastDragClientX){var e=this._lastDragClientX-this.getBoundingClientRect().right+50,t=this.getBoundingClientRect().left-this._lastDragClientX+50;e>0?this.$.table.scrollLeft+=e/10:t>0&&(this.$.table.scrollLeft-=t/10),this._scrollHandler()}this._draggedColumn&&this.async(this._autoScroller,10)}_isSwapAllowed(e,t){if(e&&t){var n=e!==t,o=e.parentElement===t.parentElement,r=e.frozen===t.frozen;return n&&o&&r}}_isSwappableByPosition(e,t){var n=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).filter(t=>e.contains(t._column))[0],o=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),r=n.getBoundingClientRect();return r.left>o.left?t>r.right-o.width:t<r.left+o.width}_swapColumnOrders(e,t){var n=e._order;e._order=t._order,t._order=n,this._updateLastFrozen(),this._updateFirstAndLastColumn()}_getTargetColumn(e,t){if(e&&t){for(var n=e._column;n.parentElement!==t.parentElement&&n!==this;)n=n.parentElement;return n.parentElement===t.parentElement?n:e._column}}},Q=(n(88),n(54),n(6)),X=document.createElement("dom-module");X.appendChild(Q.a`
  <style>
    @keyframes vaadin-grid-appear {
      to {
        opacity: 1;
      }
    }

    :host {
      display: block;
      animation: 1ms vaadin-grid-appear;
      height: 400px;
      flex: 1 1 auto;
      align-self: stretch;
      position: relative;
    }

    :host([hidden]) {
      display: none !important;
    }

    #scroller {
      display: block;
      transform: translateY(0);
      width: auto;
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    :host([height-by-rows]),
    :host([all-rows-visible]) {
      height: auto;
      align-self: flex-start;
      flex-grow: 0;
      width: 100%;
    }

    :host([height-by-rows]) #scroller,
    :host([all-rows-visible]) #scroller {
      width: 100%;
      height: 100%;
      position: relative;
    }

    #table {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow: auto;
      position: relative;
      outline: none;
      /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
      z-index: 0;
    }

    #header,
    #footer {
      display: block;
      position: -webkit-sticky;
      position: sticky;
      left: 0;
      overflow: visible;
      width: 100%;
      z-index: 1;
    }

    #header {
      top: 0;
    }

    th {
      text-align: inherit;
    }

    /* Safari doesn't work with "inherit" */
    [safari] th {
      text-align: initial;
    }

    #footer {
      bottom: 0;
    }

    #items {
      flex-grow: 1;
      flex-shrink: 0;
      display: block;
      position: -webkit-sticky;
      position: sticky;
      width: 100%;
      left: 0;
      overflow: visible;
    }

    [part~="row"] {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
    }

    [part~="row"][loading] [part~="body-cell"] ::slotted(vaadin-grid-cell-content) {
      opacity: 0;
    }

    #items [part~="row"] {
      position: absolute;
    }

    #items [part~="row"]:empty {
      height: 1em;
    }

    [part~="cell"]:not([part~="details-cell"]) {
      flex-shrink: 0;
      flex-grow: 1;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      position: relative;
      align-items: center;
      padding: 0;
      white-space: nowrap;
    }

    [part~="details-cell"] {
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
    }

    [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [hidden] {
      display: none !important;
    }

    [frozen] {
      z-index: 2;
      will-change: transform;
    }

    [no-scrollbars][safari] #table,
    [no-scrollbars][firefox] #table {
      overflow: hidden;
    }

    /* Reordering styles */
    :host([reordering]) [part~="cell"] ::slotted(vaadin-grid-cell-content),
    :host([reordering]) [part~="resize-handle"],
    #scroller[no-content-pointer-events] [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      pointer-events: none;
    }

    [part~="reorder-ghost"] {
      visibility: hidden;
      position: fixed;
      pointer-events: none;
      opacity: 0.5;

      /* Prevent overflowing the grid in Firefox */
      top: 0;
      left: 0;
    }

    :host([reordering]) {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    #scroller[ie][column-reordering-allowed] [part~="header-cell"] {
      -ms-user-select: none;
    }

    /* Resizing styles */
    [part~="resize-handle"] {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      cursor: col-resize;
      z-index: 1;
    }

    [part~="resize-handle"]::before {
      position: absolute;
      content: "";
      height: 100%;
      width: 35px;
      transform: translateX(-50%);
    }

    [last-column] [part~="resize-handle"]::before,
    [last-frozen] [part~="resize-handle"]::before {
      width: 18px;
      transform: none;
      right: 0;
    }

    #scroller[column-resizing] {
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Sizer styles */
    #sizer {
      display: flex;
      position: absolute;
      visibility: hidden;
    }

    #sizer [part~="details-cell"] {
      display: none !important;
    }

    #sizer [part~="cell"][hidden] {
      display: none !important;
    }

    #sizer [part~="cell"] {
      display: block;
      flex-shrink: 0;
      line-height: 0;
      height: 0 !important;
      min-height: 0 !important;
      max-height: 0 !important;
      padding: 0 !important;
      border: none !important;
    }

    #sizer [part~="cell"]::before {
      content: "-";
    }

    #sizer [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      display: none !important;
    }

    /* RTL specific styles */

    :host([dir="rtl"]) #items,
    :host([dir="rtl"]) #header,
    :host([dir="rtl"]) #footer {
      left: auto;
    }

    :host([dir="rtl"]) [part~="reorder-ghost"] {
      left: auto;
      right: 0;
    }

    :host([dir="rtl"]) [part~="resize-handle"] {
      left: 0;
      right: auto;
    }

    :host([dir="rtl"]) [part~="resize-handle"]::before {
      transform: translateX(50%);
    }

    :host([dir="rtl"]) [last-column] [part~="resize-handle"]::before,
    :host([dir="rtl"]) [last-frozen] [part~="resize-handle"]::before {
      left: 0;
      right: auto;
    }
  </style>
`),X.register("vaadin-grid-styles");var J=n(33),Z=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}})();
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class ee extends(Object(J.a)(Object(r.a)(Object(S.a)(w(O(Object(y.a)(P(F(R(z(G(v(I(K(C(L(V(N(_))))))))))))))))))){static get template(){return Q.a`
    <style include="vaadin-grid-styles"></style>

    <div id="scroller" safari\$="[[_safari]]" ios\$="[[_ios]]" ie\$="[[_ie]]" loading\$="[[loading]]" column-reordering-allowed\$="[[columnReorderingAllowed]]">

      <table id="table" role="grid" aria-multiselectable="true" tabindex="0">
        <caption id="sizer" part="row"></caption>
        <thead id="header" role="rowgroup"></thead>
        <tbody id="items" role="rowgroup"></tbody>
        <tfoot id="footer" role="rowgroup"></tfoot>
      </table>

      <div part="reorder-ghost"></div>
    </div>

    <!-- The template needs at least one slot or else shady doesn't distribute -->
    <slot name="nodistribute"></slot>

    <div id="focusexit" tabindex="0"></div>
`}static get is(){return"vaadin-grid"}static get version(){return"5.8.4"}static get observers(){return["_columnTreeChanged(_columnTree, _columnTree.*)"]}static get properties(){return{_safari:{type:Boolean,value:/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},_ios:{type:Boolean,value:/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1},_edge:{type:Boolean,value:"undefined"!=typeof CSS&&CSS.supports("(-ms-ime-align:auto)")},_ie:{type:Boolean,value:!(!navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/MSIE/))},_firefox:{type:Boolean,value:navigator.userAgent.toLowerCase().indexOf("firefox")>-1},_android:{type:Boolean,value:/android/i.test(navigator.userAgent)},_touchDevice:{type:Boolean,value:Z},heightByRows:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_allRowsVisibleChanged"},allRowsVisible:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_allRowsVisibleChanged"},_recalculateColumnWidthOnceLoadingFinished:{type:Boolean,value:!0}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd)}connectedCallback(){super.connectedCallback(),this.recalculateColumnWidths()}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),"dir"===e&&(this.__isRTL="rtl"===n,this._updateScrollerMeasurements())}__hasRowsWithClientHeight(){return!!Array.from(this.$.items.children).filter(e=>e.clientHeight).length}__flushPendingRecalculateColumnWidths(){this._recalculateColumnWidthOnceLoadingFinished&&!this._cache.isLoading()&&this.__hasRowsWithClientHeight()&&!this.__isCreatingRows()&&(this._recalculateColumnWidthOnceLoadingFinished=!1,this.recalculateColumnWidths())}_recalculateColumnWidths(e){e.forEach(e=>{e.width="auto",e._origFlexGrow=e.flexGrow,e.flexGrow=0}),e.forEach(e=>{e._currentWidth=0,e._allCells.forEach(t=>{var n=t.offsetWidth+1;e._currentWidth=Math.max(e._currentWidth,n)})}),e.forEach(e=>{e.width=e._currentWidth+"px",e.flexGrow=e._origFlexGrow,e._currentWidth=void 0,e._origFlexGrow=void 0})}recalculateColumnWidths(){if(this._columnTree)if(this._cache.isLoading()||this.__isCreatingRows())this._recalculateColumnWidthOnceLoadingFinished=!0;else{var e=this._getColumns().filter(e=>!e.hidden&&e.autoWidth);this._recalculateColumnWidths(e)}}_createScrollerRows(e){for(var t=[],n=0;n<e;n++){var o=document.createElement("tr");o.setAttribute("part","row"),o.setAttribute("role","row"),this._columnTree&&this._updateRow(o,this._columnTree[this._columnTree.length-1],"body",!1,!0),t.push(o)}return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach(e=>e.isConnected&&e.notifyPath&&e.notifyPath("_cells.*",e._cells)),Object(a.b)(this,()=>{this._updateFirstAndLastColumn(),this._resetKeyboardNavigation()}),t}_getRowTarget(){return this.$.items}_createCell(e){var t="vaadin-grid-cell-content-"+(this._contentIndex=this._contentIndex+1||0),n=document.createElement("vaadin-grid-cell-content");n.setAttribute("slot",t);var o=document.createElement(e);o.id=t.replace("-content-","-"),o.setAttribute("tabindex","-1"),o.setAttribute("role","td"===e?"gridcell":"columnheader");var r=document.createElement("slot");return r.setAttribute("name",t),o.appendChild(r),o._content=n,n.addEventListener("mousedown",()=>{if(window.chrome){var e=()=>{n.contains(this.getRootNode().activeElement)||o.focus(),document.removeEventListener("mouseup",e,!0)};document.addEventListener("mouseup",e,!0)}else setTimeout(()=>{n.contains(this.getRootNode().activeElement)||o.focus()})}),o}_updateRow(e,t,n,o,r){n=n||"body";var a=document.createDocumentFragment();Array.from(e.children).forEach(e=>e._vacant=!0),e.innerHTML="","sizer"!==e.id&&(e.hidden=!0),t.filter(e=>!e.hidden).forEach((t,i,s)=>{var l;if("body"===n){if(t._cells=t._cells||[],(l=t._cells.filter(e=>e._vacant)[0])||(l=this._createCell("td"),t._cells.push(l)),l.setAttribute("part","cell body-cell"),e.appendChild(l),i===s.length-1&&(this._rowDetailsTemplate||this.rowDetailsRenderer)){this._detailsCells=this._detailsCells||[];var c=this._detailsCells.filter(e=>e._vacant)[0]||this._createCell("td");-1===this._detailsCells.indexOf(c)&&this._detailsCells.push(c),c._content.parentElement||a.appendChild(c._content),this._configureDetailsCell(c),e.appendChild(c),this._a11ySetRowDetailsCell(e,c),c._vacant=!1}t.notifyPath&&!r&&t.notifyPath("_cells.*",t._cells)}else{var d="header"===n?"th":"td";o||"vaadin-grid-column-group"===t.localName?((l=t[`_${n}Cell`]||this._createCell(d))._column=t,e.appendChild(l),t[`_${n}Cell`]=l):(t._emptyCells=t._emptyCells||[],(l=t._emptyCells.filter(e=>e._vacant)[0]||this._createCell(d))._column=t,e.appendChild(l),-1===t._emptyCells.indexOf(l)&&t._emptyCells.push(l)),l.setAttribute("part",`cell ${n}-cell`),this.__updateHeaderFooterRowVisibility(e)}l._content.parentElement||a.appendChild(l._content),l._vacant=!1,l._column=t}),this.appendChild(a),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(e)}__updateHeaderFooterRowVisibility(e){if(e){var t=Array.from(e.children).filter(t=>{var n=t._column;if(n._emptyCells&&n._emptyCells.indexOf(t)>-1)return!1;if(e.parentElement===this.$.header){if(n.headerRenderer||n._headerTemplate)return!0;if(null===n.header)return!1;if(n.path||void 0!==n.header)return!0}else if(n.footerRenderer||n._footerTemplate)return!0});e.hidden!==!t.length&&(e.hidden=!t.length,this.notifyResize())}}_updateScrollerItem(e,t){this._preventScrollerRotatingCellFocus(e,t),this._columnTree&&(this._toggleAttribute("first",0===t,e),this._toggleAttribute("odd",t%2,e),this._a11yUpdateRowRowindex(e,t),this._getItem(t,e))}_columnTreeChanged(e,t){this._renderColumnTree(e),this.recalculateColumnWidths()}_renderColumnTree(e){for(Array.from(this.$.items.children).forEach(t=>this._updateRow(t,e[e.length-1],null,!1,!0));this.$.header.children.length<e.length;){var t=document.createElement("tr");t.setAttribute("part","row"),t.setAttribute("role","row"),this.$.header.appendChild(t);var n=document.createElement("tr");n.setAttribute("part","row"),n.setAttribute("role","row"),this.$.footer.appendChild(n)}for(;this.$.header.children.length>e.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);Array.from(this.$.header.children).forEach((t,n)=>this._updateRow(t,e[n],"header",n===e.length-1)),Array.from(this.$.footer.children).forEach((t,n)=>this._updateRow(t,e[e.length-1-n],"footer",0===n)),this._updateRow(this.$.sizer,e[e.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows(),this.__updateFooterPositioning()}__updateFooterPositioning(){(this._firefox&&(this.$.items.style.paddingBottom=0,this.heightByRows||this.allRowsVisible||(this.$.items.style.paddingBottom=this.$.footer.offsetHeight+"px")),this._ios)&&(!window.CSS.supports("position","sticky")&&(this.$.table.style.height="",this.$.table.style.minHeight="100%",this.$.table.style.maxHeight="100%",setTimeout(()=>this.$.table.style.height=this.$.scroller.offsetHeight+"px")))}_updateItem(e,t){e._item=t;var n=this.__getRowModel(e);this._toggleAttribute("selected",n.selected,e),this._a11yUpdateRowSelected(e,n.selected),this._a11yUpdateRowLevel(e,n.level),this._toggleAttribute("expanded",n.expanded,e),this._toggleAttribute("details-opened",this._isDetailsOpened(t),e),(this._rowDetailsTemplate||this.rowDetailsRenderer)&&this._toggleDetailsCell(e,t),this._generateCellClassNames(e,n),this._filterDragAndDrop(e,n),Array.from(e.children).forEach(e=>{if(e._renderer){var t=e._column||this;e._renderer.call(t,e._content,t,n)}else e._instance&&(e._instance.__detailsOpened__=n.detailsOpened,e._instance.__selected__=n.selected,e._instance.__level__=n.level,e._instance.__expanded__=n.expanded,e._instance.setProperties(n))}),this._debouncerUpdateHeights=h.a.debounce(this._debouncerUpdateHeights,i.d.after(1),()=>{this._updateMetrics(),this._positionItems(),this._updateScrollerSize()})}_resizeHandler(){this._updateDetailsCellHeights(),this._accessIronListAPI(super._resizeHandler,!0),this._updateScrollerMeasurements(),this.__updateFooterPositioning()}_onAnimationEnd(e){0===e.animationName.indexOf("vaadin-grid-appear")&&(this._render(),e.stopPropagation(),this.notifyResize(),this.__flushPendingRecalculateColumnWidths(),requestAnimationFrame(()=>{this.__scrollToPendingIndex(),this.$.table.style.webkitOverflowScrolling="touch"}))}_toggleAttribute(e,t,n){n.hasAttribute(e)===!t&&(t?n.setAttribute(e,""):n.removeAttribute(e))}__getRowModel(e){return{index:e.index,item:e._item,level:this._getIndexLevel(e.index),expanded:this._isExpanded(e._item),selected:this._isSelected(e._item),detailsOpened:!(!this._rowDetailsTemplate&&!this.rowDetailsRenderer)&&this._isDetailsOpened(e._item)}}render(){this._columnTree&&(this._columnTree.forEach(e=>{e.forEach(e=>e._renderHeaderAndFooter())}),this._update())}notifyResize(){super.notifyResize()}_allRowsVisibleChanged(e,t){(e||t)&&this.notifyResize()}__forceReflow(){this._debouncerForceReflow=h.a.debounce(this._debouncerForceReflow,i.a,()=>{this.$.scroller.style.overflow="hidden",setTimeout(()=>this.$.scroller.style.overflow="")})}}customElements.define(ee.is,ee)},,function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(15),r=n(23),a=n(186),i=e=>class extends(Object(a.a)(e)){static get properties(){return{multiple:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_multipleChanged"},selectedValues:{type:Array,notify:!0,value:function(){return[]}}}}static get observers(){return["_enhanceMultipleItems(items, multiple, selected, selectedValues, selectedValues.*)"]}ready(){this.addEventListener("click",e=>this._onMultipleClick(e)),super.ready()}_enhanceMultipleItems(e,t,n,o){if(e&&t){if(o){var r=o.map(t=>e[t]);e.forEach(e=>e.selected=-1!==r.indexOf(e))}this._scrollToLastSelectedItem()}}_scrollToLastSelectedItem(){var e=this.selectedValues.slice(-1)[0];e&&!e.disabled&&this._scrollToItem(e)}_onMultipleClick(e){var t=this._filterItems(e.composedPath())[0],n=t&&!t.disabled?this.items.indexOf(t):-1;n<0||!this.multiple||(e.preventDefault(),-1!==this.selectedValues.indexOf(n)?this.selectedValues=this.selectedValues.filter(e=>e!==n):this.selectedValues=this.selectedValues.concat(n))}_multipleChanged(e,t){!e&&t&&(this.selectedValues=[],this.items.forEach(e=>e.selected=!1)),e&&!t&&void 0!==this.selected&&(this.push("selectedValues",this.selected),this.selected=void 0)}},s=n(33),l=n(6);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class c extends(Object(s.a)(i(Object(r.a)(o.a)))){static get template(){return l.a`
    <style>
      :host {
        display: flex;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="items"] {
        height: 100%;
        width: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }
    </style>
    <div part="items">
      <slot></slot>
    </div>
`}static get is(){return"vaadin-list-box"}static get version(){return"1.4.0"}static get properties(){return{orientation:{readOnly:!0}}}constructor(){super(),this.focused}ready(){super.ready(),this.setAttribute("role","list"),setTimeout(this._checkImport.bind(this),2e3)}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}_checkImport(){var e=this.querySelector("vaadin-item");!e||e instanceof o.a||console.warn("Make sure you have imported the vaadin-item element.")}}customElements.define(c.is,c)},,,function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var o,r=null,a=window.HTMLImports&&window.HTMLImports.whenReady||null;function i(e){requestAnimationFrame((function(){a?a(e):(r||(r=new Promise(e=>{o=e}),"complete"===document.readyState?o():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&o()})),r.then((function(){e&&e()})))}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var s="__shadyCSSCachedStyle",l=null,c=null;class d{constructor(){this.customStyles=[],this.enqueued=!1,i(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&c&&(this.enqueued=!0,i(c))}addCustomStyle(e){e.__seenByShadyCSS||(e.__seenByShadyCSS=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){return e[s]?e[s]:e.getStyle?e.getStyle():e}processStyles(){for(var e=this.customStyles,t=0;t<e.length;t++){var n=e[t];if(!n[s]){var o=this.getStyleForCustomStyle(n);if(o){var r=o.__appliedElement||o;l&&l(r),n[s]=r}}}return e}}d.prototype.addCustomStyle=d.prototype.addCustomStyle,d.prototype.getStyleForCustomStyle=d.prototype.getStyleForCustomStyle,d.prototype.processStyles=d.prototype.processStyles,Object.defineProperties(d.prototype,{transformCallback:{get:()=>l,set(e){l=e}},validateCallback:{get:()=>c,set(e){var t=!1;c||(t=!0),c=e,t&&this.enqueueDocumentValidation()}}})},,function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,r=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function a(e,t){if("function"==typeof e){var n=o.exec(e.toString());if(n)try{e=new Function(n[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}}window.Vaadin=window.Vaadin||{};var i=function(e,t){if(window.Vaadin.developmentMode)return a(e,t)};void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(r?!function(){if(r){if(Object.keys(r).map(e=>r[e]).filter(e=>e.productionMode).length>0)return!0}return!1}():!a((function(){return!0})))}catch(e){return!1}}())},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(36);var o=n(78);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
class r{constructor(e){r[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}get value(){var e=this.type,t=this.key;if(e&&t)return r.types[e]&&r.types[e][t]}set value(e){var t=this.type,n=this.key;t&&n&&(t=r.types[t]=r.types[t]||{},null==e?delete t[n]:t[n]=e)}get list(){if(this.type){var e=r.types[this.type];return e?Object.keys(e).map((function(e){return a[this.type][e]}),this):[]}}byKey(e){return this.key=e,this.value}}r[" "]=function(){},r.types={};var a=r.types;Object(o.a)({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(e,t,n){var o=new r({type:e,key:t});return void 0!==n&&n!==o.value?o.value=n:this.value!==o.value&&(this.value=o.value),o},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(e){e&&(this.value=this)},byKey:function(e){return new r({type:this.type,key:e}).value}})},,,,function(e,t,n){"use strict";n(46),n(86),n(71),n(50);var o=document.createElement("template");o.innerHTML='<dom-module id="lumo-field-button">\n  <template>\n    <style>\n      [part$="button"] {\n        flex: none;\n        width: 1em;\n        height: 1em;\n        line-height: 1;\n        font-size: var(--lumo-icon-size-m);\n        text-align: center;\n        color: var(--lumo-contrast-60pct);\n        transition: 0.2s color;\n        cursor: var(--lumo-clickable-cursor);\n      }\n\n      :host(:not([readonly])) [part$="button"]:hover {\n        color: var(--lumo-contrast-90pct);\n      }\n\n      :host([disabled]) [part$="button"],\n      :host([readonly]) [part$="button"] {\n        color: var(--lumo-contrast-20pct);\n      }\n\n      [part$="button"]::before {\n        font-family: "lumo-icons";\n        display: block;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(o.content)},,function(e,t,n){"use strict";n(86),n(71),n(42),n(50),n(58);var o=n(6).a`<dom-module id="lumo-item" theme-for="vaadin-item">
  <template>
    <style>
      :host {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        line-height: var(--lumo-line-height-xs);
        padding: 0.5em 1em;
        min-height: var(--lumo-size-m);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
      }

      /* Selectable items have a checkmark icon */
      :host([tabindex])::before {
        display: var(--_lumo-item-selected-icon-display, none);
        content: var(--lumo-icons-checkmark);
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        line-height: 1;
        font-weight: normal;
        width: 1em;
        height: 1em;
        margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
        color: var(--lumo-primary-text-color);
        flex: none;
        opacity: 0;
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), opacity 0.1s;
      }

      :host([selected])::before {
        opacity: 1;
      }

      :host([active]:not([selected]))::before {
        transform: scale(0.8);
        opacity: 0;
        transition-duration: 0s;
      }

      [part="content"] {
        flex: auto;
      }

      /* Disabled item */

      :host([disabled]) {
        color: var(--lumo-disabled-text-color);
        cursor: default;
        pointer-events: none;
      }

      /* Slotted icons */

      :host ::slotted(iron-icon) {
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(o.content);n(132)},,function(e,t,n){"use strict";n(46),n(71),n(42),n(50),n(58);var o=n(6).a`<dom-module id="lumo-button" theme-for="vaadin-button">
  <template>
    <style>
      :host {
        /* Sizing */
        --lumo-button-size: var(--lumo-size-m);
        min-width: calc(var(--lumo-button-size) * 2);
        height: var(--lumo-button-size);
        padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);
        margin: var(--lumo-space-xs) 0;
        box-sizing: border-box;
        /* Style */
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 500;
        color: var(--_lumo-button-color, var(--lumo-primary-text-color));
        background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
        border-radius: var(--lumo-border-radius);
        cursor: default;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Set only for the internal parts so we don’t affect the host vertical alignment */
      [part="label"],
      [part="prefix"],
      [part="suffix"] {
        line-height: var(--lumo-line-height-xs);
      }

      [part="label"] {
        padding: calc(var(--lumo-button-size) / 6) 0;
      }

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-button-size: var(--lumo-size-s);
      }

      :host([theme~="large"]) {
        font-size: var(--lumo-font-size-l);
        --lumo-button-size: var(--lumo-size-l);
      }

      /* This needs to be the last selector for it to take priority */
      :host([disabled][disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
        background-color: var(--lumo-contrast-5pct);
      }

      /* For interaction states */
      :host::before,
      :host::after {
        content: "";
        /* We rely on the host always being relative */
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: currentColor;
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
      }

      /* Hover */

      :host(:hover)::before {
        opacity: 0.05;
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([active]):hover)::before {
          opacity: 0;
        }
      }

      /* Active */

      :host::after {
        transition: opacity 1.4s, transform 0.1s;
        filter: blur(8px);
      }

      :host([active])::before {
        opacity: 0.1;
        transition-duration: 0s;
      }

      :host([active])::after {
        opacity: 0.1;
        transition-duration: 0s, 0s;
        transform: scale(0);
      }

      /* Keyboard focus */

      :host([focus-ring]) {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Types (primary, tertiary, tertiary-inline */

      :host([theme~="tertiary"]),
      :host([theme~="tertiary-inline"]) {
        background-color: transparent !important;
        transition: opacity 0.2s;
        min-width: 0;
      }

      :host([theme~="tertiary"])::before,
      :host([theme~="tertiary-inline"])::before {
        display: none;
      }

      :host([theme~="tertiary"]) {
        padding: 0 calc(var(--lumo-button-size) / 6);
      }

      @media (hover: hover) {
        :host([theme*="tertiary"]:not([active]):hover) {
          opacity: 0.8;
        }
      }

      :host([theme~="tertiary"][active]),
      :host([theme~="tertiary-inline"][active]) {
        opacity: 0.5;
        transition-duration: 0s;
      }

      :host([theme~="tertiary-inline"]) {
        margin: 0;
        height: auto;
        padding: 0;
        line-height: inherit;
        font-size: inherit;
      }

      :host([theme~="tertiary-inline"]) [part="label"] {
        padding: 0;
        overflow: visible;
        line-height: inherit;
      }

      :host([theme~="primary"]) {
        background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
        color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
        font-weight: 600;
        min-width: calc(var(--lumo-button-size) * 2.5);
      }

      :host([theme~="primary"][disabled]) {
        background-color: var(--lumo-primary-color-50pct);
        color: var(--lumo-primary-contrast-color);
      }

      :host([theme~="primary"]:hover)::before {
        opacity: 0.1;
      }

      :host([theme~="primary"][active])::before {
        background-color: var(--lumo-shade-20pct);
      }

      @media (pointer: coarse) {
        :host([theme~="primary"][active])::before {
          background-color: var(--lumo-shade-60pct);
        }

        :host([theme~="primary"]:not([active]):hover)::before {
          opacity: 0;
        }
      }

      :host([theme~="primary"][active])::after {
        opacity: 0.2;
      }

      /* Colors (success, error, contrast) */

      :host([theme~="success"]) {
        color: var(--lumo-success-text-color);
      }

      :host([theme~="success"][theme~="primary"]) {
        background-color: var(--lumo-success-color);
        color: var(--lumo-success-contrast-color);
      }

      :host([theme~="success"][theme~="primary"][disabled]) {
        background-color: var(--lumo-success-color-50pct);
      }

      :host([theme~="error"]) {
        color: var(--lumo-error-text-color);
      }

      :host([theme~="error"][theme~="primary"]) {
        background-color: var(--lumo-error-color);
        color: var(--lumo-error-contrast-color);
      }

      :host([theme~="error"][theme~="primary"][disabled]) {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([theme~="contrast"]) {
        color: var(--lumo-contrast);
      }

      :host([theme~="contrast"][theme~="primary"]) {
        background-color: var(--lumo-contrast);
        color: var(--lumo-base-color);
      }

      :host([theme~="contrast"][theme~="primary"][disabled]) {
        background-color: var(--lumo-contrast-50pct);
      }

      /* Icons */

      [part] ::slotted(iron-icon) {
        display: inline-block;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="prefix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      [part="suffix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      /* Icon-only */

      :host([theme~="icon"]:not([theme~="tertiary-inline"])) {
        min-width: var(--lumo-button-size);
        padding-left: calc(var(--lumo-button-size) / 4);
        padding-right: calc(var(--lumo-button-size) / 4);
      }

      :host([theme~="icon"]) [part="prefix"],
      :host([theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="prefix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      :host([dir="rtl"]) [part="suffix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      :host([dir="rtl"][theme~="icon"]) [part="prefix"],
      :host([dir="rtl"][theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(o.content)},function(e,t,n){"use strict";n(42),n(50),n(203);var o=document.createElement("template");o.innerHTML='<dom-module id="lumo-menu-overlay-core">\n  <template>\n    <style>\n      :host([opening]),\n      :host([closing]) {\n        animation: 0.14s lumo-overlay-dummy-animation;\n      }\n\n      [part="overlay"] {\n        will-change: opacity, transform;\n      }\n\n      :host([opening]) [part="overlay"] {\n        animation: 0.1s lumo-menu-overlay-enter ease-out both;\n      }\n\n      @keyframes lumo-menu-overlay-enter {\n        0% {\n          opacity: 0;\n          transform: translateY(-4px);\n        }\n      }\n\n      :host([closing]) [part="overlay"] {\n        animation: 0.1s lumo-menu-overlay-exit both;\n      }\n\n      @keyframes lumo-menu-overlay-exit {\n        100% {\n          opacity: 0;\n        }\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-menu-overlay">\n  <template>\n    <style include="lumo-overlay lumo-menu-overlay-core">\n      /* Small viewport (bottom sheet) styles */\n      /* Use direct media queries instead of the state attributes (`[phone]` and `[fullscreen]`) provided by the elements */\n      @media (max-width: 420px), (max-height: 420px) {\n        :host {\n          top: 0 !important;\n          right: 0 !important;\n          bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;\n          left: 0 !important;\n          align-items: stretch !important;\n          justify-content: flex-end !important;\n        }\n\n        [part="overlay"] {\n          max-height: 50vh;\n          width: 100vw;\n          border-radius: 0;\n          box-shadow: var(--lumo-box-shadow-xl);\n        }\n\n        /* The content part scrolls instead of the overlay part, because of the gradient fade-out */\n        [part="content"] {\n          padding: 30px var(--lumo-space-m);\n          max-height: inherit;\n          box-sizing: border-box;\n          -webkit-overflow-scrolling: touch;\n          overflow: auto;\n          -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n          mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n        }\n\n        [part="backdrop"] {\n          display: block;\n        }\n\n        /* Animations */\n\n        :host([opening]) [part="overlay"] {\n          animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(.215, .61, .355, 1) both;\n        }\n\n        :host([closing]),\n        :host([closing]) [part="backdrop"] {\n          animation-delay: 0.14s;\n        }\n\n        :host([closing]) [part="overlay"] {\n          animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(.55, .055, .675, .19) both;\n        }\n      }\n\n      @keyframes lumo-mobile-menu-overlay-enter {\n        0% {\n          transform: translateY(150%);\n        }\n      }\n\n      @keyframes lumo-mobile-menu-overlay-exit {\n        100% {\n          transform: translateY(150%);\n        }\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(o.content)},function(e,t,n){"use strict";n(36);var o=n(78);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(o.a)({is:"iron-media-query",properties:{queryMatches:{type:Boolean,value:!1,readOnly:!0,notify:!0},query:{type:String,observer:"queryChanged"},full:{type:Boolean,value:!1},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display="none",this.queryChanged()},detached:function(){this._remove()},_add:function(){this._mq&&this._mq.addListener(this._boundMQHandler)},_remove:function(){this._mq&&this._mq.removeListener(this._boundMQHandler),this._mq=null},queryChanged:function(){this._remove();var e=this.query;e&&(this.full||"("===e[0]||(e="("+e+")"),this._mq=window.matchMedia(e),this._add(),this.queryHandler(this._mq))},queryHandler:function(e){this._setQueryMatches(e.matches)}})},,,,function(e,t,n){"use strict";n(46),n(42),n(50);var o=n(6).a`<dom-module id="lumo-list-box" theme-for="vaadin-list-box">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
        --_lumo-item-selected-icon-display: var(--_lumo-list-box-item-selected-icon-display, block);
      }

      /* IE11 flexbox issue workaround (vaadin-items are flex containers with min-height) */
      [part="items"] {
        display: flex;
        flex-direction: column;
      }

      [part="items"] ::slotted(*) {
        flex: none;
      }

      /* Normal item */

      [part="items"] ::slotted(vaadin-item) {
        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
        cursor: default;
      }

      [part="items"] ::slotted(vaadin-item) {
        outline: none;
        border-radius: var(--lumo-border-radius);
        padding-left: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius) / 4));
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
      }

      /* Workaround to display checkmark in IE11 when list-box is not used in dropdown-menu */
      [part="items"] ::slotted(vaadin-item)::before {
        display: var(--_lumo-item-selected-icon-display);
      }

      /* Hovered item */
      /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */

      [part="items"] ::slotted(vaadin-item:hover:not([disabled])) {
        background-color: var(--lumo-primary-color-10pct);
      }

      /* Focused item */

      [part="items"] ::slotted([focus-ring]:not([disabled])) {
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      @media (pointer: coarse) {
        [part="items"] ::slotted(vaadin-item:hover:not([disabled])) {
          background-color: transparent;
        }

        [part="items"] ::slotted([focus-ring]:not([disabled])) {
          box-shadow: none;
        }
      }

      /* Easily add section dividers */

      [part="items"] ::slotted(hr) {
        height: 1px;
        border: 0;
        padding: 0;
        margin: var(--lumo-space-s) var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="items"] ::slotted(vaadin-item) {
        padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
        padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius) / 4));
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(o.content);n(158)},,function(e,t){var n;n=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Context Menu","vaadin-context-menu-flow")},window.Vaadin.Flow.Legacy=window.Vaadin.Flow.Legacy||{},window.Vaadin.Flow.contextMenuConnector={init:e=>n((function(e){if(!e.$contextMenuConnector){if(window.Polymer)window.Vaadin.Flow.Legacy.GestureEventListeners=window.Vaadin.Flow.Legacy.GestureEventListeners||Polymer.GestureEventListeners,window.Vaadin.Flow.Legacy.Gestures=window.Vaadin.Flow.Legacy.Gestures||Polymer.Gestures;else if(!window.Vaadin.Flow.Legacy.Gestures)return void console.log("ContextMenu is unable to load Polymer helpers.");window.Vaadin.Flow.Legacy.GestureEventListeners;var t=window.Vaadin.Flow.Legacy.Gestures;e.$contextMenuConnector={openOnHandler:n((function(t){t.preventDefault(),t.stopPropagation(),this.$contextMenuConnector.openEvent=t;var n={};e.getContextMenuBeforeOpenDetail&&(n=e.getContextMenuBeforeOpenDetail(t)),e.dispatchEvent(new CustomEvent("vaadin-context-menu-before-open",{detail:n}))})),updateOpenOn:n((function(o){this.removeListener(),this.openOnEventType=o,customElements.whenDefined("vaadin-context-menu").then(n(()=>{t.gestures[o]?t.addListener(e,o,this.openOnHandler):e.addEventListener(o,this.openOnHandler)}))})),removeListener:n((function(){this.openOnEventType&&(t.gestures[this.openOnEventType]?t.removeListener(e,this.openOnEventType,this.openOnHandler):e.removeEventListener(this.openOnEventType,this.openOnHandler))})),openMenu:n((function(e){e.open(this.openEvent)})),removeConnector:n((function(){this.removeListener(),e.$contextMenuConnector=void 0}))}}}))(e),generateItems:(e,t,o)=>n((function(e,t,n){e._containerNodeId=n;var o=function(e){var n=function(e){try{return window.Vaadin.Flow.clients[t].getByNodeId(e)}catch(n){console.error("Could not get node %s from app %s",e,t),console.error(n)}}(e._containerNodeId);return n&&Array.from(n.children).map(e=>{var t={component:e,checked:e._checked};return"VAADIN-CONTEXT-MENU-ITEM"==e.tagName&&e._containerNodeId&&(t.children=o(e)),e._item=t,t})},r=o(e);e.items=r}))(e,t,o),setChecked:(e,t)=>n((function(e,t){e._item&&(e._item.checked=t)}))(e,t)}},function(e,t){window.Vaadin=window.Vaadin||{},window.Vaadin.Flow=window.Vaadin.Flow||{},window.Vaadin.Flow.dndConnector={__ondragenterListener:function(e){var t=e.currentTarget.__dropEffect;e.currentTarget.hasAttribute("disabled")||(t&&(e.dataTransfer.dropEffect=t),t&&"none"!==t&&(e.currentTarget.classList.contains("v-drag-over-target")?e.currentTarget["__skip-leave"]=!0:e.currentTarget.classList.add("v-drag-over-target"),e.preventDefault(),e.stopPropagation()))},__ondragoverListener:function(e){if(!e.currentTarget.hasAttribute("disabled")){var t=e.currentTarget.__dropEffect;t&&(e.dataTransfer.dropEffect=t),e.preventDefault(),e.stopPropagation()}},__ondragleaveListener:function(e){e.currentTarget["__skip-leave"]?e.currentTarget["__skip-leave"]=!1:e.currentTarget.classList.remove("v-drag-over-target"),e.stopPropagation()},__ondropListener:function(e){var t=e.currentTarget.__dropEffect;t&&(e.dataTransfer.dropEffect=t),e.currentTarget.classList.remove("v-drag-over-target"),e.preventDefault(),e.stopPropagation()},updateDropTarget:function(e){e.__active?(e.addEventListener("dragenter",this.__ondragenterListener,!1),e.addEventListener("dragover",this.__ondragoverListener,!1),e.addEventListener("dragleave",this.__ondragleaveListener,!1),e.addEventListener("drop",this.__ondropListener,!1)):(e.removeEventListener("dragenter",this.__ondragenterListener,!1),e.removeEventListener("dragover",this.__ondragoverListener,!1),e.removeEventListener("dragleave",this.__ondragleaveListener,!1),e.removeEventListener("drop",this.__ondropListener,!1),e.classList.remove("v-drag-over-target"))},__dragstartListener:function(e){e.stopPropagation(),e.dataTransfer.setData("text/plain",""),e.currentTarget.hasAttribute("disabled")?e.preventDefault():(e.currentTarget.__effectAllowed&&(e.dataTransfer.effectAllowed=e.currentTarget.__effectAllowed),e.currentTarget.classList.add("v-dragged"))},__dragendListener:function(e){e.currentTarget.classList.remove("v-dragged")},updateDragSource:function(e){e.draggable?(e.addEventListener("dragstart",this.__dragstartListener,!1),e.addEventListener("dragend",this.__dragendListener,!1)):(e.removeEventListener("dragstart",this.__dragstartListener,!1),e.removeEventListener("dragend",this.__dragendListener,!1))}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(36);var o=n(40),r={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(e,t){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),t)if("document"===e)this.scrollTarget=this._doc;else if("string"==typeof e){var n=this.domHost;this.scrollTarget=n&&n.$?n.$[e]:Object(o.a)(this.ownerDocument).querySelector("#"+e)}else this._isValidScrollTarget()&&(this._oldScrollTarget=e,this._toggleScrollListener(this._shouldHaveListener,e))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(e){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=e)},set _scrollLeft(e){this.scrollTarget===this._doc?window.scrollTo(e,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=e)},scroll:function(e,t){var n;"object"==typeof e?(n=e.left,t=e.top):n=e,n=n||0,t=t||0,this.scrollTarget===this._doc?window.scrollTo(n,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=n,this.scrollTarget.scrollTop=t)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(e,t){var n=t===this._doc?window:t;e?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),n.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(n.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(e){this._shouldHaveListener=e,this._toggleScrollListener(e,this.scrollTarget)}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}));
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
var o=e=>class extends e{static get properties(){return{activeItem:{type:Object,notify:!0,value:null}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this))}_activateItem(e){var t=e.detail.model,n=t?t.item:null;n&&(this.activeItem=this._itemsEqual(this.activeItem,n)?null:n)}_onClick(e){if(!e.defaultPrevented){var t=e.composedPath(),n=t[t.indexOf(this.$.table)-3];if(n&&!(n.getAttribute("part").indexOf("details-cell")>-1)){var o=n._content,r=this.getRootNode().activeElement;o.contains(r)&&(!this._ie||this._isFocusable(r))||this._isFocusable(e.target)||this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(n.parentElement)}}))}}}_isFocusable(e){return r(e)}},r=e=>{if(!e.parentNode)return!1;var t=-1!==Array.from(e.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, label, a[href], area[href]")).filter(e=>"cell body-cell"!==e.getAttribute("part")).indexOf(e);return!e.disabled&&t}},function(e,t){!function(){var e=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Grid","vaadin-grid-flow")};window.Vaadin.Flow.Legacy=window.Vaadin.Flow.Legacy||{};var t=!1;window.Vaadin.Flow.gridConnector={initLazy:n=>e((function(n){if(!n.$connector){if(window.Polymer)window.Vaadin.Flow.Legacy.Debouncer=Polymer.Debouncer,window.Vaadin.Flow.Legacy.timeOut=Polymer.Async.timeOut,window.Vaadin.Flow.Legacy.animationFrame=Polymer.Async.animationFrame,window.Vaadin.Flow.Legacy.GridElement=Vaadin.GridElement,window.Vaadin.Flow.Legacy.ItemCache=Vaadin.Grid.ItemCache;else if(!window.Vaadin.Flow.Legacy.Debouncer)return void console.log("Grid is unable to load Polymer helpers.");var o=window.Vaadin.Flow.Legacy.Debouncer,r=window.Vaadin.Flow.Legacy.timeOut,a=window.Vaadin.Flow.Legacy.animationFrame,i=window.Vaadin.Flow.Legacy.GridElement,s=window.Vaadin.Flow.Legacy.ItemCache;t||(t=!0,s.prototype.ensureSubCacheForScaledIndexOriginal=s.prototype.ensureSubCacheForScaledIndex,s.prototype.ensureSubCacheForScaledIndex=e((function(e){this.grid.$connector?this.itemCaches[e]||this.grid.$connector.beforeEnsureSubCacheForScaledIndex(this,e):this.ensureSubCacheForScaledIndexOriginal(e)})),s.prototype.isLoading=e((function(){return Boolean(p.length||Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter(e=>this.itemCaches[e].isLoading())[0])})),s.prototype.doEnsureSubCacheForScaledIndex=e((function(e){if(!this.itemCaches[e]){var t=new s.prototype.constructor(this.grid,this,this.items[e]);t.itemkeyCaches={},this.itemkeyCaches||(this.itemkeyCaches={}),this.itemCaches[e]=t,this.itemkeyCaches[this.grid.getItemId(t.parentItem)]=t,this.grid._loadPage(0,t)}})),s.prototype.getCacheAndIndexByKey=e((function(e){for(var t in this.items)if(this.grid.getItemId(this.items[t])===e)return{cache:this,scaledIndex:t};for(var n=Object.keys(this.itemkeyCaches),o=0;o<n.length;o++){var r=n[o],a=this.itemkeyCaches[r].getCacheAndIndexByKey(e);if(a)return a}})),s.prototype.getLevel=e((function(){for(var e=this,t=0;e.parentCache;)e=e.parentCache,t++;return t})));var l,c,d,h={},f={},u={},m=[],p=[],b={},g="null";b[g]=[0,0];var _=["SINGLE","NONE","MULTI"],v={},y="SINGLE",w=!0,A=!1;n.size=0,n.itemIdPath="key",n.$connector={},n.$connector.hasEnsureSubCacheQueue=e(()=>p.length>0),n.$connector.hasParentRequestQueue=e(()=>m.length>0),n.$connector.hasRootRequestQueue=e(()=>Object.keys(h).length>0||d&&d.isActive()),n.$connector.beforeEnsureSubCacheForScaledIndex=e((function(e,t){p.push({cache:e,scaledIndex:t,itemkey:n.getItemId(e.items[t]),level:e.getLevel()}),p.sort((function(e,t){return e.scaledIndex-t.scaledIndex||e.level-t.level})),c=o.debounce(c,a,()=>{for(;p.length;)n.$connector.flushEnsureSubCache()})})),n.$connector.doSelection=e((function(e,t){"NONE"===y||!e.length||t&&n.hasAttribute("disabled")||("SINGLE"===y&&(n.selectedItems=[],v={}),n.selectedItems=n.selectedItems.concat(e),e.forEach(e=>{e&&(v[e.key]=e,t&&(e.selected=!0,n.$server.select(e.key)));var o=!n.activeItem||!e||e.key!=n.activeItem.key;!t&&"SINGLE"===y&&o&&(n.activeItem=e,n.$connector.activeItem=e)}))})),n.$connector.doDeselection=e((function(e,t){if(!("NONE"===y||!e.length||t&&n.hasAttribute("disabled"))){for(var o=n.selectedItems.slice();e.length;){for(var r=e.shift(),a=0;a<o.length;a++){var i=o[a];if(r&&r.key===i.key){o.splice(a,1);break}}r&&(delete v[r.key],t&&(delete r.selected,n.$server.deselect(r.key)))}n.selectedItems=o}})),n.__activeItemChanged=e((function(e,t){"SINGLE"==y&&(e?v[e.key]||n.$connector.doSelection([e],!0):t&&v[t.key]&&(n.$connector.deselectAllowed?n.$connector.doDeselection([t],!0):n.activeItem=t))})),n._createPropertyObserver("activeItem","__activeItemChanged",!0),n.__activeItemChangedDetails=e((function(e,t){w&&(null==e&&void 0===t||(e&&!e.detailsOpened?n.$server.setDetailsVisible(e.key):n.$server.setDetailsVisible(null)))})),n._createPropertyObserver("activeItem","__activeItemChangedDetails",!0),n.$connector.setDetailsVisibleOnClick=e((function(e){w=e})),n.$connector._getPageIfSameLevel=e((function(e,t,o){var r=n._cache.getCacheAndIndex(t),a=r.cache.parentItem;return e!==(a?n.getItemId(a):g)?o:n._getPageForIndex(r.scaledIndex)})),n.$connector.getCacheByKey=e((function(e){var t=n._cache.getCacheAndIndexByKey(e);if(t)return t.cache})),n.$connector.flushEnsureSubCache=e((function(){for(var e=p.splice(0,1)[0],t=e.itemkey,o=n._virtualStart,r=n._virtualEnd,a=r-o,i=Math.max(0,o+n._vidxOffset-a),s=Math.min(r+n._vidxOffset+a,n._effectiveSize),l=i;l<=s;l++){var c=n._cache.getItemForIndex(l);if(n.getItemId(c)===t){if(n._isExpanded(c))return e.cache.doEnsureSubCacheForScaledIndex(e.scaledIndex),!0;break}}return!1})),n.$connector.flushParentRequests=e((function(){var e=m.splice(0,20);return!!e.length&&(n.$server.setParentRequestedRanges(e),!0)})),n.$connector.beforeParentRequest=e((function(e,t,a){m.push({firstIndex:e,size:t,parentKey:a}),l=o.debounce(l,r.after(50),()=>{for(;m.length;)n.$connector.flushParentRequests()})})),n.$connector.fetchPage=e((function(e,t,o){for(var r=n._virtualStart,a=n._virtualEnd,i=a-r,s=Math.max(0,r+n._vidxOffset-i),l=Math.min(a+n._vidxOffset+i,n._effectiveSize),c=t,d=t,h=s;h<=l;h++)c=Math.min(c,n.$connector._getPageIfSameLevel(o,h,c)),d=Math.max(d,n.$connector._getPageIfSameLevel(o,h,d));var f=Math.max(0,c),u=o!==g?d:Math.min(d,Math.floor(n.size/n.pageSize)),m=b[o];if(m||(m=[-1,-1]),m[0]!=f||m[1]!=u){m=[f,u],b[o]=m;var p=u-f+1;e(f*n.pageSize,p*n.pageSize)}})),n.dataProvider=e((function(e,t){if(e.pageSize!=n.pageSize)throw"Invalid pageSize";var a=e.page;if(e.parentItem){var i=n.getItemId(e.parentItem);f[i]||(f[i]={});var s=n.$connector.getCacheByKey(i),l=s&&s.itemkeyCaches?s.itemkeyCaches[i]:void 0;u[i]&&u[i][a]&&l?(a=Math.min(a,Math.floor(u[i].size/n.pageSize)),t(u[i][a],u[i].size)):f[i][a]=t,n.$connector.fetchPage((t,o)=>n.$connector.beforeParentRequest(t,o,e.parentItem.key),a,i)}else a=Math.min(a,Math.floor(n.size/n.pageSize)),u[g]&&u[g][a]?t(u[g][a]):h[a]=t,d=o.debounce(d,r.after(n._hasData?150:0),()=>{n.$connector.fetchPage((e,t)=>n.$server.setRequestedRange(e,t),a,g)})}));var x=e((function(e,t){void 0===t||A||n.$server.sortersChanged(n._sorters.map((function(e){return{path:e.path,direction:e.direction}})))}));n.$connector.setSorterDirections=e((function(t){A=!0,setTimeout(e(()=>{try{var e=Array.from(n.querySelectorAll("vaadin-grid-sorter"));e.forEach(e=>{t.filter(t=>t.column===e.getAttribute("path"))[0]||(e.direction=null)}),t.reverse().forEach(({column:t,direction:n})=>{e.forEach(e=>{e.getAttribute("path")===t&&e.direction!==n&&(e.direction=n)})})}finally{A=!1}}))})),n._createPropertyObserver("_previousSorters",x),n._updateItem=e((function(e,t){i.prototype._updateItem.call(n,e,t),e.hidden||Array.from(e.children).forEach(e=>{e._instance&&e._instance.children&&Array.from(e._instance.children).forEach(e=>{e._attachRenderedComponentIfAble&&e._attachRenderedComponentIfAble(),e.children&&Array.from(e.children).forEach(e=>{e._attachRenderedComponentIfAble&&e._attachRenderedComponentIfAble()})})})})),n._expandedInstanceChangedCallback=e((function(e,t){if(null!=e.item&&null!=n.$server.updateExpandedState){var o=n.getItemId(e.item);if(n.$server.updateExpandedState(o,t),t)this.expandItem(e.item);else{delete u[o];var r=n.$connector.getCacheByKey(o);r&&r.itemkeyCaches&&r.itemkeyCaches[o]&&delete r.itemkeyCaches[o],r&&r.itemkeyCaches&&Object.keys(r.itemCaches).filter(e=>r.items[e].key===o).forEach(e=>delete r.itemCaches[e]),delete b[o],this.collapseItem(e.item)}}}));var C=function(e){if(!e||!Array.isArray(e))throw"Attempted to call itemsUpdated with an invalid value: "+JSON.stringify(e);for(var t=Array.from(n.detailsOpenedItems),o=!1,r=0;r<e.length;++r){var a=e[r];a&&(a.detailsOpened?n._getItemIndexInArray(a,t)<0&&t.push(a):n._getItemIndexInArray(a,t)>=0&&t.splice(n._getItemIndexInArray(a,t),1),v[a.key]&&(v[a.key]=a,a.selected=!0,o=!0))}n.detailsOpenedItems=t,o&&(n.selectedItems=Object.keys(v).map((function(e){return v[e]})))},S=function(e,t){var o;if((t||g)!==g){o=u[t][e];var r=n.$connector.getCacheByKey(t);if(r&&r.itemkeyCaches){var a=r.itemkeyCaches[t],i=f[t],s=i&&i[e];E(e,o,s,a)}}else o=u[g][e],E(e,o,h[e],n._cache);return o},E=function(e,t,o,r){if(!o){var a=e*n.pageSize,i=a+n.pageSize;if(t){if(r&&r.items)for(var s=a;s<i;s++)r.items[s]&&(r.items[s]=t[s-a])}else if(r&&r.items)for(var l=a;l<i;l++)delete r.items[l]}},k=function(){n._cache.updateSize(),n._effectiveSize=n._cache.effectiveSize,n._assignModels()},O=function(e){if(e&&n._physicalItems){var t=e.map(e=>e.key),o=n._physicalItems.map((e,n)=>e._item&&e._item.key&&t.indexOf(e._item.key)>-1?n:null).filter(e=>null!==e);o.length>0&&n._assignModels(o)}};n.$connector.set=e((function(e,t,o){if(e%n.pageSize!=0)throw"Got new data to index "+e+" which is not aligned with the page size of "+n.pageSize;for(var r=o||g,a=e/n.pageSize,i=Math.ceil(t.length/n.pageSize),s=0;s<i;s++){var l=a+s,c=t.slice(s*n.pageSize,(s+1)*n.pageSize);u[r]||(u[r]={}),u[r][l]=c,n.$connector.doSelection(c.filter(e=>e.selected&&!I(e))),n.$connector.doDeselection(c.filter(e=>!e.selected&&(v[e.key]||I(e))));var d=S(l,r);d&&(C(d),O(d))}}));var L=function(e){var t=e.parentUniqueKey||g;if(u[t])for(var o in u[t])for(var r in u[t][o])if(n.getItemId(u[t][o][r])===n.getItemId(e))return{page:o,index:r,parentKey:t};return null};n.$connector.updateHierarchicalData=e((function(e){for(var t=[],n=0;n<e.length;n++){var o=L(e[n]);if(o){u[o.parentKey][o.page][o.index]=e[n];var r=o.parentKey+":"+o.page;t[r]||(t[r]={parentKey:o.parentKey,page:o.page})}}for(var a=Object.keys(t),i=0;i<a.length;i++){var s=t[a[i]],l=S(s.page,s.parentKey);l&&(C(l),O(l))}})),n.$connector.updateFlatData=e((function(e){for(var t=0;t<e.length;t++){var o=L(e[t]);if(o){u[o.parentKey][o.page][o.index]=e[t];var r=parseInt(o.page)*n.pageSize+parseInt(o.index);n._cache.items[r]&&(n._cache.items[r]=e[t])}}C(e),O(e)})),n.$connector.clearExpanded=e((function(){n.expandedItems=[],p=[],m=[]})),n.$connector.clear=e((function(e,t,o){var r=o||g;if(u[r]&&0!==Object.keys(u[r]).length){if(e%n.pageSize!=0)throw"Got cleared data for index "+e+" which is not aligned with the page size of "+n.pageSize;for(var a=Math.floor(e/n.pageSize),i=Math.ceil(t/n.pageSize),s=0;s<i;s++){var l=a+s,c=u[r][l];n.$connector.doDeselection(c.filter(e=>v[e.key])),delete u[r][l];var d=S(l,o);d&&C(d),O(c)}var h=n._cache;if(o){var f=n._cache.getCacheAndIndexByKey(r);h=f.cache.itemCaches[f.scaledIndex]}for(var m=e+i*n.pageSize,p=e;p<m;p++){delete h.items[p];var b=h.itemCaches[p];delete h.itemCaches[p];var _=b&&b.parentItem.key;_&&delete h.itemkeyCaches[_]}n._cache.updateSize()}}));var I=function(e){for(var t=n.selectedItems,o=0;o<t;o++){if(t[o].key===e.key)return!0}return!1};n.$connector.reset=e((function(){n.size=0,T(u),T(n._cache.items),T(b),c&&c.cancel(),l&&l.cancel(),d&&d.cancel(),c=void 0,l=void 0,p=[],m=[],k()}));var T=e=>Object.keys(e).forEach(t=>delete e[t]);n.$connector.updateSize=e=>n.size=e,n.$connector.updateUniqueItemIdPath=e=>n.itemIdPath=e,n.$connector.expandItems=e((function(e){var t=Array.from(n.expandedItems);e.filter(e=>!n._isExpanded(e)).forEach(e=>t.push(e)),n.expandedItems=t})),n.$connector.collapseItems=e((function(e){var t=Array.from(n.expandedItems);e.forEach(e=>{var o=n._getItemIndexInArray(e,t);o>=0&&t.splice(o,1)}),n.expandedItems=t,e.forEach(e=>n.$connector.removeFromQueue(e))})),n.$connector.removeFromQueue=e((function(e){var t=n.getItemId(e);delete f[t],n.$connector.removeFromArray(p,e=>e.itemkey===t),n.$connector.removeFromArray(m,e=>e.parentKey===t)})),n.$connector.removeFromArray=e((function(e,t){if(e.length)for(var n=e.length-1;n--;)t(e[n])&&e.splice(n,1)})),n.$connector.confirmParent=e((function(e,t,o){if(f[t]){u[t]&&(u[t].size=o);for(var r=Object.getOwnPropertyNames(f[t]),a=0;a<r.length;a++){var i=r[a],s=b[t]||[0,0],l=f[t][i];if(u[t]&&u[t][i]||i<s[0]||i>s[1])delete f[t][i],l(u[t][i]||new Array(o),o);else l&&0===o&&(delete f[t][i],l([],o))}n.$server.confirmParentUpdate(e,t),n.loading||n._assignModels()}})),n.$connector.confirm=e((function(e){for(var t=Object.getOwnPropertyNames(h),o=0;o<t.length;o++){var r=t[o],a=b[g]||[0,0],i=n.size?Math.ceil(n.size/n.pageSize)-1:0,s=Math.min(a[1],i),l=h[r];u[g]&&u[g][r]||r<a[0]||+r>s?(delete h[r],l(u[g][r]||new Array(n.pageSize)),n._debounceIncreasePool&&n._debounceIncreasePool.flush()):l&&0===n.size&&(delete h[r],l([]))}n.$server.confirmUpdate(e)})),n.$connector.ensureHierarchy=e((function(){for(var e in u)e!==g&&delete u[e];T(b),n._cache.itemCaches={},n._cache.itemkeyCaches={},k()})),n.$connector.setSelectionMode=e((function(e){if(!(("string"==typeof e||e instanceof String)&&_.indexOf(e)>=0))throw"Attempted to set an invalid selection mode";y=e,v={}})),n.$connector.deselectAllowed=!0,n.$connector.setVerticalScrollingEnabled=e((function(e){z(n.$.table,e),n.notifyResize()}));var z=function(t,n){t.style.overflowY=n?"":"hidden",t.removeEventListener("wheel",t.__wheelListener),!n&&t.addEventListener("wheel",t.__wheelListener=e(e=>{e.deltaX?Object.defineProperty(e,"deltaY",{value:0}):e.stopImmediatePropagation()}))};n.addEventListener("vaadin-context-menu-before-open",e((function(e){!function(e){var t=n.getEventContext(e),o=t.item&&t.item.key,r=t.column&&t.column.id;n.$server.updateContextMenuTargetItem(o,r)}(n.$contextMenuConnector.openEvent)}))),n.getContextMenuBeforeOpenDetail=e((function(e){var t=n.getEventContext(e);return{key:t.item&&t.item.key||""}})),n.addEventListener("cell-activate",e(e=>{n.$connector.activeItem=e.detail.model.item,setTimeout(()=>n.$connector.activeItem=void 0)})),n.addEventListener("click",e(e=>P(e,"item-click"))),n.addEventListener("dblclick",e(e=>P(e,"item-double-click"))),n.addEventListener("column-resize",e(e=>{n._getColumnsInOrder().filter(e=>!e.hidden).forEach(e=>{e.dispatchEvent(new CustomEvent("column-drag-resize"))}),n.dispatchEvent(new CustomEvent("column-drag-resize",{detail:{resizedColumnKey:e.detail.resizedColumn._flowId}}))})),n.addEventListener("column-reorder",e(e=>{var t=n._columnTree.slice(0).pop().filter(e=>e._flowId).sort((e,t)=>e._order-t._order).map(e=>e._flowId);n.dispatchEvent(new CustomEvent("column-reorder-all-columns",{detail:{columns:t}}))})),n.cellClassNameGenerator=e((function(e,t){var n=t.item.style;if(n)return(n.row||"")+" "+(e&&n[e._flowId]||"")})),n.dropFilter=e(e=>!e.item.dropDisabled),n.dragFilter=e(e=>!e.item.dragDisabled),n.addEventListener("grid-dragstart",e(e=>{n._isSelected(e.detail.draggedItems[0])?(n.__selectionDragData?Object.keys(n.__selectionDragData).forEach(t=>{e.detail.setDragData(t,n.__selectionDragData[t])}):(n.__dragDataTypes||[]).forEach(t=>{e.detail.setDragData(t,e.detail.draggedItems.map(e=>e.dragData[t]).join("\n"))}),n.__selectionDraggedItemsCount>1&&e.detail.setDraggedItemsCount(n.__selectionDraggedItemsCount)):(n.__dragDataTypes||[]).forEach(t=>{e.detail.setDragData(t,e.detail.draggedItems[0].dragData[t])})}))}function P(e,t){if(n.$connector.activeItem){e.itemKey=n.$connector.activeItem.key;var o=n.getEventContext(e);o.column&&(e.internalColumnId=o.column._flowId),n.dispatchEvent(new CustomEvent(t,{detail:e}))}}}))(n)}}()},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
var o=e=>class extends e{static get properties(){return{_hasVaadinItemMixin:{value:!0},disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get value(){return void 0!==this._value?this._value:this.textContent.trim()}set value(e){this._value=e}ready(){super.ready();var e=this.getAttribute("value");null!==e&&(this.value=e),this.addEventListener("focus",e=>this._setFocused(!0),!0),this.addEventListener("blur",e=>this._setFocused(!1),!0),this.addEventListener("mousedown",e=>{this._setActive(this._mousedown=!0);var t=()=>{this._setActive(this._mousedown=!1),document.removeEventListener("mouseup",t)};document.addEventListener("mouseup",t)}),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("keyup",e=>this._onKeyup(e))}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this._setFocused(!1)}_selectedChanged(e){this.setAttribute("aria-selected",e)}_disabledChanged(e){e?(this.selected=!1,this.setAttribute("aria-disabled","true"),this.blur()):this.removeAttribute("aria-disabled")}_setFocused(e){e?(this.setAttribute("focused",""),this._mousedown||this.setAttribute("focus-ring","")):(this.removeAttribute("focused"),this.removeAttribute("focus-ring"),this._setActive(!1))}_setActive(e){e?this.setAttribute("active",""):this.removeAttribute("active")}_onKeydown(e){/^( |SpaceBar|Enter)$/.test(e.key)&&!e.defaultPrevented&&(e.preventDefault(),this._setActive(!0))}_onKeyup(e){this.hasAttribute("active")&&(this._setActive(!1),this.click())}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(27),r=n(95),a=n(13),i=n(9),s=e=>class extends e{static get properties(){return{_hasVaadinListMixin:{value:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}ready(){super.ready(),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("click",e=>this._onClick(e)),this._observer=new o.a(this,e=>{this._setItems(this._filterItems(Array.from(this.children)))})}_enhanceItems(e,t,n,o){if(!o&&e){this.setAttribute("aria-orientation",t||"vertical"),this.items.forEach(e=>{t?e.setAttribute("orientation",t):e.removeAttribute("orientation"),e.updateStyles()}),this._setFocusable(n);var r=e[n];e.forEach(e=>e.selected=e===r),r&&!r.disabled&&this._scrollToItem(n)}}get focused(){return this.getRootNode().activeElement}_filterItems(e){return e.filter(e=>e._hasVaadinItemMixin)}_onClick(e){if(!(e.metaKey||e.shiftKey||e.ctrlKey||e.defaultPrevented)){var t,n=this._filterItems(e.composedPath())[0];n&&!n.disabled&&(t=this.items.indexOf(n))>=0&&(this.selected=t)}}_searchKey(e,t){this._searchReset=a.a.debounce(this._searchReset,i.d.after(500),()=>this._searchBuf=""),this._searchBuf+=t.toLowerCase();this.items.some(e=>0===e.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf))||(this._searchBuf=t.toLowerCase());var n=1===this._searchBuf.length?e+1:e;return this._getAvailableIndex(n,1,e=>!(e.disabled||this._isItemHidden(e))&&0===e.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf))}get _isRTL(){return!this._vertical&&"rtl"===this.getAttribute("dir")}_onKeydown(e){if(!e.metaKey&&!e.ctrlKey){var t=e.key.replace(/^Arrow/,""),n=this.items.indexOf(this.focused);if(/[a-zA-Z0-9]/.test(t)&&1===t.length){var o=this._searchKey(n,t);o>=0&&this._focus(o)}else{var r,a,i=this._isRTL?-1:1;this._vertical&&"Up"===t||!this._vertical&&"Left"===t?(a=-i,r=n-i):this._vertical&&"Down"===t||!this._vertical&&"Right"===t?(a=i,r=n+i):"Home"===t?(a=1,r=0):"End"===t&&(a=-1,r=this.items.length-1),(r=this._getAvailableIndex(r,a,e=>!(e.disabled||this._isItemHidden(e))))>=0&&(this._focus(r),e.preventDefault())}}}_getAvailableIndex(e,t,n){for(var o=this.items.length,r=0;"number"==typeof e&&r<o;r++,e+=t||1){if(e<0?e=o-1:e>=o&&(e=0),n(this.items[e]))return e}return-1}_isItemHidden(e){return"none"===getComputedStyle(e).display}_setFocusable(e){e=this._getAvailableIndex(e,1,e=>!e.disabled);var t=this.items[e]||this.items[0];this.items.forEach(e=>e.tabIndex=e===t?0:-1)}_focus(e){var t=this.items[e];this.items.forEach(e=>e.focused=e===t),this._setFocusable(e),this._scrollToItem(e),t.focus()}focus(){this._observer&&this._observer.flush();var e=this.querySelector('[tabindex="0"]')||(this.items?this.items[0]:null);e&&e.focus()}get _scrollerElement(){}_scrollToItem(e){var t=this.items[e];if(t){var n=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],o=this._scrollerElement.getBoundingClientRect(),r=(this.items[e+1]||t).getBoundingClientRect(),a=(this.items[e-1]||t).getBoundingClientRect(),i=0;!this._isRTL&&r[n[1]]>=o[n[1]]||this._isRTL&&r[n[1]]<=o[n[1]]?i=r[n[1]]-o[n[1]]:(!this._isRTL&&a[n[0]]<=o[n[0]]||this._isRTL&&a[n[0]]>=o[n[0]])&&(i=a[n[0]]-o[n[0]]),this._scroll(i)}}get _vertical(){return"horizontal"!==this.orientation}_scroll(e){if(this._vertical)this._scrollerElement.scrollTop+=e;else{var t=r.a.detectScrollType(),n=r.a.getNormalizedScrollLeft(t,this.getAttribute("dir")||"ltr",this._scrollerElement)+e;r.a.setNormalizedScrollLeft(t,this.getAttribute("dir")||"ltr",this._scrollerElement,n)}}}},,,,,,,,,,function(e,t,n){"use strict";n(172),n(152)},,function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var o=n(15),r=n(61),a=n(13),i=n(38),s=n(83),l=n(17),c=n(9),d=n(11),h=Object(s.b)(o.a);class f extends h{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(var e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),this.style.display="none",this.__isDetached){this.__isDetached=!1;for(var e=Object(d.a)(Object(d.a)(this).parentNode),t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){var e=this.template=this.querySelector("template");if(!e){var t=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}var n={};n[this.as]=!0,n[this.indexAs]=!0,n[this.itemsIndexAs]=!0,this.__ctor=Object(r.b)(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:n,forwardHostProp:function(e,t){for(var n,o=this.__instances,r=0;r<o.length&&(n=o[r]);r++)n.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,n){if(Object(l.e)(this.as,t)){var o=e[this.itemsIndexAs];t==this.as&&(this.items[o]=n);var r=Object(l.i)(this.as,`${JSCompiler_renameProperty("items",this)}.${o}`,t);this.notifyPath(r,n)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){var t=e,n=this.__getMethodHost();return function(){return n[t].apply(n,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){var e=performance.now(),t=this._targetFrameTime/(e-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*t)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=e,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths)for(var t=this.__observePaths,n=0;n<t.length;n++)0===e.indexOf(t[n])&&this.__debounceRender(this.__render,this.delay)}else this.__debounceRender(this.__render,this.delay)}__debounceRender(e,t=0){this.__renderDebouncer=a.a.debounce(this.__renderDebouncer,t>0?c.d.after(t):c.c,e.bind(this)),Object(i.a)(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Object(i.b)()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){for(var e=this.items||[],t=new Array(e.length),n=0;n<e.length;n++)t[n]=n;this.__filterFn&&(t=t.filter((t,n,o)=>this.__filterFn(e[t],n,o))),this.__sortFn&&t.sort((t,n)=>this.__sortFn(e[t],e[n]));for(var o=this.__itemsIdxToInstIdx={},r=0,a=Math.min(t.length,this.__limit);r<a;r++){var i=this.__instances[r],s=t[r],l=e[s];o[s]=r,i?(i._setPendingProperty(this.as,l),i._setPendingProperty(this.indexAs,r),i._setPendingProperty(this.itemsIndexAs,s),i._flushProperties()):this.__insertInstance(l,r,s)}for(var c=this.__instances.length-1;c>=r;c--)this.__detachAndRemoveInstance(c)}__detachInstance(e){for(var t=this.__instances[e],n=Object(d.a)(t.root),o=0;o<t.children.length;o++){var r=t.children[o];n.appendChild(r)}return t}__attachInstance(e,t){var n=this.__instances[e];t.insertBefore(n.root,this)}__detachAndRemoveInstance(e){var t=this.__detachInstance(e);t&&this.__pool.push(t),this.__instances.splice(e,1)}__stampInstance(e,t,n){var o={};return o[this.as]=e,o[this.indexAs]=t,o[this.itemsIndexAs]=n,new this.__ctor(o)}__insertInstance(e,t,n){var o=this.__pool.pop();o?(o._setPendingProperty(this.as,e),o._setPendingProperty(this.indexAs,t),o._setPendingProperty(this.itemsIndexAs,n),o._flushProperties()):o=this.__stampInstance(e,t,n);var r=this.__instances[t+1],a=r?r.children[0]:this;return Object(d.a)(Object(d.a)(this).parentNode).insertBefore(o.root,a),this.__instances[t]=o,o}_showHideChildren(e){for(var t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){var n=e.slice(6),o=n.indexOf("."),r=o<0?n:n.substring(0,o);if(r==parseInt(r,10)){var a=o<0?"":n.substring(o+1);this.__handleObservedPaths(a);var i=this.__itemsIdxToInstIdx[r],s=this.__instances[i];if(s){var l=this.as+(a?"."+a:"");s._setPendingPropertyOrPath(l,t,!1,!0),s._flushProperties()}return!0}}itemForElement(e){var t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){var t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return Object(r.a)(this.template,e)}}customElements.define(f.is,f)},,function(e,t,n){"use strict";n(46),n(42),n(50),n(58);var o=document.createElement("template");o.innerHTML='<dom-module id="lumo-required-field">\n  <template>\n    <style>\n      [part="label"] {\n        align-self: flex-start;\n        color: var(--lumo-secondary-text-color);\n        font-weight: 500;\n        font-size: var(--lumo-font-size-s);\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        transition: color 0.2s;\n        line-height: 1;\n        padding-bottom: 0.5em;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        position: relative;\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n\n      :host([has-label])::before {\n        margin-top: calc(var(--lumo-font-size-s) * 1.5);\n      }\n\n      :host([has-label]) {\n        padding-top: var(--lumo-space-m);\n      }\n\n      :host([required]) [part="label"] {\n        padding-right: 1em;\n      }\n\n      [part="label"]::after {\n        content: var(--lumo-required-field-indicator, "•");\n        transition: opacity 0.2s;\n        opacity: 0;\n        color: var(--lumo-primary-text-color);\n        position: absolute;\n        right: 0;\n        width: 1em;\n        text-align: center;\n      }\n\n      :host([required]:not([has-value])) [part="label"]::after {\n        opacity: 1;\n      }\n\n      :host([invalid]) [part="label"]::after {\n        color: var(--lumo-error-text-color);\n      }\n\n      [part="error-message"] {\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n        color: var(--lumo-error-text-color);\n        will-change: max-height;\n        transition: 0.4s max-height;\n        max-height: 5em;\n      }\n\n      /* Margin that doesn’t reserve space when there’s no error message */\n      [part="error-message"]:not(:empty)::before,\n      [part="error-message"]:not(:empty)::after {\n        content: "";\n        display: block;\n        height: 0.4em;\n      }\n\n      :host(:not([invalid])) [part="error-message"] {\n        max-height: 0;\n        overflow: hidden;\n      }\n\n      /* RTL specific styles */\n\n      :host([dir="rtl"]) [part="label"] {\n        margin-left: 0;\n        margin-right: calc(var(--lumo-border-radius-m) / 4);\n      }\n\n      :host([required][dir="rtl"]) [part="label"] {\n        padding-left: 1em;\n        padding-right: 0;\n      }\n\n      :host([dir="rtl"]) [part="label"]::after {\n        right: auto;\n        left: 0;\n      }\n\n      :host([dir="rtl"]) [part="error-message"] {\n        margin-left: 0;\n        margin-right: calc(var(--lumo-border-radius-m) / 4);\n      }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(o.content)},,function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(15),r=n(48),a=n(23),i=n(75),s=n(33),l=n(6);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class c extends(Object(s.a)(Object(i.a)(Object(a.a)(Object(r.a)(o.a))))){static get template(){return l.a`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      label {
        display: inline-flex;
        align-items: baseline;
        outline: none;
      }

      [part="checkbox"] {
        position: relative;
        display: inline-block;
        flex: none;
      }

      input[type="checkbox"] {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
        margin: 0;
      }

      :host([disabled]) {
        -webkit-tap-highlight-color: transparent;
      }
    </style>

    <label>
      <span part="checkbox">
        <input type="checkbox" checked="{{checked::change}}" disabled\$="[[disabled]]" indeterminate="{{indeterminate::change}}" role="presentation" tabindex="-1">
      </span>

      <span part="label">
        <slot></slot>
      </span>
    </label>
`}static get is(){return"vaadin-checkbox"}static get version(){return"2.5.0"}static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,observer:"_checkedChanged",reflectToAttribute:!0},indeterminate:{type:Boolean,notify:!0,observer:"_indeterminateChanged",reflectToAttribute:!0,value:!1},value:{type:String,value:"on"},_nativeCheckbox:{type:Object}}}constructor(){super(),this.name}get name(){return this.checked?this._storedName:""}set name(e){this._storedName=e}ready(){super.ready(),this.setAttribute("role","checkbox"),this._nativeCheckbox=this.shadowRoot.querySelector('input[type="checkbox"]'),this.addEventListener("click",this._handleClick.bind(this)),this._addActiveListeners();var e=this.getAttribute("name");e&&(this.name=e),this.shadowRoot.querySelector('[part~="label"]').querySelector("slot").addEventListener("slotchange",this._updateLabelAttribute.bind(this)),this._updateLabelAttribute()}_updateLabelAttribute(){var e=this.shadowRoot.querySelector('[part~="label"]'),t=e.firstElementChild.assignedNodes();this._isAssignedNodesEmpty(t)?e.setAttribute("empty",""):e.removeAttribute("empty")}_isAssignedNodesEmpty(e){return 0===e.length||1==e.length&&e[0].nodeType==Node.TEXT_NODE&&""===e[0].textContent.trim()}_checkedChanged(e){this.indeterminate?this.setAttribute("aria-checked","mixed"):this.setAttribute("aria-checked",Boolean(e))}_indeterminateChanged(e){e?this.setAttribute("aria-checked","mixed"):this.setAttribute("aria-checked",this.checked)}_addActiveListeners(){this._addEventListenerToNode(this,"down",e=>{this.__interactionsAllowed(e)&&this.setAttribute("active","")}),this._addEventListenerToNode(this,"up",()=>this.removeAttribute("active")),this.addEventListener("keydown",e=>{this.__interactionsAllowed(e)&&32===e.keyCode&&(e.preventDefault(),this.setAttribute("active",""))}),this.addEventListener("keyup",e=>{this.__interactionsAllowed(e)&&32===e.keyCode&&(e.preventDefault(),this._toggleChecked(),this.removeAttribute("active"),this.indeterminate&&(this.indeterminate=!1))})}get focusElement(){return this.shadowRoot.querySelector("input")}__interactionsAllowed(e){return!this.disabled&&"a"!==e.target.localName}_handleClick(e){this.__interactionsAllowed(e)&&(this.indeterminate?(this.indeterminate=!1,e.preventDefault(),this._toggleChecked()):e.composedPath()[0]!==this._nativeCheckbox&&(e.preventDefault(),this._toggleChecked()))}_toggleChecked(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{composed:!1,bubbles:!0}))}}customElements.define(c.is,c)},function(e,t,n){"use strict";n(46),n(42),n(50),n(58);var o=document.createElement("template");o.innerHTML='<dom-module id="lumo-overlay">\n  <template>\n    <style>\n      :host {\n        top: var(--lumo-space-m);\n        right: var(--lumo-space-m);\n        bottom: var(--lumo-space-m);\n        left: var(--lumo-space-m);\n        /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */\n        /* stylelint-disable-next-line */\n        outline: 0px solid transparent;\n      }\n\n      [part="overlay"] {\n        background-color: var(--lumo-base-color);\n        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));\n        border-radius: var(--lumo-border-radius-m);\n        box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);\n        color: var(--lumo-body-text-color);\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        font-weight: 400;\n        line-height: var(--lumo-line-height-m);\n        letter-spacing: 0;\n        text-transform: none;\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      [part="content"] {\n        padding: var(--lumo-space-xs);\n      }\n\n      [part="backdrop"] {\n        background-color: var(--lumo-shade-20pct);\n        animation: 0.2s lumo-overlay-backdrop-enter both;\n        will-change: opacity;\n      }\n\n      @keyframes lumo-overlay-backdrop-enter {\n        0% {\n          opacity: 0;\n        }\n      }\n\n      :host([closing]) [part="backdrop"] {\n        animation: 0.2s lumo-overlay-backdrop-exit both;\n      }\n\n      @keyframes lumo-overlay-backdrop-exit {\n        100% {\n          opacity: 0;\n        }\n      }\n\n      @keyframes lumo-overlay-dummy-animation {\n        0% { opacity: 1; }\n        100% { opacity: 1; }\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(o.content)},,,function(e,t,n){"use strict";var o=n(36),r=n(6),a=r.a`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;a.setAttribute("style","display: none;"),document.head.appendChild(a.content);var i=document.createElement("style");i.textContent="[hidden] { display: none !important; }",document.head.appendChild(i);n(164);var s=n(78),l=n(40);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(s.a)({_template:r.a`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:o.a.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(e){var t=(e||"").split(":");this._iconName=t.pop(),this._iconsetName=t.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(e){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&Object(l.a)(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,Object(l.a)(this.root).appendChild(this._img))}})},,function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(61),r={templatize(e,t){this._templatizerTemplate=e,this.ctor=Object(o.b)(e,this,{mutableData:Boolean(t),parentModel:this._parentModel,instanceProps:this._instanceProps,forwardHostProp:this._forwardHostPropV2,notifyInstanceProp:this._notifyInstancePropV2})},stamp(e){return new this.ctor(e)},modelForElement(e){return Object(o.a)(this._templatizerTemplate,e)}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/},function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var o=n(15),r=n(61),a=n(13),i=n(38),s=n(9),l=n(17),c=n(11);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class d extends o.a{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=a.a.debounce(this.__renderDebouncer,s.c,()=>this.__render()),Object(i.a)(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();var e=Object(c.a)(this).parentNode;e&&(e.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||Object(c.a)(e).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),this.style.display="none",this.if&&this.__debounceRender()}render(){Object(i.b)()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){var e=Object(c.a)(this).parentNode;if(e){if(!this.__ctor){var t=Object(c.a)(this).querySelector("template");if(!t){var n=new MutationObserver(()=>{if(!Object(c.a)(this).querySelector("template"))throw new Error("dom-if requires a <template> child");n.disconnect(),this.__render()});return n.observe(this,{childList:!0}),!1}this.__ctor=Object(r.b)(t,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Object(l.g)(e)]=!0))}})}if(this.__instance){this.__syncHostProperties();var o=this.__instance.children;if(o&&o.length)if(Object(c.a)(this).previousSibling!==o[o.length-1])for(var a,i=0;i<o.length&&(a=o[i]);i++)Object(c.a)(e).insertBefore(a,this)}else this.__instance=new this.__ctor,Object(c.a)(e).insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){var e=this.__invalidProps;if(e){for(var t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){var e=this.__instance.children;if(e&&e.length){var t=Object(c.a)(e[0]).parentNode;if(t){t=Object(c.a)(t);for(var n,o=0;o<e.length&&(n=e[o]);o++)t.removeChild(n)}}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){var e=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(e)}}customElements.define(d.is,d)},function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o,r=n(83);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/o=r.a._mutablePropertyChange;var a={properties:{mutableData:Boolean},_shouldPropertyChange(e,t,n){return o(this,e,t,n,this.mutableData)}}},function(e,t,n){"use strict";n(46),n(50);var o=n(6).a`<dom-module id="lumo-checkbox" theme-for="vaadin-checkbox">
  <template>
    <style include="lumo-checkbox-style lumo-checkbox-effects">
      /* IE11 only */
      ::-ms-backdrop,
      [part="checkbox"] {
        line-height: 1;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-checkbox-style">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: default;
        outline: none;
      }

      [part="label"]:not([empty]) {
        margin: 0.1875em 0.875em 0.1875em 0.375em;
      }

      [part="checkbox"] {
        width: calc(1em + 2px);
        height: calc(1em + 2px);
        margin: 0.1875em;
        position: relative;
        border-radius: var(--lumo-border-radius-s);
        background-color: var(--lumo-contrast-20pct);
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), background-color 0.15s;
        pointer-events: none;
        line-height: 1.2;
      }

      :host([indeterminate]) [part="checkbox"],
      :host([checked]) [part="checkbox"] {
        background-color: var(--lumo-primary-color);
      }

      /* Needed to align the checkbox nicely on the baseline */
      [part="checkbox"]::before {
        content: "\\2003";
      }

      /* Checkmark */
      [part="checkbox"]::after {
        content: "";
        display: inline-block;
        width: 0;
        height: 0;
        border: 0 solid var(--lumo-primary-contrast-color);
        border-width: 0.1875em 0 0 0.1875em;
        box-sizing: border-box;
        transform-origin: 0 0;
        position: absolute;
        top: 0.8125em;
        left: 0.5em;
        transform: scale(0.55) rotate(-135deg);
        opacity: 0;
      }

      :host([checked]) [part="checkbox"]::after {
        opacity: 1;
        width: 0.625em;
        height: 1.0625em;
      }

      /* Indeterminate checkmark */

      :host([indeterminate]) [part="checkbox"]::after {
        transform: none;
        opacity: 1;
        top: 45%;
        height: 10%;
        left: 22%;
        right: 22%;
        width: auto;
        border: 0;
        background-color: var(--lumo-primary-contrast-color);
        transition: opacity 0.25s;
      }

      /* Focus ring */

      :host([focus-ring]) [part="checkbox"] {
        box-shadow: 0 0 0 3px var(--lumo-primary-color-50pct);
      }

      /* Disabled */

      :host([disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
      }

      :host([disabled]) [part="label"] ::slotted(*) {
        color: inherit;
      }

      :host([disabled]) [part="checkbox"] {
        background-color: var(--lumo-contrast-10pct);
      }

      :host([disabled]) [part="checkbox"]::after {
        border-color: var(--lumo-contrast-30pct);
      }

      :host([indeterminate][disabled]) [part="checkbox"]::after {
        background-color: var(--lumo-contrast-30pct);
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="label"]:not([empty]) {
        margin: 0.1875em 0.375em 0.1875em 0.875em;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-checkbox-effects">
  <template>
    <style>
      /* Transition the checkmark if activated with the mouse (disabled for grid select-all this way) */
      :host(:hover) [part="checkbox"]::after {
        transition: width 0.1s, height 0.25s;
      }

      /* Used for activation "halo" */
      [part="checkbox"]::before {
        color: transparent;
        display: inline-block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: inherit;
        transform: scale(1.4);
        opacity: 0;
        transition: transform 0.1s, opacity 0.8s;
      }

      /* Hover */

      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="checkbox"] {
        background-color: var(--lumo-contrast-30pct);
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="checkbox"] {
          background-color: var(--lumo-contrast-20pct);
        }
      }

      /* Active */

      :host([active]) [part="checkbox"] {
        transform: scale(0.9);
        transition-duration: 0.05s;
      }

      :host([active][checked]) [part="checkbox"] {
        transform: scale(1.1);
      }

      :host([active]:not([checked])) [part="checkbox"]::before {
        transition-duration: 0.01s, 0.01s;
        transform: scale(0);
        opacity: 0.4;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(o.content)},function(e,t,n){"use strict";n(36);var o=n(9),r=n(27),a=n(88),i=n(140),s=n(15);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class l extends(Object(a.a)(s.a)){static get is(){return"vaadin-grid-column-group"}static get properties(){return{_childColumns:{value:function(){return this._getChildColumns(this)}},flexGrow:{type:Number,readOnly:!0},width:{type:String,readOnly:!0},_visibleChildColumns:Array,_colSpan:Number,_rootColumns:Array}}static get observers(){return["_updateVisibleChildColumns(_childColumns)","_childColumnsChanged(_childColumns)","_groupFrozenChanged(frozen, _rootColumns)","_groupHiddenChanged(hidden, _rootColumns)","_visibleChildColumnsChanged(_visibleChildColumns)","_colSpanChanged(_colSpan, _headerCell, _footerCell)","_groupOrderChanged(_order, _rootColumns)","_groupReorderStatusChanged(_reorderStatus, _rootColumns)","_groupResizableChanged(resizable, _rootColumns)"]}connectedCallback(){super.connectedCallback(),this._addNodeObserver(),this._updateFlexAndWidth()}disconnectedCallback(){super.disconnectedCallback(),this._observer&&this._observer.disconnect()}_columnPropChanged(e,t){"hidden"===e&&(this._preventHiddenCascade=!0,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenCascade=!1),/flexGrow|width|hidden|_childColumns/.test(e)&&this._updateFlexAndWidth(),"frozen"===e&&(this.frozen=this.frozen||t),"lastFrozen"===e&&(this._lastFrozen=this._lastFrozen||t)}_groupOrderChanged(e,t){if(t){var n=t.slice(0);if(!e)return void n.forEach(e=>e._order=0);var o=/(0+)$/.exec(e).pop().length,r=1+~~(Math.log(t.length)/Math.LN10),a=Math.pow(10,o-r);n[0]&&n[0]._order&&n.sort((e,t)=>e._order-t._order),i.a._updateColumnOrders(n,a,e)}}_groupReorderStatusChanged(e,t){void 0!==e&&void 0!==t&&t.forEach(t=>t._reorderStatus=e)}_groupResizableChanged(e,t){void 0!==e&&void 0!==t&&t.forEach(t=>t.resizable=e)}_updateVisibleChildColumns(e){this._visibleChildColumns=Array.prototype.filter.call(e,e=>!e.hidden)}_childColumnsChanged(e){!this._autoHidden&&this.hidden&&(Array.prototype.forEach.call(e,e=>e.hidden=!0),this._updateVisibleChildColumns(e))}_updateFlexAndWidth(){this._visibleChildColumns&&(this._visibleChildColumns.length?this._setWidth("calc("+Array.prototype.reduce.call(this._visibleChildColumns,(e,t)=>e+" + "+(t.width||"0px").replace("calc",""),"").substring(3)+")"):this._setWidth("0px"),this._setFlexGrow(Array.prototype.reduce.call(this._visibleChildColumns,(e,t)=>e+t.flexGrow,0)))}_groupFrozenChanged(e,t){void 0!==t&&void 0!==e&&!1!==e&&Array.from(t).forEach(t=>t.frozen=e)}_groupHiddenChanged(e,t){t&&!this._preventHiddenCascade&&(this._ignoreVisibleChildColumns=!0,t.forEach(t=>t.hidden=e),this._ignoreVisibleChildColumns=!1),this._columnPropChanged("hidden")}_visibleChildColumnsChanged(e){this._colSpan=e.length,this._ignoreVisibleChildColumns||(0===e.length?this._autoHidden=this.hidden=!0:this.hidden&&this._autoHidden&&(this._autoHidden=this.hidden=!1))}_colSpanChanged(e,t,n){t&&(t.setAttribute("colspan",e),this._grid&&this._grid._a11yUpdateCellColspan(t,e)),n&&(n.setAttribute("colspan",e),this._grid&&this._grid._a11yUpdateCellColspan(n,e))}_getChildColumns(e){return r.a.getFlattenedNodes(e).filter(this._isColumnElement)}_addNodeObserver(){this._observer=new r.a(this,e=>{(e.addedNodes.filter(this._isColumnElement).length>0||e.removedNodes.filter(this._isColumnElement).length>0)&&(this._preventHiddenCascade=!0,this._rootColumns=this._getChildColumns(this),this._childColumns=this._rootColumns,this._preventHiddenCascade=!1,o.c.run(()=>{this._grid&&this._grid._updateColumnTree&&this._grid._updateColumnTree()}))}),this._observer.flush()}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/.test(e.localName)}}customElements.define(l.is,l)},function(e,t,n){"use strict";n(36),n(73);var o=n(23),r=n(65),a=n(6),i=n(15),s=document.createElement("template");s.innerHTML="<custom-style>\n  <style>\n    @font-face {\n      font-family: 'vaadin-grid-sorter-icons';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n</custom-style>",document.head.appendChild(s.content);class l extends(Object(o.a)(Object(r.a)(i.a))){static get template(){return a.a`
    <style>
      :host {
        display: inline-flex;
        cursor: pointer;
        max-width: 100%;
      }

      [part="content"] {
        flex: 1 1 auto;
      }

      [part="indicators"] {
        position: relative;
        align-self: center;
        flex: none;
      }

      [part="order"] {
        display: inline;
        vertical-align: super;
      }

      [part="indicators"]::before {
        font-family: 'vaadin-grid-sorter-icons';
        display: inline-block;
      }

      :host(:not([direction])) [part="indicators"]::before {
        content: "\\e901";
      }

      :host([direction=asc]) [part="indicators"]::before {
        content: "\\e900";
      }

      :host([direction=desc]) [part="indicators"]::before {
        content: "\\e902";
      }
    </style>

    <div part="content">
      <slot></slot>
    </div>
    <div part="indicators">
      <span part="order">[[_getDisplayOrder(_order)]]</span>
    </div>
`}static get is(){return"vaadin-grid-sorter"}static get properties(){return{path:String,direction:{type:String,reflectToAttribute:!0,notify:!0,value:null},_order:{type:Number,value:null},_isConnected:{type:Boolean,observer:"__isConnectedChanged"}}}static get observers(){return["_pathOrDirectionChanged(path, direction)","_directionOrOrderChanged(direction, _order)"]}ready(){super.ready(),this.addEventListener("click",this._onClick.bind(this))}connectedCallback(){super.connectedCallback(),this._isConnected=!0}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1}_pathOrDirectionChanged(){this.__dispatchSorterChangedEvenIfPossible()}__isConnectedChanged(e,t){!1!==t&&this.__dispatchSorterChangedEvenIfPossible()}__dispatchSorterChangedEvenIfPossible(){void 0!==this.path&&void 0!==this.direction&&this._isConnected&&this.dispatchEvent(new CustomEvent("sorter-changed",{bubbles:!0,composed:!0}))}_getDisplayOrder(e){return null===e?"":e+1}_onClick(e){var t=this.getRootNode().activeElement;this!==t&&this.contains(t)||(e.preventDefault(),"asc"===this.direction?this.direction="desc":"desc"===this.direction?this.direction=null:this.direction="asc")}_directionOrOrderChanged(e,t){void 0!==e&&void 0!==t&&(/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&this.root&&this.root.querySelectorAll("*").forEach((function(e){e.style["-webkit-backface-visibility"]="visible",e.style["-webkit-backface-visibility"]=""})))}}customElements.define(l.is,l)},function(e,t,n){"use strict";n(46),n(86),n(71),n(42),n(50),n(58),n(154),n(215),n(156)},function(e,t,n){"use strict";n(46),n(86),n(71),n(42),n(50),n(58),n(154);var o=n(6).a`<dom-module id="lumo-grid" theme-for="vaadin-grid">
  <template>
    <style>
      :host {
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        line-height: var(--lumo-line-height-s);
        color: var(--lumo-body-text-color);
        background-color: var(--lumo-base-color);
        box-sizing: border-box;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        /* For internal use only */
        --_lumo-grid-border-color: var(--lumo-contrast-20pct);
        --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
        --_lumo-grid-border-width: 1px;
        --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
      }

      /* No (outer) border */

      :host(:not([theme~="no-border"])) {
        border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
      }

      /* Cell styles */

      [part~="cell"] {
        min-height: var(--lumo-size-m);
        background-color: var(--lumo-base-color);
      }

      [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        cursor: default;
        padding: var(--lumo-space-xs) var(--lumo-space-m);
      }

      /* Apply row borders by default and introduce the "no-row-borders" variant */
      :host(:not([theme~="no-row-borders"])) [part~="cell"]:not([part~="details-cell"]) {
        border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
      }

      /* Hide first body row top border */
      :host(:not([theme~="no-row-borders"])) [part="row"][first] [part~="cell"]:not([part~="details-cell"]) {
        border-top: 0;
        min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
      }

      /* Focus-ring */

      [part~="cell"]:focus {
        outline: none;
      }

      :host([navigating]) [part~="cell"]:focus::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Drag and Drop styles */
      :host([dragover])::after {
        content: "";
        position: absolute;
        z-index: 100;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      [part~="row"][dragover] {
        z-index: 100 !important;
      }

      [part~="row"][dragover] [part~="cell"] {
        overflow: visible;
      }

      [part~="row"][dragover] [part~="cell"]::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        height: calc(var(--_lumo-grid-border-width) + 2px);
        pointer-events: none;
        background: var(--lumo-primary-color-50pct);
      }

      :host([theme~="no-row-borders"]) [dragover] [part~="cell"]::after {
        height: 2px;
      }

      [part~="row"][dragover="below"] [part~="cell"]::after {
        top: 100%;
        bottom: auto;
        margin-top: -1px;
      }

      [part~="row"][dragover="above"] [part~="cell"]::after {
        top: auto;
        bottom: 100%;
        margin-bottom: -1px;
      }

      [part~="row"][details-opened][dragover="below"] [part~="cell"]:not([part~="details-cell"])::after,
      [part~="row"][details-opened][dragover="above"] [part~="details-cell"]::after {
        display: none;
      }

      [part~="row"][dragover][dragover="on-top"] [part~="cell"]::after {
        height: 100%;
      }

      [part~="row"][dragstart] {
        /* Add bottom-space to the row so the drag number doesn't get clipped. Needed for IE/Edge */
        border-bottom: 100px solid transparent;
        z-index: 100 !important;
        opacity: 0.9;
      }

      [part~="row"][dragstart] [part~="cell"] {
        border: none !important;
        box-shadow: none !important;
      }

      [part~="row"][dragstart] [part~="cell"][last-column] {
        border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
      }

      [part~="row"][dragstart] [part~="cell"][first-column] {
        border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
      }

      [ios] [part~="row"][dragstart] [part~="cell"] {
        background: var(--lumo-primary-color-50pct);
      }

      #scroller:not([ios]) [part~="row"][dragstart]:not([dragstart=""])::after {
        display: block;
        position: absolute;
        left: var(--_grid-drag-start-x);
        top: var(--_grid-drag-start-y);
        z-index: 100;
        content: attr(dragstart);
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: calc(var(--lumo-space-xs) * 0.8);
        color: var(--lumo-error-contrast-color);
        background-color: var(--lumo-error-color);
        border-radius: var(--lumo-border-radius-m);
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-xxs);
        line-height: 1;
        font-weight: 500;
        text-transform: initial;
        letter-spacing: initial;
        min-width: calc(var(--lumo-size-s) * 0.7);
        text-align: center;
      }

      /* Headers and footers */

      [part~="header-cell"] ::slotted(vaadin-grid-cell-content),
      [part~="footer-cell"] ::slotted(vaadin-grid-cell-content),
      [part~="reorder-ghost"] {
        font-size: var(--lumo-font-size-s);
        font-weight: 500;
      }

      [part~="footer-cell"] ::slotted(vaadin-grid-cell-content) {
        font-weight: 400;
      }

      [part="row"]:only-child [part~="header-cell"] {
        min-height: var(--lumo-size-xl);
      }

      /* Header borders */

      /* Hide first header row top border */
      :host(:not([theme~="no-row-borders"])) [part="row"]:first-child [part~="header-cell"] {
        border-top: 0;
      }

      [part="row"]:last-child [part~="header-cell"] {
        border-bottom: var(--_lumo-grid-border-width) solid transparent;
      }

      :host(:not([theme~="no-row-borders"])) [part="row"]:last-child [part~="header-cell"] {
        border-bottom-color: var(--_lumo-grid-secondary-border-color);
      }

      /* Overflow uses a stronger border color */
      :host([overflow~="top"]) [part="row"]:last-child [part~="header-cell"] {
        border-bottom-color: var(--_lumo-grid-border-color);
      }

      /* Footer borders */

      [part="row"]:first-child [part~="footer-cell"] {
        border-top: var(--_lumo-grid-border-width) solid transparent;
      }

      :host(:not([theme~="no-row-borders"])) [part="row"]:first-child [part~="footer-cell"] {
        border-top-color: var(--_lumo-grid-secondary-border-color);
      }

      /* Overflow uses a stronger border color */
      :host([overflow~="bottom"]) [part="row"]:first-child [part~="footer-cell"] {
        border-top-color: var(--_lumo-grid-border-color);
      }

      /* Column reordering */

      :host([reordering]) [part~="cell"] {
        background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
      }

      :host([reordering]) [part~="cell"][reorder-status="allowed"] {
        background: var(--lumo-base-color);
      }

      :host([reordering]) [part~="cell"][reorder-status="dragging"] {
        background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
      }

      [part~="reorder-ghost"] {
        opacity: 0.85;
        box-shadow: var(--lumo-box-shadow-s);
        /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
        padding: var(--lumo-space-s) var(--lumo-space-m) !important;
      }

      /* Column resizing */

      [part="resize-handle"] {
        width: 3px;
        background-color: var(--lumo-primary-color-50pct);
        opacity: 0;
        transition: opacity 0.2s;
      }

      :host(:not([reordering])) *:not([column-resizing]) [part~="cell"]:hover [part="resize-handle"],
      [part="resize-handle"]:active {
        opacity: 1;
        transition-delay: 0.15s;
      }

      /* Column borders */

      :host([theme~="column-borders"]) [part~="cell"]:not([last-column]):not([part~="details-cell"]) {
        border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
      }

      /* Frozen columns */

      [last-frozen] {
        border-right: var(--_lumo-grid-border-width) solid transparent;
        overflow: hidden;
      }

      :host([overflow~="left"]) [part~="cell"][last-frozen]:not([part~="details-cell"]) {
        border-right-color: var(--_lumo-grid-border-color);
      }

      /* Row stripes */

      :host([theme~="row-stripes"]) [part~="row"]:not([odd]) [part~="body-cell"],
      :host([theme~="row-stripes"]) [part~="row"]:not([odd]) [part~="details-cell"] {
        background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
        background-repeat: repeat-x;
      }

      /* Selected row */

      /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
      :host(:not([reordering])) [part~="row"][selected] {
        z-index: 1;
      }

      :host(:not([reordering])) [part~="row"][selected] [part~="body-cell"]:not([part~="details-cell"]) {
        background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
        background-repeat: repeat;
      }

      /* Cover the border of an unselected row */
      :host(:not([theme~="no-row-borders"])) [part~="row"][selected] [part~="cell"]:not([part~="details-cell"]) {
        box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
      }

      /* Compact */

      :host([theme~="compact"]) [part="row"]:only-child [part~="header-cell"] {
        min-height: var(--lumo-size-m);
      }

      :host([theme~="compact"]) [part~="cell"] {
        min-height: var(--lumo-size-s);
      }

      :host([theme~="compact"]) [part="row"][first] [part~="cell"]:not([part~="details-cell"]) {
        min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
      }

      :host([theme~="compact"]) [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        padding: var(--lumo-space-xs) var(--lumo-space-s);
      }

      /* Wrap cell contents */

      :host([theme~="wrap-cell-content"]) [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        white-space: normal;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part~="row"][dragstart] [part~="cell"][last-column] {
        border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
      }

      :host([dir="rtl"]) [part~="row"][dragstart] [part~="cell"][first-column] {
        border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
      }

      :host([dir="rtl"][theme~="column-borders"]) [part~="cell"]:not([last-column]):not([part~="details-cell"]) {
        border-right: none;
        border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
      }

      :host([dir="rtl"]) [last-frozen] {
        border-right: none;
        border-left: var(--_lumo-grid-border-width) solid transparent;
      }

      :host([dir="rtl"][overflow~="right"]) [part~="cell"][last-frozen]:not([part~="details-cell"]) {
        border-left-color: var(--_lumo-grid-border-color);
      }
    </style>
  </template>
</dom-module><dom-module theme-for="vaadin-checkbox" id="vaadin-grid-select-all-checkbox-lumo">
  <template>
    <style>
      :host(.vaadin-grid-select-all-checkbox) {
        font-size: var(--lumo-font-size-m);
      }
   </style>
  </template>
</dom-module>`;document.head.appendChild(o.content)},function(e,t,n){"use strict";n(36);var o=n(164),r=n(78),a=n(40);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(r.a)({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new o.a({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map((function(e){return this.name+":"+e}),this)},applyIcon:function(e,t){this.removeIcon(e);var n=this._cloneIcon(t,this.rtlMirroring&&this._targetIsRTL(e));if(n){var o=Object(a.a)(e.root||e);return o.insertBefore(n,o.childNodes[0]),e._svgIcon=n}return null},removeIcon:function(e){e._svgIcon&&(Object(a.a)(e.root||e).removeChild(e._svgIcon),e._svgIcon=null)},_targetIsRTL:function(e){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var t=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===t.getAttribute("dir")}else e&&e.nodeType!==Node.ELEMENT_NODE&&(e=e.host),this.__targetIsRTL=e&&"rtl"===window.getComputedStyle(e).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async((function(){this.fire("iron-iconset-added",this,{node:window})}))},_createIconMap:function(){var e=Object.create(null);return Object(a.a)(this).querySelectorAll("[id]").forEach((function(t){e[t.id]=t})),e},_cloneIcon:function(e,t){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[e],this.size,t)},_prepareSvgClone:function(e,t,n){if(e){var o=e.cloneNode(!0),r=document.createElementNS("http://www.w3.org/2000/svg","svg"),a=o.getAttribute("viewBox")||"0 0 "+t+" "+t,i="pointer-events: none; display: block; width: 100%; height: 100%;";return n&&o.hasAttribute("mirror-in-rtl")&&(i+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),r.setAttribute("viewBox",a),r.setAttribute("preserveAspectRatio","xMidYMid meet"),r.setAttribute("focusable","false"),r.style.cssText=i,r.appendChild(o).removeAttribute("id"),r}return null}})},function(e,t,n){"use strict";n(46),n(71),n(42),n(50),n(58),n(200),n(86),n(168);var o=n(6).a`<dom-module id="lumo-text-field" theme-for="vaadin-text-field">
  <template>
    <style include="lumo-required-field lumo-field-button">
      :host {
        --lumo-text-field-size: var(--lumo-size-m);
        color: var(--lumo-body-text-color);
        font-size: var(--lumo-font-size-m);
        font-family: var(--lumo-font-family);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
        padding: var(--lumo-space-xs) 0;
      }

      :host::before {
        height: var(--lumo-text-field-size);
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
      }

      :host([focused]:not([readonly])) [part="label"] {
        color: var(--lumo-primary-text-color);
      }

      :host([has-helper]) [part="helper-text"]::before {
        content: "";
        display: block;
        height: 0.4em;
      }

      [part="helper-text"],
      [part="helper-text"] ::slotted(*) {
        display: block;
        color: var(--lumo-secondary-text-color);
        font-size: var(--lumo-font-size-xs);
        line-height: var(--lumo-line-height-xs);
        margin-left: calc(var(--lumo-border-radius-m) / 4);
        transition: color 0.2s;
      }

      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
        cursor: inherit;
        min-height: var(--lumo-text-field-size);
        padding: 0 0.25em;
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
        -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      }

      [part="value"]:focus,
      :host([focused]) [part="input-field"] ::slotted(input),
      :host([focused]) [part="input-field"] ::slotted(textarea) {
        -webkit-mask-image: none;
        mask-image: none;
      }

      /*
        TODO: CSS custom property in \`mask-image\` causes crash in Edge
        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/
      */
      @-moz-document url-prefix() {
        [part="value"],
        [part="input-field"] ::slotted(input),
        [part="input-field"] ::slotted(textarea),
        [part="input-field"] ::slotted([part="value"]) {
          mask-image: var(--_lumo-text-field-overflow-mask-image);
        }
      }

      [part="value"]::-webkit-input-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]:-ms-input-placeholder {
        color: inherit;
        opacity: 0.5;
      }

      [part="value"]::-moz-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]::placeholder {
        color: inherit;
        transition: opacity 0.175s 0.1s;
        opacity: 0.5;
      }

      [part="input-field"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
        padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);
        font-weight: 500;
        line-height: 1;
        position: relative;
        cursor: text;
        box-sizing: border-box;
      }

      /* Used for hover and activation effects */
      [part="input-field"]::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: inherit;
        pointer-events: none;
        background-color: var(--lumo-contrast-50pct);
        opacity: 0;
        transition: transform 0.15s, opacity 0.2s;
        transform-origin: 100% 0;
      }

      /* Hover */

      :host(:hover:not([readonly]):not([focused])) [part="label"],
      :host(:hover:not([readonly])) [part="helper-text"],
      :host(:hover:not([readonly])) [part="helper-text"] ::slotted(*) {
        color: var(--lumo-body-text-color);
      }

      :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
        opacity: 0.1;
      }

      /* Touch device adjustment */
      @media (pointer: coarse) {
        :host(:hover:not([readonly]):not([focused])) [part="label"] {
          color: var(--lumo-secondary-text-color);
        }

        :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0;
        }

        :host(:active:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0.2;
        }
      }

      /* Trigger when not focusing using the keyboard */
      :host([focused]:not([focus-ring]):not([readonly])) [part="input-field"]::after {
        transform: scaleX(0);
        transition-duration: 0.15s, 1s;
      }

      /* Focus-ring */

      :host([focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Read-only and disabled */
      :host([readonly]) [part="value"]::-webkit-input-placeholder,
      :host([disabled]) [part="value"]::-webkit-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]:-ms-input-placeholder,
      :host([disabled]) [part="value"]:-ms-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::-moz-placeholder,
      :host([disabled]) [part="value"]::-moz-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::placeholder,
      :host([disabled]) [part="value"]::placeholder {
        opacity: 0;
      }

      /* Read-only */

      :host([readonly]) [part="input-field"] {
        color: var(--lumo-secondary-text-color);
        background-color: transparent;
        cursor: default;
      }

      :host([readonly]) [part="input-field"]::after {
        background-color: transparent;
        opacity: 1;
        border: 1px dashed var(--lumo-contrast-30pct);
      }

      /* Disabled style */

      :host([disabled]) {
        pointer-events: none;
      }

      :host([disabled]) [part="input-field"] {
        background-color: var(--lumo-contrast-5pct);
      }

      :host([disabled]) [part="label"],
      :host([disabled]) [part="helper-text"],
      :host([disabled]) [part="value"],
      :host([disabled]) [part="input-field"] ::slotted(*) {
        color: var(--lumo-disabled-text-color);
        -webkit-text-fill-color: var(--lumo-disabled-text-color);
      }

      /* Invalid style */

      :host([invalid]) [part="input-field"] {
        background-color: var(--lumo-error-color-10pct);
      }

      :host([invalid]) [part="input-field"]::after {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([invalid][focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
      }

      :host([input-prevented]) [part="input-field"] {
        color: var(--lumo-error-text-color);
      }

      /* Small theme */

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-text-field-size: var(--lumo-size-s);
      }

      :host([theme~="small"][has-label]) [part="label"] {
        font-size: var(--lumo-font-size-xs);
      }

      :host([theme~="small"][has-label]) [part="error-message"] {
        font-size: var(--lumo-font-size-xxs);
      }

      /* Text align */

      :host([theme~="align-left"]) [part="value"] {
        text-align: left;
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-center"]) [part="value"] {
        text-align: center;
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-right"]) [part="value"] {
        text-align: right;
        --_lumo-text-field-overflow-mask-image: none;
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-right"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
        }
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-left"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
        }
      }
      /* helper-text position */

      :host([has-helper][theme~="helper-above-field"]) [part="helper-text"]::before {
        display: none;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="helper-text"]::after {
        content: "";
        display: block;
        height: 0.4em;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="label"] {
        order: 0;
        padding-bottom: 0.4em;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="helper-text"] {
        order: 1;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="input-field"] {
        order: 2;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="error-message"] {
        order: 3;
      }

      /* Slotted content */

      [part="input-field"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {
        color: var(--lumo-secondary-text-color);
        font-weight: 400;
      }

      /* Slotted icons */

      [part="input-field"] ::slotted(iron-icon) {
        color: var(--lumo-contrast-60pct);
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part="input-field"] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="input-field"]::after {
        transform-origin: 0% 0;
      }

      :host([dir="rtl"]) [part="value"],
      :host([dir="rtl"]) [part="input-field"] ::slotted(input),
      :host([dir="rtl"]) [part="input-field"] ::slotted(textarea) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
      }

      :host([dir="rtl"]) [part="value"]:focus,
      :host([focused][dir="rtl"]) [part="input-field"] ::slotted(input),
      :host([focused][dir="rtl"]) [part="input-field"] ::slotted(textarea) {
        -webkit-mask-image: none;
        mask-image: none;
      }

      @-moz-document url-prefix() {
        :host([dir="rtl"]) [part="value"],
        :host([dir="rtl"]) [part="input-field"] ::slotted(input),
        :host([dir="rtl"]) [part="input-field"] ::slotted(textarea),
        :host([dir="rtl"]) [part="input-field"] ::slotted([part="value"]) {
          mask-image: var(--_lumo-text-field-overflow-mask-image);
        }
      }

      :host([theme~="align-left"][dir="rtl"]) [part="value"] {
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-center"][dir="rtl"]) [part="value"] {
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-right"][dir="rtl"]) [part="value"] {
        --_lumo-text-field-overflow-mask-image: none;
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-right"][dir="rtl"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
        }
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-left"][dir="rtl"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(o.content)},function(e,t,n){"use strict";n(46),n(71),n(58);var o=n(6).a`<dom-module id="lumo-text-area" theme-for="vaadin-text-area">
  <template>
    <style include="lumo-text-field">
      [part="input-field"],
      [part="input-field"] ::slotted(textarea) {
        /* Equal to the implicit padding in vaadin-text-field */
        padding-top: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
        padding-bottom: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
        height: auto;
        box-sizing: border-box;
        transition: background-color 0.1s;
        line-height: var(--lumo-line-height-s);
      }

      :host(:not([readonly])) [part="input-field"]::after {
        display: none;
      }

      :host([readonly]) [part="input-field"] {
        border: 1px dashed var(--lumo-contrast-30pct);
      }

      :host([readonly]) [part="input-field"]::after {
        border: none;
      }

      :host(:hover:not([readonly]):not([focused])) [part="input-field"] {
        background-color: var(--lumo-contrast-20pct);
      }

      @media (pointer: coarse) {
        :host(:hover:not([readonly]):not([focused])) [part="input-field"] {
          background-color: var(--lumo-contrast-10pct);
        }

        :host(:active:not([readonly]):not([focused])) [part="input-field"] {
          background-color: var(--lumo-contrast-20pct);
        }
      }

      [part="value"],
      [part="input-field"] ::slotted(textarea) {
        line-height: inherit;
        --_lumo-text-field-overflow-mask-image: none;
      }

      /* Vertically align icon prefix/suffix with the first line of text */
      [part="input-field"] ::slotted(iron-icon) {
        margin-top: calc((var(--lumo-icon-size-m) - 1em * var(--lumo-line-height-s)) / -2);
      }

      [part="input-field"] [part="value"],
      [part="input-field"] ::slotted(textarea) {
        white-space: pre-wrap; /* override \`nowrap\` from <vaadin-text-field> */
        align-self: stretch; /* override \`baseline\` from <vaadin-text-field> */
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(o.content)},function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(15),r=n(141),a=n(75),i=n(23),s=n(33),l=n(6);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class c extends(Object(s.a)(Object(r.a)(Object(a.a)(Object(i.a)(o.a))))){static get template(){return l.a`
    <style include="vaadin-text-field-shared-styles">
      .vaadin-text-area-container {
        flex: auto;
        max-height: inherit; /* MSIE 11 */
        min-height: inherit; /* MSIE 11 */
      }

      /* The label, helper text and the error message should neither grow nor shrink. */
      [part="label"],
      [part="helper-text"],
      [part="error-message"] {
        flex: none;
      }

      [part="input-field"] {
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }

      [part="value"] {
        resize: none;
      }

      [part="value"],
      [part="input-field"] ::slotted(*) {
        align-self: flex-start;
      }

      @keyframes vaadin-text-area-appear {
        to {
          opacity: 1;
        }
      }

      :host {
        animation: 1ms vaadin-text-area-appear;
      }
    </style>

    <div class="vaadin-text-area-container">

      <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>

      <div part="input-field" id="[[_inputId]]">

        <slot name="prefix"></slot>

        <slot name="textarea">
          <textarea part="value"></textarea>
        </slot>

        <div part="clear-button" id="clearButton" role="button" aria-label\$="[[i18n.clear]]"></div>
        <slot name="suffix"></slot>

      </div>

      <div part="helper-text" id="[[_helperTextId]]">
        <slot name="helper">[[helperText]]</slot>
      </div>

      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>

    </div>
`}static get is(){return"vaadin-text-area"}static get version(){return"2.8.4"}static get observers(){return["_textAreaValueChanged(value)"]}ready(){super.ready(),this._updateHeight(),this.addEventListener("animationend",this._onAnimationEnd),this.__safari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}_onAnimationEnd(e){0===e.animationName.indexOf("vaadin-text-area-appear")&&this._updateHeight()}get _slottedTagName(){return"textarea"}_textAreaValueChanged(e){this._updateHeight()}_updateHeight(){var e=this.root.querySelector("[part=input-field]"),t=e.scrollTop,n=this.inputElement,o=getComputedStyle(n).width,r=this.value?this.value.length:0;this._oldValueLength>=r&&(n.style.maxWidth=o,n.style.height="auto",this.__safari&&(e.style.display="block")),this._oldValueLength=r;var a=n.scrollHeight;a>n.clientHeight&&(n.style.height=a+"px"),n.style.removeProperty("max-width"),e.style.removeProperty("display"),e.scrollTop=t,this._dispatchIronResizeEventIfNeeded("InputHeight",a)}}customElements.define(c.is,c)},,,,,,,,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var o=n(15),r=n(48),a=n(27),i=n(31);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
Object(i.register)({name:"vaadin-contextmenu",deps:["touchstart","touchmove","touchend","contextmenu"],flow:{start:["touchstart","contextmenu"],end:["contextmenu"]},emits:["vaadin-contextmenu"],info:{sourceEvent:null,_ios:/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1},reset:function(){this.info.sourceEvent=null,this._cancelTimer(),this.info.touchJob=null,this.info.touchStartCoords=null},_cancelTimer:function(){this._timerId&&(clearTimeout(this._timerId),delete this._fired)},touchstart:function(e){this.info.sourceEvent=e,this.info.touchStartCoords={x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY};var t=e.composedPath()[0]||e.target;this._timerId=setTimeout(()=>{var n=e.changedTouches[0];e.shiftKey||(this.info._ios&&(this._fired=!0,this.fire(t,n.clientX,n.clientY)),Object(i.prevent)("tap"))},500)},touchmove:function(e){var t=this.info.touchStartCoords;(Math.abs(t.x-e.changedTouches[0].clientX)>15||Math.abs(t.y-e.changedTouches[0].clientY)>15)&&this._cancelTimer()},touchend:function(e){this._fired&&e.preventDefault(),this._cancelTimer()},contextmenu:function(e){e.shiftKey||(this.info.sourceEvent=e,this.fire(e.target,e.clientX,e.clientY),Object(i.prevent)("tap"))},fire:function(e,t,n){var o=this.info.sourceEvent,r=new Event("vaadin-contextmenu",{bubbles:!0,cancelable:!0,composed:!0});r.detail={x:t,y:n,sourceEvent:o},e.dispatchEvent(r),r.defaultPrevented&&o&&o.preventDefault&&o.preventDefault()}});n(174);var s=n(6);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class l extends class extends o.a{}{static get template(){return s.a`
    <iron-media-query query="min-device-width: 750px" query-matches="{{wide}}"></iron-media-query>
`}static get is(){return"vaadin-device-detector"}static get properties(){return{phone:{type:Boolean,computed:"_phone(wide, touch)",notify:!0},touch:{type:Boolean,notify:!0,value:()=>this._touch()},wide:{type:Boolean,notify:!0}}}static _touch(){try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}}_phone(e,t){return!e&&t}}customElements.define(l.is,l);var c=n(132),d=n(158),h=(n(65),n(38));class f extends c.a{static get is(){return"vaadin-context-menu-item"}}class u extends d.a{static get is(){return"vaadin-context-menu-list-box"}}customElements.define(f.is,f),customElements.define(u.is,u);var m=e=>class extends e{static get properties(){return{items:Array}}ready(){super.ready(),this.__itemsOutsideClickListener=e=>{e.composedPath().filter(e=>"vaadin-context-menu-overlay"===e.localName)[0]||this.dispatchEvent(new CustomEvent("items-outside-click"))},this.addEventListener("items-outside-click",e=>this.items&&this.close())}connectedCallback(){super.connectedCallback(),document.documentElement.addEventListener("click",this.__itemsOutsideClickListener)}disconnectedCallback(){super.disconnectedCallback(),document.documentElement.removeEventListener("click",this.__itemsOutsideClickListener)}get __isRTL(){return"rtl"===this.getAttribute("dir")}__forwardFocus(){var e=this.$.overlay,t=e.getFirstChild();if(e.parentOverlay){var n=e.parentOverlay.querySelector("[expanded]");n&&n.hasAttribute("focused")&&t?t.focus():e.$.overlay.focus()}else t&&t.focus()}__openSubMenu(e,t){e.items=t._item.children,e.listenOn=t;var n,o=t.getBoundingClientRect(),r=e.$.overlay.$.content,a=getComputedStyle(r),i=this.$.overlay,s=i.hasAttribute("bottom-aligned")?o.bottom+parseFloat(a.paddingBottom):o.top-parseFloat(a.paddingTop);e.$.overlay._setParentOverlay(i),i.theme?e.setAttribute("theme",i.theme):e.removeAttribute("theme"),r.style.minWidth="",document.documentElement.clientWidth-o.right>o.width?n=o.right:(n=o.left-o.width,r.style.minWidth=i.$.content.clientWidth+"px"),n=Math.max(n,0),t.dispatchEvent(new CustomEvent("opensubmenu",{detail:{x:n,y:s,children:t._item.children}}))}__itemsRenderer(e,t,n){this.__initMenu(e,t),e.querySelector(this.constructor.is).closeOn=t.closeOn;var o=e.querySelector("vaadin-context-menu-list-box");o.innerHTML="",Array.from(n.detail.children||t.items).forEach(e=>{var t;(t=e.component instanceof HTMLElement?e.component:document.createElement(e.component||"vaadin-context-menu-item"))instanceof c.a?(t.setAttribute("role","menuitem"),t.classList.add("vaadin-menu-item")):"hr"===t.localName&&t.setAttribute("role","separator"),this.theme&&t.setAttribute("theme",this.theme),t._item=e,e.text&&(t.textContent=e.text),this.__toggleMenuComponentAttribute(t,"menu-item-checked",e.checked),this.__toggleMenuComponentAttribute(t,"disabled",e.disabled),t.setAttribute("aria-haspopup","false"),t.classList.remove("vaadin-context-menu-parent-item"),e.children&&e.children.length&&(t.classList.add("vaadin-context-menu-parent-item"),t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded","false"),t.removeAttribute("expanded")),o.appendChild(t)})}__toggleMenuComponentAttribute(e,t,n){n?(e.setAttribute(t,""),e["__has-"+t]=!0):e["__has-"+t]&&(e.removeAttribute(t),e["__has-"+t]=!1)}__initMenu(e,t){if(e.firstElementChild){var n=e.querySelector("vaadin-context-menu-list-box");this.theme?n.setAttribute("theme",this.theme):n.removeAttribute("theme")}else{var o=this.constructor.is;e.innerHTML=`\n        <vaadin-context-menu-list-box></vaadin-context-menu-list-box>\n        <${o} hidden></${o}>\n      `,Object(h.b)();var r=e.querySelector("vaadin-context-menu-list-box");this.theme&&r.setAttribute("theme",this.theme),r.classList.add("vaadin-menu-list-box"),requestAnimationFrame(()=>r.setAttribute("role","menu"));var a=e.querySelector(o);a.$.overlay.modeless=!0,a.openOn="opensubmenu",t.addEventListener("opened-changed",e=>!e.detail.value&&a.close()),a.addEventListener("opened-changed",e=>{if(!e.detail.value){var t=r.querySelector("[expanded]");t&&(t.setAttribute("aria-expanded","false"),t.removeAttribute("expanded"))}}),r.addEventListener("selected-changed",e=>{if("number"==typeof e.detail.value){var n=e.target.items[e.detail.value]._item;if(!n.children){var o={value:n};t.dispatchEvent(new CustomEvent("item-selected",{detail:o}))}r.selected=null}}),a.addEventListener("item-selected",e=>{t.dispatchEvent(new CustomEvent("item-selected",{detail:e.detail}))}),a.addEventListener("close-all-menus",()=>{t.dispatchEvent(new CustomEvent("close-all-menus"))}),t.addEventListener("close-all-menus",t.close),t.addEventListener("item-selected",t.close),t.$.overlay.$.backdrop.addEventListener("click",()=>t.close()),t.$.overlay.addEventListener("keydown",e=>{var n=this.__isRTL;!n&&37===e.keyCode||n&&39===e.keyCode?(t.close(),t.listenOn.focus()):27===e.keyCode&&t.dispatchEvent(new CustomEvent("close-all-menus"))}),requestAnimationFrame(()=>this.__openListenerActive=!0);var i=(e,n=e.composedPath().filter(e=>"vaadin-context-menu-item"===e.localName)[0])=>{if(this.__openListenerActive)if(t.$.overlay.hasAttribute("opening"))requestAnimationFrame(()=>i(e,n));else if(n){if(a.items!==n._item.children&&a.close(),!t.opened)return;n._item.children&&n._item.children.length?(n.setAttribute("aria-expanded","true"),n.setAttribute("expanded",""),this.__openSubMenu(a,n)):a.listenOn.focus()}};t.$.overlay.addEventListener("mouseover",i),t.$.overlay.addEventListener("keydown",e=>{var t=this.__isRTL;(!t&&39===e.keyCode||t&&37===e.keyCode||13===e.keyCode||32===e.keyCode)&&i(e)})}}},p=n(33),b=n(107),g=(n(54),n(130)),_=document.createElement("template");_.innerHTML='<dom-module id="vaadin-context-menu-overlay-styles" theme-for="vaadin-context-menu-overlay">\n  <template>\n    <style>\n      :host {\n        align-items: flex-start;\n        justify-content: flex-start;\n      }\n\n      :host([right-aligned]),\n      :host([end-aligned]) {\n        align-items: flex-end;\n      }\n\n      :host([bottom-aligned]) {\n        justify-content: flex-end;\n      }\n\n      [part="overlay"] {\n        background-color: #fff;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(_.content);class v extends g.a{static get is(){return"vaadin-context-menu-overlay"}static get properties(){return{instanceProps:{type:Object,value:()=>({detail:!0,target:!0})},parentOverlay:{type:Object,readOnly:!0}}}static get observers(){return["_themeChanged(theme)"]}ready(){super.ready(),this.addEventListener("keydown",e=>{if(!e.defaultPrevented&&e.composedPath()[0]===this.$.overlay&&[38,40].indexOf(e.keyCode)>-1){var t=this.getFirstChild();t&&Array.isArray(t.items)&&t.items.length&&(e.preventDefault(),38===e.keyCode?t.items[t.items.length-1].focus():t.focus())}})}getFirstChild(){return this.content.querySelector(":not(style):not(slot)")}_themeChanged(e){this.close()}getBoundaries(){var e=this.getBoundingClientRect(),t=this.$.overlay.getBoundingClientRect(),n=e.bottom-t.height,o=this.parentOverlay;if(o&&o.hasAttribute("bottom-aligned")){var r=getComputedStyle(o);n=n-parseFloat(r.bottom)-parseFloat(r.height)}return{xMax:e.right-t.width,xMin:e.left+t.width,yMax:n,left:e.left,right:e.right,top:e.top,width:t.width}}}customElements.define(v.is,v);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class y extends(Object(p.a)(Object(b.a)(m(Object(r.a)(o.a))))){static get template(){return s.a`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none !important;
      }
    </style>

    <slot id="slot"></slot>

    <vaadin-device-detector phone="{{_phone}}" touch="{{_touch}}"></vaadin-device-detector>

    <vaadin-context-menu-overlay id="overlay" on-opened-changed="_onOverlayOpened" on-vaadin-overlay-open="_onVaadinOverlayOpen" with-backdrop="[[_phone]]" phone\$="[[_phone]]" model="[[_context]]" theme\$="[[theme]]">
    </vaadin-context-menu-overlay>
`}static get is(){return"vaadin-context-menu"}static get version(){return"4.5.0"}static get properties(){return{selector:{type:String},opened:{type:Boolean,value:!1,notify:!0,readOnly:!0},openOn:{type:String,value:"vaadin-contextmenu"},listenOn:{type:Object,value:function(){return this}},closeOn:{type:String,value:"click",observer:"_closeOnChanged"},renderer:{type:Function},_context:Object,_boundClose:Object,_boundOpen:Object,_contentTemplate:Object,_oldTemplate:Object,_oldRenderer:Object,_touch:Boolean}}static get observers(){return["_openedChanged(opened)","_contextChanged(_context, _instance)","_targetOrOpenOnChanged(listenOn, openOn)","_templateOrRendererChanged(_contentTemplate, renderer, _context, items)"]}constructor(){super(),this._boundOpen=this.open.bind(this),this._boundClose=this.close.bind(this),this._boundOnGlobalContextMenu=this._onGlobalContextMenu.bind(this)}connectedCallback(){super.connectedCallback(),this.__boundOnScroll=this.__onScroll.bind(this),window.addEventListener("scroll",this.__boundOnScroll,!0)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("scroll",this.__boundOnScroll,!0),this.close()}ready(){super.ready(),this._observer=new a.a(this,e=>{this._setTemplateFromNodes(e.addedNodes)})}_setTemplateFromNodes(e){this._contentTemplate=e.filter(e=>e.localName&&"template"===e.localName)[0]||this._contentTemplate}_onOverlayOpened(e){this._setOpened(e.detail.value),this.__alignOverlayPosition()}_onVaadinOverlayOpen(e){this.__alignOverlayPosition(),this.$.overlay.style.opacity="",this.__forwardFocus()}_targetOrOpenOnChanged(e,t){this._oldListenOn&&this._oldOpenOn&&(this._unlisten(this._oldListenOn,this._oldOpenOn,this._boundOpen),this._oldListenOn.style.webkitTouchCallout="",this._oldListenOn.style.webkitUserSelect="",this._oldListenOn.style.msUserSelect="",this._oldListenOn.style.userSelect="",this._oldListenOn=null,this._oldOpenOn=null),e&&t&&(this._listen(e,t,this._boundOpen),this._oldListenOn=e,this._oldOpenOn=t)}_setListenOnUserSelect(e){this.listenOn.style.webkitTouchCallout=e,this.listenOn.style.webkitUserSelect=e,this.listenOn.style.msUserSelect=e,this.listenOn.style.userSelect=e,document.getSelection().removeAllRanges()}_closeOnChanged(e,t){t&&(this._unlisten(this.$.overlay,t,this._boundClose),this._unlisten(this.$.overlay.root,t,this._boundClose)),e?(this._listen(this.$.overlay,e,this._boundClose),this._listen(this.$.overlay.root,e,this._boundClose),this._unlisten(this.$.overlay,"vaadin-overlay-outside-click",this._preventDefault)):this._listen(this.$.overlay,"vaadin-overlay-outside-click",this._preventDefault)}_preventDefault(e){e.preventDefault()}_openedChanged(e){e?(this._instance||(this.$.overlay.template=this.querySelector("template"),this._instance=this.$.overlay._instance),document.documentElement.addEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this._setListenOnUserSelect("none")):(document.documentElement.removeEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this._setListenOnUserSelect("")),this.$.overlay.opened=e}render(){this.$.overlay.render()}_removeNewRendererOrTemplate(e,t,n,o){e!==t?this._contentTemplate=void 0:n!==o&&(this.renderer=void 0)}_templateOrRendererChanged(e,t,n,o){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for context-menu content");if(this._oldTemplate=e,this._oldRenderer=t,o){if(e||t)throw new Error("The items API cannot be used together with a template/renderer");"click"===this.closeOn&&(this.closeOn=""),t=this.__itemsRenderer}t&&n&&this.$.overlay.setProperties({owner:this,renderer:t})}_contextChanged(e,t){void 0!==e&&void 0!==t&&(t.detail=e.detail,t.target=e.target)}close(){this._setOpened(!1)}_contextTarget(e){if(this.selector){var t=this.listenOn.querySelectorAll(this.selector);return Array.prototype.filter.call(t,t=>e.composedPath().indexOf(t)>-1)[0]}return e.target}open(e){e&&!this.opened&&(this._context={detail:e.detail,target:this._contextTarget(e)},this._context.target&&(this._preventDefault(e),e.stopPropagation(),this.__x=this._getEventCoordinate(e,"x"),this.__pageXOffset=window.pageXOffset,this.__y=this._getEventCoordinate(e,"y"),this.__pageYOffset=window.pageYOffset,this.$.overlay.style.opacity="0",this._setOpened(!0)))}__onScroll(){if(this.opened){var e=window.pageYOffset-this.__pageYOffset,t=window.pageXOffset-this.__pageXOffset;this.__adjustPosition("left",-t),this.__adjustPosition("right",t),this.__adjustPosition("top",-e),this.__adjustPosition("bottom",e),this.__pageYOffset+=e,this.__pageXOffset+=t}}__adjustPosition(e,t){var n=this.$.overlay.style;n[e]=(parseInt(n[e])||0)+t+"px"}__alignOverlayPosition(){var e=this.$.overlay,t=e.style;["top","right","bottom","left"].forEach(e=>t.removeProperty(e)),["right-aligned","end-aligned","bottom-aligned"].forEach(t=>e.removeAttribute(t));var n,{xMax:o,xMin:r,yMax:a,left:i,right:s,top:l,width:c}=e.getBoundaries(),d=this.__x||(this.__isRTL?s:i),h=this.__y||l,f=document.documentElement.clientWidth,u=document.documentElement.clientHeight,m=e.parentOverlay,p=!1;if(m)if(n=m.$.overlay.getBoundingClientRect(),m.hasAttribute("right-aligned")||m.hasAttribute("end-aligned")){var b=getComputedStyle(m),g=(e,t)=>parseFloat(getComputedStyle(e.$.content)["padding"+t]),_=parseFloat(b[this.__isRTL?"left":"right"])+n.width;f-(_-(g(m,"Left")+g(e,"Right")))>c&&(this._setEndAligned(e),t[this.__isRTL?"left":"right"]=_+"px",p=!0)}else d<n.x&&(d-=c-n.width);p||(this.__isRTL?(d>f/2||d>r)&&!m?t.right=Math.max(0,f-d)+"px":m&&n.left>=n.width?t.right=f-n.right+n.width+"px":m?(t.right="auto",t.left=Math.max(e.getBoundingClientRect().left-e.getBoundingClientRect().width,n.right)+"px",this._setEndAligned(e)):(t.left=d+"px",this._setEndAligned(e)):(d<f/2||d<o)&&!m?t.left=d+"px":m&&f-n.width-n.left>=n.width?t.left=n.left+n.width+"px":m?(t.right="auto",t.left=Math.max(e.getBoundingClientRect().left,n.left-e.getBoundingClientRect().width)+"px",this._setEndAligned(e)):(t.right=Math.max(0,f-d)+"px",this._setEndAligned(e))),h<u/2||h<a?t.top=h+"px":(t.bottom=Math.max(0,u-h)+"px",e.setAttribute("bottom-aligned",""))}_setEndAligned(e){e.setAttribute("end-aligned",""),this.__isRTL||e.setAttribute("right-aligned","")}_getEventCoordinate(e,t){if(!(e.detail instanceof Object)){var n="client"+t.toUpperCase(),o=e.changedTouches?e.changedTouches[0][n]:e[n];if(0===o){var r=e.target.getBoundingClientRect();return"x"===t?r.left:r.top+r.height}return o}return e.detail[t]?e.detail[t]:e.detail.sourceEvent?this._getEventCoordinate(e.detail.sourceEvent,t):void 0}_listen(e,t,n){i.gestures[t]?Object(i.addListener)(e,t,n):e.addEventListener(t,n)}_unlisten(e,t,n){i.gestures[t]?Object(i.removeListener)(e,t,n):e.removeEventListener(t,n)}_onGlobalContextMenu(e){e.shiftKey||(e.preventDefault(),this.close())}}customElements.define(y.is,y)},,function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var o=n(15),r=(n(73),n(23)),a=(n(107),n(75)),i=n(128),s=(n(174),n(33)),l=(n(54),n(130)),c=document.createElement("template");c.innerHTML='<dom-module id="vaadin-select-overlay-styles" theme-for="vaadin-select-overlay">\n  <template>\n    <style>\n      :host {\n        align-items: flex-start;\n        justify-content: flex-start;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(c.content);class d extends l.a{static get is(){return"vaadin-select-overlay"}}customElements.define(d.is,d);var h,f=n(148);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class u extends f.a{static get is(){return"vaadin-select-text-field"}static get template(){if(super.template.content.querySelector('slot[name="input"]'))return super.template;if(!h){h=super.template.cloneNode(!0);var e=document.createElement("slot");e.setAttribute("name","value");var t=h.content.querySelector("input");t.parentElement.replaceChild(e,t),e.appendChild(t)}return h}get focusElement(){return this.shadowRoot.querySelector("[part=input-field]")}get inputElement(){return this.shadowRoot.querySelector("input")}}customElements.define(u.is,u);var m=n(6),p=n(27),b=n(103),g=document.createElement("template");g.innerHTML="<custom-style>\n  <style>\n    @font-face {\n      font-family: \"vaadin-select-icons\";\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAASEAAsAAAAABDgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIGKmNtYXAAAAFoAAAAVAAAAFQXVtKHZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAHwAAAB8CohkJ2hlYWQAAAJAAAAANgAAADYOavgEaGhlYQAAAngAAAAkAAAAJAarA8ZobXR4AAACnAAAABQAAAAUCAABP2xvY2EAAAKwAAAADAAAAAwAKABSbWF4cAAAArwAAAAgAAAAIAAHABduYW1lAAAC3AAAAYYAAAGGmUoJ+3Bvc3QAAARkAAAAIAAAACAAAwAAAAMEAAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QADwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkA//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQE/AUAC6QIVABQAAAEwFx4BFxYxMDc+ATc2MTAjKgEjIgE/ISJPIiEhIk8iIUNCoEJDAhUhIk8iISEiTyIhAAEAAAABAABvL5bdXw889QALBAAAAAAA1jHaeQAAAADWMdp5AAAAAALpAhUAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAAukAAQAAAAAAAAAAAAAAAAAAAAUEAAAAAAAAAAAAAAAAAAAABAABPwAAAAAACgAUAB4APgABAAAABQAVAAEAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEABwAAAAEAAAAAAAIABwBgAAEAAAAAAAMABwA2AAEAAAAAAAQABwB1AAEAAAAAAAUACwAVAAEAAAAAAAYABwBLAAEAAAAAAAoAGgCKAAMAAQQJAAEADgAHAAMAAQQJAAIADgBnAAMAAQQJAAMADgA9AAMAAQQJAAQADgB8AAMAAQQJAAUAFgAgAAMAAQQJAAYADgBSAAMAAQQJAAoANACkaWNvbW9vbgBpAGMAbwBtAG8AbwBuVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwaWNvbW9vbgBpAGMAbwBtAG8AbwBuaWNvbW9vbgBpAGMAbwBtAG8AbwBuUmVndWxhcgBSAGUAZwB1AGwAYQByaWNvbW9vbgBpAGMAbwBtAG8AbwBuRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n</custom-style>",document.head.appendChild(g.content);class _ extends(Object(s.a)(Object(a.a)(Object(r.a)(Object(b.b)(i.a,o.a))))){static get template(){return m.a`
    <style>
      :host {
        display: inline-block;
      }

      vaadin-select-text-field {
        width: 100%;
        min-width: 0;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="toggle-button"] {
        font-family: "vaadin-select-icons";
      }

      [part="toggle-button"]::before {
        content: "\\e900";
      }
    </style>

    <vaadin-select-text-field placeholder="[[placeholder]]" label="[[label]]" required="[[required]]" invalid="[[invalid]]" error-message="[[errorMessage]]" readonly\$="[[readonly]]" helper-text="[[helperText]]" theme\$="[[theme]]">
      <slot name="prefix" slot="prefix"></slot>
      <slot name="helper" slot="helper">[[helperText]]</slot>
      <div part="value"></div>
      <div part="toggle-button" slot="suffix" role="button" aria-haspopup="listbox" aria-label="Toggle"></div>
    </vaadin-select-text-field>
    <vaadin-select-overlay opened="{{opened}}" with-backdrop="[[_phone]]" phone\$="[[_phone]]" theme\$="[[theme]]"></vaadin-select-overlay>

    <iron-media-query query="[[_phoneMediaQuery]]" query-matches="{{_phone}}"></iron-media-query>
`}static get is(){return"vaadin-select"}static get version(){return"2.4.0"}static get properties(){return{opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0,observer:"_openedChanged"},renderer:Function,errorMessage:{type:String,value:""},label:{type:String},value:{type:String,value:"",notify:!0,observer:"_valueChanged"},required:{type:Boolean,reflectToAttribute:!0,observer:"_requiredChanged"},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String},helperText:{type:String,value:""},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},_phone:Boolean,_phoneMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},_overlayElement:Object,_inputElement:Object,_toggleElement:Object,_items:Object,_contentTemplate:Object,_oldTemplate:Object,_oldRenderer:Object}}static get observers(){return["_updateSelectedItem(value, _items)","_updateAriaExpanded(opened, _toggleElement, _inputElement)","_templateOrRendererChanged(_contentTemplate, renderer, _overlayElement)"]}constructor(){super(),this._boundSetPosition=this._setPosition.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("iron-resize",this._boundSetPosition)}ready(){super.ready(),this._overlayElement=this.shadowRoot.querySelector("vaadin-select-overlay"),this._valueElement=this.shadowRoot.querySelector('[part="value"]'),this._toggleElement=this.shadowRoot.querySelector('[part="toggle-button"]'),this._nativeInput=this.focusElement.shadowRoot.querySelector("input"),this._nativeInput.setAttribute("aria-hidden",!0),this._nativeInput.setAttribute("tabindex",-1),this._nativeInput.style.pointerEvents="none",this.focusElement.addEventListener("click",e=>{var t=Array.from(e.composedPath()).some(e=>e.nodeType===Node.ELEMENT_NODE&&"helper"===e.getAttribute("slot"));this.opened=!this.readonly&&!t}),this.focusElement.addEventListener("keydown",e=>this._onKeyDown(e)),this._observer=new p.a(this,e=>this._setTemplateFromNodes(e.addedNodes)),this._observer.flush()}_setTemplateFromNodes(e){var t=Array.from(e).filter(e=>e.localName&&"template"===e.localName)[0]||this._contentTemplate;this._overlayElement.template=this._contentTemplate=t,this._setForwardHostProps()}_setForwardHostProps(){if(this._overlayElement.content){var e=this._overlayElement._instance&&this._overlayElement._instance.forwardHostProp;this._overlayElement._instance&&(this._overlayElement._instance.forwardHostProp=(...t)=>{e.apply(this._overlayElement._instance,t),setTimeout(()=>{this._updateValueSlot()})},this._assignMenuElement())}}render(){this._overlayElement.render(),this._menuElement&&this._menuElement.items&&this._updateSelectedItem(this.value,this._menuElement.items)}_removeNewRendererOrTemplate(e,t,n,o){e!==t?this._contentTemplate=void 0:n!==o&&(this.renderer=void 0)}_templateOrRendererChanged(e,t,n){if(n){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for select content");this._oldTemplate=e,this._oldRenderer=t,t&&(n.setProperties({owner:this,renderer:t}),this.render(),n.content.firstChild&&this._assignMenuElement())}}_assignMenuElement(){this._menuElement=Array.from(this._overlayElement.content.children).filter(e=>"style"!==e.localName)[0],this._menuElement&&(this._menuElement.addEventListener("items-changed",e=>{this._items=this._menuElement.items,this._items.forEach(e=>e.setAttribute("role","option"))}),this._menuElement.addEventListener("selected-changed",e=>this._updateValueSlot()),this._menuElement.addEventListener("keydown",e=>this._onKeyDownInside(e)),this._menuElement.addEventListener("click",e=>{this.__userInteraction=!0,this.opened=!1},!0),this._menuElement.setAttribute("role","listbox"))}get focusElement(){return this._inputElement||(this._inputElement=this.shadowRoot.querySelector("vaadin-select-text-field"))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("iron-resize",this._boundSetPosition),this.opened=!1}notifyResize(){super.notifyResize(),this.positionTarget&&this.opened&&(this._setPosition(),requestAnimationFrame(this._setPosition.bind(this)))}_requiredChanged(e){this.setAttribute("aria-required",e)}_valueChanged(e,t){""===e?this.focusElement.removeAttribute("has-value"):this.focusElement.setAttribute("has-value",""),""===e&&void 0===t||this.validate()}_onKeyDown(e){if(!this.readonly&&!this.opened)if(/^(Enter|SpaceBar|\s|ArrowDown|Down|ArrowUp|Up)$/.test(e.key))e.preventDefault(),this.opened=!0;else if(/[a-zA-Z0-9]/.test(e.key)&&1===e.key.length){var t=this._menuElement.selected,n=void 0!==t?t:-1,o=this._menuElement._searchKey(n,e.key);o>=0&&(this.__userInteraction=!0,this._updateSelectedItem(this._items[o].value,this._items))}}_onKeyDownInside(e){/^(Tab)$/.test(e.key)&&(this.opened=!1)}_openedChanged(e,t){if(e){if(!this._overlayElement||!this._menuElement||!this._toggleElement||!this.focusElement||this.disabled||this.readonly)return void(this.opened=!1);this._openedWithFocusRing=this.hasAttribute("focus-ring")||this.focusElement.hasAttribute("focus-ring"),this._menuElement.focus(),this._setPosition(),window.addEventListener("scroll",this._boundSetPosition,!0)}else t&&(this._phone?this._setFocused(!1):(this.focusElement.focus(),this._openedWithFocusRing&&this.focusElement.setAttribute("focus-ring","")),this.validate(),window.removeEventListener("scroll",this._boundSetPosition,!0))}_hasContent(e){return!!e&&Boolean(e.hasAttribute("label")?e.getAttribute("label"):e.textContent.trim()||e.children.length)}_attachSelectedItem(e){var t;e&&(e.hasAttribute("label")?(t=document.createElement("vaadin-item")).textContent=e.getAttribute("label"):t=e.cloneNode(!0),t._sourceItem=e,t.removeAttribute("tabindex"),t.removeAttribute("role"),this._valueElement.appendChild(t),t.selected=!0)}_updateAriaExpanded(e,t,n){t&&t.setAttribute("aria-expanded",e),n&&n.focusElement&&n.focusElement.setAttribute("aria-expanded",e)}_updateValueSlot(){this.opened=!1,this._valueElement.innerHTML="";var e=this._items[this._menuElement.selected],t=this._hasContent(e),n=this._inputElement.shadowRoot.querySelector('slot[name="input"]')?"input":"value";this._valueElement.slot=t?n:"",t&&window.ShadyDOM&&window.ShadyDOM.flush(),this._attachSelectedItem(e),!this._valueChanging&&e&&(this._selectedChanging=!0,this.value=e.value||"",this.__userInteraction&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.__userInteraction=!1),delete this._selectedChanging)}_updateSelectedItem(e,t){t&&(this._menuElement.selected=t.reduce((t,n,o)=>void 0===t&&n.value===e?o:t,void 0),this._selectedChanging||(this._valueChanging=!0,this._updateValueSlot(),delete this._valueChanging))}_setFocused(e){super._setFocused(this.opened||e),this.focusElement._setFocused(this.hasAttribute("focused")),!this.hasAttribute("focused")&&this.validate()}_setPosition(){var e=this._inputElement.shadowRoot.querySelector('[part~="input-field"]').getBoundingClientRect(),t=Math.min(window.innerHeight,document.documentElement.clientHeight),n=e.top>(t-e.height)/2;"rtl"===this.getAttribute("dir")?this._overlayElement.style.right=document.documentElement.clientWidth-e.right+"px":this._overlayElement.style.left=e.left+"px",n?(this._overlayElement.setAttribute("bottom-aligned",""),this._overlayElement.style.removeProperty("top"),this._overlayElement.style.bottom=t-e.bottom+"px"):(this._overlayElement.removeAttribute("bottom-aligned"),this._overlayElement.style.removeProperty("bottom"),this._overlayElement.style.top=e.top+"px"),this._overlayElement.updateStyles({"--vaadin-select-text-field-width":e.width+"px"})}validate(){return!(this.invalid=!(this.disabled||!this.required||this.value))}}customElements.define(_.is,_)},,function(e,t,n){"use strict";n(42),n(50),n(173),n(86),n(46),n(71),n(58);var o=n(6).a`<dom-module id="lumo-context-menu-overlay" theme-for="vaadin-context-menu-overlay">
  <template>
    <style include="lumo-menu-overlay">
      :host([phone]) {
        top: 0 !important;
        right: 0 !important;
        bottom: var(--vaadin-overlay-viewport-bottom) !important;
        left: 0 !important;
        align-items: stretch;
        justify-content: flex-end;
      }

    /* TODO These style overrides should not be needed.
       We should instead offer a way to have non-selectable items inside the context menu. */

      :host {
        --_lumo-list-box-item-selected-icon-display: none;
        --_lumo-list-box-item-padding-left: calc(var(--lumo-space-m) + var(--lumo-border-radius) / 4);
      }

      [part="overlay"] {
        outline: none;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-context-menu-list-box" theme-for="vaadin-context-menu-list-box">
  <template>
    <style>
      :host(.vaadin-menu-list-box) {
        --_lumo-list-box-item-selected-icon-display: block;
      }

      /* Normal item */

      [part="items"] ::slotted(.vaadin-menu-item) {
        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
        cursor: default;
      }

      [part="items"] ::slotted(.vaadin-menu-item) {
        outline: none;
        border-radius: var(--lumo-border-radius);
        padding-left: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius) / 4));
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
      }

      :host(.vaadin-menu-list-box) [part="items"] ::slotted(.vaadin-menu-item) {
        padding-left: calc(var(--lumo-border-radius) / 4);
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
      }

      /* Workaround to display checkmark in IE11 when list-box is not used in dropdown-menu */
      [part="items"] ::slotted(.vaadin-menu-item)::before {
        display: var(--_lumo-item-selected-icon-display);
      }

      /* Hovered item */
      /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */

      [part="items"] ::slotted(.vaadin-menu-item:hover:not([disabled])),
      [part="items"] ::slotted(.vaadin-menu-item[expanded]:not([disabled])) {
        background-color: var(--lumo-primary-color-10pct);
      }

      /* RTL styles */
      :host([dir="rtl"])[part="items"] ::slotted(.vaadin-menu-item) {
        padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
        padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius) / 4));
      }

      :host([dir="rtl"].vaadin-menu-list-box) [part="items"] ::slotted(.vaadin-menu-item) {
        padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
        padding-right: calc(var(--lumo-border-radius) / 4);
      }

      /* Focused item */

      @media (pointer: coarse) {
        [part="items"] ::slotted(.vaadin-menu-item:hover:not([expanded]):not([disabled])) {
          background-color: transparent;
        }
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-context-menu-item" theme-for="vaadin-context-menu-item">
  <template>
    <style>
      :host {
        user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
      }

      :host(.vaadin-menu-item[menu-item-checked])::before {
        opacity: 1;
      }

      :host(.vaadin-menu-item.vaadin-context-menu-parent-item)::after {
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-xs);
        content: var(--lumo-icons-angle-right);
        color: var(--lumo-tertiary-text-color);
      }

      :host(:not([dir="rtl"]).vaadin-menu-item.vaadin-context-menu-parent-item)::after {
        margin-right: calc(var(--lumo-space-m) * -1);
        padding-left: var(--lumo-space-m);
      }

      :host([expanded]) {
        background-color: var(--lumo-primary-color-10pct);
      }

      /* RTL styles */
      :host([dir="rtl"].vaadin-menu-item.vaadin-context-menu-parent-item)::after {
        content: var(--lumo-icons-angle-left);
        margin-left: calc(var(--lumo-space-m) * -1);
        padding-right: var(--lumo-space-m);
      }

    </style>
  </template>
</dom-module>`;document.head.appendChild(o.content);n(170),n(178),n(234)},function(e,t,n){"use strict";n(46);var o=n(6).a`<dom-module id="lumo-grid-sorter" theme-for="vaadin-grid-sorter">
  <template>
    <style>
      :host {
        justify-content: flex-start;
        align-items: baseline;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="content"] {
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      [part="indicators"] {
        margin-left: var(--lumo-space-s);
      }

      :host(:not([direction])) [part="indicators"]::before {
        opacity: 0.2;
      }

      :host([direction]) {
        color: var(--lumo-primary-text-color);
      }

      [part="order"] {
        font-size: var(--lumo-font-size-xxs);
        line-height: 1;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="indicators"] {
        margin-right: var(--lumo-space-s);
        margin-left: 0;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(o.content);n(213)},function(e,t,n){"use strict";n(71),n(42),n(50),n(86),n(173),n(168),n(150),n(170),n(178);var o=n(6).a`<dom-module id="lumo-select" theme-for="vaadin-select">
  <template>
    <style include="lumo-field-button">
      :host {
        outline: none;
        -webkit-tap-highlight-color: transparent;
      }

      [selected] {
        padding-left: 0;
        padding-right: 0;
        flex: auto;
      }

      :host([theme~="small"]) [selected] {
        padding: 0;
        min-height: var(--lumo-size-s);
      }

      :host([theme~="align-left"]) [selected] {
        text-align: left;
      }

      :host([theme~="align-right"]) [selected] {
        text-align: right;
      }

      :host([theme~="align-center"]) [selected] {
        text-align: center;
      }

      [part="toggle-button"]::before {
        content: var(--lumo-icons-dropdown);
      }

      /* Highlight the toggle button when hovering over the entire component */
      :host(:hover:not([readonly]):not([disabled])) [part="toggle-button"] {
        color: var(--lumo-contrast-80pct);
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-select-text-field" theme-for="vaadin-select-text-field">
  <template>
    <style>
      :host([theme~="align-center"]) ::slotted([part~="value"]) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }

      :host([theme~="align-center"]) ::slotted([part~="value"]) {
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-right"]) ::slotted([part~="value"]) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }

      [part="input-field"] {
        cursor: default;
      }

      [part="input-field"] ::slotted([part="value"]) {
        display: flex;
      }

      /* ShadyCSS limitation workaround */
      [part="input-field"] ::slotted([part="value"]) [selected]::before {
        display: none;
      }

      [part="input-field"]:focus {
        outline: none;
      }

      /* RTL specific styles */

      :host([theme~="align-left"][dir="rtl"]) ::slotted([part~="value"]) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }

      :host([theme~="align-center"][dir="rtl"]) ::slotted([part~="value"]) {
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([dir="rtl"]) ::slotted([part~="value"]),
      :host([theme~="align-right"][dir="rtl"]) ::slotted([part~="value"]) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-select-overlay" theme-for="vaadin-select-overlay">
  <template>
    <style include="lumo-menu-overlay">
      :host {
        --_lumo-item-selected-icon-display: block;
      }

      :host([bottom-aligned]) {
        justify-content: flex-end;
      }

      [part~="overlay"] {
        min-width: var(--vaadin-select-text-field-width);
      }

      /* Small viewport adjustment */
      :host([phone]) {
        top: 0 !important;
        right: 0 !important;
        bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
        left: 0 !important;
        align-items: stretch;
        justify-content: flex-end;
      }

      :host([theme~="align-left"]) {
        text-align: left;
      }

      :host([theme~="align-right"]) {
        text-align: right;
      }

      :host([theme~="align-center"]) {
        text-align: center;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(o.content);n(236)},,,,function(e,t){!function(){"use strict";if(!("adoptedStyleSheets"in document)){var e="ShadyCSS"in window&&!window.ShadyCSS.nativeShadow,t=[],n=[],o=[],r=new WeakMap,a=new WeakMap,i=new WeakMap,s=new WeakMap,l=new WeakMap,c=new WeakMap,d={loaded:!1},h={body:null,CSSStyleSheet:null},f=CSSStyleSheet,u=/@import/,m=function(){function e(){var e=document.createElement("style");d.loaded?h.body.appendChild(e):(document.head.appendChild(e),e.disabled=!0,t.push(e)),a.set(this,{adopters:new Map,actions:[],basicStyleElement:e})}var n,o,r,i=e.prototype;return i.replace=function(e){var t=_(e);try{if(!a.has(this))throw new TypeError("Illegal invocation");return a.get(this).basicStyleElement.innerHTML=t,y(this),Promise.resolve(this)}catch(e){return Promise.reject(e)}},i.replaceSync=function(e){var t=_(e);if(!a.has(this))throw new TypeError("Illegal invocation");return a.get(this).basicStyleElement.innerHTML=t,y(this),this},n=e,(o=[{key:"cssRules",get:function(){if(!a.has(this))throw new TypeError("Illegal invocation");return a.get(this).basicStyleElement.sheet.cssRules}}])&&p(n.prototype,o),r&&p(n,r),e}();["addImport","addPageRule","addRule","deleteRule","insertRule","removeImport","removeRule"].forEach((function(e){m.prototype[e]=function(){if(!a.has(this))throw new TypeError("Illegal invocation");var t=arguments,n=a.get(this),o=n.adopters,r=n.actions,i=n.basicStyleElement,s=i.sheet[e].apply(i.sheet,t);return o.forEach((function(n){n.sheet&&n.sheet[e].apply(n.sheet,t)})),r.push([e,t]),s}})),Object.defineProperty(m,Symbol.hasInstance,{configurable:!0,value:w}),v(f.prototype),window.CSSStyleSheet=m,function(){var t={configurable:!0,get:function(){return r.get(this)||[]},set:function(e){var t=r.get(this)||[];!function(e,t){var n=t===document?"Document":"ShadowRoot";if(!Array.isArray(e))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+n+": Iterator getter is not callable.");if(!e.every(w))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+n+": Failed to convert value to 'CSSStyleSheet'");var o=e.filter((function(t,n){return e.indexOf(t)===n}));r.set(t,o)}(e,this);var n=this===document?b()?this.head:this.body:this;("isConnected"in n?n.isConnected:document.body.contains(n))?window.requestAnimationFrame((function(){A(n),function(e,t){for(var n=g(e),o=0,r=t.length;o<r;o++)if(!(n.indexOf(t[o])>-1)){var i=a.get(t[o]).adopters,s=l.get(e),c=i.get(e);c||(c=i.get(document.head)),s.disconnect(),c.parentNode.removeChild(c),s.observe()}}(n,t)})):o.push(n)}};if(Object.defineProperty(Document.prototype,"adoptedStyleSheets",t),"undefined"!=typeof ShadowRoot){var n=Element.prototype.attachShadow;Element.prototype.attachShadow=function(){var t=e?this:n.apply(this,arguments);return s.set(this,t),C(t),t},Object.defineProperty(ShadowRoot.prototype,"adoptedStyleSheets",t)}}(),b()?document.addEventListener("DOMContentLoaded",S):S()}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(){return"loading"===document.readyState}function g(e){return r.get(e.parentNode===document.documentElement?document:e)}function _(e){void 0===e&&(e="");var t=e.match(u)||[],n=e;return t.length&&(console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),t.forEach((function(e){n=n.replace(e,"")}))),n}function v(e){e.replace=function(){return Promise.reject(new DOMException("Can't call replace on non-constructed CSSStyleSheets."))},e.replaceSync=function(){throw new DOMException("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")}}function y(e){var t=a.get(e),n=t.adopters,o=t.basicStyleElement;n.forEach((function(e){e.innerHTML=o.innerHTML}))}function w(e){return e&&e.constructor===m||e instanceof f||e instanceof h.CSSStyleSheet}function A(e){for(var t=document.createDocumentFragment(),o=g(e),r=l.get(e),s=0,d=o.length;s<d;s++){var h=a.get(o[s]),f=h.adopters,u=h.basicStyleElement,m=f.get(e);m?(r.disconnect(),t.appendChild(m),(!m.innerHTML||m.sheet&&!m.sheet.cssText)&&(m.innerHTML=u.innerHTML),r.observe()):((m=document.createElement("style")).innerHTML=u.innerHTML,i.set(m,e),c.set(m,0),f.set(e,m),t.appendChild(m)),e===document.head&&n.push(m)}e.insertBefore(t,e.lastChild);for(var p=0,b=o.length;p<b;p++){var _=a.get(o[p]),v=_.adopters,y=_.actions,w=v.get(e),A=c.get(w);if(y.length>0){for(var x=A,C=y.length;x<C;x++){var S=y[x],E=S[0],k=S[1];w.sheet[E].apply(w.sheet,k)}c.set(w,y.length-1)}}}function x(t){if(document)for(var n=0,o=t.length;n<o;n++){for(var r=t[n],a=r.addedNodes,l=r.removedNodes,c=0,d=l.length;c<d;c++){var h=i.get(l[c]);h&&A(h)}if(!e)for(var f=0,u=a.length;f<u;f++)for(var m=document.createNodeIterator(a[f],NodeFilter.SHOW_ELEMENT,(function(e){var t=s.get(e);return t&&t.adoptedStyleSheets.length>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}),null,!1),p=void 0;p=m.nextNode();)A(s.get(p))}}function C(e){var t=new MutationObserver(x),n={observe:function(){t.observe(e,{childList:!0,subtree:!0})},disconnect:function(){t.disconnect()}};l.set(e,n),n.observe()}function S(){var e=document.createElement("iframe");e.hidden=!0,document.body.appendChild(e),h.body=e.contentWindow.document.body,h.CSSStyleSheet=e.contentWindow.CSSStyleSheet,v(e.contentWindow.CSSStyleSheet.prototype),C(document.body),d.loaded=!0;for(var r=document.createDocumentFragment(),a=0,i=t.length;a<i;a++)t[a].disabled=!1,r.appendChild(t[a]);h.body.appendChild(r);for(var s=0,l=n.length;s<l;s++)r.appendChild(n[s]);document.body.insertBefore(r,document.body.firstChild);for(var c=0,f=o.length;c<f;c++)A(o[c]);o.length=0,t.length=0,n.length=0}}()},function(e,t){var n;n=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Select","vaadin-select-flow")},window.Vaadin.Flow.selectConnector={initLazy:e=>n((function(e){var t=n((function(){for(var t=0;t<e.childElementCount;t++){var n=e.children[t];if("VAADIN-LIST-BOX"===n.tagName.toUpperCase())return n}}));e.$connector||(e.$connector={},e.renderer=n((function(e){var n=t();n&&(e.firstChild&&e.removeChild(e.firstChild),e.appendChild(n))})))}))(e)}},,,,,,,,,function(e,t,n){"use strict";n.r(t);n(244);var o=n(54),r=n(99),a=n(109),i=(n(58),n(46),n(42),n(50),document.createElement("template"));i.innerHTML='<dom-module id="lumo-badge">\n  <template>\n    <style>\n      [theme~="badge"] {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        box-sizing: border-box;\n        padding: 0.4em calc(0.5em + var(--lumo-border-radius-s) / 4);\n        color: var(--lumo-primary-text-color);\n        background-color: var(--lumo-primary-color-10pct);\n        border-radius: var(--lumo-border-radius-s);\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-s);\n        line-height: 1;\n        font-weight: 500;\n        text-transform: initial;\n        letter-spacing: initial;\n        min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);\n      }\n\n      /* Ensure proper vertical alignment */\n      [theme~="badge"]::before {\n        display: inline-block;\n        content: "\\2003";\n        width: 0;\n      }\n\n      [theme~="badge"][theme~="small"] {\n        font-size: var(--lumo-font-size-xxs);\n        line-height: 1;\n      }\n\n      /* Colors */\n\n      [theme~="badge"][theme~="success"] {\n        color: var(--lumo-success-text-color);\n        background-color: var(--lumo-success-color-10pct);\n      }\n\n      [theme~="badge"][theme~="error"] {\n        color: var(--lumo-error-text-color);\n        background-color: var(--lumo-error-color-10pct);\n      }\n\n      [theme~="badge"][theme~="contrast"] {\n        color: var(--lumo-contrast-80pct);\n        background-color: var(--lumo-contrast-5pct);\n      }\n\n      /* Primary */\n\n      [theme~="badge"][theme~="primary"] {\n        color: var(--lumo-primary-contrast-color);\n        background-color: var(--lumo-primary-color);\n      }\n\n      [theme~="badge"][theme~="success"][theme~="primary"] {\n        color: var(--lumo-success-contrast-color);\n        background-color: var(--lumo-success-color);\n      }\n\n      [theme~="badge"][theme~="error"][theme~="primary"] {\n        color: var(--lumo-error-contrast-color);\n        background-color: var(--lumo-error-color);\n      }\n\n      [theme~="badge"][theme~="contrast"][theme~="primary"] {\n        color: var(--lumo-base-color);\n        background-color: var(--lumo-contrast);\n      }\n\n      /* Links */\n\n      [theme~="badge"][href]:hover {\n        text-decoration: none;\n      }\n\n      /* Icon */\n\n      [theme~="badge"] iron-icon {\n        margin: -0.25em 0;\n        --iron-icon-width: 1.5em;\n        --iron-icon-height: 1.5em;\n      }\n\n      [theme~="badge"] iron-icon:first-child {\n        margin-left: -0.375em;\n      }\n\n      [theme~="badge"] iron-icon:last-child {\n        margin-right: -0.375em;\n      }\n\n      [theme~="badge"][icon] {\n        min-width: 0;\n        padding: 0;\n        font-size: 1rem;\n        --iron-icon-width: var(--lumo-icon-size-m);\n        --iron-icon-height: var(--lumo-icon-size-m);\n      }\n\n      [theme~="badge"][icon][theme~="small"] {\n        --iron-icon-width: var(--lumo-icon-size-s);\n        --iron-icon-height: var(--lumo-icon-size-s);\n      }\n\n      /* Empty */\n\n      [theme~="badge"]:not([icon]):empty {\n        min-width: 0;\n        width: 1em;\n        height: 1em;\n        padding: 0;\n        border-radius: 50%;\n        background-color: var(--lumo-primary-color);\n      }\n\n      [theme~="badge"][theme~="small"]:not([icon]):empty {\n        width: 0.75em;\n        height: 0.75em;\n      }\n\n      [theme~="badge"][theme~="contrast"]:not([icon]):empty {\n        background-color: var(--lumo-contrast);\n      }\n\n      [theme~="badge"][theme~="success"]:not([icon]):empty {\n        background-color: var(--lumo-success-color);\n      }\n\n      [theme~="badge"][theme~="error"]:not([icon]):empty {\n        background-color: var(--lumo-error-color);\n      }\n\n      /* Pill */\n\n      [theme~="badge"][theme~="pill"] {\n        --lumo-border-radius-s: 1em;\n      }\n\n      /* RTL specific styles */\n\n      [dir="rtl"][theme~="badge"] iron-icon:first-child {\n        margin-right: -0.375em;\n        margin-left: 0;\n      }\n\n      [dir="rtl"][theme~="badge"] iron-icon:last-child {\n        margin-left: -0.375em;\n        margin-right: 0;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(i.content);var s=(e,t,n)=>{if(t===document){var o=(a=d(r=e))+d(a+r);if(-1!==window.Vaadin.theme.injectedGlobalCss.indexOf(o))return;window.Vaadin.theme.injectedGlobalCss.push(o)}var r,a,i=new CSSStyleSheet;i.replaceSync(((e,t)=>{for(var n,o=/(?:@media\s(.+?))?(?:\s{)?\@import\surl\((.+?)\);(?:})?/g,r=e;null!==(n=o.exec(e));){r=r.replace(n[0],"");var a=document.createElement("link");a.rel="stylesheet",a.href=n[2],n[1]&&(a.media=n[1]),t===document?document.head.appendChild(a):t.appendChild(a)}return r})(e,t)),t.adoptedStyleSheets=n?[i,...t.adoptedStyleSheets]:[...t.adoptedStyleSheets,i]},l=(e,t)=>{!function(e,t=!1){var n=document.createElement("template");n.innerHTML=e,document.head[t?"insertBefore":"appendChild"](n.content,document.head.firstChild)}(`<custom-style><style include="${e}"></style></custom-style>`,!0)},c=e=>{var t=o.a.import(e,"template");return t&&Object(r.c)(t,"").map(e=>e.textContent).join(" ")};function d(e){var t,n,o=2166136261;for(t=0,n=e.length;t<n;t++)o^=e.charCodeAt(t),o+=(o<<1)+(o<<4)+(o<<7)+(o<<8)+(o<<24);return("0000000"+(o>>>0).toString(16)).substr(-8)}window.Vaadin=window.Vaadin||{},window.Vaadin.theme=window.Vaadin.theme||{},window.Vaadin.theme.injectedGlobalCss=[];var h=e=>{s(a.a.toString(),e),document._vaadintheme_opbpoizvedbe_componentCss||(document._vaadintheme_opbpoizvedbe_componentCss=!0),e instanceof ShadowRoot?(s(c("lumo-typography"),e,!0),s(c("lumo-color"),e,!0),s(c("lumo-spacing"),e,!0),s(c("lumo-badge"),e,!0)):document._vaadinthemelumoimports_||(l("lumo-typography"),l("lumo-color"),l("lumo-spacing"),l("lumo-badge"),document._vaadinthemelumoimports_=!0)},f=n(48),u=n(31);n(180);window.Vaadin.Flow.Legacy.GestureEventListeners=f.a,window.Vaadin.Flow.Legacy.Gestures=u;n(181),n(36);var m=n(6),p=n(13),b=n(9),g=n(15);class _ extends g.a{static get template(){return m.a`
    <style>
      @keyframes flow-component-renderer-appear {
        to {
          opacity: 1;
        }
      }
      :host {
        animation: 1ms flow-component-renderer-appear;
      }
    </style>
    <slot></slot>
`}static get is(){return"flow-component-renderer"}static get properties(){return{nodeid:Number,appid:String}}static get observers(){return["_attachRenderedComponentIfAble(appid, nodeid)"]}connectedCallback(){super.connectedCallback(),this._runChrome72ShadowDomBugWorkaround()}_runChrome72ShadowDomBugWorkaround(){var e=navigator.userAgent;if(e&&e.match("Chrome/")){var t=e.split("Chrome/")[1].split(".")[0];if(t&&parseInt(t)>71){var n=this._getDebouncedNotifyResizeFunction();n&&(this.style.visibility="hidden",requestAnimationFrame(()=>{this.style.visibility="",n()}))}}}_getDebouncedNotifyResizeFunction(){for(var e=this.parentElement;;){if(!e)return;if(e.notifyResize)break;e=e.parentElement}return e._debouncedNotifyResize||(e._debouncedNotifyResize=function(){e.__debouncedNotifyResize=p.a.debounce(e.__debouncedNotifyResize,b.a,e.notifyResize)}),e._debouncedNotifyResize}ready(){super.ready(),this.addEventListener("click",(function(e){this.firstChild&&"function"==typeof this.firstChild.click&&e.target===this&&(e.stopPropagation(),this.firstChild.click())})),this.addEventListener("animationend",this._onAnimationEnd)}_asyncAttachRenderedComponentIfAble(){this._debouncer=p.a.debounce(this._debouncer,b.b,()=>this._attachRenderedComponentIfAble())}_attachRenderedComponentIfAble(){if(this.nodeid&&this.appid){var e=this._getRenderedComponent();this.firstChild?e?this.firstChild!==e?(this.replaceChild(e,this.firstChild),this._defineFocusTarget(),this.onComponentRendered()):(this._defineFocusTarget(),this.onComponentRendered()):(this._clear(),this._asyncAttachRenderedComponentIfAble()):e?(this.appendChild(e),this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble()}}_getRenderedComponent(){try{return window.Vaadin.Flow.clients[this.appid].getByNodeId(this.nodeid)}catch(e){console.error("Could not get node %s from app %s",this.nodeid,this.appid),console.error(e)}return null}_clear(){for(;this.firstChild;)this.removeChild(this.firstChild)}onComponentRendered(){}_defineFocusTarget(){var e=this._getFirstFocusableDescendant(this.firstChild);null!==e&&e.setAttribute("focus-target","true")}_getFirstFocusableDescendant(e){if(this._isFocusable(e))return e;if(!e.children)return null;for(var t=0;t<e.children.length;t++){var n=this._getFirstFocusableDescendant(e.children[t]);if(null!==n)return n}return null}_isFocusable(e){return(!e.hasAttribute||"function"!=typeof e.hasAttribute||!e.hasAttribute("disabled")&&!e.hasAttribute("hidden"))&&0===e.tabIndex}_onAnimationEnd(e){0===e.animationName.indexOf("flow-component-renderer-appear")&&this._attachRenderedComponentIfAble()}}window.customElements.define(_.is,_);var v=n(156),y=n(138);n(184);window.Vaadin.Flow.Legacy.Debouncer=p.a,window.Vaadin.Flow.Legacy.timeOut=b.d,window.Vaadin.Flow.Legacy.animationFrame=b.a,window.Vaadin.Flow.Legacy.GridElement=v.a,window.Vaadin.Flow.Legacy.ItemCache=y.b;var w=n(88);{class e extends w.b{static get template(){return m.a`
    <template class="header" id="defaultHeaderTemplate">
      <vaadin-checkbox id="selectAllCheckbox" aria-label="Select All" hidden\$="[[selectAllHidden]]" on-click="_onSelectAllClick" checked="[[selectAll]]">
      </vaadin-checkbox>
    </template>
    <template id="defaultBodyTemplate">
      <vaadin-checkbox aria-label="Select Row" checked="[[selected]]" on-click="_onSelectClick">
      </vaadin-checkbox>
    </template>
`}static get is(){return"vaadin-grid-flow-selection-column"}static get properties(){return{autoWidth:{type:Boolean,value:!0},width:{type:String,value:"56px"},flexGrow:{type:Number,value:0},selectAll:{type:Boolean,value:!1,notify:!0},selectAllHidden:Boolean}}constructor(){super(),this._boundOnSelectEvent=this._onSelectEvent.bind(this),this._boundOnDeselectEvent=this._onDeselectEvent.bind(this)}_prepareHeaderTemplate(){return this._prepareTemplatizer(this.$.defaultHeaderTemplate)}_prepareBodyTemplate(){return this._prepareTemplatizer(this.$.defaultBodyTemplate)}connectedCallback(){super.connectedCallback(),this._grid&&(this._grid.addEventListener("select",this._boundOnSelectEvent),this._grid.addEventListener("deselect",this._boundOnDeselectEvent))}disconnectedCallback(){if((super.disconnectedCallback(),this._grid)&&(this._grid.removeEventListener("select",this._boundOnSelectEvent),this._grid.removeEventListener("deselect",this._boundOnDeselectEvent),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&window.ShadyDOM&&this.parentElement)){var e=this.parentElement,t=this.nextElementSibling;e.removeChild(this),t?e.insertBefore(this,t):e.appendChild(this)}}_onSelectClick(e){e.target.checked?this._grid.$connector.doDeselection([e.model.item],!0):this._grid.$connector.doSelection([e.model.item],!0),e.target.checked=!e.target.checked}_onSelectAllClick(e){e.preventDefault(),this._grid.hasAttribute("disabled")?e.target.checked=!e.target.checked:this.selectAll?this.$server.deselectAll():this.$server.selectAll()}_onSelectEvent(e){}_onDeselectEvent(e){e.detail.userOriginated&&(this.selectAll=!1)}}customElements.define(e.is,e),Vaadin.GridFlowSelectionColumnElement=e}var A=m.a`<dom-module id="lumo-app-layout" theme-for="vaadin-app-layout">
  <template>
    <style>
      [part="navbar"]::before {
        background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      }

      :host(:not([dir='rtl']):not([overlay])) [part='drawer'] {
        border-right: 1px solid var(--lumo-contrast-10pct);
      }

      :host([dir='rtl']:not([overlay])) [part='drawer'] {
        border-left: 1px solid var(--lumo-contrast-10pct);
      }

      :host([overlay]) [part="drawer"]::before {
        background: var(--lumo-base-color);
      }

      [part="navbar"]::before,
      :host([overlay]) [part="drawer"]::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        z-index: -1;
      }

      :host([overlay]) [part='drawer']::before {
        background: var(--lumo-base-color);
        height: var(--_vaadin-app-layout-drawer-scroll-size, 100%);
      }

      [part="backdrop"] {
        background-color: var(--lumo-shade-20pct);
        opacity: 1;
      }

      [part] ::slotted(h2),
      [part] ::slotted(h3),
      [part] ::slotted(h4) {
        margin-top: var(--lumo-space-xs) !important;
        margin-bottom: var(--lumo-space-xs) !important;
      }

      @supports (-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)) {
        [part="navbar"]::before {
          opacity: 0.8;
        }

        [part="navbar"] {
          -webkit-backdrop-filter: blur(24px);
          backdrop-filter: blur(24px);
        }

        :host([overlay]) [part="drawer"]::before {
          opacity: 0.9;
        }

        :host([overlay]) [part="drawer"] {
          -webkit-backdrop-filter: blur(24px);
          backdrop-filter: blur(24px);
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(A.content);n(73);var x=document.createElement("template");x.innerHTML="<custom-style>\n  <style>\n    /* stylelint-disable length-zero-no-unit */\n    /* Use units so that the values can be used in calc() */\n    html {\n      --safe-area-inset-top: constant(safe-area-inset-top, 0px);\n      --safe-area-inset-right: constant(safe-area-inset-right, 0px);\n      --safe-area-inset-bottom: constant(safe-area-inset-bottom, 0px);\n      --safe-area-inset-left: constant(safe-area-inset-left, 0px);\n    }\n\n    @supports (padding-left: env(safe-area-inset-left)) {\n      html {\n        --safe-area-inset-top: env(safe-area-inset-top, 0px);\n        --safe-area-inset-right: env(safe-area-inset-right, 0px);\n        --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);\n        --safe-area-inset-left: env(safe-area-inset-left, 0px);\n      }\n    }\n    /* stylelint-enable */\n  </style>\n</custom-style>",document.head.appendChild(x.content);var C=function(){if(window.navigator.userAgent.match(/iPhone|iPad/i)){var e=window.innerHeight,t=window.innerWidth>e,n=document.documentElement.clientHeight;t&&n>e?document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom",n-e+"px"):document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom","")}};C(),window.addEventListener("resize",C);var S=n(63),E=n(23),k=n(33),O=n(27);
/**
@license
Vaadin App Layout
Copyright (C) 2019 Vaadin Ltd
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class L extends(Object(k.a)(Object(E.a)(g.a))){static get template(){return m.a`
    <style>
      :host {
        display: block;
        box-sizing: border-box;
        height: 100%;
        --vaadin-app-layout-transition: 200ms;
        transition: padding var(--vaadin-app-layout-transition);
        --vaadin-app-layout-touch-optimized: false;
        --vaadin-app-layout-navbar-offset-top: var(--_vaadin-app-layout-navbar-offset-size);
        --vaadin-app-layout-navbar-offset-bottom: var(--_vaadin-app-layout-navbar-offset-size-bottom);
        padding-top: var(--vaadin-app-layout-navbar-offset-top);
        padding-bottom: var(--vaadin-app-layout-navbar-offset-bottom);
        padding-left: var(--vaadin-app-layout-navbar-offset-left);
      }

      :host([dir="rtl"]) {
        padding-left: 0;
        padding-right: var(--vaadin-app-layout-navbar-offset-left);
      }

      :host([hidden]),
      [hidden] {
        display: none !important;
      }

      :host([no-anim]) {
        --vaadin-app-layout-transition: none !important;
      }

      :host([drawer-opened]) {
        --vaadin-app-layout-drawer-offset-left: var(--_vaadin-app-layout-drawer-offset-size);
      }

      :host([overlay]) {
        --vaadin-app-layout-drawer-offset-left: 0;
        --vaadin-app-layout-navbar-offset-left: 0;
      }

      :host(:not([no-scroll])) [content] {
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }

      [content] {
        height: 100%;
      }

      @media (pointer: coarse) and (max-width: 800px) and (min-height: 500px) {
        :host {
          --vaadin-app-layout-touch-optimized: true;
        }
      }

      [part="navbar"],
      [part="navbar"]::before {
        position: fixed;
        display: flex;
        align-items: center;
        top: 0;
        right: 0;
        left: 0;
        transition: left var(--vaadin-app-layout-transition);
        padding-top: var(--safe-area-inset-top);
        padding-left: var(--safe-area-inset-left);
        padding-right: var(--safe-area-inset-right);
        z-index: 1;
      }

      :host(:not([dir="rtl"])[primary-section="drawer"][drawer-opened]:not([overlay])) [part="navbar"] {
        left: var(--vaadin-app-layout-drawer-offset-left, 0);
      }

      :host([dir="rtl"][primary-section="drawer"][drawer-opened]:not([overlay])) [part="navbar"] {
        right: var(--vaadin-app-layout-drawer-offset-left, 0);
      }

      :host([primary-section="drawer"]) [part="drawer"] {
        top: 0;
      }

      [part="navbar"][bottom] {
        top: auto;
        bottom: 0;
        padding-bottom: var(--safe-area-inset-bottom);
      }

      [part="drawer"] {
        overflow: auto;
        position: fixed;
        top: var(--vaadin-app-layout-navbar-offset-top, 0);
        right: auto;
        bottom: var(--vaadin-app-layout-navbar-offset-bottom, var(--vaadin-viewport-offset-bottom, 0));
        left: var(--vaadin-app-layout-navbar-offset-left, 0);
        transition: transform var(--vaadin-app-layout-transition);
        transform: translateX(-100%);
        max-width: 90%;
        width: 16em;
        box-sizing: border-box;
        padding: var(--safe-area-inset-top) 0 var(--safe-area-inset-bottom) var(--safe-area-inset-left);
        outline: none;
      }

      :host([drawer-opened]) [part="drawer"] {
        transform: translateX(0%);
        touch-action: manipulation;
      }

      [part="backdrop"] {
        background-color: #000;
        opacity: 0.3;
      }

      :host(:not([drawer-opened])) [part="backdrop"] {
        opacity: 0;
      }

      :host([overlay]) [part="backdrop"] {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        transition: opacity var(--vaadin-app-layout-transition);
        -webkit-tap-highlight-color: transparent;
      }

      :host([overlay]) [part="drawer"] {
        top: 0;
        bottom: 0;
      }

      :host([overlay]) [part="drawer"],
      :host([overlay]) [part="backdrop"] {
        z-index: 2;
      }

      :host([drawer-opened][overlay]) [part="backdrop"] {
        pointer-events: auto;
        touch-action: manipulation;
      }

      :host([dir="rtl"]) [part="drawer"] {
        left: auto;
        right: var(--vaadin-app-layout-navbar-offset-start, 0);
        transform: translateX(100%);
      }

      :host([dir="rtl"]) [part="navbar"],
      :host([dir="rtl"]) [part="navbar"]::before {
        transition: right var(--vaadin-app-layout-transition);
      }

      :host([dir="rtl"][drawer-opened]) [part='drawer'] {
        transform: translateX(0%);
      }

      :host(:not([dir="rtl"])[drawer-opened]:not([overlay])) {
        padding-left: var(--vaadin-app-layout-drawer-offset-left);
      }

      :host([dir="rtl"][drawer-opened]:not([overlay])) {
        padding-right: var(--vaadin-app-layout-drawer-offset-left);
      }

      @media (max-width: 800px),
      (max-height: 600px) {
        :host {
          --vaadin-app-layout-drawer-overlay: true;
        }

        [part="drawer"] {
          width: 20em;
        }
      }
    </style>
    <div part="navbar" id="navbarTop">
      <slot name="navbar"></slot>
    </div>
    <div part="backdrop" on-click="_close" on-touchstart="_close"></div>
    <div part="drawer" id="drawer">
      <slot name="drawer" id="drawerSlot"></slot>
    </div>
    <div content="">
      <slot></slot>
    </div>
    <div part="navbar" id="navbarBottom" bottom="" hidden="">
      <slot name="navbar-bottom"></slot>
    </div>
    <div hidden=""><slot id="touchSlot" name="navbar touch-optimized"></slot></div>
`}static get is(){return"vaadin-app-layout"}static get version(){return"2.2.0"}static get properties(){return{primarySection:{type:String,value:"navbar",notify:!0,reflectToAttribute:!0,observer:"_primarySectionObserver"},drawerOpened:{type:Boolean,notify:!0,value:!0,reflectToAttribute:!0,observer:"_drawerOpenedObserver"},overlay:{type:Boolean,notify:!0,readOnly:!0,value:!1,reflectToAttribute:!0}}}constructor(){super(),this.__boundResizeListener=this._resize.bind(this),this.__drawerToggleClickListener=this._drawerToggleClick.bind(this),this.__closeOverlayDrawerListener=this.__closeOverlayDrawer.bind(this)}connectedCallback(){super.connectedCallback(),this._blockAnimationUntilAfterNextRender(),window.addEventListener("resize",this.__boundResizeListener),this.addEventListener("drawer-toggle-click",this.__drawerToggleClickListener),window.HTMLImports&&!window.HTMLImports.useNative?Array.from(this.querySelectorAll("*")).forEach(e=>{e.localName.indexOf("-")>-1&&window.customElements.whenDefined(e.localName).then(()=>{Object(S.b)(this,this._afterFirstRender)})}):Object(S.b)(this,this._afterFirstRender),this._updateTouchOptimizedMode();var e=this.$.navbarTop.firstElementChild;this._navbarChildObserver=new O.a(e,e=>{this._updateTouchOptimizedMode()}),this._touchChildObserver=new O.a(this.$.touchSlot,e=>{this._updateTouchOptimizedMode()}),this._drawerChildObserver=new O.a(this.$.drawerSlot,e=>{this._updateDrawerSize()}),this._updateDrawerSize(),this._updateOverlayMode(),window.addEventListener("close-overlay-drawer",this.__closeOverlayDrawerListener)}disconnectedCallback(){super.disconnectedCallback(),this._navbarChildObserver&&this._navbarChildObserver.disconnect(),this._drawerChildObserver&&this._drawerChildObserver.disconnect(),this._touchChildObserver&&this._touchChildObserver.disconnect(),window.removeEventListener("resize",this.__boundResizeListener),this.removeEventListener("drawer-toggle-click",this.__drawerToggleClickListener),this.removeEventListener("close-overlay-drawer",this.__drawerToggleClickListener)}static dispatchCloseOverlayDrawerEvent(){window.dispatchEvent(new CustomEvent("close-overlay-drawer"))}_primarySectionObserver(e){-1!==["navbar","drawer"].indexOf(e)||this.set("primarySection","navbar")}_drawerOpenedObserver(){var e=this.$.drawer;e.removeAttribute("tabindex"),this.overlay&&this.drawerOpened&&(e.setAttribute("tabindex",0),e.focus(),this._updateDrawerHeight())}_isShadyCSS(){return window.ShadyCSS&&!window.ShadyCSS.nativeCss}_afterFirstRender(){this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()}_drawerToggleClick(e){e.stopPropagation(),this.drawerOpened=!this.drawerOpened}__closeOverlayDrawer(){this.overlay&&(this.drawerOpened=!1)}_updateDrawerSize(){var e=this.querySelectorAll("[slot=drawer]").length,t=this.$.drawer;0===e?t.setAttribute("hidden",""):t.removeAttribute("hidden"),this._updateOffsetSize()}_resize(){this._blockAnimationUntilAfterNextRender(),this._updateTouchOptimizedMode(),this._updateOverlayMode()}_updateOffsetSize(){var e=this.shadowRoot.querySelector('[part="navbar"]').getBoundingClientRect(),t=this.shadowRoot.querySelector('[part="navbar"][bottom]').getBoundingClientRect();this._isShadyCSS()?window.ShadyCSS.styleSubtree(this,{"--_vaadin-app-layout-navbar-offset-size":e.height+"px","--_vaadin-app-layout-navbar-offset-size-bottom":t.height+"px"}):(this.style.setProperty("--_vaadin-app-layout-navbar-offset-size",e.height+"px"),this.style.setProperty("--_vaadin-app-layout-navbar-offset-size-bottom",t.height+"px"));var n=this.$.drawer.getBoundingClientRect();this._isShadyCSS()?window.ShadyCSS.styleSubtree(this,{"--_vaadin-app-layout-drawer-offset-size":n.width+"px","--vaadin-app-layout-drawer-offset-left":"var(--_vaadin-app-layout-drawer-offset-size)"}):this.style.setProperty("--_vaadin-app-layout-drawer-offset-size",n.width+"px")}_updateDrawerHeight(){var{scrollHeight:e,offsetHeight:t}=this.$.drawer,n=e>t?e+"px":"100%";this._isShadyCSS()?window.ShadyCSS.styleSubtree(this,{"--_vaadin-app-layout-drawer-scroll-size":n}):this.style.setProperty("--_vaadin-app-layout-drawer-scroll-size",n)}_updateOverlayMode(){var e="true"==this._getCustomPropertyValue("--vaadin-app-layout-drawer-overlay"),t=this.$.drawer;!this.overlay&&e&&(this._drawerStateSaved=this.drawerOpened,this.drawerOpened=!1),this._setOverlay(e),this.overlay?(t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label","drawer")):(this._drawerStateSaved&&(this.drawerOpened=this._drawerStateSaved,this._drawerStateSaved=null),t.removeAttribute("role"),t.removeAttribute("aria-modal"),t.removeAttribute("aria-label")),this._updateDrawerHeight()}_close(){this.drawerOpened=!1}_getCustomPropertyValue(e){var t;return this._isShadyCSS()?(window.ShadyCSS.styleSubtree(this),t=window.ShadyCSS.getComputedStyleValue(this,e)):t=getComputedStyle(this).getPropertyValue(e),(t||"").trim().toLowerCase()}_updateTouchOptimizedMode(){var e="true"==this._getCustomPropertyValue("--vaadin-app-layout-touch-optimized"),t=this.querySelectorAll('[slot*="navbar"]');t.length>0&&Array.from(t).forEach(t=>{t.getAttribute("slot").indexOf("touch-optimized")>-1&&(t.__touchOptimized=!0),e&&t.__touchOptimized?t.setAttribute("slot","navbar-bottom"):t.setAttribute("slot","navbar")}),0===this.$.navbarTop.querySelector("[name=navbar]").assignedNodes().length?this.$.navbarTop.setAttribute("hidden",""):this.$.navbarTop.removeAttribute("hidden"),e?this.$.navbarBottom.removeAttribute("hidden"):this.$.navbarBottom.setAttribute("hidden",""),this._updateOffsetSize()}_blockAnimationUntilAfterNextRender(){this.setAttribute("no-anim",""),Object(S.a)(this,()=>{this.removeAttribute("no-anim"),this._isShadyCSS()&&window.ShadyCSS.styleSubtree(this)})}}customElements.define(L.is,L);n(172),n(86);var I=m.a`<dom-module id="lumo-drawer-toggle" theme-for="vaadin-drawer-toggle">
  <template>
    <style include="lumo-button">
      :host {
        width: var(--lumo-size-l);
        height: var(--lumo-size-l);
        min-width: auto;
        margin: 0 var(--lumo-space-s);
        padding: 0;
        background: transparent;
      }

      [part="icon"],
      [part="icon"]::after,
      [part="icon"]::before {
        position: inherit;
        height: auto;
        width: auto;
        background: transparent;
        top: auto;
      }

      [part=icon]::before {
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        content: var(--lumo-icons-menu);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(I.content);var T=n(152);
/**
@license
Vaadin Drawer Toggle
Copyright (C) 2018 Vaadin Ltd
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class z extends T.a{static get template(){return m.a`
    <style>
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: default;
        position: relative;
        outline: none;
        height: 24px;
        width: 24px;
        padding: 4px;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }

      [part="icon"],
      [part="icon"]::after,
      [part="icon"]::before {
        position: absolute;
        top: 8px;
        height: 3px;
        width: 24px;
        background-color: #000;
      }

      [part="icon"]::after,
      [part="icon"]::before {
        content: "";
      }

      [part="icon"]::after {
        top: 6px;
      }

      [part="icon"]::before {
        top: 12px;
      }
    </style>
    <slot>
      <div part="icon"></div>
    </slot>
    <button id="button" type="button" aria-label\$="[[ariaLabel]]"></button>
`}static get is(){return"vaadin-drawer-toggle"}static get properties(){return{ariaLabel:String}}constructor(){super(),this.addEventListener("click",e=>{this.dispatchEvent(new CustomEvent("drawer-toggle-click",{bubbles:!0,composed:!0}))})}}customElements.define(z.is,z);n(196),n(154),n(238),n(212),n(239),n(214),n(90),n(206),n(216);var P=document.createElement("template");P.innerHTML='<iron-iconset-svg size="1000" name="lumo">\n<svg xmlns="http://www.w3.org/2000/svg">\n<defs>\n<g id="angle-down"><path d="M283 391c-18-16-46-15-63 4-16 18-15 46 3 63l244 224c17 15 43 15 60 0l250-229c18-16 20-45 3-63-16-18-45-20-63-4l-220 203-214-198z"></path></g>\n<g id="angle-left"><path d="M601 710c16 18 15 46-3 63-18 16-46 15-63-4l-224-244c-15-17-15-43 0-59l229-250c16-18 45-20 63-4 18 16 20 45 3 63l-203 220 198 215z"></path></g>\n<g id="angle-right"><path d="M399 275c-16-18-15-46 3-63 18-16 46-15 63 4l224 244c15 17 15 43 0 59l-229 250c-16 18-45 20-63 4-18-16-20-45-3-63l203-220-198-215z"></path></g>\n<g id="angle-up"><path d="M283 635c-18 16-46 15-63-3-16-18-15-46 3-63l244-224c17-15 43-15 60 0l250 229c18 16 20 45 3 63-16 18-45 20-63 3l-220-202L283 635z"></path></g>\n<g id="arrow-down"><path d="M538 646l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166c0 0 0 0 0 0-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 646V312c0-21 17-38 38-37s38 17 37 37v334z"></path></g>\n<g id="arrow-left"><path d="M375 538l111 125c14 15 12 39-3 53-15 14-39 12-53-4l-166-187c0 0 0 0 0 0-13-14-12-36 0-50l166-187c14-15 37-17 53-4 15 14 17 37 3 53L375 463h333c21 0 38 17 38 37 0 21-17 38-38 38h-333z"></path></g>\n<g id="arrow-right"><path d="M625 538h-333c-21 0-38-17-38-38 0-21 17-38 38-37h333l-111-126c-14-15-12-39 3-53 15-14 39-12 53 4l166 187c13 14 13 36 0 50 0 0 0 0 0 0l-166 187c-14 15-37 17-53 4-15-14-17-37-3-53l111-125z"></path></g>\n<g id="arrow-up"><path d="M538 354V688c0 21-17 38-38 37s-38-17-38-38V354l-125 112c-15 14-39 12-53-4-14-15-12-39 4-53l187-166c14-13 36-13 50 0 0 0 0 0 0 0l187 166c15 14 17 37 4 53-14 15-37 17-53 4L538 354z"></path></g>\n<g id="bar-chart"><path d="M175 500h108c28 0 50 22 50 50v233c0 28-22 50-50 50H175c-28 0-50-22-50-50v-233c0-28 22-50 50-50z m33 67c-9 0-17 7-16 16v167c0 9 7 17 16 17h42c9 0 17-7 17-17v-167c0-9-7-17-17-16H208zM446 167h108c28 0 50 22 50 50v566c0 28-22 50-50 50h-108c-28 0-50-22-50-50V217c0-28 22-50 50-50z m33 66c-9 0-17 7-17 17v500c0 9 7 17 17 17h42c9 0 17-7 16-17V250c0-9-7-17-16-17h-42zM717 333h108c28 0 50 22 50 50v400c0 28-22 50-50 50h-108c-28 0-50-22-50-50V383c0-28 22-50 50-50z m33 67c-9 0-17 7-17 17v333c0 9 7 17 17 17h42c9 0 17-7 16-17v-333c0-9-7-17-16-17h-42z"></path></g>\n<g id="bell"><path d="M367 675H292v-258C292 325 366 250 459 250H458V208c0-23 18-42 42-41 23 0 42 18 42 41v42h-1C634 250 708 325 708 417V675h-75v-258c0-51-41-92-91-92h-84C408 325 367 366 367 417V675z m-159 37c0-21 17-38 38-37h508c21 0 37 17 38 37 0 21-17 38-38 38H246C225 750 208 733 208 713z m230 71h125v32c0 17-14 31-32 31h-62c-17 0-32-14-31-31v-32z"></path></g>\n<g id="calendar"><path d="M375 208h250v-20C625 176 634 167 646 167h41C699 167 708 176 708 188V208h74c23 0 41 19 41 42v42C823 315 804 333 782 333H218C196 333 177 315 177 292V250C177 227 196 208 218 208H292v-20C292 176 301 167 313 167h41C366 167 375 176 375 188V208zM229 375h42C283 375 292 384 292 396v41C292 449 282 458 271 458h-42C217 458 208 449 208 437v-41C208 384 218 375 229 375z m125 0h42C408 375 417 384 417 396v41C417 449 407 458 396 458h-42C342 458 333 449 333 437v-41C333 384 343 375 354 375z m125 0h42C533 375 542 384 542 396v41C542 449 532 458 521 458h-42C467 458 458 449 458 437v-41C458 384 468 375 479 375z m-250 125h42C283 500 292 509 292 521v41C292 574 282 583 271 583h-42C217 583 208 574 208 562v-41C208 509 218 500 229 500z m125 0h42C408 500 417 509 417 521v41C417 574 407 583 396 583h-42C342 583 333 574 333 562v-41C333 509 343 500 354 500z m125 0h42c12 0 21 9 21 21v41C542 574 532 583 521 583h-42C467 583 458 574 458 562v-41C458 509 468 500 479 500z m-250 125h42C283 625 292 634 292 646v41C292 699 282 708 271 708h-42C217 708 208 699 208 687v-41C208 634 218 625 229 625z m125 0h42C408 625 417 634 417 646v41C417 699 407 708 396 708h-42C342 708 333 699 333 687v-41C333 634 343 625 354 625z m125 0h42c12 0 21 9 21 21v41C542 699 532 708 521 708h-42C467 708 458 699 458 687v-41C458 634 468 625 479 625z m125-250h42C658 375 667 384 667 396v41C667 449 657 458 646 458h-42C592 458 583 449 583 437v-41C583 384 593 375 604 375z m0 125h42c12 0 21 9 21 21v41C667 574 657 583 646 583h-42C592 583 583 574 583 562v-41C583 509 593 500 604 500z m0 125h42c12 0 21 9 21 21v41C667 699 657 708 646 708h-42C592 708 583 699 583 687v-41C583 634 593 625 604 625z m125 0h42c12 0 21 9 21 21v41C792 699 782 708 771 708h-42C717 708 708 699 708 687v-41C708 634 718 625 729 625z m-500 125h42C283 750 292 759 292 771v41C292 824 282 833 271 833h-42C217 833 208 824 208 812v-41C208 759 218 750 229 750z m125 0h42C408 750 417 759 417 771v41C417 824 407 833 396 833h-42C342 833 333 824 333 812v-41C333 759 343 750 354 750z m125 0h42c12 0 21 9 21 21v41C542 824 532 833 521 833h-42C467 833 458 824 458 812v-41C458 759 468 750 479 750z m125 0h42c12 0 21 9 21 21v41C667 824 657 833 646 833h-42C592 833 583 824 583 812v-41C583 759 593 750 604 750z m125 0h42c12 0 21 9 21 21v41C792 824 782 833 771 833h-42C717 833 708 824 708 812v-41C708 759 718 750 729 750z m0-250h42c12 0 21 9 21 21v41C792 574 782 583 771 583h-42C717 583 708 574 708 562v-41C708 509 718 500 729 500z m0-125h42C783 375 792 384 792 396v41C792 449 782 458 771 458h-42C717 458 708 449 708 437v-41C708 384 718 375 729 375z"></path></g>\n<g id="checkmark"><path d="M318 493c-15-15-38-15-53 0-15 15-15 38 0 53l136 136c15 15 38 15 53 0l323-322c15-15 15-38 0-53-15-15-38-15-54 0l-295 296-110-110z"></path></g>\n<g id="chevron-down"><path d="M533 654l210-199c9-9 9-23 0-32C739 419 733 417 726 417H274C261 417 250 427 250 439c0 6 2 12 7 16l210 199c18 17 48 17 66 0z"></path></g>\n<g id="chevron-left"><path d="M346 533l199 210c9 9 23 9 32 0 4-4 7-10 6-17V274C583 261 573 250 561 250c-6 0-12 2-16 7l-199 210c-17 18-17 48 0 66z"></path></g>\n<g id="chevron-right"><path d="M654 533L455 743c-9 9-23 9-32 0C419 739 417 733 417 726V274C417 261 427 250 439 250c6 0 12 2 16 7l199 210c17 18 17 48 0 66z"></path></g>\n<g id="chevron-up"><path d="M533 346l210 199c9 9 9 23 0 32-4 4-10 7-17 6H274C261 583 250 573 250 561c0-6 2-12 7-16l210-199c18-17 48-17 66 0z"></path></g>\n<g id="clock"><path d="M538 489l85 85c15 15 15 38 0 53-15 15-38 15-53 0l-93-93a38 38 0 0 1-2-2C467 525 462 515 462 504V308c0-21 17-38 38-37 21 0 38 17 37 37v181zM500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265z"></path></g>\n<g id="cog"><path d="M833 458l-81-18c-8-25-17-50-29-75L767 292 708 233l-72 49c-21-12-46-25-75-30L542 167h-84l-19 79c-25 8-50 17-71 30L296 233 233 296l47 69c-12 21-21 46-29 71L167 458v84l84 25c8 25 17 50 29 75L233 708 292 767l76-44c21 12 46 25 75 29L458 833h84l19-81c25-8 50-17 75-29L708 767l59-59-44-66c12-21 25-46 29-75L833 542v-84z m-333 217c-96 0-175-79-175-175 0-96 79-175 175-175 96 0 175 79 175 175 0 96-79 175-175 175z"></path></g>\n<g id="cross"><path d="M445 500l-142-141c-15-15-15-40 0-56 15-15 40-15 56 0L500 445l141-142c15-15 40-15 56 0 15 15 15 40 0 56L555 500l142 141c15 15 15 40 0 56-15 15-40 15-56 0L500 555l-141 142c-15 15-40 15-56 0-15-15-15-40 0-56L445 500z"></path></g>\n<g id="download"><path d="M538 521l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166a38 38 0 0 1 0 0c-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 521V188c0-21 17-38 38-38s38 17 37 38v333zM758 704c0-21 17-38 38-37 21 0 38 17 37 37v92c0 21-17 38-37 37H204c-21 0-38-17-37-37v-92c0-21 17-38 37-37s38 17 38 37v54h516v-54z"></path></g>\n<g id="dropdown"><path d="M317 393c-15-14-39-13-53 3-14 15-13 39 3 53l206 189c14 13 36 13 50 0l210-193c15-14 17-38 3-53-14-15-38-17-53-3l-185 171L317 393z"></path></g>\n<g id="edit"><path d="M673 281l62 56-205 233c-9 10-38 24-85 39a8 8 0 0 1-5 0c-4-1-7-6-6-10l0 0c14-47 25-76 35-86l204-232z m37-42l52-59c15-17 41-18 58-2 17 16 18 42 3 59L772 295l-62-56zM626 208l-67 75h-226C305 283 283 306 283 333v334C283 695 306 717 333 717h334c28 0 50-22 50-50v-185L792 398v269C792 736 736 792 667 792H333C264 792 208 736 208 667V333C208 264 264 208 333 208h293z"></path></g>\n<g id="error"><path d="M500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265zM479 292h42c12 0 21 9 20 20l-11 217c0 8-6 13-13 13h-34c-7 0-13-6-13-13l-11-217C459 301 468 292 479 292zM483 608h34c12 0 21 9 20 21v33c0 12-9 21-20 21h-34c-12 0-21-9-21-21v-33c0-12 9-21 21-21z"></path></g>\n<g id="eye"><path d="M500 750c-187 0-417-163-417-250s230-250 417-250 417 163 417 250-230 250-417 250z m-336-231c20 22 47 46 78 69C322 644 411 678 500 678s178-34 258-90c31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69C678 356 589 322 500 322s-178 34-258 90c-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19zM500 646c-81 0-146-65-146-146s65-146 146-146 146 65 146 146-65 146-146 146z m0-75c39 0 71-32 71-71 0-39-32-71-71-71-39 0-71 32-71 71 0 39 32 71 71 71z"></path></g>\n<g id="eye-disabled"><path d="M396 735l60-60c15 2 30 3 44 3 89 0 178-34 258-90 31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69-8-5-15-11-23-15l50-51C862 397 917 458 917 500c0 87-230 250-417 250-34 0-69-5-104-15zM215 654C138 603 83 542 83 500c0-87 230-250 417-250 34 0 69 5 104 15l-59 60c-15-2-30-3-45-3-89 0-178 34-258 90-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19 20 22 47 46 78 69 8 5 16 11 24 16L215 654z m271-9l159-159c0 5 1 9 1 14 0 81-65 146-146 146-5 0-9 0-14-1z m-131-131C354 510 354 505 354 500c0-81 65-146 146-146 5 0 10 0 14 1l-159 159z m-167 257L780 179c12-12 32-12 44 0 12 12 12 32 0 44L232 815c-12 12-32 12-44 0s-12-32 0-44z"></path></g>\n<g id="menu"><path d="M167 292c0-23 19-42 41-42h584C815 250 833 268 833 292c0 23-19 42-41 41H208C185 333 167 315 167 292z m0 208c0-23 19-42 41-42h584C815 458 833 477 833 500c0 23-19 42-41 42H208C185 542 167 523 167 500z m0 208c0-23 19-42 41-41h584C815 667 833 685 833 708c0 23-19 42-41 42H208C185 750 167 732 167 708z"></path></g>\n<g id="minus"><path d="M261 461c-22 0-39 18-39 39 0 22 18 39 39 39h478c22 0 39-18 39-39 0-22-18-39-39-39H261z"></path></g>\n<g id="ordered-list"><path d="M138 333V198H136l-43 28v-38l45-31h45V333H138z m-61 128c0-35 27-59 68-59 39 0 66 21 66 53 0 20-11 37-43 64l-29 27v2h74V583H80v-30l55-52c26-24 32-33 33-43 0-13-10-22-24-22-15 0-26 10-26 25v1h-41v-1zM123 759v-31h21c15 0 25-8 25-21 0-13-10-21-25-21-15 0-26 9-26 23h-41c1-34 27-56 68-57 39 0 66 20 66 49 0 20-14 36-33 39v3c24 3 40 19 39 41 0 32-30 54-73 54-41 0-69-22-70-57h43c1 13 11 22 28 22 16 0 27-9 27-22 0-14-10-22-28-22h-21zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>\n<g id="phone"><path d="M296 208l42-37c17-15 44-13 58 4a42 42 0 0 1 5 7L459 282c12 20 5 45-15 57l-7 4c-17 10-25 30-19 48l20 66a420 420 0 0 0 93 157l41 45c13 14 35 17 51 8l7-5c20-12 45-5 57 16L745 777c12 20 5 45-15 57a42 42 0 0 1-8 4l-52 17c-61 21-129 4-174-43l-50-52c-81-85-141-189-175-302l-24-78c-19-62 0-129 49-172z"></path></g>\n<g id="photo"><path d="M208 167h584c69 0 125 56 125 125v416c0 69-56 125-125 125H208c-69 0-125-56-125-125V292c0-69 56-125 125-125z m584 75H208c-28 0-50 22-50 50v416c0 28 22 50 50 50h584c28 0 50-22 50-50V292c0-28-22-50-50-50zM239 740l167-167c12-12 31-14 45-6l73 43 172-201c13-15 34-18 50-7l95 67v92l-111-78-169 199c-12 14-32 17-47 8l-76-43-111 111H229c2-7 5-13 10-18zM458 427C458 490 407 542 344 542S229 490 229 427c0-63 51-115 115-115S458 364 458 427z m-62 0C396 398 373 375 344 375S292 398 292 427c0 29 23 52 52 52s52-23 52-52z"></path></g>\n<g id="play"><path d="M689 528l-298 175c-13 8-34 8-48 0-6-4-10-9-10-14V311C333 300 348 292 367 292c9 0 17 2 24 5l298 175c26 15 26 40 0 56z"></path></g>\n<g id="plus"><path d="M461 461H261c-22 0-39 18-39 39 0 22 18 39 39 39h200v200c0 22 18 39 39 39 22 0 39-18 39-39v-200h200c22 0 39-18 39-39 0-22-18-39-39-39h-200V261c0-22-18-39-39-39-22 0-39 18-39 39v200z"></path></g>\n<g id="redo"><path d="M290 614C312 523 393 458 491 458c55 0 106 22 144 57l-88 88c-3 3-5 7-5 11 0 8 6 15 15 15l193-5c17 0 31-15 31-32l5-192c0-4-1-8-4-11-6-6-16-6-22 0l-66 67C641 406 570 375 491 375c-136 0-248 90-281 215-1 2-1 5-1 8-8 44 45 68 73 32 4-5 7-11 8-16z"></path></g>\n<g id="reload"><path d="M500 233V137c0-9 7-16 15-16 4 0 8 2 10 4l133 140c12 12 12 32 0 45l-133 140c-6 6-15 6-21 0C502 447 500 443 500 438V308c-117 0-212 95-212 213 0 117 95 212 212 212 117 0 212-95 212-212 0-21 17-38 38-38s38 17 37 38c0 159-129 288-287 287-159 0-288-129-288-287 0-159 129-288 288-288z"></path></g>\n<g id="search"><path d="M662 603l131 131c16 16 16 42 0 59-16 16-43 16-59 0l-131-131C562 691 512 708 458 708c-138 0-250-112-250-250 0-138 112-250 250-250 138 0 250 112 250 250 0 54-17 104-46 145zM458 646c104 0 188-84 188-188S562 271 458 271 271 355 271 458s84 188 187 188z"></path></g>\n<g id="undo"><path d="M710 614C688 523 607 458 509 458c-55 0-106 22-144 57l88 88c3 3 5 7 5 11 0 8-6 15-15 15l-193-5c-17 0-31-15-31-32L214 400c0-4 1-8 4-11 6-6 16-6 22 0l66 67C359 406 430 375 509 375c136 0 248 90 281 215 1 2 1 5 1 8 8 44-45 68-73 32-4-5-7-11-8-16z"></path></g>\n<g id="unordered-list"><path d="M146 325c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>\n<g id="upload"><path d="M454 271V604c0 21-17 38-37 38s-38-17-38-38V271L254 382c-15 14-39 12-53-3-14-15-12-39 3-53L391 160c14-13 36-13 51-1 0 0 0 0 0 1l187 166c15 14 17 37 3 53-14 15-37 17-53 3L454 271zM675 704c0-21 17-38 37-37 21 0 38 17 38 37v92c0 21-17 38-38 37H121c-21 0-38-17-38-37v-92c0-21 17-38 38-37s38 17 37 37v54h517v-54z"></path></g>\n<g id="user"><path d="M500 500c-69 0-125-56-125-125s56-125 125-125 125 56 125 125-56 125-125 125z m-292 292c0-115 131-208 292-209s292 93 292 209H208z"></path></g>\n</defs>\n</svg>\n</iron-iconset-svg>',document.head.appendChild(P.content);n(71);var F=document.createElement("template");F.innerHTML='<dom-module id="lumo-ordered-layout">\n  <template>\n    <style>\n      :host([theme~="margin"]) {\n        margin: var(--lumo-space-m);\n      }\n\n      :host([theme~="padding"]) {\n        padding: var(--lumo-space-m);\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(F.content);var R=m.a`<dom-module id="lumo-horizontal-layout" theme-for="vaadin-horizontal-layout">
  <template>
    <style include="lumo-ordered-layout">
      :host([theme~="spacing-xs"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: var(--lumo-space-xs);
      }

      :host([theme~="spacing-s"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: var(--lumo-space-s);
      }

      :host([theme~="spacing"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: var(--lumo-space-m);
      }

      :host([theme~="spacing-l"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: var(--lumo-space-l);
      }

      :host([theme~="spacing-xl"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: var(--lumo-space-xl);
      }

      /*
        Compensate for the first item margin, so that there is no gap around
        the layout itself.
       */
      :host([theme~="spacing-xs"])::before,
      :host([theme~="spacing-s"])::before,
      :host([theme~="spacing"])::before,
      :host([theme~="spacing-l"])::before,
      :host([theme~="spacing-xl"])::before {
        content: "";
      }

      :host([theme~="spacing-xs"]:not([dir="rtl"]))::before {
        margin-left: calc(var(--lumo-space-xs) * -1);
      }

      :host([theme~="spacing-s"]:not([dir="rtl"]))::before {
        margin-left: calc(var(--lumo-space-s) * -1);
      }

      :host([theme~="spacing"]:not([dir="rtl"]))::before {
        margin-left: calc(var(--lumo-space-m) * -1);
      }

      :host([theme~="spacing-l"]:not([dir="rtl"]))::before {
        margin-left: calc(var(--lumo-space-l) * -1);
      }

      :host([theme~="spacing-xl"]:not([dir="rtl"]))::before {
        margin-left: calc(var(--lumo-space-xl) * -1);
      }

      /* RTL styles */
      :host([dir="rtl"][theme~="spacing-xs"]) ::slotted(*) {
        margin-right: var(--lumo-space-xs);
      }

      :host([dir="rtl"][theme~="spacing-s"]) ::slotted(*) {
        margin-right: var(--lumo-space-s);
      }

      :host([dir="rtl"][theme~="spacing"]) ::slotted(*) {
        margin-right: var(--lumo-space-m);
      }

      :host([dir="rtl"][theme~="spacing-l"]) ::slotted(*) {
        margin-right: var(--lumo-space-l);
      }

      :host([dir="rtl"][theme~="spacing-xl"]) ::slotted(*) {
        margin-right: var(--lumo-space-xl);
      }

      /*
        Compensate for the first item margin, so that there is no gap around
        the layout itself.
       */
      :host([dir="rtl"][theme~="spacing-xs"])::before {
        margin-right: calc(var(--lumo-space-xs) * -1);
      }

      :host([dir="rtl"][theme~="spacing-s"])::before {
        margin-right: calc(var(--lumo-space-s) * -1);
      }

      :host([dir="rtl"][theme~="spacing"])::before {
        margin-right: calc(var(--lumo-space-m) * -1);
      }

      :host([dir="rtl"][theme~="spacing-l"])::before {
        margin-right: calc(var(--lumo-space-l) * -1);
      }

      :host([dir="rtl"][theme~="spacing-xl"])::before {
        margin-right: calc(var(--lumo-space-xl) * -1);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(R.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class N extends(Object(k.a)(Object(E.a)(g.a))){static get template(){return m.a`
    <style>
      :host {
        display: flex;
        box-sizing: border-box;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Theme variations */
      :host([theme~="margin"]) {
        margin: 1em;
      }

      :host([theme~="padding"]) {
        padding: 1em;
      }

      :host([theme~="spacing"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: 1em;
      }

      :host([theme~="spacing"][dir="rtl"]) ::slotted(*) {
        margin-right: 1em;
      }

      /*
        Compensate for the first item margin, so that there is no gap around
        the layout itself.
       */
      :host([theme~="spacing"])::before {
        content: "";
      }

      :host([theme~="spacing"]:not([dir="rtl"]))::before {
        margin-left: -1em;
      }

      :host([theme~="spacing"][dir="rtl"])::before {
        margin-right: -1em;
      }
    </style>

    <slot></slot>
`}static get is(){return"vaadin-horizontal-layout"}static get version(){return"1.4.0"}}customElements.define(N.is,N);var M=m.a`<dom-module id="lumo-vertical-layout" theme-for="vaadin-vertical-layout">
  <template>
    <style include="lumo-ordered-layout">
      :host([theme~="spacing-xs"]) ::slotted(*) {
        margin-top: var(--lumo-space-xs);
      }

      :host([theme~="spacing-s"]) ::slotted(*) {
        margin-top: var(--lumo-space-s);
      }

      :host([theme~="spacing"]) ::slotted(*) {
        margin-top: var(--lumo-space-m);
      }

      :host([theme~="spacing-l"]) ::slotted(*) {
        margin-top: var(--lumo-space-l);
      }

      :host([theme~="spacing-xl"]) ::slotted(*) {
        margin-top: var(--lumo-space-xl);
      }

      /*
        Compensate for the first item margin, so that there is no gap around
        the layout itself.
       */
       :host([theme~="spacing-xs"])::before {
         content: "";
         margin-top: calc(var(--lumo-space-xs) * -1);
       }

       :host([theme~="spacing-s"])::before {
         content: "";
         margin-top: calc(var(--lumo-space-s) * -1);
       }

      :host([theme~="spacing"])::before {
        content: "";
        margin-top: calc(var(--lumo-space-m) * -1);
      }

      :host([theme~="spacing-l"])::before {
        content: "";
        margin-top: calc(var(--lumo-space-l) * -1);
      }

      :host([theme~="spacing-xl"])::before {
        content: "";
        margin-top: calc(var(--lumo-space-xl) * -1);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(M.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class B extends(Object(k.a)(Object(E.a)(g.a))){static get template(){return m.a`
    <style>
      :host {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        box-sizing: border-box;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Theme variations */
      :host([theme~="margin"]) {
        margin: 1em;
      }

      :host([theme~="padding"]) {
        padding: 1em;
      }

      :host([theme~="spacing"]) ::slotted(*) {
        margin-top: 1em;
      }

      /*
        Compensate for the first item margin, so that there is no gap around
        the layout itself.
       */
      :host([theme~="spacing"])::before {
        content: "";
        margin-top: -1em;
      }
    </style>

    <slot></slot>
`}static get is(){return"vaadin-vertical-layout"}static get version(){return"1.4.0"}}customElements.define(B.is,B);n(240),n(218),n(150),n(219),n(245);window.Vaadin.theme.flowBootstrap&&h(document);document.getElementsByTagName("script");for(var j,D=document.getElementsByTagName("script"),H=0;H<D.length;H++){var $=D[H];if("module"==$.getAttribute("type")&&$.getAttribute("data-app-id")&&!$["vaadin-bundle"]){j=$;break}}if(!j)throw new Error("Could not find the bundle script to identify the application id");j["vaadin-bundle"]=!0,window.Vaadin.Flow.fallbacks||(window.Vaadin.Flow.fallbacks={});var q=window.Vaadin.Flow.fallbacks;q[j.getAttribute("data-app-id")]={},q[j.getAttribute("data-app-id")].loadFallback=function(){return Promise.all([n.e(0),n.e(4),n.e(6)]).then(n.bind(null,525))}}]);