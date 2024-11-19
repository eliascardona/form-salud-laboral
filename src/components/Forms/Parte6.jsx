import { useState, useEffect } from "react"
import { RequisitosAutoCuidadoPreguntasArray } from "../../textos/preguntas6"
import CustomSelect from "../CustomSelect/CustomSelect"
import "./styles/forms.css"


const Parte6 = ({ step, setStep, payload }) => {

  useEffect(() => {
    console.log('informacion acumulada hasta ahora')
    console.log(payload)
  }, [payload])

  return (
    <div className="form-container">
      <form>
        <h1>Requisitos de Autocuidado Universales</h1>
        <div id="arreglo">
          {RequisitosAutoCuidadoPreguntasArray.map((pregunta, i) => (
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

export default Parte6
