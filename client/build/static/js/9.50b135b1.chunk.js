(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[9],{109:function(e,t,a){"use strict";var c=a(7),s=a(3),i=a(8),n=a(23),r=a(111),l=a(20),o=a(25),j=(a(48),a(110),a(17)),d=a(2),b=function(){Object(i.g)();var e=Object(s.useState)(!1),t=Object(c.a)(e,2),a=t[0],b=t[1],h=Object(s.useContext)(l.a).userData,u=h.username,m=h.email,f=Object(s.useState)(""),x=Object(c.a)(f,2),O=x[0],p=x[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("footer",{children:[Object(d.jsx)(o.a,{}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsxs)("div",{className:"left box",children:[Object(d.jsxs)("div",{className:"upper",children:[Object(d.jsx)("div",{className:"topic",children:" Suryaghat Library"}),Object(d.jsx)("p",{children:"Suryaghat Library is a popular non profit organization established with the motive of providing the free online book, Audio and Videos service."})]}),Object(d.jsxs)("div",{className:"lower",children:[Object(d.jsx)("div",{className:"topic",children:"Contact us"}),Object(d.jsxs)("div",{className:"phone cncttxt",children:[Object(d.jsx)("i",{className:"fas fa-phone-volume"}),"+977-9840767766"]}),Object(d.jsxs)("div",{className:"email cncttxt",children:[Object(d.jsx)("i",{className:"fas fa-envelope"}),"haribabalibraryofficial45.np@gmail.com"]})]})]}),Object(d.jsxs)("div",{className:"middle box",children:[Object(d.jsx)("div",{className:"topic",children:"Quiks Links"}),[{list:"Home",url:"/"},{list:"About",url:"/about"},{list:"Contents",url:"/contents"},{list:"Store",url:"/store"},{list:"Gallery",url:"/store/gallery"}].map((function(e,t){var a=e.url,c=e.list;return Object(d.jsx)("div",{children:Object(d.jsx)(n.c,{to:a,children:c})})}))]}),Object(d.jsxs)("div",{className:"right box",children:[Object(d.jsx)("div",{className:"topic",children:"Contact Us"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u&&m?(b(!0),r.a.sendForm("service_q0aucvt","template_x4l4dfg",e.target,"user_94oKkPNNBsvla5Je7kex6").then((function(){setTimeout((function(){o.b.success("Meessage Sent Successfully!"),b(!1),p("")}),1e3)}),(function(){setTimeout((function(){o.b.error("Failed sending message"),b(!1)}),1e3)}))):(b(!0),setTimeout((function(){o.b.info("Please Login to Send message"),b(!1)}),1e3))},children:[Object(d.jsx)("textarea",{value:O,name:"message",required:!0,placeholder:"Leave a message...",onChange:function(e){return p(e.target.value)}}),Object(d.jsx)("input",{type:"hidden",value:u,name:"username"}),Object(d.jsx)("input",{type:"hidden",value:m,name:"useremail"}),Object(d.jsxs)("button",{disabled:a,type:"submit",style:{background:a?"grey":"",cursor:a?"not-allowed":"pointer"},children:[a&&Object(d.jsx)("img",{height:"20px",width:"20px",src:"".concat(j.a,"/hariBaba/api/uploads/Images/loading.jpg")}),"\xa0 \xa0",a?"Sending..":"Send"]})]}),Object(d.jsxs)("div",{className:"media-icons",children:[Object(d.jsx)("a",{href:"https://www.facebook.com/haribabalibrary/",target:"_blank",children:Object(d.jsx)("i",{className:"fab fa-facebook-f"})}),Object(d.jsx)("a",{href:"#",target:"_blank",children:Object(d.jsx)("i",{className:"fab fa-twitter"})}),Object(d.jsx)("a",{href:"#",target:"_blank",children:Object(d.jsx)("i",{className:"fab fa-linkedin-in"})})]})]})]}),Object(d.jsx)("div",{className:"bottom",children:Object(d.jsxs)("p",{className:"cpyrght",children:["Copyright \xa9 ",(new Date).getFullYear().toString()," All right reserved"]})})]})})};t.a=Object(s.memo)(b)},110:function(e,t,a){},112:function(e,t,a){"use strict";var c=a(7),s=a(3),i=(a(113),a(23)),n=a(22),r=a.n(n),l=a(20),o=a(115),j=a(34),d=(a(66),a(8)),b=a(2),h=function(){var e=Object(d.g)(),t=r.a.get("__tcphbl30__"),a=Object(s.useContext)(l.a).setnotifOpen,n=Object(s.useState)([]),o=Object(c.a)(n,2),h=o[0],u=o[1];Object(s.useEffect)((function(){j.a.collection("Notif").orderBy("timestamp","desc").onSnapshot((function(e){u(e.docs.map((function(e){return e.data()})))}))}),[]);var m=h.filter((function(e){return e.user_id===t}));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{onClick:function(){a(!1)},className:"wrapper_notif"}),Object(b.jsxs)("div",{className:"_notif_con",children:[Object(b.jsx)("p",{className:"notif_heading",children:"Notifications"}),Object(b.jsxs)(b.Fragment,{children:[m.map((function(t,c){var s=t.admin_name,n=t.pro_img,r=t.pro_id,l=t.cat_title,o=t.pro_title,j=t.notifDate;return Object(b.jsxs)(i.c,{onClick:function(t){return function(t,c){e.push("/details/".concat(t,"/").concat(c)),a(!1),window.location.reload()}(r,l)},to:"/details/".concat(r,"/").concat(l),className:"_single_notif",children:[Object(b.jsx)("div",{className:"_notif_left_",children:Object(b.jsx)("img",{src:"/upload/".concat(n),alt:"verify__"})}),Object(b.jsxs)("div",{className:"_notif_right_",children:[Object(b.jsx)("span",{children:s})," verified your uploaded"," ",Object(b.jsx)("span",{children:l}),'.."',void 0!==o?o.substring(0,20)+"...":o,'"',Object(b.jsx)("p",{children:Object(b.jsxs)("small",{children:[j,0===c&&Object(b.jsx)(b.Fragment,{children:" \xa0 (new) "})]})})]})]})})),0===h.length&&Object(b.jsx)("div",{className:"no_notif",children:Object(b.jsx)("img",{height:"40px",width:"40px",src:"/Images/loading.jpg"})})]})]})]})},u=function(){var e=r.a.get("__tcphblad__"),t=Object(s.useContext)(l.a),a=t.userData,n=t.handleNotif,j=t.notifOpen,d=a.username,u=a.user_profile,m=a.upload_items,f=Object(s.useState)(!1),x=Object(c.a)(f,2),O=x[0],p=x[1],g=function(){p(!O)},_=function(){p(!O)},v=Object(o.useGoogleLogout)({clientId:"288149900445-084opuu7mh4g9ofd7arnnf5vm4ornfkv.apps.googleusercontent.com",onLogoutSuccess:function(){p(!O),r.a.remove("__tcphbl30__"),window.location.reload()}}).signOut,N=r.a.get("__tcphbl30__");return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("nav",{children:[Object(b.jsxs)("div",{className:"logo",children:[Object(b.jsx)(i.c,{to:"/",className:"mainHeadingNav",children:Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{className:"logo_span",children:"Suryaghat"}),"library"]})}),Object(b.jsx)("li",{style:{cursor:"pointer"},className:"for_mobile",children:N?Object(b.jsxs)("div",{className:"logedin_data",children:[Object(b.jsx)("img",{onClick:g,style:{borderRadius:"50%"},height:"25px",width:"25px",src:u,alt:d}),"\xa0",Object(b.jsx)("small",{onClick:g,style:{fontSize:"15px"},children:void 0!==d?d.split(" ")[0]:d}),"\xa0",O?Object(b.jsx)("i",{style:{fontSize:"15px"},className:"fas fa-caret-up "}):Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("i",{style:{fontSize:"15px"},className:"fas fa-caret-down"})}),N&&Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("span",{onClick:n,className:"notif_btn",children:Object(b.jsx)("i",{class:"fas fa-bell "})})})]}):Object(b.jsx)("i",{onClick:g,className:"fas add icons fa-user-circle"})})]}),Object(b.jsx)("ul",{className:"nav_links",children:[{list:"Home",url:"/",mobIcon:"fas icons fa-home"},{list:"Collection",url:"/contents",mobIcon:"fas icons fa-upload"},{list:"Store",url:"/store",mobIcon:"fas icons fa-store"},{list:"Images",url:"/store/gallery",mobIcon:"fas fa-image icons"},{list:"About",url:"/about",mobIcon:"fas icons fa-address-card"}].map((function(e,t){var a=e.list,c=e.url,s=e.mobIcon;return Object(b.jsx)("li",{children:Object(b.jsxs)(i.c,{exact:!0,activeClassName:"nav_active",to:c,children:[Object(b.jsx)("i",{id:"ac_icon",className:s}),Object(b.jsx)("span",{className:"nav__lg_list",children:a}),Object(b.jsx)("p",{className:"indi",children:a})]})},t)}))}),Object(b.jsx)("div",{className:"user__login",children:Object(b.jsx)("li",{className:"for_desktop",children:Object(b.jsx)("span",{style:{cursor:"pointer"},className:"color",children:N?Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"logedin_data",children:[Object(b.jsx)("img",{style:{borderRadius:"50%"},height:"25px",width:"25px",src:u,alt:d,onClick:g}),"\xa0",Object(b.jsx)("span",{onClick:g,children:d})," \xa0",O?Object(b.jsx)("i",{className:"fas fa-caret-up"}):Object(b.jsx)("i",{className:"fas fa-caret-down"}),N&&Object(b.jsx)("span",{onClick:n,className:"notif_btn",children:Object(b.jsx)("i",{class:"fas fa-bell "})})]})}):Object(b.jsxs)("div",{onClick:g,children:["User \xa0",O?Object(b.jsx)("i",{className:"fas fa-caret-up"}):Object(b.jsx)("i",{className:"fas fa-caret-down"})]})})})})]}),O?Object(b.jsxs)("div",{className:"dropdown_data ",children:[Object(b.jsx)("li",{className:"li_pro",onClick:_,style:{color:"#fff"},children:N?Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"con_link_pro",children:[Object(b.jsx)("div",{className:"left_link_pro",children:Object(b.jsx)("img",{height:"45",width:"45",src:u,alt:d})}),Object(b.jsxs)("div",{className:"right_link_pro",children:[Object(b.jsx)("p",{children:d}),Object(b.jsxs)("p",{className:"light_upload",children:[m," upload counts"]})]})]}),Object(b.jsx)("div",{className:"btn__viewPro",children:Object(b.jsx)(i.c,{className:"pro__link",to:"/profile",children:"View Profile"})})]})}):Object(b.jsxs)(i.c,{className:"li lifor",to:"/profile",children:["My profile",Object(b.jsxs)("svg",{"aria-label":"Profile",class:"_8-yf5 ",color:"#fff",fill:"#262626",height:"16",role:"img",viewBox:"0 0 24 24",width:"16",children:[Object(b.jsx)("circle",{cx:"12.004",cy:"12.004",fill:"none",r:"10.5",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"2"}),Object(b.jsx)("path",{d:"M18.793 20.014a6.08 6.08 0 00-1.778-2.447 3.991 3.991 0 00-2.386-.791H9.38a3.994 3.994 0 00-2.386.791 6.09 6.09 0 00-1.779 2.447",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"2"}),Object(b.jsx)("circle",{cx:"12.006",cy:"9.718",fill:"none",r:"4.109",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"2"})]})]})}),N?Object(b.jsxs)(i.c,{className:"li lifor",onClick:v,style:{color:"#fff"},to:"/",children:["Sign Out",Object(b.jsx)("svg",{"aria-label":"Switch Accounts",class:"_8-yf5 ",color:"#fff",fill:"#fff",height:"16",role:"img",viewBox:"0 0 24 24",width:"16",children:Object(b.jsx)("path",{d:"M8 8.363a1 1 0 00-1-1H4.31a8.977 8.977 0 0114.054-1.727 1 1 0 101.414-1.414A11.003 11.003 0 003 5.672V3.363a1 1 0 10-2 0v5a1 1 0 001 1h5a1 1 0 001-1zm14 6.274h-5a1 1 0 000 2h2.69a8.977 8.977 0 01-14.054 1.727 1 1 0 00-1.414 1.414A11.004 11.004 0 0021 18.33v2.307a1 1 0 002 0v-5a1 1 0 00-1-1z"})})]}):Object(b.jsxs)(i.c,{className:"li lifor",onClick:_,style:{color:"#fff"},to:"/login",children:["Sign In",Object(b.jsxs)("svg",{"aria-label":"Direct",class:"_8-yf5 ",color:"#fff",fill:"#262626",height:"18",role:"img",viewBox:"0 0 24 24",width:"18",children:[Object(b.jsx)("line",{fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"2",x1:"22",x2:"9.218",y1:"3",y2:"10.083"}),Object(b.jsx)("polygon",{fill:"none",points:"11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"2"})]})]}),e&&Object(b.jsxs)(i.c,{target:"_blank",rel:"noopener noreferrer",className:"li lifor",onClick:_,style:{color:"#fff"},to:"/route/haribabalibrary/admin/login",children:["Admin",Object(b.jsx)("svg",{role:"img",height:"16",width:"16",viewBox:"0 0 16 16",class:"Svg-sc-1bi12j5-0 fIDrcz",children:Object(b.jsx)("path",{fill:"#fff","fill-rule":"evenodd",d:"M15 7V1H9v1h4.29L7.11 8.18l.71.71L14 2.71V7h1zM1 15h12V9h-1v5H2V4h5V3H1v12z","clip-rule":"evenodd"})})]})]}):"",j&&Object(b.jsx)(h,{})]})};t.a=Object(s.memo)(u)},113:function(e,t,a){},119:function(e,t,a){e.exports={cardContaner:"TopRated_cardContaner__1Zpr7",actualCard:"TopRated_actualCard__25rAr",loadmore:"TopRated_loadmore__3RkwS",leftPart:"TopRated_leftPart__5ec8g",title:"TopRated_title__301_m",authorName:"TopRated_authorName__3lnLz",rate:"TopRated_rate__3Gs_1",desc:"TopRated_desc__45rdj",linkRate:"TopRated_linkRate__G5z1R",buttonsGrp:"TopRated_buttonsGrp__1uCb1",heading:"TopRated_heading__10vF4"}},120:function(e,t,a){"use strict";var c=a(3),s=a(119),i=a.n(s),n=a(123),r=a.n(n),l=a(23),o=(a(48),a(17)),j=a(2),d=function(e){var t=e.pro_id,a=e.img,c=e.title,s=e.owner,n=e.rating,d=e.desc,b=e.cat_title;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(l.c,{className:i.a.actualCard,to:"/details/".concat(t,"/").concat(b),children:[Object(j.jsx)("div",{className:i.a.leftPart,children:Object(j.jsx)("img",{src:"".concat(o.a,"/hariBaba/api/uploads/upload/").concat(a),alt:"Not found"})}),Object(j.jsxs)("div",{className:i.a.rightPart,children:[Object(j.jsx)("div",{className:i.a.title,children:void 0===c?c:"".concat(c.substring(0,20),"...")}),Object(j.jsxs)("p",{className:i.a.authorName,children:["by ","".concat(s.substring(0,20),"...")]}),Object(j.jsx)("div",{className:i.a.rate,children:Object(j.jsx)(r.a,{count:n,size:24,color1:"#f79028",color2:"#f79028"})}),Object(j.jsx)("p",{className:i.a.desc,children:void 0===d?d:"".concat(d.substring(0,50),"...")}),Object(j.jsx)(l.c,{to:"/details/".concat(t,"/").concat(b),className:i.a.linkRate,children:"See Details"})]})]})})};t.a=Object(c.memo)(d)},151:function(e,t,a){},152:function(e,t,a){e.exports={mainCateCard:"cateCard_mainCateCard__1G49y",StorecateCard:"cateCard_StorecateCard__39ax_",action:"cateCard_action__2maLQ"}},153:function(e,t,a){e.exports={storeHeadings:"Heading_storeHeadings__2M2Dg",Headinglinks:"Heading_Headinglinks__2LWnZ",heading:"Heading_heading__3x-68"}},198:function(e,t,a){"use strict";a.r(t);var c=a(7),s=a(3),i=a(15),n=a.n(i),r=a(24),l=a(173),o=(a(151),a(22)),j=a.n(o),d=a(25),b=(a(48),a(17)),h=a(13),u=a(2),m=[{width:1,itemsToShow:1},{width:550,itemsToShow:2,itemsToScroll:2},{width:768,itemsToShow:3},{width:1200,itemsToShow:4}],f=function(){var e=j.a.get("__tcphblad__"),t=Object(s.useState)([]),a=Object(c.a)(t,2),i=a[0],o=a[1];Object(s.useEffect)((function(){(function(){var e=Object(r.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/hariBaba/api/img/fetchmulBanner").then((function(e){o(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=function(){var e=Object(r.a)(n.a.mark((function e(t,a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure?")){e.next=3;break}return e.next=3,h.a.post("/hariBaba/api/img/deleteinnerbanner",{id:t,url:a}).then((function(e){d.b.success("Deleted Successfully")})).catch((function(){alert("Something went wrong")}));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return Object(u.jsx)(u.Fragment,{children:0!==i.length&&Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{style:{marginTop:"0"},className:"carousel-wrapper",children:Object(u.jsx)(l.a,{breakPoints:m,children:i.map((function(t,a){var c=t.image_url,s=t.id,i=t.http;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"sliderImgHolder",children:[Object(u.jsx)("img",{style:{borderRadius:"10px"},className:"img",src:"".concat(b.a,"/hariBaba/api/uploads/ImageUpload/").concat(c),alt:s}),e&&Object(u.jsx)("div",{className:"dlt_wrapper_inner",children:Object(u.jsx)("span",{onClick:function(e){return f(s,c)},children:Object(u.jsx)("i",{class:"fas fa-trash-alt fa-3x"})})})]},a),Object(u.jsx)("center",{children:"#"!==i&&Object(u.jsx)("a",{target:"_blank",href:i,children:"Visit"})})]})})}))})})})})},x=a(38),O=a(23),p=a(152),g=a.n(p),_=a(20),v=function(){var e=Object(s.useState)([]),t=Object(c.a)(e,2),a=t[0],i=t[1];return Object(s.useEffect)((function(){(function(){var e=Object(r.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/hariBaba/api/getcategory").then((function(e){i(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(u.jsxs)(u.Fragment,{children:[a.map((function(e,t){var a=e.cat_title,c=e.cat_img;return Object(u.jsx)(O.c,{to:"showstoredata/".concat(a,"/").concat("cat_title"),children:Object(u.jsxs)("div",{className:g.a.mainCateCard,children:[Object(u.jsx)("div",{id:"circle",className:g.a.StorecateCard,children:Object(u.jsx)("div",{className:g.a.img,children:Object(u.jsx)("img",{src:"".concat(b.a,"/hariBaba/api/uploads/Images/").concat(c),height:"50px",width:"50px",alt:""})})}),Object(u.jsx)("div",{className:g.a.action,children:a})]})},t)})),Object(u.jsx)(O.c,{to:"/store/gallery",children:Object(u.jsxs)("div",{className:g.a.mainCateCard,children:[Object(u.jsx)("div",{id:"circle",className:g.a.StorecateCard,children:Object(u.jsx)("div",{className:g.a.img,children:Object(u.jsx)("img",{src:"".concat(b.a,"/hariBaba/api/uploads/Images/art.gif"),height:"50px",width:"50px",alt:""})})}),Object(u.jsx)("div",{className:g.a.action,children:"Images"})]})})]})},N=function(){var e=Object(s.useContext)(_.a).apiData,t=Object(x.a)(new Set(e.map((function(e){return e.lang_title}))));return Object(u.jsx)(u.Fragment,{children:t.map((function(e,t){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(O.c,{to:"showstoredata/".concat(e,"/").concat("lang_title"),children:Object(u.jsx)("div",{className:g.a.mainCateCard,children:Object(u.jsx)("div",{id:"circle",className:g.a.StorecateCard,children:e})})},t)})}))})},w=a(153),k=a.n(w),y=a(119),C=a.n(y),S=a(120),F=function(){var e=Object(s.useState)([]),t=Object(c.a)(e,2),a=t[0],i=t[1],l=Object(s.useState)(8),o=Object(c.a)(l,2),j=o[0],d=o[1];Object(s.useEffect)((function(){(function(){var e=Object(r.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/hariBaba/api/store/topratings").then((function(e){i(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:C.a.heading,children:Object(u.jsx)("span",{children:"Top Rated Contents"})}),Object(u.jsx)("div",{className:C.a.cardContaner,children:a.slice(0,j).map((function(e,t){var a=e.cat_title,c=e.pro_id,s=e.pro_img1,i=e.pro_title,n=e.owner_name,r=e.pro_desc,l=e.pro_rating;return Object(u.jsx)(S.a,{img:s,title:i,owner:n,rating:l,desc:r,cat_title:a,pro_id:c},t)}))}),j<a.length?Object(u.jsx)("div",{className:C.a.buttonsGrp,children:Object(u.jsx)("span",{onClick:function(){d(j+4)},children:"Show More"})}):""]})},T=a(30),B=a.n(T),H=function(){var e=Object(s.useState)(),t=Object(c.a)(e,2),a=t[0],i=t[1];return setTimeout((function(){i(!1)}),1500),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:k.a.heading,children:Object(u.jsx)("span",{children:"Browse Contents By "})}),Object(u.jsx)("div",{className:k.a.storeHeadings,children:Object(u.jsx)("div",{className:k.a.Headinglinks,children:a?Object(u.jsx)(B.a,{count:2,height:180}):Object(u.jsx)(v,{})})}),Object(u.jsx)(F,{}),Object(u.jsx)("div",{className:k.a.heading,children:Object(u.jsx)("span",{children:"Browse By Language"})}),Object(u.jsx)("div",{className:k.a.storeHeadings,style:{marginBottom:"80px"},children:Object(u.jsx)("div",{className:k.a.Headinglinks,children:Object(u.jsx)(N,{})})})]})},R=a(112),I=a(109);t.default=function(){document.title="SuryaGhat Library- Collections";var e=Object(s.useState)(!1),t=Object(c.a)(e,2),a=t[0],i=t[1];return setTimeout((function(){i(!0)}),2e3),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(R.a,{}),Object(u.jsx)(f,{}),Object(u.jsx)(H,{}),a&&Object(u.jsx)(I.a,{})]})}}}]);
//# sourceMappingURL=9.50b135b1.chunk.js.map