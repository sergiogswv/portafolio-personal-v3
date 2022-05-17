import Layout from "./components/Layout";
import Intro from "./components/Intro";
import Conocimiento from "./components/Conocimiento";
import Proyectos from "./components/Proyectos";
import Experiencia from "./components/Experiencia";
import Freelance from "./components/Freelance";

function App() {
  return (
    <Layout>
      <Intro />

      <Conocimiento />

      <Proyectos />

      <Experiencia />

      <Freelance />
    </Layout>
  );
}

export default App;
