import styles from "./page.module.css";
import { Hero1 } from "./components/hero/Hero1";
import { About1 } from "./components/about1/About1";
import { Services } from "./components/services/Services";

const Home = () => {
  return (
    <div className={styles.app}>
      <Hero1 />
      <About1 />
      <Services />
    </div>
  );
};

export default Home;
