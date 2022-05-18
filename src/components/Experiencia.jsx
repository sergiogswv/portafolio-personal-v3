import { experiencia } from "../helpers";

const Experiencia = ({ encendido }) => {
  return (
    <div>
      <h1
        className={`${
          !encendido ? "text-white" : "text-black"
        } text-center uppercase text-lg md:text-4xl md:mb-2 lg:text-6xl`}
      >
        Experiencia laboral:
      </h1>
      <p className=" grid bgSecondary w-3/5 h-1 mx-auto"></p>

      <div className="flex justify-around flex-wrap">
        {experiencia.map((exp) => (
          <div
            key={exp.id}
            className={`${
              !encendido ? "text-white" : "text-black"
            } text-center my-2 w-10/12 md:w-1/2 md:my-5 lg:w-4/12 lg:my-10`}
          >
            <h3 className="text-xl md:text-3xl lg:text-5xl">{exp.nombre}</h3>
            <p className="text-xs text-gray-400 md:text-sm lg:text-xl">
              {exp.fecha}
            </p>
            <p className="colorSecondary md:text-2xl md:mx-auto md:w-10/12 lg:text-3xl">
              {exp.actividades}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiencia;
