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
const SomethingWrongComponent = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <strong>algo raro paso</strong>
    </div>
  )
}

export const FormSteps = ({ step, setStep }) => {
  const { inputValue } = useFormStore()

  return (
    <>
      {
        step === 1 ? (
          <Parte1 step={step} setStep={setStep} payload={inputValue} />
        ) : step === 2 ? (
          <Parte2 step={step} setStep={setStep} payload={inputValue} />
        ) : step === 3 ? (
          <Parte3 step={step} setStep={setStep} payload={inputValue} />
        ) : step === 4 ? (
          <Parte4 step={step} setStep={setStep} payload={inputValue} />
        ) : step === 5 ? (
          <Parte5 step={step} setStep={setStep} payload={inputValue} />
        ) : step === 6 ? (
          <Parte6 step={step} setStep={setStep} payload={inputValue} />
        ) : step === 7 ? (
          <Parte7 step={step} setStep={setStep} payload={inputValue} />
        ) : step === 8 ? (
          <Parte8 step={step} setStep={setStep} payload={inputValue} />
        ) : step === 9 ? (
          <Parte9 step={step} setStep={setStep} payload={inputValue} />
        ) : step === 10 ? (
          <Parte10 step={step} setStep={setStep} payload={inputValue} />
        ) : step === 11 ? (
          <Parte11 step={step} setStep={setStep} payload={inputValue} />
        ) : step === 12 ? (
          <Parte12 step={step} setStep={setStep} payload={inputValue} />
        ) : step === 13 ? (
          <Parte13 step={step} setStep={setStep} payload={inputValue} />
        ) : <SomethingWrongComponent />
      }
    </>
  )
}