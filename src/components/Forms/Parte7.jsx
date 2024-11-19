import { useEffect } from "react"
import { SistemaCardiovascularPreguntasArray } from "../../textos/preguntas7"
import CustomSelect from "../CustomSelect/CustomSelect"
import "./styles/forms.css"

import { useFormStore } from './(zustand)/formStore'

const Parte7 = ({ step, setStep, payload }) => {

  const { setInputValue } = useFormStore()

  const handleUpdate = (evt) => {
    evt.preventDefault()
    const temp = {
      nombre: evt.target.nombre.value,
      apellidoMaterno: evt.target.apellidoMaterno.value,
      apellidoPaterno: evt.target.apellidoPaterno.value,
      edad: evt.target.edad.value,
      empresa: {
        id: evt.target.ide.value,
      },
      sexo: evt.target.sexo.value,
      edocivil: evt.target.edocivil.value,
      escolaridad: evt.target.escolaridad.value,
      folio: evt.target.folio.value,
    }
    setInputValue((prev) => ({
      ...prev,
      temp
    }))
  }
  useEffect(() => {
    console.log('informacion acumulada hasta ahora')
    console.log(payload)
  }, [payload])

  return (
    <div className="form-container">
      <h1>Sistema Cardiovascular</h1>
      <form
        id="form2"
        className="formStyle"
        onSubmit={(e) => {
          handleUpdate(e)
          setStep(step + 1)
        }}
      >
        <div id="arreglo">
          {SistemaCardiovascularPreguntasArray.map((pregunta, i) => (
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
            type="button"
            className="button"
            onClick={(e) => {
              setStep(step + 1)
            }}
          >
            {"siguiente"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Parte7
