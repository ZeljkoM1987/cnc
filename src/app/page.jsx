import styles from "./page.module.css"
import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Hero";
import { About1 } from "./components/about/About1";

const Home = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <About1 />

    </div>
  );

};

export default Home;
