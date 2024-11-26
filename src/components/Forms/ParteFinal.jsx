import { useEffect, useState } from "react"
import CustomSelect from "../CustomSelect/CustomSelect"
import { useFormStore } from './(zustand)/formStore'
import "./styles/forms.css"


export default function ParteFinal({ surveyTemplate = [], step, setStep }) {
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
  const [serverResponse, setServerResponse] = useState(null)

  const submitAllFormSections = async (evt) => {
    evt.preventDefault()
    if(inputValue != null) {
      const r = await fetch('http://localhost:8082/forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputValue)
      })
      const j = await r.json()
      const payload = j.SERVER_BODY

      payload != null && setServerResponse(
        JSON.stringify(payload['section3'])
      )

    }
    console.log('algo anda mal')
  }

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
        <div className="button-container-padd">
          <button
            type="button"
            className="button"
            onClick={(e) => {
              submitAllFormSections(e)
            }}
          >
            {"Guardar encuesta en la Base de Datos"}
          </button>
        </div>
        <div className="button-container">
          {
            serverResponse != null && <span>{serverResponse}</span>
          }
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
        </div>
      </form>
    </div>
  )
}