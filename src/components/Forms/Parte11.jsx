import { useEffect } from "react"
import { PrevencionPeligrosPreguntasArray } from "../../textos/preguntas11"
import CustomSelect from "../CustomSelect/CustomSelect"
import { useFormStore } from './(zustand)/formStore'
import "./styles/forms.css"


const Parte11 = ({ step, setStep, payload }) => {
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
      <form>
        <h3>Prevención de Peligros para la Vida</h3>
        <div id="arreglo">
          {PrevencionPeligrosPreguntasArray.map((pregunta, i) => (
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

export default Parte11
