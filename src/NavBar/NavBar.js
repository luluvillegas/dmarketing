import "./NavBar.css";
import Menu from "../Menu/Menu";
import logo from "../assets/logos/logo-s.png";

export default function NavBar({ theme }) {
  return (
    <div className="navBarWrapper">
      <div className="logoSmall">
        <img
          src={logo}
          alt="DMarketing logo of an orange target and the name on the right side"
        />
      </div>
      <Menu theme={theme}></Menu>
    </div>
  );
}
