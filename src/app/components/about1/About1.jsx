"use client"
import React from "react";

import styles from "./About1.module.css";


export const About1 = () => {
  return (
    <section className={styles.container} >
   
      
      
        <div className={styles.aboutintro}>
          <img
            src="/images/hero2.jpg"
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
          />
           <div className={styles.introtext}>
            <img src="/images/back2.jpg" alt="back" className={styles.introback}/>
            <h2>Ko smo mi?</h2>
            <div className={styles.introstat}>
              <img src="/company.svg" alt="company" className={styles.introstatimage}/>
            <p>mlada i ambiciozna kompanija specijalizovana za CNC obradu metala sa savremenim proizvodnim pogonom</p>
            </div>
            <div className={styles.introstat}>
              <img src="/certificate.svg" alt="company" className={styles.introstatimage}/>
              <p> sa timom posvećenih stručnjaka,
              težimo da ispunimo najviše standarde kvaliteta i preciznosti u izradi metalnih komponenti.</p>
            </div>
           
             <div className={styles.introstat}>
              <img src="/graph.svg" alt="company" className={styles.introstatimage}/>
              <p>Naša misija je jednostavna. Želimo da izgradimo dugoročne odnose sa našim klijentima, zasnovane na poverenju, kvalitetu i obostranom uspjehu.</p>
            </div>
            
                <button>Više o nama</button>
          </div>
        </div>
        <div className={styles.aboutintro}>
          <div className={styles.lefttext}>
            <h2>Ko smo mi?</h2>
            <h3>Mi smo tip koji kombinuje stručnost, savremenu tehnologiju i posvećenost kako bismo postigli izvanredne rezultate u obradi metala</h3>
          </div>
          <div className={styles.introtext}>
            <img src="/images/back2.jpg" alt="back" className={styles.introback}/>
            <h2>Ko smo mi?</h2>
            <div className={styles.introstat}>
              <img src="/company.svg" alt="company" className={styles.introstatimage}/>
            <p>mlada i ambiciozna kompanija specijalizovana za CNC obradu metala sa savremenim proizvodnim pogonom</p>
            </div>
            <div className={styles.introstat}>
              <img src="/certificate.svg" alt="company" className={styles.introstatimage}/>
              <p> sa timom posvećenih stručnjaka,
              težimo da ispunimo najviše standarde kvaliteta i preciznosti u izradi metalnih komponenti.</p>
            </div>
           
             <div className={styles.introstat}>
              <img src="/graph.svg" alt="company" className={styles.introstatimage}/>
              <p>Naša misija je jednostavna. Želimo da izgradimo dugoročne odnose sa našim klijentima, zasnovane na poverenju, kvalitetu i obostranom uspjehu.</p>
            </div>
            
                <button>Više o nama</button>
          </div>
        </div>
       
        
        <div className={styles.feature}>
          <h2>Naše karakteristike</h2>
        </div>
        
   
    </section>

  );
};