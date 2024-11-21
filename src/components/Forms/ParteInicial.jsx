import { useEffect } from "react"
import EmployeeIdentForm from "./staticFields/EmployeeIdentForm"
import { useFormStore } from './(zustand)/formStore'
import "./styles/forms.css"


export default function ParteInicial({ step, setStep }) {
  const inputValue = useFormStore((state) => state.inputValue)
  const setInputValue = useFormStore((state) => state.setInputValue)

  const handleUpdate = (evt) => {
    evt.preventDefault()
    const formData = new FormData(evt.target)
    const inputValue2 = Object.fromEntries(formData)
    setInputValue({ ...inputValue2 })
  }

  useEffect(() => {
    console.log(inputValue)
  }, [inputValue])

  
  return (
    <div className="form-container">
      <h3>Datos Descriptivos de la Persona</h3>
      <form
        id="form1"
        className="formStyle"
        onSubmit={(e) => {
          handleUpdate(e)
          setStep(step + 1)
        }}
      >
        <div className="static-fields-grid" id="opcion-multiple-parteInicial">
          <EmployeeIdentForm />
        </div>
        <div className="button-container">
          <button
            type="submit"
            className="button"
          >
            {"siguiente"}
          </button>
        </div>
        </form>
    </div>
  )
}