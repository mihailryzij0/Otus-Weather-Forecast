!function(){var t={757:function(t,e,r){t.exports=r(666)},666:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(t,e,r){var n=l;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return N()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=S(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",p="executing",d="completed",v={};function y(){}function m(){}function w(){}var g={};u(g,a,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(T([])));x&&x!==r&&n.call(x,a)&&(g=x);var L=w.prototype=y.prototype=Object.create(g);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function T(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:N}}function N(){return{value:e,done:!0}}return m.prototype=w,u(L,"constructor",w),u(w,"constructor",m),m.displayName=u(w,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},_(E.prototype),u(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(L),u(L,c,"Generator"),u(L,a,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=T,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";function t(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function e(e){return function(){var r=this,n=arguments;return new Promise((function(o,a){var i=e.apply(r,n);function c(e){t(i,o,a,c,u,"next",e)}function u(e){t(i,o,a,c,u,"throw",e)}c(void 0)}))}}var n,o,a=r(757),i=r.n(a);function c(){return u.apply(this,arguments)}function u(){return(u=e(i().mark((function t(){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,fetch("https://api.ipdata.co/?api-key=d54d7b1516f326bdaabe2d09ac66f5ea172d0eff249bc2d634a5bbbc");case 3:return e=t.sent,t.next=6,e.json();case 6:return r=t.sent,t.abrupt("return",r);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(){return(s=e(i().mark((function t(r){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(n=document.querySelector("select")).addEventListener("change",e(i().mark((function t(){var e,o;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=n.options.selectedIndex,o=n.options[e].text,r(o);case 3:case"end":return t.stop()}}),t)}))));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t,e){return l.apply(this,arguments)}function l(){return(l=e(i().mark((function t(e,r){var n,o,a,c;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o="1a5c5680e133ff4f8f7361b3bff271a3",n="number"==typeof e?"https://api.openweathermap.org/data/2.5/weather?units=metric&lat=".concat(e,"&lon=").concat(r,"&lang=ru&appid=").concat(o):"https://api.openweathermap.org/data/2.5/weather?units=metric&q=".concat(e,"&lang=ru&appid=").concat(o),t.prev=2,t.next=5,fetch(n);case 5:if(!(a=t.sent).ok){t.next=11;break}return t.next=9,a.json();case 9:return c=t.sent,t.abrupt("return",c);case 11:throw new Error("Вы ввели некорректное имя города");case 14:return t.prev=14,t.t0=t.catch(2),t.abrupt("return",alert(t.t0));case 17:case"end":return t.stop()}}),t,null,[[2,14]])})))).apply(this,arguments)}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function p(){return JSON.parse(localStorage.getItem("array")||"[]")}function d(t,e){t.unshift(e);var r,n=function(t){if(Array.isArray(t))return h(t)}(r=new Set(t))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(t,e){if(t){if("string"==typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(t,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();return n.length>=10&&n.splice(10,1),localStorage.setItem("array",JSON.stringify(n)),n}function v(t){var e=document.querySelector(".weather-map"),r=document.querySelector(".info");e.innerHTML='\n    <img src="https://static-maps.yandex.ru/1.x/?ll='.concat(t.coord.lon,",").concat(t.coord.lat,'&spn=0.1,0.1&size=270,270&l=map">\n\n '),r.innerHTML='\n <div class="weather-bottom-info">\n <h3 class="weather-bottom-info__city">'.concat(t.name,'</h3>\n <p class="weather-bottom-info__informer">\n ').concat(Math.round(t.main.temp),' &degC</p>\n <img class="weather-bottom-info__image" src="https://openweathermap.org/img/wn/').concat(t.weather[0].icon,'.png" alt="weather">\n </div>\n\n')}function y(t){return m.apply(this,arguments)}function m(){return(m=e(i().mark((function t(e){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:document.querySelector(".weather-select").innerHTML="".concat(e.map((function(t,e){return'<option value="'.concat(e+1,'" class="select-item">').concat(t,"</option>")})).join(""),"\n          ");case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(){return g.apply(this,arguments)}function g(){return g=e(i().mark((function t(){var e,r=arguments;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(r.length<=0?void 0:r[0],r.length<=1?void 0:r[1]);case 2:e=t.sent,y(d(p(),e.name)),console.log(e),v(e);case 8:case"end":return t.stop()}}),t)}))),g.apply(this,arguments)}document.querySelector("body").innerHTML='  \n  <section class="section-weather">\n    <h1 class="weather-title">Приложение прогноз погоды</h1>\n    <div class="weather">\n      <div class="weather-map">\n      </div>\n      <div class="weather-info">\n        <div class="weather-info__item">\n        <form>\n          <input class="weather-input" \n          placeholder="Введите название города" type="text">\n          <button class="weather-button">узнать погоду</button>\n        </form>\n        </div>\n        <div class="weather-info__item info" >\n        </div>\n        <div class="weather-info__item">\n        <p class="weather-info__title">История поиска</p>\n          <select class="weather-select"></select>\n        </div>\n      </div>\n    </div>\n  </section>\n  ',setTimeout(e(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c();case 2:return e=t.sent,t.next=5,w(e.latitude,e.longitude);case 5:case"end":return t.stop()}}),t)})))),n=w,o=document.querySelector(".weather-input"),document.querySelector(".weather-button").addEventListener("click",function(){var t=e(i().mark((function t(e){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),""===o.value?o.style.cssText="border: 2px solid red;":(o.style.cssText="border: none;",n(o.value),o.value="");case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),function(t){s.apply(this,arguments)}(w)}()}();