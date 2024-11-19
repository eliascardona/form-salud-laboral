import { useEffect, useState } from "react";
import "./App.css";
import { FormSteps } from "./components/FormSteps/FormSteps.jsx";
import Pagination from "./components/Paginacion/Paginacion.jsx";

const totalSteps = 13;

function App() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    console.log(step);
  }, [step]);

  return (
    <div className="App">
      <h1>Formulario de Salud Laboral</h1>
      <FormSteps step={step} setStep={setStep} />
      <Pagination step={step} setStep={setStep} totalSteps={totalSteps} />
    </div>
  );
}

export default App;
