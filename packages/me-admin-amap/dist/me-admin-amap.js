!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("me-admin-amap",[],t):"object"==typeof exports?exports["me-admin-amap"]=t():e.MeAdminAmap=t()}(window,function(){return n={},r.m=a={"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/AmapDrag.vue?vue&type=style&index=0&id=7239b151&lang=css&scoped=true&":function(e,t,a){(e.exports=a("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([e.i,"\n.m-map[data-v-7239b151] {\n  height: 300px;\n  position: relative;\n}\n.m-map .map[data-v-7239b151] {\n  width: 100%;\n  height: 100%;\n}\n.m-map .search[data-v-7239b151] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  width: 40%;\n  z-index: 1;\n}\n.m-map .search input[data-v-7239b151] {\n  width: 180px;\n  border: 1px solid #ccc;\n  line-height: 20px;\n  padding: 5px;\n  outline: none;\n}\n.m-map .search button[data-v-7239b151] {\n  line-height: 30px;\n  background: #fff;\n  border: 1px solid #ccc;\n  width: 50px;\n  text-align: center;\n}\n.m-map .result[data-v-7239b151] {\n  max-height: 300px;\n  overflow: auto;\n  margin-top: 10px;\n}\n",""])},"./node_modules/css-loader/dist/runtime/api.js":function(e,t,a){"use strict";e.exports=function(a){var o=[];return o.toString=function(){return this.map(function(e){var t=function(e,t){var a=e[1]||"",n=e[3];if(!n)return a;if(t&&"function"==typeof btoa){var r=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(n),s=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[a].concat(s).concat([r]).join("\n")}return[a].join("\n")}(e,a);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},o.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},n=0;n<this.length;n++){var r=this[n][0];null!=r&&(a[r]=!0)}for(n=0;n<e.length;n++){var s=e[n];null!=s[0]&&a[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="("+s[2]+") and ("+t+")"),o.push(s))}},o}},"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/AmapDrag.vue?vue&type=style&index=0&id=7239b151&lang=css&scoped=true&":function(e,t,a){var n=a("./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/AmapDrag.vue?vue&type=style&index=0&id=7239b151&lang=css&scoped=true&");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a("./node_modules/vue-style-loader/lib/addStylesClient.js").default)("302ad08c",n,!0,{})},"./node_modules/vue-style-loader/lib/addStylesClient.js":function(e,t,a){"use strict";function d(e,t){for(var a=[],n={},r=0;r<t.length;r++){var s=t[r],o=s[0],i={id:e+":"+r,css:s[1],media:s[2],sourceMap:s[3]};n[o]?n[o].parts.push(i):a.push(n[o]={id:o,parts:[i]})}return a}a.r(t),a.d(t,"default",function(){return m});var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l={},r=n&&(document.head||document.getElementsByTagName("head")[0]),s=null,o=0,c=!1,i=function(){},u=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(o,e,t,a){c=t,u=a||{};var i=d(o,e);return h(i),function(e){for(var t=[],a=0;a<i.length;a++){var n=i[a];(r=l[n.id]).refs--,t.push(r)}e?h(i=d(o,e)):i=[];for(a=0;a<t.length;a++){var r;if(0===(r=t[a]).refs){for(var s=0;s<r.parts.length;s++)r.parts[s]();delete l[r.id]}}}}function h(e){for(var t=0;t<e.length;t++){var a=e[t],n=l[a.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](a.parts[r]);for(;r<a.parts.length;r++)n.parts.push(g(a.parts[r]));n.parts.length>a.parts.length&&(n.parts.length=a.parts.length)}else{var s=[];for(r=0;r<a.parts.length;r++)s.push(g(a.parts[r]));l[a.id]={id:a.id,refs:1,parts:s}}}}function v(){var e=document.createElement("style");return e.type="text/css",r.appendChild(e),e}function g(t){var a,n,e=document.querySelector("style["+p+'~="'+t.id+'"]');if(e){if(c)return i;e.parentNode.removeChild(e)}if(f){var r=o++;e=s=s||v(),a=_.bind(null,e,r,!1),n=_.bind(null,e,r,!0)}else e=v(),a=function(e,t){var a=t.css,n=t.media,r=t.sourceMap;n&&e.setAttribute("media",n);u.ssrId&&e.setAttribute(p,t.id);r&&(a+="\n/*# sourceURL="+r.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}.bind(null,e),n=function(){e.parentNode.removeChild(e)};return a(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;a(t=e)}else n()}}var y,b=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function _(e,t,a,n){var r=a?"":n.css;if(e.styleSheet)e.styleSheet.cssText=b(t,r);else{var s=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(s,o[t]):e.appendChild(s)}}},"./src/AmapDrag.vue?vue&type=style&index=0&id=7239b151&lang=css&scoped=true&":function(e,t,a){"use strict";var n=a("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/AmapDrag.vue?vue&type=style&index=0&id=7239b151&lang=css&scoped=true&");a.n(n).a},"./src/index.js":function(e,t,a){"use strict";a.r(t);var n={props:{lat:Number,lng:Number,mapKey:String},data:function(){return{searchKey:"",placeSearch:null,dragStatus:!1,AMapUI:null,AMap:null}},watch:{searchKey:function(){""===this.searchKey&&this.placeSearch.clear()}},methods:{remoteLoad:function(r,s){return new Promise(function(e,t){var a=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.src=r,n.onload=n.onreadystatechange="function"==typeof s?function(){this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(s(),n.onload=n.onreadystatechange=null)}:function(){e()},a.appendChild(n)})},handleSearch:function(){this.searchKey&&this.placeSearch.search(this.searchKey)},initMap:function(){var r=this,e=this.AMapUI=window.AMapUI,s=this.AMap=window.AMap;e.loadUI(["misc/PositionPicker"],function(e){var t={zoom:16,cityName:"全国"};r.lat&&r.lng&&(t.center=[r.lng,r.lat]);var a=new s.Map("js-container",t);r.$on("hook:beforeDestroy",function(){a&&a.destroy()}),s.service("AMap.PlaceSearch",function(){r.placeSearch=new s.PlaceSearch({pageSize:3,pageIndex:1,citylimit:!0,city:"全国",map:a,panel:"js-result"})}),s.plugin(["AMap.Geolocation"],function(){var e=new s.Geolocation({enableHighAccuracy:!1,noGeoLocation:2,timeout:1e4,maximumAge:0,convert:!0,showButton:!0,buttonPosition:"LB",buttonOffset:new s.Pixel(10,20),showMarker:!0,showCircle:!0,panToLocation:!0,zoomToAccuracy:!0});a.addControl(e),r.lat||r.lng||e.getCurrentPosition(),s.event.addListener(e,"complete",function(e){r.$emit("drag",e)}),s.event.addListener(e,"error",function(e){console.warn(e)})});var n=new e({mode:"dragMap",map:a});n.on("success",function(e){r.dragStatus?r.$emit("drag",e):r.dragStatus=!0}),n.start()})}},created:function(){var t=this;if(window.AMap&&window.AMapUI)this.initMap();else{var a="file:"===location.protocol?"http:":"";this.remoteLoad(a+"//webapi.amap.com/maps?v=1.4.0&key="+this.mapKey).then(function(e){t.remoteLoad(a+"webapi.amap.com/ui/1.0/main.js").then(function(e){t.initMap()})})}}};a("./src/AmapDrag.vue?vue&type=style&index=0&id=7239b151&lang=css&scoped=true&");function r(e,t,a,n,r,s,o,i){var d,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=a,l._compiled=!0),n&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),o?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=d):r&&(d=i?function(){r.call(this,this.$root.$options.shadowRoot)}:r),d)if(l.functional){l._injectStyles=d;var c=l.render;l.render=function(e,t){return d.call(t),c(e,t)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,d):[d]}return{exports:e,options:l}}var s=r(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-map"},[t.placeSearch?a("div",{staticClass:"search"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchKey,expression:"searchKey"}],attrs:{type:"text",placeholder:"请输入关键字"},domProps:{value:t.searchKey},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSearch(e)},input:function(e){e.target.composing||(t.searchKey=e.target.value)}}}),t._v(" "),a("button",{attrs:{type:"button"},on:{click:t.handleSearch}},[t._v("搜索")]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.searchKey,expression:"searchKey"}],staticClass:"result",attrs:{id:"js-result"}})]):t._e(),t._v(" "),a("div",{staticClass:"map",attrs:{id:"js-container"}},[t._v("正在加载数据 ...")])])},[],!1,null,"7239b151",null).exports,o=r({props:{mapKey:String,lng:{type:Number},lat:{type:Number},address:String,addressDetail:String,globalOptions:{type:Object,required:!1,default:function(){return{}}}},components:{VMapDrag:s},data:function(){return{dialogVisible:!1,model:{},dragData:{},amapMapKey:String}},created:function(){this.amapMapKey=this.mapKey||this.globalOptions.mapKey;var e={lng:this.lng,lat:this.lat,address:this.address,addressDetail:this.addressDetail};this.model=Object.assign({},e),this.dragData=Object.assign({},e)},methods:{dragMap:function(e){this.dragData.lng=e.position.lng,this.dragData.lat=e.position.lat,this.dragData.address=e.address},cancel:function(){this.dialogVisible=!1},save:function(){this.dragData.address?(this.dialogVisible=!1,this.model={lng:this.dragData.lng,lat:this.dragData.lat,address:this.dragData.address,addressDetail:this.dragData.addressDetail},this.$emit("select",this.model)):this.$emit("select",null)}}},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("地址选择")]),t._v(" "),a("div",[t._t("default",[t._v(t._s(t.model.address)+" "+t._s(t.model.addressDetail))],{data:t.model})],2),t._v(" "),t.dialogVisible?a("el-dialog",{attrs:{title:"地址选择",width:"60%",visible:t.dialogVisible,"close-on-click-modal":!1,"append-to-body":""},on:{"update:visible":function(e){t.dialogVisible=e}}},[t._t("header",[a("div",{staticStyle:{"line-height":"32px"}},[t._v("\n        位置信息：\n        "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.dragData.address,expression:"dragData.address"}],staticStyle:{width:"50%","line-height":"20px"},attrs:{type:"text",disabled:""},domProps:{value:t.dragData.address},on:{input:function(e){e.target.composing||t.$set(t.dragData,"address",e.target.value)}}}),t.dragData.lng?a("span",[t._v("("+t._s(t.dragData.lng)+","+t._s(t.dragData.lat)+")")]):t._e()]),t._v(" "),a("div",{staticStyle:{"line-height":"32px"}},[t._v("\n        详细信息：\n        "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.dragData.addressDetail,expression:"dragData.addressDetail"}],staticStyle:{width:"80%","line-height":"20px"},attrs:{type:"text"},domProps:{value:t.dragData.addressDetail},on:{input:function(e){e.target.composing||t.$set(t.dragData,"addressDetail",e.target.value)}}})])],{data:t.dragData}),t._v(" "),a("div",{staticClass:"amap-page-container-custom"},[a("v-map-drag",{attrs:{lng:t.lng,lat:t.lat,mapKey:t.amapMapKey},on:{drag:t.dragMap}})],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("确 定")])],1)],2):t._e()],1)},[],!1,null,null,null).exports;a.d(t,"instance",function(){return i}),a.d(t,"install",function(){return d});var i=o,d=function(e,t){var a=i.name;t&&(a=t.name||a,i.props.globalOptions&&(i.props.globalOptions.default=function(){return t})),e.component(a,i)};i.install=d;t.default=i}},r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s="./src/index.js");function r(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}var a,n});