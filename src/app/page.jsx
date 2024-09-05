import styles from "./page.module.css"
import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Hero";
import { About, Card } from "./components/about/Card";

const Home = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <Card/>

    </div>
  );

};

export default Home;
