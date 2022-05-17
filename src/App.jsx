import Layout from "./components/Layout";
import Intro from "./components/Intro";
import Conocimiento from "./components/Conocimiento";
import Proyectos from "./components/Proyectos";
import Experiencia from "./components/Experiencia";
import ProyectosP from "./components/ProyectosP";

function App() {
  return (
    <Layout>
      <Intro />

      <Conocimiento />

      <Proyectos />

      <Experiencia />

      <ProyectosP />
    </Layout>
  );
}

export default App;
