(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"0e6f":function(t,e,n){"use strict";var o,r,a={data:function(){return{}},methods:{successNotify:function(t){this.$q.notify({message:t,color:"positive",position:"top",timeout:1500,icon:"fas fa-check-square"})},warningNotify:function(t){this.$q.notify({message:t,color:"warning",position:"top",timeout:1500,icon:"fas fa-exclamation"})},errorNotify:function(t){this.$q.notify({message:t,color:"negative",position:"top",timeout:1500,icon:"fas fa-exclamation-triangle"})}}},i=a,u=n("a6c2"),s=Object(u["a"])(i,o,r,!1,null,null,null);e["a"]=s.exports},"1b89":function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var o=n("2811"),r=n.n(o),a=n("ddeb"),i=n.n(a),u=n("f26e"),s=n.n(u),c=n("39df1"),l=n.n(c),d=n("d997"),p=function(t){function e(){return r()(this,e),i()(this,s()(e).call(this,"/outboundRoute"))}return l()(e,t),e}(d["a"])},2405:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var o=n("2811"),r=n.n(o),a=n("ddeb"),i=n.n(a),u=n("f26e"),s=n.n(u),c=n("39df1"),l=n.n(c),d=n("d997"),p=function(t){function e(){return r()(this,e),i()(this,s()(e).call(this,"/trunk"))}return l()(e,t),e}(d["a"])},d997:function(t,e,n){"use strict";var o=n("52b5"),r=n.n(o),a=(n("c1c3"),n("549c")),i=n.n(a),u=n("2811"),s=n.n(u),c=n("9289"),l=n.n(c),d=n("7338"),p=n.n(d),f=function(t,e,n){var o=JSON.parse(JSON.stringify(t)).response;return navigator.onLine?o?new Error(b(o,e,n)):new Error("Servidor indisponivel, tente mais tarde"):new Error("Sem acesso à internet, por favor, tente mais tarde")},b=function(t,e,n){var o=t.data,r={400:function(){return h(o)},401:function(){return"Sessão expirada. Logue-se novamente"},404:function(){return"Endereço de acesso não encontrado"},500:function(){return m(e,n)},503:function(){return"Servidor indisponível. Tente novamente mais tardeftfr"},default:function(){return"Erro de verificação do status da requisição"}};return(r[t.status]||r["default"])()},h=function(t){return t&&t!=={}?t.length>1?t:t.error:"Existem erros a serem processados"},m=function(t,e){var n={list:"Não foi possível realizar a listagem, tente mais tarde.",get:"Não foi possível realizar a consulta de ".concat(e,", tente mais tarde."),create:"Não foi possível realizar o cadastro, tente mais tarde.",update:"Não foi possível realizar a edição, tente mais tarde.",remove:"Não foi possível realizar a exclusão, tente mais tarde.",login:"Não foi possível realizar o login, tente mais tarde.",default:"Erro de verificação"};return n[t]||n["default"]};n.d(e,"a",(function(){return v}));var v=function t(e){var n=this;s()(this,t),l()(this,"list",i()(r.a.mark((function t(){var e;return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.get(n.api);case 3:return e=t.sent,t.abrupt("return",e.data);case 7:throw t.prev=7,t.t0=t["catch"](0),f(t.t0,"list");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))),l()(this,"show",function(){var t=i()(r.a.mark((function t(e){var o;return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.http.get("".concat(n.api,"/").concat(e));case 3:return o=t.sent,t.abrupt("return",o.data);case 7:throw t.prev=7,t.t0=t["catch"](0),f(t.t0,"get","item");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()),l()(this,"create",function(){var t=i()(r.a.mark((function t(e){var o;return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.http.post(n.api,e);case 3:return o=t.sent,t.abrupt("return",o.data);case 7:throw t.prev=7,t.t0=t["catch"](0),f(t.t0,"create");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()),l()(this,"update",function(){var t=i()(r.a.mark((function t(e){var o;return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.http.put("".concat(n.api),e);case 3:return o=t.sent,t.abrupt("return",o.data);case 7:throw t.prev=7,t.t0=t["catch"](0),f(t.t0,"update");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()),l()(this,"remove",function(){var t=i()(r.a.mark((function t(e){var o;return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.http.delete("".concat(n.api,"/").concat(e));case 3:return o=t.sent,t.abrupt("return",o.data);case 7:throw t.prev=7,t.t0=t["catch"](0),f(t.t0,"remove");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()),this.api=e,this.http=p.a}},e1f5:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12"},[n("div",{staticClass:"full-width text-right q-mb-md"},[n("router-link",{attrs:{to:t.backToList}},[n("q-btn",{staticClass:"q-mr-sm",attrs:{outline:"","no-caps":"",label:t.$t("cancel"),color:"primary"}})],1),n("q-btn",{attrs:{"no-caps":"",color:"primary",label:t.$t("save"),icon:"fas fa-save"},on:{click:t.saveOutboundRoute}}),n("q-card",{staticClass:"shadow-1 col-12"},[n("q-tabs",{staticClass:"bg-grey-2 text-grey-7 shadow-1 full-width",attrs:{"inline-label":"","active-color":"primary","narrow-indicator":"",align:"left"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("q-tab",{attrs:{label:t.$t("general"),name:"general"}})],1),n("q-separator"),n("q-tab-panels",{attrs:{animated:"","transition-prev":"jump-up","transition-next":"jump-up"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("q-tab-panel",{attrs:{name:"general"}},[n("q-card-section",[n("div",{staticClass:"row"},[n("div",{staticClass:"q-pa-sm col-6"},[n("q-input",{attrs:{outlined:"",label:t.$t("description"),maxlength:"20",dense:""},model:{value:t.outboundRoute.description,callback:function(e){t.$set(t.outboundRoute,"description",e)},expression:"outboundRoute.description"}})],1),n("div",{staticClass:"q-pa-sm col-3"},[n("q-input",{attrs:{disable:t.editing,outlined:"",label:t.$t("cidName"),maxlength:"20",dense:""},model:{value:t.outboundRoute.cidName,callback:function(e){t.$set(t.outboundRoute,"cidName",e)},expression:"outboundRoute.cidName"}})],1),n("div",{staticClass:"q-pa-sm col-3"},[n("q-input",{attrs:{disable:t.editing,outlined:"",label:t.$t("cidNumber"),maxlength:"20",dense:""},model:{value:t.outboundRoute.cidNumber,callback:function(e){t.$set(t.outboundRoute,"cidNumber",e)},expression:"outboundRoute.cidNumber"}})],1)]),n("div",{staticClass:"row"},[n("div",{staticClass:"q-pa-sm col-6"},[n("q-select",{attrs:{dense:"",outlined:"",multiple:"",options:t.routeTrunks,"option-value":"value","option-label":"label","map-options":"","emit-value":"",label:t.$t("selectTrunk")},model:{value:t.outboundRoute.routeTrunks,callback:function(e){t.$set(t.outboundRoute,"routeTrunks",e)},expression:"outboundRoute.routeTrunks"}})],1),n("div",{staticClass:"col-6 q-pa-xs text-center"},[n("q-toggle",{attrs:{"checked-icon":"check","unchecked-icon":"clear",color:"primary",label:t.$t("overwriteCID")},model:{value:t.outboundRoute.overwriteCID,callback:function(e){t.$set(t.outboundRoute,"overwriteCID",e)},expression:"outboundRoute.overwriteCID"}})],1)]),n("h6",{staticClass:"q-mt-xl q-mb-sm q-ml-md text-weight-light text-left"},[t._v(t._s(this.$t("dialPatterns")))]),n("q-separator",{staticClass:"q-mt-sm q-mb-lg"}),n("div",{staticClass:"row"},[n("div",{staticClass:"q-pa-sm col-6"},[n("q-input",{attrs:{outlined:"",label:t.$t("prefix"),maxlength:"20",dense:"",hint:"*To save press the next button or press enter"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addRoutePrefixToArray()}},model:{value:t.objRoutePrefixes.dial,callback:function(e){t.$set(t.objRoutePrefixes,"dial",e)},expression:"objRoutePrefixes.dial"}})],1),n("div",{staticClass:"q-pa-sm col-5"},[n("q-input",{attrs:{outlined:"",label:t.$t("pattern"),maxlength:"20",dense:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addRoutePrefixToArray()}},model:{value:t.objRoutePrefixes.pattern,callback:function(e){t.$set(t.objRoutePrefixes,"pattern",e)},expression:"objRoutePrefixes.pattern"}})],1),n("div",{staticClass:"q-pa-sm col-1"},[n("q-btn",{attrs:{dense:"",flat:"",size:"md",color:"primary",icon:"fas fa-plus"},on:{click:function(e){return t.addRoutePrefixToArray()}}})],1)]),n("div",{staticClass:"row"},[n("div",{staticClass:"q-pa-sm col-12 text-center"},t._l(t.outboundRoute.routePrefixes,(function(e,o){return n("q-chip",{key:o,attrs:{removable:"",color:"primary","text-color":"white"},on:{remove:function(n){return t.removeRoutePrefix(e)}}},[t._v(t._s(t.$t("prefix"))+" : "+t._s(e.dial)+" - "+t._s(t.$t("pattern"))+" : "+t._s(e.pattern))])})),1)])],1)],1)],1)],1)],1)])},r=[],a=(n("1a43"),n("0dbc"),n("b7dd"),n("8cf6"),n("1b89")),i=n("2405"),u=n("0e6f"),s={name:"AddOutboundRoutes",mixins:[u["a"]],data:function(){return{backToList:"/outboundroutes",OutboundRoutesService:new a["a"],TrunkGroupsService:new i["a"],outboundRoute:{description:"",cidName:"",cidNumber:"",overwriteCID:!1,routeTrunks:null,routePrefixes:[]},tab:"general",routeTrunks:[],objRoutePrefixes:{dial:"",pattern:""},chipRoute:!1}},mounted:function(){this.getAllTrunk(),this.getAllOutboundRoutes()},computed:{editing:function(){return void 0!==this.$route.params.id&&null!=this.$route.params.id}},methods:{removeRoutePrefix:function(t){var e=this.outboundRoute.routePrefixes.indexOf(t);this.outboundRoute.routePrefixes.splice(e,1)},goToList:function(){this.$emit("showList")},addRoutePrefixToArray:function(){this.objRoutePrefixes?(this.outboundRoute.routePrefixes.push(this.objRoutePrefixes),this.objRoutePrefixes={dial:"",pattern:""}):this.warningNotify("Por favor, preencha o campo")},saveOutboundRoute:function(){var t=this;this.editing?this.OutboundRoutesService.update(this.outboundRoute).then((function(e){t.successNotify("Outbound Route successfully edited!"),t.$router.push("/outboundroutes")})).catch((function(e){t.errorNotify(e.message)})):this.OutboundRoutesService.create(this.outboundRoute).then((function(e){t.successNotify("Outbound created"),t.$router.push("/outboundroutes")})).catch((function(e){return t.errorNotify(e.message)}))},getAllOutboundRoutes:function(){var t=this;this.outboundRoute.idOutboundRoute=this.$route.params.id,this.outboundRoute.idOutboundRoute&&(this.$q.loading.show({delay:100,message:"<span>Loading Outbound Routes ...</span>"}),this.OutboundRoutesService.show(this.outboundRoute.idOutboundRoute).then((function(e){t.outboundRoute=e})).catch((function(e){return t.errorNotify(e.message)})).finally((function(){t.$q.loading.hide()})))},getAllTrunk:function(){var t=this;this.TrunkGroupsService.list().then((function(e){t.mapTrunkGroups(e)})).catch((function(e){return t.errorNotify(e.message)}))},mapTrunkGroups:function(t){this.routeTrunks=t.map((function(t){return{label:t.name,value:t.idTrunk}}))}}},c=s,l=n("a6c2"),d=Object(l["a"])(c,o,r,!1,null,null,null);e["default"]=d.exports}}]);