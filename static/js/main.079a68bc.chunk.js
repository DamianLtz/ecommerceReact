(this["webpackJsonpecommerce-react"]=this["webpackJsonpecommerce-react"]||[]).push([[0],{42:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),i=c(34),n=c.n(i),l=(c(42),c(3)),r=c(2),d=c(11),o=c.n(d),j=c(6),b=c(0),m=function(e){var t=e.categoria;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(j.c,{to:"/".concat(t.name),href:"#",className:"btn shadow-none btn-drop-shadow p-0 col-lg-2 col-md-3 col-sm-4 col-xs-6 gy-4 gy-lg-0",children:[Object(b.jsx)("div",{className:"btn-categoria-container",children:Object(b.jsxs)("div",{className:"btn-categoria",children:[Object(b.jsx)("img",{src:t.image,alt:""}),Object(b.jsx)("p",{className:"d-none d-sm-block",children:t.name})]})}),Object(b.jsx)("p",{className:"d-sm-none d-block mb-4 mt-1 fw-bold",children:t.name})]})})},x="https://api.jsonbin.io/b/616cadd44a82881d6c619462/10",h=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){o.a.get(x).then((function(e){return a(e.data.listaCategorias)}))}),[]),Object(b.jsx)("section",{className:"container-lg mt-5",id:"button-category",children:Object(b.jsx)("div",{className:"row justify-content-md-start justify-content-sm-center categorias-container",children:c.map((function(e){return Object(b.jsx)(m,{categoria:e},e.id)}))})})},O=c.p+"static/media/coin.86d4f8d7.png",p=function(e){var t=e.image,c=e.oldPrice,s=e.title,a=e.description,i=e.price,n=e.id;return Object(b.jsxs)("div",{className:"col-xl-3 col-lg-4 col-md-6 gy-4",children:[Object(b.jsxs)("div",{className:"card position-static text-dark",children:[Object(b.jsx)(j.b,{className:"bg-img-container",to:"/DescripcionProducto/".concat(n),id:n,children:Object(b.jsx)("img",{src:t,alt:"",className:"img-fluid position absolute top-0 p-4"})}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)("div",{className:"d-flex align-items-center card-descuento-container",children:[Object(b.jsx)("div",{className:"card-descuento",children:Object(b.jsx)("p",{"aria-hidden":"true",children:"- 15% OFF"})}),Object(b.jsxs)("p",{className:"text-muted card-precio-anterior","aria-hidden":"true",children:[c," puntos"]})]}),Object(b.jsx)("h5",{className:"card-title",children:s}),Object(b.jsx)("p",{className:"text-muted text-truncate py-3",children:a}),Object(b.jsxs)("div",{className:"d-flex align-items-center card-coins-cost",children:[Object(b.jsx)("img",{src:O,alt:"",className:"img-fluid coin"}),Object(b.jsx)("p",{className:"card-text",children:i})]}),Object(b.jsx)("button",{className:"btn btn-comprar shadow-none",id:n,children:"Agregar al carrito"})]})]}),Object(b.jsx)(r.a,{})]})},u=function(){return Object(b.jsx)("section",{className:"main-principal",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"showbox",children:Object(b.jsx)("div",{className:"loader",children:Object(b.jsx)("svg",{className:"circular",viewBox:"25 25 50 50",children:Object(b.jsx)("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:"2",strokeMiterlimit:"10"})})})})})})},g=function(){var e=Object(r.h)().name,t=Object(s.useState)([]),c=Object(l.a)(t,2),a=c[0],i=c[1];Object(s.useEffect)((function(){o.a.get(x).then((function(e){return i(e.data.listaProductos)}))}),[]);return a.length?Object(b.jsxs)("section",{className:"container-lg mt-5",children:[Object(b.jsx)("div",{className:"d-flex align-items-center justify-content-lg-start justify-content-center px-lg-4 px-4 pb-4",id:"titulo-container",children:Object(b.jsx)("h2",{className:"text-nowrap",children:"Todos"!==e&&e?e:"Catalogo de Productos"})}),Object(b.jsx)("div",{className:"row justify-content-lg-start justify-content-md-center cards-container",id:"seccionProductos",children:e&&"Todos"!==e?function(t){return t.filter((function(t){return t.category===e})).map((function(e){return Object(b.jsx)(p,{image:e.image,oldPrice:e.oldPrice,title:e.title,description:e.description,price:e.price,id:e.id},e.id)}))}(a):a.map((function(e){return Object(b.jsx)(p,{image:e.image,oldPrice:e.oldPrice,title:e.title,description:e.description,price:e.price,id:e.id},e.id)}))})]}):Object(b.jsx)(u,{})},v=c.p+"static/media/electro.c25ab781.png",N=c.p+"static/media/electrobelleza.ac790bfc.png",f=function(){return Object(b.jsx)("section",{className:"container mt-5",children:Object(b.jsxs)("div",{className:"row justify-content-lg-between justify-content-center",children:[Object(b.jsx)("div",{className:"col-lg-6 col-md-12 col-sm-12 rectangle-container mb-lg-0 mb-3",children:Object(b.jsxs)("div",{className:"d-flex justify-content-evenly",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"fw-normal",children:"Lo Mejor en"}),Object(b.jsx)("h2",{children:"Electro"}),Object(b.jsx)("div",{children:Object(b.jsx)("a",{href:"/",className:"btn btn-mas shadow-none",children:"Ver M\xe1s"})})]}),Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:v,alt:"",className:"img-fluid img-rectangle"})})]})}),Object(b.jsx)("div",{className:"col-lg-6 col-md-12 col-sm-12 rectangle-container-sec",children:Object(b.jsxs)("div",{className:"d-flex justify-content-evenly",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"fw-normal",children:"Lo Mejor en"}),Object(b.jsx)("h2",{children:"Electrobelleza"}),Object(b.jsx)("div",{children:Object(b.jsx)("a",{href:"/",className:"btn btn-mas shadow-none",children:"Ver M\xe1s"})})]}),Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:N,alt:"",className:"img-fluid img-rectangle"})})]})})]})})},w=c.p+"static/media/envio.2cdeb718.svg",y=c.p+"static/media/pago.3aa4aa84.svg",z=c.p+"static/media/tienda.32e0e201.svg",C=function(){return Object(b.jsx)("section",{className:"container-lg mt-5",children:Object(b.jsxs)("div",{className:"row cards-envio-online justify-content-center align-items-center gap-3",children:[Object(b.jsxs)("div",{className:"col-lg-4 d-flex",children:[Object(b.jsx)("img",{src:w,alt:""}),Object(b.jsxs)("div",{className:"ps-4",children:[Object(b.jsx)("h4",{className:"pb-1",children:"Env\xedo"}),Object(b.jsx)("p",{children:"Recib\xed tu pedido en 10 d\xedas"})]})]}),Object(b.jsxs)("div",{className:"col-lg-4 d-flex",children:[Object(b.jsx)("img",{src:y,alt:""}),Object(b.jsxs)("div",{className:"ps-4",children:[Object(b.jsx)("h4",{className:"pb-1",children:"Pago seguro"}),Object(b.jsx)("p",{children:"Compra 100% seguro"})]})]}),Object(b.jsxs)("div",{className:"col-lg-4 d-flex",children:[Object(b.jsx)("img",{src:z,alt:""}),Object(b.jsxs)("div",{className:"ps-4",children:[Object(b.jsx)("h4",{className:"pb-1",children:"Retiro en tienda"}),Object(b.jsx)("p",{children:"M\xe1s de 150 sucursales en el pa\xeds"})]})]})]})})},M=(c(62),c(35)),A=c.p+"static/media/banner1.fd657695.jpg",P=c.p+"static/media/banner4.07c81d51.jpg",I=c.p+"static/media/banner6.cab0b270.jpg",S=c.p+"static/media/banner7.beca12ea.webp",k=c.p+"static/media/banner8.3b26bbd2.png",L=function(){return Object(b.jsxs)(M.Carousel,{autoPlay:!1,emulateTouch:!0,infiniteLoop:!0,showThumbs:!1,showIndicators:!1,showStatus:!1,dynamicHeight:!0,transitionTime:450,children:[Object(b.jsxs)("div",{className:"carousel-alt-item",children:[Object(b.jsx)("img",{src:A,alt:""}),Object(b.jsxs)("div",{className:"container-title-carousel",children:[Object(b.jsx)("h2",{className:"title-carousel",children:"Auriculares Razer"}),Object(b.jsx)("p",{className:"subtitle-carousel",children:"Distribuidor oficial de Razer!"})]})]}),Object(b.jsxs)("div",{className:"carousel-alt-item",children:[Object(b.jsx)("img",{src:P,alt:""}),Object(b.jsxs)("div",{className:"container-title-carousel",children:[Object(b.jsx)("h2",{className:"title-carousel",children:"Haus Laboratories"}),Object(b.jsx)("p",{className:"subtitle-carousel",children:"Maquillaje estreno en nuestra tienda!"})]})]}),Object(b.jsxs)("div",{className:"carousel-alt-item",children:[Object(b.jsx)("img",{src:I,alt:""}),Object(b.jsxs)("div",{className:"container-title-carousel",children:[Object(b.jsx)("h2",{className:"title-carousel",children:"Nuevo iPhone 12"}),Object(b.jsx)("p",{className:"subtitle-carousel",children:"S\xfaper. Mega. R\xe1pido."})]})]}),Object(b.jsxs)("div",{className:"carousel-alt-item",children:[Object(b.jsx)("img",{src:S,alt:""}),Object(b.jsxs)("div",{className:"container-title-carousel",children:[Object(b.jsx)("h2",{className:"title-carousel",children:"Nuevo Moto G100"}),Object(b.jsx)("p",{className:"subtitle-carousel",children:"El m\xe1s potente del 2021"})]})]}),Object(b.jsxs)("div",{className:"carousel-alt-item",children:[Object(b.jsx)("img",{src:k,alt:""}),Object(b.jsxs)("div",{className:"container-title-carousel",children:[Object(b.jsx)("h2",{className:"title-carousel",children:"Carolina Herrera Good Girl"}),Object(b.jsx)("p",{className:"subtitle-carousel",children:"Fragancia Importada"})]})]})]})},E=c.p+"static/media/shopping-cart.25d65fd4.svg",B=function(){var e=Object(s.useContext)(K).contadorCart;return Object(b.jsxs)("button",{className:"position-relative shop-cart-container bg-transparent border-0",children:[Object(b.jsx)("img",{src:E,alt:"",className:"shop-cart"}),e>=0?Object(b.jsx)("span",{className:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary",children:e}):null]})},R=c.p+"static/media/logo.89a8d0ca.svg",F=c.p+"static/media/search.e454275b.svg",H=function(){return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light w-100 position-fixed fixed-top",children:Object(b.jsxs)("div",{className:"container-lg",children:[Object(b.jsx)(j.c,{className:"navbar-brand",to:"/",children:Object(b.jsx)("img",{src:R,alt:"",className:"logo"})}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(b.jsx)("li",{children:Object(b.jsxs)("form",{className:"d-flex align-items-center form-style",children:[Object(b.jsx)("input",{className:"form-control me-2",type:"text",placeholder:"\xbfQu\xe9 est\xe1s buscando?","aria-label":"Search",id:"searchInput"}),Object(b.jsx)("button",{className:"me-3 border-0 bg-transparent",children:Object(b.jsx)("img",{src:F,alt:"",id:"searchIcon"})})]})})}),Object(b.jsxs)("div",{className:"cuenta--container",id:"datos-cliente-container",children:[Object(b.jsx)(j.c,{to:"/Carrito",children:Object(b.jsx)(B,{})}),Object(b.jsxs)("div",{className:"d-none align-items-center ms-3",id:"monto-container",children:[Object(b.jsx)("img",{src:O,alt:"",className:"coin"}),Object(b.jsx)("p",{id:"monto"})]}),Object(b.jsx)(j.c,{to:"inicioSesion",id:"usuario-actual",className:"fw-bold log-in",children:"Ingresar a mi cuenta"})]})]})]})})},V=function(){return Object(b.jsx)("footer",{children:Object(b.jsxs)("div",{className:"container-lg mt-5 py-5",children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-lg-4 col-md-6 col-sm-6 footer-options py-3 py-lg-0",children:[Object(b.jsx)("h4",{children:"Mi Cuenta"}),Object(b.jsxs)("ul",{id:"footer-options",children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"registro-cuenta.html",children:"Crear Cuenta"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#/",children:"Mis datos"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#/",children:"Mis canjes"})})]})]}),Object(b.jsxs)("div",{className:"col-lg-4 col-md-6 col-sm-6 footer-options py-3 py-lg-0",children:[Object(b.jsx)("h4",{children:"Ayuda"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#/",children:"Terminos y condiciones"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#/",children:"Defensa del consumidor"})})]})]}),Object(b.jsxs)("div",{className:"col-lg-4 col-md-12 col-sm-12 footer-options py-3 py-lg-0",children:[Object(b.jsx)("h4",{children:"Informaci\xf3n de la tienda"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#/",children:"Argentina"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#/",children:"Bot\xf3n de Arrepentimiento"})})]})]})]}),Object(b.jsx)("h6",{className:"text-center text-muted pt-5",children:"Proyecto CoderHouse: E-Commerce con React - Damian"})]})})},T=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("header",{children:Object(b.jsx)(H,{})}),Object(b.jsxs)("main",{className:"main-principal",children:[Object(b.jsx)(L,{}),Object(b.jsx)(h,{}),Object(b.jsxs)(r.d,{children:[Object(b.jsx)(r.b,{path:"/",element:Object(b.jsx)(g,{})}),Object(b.jsx)(r.b,{path:"/:name",element:Object(b.jsx)(g,{})})]}),Object(b.jsx)(f,{}),Object(b.jsx)(C,{})]}),Object(b.jsx)(V,{})]})},Z=c(5),D=c.p+"static/media/twitter-icon.5058ccda.svg",$=c.p+"static/media/github-icon.95d2d1e1.svg",_=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(b.jsx)("main",{className:"body-style vh-100",children:Object(b.jsx)(Z.d,{initialValues:{email:"",password:""},validate:function(e){var t={};return e.email&&/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(e.email)||(t.email="E-mail Incorrecto"),e.password&&/^.{4,12}$/.test(e.password)||(t.password="Contrase\xf1a Invalida"),t},onSubmit:function(e,t){(0,t.resetForm)(),a(!0),console.log(e),e.password&&e.email===localStorage.datosCliente&&setTimeout((function(){return window.location.href="index.html"}),450)},children:function(e){var t=e.errors;return Object(b.jsxs)(Z.c,{className:"container-form",id:"formulario",children:[Object(b.jsx)("h1",{className:"text-dark pb-2 fs-5",children:"Iniciar Sesion"}),Object(b.jsxs)("div",{className:"inputs",children:[Object(b.jsxs)("div",{className:"others-input",children:[Object(b.jsx)("label",{htmlFor:"email",children:"Email"}),Object(b.jsx)(Z.b,{type:"email",placeholder:"Ej: jperez@gmail.com",name:"email",id:"email",className:"input-correcto"}),Object(b.jsx)(Z.a,{name:"email",component:function(){return Object(b.jsxs)("div",{className:"d-flex align-items-center ps-1 pt-2",children:[Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"#dc3545",className:"bi bi-exclamation-circle",viewBox:"0 0 16 16",children:[Object(b.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(b.jsx)("path",{d:"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"})]}),Object(b.jsx)("p",{className:"ps-1 text-danger",children:t.email})]})}})]}),Object(b.jsxs)("div",{className:"others-input",children:[Object(b.jsx)("label",{htmlFor:"password",children:"Contrase\xf1a"}),Object(b.jsx)(Z.b,{type:"password",placeholder:"Ingrese su contrase\xf1a",name:"password",id:"password",className:"input-correcto"}),Object(b.jsx)(Z.a,{name:"password",component:function(){return Object(b.jsxs)("div",{className:"d-flex align-items-center ps-1 pt-2",children:[Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"#dc3545",className:"bi bi-exclamation-circle",viewBox:"0 0 16 16",children:[Object(b.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(b.jsx)("path",{d:"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"})]}),Object(b.jsx)("p",{className:"ps-1 text-danger",children:t.password})]})}})]}),Object(b.jsxs)("div",{className:"btn-box",children:[Object(b.jsxs)("div",{className:"d-none align-items-center justify-content-center pt-3",id:"formulario__invalido",children:[Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"#dc3545",className:"bi bi-exclamation-circle",viewBox:"0 0 16 16",children:[Object(b.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(b.jsx)("path",{d:"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"})]}),Object(b.jsx)("p",{className:"error-campos-vacios text-danger ms-2",children:"Credenciales Invalidas"})]}),Object(b.jsx)("p",{className:"text-center",children:'Al presionar "Iniciar Sesion" esta aceptando nuestros terminos y condiciones.'}),Object(b.jsx)("button",{id:"boton-registro",children:"Iniciar Sesion"})]})]}),Object(b.jsxs)("div",{className:"other-content",children:[Object(b.jsx)("p",{children:"o inicia sesion con: "}),Object(b.jsxs)("div",{className:"links",children:[Object(b.jsx)("a",{href:"#/","aria-disabled":"true",tabIndex:"-1",children:Object(b.jsx)("img",{src:D,alt:""})}),Object(b.jsx)("a",{href:"#/","aria-disabled":"true",tabIndex:"-1",children:Object(b.jsx)("img",{src:$,alt:""})})]})]}),Object(b.jsx)("div",{className:"pt-3",children:Object(b.jsxs)("p",{className:"text-nowrap",children:["\xbfNo tienes una cuenta? Registrate",Object(b.jsx)("span",{className:"ps-1",children:Object(b.jsx)(j.b,{to:"/registroUsuario",className:"boton-registro-aqui",children:"Aqu\xed"})})]})}),c&&Object(b.jsx)("p",{className:"text-success fw-bold pt-3",children:"Ha Iniciado Sesion."})]})}})})},q=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(b.jsx)("main",{className:"body-style vh-100",children:Object(b.jsx)(Z.d,{initialValues:{nombre:"",apellido:"",email:"",password:""},validate:function(e){var t={};return e.nombre&&/^[a-zA-Z\xc0-\xff\s]{1,40}$/.test(e.nombre)||(t.nombre="Nombre incorrecto"),e.apellido&&/^[a-zA-Z\xc0-\xff\s]{1,40}$/.test(e.apellido)||(t.apellido="Apellido Incorrecto"),e.email&&/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(e.email)||(t.email="E-mail Incorrecto"),e.password&&/^.{4,12}$/.test(e.password)||(t.password="Contrase\xf1a Invalida"),t},onSubmit:function(e,t){(0,t.resetForm)(),a(!0),console.log(e),setTimeout((function(){return window.location.href="index.html"}),450)},children:function(e){var t=e.errors;return Object(b.jsxs)(Z.c,{className:"container-form",id:"formulario",children:[Object(b.jsx)("h1",{className:"text-dark pb-2 fs-5",children:"Registrarse"}),Object(b.jsxs)("div",{className:"inputs",children:[Object(b.jsxs)("div",{className:"name-input",children:[Object(b.jsxs)("div",{className:"input-nombre",children:[Object(b.jsx)("label",{htmlFor:"nombre",children:"Nombre"}),Object(b.jsx)(Z.b,{type:"text",placeholder:"Ej: Juan",name:"nombre",id:"nombre",className:"input-correcto"}),Object(b.jsx)(Z.a,{name:"nombre",component:function(){return Object(b.jsxs)("div",{className:"d-flex justify-content-center align-items-center pt-2",children:[Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"#dc3545",className:"bi bi-exclamation-circle",viewBox:"0 0 16 16",children:[Object(b.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(b.jsx)("path",{d:"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"})]}),Object(b.jsx)("p",{className:"ps-1 text-danger text-center",children:t.nombre})]})}})]}),Object(b.jsxs)("div",{className:"input-apellido",children:[Object(b.jsx)("label",{htmlFor:"apellido",children:"Apellido"}),Object(b.jsx)(Z.b,{type:"text",placeholder:"Ej: Perez",name:"apellido",id:"apellido",className:"input-correcto"}),Object(b.jsx)(Z.a,{name:"apellido",component:function(){return Object(b.jsxs)("div",{className:"d-flex justify-content-center align-items-center pt-2",children:[Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"#dc3545",className:"bi bi-exclamation-circle",viewBox:"0 0 16 16",children:[Object(b.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(b.jsx)("path",{d:"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"})]}),Object(b.jsx)("p",{className:"ps-1 text-danger text-center",children:t.apellido})]})}})]})]}),Object(b.jsxs)("div",{className:"others-input",children:[Object(b.jsx)("label",{htmlFor:"email",children:"Email"}),Object(b.jsx)(Z.b,{type:"email",placeholder:"Ej: jperez@gmail.com",name:"email",id:"email",className:"input-correcto"}),Object(b.jsx)(Z.a,{name:"email",component:function(){return Object(b.jsxs)("div",{className:"d-flex align-items-center ps-1 pt-2",children:[Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"#dc3545",className:"bi bi-exclamation-circle",viewBox:"0 0 16 16",children:[Object(b.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(b.jsx)("path",{d:"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"})]}),Object(b.jsx)("p",{className:"ps-1 text-danger",children:t.email})]})}})]}),Object(b.jsxs)("div",{className:"others-input",children:[Object(b.jsx)("label",{htmlFor:"password",children:"Contrase\xf1a"}),Object(b.jsx)(Z.b,{type:"password",placeholder:"Ingrese su contrase\xf1a",name:"password",id:"password",className:"input-correcto"}),Object(b.jsx)(Z.a,{name:"password",component:function(){return Object(b.jsxs)("div",{className:"d-flex align-items-center ps-1 pt-2",children:[Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"#dc3545",className:"bi bi-exclamation-circle",viewBox:"0 0 16 16",children:[Object(b.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(b.jsx)("path",{d:"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"})]}),Object(b.jsx)("p",{className:"ps-1 text-danger",children:t.password})]})}})]}),Object(b.jsxs)("div",{className:"btn-box",children:[Object(b.jsxs)("div",{className:"d-none align-items-center justify-content-center pt-3",id:"formulario__invalido",children:[Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"#dc3545",className:"bi bi-exclamation-circle",viewBox:"0 0 16 16",children:[Object(b.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(b.jsx)("path",{d:"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"})]}),Object(b.jsx)("p",{className:"error-campos-vacios text-danger ms-2",children:"Por favor rellene el formulario correctamente."})]}),Object(b.jsx)("p",{className:"text-center",children:'Al presionar "Registrarse" esta aceptando nuestros terminos y condiciones.'}),Object(b.jsx)("button",{type:"submit",id:"boton-registro",children:"Registrarse"})]})]}),Object(b.jsxs)("div",{className:"other-content",children:[Object(b.jsx)("p",{children:"o registrate con: "}),Object(b.jsxs)("div",{className:"links",children:[Object(b.jsx)("a",{href:"#/","aria-disabled":"true",tabIndex:"-1",children:Object(b.jsx)("img",{src:D,alt:""})}),Object(b.jsx)("a",{href:"#/","aria-disabled":"true",tabIndex:"-1",children:Object(b.jsx)("img",{src:$,alt:""})})]})]}),c&&Object(b.jsx)("p",{className:"text-success fw-bold pt-3",children:"Registro Exitoso"})]})}})})},G=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("header",{children:Object(b.jsx)(H,{})}),Object(b.jsx)("main",{className:"main-principal",children:Object(b.jsxs)("section",{className:"container-lg",children:[Object(b.jsx)("h1",{className:"pt-5 fs-3",children:"Tu carrito"}),Object(b.jsx)("div",{className:"container-shopcart mt-5 p-lg-5 p-sm-4 p-3 g-3",id:"carritoDeCompras",children:Object(b.jsx)("div",{className:"row align-items-center justify-content-center",children:Object(b.jsxs)("div",{className:"row align-items-center justify-content-center my-3 my-lg-2 py-lg-4 py-3 box-item-carrito",id:"idProducto",children:[Object(b.jsx)("div",{className:"col-lg-2 col-md-2 col-sm-3 d-flex justify-content-center",children:Object(b.jsx)("img",{src:"imagenProducto",alt:"",className:"img-producto-carrito",id:"imgProductoCarrito"})}),Object(b.jsx)("div",{className:"col-lg-10 col-md-10 col-sm-9",children:Object(b.jsxs)("div",{className:"row align-items-center",children:[Object(b.jsxs)("div",{className:"col-lg-6 col-md-4 col-sm-12 gy-lg-0 gy-3",children:[Object(b.jsx)("h4",{className:"text-dark",children:"tituloProducto"}),Object(b.jsx)("p",{className:"text-muted pt-3",children:"descripcionProducto"})]}),Object(b.jsx)("div",{className:"col-lg-6 col-md-8 col-sm-12 gy-lg-0 gy-3",children:Object(b.jsxs)("div",{className:"d-flex justify-content-lg-evenly justify-content-center align-items-lg-center column-mobile",children:[Object(b.jsxs)("div",{className:"d-flex align-items-center container-price",children:[Object(b.jsxs)("div",{className:"d-flex align-items-center py-2 py-lg-0 order-3 order-lg-0",children:[Object(b.jsx)("img",{src:"assets/img/main/coin.png",alt:"",className:"coin"}),Object(b.jsxs)("p",{className:"text-dark fs-4 mx-2",id:"idProducto-costo",children:[" ","precioProducto * cantidadProducto"]})]}),Object(b.jsx)("p",{className:"text-muted pe-0 pe-lg-2",children:"Unidades:"}),Object(b.jsxs)("div",{className:"container-buttons py-2",children:[Object(b.jsx)("button",{className:"border border-primary p-0 bg-primary rounded-circle",id:"idProducto-minus",children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"#fff",className:"bi bi-dash",viewBox:"0 0 16 16",children:Object(b.jsx)("path",{d:"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"})})}),Object(b.jsx)("p",{className:"mx-2 px-2 py-1 border-cantidad",id:"idProducto-cantidad",children:"1"}),Object(b.jsx)("button",{className:"border border-primary p-0 bg-primary rounded-circle",id:"idProducto-add",children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"#fff",className:"bi bi-plus",viewBox:"0 0 16 16",children:Object(b.jsx)("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})})})]})]}),Object(b.jsx)("div",{children:Object(b.jsxs)("button",{className:"btn btn-danger p-1 mt-2 mt-lg-0 ms-0 ms-lg-1 w-100",id:"idProducto-delete",children:[Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"#ffffff",className:"bi bi-trash d-none d-lg-inline-block",viewBox:"0 0 16 16",children:[Object(b.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),Object(b.jsx)("path",{fillRule:"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})]}),Object(b.jsx)("p",{className:"d-block d-lg-none",children:"Eliminar"})]})})]})})]})})]})})})]})}),Object(b.jsx)(V,{})]})},J=function(e){var t=e.min,c=e.stock,a=Object(s.useState)(t),i=Object(l.a)(a,2),n=i[0],r=i[1];return Object(b.jsxs)("div",{className:"container-buttons mt-3 justify-content-center justify-content-md-start",children:[Object(b.jsx)("button",{className:"border border-primary p-0 bg-primary rounded-circle",id:"minusQuantity",onClick:function(){return r(n>t?n-1:n)},children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"#fff",className:"bi bi-dash",viewBox:"0 0 16 16",children:Object(b.jsx)("path",{d:"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"})})}),Object(b.jsx)("p",{className:"mx-2 px-2 py-1 border-cantidad border-cantidad",id:"contador",children:n}),Object(b.jsx)("button",{className:"border border-primary p-0 bg-primary rounded-circle",id:"addQuantity",onClick:function(){return r(n<c?n+1:n)},children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"#fff",className:"bi bi-plus",viewBox:"0 0 16 16",children:Object(b.jsx)("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})})})]})},Q=function(){var e=function(){return Object(b.jsx)("div",{className:"position-fixed modal-cart bg-primary",children:Object(b.jsx)("p",{className:"text-light",children:"Producto Agregado Al Carrito!"})})},t=Object(s.useState)(e()),c=Object(l.a)(t,2),a=c[0],i=c[1];return Object(b.jsxs)("div",{className:"btn-agregar-carrito",onClick:function(){return i((setTimeout((function(){i(e())}),1500),Object(b.jsx)("div",{className:"position-fixed modal-cart bg-primary modal-cart-visible",children:Object(b.jsx)("p",{className:"text-light",children:"Producto Agregado Al Carrito!"})})))},children:[Object(b.jsx)("button",{className:"d-block btn btn-primary fs-5",children:"Agregar al carrito"}),a]})},U=function(){var e=Object(r.h)().id,t=Object(s.useState)([]),c=Object(l.a)(t,2),a=c[0],i=c[1];Object(s.useEffect)((function(){o.a.get("https://api.jsonbin.io/b/616cadd44a82881d6c619462/8").then((function(e){return i(e.data.listaProductos)}))}),[]);var n=a[e];return a.length?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("header",{children:Object(b.jsx)(H,{})}),Object(b.jsx)("main",{className:"main-principal",children:Object(b.jsx)("section",{className:"container-fluid bg-principal",children:Object(b.jsxs)("div",{className:"row p-5",children:[Object(b.jsxs)("div",{className:"d-flex align-items-center mb-4 ps-3",children:[Object(b.jsx)(j.b,{to:"/",children:Object(b.jsxs)("svg",{width:"14",height:"12",viewBox:"0 0 14 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"left-arrow",children:[Object(b.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.75 6C0.75 5.58579 1.08579 5.25 1.5 5.25H12.5C12.9142 5.25 13.25 5.58579 13.25 6C13.25 6.41421 12.9142 6.75 12.5 6.75H1.5C1.08579 6.75 0.75 6.41421 0.75 6Z",fill:"currentColor"}),Object(b.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.53033 0.96967C6.82322 1.26256 6.82322 1.73744 6.53033 2.03033L2.56066 6L6.53033 9.96967C6.82322 10.2626 6.82322 10.7374 6.53033 11.0303C6.23744 11.3232 5.76256 11.3232 5.46967 11.0303L0.96967 6.53033C0.676777 6.23744 0.676777 5.76256 0.96967 5.46967L5.46967 0.96967C5.76256 0.676777 6.23744 0.676777 6.53033 0.96967Z",fill:"currentColor"})]})}),Object(b.jsx)("p",{className:"px-3",children:"Home"}),Object(b.jsx)("svg",{width:"14",height:"18",viewBox:"0 0 7 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(b.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.646447 11.3536C0.451184 11.1583 0.451184 10.8417 0.646447 10.6464L5.29289 6L0.646447 1.35355C0.451184 1.15829 0.451184 0.841708 0.646447 0.646445C0.841709 0.451183 1.15829 0.451183 1.35355 0.646445L6.35355 5.64645C6.54882 5.84171 6.54882 6.15829 6.35355 6.35355L1.35355 11.3536C1.15829 11.5488 0.841709 11.5488 0.646447 11.3536Z",fill:"currentColor"})}),Object(b.jsx)("p",{className:"ps-3 text-truncate",children:"Informaci\xf3n de ".concat(n.title)})]}),Object(b.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(b.jsx)("div",{className:"d-flex justify-content-center align-items-center background-producto",children:Object(b.jsx)("img",{src:n.image,alt:"",className:"producto p-3"})})}),Object(b.jsxs)("div",{className:"col-lg-5 col-md-5 ms-0 ms-md-5 d-flex flex-column justify-content-center",children:[Object(b.jsx)("h1",{className:"pt-4 pt-lg-0 pb-3 pb-lg-2",children:n.title}),Object(b.jsx)("p",{className:"description-truncate",children:n.longDescription}),Object(b.jsx)(J,{min:1,stock:20}),Object(b.jsxs)("div",{className:"d-flex align-items-center justify-content-center justify-content-md-start my-3",children:[Object(b.jsx)("p",{children:"Comprar por:"}),Object(b.jsx)("img",{src:O,alt:"",className:"coin mx-2"}),Object(b.jsx)("p",{children:n.price})]}),Object(b.jsx)("div",{className:"d-flex justify-content-center justify-content-md-start mb-3",children:Object(b.jsx)(Q,{})})]})]})})}),Object(b.jsx)(V,{})]}):Object(b.jsx)(u,{})},W=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(r.d,{children:[Object(b.jsxs)(r.b,{path:"/",element:Object(b.jsx)(T,{}),children:[Object(b.jsx)(r.b,{index:!0,element:Object(b.jsx)(T,{})}),Object(b.jsx)(r.b,{path:":name",element:Object(b.jsx)(g,{})}),Object(b.jsx)(r.b,{path:"/DescripcionProducto/:id",element:Object(b.jsx)(U,{})})]}),Object(b.jsx)(r.b,{path:"/inicioSesion",element:Object(b.jsx)(_,{})}),Object(b.jsx)(r.b,{path:"/registroUsuario",element:Object(b.jsx)(q,{})}),Object(b.jsx)(r.b,{path:"/Carrito",element:Object(b.jsx)(G,{})}),Object(b.jsx)(r.b,{path:"*",element:Object(b.jsx)(T,{})})]})})},K=Object(s.createContext)();var X=function(){var e=Object(s.useState)(6),t=Object(l.a)(e,2),c=t[0],i=t[1];return Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(K.Provider,{value:{contadorCart:c,setContadorCart:i},children:Object(b.jsx)(W,{})})})};n.a.render(Object(b.jsx)(j.a,{children:Object(b.jsx)(X,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.079a68bc.chunk.js.map