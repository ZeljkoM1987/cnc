"use client";
import React from "react";
import { Card } from "../components/card/Card"
import styles from "./About.module.css";
import Button from "../components/button/Button";


export const AboutPage = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.headercontainer}>
        <h1>O NAMA</h1>
      </div>
      <div className={styles.contentabout}>

        <img
          src="/images/hero2.jpg"
          alt="cnc milling"
          className={styles.aboutImage}
        />

        <div className={styles.aboutintrotext}>

          <p>Hefest CAM je mlada i ambiciozna kompanija specijalizovana za CNC obradu metala  sa fokusom na preciznost, kvalitet i pouzdanost. Sa savremenim proizvodnim pogonom i timom posvećenih stručnjaka,
            težimo da ispunimo najviše standarde kvaliteta i preciznosti u izradi metalnih komponenti.</p>
          <p>Hefest CAM se nalazi na području Grada Gradiška, na 12 km udaljenosti od granice sa Evropskom unijom. Ovaj položaj nam omogućava brzu i efikasnu saradnju sa evropskim partnerima i  čini nas idealnim partnerom za kompanije koje traže
            kvalitetne CNC usluge uz minimalne logističke izazove.</p>

          <p>Naša misija je jednostavna. Želimo da izgradimo dugoročne odnose sa našim klijentima, zasnovane na poverenju, kvalitetu i obostranom uspjehu.</p>
        </div>

      </div>

      <div className={styles.bannerabout}>

        Ime naše kompanije vuče inspiraciju iz starogrčke mitologije, gde je Hefest,
        bog vatre i kovačkog zanata, bio poznat po svom umeću u obradi metala. Upravo tako i mi,
        s posvećenošću i preciznošću, stvaramo proizvode koji odražavaju našu strast i stručnost u ovom zanatu.

      </div>



      <div className={styles.contentabout}>
        <div className={styles.featurebox}>
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
      </div>
      <div className={styles.contentabout}>

        <img
          src="/images/about2.jpg"
          alt="cnc milling"
          className={styles.aboutImage}
        />

        <div className={styles.aboutintrotext1}>

          <p>Hefest CAM nudi fleksibilne proizvodne opcije, prilagođene potrebama naših klijenata.</p>
          <p>Specijalizovani smo za pojedinačnu proizvodnju, prema tačnim specifikacijama i serijsku proizvodnju, manjeg i srednjeg obima.</p>
          <div className={styles.aboutbutton1}>
          <Button path="/projects">Više o Servisima</Button>
        </div>
        </div>

      </div>

    </section >

  );
};
export default AboutPage;