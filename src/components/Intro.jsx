import Sergio from "../public/img/img-personal.png";
import { motion } from "framer-motion";

const Intro = ({ encendido }) => {
  return (
    <main
      className={`${
        !encendido ? "text-white" : "text-black"
      } grid grid-cols-2 w-11/12 mx-auto md:mb-5`}
    >
      <div className="mx-auto my-auto">
        <h1 className="text-lg md:text-4xl lg:text-6xl">
          Me llamo <span className="colorSecondary">Sergio</span>
        </h1>
        <p className="text-xs my-2 md:text-2xl md:my-5 lg:text-3xl">
          <span className="colorSecondary">Desarrollador web</span> y{" "}
          <span className="colorSecondary">analista de IT.</span> Egresado de la
          Facultad de Estudios Superiores Aragón (UNAM).
        </p>
      </div>
      <div>
        {/* Imagen personal */}
        <motion.img
          alt="imagen personal"
          src={Sergio}
          className="md:w-5/6 md:mx-auto lg:w-2/3"
          animate={{ y: [-300, 0] }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
        />
      </div>
    </main>
  );
};

export default Intro;
