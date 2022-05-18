import { proyectos } from "../helpers";
import { motion } from "framer-motion";

const Proyectos = ({ encendido }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h1
        className={`${
          !encendido ? "text-white" : "text-black"
        } text-center uppercase text-lg md:text-4xl md:mb-2 lg:text-6xl`}
      >
        Proyectos en curso:
      </h1>
      <p className=" grid bgSecondary w-3/5 h-1 mx-auto"></p>

      <section className="flex justify-around flex-wrap mx-auto mb-5 md:my-5 lg:my-10">
        {proyectos.map((proyecto) => (
          <article key={proyecto.id} className="">
            <div className="mx-auto">
              <motion.img
                alt={`imagen de proyecto ${proyecto.nombre}`}
                src={proyecto.imagen}
                className="w-15 h-20 mx-auto my-5"
                whileHover={{ scale: 1.5, rotate: 360 }}
                transition={{ duration: 2 }}
              />
              <p
                className={`${
                  !encendido ? "text-white" : "text-black"
                } text-center w-11/12 md:text-3xl lg:text-5xl`}
              >
                {proyecto.nombre}{" "}
                <span className="colorSecondary">{proyecto.subtitulo}</span>
              </p>
            </div>
          </article>
        ))}
      </section>
    </motion.div>
  );
};

export default Proyectos;
