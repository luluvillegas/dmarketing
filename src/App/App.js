import "../styles/global.css";
import "../styles/variables.css";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar theme="top"></NavBar>
      </header>
      <main>
        <Hero></Hero>
        <div>dsldljsd</div>
        <div>ksksk</div>
      </main>
      <footer>
        <NavBar theme="bottom"></NavBar>
      </footer>
    </div>
  );
}

export default App;
