(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"0e6f":function(e,t,r){"use strict";var n,s,a={data:function(){return{}},methods:{successNotify:function(e){this.$q.notify({message:e,color:"positive",position:"top",timeout:1500,icon:"fas fa-check-square"})},warningNotify:function(e){this.$q.notify({message:e,color:"warning",position:"top",timeout:1500,icon:"fas fa-exclamation"})},errorNotify:function(e){this.$q.notify({message:e,color:"negative",position:"top",timeout:1500,icon:"fas fa-exclamation-triangle"})}}},i=a,o=r("a6c2"),c=Object(o["a"])(i,n,s,!1,null,null,null);t["a"]=c.exports},"1e52":function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r("2811"),s=r.n(n),a=r("ddeb"),i=r.n(a),o=r("f26e"),c=r.n(o),u=r("39df1"),l=r.n(u),d=r("d997"),p=function(e){function t(){return s()(this,t),i()(this,c()(t).call(this,"/user"))}return l()(t,e),t}(d["a"])},d997:function(e,t,r){"use strict";var n=r("52b5"),s=r.n(n),a=(r("c1c3"),r("549c")),i=r.n(a),o=r("2811"),c=r.n(o),u=r("9289"),l=r.n(u),d=r("7338"),p=r.n(d),f=function(e,t,r){var n=JSON.parse(JSON.stringify(e)).response;return navigator.onLine?n?new Error(h(n,t,r)):new Error("Servidor indisponivel, tente mais tarde"):new Error("Sem acesso à internet, por favor, tente mais tarde")},h=function(e,t,r){var n=e.data,s={400:function(){return v(n)},401:function(){return"Sessão expirada. Logue-se novamente"},404:function(){return"Endereço de acesso não encontrado"},500:function(){return m(t,r)},503:function(){return"Servidor indisponível. Tente novamente mais tardeftfr"},default:function(){return"Erro de verificação do status da requisição"}};return(s[e.status]||s["default"])()},v=function(e){return e&&e!=={}?e.length>1?e:e.error:"Existem erros a serem processados"},m=function(e,t){var r={list:"Não foi possível realizar a listagem, tente mais tarde.",get:"Não foi possível realizar a consulta de ".concat(t,", tente mais tarde."),create:"Não foi possível realizar o cadastro, tente mais tarde.",update:"Não foi possível realizar a edição, tente mais tarde.",remove:"Não foi possível realizar a exclusão, tente mais tarde.",login:"Não foi possível realizar o login, tente mais tarde.",default:"Erro de verificação"};return r[e]||r["default"]};r.d(t,"a",(function(){return w}));var w=function e(t){var r=this;c()(this,e),l()(this,"list",i()(s.a.mark((function e(){var t;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get(r.api);case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e["catch"](0),f(e.t0,"list");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))),l()(this,"show",function(){var e=i()(s.a.mark((function e(t){var n;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.http.get("".concat(r.api,"/").concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e["catch"](0),f(e.t0,"get","item");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),l()(this,"create",function(){var e=i()(s.a.mark((function e(t){var n;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.http.post(r.api,t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e["catch"](0),f(e.t0,"create");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),l()(this,"update",function(){var e=i()(s.a.mark((function e(t){var n;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.http.put("".concat(r.api),t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e["catch"](0),f(e.t0,"update");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),l()(this,"remove",function(){var e=i()(s.a.mark((function e(t){var n;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.http.delete("".concat(r.api,"/").concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e["catch"](0),f(e.t0,"remove");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),this.api=t,this.http=p.a}},e526:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r("2811"),s=r.n(n),a=r("ddeb"),i=r.n(a),o=r("f26e"),c=r.n(o),u=r("39df1"),l=r.n(u),d=r("d997"),p=function(e){function t(){return s()(this,t),i()(this,c()(t).call(this,"/Profile"))}return l()(t,e),t}(d["a"])},fea8:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-12"},[r("div",{staticClass:"full-width text-right q-mb-md"},[r("router-link",{attrs:{to:e.backToList}},[r("q-btn",{staticClass:"q-mr-sm",attrs:{outline:"","no-caps":"",label:e.$t("cancel"),color:"primary"}})],1),r("q-btn",{attrs:{"no-caps":"",color:"primary",label:e.$t("save"),icon:"fas fa-save"},on:{click:e.saveUsers}})],1),r("q-card",{staticClass:"shadow-1 col-12"},[r("q-tabs",{staticClass:"bg-grey-2 text-grey-7 shadow-1 full-width",attrs:{"inline-label":"","active-color":"primary","narrow-indicator":"",align:"left"},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[r("q-tab",{attrs:{label:e.$t("general"),name:"general"}})],1),r("q-card-section",[r("q-tab-panels",{attrs:{animated:"","transition-prev":"jump-up","transition-next":"jump-up"},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[r("q-tab-panel",{attrs:{name:"general"}},[r("div",{staticClass:"row flex justify-center"},[r("div",{staticClass:"q-pa-xs col-xl-6 col-lg-6 col-md-8 col-sm-10 col-xs-12"},[r("q-input",{attrs:{disable:e.editing,outlined:"",type:"text",label:e.$t("idUser"),dense:""},model:{value:e.user.idUser,callback:function(t){e.$set(e.user,"idUser",t)},expression:"user.idUser"}})],1),r("div",{staticClass:"q-pa-xs col-xl-6 col-lg-6 col-md-8 col-sm-10 col-xs-12"},[r("q-input",{attrs:{outlined:"",type:"text",label:e.$t("name"),dense:""},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1)]),r("div",{staticClass:"row flex justify-center"},[r("div",{staticClass:"q-pa-xs col-xl-6 col-lg-6 col-md-8 col-sm-10 col-xs-12"},[r("q-input",{attrs:{disable:e.editing,outlined:"",label:e.$t("password"),type:e.isPwd?"password":"text",dense:""},scopedSlots:e._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),r("div",{staticClass:"q-pa-xs col-xl-6 col-lg-6 col-md-8 col-sm-10 col-xs-12"},[r("q-input",{attrs:{outlined:"",type:"text",label:e.$t("email"),dense:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1)]),r("div",{staticClass:"row flex justify-center"},[r("div",{staticClass:"q-pa-xs col-xl-6 col-lg-6 col-md-8 col-sm-10 col-xs-12"},[r("q-select",{attrs:{dense:"",outlined:"",options:e.userType,"option-value":"value","option-label":"label","map-options":"","emit-value":"",label:e.$t("userType"),rules:[function(e){return!!e||"* Required"}]},model:{value:e.user.type,callback:function(t){e.$set(e.user,"type",t)},expression:"user.type"}})],1)])])],1)],1)],1)],1)},s=[],a=(r("0dbc"),r("b7dd"),r("8cf6"),r("1a43"),r("1e52")),i=r("e526"),o=r("0e6f"),c={name:"AddUser",mixins:[o["a"]],data:function(){return{backToList:"/users",UsersService:new a["a"],ProfileService:new i["a"],user:{idUser:"",name:"",password:"",email:"",type:""},userType:[],tab:"general",isPwd:!0}},mounted:function(){this.getUser(),this.getTypeUser()},computed:{editing:function(){return void 0!==this.$route.params.id&&null!=this.$route.params.id}},methods:{getTypeUser:function(){var e=this;this.ProfileService.list().then((function(t){e.mapTypeUser(t)})).catch((function(t){return e.errorNotify(t.message)}))},mapTypeUser:function(e){this.userType=e.map((function(e){return{label:e.name,value:e.idTypeUser}}))},saveUsers:function(){var e=this;this.editing?(this.$q.loading.show({delay:100}),this.UsersService.update(this.user).then((function(t){e.successNotify("User ".concat(e.user.name," updated!")),e.$router.push("/users")})).catch((function(t){e.errorNotify(t.message)})).finally((function(){return e.$q.loading.hide()}))):this.UsersService.create(this.user).then((function(t){e.successNotify("User created!"),e.$router.push("/users")})).catch((function(t){e.errorNotify(t.message)})).finally((function(){return e.$q.loading.hide()}))},getUser:function(){var e=this;this.user.idUser=this.$route.params.id,this.user.idUser&&(this.$q.loading.show({delay:10,message:"<span>Loading Users ...</span>"}),this.UsersService.show(this.user.idUser).then((function(t){e.user=t})).catch((function(t){return e.errorNotify(t.message)})).finally((function(){e.$q.loading.hide()})))}}},u=c,l=r("a6c2"),d=Object(l["a"])(u,n,s,!1,null,null,null);t["default"]=d.exports}}]);