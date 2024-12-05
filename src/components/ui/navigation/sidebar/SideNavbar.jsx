import { useEffect, useState } from "react";
import ProfileOptions from "./ui/profileOptionsUI/ProfileOptions";
import LogicSidebar from "./logicSidebar/LogicSidebar";
import LogicNavcat from "./navcats/LogicNavcat";
import "./styles/navbar.css";

export default function SideNavbar({ isModalOpen, setModalToOpen }) {
  const [activeModalCSS, setActiveModalCSS] = useState('SNavbar__modalContainer')

  useEffect(() => {
    function checkState() {
      if (isModalOpen) {
        setActiveModalCSS('SNavbar__modalContainerActive')
      }
      setActiveModalCSS(p => p)
    }
    checkState()
  }, [isModalOpen])

  return (
    <>
      {activeModalCSS.length > 0 && (
        <LogicSidebar activeCSSClassName={activeModalCSS}>
          <ProfileOptions />
          <span
            className="SNavbar__close"
            onClick={() => setModalToOpen((b) => !b)}
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
