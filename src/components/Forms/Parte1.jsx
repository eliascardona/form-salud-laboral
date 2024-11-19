import { useEffect } from "react"
import { PreguntasArray } from "../../textos/preguntas"
import CustomSelect from "../CustomSelect/CustomSelect"
import EmployeeIdentForm from "./staticFields/EmployeeIdentForm"
import { useFormStore } from './(zustand)/formStore'
import "./styles/forms.css"


const Parte1 = ({ step, setStep, payload }) => {
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
      <h1>Datos Descriptivos de la Persona</h1>
      <form
        id="form1"
        className="formStyle"
        onSubmit={(e) => {
          handleUpdate(e)
          setStep(step + 1)
        }}
      >
        <div id="arreglo">
          <EmployeeIdentForm />
          <div className="grid1">
            {PreguntasArray.map((pregunta, i) => (
              <CustomSelect
                key={i}
                pregunta={pregunta.pregunta}
                preguntaInputName={pregunta.preguntaInputName}
                opcionesArray={pregunta.opciones}
                tipo={pregunta.tipo}
              />
            ))}
          </div>
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

export default Parte1