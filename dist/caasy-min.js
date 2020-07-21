!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("regenerator-runtime/runtime"),require("phin")):"function"==typeof define&&define.amd?define(["regenerator-runtime/runtime","phin"],t):(e=e||self).caasy=t(null,e.p)}(this,(function(e,t){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t,r,n,o,i,u){try{var a=e[i](u),s=a.value}catch(e){return void r(e)}a.done?t(s):Promise.resolve(s).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var u=e.apply(t,r);function a(e){n(u,o,i,a,s,"next",e)}function s(e){n(u,o,i,a,s,"throw",e)}a(void 0)}))}}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var a,s=function(e){if("string"!=typeof e&&"number"!=typeof e)throw new Error("[CAASY]: the provided page must either be of type string or number but received: "+r(e))},c=(a={siteId:"",mode:"prod",isInitialized:!1},{set:function(e){if(!e.siteId||"string"!=typeof e.siteId||24!==e.siteId.length)throw new Error("[CAASY]: the provided site ID is missing or invalid");a=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},a,{},e,{isInitialized:!0})},get:function(){if(!a.isInitialized)throw new Error('[CAASY]: before you use the Caasy SDK you need to initialize it by calling the "init()" function and provide the "siteId"');return a}}),p={endpoint:{dev:"http://localhost:2800/api",prod:"https://api.caasy.io/api"}},f={get:function(){var e=o(regeneratorRuntime.mark((function e(r){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p.endpoint[c.get().mode],e.next=3,t({url:n+r,parse:"json"});case 3:return o=e.sent,e.abrupt("return",o.body);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};return{posts:{getAll:function(){var e=o(regeneratorRuntime.mark((function e(){var t,r,n=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:1,s(t),e.next=4,f.get("/"+c.get().siteId+"/posts?page="+t);case 4:if(!("ok"in(r=e.sent))||r.ok){e.next=7;break}throw new Error("[CAASY]: "+r.message);case 7:return e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getById:function(){var e=o(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/"+c.get().siteId+"/posts/"+t);case 2:if(!("ok"in(r=e.sent))||r.ok){e.next=5;break}throw new Error("[CAASY]: "+r.message);case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getAllIds:function(){var e=o(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/"+c.get().siteId+"/post-ids");case 2:if(!("ok"in(t=e.sent))||t.ok){e.next=5;break}throw new Error("[CAASY]: "+t.message);case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getAllAuthors:function(){var e=o(regeneratorRuntime.mark((function e(){var t,r,n=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:1,s(t),e.next=4,f.get("/"+c.get().siteId+"/authors?page="+t);case 4:if(!("ok"in(r=e.sent))||r.ok){e.next=7;break}throw new Error("[CAASY]: "+r.message);case 7:return e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getAllByAuthor:function(){var e=o(regeneratorRuntime.mark((function e(t){var r,n,o=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=o.length>1&&void 0!==o[1]?o[1]:1,s(r),t&&"string"==typeof t){e.next=4;break}throw new Error("[CAASY]: the provided author ID is mandatory but was not provided or is not of type string");case 4:return e.next=6,f.get("/"+c.get().siteId+"/posts-by-author/"+t+"?page="+r);case 6:if(!("ok"in(n=e.sent))||n.ok){e.next=9;break}throw new Error("[CAASY]: "+n.message);case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},init:c.set}}));
