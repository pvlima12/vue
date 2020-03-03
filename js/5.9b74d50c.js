(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"0e6f":function(t,e,n){"use strict";var r,i,a={data:function(){return{}},methods:{successNotify:function(t){this.$q.notify({message:t,color:"positive",position:"top",timeout:1500,icon:"fas fa-check-square"})},warningNotify:function(t){this.$q.notify({message:t,color:"warning",position:"top",timeout:1500,icon:"fas fa-exclamation"})},errorNotify:function(t){this.$q.notify({message:t,color:"negative",position:"top",timeout:1500,icon:"fas fa-exclamation-triangle"})}}},s=a,o=n("a6c2"),c=Object(o["a"])(s,r,i,!1,null,null,null);e["a"]=c.exports},2405:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n("2811"),i=n.n(r),a=n("ddeb"),s=n.n(a),o=n("f26e"),c=n.n(o),u=n("39df1"),l=n.n(u),f=n("d997"),p=function(t){function e(){return i()(this,e),s()(this,c()(e).call(this,"/trunk"))}return l()(e,t),e}(f["a"])},a10c:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12"},[n("div",{staticClass:"full-width text-right q-mb-md"},[n("router-link",{attrs:{to:t.backToList}},[n("q-btn",{staticClass:"q-mr-sm",attrs:{outline:"","no-caps":"",label:t.$t("cancel"),color:"primary"}})],1),n("q-btn",{attrs:{"no-caps":"",color:"primary",label:t.$t("save"),icon:"fas fa-save"},on:{click:t.savePrefix}})],1),n("q-card",{staticClass:"shadow-1 col-12"},[n("q-tabs",{staticClass:"bg-grey-2 text-grey-7 shadow-1 full-width",attrs:{"inline-label":"","active-color":"primary","narrow-indicator":"",align:"left"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("q-tab",{attrs:{label:t.$t("general"),name:"general"}})],1),n("q-separator"),n("q-tab-panels",{attrs:{animated:"","transition-prev":"jump-up","transition-next":"jump-up"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("q-tab-panel",{attrs:{name:"general"}},[n("q-card-section",[n("div",{staticClass:"row justify-center"},[n("div",{staticClass:"q-ma-sm col-6"},[n("q-input",{attrs:{disable:t.editing,outlined:"",label:t.$t("dial"),maxlength:"20",dense:"",rules:[function(e){return!!e||t.$t("required")}]},model:{value:t.prefix.dial,callback:function(e){t.$set(t.prefix,"dial",e)},expression:"prefix.dial"}})],1)]),n("div",{staticClass:"row justify-center"},[n("div",{staticClass:"q-ma-sm col-6"},[n("q-input",{attrs:{outlined:"",label:t.$t("description"),maxlength:"20",dense:"",rules:[function(e){return!!e||t.$t("required")}]},model:{value:t.prefix.description,callback:function(e){t.$set(t.prefix,"description",e)},expression:"prefix.description"}})],1)]),n("div",{staticClass:"row justify-center"},[n("div",{staticClass:"q-ma-sm col-6"},[n("q-select",{attrs:{dense:"",outlined:"",multiple:"",options:t.idTrunkList,"option-value":"value","option-label":"label","map-options":"","emit-value":"",label:t.$t("trunk")},model:{value:t.prefix.trunk,callback:function(e){t.$set(t.prefix,"trunk",e)},expression:"prefix.trunk"}})],1)])])],1)],1)],1)],1)},i=[],a=(n("0dbc"),n("b7dd"),n("8cf6"),n("1a43"),n("2405")),s=n("f9b1"),o=n("0e6f"),c={name:"AddPrefixComponent",mixins:[o["a"]],data:function(){return{backToList:"/prefix",TrunkGroupsService:new a["a"],PrefixService:new s["a"],prefix:{dial:"",description:"",type:"multi-trunk",trunk:[]},idTrunkList:[],tab:"general"}},mounted:function(){this.getPrefix(),this.getTrunk()},computed:{editing:function(){return void 0!==this.$route.params.id&&null!=this.$route.params.id}},methods:{getTrunk:function(){var t=this;this.TrunkGroupsService.list().then((function(e){t.mapTrunk(e)})).catch((function(e){return t.errorNotify(e.message)}))},mapTrunk:function(t){this.idTrunkList=t.map((function(t){return{label:t.name,value:t.idTrunk}}))},savePrefix:function(){var t=this;this.editing?(this.$q.loading.show({delay:10}),this.PrefixService.update(this.prefix).then((function(e){t.successNotify("Prefix ".concat(t.prefix.description," updated")),t.$router.push("/prefix")})).catch((function(e){t.errorNotify(e.message)})).finally((function(){return t.$q.loading.hide()}))):this.PrefixService.create(this.prefix).then((function(e){t.successNotify("User ".concat(t.prefix.dial," created!")),t.$router.push("/prefix")})).catch((function(e){return t.errorNotify(e.message)})).finally((function(){return t.$q.loading.hide()}))},getPrefix:function(){var t=this;this.prefix.idPrefix=this.$route.params.id,this.prefix.idPrefix&&(this.$q.loading.show({delay:10,message:"<span>Loading Prefix ...</span>"}),this.PrefixService.show(this.prefix.idPrefix).then((function(e){t.prefix=e})).catch((function(e){return t.errorNotify(e.message)})).finally((function(){t.$q.loading.hide()})))}}},u=c,l=n("a6c2"),f=Object(l["a"])(u,r,i,!1,null,null,null);e["default"]=f.exports},d997:function(t,e,n){"use strict";var r=n("52b5"),i=n.n(r),a=(n("c1c3"),n("549c")),s=n.n(a),o=n("2811"),c=n.n(o),u=n("9289"),l=n.n(u),f=n("7338"),p=n.n(f),d=function(t,e,n){var r=JSON.parse(JSON.stringify(t)).response;return navigator.onLine?r?new Error(h(r,e,n)):new Error("Servidor indisponivel, tente mais tarde"):new Error("Sem acesso à internet, por favor, tente mais tarde")},h=function(t,e,n){var r=t.data,i={400:function(){return v(r)},401:function(){return"Sessão expirada. Logue-se novamente"},404:function(){return"Endereço de acesso não encontrado"},500:function(){return m(e,n)},503:function(){return"Servidor indisponível. Tente novamente mais tardeftfr"},default:function(){return"Erro de verificação do status da requisição"}};return(i[t.status]||i["default"])()},v=function(t){return t&&t!=={}?t.length>1?t:t.error:"Existem erros a serem processados"},m=function(t,e){var n={list:"Não foi possível realizar a listagem, tente mais tarde.",get:"Não foi possível realizar a consulta de ".concat(e,", tente mais tarde."),create:"Não foi possível realizar o cadastro, tente mais tarde.",update:"Não foi possível realizar a edição, tente mais tarde.",remove:"Não foi possível realizar a exclusão, tente mais tarde.",login:"Não foi possível realizar o login, tente mais tarde.",default:"Erro de verificação"};return n[t]||n["default"]};n.d(e,"a",(function(){return x}));var x=function t(e){var n=this;c()(this,t),l()(this,"list",s()(i.a.mark((function t(){var e;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.get(n.api);case 3:return e=t.sent,t.abrupt("return",e.data);case 7:throw t.prev=7,t.t0=t["catch"](0),d(t.t0,"list");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))),l()(this,"show",function(){var t=s()(i.a.mark((function t(e){var r;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.http.get("".concat(n.api,"/").concat(e));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:throw t.prev=7,t.t0=t["catch"](0),d(t.t0,"get","item");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()),l()(this,"create",function(){var t=s()(i.a.mark((function t(e){var r;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.http.post(n.api,e);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:throw t.prev=7,t.t0=t["catch"](0),d(t.t0,"create");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()),l()(this,"update",function(){var t=s()(i.a.mark((function t(e){var r;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.http.put("".concat(n.api),e);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:throw t.prev=7,t.t0=t["catch"](0),d(t.t0,"update");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()),l()(this,"remove",function(){var t=s()(i.a.mark((function t(e){var r;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.http.delete("".concat(n.api,"/").concat(e));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:throw t.prev=7,t.t0=t["catch"](0),d(t.t0,"remove");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()),this.api=e,this.http=p.a}},f9b1:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n("2811"),i=n.n(r),a=n("ddeb"),s=n.n(a),o=n("f26e"),c=n.n(o),u=n("39df1"),l=n.n(u),f=n("d997"),p=function(t){function e(){return i()(this,e),s()(this,c()(e).call(this,"/prefix"))}return l()(e,t),e}(f["a"])}}]);