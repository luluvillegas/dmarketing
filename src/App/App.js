import "../styles/global.css";
import "../styles/variables.css";
import "./App.css";
import { services } from "../data/services";
import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";
import SmallCard from "../SmallCard/SmallCard";
import Button from "../Button/Button";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar theme="top"></NavBar>
      </header>
      <main>
        <section id="home">
          <Hero></Hero>
        </section>
        <section id="servicios" className="services">
          <h2 className="hidden">Services</h2>
          <div className="serviceCards">
            {services.map((service, index) => (
              <SmallCard
                key={index}
                theme={service.theme}
                iconSrc={service.iconSrc}
                alt={service.alt}
                title={service.title}
                description={service.description}
              ></SmallCard>
            ))}
          </div>
          <Button theme="primary" href="">
            Ver Menos Servicios
          </Button>
        </section>
        <section id="acercade" className="aboutUs">
          <img
            className="aboutUsImage"
            src="../assets/images/acercade.png"
            alt="Phone screen being held by a person in front of a laptop"
          />

          <div className="aboutUsCardWrapper">
            <div className="aboutUsCardTitle">
              <h2 className="aboutUsHighlightedTitle">Acerca de</h2>
              <p className="aboutUsTitle">DMarketing Point</p>
            </div>
            <p className="aboutUsCardContent">
              El objetivo de la agencia DMarketing Point es convertirse en un
              partner estratégico de empresas, emprendedores y profesionales.
              Creemos en la planificación, en el planteo de objetivos y por
              sobre todas las cosas en el trabajo persistente para cumplir
              metas.
            </p>
          </div>
        </section>
        <section id="contacto">
          <h2>Contactanos</h2>
        </section>
      </main>
      <footer>
        <NavBar theme="bottom"></NavBar>
      </footer>
    </div>
  );
}

export default App;
