webpackJsonp([1],{"/626":function(t,n){},"3TcT":function(t,n){},"4OJ3":function(t,n){},FbEL:function(t,n){},"HNa/":function(t,n){},"N+IJ":function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("7+uW"),i={items:[{title:"Home",url:"/home",icon:"home"},{title:"Contato",url:"/contato",icon:"contact_phone"}]},a={data:function(){return{clipped:!1,drawer:!0,fixed:!1,items:i.items,miniVariant:!1,right:!0,rightDrawer:!1,title:"Denalidecor"}},name:"App"},r={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",[e("v-navigation-drawer",{attrs:{persistent:"","mini-variant":t.miniVariant,clipped:t.clipped,"enable-resize-watcher":"",fixed:"",app:""},model:{value:t.drawer,callback:function(n){t.drawer=n},expression:"drawer"}},[e("v-list",t._l(t.items,function(n,o){return e("v-list-tile",{key:o,attrs:{value:"true",to:n.url}},[e("v-list-tile-action",[e("v-icon",{domProps:{innerHTML:t._s(n.icon)}})],1),t._v(" "),e("v-list-tile-content",[e("v-list-tile-title",{domProps:{textContent:t._s(n.title)}})],1)],1)}))],1),t._v(" "),e("v-toolbar",{attrs:{app:"","clipped-left":t.clipped}},[e("v-toolbar-side-icon",{on:{click:function(n){n.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:function(n){n.stopPropagation(),t.miniVariant=!t.miniVariant}}},[e("v-icon",{domProps:{innerHTML:t._s(t.miniVariant?"chevron_right":"chevron_left")}})],1),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:function(n){n.stopPropagation(),t.clipped=!t.clipped}}},[e("v-icon",[t._v("web")])],1),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:function(n){n.stopPropagation(),t.fixed=!t.fixed}}},[e("v-icon",[t._v("remove")])],1),t._v(" "),e("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),e("v-spacer")],1),t._v(" "),e("v-content",[e("router-view")],1),t._v(" "),e("v-footer",{attrs:{fixed:t.fixed,app:""}},[e("span",[t._v("© Denalidecor 2018")])])],1)},staticRenderFns:[]},s=e("VU/8")(a,r,!1,null,null,null).exports,c=e("/ocq"),l={name:"home",data:function(){return{show:!1,openModal:!1,items:[]}},mounted:function(){this.fetch()},methods:{openMyDialog:function(t){this.$emit("msg-modal",t)},fetch:function(t){function n(){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}(function(){var t=this;fetch("/static/data/data.json").then(function(t){return t.json()}).then(function(n){t.items=n})})}},u={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-layout",{attrs:{row:""}},[e("v-flex",{attrs:{xs12:"",offset:""}},[e("v-card",[e("v-container",{attrs:{fluid:"","grid-list-lg":""}},[e("v-layout",{attrs:{row:"",wrap:""}},t._l(t.items,function(n,o){return e("v-flex",{key:o,attrs:{xs12:"",sm6:"",md3:""}},[e("v-card",[e("v-card-media",{staticClass:"white--text",attrs:{height:"200px",src:n.imageUrl}}),t._v(" "),e("v-card-title",[e("div",[e("span",{staticClass:"grey--text"},[t._v("Code: "+t._s(n.id))]),e("br"),t._v(" "),e("span",[t._v(t._s(n.description))])])]),t._v(" "),e("v-card-actions",[e("div",[e("span",[t._v("Preço: "+t._s(n.price))]),t._v(" "),e("v-btn",{attrs:{flat:"",small:"",left:"",color:"purple"},on:{click:function(e){e.preventDefault(),t.openMyDialog(n)}}},[t._v("Abrir")])],1)])],1)],1)}))],1)],1)],1)],1)},staticRenderFns:[]},v=e("VU/8")(l,u,!1,null,null,null).exports,f={name:"modal",props:{info:{type:Object,default:function(){}},visible:Boolean,default:function(){return!1}},data:function(){return{}},computed:{show:{get:function(){return this.visible},set:function(t){t||this.$emit("close")}}}},d={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-layout",[e("v-dialog",{attrs:{"max-width":"500"},model:{value:t.show,callback:function(n){t.show=n},expression:"show"}},[e("v-flex",{attrs:{xs12:"",offset:""}},[e("v-card",{staticClass:"my-modal"},[e("v-card-media",{staticClass:"white--text",attrs:{height:"230px",src:t.info.imageModal}}),t._v(" "),e("v-card-text",[t._v(t._s(t.info.description))]),t._v(" "),e("v-card-actions",[e("v-spacer"),t._v(" "),e("v-btn",{attrs:{color:"green darken-1",flat:"flat"},nativeOn:{click:function(n){t.show=!1}}},[t._v("Fechar")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var p={name:"main-home",components:{Home:v,DModal:e("VU/8")(f,d,!1,function(t){e("4OJ3")},null,null).exports},data:function(){return{info:{},show:!1}},methods:{showImage:function(t){this.info=t,this.show=!0},closeModal:function(){this.show=!1}}},m={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("home",{on:{"msg-modal":this.showImage}}),this._v(" "),n("d-modal",{attrs:{info:this.info,visible:this.show},on:{close:this.closeModal}})],1)},staticRenderFns:[]},h=e("VU/8")(p,m,!1,null,null,null).exports,_={render:function(){var t=this.$createElement,n=this._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-slide-y-transition",{attrs:{mode:"out-in"}},[n("v-layout",{attrs:{column:"","align-center":""}},[n("blockquote",[this._v("\n        “Estamos em construção do catalogo.”\n        "),n("footer",[n("small",[n("em",[this._v("—Denalidecor")])])])])])],1)],1)},staticRenderFns:[]};var g=e("VU/8")(null,_,!1,function(t){e("QgMF")},"data-v-269a4226",null).exports;o.a.use(c.a);var w=new c.a({mode:"history",routes:[{path:"/",name:"Home",component:h},{path:"/contato",name:"Contato",component:g}]}),x=e("M+UZ"),b=e.n(x),V=e("IcMm"),F=e.n(V),y=e("rPQa"),M=e.n(y),k=e("TWha"),P=e.n(k),C=e("fYhH"),H=e.n(C),D=e("f/u0"),O=e.n(D),U=e("MPXs"),A=e.n(U),E=e("7Q1V"),N=e.n(E),T=e("7M7f"),$=e.n(T),Q=e("JUsQ"),I=e.n(Q),J=e("+9ps"),R=e.n(J),j=e("6VHA"),B=e.n(j);e("s6ZO");o.a.use(b.a,{components:{VApp:F.a,VNavigationDrawer:M.a,VFooter:P.a,VList:H.a,VCard:O.a,VDialog:A.a,VBtn:N.a,VIcon:$.a,VGrid:I.a,VToolbar:R.a,transitions:B.a},theme:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}),o.a.config.productionTip=!1,new o.a({el:"#app",router:w,components:{App:s},template:"<App/>"})},NOHZ:function(t,n){},P0ba:function(t,n){},QgMF:function(t,n){},"X05+":function(t,n){},XC5Q:function(t,n){},acBN:function(t,n){},kP4z:function(t,n){},kVeV:function(t,n){},pu2v:function(t,n){},rzhv:function(t,n){},s6ZO:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.4c4bc19b03dcb29d69d1.js.map