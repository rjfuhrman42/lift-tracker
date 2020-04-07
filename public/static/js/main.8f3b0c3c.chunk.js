(this["webpackJsonplift-tracker"]=this["webpackJsonplift-tracker"]||[]).push([[0],{50:function(e,t,a){e.exports=a(90)},56:function(e,t,a){},57:function(e,t,a){},77:function(e,t,a){e.exports=a.p+"static/media/black_mag.57ddca17.png"},78:function(e,t,a){e.exports=a.p+"static/media/deadlifting.99b26a50.png"},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),i=(a(55),a(56),a(57),a(8)),s=a(19),o=a(14),u=r.a.createContext(),m=a(22),d=a(13),E=a.n(d),f=a(29),h=a(30),b=(a(39),function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),l=a[0],c=a[1],s=E.a.database().ref("/users/".concat(e.uid,"/logs"));new Intl.DateTimeFormat("en-US",{weekday:"long"}).format(e.today);return Object(n.useEffect)((function(){return s.on("value",(function(t){t.forEach((function(t){var a=new Date(t.key);a.getUTCDate()===e.today.getUTCDate()&&a.getUTCMonth()===e.today.getUTCMonth()&&a.getUTCFullYear()===e.today.getUTCFullYear()&&t.forEach((function(e){var a=e.val(),n={};n=a.restDay?{id:e.key,title:"<h1>Rest Day</h1>",start:t.key,color:"#D4F6FF"}:{id:e.key,title:"<b>".concat(a.exercise,'</b>\n                                    <ul class="entry">\n                                        <li>Sets: ').concat(a.sets,"</li>\n                                        <li>Reps: ").concat(a.reps,"</li>\n                                        <li>Weight: ").concat(a.weight," ").concat(a.measurement,"</li>\n                                    <ul>"),start:t.key,reps:a.reps,color:"#D4F6FF"},c((function(e){return[].concat(Object(m.a)(e),[n])}))}))}))})),function(){return s.off()}}),[]),r.a.createElement("div",{className:"today"},r.a.createElement(o.b,{to:"/exercises"},r.a.createElement("button",{className:"add-exercise"},"Add Exercise +")),r.a.createElement(f.a,{defaultView:"dayGrid",dayCount:1,header:{left:"",center:"title",right:""},titleFormat:{weekday:"long"},columnHeader:!1,events:l,eventRender:function(e){e.el.querySelector(".fc-title").innerHTML=e.event.title},plugins:[h.a]}))});var p=function(){return r.a.createElement("div",{id:"about",className:"about-section"},r.a.createElement("div",{className:"about-description-container"},r.a.createElement("h1",null,"FEATURES"),r.a.createElement("div",{className:"description-content"},r.a.createElement("h2",null,"EXERCISE SEARCH"),r.a.createElement("p",null,"Search for the right exercise using the WGER exercise database.")),r.a.createElement("div",{className:"description-content"},r.a.createElement("h2",null,"TRACK ENTRIES"),r.a.createElement("p",null,"Log the exercise and track your sets, reps, weight, and date.")),r.a.createElement("div",{className:"description-content"},r.a.createElement("h2",null,"WEEKLY CALENDAR AND DAILY VIEW"),r.a.createElement("p",null,"View your entries for today, or view your weekly progress in the weekly view."))),r.a.createElement("div",{className:"about-gif-container"},r.a.createElement("img",{id:"about-gif",src:"https://i.imgur.com/NPvetPD.gif"})))};var v=function(){return r.a.createElement("footer",{id:"footer"},r.a.createElement("div",{className:"in-touch"},r.a.createElement("a",{href:"https://rjfuhrman42.github.io/Portfolio-Website/",target:"_blank"},"Get in touch")),r.a.createElement("div",null,r.a.createElement("ul",{className:"socials"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/rjfuhrman42",target:"_blank"},r.a.createElement("i",{className:"ri-github-fill ri-xl"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/reid-fuhrman-73324b180/",target:"_blank"},r.a.createElement("i",{className:"ri-linkedin-box-fill ri-xl"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:reidjf77@gmail.com",target:"_blank"},r.a.createElement("i",{className:"ri-mail-fill ri-xl"}))))),r.a.createElement("div",{className:"api"},r.a.createElement("a",{href:"https://wger.de/en/software/api",target:"_blank"},"wger API")))},g=function(e){return r.a.createElement("header",null,r.a.createElement("div",{className:"my-container"},r.a.createElement(o.b,{to:"/"},r.a.createElement("h1",{className:"main-heading"},"Lift Tracker")),r.a.createElement("nav",null,r.a.createElement("ul",{className:"nav-options"},e.children))))},y=a(17),k=a(21),N=a(44),j=a(26),w=a(49);var O=function(e){var t=Object(n.useState)("lbs"),a=Object(i.a)(t,2),l=a[0],c=a[1];function s(){e.onHide();var t={measurement:l},a=document.querySelector("input[name=date]").value;if("true"===e.rest)t={restDay:!0};else{var n=document.querySelectorAll(".entry");t.exercise=e.modalcontent.data.name,n.forEach((function(e){return t[e.name]=e.value}))}E.a.database().ref("/users/".concat(e.uid,"/logs/").concat(a)).push().set(t)}return"true"!==e.rest||e.modalcontent?r.a.createElement(y.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(y.a.Header,{closeButton:!0},r.a.createElement(y.a.Title,{id:"contained-modal-title-vcenter"},e.modalcontent.data.name)),r.a.createElement(y.a.Body,null,r.a.createElement("form",null,r.a.createElement("h4",null,"How much weight?"),r.a.createElement("input",{type:"number",name:"weight",className:"entry"}),r.a.createElement(N.a,null,r.a.createElement(w.a,{type:"radio",name:"options",defaultValue:l,onChange:function(e){c(e)}},r.a.createElement(j.a,{value:"lbs"},"lbs"),r.a.createElement(j.a,{value:"kgs"},"kgs"))),r.a.createElement("h4",null,"How many sets?"),r.a.createElement("input",{type:"number",name:"sets",className:"entry"}),r.a.createElement("h4",null,"How many reps?"),r.a.createElement("input",{type:"number",name:"reps",className:"entry"}),r.a.createElement("h4",null,"When?"),r.a.createElement("input",{type:"date",name:"date"}))),r.a.createElement(y.a.Footer,null,r.a.createElement(k.a,{onClick:s},"Save"))):r.a.createElement(y.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(y.a.Header,{closeButton:!0},r.a.createElement(y.a.Title,{id:"contained-modal-title-vcenter"},"Rest Day")),r.a.createElement(y.a.Body,null,r.a.createElement("form",null,r.a.createElement("h4",null,"When?"),r.a.createElement("input",{type:"date",name:"date"}))),r.a.createElement(y.a.Footer,null,r.a.createElement(k.a,{onClick:s},"Save")))};var S=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),l=a[0],c=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{variant:"primary",onClick:function(){return c(!0)}},"true"===e.rest?"Add Rest Day":"+"),r.a.createElement(u.Consumer,null,(function(t){return r.a.createElement(O,{show:l,uid:t,modalcontent:e.modalcontent,rest:e.rest,onHide:function(){return c(!1)}})})))};var x=function(e){return r.a.createElement("div",{className:"title-bar"},r.a.createElement(S,{rest:"true"}),r.a.createElement("h2",null,e.children))};var C=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),l=a[0],c=a[1],s=E.a.database().ref("/users/".concat(e.uid,"/logs"));return Object(n.useEffect)((function(){return s.on("value",(function(e){e.forEach((function(e){e.forEach((function(t){var a=t.val(),n={};n=a.restDay?{id:t.key,title:"<h1>Rest Day</h1>",start:e.key,color:"#D4F6FF"}:{id:t.key,title:"\n                                        <b>".concat(a.exercise,'</b>\n                                        <ul class="entry">\n                                            <li>Sets: ').concat(a.sets,"</li>\n                                            <li>Reps: ").concat(a.reps,"</li>\n                                            <li>Weight: ").concat(a.weight," ").concat(a.measurement,"</li>\n                                        <ul>\n                                        "),start:e.key,reps:a.reps,color:"#D4F6FF"},c((function(e){return[].concat(Object(m.a)(e),[n])}))}))}))})),function(){return s.off()}}),[]),r.a.createElement("div",{className:"my-week"},r.a.createElement(o.b,{to:"/exercises"},r.a.createElement("button",{className:"add-exercise"},"Add Exercise +")),r.a.createElement(f.a,{defaultView:"dayGridWeek",header:{left:"",center:"",right:"today prev,next"},titleFormat:{day:"numeric"},events:l,eventRender:function(e){e.el.querySelector(".fc-title").innerHTML=e.event.title},plugins:[h.a]}))},D=a(36),F=a.n(D),A=a(45);a(77);var R=function(e){var t=e.handlePress,a=e.handleClick;return r.a.createElement("div",{className:"search_bar"},r.a.createElement("input",{type:"text",className:"search",onKeyPress:t,placeholder:"type an exercise name to get results..."}),r.a.createElement("button",{onClick:a,className:"search-button"}))},T=a(46);var I=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),s=Object(i.a)(c,2),o=s[0],u=s[1];function m(e){return d.apply(this,arguments)}function d(){return(d=Object(A.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),u(!0),fetch(t).then((function(e){return e.json()})).then((function(e){console.log(e.suggestions),u(!1),0===e.suggestions.length?l(r.a.createElement("li",null,"No results found!")):l(e.suggestions.map((function(e){return r.a.createElement("li",{key:e.data.id},r.a.createElement("div",{className:"ex-name"},e.data.name),r.a.createElement(S,{modalcontent:e},"add"))})))}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(R,{handlePress:function(e){"Enter"===e.key&&e.target.value&&m("https://wger.de//api/v2/exercise/search/?term=".concat(e.target.value))},handleClick:function(e){e.target.previousSibling.value&&m("https://wger.de//api/v2/exercise/search/?term=".concat(e.target.previousSibling.value))}})),r.a.createElement("ul",{className:"results-list"},o?r.a.createElement("li",null,r.a.createElement(T.a,{animation:"border"})):a))};var H=function(e){var t=e.items,a=e.deleteEntry,l=e.reference,c=Object(n.useState)([]),s=Object(i.a)(c,2),o=s[0],u=s[1],d=Object(n.useState)([]),E=Object(i.a)(d,2),f=(E[0],E[1]),h=Object(n.useState)(!1),b=Object(i.a)(h,2),p=b[0],v=b[1],g=Object(n.useState)(l),y=Object(i.a)(g,2);function k(e,t){a(e,t),u((function(t){return t.filter((function(t){return t.key!==e}))}))}return y[0],y[1],Object(n.useEffect)((function(){var e=[];t.forEach((function(a){var n=a.val();console.log(a.val()),a.val().restDay?e.push(r.a.createElement("li",{key:a.ref.key},r.a.createElement("h1",null,"Rest day"),r.a.createElement("button",{className:"del-btn",onClick:function(){return k(a.ref.key,t.key)}},"Delete Entry?"))):e.push(r.a.createElement("li",{key:a.ref.key},r.a.createElement("b",null,n.exercise),r.a.createElement("ul",{class:"entry"},r.a.createElement("li",null,"Sets: ",n.sets),r.a.createElement("li",null,"Reps: ",n.reps),"                                                     ",r.a.createElement("li",null,"Weight: ",n.weight," ",n.measurement)),r.a.createElement("button",{className:"del-btn",onClick:function(){return k(a.ref.key,t.key)}},"Delete Entry?"))),f((function(e){return[].concat(Object(m.a)(e),[n])}))})),u([].concat(e))}),[]),r.a.createElement("li",{className:"entry-item ".concat(p?"show":""),key:t.key},r.a.createElement("h3",{onClick:function(){return v((function(e){return!e}))}},t.key),r.a.createElement("ul",{className:"entry-list"},o))};var P=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)(E.a.database().ref("/users/".concat(e.uid,"/logs"))),o=Object(i.a)(s,2),u=o[0];function m(t,a){E.a.database().ref("/users/".concat(e.uid,"/logs/").concat(a)).child(t).remove()}return o[1],Object(n.useEffect)((function(){u.on("value",(function(e){var t=[];e.forEach((function(e){t.push(r.a.createElement("li",{key:e.key},r.a.createElement(H,{items:e,deleteEntry:m})))})),c([].concat(t))}))}),[]),r.a.createElement("div",{className:"edit-page"},r.a.createElement("ul",null,l,console.log(l)))},U=(a(78),function(e){return r.a.createElement("div",{className:"intro-content-container"},r.a.createElement("div",{className:"intro-text"},r.a.createElement("div",{className:"intro-heading"},"Track Your Progress"),r.a.createElement("div",{className:"intro-leadin"},"Get Better Results")),e.children)}),W=a(47),L=a.n(W);a(87).config();var Y=E.a.initializeApp({apiKey:"AIzaSyDgwykDq5DqanC0aThYtuQ8TkXme-kYAfU",authDomain:"lift-tracker-99bdc.firebaseapp.com",databaseURL:"https://lift-tracker-99bdc.firebaseio.com",projectId:"lift-tracker-99bdc",storageBucket:"lift-tracker-99bdc.appspot.com",messagingSenderId:"639803823470",appId:'"1:639803823470:web:f1a06700a1e5e7f732dd7f",',measurementId:"G-5HJFKEQKTC"});var _=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(),m=Object(i.a)(c,2),d=m[0],f=m[1],h=new Date(Date.now()),y=new Intl.DateTimeFormat("en-US",{month:"long"}).format(h),k=Object(s.f)(),N={signInFlow:"popup",signInOptions:[E.a.auth.GoogleAuthProvider.PROVIDER_ID]};return Object(n.useEffect)((function(){Y.auth().onAuthStateChanged((function(e){e?(l(!0),f(e.uid)):l(!1)}))}),[]),a&&d?r.a.createElement(u.Provider,{value:d},r.a.createElement("div",{className:"App"},r.a.createElement(g,null,r.a.createElement("li",null,r.a.createElement(o.c,{to:"/",exact:!0,activeClassName:"selected"}," Today ")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/myweek",activeClassName:"selected"}," My Week ")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/exercises",activeClassName:"selected"}," Exercises ")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/edit",activeClassName:"selected"}," Edit ")),r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){return Y.auth().signOut()},className:"sign-out-btn"},"Sign out"))),r.a.createElement(x,null,"/exercises"===k.pathname?"Exercise Search":"".concat(y," ").concat(h.getFullYear())),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(b,{uid:d,today:h})),r.a.createElement(s.a,{path:"/myweek"},r.a.createElement(C,{uid:d})),r.a.createElement(s.a,{path:"/exercises"},r.a.createElement(I,null)),r.a.createElement(s.a,{path:"/edit"},r.a.createElement(P,{uid:d}))),r.a.createElement(v,null))):r.a.createElement("div",{className:"App"},r.a.createElement(g,null,r.a.createElement("li",null,r.a.createElement("a",{href:"#about"},"About"))),r.a.createElement(U,null,r.a.createElement(L.a,{uiConfig:N,firebaseAuth:Y.auth()})),r.a.createElement(p,null),r.a.createElement(v,null))};c.a.render(r.a.createElement(o.a,null,r.a.createElement(_,null)),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.8f3b0c3c.chunk.js.map