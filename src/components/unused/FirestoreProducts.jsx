//eslint-disable-next-line
import React, { useEffect, useState } from "react";
//eslint-disable-next-line
import {
  collection,
  //eslint-disable-next-line
  doc,
  //eslint-disable-next-line
  getDoc,
  //eslint-disable-next-line
  getDocs,
  //eslint-disable-next-line
  limit,
  addDoc,
  getFirestore,
  //eslint-disable-next-line
  query,
  //eslint-disable-next-line
  where,
} from "firebase/firestore";

const Productos = [
  {
    category: "Tecno",
    image: "https://i.postimg.cc/8cHJr9t0/samsunggalaxyzfold2.png",
    description: " El número uno del mundo en plegables",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
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
    title: "iPhone 12 Pro Max (256 GB)",
    price: 125000,
    quantity: 1,
    stock: 30,
  },
  {
    category: "Tecno",
    image: "https://i.postimg.cc/FK0vfNr7/moto-edge-20-pro.png",
    description: "Diseño moderno y elegante",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    title: "Moto Edge 20 Pro",
    price: 83550,
    quantity: 1,
    stock: 20,
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
    title: "Sillón 2 cuerpos (Chenille)",
    price: 22250,
    quantity: 1,
    stock: 34,
  },
  {
    category: "Bazar",
    image: "https://i.postimg.cc/D0jXK9kx/luces-led.png",
    description: "Ilumina tus habitaciones como vos quieras!",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    title: "Luces LED",
    price: 2000,
    quantity: 1,
    stock: 500,
  },
  {
    category: "Bazar",
    image: "https://i.postimg.cc/MHKQNW4c/juego-toallones.png",
    description: "Juego de toallones de muchos colores",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
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
    title: "Polo Blue",
    price: 12000,
    quantity: 1,
    stock: 4,
  },
  {
    category: "Beauty",
    image: "https://i.postimg.cc/Vk1dVsCz/perfume-ch-forever-youngs.png",
    description:
      "Siéntete siempre joven con 212 Heroes.Esta fragancia innovadora es 100% vegana y viene en un atrevido envase con forma de skate, una prueba de que nada es más heroico que ser auténtico.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
    title: "C.H 212 forever youngs",
    price: 21000,
    quantity: 1,
    stock: 13,
  },
  {
    category: "Beauty",
    image: "https://i.postimg.cc/XJZJCpTk/headrush.png",
    description:
      "A blurring, soft-focus cushion matte blush + complementary reflective highlighter for buildable, lusty payoff. ",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
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
    title: "Lip gloss Haus Laboratories",
    price: 6200,
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
    title: "Base Maybelline",
    price: 3500,
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
    title: "Plancha de pelo Gama",
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
    title: "Plancha de pelo Remington",
    price: 18950,
    quantity: 1,
    stock: 20,
  },
  {
    category: "tiempo libre",
    image: "https://i.postimg.cc/qvmsFhc5/camara-fotos-canon.png",
    description: "Fotografía profesional al alcance de tu mano",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error minus deserunt libero molestias dolores corporis natus illo blanditiis eligendi. Officia iste ratione perferendis error aspernatur. Eius reiciendis explicabo iusto. Veniam ex corporis, quas enim possimus qui quam consequuntur molestiae consequatur, et totam consectetur modi deserunt odio provident tempora nihil, magnam sequi beatae quia quod exercitationem odit eius id. Temporibus, aliquid nisi! Commodi magni fuga accusantium aliquid cumque architecto magnam autem sapiente accusamus dolorum saepe, ipsam perferendis temporibus iusto atque!",
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
    title: "Xbox Series X",
    price: 56270,
    quantity: 1,
    stock: 200,
  },
];

const FirestoreProducts = () => {
  //   const [products, setProducts] = useState(null);
  //   useEffect(() => {
  //     const db = getFirestore();
  //     const productsCollectionRef = collection(db, "ListaProductos");
  //     const q = query;
  //     getDocs(q).then((snapshot) => {
  //       setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc })));
  //     });
  //   });

  // Agrego los productos a Firebase
  const addItemsToFirebase = () => {
    const db = getFirestore();
    const productosCollection = collection(db, "ListaProductos");
    Productos.forEach((producto) => {
      addDoc(productosCollection, producto);
    });
  };

  // const addCategoriesToFirebase = () => {
  //   const db = getFirestore();
  //   const categoriasCollection = collection(db, "ListaCategorias");
  //   Categorias.forEach((categoria) => {
  //     addDoc(categoriasCollection, categoria);
  //   });
  // };

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between">
        <button className="btn btn-primary" onClick={addItemsToFirebase}>
          Agregar Productos a Firebase
        </button>
        {/* <button
          className="btn btn-info text-light"
          onClick={addCategoriesToFirebase}
        >
          Agregar Categorias a Firebase
        </button> */}
      </div>
    </div>
  );
};

export default FirestoreProducts;
