(()=>{var e={426:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i});var n=t(81),a=t.n(n),o=t(645),s=t.n(o)()(a());s.push([e.id,"*, *::after, *::before {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n:root {\r\n    --test: red;\r\n}\r\n\r\nbody {\r\n    font-family: monospace;\r\n}\r\n\r\n.content {\r\n    height: 100vh;\r\n    width: 100vw;\r\n    display: grid;\r\n}\r\n\r\n\r\n.new-game {\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background: rgba(.7, .7, .7, .2);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.p-name-container {\r\n    position: relative;\r\n    background: white;\r\n    padding: 1rem 2rem;\r\n    border-radius: .5rem;\r\n}\r\n\r\n.p-name-input {\r\n    font-size: 2rem;\r\n    outline: 0;\r\n    border: none;\r\n}\r\n\r\n.p-name-label {\r\n    font-size: 2rem;\r\n    position: absolute;\r\n    left: 2rem;\r\n    color: #777;\r\n    pointer-events: none;\r\n    transition: transform 300ms ease-in-out;\r\n}\r\n\r\n.p-name-container:focus-within > .p-name-label,\r\n.p-name-input:not(:placeholder-shown) + .p-name-label {\r\n    transform: translate(-2rem, -3rem) scale(.8);\r\n    pointer-events: auto;\r\n}\r\n\r\n.board {\r\n    width: 520px;\r\n    height: 520px;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 1fr);\r\n}\r\n\r\n.square {\r\n    height: 50px;\r\n    width: 50px;\r\n    background: white;\r\n    border: 1px solid black;\r\n}\r\n\r\n.ship-square { \r\n    background: blue;\r\n}\r\n\r\n.hit-ship-square {\r\n    background: red;\r\n}\r\n\r\n.hit-square {\r\n    background: orange;\r\n}\r\n\r\n.sunk-ship-square {\r\n    background: black;\r\n}\r\n\r\n.boards-container {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n\r\n.winner-text {\r\n    font-size: 4rem;\r\n    position: absolute;\r\n    top: 3rem;\r\n    left: 50%;\r\n    transform: translate(-50%, 0);\r\n}\r\n\r\n.border-square {\r\n    height: 50px;\r\n    width: 50px;\r\n    background: white;\r\n    border: 1px solid black;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 32px;\r\n}\r\n\r\n.board-border-horizontal {\r\n    display: flex;\r\n    grid-column-start: 2;\r\n}\r\n\r\n.board-border-vertical {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: fit-content;\r\n    grid-column-start: 1;\r\n}\r\n\r\n.board-wrapper {\r\n    display: grid;\r\n    grid-template-columns: 52px 520px;\r\n    grid-template-rows: 52px 520px;\r\n    border: 1px solid black;\r\n}\r\n\r\n.edge {\r\n    grid-row-start: 1;\r\n}\r\n",""]);const i=s},645:e=>{"use strict";e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t="",n=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),n&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=e(r),n&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(e,t,n,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(n)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(s[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);n&&s[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),r.push(l))}},r}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var r=[];function t(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function n(e,n){for(var o={},s=[],i=0;i<e.length;i++){var d=e[i],c=n.base?d[0]+n.base:d[0],l=o[c]||0,u="".concat(c," ").concat(l);o[c]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)r[p].references++,r[p].updater(m);else{var f=a(m,n);n.byIndex=i,r.splice(i,0,{identifier:u,updater:f,references:1})}s.push(u)}return s}function a(e,r){var t=r.domAPI(r);return t.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;t.update(e=r)}else t.remove()}}e.exports=function(e,a){var o=n(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var i=t(o[s]);r[i].references--}for(var d=n(e,a),c=0;c<o.length;c++){var l=t(o[c]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}o=d}}},569:e=>{"use strict";var r={};e.exports=function(e,t){var n=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},216:e=>{"use strict";e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,t)=>{"use strict";e.exports=function(e){var r=t.nc;r&&e.setAttribute("nonce",r)}},795:e=>{"use strict";e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(t){!function(e,r,t){var n="";t.supports&&(n+="@supports (".concat(t.supports,") {")),t.media&&(n+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(n+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),n+=t.css,a&&(n+="}"),t.media&&(n+="}"),t.supports&&(n+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleTagTransform(n,e,r.options)}(r,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{"use strict";e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}},159:e=>{e.exports=function(){const e=["#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#"],r=[],t=r=>{for(let t=0;t<r.ship.length;t++)r.isVertical?e[r.position+10*t]="X":e[r.position+t]="X"};return{board:e,ships:r,place:(t,n,a=!1)=>{for(let r=0;t.length>r;r++)a?e[n+10*r]="o":e[n+r]="o";r.push({ship:t,position:n,isVertical:a})},recieveAttack:n=>{"x"!==e[n]&&"M"!==e[n]&&"X"!==e[n]&&("o"===e[n]?(e[n]="x",r.forEach((e=>{for(let r=0;r<e.ship.length;r++)e.isVertical?n===e.position+10*r&&(e.ship.hit(r),e.ship.isSunk()&&t(e)):n===e.position+r&&(e.ship.hit(r),e.ship.isSunk()&&t(e))}))):e[n]="M")},allSunk:()=>r.every((e=>e.ship.isSunk()))}}},370:(e,r,t)=>{const n=t(159),a=t(804);e.exports=function(e){const r=a(5),t=a(4),o=a(3),s=a(3),i=a(2),d=n(),{board:c}=d;return{name:e,game:d,carrier:r,battleship:t,cruiser:o,submarine:s,destroyer:i,board:c}}},804:e=>{e.exports=function(e){const r=[];for(let t=0;e>t;t++)r.push("o");return{length:e,hitPositions:r,hit:e=>{r[e]="x",r.every((e=>"x"===e))&&(()=>{for(let e=0;e<r.length;e++)r[e]="X"})()},isSunk:()=>r.every((e=>"X"===e))}}},910:e=>{e.exports=function e(r,t){const n=Math.floor(100*Math.random());return"o"===r.game.board[n]||"#"===r.game.board[n]?(r.game.recieveAttack(n),n):(e(r,t),n)}},647:e=>{e.exports=function(e){const r=document.querySelector(".boards-container"),t=e.game.board,n=document.querySelector(".content"),a=document.createElement("div"),o=document.createElement("div"),s=document.createElement("div"),i=document.createElement("div"),d=document.createElement("div");d.classList.add("border-square"),d.classList.add("edge"),a.classList.add("board"),i.classList.add("board-wrapper"),o.classList.add("board-border-horizontal"),s.classList.add("board-border-vertical");let c=0;for(let e=1;e<=10;e++){const r=document.createElement("div"),t=document.createElement("div");r.classList.add("border-square"),t.classList.add("border-square"),r.textContent=e,t.textContent=e,o.appendChild(r),s.appendChild(t)}return t.forEach((()=>{const e=document.createElement("div");e.classList.add("square"),e.setAttribute("data-index",c),a.appendChild(e),c++})),r.appendChild(i),i.appendChild(o),i.appendChild(d),i.appendChild(s),i.appendChild(a),n.appendChild(r),a}},784:e=>{e.exports=function(e){const r=e.name.toUpperCase(),t=document.querySelector(".content"),n=document.createElement("h2");n.classList.add("winner-text"),n.textContent=`${r} HAS WON!`,t.prepend(n)}},37:e=>{e.exports=function(){const e=document.querySelector(".content"),r=document.createElement("div"),t=document.createElement("div"),n=document.createElement("input"),a=document.createElement("label");r.classList.add("new-game"),n.type="text",n.classList.add("p-name-input"),t.classList.add("p-name-container"),a.classList.add("p-name-label"),n.placeholder=" ",a.textContent="Player Name",t.appendChild(n),t.appendChild(a),r.appendChild(t),e.appendChild(r)}},96:(e,r,t)=>{const n=t(468);function a(e,r){const t=Math.floor(100*Math.random()),n=Math.floor(2*Math.random());if(n){for(let n=0;n<r.length;n++)if(t>=100-10*n||"o"===e.game.board[t+10*n])return void a(e,r)}else for(let n=1;n<r.length;n++)if((t+n)%10==0||"o"===e.game.board[t+n-1])return void a(e,r);e.game.place(r,t,n)}function o(e,r,t){let a,s,i;for(;isNaN(i)||i>1||i<0;)i=prompt("Do you want your ship placed vertically 1 for yes 0 for no"),i=parseInt(i,10),(isNaN(i)||i>1||i<0)&&alert("INVALID INPUT");for(;isNaN(a)||a<1||a>10;)a=prompt("Where do you want to place your ship on the X axis 1-10"),a=parseInt(a,10),(isNaN(a)||a<1||a>10)&&alert("INVALID INPUT");for(;isNaN(s)||s<1||s>10;)s=prompt("Where do you want to place your ship on the Y axis 1-10"),s=parseInt(s,10),(isNaN(s)||s<1||s>10)&&alert("INVALID INPUT");const d=a-1+10*(s-1);if(i){for(let n=0;n<t.length;n++)if(d>=100-10*n||"o"===e.game.board[d+10*n])return alert("INVALID POSITION"),void o(e,r,t)}else for(let n=1;n<t.length;n++)if((d+n)%10==0||"o"===e.game.board[d+n-1])return alert("INVALID POSITION"),void o(e,r,t);e.game.place(t,d,i),n(e,r)}e.exports=function(e,r,t,s){setTimeout((()=>{o(e,r,e.carrier)}),100),setTimeout((()=>{o(e,r,e.battleship)}),100),setTimeout((()=>{o(e,r,e.cruiser)}),100),setTimeout((()=>{o(e,r,e.submarine)}),100),setTimeout((()=>{o(e,r,e.destroyer)}),100),setTimeout((()=>{var e;a(e=t,e.carrier),a(e,e.battleship),a(e,e.cruiser),a(e,e.submarine),a(e,e.destroyer),n(t,s)}),100)}},468:e=>{e.exports=function(e,r){const t=r.querySelectorAll(".square");for(let r=0;e.game.board.length>r;r++)"o"===e.game.board[r]&&t[r].classList.add("ship-square"),"M"===e.game.board[r]&&t[r].classList.add("hit-square"),"x"===e.game.board[r]&&t[r].classList.add("hit-ship-square"),"X"===e.game.board[r]&&t[r].classList.add("sunk-ship-square")}},469:e=>{e.exports=function(e,r){const t=r.querySelectorAll(".square");for(let r=0;e.game.board.length>r;r++)"M"===e.game.board[r]&&t[r].classList.add("hit-square"),"x"===e.game.board[r]&&t[r].classList.add("hit-ship-square"),"X"===e.game.board[r]&&t[r].classList.add("sunk-ship-square")}}},r={};function t(n){var a=r[n];if(void 0!==a)return a.exports;var o=r[n]={id:n,exports:{}};return e[n](o,o.exports,t),o.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{"use strict";var e=t(379),r=t.n(e),n=t(795),a=t.n(n),o=t(569),s=t.n(o),i=t(565),d=t.n(i),c=t(216),l=t.n(c),u=t(589),p=t.n(u),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=s().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),r()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=t(370),g=t(37),b=t(647),v=t(468),y=t(469),x=t(910),w=t(96),k=t(784);g(),document.querySelector(".p-name-input").addEventListener("keydown",(e=>{if("Enter"===e.key){const r=e.target.parentNode.parentNode,t=e.target.value,n=h(t),a=h("computer"),o=b(n),s=b(a);r.remove(),w(n,o,a,s),function(e,r,t,n){n.querySelectorAll(".square").forEach((a=>{a.addEventListener("click",(a=>{if(t.game.allSunk()||e.game.allSunk())return;const{index:o}=a.target.dataset,s=parseInt(o,10);if("M"===t.game.board[s]||"x"===t.game.board[s]||"X"===t.game.board[s])return;if(t.game.recieveAttack(s),y(t,n),t.game.allSunk()&&k(e),t.game.allSunk())return;if("x"===t.game.board[s]||"X"===t.game.board[s])return;let i=x(e,r);for(v(e,r);"x"===e.game.board[i]||"X"===e.game.board[i];)i=x(e,r),v(e,r);e.game.allSunk()&&k(t)}))}))}(n,o,a,s)}}))})()})();