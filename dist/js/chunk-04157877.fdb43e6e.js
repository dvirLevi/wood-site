(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04157877"],{"4de4":function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").filter,s=r("1dde"),i=r("ae40"),c=s("filter"),o=i("filter");n({target:"Array",proto:!0,forced:!c||!o},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),a=r("5899"),s="["+a+"]",i=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),o=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(i,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:o(1),end:o(2),trim:o(3)}},7156:function(t,e,r){var n=r("861d"),a=r("d2bb");t.exports=function(t,e,r){var s,i;return a&&"function"==typeof(s=e.constructor)&&s!==r&&n(i=s.prototype)&&i!==r.prototype&&a(t,i),t}},"7d34":function(t,e,r){},"9dbf":function(t,e,r){"use strict";var n=r("7d34"),a=r.n(n);a.a},a9e3:function(t,e,r){"use strict";var n=r("83ab"),a=r("da84"),s=r("94ca"),i=r("6eeb"),c=r("5135"),o=r("c6b6"),u=r("7156"),f=r("c04e"),p=r("d039"),d=r("7c73"),l=r("241c").f,m=r("06cf").f,b=r("9bf2").f,h=r("58a8").trim,v="Number",g=a[v],_=g.prototype,I=o(d(_))==v,N=function(t){var e,r,n,a,s,i,c,o,u=f(t,!1);if("string"==typeof u&&u.length>2)if(u=h(u),e=u.charCodeAt(0),43===e||45===e){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+u}for(s=u.slice(2),i=s.length,c=0;c<i;c++)if(o=s.charCodeAt(c),o<48||o>a)return NaN;return parseInt(s,n)}return+u};if(s(v,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var w,C=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof C&&(I?p((function(){_.valueOf.call(r)})):o(r)!=v)?u(new g(N(e)),r,C):N(e)},E=n?l(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;E.length>x;x++)c(g,w=E[x])&&!c(C,w)&&b(C,w,m(g,w));C.prototype=_,_.constructor=C,i(a,v,C)}},ada7:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("router-link",{staticClass:"box-product p-2 center",style:{minWidth:"calc(100% / "+t.numInLine+" + 0px)"},attrs:{to:"/productPage/"+t.item.id}},[r("div",{staticClass:"w-100 img-cover img-product",style:{backgroundImage:"url("+t.item.img[0]+")"}}),r("h5",{staticClass:"w-100 text-center pt-3 pb-3 m-0"},[t._v(t._s(t.item.name))]),r("div",{staticClass:"border w-25"}),r("h6",{staticClass:"w-100 text-center pt-3 pb-3 m-0"},[t._v("₪"+t._s(t.item.type[0].price))])])},a=[],s=(r("a9e3"),{name:"boxProduct",components:{},props:{item:Object,numInLine:{default:function(){return this.$store.getters.mobOrDesk?2:3},type:Number}},data:function(){return{}},computed:{mobOrDesk:function(){return this.$store.getters.mobOrDesk}}}),i=s,c=(r("9dbf"),r("2877")),o=Object(c["a"])(i,n,a,!1,null,"5aeb7be6",null);e["a"]=o.exports},d93e:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mt-5"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[2!=t.$route.params.id?r("h5",{staticClass:"text-center font-weight-light"},[t._v("שְׁמַרְיָהוּ הוא מפעל קטן ואיכותי לאדניות עץ כפריות. המוצרים שלנו עשויים מחומרי הגלם האיכותיים והחזקים ביותר. "),r("br"),t._v(" דברו איתנו - "),t._m(0)]):t._e()])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col center-right"},t._l(t.products,(function(t){return r("boxProduct",{key:t.id,attrs:{item:t}})})),1)])])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{attrs:{href:"https://api.whatsapp.com/send?phone=972537234223"}},[r("i",{staticClass:"lab la-whatsapp ml-2"})])}],s=(r("4de4"),r("b0c0"),r("ada7")),i={name:"store",components:{boxProduct:s["a"]},data:function(){return{}},mounted:function(){fbq("track","ViewContent",{content_name:this.$route.name})},computed:{products:function(){return"1"===this.$route.params.id?this.$store.state.products.filter((function(t){return"1"===t.category})):"2"===this.$route.params.id?this.$store.state.products.filter((function(t){return"2"===t.category})):this.$store.state.products}}},c=i,o=r("2877"),u=Object(o["a"])(c,n,a,!1,null,"7bfdc27e",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-04157877.fdb43e6e.js.map