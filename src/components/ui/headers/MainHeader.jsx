import { useState } from "react";
import NavbarActivator from "../navigation/sidebar/NavbarActivator.jsx";
import SideNavbar from "../navigation/sidebar/SideNavbar.jsx";
import "./mainHeader.css";

export default function MainHeader() {
  const [isModalOpen, setModalToOpen] = useState(false);
  return (
    <div className="MainHeader__navCtn">
      <div className="MainHeader__navBody">
        <span>
          <a href="/" className="MainHeader__link">
            inicio
          </a>
        </span>
        {/*    navigation links   */}
        <span>
          <a href="/encuestas" className="MainHeader__link">
            encuestas
          </a>
        </span>
        <span>
          <a href="/crear-encuestas" className="MainHeader__link">
            iniciar encuesta
          </a>
        </span>
        <span>
          <a href="/signUp" className="MainHeader__link">
            crear cuenta
          </a>
        </span>
        <span>
          <a href="/signIn" className="MainHeader__link">
            iniciar sesión
          </a>
        </span>
        {/*  Auxiliar items  */}
        <span style={{ visibility: "hidden" }}></span>
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
      </div>
    </div>
  );
}
