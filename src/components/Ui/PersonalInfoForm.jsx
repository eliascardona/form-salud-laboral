import React, { useState } from "react";
import "./PersonalInfoForm.css"; // Importa el archivo CSS para los estilos

const PersonalInfoForm = () => {
  const currentYear = new Date().getFullYear(); // Obtener el año actual
  const maxYear = 2024; // Establecer el año máximo
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [fecha, setFecha] = useState(new Date().toISOString().split("T")[0]);
  const [dia, setDia] = useState("");
  const [mes, setMes] = useState("");
  const [anio, setAnio] = useState("");
  const [sexo, setSexo] = useState("");
  const [estadoCivil, setEstadoCivil] = useState("");
  const [escolaridad, setEscolaridad] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [folio, setFolio] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar la fecha
    if (!validateDate(dia, mes, anio, currentYear)) {
      setError("Fecha no válida. Por favor, verifica los valores.");
      return;
    }

    setError(""); // Limpiar errores
    console.log({
      nombre,
      apellido,
      fecha,
      dia,
      mes,
      anio,
      sexo,
      estadoCivil,
      escolaridad,
      empresa,
      folio,
    });
  };

  const validateDate = (dia, mes, anio, currentYear) => {
    const day = parseInt(dia);
    const month = parseInt(mes);
    const year = parseInt(anio);

    // Verificar si el año es válido
    if (year > currentYear) return false;

    // Verificar la validez del mes
    if (month < 1 || month > 12) return false;

    // Verificar la validez del día según el mes
    const daysInMonth = new Date(year, month, 0).getDate(); // Obtiene el número de días en el mes
    if (day < 1 || day > daysInMonth) return false;

    return true; // La fecha es válida
  };

  // Lista de nombres de los meses
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  return (
    <div className="form-container">
      <h1>Datos Descriptivos de la Persona </h1>
      {error && <p className="error">{error}</p>}{" "}
      {/* Mostrar mensaje de error */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            <strong>Nombre:</strong>
          </label>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>
            <strong>Apellido:</strong>
          </label>
          <input
            type="text"
            placeholder="Ingresa tu apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>
            <strong>Fecha:</strong>
          </label>
          <input type="date" value={fecha} readOnly />
        </div>
        <div className="form-group">
          <label>
            <strong>Edad (Día):</strong>
          </label>
          <select value={dia} onChange={(e) => setDia(e.target.value)} required>
            <option value="">Día</option>
            {[...Array(31).keys()].map((d) => (
              <option key={d + 1} value={d + 1}>
                {d + 1}
              </option>
            ))}
          </select>
          <select value={mes} onChange={(e) => setMes(e.target.value)} required>
            <option value="">Mes</option>
            {monthNames.map((month, index) => (
              <option key={index + 1} value={index + 1}>
                {month}
              </option>
            ))}
          </select>
          <select
            value={anio}
            onChange={(e) => setAnio(e.target.value)}
            required
          >
            <option value="">Año</option>
            {/* Limitar el rango de años hasta 2024 */}
            {[currentYear - 100, maxYear].map((a) =>
              [...Array(maxYear - (currentYear - 100) + 1).keys()].map((y) => (
                <option
                  key={y + (currentYear - 100)}
                  value={y + (currentYear - 100)}
                >
                  {y + (currentYear - 100)}
                </option>
              )),
            )}
          </select>
        </div>
        <div className="form-group">
          <label>
            <strong>Sexo:</strong>
          </label>
          <select
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}
            required
          >
            <option value="">Seleccione</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </select>
        </div>
        <div className="form-group">
          <label>
            <strong>Estado Civil:</strong>
          </label>
          <select
            value={estadoCivil}
            onChange={(e) => setEstadoCivil(e.target.value)}
            required
          >
            <option value="">Seleccione</option>
            <option value="soltero">Soltero</option>
            <option value="viudo">Viudo</option>
            <option value="divorciado">Divorciado</option>
            <option value="casado">Casado</option>
          </select>
        </div>
        <div className="form-group">
          <label>
            <strong>Escolaridad:</strong>
          </label>
          <select
            value={escolaridad}
            onChange={(e) => setEscolaridad(e.target.value)}
            required
          >
            <option value="">Seleccione</option>
            <option value="primaria">Primaria</option>
            <option value="secundaria">Secundaria</option>
            <option value="preparatoria">Preparatoria</option>
            <option value="universidad">Universidad</option>
            <option value="postgrado">Postgrado</option>
          </select>
        </div>
        <div className="form-group">
          <label>
            <strong>Empresa:</strong>
          </label>
          <input
            type="text"
            placeholder="Ingresa el nombre de la empresa"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>
            <strong>Folio:</strong>
          </label>
          <input
            type="text"
            placeholder="Ingresa el folio"
            value={folio}
            onChange={(e) => setFolio(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
