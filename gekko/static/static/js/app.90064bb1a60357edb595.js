webpackJsonp([1],{0:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a=n("aK3Z"),s=n.n(a),o={name:"App",mounted:function(){setTimeout(this.poll,1e3)},methods:{poll:function(){this.$http.headers.common["Access-Control-Allow-Origin"]="*",this.$http.get("poll").then(function(t){return t.json()}).then(function(t){return console.log(t)}),setTimeout(this.poll,1e3)}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("h1",[this._v("GEKKO Optimization Results")]),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")(o,l,!1,function(t){n("SMu7")},null,null).exports,c=n("fZjL"),u=n.n(c),d=n("pH0I"),v=n.n(d),h=this;window.onresize=function(){h.plotlyResize};var p={name:"Plot",props:{externalId:{type:Number,default:1},numPlots:{type:Number,default:1}},data:function(){return{id:Math.random().toString(36).substring(7)}},watch:{numPlots:function(){console.log("numPlots changed, resizing plot"),h.plotlyResize}},beforeDestroy:function(){window.removeEventListener("resize",this.plotlyResize)},mounted:function(){var t=this;window.addEventListener("resize",this.plotlyResize),this.$http.headers.common["Access-Control-Allow-Origin"]="*",this.$http.get("get_data").then(function(t){return t.json()}).then(function(e){var n=[];console.log(e);var i=u()(e).length>5;for(var a in e)if(e.hasOwnProperty(a)&&"time"!==a){var s={x:e.time,y:e[a],mode:"lines",type:"scatter",name:a,visible:i?"legendonly":"true"};n.push(s)}v.a.newPlot(t.id,n)})},methods:{plotlyResize:function(){console.log("handling resize for:",this.id),v.a.Plots.resize(this.id)},removePlot:function(){this.$emit("plot-removed",this.externalId)}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"plot-div"},[this.numPlots>1?e("button",{staticClass:"btn btn-sm btn-danger plot-close",attrs:{type:"button"},on:{click:this.removePlot}},[this._v("X")]):this._e(),this._v(" "),e("div",{attrs:{id:this.id}})])},staticRenderFns:[]};var f=n("VU/8")(p,m,!1,function(t){n("VuR0")},null,null).exports,b={name:"Tabs",data:function(){return{activeTab:"Model",modelData:{},varsData:{},open:!1}},created:function(){var t=this,e=["INFO","APM"],n=void 0;this.$http.get("get_options").then(function(t){return t.json()}).then(function(i){return n=i,console.log("obj:",i),t.modelData=i.APM,u()(i).filter(function(t){return!e.includes(t)})}).then(function(e){e.forEach(function(e){return console.log(n),t.varsData[e]=n[e],t.varsData[e].ishidden=!0,null})}).then(function(){console.log("varsData:",t.varsData)}),this.$http.get("get_model").then(function(t){return t.json()}).then(function(e){t.modelData=e,console.log("model:",t.modelData)})},methods:{toggle:function(t,e){t.ishidden=!t.ishidden,this.$forceUpdate()}}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"nav nav-tabs"},[n("li",{staticClass:"nav-item tab"},[n("a",{staticClass:"nav-link ",class:{active:"Model"==t.activeTab},on:{click:function(e){t.activeTab="Model"}}},[t._v("Model")])]),t._v(" "),n("li",{staticClass:"nav-item tab"},[n("a",{staticClass:"nav-link",class:{active:"Variables"==t.activeTab},on:{click:function(e){t.activeTab="Variables"}}},[t._v("Variables")])])]),t._v(" "),n("div",{staticClass:"tab-div"},[n("transition",{attrs:{name:"fade"}},["Model"===t.activeTab?[n("div",{staticClass:"table-responsive tab-table"},[n("table",{staticClass:"table table-striped table-sm"},[n("thead",[n("tr",[n("th",[t._v("Property")]),t._v(" "),n("th",[t._v("Value")])])]),t._v(" "),n("tbody",t._l(t.modelData,function(e,i){return n("tr",{key:i.id},[n("td",[t._v(t._s(i))]),t._v(" "),n("td",[t._v(t._s(e))])])}))])])]:t._e()],2),t._v(" "),n("transition",{attrs:{name:"fade"}},["Variables"===t.activeTab?[t.varsData?n("div",{staticClass:"tab-table"},[n("div",{staticStyle:{"overflow-y":"auto","max-height":"inherit"}},t._l(t.varsData,function(e,i){return n("ul",{key:e.id,staticClass:"tab-table-item"},[n("a",{staticClass:"var-dropdown",on:{click:function(n){t.toggle(e,i)}}},[t._v("\n                "+t._s(i)+" "+t._s(e.ishidden?"►":"▼")+"\n              ")]),t._v(" "),n("transition",{attrs:{name:"fade"}},[e.ishidden?t._e():n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-striped table-sm"},[n("thead",[n("tr",[n("th",[t._v("Property")]),t._v(" "),n("th",[t._v("Value")])])]),t._v(" "),n("tbody",t._l(e,function(e,i){return n("tr",{key:i.id},["ishidden"!=i?n("td",[t._v(t._s(i))]):t._e(),t._v(" "),"ishidden"!=i?n("td",[t._v(t._s(Number.isInteger(e)&&e<=1e5&&e>-1e5?e:e.toExponential(4)))]):t._e()])}))])])])],1)}))]):t._e()]:t._e()],2)],1)])},staticRenderFns:[]};var g=n("VU/8")(b,_,!1,function(t){n("lEa9")},null,null).exports,y=n("8+8L"),C=n("/ocq"),P={name:"Main",components:{plot:f,tabs:g},data:function(){return{plotArray:[1],idCounter:2}},methods:{addPlot:function(){this.plotArray.push(this.idCounter),++this.idCounter},removePlot:function(t){console.log("Removing plot",t),this.plotArray=this.plotArray.filter(function(e){return e!==t})}}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mainDiv"},[n("div",{staticClass:"row",staticStyle:{"margin-right":"0px"}},[n("div",{staticClass:"col-sm-3"},[n("tabs")],1),t._v(" "),n("div",{staticClass:"col-sm-9"},[n("div",{staticClass:"plots-div"},t._l(t.plotArray,function(e){return n("div",{key:e},[n("plot",{attrs:{"external-id":e,"num-plots":t.plotArray.length},on:{"plot-removed":t.removePlot}})],1)})),t._v(" "),n("button",{staticClass:"btn btn-primary",staticStyle:{"margin-top":"10px"},attrs:{type:"button"},on:{click:t.addPlot}},[t._v("Add Plot")])])])])},staticRenderFns:[]};var A=n("VU/8")(P,w,!1,function(t){n("T6Jl")},null,null).exports;i.a.use(C.a);var T=new C.a({routes:[{path:"/",name:"Main",component:A}]}),D=n("rCTf");i.a.use(s.a,{Observable:D.Observable}),i.a.use(y.a),i.a.config.productionTip=!1,i.a.http.options.root="http://"+location.hostname+":"+location.port,new i.a({el:"#app",router:T,components:{App:r,Plot:f,Tabs:g},template:"<App/>"})},SMu7:function(t,e){},T6Jl:function(t,e){},VuR0:function(t,e){},lEa9:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.90064bb1a60357edb595.js.map