(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[18],{109:function(e,t,a){"use strict";var s=a(7),i=a(3),n=a(8),r=a(23),c=a(111),o=a(20),l=a(25),d=(a(48),a(110),a(17)),u=a(2),b=function(){Object(n.g)();var e=Object(i.useState)(!1),t=Object(s.a)(e,2),a=t[0],b=t[1],j=Object(i.useContext)(o.a).userData,m=j.username,h=j.email,p=Object(i.useState)(""),f=Object(s.a)(p,2),v=f[0],O=f[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("footer",{children:[Object(u.jsx)(l.a,{}),Object(u.jsxs)("div",{className:"content",children:[Object(u.jsxs)("div",{className:"left box",children:[Object(u.jsxs)("div",{className:"upper",children:[Object(u.jsx)("div",{className:"topic",children:" Suryaghat Library"}),Object(u.jsx)("p",{children:"Suryaghat Library is a popular non profit organization established with the motive of providing the free online book, Audio and Videos service."})]}),Object(u.jsxs)("div",{className:"lower",children:[Object(u.jsx)("div",{className:"topic",children:"Contact us"}),Object(u.jsxs)("div",{className:"phone cncttxt",children:[Object(u.jsx)("i",{className:"fas fa-phone-volume"}),"+977-9840767766"]}),Object(u.jsxs)("div",{className:"email cncttxt",children:[Object(u.jsx)("i",{className:"fas fa-envelope"}),"haribabalibraryofficial45.np@gmail.com"]})]})]}),Object(u.jsxs)("div",{className:"middle box",children:[Object(u.jsx)("div",{className:"topic",children:"Quiks Links"}),[{list:"Home",url:"/"},{list:"About",url:"/about"},{list:"Contents",url:"/contents"},{list:"Store",url:"/store"},{list:"Gallery",url:"/store/gallery"}].map((function(e,t){var a=e.url,s=e.list;return Object(u.jsx)("div",{children:Object(u.jsx)(r.c,{to:a,children:s})})}))]}),Object(u.jsxs)("div",{className:"right box",children:[Object(u.jsx)("div",{className:"topic",children:"Contact Us"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m&&h?(b(!0),c.a.sendForm("service_q0aucvt","template_x4l4dfg",e.target,"user_94oKkPNNBsvla5Je7kex6").then((function(){setTimeout((function(){l.b.success("Meessage Sent Successfully!"),b(!1),O("")}),1e3)}),(function(){setTimeout((function(){l.b.error("Failed sending message"),b(!1)}),1e3)}))):(b(!0),setTimeout((function(){l.b.info("Please Login to Send message"),b(!1)}),1e3))},children:[Object(u.jsx)("textarea",{value:v,name:"message",required:!0,placeholder:"Leave a message...",onChange:function(e){return O(e.target.value)}}),Object(u.jsx)("input",{type:"hidden",value:m,name:"username"}),Object(u.jsx)("input",{type:"hidden",value:h,name:"useremail"}),Object(u.jsxs)("button",{disabled:a,type:"submit",style:{background:a?"grey":"",cursor:a?"not-allowed":"pointer"},children:[a&&Object(u.jsx)("img",{height:"20px",width:"20px",src:"".concat(d.a,"/hariBaba/api/uploads/Images/loading.jpg")}),"\xa0 \xa0",a?"Sending..":"Send"]})]}),Object(u.jsxs)("div",{className:"media-icons",children:[Object(u.jsx)("a",{href:"https://www.facebook.com/haribabalibrary/",target:"_blank",children:Object(u.jsx)("i",{className:"fab fa-facebook-f"})}),Object(u.jsx)("a",{href:"#",target:"_blank",children:Object(u.jsx)("i",{className:"fab fa-twitter"})}),Object(u.jsx)("a",{href:"#",target:"_blank",children:Object(u.jsx)("i",{className:"fab fa-linkedin-in"})})]})]})]}),Object(u.jsx)("div",{className:"bottom",children:Object(u.jsxs)("p",{className:"cpyrght",children:["Copyright \xa9 ",(new Date).getFullYear().toString()," All right reserved"]})})]})})};t.a=Object(i.memo)(b)},110:function(e,t,a){},111:function(e,t,a){"use strict";var s={_origin:"https://api.emailjs.com"},i=function(e,t,a){if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};var n=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.status=t.status,this.text=t.responseText},r=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(i,r){var c=new XMLHttpRequest;c.addEventListener("load",(function(e){var t=e.target,a=new n(t);200===a.status||"OK"===a.text?i(a):r(a)})),c.addEventListener("error",(function(e){var t=e.target;r(new n(t))})),c.open("POST",s._origin+e,!0),Object.keys(a).forEach((function(e){c.setRequestHeader(e,a[e])})),c.send(t)}))};t.a={init:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://api.emailjs.com";s._userID=e,s._origin=t},send:function(e,t,a,n){var c=n||s._userID;i(c,e,t);var o={lib_version:"3.2.0",user_id:c,service_id:e,template_id:t,template_params:a};return r("/api/v1.0/email/send",JSON.stringify(o),{"Content-type":"application/json"})},sendForm:function(e,t,a,n){var c=n||s._userID,o=function(e){var t;if(!(t="string"===typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t}(a);i(c,e,t);var l=new FormData(o);return l.append("lib_version","3.2.0"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",c),r("/api/v1.0/email/send-form",l)}}},185:function(e,t,a){"use strict";a.r(t);var s=a(36),i=a(42),n=a(7),r=a(3),c=a(26),o=a.n(c),l=a(22),d=a.n(l),u=a(8),b=a(25),j=(a(48),a(109)),m=a(13),h=a(2);t.default=function(){var e=Object(u.g)();d.a.get("__tcphblad__")&&e.push("/route/haribabalibrary/admin/dashboard");var t=Object(r.useState)({email:"",password:""}),a=Object(n.a)(t,2),c=a[0],l=a[1],p=c.email,f=c.password,v=function(e){var t=e.target,a=t.value,n=t.name;l(Object(i.a)(Object(i.a)({},c),{},Object(s.a)({},n,a)))};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("form",{onSubmit:function(e){e.preventDefault(),m.a.post("/hariBaba/api/admin/adminauth",{email:p,password:f}).then((function(e){200===e.status&&(d.a.set("__tcphblad__",e.data.id,{expires:1}),window.location.reload())})).catch((function(e){(404===e.response.status||400===e.response.status)&&b.b.error(e.response.data.message)}))},children:Object(h.jsx)("div",{className:o.a.loginWrapper,children:Object(h.jsxs)("div",{className:o.a.loginBox,children:[Object(h.jsx)("span",{children:"Dashboard login"}),Object(h.jsxs)("div",{className:o.a.formControl,children:[Object(h.jsx)("label",{children:"Email"}),Object(h.jsx)("input",{name:"email",value:c.email,onChange:v,placeholder:"Enter email",type:"email",required:!0})]}),Object(h.jsxs)("div",{className:o.a.formControl,children:[Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("input",{name:"password",value:c.password,onChange:v,placeholder:"Enter password",type:"password",required:!0})]}),Object(h.jsx)("div",{className:o.a.btnGroup,children:Object(h.jsx)("button",{type:"submit",children:"Sign Up"})})]})})}),Object(h.jsx)(j.a,{})]})}}}]);
//# sourceMappingURL=18.2c5d55e0.chunk.js.map