const ListaObjetos = [
  { nombre: "Juan", apellido: "perez", edad: 25 },
  { nombre: "maria", apellido: "suarez", edad: 30 },
  { nombre: "Agustin", apellido: "Fernandez", edad: 21 }
];

// const perez = "perez"

// const ListaFilter = (apellido) => {
//    const ListaNueva = ListaObjetos.filter((element) => element.apellido !== apellido)
//     console.log(ListaNueva)
// }

// ListaFilter(perez)

const ListaObjetosNueva = {...ListaObjetos, nombre: "Pablo", apellido: "Fernandez", edad: 36}

console.log(ListaObjetosNueva)

// const dog = {
//   name: "Lucas",
//   age: 7,
//   breed: "cocker"
// }
// const dogOwner = { ...dog, name: "Juan", breed: "cocker spaniel"}

// console.log(dogOwner)