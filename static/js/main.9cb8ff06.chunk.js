(this["webpackJsonphook-app"]=this["webpackJsonphook-app"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(11),s=n.n(r),o=n(3),i=n(5),l=n(2),j=n(0),u=function(){return Object(j.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)(i.b,{to:"/",className:"navbar-brand",children:" Multi-App "}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(j.jsxs)("div",{className:"navbar-nav",children:[Object(j.jsx)(i.c,{to:"/",className:"nav-link",children:" Home "}),Object(j.jsx)(i.c,{to:"/about",className:"nav-link",children:" About "}),Object(j.jsx)(i.c,{to:"/login",className:"nav-link",children:" Login "}),Object(j.jsx)(i.c,{to:"/quotes",className:"nav-link",children:" Quotes "}),Object(j.jsx)(i.c,{to:"/todo",className:"nav-link",children:" ToDo "}),Object(j.jsx)(i.c,{to:"/error",className:"nav-link",children:" |\u2003Forzar 404\u2003|"})]})})]})})},d=function(){return Object(j.jsxs)("div",{className:"mt2",children:[Object(j.jsx)("h1",{children:"About Section"}),Object(j.jsx)("hr",{}),Object(j.jsx)("p",{children:"Esto es un mensaje en la secci\xf3n de about."})]})},b=Object(c.createContext)(null),h=function(){var e=Object(c.useContext)(b).user;return Object(j.jsxs)("div",{className:"mt2",children:[Object(j.jsx)("h1",{children:"Home Section"}),Object(j.jsx)("hr",{}),Object(j.jsx)("p",{children:"Esto es un mensaje en la secci\xf3n de bienvenida."}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{children:"Si hay un usuario activo, se mostrar\xe1 a continuaci\xf3n, en caso contrario el Usuario activo ser\xe1 'none'. Para activar un usuario ve a la secci\xf3n 'Login'."}),Object(j.jsx)("br",{}),Object(j.jsxs)("pre",{children:["Usuario activo: ",e.name||"<none>"]})]})},O=function(){var e=Object(c.useContext)(b),t=e.user,n=e.setUser,a=function(){return 0!==Object.keys(t).length};return Object(j.jsxs)("div",{className:"mt2",children:[Object(j.jsxs)("h1",{children:["Login Section",Object(j.jsx)("button",{className:"btn ms-4 ".concat(a()?"btn btn-warning":"btn btn-primary"),onClick:a()?function(){n({})}:function(){n({id:1234,name:"In1t",email:"in1t@email.com"})},children:a()?"Logout":"Login"})]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("p",{children:[" ",a()?"Usuario correcto":"No hay datos de usuario"," "]}),Object(j.jsx)("br",{}),Object(j.jsxs)("pre",{children:["userData: ",JSON.stringify(t,null,3)]})]})},x=function(e){var t=e.data,n=e.loading,a=e.length,r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=Object(c.useState)(e),n=Object(o.a)(t,2),a=n[0],r=n[1],s=function(){r(a+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1))},i=function(){r(a-(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1))},l=function(){r(e)};return{counter:a,setCounter:r,increment:s,decrement:i,reset:l}}(0),s=r.counter,i=r.setCounter,l=r.increment,u=r.decrement,d=r.reset,b=!n&&t.length>0&&t[s]||{},h=b.author,O=b.quote;return null!==t&&(s<0&&i(a.current-1),s>a.current-1&&i(0)),Object(j.jsxs)("div",{children:[Object(j.jsxs)("h1",{children:[">> ",a.current||""," Breaking Bad Quotes [",s+1,"]"]}),Object(j.jsx)("hr",{}),n&&Object(j.jsx)("div",{className:"alert alert-info text-center",children:"Loading..."}),!n&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("blockquote",{className:"blockquote text-end",children:[Object(j.jsxs)("p",{className:"quote",children:[" ",O," "]}),Object(j.jsxs)("footer",{className:"blockquote-footer",children:[" ",h," "]})]}),Object(j.jsx)("div",{className:"btn-group me-2",children:Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(){return u()},children:"Anterior"})}),Object(j.jsx)("div",{className:"btn-group me-2",children:Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(){return d()},children:"Reset"})}),Object(j.jsx)("div",{className:"btn-group me-2",children:Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(){return l()},children:"Siguiente"})})]})]})},m=function(){var e=function(e){var t=Object(c.useRef)(!1),n=Object(c.useState)({data:null,loading:!0,error:null}),a=Object(o.a)(n,2),r=a[0],s=a[1],i=Object(c.useRef)(0);return Object(c.useEffect)((function(){return t.current=!0,function(){t.current=!1}}),[]),Object(c.useEffect)((function(){return fetch(e).then((function(e){return e.json()})).then((function(e){t.current?(i.current=e.length,s({data:e,loading:!1,error:null})):console.log("setState no llamado")})),function(){s({data:null,loading:!0,error:null})}}),[e]),{state:r,length:i}}("https://www.breakingbadapi.com/api/quotes"),t=e.state,n=e.length,a=t.data,r=t.loading;return Object(j.jsx)("div",{className:"mt-3",children:Object(j.jsx)(x,{data:a,loading:r,length:n})})},p=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(j.jsxs)("div",{className:"mt2",children:[Object(j.jsxs)("h1",{children:["React-QuotesApp",Object(j.jsx)("button",{className:"btn btn-warning ms-4",onClick:function(){a(!n)},children:"Show/Hide Quotes"})]}),n&&Object(j.jsx)(m,{})]})},g=n(7),f=n(12),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add":return[].concat(Object(f.a)(e),[t.payload]);case"delete":return e.filter((function(e){return e.id!==t.payload}));case"toggle":return e.map((function(e){return e.id===t.payload?Object(g.a)(Object(g.a)({},e),{},{done:!e.done}):e}));default:return e}},N=function(e){var t=e.todo,n=e.index,c=e.handleDeleteToDo,a=e.handleToggle,r=t.id,s=t.desc,o=t.done;return Object(j.jsxs)("li",{className:"list-group-item",children:[Object(j.jsxs)("p",{className:"listItem ".concat(o&&"complete"),onClick:function(){return a(r)},children:[n+1,". ",s," [ ",o?"Done":"Pending"," ]"]}),Object(j.jsx)("button",{className:"btn btn-danger",onClick:function(){return c(r)},children:"Borrar"})]},r)},k=function(e){var t=e.todos,n=e.handleDeleteToDo,c=e.handleToggle;return Object(j.jsx)("ul",{className:"list-group list-group-flush",children:t.map((function(e,t){return Object(j.jsx)(N,{todo:e,index:t,handleDeleteToDo:n,handleToggle:c},e.id)}))})},y=n(9),S=function(e){var t=e.handleAddTodo,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(o.a)(t,2),a=n[0],r=n[1],s=function(e){var t=e.target;r(Object(g.a)(Object(g.a)({},a),{},Object(y.a)({},t.name,t.value)))};return[a,s,function(){r(e)}]}({description:""}),a=Object(o.a)(n,3),r=a[0].description,s=a[1],i=a[2];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h4",{children:"Agregar ToDo"}),Object(j.jsx)("hr",{}),Object(j.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!(r.trim().length<3)){var n={id:(new Date).getTime(),desc:r,done:!1};t(n),i()}},children:[Object(j.jsx)("input",{type:"text",name:"description",className:"form-control",placeholder:"Escribe aqu\xed tu tarea",autoComplete:"off",value:r,onChange:s}),Object(j.jsx)("div",{className:"d-grid gap-1",children:Object(j.jsx)("button",{type:"submit",className:"btn btn-outline-primary mt-1",children:"Agregar"})})]})]})},T=function(){return JSON.parse(localStorage.getItem("todos"))||[]},C=function(){var e=Object(c.useReducer)(v,[],T),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]),Object(j.jsxs)("div",{className:"mt2",children:[Object(j.jsxs)("h1",{children:["TodoApp ( ",n.length," ",1===n.length?"Nota":"Notas"," ) "]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-7",children:Object(j.jsx)(k,{todos:n,handleDeleteToDo:function(e){return a({type:"delete",payload:e})},handleToggle:function(e){return a({type:"toggle",payload:e})}})}),Object(j.jsx)("div",{className:"col-5",children:Object(j.jsx)(S,{handleAddTodo:function(e){return a({type:"add",payload:e})}})})]}),Object(j.jsx)("div",{className:"quotesApp"})]})},D=function(){return Object(j.jsxs)("div",{className:"mt2",children:[Object(j.jsx)("h1",{children:"This page doesn't exist"}),Object(j.jsx)("hr",{}),Object(j.jsx)("a",{href:"/React-MultiApp/",children:"Homepage"})]})},A=function(){return Object(j.jsx)(i.a,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(u,{}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/",element:Object(j.jsx)(h,{})}),Object(j.jsx)(l.a,{path:"/about",element:Object(j.jsx)(d,{})}),Object(j.jsx)(l.a,{path:"/login",element:Object(j.jsx)(O,{})}),Object(j.jsx)(l.a,{path:"/quotes",element:Object(j.jsx)(p,{})}),Object(j.jsx)(l.a,{path:"/todo",element:Object(j.jsx)(C,{})}),Object(j.jsx)(l.a,{path:"*",element:Object(j.jsx)(D,{})})]})]})})},w=function(){var e=Object(c.useState)({}),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(j.jsx)(b.Provider,{value:{user:n,setUser:a},children:Object(j.jsx)(A,{})})};n(18);s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.9cb8ff06.chunk.js.map