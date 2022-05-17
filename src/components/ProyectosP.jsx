import { freelance } from "../helpers";

const ProyectosP = () => {
  return (
    <div>
      <h1 className="text-white text-center uppercase text-lg">
        Proyectos freelance/personales:
      </h1>
      <p className=" grid bgSecondary w-3/5 h-1 mx-auto"></p>

      <div className="flex justify-around flex-wrap">
        {freelance.map((proyecto) => (
          <div
            key={proyecto.id}
            className="text-white text-center my-2 w-10/12"
          >
            <h3 className="text-xl">
              {proyecto.nombre}
              <span className="text-xs">{proyecto.fecha}</span>
            </h3>
            <p className="colorSecondary text-sm">Github: {proyecto.github}</p>
            <p className="colorSecondary text-sm">
              Frontend: {proyecto.frontend}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProyectosP;
