import { useState, lazy } from "react";

import Layout from "./components/Layout";

const Intro = lazy(() => import('./components/Intro'))
const Conocimiento = lazy(() => import('./components/Conocimiento'))
const Proyectos = lazy(() => import('./components/Proyectos'))
const Experiencia = lazy(() => import('./components/Experiencia'))
const Freelance = lazy(() => import('./components/Freelance'))


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
