(function(t){function e(e){for(var r,a,c=e[0],s=e[1],u=e[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i={app:0},o=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-148b6d67":"ceb28557","chunk-6cfd65d6":"710e529b","chunk-df2fc69a":"1b0777c2","chunk-fdf2357a":"779d5aaf"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-148b6d67":1,"chunk-6cfd65d6":1,"chunk-df2fc69a":1,"chunk-fdf2357a":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-148b6d67":"2d51afa6","chunk-6cfd65d6":"9298274e","chunk-df2fc69a":"68505165","chunk-fdf2357a":"8c98afe1"}[t]+".css",i=s.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===r||l===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[t],f.parentNode.removeChild(f),n(o)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}i[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"08f2":function(t,e,n){"use strict";var r=n("f8e8"),a=n.n(r);a.a},1056:function(t,e,n){},"16a3":function(t,e,n){"use strict";var r=n("c699"),a=n.n(r);a.a},"2fe5":function(t,e,n){},"3a21":function(t,e,n){},5592:function(t,e,n){"use strict";var r=n("ed0f"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid",attrs:{id:"app"}},[n("toolBar"),n("router-view"),t._m(0)],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"row text-white mt-5"},[n("h2",[t._v("פוטר")])])}],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"row row-toolbar border-bottom"},[n("div",{staticClass:"col-4 center-right pr-md-5 pr-3"},[n("Hamburger",{attrs:{openCloseMenu:t.openCloseMenu},on:{openClose:function(e){t.openCloseMenu=!t.openCloseMenu}}}),t.openCloseMenu?n("menus",{on:{openClose:function(e){t.openCloseMenu=!t.openCloseMenu}}}):t._e()],1),t._m(0),n("div",{staticClass:"col-md-4 col-8 center-left"},[n("socialIcons"),n("div",{staticClass:"border m-3"}),n("cart")],1),t._m(1)])},c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-md-4 center desktop-flex logo"},[r("img",{attrs:{src:n("cf05"),alt:""}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-md-4 center mobile-flex border-top logo"},[r("img",{attrs:{src:n("cf05"),alt:""}})])}],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contain",class:{change:t.openCloseMenu},on:{click:function(e){return t.$emit("openClose")}}},[n("div",{staticClass:"bar1"}),n("div",{staticClass:"bar2"}),n("div",{staticClass:"bar3"})])},u=[],l={name:"Hamburger",props:{openCloseMenu:Boolean},data:function(){return{}}},d=l,f=(n("d626"),n("2877")),p=Object(f["a"])(d,s,u,!1,null,"43360a28",null),m=p.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"center social-icons"},[n("i",{staticClass:"fab fa-facebook-f"}),n("i",{staticClass:"fab fa-youtube"}),n("i",{staticClass:"fab fa-instagram"})])}],g={name:"socialIcons"},h=g,_=(n("693d"),Object(f["a"])(h,b,v,!1,null,"bf1644c6",null)),C=_.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"center cart",attrs:{to:"/beforePay"}},[n("p",{staticClass:"m-0 c-p"},[t._v("עגלת קניות "),n("span",[t._v(t._s(t.inCart.length))])])])},x=[],k={name:"cart",computed:{inCart:function(){return this.$store.getters.inCart}}},w=k,O=Object(f["a"])(w,y,x,!1,null,"46a00f65",null),j=O.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu"},t._l(t.categories,(function(e){return n("router-link",{key:e.id,staticClass:"m-3",attrs:{to:e.link},nativeOn:{click:function(e){return t.$emit("openClose")}}},[n("h1",[t._v(t._s(e.name))])])})),1)},E=[],$={name:"menus",data:function(){return{}},computed:{categories:function(){return this.$store.state.categories}}},M=$,S=(n("867c"),Object(f["a"])(M,P,E,!1,null,"3ce61f9c",null)),I=S.exports,B={name:"toolBar",components:{Hamburger:m,socialIcons:C,cart:j,menus:I},data:function(){return{openCloseMenu:!1}}},L=B,T=(n("7abb"),Object(f["a"])(L,o,c,!1,null,"8c7808e4",null)),A=T.exports,q={name:"Home",components:{toolBar:A}},H=q,N=(n("034f"),Object(f["a"])(H,a,i,!1,null,null,null)),D=N.exports,G=(n("d3b7"),n("8c4f")),J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("titleSectionGallery"),n("categorySection"),n("div",{staticClass:"row row-icons center pt-5 pb-5"},t._l(t.icons,(function(e){return n("div",{key:e.id,staticClass:"col-md-2 center icon"},[n("img",{attrs:{src:e.img,alt:""}}),n("h5",{staticClass:"text-center text-white mt-3"},[t._v(t._s(e.text))])])})),0),t._m(0)],1)])},F=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row row-details pt-5 pb-5 mt-4"},[n("div",{staticClass:"col"},[n("h5",{staticClass:"text-center mt-3"},[t._v(" פרטים אדניות פרטים אדניותפרטים אדניות פרטים אדניות פרטים אדניות פרטים אדניות פרטים אדניות פרטים אדניות פרטים אדניות")])])])}],K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row row-title img-cover",style:{backgroundImage:"url("+t.gallery[t.indexOfImg].img+")"}},[n("div",{staticClass:"col center"},[n("div",{staticClass:"text p-3"},[n("h1",[t._v(" מוצרים אדניות אדניות אדניות אדניות אדניות אדניות אדניות ")]),n("h4",[t._v(" מוצרים אדניות אדניות אדניות אדניות אדניות אדניות אדניות ")]),n("ButtonLink",{staticClass:"mt-4",attrs:{text:"המשך לחנות",link:"/store/"}})],1)])])},U=[],z={name:"titleSectionGallery",components:{},data:function(){return{gallery:[{img:"https://cdn.pixabay.com/photo/2017/05/19/06/22/desktop-2325627_960_720.jpg",id:1},{img:"https://cdn.pixabay.com/photo/2015/05/31/15/18/technology-792180_960_720.jpg",id:2},{img:"https://cdn.pixabay.com/photo/2017/12/10/15/16/white-horse-3010129_960_720.jpg",id:3}],indexOfImg:0}},mounted:function(){this.changeImg()},methods:{changeImg:function(){var t=this;setInterval((function(){console.log("asd"),t.indexOfImg++,t.indexOfImg===t.gallery.length&&(t.indexOfImg=0)}),4e3)}}},Q=z,R=(n("16a3"),Object(f["a"])(Q,K,U,!1,null,"45609e30",null)),V=R.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},t._l(t.category,(function(t){return n("boxCategory",{key:t.img,attrs:{item:t}})})),1)},X=[],Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-6 mt-md-4 mb-md-4  mt-2 mb-2 pr-md-3 pl-md-3 pr-0 pl-0"},[n("div",{staticClass:"w-100 col-box img-cover center-right-bottom",style:{backgroundImage:"url("+t.item.img+")"}},[n("div",{staticClass:"m-5 c-p"},[n("h2",[t._v(t._s(t.item.text)+" "),n("i",{staticClass:"fas fa-arrow-left"})])])])])},Z=[],tt={name:"boxCategory",components:{},props:{item:Object},data:function(){return{}}},et=tt,nt=(n("a01a"),Object(f["a"])(et,Y,Z,!1,null,"358cbda2",null)),rt=nt.exports,at={name:"categorySection",components:{boxCategory:rt},data:function(){return{category:[{img:"https://cdn.pixabay.com/photo/2017/08/24/12/28/flowers-2676662_960_720.jpg",text:"אדניות רגילות"},{img:"https://cdn.pixabay.com/photo/2017/02/27/01/40/tulips-2101912_960_720.jpg",text:"אדניות מיוחדות"}]}}},it=at,ot=Object(f["a"])(it,W,X,!1,null,"1525ab53",null),ct=ot.exports,st={name:"Home",components:{titleSectionGallery:V,categorySection:ct},data:function(){return{icons:[{img:"https://static.wixstatic.com/media/5f09b6_bd609eb080264993a86a658c6eca8bdd~mv2.png/v1/fill/w_79,h_76,al_c,q_95/5f09b6_bd609eb080264993a86a658c6eca8bdd~mv2.webp",text:"אדניות אדניות אדניות אדניות",id:1},{img:"https://static.wixstatic.com/media/5f09b6_bd609eb080264993a86a658c6eca8bdd~mv2.png/v1/fill/w_79,h_76,al_c,q_95/5f09b6_bd609eb080264993a86a658c6eca8bdd~mv2.webp",text:"אדניות אדניות אדניות אדניות",id:2},{img:"https://static.wixstatic.com/media/5f09b6_bd609eb080264993a86a658c6eca8bdd~mv2.png/v1/fill/w_79,h_76,al_c,q_95/5f09b6_bd609eb080264993a86a658c6eca8bdd~mv2.webp",text:"אדניות אדניות אדניות אדניות",id:3},{img:"https://static.wixstatic.com/media/5f09b6_bd609eb080264993a86a658c6eca8bdd~mv2.png/v1/fill/w_79,h_76,al_c,q_95/5f09b6_bd609eb080264993a86a658c6eca8bdd~mv2.webp",text:"אדניות אדניות אדניות אדניות",id:4}]}}},ut=st,lt=(n("08f2"),Object(f["a"])(ut,J,F,!1,null,"17fcfa18",null)),dt=lt.exports;r["a"].use(G["a"]);var ft=[{path:"/",name:"home",component:dt},{path:"/store",name:"store",component:function(){return n.e("chunk-fdf2357a").then(n.bind(null,"d93e"))}},{path:"/productPage/:id",name:"productPage",component:function(){return n.e("chunk-148b6d67").then(n.bind(null,"331c"))}},{path:"/beforePay",name:"beforePay",component:function(){return n.e("chunk-6cfd65d6").then(n.bind(null,"3409"))}},{path:"/pay",name:"pay",component:function(){return n.e("chunk-df2fc69a").then(n.bind(null,"76e0"))}}],pt=new G["a"]({mode:"history",base:"/",routes:ft}),mt=pt,bt=(n("4de4"),n("2f62"));r["a"].use(bt["a"]);var vt=new bt["a"].Store({state:{clientDatdlis:{},messengerPrice:40,ifMessenger:!0,categories:[{name:"בית",link:"/",id:1},{name:"חנות",link:"/store",id:2}],products:[{name:"אדניות אדניות אדניות",img:n("6322"),description:"אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן,",description1:"אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.\n\n      אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.",description2:"אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.\n\n      אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.",description3:"אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.\n\n      אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.",addCart:!1,price:1490,previousPrice:0,amount:0,id:1},{name:"אדניות אדניות אדניות",img:n("6322"),description:"אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן,",description1:"אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.\n\n        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.",description2:"אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.\n\n        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.",description3:"אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.\n\n        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.",addCart:!1,price:1490,previousPrice:0,amount:0,id:2},{name:"אדניות אדניות אדניות",img:n("6322"),description:"אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן,",description1:"אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.\n\n        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.",description2:"אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.\n\n        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.",description3:"אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.\n\n        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.",addCart:!1,price:1490,previousPrice:0,amount:0,id:3},{name:"אדניות אדניות אדניות",img:n("6322"),description:"אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן,",description1:"אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.\n\n        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.",description2:"אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.\n\n        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.",description3:"אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.\n\n        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.",addCart:!1,price:1490,previousPrice:0,amount:0,id:4},{name:"אדניות אדניות אדניות",img:n("6322"),description:"אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן,",description1:"אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.\n\n        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.",description2:"אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.\n\n        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.",description3:"אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.\n\n        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.",addCart:!1,price:1490,previousPrice:0,amount:0,id:5},{name:"אדניות אדניות אדניות",img:n("6322"),description:"אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן,",description1:"אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.\n\n        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.",description2:"אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.\n\n        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.",description3:"אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.\n\n        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.",addCart:!1,price:1490,previousPrice:0,amount:0,id:6}]},getters:{inCart:function(t){var e=t.products.filter((function(t){return t.amount>0}));return e},Payable:function(t,e){var n=0;for(var r in e.inCart)n+=e.inCart[r].amount*e.inCart[r].price;return n},PayablePlusMessenger:function(t,e){var n=e.Payable;return t.ifMessenger&&t.messengerPrice,n}},mutations:{changeAmount:function(t,e){for(var n in t.products)t.products[n].id==e.id&&(t.products[n].amount=e.amount)},setIfMessenger:function(t){t.ifMessenger=!t.ifMessenger}},actions:{},modules:{}}),gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{on:{click:function(e){return e.stopPropagation(),t.$emit("customEvent")}}},[t.link?n("router-link",{attrs:{tag:"button",to:t.link}},[t._v(t._s(t.text))]):n("button",{attrs:{type:"submit",form:t.formId}},[t._v(t._s(t.text))])],1)},ht=[],_t={name:"ButtonLink",props:{link:String,text:String,formId:String}},Ct=_t,yt=(n("d237"),Object(f["a"])(Ct,gt,ht,!1,null,"6d6555d0",null)),xt=yt.exports,kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal",attrs:{id:"myModal"},on:{click:function(e){return e.stopPropagation(),t.$emit("customEvent")}}},[n("div",{staticClass:"modal-con center"},[t._t("default")],2)])},wt=[],Ot={name:"Modal",components:{},props:{}},jt=Ot,Pt=(n("5592"),Object(f["a"])(jt,kt,wt,!1,null,"7470be18",null)),Et=Pt.exports;n("2fe5"),n("1056");r["a"].component("ButtonLink",xt),r["a"].component("Modal",Et),r["a"].config.productionTip=!1,new r["a"]({router:mt,store:vt,render:function(t){return t(D)}}).$mount("#app")},6322:function(t,e,n){t.exports=n.p+"img/ass6.a91471b9.jpg"},"693d":function(t,e,n){"use strict";var r=n("3a21"),a=n.n(r);a.a},"7abb":function(t,e,n){"use strict";var r=n("9edd"),a=n.n(r);a.a},"80da":function(t,e,n){},"85ec":function(t,e,n){},"867c":function(t,e,n){"use strict";var r=n("80da"),a=n.n(r);a.a},"90fb":function(t,e,n){},"9edd":function(t,e,n){},a01a:function(t,e,n){"use strict";var r=n("a058"),a=n.n(r);a.a},a058:function(t,e,n){},a9bf:function(t,e,n){},c699:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.9bcd5a19.png"},d237:function(t,e,n){"use strict";var r=n("a9bf"),a=n.n(r);a.a},d626:function(t,e,n){"use strict";var r=n("90fb"),a=n.n(r);a.a},ed0f:function(t,e,n){},f8e8:function(t,e,n){}});
//# sourceMappingURL=app.c5427bab.js.map