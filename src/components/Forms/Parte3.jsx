import { useState, useEffect } from "react";
import { FactoresSistemaPreguntasArray } from "../../textos/preguntas3"; // Asegúrate de que la ruta sea correcta
import CustomSelect from "../CustomSelect"; // Asegúrate de que la ruta sea correcta
import "../Ui/PersonalInfoForm.css";


const Parte3 = ({ step, setStep, payload }) => {
  // Inicializar el estado de las respuestas como un arreglo vacío
  const [respuestas, setRespuestas] = useState(
    Array(FactoresSistemaPreguntasArray.length).fill(""),
  ); // Cambié a 'FactoresSistemaPreguntasArray'

  // Función para actualizar la respuesta en función del índice
  const setRespuestaFunc = (index, value) => {
    const newRespuestas = [...respuestas];
    newRespuestas[index] = value;
    setRespuestas(newRespuestas);
  };

  // Función para manejar el envío del formulario
  const handlePersonalInfoSubmit = (e) => {
    e.preventDefault();
    console.log(respuestas); // Aquí puedes manejar las respuestas
  };

  useEffect(() => {
    console.log('informacion acumulada hasta ahora')
    console.log(payload)
  }, [payload])
  return (
    <div className="form-container">
      <form onSubmit={handlePersonalInfoSubmit}>
        <h1>Factores del sistema Familiar</h1>
        <div id="arreglo">
          {FactoresSistemaPreguntasArray.map((pregunta, i) => (
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

export default Parte3;
