(this["webpackJsonpaloy-suite"]=this["webpackJsonpaloy-suite"]||[]).push([[0],{102:function(e,t,a){},127:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(11),c=a.n(r),s=(a(102),a(16)),o=a(21),i=a(162),l=a(158),u=a(163),j=a(160),d=a(85),b=a(161),m=a(80),p=a.n(m),O=a(157),g=a(18),h=a(79),f=a.n(h),x=a(156),v=a(171),C=a(159),w=a(172),y=a(168),N=a(169),k=a(78),S=a.n(k),E=a(22),T=a(36),I=a.n(T),P=a(56),A=a(57),R=a.n(A),M="SET_USER",B="SET_ERROR",F="CLEAR_ERROR_MESSAGES",L="SET_INITIAL_STATE",_=a(2);function D(){return Object(_.jsxs)(d.a,{variant:"body2",color:"textSecondary",align:"center",children:["ALOY \xa9 ",Object(_.jsx)(x.a,{color:"inherit",href:"https://material-ui.com/",children:"IT-SCHOOL"})," ",(new Date).getFullYear(),"."]})}var z=Object(O.a)((function(e){return{paper:{marginTop:e.spacing(5),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,1)},cancelContainer:{position:"absolute",right:"1px"}}}));function W(e){var t=e.isLoginClick,a=z(),r=Object(E.b)(),c=Object(n.useState)(!1),o=Object(s.a)(c,2),i=o[0],u=o[1],m=Object(n.useState)(""),p=Object(s.a)(m,2),O=p[0],h=p[1],x=Object(n.useState)(""),k=Object(s.a)(x,2),T=k[0],A=k[1],L=Object(E.c)((function(e){return e.userReducer})),W=L.errorMessages,U=function(){q({isErrorName:!1,errorNameMessage:"",isErrorPassword:!1,errorPasswordMessage:""}),u(!1),h(""),A(""),setTimeout((function(){r({type:F})}),100)};L.isAuth&&i&&U();var Y=Object(n.useState)({isErrorName:!1,errorNameMessage:"",isErrorPassword:!1,errorPasswordMessage:""}),G=Object(s.a)(Y,2),J=G[0],q=G[1];return Object(n.useEffect)((function(){q({isErrorName:!1,errorNameMessage:"",isErrorPassword:!1,errorPasswordMessage:""}),null!==W&&W.forEach((function(e){if("email"===e.field){var t="\u041f\u043e\u043c\u0438\u043b\u043a\u0430";t="Please enter your Email"===e.error?"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430 \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u043e\u0454 \u0406\u043c\u044f":"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430 \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0435 \u0406\u043c\u044f",q((function(e){return Object(g.a)(Object(g.a)({},e),{},{isErrorName:!0,errorNameMessage:t})}))}else if("password"===e.field){var a="\u041f\u043e\u043c\u0438\u043b\u043a\u0430";"Enter your password"===e.error&&(a="\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430 \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u0456\u0439 \u043f\u0440\u0430\u043e\u043b\u044c"),q((function(e){return Object(g.a)(Object(g.a)({},e),{},{isErrorPassword:!0,errorPasswordMessage:a})}))}}))}),[W]),console.log(W),Object(n.useEffect)((function(){t&&u(!0)}),[t]),Object(_.jsx)(v.a,{open:i,onClose:U,children:Object(_.jsxs)(l.a,{component:"main",maxWidth:"xs",children:[Object(_.jsx)(C.a,{}),Object(_.jsx)("div",{className:a.cancelContainer,children:Object(_.jsx)(j.a,{onClick:U,color:"inherit",children:Object(_.jsx)(S.a,{})})}),Object(_.jsxs)("div",{className:a.paper,children:[Object(_.jsx)(w.a,{className:a.avatar,children:Object(_.jsx)(f.a,{})}),Object(_.jsx)(d.a,{component:"h1",variant:"h5",children:"\xa0\u0412\u0445\u0456\u0434"}),Object(_.jsxs)("div",{className:a.form,children:[Object(_.jsx)(y.a,{error:J.isErrorName,helperText:J.errorNameMessage,onChange:function(e){return h(e.target.value)},variant:"outlined",margin:"normal",fullWidth:!0,type:"name",id:"name",label:"\u0406\u043c\u044f \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430",name:"name",autoComplete:"name",autoFocus:!0}),Object(_.jsx)(y.a,{error:J.isErrorPassword,helperText:J.errorPasswordMessage,onChange:function(e){return A(e.target.value)},variant:"outlined",margin:"normal",fullWidth:!0,name:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",id:"password",autoComplete:"current-password"}),Object(_.jsx)(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,onClick:function(){r(function(e,t){return function(){var a=Object(P.a)(I.a.mark((function a(n){var r,c;return I.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,R.a.post("https://social-network.samuraijs.com/api/1.0/auth/login",{email:e,password:t},{withCredentials:!0});case 2:0===(r=a.sent).data.resultCode?(c=r.data.data.userId,n({type:M,userId:c})):n({type:B,errorMessages:0===r.data.fieldsErrors.length?r.data.messages:r.data.fieldsErrors});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(O,T))},children:"\u0423\u0432\u0456\u0439\u0442\u0438"})]}),null!==W&&"string"===typeof W[0]&&Object(_.jsx)("p",{style:{color:"red"},children:"\u041d\u0435 \u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0435 \u0406\u043c\u044f \u0430\u0431\u043e \u041f\u0430\u0440\u043e\u043b\u044c"})]}),Object(_.jsx)(N.a,{mt:8,children:Object(_.jsx)(D,{})})]})})}var U=Object(O.a)((function(e){return{root:{flexGrow:1},menuButton:Object(o.a)({marginRight:e.spacing(1)},e.breakpoints.down(600),{marginRight:e.spacing(0)}),title:Object(o.a)({flexGrow:1},e.breakpoints.down(600),{fontSize:17})}})),Y=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),r=a[0],c=a[1],o=Object(E.c)((function(e){return e.userReducer})),m=o.isAuth,O=o.userId,g=Object(E.b)(),h=U();return Object(_.jsx)(i.a,{position:"fixed",children:Object(_.jsx)(l.a,{fixed:!0,children:Object(_.jsxs)(u.a,{children:[Object(_.jsx)(j.a,{edge:"start",className:h.menuButton,color:"inherit","aria-label":"menu",children:Object(_.jsx)(p.a,{})}),Object(_.jsx)(d.a,{variant:"h6",className:h.title,children:"ALOY School"}),"USER ID: ".concat(O),m?Object(_.jsx)(b.a,{onClick:function(){g(function(){var e=Object(P.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.delete("https://social-network.samuraijs.com/api/1.0/auth/login",{withCredentials:!0});case 2:0===e.sent.data.resultCode&&t({type:L});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},color:"secondary",variant:"contained",children:"\u0412\u0438\u0439\u0442\u0438"}):Object(_.jsx)(b.a,{onClick:function(){c(!0),setTimeout((function(){c(!1)}),1)},color:"secondary",variant:"contained",children:"\u0423\u0432\u0456\u0439\u0442\u0438"}),Object(_.jsx)(W,{isLoginClick:r})]})})})},G=a(130),J=a(167),q=Object(O.a)((function(e){return{mainContent:{paddingTop:e.spacing(15),paddingBottom:e.spacing(15),marginTop:e.spacing(0),backgroundColor:"#ecffff"}}})),H=function(e){var t=q();return Object(_.jsx)("div",{className:t.mainContent,children:Object(_.jsx)(l.a,{maxWidth:"sm",children:Object(_.jsx)(d.a,{variant:"h6",align:"center",children:"\u0428\u043a\u043e\u043b\u0430 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0443\u0432\u0430\u043d\u043d\u044f ALOY - \u0454\u0434\u0438\u043d\u0430, \u0449\u043e \u043c\u0430\u0454 \u0432\u0456\u0434\u0433\u0443\u043a\u0438 \u0432\u0456\u0434 \u0440\u043e\u0431\u043e\u0442\u043e\u0434\u0430\u0432\u0446\u0456\u0432, \u044f\u043a\u0456 \u0432\u0445\u043e\u0434\u044f\u0442\u044c \u0434\u043e \u0441\u043f\u0438\u0441\u043a\u0443 \u043d\u0430\u0439\u043a\u0440\u0430\u0449\u0438\u0445 \u043a\u043e\u043c\u043f\u0430\u043d\u0456\u0439 DOU.UA. \u0410 \u0432\u0438\u043f\u0443\u0441\u043a\u043d\u0438\u043a\u0438 \u043a\u0443\u0440\u0441\u0456\u0432 \u0437 \u0456\u043d\u043a\u0443\u0431\u0430\u0442\u043e\u0440\u043e\u043c \u043e\u0442\u0440\u0438\u043c\u0443\u044e\u0442\u044c \u0433\u0430\u0440\u0430\u043d\u0442\u0456\u0457 \u043f\u0440\u0430\u0446\u0435\u0432\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u0432\u043f\u0440\u043e\u0434\u043e\u0432\u0436 6 \u043c\u0456\u0441\u044f\u0446\u0456\u0432 \u043f\u0456\u0441\u043b\u044f \u0443\u0441\u043f\u0456\u0448\u043d\u043e\u0433\u043e \u0437\u0430\u043a\u0456\u043d\u0447\u0435\u043d\u043d\u044f \u043d\u0430\u0432\u0447\u0430\u043d\u043d\u044f. \u0410\u043b\u0435 \u0437\u0430\u0437\u0432\u0438\u0447\u0430\u0439 \u0457\u0445 \u0437\u0430\u0431\u0438\u0440\u0430\u044e\u0442\u044c \u0434\u043e \u0441\u0435\u0431\u0435 \u043d\u0430\u0448\u0456 \u043e\u0444\u0456\u0446\u0456\u0439\u043d\u0456 \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u0438 \u0449\u0435 \u0434\u043e \u0437\u0430\u043a\u0456\u043d\u0447\u0435\u043d\u043d\u044f \u043a\u0443\u0440\u0441\u0443."})})})},K=a(81),Q=a.n(K),X=a(164),Z=a(165),V=a(166),$=a(55);Object($.b)("user_zEy8p0j09MP5PrOKrcSFZ");var ee=function(e){var t=e.isPressBtn,a=Object(n.useState)(!1),r=Object(s.a)(a,2),c=r[0],o=r[1],i=Object(n.useState)(""),l=Object(s.a)(i,2),u=l[0],j=l[1],d=Object(n.useState)(""),m=Object(s.a)(d,2),p=m[0],O=m[1];Object(n.useEffect)((function(){t&&o(!0)}),[t]);var g=function(){!function(e,t){var a={subject:"\u0417\u0410\u0426\u0406\u041a\u0410\u0412\u041b\u0415\u041d\u0410 \u041e\u0421\u041e\u0411\u0410 \u0412 \u041d\u0410\u0412\u0427\u0410\u041d\u041d\u0406!!!",name:e,phone:t};$.a.send("service_n0g00nn","template_q1nnvyj",a).then((function(e){console.log("SUCCESS!",e.status,e.text)}),(function(e){console.log("FAILED...",e)}))}(u,p),o(!1),j(""),O("")};return Object(_.jsxs)(v.a,{open:c,onClose:g,"aria-labelledby":"form-dialog-title",children:[Object(_.jsx)(X.a,{id:"form-dialog-title",children:"\u0417\u0430\u043f\u043e\u0432\u043d\u0456\u0442\u044c \u0444\u043e\u0440\u043c\u0443 \u0456 \u043c\u0438 \u0432\u0430\u043c \u0437\u0430\u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443\u0454\u043c\u043e!"}),Object(_.jsxs)(Z.a,{children:[Object(_.jsx)(y.a,{autoFocus:!0,margin:"dense",id:"name",label:"\u0406\u043c\u044f",type:"text",fullWidth:!0,onChange:function(e){return j(e.target.value)},value:u,variant:"outlined"}),Object(_.jsx)(y.a,{margin:"dense",id:"phone",label:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",type:"text",variant:"outlined",fullWidth:!0,onChange:function(e){return O(e.target.value)},value:p})]}),Object(_.jsxs)(V.a,{children:[Object(_.jsx)(b.a,{onClick:g,color:"secondary",children:"\u0417\u0430\u043a\u0440\u0438\u0442\u0438"}),Object(_.jsx)(b.a,{onClick:g,color:"primary",children:"\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438"})]})]})},te=Object(O.a)((function(e){return{mainContent:Object(o.a)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"relative",color:e.palette.common.white,backgroundImage:"url(https://istefan.ro/img/hero/web-developer-newsletter-coder-stefan-iordache.jpg)",backgroundRepeat:"no-repet",backgroundSize:"cover",backgroundPosition:"center",paddingTop:e.spacing(20),paddingBottom:e.spacing(20)},e.breakpoints.down(600),{flexDirection:"column",paddingTop:e.spacing(10),paddingBottom:e.spacing(10)}),typography:Object(o.a)({backdropFilter:"blur(30px)",borderRadius:"10px",display:"flex",justifyContent:"center",fontSize:"4rem",backgroundColor:"rgba(0,0,30,0.5)",marginBottom:e.spacing(15)},e.breakpoints.down(600),{fontSize:"2.3rem",marginBottom:e.spacing(10)}),callContainer:{display:"flex",justifyContent:"center"},callIconContainer:{padding:"7%",backgroundColor:"#00e676",borderRadius:"50%","&:hover":{backgroundColor:"#f50057"}},callIcon:{width:50,height:50,color:"white"}}})),ae=function(e){var t=te(),a=Object(n.useState)(!1),r=Object(s.a)(a,2),c=r[0],o=r[1];return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("div",{className:t.mainContent,children:[Object(_.jsx)(l.a,{maxWidth:"sm",children:Object(_.jsx)(d.a,{className:t.typography,children:"\u0417\u0432\u044f\u0437\u0430\u0442\u0438\u0441\u044c \u0437 \u043d\u0430\u043c\u0438"})}),Object(_.jsxs)(l.a,{maxWidth:"sm",className:t.callContainer,children:[Object(_.jsx)(j.a,{onClick:function(){o(!0),setTimeout((function(){o(!1)}),1)},className:t.callIconContainer,children:Object(_.jsx)(Q.a,{className:t.callIcon})}),Object(_.jsx)(ee,{isPressBtn:c})]})]})})},ne=Object(O.a)((function(e){return{main:{position:"relative",color:e.palette.common.white,backgroundImage:"url(https://dsca.schoolspeak.com/Data/Communities/95610001/Postings/37_Academic/1/junior_high_3.jpg)",backgroundRepeat:"no-repet",backgroundSize:"cover",backgroundPosition:"center"},mainPosts:{position:"relative",padding:e.spacing(3),marginTop:e.spacing(30),backdropFilter:"blur(3px)",backgroundColor:"rgba(0,0,30,0.5)",borderRadius:"10px",marginBottom:e.spacing(4)}}})),re=function(e){var t=ne();return Object(_.jsxs)("main",{children:[Object(_.jsx)(G.a,{className:t.main,children:Object(_.jsx)(l.a,{fixed:!0,children:Object(_.jsx)(J.a,{container:!0,children:Object(_.jsx)(J.a,{item:!0,md:6,children:Object(_.jsxs)("div",{className:t.mainPosts,children:[Object(_.jsx)(d.a,{variant:"h3",color:"inherit",gutterBottom:!0,children:"ALOY IT - SCHOOL"}),Object(_.jsx)(d.a,{variant:"h6",color:"initial",paragraph:!0,children:"\u0417 ALOY SCHOOL \u0442\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u0454\u0448 \u0432\u0438\u0441\u043e\u043a\u043e\u043e\u043f\u043b\u0430\u0447\u0443\u0432\u0430\u043d\u0443 \u0440\u043e\u0431\u043e\u0442\u0443 \u0441\u0432\u043e\u0454\u0457 \u043c\u0440\u0456\u0457. \u041c\u0438 \u0433\u043e\u0442\u0443\u0454\u043c\u043e \u0432\u0438\u0441\u043e\u043a\u043e\u043a\u043b\u0430\u0441\u043d\u0438\u0445 \u0406\u0422-\u0441\u043f\u0435\u0446\u0456\u0430\u043b\u0456\u0441\u0442\u0456\u0432"}),Object(_.jsx)(b.a,{variant:"contained",color:"secondary",children:"\u0414\u0456\u0437\u043d\u0430\u0442\u0456\u0441\u044c \u0431\u0456\u043b\u044c\u0448\u0435"})]})})})})}),Object(_.jsx)(H,{}),Object(_.jsx)(ae,{})]})},ce=a(61),se=a.n(ce),oe=a(82),ie=a.n(oe),le=a(83),ue=a.n(le),je=Object(O.a)((function(e){return{footer:{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDPgxAfT8c3b8JKjue4Fp3pOfIAW-qUpeg24zw0X3xJNxr7t14mJzRhbp371KyQsfv0G0&usqp=CAU)",backgroundPosition:"center",paddingTop:e.spacing(5),paddingBottom:e.spacing(2)},wrapper:Object(o.a)({display:"flex"},e.breakpoints.down(600),{flexDirection:"column"}),footerText:{display:"flex",justifyContent:"center",alignItems:"center",color:"white",marginBottom:"15px"},icon:{marginRight:"15px"},footerTitle:{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"2.3rem",color:"white",marginBottom:e.spacing(5)},addressText:{color:"white",fontSize:"1rem"}}})),de=function(e){var t=je();return Object(_.jsxs)("footer",{className:t.footer,children:[Object(_.jsxs)(l.a,{className:t.wrapper,children:[Object(_.jsxs)(l.a,{className:t.contactsContainer,children:[Object(_.jsx)(d.a,{className:t.footerTitle,children:"\u041d\u0430\u0448\u0456 \u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"}),Object(_.jsxs)(d.a,{className:t.footerText,children:[Object(_.jsx)(se.a,{className:t.icon}),"\u0404\u043d\u044c\u043a\u043e \u041e\u043b\u0435\u0433 +38(063)-981-8413"]}),Object(_.jsxs)(d.a,{className:t.footerText,children:[Object(_.jsx)(se.a,{className:t.icon})," \u041b\u043e\u0441\u044c \u0410\u043d\u0434\u0440\u0456\u0439 +38(093)-674-73-76"]})]}),Object(_.jsxs)(l.a,{className:t.contactsContainer,children:[Object(_.jsx)(d.a,{className:t.footerTitle,children:"\u041d\u0430\u0448\u0430 \u0430\u0434\u0440\u0435\u0441\u0441\u0430"}),Object(_.jsxs)(d.a,{className:t.footerText,children:[Object(_.jsx)(ie.a,{className:t.icon}),"programm_scholl_le@ukr.net"]}),Object(_.jsxs)(d.a,{className:t.footerText,children:[Object(_.jsx)(ue.a,{className:t.icon}),"\u0416\u0438\u0442\u043e\u043c\u0438\u0440\u0441\u044c\u043a\u0430 \u043e\u0431\u043b. \u043c. \u041c\u0430\u043b\u0438\u043d"]})]})]}),Object(_.jsx)(d.a,{align:"center",style:{color:"white",marginTop:"20px"},children:"2021"})]})},be=function(e){var t=Object(E.b)();return Object(n.useEffect)((function(){t(function(){var e=Object(P.a)(I.a.mark((function e(t){var a,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("https://social-network.samuraijs.com/api/1.0//auth/me",{withCredentials:!0});case 2:0===(a=e.sent).data.resultCode&&(n=a.data.data.id,t({type:M,userId:n}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[t]),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(Y,{}),Object(_.jsx)(re,{}),Object(_.jsx)(de,{})]})};var me=function(){return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(be,{})})},pe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,175)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))},Oe=a(58),ge={userId:null,userName:null,userImage:null,errorMessages:null,isAuth:!1},he=a(84),fe=Object(Oe.b)({userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(g.a)(Object(g.a)({},e),{},{isAuth:!0,errorMessages:null,userId:t.userId});case B:return Object(g.a)(Object(g.a)({},e),{},{errorMessages:t.errorMessages,isAuth:!1});case F:return Object(g.a)(Object(g.a)({},e),{},{errorMessages:null});case L:return ge;default:return e}}}),xe=Object(Oe.c)(fe,Object(Oe.a)(he.a));c.a.render(Object(_.jsx)(E.a,{store:xe,children:Object(_.jsx)(me,{})}),document.getElementById("root")),pe()}},[[127,1,2]]]);
//# sourceMappingURL=main.0ef0e3cc.chunk.js.map