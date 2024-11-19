import { useState, useEffect } from "react";
import { FactoresAmbientalesPreguntasArray } from "../../textos/preguntas12"; // Asegúrate de que la ruta sea correcta
import CustomSelect from "../CustomSelect"; // Asegúrate de que la ruta sea correcta
import "../Ui/PersonalInfoForm.css";


const Parte12 = ({ step, setStep, payload }) => {
  const [respuestas, setRespuestas] = useState(
    Array(FactoresAmbientalesPreguntasArray.length).fill(""),
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
        <h1>Factores Ambientales</h1>
        <div id="arreglo">
          {FactoresAmbientalesPreguntasArray.map((pregunta, i) => (
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

export default Parte12;