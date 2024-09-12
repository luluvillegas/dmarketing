import "./Button.css";

const themes = {
  primary: "primary",
  secondary: "secondary",
};

export default function Button({ theme, href, children }) {
  return (
    <button href={href} className={`button ${themes[theme]}`}>
      {children}
    </button>
  );
}
