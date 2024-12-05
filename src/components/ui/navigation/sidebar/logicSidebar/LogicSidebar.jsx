import "../styles/sideNavbar.css";

export default function LogicSidebar({ activeCSSClassName, children }) {
  return (
    <div className={activeCSSClassName}>
      <div className="SNavbar__mainLy">{children}</div>
    </div>
  )
}
