(this["webpackJsonp04-gif-expert-app"]=this["webpackJsonp04-gif-expert-app"]||[]).push([[0],{16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),i=(n(15),n(16),n(2)),s=n(9),u=n(0),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1];return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t((function(e){return[r].concat(Object(s.a)(e))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:r,onChange:function(e){o(e.target.value)},placeholder:"Buscar"})})},j=n(10),l=n(6),d=n.n(l),b=n(8),p=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,a,c,r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=UoiE6VuyK899loEp29UMugeMm77UT1bS"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.title,n=e.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__bounce",children:[Object(u.jsx)("img",{src:n,alt:t}),Object(u.jsx)("p",{children:t})]})},m=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){p(e).then((function(e){r({data:e,loading:!1})}))}),[e]),c}(t),c=n.data,r=n.loading;return console.log(r),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),r&&Object(u.jsx)("p",{className:"animate__animated animate__flash",children:"Cargando..."}),Object(u.jsx)("div",{className:"card-grid",children:Object(u.jsx)("ol",{children:c.map((function(e){return Object(u.jsx)(f,Object(j.a)({},e),e.id)}))})})]})},h=function(){var e=Object(a.useState)(["One Punch"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategories:c}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(e){return Object(u.jsx)(m,{category:e},e)}))})]})};r.a.render(Object(u.jsx)(h,{}),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.54b38e1a.chunk.js.map