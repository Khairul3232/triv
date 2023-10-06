(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(33)},28:function(e,t,n){},29:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r,a,o,i,c,u,l,s,f,h=n(0),m=n.n(h),p=n(13),d=n.n(p),g=(n(28),n(29),n(6)),v=n(1),y=n(7),A=n(3),E=n(4),w=E.a.button(r||(r=Object(A.a)(['\n  margin-top: 5rem;\n  margin-left: 1rem;\n  text-align: center;\n\n  min-width: 165px;\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 2rem;\n  text-transform: uppercase;\n  font-family: "Open Sans Condensed";\n  font-weight: bolder;\n  cursor: pointer;\n  display: flex;\n  justify-content: "space-between";\n']))),x=function(e){var t=e.children,n=Object(y.a)(e,["children"]);return m.a.createElement(w,n,t())},b=function(e){var t=e.text,n=Object(y.a)(e,["text"]);return m.a.createElement(x,n,function(e){return t})},j=E.a.div(a||(a=Object(A.a)(["\n  font-size: 5rem;\n  font-weight: bolder;\n  margin: 5rem;\n  @media screen and (max-width: 800px) {\n    font-size: 1rem;\n  }\n"]))),O=function(e){var t=e.children;return m.a.createElement(j,null,t("Welcome to the Trivia Challenge!"))},L=function(e){var t=e.custom;return m.a.createElement(O,null,function(e){return t||e})},B=function(){return Object(h.useCallback)(function(){var e=document.createElement("div");return function(t){return t&&"string"===typeof t&&(t=(t=t.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim,"")).replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim,""),e.innerHTML=t,t=e.textContent,e.textContent=""),t}})},k=E.a.div(o||(o=Object(A.a)(["\n  width: 70%;\n  font-size: 4rem;\n  margin: 5rem;\n  text-align: center;\n  @media screen and (max-width: 800px) {\n    width: 100%;\n    font-size: 1.5rem;\n  }\n"]))),F=function(e){var t=e.children;return m.a.createElement(k,null,t())},S=function(e){var t=e.textBig,n=B()();return m.a.createElement(F,null,function(e){return n(t)})},G=E.a.div(i||(i=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px 80px;\n  @media screen and (max-width: 800px) {\n    padding: 20px 20px;\n  }\n"]))),C=function(e){var t=e.children;return m.a.createElement(G,null,t({onClickBegin:function(e,t){e.preventDefault(),t("/question/1",{replace:!0})},instruction:"You will be presented with 10 True or False questions.",prompt:"Can you score 100%?",promptButton:"Begin"}))},T=function(){var e=Object(v.f)();return m.a.createElement(C,null,function(t){return m.a.createElement(m.a.Fragment,null,m.a.createElement(L,null),m.a.createElement(S,{textBig:t.instruction}),m.a.createElement(S,{textBig:t.prompt}),m.a.createElement(b,{onClick:function(n){t.onClickBegin(n,e)},text:t.promptButton}))})},Y=Object(h.createContext)({url:"https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean",collection:[{category:"History",correct_answer:"True",difficulty:"hard",incorrect_answers:["False"],question:"Japan was part of the Allied Powers during World War I.",type:"boolean"}],score:[1]}),I=function(e){return function(t){return t.custom&&m.a.createElement(e,t)}},P=function(e){var t=e.custom;return I(L)({custom:t})},_=E.a.div(c||(c=Object(A.a)(["\n  border: 1px;\n  border-style: solid;\n"]))),M=function(e){return function(t){return m.a.createElement(_,null,m.a.createElement(e,t))}},D=function(e){return M(S)(e)},H=function(e){var t=e.children,n=e.data,r=e.index,a=Object(h.useContext)(Y).pushScore,o=Object(v.f)(),i=function(e){e.preventDefault(),n.correct_answer===e.target.value?a(1):a(0);var t=parseInt(r)+2;if(t>10)o("/result",{replace:!0});else{if(!(t>0))return;o("/question/".concat(parseInt(r)+2),{replace:!0})}};return m.a.createElement(m.a.Fragment,null,t({position:r+1,data:n,button:{yes:{onClick:i,text:"True",value:"True"},no:{onClick:i,text:"False",value:"False"}}}))},J=function(e){var t=e.data,n=e.index;return m.a.createElement(H,{data:t,index:n},function(e){var t=e.position,r=e.data,a=r.category,o=r.question,i=e.button,c=i.yes,u=i.no;return m.a.createElement(m.a.Fragment,null,m.a.createElement(P,{custom:a}),m.a.createElement(D,{textBig:o}),m.a.createElement(S,{textBig:"".concat(t," of 10")}),m.a.createElement(b,Object.assign({},c,{index:n})),m.a.createElement(b,Object.assign({},u,{index:n})))})},N=function(e){var t=e.children,n=e.index;return m.a.createElement(G,null,t(n))},Q=function(e){var t=e.data,n=e.index;return m.a.createElement(m.a.Fragment,null,m.a.createElement(N,{index:n},function(e){return m.a.createElement(J,{data:t,index:e})}))},z=function(e){var t=e.children,n=Object(h.useId)();return m.a.createElement(G,null,m.a.createElement(v.c,null,t({id:n})))},R=function(){var e=Object(h.useContext)(Y).collection;return m.a.createElement(z,null,function(t){var n=t.id;return e&&[e.map(function(e,t){return m.a.createElement(v.a,{key:"".concat(n,"_").concat(t),path:"/".concat(t+1),element:m.a.createElement(Q,{index:t,data:e})})}),m.a.createElement(v.a,{key:"".concat(n,"_invalid_path"),path:"/*",element:m.a.createElement(T,null)})]})},q=function(){return m.a.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAVklEQVRoge3TQQqAMAwEwMUP+Bb//6p+oHrQW8mlIFaYgdx3Q5IAAAAAMO9I0pOci01/sg22osiepE0s4G0td7ZBVeR3FFlNVaS8xY+t+rsAAAAAP3EBNHEqRU8MfGsAAAAASUVORK5CYII=",alt:"wrong"})},U=function(){return m.a.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAYAAADHyrhzAAAABmJLR0QA/wD/AP+gvaeTAAABP0lEQVR4nO3cIU4DQRhH8f8sELB13AFB0koEBoHkCLgKLIcgQWBbJIJzcIEiegaCRUJI6CA2KQ/VNZ1UvJ+e5Pvykk02mc0mWivNJ84nV0m52HywvmW6uNv+Qn/2Ww5LktScpdSbASeXSZrG6FoO23XGAGOAMcAYYAwwBhgDjAHGAGOAMcAYYAwwBhgDjAHGAGOAMcAYYAwwBhgDjAH9jdpsfJkux00m1noy8FZzlMfx9bbXWXt/feq3mo9fknLebPAuGn0d+piAMcAYYAwwBhgDjAHGgP4NtJaflKwazSwZ/mFdq52Sj6Pa/mu/2eQ+JbcDTi4zXZxufR/wMQFjgDHAGGAMMAYYA4wBxgBjgDHAGGAMMAYYA4wBxgBjgDHAGGAMMAYYA4wBxgBjQPv/ZxysHvK997zxXFc/G2zzzy+dDSJsai14CAAAAABJRU5ErkJggg==",alt:"right"})},V=function(e){var t=e.children,n=e.symbol;return m.a.createElement(m.a.Fragment,null,t(function(){return 0===n?m.a.createElement(q,null):m.a.createElement(U,null)}))},W=function(e){var t=e.symbol;return m.a.createElement(V,{symbol:t},function(e){return m.a.createElement(m.a.Fragment,null,e())})},K=E.a.div(u||(u=Object(A.a)(["\n  overflow-x: auto;\n"]))),Z=E.a.table(l||(l=Object(A.a)(["\n  border-collapse: collapse;\n  width: 100%;\n"]))),X=E.a.tr(s||(s=Object(A.a)(["\n  &:nth-child(even) {\n    background-color: #f2f2f2;\n  }\n"]))),$=E.a.td(f||(f=Object(A.a)(["\n  text-align: left;\n  padding: 8px;\n"]))),ee=function(e){var t=e.children,n=Object(h.useContext)(Y),r=n.score,a=n.collection,o=r.map(function(e,t){return m.a.createElement(W,{key:t,symbol:e})});return m.a.createElement(K,null,m.a.createElement(Z,null,t({score:r,IconSigns:o,collection:a})))},te=function(){var e=B()();return m.a.createElement(ee,null,function(t){return m.a.createElement("tbody",null,t.IconSigns.map(function(n,r){return m.a.createElement(X,{key:r},m.a.createElement($,null,n),m.a.createElement($,null,e(t.collection[r].question)))}))})},ne=function(e){var t=e.children,n=Object(v.f)(),r=Object(h.useContext)(Y),a=r.score,o=r.resetScoreArray,i=a.reduce(function(e,t){return e+t});return m.a.createElement(G,null,t({finalTotal:i,playAgainText:"Play Again?",beginTrivia:function(e){e.preventDefault(),o(),n("/question/1",{replace:!0})}}))},re=function(){return m.a.createElement(ne,null,function(e){return m.a.createElement(m.a.Fragment,null,m.a.createElement(P,{custom:"You scored"}),m.a.createElement(P,{custom:"".concat(e.finalTotal," / 10")}),m.a.createElement(te,null),m.a.createElement(b,{onClick:e.beginTrivia,text:e.playAgainText}))})},ae=function(){return m.a.createElement(g.a,null,m.a.createElement(v.c,null,m.a.createElement(v.a,{path:"/",element:m.a.createElement(T,null)}),m.a.createElement(v.a,{path:"/question/*",element:m.a.createElement(R,null)}),m.a.createElement(v.a,{path:"/result",element:m.a.createElement(re,null)})))},oe=n(18),ie=n(5),ce=n(17),ue=n(19);function le(){le=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),i=new b(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return O()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=E(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(e,t,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(e,n,i),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=u;var s={};function f(){}function h(){}function m(){}var p={};c(p,a,function(){return this});var d=Object.getPrototypeOf,g=d&&d(d(j([])));g&&g!==t&&n.call(g,a)&&(p=g);var v=m.prototype=f.prototype=Object.create(p);function y(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function A(e,t){var r;this._invoke=function(a,o){function i(){return new t(function(r,i){!function r(a,o,i,c){var u=l(e[a],e,o);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(f).then(function(e){s.value=e,i(s)},function(e){return r("throw",e,i,c)})}c(u.arg)}(a,o,r,i)})}return r=r?r.then(i,i):i()}}function E(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function b(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=m,c(v,"constructor",m),c(m,"constructor",h),h.displayName=c(m,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},y(A.prototype),c(A.prototype,o,function(){return this}),e.AsyncIterator=A,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new A(u(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},y(v),c(v,i,"Generator"),c(v,a,function(){return this}),c(v,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=j,b.prototype={constructor:b,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;x(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}var se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"10",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"hard",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"boolean",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"https://opentdb.com/api.php?amount=".concat(e,"&difficulty=").concat(t,"&type=").concat(n),a=Object(h.useState)(null),o=Object(ie.a)(a,2),i=o[0],c=o[1],u=Object(h.useState)(-1),l=Object(ie.a)(u,2),s=l[0],f=l[1],m=function(e){fetch(r).then(function(e){return function(e){return function(){if(200===e.status)return f(function(t){return e.status}),e.json();f(function(t){return e.status})}()}(e)},function(e){return console.log("Failed to receive response. ".concat(e))}).then(function(e){return function(e){return c(function(t){return Object(ue.a)({},t,e)})}(e)},function(e){return console.log("Failed to validate response. ".concat(e))})};return[i,s,Object(h.useMemo)(Object(ce.a)(le().mark(function e(){return le().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",m());case 1:case"end":return e.stop()}},e)})),[])]},fe=function(e){var t=e.children,n=se(),r=Object(ie.a)(n,1)[0],a={url:"https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean",collection:r?Object(oe.a)(r.results):[],score:[],pushScore:function(e){return a.score.push(e)},resetScoreArray:function(){return a.score=[]}};return m.a.createElement(Y.Provider,{value:a},t)};var he=function(){return m.a.createElement(fe,null,m.a.createElement(ae,null))},me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)})};d.a.createRoot(document.getElementById("root")).render(m.a.createElement(m.a.StrictMode,null,m.a.createElement(he,null))),me()}},[[20,1,2]]]);
//# sourceMappingURL=main.0c0a0d39.chunk.js.map