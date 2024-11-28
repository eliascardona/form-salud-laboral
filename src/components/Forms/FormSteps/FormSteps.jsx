import { useEffect } from 'react'
import ParteInicial from '../ParteInicial'
import ParteMedia from '../ParteMedia'
import ParteFinal from '../ParteFinal'
import DefaultStep from './DefaultStep'
import {
  Preguntas1,
  Preguntas2,
  Preguntas3,
  Preguntas4,
  Preguntas5,
  Preguntas6,
  Preguntas7,
  Preguntas8,
  Preguntas9,
  Preguntas10,
  Preguntas11,
  Preguntas12,
  Preguntas13
} from '../../../textos/preguntas'


export default function FormSteps({ step, setStep }) {
  const Final_Survey_Templates = [
    {jsx: Preguntas1, title: 'ejemplo 1', sectionId: 'NO_NEEDED', sectionKey: 'section1' },
    {jsx: Preguntas2, title: 'ejemplo 2', sectionId: 'CONDICIONES_LABORALES', sectionKey: 'section2' },
    {jsx: Preguntas3, title: 'ejemplo 3', sectionId: 'FACTORES_FAMILIARES', sectionKey: 'section3' },
    {jsx: Preguntas4, title: 'ejemplo 4', sectionId: 'FACTORES_SOCIOCULTURALES', sectionKey: 'section4' },
    {jsx: Preguntas5, title: 'ejemplo 5', sectionId: 'SALUD_GENERAL', sectionKey: 'section5' },
    {jsx: Preguntas6, title: 'ejemplo 6', sectionId: 'AUTOCUIDADO_UNIVERSAL', sectionKey: 'section6' },
    {jsx: Preguntas7, title: 'ejemplo 7', sectionId: 'SALUD_CARDIOVASCULAR', sectionKey: 'section7' },
    {jsx: Preguntas8, title: 'ejemplo 8', sectionId: 'NUTRICION', sectionKey: 'section8' },
    {jsx: Preguntas9, title: 'ejemplo 9', sectionId: 'ESTILO_DE_VIDA', sectionKey: 'section9' },
    {jsx: Preguntas10, title: 'ejemplo 10', sectionId: 'SALUD_AUDIOVISUAL', sectionKey: 'section10' },
    {jsx: Preguntas11, title: 'ejemplo 11', sectionId: 'PREVENCION_DE_RIESGOS', sectionKey: 'section11' },
    {jsx: Preguntas12, title: 'ejemplo 12', sectionId: 'FACTORES_AMBIENTALES', sectionKey: 'section12' },
    {jsx: Preguntas13, title: 'ejemplo 13', sectionId: 'PROMOCION_HUMANA', sectionKey: 'section13' },
  ]

  useEffect(() => {
    console.log('step from props', step)
  }, [step])

  return (
    <>
      {
        step === 0 ? (
          <ParteInicial 
            step={step}
            setStep={setStep}
          />
        ) : (step > 0 && step < 12) ? (
          <ParteMedia 
            surveyTemplate={Final_Survey_Templates[step].jsx}
            sectionTitle={Final_Survey_Templates[step].title}
            sectionId={Final_Survey_Templates[step].sectionId}
            sectionKey={Final_Survey_Templates[step].sectionKey}
            step={step}
            setStep={setStep}
          />
        ) : step === 12 ? (
          <ParteFinal 
            surveyTemplate={Final_Survey_Templates[step].jsx}
            step={step}
            setStep={setStep}
          />
        ) : <DefaultStep />
      }
    </>
  )
}