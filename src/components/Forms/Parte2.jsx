import { useEffect } from "react"
import { AreaTrabajoPreguntasArray } from "../../textos/preguntas2"
import CustomSelect from "../CustomSelect/CustomSelect"
import { useFormStore } from './(zustand)/formStore'
import "./styles/forms.css"


const Parte2 = ({ step, setStep, payload }) => {
  const { setInputValue } = useFormStore()

  const handleUpdate = (evt) => {
    evt.preventDefault()
    const formData = new FormData(evt.target)
    const fmttData = Object.fromEntries(formData)
    // const temp = {
    //   actividadLaboral1: evt.target.actividadLaboral1.value,
    //   actividadLaboral2: evt.target.actividadLaboral2.value,
    //   actividadLaboral3: evt.target.actividadLaboral3.value,
    //   actividadLaboral4: evt.target.actividadLaboral4.value,
    //   actividadLaboral5: evt.target.actividadLaboral5.value,

    //   actividadLaboral6: evt.target.actividadLaboral6.value,
    //   actividadLaboral7: evt.target.actividadLaboral7.value,
    //   actividadLaboral8: evt.target.actividadLaboral8.value,
    //   actividadLaboral9: evt.target.actividadLaboral9.value,
    //   actividadLaboral10: evt.target.actividadLaboral10.value,

    //   actividadLaboral11: evt.target.actividadLaboral11.value,
    //   actividadLaboral12: evt.target.actividadLaboral12.value,
    //   actividadLaboral13: evt.target.actividadLaboral13.value,
    //   actividadLaboral14: evt.target.actividadLaboral14.value,
    //   actividadLaboral15: evt.target.actividadLaboral15.value,

    //   actividadLaboral16: evt.target.actividadLaboral16.value,
    //   actividadLaboral17: evt.target.actividadLaboral17.value,
    //   actividadLaboral18: evt.target.actividadLaboral18.value,
    //   actividadLaboral19: evt.target.actividadLaboral19.value,
    //   actividadLaboral20: evt.target.actividadLaboral20.value,

    //   actividadLaboral21: evt.target.actividadLaboral21.value,
    //   actividadLaboral22: evt.target.actividadLaboral22.value,
    //   actividadLaboral23: evt.target.actividadLaboral23.value,
    //   actividadLaboral24: evt.target.actividadLaboral24.value,
    //   actividadLaboral25: evt.target.actividadLaboral25.value,

    //   actividadLaboral26: evt.target.actividadLaboral26.value,
    //   actividadLaboral27: evt.target.actividadLaboral27.value,
    //   actividadLaboral28: evt.target.actividadLaboral28.value,
    //   actividadLaboral29: evt.target.actividadLaboral29.value,
    // }
    setInputValue((prev) => ({
      ...prev,
      fmttData
    }))
  }
  useEffect(() => {
    console.log('informacion acumulada hasta ahora')
    console.log(payload)
  }, [payload])

  return (
    <div className="form-container">
      <h1>Características del área de trabajo y valoración del trabajo</h1>
      <form
        id="form2"
        className="formStyle"
        onSubmit={(e) => {
          handleUpdate(e)
          setStep(step + 1)
        }}
      >
        <div id="arreglo">
          {AreaTrabajoPreguntasArray.map((pregunta, i) => (
            <CustomSelect
              key={i}
              pregunta={pregunta.pregunta}
              preguntaInputName={pregunta.preguntaInputName}
              opcionesArray={pregunta.opciones}
              tipo={pregunta.tipo}
            />
          ))}
        </div>
        <div className="button-container">
          <button
            type="button"
            className="button"
            onClick={(e) => {
              setStep(step - 1)
            }}
          >
            {"atras"}
          </button>
          <button
            type="button"
            className="button"
            onClick={(e) => {
              setStep(step + 1)
            }}
          >
            {"siguiente"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Parte2
