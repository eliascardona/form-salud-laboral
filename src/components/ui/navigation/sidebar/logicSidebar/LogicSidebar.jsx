import "../styles/sideNavbar.css";

export default function LogicSidebar({ children }) {
  return (
    <div className="SNavbar__globalContainer">
      <div className="SNavbar__modalContainer">
        <div className="SNavbar__mainLy">{children}</div>
      </div>
    </div>
  );
}
