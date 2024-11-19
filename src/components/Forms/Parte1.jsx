import { useState, useEffect } from "react";
import { PreguntasArray } from "../../textos/preguntas"; // Asegúrate de que la ruta sea correcta
import CustomSelect from "../CustomSelect"; // Asegúrate de que la ruta sea correcta
import "../Ui/PersonalInfoForm.css";
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

  const handleUpdate = (evt) => {
    const temp = {
      // form data
    }
    setInputValue((prev) => ({
      ...prev,
      ...temp,
    }))
  }

  useEffect(() => {
    console.log('informacion acumulada hasta ahora')
    console.log(payload)
  }, [payload])


  return (
    <div className="form-container">
      <h1>Datos Descriptivos de la Persona</h1>
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
          type="button"
          className="button"
          onClick={(e) => setStep(step + 1)}
        >
          {"siguiente"}
        </button>
      </div>
    </div>
  );
};

export default Parte1;
