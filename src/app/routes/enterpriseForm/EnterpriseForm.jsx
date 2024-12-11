import { useState } from "react";
import FormSteps from "../../../components/enterpriseForm/FormSteps/FormSteps";
// import Pagination from "../../../components/employeeForm/Pagination/Pagination";
import MainHeader from "../../../components/employeeForm/ui/headers/MainHeader";
import "../../../assets/css/App.css";
import BottomBar from "../../../components/employeeForm/ui/bottomBar/BottomBar";


export default function App() {
  const [step, setStep] = useState(0);

  return (
    <>
      <MainHeader />
      <div className="Home__grid">
        <>
          <FormSteps step={step} setStep={setStep} />
        </>
      </div>
      <BottomBar />
    </>
  )
}