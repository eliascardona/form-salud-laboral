import { useEffect } from "react"
import CustomSelect from "../CustomSelect/CustomSelect"
import { useFormStore } from './(zustand)/formStore'
import "./styles/forms.css"

export default function ParteMedia({ surveyTemplate=[], sectionTitle, step, setStep }) {
  const inputValue = useFormStore((state) => state.inputValue)
  const setInputValue = useFormStore((state) => state.setInputValue)

  const handleUpdate = (evt) => {
    evt.preventDefault()
    const formData = new FormData(evt.target)
    const inputValue2 = Object.fromEntries(formData)
    setInputValue({ ...inputValue, ...inputValue2 })
  }

  useEffect(() => {
    console.log(inputValue)
  }, [inputValue])

  
  return (
    <div className="form-container">
      <h3>{sectionTitle}</h3>
      <form
        id="form2"
        className="formStyle"
        onSubmit={(e) => {
          handleUpdate(e)
          setStep(step + 1)
        }}
      >
        <div className="selects-grid" id={`opcion-multiple-parte${step}`}>
          {surveyTemplate.map((pregunta, i) => (
            <CustomSelect
              key={i}
              pregunta={pregunta.pregunta}
              preguntaInputName={pregunta.preguntaInputName}
              opcionesArray={pregunta.opciones}
              tipo={pregunta.tipo}
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
            {"siguiente"}
          </button>
        </div>
      </form>
    </div>
  )
}