import {
  Parte1,
  Parte2,
  Parte3,
  Parte4,
  Parte5,
  Parte6,
  Parte7,
  Parte8,
  Parte9,
  Parte10,
  Parte11,
  Parte12,
  Parte13,
} from "../Forms/";

const components = [
  null,
  Parte1,
  Parte2,
  Parte3,
  Parte4,
  Parte5,
  Parte6,
  Parte7,
  Parte8,
  Parte9,
  Parte10,
  Parte11,
  Parte12,
  Parte13,
];

import { useFormStore } from '../Forms/(zustand)/formStore'


export const FormSteps = ({ step, setStep }) => {
  const StepComponent = components[step] || (() => <strong>algo raro paso</strong>)
  const { inputValue } = useFormStore()

  return (
    <>
      <StepComponent step={step} setStep={setStep} payload={inputValue} />
    </>
  )
}


















