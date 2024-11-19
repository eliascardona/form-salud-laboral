import { useState, useEffect } from "react"
import { MantenimientoAlimentosPreguntasArray } from "../../textos/preguntas8"
import CustomSelect from "../CustomSelect/CustomSelect"
import "./styles/forms.css"


const Parte8 = ({ step, setStep, payload }) => {

  useEffect(() => {
    console.log('informacion acumulada hasta ahora')
    console.log(payload)
  }, [payload])

  return (
    <div className="form-container">
      <form>
        <h1>Mantenimiento del Aporte Suficiente de Alimentos</h1>
        <div id="arreglo">
          {MantenimientoAlimentosPreguntasArray.map((pregunta, i) => (
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

export default Parte8
