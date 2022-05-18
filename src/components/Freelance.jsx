import { freelance } from "../helpers";

const Freelance = ({ encendido }) => {
  return (
    <div>
      <h1
        className={`${
          !encendido ? "text-white" : "text-black"
        } text-center uppercase text-lg md:text-4xl md:mb-2 lg:text-6xl`}
      >
        Proyectos freelance/personales:
      </h1>
      <p className=" grid bgSecondary w-3/5 h-1 mx-auto"></p>

      <div className="flex justify-around flex-wrap">
        {freelance.map((proyecto) => (
          <div
            key={proyecto.id}
            className={`${
              !encendido ? "text-white" : "text-black"
            } text-center my-2 w-10/12 lg:my-8`}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Freelance;
