import { useEffect } from "react";
import { useFormStore } from '../Forms/(zustand)/formStore'

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
} from "../Forms/"
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
]
const SomethingWrongComponent = () => {
  return (
    <div style={{padding:'2rem'}}>
      <strong>algo raro paso</strong>
    </div>
  )
}

export const FormSteps = ({ step, setStep }) => {
  const StepComponent = components[step] || <SomethingWrongComponent />
  const { inputValue, setInputValue } = useFormStore()

  useEffect(() => {
    return () => {
      setInputValue((prev) => ({
          ...prev,
          nombre: "lol",
        })
      )
    }
  }, [inputValue])

  return (
    <>
      <StepComponent step={step} setStep={setStep} payload={inputValue} />
    </>
  )
}