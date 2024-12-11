import "./styles/EnterpriseCreationForm.css"
import { useEnterpriseStore } from '../../../lib/(zustand)/formStore'
import { useEffect, useState } from "react";

function EnterpriseInput({ labelv, namev, placeholderv }) {
  return (
    <div className="Enterprise__columnItem">
      <label className="Enterprise__labelStyle">{labelv}</label>
      <input type="text" name={namev} placeholder={placeholderv} />
    </div>
  )
}

export default function EnterpriseFormOne({ step, setStep }) {
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

  return (
    <div className="Enterprise__formCard">
      {/* form content below */}
      <div className="Enterprise__oneColumn">
        <div className="Enterprise__columnItem">
          <h1>Inscripción al programa de Salud Laboral</h1>
          <span style={{ marginBottom: '1.5rem', display: 'block' }}>
            Al llenar el formulario usted acepta la participación en el programa ya mencionado y deberá de registrar los nombres y CURP de los trabajadores que han decidido formar parte del programa.
          </span>
        </div>
      </div>
      <div className="Enterprise__oneColumn">
        <EnterpriseInput
          labelv={"Nombre de la empresa"}
          namev={"nombre"}
          placeholderv={"nombre(s)"}
        />
      </div>

      <div className="Enterprise__oneColumn">
        <EnterpriseInput
          labelv={"Dirección de la empresa"}
          namev={"direccion"}
          placeholderv={"direccion"}
        />
      </div>

      <div className="Enterprise__oneColumn">
        <div className="Enterprise__columnItem">
          <label className="Enterprise__labelStyle">Número de empleados participantes</label>
          <input
            type="number"
            name="num_empleados"
            placeholder="10"
            onChange={(e) => {
              const evtValue = e.target.value
              const parsedValue = parseInt(evtValue)
              setParticipantEmployees(parsedValue)
            }}
          />
        </div>
      </div>

      <div className="Enterprise__oneColumn">
        {
          warningMessage.length < 1 ? (
            <span style={{ justifySelf:'center', fontSize: '1.2em', marginBlock: '1.5rem' }}>
              Número de empleados a registrar: {participantEmployees}
            </span>
          ) : (
            <span style={{ justifySelf:'center', fontSize: '1.2em', marginBlock: '1.5rem' }}>
              {warningMessage}
            </span>
          )
        }
        <button
          type="button"
          className="Enterprise__btn"
          onClick={() => setStep(step + 1)}
          disabled={buttonStatus}
        >
          siguiente paso
        </button>
      </div>

    </div>
  )
}
