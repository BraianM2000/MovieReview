(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-137efcd9"],{"159b":function(e,t,r){var a=r("da84"),i=r("fdbc"),s=r("17c2"),n=r("9112");for(var o in i){var c=a[o],l=c&&c.prototype;if(l&&l.forEach!==s)try{n(l,"forEach",s)}catch(u){l.forEach=s}}},"17c2":function(e,t,r){"use strict";var a=r("b727").forEach,i=r("a640"),s=r("ae40"),n=i("forEach"),o=s("forEach");e.exports=n&&o?[].forEach:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}},"3aeb":function(e,t,r){},"3d2e":function(e,t,r){"use strict";var a=r("3aeb"),i=r.n(a);i.a},4160:function(e,t,r){"use strict";var a=r("23e7"),i=r("17c2");a({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"65f0":function(e,t,r){var a=r("861d"),i=r("e8b5"),s=r("b622"),n=s("species");e.exports=function(e,t){var r;return i(e)&&(r=e.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?a(r)&&(r=r[n],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},"6b31":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container-allmovies"},[r("b-container",{staticClass:"container-filter-movie"},[r("h3",[e._v("Descrubir")]),r("b-row",[r("b-col",{staticClass:"filter-margin",attrs:{lg:"2"}},[r("span",[e._v("Categoria")]),r("b-form-select",{attrs:{options:e.options},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),r("b-col",{staticClass:"filter-margin",attrs:{lg:"2"}},[r("span",[e._v("Año")]),r("b-form-select",{attrs:{options:e.optionsYear},model:{value:e.selectedYear,callback:function(t){e.selectedYear=t},expression:"selectedYear"}})],1),r("b-col",{attrs:{lg:"2"}},[r("br"),r("b-button",{attrs:{block:"",variant:"danger"},on:{click:function(t){return e.applyFilter()}}},[e._v("Filtrar")])],1)],1)],1),r("b-container",[r("h3",[e._v("Peliculas")]),r("b-pagination-nav",{attrs:{"number-of-pages":e.totalPages,"use-router":"","base-url":e.currentUrl,align:"center"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}),r("b-row",e._l(e.Movies,(function(t){return r("b-col",{key:t.id,staticClass:"container-movie text-center",attrs:{col:"6",lg:"2"}},[r("div",[r("b-img",{staticClass:"container-movie-img",attrs:{rounded:"",width:"160",src:e.baseUrl+t.poster_path},on:{click:function(r){return e.seeMovie(t.id)}}})],1)])})),1),r("b-pagination-nav",{attrs:{"number-of-pages":e.totalPages,"use-router":"","base-url":e.currentUrl,align:"center"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)},i=[],s=(r("4160"),r("b0c0"),r("159b"),r("bc3a")),n=r.n(s),o={data:function(){return{Movies:[],baseUrl:"https://image.tmdb.org/t/p/w200/",Genres:[],selected:null,options:[{value:null,text:"Categoria"}],selectedYear:null,optionsYear:[{value:null,text:"Año"}],totalPages:1,currentPage:1,previousPage:1,currentUrl:"/allmovies/page="}},created:function(){void 0!=this.$route.params.number?(this.currentPage=this.$route.params.number,this.previousPage=this.$route.params.number):(this.currentPage=1,this.previousPage=1),void 0==this.$route.params.category&&void 0==this.$route.params.year?(this.getGenres(),this.getMovies(),this.setYears()):(this.selected=this.$route.params.category,this.selectedYear=this.$route.params.year,this.getGenres(),this.getMovies(),this.setYears())},updated:function(){this.currentPage!=this.previousPage&&(this.previousPage=this.currentPage,this.getMovies())},methods:{seeMovie:function(e){this.$router.push("/movie/"+e)},applyFilter:function(){this.$router.push("/allmovies/category="+this.selected+"/year="+this.selectedYear),null!=this.selected||null!=this.selectedYear?this.currentUrl="/allmovies/category="+this.selected+"/year="+this.selectedYear+"/page=":this.currentUrl="/allmovies/page=",this.currentPage=1,this.previousPage=1,this.getMovies()},getGenres:function(){var e=this;n.a.get("https://api.themoviedb.org/3/genre/movie/list?api_key=eac810b6ade616ce25d01396797173f0&language=es-CO").then((function(t){t.data.genres.forEach((function(t){e.options.push({value:t.id,text:t.name})}))})).catch((function(e){console.log(e)}))},getMovies:function(){var e,t=this;e=null!=this.selected&&null!=this.selectedYear?"https://api.themoviedb.org/3/discover/movie?api_key=eac810b6ade616ce25d01396797173f0&language=es-CO&page="+this.currentPage+"&primary_release_year="+this.selectedYear+"&with_genres="+this.selected:null==this.selected&&null!=this.selectedYear?"https://api.themoviedb.org/3/discover/movie?api_key=eac810b6ade616ce25d01396797173f0&language=es-CO&page="+this.currentPage+"&primary_release_year="+this.selectedYear:null!=this.selected&&null==this.selectedYear?"https://api.themoviedb.org/3/discover/movie?api_key=eac810b6ade616ce25d01396797173f0&language=es-CO&page="+this.currentPage+"&with_genres="+this.selected:"https://api.themoviedb.org/3/discover/movie?api_key=eac810b6ade616ce25d01396797173f0&language=es-CO&page="+this.currentPage,n.a.get(e).then((function(e){t.Movies=e.data.results,t.totalPages=e.data.total_pages})).catch((function(e){console.log(e)}))},setYears:function(){for(var e=(new Date).getFullYear();e>=1900;e--)this.optionsYear.push({value:e,text:e})}}},c=o,l=(r("3d2e"),r("2877")),u=Object(l["a"])(c,a,i,!1,null,null,null);t["default"]=u.exports},a640:function(e,t,r){"use strict";var a=r("d039");e.exports=function(e,t){var r=[][e];return!!r&&a((function(){r.call(null,t||function(){throw 1},1)}))}},ae40:function(e,t,r){var a=r("83ab"),i=r("d039"),s=r("5135"),n=Object.defineProperty,o={},c=function(e){throw e};e.exports=function(e,t){if(s(o,e))return o[e];t||(t={});var r=[][e],l=!!s(t,"ACCESSORS")&&t.ACCESSORS,u=s(t,0)?t[0]:c,h=s(t,1)?t[1]:void 0;return o[e]=!!r&&!i((function(){if(l&&!a)return!0;var e={length:-1};l?n(e,1,{enumerable:!0,get:c}):e[1]=1,r.call(e,u,h)}))}},b0c0:function(e,t,r){var a=r("83ab"),i=r("9bf2").f,s=Function.prototype,n=s.toString,o=/^\s*function ([^ (]*)/,c="name";!a||c in s||i(s,c,{configurable:!0,get:function(){try{return n.call(this).match(o)[1]}catch(e){return""}}})},b727:function(e,t,r){var a=r("0366"),i=r("44ad"),s=r("7b0b"),n=r("50c4"),o=r("65f0"),c=[].push,l=function(e){var t=1==e,r=2==e,l=3==e,u=4==e,h=6==e,g=5==e||h;return function(f,d,p,v){for(var b,m,y=s(f),P=i(y),L=a(d,p,3),S=n(P.length),C=0,_=v||o,x=t?_(f,S):r?_(f,0):void 0;S>C;C++)if((g||C in P)&&(b=P[C],m=L(b,C,y),e))if(t)x[C]=m;else if(m)switch(e){case 3:return!0;case 5:return b;case 6:return C;case 2:c.call(x,b)}else if(u)return!1;return h?-1:l||u?u:x}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},e8b5:function(e,t,r){var a=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==a(e)}},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-137efcd9.51b61ea8.js.map