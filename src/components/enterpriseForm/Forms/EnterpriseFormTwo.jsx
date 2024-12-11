import "./styles/EnterpriseCreationForm.css"
import { useEnterpriseStore } from '../../../lib/(zustand)/formStore'
import { useEffect, useState } from "react"
import WrapperDiv from "./ui/WrapperDiv"

function EnterpriseInput({ labelv, namev, placeholderv }) {
  return (
    <div className="Enterprise__columnItem">
      <label className="Enterprise__labelStyle">{labelv}</label>
      <input type="text" name={namev} placeholder={placeholderv} />
    </div>
  )
}

function EmpresaRegistro({ numeroEmpleados }) {
  const [targetArray, setTargetArray] = useState(0)
  const [empleados, setEmpleados] = useState([])
  useEffect(() => {
    function setTargetCB(params) {
      setTargetArray(p => numeroEmpleados)
    }
    setTargetCB()
  }, [numeroEmpleados])

  useEffect(() => {
    function setLol() {
      if (targetArray < 1) return
      setEmpleados(p => Array(targetArray)
        .fill(null)
        .map(() => ({ nombre: "", curp: "" })))
    }
    setLol()
  }, [targetArray])

  const handleEmpleadoChange = (index, e) => {
    const { name, value } = e.target;
    const nuevosEmpleados = [...empleados];
    nuevosEmpleados[index] = { ...nuevosEmpleados[index], [name]: value };
    setEmpleados(nuevosEmpleados)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("Datos de los empleados:", empleados);
  }

  return (
    <div>
      <h2>Registro de empleados participantes</h2>
      {
        empleados.length < 1 ? (
          <h3 style={{ color: 'orange', marginBlock: '1.65rem' }}>Al parecer, no ingresaste ningún empleado participante, revísalo</h3>
        ) : (
          <form onSubmit={(e) => handleSubmit(e)}>
            {/* <WrapperDiv /> */}
            {empleados.map((empleado, index) => (
              <div key={index}>
                <div className="Enterprise__oneColumn">
                  <div className="Enterprise__columnItem">
                    <h2>Datos del empleado {index + 1}</h2>
                  </div>
                </div>
                <div className="Enterprise__oneColumn">
                  <div className="Enterprise__columnItem">
                    <EnterpriseInput
                      labelv={"Nombre completo del trabajador:"}
                      namev={"nombre"}
                      placeholderv={"nombre(s)"}
                    />
                  </div>
                </div>
                <div className="Enterprise__oneColumn">
                  <div className="Enterprise__columnItem">
                    <EnterpriseInput
                      labelv={"CURP del trabajador:"}
                      namev={"curp"}
                      placeholderv={"nombre(s)"}
                    />
                  </div>
                </div>

              </div>
            ))}
            {/* <button type="submit">Registrar</button> */}
          </form>
        )
      }
    </div>
  )
}

export default function EnterpriseFormTwo({ step, setStep }) {
  const participantEmployees = useEnterpriseStore((state) => state.participantEmployees)

  return (
    <div className="Enterprise__formCard">
      <div className="Enterprise__oneColumn">
        <EmpresaRegistro numeroEmpleados={participantEmployees} />
      </div>

      <div className="Enterprise__oneColumn">
        <button
          type="button"
          className="Enterprise__btn"
          onClick={() => setStep(step - 1)}
        >
          regresar
        </button>
      </div>
    </div>
  )
}