const RequisitosAutoCuidadoPreguntasArray = [
  {
    pregunta: "1) ¿Cuántos cigarrillos fuma usted al día? (6=31 o mas, 5=21-30, 4=11-20, 3=menos de 10)",
    preguntaInputName: "autocuidado1",
    opciones: [
      { valor: "3= menos de 10" },
      { valor: "4= 11-20 " },
      { valor: "5= 21-30" },
      { valor: "36= 31 o mas " },
    ],
  },
  {
    pregunta: "2) ¿Fuma usted más cigarrillos durante la primera parte del día que durante el resto del día? (1= Si, 0= No )",
    preguntaInputName: "autocuidado2",
    opciones: [{ valor: "1= Si " }, { valor: "10= No " }],
  },
  {
    pregunta: "3) ¿Cuánto tiempo transcurre desde que Ud. Despierta hasta que fuma el primer cigarrillo? ",
    preguntaInputName: "autocuidado3",
    opciones: [
      { valor: "0= Más de 60 min " },
      { valor: "1= 31-60 min" },
      { valor: "2= 6-30 min " },
      { valor: "3= Menos de 5 min" },
    ],
  },
  {
    pregunta: "4) ¿Qué cigarrillo le es más difícil omitir (dejar de fumar)? ",
    preguntaInputName: "autocuidado4",
    opciones: [
      { valor: "1= El primero de la mañana" },
      { valor: "0=Algún otro" },
    ],
  },
  {
    pregunta: "5) ¿Le es difícil no fumar donde está prohibido?  ",
    preguntaInputName: "autocuidado5",
    opciones: [{ valor: "1=Si " }, { valor: "0=No " }],
  },
  {
    pregunta: "6) ¿Le es difícil no fumar donde está prohibido?  ",
    preguntaInputName: "autocuidado6",
    opciones: [{ valor: "1=Si " }, { valor: "0=No " }],
  },
]

export default RequisitosAutoCuidadoPreguntasArray