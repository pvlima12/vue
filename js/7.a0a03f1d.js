(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{1404:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"q-pa-md"},[n("div",{staticClass:"col-12"},[n("q-card",{staticClass:"shadow-1 full-width"},[n("q-table",{attrs:{grid:"","card-class":"bg-grey-2 text-accent",title:e.$t("voiceGuide"),data:e.voiceGuide,columns:e.columns,"row-key":"name",filter:e.filter,pagination:e.pagination,"hide-header":"",flat:""},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top-right",fn:function(){return[n("q-input",{attrs:{outlined:"",dense:"",borderless:"",debounce:"300",placeholder:e.$t("search")},scopedSlots:e._u([{key:"append",fn:function(){return[n("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]},proxy:!0},{key:"item",fn:function(t){return[n("div",{style:t.selected?"transform: scale(0.95);":""},[n("q-card",{staticClass:"q-ma-md",class:t.selected?"bg-grey-1":""},[n("q-btn",{staticClass:"full-width bg-grey-3",attrs:{label:"Reproduzir",flat:"",icon:"fas fa-play"},on:{click:function(e){t.selected=!0}}}),n("q-separator"),n("q-list",{attrs:{separator:""}},e._l(t.cols,(function(t){return n("q-item",{key:t.name},[n("q-item-section",[n("q-item-label",[e._v(e._s(t.label))])],1),n("q-item-section",{attrs:{side:""}},[n("q-item-label",{attrs:{caption:""}},[e._v(e._s(t.value))])],1)],1)})),1)],1)],1)]}}])})],1)],1)])},a=[],i=n("52b5"),s=n.n(i),o=(n("0dbc"),n("b7dd"),n("8cf6"),n("c1c3"),n("549c")),c=n.n(o),u=n("2811"),l=n.n(u),d=n("ddeb"),p=n.n(d),f=n("f26e"),h=n.n(f),v=n("39df1"),m=n.n(v),w=n("d997"),g=function(e){function t(){return l()(this,t),p()(this,h()(t).call(this,"/AudioGuide"))}return m()(t,e),t}(w["a"]),b={name:"VoiceGuidePage",data:function(){return{VoiceGuideService:new g,voiceGuide:[],filter:"",pagination:{sortBy:"name",descending:!1,page:1,rowsPerPage:20},columns:[{name:"name",label:this.$t("name"),field:"name",sortable:!0,align:"center"},{name:"description",label:this.$t("description"),field:"description",sortable:!0,align:"center"},{name:"sentence",label:this.$t("sentence"),field:"sentence",sortable:!0,align:"center"}]}},mounted:function(){this.getAudioGuide()},methods:{getAudioGuide:function(){var e=c()(s.a.mark((function e(){var t=this;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,this.VoiceGuideService.list().then((function(e){t.voiceGuide=e})).catch((function(e){return t.errorNotify(e.message)})).finally((function(){t.loading=!1}));case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),selectCard:function(){}}},y=b,x=(n("576f"),n("a6c2")),q=Object(x["a"])(y,r,a,!1,null,null,null);t["default"]=q.exports},"576f":function(e,t,n){"use strict";var r=n("66f0"),a=n.n(r);a.a},"66f0":function(e,t,n){},d997:function(e,t,n){"use strict";var r=n("52b5"),a=n.n(r),i=(n("c1c3"),n("549c")),s=n.n(i),o=n("2811"),c=n.n(o),u=n("9289"),l=n.n(u),d=n("7338"),p=n.n(d),f=function(e,t,n){var r=JSON.parse(JSON.stringify(e)).response;return navigator.onLine?r?new Error(h(r,t,n)):new Error("Servidor indisponivel, tente mais tarde"):new Error("Sem acesso à internet, por favor, tente mais tarde")},h=function(e,t,n){var r=e.data,a={400:function(){return v(r)},401:function(){return"Sessão expirada. Logue-se novamente"},404:function(){return"Endereço de acesso não encontrado"},500:function(){return m(t,n)},503:function(){return"Servidor indisponível. Tente novamente mais tardeftfr"},default:function(){return"Erro de verificação do status da requisição"}};return(a[e.status]||a["default"])()},v=function(e){return e&&e!=={}?e.length>1?e:e.error:"Existem erros a serem processados"},m=function(e,t){var n={list:"Não foi possível realizar a listagem, tente mais tarde.",get:"Não foi possível realizar a consulta de ".concat(t,", tente mais tarde."),create:"Não foi possível realizar o cadastro, tente mais tarde.",update:"Não foi possível realizar a edição, tente mais tarde.",remove:"Não foi possível realizar a exclusão, tente mais tarde.",login:"Não foi possível realizar o login, tente mais tarde.",default:"Erro de verificação"};return n[e]||n["default"]};n.d(t,"a",(function(){return w}));var w=function e(t){var n=this;c()(this,e),l()(this,"list",s()(a.a.mark((function e(){var t;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get(n.api);case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e["catch"](0),f(e.t0,"list");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))),l()(this,"show",function(){var e=s()(a.a.mark((function e(t){var r;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.http.get("".concat(n.api,"/").concat(t));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e["catch"](0),f(e.t0,"get","item");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),l()(this,"create",function(){var e=s()(a.a.mark((function e(t){var r;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.http.post(n.api,t);case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e["catch"](0),f(e.t0,"create");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),l()(this,"update",function(){var e=s()(a.a.mark((function e(t){var r;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.http.put("".concat(n.api),t);case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e["catch"](0),f(e.t0,"update");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),l()(this,"remove",function(){var e=s()(a.a.mark((function e(t){var r;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.http.delete("".concat(n.api,"/").concat(t));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e["catch"](0),f(e.t0,"remove");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),this.api=t,this.http=p.a}}}]);