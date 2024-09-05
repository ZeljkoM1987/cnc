import React from "react";

import styles from "./About1.module.css";


export const About1 = () => {
  return (
 <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <div className={styles.aboutintro}>
        <img
          src="/images/hero2.jpg"
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <div className= {styles.introtext}>
          <h2>Ko smo mi?</h2>
          <p>Mi smo mlada i ambiciozna kompanija specijalizovana za CNC obradu metala. Sa savremenim proizvodnim pogonom i timom posvećenih stručnjaka, 
            težimo da ispunimo najviše standarde kvaliteta i preciznosti u izradi metalnih komponenti.</p>
            <p>Naša misija je jednostavna. Želimo da izgradimo dugoročne odnose sa našim klijentima, zasnovane na poverenju, kvalitetu i obostranom uspjehu.</p>

        </div>
        </div>
        <div className={styles.feature}>
          <h2>Naše karakteristike</h2>
        </div>
      </div>
    </section>
    
  );
};