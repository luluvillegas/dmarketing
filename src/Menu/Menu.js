import "./Menu.css";
import Button from "../Button/Button";

const themes = {
  top: "top",
  bottom: "bottom",
};

export default function Menu({ theme }) {
  return (
    <ul className={`list ${themes[theme]}`}>
      <li className="listItem">
        <a href="">Servicios</a>
      </li>
      <li className="listItem">
        <a href="">Acerca de</a>
      </li>
      {theme === "top" ? (
        <li className="listItem">
          <Button theme="secondary" href="">
            Contactanos
          </Button>
        </li>
      ) : (
        <li className="listItem">
          <a href="">Contacto</a>
        </li>
      )}
    </ul>
  );
}
