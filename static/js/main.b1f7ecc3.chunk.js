(this["webpackJsonpecommerce-react"]=this["webpackJsonpecommerce-react"]||[]).push([[0],{57:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),i=c(48),n=c.n(i),l=(c(57),c(9)),r=c(19),d=c(10),j=c(16),o=c(13),b=c(0),m=function(e){var t=e.categoria;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(o.c,{to:"/".concat(t.name),href:"#",className:"btn shadow-none btn-drop-shadow p-0 col-lg-2 col-md-3 col-sm-4 col-xs-6 gy-4 gy-lg-0",children:[Object(b.jsx)("div",{className:"btn-categoria-container",children:Object(b.jsxs)("div",{className:"btn-categoria",children:[Object(b.jsx)("img",{src:t.image,alt:""}),Object(b.jsx)("p",{className:"d-none d-sm-block",children:t.name})]})}),Object(b.jsx)("p",{className:"d-sm-none d-block mb-4 mt-1 fw-bold",children:t.name})]})})},x=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){var e=Object(j.f)(),t=Object(j.b)(e,"ListaCategorias");Object(j.e)(t).then((function(e){a(e.docs.map((function(e){return Object(r.a)({id:e.id},e.data())})))}))}),[]),Object(b.jsx)("section",{className:"container-lg mt-5",id:"button-category",children:Object(b.jsx)("div",{className:"row justify-content-md-start justify-content-sm-center categorias-container",children:c.map((function(e){return Object(b.jsx)(m,{categoria:e},e.id)}))})})},h=c.p+"static/media/coin.86d4f8d7.png",O=function(e){var t=e.image,c=e.title,s=e.price,a=e.id;return Object(b.jsx)("article",{className:"col-xl-3 col-lg-4 col-md-6 gy-4",children:Object(b.jsxs)("div",{className:"card position-static text-dark",children:[Object(b.jsx)(o.b,{className:"bg-img-container",to:"/DescripcionProducto/".concat(a),id:a,children:Object(b.jsx)("img",{src:t,alt:"",className:"img-fluid position absolute top-0 p-4"})}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title text-truncate",children:c}),Object(b.jsx)("p",{className:"text-muted text-truncate py-3",children:"Hasta 6 Cuotas Sin Interes"}),Object(b.jsxs)("div",{className:"d-flex align-items-center card-coins-cost",children:[Object(b.jsx)("img",{src:h,alt:"",className:"img-fluid coin"}),Object(b.jsx)("p",{className:"card-text",children:s})]})]})]})})},u=function(){return Object(b.jsx)("section",{className:"main-principal",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"showbox",children:Object(b.jsx)("div",{className:"loader",children:Object(b.jsx)("svg",{className:"circular",viewBox:"25 25 50 50",children:Object(b.jsx)("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:"2",strokeMiterlimit:"10"})})})})})})},p=function(){var e=Object(l.g)().name,t=Object(s.useState)([]),c=Object(d.a)(t,2),a=c[0],i=c[1];Object(s.useEffect)((function(){var e=Object(j.f)(),t=Object(j.b)(e,"ListaProductos");Object(j.e)(t).then((function(e){i(e.docs.map((function(e){return Object(r.a)({id:e.id},e.data())})))}))}),[]);return a.length?Object(b.jsxs)("section",{className:"container-lg mt-5",children:[Object(b.jsx)("div",{className:"d-flex align-items-center justify-content-lg-start justify-content-center px-lg-4 px-4 pb-4",id:"titulo-container",children:Object(b.jsx)("h2",{className:"text-nowrap",children:"Todos"!==e&&"ecommerceReact"!==e&&e?e:"Catalogo de Productos"})}),Object(b.jsx)("div",{className:"row justify-content-lg-start justify-content-md-center cards-container",id:"seccionProductos",children:e&&"Todos"!==e&&"ecommerceReact"!==e?function(t){return t.filter((function(t){return t.category===e})).map((function(e){return Object(b.jsx)(O,{producto:e,image:e.image,oldPrice:e.oldPrice,title:e.title,description:e.description,price:e.price,id:e.id},e.id)}))}(a):a.map((function(e){return Object(b.jsx)(O,{producto:e,image:e.image,oldPrice:e.oldPrice,title:e.title,description:e.description,price:e.price,id:e.id},e.id)}))})]}):Object(b.jsx)(u,{})},g=c.p+"static/media/electro.c25ab781.png",f=c.p+"static/media/electrobelleza.ac790bfc.png",N=function(){return Object(b.jsx)("section",{className:"container mt-5",children:Object(b.jsxs)("div",{className:"row justify-content-lg-between justify-content-center",children:[Object(b.jsx)("div",{className:"col-lg-6 col-md-12 col-sm-12 rectangle-container mb-lg-0 mb-3",children:Object(b.jsxs)("div",{className:"d-flex justify-content-evenly",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"fw-normal",children:"Lo Mejor en"}),Object(b.jsx)("h2",{children:"Electro"}),Object(b.jsx)("div",{children:Object(b.jsx)("a",{href:"/",className:"btn btn-mas shadow-none",children:"Ver M\xe1s"})})]}),Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:g,alt:"",className:"img-fluid img-rectangle"})})]})}),Object(b.jsx)("div",{className:"col-lg-6 col-md-12 col-sm-12 rectangle-container-sec",children:Object(b.jsxs)("div",{className:"d-flex justify-content-evenly",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"fw-normal",children:"Lo Mejor en"}),Object(b.jsx)("h2",{children:"Electrobelleza"}),Object(b.jsx)("div",{children:Object(b.jsx)("a",{href:"/",className:"btn btn-mas shadow-none",children:"Ver M\xe1s"})})]}),Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:f,alt:"",className:"img-fluid img-rectangle"})})]})})]})})},v=c.p+"static/media/envio.2cdeb718.svg",y=c.p+"static/media/pago.3aa4aa84.svg",w=c.p+"static/media/tienda.32e0e201.svg",C=function(){return Object(b.jsx)("section",{className:"container-lg mt-5",children:Object(b.jsxs)("div",{className:"row cards-envio-online justify-content-center align-items-center gap-3",children:[Object(b.jsxs)("div",{className:"col-lg-4 d-flex",children:[Object(b.jsx)("img",{src:v,alt:""}),Object(b.jsxs)("div",{className:"ps-4",children:[Object(b.jsx)("h4",{className:"pb-1",children:"Env\xedo"}),Object(b.jsx)("p",{children:"Recib\xed tu pedido en 10 d\xedas"})]})]}),Object(b.jsxs)("div",{className:"col-lg-4 d-flex",children:[Object(b.jsx)("img",{src:y,alt:""}),Object(b.jsxs)("div",{className:"ps-4",children:[Object(b.jsx)("h4",{className:"pb-1",children:"Pago seguro"}),Object(b.jsx)("p",{children:"Compra 100% seguro"})]})]}),Object(b.jsxs)("div",{className:"col-lg-4 d-flex",children:[Object(b.jsx)("img",{src:w,alt:""}),Object(b.jsxs)("div",{className:"ps-4",children:[Object(b.jsx)("h4",{className:"pb-1",children:"Retiro en tienda"}),Object(b.jsx)("p",{children:"M\xe1s de 150 sucursales en el pa\xeds"})]})]})]})})},M=(c(61),c(49)),k=c.p+"static/media/banner1.fd657695.jpg",z=c.p+"static/media/banner4.07c81d51.jpg",A=c.p+"static/media/banner6.cab0b270.jpg",I=c.p+"static/media/banner7.beca12ea.webp",L=c.p+"static/media/banner10.9751f149.png",P=function(){return Object(b.jsxs)(M.Carousel,{autoPlay:!0,emulateTouch:!0,infiniteLoop:!0,showThumbs:!1,showIndicators:!1,showStatus:!1,dynamicHeight:!0,transitionTime:450,children:[Object(b.jsxs)("div",{className:"carousel-alt-item",children:[Object(b.jsx)("img",{src:L,alt:""}),Object(b.jsxs)("div",{className:"container-title-carousel",children:[Object(b.jsx)("h2",{className:"title-carousel",children:"Nuevo Moto Edge 20 Pro"}),Object(b.jsx)("p",{className:"subtitle-carousel",children:"Dise\xf1o moderno y elegante."})]})]}),Object(b.jsxs)("div",{className:"carousel-alt-item",children:[Object(b.jsx)("img",{src:z,alt:""}),Object(b.jsxs)("div",{className:"container-title-carousel",children:[Object(b.jsx)("h2",{className:"title-carousel",children:"Haus Laboratories"}),Object(b.jsx)("p",{className:"subtitle-carousel",children:"Maquillaje estreno en nuestra tienda!"})]})]}),Object(b.jsxs)("div",{className:"carousel-alt-item",children:[Object(b.jsx)("img",{src:A,alt:""}),Object(b.jsxs)("div",{className:"container-title-carousel",children:[Object(b.jsx)("h2",{className:"title-carousel",children:"Nuevo iPhone 12"}),Object(b.jsx)("p",{className:"subtitle-carousel",children:"S\xfaper. Mega. R\xe1pido."})]})]}),Object(b.jsxs)("div",{className:"carousel-alt-item",children:[Object(b.jsx)("img",{src:I,alt:""}),Object(b.jsxs)("div",{className:"container-title-carousel",children:[Object(b.jsx)("h2",{className:"title-carousel",children:"Nuevo Moto G100"}),Object(b.jsx)("p",{className:"subtitle-carousel",children:"El m\xe1s potente del 2021"})]})]}),Object(b.jsxs)("div",{className:"carousel-alt-item",children:[Object(b.jsx)("img",{src:k,alt:""}),Object(b.jsxs)("div",{className:"container-title-carousel",children:[Object(b.jsx)("h2",{className:"title-carousel",children:"Auriculares Razer"}),Object(b.jsx)("p",{className:"subtitle-carousel",children:"Distribuidor oficial de Razer"})]})]})]})},E=c(18),S=Object(s.createContext)(),q=function(){return Object(s.useContext)(S)},R=function(e){var t=e.children,c=Object(s.useState)([]),a=Object(d.a)(c,2),i=a[0],n=a[1],l=function(e){return i.filter((function(t){return t.id!==e}))},j=function(e){return i.find((function(t){return t.id===e}))};return Object(b.jsx)(S.Provider,{value:{cart:i,setCart:n,addItem:function(e,t,c){if(e.quantity>=c)return!1;var s=j(e.id);if(s)return n([].concat(Object(E.a)(l(e.id)),[Object(r.a)(Object(r.a)({},s),{},{quantity:s.quantity+t})]));n([].concat(Object(E.a)(i),[Object(r.a)(Object(r.a)({},e),{},{quantity:t,order:i.length})]))},minusItem:function(e,t){var c=j(e.id);return 1!==c.quantity&&(c?n([].concat(Object(E.a)(l(e.id)),[Object(r.a)(Object(r.a)({},c),{},{quantity:c.quantity-t,price:c.price/t})])):void n([].concat(Object(E.a)(i),[e])))},removeDuplicateItem:l,removeItem:function(e){var t=i.filter((function(t){return t.id!==e}));return n(Object(E.a)(t))},clear:function(){n([])}},displayName:"Cart",children:t})},F=c.p+"static/media/shopping-cart.25d65fd4.svg",B=function(){var e=Object(s.useContext)(S).cart;return Object(b.jsxs)("div",{className:"d-flex align-items-center",children:[Object(b.jsxs)("button",{className:"position-relative shop-cart-container bg-transparent border-0",children:[Object(b.jsx)("img",{src:F,alt:"",className:"shop-cart"}),e.length>0?Object(b.jsx)("span",{className:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary",children:e.length}):null]}),Object(b.jsx)("p",{className:"fw-bold log-in",children:"Ir al Carrito"})]})},D=c.p+"static/media/logo.89a8d0ca.svg",H=function(){return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light w-100 position-fixed fixed-top",children:Object(b.jsxs)("div",{className:"container-lg",children:[Object(b.jsx)(o.c,{className:"navbar-brand",to:"/",children:Object(b.jsx)("img",{src:D,alt:"",className:"logo"})}),Object(b.jsx)("div",{className:"cuenta--container",children:Object(b.jsx)(o.c,{to:"/Carrito",children:Object(b.jsx)(B,{})})})]})})},T=function(){return Object(b.jsx)("footer",{children:Object(b.jsxs)("div",{className:"container-lg mt-5 py-5",children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-lg-4 col-md-6 col-sm-6 footer-options py-3 py-lg-0",children:[Object(b.jsx)("h4",{children:"Mi Cuenta"}),Object(b.jsxs)("ul",{id:"footer-options",children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"registro-cuenta.html",children:"Crear Cuenta"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#/",children:"Mis datos"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#/",children:"Mis canjes"})})]})]}),Object(b.jsxs)("div",{className:"col-lg-4 col-md-6 col-sm-6 footer-options py-3 py-lg-0",children:[Object(b.jsx)("h4",{children:"Ayuda"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#/",children:"Terminos y condiciones"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#/",children:"Defensa del consumidor"})})]})]}),Object(b.jsxs)("div",{className:"col-lg-4 col-md-12 col-sm-12 footer-options py-3 py-lg-0",children:[Object(b.jsx)("h4",{children:"Informaci\xf3n de la tienda"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#/",children:"Argentina"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#/",children:"Bot\xf3n de Arrepentimiento"})})]})]})]}),Object(b.jsx)("h6",{className:"text-center text-muted pt-5",children:"Proyecto CoderHouse: E-Commerce con React - Damian"})]})})},Z=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("header",{children:Object(b.jsx)(H,{})}),Object(b.jsxs)("main",{className:"main-principal",children:[Object(b.jsx)(P,{}),Object(b.jsx)(x,{}),Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/",element:Object(b.jsx)(p,{})}),Object(b.jsx)(l.a,{path:"/:name",element:Object(b.jsx)(p,{})}),Object(b.jsx)(l.a,{path:"*",element:Object(b.jsx)(p,{})})]}),Object(b.jsx)(N,{}),Object(b.jsx)(C,{})]}),Object(b.jsx)(T,{})]})},V=c.p+"static/media/add.e7e53503.svg",$=c.p+"static/media/minus.a633d3b7.svg",G=c.p+"static/media/trash.0e372ae3.svg",J=function(e){var t=e.producto,c=e.image,s=e.title,a=e.description,i=e.price,n=e.id,l=e.quantity,r=e.stock,d=q(),j=d.addItem,o=d.minusItem,m=d.removeItem;return Object(b.jsxs)("div",{className:"row align-items-center justify-content-center my-3 my-lg-2 py-lg-4 py-3 box-item-carrito",children:[Object(b.jsx)("div",{className:"col-lg-2 col-md-2 col-sm-3 d-flex justify-content-center",children:Object(b.jsx)("img",{src:c,alt:"",className:"img-producto-carrito"})}),Object(b.jsx)("div",{className:"col-lg-10 col-md-10 col-sm-9",children:Object(b.jsxs)("div",{className:"row align-items-center",children:[Object(b.jsxs)("div",{className:"col-lg-6 col-md-4 col-sm-12 gy-lg-0 gy-3",children:[Object(b.jsx)("h4",{className:"text-dark",children:s}),Object(b.jsx)("p",{className:"text-muted pt-3",children:a})]}),Object(b.jsx)("div",{className:"col-lg-6 col-md-8 col-sm-12 gy-lg-0 gy-3",children:Object(b.jsxs)("div",{className:"d-flex justify-content-lg-evenly justify-content-center align-items-lg-center column-mobile",children:[Object(b.jsxs)("div",{className:"d-flex align-items-center container-price",children:[Object(b.jsxs)("div",{className:"d-flex align-items-center py-2 py-lg-0 order-3 order-lg-0",children:[Object(b.jsx)("img",{src:h,alt:"",className:"coin"}),Object(b.jsx)("p",{className:"text-dark fs-4 mx-1 mx-xl-2",children:i*l})]}),Object(b.jsx)("p",{className:"text-muted pe-0 pe-lg-1",children:"Unidades:"}),Object(b.jsxs)("div",{className:"container-buttons py-2",children:[Object(b.jsx)("button",{className:"border border-primary p-0 bg-primary rounded-circle",onClick:function(){o(t,1)},children:Object(b.jsx)("img",{src:$,alt:"restar"})}),Object(b.jsx)("p",{className:"mx-2 px-2 py-1 border-cantidad",children:l}),Object(b.jsx)("button",{className:"border border-primary p-0 bg-primary rounded-circle",onClick:function(){j(t,1,r)},children:Object(b.jsx)("img",{src:V,alt:"sumar"})})]})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{className:"btn btn-danger p-1 mt-2 mt-lg-0 ms-0 ms-lg-1 w-100 d-lg-block d-none",onClick:function(){m(n)},children:Object(b.jsx)("img",{src:G,alt:"",className:"coin"})}),Object(b.jsx)("button",{className:"btn btn-danger p-1 mt-2 mt-lg-0 ms-0 ms-lg-1 w-100 d-block d-lg-none",onClick:function(){m(n)},children:"Eliminar"})]})]})})]})})]})},U=c(6),K=function(e){var t=e.total,c=Object(s.useContext)(S).cart;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"pt-3",children:Object(b.jsxs)("div",{className:"d-flex align-items-center justify-content-end",children:[Object(b.jsxs)("div",{className:"d-flex align-items-center",children:[Object(b.jsx)("h4",{className:"fw-light me-3",children:"Total: ".concat(function(e){var t,c=0,s=Object(U.a)(e);try{for(s.s();!(t=s.n()).done;){var a=t.value;c+=a.price*a.quantity}}catch(i){s.e(i)}finally{s.f()}return c}(c))}),Object(b.jsx)("img",{src:h,alt:"",className:"coin me-2"}),Object(b.jsx)("h4",{className:"fw-light me-3",id:"total",children:t})]}),Object(b.jsx)(o.b,{to:"/Checkout",className:"btn btn-primary",children:"Finalizar Compra"})]})})})},W=function(){return Object(b.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center col-lg-12",children:[Object(b.jsx)("h1",{children:"Ups! Parece que tu carrito esta vac\xedo"}),Object(b.jsx)("h2",{className:"pt-5",children:"Agrega primero productos a tu carrito para verlos aqu\xed."}),Object(b.jsx)(o.b,{to:"/",className:"fs-4 pt-5",children:"Volver al catalogo"})]})},X=function(){var e=Object(s.useContext)(S).cart,t=Object(s.useState)([]),c=Object(d.a)(t,2),a=c[0],i=c[1];return Object(s.useEffect)((function(){var t=e.sort((function(e,t){return e.order-t.order}));i(t)}),[e]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("header",{children:Object(b.jsx)(H,{})}),Object(b.jsx)("main",{className:"main-principal",children:Object(b.jsxs)("section",{className:"container-lg",children:[Object(b.jsx)("h1",{className:"pt-5 fs-3",children:"Tu carrito"}),Object(b.jsxs)("div",{className:"container-shopcart mt-5 p-lg-5 p-sm-4 p-3 g-3",children:[a&&a!==[]?a.map((function(e){return Object(b.jsx)(J,{producto:e,id:e.id,image:e.image,title:e.title,description:e.description,price:e.price,stock:e.stock,quantity:e.quantity},e.id)})):Object(b.jsx)(W,{}),0!==e.length?Object(b.jsx)(K,{}):null]})]})}),Object(b.jsx)(T,{})]})},_=function(e){var t=e.contador,c=e.setContador,s=e.stock;return Object(b.jsxs)("div",{className:"container-buttons mt-3 justify-content-center justify-content-md-start",children:[Object(b.jsx)("button",{className:"border border-primary p-0 bg-primary rounded-circle",onClick:function(){c(t>1?t-1:t)},children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"#fff",className:"bi bi-dash",viewBox:"0 0 16 16",children:Object(b.jsx)("path",{d:"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"})})}),Object(b.jsx)("p",{className:"mx-2 px-2 py-1 border-cantidad border-cantidad",children:t}),Object(b.jsx)("button",{className:"border border-primary p-0 bg-primary rounded-circle",onClick:function(){c(t<s?t+1:t)},children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"#fff",className:"bi bi-plus",viewBox:"0 0 16 16",children:Object(b.jsx)("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})})})]})},Q=function(e){var t=e.producto,c=Object(s.useState)(1),a=Object(d.a)(c,2),i=a[0],n=a[1],l=q().addItem;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(_,{contador:i,setContador:n,stock:t.stock}),Object(b.jsxs)("div",{className:"d-flex align-items-center justify-content-center justify-content-md-start my-3",children:[Object(b.jsx)("p",{children:"Comprar por:"}),Object(b.jsx)("img",{src:h,alt:"",className:"coin mx-2"}),Object(b.jsx)("p",{children:t.price})]}),Object(b.jsxs)("div",{className:"d-flex justify-content-center justify-content-md-start mb-3",children:[Object(b.jsx)("button",{type:"button",className:"btn btn-primary fs-5","data-bs-toggle":"modal","data-bs-target":"#exampleModal",onClick:function(){l(t,i),n(1)},children:"Agregar al carrito"}),Object(b.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(b.jsx)("div",{className:"modal-dialog",children:Object(b.jsxs)("div",{className:"modal-content",children:[Object(b.jsxs)("div",{className:"modal-header",children:[Object(b.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Producto agregado al carrito!"}),Object(b.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(b.jsx)("div",{className:"modal-body",children:'Seleccione una opci\xf3n para continuar o presione "X".'}),Object(b.jsxs)("div",{className:"modal-footer",children:[Object(b.jsx)(o.b,{to:"/",children:Object(b.jsx)("button",{type:"button",className:"btn btn-primary","data-bs-dismiss":"modal",children:"Seguir comprando"})}),Object(b.jsx)(o.b,{to:"/Carrito",children:Object(b.jsx)("button",{type:"button",className:"btn btn-success","data-bs-dismiss":"modal",children:"Ir Al Carrito"})})]})]})})})]})]})},Y=function(){var e=Object(l.g)().id,t=Object(s.useState)([]),c=Object(d.a)(t,2),a=c[0],i=c[1];return Object(s.useEffect)((function(){var t=Object(j.f)(),c=Object(j.c)(t,"ListaProductos",e);Object(j.d)(c).then((function(e){e.exists()&&i(Object(r.a)(Object(r.a)({},e.data()),{},{id:e.id}))}))}),[e]),Object.keys(a).length?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("header",{children:Object(b.jsx)(H,{})}),Object(b.jsx)("main",{className:"main-principal",children:Object(b.jsx)("section",{className:"container-fluid bg-principal",children:Object(b.jsxs)("div",{className:"row p-5",children:[Object(b.jsxs)("div",{className:"d-flex align-items-center mb-4 ps-3",children:[Object(b.jsx)(o.b,{to:"/",children:Object(b.jsxs)("svg",{width:"14",height:"12",viewBox:"0 0 14 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"left-arrow",children:[Object(b.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.75 6C0.75 5.58579 1.08579 5.25 1.5 5.25H12.5C12.9142 5.25 13.25 5.58579 13.25 6C13.25 6.41421 12.9142 6.75 12.5 6.75H1.5C1.08579 6.75 0.75 6.41421 0.75 6Z",fill:"currentColor"}),Object(b.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.53033 0.96967C6.82322 1.26256 6.82322 1.73744 6.53033 2.03033L2.56066 6L6.53033 9.96967C6.82322 10.2626 6.82322 10.7374 6.53033 11.0303C6.23744 11.3232 5.76256 11.3232 5.46967 11.0303L0.96967 6.53033C0.676777 6.23744 0.676777 5.76256 0.96967 5.46967L5.46967 0.96967C5.76256 0.676777 6.23744 0.676777 6.53033 0.96967Z",fill:"currentColor"})]})}),Object(b.jsx)("p",{className:"px-3",children:"Home"}),Object(b.jsx)("svg",{width:"14",height:"18",viewBox:"0 0 7 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(b.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.646447 11.3536C0.451184 11.1583 0.451184 10.8417 0.646447 10.6464L5.29289 6L0.646447 1.35355C0.451184 1.15829 0.451184 0.841708 0.646447 0.646445C0.841709 0.451183 1.15829 0.451183 1.35355 0.646445L6.35355 5.64645C6.54882 5.84171 6.54882 6.15829 6.35355 6.35355L1.35355 11.3536C1.15829 11.5488 0.841709 11.5488 0.646447 11.3536Z",fill:"currentColor"})}),Object(b.jsx)("p",{className:"ps-3 text-truncate",children:"Informaci\xf3n de ".concat(a.title)})]}),Object(b.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(b.jsx)("div",{className:"d-flex justify-content-center align-items-center background-producto",children:Object(b.jsx)("img",{src:a.image,alt:"",className:"producto p-3"})})}),Object(b.jsxs)("div",{className:"col-lg-5 col-md-5 ms-0 ms-md-5 d-flex flex-column justify-content-center",children:[Object(b.jsx)("h1",{className:"pt-4 pt-lg-0 pb-3 pb-lg-2",children:a.title}),Object(b.jsx)("p",{className:"description-truncate",children:a.longDescription}),Object(b.jsx)(Q,{producto:a})]})]})})}),Object(b.jsx)(T,{})]}):Object(b.jsx)(u,{})},ee=c(23),te=function(){var e=Object(s.useState)(!1),t=Object(d.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)([]),n=Object(d.a)(i,2),l=n[0],r=n[1],m=Object(s.useState)(null),x=Object(d.a)(m,2),h=x[0],O=x[1],u=Object(s.useContext)(S),p=u.cart,g=u.setCart,f=Object(s.useCallback)((function(){var e=Object(j.f)(),t=Object(j.b)(e,"Orders");Object(j.a)(t,{cart:p,compradorActual:l}).then((function(e){var t=e.id;O(t)}))}),[p,l]);return Object(s.useEffect)((function(){if(c)return f()}),[c,f]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(b.jsx)("div",{className:"modal-dialog",children:Object(b.jsx)("div",{className:"modal-content",children:!0===c?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"modal-header",children:Object(b.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Muchas Gracias por su compra!"})}),Object(b.jsxs)("div",{className:"modal-body",children:[Object(b.jsxs)("p",{children:["Su n\xfamero de orden es: ",h]}),Object(b.jsx)("p",{className:"pt-3",children:"En su casilla de e-mail recibira m\xe1s detalles de la compra"})]}),Object(b.jsx)("div",{className:"modal-footer",children:Object(b.jsx)(o.b,{to:"/",children:Object(b.jsx)("button",{type:"button",className:"btn btn-primary","data-bs-dismiss":"modal",onClick:function(){g([])},children:"Volver al catalogo"})})})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"modal-header",children:[Object(b.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Ha Ocurrido un error en la compra"}),Object(b.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(b.jsxs)("div",{className:"modal-body",children:[Object(b.jsx)("p",{children:"Su pedido no ha podido ser procesado debido a un error en los datos ingresados."}),Object(b.jsx)("p",{className:"pt-3",children:"Por favor verifique los datos ingresados."})]}),Object(b.jsx)("div",{className:"modal-footer",children:Object(b.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Cerrar"})})]})})})}),Object(b.jsx)("header",{children:Object(b.jsx)(H,{})}),Object(b.jsx)("main",{className:"main-principal",children:Object(b.jsx)("section",{className:"container-lg",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-12 order-2 order-md-0",children:Object(b.jsx)("div",{className:"d-flex",children:Object(b.jsx)(ee.d,{initialValues:{nombre:"",apellido:"",email:"",password:""},validate:function(e){var t={};return e.nombre&&/^[a-zA-Z\xc0-\xff\s]{1,40}$/.test(e.nombre)||(t.nombre="Nombre incorrecto"),e.apellido&&/^[a-zA-Z\xc0-\xff\s]{1,40}$/.test(e.apellido)||(t.apellido="Apellido Incorrecto"),e.email&&/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(e.email)||(t.email="E-mail Incorrecto"),e.password&&/^.{4,12}$/.test(e.password)||(t.password="Contrase\xf1a Invalida"),t},onSubmit:function(e){r(e),a(!0)},children:function(e){var t=e.errors;return Object(b.jsxs)(ee.c,{className:"container-form",children:[Object(b.jsx)("h1",{className:"text-dark pb-2 fs-5",children:"Registrarse"}),Object(b.jsxs)("div",{className:"inputs",children:[Object(b.jsxs)("div",{className:"name-input",children:[Object(b.jsxs)("div",{className:"input-nombre",children:[Object(b.jsx)("label",{htmlFor:"nombre",children:"Nombre"}),Object(b.jsx)(ee.b,{type:"text",placeholder:"Ej: Juan",name:"nombre",id:"nombre",className:"input-correcto"}),Object(b.jsx)(ee.a,{name:"nombre",component:function(){return Object(b.jsxs)("div",{className:"d-flex justify-content-center align-items-center pt-2",children:[Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"#dc3545",className:"bi bi-exclamation-circle",viewBox:"0 0 16 16",children:[Object(b.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(b.jsx)("path",{d:"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"})]}),Object(b.jsx)("p",{className:"ps-1 text-danger text-center",children:t.nombre})]})}})]}),Object(b.jsxs)("div",{className:"input-apellido",children:[Object(b.jsx)("label",{htmlFor:"apellido",children:"Apellido"}),Object(b.jsx)(ee.b,{type:"text",placeholder:"Ej: Perez",name:"apellido",className:"input-correcto"}),Object(b.jsx)(ee.a,{name:"apellido",component:function(){return Object(b.jsxs)("div",{className:"d-flex justify-content-center align-items-center pt-2",children:[Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"#dc3545",className:"bi bi-exclamation-circle",viewBox:"0 0 16 16",children:[Object(b.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(b.jsx)("path",{d:"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"})]}),Object(b.jsx)("p",{className:"ps-1 text-danger text-center",children:t.apellido})]})}})]})]}),Object(b.jsxs)("div",{className:"others-input",children:[Object(b.jsx)("label",{htmlFor:"email",children:"Email"}),Object(b.jsx)(ee.b,{type:"email",placeholder:"Ej: jperez@gmail.com",name:"email",className:"input-correcto"}),Object(b.jsx)(ee.a,{name:"email",component:function(){return Object(b.jsxs)("div",{className:"d-flex align-items-center ps-1 pt-2",children:[Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"#dc3545",className:"bi bi-exclamation-circle",viewBox:"0 0 16 16",children:[Object(b.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(b.jsx)("path",{d:"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"})]}),Object(b.jsx)("p",{className:"ps-1 text-danger",children:t.email})]})}})]}),Object(b.jsxs)("div",{className:"others-input",children:[Object(b.jsx)("label",{htmlFor:"password",children:"Contrase\xf1a"}),Object(b.jsx)(ee.b,{type:"password",placeholder:"Ingrese su contrase\xf1a",name:"password",className:"input-correcto"}),Object(b.jsx)(ee.a,{name:"password",component:function(){return Object(b.jsxs)("div",{className:"d-flex align-items-center ps-1 pt-2",children:[Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"#dc3545",className:"bi bi-exclamation-circle",viewBox:"0 0 16 16",children:[Object(b.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(b.jsx)("path",{d:"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"})]}),Object(b.jsx)("p",{className:"ps-1 text-danger",children:t.password})]})}})]}),Object(b.jsx)("div",{className:"btn-box",children:Object(b.jsx)("button",{type:"submit",className:"btn btn-primary mt-3","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:"Pagar"})})]})]})}})})}),Object(b.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-12 mb-3 mb-md-0",children:Object(b.jsxs)("div",{className:"d-flex flex-column align-items-center align-items-md-start",children:[Object(b.jsx)("h1",{children:"Resumen de Compra:"}),Object(b.jsxs)("p",{className:"fs-3 pt-3",children:["Cantidad de Productos:",Object(b.jsx)("span",{className:"fs-3 ps-2 fw-bold text-primary",children:p.length})]}),Object(b.jsxs)("p",{className:"fs-3 pt-3",children:["Precio Total:",Object(b.jsx)("span",{className:"fs-3 fw-bold text-primary ps-2",children:"$ ".concat(function(e){var t,c=0,s=Object(U.a)(e);try{for(s.s();!(t=s.n()).done;){var a=t.value;c+=a.price*a.quantity}}catch(i){s.e(i)}finally{s.f()}return c}(p))})]})]})})]})})}),Object(b.jsx)(T,{})]})},ce=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/",element:Object(b.jsx)(Z,{}),children:Object(b.jsx)(l.a,{path:":name",element:Object(b.jsx)(p,{})})}),Object(b.jsx)(l.a,{path:"/DescripcionProducto/:id",element:Object(b.jsx)(Y,{})}),Object(b.jsx)(l.a,{path:"/Carrito",element:Object(b.jsx)(X,{})}),Object(b.jsx)(l.a,{path:"/Checkout",element:Object(b.jsx)(te,{})})]})})};var se=function(){return Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(R,{children:Object(b.jsx)(ce,{})})})},ae=c(52);Object(ae.a)({apiKey:"AIzaSyDzUVWHGepsDN9r4Tw1K2yVEAEboHcunoo",authDomain:"ecommercereact-20d2f.firebaseapp.com",projectId:"ecommercereact-20d2f",storageBucket:"ecommercereact-20d2f.appspot.com",messagingSenderId:"137746285977",appId:"1:137746285977:web:aa338d518b277bba5f3f08"}),n.a.render(Object(b.jsx)(o.a,{children:Object(b.jsx)(se,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.b1f7ecc3.chunk.js.map