import ProfileOptions from "./ui/profileOptionsUI/ProfileOptions";
import LogicNavcat from "./navcats/LogicNavcat";
import "./styles/navbar.css";

export default function SideNavbar({ isModalOpen, setModalToOpen }) {
  return (
    <div className={isModalOpen ? 'SNavbar__modalContainerActive' : 'SNavbar__modalContainer'}>
      <div className="SNavbar__mainLy">
        <ProfileOptions />
        <span
          className="SNavbar__close"
          onClick={() => setModalToOpen(false)}
        >
          cerrar
        </span>
        {/* <LogicNavcat /> */}
        <span></span>
      </div>
    </div>
  )
}
