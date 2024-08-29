import styles from "./page.module.css"
import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Hero";
const Home = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />

    </div>
  );

};

export default Home;
