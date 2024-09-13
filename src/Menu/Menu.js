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
        <a href="#servicios">Servicios</a>
      </li>
      <li className="listItem">
        <a href="#acercade">Acerca de</a>
      </li>
      {theme === "top" ? (
        <li className="listItem">
          <Button href="#contacto" theme="secondary">
            Contactanos
          </Button>
        </li>
      ) : (
        <>
          <li className="listItem">
            <a href="contacto">Contacto</a>
          </li>
          <li className="listItem copyright">©2021 | DMarketing Point</li>
        </>
      )}
    </ul>
  );
}
