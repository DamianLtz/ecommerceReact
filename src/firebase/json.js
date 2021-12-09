const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDzUVWHGepsDN9r4Tw1K2yVEAEboHcunoo",
  authDomain: "ecommercereact-20d2f.firebaseapp.com",
  projectId: "ecommercereact-20d2f",
});

const db = firebase.firestore();

let Productos = [
  {
    category: "Tecno",
    image: "https://i.postimg.cc/8cHJr9t0/samsunggalaxyzfold2.png",
    description: " El número uno del mundo en plegables",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "30000",
    title: "Samsung Galaxy Z Fold",
    price: 85025,
    quantity: 1,
    stock: 40,
  },
  {
    category: "Tecno",
    image: "https://i.postimg.cc/nrZ9rpYm/motog9plus.png",
    description: "Todo lo que necesitas, en un solo lugar.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "30000",
    title: "Moto G9 Plus",
    price: 28950,
    quantity: 1,
    stock: 50,
  },
  {
    category: "Tecno",
    image: "https://i.postimg.cc/BvXTfSMQ/i-Phone-12.png",
    description:
      "El iPhone 12 Pro Max cuenta con un procesador A14 Bionic, 256 GB de almacenamiento interno y triple cámara de 12+12+12 MP.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "10000",
    title: "iPhone 12 Pro Max (256 GB)",
    price: 125000,
    quantity: 1,
    stock: 30,
  },
  {
    category: "Tecno",
    image: "https://i.postimg.cc/vHhf1gKZ/macbook-air.png",
    description: "Fotografía profesional al alcance de tu mano",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "100000",
    title: "Macbook Air",
    price: 175000,
    quantity: 1,
    stock: 20,
  },
  {
    category: "Tecno",
    image: "https://i.postimg.cc/Gp8ySMm4/notebook-asus-vivabook.png",
    description:
      "Disfrutá de la perfecta combinación de rendimiento y diseño con esta notebook Asus VivoBook",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "30000",
    title: "Notebook Asus vivabook",
    price: 119250,
    quantity: 1,
    stock: 20,
  },
  {
    category: "Electro",
    image: "https://i.postimg.cc/ZYrrSDF3/lavarropas-drean.png",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    description: "Comodidad y practicidad para tu hogar.",
    oldPrice: "30000",
    title: "Lavarropas Drean",
    price: 32000,
    quantity: 1,
    stock: 20,
  },
  {
    category: "Electro",
    image: "https://i.postimg.cc/pT5JzWF1/AC-surrey.png",
    description:
      "Este aire acondicionado frio/calor cuenta con 2750 Frigorias y es ideal para climatizar tus espacios a lo largo del año.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "30000",
    title: "Aire Acondicionado Surrey",
    price: 18950,
    quantity: 1,
    stock: 20,
  },
  {
    category: "Electro",
    image: "https://i.postimg.cc/WbvwqPbX/cocina-ariston.png",
    description:
      "Ariston proyectó cocinas capaces de garantizar siempre una cocción impecable.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "230000",
    title: "Cocina Ariston",
    price: 71125,
    quantity: 1,
    stock: 20,
  },
  {
    category: "Electro",
    image: "https://i.postimg.cc/sD49p0My/heladera-samsung.png",
    description: "Todos tus productos guardados a su temperatura ideal.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "30000",
    title: "Heladera Samsung",
    price: 22250,
    quantity: 1,
    stock: 10,
  },
  {
    category: "Electro",
    image: "https://i.postimg.cc/ht3msFcF/microondas-samsung.png",
    description: "Cocinar alimentos frescos nunca fue tan fácil",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "1200",
    title: "Microondas Samsung",
    price: 31000,
    quantity: 1,
    stock: 10,
  },
  {
    category: "Hogar",
    image: "https://i.postimg.cc/nzmqM3yy/juego-de-mesa-mas-6-sillas.png",
    description: "Juego de mesa con 6 sillas",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "30000",
    title: "Juego de mesa + 6 sillas",
    price: 26000,
    quantity: 1,
    stock: 5,
  },
  {
    category: "Hogar",
    image: "https://i.postimg.cc/HnQ0v63w/cama-2-plazas.png",
    description: "180 x 200 cm.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "30000",
    title: "Cama 2 1/2 plazas",
    price: 38450,
    quantity: 1,
    stock: 5,
  },
  {
    category: "Hogar",
    image: "https://i.postimg.cc/qqdyK80z/cuadro-moderno.png",
    description: "Simple pero Moderno",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "30000",
    title: "Cuadro Moderno",
    price: 9000,
    quantity: 1,
    stock: 65,
  },
  {
    category: "Hogar",
    image: "https://i.postimg.cc/g2rXnMRg/sillon-2-cuerpos.png",
    description: "1.40 x 0.60 cm.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "30000",
    title: "Sillón 2 cuerpos (Chenille)",
    price: 22250,
    quantity: 1,
    stock: 34,
  },
  {
    category: "Bazar",
    image: "https://i.postimg.cc/R05n91yx/set-cubiertos-24.png",
    description: "Juego de cubiertos (12 tenedores y cuchillos)",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "100000",
    title: "Set de cubiertos 12 pares.",
    price: 6000,
    quantity: 1,
    stock: 200,
  },
  {
    category: "Bazar",
    image: "https://i.postimg.cc/PrJDM5Y9/pelador-papas.png",
    description: "Pelar papas nunca habria sido tan facil.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "30000",
    title: "Pelador de papas",
    price: 750,
    quantity: 1,
    stock: 2,
  },
  {
    category: "Bazar",
    image: "https://i.postimg.cc/D0jXK9kx/luces-led.png",
    description: "Ilumina tus habitaciones como vos quieras!",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "30000",
    title: "Luces LED",
    price: 2000,
    quantity: 1,
    stock: 500,
  },
  {
    category: "Bazar",
    image: "https://i.postimg.cc/zBNWwwFF/afiladora-manual.png",
    description: "Afilar tus cuchillos ya no sera un problema.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "30000",
    title: "Afiladora Manual",
    price: 18950,
    quantity: 1,
    stock: 8,
  },
  {
    category: "Bazar",
    image: "https://i.postimg.cc/L6W1QFVX/taza-magica.png",
    description:
      "¿Cómo funciona la taza mágica? Es sensible al calor. Cuando la taza está fría se ve negra, al introducir líquido caliente en ella, va desapareciendo la capa negra gradualmente y aparece el diseño. Una vez que el líquido se enfría, la taza vuelve al color negro original",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "30000",
    title: "Taza Mágica",
    price: 1325,
    quantity: 1,
    stock: 9,
  },
  {
    category: "Bazar",
    image: "https://i.postimg.cc/MHKQNW4c/juego-toallones.png",
    description: "Juego de toallones de muchos colores",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "230000",
    title: "Juego de toallones",
    price: 1150,
    quantity: 1,
    stock: 136,
  },
  {
    category: "Beauty",
    image: "https://i.postimg.cc/gJ5pFstv/ch-perfume-good-girl.png",
    description:
      "Está inspirada por la visión única de Carolina Herrera de la dualidad de la mujer moderna, audaz, sexy, elegante, enigmática, buena y mala. Siempre forzando y traspasando los límites, la misteriosa sensualidad hace que sea una fragancia moderna y sofisticada a la vez.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "10000",
    title: "Carolina Herrera Good Girl",
    price: 18100,
    quantity: 1,
    stock: 5,
  },
  {
    category: "Beauty",
    image: "https://i.postimg.cc/rpwzqhjb/polo-blue-perfume.png",
    description:
      "El encuentro entre la frescura y la distinción. Una interpretación sofisticada y elegante del cásico Polo Blue. Polo Blue EDP es un contraste entre la burbujeante frescura de la bergamota y el cardamomo y la intensa seducción del vetiver y las maderas.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "1200",
    title: "Polo Blue",
    price: 12000,
    quantity: 1,
    stock: 4,
  },
  {
    category: "Beauty",
    image: "https://i.postimg.cc/ryBd5Ny0/perfume-black-xs.png",
    description:
      "Paco Rabanne Black XS, una fragancia floral, amaderada y afrutada, solo apta para almas rebeldes. La fusión de la exótica flor de tamarindo y frutos silvestres la convierte en una fragancia sorprendente. Su corazón de rosa eléboro le da un giro afrodisíaco. Inspirada en las luces de la noche, su fondo es cautivador y apasionado gracias a la vainilla negra.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "100000",
    title: "Paco Rabanne Black xs",
    price: 16000,
    quantity: 1,
    stock: 6,
  },
  {
    category: "Beauty",
    image: "https://i.postimg.cc/Vk1dVsCz/perfume-ch-forever-youngs.png",
    description:
      "Siéntete siempre joven con 212 Heroes.Esta fragancia innovadora es 100% vegana y viene en un atrevido envase con forma de skate, una prueba de que nada es más heroico que ser auténtico.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "30000",
    title: "C.H 212 forever youngs",
    price: 21000,
    quantity: 1,
    stock: 13,
  },
  {
    category: "Beauty",
    image: "https://i.postimg.cc/4dnGSqPf/base-maybelline.png",
    description:
      "Naked 3, nuestra paleta con 12 tonos neutros rosados nunca antes vistos, desde rosa pálido brillante, hasta negro oscuro mate con micropurpurina roja y rosa. Elegí tu acabado favorito, ente matres ultra-suaves, colores perla preciosos y metálicos relucientes.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "10000",
    title: "Paleta De Sombras Naked",
    price: 14250,
    quantity: 1,
    stock: 20,
  },
  {
    category: "Beauty",
    image: "https://i.postimg.cc/XJZJCpTk/headrush.png",
    description:
      "A blurring, soft-focus cushion matte blush + complementary reflective highlighter for buildable, lusty payoff. ",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "30000",
    title: "Blush & Highlighter duo",
    price: 15550,
    quantity: 1,
    stock: 20,
  },
  {
    category: "Beauty",
    image: "https://i.postimg.cc/YqQvRLjX/liquid-eye-liner.png",
    description:
      "Liquid Eye-lie-ner is our longwearing, flexible felt-tip eyeliner that brings any look to life.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "30000",
    title: "Eye liner Haus Laboratories",
    price: 4750,
    quantity: 1,
    stock: 20,
  },
  {
    category: "Beauty",
    image: "https://i.postimg.cc/tgvJJhmg/le-riot-lip-gloss.png",
    description:
      "This extreme high-shine gel gloss amplifies any look. Comfortable enough to not weigh you down, reflective enough to celebrate yourself with a shimmer, sparkle or true shine finish.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "30000",
    title: "Lip gloss Haus Laboratories",
    price: 6200,
    quantity: 1,
    stock: 20,
  },
  {
    category: "Beauty",
    image: "https://i.postimg.cc/J0ZzpS7y/rimel-pesta-as.png",
    description:
      "Gracias a su cepillo y su fórmula con infusión de colágeno tendrás las pestañas más colosales.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "230000",
    title: "Rimel Maybelline",
    price: 2325,
    quantity: 1,
    stock: 20,
  },
  {
    category: "Beauty",
    image: "https://i.postimg.cc/7Yr65PXS/rimel-pesta-as-waterproof.png",
    description:
      "La máscara de pestañas o el rímel es un cosmético usado para oscurecer, espesar, curvar y definir las pestañas. Este rímel logra una curva perfecta dando mayor volumen a tus pestañas ademas de ser a prueba de agua.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "30000",
    title: "Rimel Maybelline Waterpoof",
    price: 5600,
    quantity: 1,
    stock: 20,
  },
  {
    category: "Beauty",
    image: "https://i.postimg.cc/MG9xtqy3/base-maquillaje.png",
    description:
      "Base de maquillaje fluida matificante que iguala el tono y se ajusta al tipo de piel. Desvanece los poros y controla el brillo, ahora con 15 nuevos tonos.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "30000",
    title: "Base Maybelline",
    price: 3500,
    quantity: 1,
    stock: 20,
  },
  {
    category: "Beauty",
    image: "https://i.postimg.cc/qBhht5rH/lapiz-labial-x3.png",
    description: "3 labiales con colores a elección.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "1200",
    title: "Lapiz labial x3",
    price: 5000,
    quantity: 1,
    stock: 20,
  },
  {
    category: "Beauty",
    image: "https://i.postimg.cc/BZKbZP5q/secadora-revlon.png",
    description:
      "Esta secadora de Revlon cuenta con: 3 temperaturas /2 velocidades, Botón aire frio, Boquilla concentradora de aire, Filtro extraíble y Cable giratorio",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "30000",
    title: "Secadora de Cabello Revlon",
    price: 30000,
    quantity: 1,
    stock: 20,
  },
  {
    category: "Beauty",
    image: "https://i.postimg.cc/nz6LYnxb/planchita-de-pelo-gama.png",
    description:
      "Con más de 50 años de trayectoria GA.MA Italy es el principal fabricante de productos profesionales para el pelo. Esta planchita refleja el espíritu de la marca: satisfacer las exigencias y necesidades de quienes la usan y lograr resultados únicos en poco tiempo.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "20000",
    title: "Planchita de pelo Gama",
    price: 17000,
    quantity: 1,
    stock: 20,
  },
  {
    category: "Beauty",
    image: "https://i.postimg.cc/3xBd5MXm/planchita-de-pelo-remington.png",
    description:
      "Remington es una marca líder en el mercado que impulsa la innovación y ofrece un servicio excepcional a sus usuarios. La planchita, al igual que su extensa línea de productos, está creada con materiales y tecnologías de gran nivel por lo que es una excelente compañera para tu rutina de belleza",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "30000",
    title: "Planchita de pelo Remington",
    price: 18950,
    quantity: 1,
    stock: 20,
  },
  {
    category: "Beauty",
    image: "https://i.postimg.cc/jCYrC5b2/buclera-profesional.png",
    description:
      "El moldeador Dyson Airwrap Complete está diseñado para múltiples tipos y estilos de cabello. Este juego viene con barriles de 1.2 y 1.6 pulgadas para rizar y ondular el cabello, y cepillos para suavizar y dar volumen, lo que le permite secar y peinar simultáneamente. El moldeador Dyson Airwrap Complete tiene tecnología de aire Coanda que le permite rizar, ondular, suavizar y secar el cabello sin calor extremo.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "70000",
    title: "Buclera Dyson Airwrap",
    price: 50000,
    quantity: 1,
    stock: 20,
  },
  {
    category: "tiempo libre",
    image: "https://i.postimg.cc/qvmsFhc5/camara-fotos-canon.png",
    description: "Fotografía profesional al alcance de tu mano",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "100000",
    title: "Cámara de fotos Canon",
    price: 52000,
    quantity: 1,
    stock: 20,
  },
  {
    category: "Tiempo libre",
    image: "https://i.postimg.cc/t4RdDt66/guitarras.png",
    description: "Guitarra Criolla, ideal principiantes!",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "100000",
    title: "Guitarra",
    price: 40000,
    quantity: 1,
    stock: 20,
  },
  {
    category: "Tiempo libre",
    image: "https://i.postimg.cc/9f673GDJ/ps5.png",
    description:
      "Con tu consola PlayStation 5 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "30000",
    title: "Playstation 5 Black",
    price: 56270,
    quantity: 1,
    stock: 150,
  },
  {
    category: "Tiempo libre",
    image: "https://i.postimg.cc/XYhZFwk4/xbox.png",
    description:
      "Con tu consola Xbox Series tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    oldPrice: "100000",
    title: "Xbox Series X",
    price: 56270,
    quantity: 1,
    stock: 200,
  },
];

/* const Categorias = [
  {
    title: "Tecno",
    name: "Tecno",
    image: "https://i.postimg.cc/K8p2YbhH/tecnologia.png",
    id: "Tecno",
  },
  {
    title: "Electro",
    name: "Electro",
    image: "https://i.postimg.cc/kX991wyf/electro.png",
    id: "Electro",
  },
  {
    title: "Hogar",
    name: "Hogar",
    image: "https://i.postimg.cc/Sxx4qs39/hogar.png",
    id: "Hogar",
  },
  {
    title: "Bazar",
    name: "Bazar",
    image: "https://i.postimg.cc/66CtfFC8/bazar.png",
    id: "Bazar",
  },
  {
    title: "Beauty",
    name: "Beauty",
    image: "https://i.postimg.cc/vmpwWvB7/beauty.png",
    id: "Beauty",
  },
  {
    title: "Tiempo libre",
    name: "Tiempo libre",
    image: "https://i.postimg.cc/0N6qM482/tiempo-libre.png",
    id: "Tiempo-libre",
  },
  {
    title: "Catalogo De Productos",
    name: "Todos",
    image: "https://i.postimg.cc/650KDRjw/reply-all-fill.png",
    id: "Todos",
  },
]; */

Productos.forEach(function (obj) {
  db.collection("ListaProductos")
    .add({
      category: obj.category,
      image: obj.image,
      description: obj.description,
      longDescription: obj.longDescription,
      oldPrice: obj.oldPrice,
      title: obj.title,
      price: obj.price,
      quantity: obj.quantity,
      stock: obj.stock,
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});
