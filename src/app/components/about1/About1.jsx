"use client"
import React from "react";

import styles from "./About1.module.css";

import Button from "../button/Button";

export const About1 = () => {
  return (
    <>
      <section className={styles.container} >



        <div className={styles.aboutintro}>
          <img
            src="/images/hero2.jpg"
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
          />
          <div className={styles.introtext}>
            {/** <img src="/images/back2.jpg" alt="back" className={styles.introback}/>*/}
            <h2>Ko smo mi?</h2>
            <div className={styles.introstat}>
              <img src="/company.svg" alt="company" className={styles.introstatimage} />
              <p>mlada i ambiciozna kompanija specijalizovana za CNC obradu metala sa savremenim proizvodnim pogonom</p>
            </div>
            <div className={styles.introstat}>
              <img src="/certificate.svg" alt="company" className={styles.introstatimage} />
              <p> sa timom posvećenih stručnjaka,
                težimo da ispunimo najviše standarde kvaliteta i preciznosti u izradi metalnih komponenti.</p>
            </div>

            <div className={styles.introstat}>
              <img src="/graph.svg" alt="company" className={styles.introstatimage} />
              <p>Naša misija je jednostavna. Želimo da izgradimo dugoročne odnose sa našim klijentima, zasnovane na poverenju, kvalitetu i obostranom uspjehu.</p>
            </div>
            <Button path="/about"> O nama</Button>
          </div>
        </div>

      </section>
      <div className={styles.banner}>
        <h2>"Naša vizija je da svaki projekt pretvorimo u priliku za rast, inovaciju i postizanje
          vrhunskog kvaliteta u CNC obradi metala."</h2>
      </div>
      <section className={styles.container1} >
        <div className={styles.introtext2}>
          <h2>Šta mi radimo?</h2>
        </div>
        <div className={styles.iconcontainer}>

          <div className={styles.iconitems}>
            <div className={styles.iconimg}>
              <img src="/milling.svg" alt="milling" />
            </div>
            <h4>CNC Glodanje</h4>
          </div>
          <div className={styles.iconitems}>
            <div className={styles.iconimg}>
              <img src="/turning.svg" alt="milling" />
            </div>
            <h4>CNC Tokaranje</h4>
          </div>
          <div className={styles.iconitems}>
            <div className={styles.iconimg}>
              <img src="/CAD.svg" alt="milling" />
            </div>
            <h4>CAM/CAD Programiranje</h4>
          </div >
        </div>
 <div className={styles.aboutbutton}>
  <p>Više o našim uslugama pročitajte na sljedećem linku:</p>
            <Button path="about"> Servisi</Button>

            </div>
          




      </section >
    </>
  );
};