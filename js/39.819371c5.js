(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[39],{"6f77":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"row q-pa-md"},[a("q-card",{staticClass:"shadow-1 col-12"},[a("q-tabs",{staticClass:"bg-grey-2 text-grey-7 shadow-1 full-width",attrs:{"inline-label":"","active-color":"primary","narrow-indicator":"",align:"left"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab",{attrs:{name:"liveStatus",label:t.$t("liveStatus")}}),a("q-tab",{attrs:{name:"systemInformation",label:t.$t("systemInformation")}})],1),a("q-separator"),a("q-tab-panels",{attrs:{animated:"","transition-prev":"jump-up","transition-next":"jump-up"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab-panel",{staticClass:"row",attrs:{name:"systemInformation"}},[a("div",{staticClass:"col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[a("hardware-info")],1),a("div",{staticClass:"col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[a("system-info")],1),a("div",{staticClass:"col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[a("system-services")],1),a("div",{staticClass:"col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[a("disk-usage-chart")],1),a("div",{staticClass:"col-xl-4 q-pa-sm"},[a("system-usage-chart")],1)]),a("q-tab-panel",{staticClass:"row",attrs:{name:"liveStatus"}},[a("div",{staticClass:"col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[a("active-calls")],1),a("div",{staticClass:"col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[a("PJSIP-devices")],1),a("div",{staticClass:"col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[a("IAX2-devices")],1),a("div",{staticClass:"col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[a("SIP-devices")],1),a("div",{staticClass:"col-xl-12 col-lg-6 q-pa-sm"},[a("event-log")],1)])],1)],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"full-width"},[a("q-list",{attrs:{separator:""}},[a("q-item",{staticClass:"q-pa-sm bg-blue"},[a("q-item-section",{attrs:{side:""}},[a("q-icon",{staticClass:"q-ml-sm",attrs:{name:"fas fa-chart-pie",color:"white",size:"18px"}})],1),a("q-separator",{attrs:{vertical:"",dark:""}}),a("q-item-section",{staticClass:"text-h6 text-white q-ml-md"},[t._v("Disk Usage")]),a("q-item-section",{staticClass:"text-h5 q-ml-md text-white",attrs:{side:""}},[a("q-btn",{attrs:{dense:"",size:"sm",flat:"",icon:"fas fa-ellipsis-v"}},[a("q-menu",[a("q-list",{staticStyle:{"min-width":"100px"},attrs:{separator:""}},[a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[a("q-item-section",{attrs:{side:""}},[a("q-icon",{attrs:{size:"18px",name:"fas fa-file-pdf"}})],1),a("q-item-section",[t._v("Download PDF")])],1),a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[a("q-item-section",{attrs:{side:""}},[a("q-icon",{attrs:{size:"18px",name:"fas fa-cog"}})],1),a("q-item-section",[t._v("Settings")])],1),a("q-separator")],1)],1)],1)],1)],1),a("q-item",[a("q-item-section",[a("apexchart",{attrs:{type:"pie",options:t.chartOptions,series:t.series}})],1)],1)],1)],1)},n=[],l={name:"DiskUsageChart",data:function(){return{series:[44,55],chartOptions:{labels:["Used space","Free space"],responsive:[{breakpoint:480,options:{legend:{position:"bottom"}}}]}}}},c=l,o=a("a6c2"),m=Object(o["a"])(c,r,n,!1,null,null,null),u=m.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"full-width"},[a("q-list",{attrs:{separator:""}},[a("q-item",{staticClass:"q-pa-sm"},[a("q-item-section",{attrs:{side:""}},[a("q-icon",{staticClass:"q-ml-sm",attrs:{name:"fas fa-chart-area",color:"black",size:"18px"}})],1),a("q-separator",{attrs:{vertical:""}}),a("q-item-section",{staticClass:"text-h6 q-ml-md"},[t._v("System Usage")])],1),a("q-item",[a("q-item-section",[a("apexchart",{attrs:{type:"line",options:t.chartOptions,series:t.series}})],1)],1)],1)],1)},d=[],f={name:"SystemUsageChart",data:function(){return{series:[{name:"High - 2013",data:[28,29,33,36,32,32,33]},{name:"Low - 2013",data:[12,11,14,18,17,13,13]}],chartOptions:{chart:{shadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:1},toolbar:{show:!1}},colors:["#77B6EA","#545454"],dataLabels:{enabled:!0},stroke:{curve:"smooth"},title:{text:"Average High & Low Temperature",align:"left"},grid:{borderColor:"#e7e7e7",row:{colors:["#f3f3f3","transparent"],opacity:.5}},markers:{size:6},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul"],title:{text:"Month"}},yaxis:{title:{text:"Temperature"},min:5,max:40},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5}}}}},q=f,v=Object(o["a"])(q,p,d,!1,null,null,null),h=v.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"bg-deep-purple text-white full-width"},[a("q-list",{attrs:{separator:"",dark:""}},[a("q-item",{staticClass:"q-pa-sm bg-deep-purple-7",attrs:{dense:""}},[a("q-item-section",{attrs:{side:""}},[a("q-icon",{staticClass:"q-ml-sm",attrs:{name:"fas fa-desktop",color:"white",size:"18px"}})],1),a("q-separator",{attrs:{dark:"",vertical:""}}),a("q-item-section",{staticClass:"text-h6 q-ml-md"},[t._v("Hardware Info")])],1),t._l(t.hardwareInfoData,(function(e,s){return a("q-item",{key:s,staticClass:"text-white"},[a("q-item-section",[a("q-item-label",{staticClass:"text-white text-subtitle1"},[t._v(t._s(e.type))])],1),a("q-item-section",{staticClass:"text-white",attrs:{side:""}},[a("q-item-label",[t._v(t._s(e.value))])],1)],1)}))],2)],1)},b=[],g={name:"HardwareInfo",data:function(){return{hardwareInfoData:[{type:"Virtualization",value:"KVM"},{type:"CPU Model",value:"Intel Core Processor (Skylake)"},{type:"CPU Cores",value:"1"},{type:"RAM",value:"2 GB / 2 GB"}]}}},w=g,C=Object(o["a"])(w,x,b,!1,null,null,null),y=C.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"bg-indigo text-white"},[a("q-list",{attrs:{dark:"",separator:""}},[a("q-item",{staticClass:"q-pa-sm bg-indigo-7",attrs:{dense:""}},[a("q-item-section",{attrs:{side:""}},[a("q-icon",{staticClass:"q-ml-sm",attrs:{name:"fas fa-info",color:"white",size:"18px"}})],1),a("q-separator",{attrs:{dark:"",vertical:""}}),a("q-item-section",{staticClass:"text-h6 q-ml-md"},[t._v("System Info")])],1),t._l(t.systemInfoData,(function(e,s){return a("q-item",{key:s,staticClass:"text-white"},[a("q-item-section",[a("q-item-label",{staticClass:"text-white text-subtitle1"},[t._v(t._s(e.type))])],1),a("q-item-section",{staticClass:"text-white",attrs:{side:""}},[a("q-item-label",[t._v(t._s(e.value))])],1)],1)}))],2)],1)},k=[],S={name:"SystemInfo",data:function(){return{systemInfoData:[{type:"Distro",value:"CentOS Linux release 7.6.1810 (Core)"},{type:"Kernel",value:"3.10.0-957.10.1.el7.x86_64"},{type:"Asterisk",value:"16.5.0"},{type:"Last boot",value:"Wed, 03 Apr 2019 21:23:07 -0400"}]}}},I=S,D=Object(o["a"])(I,_,k,!1,null,null,null),z=D.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"bg-blue text-white"},[a("q-list",{attrs:{dark:"",separator:""}},[a("q-item",{staticClass:"q-pa-sm bg-blue-7"},[a("q-item-section",{attrs:{side:""}},[a("q-icon",{staticClass:"q-ml-sm",attrs:{name:"fas fa-cogs",color:"white",size:"18px"}})],1),a("q-separator",{attrs:{dark:"",vertical:""}}),a("q-item-section",{staticClass:"text-h6 q-ml-md"},[t._v("System Services")])],1),t._l(t.systemServicesData,(function(e,s){return a("q-item",{key:s,staticClass:"text-white"},[a("q-item-section",[a("q-item-label",{staticClass:"text-white text-subtitle1"},[t._v(t._s(e.type))])],1),a("q-item-section",{staticClass:"text-white",attrs:{side:""}},[a("q-item-label",[a("q-badge",{attrs:{align:"middle",color:e.value?"positive":"negative"}},[t._v(t._s(e.value?"ON":"OFF"))])],1)],1)],1)}))],2)],1)},j=[],P={name:"SystemServices",data:function(){return{systemServicesData:[{type:"Firewall",value:!0},{type:"Intrusion Detection",value:!0},{type:"Asterisk",value:!1},{type:"DAHDI",value:!0}]}}},$=P,O=Object(o["a"])($,E,j,!1,null,null,null),A=O.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"bg-grey-10"},[a("q-list",{attrs:{separator:""}},[a("q-item",{staticClass:"q-pa-sm",attrs:{dense:""}},[a("q-item-section",{attrs:{side:""}},[a("q-icon",{staticClass:"q-ml-sm",attrs:{name:"fas fa-list",color:"white",size:"18px"}})],1),a("q-separator",{attrs:{dark:"",vertical:""}}),a("q-item-section",{staticClass:"text-h6 q-ml-md text-white"},[t._v("Event Log")]),a("q-item-section",{staticClass:"text-h5 q-ml-md text-white",attrs:{side:""}},[a("q-btn",{attrs:{dense:"",size:"sm",flat:"",icon:"fas fa-ellipsis-v"}},[a("q-menu",[a("q-list",{staticStyle:{"min-width":"100px"},attrs:{separator:""}},[a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[a("q-item-section",{attrs:{side:""}},[a("q-icon",{attrs:{size:"18px",name:"fas fa-file-pdf"}})],1),a("q-item-section",[t._v("Download PDF")])],1),a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[a("q-item-section",{attrs:{side:""}},[a("q-icon",{attrs:{size:"18px",name:"fas fa-cog"}})],1),a("q-item-section",[t._v("Settings")])],1),a("q-separator")],1)],1)],1)],1)],1),t._l(t.logData,(function(e,s){return a("q-item",{key:s,staticClass:"text-black bg-white q-pa-sm"},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"fas fa-square",size:"40px",color:0===e.type?"warning":1===e.type?"negative":"info"}})],1),a("q-item-section",[a("q-item-label",{staticClass:"text-subtitle1"},[a("q-badge",{attrs:{color:"grey-7"}},[t._v("ID "+t._s(e.id))])],1),a("q-item-label",{staticClass:"text-subtitle1"},[t._v(t._s(e.title))]),a("q-item-label",{staticClass:"text-blue-grey-5",attrs:{caption:""}},[t._v(t._s(e.description))])],1),a("q-item-section",{attrs:{side:""}},[a("q-item-label",{attrs:{caption:""}},[t._v(t._s(e.datetime))])],1)],1)}))],2)],1)},J=[],L={name:"SystemInfo",data:function(){return{logData:[{id:10007,title:"System Service",description:"Database maintenance task has been finished",datetime:"27/08/2019 20:00:01",type:0},{id:10008,title:"Licensing",description:"Your license will expire on 26/09/2019 12:27:48 (+03:00). Features will be disabled unless you renew the license",datetime:"27/08/2019 20:00:01",type:1},{id:10009,title:"System Service",description:"Database maintenance task has been finished",datetime:"27/08/2019 20:00:01",type:1},{id:10010,title:"System Service",description:"Database maintenance task has been finished",datetime:"27/08/2019 20:00:01",type:2}]}}},U=L,F=Object(o["a"])(U,N,J,!1,null,null,null),H=F.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"bg-green-9 text-white"},[a("q-list",{attrs:{dark:""}},[a("q-item",{staticClass:"q-pa-sm bg-green-10"},[a("q-item-section",{attrs:{side:""}},[a("q-icon",{staticClass:"q-ml-sm",attrs:{name:"fas fa-phone",color:"white",size:"28px"}})],1),a("q-separator",{attrs:{dark:"",vertical:""}}),a("q-item-section",{staticClass:"text-h6 q-ml-md"},[t._v(t._s(t.$t("activeCalls")))])],1),a("q-item",{staticClass:"text-white text-h1 justify-center"},[a("q-item-section",{attrs:{avatar:""}},[t._v(t._s(t.activeCalls))])],1),a("q-item",{staticClass:"q-pa-sm bg-green-10 justify-end"},[a("q-btn",{attrs:{flat:"",ripple:"",label:t.$t("moreInfo"),"icon-right":"fas fa-chevron-right",size:"sm"}})],1)],1)],1)},X=[],B=(a("0dbc"),a("b7dd"),a("8cf6"),a("7a86")),T={data:function(){return{ExtensionService:new B["a"],activeCalls:12}},mounted:function(){this.listExtensions()},methods:{listExtensions:function(){var t=this;this.loading=!0,this.ExtensionService.list().then((function(e){t.listExtensions=e})).catch((function(e){return t.errorNotify(e.message)})).finally((function(){t.loading=!1}))}}},G=T,K=Object(o["a"])(G,M,X,!1,null,null,null),V=K.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"bg-deep-purple-9 text-white"},[a("q-list",{attrs:{dark:""}},[a("q-item",{staticClass:"q-pa-sm bg-deep-purple-10"},[a("q-item-section",{attrs:{side:""}},[a("q-icon",{staticClass:"q-ml-sm",attrs:{name:"fas fa-phone-square",color:"white",size:"28px"}})],1),a("q-separator",{attrs:{dark:"",vertical:""}}),a("q-item-section",{staticClass:"text-h6 q-ml-md"},[t._v("PJSIP "+t._s(t.$t("devices")))])],1),a("q-item",{staticClass:"text-white text-h1 justify-center"},[a("q-item-section",{attrs:{avatar:""}},[t._v(t._s(t.PJSIPDevices))])],1),a("q-item",{staticClass:"q-pa-sm bg-deep-purple-10 justify-end"},[a("q-btn",{attrs:{flat:"",ripple:"",label:t.$t("moreInfo"),"icon-right":"fas fa-chevron-right",size:"sm"}})],1)],1)],1)},R=[],W={data:function(){return{PJSIPDevices:6}}},Q=W,Z=Object(o["a"])(Q,Y,R,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"bg-indigo-9 text-white"},[a("q-list",{attrs:{dark:""}},[a("q-item",{staticClass:"q-pa-sm bg-indigo-10"},[a("q-item-section",{attrs:{side:""}},[a("q-icon",{staticClass:"q-ml-sm",attrs:{name:"fas fa-phone-square",color:"white",size:"28px"}})],1),a("q-separator",{attrs:{dark:"",vertical:""}}),a("q-item-section",{staticClass:"text-h6 q-ml-md"},[t._v("IAX2 "+t._s(t.$t("devices")))])],1),a("q-item",{staticClass:"text-white text-h1 justify-center"},[a("q-item-section",{attrs:{avatar:""}},[t._v(t._s(t.IAX2Devices))])],1),a("q-item",{staticClass:"q-pa-sm bg-indigo-10 justify-end"},[a("q-btn",{attrs:{flat:"",ripple:"",label:t.$t("moreInfo"),"icon-right":"fas fa-chevron-right",size:"sm"}})],1)],1)],1)},at=[],st={data:function(){return{IAX2Devices:5}}},it=st,rt=Object(o["a"])(it,et,at,!1,null,null,null),nt=rt.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"bg-blue-9 text-white"},[a("q-list",{attrs:{dark:""}},[a("q-item",{staticClass:"q-pa-sm bg-blue-10"},[a("q-item-section",{attrs:{side:""}},[a("q-icon",{staticClass:"q-ml-sm",attrs:{name:"fas fa-phone-square",color:"white",size:"28px"}})],1),a("q-separator",{attrs:{dark:"",vertical:""}}),a("q-item-section",{staticClass:"text-h6 q-ml-md"},[t._v("SIP "+t._s(t.$t("devices")))])],1),a("q-item",{staticClass:"text-white text-h1 justify-center"},[a("q-item-section",{attrs:{avatar:""}},[t._v(t._s(t.SIPDevices))])],1),a("q-item",{staticClass:"q-pa-sm bg-blue-10 justify-end"},[a("q-btn",{attrs:{flat:"",ripple:"",label:t.$t("moreInfo"),"icon-right":"fas fa-chevron-right",size:"sm"}})],1)],1)],1)},ct=[],ot={data:function(){return{SIPDevices:2}}},mt=ot,ut=Object(o["a"])(mt,lt,ct,!1,null,null,null),pt=ut.exports,dt={name:"PageDashboard",components:{DiskUsageChart:u,SystemUsageChart:h,HardwareInfo:y,SystemInfo:z,SystemServices:A,EventLog:H,ActiveCalls:V,PJSIPDevices:tt,SIPDevices:pt,IAX2Devices:nt},data:function(){return{tab:"liveStatus",nome:""}},created:function(){this.nome=localStorage.getItem("nome")}},ft=dt,qt=Object(o["a"])(ft,s,i,!1,null,null,null);e["default"]=qt.exports},"7a86":function(t,e,a){"use strict";a.d(e,"a",(function(){return p}));var s=a("2811"),i=a.n(s),r=a("ddeb"),n=a.n(r),l=a("f26e"),c=a.n(l),o=a("39df1"),m=a.n(o),u=a("d997"),p=function(t){function e(){return i()(this,e),n()(this,c()(e).call(this,"/extension"))}return m()(e,t),e}(u["a"])},d997:function(t,e,a){"use strict";var s=a("52b5"),i=a.n(s),r=(a("c1c3"),a("549c")),n=a.n(r),l=a("2811"),c=a.n(l),o=a("9289"),m=a.n(o),u=a("7338"),p=a.n(u),d=function(t,e,a){var s=JSON.parse(JSON.stringify(t)).response;return navigator.onLine?s?new Error(f(s,e,a)):new Error("Servidor indisponivel, tente mais tarde"):new Error("Sem acesso à internet, por favor, tente mais tarde")},f=function(t,e,a){var s=t.data,i={400:function(){return q(s)},401:function(){return"Sessão expirada. Logue-se novamente"},404:function(){return"Endereço de acesso não encontrado"},500:function(){return v(e,a)},503:function(){return"Servidor indisponível. Tente novamente mais tardeftfr"},default:function(){return"Erro de verificação do status da requisição"}};return(i[t.status]||i["default"])()},q=function(t){return t&&t!=={}?t.length>1?t:t.error:"Existem erros a serem processados"},v=function(t,e){var a={list:"Não foi possível realizar a listagem, tente mais tarde.",get:"Não foi possível realizar a consulta de ".concat(e,", tente mais tarde."),create:"Não foi possível realizar o cadastro, tente mais tarde.",update:"Não foi possível realizar a edição, tente mais tarde.",remove:"Não foi possível realizar a exclusão, tente mais tarde.",login:"Não foi possível realizar o login, tente mais tarde.",default:"Erro de verificação"};return a[t]||a["default"]};a.d(e,"a",(function(){return h}));var h=function t(e){var a=this;c()(this,t),m()(this,"list",n()(i.a.mark((function t(){var e;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.get(a.api);case 3:return e=t.sent,t.abrupt("return",e.data);case 7:throw t.prev=7,t.t0=t["catch"](0),d(t.t0,"list");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))),m()(this,"show",function(){var t=n()(i.a.mark((function t(e){var s;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.http.get("".concat(a.api,"/").concat(e));case 3:return s=t.sent,t.abrupt("return",s.data);case 7:throw t.prev=7,t.t0=t["catch"](0),d(t.t0,"get","item");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()),m()(this,"create",function(){var t=n()(i.a.mark((function t(e){var s;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.http.post(a.api,e);case 3:return s=t.sent,t.abrupt("return",s.data);case 7:throw t.prev=7,t.t0=t["catch"](0),d(t.t0,"create");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()),m()(this,"update",function(){var t=n()(i.a.mark((function t(e){var s;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.http.put("".concat(a.api),e);case 3:return s=t.sent,t.abrupt("return",s.data);case 7:throw t.prev=7,t.t0=t["catch"](0),d(t.t0,"update");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()),m()(this,"remove",function(){var t=n()(i.a.mark((function t(e){var s;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.http.delete("".concat(a.api,"/").concat(e));case 3:return s=t.sent,t.abrupt("return",s.data);case 7:throw t.prev=7,t.t0=t["catch"](0),d(t.t0,"remove");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()),this.api=e,this.http=p.a}}}]);