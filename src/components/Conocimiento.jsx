import { conocimientos } from "../helpers";
import { motion } from "framer-motion";

const Conocimiento = ({ encendido }) => {
  return (
    <div>
      <h1
        className={`${
          !encendido ? "text-white" : "text-black"
        } text-center uppercase text-lg md:text-4xl md:mb-2 lg:text-6xl`}
      >
        Conocimientos o experiencia:
      </h1>
      <p className=" grid bgSecondary w-3/5 h-1 mx-auto"></p>

      <section className="grid grid-cols-2 w-11/12 mx-auto md:grid-cols-3 md:my-5 lg:my-10">
        {conocimientos.map((conocimiento) => (
          <article
            key={conocimiento.id}
            className="grid grid-cols-[30%_70%] my-4 lg:my-10"
          >
            <motion.img
              alt="imagen de React"
              src={conocimiento.imagen}
              className="w-10 my-auto md:w-28 lg:w-36"
              animate={{ x: [150, -50, 0], rotate: 360 }}
              transition={{ ease: "easeOut", duration: 3 }}
            />
            <div>
              <h3 className="colorSecondary text-lg md:text-3xl lg:text-6xl">
                {conocimiento.nombre}
              </h3>
              <p
                className={`${
                  !encendido ? "text-white" : "text-black"
                }  text-xs md:text-xl lg:text-3xl`}
              >
                {conocimiento?.exp}
              </p>
            </div>
          </article>
        ))}
      </section>

      <p className="text-white text-center text-xs mb-5 md:-mt-5 md:mb-10 md:text-xl">
        #Este proyecto/portafolio web ha sido creado en Figma#
      </p>
    </div>
  );
};

export default Conocimiento;
