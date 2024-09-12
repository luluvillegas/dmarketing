import "./Hero.css";
import Button from "../Button/Button";

export default function Hero() {
  return (
    <section className="background">
      <div className="blur">
        <div className="heroContentWrapper">
          <h1 className="title">
            <span className="titleHiglight"> DMarketing Point </span>la
            estategia para tu proyecto
          </h1>
          <Button href="" theme="primary">
            Contactanos
          </Button>
          {/* TODO:add href to button */}
        </div>
      </div>
    </section>
  );
}
