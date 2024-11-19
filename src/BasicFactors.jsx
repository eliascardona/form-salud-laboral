import React, { useState } from "react";
import {
  PreguntasArray,
  AreaTrabajoPreguntasArray,
  FactoresSistemaPreguntasArray,
  FactoresSocioEcoPreguntasArray,
  EstadoSisSaludPreguntasArray,
  RequisitosAutoCuidadoPreguntasArray,
  SistemaCardiovascularPreguntasArray,
  MantenimientoAlimentosPreguntasArray,
  ActividadReposoPreguntasArray,
  AuditivoOcularPreguntasArray,
  PrevencionPeligrosPreguntasArray,
  FactoresAmbientalesPreguntasArray,
  PromocionHumanoPreguntasArray,
} from "./textos/preguntas"; // Asegúrate de que la ruta sea correcta
import CustomSelect from "./components/CustomSelect"; // Asegúrate de que la ruta sea correcta
import "./components/Ui/PersonalInfoForm.css";

const BasicFactors = () => {
  // Inicializar el estado de las respuestas como un arreglo vacío
  const [respuestas, setRespuestas] = useState(
    Array(PreguntasArray.length).fill(""),
  );

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

  return (
    <form onSubmit={handlePersonalInfoSubmit}>
      <h1>Datos Descriptivos de la Persona</h1>
      <div className="arreglo">
        {PreguntasArray.map((pregunta, i) => (
          <CustomSelect
            key={i} // Asegúrate de que la clave sea única
            pregunta={pregunta.pregunta} // Texto de la pregunta
            opcionesArray={pregunta.opciones} // Opciones para la pregunta
            respuesta={respuestas[i]} // Respuesta actual
            setRespuestaFunc={(value) => setRespuestaFunc(i, value)} // Función para actualizar la respuesta
          />
        ))}
      </div>

      {/* Nuevo Título para la sección de características del área de trabajo */}
      <h1>Características del área de trabajo y valoración del trabajo</h1>
      <div className="arreglo">
        {AreaTrabajoPreguntasArray.map((pregunta, i) => (
          <CustomSelect
            key={i}
            pregunta={pregunta.pregunta}
            opcionesArray={pregunta.opciones}
            respuesta={respuestas[i + PreguntasArray.length]} // Ajustar el índice según sea necesario
            setRespuestaFunc={(value) =>
              setRespuestaFunc(i + PreguntasArray.length, value)
            }
          />
        ))}
      </div>

      {/* Nuevo Título para la sección de características del área de trabajo */}
      <h1>Factores del sistema Familiar</h1>
      <div className="arreglo">
        {FactoresSistemaPreguntasArray.map((pregunta, i) => (
          <CustomSelect
            key={i}
            pregunta={pregunta.pregunta}
            opcionesArray={pregunta.opciones}
            respuesta={respuestas[i + PreguntasArray.length]} // Ajustar el índice según sea necesario
            setRespuestaFunc={(value) =>
              setRespuestaFunc(i + PreguntasArray.length, value)
            }
          />
        ))}
      </div>

      <h1>Factores socioculturales y económicos</h1>
      <div className="arreglo">
        {FactoresSocioEcoPreguntasArray.map((pregunta, i) => (
          <CustomSelect
            key={i}
            pregunta={pregunta.pregunta}
            opcionesArray={pregunta.opciones}
            respuesta={respuestas[i + PreguntasArray.length]} // Ajustar el índice según sea necesario
            setRespuestaFunc={(value) =>
              setRespuestaFunc(i + PreguntasArray.length, value)
            }
          />
        ))}
      </div>

      <h1>Estado y sistema de salud</h1>
      <h2>Responder las preguntas tomando en cuenta los últimos 12 meses</h2>
      <div className="grid">
        {EstadoSisSaludPreguntasArray.map((pregunta, i) => (
          <CustomSelect
            key={i}
            pregunta={pregunta.pregunta}
            opcionesArray={pregunta.opciones}
            respuesta={respuestas[i + PreguntasArray.length]} // Ajustar el índice según sea necesario
            setRespuestaFunc={(value) =>
              setRespuestaFunc(i + PreguntasArray.length, value)
            }
          />
        ))}
      </div>

      <h1>REQUISITOS DE AUTOCUIDADO UNIVERSALES</h1>
      <h2>Fagerstrom</h2>
      <div className="arreglo">
        {RequisitosAutoCuidadoPreguntasArray.map((pregunta, i) => (
          <CustomSelect
            key={i}
            pregunta={pregunta.pregunta}
            opcionesArray={pregunta.opciones}
            respuesta={respuestas[i + PreguntasArray.length]} // Ajustar el índice según sea necesario
            setRespuestaFunc={(value) =>
              setRespuestaFunc(i + PreguntasArray.length, value)
            }
          />
        ))}
      </div>

      <h1>Sistema Cardiovascular</h1>
      <div className="arreglo">
        {SistemaCardiovascularPreguntasArray.map((pregunta, i) => (
          <CustomSelect
            key={i}
            pregunta={pregunta.pregunta}
            opcionesArray={pregunta.opciones}
            respuesta={respuestas[i + PreguntasArray.length]} // Ajustar el índice según sea necesario
            setRespuestaFunc={(value) =>
              setRespuestaFunc(i + PreguntasArray.length, value)
            }
          />
        ))}
      </div>

      <h1>Mantenimiento Del Aporte Suficiente De Alimentos</h1>
      <div className="arreglo">
        {MantenimientoAlimentosPreguntasArray.map((pregunta, i) => (
          <CustomSelect
            key={i}
            pregunta={pregunta.pregunta}
            opcionesArray={pregunta.opciones}
            respuesta={respuestas[i + PreguntasArray.length]} // Ajustar el índice según sea necesario
            setRespuestaFunc={(value) =>
              setRespuestaFunc(i + PreguntasArray.length, value)
            }
          />
        ))}
      </div>
      <h1>Actividad y reposo</h1>
      <div className="arreglo">
        {ActividadReposoPreguntasArray.map((pregunta, i) => (
          <CustomSelect
            key={i}
            pregunta={pregunta.pregunta}
            opcionesArray={pregunta.opciones}
            respuesta={respuestas[i + PreguntasArray.length]} // Ajustar el índice según sea necesario
            setRespuestaFunc={(value) =>
              setRespuestaFunc(i + PreguntasArray.length, value)
            }
          />
        ))}
      </div>

      <h1>Sistema Auditivo y Ocular:</h1>
      <div className="arreglo">
        {AuditivoOcularPreguntasArray.map((pregunta, i) => (
          <CustomSelect
            key={i}
            pregunta={pregunta.pregunta}
            opcionesArray={pregunta.opciones}
            respuesta={respuestas[i + PreguntasArray.length]} // Ajustar el índice según sea necesario
            setRespuestaFunc={(value) =>
              setRespuestaFunc(i + PreguntasArray.length, value)
            }
          />
        ))}
      </div>

      <h1>Prevención de peligros para la vida:</h1>
      <div className="arreglo">
        {PrevencionPeligrosPreguntasArray.map((pregunta, i) => (
          <CustomSelect
            key={i}
            pregunta={pregunta.pregunta}
            opcionesArray={pregunta.opciones}
            respuesta={respuestas[i + PreguntasArray.length]} // Ajustar el índice según sea necesario
            setRespuestaFunc={(value) =>
              setRespuestaFunc(i + PreguntasArray.length, value)
            }
          />
        ))}
      </div>

      <h1>Factores Ambientales:</h1>
      <div className="arreglo">
        {FactoresAmbientalesPreguntasArray.map((pregunta, i) => (
          <CustomSelect
            key={i}
            pregunta={pregunta.pregunta}
            opcionesArray={pregunta.opciones}
            respuesta={respuestas[i + PreguntasArray.length]} // Ajustar el índice según sea necesario
            setRespuestaFunc={(value) =>
              setRespuestaFunc(i + PreguntasArray.length, value)
            }
          />
        ))}
      </div>
      <h1>Promoción del funcionamiento Humano</h1>
      <div className="arreglo">
        {PromocionHumanoPreguntasArray.map((pregunta, i) => (
          <CustomSelect
            key={i}
            pregunta={pregunta.pregunta}
            opcionesArray={pregunta.opciones}
            respuesta={respuestas[i + PreguntasArray.length]} // Ajustar el índice según sea necesario
            setRespuestaFunc={(value) =>
              setRespuestaFunc(i + PreguntasArray.length, value)
            }
          />
        ))}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default BasicFactors;
