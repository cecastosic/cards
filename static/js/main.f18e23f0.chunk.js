(this.webpackJsonpgrid=this.webpackJsonpgrid||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(5),a=n.n(c),r=n(6),s=n(1),i=n.n(s),l=n(7),j=n.n(l),o=(n(13),n(2)),u=(n(14),n(0)),h=function(e){var t=e.data;return Object(u.jsx)("div",{className:"card",role:"gridcell",children:Object(u.jsx)("div",{className:"image",children:Object(u.jsx)("img",{src:t.imagePath,alt:t.description})})},t.title)},d=function(e){var t=e.value,n=e.setSearchQuery;return Object(u.jsxs)("header",{children:[Object(u.jsx)("h1",{children:"Cards"}),Object(u.jsx)("div",{className:"search",children:Object(u.jsx)("input",{type:"text",name:"search",placeholder:"Search for a card",value:t,onChange:function(e){return n(e.target.value)},autoFocus:!0})})]})},b=function(){return Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24",className:"inline-block",children:[Object(u.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(u.jsx)("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",fill:"#fff"})]})},O=function(){return Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24",className:"inline-block",children:[Object(u.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(u.jsx)("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z",fill:"#fff"})]})},f=function(e){for(var t=e.totalItems,n=e.itemsPerPage,c=void 0===n?8:n,a=e.currentPage,r=void 0===a?1:a,i=e.onPageChange,l=Object(s.useState)(r),j=Object(o.a)(l,2),h=j[0],d=j[1],f=Math.ceil(t/c),x=[],g=1;g<=f;g++)x.push(g);return Object(u.jsxs)("nav",{className:"paginate-container",role:"navigation","aria-label":"Pagination Navigation",children:[Object(u.jsxs)("ul",{className:"pagination",children:[Object(u.jsx)("li",{children:1===h?Object(u.jsx)("span",{className:"disable",children:Object(u.jsx)(O,{})}):Object(u.jsx)("span",{onClick:function(){d(h-1),i(h-1)},role:"link",children:Object(u.jsx)(O,{})})}),x.map((function(e,t){return Object(u.jsx)("li",{className:h-1===t?"current-page":"",children:Object(u.jsx)("span",{onClick:function(){d(t+1),i(t+1)},role:"link",children:e})},t)})),Object(u.jsx)("li",{children:h===f?Object(u.jsx)("span",{className:"disable",children:Object(u.jsx)(b,{})}):Object(u.jsx)("span",{onClick:function(){d(h+1),i(h+1)},role:"link",children:Object(u.jsx)(b,{})})})]}),Object(u.jsxs)("p",{children:["Showing ",(h-1)*c+1,"-",c*h>t?t:c*h," ","of ",t]})]})},x=n(3),g="https://my-json-server.typicode.com/cecastosic/cards/",p=function(e,t){if(!e)throw new Error("Path is required");var n=t?g+e+"/"+t:g+e,c=Object(x.b)(n);return{data:c.data,error:c.error}};var v=function(e,t){var n=Object(s.useState)(e),c=Object(o.a)(n,2),a=c[0],r=c[1];return Object(s.useEffect)((function(){var n=setTimeout((function(){return r(e)}),t||500);return function(){clearTimeout(n)}}),[e,t]),a};var m=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],a=v(n,500),r=Object(s.useState)(null),i=Object(o.a)(r,2),l=i[0],j=i[1],b=Object(s.useState)(0),O=Object(o.a)(b,2),x=O[0],g=O[1],m=Object(s.useState)(1),w=Object(o.a)(m,2),N=w[0],P=w[1],S=p("/cards").data,C=p("/cards?_page=".concat(N,"&_limit=8")).data;return Object(s.useEffect)((function(){if(""!==a){var e=S.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())}));j(e)}else j(null)}),[a,S]),Object(s.useEffect)((function(){S&&g(S.length)}),[S]),l?Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(d,{value:n,setSearchQuery:c}),Object(u.jsx)("div",{className:"container",role:"grid",children:l.length>0?l.map((function(e){return Object(u.jsx)(h,{data:e},e.imagePath)})):Object(u.jsx)("p",{children:"No card matches the search criteria"})})]}):Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(d,{value:n,setSearchQuery:c}),Object(u.jsx)("div",{className:"container",role:"main",children:C&&C.length>0?Object(u.jsxs)(u.Fragment,{children:[C.map((function(e){return Object(u.jsx)(h,{data:e},e.imagePath)})),Object(u.jsx)(f,{totalItems:x,onPageChange:function(e){return P(e)},currentPage:N})]}):Object(u.jsx)("p",{children:"No cards"})})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},N=function(){var e=Object(r.a)(a.a.mark((function e(t,n){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,n);case 2:return c=e.sent,e.abrupt("return",c.json());case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();j.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(x.a,{value:{fetcher:N},children:Object(u.jsx)(m,{})})}),document.getElementById("root")),w()}},[[16,1,2]]]);
//# sourceMappingURL=main.f18e23f0.chunk.js.map