import Sergio from "../public/img/img-personal.png";

const Intro = () => {
  return (
    <main className="text-white grid grid-cols-2 w-11/12 mx-auto">
      <div className="mx-auto my-auto">
        <h1 className="text-lg">
          Me llamo <span className="colorSecondary">Sergio</span>
        </h1>
        <p className="text-xs my-2">
          <span className="colorSecondary">Desarrollador web</span> y{" "}
          <span className="colorSecondary">analista de IT</span>, Egresado de la
          Facultad de Estudios Superiores Aragón (UNAM).
        </p>
        <p className="text-xs">
          Soy una persona entusiasta con mis proyectos y mi trabajo. Siempre con
          muchas ganas de seguir aprendiendo, superandome cada día y, no puede
          faltar, luchar con el día a día siendo un padre ejemplar.
        </p>
      </div>
      <div>
        {/* Imagen personal */}
        <img alt="imagen personal" src={Sergio} className="" />
      </div>
    </main>
  );
};

export default Intro;
