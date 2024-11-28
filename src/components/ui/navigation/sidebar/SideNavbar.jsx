import { useState } from "react";
import ProfileOptions from "./ui/profileOptionsUI/ProfileOptions";
import LogicSidebar from "./logicSidebar/LogicSidebar";
import LogicNavcat from "./navcats/LogicNavcat";
import "./styles/navbar.css";

export default function SideNavbar({ isModalOpen, setModalToOpen }) {
  return (
    <>
      {isModalOpen && (
        <LogicSidebar>
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
