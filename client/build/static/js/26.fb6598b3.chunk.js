(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[26],{134:function(e,t,a){},191:function(e,t,a){"use strict";a.r(t);var n=a(36),l=a(42),c=a(15),s=a.n(c),i=a(24),r=a(7),d=a(3),o=(a(48),a(134),a(20)),u=a(112),j=a(109),b=a(8),h=a(22),p=a.n(h),m=a(125),x=a(25),O=a(17),v=a(13),g=a(2);t.default=function(){var e=Object(b.g)(),t=Object(d.useContext)(o.a).userData,a=t.username,c=t.google_id,h=Object(d.useState)(!1),_=Object(r.a)(h,2),f=_[0],y=_[1],N=Object(b.h)().editId,C=Object(d.useState)([]),w=Object(r.a)(C,2),E=w[0],I=w[1],q=Object(d.useState)(!1),S=Object(r.a)(q,2),F=S[0],k=S[1];Object(d.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.a.post("/hariBaba/api/edit",{editId:N,google_id:c}).then((function(e){200===e.status&&I(e.data[0])})).catch((function(){k(!0)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[N]);var L=p.a.get("__tcphbl30__"),D=E.pro_id,B=E.pro_title,G=E.owner_name,H=E.pro_desc,P=E.sub_cat_title,T=E.lang_title,J=E.emo_title,A=E.genre_title,R=E.referenceurl,W=function(e){I(Object(l.a)(Object(l.a)({},E),{},Object(n.a)({},e.target.name,e.target.value)))},X=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.querySelector("body").classList.add("hide"),y(!0),t.preventDefault(),e.next=5,v.a.post("/hariBaba/api/editall",{pro_id:D,pro_title:B,owner_name:G,pro_desc:H,sub_cat_title:P,lang_title:T,emo_title:J,genre_title:A}).then((function(e){200===e.status?setTimeout((function(){x.b.success("Successfully saved the changes"),y(!1),document.querySelector("body").classList.remove("hide")}),2e3):setTimeout((function(){x.b.success("Error while saving the changes."),document.querySelector("body").classList.remove("hide"),y(!1)}),2e3)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return L||e.push("/"),Object(g.jsxs)(g.Fragment,{children:[f&&Object(g.jsx)(m.a,{}),!0===F&&Object(g.jsx)(b.a,{to:"/profile"}),Object(g.jsx)(u.a,{}),Object(g.jsxs)("div",{style:{minHeight:"100vh"},className:"formWrapper",children:[Object(g.jsx)("div",{className:"uploadHeader",children:Object(g.jsx)("p",{children:"Edit the details Here"})}),Object(g.jsxs)("form",{onSubmit:X,children:[Object(g.jsxs)("div",{className:"uploadFormControl",children:[Object(g.jsxs)("div",{className:"uploadIndividual",children:[Object(g.jsx)("label",{children:"Enter the Title"}),Object(g.jsx)("input",{disabled:f,name:"pro_title",required:!0,value:B,onChange:W,type:"text",placeholder:"munamadan the true love story"})]}),Object(g.jsxs)("div",{className:"uploadIndividual",children:[Object(g.jsx)("label",{children:"Enter refrence url"}),Object(g.jsx)("input",{disabled:f,name:"referenceurl",value:R,onChange:W,type:"text",placeholder:"https://www.youtube.com/watch?v=2P5X4PG"})]})]}),Object(g.jsxs)("div",{className:"uploadFormControl",children:[Object(g.jsxs)("div",{className:"uploadIndividual",children:[Object(g.jsx)("label",{children:"Enter the Sub category"}),Object(g.jsx)("input",{disabled:f,name:"sub_cat_title",required:!0,value:P,onChange:W,type:"text",placeholder:"audio clips"})]}),Object(g.jsxs)("div",{className:"uploadIndividual",children:[Object(g.jsx)("label",{children:"Enter the Language"}),Object(g.jsx)("input",{name:"lang_title",required:!0,disabled:f,value:T,onChange:W,type:"text",placeholder:"Nepali"})]})]}),Object(g.jsxs)("div",{className:"uploadFormControl",children:[Object(g.jsxs)("div",{className:"uploadIndividual",children:[Object(g.jsx)("label",{children:"Enter the Author Name"}),Object(g.jsx)("input",{disabled:f,name:"owner_name",required:!0,value:G,onChange:W,type:"text",placeholder:"Laxmi prasad devkota"})]}),Object(g.jsxs)("div",{className:"uploadIndividual",children:[Object(g.jsx)("label",{children:"Enter Emotion"}),Object(g.jsx)("input",{disabled:f,name:"emo_title",required:!0,value:J,onChange:W,type:"text",placeholder:"lovely"})]})]}),Object(g.jsxs)("div",{className:"uploadFormControl",children:[Object(g.jsxs)("div",{className:"uploadIndividual",children:[Object(g.jsx)("label",{children:"Enter the Genre"}),Object(g.jsx)("input",{disabled:f,name:"genre_title",required:!0,value:A,onChange:W,type:"text",placeholder:"pdf"})]}),Object(g.jsxs)("div",{className:"uploadIndividual",children:[Object(g.jsx)("label",{children:"Your Personal Detail"}),Object(g.jsx)("input",{disabled:"true",required:!0,value:a,type:"text",placeholder:"munamadan the true love story"})]})]}),Object(g.jsx)("div",{className:"uploadFormControl",children:Object(g.jsxs)("div",{id:"textarea",className:"uploadIndividual",children:[Object(g.jsx)("label",{children:"Enter the Content Description"}),Object(g.jsx)("textarea",{disabled:f,name:"pro_desc",required:!0,value:H,onChange:W,placeholder:"munamadan is the great love story..."})]})}),Object(g.jsxs)("div",{className:"btnGrp_upload",children:[Object(g.jsx)("button",{disabled:f,onClick:function(){I({pro_title:"",owner_name:"",pro_desc:"",sub_cat_title:"",lang_title:"",emo_title:"",genre_title:"",referenceurl:""})},type:"button",children:"Reset"}),Object(g.jsxs)("button",{disabled:f,type:"submit",children:[f&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("img",{height:"20px",width:"20px",src:"".concat(O.a,"/hariBaba/api/uploads/Images/loading.jpg"),alt:""})," "]}),f?"Saving Changes...":"Save Changes"]})]})]})]}),Object(g.jsx)(j.a,{})]})}}}]);
//# sourceMappingURL=26.fb6598b3.chunk.js.map