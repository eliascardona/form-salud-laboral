import { useState } from "react"
import { FormSteps } from "../components/FormSteps/FormSteps"
import Pagination from "../components/Paginacion/Paginacion"
import "../assets/css/App.css"

export default function App() {
  const totalSteps = 13
  const [step, setStep] = useState(1)

  return (
    <div className="App">
      <h1>Formulario de Salud Laboral</h1>
      <FormSteps step={step} setStep={setStep} />
      <Pagination step={step} setStep={setStep} totalSteps={totalSteps} />
    </div>
  )
}