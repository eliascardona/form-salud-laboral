import { useState } from "react";
import NavbarActivator from "../navigation/sidebar/NavbarActivator.jsx";
import SideNavbar from "../navigation/sidebar/SideNavbar.jsx";
import "./mainHeader.css";

export default function MainHeader() {
  const [isModalOpen, setModalToOpen] = useState(false);
  return (
    <div className="MainHeader__navCtn">
      <div className="MainHeader__navBody">
        
        <span className="responsiveNavButton">
          <NavbarActivator
            isModalOpen={isModalOpen}
            setModalToOpen={setModalToOpen}
          />
          <SideNavbar
            isModalOpen={isModalOpen}
            setModalToOpen={setModalToOpen}
          />
        </span>
        <h3>Sistema de salud</h3>
        {/* end of top-bar items */}

      </div>
    </div>
  )
}
