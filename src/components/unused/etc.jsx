/* -------------------------------- Verifica si existe la lista en el local storage al hacer "Click". -------------------------------- */

function clickRegistro({ clienteNuevo }) {
  const nuevoClienteRegistrado = clienteNuevo;

  if (
    nuevoClienteRegistrado.nombre !== "" &&
    nuevoClienteRegistrado.apellido !== "" &&
    nuevoClienteRegistrado.email !== "" &&
    nuevoClienteRegistrado.password !== ""
  ) {
    /* -------------------------------- Verifica si existe la lista, sino la Crea en el local storage en formato JSON. -------------------------------- */

    if (!nuevoClienteRegistrado) {
      crearUsuarioStorage();
    }

    cargarNuevoUsuario(nuevoClienteRegistrado);
  }
}

// function existeUsuariosStorage() {
//   let existe = false;
//   if (localStorage.getItem("Usuarios Registrados") !== null) {
//     // si NO existe la key "usuarios registrados" , la crea.
//     existe = true;
//   }
//   return existe;
// }
// -------------------------------------------------------- //

function crearUsuarioStorage() {
  localStorage.setItem("Usuarios Registrados", JSON.stringify([]));
}

/* -------------------------------- Guarda el registro del usuario en el local storage en la key "usuarios registrados". -------------------------------- */

function obtenerUsuariosStorage() {
  return JSON.parse(localStorage.getItem("Usuarios Registrados")); // obtener la lista del local storage en formato JS.
}

function cargarNuevoUsuario(usuarioACargar) {
  let datosUsuarioArray = obtenerUsuariosStorage();
  datosUsuarioArray.push(usuarioACargar); //
  guardarUsuariosEnStorage(datosUsuarioArray);
  localStorage.setItem("Usuario Logueado", JSON.stringify(usuarioACargar));
}

/* -------------------------------- Guarda la lista en el local storage con la key "Usuarios Registrados". -------------------------------- */

function guardarUsuariosEnStorage(datosDeUsuarioRecibidos) {
  localStorage.setItem(
    "Usuarios Registrados",
    JSON.stringify(datosDeUsuarioRecibidos)
  );
}
