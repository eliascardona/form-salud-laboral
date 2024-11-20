import { useEffect, useState } from "react"
import { FormSteps } from "../components/FormSteps/FormSteps"
import Pagination from "../components/Pagination/Pagination"
import "../assets/css/App.css"
import SideNavbar from "../components/ui/navigation/sidebar/SideNavbar"
import MainHeader from "../components/ui/headers/MainHeader"

export default function App() {
  const [step, setStep] = useState(1)
  const pageIndicatorArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

  useEffect(() => {
    console.log('step', step)
  }, [step])

  return (
    <>
      <MainHeader />
      <SideNavbar />
      <div className="Home__grid">
        <>
          <Pagination 
            pageIndicator={pageIndicatorArray}
            step={step}
            setStep={setStep}
          />
          <FormSteps step={step} setStep={setStep} />
          <Pagination 
            pageIndicator={pageIndicatorArray}
            step={step}
            setStep={setStep}
          />
        </>
      </div>
    </>
  )
}