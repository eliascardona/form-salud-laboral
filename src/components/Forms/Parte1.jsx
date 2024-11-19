import { useState, useEffect } from "react";
import { PreguntasArray } from "../../textos/preguntas"; // Asegúrate de que la ruta sea correcta
import CustomSelect from "../CustomSelect/CustomSelect"; // Asegúrate de que la ruta sea correcta
import "./styles/forms.css";
import EmployeeIdentForm from "./staticFields/EmployeeIdentForm";
import { useFormStore } from './(zustand)/formStore'


const Parte1 = ({ step, setStep, payload }) => {
  const [respuestas, setRespuestas] = useState(
    Array(PreguntasArray.length).fill(""),
  );

  const setRespuestaFunc = (index, value) => {
    const newRespuestas = [...respuestas];
    newRespuestas[index] = value;
    setRespuestas(newRespuestas);
  };

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
    console.log(temp)

    setInputValue(
      (prev) => ({
        ...prev,
        ...temp,
      })
    )
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
                respuesta={respuestas[i]}
                setRespuestaFunc={(value) => setRespuestaFunc(i, value)}
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