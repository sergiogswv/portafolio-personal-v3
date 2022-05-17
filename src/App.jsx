import { useState } from "react";

import Layout from "./components/Layout";
import Intro from "./components/Intro";
import Conocimiento from "./components/Conocimiento";
import Proyectos from "./components/Proyectos";
import Experiencia from "./components/Experiencia";
import Freelance from "./components/Freelance";

function App() {
  const [encendido, setEncendido] = useState(false);

  return (
    <Layout encendido={encendido} setEncendido={setEncendido}>
      <Intro encendido={encendido} />

      <Conocimiento encendido={encendido} />

      <Proyectos encendido={encendido} />

      <Experiencia encendido={encendido} />

      <Freelance encendido={encendido} />
    </Layout>
  );
}

export default App;
