(function(t){function a(a){for(var s,o,i=a[0],l=a[1],c=a[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(e,o)&&e[o]&&p.push(e[o][0]),e[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(a);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,a=0;a<r.length;a++){for(var n=r[a],s=!0,i=1;i<n.length;i++){var l=n[i];0!==e[l]&&(s=!1)}s&&(r.splice(a--,1),t=o(o.s=n[0]))}return t}var s={},e={app:0},r=[];function o(a){if(s[a])return s[a].exports;var n=s[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,a,n){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(n,s,function(a){return t[a]}.bind(null,s));return n},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=a,i=i.slice();for(var c=0;c<i.length;c++)a(i[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,a,n){t.exports=n("56d7")},"034f":function(t,a,n){"use strict";var s=n("85ec"),e=n.n(s);e.a},"56d7":function(t,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"navbar navbar-light bg-light",attrs:{id:"navbar-example"}},[n("span",{attrs:{id:"curinga"}},t._l(t.curingas,(function(a){return n("div",{key:a,staticClass:"card",class:t.extrairNype(a)},[n("p",[t._v(t._s(t.extrairCarta(a)))])])})),0),n("span",{attrs:{id:"jogadores"}},t._l(t.jogadores,(function(a){return n("div",{key:a.nome,staticClass:"jogador"},[n("span",[n("img",{attrs:{src:"https://api.adorable.io/avatars/60/"+a.nome+".png",alt:""}})]),n("p",[t._v(t._s(a.nome)+" "),n("span",{staticClass:"badge",class:"cor-"+a.quantidadeCartas},[t._v(t._s(a.quantidadeCartas))])])])})),0),n("ul",{staticClass:"nav nav-pills"},[n("li",{staticClass:"nav-item"},[t.estaLogado?n("input",{staticClass:"btn btn-sm btn-success",attrs:{type:"button",value:"Dar Cartas"},on:{click:function(a){return t.embaralhar()}}}):t._e()]),n("li",{staticClass:"nav-item"},[t.estaLogado?n("input",{staticClass:"btn btn-sm btn-warning",attrs:{type:"button",value:"LimparMesa"},on:{click:function(a){return t.novaRodada()}}}):t._e()]),n("li",{staticClass:"nav-item"},[t.estaLogado?t._e():n("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:function(a){return t.entrar()}}},[t._v("Entrar")]),t.estaLogado?n("input",{staticClass:"btn btn-sm btn-danger",attrs:{type:"button",value:"Sair"},on:{click:function(a){return t.sair()}}}):t._e()])])]),n("div",{attrs:{id:"mesa"}},[n("div",{staticClass:"hand"},t._l(t.mesa,(function(a){return n("div",{key:a,staticClass:"card",class:t.extrairNype(a.carta)},[n("p",[t._v(t._s(t.extrairCarta(a.carta)))]),n("span",[t._v(t._s(a.jogador))])])})),0)]),n("div",{attrs:{id:"minhas"}},[n("div",{staticClass:"hand grow"},t._l(t.cartas,(function(a,s){return n("div",{key:a,staticClass:"card",class:t.extrairNype(a),on:{click:function(a){return t.jogar(s)}}},[n("p",[t._v(t._s(t.extrairCarta(a)))])])})),0)]),t._m(0)])},r=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"modal",attrs:{tabindex:"-1",role:"dialog"}},[n("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title"},[t._v("Modal title")]),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),n("div",{staticClass:"modal-body"},[n("p",[t._v("Modal body text goes here.")])]),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Save changes")])])])])])}],o=n("bc3a"),i=n.n(o),l={name:"App",data:function(){return{nome:null,senha:null,quantidade:0,mesa:[],curingas:[],jogadores:[],cartas:[]}},components:{},mounted:function(){var t=this;window.localStorage&&window.localStorage.getItem("nome")&&window.localStorage.getItem("senha")&&(this.nome=window.localStorage.getItem("nome"),this.senha=window.localStorage.getItem("senha")),setInterval((function(){t.sala(),t.getCartas()}),1e3)},computed:{estaLogado:function(){return null!=this.nome&&null!=this.senha}},methods:{extrairNype:function(t){if(t){var a="1"==t.substr(0,1)?t.substr(2,1):t.substr(1,1);switch(a){case"♦":return"suitdiamonds";case"♥":return"suithearts";case"♣":return"suitclubs";case"♠":return"suitspades";default:return"0"}}},extrairBaralho:function(t){return"1"==t.substr(0,1)?t.substr(3,1):t.substr(2,1)},extrairCarta:function(t){return"1"==t.substr(0,1)?t.substr(0,2):t.substr(0,1)},entrar:function(){var t=this,a=prompt("Seu nome ?");this.nome=a,i.a.post("/salas/entrar",{nome:this.nome}).then((function(a){t.senha=a.data.senha,window.localStorage.setItem("nome",t.nome),window.localStorage.setItem("senha",t.senha)}))},sair:function(){var t=this;i.a.post("/salas/sair",{nome:this.nome,senha:this.senha}).then((function(){t.nome=null,t.senha=null,t.cartas=[],window.localStorage.removeItem("nome"),window.localStorage.removeItem("senha")}))},embaralhar:function(){var t=prompt("Quantas cartas ?");i.a.post("/salas/embaralhar",{quantidade:t})},jogar:function(t){var a=this;i.a.post("/salas/jogar",{posicaoCarta:t,nome:this.nome,senha:this.senha}).then((function(t){a.sala(),a.cartas=t.data.cartas}))},sala:function(){var t=this;i.a.get("/salas").then((function(a){t.mesa=a.data.mesa,t.jogadores=a.data.jogadores,t.curingas=a.data.curingas}))},novaRodada:function(){i.a.post("/salas/novaRodada")},getCartas:function(){var t=this;null!=this.nome&&null!=this.senha&&i.a.post("/salas/cartas",{nome:this.nome,senha:this.senha}).then((function(a){t.cartas=a.data.cartas}))}}},c=l,u=(n("034f"),n("2877")),d=Object(u["a"])(c,e,r,!1,null,null,null),p=d.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(p)}}).$mount("#app")},"85ec":function(t,a,n){}});
//# sourceMappingURL=app.c01fdc94.js.map