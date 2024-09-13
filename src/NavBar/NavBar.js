import "./NavBar.css";
import Menu from "../Menu/Menu";
import smallLogo from "../assets/logos/logo-s.png";
import mediumLogo from "../assets/logos/logo-m.png";

export default function NavBar({ theme }) {
  return (
    <>
      {theme === "top" ? (
        <div className={`navBarWrapper ${theme}NavBar`}>
          <img
            src={smallLogo}
            alt="Small DMarketing logo of an orange target and the name on the right side"
          />
          <Menu theme={theme}></Menu>
        </div>
      ) : (
        <div className={`navBarWrapper ${theme}NavBar`}>
          <img
            src={mediumLogo}
            alt="Medium DMarketing logo of an orange target and the name on the right side"
          />
          <Menu theme={theme}></Menu>
        </div>
      )}
    </>
  );
}
