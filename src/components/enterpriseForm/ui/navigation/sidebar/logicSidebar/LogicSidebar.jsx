import { useEffect } from "react";
import "../styles/sideNavbar.css";

export default function LogicSidebar({ activeCSSClassName, children }) {
  useEffect(() => {
    function checkState() {
      console.log(activeCSSClassName)
    }
    checkState()
  }, [activeCSSClassName])

  return (
    <div className={activeCSSClassName}>
      <div className="SNavbar__mainLy">{children}</div>
    </div>
  )
}
