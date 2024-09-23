import styles from "./page.module.css";
import { Hero1 } from "./components/hero/Hero1";
import { About1 } from "./components/about1/About1";


const Home = () => {
  return (
    <div className={styles.app}>
      <Hero1 />
      <About1 />
    
    </div>
  );
};

export default Home;
