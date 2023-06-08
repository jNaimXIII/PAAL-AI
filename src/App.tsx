import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ParallaxText from "./components/ParallaxText";

function App() {
  return (
    <main>
      <div className="home-background">
        <div className="content">
          <Header />

          <Hero />
        </div>
      </div>

      <ParallaxText />
    </main>
  );
}

export default App;
