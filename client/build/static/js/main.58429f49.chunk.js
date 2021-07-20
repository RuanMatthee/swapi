(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{134:function(e,t,n){},135:function(e,t,n){"use strict";n.r(t);var c,s=n(0),i=n.n(s),a=n(30),r=n.n(a),o=n(110),l=n(81),d=n(53),j=n(13),u=n(92),b=n.n(u),m=n(105),h=n(67),x=n(68),g=n(5),O=n(158),p=n(162),f=n(106),v=n(160),w=Object(v.a)(c||(c=Object(f.a)(["\n  query GetPeople($pageNumber: String) {\n    people(page: $pageNumber) {\n      count\n      results {\n        name\n        height\n        mass\n        gender\n        homeworld {\n          name\n        }\n      }\n    }\n  }\n"]))),N=new(function(){function e(){Object(h.a)(this,e),this.apolloClient=new O.a({uri:"https://epi4h.sse.codesandbox.io/",cache:new p.a}),this.paginationSize=10,this.people=[],this.loading=!0,this.pages=0,this.showPersonModal=!1,Object(g.n)(this,{getPeople:g.f})}return Object(x.a)(e,[{key:"getPeople",value:function(){var e=Object(m.a)(b.a.mark((function e(t){var n,c=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loading=!0,n=t?{query:w,variables:{pageNumber:t}}:{query:w},this.apolloClient.query(n).then((function(e){Object(g.q)((function(){c.people=e.data.people.results,c.pages=Math.ceil(e.data.people.count/c.paginationSize)}))})).catch((function(e){console.error(e)})).finally((function(){Object(g.q)((function(){c.loading=!1}))}));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}()),P=Object(s.createContext)(N),y=n(164),k=n(161),C=n(156),A=n(2),S=["\u201cTry not. Do or do not. There is no try.\u201d","\u201cYour eyes can deceive you; don\u2019t trust them.\u201d","\u201cNo longer certain that one ever does win a war, I am.\u201d","\u201cThe ability to speak does not make you intelligent.\u201d","\u201cSorry lady. I don\u2019t understand frog.\u201d"],I=function(){return Object(A.jsx)("div",{className:"mt-20 w-full h-screen grid justify-items-center grid-cols-1",children:Object(A.jsx)(y.a,{className:"h-1/2 w-2/3 sm:w-1/3",children:Object(A.jsx)(k.a,{active:!0,children:Object(A.jsx)(C.a,{children:S[Math.floor(4*Math.random())]})})})})},q=n(159),F=n(157),L=new(function(){function e(){Object(h.a)(this,e),this.activePerson=void 0,Object(g.n)(this,{setActivePerson:g.f,getActivePerson:g.g,detailsLink:g.g})}return Object(x.a)(e,[{key:"setActivePerson",value:function(e){this.activePerson=e}},{key:"detailsLink",get:function(){return"/details"}},{key:"getActivePerson",get:function(){return this.activePerson}}]),e}()),M=Object(s.createContext)(L),T=function(){var e,t,n,c,i,a=Object(s.useContext)(M),r=null===(e=a.getActivePerson)||void 0===e?void 0:e.gender,o="male"===r?"man icon":"female"===r?"woman icon":"question icon";return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("div",{className:"h-screen w-full text-center",children:[Object(A.jsx)("h3",{className:"font-Prompt text-7xl sm:text-8xl mb-20 pt-20 px-4",children:null===(t=a.getActivePerson)||void 0===t?void 0:t.name}),Object(A.jsxs)("div",{className:"text-2xl sm:text-3xl mb-24 sm:mb-36 lg:mb-40 tracking-cust-wider",children:[Object(A.jsx)("i",{className:"globe icon block"}),Object(A.jsx)("span",{className:"block mt-4"}),null===(n=a.getActivePerson)||void 0===n?void 0:n.homeworld.name]}),Object(A.jsx)("div",{className:"grid grid-cols-1 grid-flow-col justify-items-center",children:Object(A.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 grid-flow-row md:grid-flow-col w-2/3 md:gap-20",children:[Object(A.jsxs)("div",{className:"mb-14",children:[Object(A.jsx)("span",{className:"font-Prompt tracking-cust-prompt-wider block uppercase",children:"Gender"}),Object(A.jsx)(F.a,{}),Object(A.jsx)("i",{className:"".concat(o," genderIcon")})]}),Object(A.jsxs)("div",{className:"mb-14",children:[Object(A.jsx)("span",{className:"font-Prompt tracking-cust-prompt-wider block uppercase",children:"Height"}),Object(A.jsx)(F.a,{}),null===(c=a.getActivePerson)||void 0===c?void 0:c.height]}),Object(A.jsxs)("div",{className:"mb-14",children:[Object(A.jsx)("span",{className:"font-Prompt tracking-cust-prompt-wider block uppercase",children:"Mass"}),Object(A.jsx)(F.a,{}),null===(i=a.getActivePerson)||void 0===i?void 0:i.mass]})]})}),Object(A.jsx)("div",{className:"mt-8 sm:mt-44",children:Object(A.jsx)(d.b,{className:"hover:text-red-800",to:"/",children:Object(A.jsx)("i",{className:"block arrow alternate circle left outline icon backIcon"})})})]})})},z=function(e){var t=e.person,n=Object(s.useContext)(M);return Object(A.jsx)(d.b,{className:"justify-self-center w-10/12 text-center mb-20 mt-10 shadow-cust-blue p-10 rounded hover:text-red-800",onClick:function(){return n.setActivePerson(t)},to:n.detailsLink,children:Object(A.jsxs)("div",{className:"text-center",children:[Object(A.jsx)("div",{className:"mb-6",children:Object(A.jsx)("i",{style:{fontSize:"1.85em"},className:"user outline icon"})}),Object(A.jsx)("div",{className:"text-2xl sm:text-lg font-mono mt-4",children:t.name}),Object(A.jsx)(F.a,{}),Object(A.jsx)("div",{className:"tracking-cust-wider",children:t.homeworld.name})]})})},E=Object(l.a)((function(){var e=Object(s.useContext)(P);return Object(A.jsx)("div",{className:"grid justify-items-center w-full",children:Object(A.jsx)("div",{className:"grid justify-items-center sm:grid-cols-2 grid-cols-1 gap-4 clear-both mb-16 w-full lg:w-2/3",children:e.people.map((function(e,t){return Object(A.jsx)(z,{person:e},"person-".concat(t))}))})})})),B=function(){return Object(A.jsx)("div",{className:"w-full text-center py-14 mb-8",children:Object(A.jsxs)("h1",{className:"lg:text-8xl text-6xl sm:text-8xl text-black",children:[Object(A.jsx)("span",{className:"italic font-bold",children:"SWAPI"}),"-PLE"]})})},D=Object(l.a)((function(){var e=Object(s.useContext)(P),t=Object(s.useState)("1"),n=Object(o.a)(t,2),c=n[0],i=n[1];return Object(s.useEffect)((function(){e.getPeople()}),[e]),Object(A.jsx)("div",{className:"h-full",children:Object(A.jsx)("div",{className:"grid justify-items-center grid-cols-1",children:Object(A.jsx)(d.a,{children:Object(A.jsxs)(j.c,{children:[Object(A.jsx)(j.a,{path:"/details",children:Object(A.jsx)(T,{})}),Object(A.jsxs)(j.a,{path:"/",children:[!e.loading&&Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(B,{}),Object(A.jsx)(E,{}),Object(A.jsx)(q.a,{activePage:c,onPageChange:function(t,n){var c=n.activePage;i("".concat(c)),e.getPeople("".concat(c))},totalPages:e.pages,ellipsisItem:null})]}),e.loading&&Object(A.jsx)(I,{})]})]})})})})})),G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,166)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};n(133),n(134);r.a.render(Object(A.jsx)(i.a.StrictMode,{children:Object(A.jsx)(P.Provider,{value:N,children:Object(A.jsx)(D,{})})}),document.getElementById("root")),G()}},[[135,1,2]]]);
//# sourceMappingURL=main.58429f49.chunk.js.map
