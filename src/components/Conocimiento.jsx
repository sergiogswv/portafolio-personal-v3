import { conocimientos } from "../helpers";

const Conocimiento = () => {
  return (
    <div>
      <h1 className="text-white text-center uppercase text-lg md:text-4xl md:mb-2">
        Conocimientos o experiencia:
      </h1>
      <p className=" grid bgSecondary w-3/5 h-1 mx-auto"></p>

      <section className="grid grid-cols-2 w-11/12 mx-auto md:grid-cols-3 md:my-5">
        {conocimientos.map((conocimiento) => (
          <article
            key={conocimiento.id}
            className="grid grid-cols-[30%_70%] my-4"
          >
            <img
              alt="imagen de React"
              src={conocimiento.imagen}
              className="w-10 my-auto md:w-28"
            />
            <div>
              <h3 className="colorSecondary text-lg md:text-3xl">
                {conocimiento.nombre}
              </h3>
              <p className="text-white text-xs md:text-xl">
                {conocimiento.exp}
              </p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Conocimiento;
