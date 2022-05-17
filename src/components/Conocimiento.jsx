import { conocimientos } from "../helpers";

const Conocimiento = () => {
  return (
    <div>
      <h1 className="text-white text-center uppercase text-lg">
        Conocimientos o experiencia:
      </h1>
      <p className=" grid bgSecondary w-3/5 h-1 mx-auto"></p>

      <section className="grid grid-cols-2 w-11/12 mx-auto">
        {conocimientos.map((conocimiento) => (
          <article
            key={conocimiento.id}
            className="grid grid-cols-[30%_70%] my-4"
          >
            <img
              alt="imagen de React"
              src={conocimiento.imagen}
              className="w-10 my-auto"
            />
            <div>
              <h3 className="colorSecondary text-lg">{conocimiento.nombre}</h3>
              <p className="text-white text-xs">{conocimiento.exp}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Conocimiento;
