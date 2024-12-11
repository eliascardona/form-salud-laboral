import { useState } from 'react'
import DefaultStep from './DefaultStep'
import EnterpriseFormOne from '../Forms/EnterpriseFormOne'
import EnterpriseFormTwo from '../Forms/EnterpriseFormTwo'
import BeforeSubmit from '../Forms/BeforeSubmit'


export default function FormSteps({ step, setStep }) {
  const [empleados, setEmpleados] = useState([])
  return (
    <>
      {
        step === 0 ? (
          <EnterpriseFormOne 
            step={step}
            setStep={setStep}
          />
        ) : step === 1 ? (
          <EnterpriseFormTwo 
            step={step}
            setStep={setStep}
            empleados={empleados}
            setEmpleados={setEmpleados}
          />
        ) : step === 2 ? (
          <BeforeSubmit 
            step={step}
            setStep={setStep}
            empleados={empleados}
          />
        ) : <DefaultStep />
      }
    </>
  )
}