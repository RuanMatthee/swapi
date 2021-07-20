(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{134:function(e,t,n){},135:function(e,t,n){"use strict";n.r(t);var c,s=n(0),i=n.n(s),a=n(30),r=n.n(a),o=n(110),l=n(81),j=n(80),d=n(13),u=n(91),h=n.n(u),b=n(105),O=n(66),g=n(67),x=n(5),f=n(158),m=n(162),p=n(106),v=n(160),y=Object(v.a)(c||(c=Object(p.a)(["\n  query GetPeople($pageNumber: String) {\n    people(page: $pageNumber) {\n      count\n      results {\n        name\n        height\n        mass\n        gender\n        homeworld {\n          name\n        }\n      }\n    }\n  }\n"]))),P=new(function(){function e(){Object(O.a)(this,e),this.apolloClient=new f.a({uri:"https://tfymi.sse.codesandbox.io/",cache:new m.a}),this.paginationSize=10,this.people=[],this.loading=!0,this.pages=0,this.showPersonModal=!1,Object(x.n)(this,{getPeople:x.f})}return Object(g.a)(e,[{key:"getPeople",value:function(){var e=Object(b.a)(h.a.mark((function e(t){var n,c=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loading=!0,n=t?{query:y,variables:{pageNumber:t}}:{query:y},console.log("queryOptions",n),this.apolloClient.query(n).then((function(e){console.log("data",e),Object(x.q)((function(){c.people=e.data.people.results,c.pages=Math.ceil(e.data.people.count/c.paginationSize)}))})).finally((function(){Object(x.q)((function(){c.loading=!1}))}));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}()),w=Object(s.createContext)(P),N=n(164),k=n(161),C=n(156),S=n(4),A=["\u201cTry not. Do or do not. There is no try.\u201d","\u201cYour eyes can deceive you; don\u2019t trust them.\u201d","\u201cNo longer certain that one ever does win a war, I am.\u201d","\u201cThe ability to speak does not make you intelligent.\u201d","\u201cSorry lady. I don\u2019t understand frog.\u201d"],q=function(){return Object(S.jsx)("div",{className:"w-full h-screen grid justify-items-center grid-cols-1",children:Object(S.jsx)(N.a,{className:"h-1/2 w-1/3",children:Object(S.jsx)(k.a,{active:!0,children:Object(S.jsx)(C.a,{children:A[Math.floor(4*Math.random())]})})})})},F=n(159),I=new(function(){function e(){Object(O.a)(this,e),this.activePerson=void 0,Object(x.n)(this,{setActivePerson:x.f,getActivePerson:x.g,detailsLink:x.g})}return Object(g.a)(e,[{key:"setActivePerson",value:function(e){this.activePerson=e}},{key:"detailsLink",get:function(){return"/details"}},{key:"getActivePerson",get:function(){return this.activePerson}}]),e}()),L=Object(s.createContext)(I),M=function(){var e,t,n=Object(s.useContext)(L);return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("h3",{className:"text-7xl",children:null===(e=n.getActivePerson)||void 0===e?void 0:e.name}),Object(S.jsx)("div",{className:"text-3xl",children:null===(t=n.getActivePerson)||void 0===t?void 0:t.homeworld.name})]})},T=n(157),z=function(e){var t=e.person,n=Object(s.useContext)(L);return Object(S.jsx)(j.b,{className:"justify-self-center w-10/12 text-center mb-20 mt-10 shadow-cust-blue p-10 rounded",onClick:function(){return n.setActivePerson(t)},to:n.detailsLink,children:Object(S.jsxs)("div",{className:"text-center",children:[Object(S.jsx)("div",{children:Object(S.jsx)("i",{style:{fontSize:"1.85em"},className:"address card outline icon"})}),Object(S.jsx)("div",{className:"text-2xl font-mono mt-4",children:t.name}),Object(S.jsx)(T.a,{}),Object(S.jsx)("div",{className:"tracking-cust-wider",children:t.homeworld.name})]})})},E=Object(l.a)((function(){var e=Object(s.useContext)(w);return Object(S.jsx)("div",{className:"grid justify-items-center w-full",children:Object(S.jsx)("div",{className:"grid justify-items-center grid-cols-2 gap-4 clear-both mb-16 w-1/2",children:e.people.map((function(e,t){return Object(S.jsx)(z,{person:e})}))})})})),B=function(){return Object(S.jsx)("div",{className:"w-full text-center py-14 mb-8",children:Object(S.jsxs)("h1",{className:"text-8xl text-black",children:[Object(S.jsx)("span",{className:"italic font-bold",children:"SWAPI"}),"-PLE"]})})},D=Object(l.a)((function(){var e=Object(s.useContext)(w),t=Object(s.useState)("1"),n=Object(o.a)(t,2),c=n[0],i=n[1];return Object(s.useEffect)((function(){e.getPeople()}),[e]),Object(S.jsxs)("div",{children:[Object(S.jsx)(B,{}),Object(S.jsx)("div",{className:"grid justify-items-center grid-cols-1",children:Object(S.jsx)(j.a,{children:Object(S.jsxs)(d.c,{children:[Object(S.jsx)(d.a,{path:"/details",children:Object(S.jsx)(M,{})}),Object(S.jsxs)(d.a,{path:"/",children:[!e.loading&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(E,{}),Object(S.jsx)(F.a,{activePage:c,onPageChange:function(t,n){var c=n.activePage;i("".concat(c)),e.getPeople("".concat(c))},totalPages:e.pages,ellipsisItem:null})]}),e.loading&&Object(S.jsx)(q,{})]})]})})})]})})),J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,166)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};n(133),n(134);r.a.render(Object(S.jsx)(i.a.StrictMode,{children:Object(S.jsx)(w.Provider,{value:P,children:Object(S.jsx)(D,{})})}),document.getElementById("root")),J()}},[[135,1,2]]]);
//# sourceMappingURL=main.f4aad58d.chunk.js.map