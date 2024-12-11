import "./styles/EnterpriseCreationForm.css"
import { useEnterpriseStore } from '../../../lib/(zustand)/formStore'
import { useEffect, useState } from "react";

export default function BeforeSubmit({ step, setStep, empleados }) {
  const participantEmployees = useEnterpriseStore((state) => state.participantEmployees)
  const setParticipantEmployees = useEnterpriseStore((state) => state.setParticipantEmployees)
  const [warningMessage, setWarningMessage] = useState("")
  const [buttonStatus, setButtonStatus] = useState(true)

  useEffect(() => {
    function validateParticipantsNumber() {
      if (participantEmployees < 1) {
        setWarningMessage("ingrese un número de participantes válido")
        setButtonStatus(p => p)
      } else {
        setWarningMessage("")
        setButtonStatus(false)
      }
      console.log(buttonStatus)
    }
    validateParticipantsNumber()
  }, [participantEmployees])

  const [show, setShow] = useState(false)

  return (
    <div className="Enterprise__formCard">
      {/* form content below */}
      <div className="Enterprise__oneColumn">
        <div className="Enterprise__columnItem">
          <h1>Concluir inscripción</h1>
          <span style={{ marginBottom: '1.5rem', display: 'block' }}>
            *Al presionar el botón enviar, usted acepta la participación en el programa ya mencionado y se compromete a procurar la asistencia de los trabajadores ya registrados.
          </span>
        </div>
      </div>

      <div className="Enterprise__oneColumn">
        <div className="Enterprise__columnItem">
          <h2>Los empleados que registro son:</h2>
        </div>
        {
          Array.isArray(empleados) && empleados.map((emp, i) => (
            <div className="Enterprise__line">
              <span style={{ width: '60%', paddingLeft: '1rem' }}>{emp.nombre} - {emp.curp}</span>
            </div>
          ))
        }
      </div>


      <div className="Enterprise__twoColumns">
        <div className="Enterprise__twoColumnsItem">
          <button
            type="button"
            className="Enterprise__btn"
            onClick={() => setStep(step - 1)}
          >
            regresar
          </button>
        </div>
        <div className="Enterprise__twoColumnsItem">
          <button
            type="button"
            className="Enterprise__submitBtn"
            onClick={() => {
              console.log('enviado a BD')
              setShow(true)
            }}
          >
            enviar
          </button>
        </div>
      </div>

      <div className="Enterprise__oneColumn">
        {
          show && (
            <span style={{ width: '70%', justifySelf: 'center', fontSize: '1.2em', marginBlock: '1.5rem' }}>
              Su inscripción ha sido exitosa, ahora forma parte del programa de salud laboral de la UAA
            </span>
          )
        }
      </div>

    </div>
  )
}
