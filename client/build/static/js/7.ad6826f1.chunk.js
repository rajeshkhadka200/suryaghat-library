(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[7],{109:function(e,t,c){"use strict";var a=c(7),s=c(3),i=c(8),n=c(23),r=c(111),o=c(20),l=c(25),j=(c(48),c(110),c(17)),d=c(2),b=function(){Object(i.g)();var e=Object(s.useState)(!1),t=Object(a.a)(e,2),c=t[0],b=t[1],h=Object(s.useContext)(o.a).userData,m=h.username,u=h.email,x=Object(s.useState)(""),f=Object(a.a)(x,2),O=f[0],p=f[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("footer",{children:[Object(d.jsx)(l.a,{}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsxs)("div",{className:"left box",children:[Object(d.jsxs)("div",{className:"upper",children:[Object(d.jsx)("div",{className:"topic",children:" Suryaghat Library"}),Object(d.jsx)("p",{children:"Suryaghat Library is a popular non profit organization established with the motive of providing the free online book, Audio and Videos service."})]}),Object(d.jsxs)("div",{className:"lower",children:[Object(d.jsx)("div",{className:"topic",children:"Contact us"}),Object(d.jsxs)("div",{className:"phone cncttxt",children:[Object(d.jsx)("i",{className:"fas fa-phone-volume"}),"+977-9840767766"]}),Object(d.jsxs)("div",{className:"email cncttxt",children:[Object(d.jsx)("i",{className:"fas fa-envelope"}),"haribabalibraryofficial45.np@gmail.com"]})]})]}),Object(d.jsxs)("div",{className:"middle box",children:[Object(d.jsx)("div",{className:"topic",children:"Quiks Links"}),[{list:"Home",url:"/"},{list:"About",url:"/about"},{list:"Contents",url:"/contents"},{list:"Store",url:"/store"},{list:"Gallery",url:"/store/gallery"}].map((function(e,t){var c=e.url,a=e.list;return Object(d.jsx)("div",{children:Object(d.jsx)(n.c,{to:c,children:a})})}))]}),Object(d.jsxs)("div",{className:"right box",children:[Object(d.jsx)("div",{className:"topic",children:"Contact Us"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m&&u?(b(!0),r.a.sendForm("service_q0aucvt","template_x4l4dfg",e.target,"user_94oKkPNNBsvla5Je7kex6").then((function(){setTimeout((function(){l.b.success("Meessage Sent Successfully!"),b(!1),p("")}),1e3)}),(function(){setTimeout((function(){l.b.error("Failed sending message"),b(!1)}),1e3)}))):(b(!0),setTimeout((function(){l.b.info("Please Login to Send message"),b(!1)}),1e3))},children:[Object(d.jsx)("textarea",{value:O,name:"message",required:!0,placeholder:"Leave a message...",onChange:function(e){return p(e.target.value)}}),Object(d.jsx)("input",{type:"hidden",value:m,name:"username"}),Object(d.jsx)("input",{type:"hidden",value:u,name:"useremail"}),Object(d.jsxs)("button",{disabled:c,type:"submit",style:{background:c?"grey":"",cursor:c?"not-allowed":"pointer"},children:[c&&Object(d.jsx)("img",{height:"20px",width:"20px",src:"".concat(j.a,"/hariBaba/api/uploads/Images/loading.jpg")}),"\xa0 \xa0",c?"Sending..":"Send"]})]}),Object(d.jsxs)("div",{className:"media-icons",children:[Object(d.jsx)("a",{href:"https://www.facebook.com/haribabalibrary/",target:"_blank",children:Object(d.jsx)("i",{className:"fab fa-facebook-f"})}),Object(d.jsx)("a",{href:"#",target:"_blank",children:Object(d.jsx)("i",{className:"fab fa-twitter"})}),Object(d.jsx)("a",{href:"#",target:"_blank",children:Object(d.jsx)("i",{className:"fab fa-linkedin-in"})})]})]})]}),Object(d.jsx)("div",{className:"bottom",children:Object(d.jsxs)("p",{className:"cpyrght",children:["Copyright \xa9 ",(new Date).getFullYear().toString()," All right reserved"]})})]})})};t.a=Object(s.memo)(b)},110:function(e,t,c){},112:function(e,t,c){"use strict";var a=c(7),s=c(3),i=(c(113),c(23)),n=c(22),r=c.n(n),o=c(20),l=c(115),j=c(34),d=(c(66),c(8)),b=c(2),h=function(){var e=Object(d.g)(),t=r.a.get("__tcphbl30__"),c=Object(s.useContext)(o.a).setnotifOpen,n=Object(s.useState)([]),l=Object(a.a)(n,2),h=l[0],m=l[1];Object(s.useEffect)((function(){j.a.collection("Notif").orderBy("timestamp","desc").onSnapshot((function(e){m(e.docs.map((function(e){return e.data()})))}))}),[]);var u=h.filter((function(e){return e.user_id===t}));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{onClick:function(){c(!1)},className:"wrapper_notif"}),Object(b.jsxs)("div",{className:"_notif_con",children:[Object(b.jsx)("p",{className:"notif_heading",children:"Notifications"}),Object(b.jsxs)(b.Fragment,{children:[u.map((function(t,a){var s=t.admin_name,n=t.pro_img,r=t.pro_id,o=t.cat_title,l=t.pro_title,j=t.notifDate;return Object(b.jsxs)(i.c,{onClick:function(t){return function(t,a){e.push("/details/".concat(t,"/").concat(a)),c(!1),window.location.reload()}(r,o)},to:"/details/".concat(r,"/").concat(o),className:"_single_notif",children:[Object(b.jsx)("div",{className:"_notif_left_",children:Object(b.jsx)("img",{src:"/upload/".concat(n),alt:"verify__"})}),Object(b.jsxs)("div",{className:"_notif_right_",children:[Object(b.jsx)("span",{children:s})," verified your uploaded"," ",Object(b.jsx)("span",{children:o}),'.."',void 0!==l?l.substring(0,20)+"...":l,'"',Object(b.jsx)("p",{children:Object(b.jsxs)("small",{children:[j,0===a&&Object(b.jsx)(b.Fragment,{children:" \xa0 (new) "})]})})]})]})})),0===h.length&&Object(b.jsx)("div",{className:"no_notif",children:Object(b.jsx)("img",{height:"40px",width:"40px",src:"/Images/loading.jpg"})})]})]})]})},m=function(){var e=r.a.get("__tcphblad__"),t=Object(s.useContext)(o.a),c=t.userData,n=t.handleNotif,j=t.notifOpen,d=c.username,m=c.user_profile,u=c.upload_items,x=Object(s.useState)(!1),f=Object(a.a)(x,2),O=f[0],p=f[1],g=function(){p(!O)},v=function(){p(!O)},_=Object(l.useGoogleLogout)({clientId:"288149900445-084opuu7mh4g9ofd7arnnf5vm4ornfkv.apps.googleusercontent.com",onLogoutSuccess:function(){p(!O),r.a.remove("__tcphbl30__"),window.location.reload()}}).signOut,N=r.a.get("__tcphbl30__");return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("nav",{children:[Object(b.jsxs)("div",{className:"logo",children:[Object(b.jsx)(i.c,{to:"/",className:"mainHeadingNav",children:Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{className:"logo_span",children:"Suryaghat"}),"library"]})}),Object(b.jsx)("li",{style:{cursor:"pointer"},className:"for_mobile",children:N?Object(b.jsxs)("div",{className:"logedin_data",children:[Object(b.jsx)("img",{onClick:g,style:{borderRadius:"50%"},height:"25px",width:"25px",src:m,alt:d}),"\xa0",Object(b.jsx)("small",{onClick:g,style:{fontSize:"15px"},children:void 0!==d?d.split(" ")[0]:d}),"\xa0",O?Object(b.jsx)("i",{style:{fontSize:"15px"},className:"fas fa-caret-up "}):Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("i",{style:{fontSize:"15px"},className:"fas fa-caret-down"})}),N&&Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("span",{onClick:n,className:"notif_btn",children:Object(b.jsx)("i",{class:"fas fa-bell "})})})]}):Object(b.jsx)("i",{onClick:g,className:"fas add icons fa-user-circle"})})]}),Object(b.jsx)("ul",{className:"nav_links",children:[{list:"Home",url:"/",mobIcon:"fas icons fa-home"},{list:"Collection",url:"/contents",mobIcon:"fas icons fa-upload"},{list:"Store",url:"/store",mobIcon:"fas icons fa-store"},{list:"Images",url:"/store/gallery",mobIcon:"fas fa-image icons"},{list:"About",url:"/about",mobIcon:"fas icons fa-address-card"}].map((function(e,t){var c=e.list,a=e.url,s=e.mobIcon;return Object(b.jsx)("li",{children:Object(b.jsxs)(i.c,{exact:!0,activeClassName:"nav_active",to:a,children:[Object(b.jsx)("i",{id:"ac_icon",className:s}),Object(b.jsx)("span",{className:"nav__lg_list",children:c}),Object(b.jsx)("p",{className:"indi",children:c})]})},t)}))}),Object(b.jsx)("div",{className:"user__login",children:Object(b.jsx)("li",{className:"for_desktop",children:Object(b.jsx)("span",{style:{cursor:"pointer"},className:"color",children:N?Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"logedin_data",children:[Object(b.jsx)("img",{style:{borderRadius:"50%"},height:"25px",width:"25px",src:m,alt:d,onClick:g}),"\xa0",Object(b.jsx)("span",{onClick:g,children:d})," \xa0",O?Object(b.jsx)("i",{className:"fas fa-caret-up"}):Object(b.jsx)("i",{className:"fas fa-caret-down"}),N&&Object(b.jsx)("span",{onClick:n,className:"notif_btn",children:Object(b.jsx)("i",{class:"fas fa-bell "})})]})}):Object(b.jsxs)("div",{onClick:g,children:["User \xa0",O?Object(b.jsx)("i",{className:"fas fa-caret-up"}):Object(b.jsx)("i",{className:"fas fa-caret-down"})]})})})})]}),O?Object(b.jsxs)("div",{className:"dropdown_data ",children:[Object(b.jsx)("li",{className:"li_pro",onClick:v,style:{color:"#fff"},children:N?Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"con_link_pro",children:[Object(b.jsx)("div",{className:"left_link_pro",children:Object(b.jsx)("img",{height:"45",width:"45",src:m,alt:d})}),Object(b.jsxs)("div",{className:"right_link_pro",children:[Object(b.jsx)("p",{children:d}),Object(b.jsxs)("p",{className:"light_upload",children:[u," upload counts"]})]})]}),Object(b.jsx)("div",{className:"btn__viewPro",children:Object(b.jsx)(i.c,{className:"pro__link",to:"/profile",children:"View Profile"})})]})}):Object(b.jsxs)(i.c,{className:"li lifor",to:"/profile",children:["My profile",Object(b.jsxs)("svg",{"aria-label":"Profile",class:"_8-yf5 ",color:"#fff",fill:"#262626",height:"16",role:"img",viewBox:"0 0 24 24",width:"16",children:[Object(b.jsx)("circle",{cx:"12.004",cy:"12.004",fill:"none",r:"10.5",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"2"}),Object(b.jsx)("path",{d:"M18.793 20.014a6.08 6.08 0 00-1.778-2.447 3.991 3.991 0 00-2.386-.791H9.38a3.994 3.994 0 00-2.386.791 6.09 6.09 0 00-1.779 2.447",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"2"}),Object(b.jsx)("circle",{cx:"12.006",cy:"9.718",fill:"none",r:"4.109",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"2"})]})]})}),N?Object(b.jsxs)(i.c,{className:"li lifor",onClick:_,style:{color:"#fff"},to:"/",children:["Sign Out",Object(b.jsx)("svg",{"aria-label":"Switch Accounts",class:"_8-yf5 ",color:"#fff",fill:"#fff",height:"16",role:"img",viewBox:"0 0 24 24",width:"16",children:Object(b.jsx)("path",{d:"M8 8.363a1 1 0 00-1-1H4.31a8.977 8.977 0 0114.054-1.727 1 1 0 101.414-1.414A11.003 11.003 0 003 5.672V3.363a1 1 0 10-2 0v5a1 1 0 001 1h5a1 1 0 001-1zm14 6.274h-5a1 1 0 000 2h2.69a8.977 8.977 0 01-14.054 1.727 1 1 0 00-1.414 1.414A11.004 11.004 0 0021 18.33v2.307a1 1 0 002 0v-5a1 1 0 00-1-1z"})})]}):Object(b.jsxs)(i.c,{className:"li lifor",onClick:v,style:{color:"#fff"},to:"/login",children:["Sign In",Object(b.jsxs)("svg",{"aria-label":"Direct",class:"_8-yf5 ",color:"#fff",fill:"#262626",height:"18",role:"img",viewBox:"0 0 24 24",width:"18",children:[Object(b.jsx)("line",{fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"2",x1:"22",x2:"9.218",y1:"3",y2:"10.083"}),Object(b.jsx)("polygon",{fill:"none",points:"11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"2"})]})]}),e&&Object(b.jsxs)(i.c,{target:"_blank",rel:"noopener noreferrer",className:"li lifor",onClick:v,style:{color:"#fff"},to:"/route/haribabalibrary/admin/login",children:["Admin",Object(b.jsx)("svg",{role:"img",height:"16",width:"16",viewBox:"0 0 16 16",class:"Svg-sc-1bi12j5-0 fIDrcz",children:Object(b.jsx)("path",{fill:"#fff","fill-rule":"evenodd",d:"M15 7V1H9v1h4.29L7.11 8.18l.71.71L14 2.71V7h1zM1 15h12V9h-1v5H2V4h5V3H1v12z","clip-rule":"evenodd"})})]})]}):"",j&&Object(b.jsx)(h,{})]})};t.a=Object(s.memo)(m)},113:function(e,t,c){},129:function(e,t,c){"use strict";c.d(t,"a",(function(){return l})),c.d(t,"b",(function(){return j}));c(3);var a=c(130),s=c.n(a),i=c(131),n=c.n(i),r=c(17),o=c(2),l=function(e){var t=e.src;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:s.a.audioPlayer,children:[Object(o.jsx)("p",{className:s.a.headingsrc,children:"Play the audio"}),Object(o.jsx)(n.a,{id:s.a.audio_canvas,height:100,width:200,audioId:"audio-element",capColor:"red",capHeight:5,meterWidth:1,meterCount:200,meterColor:[{stop:0,color:"#C04848"},{stop:.5,color:"#49a09d"},{stop:1,color:"red"}],gap:5}),Object(o.jsx)("audio",{controlsList:"nodownload",id:"audio-element",src:"".concat(r.a,"/hariBaba/api/uploads/files/").concat(t),controls:!0})]})})},j=function(e){var t=e.src,c=e.id;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{id:"".concat(s.a,".").concat(c),className:s.a.videoWrapper,children:Object(o.jsxs)("div",{class:s.a.videoDiv,children:[Object(o.jsx)("p",{className:s.a.headingsrc,children:"Watch The Video"}),Object(o.jsx)("video",{controls:!0,controlsList:"nodownload",children:Object(o.jsx)("source",{src:"".concat(t),type:"video/ogg"})})]})})})}},130:function(e,t,c){e.exports={videoWrapper:"Source_videoWrapper___hlgT",headingsrc:"Source_headingsrc__3JmHS",aboutVideo:"Source_aboutVideo__4AELx",audioPlayer:"Source_audioPlayer__BZepl",audio_canvas:"Source_audio_canvas__38dxd",videoPlayer:"Source_videoPlayer__2vWnw"}},161:function(e,t,c){},162:function(e,t,c){},163:function(e,t,c){},164:function(e,t,c){},165:function(e,t,c){},196:function(e,t,c){"use strict";c.r(t);var a=c(15),s=c.n(a),i=c(24),n=c(7),r=c(3),o=c(23),l=(c(161),c(2)),j=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"left_side",children:[Object(l.jsx)("div",{className:"tittle",children:"Suryaghat Library"}),Object(l.jsxs)("div",{className:"hero_disc",children:[Object(l.jsx)("i",{className:"fas fa-quote-left"}),Object(l.jsx)("span",{className:"fancyHero",children:"Suryaghat Library"})," is a popular non profit organization established with the motive of providing the free online book service to the readers through application and website.",Object(l.jsx)("i",{className:"fas fa-quote-right"})]}),Object(l.jsx)("div",{className:"btn_group",children:Object(l.jsxs)("button",{className:"btn",children:[Object(l.jsx)(o.c,{className:"leftbtn",style:{padding:"10px "},to:"/store",children:"Go to Book Store"})," "]})})]})})},d=c(30),b=c.n(d),h=(c(162),c(20)),m=c(17),u=function(){var e=Object(r.useContext)(h.a),t=e.apiData,c=e.highlight,a=e.color,s=Object(r.useState)(!0),i=Object(n.a)(s,2),o=i[0],j=i[1];setTimeout((function(){j(!1)}),1500);for(var u=[];u.length<4;){var x=Math.floor(Math.random()*t.length);-1===u.indexOf(x)&&u.push(x)}return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"right_side",children:Object(l.jsxs)("div",{className:"imgrightCon",children:[Object(l.jsx)("div",{className:"col1",children:o?Object(l.jsx)(d.SkeletonTheme,{color:a,highlightColor:c,children:Object(l.jsx)(b.a,{height:150,width:130})}):Object(l.jsx)("img",{width:"130",height:"200",src:"".concat(m.a,"/hariBaba/api/uploads/upload/").concat(t[u[0]].pro_img1),alt:"about us"})}),Object(l.jsxs)("div",{className:"col2",children:[o?Object(l.jsx)(d.SkeletonTheme,{color:a,highlightColor:c,children:Object(l.jsx)(b.a,{height:150,width:130})}):Object(l.jsx)("img",{width:"130",height:"200",src:"".concat(m.a,"/hariBaba/api/uploads/upload/").concat(t[u[1]].pro_img1),alt:"not found"}),o?Object(l.jsx)(d.SkeletonTheme,{color:a,highlightColor:c,children:Object(l.jsx)(b.a,{height:150,width:130})}):Object(l.jsx)("img",{width:"130",height:"200",src:"".concat(m.a,"/hariBaba/api/uploads/upload/").concat(t[u[2]].pro_img1),alt:"Loading"})]}),Object(l.jsxs)("div",{className:"col3",children:[o?Object(l.jsx)(d.SkeletonTheme,{color:a,highlightColor:c,children:Object(l.jsx)(b.a,{height:150,width:130})}):Object(l.jsx)("img",{width:"130",height:"200",src:"".concat(m.a,"/hariBaba/api/uploads/upload/").concat(t[u[0]].pro_img1),alt:"Loading"}),o?Object(l.jsx)(d.SkeletonTheme,{color:a,highlightColor:c,children:Object(l.jsx)(b.a,{height:150,width:130})}):Object(l.jsx)("img",{width:"130",height:"200",src:"".concat(m.a,"/hariBaba/api/uploads/upload/").concat(t[3].pro_img1),alt:"loading"})]})]})})})},x=(c(163),function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"hero_content",children:[Object(l.jsx)(j,{}),Object(l.jsx)(u,{})]})})}),f=c(112),O=c(129),p=c(13),g=c(109),v=(c(164),function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"mapContainer",children:[Object(l.jsx)("div",{className:"mapHeading",children:"Location (Visit our offline Library)"}),Object(l.jsx)("div",{className:"mapActual",children:Object(l.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2171005452683!2d85.34644961456544!3d27.710582431957693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb195f1614bb0b%3A0x94a2ceff52dcb767!2sSuryaghat!5e0!3m2!1sen!2snp!4v1628233818215!5m2!1sen!2snp",width:"100%",height:"300px",style:{border:"0"},allowfullscreen:"",loading:"lazy"})})]})})}),_=(c(165),function(){var e=Object(r.useState)([{image:"".concat(m.a,"/hariBaba/api/uploads/Images/silver.png"),name:"Silver",desc:"To achieve the  Silver membership of our Library, contibute at least 5 contents in our website"},{image:"".concat(m.a,"/hariBaba/api/uploads/Images/gold.png"),name:"Gold",desc:"To achieve the  Gold membership of our Library, contibute at least 10 contents in our website"},{image:"".concat(m.a,"/hariBaba/api/uploads/Images/platinum.png"),name:"Platinum",desc:"To achieve the  Platinum membership of our Library, contibute at least 15 contents in our website"}]),t=Object(n.a)(e,2),c=t[0];t[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"mebbCont",children:[Object(l.jsx)("p",{className:"mbmHeading",children:"Our Membership Plan"}),Object(l.jsx)("div",{className:"memCardCon",children:c.map((function(e,t){var c=e.name,a=e.image,s=e.desc;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"memcard",children:[Object(l.jsx)("img",{src:a,alt:c}),Object(l.jsx)("p",{className:"memName",children:c}),Object(l.jsx)("p",{className:"memDesc",children:s}),Object(l.jsx)("div",{className:"buttonGrp",children:Object(l.jsx)(o.c,{className:"button",to:"/upload",children:"Upload"})})]})})}))})]})})});t.default=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),c=t[0],a=t[1];return document.title="SuryaGhat Library - About Us",Object(r.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("hariBaba/api/img/getVedio").then((function(e){a(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(f.a,{}),Object(l.jsx)(x,{}),Object(l.jsx)(_,{}),Object(l.jsx)(v,{}),c.slice(0,1).map((function(e,t){return Object(l.jsx)(O.b,{src:"".concat(m.a,"/hariBaba/api/uploads/AdminSRC/").concat(e.video),id:"aboutVideo"},t)})),Object(l.jsx)(g.a,{})]})}}}]);
//# sourceMappingURL=7.ad6826f1.chunk.js.map