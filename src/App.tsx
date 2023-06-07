import styles from "./App.module.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ParallaxText from "./components/ParallaxText";

function App() {
  return (
    <main>
      <div className={styles.homeBackground}>
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
