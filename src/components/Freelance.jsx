import { freelance } from "../helpers";
import { motion } from "framer-motion";

const Freelance = ({ encendido }) => {
  return (
    <>
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
          Proyectos freelance/personales:
        </h1>
        <p className=" grid bgSecondary w-3/5 h-1 mx-auto"></p>
      </motion.div>

      <div className="flex justify-around flex-wrap">
        {freelance.map((proyecto) => (
          <motion.div
            key={proyecto.id}
            className={`${
              !encendido ? "text-white" : "text-black"
            } text-center my-2 w-10/12 lg:my-8`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <h3 className="text-xl md:text-3xl lg:text-5xl">
              {proyecto.nombre}
              <span className="text-xs md:text-sm">{proyecto.fecha}</span>
            </h3>
            <a
              href={proyecto.github}
              target="_blank"
              className="colorSecondary text-sm md:text-xl lg:text-3xl"
            >
              Github: {proyecto.github}
            </a>
            <p className="colorSecondary text-sm md:text-xl lg:text-3xl">
              Frontend: {proyecto.frontend}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Freelance;
