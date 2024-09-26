import "../styles/global.css";
import "../styles/variables.css";
import "./App.css";
import { services } from "../data/services";
import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";
import Card from "../Card/Card";
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
          <div className="serviceCards">
            {services.map((service, index) => (
              <Card
                key={index}
                theme={service.theme}
                iconSrc={service.iconSrc}
                alt={service.alt}
                title={service.title}
                description={service.description}
              ></Card>
            ))}
          </div>
          <Button theme="primary" href="">
            Ver Menos Servicios
          </Button>
        </section>
      </main>
      <footer>
        <NavBar theme="bottom"></NavBar>
      </footer>
    </div>
  );
}

export default App;
