import { useState, useEffect } from "react"
import { FactoresAmbientalesPreguntasArray } from "../../textos/preguntas12"
import CustomSelect from "../CustomSelect/CustomSelect"
import "./styles/forms.css"


const Parte12 = ({ step, setStep, payload }) => {

  useEffect(() => {
    console.log('informacion acumulada hasta ahora')
    console.log(payload)
  }, [payload])

  return (
    <div className="form-container">
      <form>
        <h1>Factores Ambientales</h1>
        <div id="arreglo">
          {FactoresAmbientalesPreguntasArray.map((pregunta, i) => (
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

export default Parte12
