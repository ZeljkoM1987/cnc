"use client";
import React from "react";
import { Card } from "../components/card/Card"
import styles from "./About.module.css";


export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>O NAMA</h2>
      <div className={styles.content}>
        <div className={styles.aboutintro}>
          <img
            src="/images/hero2.jpg"
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
          />
          <div className={styles.introtext}>
            <h2>Ko smo mi?</h2>
            <p>Mi smo mlada i ambiciozna kompanija specijalizovana za CNC obradu metala. Sa savremenim proizvodnim pogonom i timom posvećenih stručnjaka,
              težimo da ispunimo najviše standarde kvaliteta i preciznosti u izradi metalnih komponenti.</p>
            <p>Naša misija je jednostavna. Želimo da izgradimo dugoročne odnose sa našim klijentima, zasnovane na poverenju, kvalitetu i obostranom uspjehu.</p>

          </div>
        </div>
        <div className={styles.feature}>
          <h2>Naše karakteristike</h2>
        </div>
        <div className={styles.cardsection}>
          <Card
            title="Stručno osoblje"
            text="Naše stručno osoblje, sa višegodišnjim iskustvom, osposobljeno je za uspešno rešavanje i najkompleksnijih zahteva kupaca."
            image="/brain.svg" />
          <Card
            title="Preciznost i Kvalitet"
            text="Zahvaljujući modernim CNC mašinama, obezbjeđujemo izuzetno preciznu obradu metala. Svaki proizvod prolazi internu kontrolu kvalitete."
            image="/warranty.svg" />
          <Card
            title="Brza isporuka"
            text="Pridržavamo se dogovorenih rokova isporuke, kako bismo osigurali važe zadovoljsto i povjerenje."
            image="/delivery.svg" />
          <Card
            title="Korisnička podrška"
            text="Na raspolaganju smo za konsultacije, podršku i prilagođavanje zahtevima klijenata. Trudimo se da izgradimo dugoročne partnerske odnose kroz transparentnu komunikaciju."
            image="/support.svg" />


        </div>
      </div>
    </section>

  );
};
export default About;