(function(t){function e(e){for(var r,i,l=e[0],o=e[1],c=e[2],m=0,v=[];m<l.length;m++)i=l[m],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&v.push(s[i][0]),s[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(e);while(v.length)v.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,l=1;l<a.length;l++){var o=a[l];0!==s[o]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},s={app:0},n=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("85ec"),s=a.n(r);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",[t._m(0),a("div",{staticClass:"cover"},[a("div",{staticClass:"nav"},[a("div",[a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),a("div",[a("router-link",{attrs:{to:"/about"}},[t._v("Rólam")])],1),a("div",[a("router-link",{attrs:{to:"/prices"}},[t._v("Árak")])],1),a("div",[a("router-link",{attrs:{to:"/contact"}},[t._v("Partnerek")])],1),a("div",[a("router-link",{attrs:{to:"/contact"}},[t._v("Kapcsolat")])],1)])]),a("div",{staticClass:"menu-bar menu-bar-animated",on:{click:t.toggleAnim}},[a("div",{staticClass:"menu_bar__bar",class:{menu_bar__close:t.isActive}})]),a("nav",{directives:[{name:"show",rawName:"v-show",value:t.clicked,expression:"clicked"}],staticClass:"navigation_mobile"},[a("ul",{staticClass:"nav__mobile__ul"},[a("div",[a("router-link",{attrs:{to:"/"}},[a("i",{staticClass:"fas fa-home"}),t._v(" Home")])],1),a("div",[a("router-link",{attrs:{to:"/about"}},[a("i",{staticClass:"far fa-user"}),t._v(" Rólam")])],1),a("div",[a("router-link",{attrs:{to:"/prices"}},[a("i",{staticClass:"fas fa-wallet"}),t._v(" Árak")])],1),a("div",[a("router-link",{attrs:{to:"/partnerek"}},[a("i",{staticClass:"fas fa-users"}),t._v(" Partnerek")])],1),a("div",[a("router-link",{attrs:{to:"/contact"}},[a("i",{staticClass:"far fa-address-card"}),t._v(" Kapcsolat")])],1)])])]),a("div",{staticClass:"content"},[a("transition",{attrs:{name:"fade"}},[a("keep-alive",[a("router-view")],1)],1)],1),t._m(1)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"idopont"},[a("p",[t._v(" Időpontfoglalás ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"social"},[a("a",{attrs:{href:"#",target:"_blank"}},[a("img",{attrs:{src:"images/png/facebook.png"}})])]),a("div",{staticClass:"copy"},[t._v(" Alisca Barber | 2020 ")]),a("div",{staticClass:"social"},[a("a",{attrs:{href:"#",target:"_blank"}},[a("img",{attrs:{src:"images/png/instagram.png"}})])])])}],i={data:function(){return{clicked:!1,isActive:!1}},mounted:function(){this.clickClose},methods:{clickClose:function(){this.clicked=!1},toggleAnim:function(){this.clicked=!this.clicked,this.isActive=!this.isActive}}},l=i,o=(a("034f"),a("2877")),c=Object(o["a"])(l,s,n,!1,null,null,null),u=c.exports,m=a("8c4f"),v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"text-centered"},[t._v("Home")]),a("p",{staticClass:"coolfloat home"},[a("i",{staticClass:"fas fa-quote-left"}),t._v(" A siker az, amikor elégedetten állsz fel a fodrász székből! "),a("i",{staticClass:"fas fa-quote-right"})])])}],d={},p=Object(o["a"])(d,v,f,!1,null,null,null),k=p.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("h2",{staticClass:"text-centered"},[t._v("Rólam")]),a("div",{staticClass:"coolfloat"},[a("p",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{delay:250,origin:"left",duration:1e3,distance:"50px"},expression:"{ delay: 250, origin: 'left', duration: 1000, distance: '50px', }",modifiers:{reset:!0}}]},[t._v(" A nevem Sterczer Tamás. Szekszárdon születtem és nőttem fel, ezer szállal kötődöm a szülővárosomhoz. A gimnazista éveimet Pécsett töltöttem, majd az érettségi után a pécsi jogi karon folytattam tanulmányaimat. Azonban úgy éreztem, ez nem feltétlenül az én utam. "),a("br"),t._v(" A kreativitásomat, az alkotás örömét a borbély szakmában találtam meg. "),t._v(" Az egyetemi éveim alatt éltem Pécsen, illetve Budapesten, ezekben a városokban találkoztam először a barber shopok világával. ")]),a("p",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{delay:1e3,origin:"right",duration:1e3,distance:"50px"},expression:"{ delay: 1000, origin: 'right', duration: 1000, distance: '50px',  }",modifiers:{reset:!0}}]},[t._v(" Több pécsi barber shopban megfordultam gyakornokként, ez idő alatt hamar elhatároztam, hogy mindenképpen egy saját üzletet szeretnék nyitni - mégpedig a szülővárosomban, Szekszárdon. 2019-ben a főváros felé vettem az irányt, beiratkoztam a Barber Shop Budapest Akadémiájára, ahol az ország kiemelkedő mestereitől sajátíthattam el a szakmát. 2020-ban, a szakvizsgám után nyitottam meg saját üzletemet, az Alisca Barber Salon-t. "),a("br"),t._v(" Számomra rendkívül fontos a folyamatos szakmai fejlődés, illetve fejlesztés. Missziómnak érzem, hogy a magas szintű borbély kultúrát népszerűsítsem Szekszárdon, illetve a régióban, ezáltal értéket teremtsek, és adjak valamit a szülővárosomnak. A szalonban szívesen látok - korosztálytól függetlenül - minden olyan férfi vendéget, akinek fontos az igényes megjelenés. Hiszen az igazi férfiak borbélyhoz járnak.")])])])},_=[],h={},g=Object(o["a"])(h,b,_,!1,null,null,null),z=g.exports,y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"priceList"},[a("img",{attrs:{src:"/images/arlista.jpg",alt:"Árlista"}})])}],j={},w=Object(o["a"])(j,y,C,!1,null,null,null),x=w.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"text-centered"},[t._v("Kapcsolat")]),a("div",{staticClass:"contactinfo"},[a("p",[a("i",{staticClass:"fas fa-map-marker-alt"}),t._v(" Szekszárd, Kossuth Lajos u. 2")]),a("p",[a("i",{staticClass:"fas fa-mobile-alt"}),t._v(" +3620/463-1013")]),a("p",[a("i",{staticClass:"fas fa-envelope-open-text"}),t._v(" aliscabarbershop@gmail.com")]),a("p",[a("i",{staticClass:"fas fa-map-marked-alt"}),t._v(" "),a("a",{attrs:{href:"https://www.google.com/maps/dir/46.2328898,20.1552201/46.3517117,18.7010586/@46.3447508,18.7110806,15z/data=!4m4!4m3!1m1!4e1!1m0",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mutasd a térképen!")])]),a("p",[a("i",{staticClass:"far fa-clock"}),t._v(" Nyitvatartás")]),a("p",[t._v("Hétfő - Péntek : 09:00 - 18:00")]),a("p",[t._v("Szombat - Vasárnap : Zárva")]),a("p",[a("i",{staticClass:"far fa-calendar-check"}),t._v(" "),a("a",{attrs:{href:"http://bwnet.hu/partner/AliscaBarberSalon",target:"_blank"}},[t._v("Időpontfoglalás")])])])])}],S={},P=Object(o["a"])(S,A,O,!1,null,null,null),$=P.exports;r["a"].use(m["a"]);var E=new m["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:k},{path:"/about",name:"about",component:z},{path:"/prices",name:"prices",component:x},{path:"/contact",name:"contact",component:$},{path:"*",redirect:"/404"}]}),B=a("4c95"),M=a.n(B);r["a"].config.productionTip=!1,new r["a"]({router:E,render:function(t){return t(u)}}).$mount("#app"),r["a"].use(M.a,{class:"v-scroll-reveal",duration:800,scale:1,distance:"10px",mobile:!1})},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.d2c09605.js.map