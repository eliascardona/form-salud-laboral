const FactoresSistemaPreguntasArray = [
  {
    pregunta: "Rol que ocupa en la familia: ",
    preguntaInputName: "fam11",
    opciones: [
      { valor: "Padre" },
      { valor: "Madre" },
      { valor: "Hijo" },
      { valor: "Esposa/o" },
      { valor: "Otro" },
    ],
    tipoPregunta: "positivo",
    sectionKey: "section3",
    sectionId: "factores_familiares",
    enum_matcher_Attr: "jobSatisfaction",
  },
  {
    pregunta: "¿Cuántos hijos tiene?  ",
    preguntaInputName: "fam12",
    opciones: [
      { valor: "0" },
      { valor: "1" },
      { valor: "2" },
      { valor: "3" },
      { valor: "4 o mas" },
    ],
    tipoPregunta: "positivo",
    sectionKey: "section3",
    sectionId: "factores_familiares",
    enum_matcher_Attr: "jobSatisfaction",
  },
  {
    pregunta: "Relación con la familia:  ",
    preguntaInputName: "fam13",
    opciones: [{ valor: "Buena" }, { valor: "Regular" }, { valor: "Mala" }],
    tipoPregunta: "positivo",
    sectionKey: "section3",
    sectionId: "factores_familiares",
    enum_matcher_Attr: "jobSatisfaction",
  },
];

export default FactoresSistemaPreguntasArray;
