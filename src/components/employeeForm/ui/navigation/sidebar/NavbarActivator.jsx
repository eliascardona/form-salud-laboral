import "./styles/navbar.css";

export default function NavbarActivator({ setModalToOpen }) {
  return (
    <span>
      <span
        className="Navbar__activator_item2"
        onClick={() => setModalToOpen(p => !p)}
      >
        <ion-icon name="menu-outline"></ion-icon>
      </span>
    </span>
  );
}
