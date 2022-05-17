import { proyectos } from "../helpers";

const Proyectos = () => {
  return (
    <div>
      <h1 className="text-center text-white uppercase text-lg md:text-4xl md:mb-2">
        Proyectos en curso:
      </h1>
      <p className=" grid bgSecondary w-3/5 h-1 mx-auto"></p>

      <section className="flex justify-around flex-wrap mx-auto mb-5 md:my-5">
        {proyectos.map((proyecto) => (
          <article key={proyecto.id} className="">
            <div className="mx-auto">
              <img
                alt={`imagen de proyecto ${proyecto.nombre}`}
                src={proyecto.imagen}
                className="w-15 h-20 mx-auto my-5"
              />
              <p className="text-white text-center w-11/12 md:text-3xl">
                {proyecto.nombre}{" "}
                <span className="colorSecondary">{proyecto.subtitulo}</span>
              </p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Proyectos;
