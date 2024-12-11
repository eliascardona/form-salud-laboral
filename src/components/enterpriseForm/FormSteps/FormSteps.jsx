import DefaultStep from './DefaultStep'
import EnterpriseFormOne from '../Forms/EnterpriseFormOne'
import EnterpriseFormTwo from '../Forms/EnterpriseFormTwo'

export default function FormSteps({ step, setStep }) {
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
          />
        ) : <DefaultStep />
      }
    </>
  )
}