(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[22],{117:function(e,t,a){"use strict";var n=a(7),c=a(3),s=a(23),i=a(118),r=a.n(i),l=a(30),o=a.n(l),d=a(17),j=a(2);t.a=function(e){var t=e.itemLen,a=e.itemName,i=e.username,l=e.image,u=e.is_super,b=e.email,p=e.joined_on,h=Object(c.useState)(!0),m=Object(n.a)(h,2),x=m[0],O=m[1];return setTimeout((function(){O(!1)}),2e3),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:r.a.topbanner,children:[Object(j.jsx)("div",{className:r.a.topBannerLeft,children:Object(j.jsx)("div",{className:r.a.img,children:void 0!==l?Object(j.jsx)(j.Fragment,{children:x?Object(j.jsx)(o.a,{width:150,height:150,circle:!0}):Object(j.jsx)("img",{style:{border:"4px solid #8c78eed2"},src:"".concat(d.a,"/hariBaba/api/uploads/AdminSRC/").concat(l),alt:i})}):Object(j.jsx)("i",{id:r.a.icons,className:"fas fa-book-reader fa-6x"})})}),Object(j.jsxs)("div",{className:r.a.topBannerRight,children:[Object(j.jsx)("span",{className:r.a.bannerHeading,children:void 0!==i?x?Object(j.jsx)(o.a,{height:50,width:150}):Object(j.jsxs)(j.Fragment,{children:[i," ",Object(j.jsx)("small",{children:Object(j.jsx)("sup",{children:Object(j.jsx)("i",{style:{color:"#2d88ff",fontSize:"15px"},className:"fas fa-check-circle"})})})]}):"Suryaghat library"}),Object(j.jsx)("p",{className:r.a.countitems,children:i?Object(j.jsx)(j.Fragment,{children:x?Object(j.jsx)(o.a,{height:50,width:300}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("span",{className:r.a.itemDynamic,children:["Email :"," ",Object(j.jsx)("span",{style:{textTransform:"lowercase"},children:b&&b})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{className:r.a.itemDynamic,children:["Role : ","true"===u?"Super Admin":"Admin"]})," ",Object(j.jsx)("br",{}),Object(j.jsxs)("span",{className:r.a.itemDynamic,children:["joined On : ",p&&p]})]})}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{className:r.a.itemDynamic,children:t}),"+ Items Found in \xa0",Object(j.jsx)("span",{className:r.a.itemDynamic,children:a})]})}),!i&&Object(j.jsxs)("p",{className:r.a.quote,children:[Object(j.jsx)("i",{id:r.a.fasbannerLeft,className:"fas fa-quote-left"}),"You can never get a cup of tea large enough or a book long enough to suit me.",Object(j.jsx)("i",{id:r.a.fasbannerRight,className:"fas fa-quote-right"})]}),!i&&Object(j.jsx)(s.c,{className:r.a.bannerButton,to:"/about",children:"Who we are"})]})]})})}},118:function(e,t,a){e.exports={topbanner:"Content_topbanner__2pWrQ",topBannerLeft:"Content_topBannerLeft__28xih",img:"Content_img__kMZKB",topBannerRight:"Content_topBannerRight__221is",bannerHeading:"Content_bannerHeading__2M7Pw",countitems:"Content_countitems__TP9py",itemDynamic:"Content_itemDynamic__3x7q6",quote:"Content_quote__3_XGv",bannerButton:"Content_bannerButton__Iq97p",fasbannerLeft:"Content_fasbannerLeft__her93",fasbannerRight:"Content_fasbannerRight__3N_Ge",icons:"Content_icons__399Xb"}},134:function(e,t,a){},201:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(22),s=a.n(c),i=a(15),r=a.n(i),l=a(24),o=a(36),d=a(42),j=a(7),u=a(20),b=a(25),p=(a(48),a(34)),h=(a(134),a(117)),m=a(125),x=a(13),O=a(2),g=function(){var e=Object(n.useContext)(u.a).userData,t=(e.user_id,e.google_id),a=e.username,c=e.user_profile,s=Object(n.useState)("Documents"),i=Object(j.a)(s,2),g=i[0],v=i[1],f=Object(n.useState)({productTitle:"",productDesc:"",subcategory:"",language:"",emotion:"",authorname:"",genre:"",referenceurl:""}),y=Object(j.a)(f,2),_=y[0],C=y[1],N=function(e){C(Object(d.a)(Object(d.a)({},_),{},Object(o.a)({},e.target.name,e.target.value)))},D=Object(n.useState)(!1),F=Object(j.a)(D,2),q=F[0],S=F[1],w=_.productTitle,I=_.productDesc,B=_.subcategory,L=_.language,T=_.emotion,k=_.authorname,A=_.genre,E=_.referenceurl,R=Object(n.useState)(),G=Object(j.a)(R,2),P=G[0],H=G[1],V=function(e){H(e.target.files[0])},U=Object(n.useState)(),W=Object(j.a)(U,2),X=W[0],J=W[1],M=function(e){J(e.target.files[0])},z=function(){C({productTitle:"",productDesc:"",subcategory:"",language:"",emotion:"",authorname:"",genre:"",referenceurl:""}),v("Document")},K=function(){var e=Object(l.a)(r.a.mark((function e(n){var s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),document.querySelector("body").classList.add("hide"),S(!0),(s=new FormData).append("file",P),s.append("src",X),s.append("productTitle",w),s.append("productDesc",I),s.append("subcategory",B),s.append("language",L),s.append("emotion",T),s.append("authorname",k),s.append("genre",A),s.append("category",g),s.append("google_id",t),s.append("referenceurl",E),e.next=18,x.a.post("/hariBaba/api/uploadItem",s,{headers:{"content-Type":"multipart/form-data"}}).then((function(e){var t=(new Date).getTime().toString(),n=(new Date).toISOString().slice(0,10);p.a.collection("AdminNotif").doc(t).set({username:a,user_profile:c,pro_title:w,timestamp:t,notifDate:n,category:g}),b.b.success("Sent, wait for verification."),z(),S(!1),document.querySelector("body").classList.remove("hide")})).catch((function(e){S(!1),alert("No, insert")}));case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)(O.Fragment,{children:[q&&Object(O.jsx)(m.a,{}),Object(O.jsx)(h.a,{}),Object(O.jsxs)("div",{className:"formWrapper",children:[Object(O.jsx)("div",{className:"uploadHeader",children:Object(O.jsx)("p",{children:"Upload Contents to our online Library"})}),Object(O.jsxs)("form",{onSubmit:K,children:[Object(O.jsxs)("div",{className:"uploadFormControl",children:[Object(O.jsxs)("div",{className:"uploadIndividual",children:[Object(O.jsx)("label",{children:"Choose Category"}),Object(O.jsxs)("select",{disabled:q,required:!0,name:"stateSelect",onChange:function(e){v(e.target.value)},children:[Object(O.jsx)("option",{selected:!0,value:"Documents",children:"Document (Click to change)"}),Object(O.jsx)("option",{value:"Videos",children:"Video"}),Object(O.jsx)("option",{value:"Audios",children:"Audio "})]})]}),Object(O.jsxs)("div",{className:"uploadIndividual",children:[Object(O.jsx)("label",{children:"Enter the Title"}),Object(O.jsx)("input",{disabled:q,name:"productTitle",required:!0,value:_.productTitle,onChange:N,type:"text",placeholder:"munamadan the true love story"})]})]}),Object(O.jsxs)("div",{className:"uploadFormControl",children:[Object(O.jsxs)("div",{className:"uploadIndividual",children:[Object(O.jsx)("label",{children:"Enter the Sub category"}),Object(O.jsx)("input",{disabled:q,name:"subcategory",required:!0,value:_.subcategory,onChange:N,type:"text",placeholder:"audio clips"})]}),Object(O.jsxs)("div",{className:"uploadIndividual",children:[Object(O.jsx)("label",{children:"Enter the Language"}),Object(O.jsx)("input",{name:"language",required:!0,disabled:q,value:_.language,onChange:N,type:"text",placeholder:"Nepali"})]})]}),Object(O.jsxs)("div",{className:"uploadFormControl",children:[Object(O.jsxs)("div",{className:"uploadIndividual",children:[Object(O.jsx)("label",{children:"Enter the Author Name"}),Object(O.jsx)("input",{disabled:q,name:"authorname",required:!0,value:_.authorname,onChange:N,type:"text",placeholder:"Laxmi prasad devkota"})]}),Object(O.jsxs)("div",{className:"uploadIndividual",children:[Object(O.jsx)("label",{children:"Enter Emotion"}),Object(O.jsx)("input",{disabled:q,name:"emotion",required:!0,value:_.emotion,onChange:N,type:"text",placeholder:"lovely"})]})]}),Object(O.jsxs)("div",{className:"uploadFormControl",children:[Object(O.jsxs)("div",{className:"uploadIndividual",children:[Object(O.jsx)("label",{children:"Enter the Genre"}),Object(O.jsx)("input",{disabled:q,name:"genre",required:!0,value:_.genre,onChange:N,type:"text",placeholder:"pdf"})]}),Object(O.jsxs)("div",{className:"uploadIndividual",children:[Object(O.jsx)("label",{children:"Enter refrence url"}),Object(O.jsx)("input",{disabled:q,name:"referenceurl",value:_.referenceurl,onChange:N,type:"text",placeholder:"https://www.youtube.com/watch?v=2P5X4PG"})]})]}),Object(O.jsx)("div",{className:"uploadFormControl",children:Object(O.jsxs)("div",{id:"textarea",className:"uploadIndividual",children:[Object(O.jsx)("label",{children:"Enter the Content Description"}),Object(O.jsx)("textarea",{disabled:q,name:"productDesc",required:!0,value:_.productDesc,onChange:N,placeholder:"munamadan is the great love story..."})]})}),"Audios"===g?Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"uploadFormControl",children:[Object(O.jsxs)("div",{className:"uploadIndividual",children:[Object(O.jsx)("label",{children:"Choose the Audio thumbnail"}),Object(O.jsx)("input",{required:!0,onChange:V,type:"file",accept:".jpeg,.jep,.png"})]}),Object(O.jsxs)("div",{className:"uploadIndividual",children:[Object(O.jsx)("label",{children:"Choose a Audio File"}),Object(O.jsx)("input",{required:!0,onChange:M,type:"file",accept:".mp3"})]})]})}):"Videos"===g?Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"uploadFormControl",children:[Object(O.jsxs)("div",{className:"uploadIndividual",children:[Object(O.jsx)("label",{children:"Choose the Video thumbnail"}),Object(O.jsx)("input",{required:!0,onChange:V,type:"file",accept:".jpeg,.jep,.png"})]}),Object(O.jsxs)("div",{className:"uploadIndividual",children:[Object(O.jsx)("label",{children:"Choose a video File"}),Object(O.jsx)("input",{required:!0,onChange:M,type:"file",accept:".mp4,.webm"})]})]})}):"Documents"===g?Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"uploadFormControl",children:[Object(O.jsxs)("div",{className:"uploadIndividual",children:[Object(O.jsx)("label",{children:"Choose the Book thumbnail"}),Object(O.jsx)("input",{required:!0,onChange:V,type:"file",accept:".jpeg,.jep,.png"})]}),Object(O.jsxs)("div",{className:"uploadIndividual",children:[Object(O.jsx)("label",{children:"Choose a PDF File"}),Object(O.jsx)("input",{required:!0,onChange:M,type:"file",accept:".pdf"})]})]})}):void 0,Object(O.jsxs)("div",{className:"btnGrp_upload",children:[Object(O.jsx)("button",{disabled:q,type:"button",onClick:z,children:"Reset"}),Object(O.jsx)("button",{disabled:q,type:"submit",children:q?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("img",{height:"20px",width:"20px",src:"/Images/loading.jpg",alt:"loading"})," ","\xa0 Sending..."]}):"Upload"})]})]})]})]})},v=a(112),f=a(109),y=a(8);t.default=function(){var e=s.a.get("__tcphbl30__");return document.title="SuryaGhat Library - Uploads",Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(v.a,{}),e?Object(O.jsx)(g,{}):Object(O.jsx)(y.a,{to:"/"}),Object(O.jsx)(f.a,{})]})}}}]);
//# sourceMappingURL=22.8631a29c.chunk.js.map