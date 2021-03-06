import ImgReact from "../public/img/react.png";
import ImgRedux from "../public/img/redux.png";
import ImgNext from "../public/img/nextjs.png";
import ImgSql from "../public/img/sql.png";
import ImgGrapqhl from "../public/img/graphql.png";
import ImgGit from "../public/img/git.png";

export const conocimientos = [
  { id: 1, imagen: ImgReact, nombre: "React", exp: "+1 año de exp" },
  { id: 2, imagen: ImgRedux, nombre: "Redux", exp: "+1 proyecto de exp" },
  { id: 3, imagen: ImgNext, nombre: "Next.js", exp: "+2 proyectos de exp" },
  { id: 4, imagen: ImgSql, nombre: "SQL", exp: "+3 años de exp (uso diario)" },
  { id: 5, imagen: ImgGrapqhl, nombre: "Graphql", exp: "+1 proyecto de exp" },
  { id: 6, imagen: ImgGit, nombre: "Git", exp: "Uso de Github para proyectos" },
];

import ImgSantander from "../public/img/santander.png";
import ImgBshop from "../public/img/bshop.png";
import ImgReactNative from "../public/img/react-native.png";

export const proyectos = [
  {
    id: 1,
    imagen: ImgSantander,
    nombre: "Beca Santander:",
    subtitulo: "Data Science",
  },
  {
    id: 2,
    imagen: ImgBshop,
    nombre: "Bshop",
    subtitulo: "e-commerce (Next.js)",
  },
  {
    id: 3,
    imagen: ImgReactNative,
    nombre: "Curso de",
    subtitulo: "React Native",
  },
];

export const experiencia = [
  {
    id: 1,
    nombre: "Nadro",
    fecha: "(2019 - Actual)",
    actividades:
      "Analista de IT (Desarrollo de validador para promociones, Analista de Datos, Integraciones a WS con nuevos clientes, Conciliaciones con Autoservicios, etc)",
  },
  {
    id: 2,
    nombre: "Escuela Libre de Homeopatía de México",
    fecha: "(2016 - 2019)",
    actividades:
      "Encargado del área de Sistemas (Creación y actualización de pag. web, Soporte técnico, Cableado)",
  },
  {
    id: 3,
    nombre: "Compañía Mexicana de Procesamiento",
    fecha: "(2014 - 2016)",
    actividades:
      "Data Stage (Generación y procesamiento de archivos), Soporte técnico",
  },
];

export const freelance = [
  {
    id: 1,
    nombre: "Validador de promociones ",
    fecha: "(2022)",
    github: "https://github.com/sergiogswv/validador",
    frontend: "React + tailwindcss + Formik; Backend: Node.js",
  },
  {
    id: 2,
    nombre: "Sistema de calificaciones CLF ",
    fecha: "(2021)",
    github: "https://github.com/sergiogswv/systemclf",
    frontend:
      "React + Redux + tailwindcss + Formik; Backend: Node.js + MongoDB + JsonWebToken ",
  },
  {
    id: 3,
    nombre: "Sitio Web - Escuela libre de homeopatía de México ",
    fecha: "(2020)",
    github: "https://github.com/sergiogswv/elhm",
    frontend: "React + Gatsby + StyledComponents",
  },
];
