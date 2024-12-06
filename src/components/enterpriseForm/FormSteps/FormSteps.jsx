import ParteInicial from '../Forms/ParteInicial'
import ParteMedia from '../Forms/ParteMedia'
import DefaultStep from './DefaultStep'
import {
  Preguntas1,
  Preguntas2
} from '../../../textos/preguntas'


export default function FormSteps({ step, setStep }) {
  const Final_Survey_Templates = [
    {jsx: Preguntas1, title: 'ejemplo 1', sectionId: 'NO_NEEDED', sectionKey: 'section1' },
    {jsx: Preguntas2, title: 'ejemplo 2', sectionId: 'CONDICIONES_LABORALES', sectionKey: 'section2' },
  ]

  return (
    <>
      {
        step === 0 ? (
          <ParteInicial 
            step={step}
            setStep={setStep}
          />
        ) : step === 1 ? (
          <ParteMedia 
            surveyTemplate={Final_Survey_Templates[step].jsx}
            sectionTitle={Final_Survey_Templates[step].title}
            sectionId={Final_Survey_Templates[step].sectionId}
            sectionKey={Final_Survey_Templates[step].sectionKey}
            step={step}
            setStep={setStep}
          />
        ) : <DefaultStep />
      }
    </>
  )
}