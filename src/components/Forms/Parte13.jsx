import { useState, useEffect } from "react"
import { PromocionHumanoPreguntasArray } from "../../textos/preguntas13"
import CustomSelect from "../CustomSelect/CustomSelect"
import "./styles/forms.css"


const Parte13 = ({ step, setStep, payload }) => {

  useEffect(() => {
    console.log('informacion acumulada hasta ahora')
    console.log(payload)
  }, [payload])

  return (
    <div className="form-container">
      <form>
        <h1>Promoción del Funcionamiento Humano</h1>
        <div id="arreglo">
          {PromocionHumanoPreguntasArray.map((pregunta, i) => (
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
            {"Enviar"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Parte13
