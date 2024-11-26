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
    {jsx: Preguntas1},
    {jsx: Preguntas2},
    {jsx: Preguntas3},
    {jsx: Preguntas4},
    {jsx: Preguntas5},
    {jsx: Preguntas6},
    {jsx: Preguntas7},
    {jsx: Preguntas8},
    {jsx: Preguntas9},
    {jsx: Preguntas10},
    {jsx: Preguntas11},
    {jsx: Preguntas12},
    {jsx: Preguntas13},
  ]

  useEffect(() => {
    console.log('step from props', step)
  }, [step])

  return (
    <>
      {
        step === 1 ? (
          <ParteInicial 
            step={step}
            setStep={setStep}
          />
        ) : (step > 2 || step < 13) ? (
          <ParteMedia 
            surveyTemplate={Final_Survey_Templates[step-1].jsx}
            sectionTitle={"Titulo de la sección"}
            step={step}
            setStep={setStep}
          />
        ) : step === 13 ? (
          <ParteFinal 
            surveyTemplate={Final_Survey_Templates[13].jsx}
            step={step}
            setStep={setStep}
          />
        ) : <DefaultStep />
      }
    </>
  )
}