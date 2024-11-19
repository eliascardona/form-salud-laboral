export const AuditivoOcularPreguntasArray = [
  {
    pregunta: (
      <>
        El trabajador presenta:
        <br /> <br />
        Problemas para Escuchar ¿Cuál?
      </>
    ),
    preguntaInputName: "auditivoocular1",
    opciones: [{ valor: "Si " }, { valor: "No " }, { valor: "A veces" }],
  },
  {
    pregunta: "¿Cuál?",
    preguntaInputName: "auditivoocular2",
    opciones: [],
    tipo: "texto"
  },
  {
    pregunta: "Su equipo de protección personal está adaptado a sus necesidades auditivas o visuales:",
    preguntaInputName: "auditivoocular3",
    opciones: [{ valor: "Si" }, { valor: "No" }],
  },
  {
    pregunta: "¿Necesita apoyo para Escuchar?",
    preguntaInputName: "auditivoocular4",
    opciones: [{ valor: "Si" }, { valor: "No" }],
  },
  {
    pregunta: "¿Necesita apoyo para ver?",
    preguntaInputName: "auditivoocular5",
    opciones: [{ valor: "Si" }, { valor: "No" }],
  },
  {
    pregunta: "¿Cuál?",
    preguntaInputName: "auditivoocular6",
    opciones: [
      { valor: "Lentes Correctivos" },
      { valor: "Gafas de Sol" },
      { valor: "Lentes de Contacto" },
      { valor: "Lupa" },
      { valor: "Pantallas con Aumento" },
      { valor: "Dispositivos de Lectura" },
      { valor: "Aplicaciones de Aumento de Texto" },
      { valor: "Pantallas de Alta Resolución" },
      { valor: "Otros" },
    ],
  },
  {
    pregunta: "¿Desde cuándo?",
    preguntaInputName: "auditivoocular7",
    opciones: [{ valor: "Especificar fecha" }],
  },
]