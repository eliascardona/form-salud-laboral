import { useEffect } from "react"
import CustomSelect from "../CustomSelect/CustomSelect"
import { useFormStore } from './(zustand)/formStore'
import "./styles/forms.css"


export default function ParteFinal({ surveyTemplate=[], step, setStep }) {
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
      <form 
        id="form13"
        className="formStyle"
        onSubmit={(e) => {
          handleUpdate(e)
          setStep(step + 1)
        }}
      >
        <h3>Promoción del Funcionamiento Humano</h3>
        <div className="selects-grid" id="opcion-multiple-parteFinal">
          {surveyTemplate.map((pregunta, i) => (
            <CustomSelect
              key={i}
              pregunta={pregunta.pregunta}
              preguntaInputName={pregunta.preguntaInputName}
              opcionesArray={pregunta.opciones}
            />
          ))}
        </div>
        <div className="button-container">
          <button
            type="button"
            className="button"
            onClick={(e) => {
              setStep(step - 1)
            }}
          >
            {"atras"}
          </button>
          <button
            type="submit"
            className="button"
          >
            {"Enviar"}
          </button>
        </div>
      </form>
    </div>
  )
}