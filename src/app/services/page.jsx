import React from "react";
import styles from "./servicesPage.module.css";
import { CardServices } from "../components/cardservices/CardServices";

const ProjectsPage = () => {
  return (
    
 <section className={styles.servicesPageContainer}>
    <div className={styles.headercontainer}>
      <h1>USLUGE</h1>
    </div>
    <div className={styles.firstBlock}>
    {/*<div className={styles.textcontent}>
      <h3>CNC GLODANJE</h3>
      <p>Naša primarna usluga je CNC obrada metala glodanjem. Specijalizovani smo za pojedinačnu proizvodnju, prema tačnim specifikacijama i serijsku proizvodnju, manjeg i srednjeg obima. U radu koristimo mašine Hurco VMX24t. </p>  
      
    </div>
      <div className={styles.visual}>
      <img src="/images/milling.jpg" alt="" />
    </div>

      
      </div> <div className={styles.card}> */}  
      <CardServices/>
      </div>
    </section>
      
        
     

        
  );
};

export default ProjectsPage;