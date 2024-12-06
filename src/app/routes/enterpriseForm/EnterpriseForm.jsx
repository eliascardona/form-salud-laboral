import MainHeader from "../../../components/enterpriseForm/ui/headers/MainHeader"
import BottomBar from "../../../components/enterpriseForm/ui/bottomBar/BottomBar"
import ParteInicial from "../../../components/enterpriseForm/Forms/ParteInicial"

import "../../../assets/css/App.css"


export default function App() {
  return (
    <>
      <MainHeader />
      <div className="Home__grid">
        <ParteInicial />
      </div>
      <BottomBar />
    </>
  )
}