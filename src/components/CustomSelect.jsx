import PropTypes from "prop-types";
import "./CustomSelect.css";

export default function CustomSelect({ pregunta, preguntaInputName, opcionesArray = [], respuesta, setRespuestaFunc, }) {
  return (
    <div className="g1Item">
      <h3>{pregunta}</h3>
      {opcionesArray.length === 0 ? (
        pregunta.toLowerCase().includes("fecha") ? (
          <input
            type="date"
            value={respuesta}
            onChange={(e) => setRespuestaFunc(e.target.value)}
          />
        ) : pregunta.toLowerCase().includes("edad") ? (
          <input
            type="number"
            min="0"
            max="100"
            value={respuesta}
            onChange={(e) => setRespuestaFunc(e.target.value)}
            placeholder="Ingresa tu edad"
          />
        ) : (
          <input
            type="text"
            value={respuesta}
            onChange={(e) => setRespuestaFunc(e.target.value)}
            placeholder={`Ingresa ${pregunta.toLowerCase()}`}
          />
        )
      ) : (
        <select
          value={respuesta}
          name={preguntaInputName}
          onChange={(e) => setRespuestaFunc(e.target.value)}
        >
          <option value="">Seleccione</option>
          {opcionesArray.map((opcion, i) => (
            <option value={opcion.valor} key={i}>
              {opcion.valor}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

CustomSelect.propTypes = {
  pregunta: PropTypes.string.isRequired,
  preguntaInputName: PropTypes.string.isRequired,
  opcionesArray: PropTypes.arrayOf(
    PropTypes.shape({
      valor: PropTypes.string.isRequired, // ahora se espera un objeto con una propiedad 'valor'
    }),
  ),
  respuesta: PropTypes.string.isRequired,
  setRespuestaFunc: PropTypes.func.isRequired,
};
