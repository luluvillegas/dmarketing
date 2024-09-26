import "./NavBar.css";
import Menu from "../Menu/Menu";

export default function NavBar({ theme }) {
  return (
    <>
      {theme === "top" ? (
        <div className={`navBarWrapper ${theme}NavBar`}>
          <img
            src="./assets/logos/logo-s.png"
            alt="Small DMarketing logo of an orange target and the name on the right side"
          />
          <Menu theme={theme}></Menu>
        </div>
      ) : (
        <div className={`navBarWrapper ${theme}NavBar`}>
          <img
            src="./assets/logos/logo-m.png"
            alt="Medium DMarketing logo of an orange target and the name on the right side"
          />
          <Menu theme={theme}></Menu>
        </div>
      )}
    </>
  );
}
