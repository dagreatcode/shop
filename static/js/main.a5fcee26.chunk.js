(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{55:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),c=a.n(s),r=a(28),i=a.n(r),l=a(8),o=a(2),d=a(10),j=a(11),b=a(13),h=a(12),m=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Home Page"})})}}]),a}(s.Component),p=a(29),u=a.n(p),O=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={products:[]},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this;u.a.get("https://cors-anywhere.herokuapp.com/https://hub.dummyapis.com/products?noofRecords=10&idStarts=1001&currency=usd").then((function(t){console.log(t.data),e.setState({products:t.data})}))}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-sm-2"}),Object(n.jsx)("div",{className:"col-sm-8",children:this.state.products.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("h1",{children:[e.name," - ",e.price]}),Object(n.jsxs)("p",{children:[e.description.substring(0,100),"...Read more"]})]},e.id)}))})]})})}}]),a}(s.Component),x=a(30),v=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={emailAddress:"",password:""},e.handleInputChange=function(t){var a=t.target,n=a.name,s=a.value;e.setState(Object(x.a)({},n,s))},e.handleSubmit=function(t){t.preventDefault(),e.props.history.push("/shop")},e}return Object(j.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-sm-3"}),Object(n.jsxs)("div",{className:"col-sm-6 text-center",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-sm-12 text-center",children:Object(n.jsx)("h1",{children:"Please sign in below:"})})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-sm-12 text-center",children:Object(n.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{for:"exampleInputEmail1",children:"Email address"}),Object(n.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",name:"emailAddress",value:this.state.emailAddress,onChange:this.handleInputChange})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(n.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword1",name:"password",value:this.state.password,onChange:this.handleInputChange})]}),Object(n.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Login"})]})})})]})]})})}}]),a}(s.Component),g=(a(55),function(){return Object(n.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",id:"navbar-darkgray",children:Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsx)(l.b,{to:"/",className:"navbar-brand",children:"Bigg's Store"}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(n.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.c,{to:"/",className:"nav-link",children:"Home"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.c,{to:"/shop",className:"nav-link",children:"Shop"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.c,{to:"/login",className:"nav-link",children:"Login"})})]})})]})})});var f=function(){return Object(n.jsxs)(l.a,{children:[Object(n.jsx)(g,{}),Object(n.jsx)("h1",{children:"Hi: USER"}),Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{exact:!0,path:"/shop",component:O}),Object(n.jsx)(o.a,{exact:!0,path:"/login",component:v}),Object(n.jsx)(o.a,{exact:!0,path:"/",component:m})]})]})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,63)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};a(61);i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root")),N()}},[[62,1,2]]]);
//# sourceMappingURL=main.a5fcee26.chunk.js.map