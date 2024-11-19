import { useEffect, useState } from "react"
import { useFormStore } from '../components/Forms/(zustand)/formStore'
import { FormSteps } from "../components/FormSteps/FormSteps"
import Pagination from "../components/Paginacion/Paginacion"
import "../assets/css/App.css"

export default function App() {
  const totalSteps = 13
  const [step, setStep] = useState(1)
  const { setInputValue } = useFormStore()

  // useEffect(() => {
  //   function updateState() {
  //     setInputValue((prev) => ({
  //       ...prev,
  //       nombre: "lol",
  //     })
  //   )
  //   }
  //   updateState()
  // }, [inputValue])

  return (
    <div className="App">
      <h1>Formulario de Salud Laboral</h1>
      <FormSteps step={step} setStep={setStep} />
      <Pagination step={step} setStep={setStep} totalSteps={totalSteps} />
    </div>
  )
}