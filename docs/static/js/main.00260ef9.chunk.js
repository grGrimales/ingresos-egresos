(this.webpackJsonppresupuesto=this.webpackJsonppresupuesto||[]).push([[0],{13:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s(6),r=s.n(c),n=(s(13),s(7)),u=s(2),j=function(e,t){return e/4>t?"alert alert-danger":e/2>t?"alert alert-warning":"alert alert-success"},l=s(0),o=function(e){var t=e.presupuesto,s=e.restante;return Object(l.jsxs)(a.Fragment,{children:[Object(l.jsxs)("div",{className:"alert alert-primary",children:["Presupuesto: $ ",t]}),";",Object(l.jsxs)("div",{className:j(t,s),children:["Restante: $ ",s]})]})},i=function(e){var t=e.mensaje;return Object(l.jsx)("p",{className:"alert alert-danger error",children:t})},b=s(8),d=function(e){var t=e.setGasto,s=e.setCrearGasto,c=Object(a.useState)(""),r=Object(u.a)(c,2),n=r[0],j=r[1],o=Object(a.useState)(0),d=Object(u.a)(o,2),O=d[0],p=d[1],m=Object(a.useState)(!1),h=Object(u.a)(m,2),x=h[0],f=h[1];return Object(l.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),O<1||isNaN(O)||""===n.trim())f(!0);else{var a={nombre:n,cantidad:O,id:Object(b.a)()};t(a),s(!0),j(""),p(0)}},children:[Object(l.jsx)("h2",{children:"Agrega tus gastos aqu\xed"}),x?Object(l.jsx)(i,{mensaje:"Ambos campos son obligatorios o Presupuesto incorrecto"}):null,Object(l.jsxs)("div",{className:"campo",children:[Object(l.jsx)("label",{children:"Nombre Gasto"}),Object(l.jsx)("input",{type:"text",className:"u-full-width",placeholder:"Ej. transporte",value:n,onChange:function(e){return j(e.target.value)}})]}),Object(l.jsxs)("div",{className:"campo",children:[Object(l.jsx)("label",{children:"Cantidad Gasto"}),Object(l.jsx)("input",{type:"number",className:"u-full-width",placeholder:"Ej. 300",value:O,onChange:function(e){return p(parseInt(e.target.value,10)||"")}})]}),Object(l.jsx)("input",{type:"submit",className:"u-full-width button-primary",value:"Agregar gastos"})]})},O=function(e){var t=e.gasto;return Object(l.jsx)("li",{className:"gastos",children:Object(l.jsxs)("p",{children:[t.nombre,Object(l.jsxs)("span",{className:"gasto",children:["$ ",t.cantidad]})]})})},p=function(e){var t=e.gastos;return Object(l.jsxs)("div",{className:"gastos-realizados",children:[Object(l.jsx)("h2",{children:"Listado"}),t.map((function(e){return Object(l.jsx)(O,{gasto:e},e.id)}))]})},m=function(e){var t=e.setPresupuesto,s=e.setRestante,c=e.setMostrarPregunta,r=Object(a.useState)(0),n=Object(u.a)(r,2),j=n[0],o=n[1],b=Object(a.useState)(!1),d=Object(u.a)(b,2),O=d[0],p=d[1];return Object(l.jsxs)(a.Fragment,{children:[Object(l.jsx)("h2",{children:"Coloca tu presupuesto"}),O?Object(l.jsx)(i,{mensaje:"El monto no es v\xe1lido"}):null,Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j<1||isNaN(j)?p(!0):(p(!1),t(j),s(j),c(!1))},children:[Object(l.jsx)("input",{type:"number",className:"u-full-width",placeholder:"coloca tu presupuesto",onChange:function(e){o(parseInt(e.target.value))}}),Object(l.jsx)("input",{type:"submit",className:"button-primary u-full-width",value:"Definir Presupuesto"})]})]})};var h=function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),s=t[0],c=t[1],r=Object(a.useState)(0),j=Object(u.a)(r,2),i=j[0],b=j[1],O=Object(a.useState)(!0),h=Object(u.a)(O,2),x=h[0],f=h[1],v=Object(a.useState)([]),g=Object(u.a)(v,2),N=g[0],S=g[1],w=Object(a.useState)({}),y=Object(u.a)(w,2),C=y[0],G=y[1],P=Object(a.useState)(!1),E=Object(u.a)(P,2),A=E[0],D=E[1];return Object(a.useEffect)((function(){A&&S([].concat(Object(n.a)(N),[C]));var e=i-C.cantidad;b(e),D(!1)}),[C,A,N,i]),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("header",{children:[Object(l.jsx)("h1",{children:"Gasto Semanal"}),Object(l.jsx)("div",{className:"contenido-principal contenido",children:x?Object(l.jsx)(m,{setPresupuesto:c,setRestante:b,setMostrarPregunta:f}):Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"one-half column",children:Object(l.jsx)(d,{setGasto:G,setCrearGasto:D})}),Object(l.jsxs)("div",{className:"one-half column",children:[Object(l.jsx)(p,{gastos:N}),Object(l.jsx)(o,{presupuesto:s,restante:i})]})]})})]})})};r.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.00260ef9.chunk.js.map