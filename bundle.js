!function(){var t={757:function(t,e,r){t.exports=r(666)},666:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(t,e,r){var n=l;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return A()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=S(i,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",p="executing",d="completed",y={};function v(){}function m(){}function w(){}var g={};u(g,a,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(T([])));x&&x!==r&&n.call(x,a)&&(g=x);var L=w.prototype=v.prototype=Object.create(g);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function T(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:A}}function A(){return{value:e,done:!0}}return m.prototype=w,u(L,"constructor",w),u(w,"constructor",m),m.displayName=u(w,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},_(E.prototype),u(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(L),u(L,c,"Generator"),u(L,a,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=T,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";function t(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function e(e){return function(){var r=this,n=arguments;return new Promise((function(o,a){var i=e.apply(r,n);function c(e){t(i,o,a,c,u,"next",e)}function u(e){t(i,o,a,c,u,"throw",e)}c(void 0)}))}}var n=r(757),o=r.n(n);function a(t,e,r){e.innerHTML='\n    <img src="https://maps.googleapis.com/maps/api/staticmap?center='.concat(t.name,"\n    &zoom=9&size=300x300&&markers=size:mid%7Ccolor:0xFFFF00%7C").concat(t.name,'\n    &key=AIzaSyC1MvMZAHW6121-ZR8zgEX3_kZPwxY8zME">\n\n '),r.innerHTML='\n <div class="weather-bottom-info">\n <h3 class="weather-bottom-info__city">'.concat(t.name,'</h3>\n <p class="weather-bottom-info__informer">\n ').concat(Math.round(t.main.temp),' &degC</p>\n <img src="https://openweathermap.org/img/wn/').concat(t.weather[0].icon,'.png" alt="weather">\n </div>\n\n')}function i(t,e){return c.apply(this,arguments)}function c(){return(c=e(o().mark((function t(e,r){var n,a,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="1a5c5680e133ff4f8f7361b3bff271a3",n="number"==typeof e?"https://api.openweathermap.org/data/2.5/weather?units=metric&lat=".concat(e,"&lon=").concat(r,"&lang=ru&appid=").concat(a):"https://api.openweathermap.org/data/2.5/weather?units=metric&q=".concat(e,"&lang=ru&appid=").concat(a),t.next=4,fetch(n).then((function(t){return t.json()}));case 4:return i=t.sent,t.abrupt("return",i);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(){return s.apply(this,arguments)}function s(){return(s=e(o().mark((function t(){var e,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,fetch("https://api.ipdata.co/?api-key=d54d7b1516f326bdaabe2d09ac66f5ea172d0eff249bc2d634a5bbbc");case 3:return e=t.sent,t.next=6,e.json();case 6:return r=t.sent,t.abrupt("return",r);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function l(){return JSON.parse(localStorage.getItem("array")||"[]")}function h(t,e){t.unshift(e);var r,n=function(t){if(Array.isArray(t))return f(t)}(r=new Set(t))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(t,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();return n.length>=10&&n.splice(0,1),localStorage.setItem("array",JSON.stringify(n)),n}function p(t){return d.apply(this,arguments)}function d(){return(d=e(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:document.querySelector("select").innerHTML="".concat(e.map((function(t,e){return"<option value= '".concat(e,"'>").concat(t,"</option>")})).join(""),"\n          ");case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(t){document.querySelector("body").innerHTML='  \n  <section class="section-weather">\n    <h1 class="weather-title">Приложение прогноз погоды</h1>\n    <div class="weather">\n      <div class="weather-map">\n      </div>\n      <div class="weather-info">\n        <div class="weather-info__item">\n        <form>\n          <input class="weather-input"\n           placeholder="Введите название город" type="text">\n          <button class="weather-button">узнать погоду</button>\n        </form>\n        </div>\n        <div class="weather-info__item">\n          <select class="weather-select" name="select"></select>\n          <label for="weather-select">История поиска</label>\n        </div>\n        <div class="weather-info__item" id="info">\n        </div>\n      </div>\n    </div>\n  </section>\n  ';var r=document.querySelector(".weather-map"),n=document.querySelector(".weather-input"),c=document.querySelector(".weather-button"),s=document.querySelector(".weather-select"),f=document.querySelector("#info");function d(){return y.apply(this,arguments)}function y(){return y=e(o().mark((function t(){var e,n=arguments;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i(n.length<=0?void 0:n[0],n.length<=1?void 0:n[1]);case 2:e=t.sent,p(h(l(),e.name)),a(e,r,f);case 7:case"end":return t.stop()}}),t)}))),y.apply(this,arguments)}setTimeout(e(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u();case 2:d((e=t.sent).latitude,e.longitude);case 4:case"end":return t.stop()}}),t)})))),c.addEventListener("click",function(){var t=e(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),""===n.value?n.style.cssText="border: 2px solid red;":(n.style.cssText="border: none;",d(n.value),n.value="");case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),s.addEventListener("change",e(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.options.selectedIndex,t.next=3,i(s.options[e].text);case 3:a(t.sent,r,f);case 5:case"end":return t.stop()}}),t)}))))}()}()}();