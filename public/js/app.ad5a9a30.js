(function(t){function a(a){for(var e,i,o=a[0],u=a[1],l=a[2],h=0,d=[];h<o.length;h++)i=o[h],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(e in u)Object.prototype.hasOwnProperty.call(u,e)&&(t[e]=u[e]);c&&c(a);while(d.length)d.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,a=0;a<r.length;a++){for(var s=r[a],e=!0,o=1;o<s.length;o++){var u=s[o];0!==n[u]&&(e=!1)}e&&(r.splice(a--,1),t=i(i.s=s[0]))}return t}var e={},n={app:0},r=[];function i(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,a,s){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)i.d(s,e,function(a){return t[a]}.bind(null,e));return s},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=a,o=o.slice();for(var l=0;l<o.length;l++)a(o[l]);var c=u;r.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"034f":function(t,a,s){"use strict";var e=s("85ec"),n=s.n(e);n.a},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("nav",{staticClass:"navbar navbar-light bg-light",attrs:{id:"navbar-example"}},[s("span",{attrs:{id:"curinga"}},t._l(t.curingas,(function(a){return s("div",{key:a,staticClass:"card",class:t.quemTemPoe?"quemTemPoe "+t.extrairNype(a):t.extrairNype(a)},[s("p",[t._v(t._s(t.extrairCarta(a)))])])})),0),s("span",{attrs:{id:"jogadores"}},t._l(t.jogadores,(function(a){return s("div",{key:a.nome,staticClass:"jogador",class:a.dealer?"dealer":"",attrs:{title:a.admin?"Admin":""}},[s("span",{staticClass:"foto"},[s("img",{attrs:{src:"https://api.adorable.io/avatars/60/"+a.nome+".png",alt:""}})]),s("span",{staticClass:"nome",class:a.admin?"admin":""},[t._v(t._s(a.nome))]),s("span",{staticClass:"qtdCartas badge",class:"cor-"+a.quantidadeCartas,attrs:{title:"Quantidade cartas"}},[t._v(t._s(a.quantidadeCartas))]),s("span",{staticClass:"qtdPontos badge badge-dark",attrs:{title:"Vitorias"}},[t._v(t._s(a.pontosRodada))])])})),0),s("ul",{staticClass:"nav nav-pills"},[s("li",{staticClass:"nav-item"},[t.estaLogado?s("input",{staticClass:"btn btn-sm btn-success",attrs:{type:"button",value:"Dar Cartas"},on:{click:function(a){return t.embaralhar()}}}):t._e()]),s("li",{staticClass:"nav-item"},[t.estaLogado&&!t.existeAdmin?s("input",{staticClass:"btn btn-sm btn-warning",attrs:{type:"button",value:"Virar Admin"},on:{click:function(a){return t.virarAdmin()}}}):t._e()]),s("li",{staticClass:"nav-item"},[t.estaLogado?t._e():s("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:function(a){return t.entrar()}}},[t._v("Entrar")]),t.estaLogado?s("input",{staticClass:"btn btn-sm btn-danger",attrs:{type:"button",value:"Sair"},on:{click:function(a){return t.sair()}}}):t._e()])])]),s("div",{attrs:{id:"mesa"}},[s("div",{staticClass:"hand grow"},t._l(t.mesa,(function(a,e){return s("div",{key:e,staticClass:"card",class:0===e&&t.quemTemPoe?"quemTemPoe "+t.extrairNype(a.carta):t.extrairNype(a.carta),attrs:{title:"Click na carta vencedora"},on:{click:function(a){return t.setarGanhador(e)}}},[s("p",[t._v(t._s(t.extrairCarta(a.carta)))]),s("span",[t._v(t._s(a.jogador))])])})),0)]),s("div",{attrs:{id:"minhas"}},[s("div",{staticClass:"hand grow"},t._l(t.cartas,(function(a,e){return s("div",{key:e,staticClass:"card",class:t.classeMinhaCarta(a),attrs:{title:"Click para jogar a carta"},on:{click:function(s){return t.jogar(e,a)}}},[s("p",[t._v(t._s(t.extrairCarta(a)))])])})),0)]),t._m(0)])},r=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal",attrs:{tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v("Modal title")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),s("div",{staticClass:"modal-body"},[s("p",[t._v("Modal body text goes here.")])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Save changes")])])])])])}],i=(s("4de4"),s("13d5"),s("bc3a")),o=s.n(i),u={name:"App",data:function(){return{host:"",nome:null,senha:null,admin:!1,dealer:!1,quantidade:0,mesa:[],curingas:[],jogadores:[],cartas:[]}},components:{},mounted:function(){var t=this;window.localStorage&&window.localStorage.getItem("nome")&&window.localStorage.getItem("senha")&&(this.nome=window.localStorage.getItem("nome"),this.senha=window.localStorage.getItem("senha")),setInterval((function(){t.sala(),t.getCartas()}),1e3)},computed:{estaLogado:function(){return null!=this.nome&&null!=this.senha},existeAdmin:function(){var t=this.jogadores.filter((function(t){return 1==t.admin}));return t.length>0},isAdmin:function(){return!0===this.admin},isDealer:function(){return!0===this.dealer},quemTemPoe:function(){return!(!this.mesa.length||!this.curingas.length)&&this.extrairNype(this.mesa[0].carta)===this.extrairNype(this.curingas[0])}},methods:{minhaCartaECuringa:function(t){return!!this.curingas.length&&this.extrairNype(t)===this.extrairNype(this.curingas[0])},extrairNype:function(t){if(t){var a="1"==t.substr(0,1)?t.substr(2,1):t.substr(1,1);switch(a){case"♦":return"suitdiamonds";case"♥":return"suithearts";case"♣":return"suitclubs";case"♠":return"suitspades";default:return"0"}}},extrairBaralho:function(t){return"1"==t.substr(0,1)?t.substr(3,1):t.substr(2,1)},extrairCarta:function(t){return"1"==t.substr(0,1)?t.substr(0,2):t.substr(0,1)},entrar:function(){var t=this,a=prompt("Seu nome ?");void 0!=a&&""!=a&&(this.nome=a,o.a.post(this.host+"/salas/entrar",{nome:this.nome}).then((function(a){t.senha=a.data.senha,window.localStorage.setItem("nome",t.nome),window.localStorage.setItem("senha",t.senha)})))},sair:function(){var t=this;o.a.post(this.host+"/salas/sair",{nome:this.nome,senha:this.senha}).then((function(){t.nome=null,t.senha=null,t.cartas=[],window.localStorage.removeItem("nome"),window.localStorage.removeItem("senha")}))},embaralhar:function(){var t=prompt("Quantas cartas ?");void 0!=t&&""!=t&&o.a.post(this.host+"/salas/embaralhar",{quantidade:t,nome:this.nome,senha:this.senha})},possoJogar:function(){var t=this.jogadores.reduce((function(t,a){return t.quantidadeCartas>a.quantidadeCartas?t.quantidadeCartas:a.quantidadeCartas}));return console.log(this.mesa.length,this.jogadores.length),this.cartas.length>=t&&this.mesa.length<this.jogadores.length},tenhoCuringa:function(){var t=this;if(this.curingas.length){var a=this.cartas.filter((function(a){return t.extrairNype(a)===t.extrairNype(t.curingas[0])}));return a.length>0}return!1},classeMinhaCarta:function(t){return this.quemTemPoe&&this.minhaCartaECuringa(t)&&this.possoJogar()?"quemTemPoe "+this.extrairNype(t):this.quemTemPoe&&!this.minhaCartaECuringa(t)&&this.tenhoCuringa()?"cartaBloqueada "+this.extrairNype(t):!this.quemTemPoe||this.minhaCartaECuringa(t)||this.tenhoCuringa()||this.possoJogar()?this.quemTemPoe&&this.minhaCartaECuringa(t)&&this.tenhoCuringa()&&!this.possoJogar()?"cartaBloqueada "+this.extrairNype(t):this.quemTemPoe||this.possoJogar()?this.extrairNype(t):"cartaBloqueada "+this.extrairNype(t):"cartaBloqueada "+this.extrairNype(t)},cartaPermitida:function(t){return this.quemTemPoe&&this.minhaCartaECuringa(t)&&this.possoJogar()||this.quemTemPoe&&!this.minhaCartaECuringa(t)&&!this.tenhoCuringa()&&this.possoJogar()||!this.quemTemPoe&&this.possoJogar()},jogar:function(t,a){var s=this;this.cartaPermitida(a)&&o.a.post(this.host+"/salas/jogar",{posicaoCarta:t,nome:this.nome,senha:this.senha}).then((function(t){s.sala(),s.cartas=t.data.cartas}))},setarGanhador:function(t){var a=this;this.admin&&o.a.post(this.host+"/salas/setarGanhador",{posicaoCartaVencedora:t}).then((function(){a.sala()}))},virarAdmin:function(){var t=this;o.a.post(this.host+"/salas/virarAdmin",{nome:this.nome,senha:this.senha}).then((function(){t.sala()}))},sala:function(){var t=this;o.a.get(this.host+"/salas").then((function(a){a.data&&a.data.mesa&&(t.mesa.length!==a.data.mesa.length&&(t.mesa=a.data.mesa),t.jogadores=a.data.jogadores,t.curingas=a.data.curingas)}))},novaRodada:function(){o.a.post(this.host+"/salas/novaRodada")},getCartas:function(){var t=this;null!=this.nome&&null!=this.senha&&o.a.post(this.host+"/salas/minhasCartas",{nome:this.nome,senha:this.senha}).then((function(a){t.cartas=a.data.cartas,t.dealer=a.data.dealer,t.admin=a.data.admin}))}}},l=u,c=(s("034f"),s("2877")),h=Object(c["a"])(l,n,r,!1,null,null,null),d=h.exports;e["a"].config.productionTip=!1,new e["a"]({render:function(t){return t(d)}}).$mount("#app")},"85ec":function(t,a,s){}});
//# sourceMappingURL=app.ad5a9a30.js.map