import { useState } from "react";
import FormSteps from "../../../components/enterpriseForm/FormSteps/FormSteps";
import Pagination from "../../../components/enterpriseForm/Pagination/Pagination";
import MainHeader from "../../../components/enterpriseForm/ui/headers/MainHeader";
import "../../../assets/css/App.css";
import BottomBar from "../../../components/enterpriseForm/ui/bottomBar/BottomBar";


export default function App() {
  const [step, setStep] = useState(0);
  const pageIndicatorArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      <MainHeader />
      <div className="Home__grid">
        <>
          <Pagination
            pageIndicator={pageIndicatorArray}
            step={step}
            setStep={setStep}
          />
          <FormSteps step={step} setStep={setStep} />
        </>
      </div>
      <BottomBar />
    </>
  )
}