(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[38],{6113:function(t,e,s){"use strict";var a=s("96e2"),i=s.n(a);i.a},"96e2":function(t,e,s){},c552:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-layout",{attrs:{view:"hHh Lpr fff"}},[s("q-header",[s("q-toolbar",{staticClass:"bg-grey-1 text-primary"},[s("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:t.openDrawerComponent}},[s("q-icon",{attrs:{name:"menu"}})],1),s("q-separator",{staticClass:"q-ml-sm",attrs:{vertical:"",inset:""}}),s("q-toolbar-title",[s("a",{staticClass:"flex items-center gt-sm",attrs:{href:"",to:"/dashboard"}},[s("img",{staticClass:"q-pa-md",staticStyle:{width:"20vw","max-width":"200px"},attrs:{src:"statics/img/voxdata251119.png"}})])]),s("q-space"),s("q-separator",{staticClass:"q-ml-sm q-mr-sm",attrs:{vertical:"",inset:""}}),s("q-btn",{staticClass:"gt-sm",attrs:{flat:"",dense:"",stack:"",icon:"fas fa-question-circle",label:t.$t("help"),"no-caps":""},on:{click:function(e){return t.openInfoDrawer("help")}}}),s("q-btn",{staticClass:"lt-md",attrs:{flat:"",dense:"",stack:"",icon:"fas fa-question-circle"},on:{click:function(e){return t.openInfoDrawer("help")}}}),s("q-separator",{staticClass:"q-ml-sm q-mr-sm",attrs:{vertical:"",inset:""}}),s("q-btn",{staticClass:"gt-sm",attrs:{flat:"",icon:"fas fa-bell",dense:"",stack:"",label:t.$t("notifications"),"no-caps":""},on:{click:function(e){return t.openInfoDrawer("notifications")}}},[s("q-badge",{staticClass:"q-mt-sm q-mr-lg",attrs:{color:"red-6",floating:""}},[t._v("3")])],1),s("q-btn",{staticClass:"lt-md",attrs:{flat:"",icon:"fas fa-bell",dense:"",stack:""},on:{click:function(e){return t.openInfoDrawer("notifications")}}}),s("q-separator",{staticClass:"q-ml-sm q-mr-sm",attrs:{vertical:"",inset:""}}),s("q-btn",{staticClass:"gt-sm",attrs:{flat:"",dense:"",stack:"",icon:"fas fa-info-circle","no-caps":"",label:t.$t("about")},on:{click:function(e){return t.openInfoDrawer("about")}}}),s("q-btn",{staticClass:"lt-md",attrs:{flat:"",dense:"",stack:"",icon:"fas fa-info-circle"},on:{click:function(e){return t.openInfoDrawer("about")}}}),s("q-separator",{staticClass:"q-ml-sm q-mr-sm",attrs:{vertical:"",inset:""}}),s("q-btn",{staticClass:"gt-sm",attrs:{flat:"",dense:"",icon:"fas fa-user",stack:"",label:t.$t("users"),"no-caps":""},on:{click:function(e){return t.openInfoDrawer("userMenu")}}}),s("q-btn",{staticClass:"lt-md",attrs:{flat:"",dense:"",icon:"fas fa-user",stack:""},on:{click:function(e){return t.openInfoDrawer("userMenu")}}})],1)],1),s("drawer",{ref:"Drawer"}),s("info-drawer",{ref:"InfoDrawer"}),s("q-page-container",{staticClass:"bg-grey-1"},[s("router-view")],1),s("q-footer",{staticClass:"text-primary bg-grey-1"},[s("q-toolbar",{staticClass:"text-center"},[s("q-toolbar-title",{staticClass:"text-caption"},[t._v(t._s(t.footerText))])],1)],1)],1)},i=[],r=(s("d93a"),s("0012"),s("5b54"),s("2bf3"),s("b7dd"),s("ef92"),s("9289")),n=s.n(r),o=s("94ea"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-drawer",{attrs:{width:270,mini:!t.leftDrawerOpen||t.miniState,bordered:"","content-class":"bg-grey-1",elevated:""},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[s("q-scroll-area",{staticStyle:{height:"100%","max-width":"300px"},attrs:{"thumb-style":t.thumbStyle}},[s("q-list",{staticClass:"text-primary q-pt-lg"},[s("q-item",{attrs:{clickable:"",to:"/dashboard","active-class":"bg-grey-3"}},[s("q-item-section",{attrs:{side:""}},[s("q-icon",{attrs:{color:"primary",name:"fas fa-chart-area"}})],1),s("q-item-section",[s("q-item-label",[t._v(t._s(t.$t("dashboard")))])],1),t.miniState?s("q-tooltip",{attrs:{anchor:"center right",self:"bottom middle","transition-show":"scale","transition-hide":"scale","content-class":"bg-black text-white shadow-4",offset:[30,30]}},[t._v(t._s(t.$t("dashboard")))]):t._e()],1),s("q-expansion-item",{attrs:{"expand-icon-class":"text-primary","dense-toggle":""},scopedSlots:t._u([{key:"header",fn:function(){return[s("q-item-section",{attrs:{side:""}},[s("q-icon",{attrs:{name:"fas fa-indent",color:"primary"}})],1),s("q-item-section",[t._v(t._s(t.$t("internalManagement")))]),t.miniState?s("q-tooltip",{attrs:{anchor:"center right",self:"bottom middle","transition-show":"scale","transition-hide":"scale","content-class":"bg-black text-white shadow-4",offset:[50,50]}},[t._v(t._s(t.$t("internalManagement")))]):t._e()]},proxy:!0}])},[s("q-item",{staticClass:"bg-grey-2",attrs:{clickable:"",to:"/extensions","active-class":"bg-grey-4"}},[s("q-item-section",{attrs:{side:""}},[s("q-icon",{staticClass:"q-ml-lg",attrs:{size:"20px",color:"primary",name:"fas fa-phone-square-alt"}})],1),s("q-item-section",[t._v(t._s(t.$t("extensions")))]),t.miniState?s("q-tooltip",{attrs:{anchor:"center right",self:"bottom middle","transition-show":"scale","transition-hide":"scale","content-class":"bg-black text-white shadow-4",offset:[30,30]}},[t._v(t._s(t.$t("extensions")))]):t._e()],1),s("q-item",{staticClass:"bg-grey-2",attrs:{clickable:"",to:"/extensionGroups","active-class":"bg-grey-4"}},[s("q-item-section",{attrs:{side:""}},[s("q-icon",{staticClass:"q-ml-lg",attrs:{size:"20px",color:"primary",name:"fas fa-phone"}})],1),s("q-item-section",[s("q-item-label",[t._v(t._s(t.$t("extensionGroups")))])],1),t.miniState?s("q-tooltip",{attrs:{anchor:"center right",self:"bottom middle","transition-show":"scale","transition-hide":"scale","content-class":"bg-black text-white shadow-4",offset:[45,45]}},[t._v(t._s(t.$t("extensionGroups")))]):t._e()],1),s("q-item",{staticClass:"bg-grey-2",attrs:{clickable:"",to:"/pickupGroups","active-class":"bg-grey-4"}},[s("q-item-section",{attrs:{side:""}},[s("q-icon",{staticClass:"q-ml-lg",attrs:{size:"20px",color:"primary",name:"fas fa-object-group"}})],1),s("q-item-section",[s("q-item-label",[t._v(t._s(t.$t("pickupGroups")))])],1),t.miniState?s("q-tooltip",{attrs:{anchor:"center right",self:"bottom middle","transition-show":"scale","transition-hide":"scale","content-class":"bg-black text-white shadow-4",offset:[35,35]}},[t._v(t._s(t.$t("pickupGroups")))]):t._e()],1),s("q-expansion-item",{staticClass:"bg-grey-2",attrs:{"header-inset-level":.4,"expand-icon-class":"text-primary","dense-toggle":"","expand-separator":"",icon:"fab fa-buffer",label:"Prefixes"}},[s("q-item",{staticClass:"bg-blue-grey-1",attrs:{clickable:"",to:"/prefix","active-class":"bg-blue-grey-2"}},[s("q-item-section",{attrs:{side:""}},[s("q-icon",{staticClass:"q-ml-xl",attrs:{color:"primary",size:"20px",name:"fas fa-bookmark"}})],1),s("q-item-section",[s("q-item-label",[t._v(t._s(t.$t("prefix")))])],1),t.miniState?s("q-tooltip",{attrs:{anchor:"center right",self:"bottom middle","transition-show":"scale","transition-hide":"scale","content-class":"bg-black text-white shadow-4",offset:[35,35]}},[t._v(t._s(t.$t("prefix")))]):t._e()],1),s("q-item",{staticClass:"bg-blue-grey-1",attrs:{clickable:"",to:"/specialprefix","active-class":"bg-blue-grey-2"}},[s("q-item-section",{attrs:{side:""}},[s("q-icon",{staticClass:"q-ml-xl",attrs:{color:"primary",size:"20px",name:"far fa-bookmark"}})],1),s("q-item-section",[s("q-item-label",[t._v(t._s(t.$t("specialPrefix")))])],1),t.miniState?s("q-tooltip",{attrs:{anchor:"center right",self:"bottom middle","transition-show":"scale","transition-hide":"scale","content-class":"bg-black text-white shadow-4",offset:[20,20]}},[t._v(t._s(t.$t("prefix")))]):t._e()],1)],1),s("q-item",{staticClass:"bg-grey-2",attrs:{clickable:"",to:"/numberingPlan","active-class":"bg-grey-4"}},[s("q-item-section",{attrs:{side:""}},[s("q-icon",{staticClass:"q-ml-lg",attrs:{color:"primary",size:"20px",name:"fas fa-list-ol"}})],1),s("q-item-section",[s("q-item-label",[t._v(t._s(t.$t("numberingPlan")))])],1),t.miniState?s("q-tooltip",{attrs:{anchor:"center right",self:"bottom middle","transition-show":"scale","transition-hide":"scale","content-class":"bg-black text-white shadow-4",offset:[20,20]}},[t._v(t._s(t.$t("numberingPlan")))]):t._e()],1)],1),s("q-expansion-item",{attrs:{"expand-icon-class":"text-primary","dense-toggle":""},scopedSlots:t._u([{key:"header",fn:function(){return[s("q-item-section",{attrs:{side:""}},[s("q-icon",{attrs:{name:"fas fa-outdent",color:"primary"}})],1),s("q-item-section",[t._v(t._s(t.$t("externalManagement")))]),t.miniState?s("q-tooltip",{attrs:{anchor:"center right",self:"bottom middle","transition-show":"scale","transition-hide":"scale","content-class":"bg-black text-white shadow-4",offset:[50,50]}},[t._v(t._s(t.$t("externalManagement")))]):t._e()]},proxy:!0}])},[s("q-item",{staticClass:"bg-grey-2",attrs:{clickable:"",to:"/trunkgroups","active-class":"bg-grey-4"}},[s("q-item-section",{attrs:{side:""}},[s("q-icon",{staticClass:"q-ml-lg",attrs:{size:"20px",color:"primary",name:"fas fa-code-branch"}})],1),s("q-item-section",[s("q-item-label",[t._v(t._s(t.$t("trunkGroups")))])],1),t.miniState?s("q-tooltip",{attrs:{anchor:"center right",self:"bottom middle","transition-show":"scale","transition-hide":"scale","content-class":"bg-black text-white shadow-4",offset:[30,30]}},[t._v(t._s(t.$t("trunkGroups")))]):t._e()],1),s("q-item",{staticClass:"bg-grey-2",attrs:{clickable:"",to:"/inboundroutes","active-class":"bg-grey-4"}},[s("q-item-section",{attrs:{side:""}},[s("q-icon",{staticClass:"q-ml-lg",attrs:{size:"20px",color:"primary",name:"fas fa-sign-in-alt"}})],1),s("q-item-section",[s("q-item-label",[t._v(t._s(t.$t("inboundRoutes")))])],1),t.miniState?s("q-tooltip",{attrs:{anchor:"center right",self:"bottom middle","transition-show":"scale","transition-hide":"scale","content-class":"bg-black text-white shadow-4",offset:[20,20]}},[t._v(t._s(t.$t("InboundRoutes")))]):t._e()],1),s("q-item",{staticClass:"bg-grey-2",attrs:{clickable:"",to:"/outboundroutes","active-class":"bg-grey-4"}},[s("q-item-section",{attrs:{side:""}},[s("q-icon",{staticClass:"q-ml-lg",attrs:{size:"20px",color:"primary",name:"fas fa-sign-out-alt"}})],1),s("q-item-section",[s("q-item-label",[t._v(t._s(t.$t("outboundroutes")))])],1),t.miniState?s("q-tooltip",{attrs:{anchor:"center right",self:"bottom middle","transition-show":"scale","transition-hide":"scale","content-class":"bg-black text-white shadow-4",offset:[20,20]}},[t._v(t._s(t.$t("outboundroutes")))]):t._e()],1)],1),s("q-expansion-item",{attrs:{"expand-icon-class":"text-primary","dense-toggle":""},scopedSlots:t._u([{key:"header",fn:function(){return[s("q-item-section",{attrs:{side:""}},[s("q-icon",{attrs:{name:"fas fa-user-cog",color:"primary"}})],1),s("q-item-section",[t._v(t._s(t.$t("administration")))]),t.miniState?s("q-tooltip",{attrs:{anchor:"center right",self:"bottom middle","transition-show":"scale","transition-hide":"scale","content-class":"bg-black text-white shadow-4",offset:[50,50]}},[t._v(t._s(t.$t("externalManagement")))]):t._e()]},proxy:!0}])},[s("q-item",{staticClass:"bg-grey-2",attrs:{clickable:"",to:"/users","active-class":"bg-grey-4"}},[s("q-item-section",{attrs:{side:""}},[s("q-icon",{staticClass:"q-ml-lg",attrs:{size:"20px",color:"primary",name:"fas fa-user"}})],1),s("q-item-section",[s("q-item-label",[t._v(t._s(t.$t("users")))])],1),t.miniState?s("q-tooltip",{attrs:{anchor:"center right",self:"bottom middle","transition-show":"scale","transition-hide":"scale","content-class":"bg-black text-white shadow-4",offset:[20,20]}},[t._v(t._s(t.$t("users")))]):t._e()],1),s("q-item",{staticClass:"bg-grey-2",attrs:{clickable:"",to:"/profiles","active-class":"bg-grey-4"}},[s("q-item-section",{attrs:{side:""}},[s("q-icon",{staticClass:"q-ml-lg",attrs:{size:"20px",color:"primary",name:"fas fa-users"}})],1),s("q-item-section",[s("q-item-label",[t._v(t._s(t.$t("profile")))])],1),t.miniState?s("q-tooltip",{attrs:{anchor:"center right",self:"bottom middle","transition-show":"scale","transition-hide":"scale","content-class":"bg-black text-white shadow-4",offset:[20,20]}},[t._v(t._s(t.$t("profile")))]):t._e()],1)],1),s("q-expansion-item",{attrs:{"expand-icon-class":"text-primary","dense-toggle":""},scopedSlots:t._u([{key:"header",fn:function(){return[s("q-item-section",{attrs:{side:""}},[s("q-icon",{attrs:{name:"fas fa-file-alt",color:"primary"}})],1),s("q-item-section",[t._v(t._s(t.$t("reports")))]),t.miniState?s("q-tooltip",{attrs:{anchor:"center right",self:"bottom middle","transition-show":"scale","transition-hide":"scale","content-class":"bg-black text-white shadow-4",offset:[20,20]}},[t._v(t._s(t.$t("reports")))]):t._e()]},proxy:!0}])},[s("q-item",{staticClass:"bg-grey-2",attrs:{clickable:"",to:"/cdr","active-class":"bg-grey-4"}},[s("q-item-section",{attrs:{side:""}},[s("q-icon",{staticClass:"q-ml-lg",attrs:{size:"20px",color:"primary",name:"fas fa-microphone"}})],1),s("q-item-section",[s("q-item-label",[t._v(t._s(t.$t("callDetailRecord")))])],1),t.miniState?s("q-tooltip",{attrs:{anchor:"center right",self:"bottom middle","transition-show":"scale","transition-hide":"scale","content-class":"bg-black text-white shadow-4",offset:[20,20]}},[t._v(t._s(t.$t("callDetailRecord")))]):t._e()],1)],1),s("q-item",{attrs:{clickable:"",to:"/voiceguide","active-class":"bg-grey-3"}},[s("q-item-section",{attrs:{side:""}},[s("q-icon",{attrs:{color:"primary",name:"fas fa-microphone-alt"}})],1),s("q-item-section",[s("q-item-label",[t._v(t._s(t.$t("voiceguide")))])],1),t.miniState?s("q-tooltip",{attrs:{anchor:"center right",self:"bottom middle","transition-show":"scale","transition-hide":"scale","content-class":"bg-black text-white shadow-4",offset:[30,30]}},[t._v(t._s(t.$t("voiceguide")))]):t._e()],1)],1)],1),t.leftDrawerOpen?s("div",{staticClass:"absolute",staticStyle:{top:"2px",right:"-8px"}},[s("q-btn",{staticClass:"gt-sm text-white",style:"background-color:"+t.headFooterColor,attrs:{unelevated:"",size:"xs",icon:t.miniState?"fas fa-chevron-right":"fas fa-chevron-left"},on:{click:t.drawerClick}})],1):t._e()],1)},l=[];function m(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function f(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?m(Object(s),!0).forEach((function(e){n()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):m(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var p={name:"DrawerComponent",data:function(){return{leftDrawerOpen:!0,miniState:!1,drawerSearch:""}},methods:{openDrawer:function(){this.leftDrawerOpen=!this.leftDrawerOpen},drawerClick:function(t){this.miniState=!this.miniState}},computed:f({thumbStyle:function(){return{right:"2px",borderRadius:"5px",backgroundColor:"#9C27B0",width:"5px",opacity:.75}}},Object(o["b"])("whitelabel",["drawerColor"]),{},Object(o["b"])("whitelabel",["headFooterColor"]))},u=p,b=s("a6c2"),h=Object(b["a"])(u,c,l,!1,null,"9149a2dc",null),d=h.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-drawer",{attrs:{side:"right",elevated:""},model:{value:t.infoDrawer,callback:function(e){t.infoDrawer=e},expression:"infoDrawer"}},[s("q-card",{staticClass:"full-height bg-white"},[t.help?s("help",{ref:"Help",attrs:{close:t.close}}):t._e(),t.notifications?s("notifications",{ref:"Notifications",attrs:{close:t.close}}):t._e(),t.search?s("search",{ref:"Search",attrs:{close:t.close}}):t._e(),t.about?s("about",{ref:"About",attrs:{close:t.close}}):t._e(),t.userMenu?s("user-menu",{ref:"UserMenu",attrs:{close:t.close}}):t._e()],1)],1)},q=[],_=(s("9ec6"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-list",{staticStyle:{"min-width":"300px"},attrs:{separator:""}},[s("q-item",{staticClass:"bg-grey-3"},[s("q-item-section",[s("q-item-label",{staticClass:"text-subtitle1"},[t._v(t._s(t.$t("help")))])],1),s("q-item-section",{attrs:{side:""}},[s("q-btn",{attrs:{dense:"",flat:"",icon:"close"},nativeOn:{click:function(e){return t.closeDrawer(e)}}})],1)],1)],1)}),w=[],x={props:["close"],name:"HelpDialog",data:function(){return{}},methods:{closeDrawer:function(){this.close()}}},v=x,y=Object(b["a"])(v,_,w,!1,null,null,null),k=y.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-list",{staticStyle:{"min-width":"300px"},attrs:{separator:""}},[s("q-item",{staticClass:"bg-grey-3"},[s("q-item-section",[s("q-item-label",{staticClass:"text-subtitle1"},[t._v(t._s(t.$t("notifications")))])],1),s("q-item-section",{attrs:{side:""}},[s("q-btn",{attrs:{dense:"",flat:"",icon:"close"},nativeOn:{click:function(e){return t.closeDrawer(e)}}})],1)],1),t._l(t.notifications,(function(e,a){return s("q-item",{key:a},[s("q-item-section",{attrs:{side:""}},[s("q-icon",{attrs:{size:"25px",name:"fas fa-envelope"}})],1),s("q-item-section",[s("q-item-label",[t._v(t._s(e.title))]),s("q-item-label",{attrs:{caption:""}},[t._v(t._s(e.description))])],1)],1)}))],2)},$=[],D={props:["close"],name:"NotificationsDialog",data:function(){return{notifications:[{title:"Mensagem 1",description:"Texto da mensagem 1"},{title:"Mensagem 2",description:"Texto da mensagem 2"},{title:"Mensagem 3",description:"Texto da mensagem 3"},{title:"Mensagem 4",description:"Texto da mensagem 4"},{title:"Mensagem 5",description:"Texto da mensagem 5"}]}},methods:{closeDrawer:function(){this.close()}}},S=D,O=Object(b["a"])(S,C,$,!1,null,null,null),j=O.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-list",{staticStyle:{"min-width":"300px"},attrs:{separator:""}},[s("q-item",{staticClass:"bg-grey-3"},[s("q-item-section",[s("q-item-label",{staticClass:"text-subtitle1"},[t._v(t._s(t.$t("search")))])],1),s("q-item-section",{attrs:{side:""}},[s("q-btn",{attrs:{dense:"",flat:"",icon:"close"},nativeOn:{click:function(e){return t.closeDrawer(e)}}})],1)],1),s("q-input",{staticClass:"q-pa-md",attrs:{outlined:"",color:"primary",label:t.$t("typeYourSearch"),hint:t.$t("searchAllSite")},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.generalSearch,callback:function(e){t.generalSearch=e},expression:"generalSearch"}}),s("q-separator",{staticClass:"q-mt-md"}),t.searchResults?s("q-item-label",{staticClass:"bg-grey-2",attrs:{header:""}},[s("span",{staticClass:"text-primary text-bold"},[t._v(t._s(t.generalSearch))])]):t._e(),s("q-separator"),t._l(t.searchResults,(function(e,a){return s("q-item",{key:a},[s("q-item-section",[s("q-item-label",[t._v(t._s(e.string))]),s("q-item-label",{staticClass:"text-blue-5",attrs:{caption:""}},[t._v(t._s(e.page))])],1),s("q-item-section",{attrs:{side:""}},[s("q-icon",{attrs:{size:"18px",name:"fas fa-chevron-right"}})],1)],1)}))],2)},P=[],z={props:["close"],name:"SearchDialog",data:function(){return{generalSearch:"",searchResults:[{string:"Mensagem 1",page:"Texto da mensagem 1"},{string:"Mensagem 1",page:"Texto da mensagem 1"},{string:"Mensagem 1",page:"Texto da mensagem 1"}]}},methods:{closeDrawer:function(){this.close()}}},I=z,E=Object(b["a"])(I,M,P,!1,null,null,null),T=E.exports,R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-list",{staticStyle:{"min-width":"300px"},attrs:{separator:""}},[s("q-item",{staticClass:"bg-grey-3"},[s("q-item-section",[s("q-item-label",{staticClass:"text-subtitle1"},[t._v(t._s(t.$t("about")))])],1),s("q-item-section",{attrs:{side:""}},[s("q-btn",{attrs:{dense:"",flat:"",icon:"close"},nativeOn:{click:function(e){return t.closeDrawer(e)}}})],1)],1)],1)},G=[],N={props:["close"],name:"AboutDrawer",data:function(){return{aboutDrawer:!1}},methods:{closeDrawer:function(){this.close()}}},L=N,A=Object(b["a"])(L,R,G,!1,null,null,null),F=A.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("q-list",{staticStyle:{"min-width":"300px"},attrs:{separator:""}},[s("q-item",{staticClass:"bg-grey-3"},[s("q-item-section",[s("q-item-label",{staticClass:"text-subtitle1"},[t._v(t._s(t.$t("userMenu")))])],1),s("q-item-section",{attrs:{side:""}},[s("q-btn",{attrs:{dense:"",flat:"",icon:"close"},nativeOn:{click:function(e){return t.closeDrawer(e)}}})],1)],1),s("div",{staticClass:"col"},[s("q-list",{staticStyle:{"min-width":"180px"},attrs:{separator:""}},[s("q-item-label",{staticClass:"bg-grey-2 text-center",attrs:{header:""}},[s("q-avatar",{attrs:{size:"38px"}},[s("img",{attrs:{src:t.user.image}})]),s("div",{staticClass:"q-pt-sm"},[t._v(t._s(t.$t("hello"))+", "+t._s(t.user.login))])],1)],1)],1),s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:"",to:"/usersettings"}},[s("q-item-section",{attrs:{side:""}},[s("q-icon",{attrs:{size:"18px",name:"fas fa-cog"}})],1),s("q-item-section",[t._v(t._s(t.$t("settings")))])],1),s("q-separator"),s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:"",to:"/whitelabelsettings"}},[s("q-item-section",{attrs:{side:""}},[s("q-icon",{attrs:{size:"18px",name:"fas fa-palette"}})],1),s("q-item-section",[t._v(t._s(t.$t("whiteLabel"))+" "+t._s(t.$t("settings")))])],1),s("q-separator"),s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:"",to:"/languagesettings"}},[s("q-item-section",{attrs:{side:""}},[s("q-icon",{attrs:{size:"18px",name:"fas fa-globe"}})],1),s("q-item-section",[t._v(t._s(t.$t("language"))+" "+t._s(t.$t("settings")))])],1),s("q-separator"),s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:t.doLogout}},[s("q-item-section",{attrs:{side:""}},[s("q-icon",{attrs:{size:"18px",name:"fas fa-sign-out-alt"}})],1),s("q-item-section",[t._v(t._s(t.$t("logout")))])],1)],1),s("q-separator",{attrs:{vertical:"",inset:""}})],1)},U=[],V=(s("67c8"),s("6043")),J=V["a"].getService(),B={props:["close"],components:{},data:function(){return{user:{login:"Admin",image:"statics/img/user.png"}}},methods:{closeDrawer:function(){this.close()},openUserSettings:function(){this.$refs.UserSettings.open()},doLogout:function(){this.$router.replace("login"),J.clearLocalStorage()}}},Y=B,K=Object(b["a"])(Y,H,U,!1,null,null,null),Q=K.exports,W={name:"InfoDrawer",components:{Help:k,Notifications:j,Search:T,About:F,UserMenu:Q},data:function(){return{infoDrawer:!1,help:!1,notifications:!1,about:!1,search:!1,userMenu:!1}},methods:{open:function(t){switch(this.infoDrawer=!0,t){case"help":this.help=!0,this.notifications=this.about=this.search=this.userMenu=!1;break;case"notifications":this.notifications=!0,this.help=this.about=this.search=this.userMenu=!1;break;case"about":this.about=!0,this.notifications=this.help=this.search=this.userMenu=!1;break;case"search":this.search=!0,this.notifications=this.about=this.help=this.userMenu=!1;break;case"userMenu":this.userMenu=!0,this.notifications=this.about=this.help=this.search=!1;break}},close:function(){this.infoDrawer=!1}}},X=W,Z=Object(b["a"])(X,g,q,!1,null,null,null),tt=Z.exports;function et(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function st(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?et(Object(s),!0).forEach((function(e){n()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):et(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var at={name:"InternalLayout",components:{Drawer:d,InfoDrawer:tt},data:function(){return{generalSearch:"",footerText:"Copyright © 2019 VoxData Technology - ".concat(this.$t("allRightsReserved")),productName:"OmniVox - VoxCES / VoxFacility"}},methods:{openDrawerComponent:function(){this.$refs.Drawer.openDrawer()},openInfoDrawer:function(t){this.$refs.InfoDrawer.open(t)}},computed:st({},Object(o["b"])("whitelabel",["headFooterColor"]))},it=at,rt=(s("6113"),Object(b["a"])(it,a,i,!1,null,null,null));e["default"]=rt.exports}}]);