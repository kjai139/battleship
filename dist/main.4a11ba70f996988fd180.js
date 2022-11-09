(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(81),a=n.n(r),o=n(645),s=n.n(o),d=n(667),i=n.n(d),l=new URL(n(304),n.b),c=new URL(n(909),n.b),p=s()(a()),u=i()(l),m=i()(c);p.push([e.id,":root {\n    --uiFont: 'Secular One', sans-serif;\n    --openSans: 'Open Sans', sans-serif;\n    --disabled: #d1d5db;\n    --hover: #99f6e4;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nhtml, body {\n    height:100%\n}\n\n.overlay {\n    z-index: 10;\n    top: 0;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    backdrop-filter: blur(3px);\n    background-color: rgba(34,34,34, 0.4);\n}\n.overlayGameMenu {\n    z-index: 11;\n    justify-content: center;\n    display: flex;\n    align-items: center;\n    height: 100%;\n    position: absolute;\n    top: 0px;\n    width: 100%;\n}\n.overlayBox {\n    \n    border: 1px solid black;\n    padding: 10px;\n    display:flex;\n    flex-direction: column;\n}\n\n.overlayTxt {\n    font-size: 60px;\n    font-weight: bold;\n    font-family: var(--openSans);\n}\n\n.newGameBtn {\n    align-self: center;\n    font-family: var(--uiFont);\n    width: 200px;\n}\n\n.hidden {\n    visibility: hidden;\n}\n\n.masked {\n    background-color: gainsboro !important;\n}\n\n.topUi {\n    display: flex;\n    height: 100%;\n    justify-content: center;\n    align-items: center;\n}\n\n.uiTxt, .gameTxt, .gameTxt2 {\n    justify-content: center;\n    font-family: var(--uiFont);\n    display: flex;\n    text-align: center;\n}\n\n#startDiv {\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    height:100%;\n    flex-direction: column;\n}\n\n#screenDiv {\n    border: 1px solid black;\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n}\n\n#startGameTxt {\n    font-size: 100px;\n    font-family: var(--uiFont);\n}\n\n#startGameBtn {\n    display:flex;\n    align-items: center;\n    width: 100%;\n    justify-content: center;\n}\n\n#startGameBtn > img {\n    width: 50px;\n}\n\n#startGameBtn > p {\n    font-family: var(--openSans);\n    font-size: 40px;\n}\n\n.boardContainer {\n    display:grid;\n    grid-template-columns: repeat(10, 1fr);\n    gap: 3px;\n}\n\n.boardBlocks {\n    width: 30px;\n    height:30px;\n    border: 1px solid black;\n   \n    \n}\n\n#gameBoardDiv {\n    display: flex;\n    gap: 100px;\n}\n\n.unchecked:hover {\n    background-color: white;\n    cursor: pointer;\n}\n\n.markHit {\n    background-image: url("+u+");\n    background-size: contain;\n    \n    \n    object-fit: fill;\n}\n\n.markHit:disabled, .markMiss:disabled {\n    cursor: not-allowed;\n}\n\n.markMiss {\n    background-image: url("+m+");\n    background-size: contain;\n    object-fit: fill;\n}\n\n#scoreDiv {\n    width: 226px;\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n#shipUiDiv {\n    width: 800px;\n}\n#shipBtnDiv {\n    display: flex;\n    padding: 10px;\n    gap: 10px;\n}\n\n.shipBtns:hover:not(:disabled) {\n    cursor: pointer;\n}\n\n#shipBtnDiv > button {\n    background-color: white;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n    width: 200px;\n    height: 70px;\n    border-radius: 10px;\n    \n}\n\n.shipBlock {\n    background-color: black;\n}\n\n.destroyerContainer {\n    \n}\n\n.submarineContainer, .cruiserContainer {\n    \n}\n\n.horizontal.destroyerContainer {\n    cursor: grabbing;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 3px;\n    align-self: flex-start;\n}\n\n.horizontal.battleshipContainer {\n    cursor: grabbing;\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 3px;\n    align-self: flex-start;\n}\n\n.horizontal.submarineContainer {\n    cursor: grabbing;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 3px;\n    align-self: flex-start;\n}\n\n.horizontal.cruiserContainer {\n    cursor: grabbing;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 3px;\n    align-self: flex-start;\n}\n.vertical {\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    gap: 3px;\n    align-self: flex-start;\n}\n\n.horizontal.carrierContainer {\n    cursor: grabbing;\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    gap: 3px;\n    align-self: flex-start;\n}\n\n\n#shipInventoryDiv {\n    padding: 5px;\n    gap: 20px;\n    width: 800px;\n    display: flex;\n    border: 1px solid black;\n}\n\n.disabledBtn:disabled {\n    background-color: var(--disabled);\n    \n}\n\n.dragging {\n    display:none;\n}\n\n.drag-over {\n    border: dashed 3px red;\n}\n\n#readyBtn {\n    padding: 5px;\n    background-color: white;\n    border-radius: 7px;\n    border: 2px solid black;\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n#readyBtn:hover {\n    background-color: var(--hover);\n    cursor: pointer;\n\n}\n\n.disabledBoard {\n    pointer-events: none;\n}\n\n\n",""]);const h=p},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var d=0;d<this.length;d++){var i=this[d][0];null!=i&&(s[i]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&s[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),t.push(c))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},s=[],d=0;d<e.length;d++){var i=e[d],l=r.base?i[0]+r.base:i[0],c=o[l]||0,p="".concat(l," ").concat(c);o[l]=c+1;var u=n(p),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=a(m,r);r.byIndex=d,t.splice(d,0,{identifier:p,updater:h,references:1})}s.push(p)}return s}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var d=n(o[s]);t[d].references--}for(var i=r(e,a),l=0;l<o.length;l++){var c=n(o[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}o=i}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},304:(e,t,n)=>{e.exports=n.p+"00bbfbd6e936f89aa5b5.svg"},909:(e,t,n)=>{e.exports=n.p+"7356121792c2f2497f95.svg"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),s=n.n(o),d=n(565),i=n.n(d),l=n(216),c=n.n(l),p=n(589),u=n.n(p),m=n(426),h={};function g(e=""){const t={board:[]};return t.name=e,t.createBoard=()=>{for(let e=0;e<10;e++){let e=[];for(let t=0;t<10;t++)e.push(0);t.board.push(e)}},t.placeShip=(e,n)=>{console.log("shiplength",n.length,n.position);let r=b(t.board,e,n.length,n.position);if(console.log("cordArr check",r),!r)return console.log("invalid placement"),!1;r.forEach((e=>{console.log(e,"cordarray in placeship"),t.board[e[0]][e[1]]=n,v(t.name,[e[0],e[1]])}))},t.receiveAttack=e=>0!=t.board[e[0]][e[1]]?(t.board[e[0]][e[1]].hit(),t.board[e[0]][e[1]].isSunk(),console.log(t.board),!0):0==t.board[e[0]][e[1]]?(console.log("attack missed"),!1):void 0,t}h.styleTagTransform=u(),h.setAttributes=i(),h.insert=s().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=c(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const v=(e,t)=>{let n=document.querySelector(`#${e}-${t[0]}-${t[1]}`);console.log(`#${e}-${t[0]}-${t[1]}`),n.classList.add("shipBlock")},b=(e,t,n,r="h")=>{let a=[],o=0,s=Number(t[0])+n-1,d=Number(t[1])+n-1;if(0==e[t[0]][t[1]]&&"h"==r&&Number(t[0])+n<=10){if(0==e[s][t[1]]&&((e,t,n)=>{let r=Number(t[0]),a=Number(n)-r,o=1;for(let n=1;n<a;n++)0==e[r+n][t[1]]&&(o+=1);return console.log("num of pass:",o,"diff:",a),o==a})(e,t,s)){for(let e=0;n>e;n--)a.push([[Number(t[0])+o],[t[1]]]),o+=1;return console.log("cCords",a),a}return console.log("not enuf room"),!1}if(0==e[t[0]][t[1]]&&"v"==r&&Number(t[1])+n<=10){if(0==e[t[0]][d]&&((e,t,n)=>{let r=Number(t[0]),a=Number(t[1]),o=Number(n);console.log("endV",o,"start",a);let s=o-a,d=1;for(let t=1;t<s;t++)0==e[r][a+t]&&(d+=1);return console.log("num of pass:",d,"diff:",s),d==s})(e,t,d)){for(let e=0;n>e;n--)a.push([[t[0]],[Number(t[1])+o]]),o+=1;return console.log("cCordsV",a),a}return console.log("not enuf room"),!1}return console.log("invalid block"),!1};function f(e,t=0,n=!1,r="h"){const a={};return a.length=e,a.dmgTaken=t,a.sunk=n,a.name="",a.position=r,a.placed=!1,a.hit=(e=1)=>(console.log(`${a} has been hit!`),a.dmgTaken+=e),a.isSunk=()=>{let e=document.querySelector(".gameTxt2");return a.dmgTaken>=a.length?(console.log(`${a.name} has sunk!`),e.textContent=`A ${a.name} has sunk!`,a.sunk=!0):(console.log(`ship dmg: ${a.dmgTaken}/${a.length}`),a.sunk=!1)},a}class y{constructor(e,t="human"){this.name=e,this.type=t,this.prevHit=!1,this.lastMove="",this.board=""}}let k=new y("p1"),L=new y("p2");L.type="npc",k.board="left",L.board="right";let x=g("playerBoard"),B=g("npcBoard"),C=f(2);C.name="destroyer";let E=f(3);E.name="submarine";let S=f(3);S.name="cruiser";let T=f(4);T.name="battleship";let q=f(5);q.name="carrier";let w=f(2);w.name="destroyer";let A=f(3);A.name="submarine";let M=f(3);M.name="cruiser";let D=f(4);D.name="battleship";let $=f(5);$.name="carrier";const N=(e,t)=>{let n=new Audio("https://actions.google.com/sounds/v1/alarms/beep_short.ogg"),r=new Audio("https://actions.google.com/sounds/v1/weapons/big_explosion_distant.ogg");return 1==e.receiveAttack(I(t))?(r.play(),t.classList.remove("unchecked"),t.classList.add("markHit"),t.disabled=!0,!0):(n.play(),t.classList.remove("unchecked"),t.classList.add("markMiss"),t.disabled=!0,!1)},I=e=>{let t=e.id.split("-"),n=[Number(t[1]),Number(t[2])];return console.log(n),n},z=e=>{e.classList.add("disabledBoard")},H=e=>{e.classList.remove("disabledBoard")},j=()=>{let e=document.querySelector(".gameTxt");document.querySelector(".gameTxt2").textContent="",e.textContent=""},P=e=>"left"==e.board?1==A.sunk&&1==$.sunk&&1==D.sunk&&1==M.sunk&&1==w.sunk&&(console.log(`${e.name} wins!`),_(e.name),!0):"right"==e.board?1==E.sunk&&1==q.sunk&&1==T.sunk&&1==S.sunk&&1==C.sunk&&(console.log(`${e.name} wins!`),_(e.name),!0):void 0,_=e=>{let t=new Audio("https://actions.google.com/sounds/v1/crowds/battle_crowd_celebration.ogg"),n=document.createElement("div");n.classList.add("overlay"),document.body.appendChild(n);let r=document.createElement("div");r.classList.add("overlayGameMenu");let a=document.createElement("div");a.classList.add("overlayBox");let o=document.createElement("p");o.classList.add("overlayTxt"),"p1"==e?o.textContent="Winner:Player 1!":"p2"==e&&(o.textContent="Winner:Player 2!"),t.play();let s=document.createElement("button");s.classList.add("newGameBtn"),s.textContent="New game",s.addEventListener("click",(()=>{t.pause(),t.currentTime=0,G()})),a.appendChild(o),a.appendChild(s),r.appendChild(a),document.body.appendChild(r)},G=()=>{let e=document.querySelector(".overlay"),t=document.querySelector(".overlayGameMenu"),n=document.querySelector("#shipUiDiv"),r=document.querySelector("#shipInventoryDiv");e.remove(),t.remove(),r.remove(),n.remove(),x.board=[],B.board=[],T.dmgTaken=0,T.sunk=!1,T.placed=!1,q.dmgTaken=0,q.sunk=!1,q.placed=!1,S.dmgTaken=0,S.sunk=!1,S.placed=!1,E.dmgTaken=0,E.sunk=!1,E.placed=!1,C.dmgTaken=0,C.sunk=!1,C.placed=!1,D.dmgTaken=0,D.sunk=!1,D.placed=!1,$.dmgTaken=0,$.sunk=!1,$.placed=!1,M.dmgTaken=0,M.sunk=!1,M.placed=!1,A.dmgTaken=0,A.sunk=!1,A.placed=!1,w.dmgTaken=0,w.sunk=!1,w.placed=!1,ce()},U=()=>[Math.floor(10*Math.random()),Math.floor(10*Math.random())],F=(e,t)=>{let n,r=Math.floor(4*Math.random())+1;return 1==r?n=[e,t-1]:2==r?n=[e,t+1]:3==r?n=[e-1,t]:4==r&&(n=[e+1,t]),n},O=e=>e[0]>9||e[0]<0||e[1]>9||e[1]<0?(console.log("out of board"),!1):!!document.querySelector(`#playerBoard-${e[0]}-${e[1]}`).classList.contains("unchecked"),R=()=>{let e=U(),t=Math.floor(2*Math.random());if(1==t?w.position="v":0==t&&(w.position="h"),0==B.placeShip(e,w))return console.log("falty placement npc destroyer"),R()},Z=()=>{let e=U(),t=Math.floor(2*Math.random());if(1==t?A.position="v":0==t&&(A.position="h"),0==B.placeShip(e,A))return console.log("falty placement npc sub"),Z()},V=()=>{let e=U(),t=Math.floor(2*Math.random());if(1==t?M.position="v":0==t&&(M.position="h"),0==B.placeShip(e,M))return console.log("falty placement npc cruiser"),V()},W=()=>{let e=U(),t=Math.floor(2*Math.random());if(1==t?D.position="v":0==t&&(D.position="h"),0==B.placeShip(e,D))return console.log("falty placement npc battleship"),W()},J=()=>{let e=U(),t=Math.floor(2*Math.random());if(1==t?$.position="v":0==t&&($.position="h"),0==B.placeShip(e,$))return console.log("falty placement npc carrier"),J()},Q=(e,t)=>{document.querySelector(".uiTxt"),document.querySelector("#npcBoard"),document.querySelector("#playerArrow"),document.querySelector("#npcArrow"),document.querySelector("#readyBtn").classList.add("hidden"),K(k)},K=e=>{let t=document.querySelector(".uiTxt"),n=document.querySelector("#npcBoard"),r=document.querySelector("#playerBoard"),a=document.querySelector("#playerArrow"),o=document.querySelector("#npcArrow");"p1"==e.name?(z(r),setTimeout((()=>{a.classList.remove("hidden"),o.classList.add("hidden"),t.textContent="Player 1's Turn to attack",j()}),1e3),H(n)):"p2"==e.name&&"npc"==e.type&&(console.log("npc script"),z(n),setTimeout((()=>{a.classList.add("hidden"),o.classList.remove("hidden"),t.textContent="NPC's Turn to attack",j(),setTimeout((()=>{H(r),(e=>{let t=U(),n=document.querySelector(`#playerBoard-${t[0]}-${t[1]}`);if(e.prevHit){let r=e.lastMove.split("-"),a=Number(r[1]),o=Number(r[2]),s=0,d=F(a,o);for(console.log(d);0==O(d)&&(s+=1,console.log("errorcount",s,a,o),d=F(a,o),console.log("newmove generated",d),!(s>4)););if(s>4){for(;0==O(t);)t=U();n=document.querySelector(`#playerBoard-${t[0]}-${t[1]}`),n.click()}else document.querySelector(`#playerBoard-${d[0]}-${d[1]}`).click()}else{for(;0==O(t);)t=U();n=document.querySelector(`#playerBoard-${t[0]}-${t[1]}`),n.click()}})(e)}),1e3)}),1e3))},X=()=>{console.log("destroyerplacement triggered");let e=document.createElement("div");e.setAttribute("draggable","true"),e.setAttribute("id","destroyer-h"),e.classList.add("destroyerContainer"),e.classList.add("horizontal");let t=document.createElement("div"),n=document.createElement("div");t.classList.add("boardBlocks"),t.classList.add("shipBlock"),n.classList.add("boardBlocks"),n.classList.add("shipBlock"),e.appendChild(t),e.appendChild(n);const r=document.querySelector("#shipInventoryDiv");r.classList.remove("hidden"),e.addEventListener("click",(()=>le(C,e))),e.addEventListener("dragstart",re),e.addEventListener("dragend",ae),r.appendChild(e);let a=document.querySelector("#destroyerBtn");a.classList.add("disabledBtn"),a.setAttribute("disabled","true")},Y=()=>{console.log("submarine placement triggered");let e=document.createElement("div");e.setAttribute("draggable","true"),e.setAttribute("id","submarine-h"),E.position="v",e.classList.add("submarineContainer"),e.classList.add("vertical");let t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div");t.classList.add("boardBlocks"),t.classList.add("shipBlock"),n.classList.add("boardBlocks"),n.classList.add("shipBlock"),r.classList.add("boardBlocks"),r.classList.add("shipBlock"),e.appendChild(t),e.appendChild(n),e.appendChild(r);const a=document.querySelector("#shipInventoryDiv");a.classList.remove("hidden"),e.addEventListener("click",(()=>le(E,e))),e.addEventListener("dragstart",re),e.addEventListener("dragend",ae),a.appendChild(e);let o=document.querySelector("#submarineBtn");o.classList.add("disabledBtn"),o.setAttribute("disabled","true")},ee=()=>{console.log("cruiser placement triggered");let e=document.createElement("div");e.setAttribute("draggable","true"),e.setAttribute("id","cruiser-h"),e.classList.add("cruiserContainer"),e.classList.add("horizontal");let t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div");t.classList.add("boardBlocks"),t.classList.add("shipBlock"),n.classList.add("boardBlocks"),n.classList.add("shipBlock"),r.classList.add("boardBlocks"),r.classList.add("shipBlock"),e.appendChild(t),e.appendChild(n),e.appendChild(r);const a=document.querySelector("#shipInventoryDiv");a.classList.remove("hidden"),e.addEventListener("click",(()=>le(S,e))),e.addEventListener("dragstart",re),e.addEventListener("dragend",ae),a.appendChild(e);let o=document.querySelector("#cruiserBtn");o.classList.add("disabledBtn"),o.setAttribute("disabled","true")},te=()=>{console.log("battleship placement triggered");let e=document.createElement("div");e.setAttribute("draggable","true"),e.setAttribute("id","battleship-h"),e.classList.add("battleshipContainer"),e.classList.add("horizontal");let t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div");t.classList.add("boardBlocks"),t.classList.add("shipBlock"),n.classList.add("boardBlocks"),n.classList.add("shipBlock"),r.classList.add("boardBlocks"),r.classList.add("shipBlock"),a.classList.add("boardBlocks"),a.classList.add("shipBlock"),e.appendChild(t),e.appendChild(n),e.appendChild(r),e.appendChild(a);const o=document.querySelector("#shipInventoryDiv");o.classList.remove("hidden"),e.addEventListener("click",(()=>le(T,e))),e.addEventListener("dragstart",re),e.addEventListener("dragend",ae),o.appendChild(e);let s=document.querySelector("#battleshipBtn");s.classList.add("disabledBtn"),s.setAttribute("disabled","true")},ne=()=>{console.log("carrier placement triggered");let e=document.createElement("div");e.setAttribute("draggable","true"),e.setAttribute("id","carrier-h"),e.classList.add("carrierContainer"),e.classList.add("horizontal");let t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div");t.classList.add("boardBlocks"),t.classList.add("shipBlock"),n.classList.add("boardBlocks"),n.classList.add("shipBlock"),r.classList.add("boardBlocks"),r.classList.add("shipBlock"),a.classList.add("boardBlocks"),a.classList.add("shipBlock"),o.classList.add("boardBlocks"),o.classList.add("shipBlock"),e.appendChild(t),e.appendChild(n),e.appendChild(r),e.appendChild(a),e.appendChild(o);const s=document.querySelector("#shipInventoryDiv");s.classList.remove("hidden"),e.addEventListener("click",(()=>le(q,e))),e.addEventListener("dragstart",re),e.addEventListener("dragend",ae),s.appendChild(e);let d=document.querySelector("#carrierBtn");d.classList.add("disabledBtn"),d.setAttribute("disabled","true")},re=e=>{setTimeout((()=>{e.target.classList.add("dragging")}),0);let t=e.target.id.split("-")[0];console.log("dragstart",t),e.dataTransfer.setData("text/plain",t);let n=document.querySelector("#playerBoard");H(n)},ae=e=>{e.target.classList.remove("dragging");let t=document.querySelector("#playerBoard");z(t)},oe=e=>{e.preventDefault(),e.target.classList.add("drag-over")},se=e=>{e.preventDefault(),e.target.classList.add("drag-over")},de=e=>{e.target.classList.remove("drag-over")},ie=e=>{e.target.classList.remove("drag-over");const t=e.dataTransfer.getData("text/plain");let n=[e.target.id.split("-")[1],e.target.id.split("-")[2]];console.log("cords",n),console.log("dropped",t,"at",e.target.id),"destroyer"==t?0!=x.placeShip(n,C)&&(document.querySelector(".destroyerContainer").remove(),C.placed=!0):"submarine"==t?0!=x.placeShip(n,E)&&(document.querySelector(".submarineContainer").remove(),E.placed=!0):"cruiser"==t?0!=x.placeShip(n,S)&&(document.querySelector(".cruiserContainer").remove(),S.placed=!0):"battleship"==t?0!=x.placeShip(n,T)&&(document.querySelector(".battleshipContainer").remove(),T.placed=!0):"carrier"==t&&0!=x.placeShip(n,q)&&(document.querySelector(".carrierContainer").remove(),q.placed=!0),(()=>{let e=document.querySelector("#scoreDiv"),t=document.querySelector(".uiTxt");const n=document.createElement("div"),r=document.createElement("button");let a=document.querySelector("#shipInventoryDiv");r.setAttribute("id","readyBtn"),r.textContent="Ready",r.addEventListener("click",Q),n.appendChild(r),1==C.placed&&1==E.placed&&1==S.placed&&1==T.placed&&1==q.placed&&(e.appendChild(n),t.textContent="Press the ready button to start",a.classList.add("hidden"))})();let r=document.querySelector("#playerBoard");z(r)},le=(e,t)=>{"h"==e.position?(e.position="v",t.classList.remove("horizontal"),t.classList.add("vertical")):"v"==e.position&&(e.position="h",t.classList.remove("vertical"),t.classList.add("horizontal")),console.log("current ship pos",e.position)},ce=()=>{let e=document.querySelector("#screenDiv");e.textContent="";let t=document.createElement("div");t.setAttribute("id","gameBoardDiv"),e.appendChild(t),he()},pe=e=>{let t=document.querySelector("#gameBoardDiv"),n=document.createElement("div");n.classList.add("boardContainer"),n.setAttribute("id",`${e.name}`);let r=0;for(;r<10;){for(let t=0;t<10;t++){let a=document.createElement("button");a.classList.add("boardBlocks"),a.classList.add("unchecked"),a.setAttribute("id",`${e.name}-${t}-${r}`),"npcBoard"==e.name?(a.classList.add("masked"),a.addEventListener("click",(()=>{a.classList.remove("masked"),N(e,a)?(k.prevHit=!0,k.lastMove=[t,r],console.log("prev hit",k.lastMove,k.prevHit),ue(a),setTimeout((()=>{0==P(k)&&setTimeout((()=>{K(L)}),1e3)}),1e3)):(k.prevHit=!1,k.lastMove="",console.log("prev miss",k.lastMove,k.prevHit),me(),K(L))}))):"playerBoard"==e.name&&a.addEventListener("click",(()=>{N(e,a)?(L.prevHit=!0,L.lastMove=a.id,console.log("prev hit",L.lastMove,L.prevHit),setTimeout((()=>{0==P(L)&&setTimeout((()=>{K(k)}),1e3)}),1e3)):(L.prevHit=!1,L.lastMove="",console.log("prev miss",L.lastMove,L.prevHit),K(k))})),n.appendChild(a)}r+=1}t.appendChild(n)},ue=e=>{let t=document.querySelector(".gameTxt"),n=e.id.split("-"),r=[Number(n[1]),Number(n[2])],a=B.board[r[0]][r[1]];console.log("ship",a),t.textContent=`NPC's ${a.name} has been hit!`},me=()=>{document.querySelector(".gameTxt").textContent="Attack missed"},he=()=>{x.createBoard(),B.createBoard(),pe(x),(()=>{const e=document.querySelector("#gameBoardDiv"),t=document.createElement("div");t.setAttribute("id","scoreDiv");const n=document.createElement("div"),r=document.createElement("img");n.setAttribute("id","playerArrow"),r.setAttribute("src","./svgs/right_arrow.svg"),n.appendChild(r),n.classList.add("hidden");const a=document.createElement("div"),o=document.createElement("p");o.classList.add("uiTxt"),o.textContent="Place your ships",a.appendChild(o);const s=document.createElement("div"),d=document.createElement("img");s.setAttribute("id","npcArrow"),d.setAttribute("src","./svgs/left_arrow.svg"),s.appendChild(d);const i=document.createElement("div");i.setAttribute("id","#msgDiv");const l=document.createElement("p");l.classList.add("gameTxt"),l.textContent="";const c=document.createElement("p");c.classList.add("gameTxt2"),i.appendChild(l),i.appendChild(c),t.appendChild(n),t.appendChild(a),t.appendChild(s),t.appendChild(i),e.appendChild(t)})(),pe(B),(()=>{const e=document.createElement("div");e.setAttribute("id","shipUiDiv");const t=document.createElement("div");t.setAttribute("id","shipBtnDiv");const n=document.createElement("button");n.classList.add("shipBtns"),n.setAttribute("id","carrierBtn"),n.style.backgroundImage="url(./imgs/carrier.png)",n.addEventListener("click",ne);const r=document.createElement("button");r.classList.add("shipBtns"),r.setAttribute("id","battleshipBtn"),r.style.backgroundImage="url(./imgs/battleship.png)",r.addEventListener("click",te);const a=document.createElement("button");a.classList.add("shipBtns"),a.setAttribute("id","cruiserBtn"),a.style.backgroundImage="url(./imgs/cruiser.png)",a.addEventListener("click",ee);const o=document.createElement("button");o.classList.add("shipBtns"),o.style.backgroundImage="url(./imgs/submarine.png)",o.setAttribute("id","submarineBtn"),o.addEventListener("click",Y);const s=document.createElement("button");s.classList.add("shipBtns"),s.setAttribute("id","destroyerBtn"),s.style.backgroundImage="url(./imgs/destroyer.png)",s.addEventListener("click",X),t.appendChild(n),t.appendChild(r),t.appendChild(a),t.appendChild(o),t.appendChild(s),e.appendChild(t);const d=document.querySelector("#startDiv");d.appendChild(e);const i=document.createElement("div");i.setAttribute("id","shipInventoryDiv"),i.classList.add("hidden"),d.appendChild(i);let l=document.querySelector("#playerBoard");for(const e of l.children)e.addEventListener("dragenter",se),e.addEventListener("dragover",oe),e.addEventListener("dragleave",de),e.addEventListener("drop",ie)})();let e=document.querySelector("#playerBoard"),t=document.querySelector("#npcBoard");z(e),z(t),R(),Z(),V(),W(),J()};document.querySelector("#startGameBtn").addEventListener("click",ce)})()})();