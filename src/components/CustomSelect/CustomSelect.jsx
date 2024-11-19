import PropTypes from "prop-types"
import "./CustomSelect.css"

export default function CustomSelect({ pregunta, preguntaInputName, opcionesArray = [] }) {
  return (
    <div className="g1Item">
      <h3>{pregunta}</h3>
      {opcionesArray.length === 0 ? (
        pregunta.toLowerCase().includes("fecha") ? (
          <input
            type="date"
            name="fecha"
          />
        ) : pregunta.toLowerCase().includes("edad") ? (
          <input
            type="number"
            name="edad"
            min="0"
            max="100"
            placeholder="Ingresa tu edad"
          />
        ) : (
          <input
            type="text"
            name={`${preguntaInputName.toLowerCase()}`}
            placeholder={`Ingresa ${preguntaInputName.toLowerCase()}`}
          />
        )
      ) : (
        <select name={preguntaInputName}>
          <option value="">Seleccione</option>
          {opcionesArray.map((opcion, i) => (
            <option value={opcion.valor} key={i}>
              {opcion.valor}
            </option>
          ))}
        </select>
      )}
    </div>
  )
}

CustomSelect.propTypes = {
  pregunta: PropTypes.string.isRequired,
  preguntaInputName: PropTypes.string.isRequired,
  opcionesArray: PropTypes.arrayOf(
    PropTypes.shape({
      valor: PropTypes.string.isRequired,
    }),
  ),
}