import { useState, useEffect } from "react";
import { ActividadReposoPreguntasArray } from "../../textos/preguntas9"; // Asegúrate de que la ruta sea correcta
import CustomSelect from "../CustomSelect/CustomSelect"; // Asegúrate de que la ruta sea correcta
import "./styles/forms.css";


const Parte9 = ({ step, setStep, payload }) => {
  const [respuestas, setRespuestas] = useState(
    Array(ActividadReposoPreguntasArray.length).fill(""),
  );

  const setRespuestaFunc = (index, value) => {
    const newRespuestas = [...respuestas];
    newRespuestas[index] = value;
    setRespuestas(newRespuestas);
  };

  const handlePersonalInfoSubmit = (e) => {
    e.preventDefault();
    console.log(respuestas);
  };

  useEffect(() => {
    console.log('informacion acumulada hasta ahora')
    console.log(payload)
  }, [payload])
  return (
    <div className="form-container">
      <form onSubmit={handlePersonalInfoSubmit}>
        <h1>Actividad y Reposo</h1>
        <div id="arreglo">
          {ActividadReposoPreguntasArray.map((pregunta, i) => (
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
        <div className="button-container">
          <button
            type="button"
            className="button"
            onClick={(e) => {
              setStep(step - 1);
            }}
          >
            {"atras"}
          </button>
          <button
            type="button"
            className="button"
            onClick={(e) => {
              setStep(step + 1);
            }}
          >
            {"siguiente"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Parte9;
