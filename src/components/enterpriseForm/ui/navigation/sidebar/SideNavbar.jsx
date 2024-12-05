import { useEffect, useState } from "react";
import ProfileOptions from "./ui/profileOptionsUI/ProfileOptions";
import LogicSidebar from "./logicSidebar/LogicSidebar";
import LogicNavcat from "./navcats/LogicNavcat";
import "./styles/navbar.css";

export default function SideNavbar({ isModalOpen, setModalToOpen }) {
  const [activeModalCSS, setActiveModalCSS] = useState('SNavbar__modalContainer')

  useEffect(() => {
    function checkState() {
      console.log(isModalOpen)
      
      if (isModalOpen) {
        setActiveModalCSS('SNavbar__modalContainerActive')
      }
      setActiveModalCSS(p => p)
    }
    checkState()
  }, [isModalOpen])

  return (
    <>
      {activeModalCSS === 'SNavbar__modalContainerActive' && (
        <LogicSidebar activeCSSClassName={activeModalCSS}>
          <ProfileOptions />
          <span
            className="SNavbar__close"
            onClick={() => setModalToOpen(false)}
          >
            cerrar
          </span>
          {/* <LogicNavcat /> */}
          <span></span>
        </LogicSidebar>
      )}
    </>
  );
}
