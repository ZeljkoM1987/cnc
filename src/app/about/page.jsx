"use client";
import React from "react";
import { Card } from "../components/card/Card"
import styles from "./About.module.css";
import Button from "../components/button/Button";
import { useTranslation } from 'react-i18next';


export const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.container} id="about">
      <div className={styles.headercontainer}>
        <h1>{t('AboutPage.pagetitle')}</h1>
      </div>
      <div className={styles.contentabout}>

        <img
          src="/images/hero2.jpg"
          alt="cnc obrada metala hefestcam"
          className={styles.aboutImage}
        />

        <div className={styles.aboutintrotext}>

          <p>{t('AboutPage.text1')}</p>
          <p>{t('AboutPage.text2')}</p>

          <p>{t('AboutPage.text3')}</p>
        </div>

      </div>

      <div className={styles.bannerabout}>

      {t('AboutPage.banner1')}

      </div>



      <div className={styles.contentabout}>
        <div className={styles.featurebox}>
          <div className={styles.feature}>
            <h2>{t('AboutPage.title2')}</h2>
          </div>
          <div className={styles.cardsection}>
            <Card
              title= {t('AboutPage.card1title')}
              text={t('AboutPage.card1text')}
              image="/brain.svg" />
            <Card
              title={t('AboutPage.card2title')}
              text={t('AboutPage.card2text')}
              image="/warranty.svg" />
            <Card
              title={t('AboutPage.card3title')}
              text={t('AboutPage.card3text')}
              image="/delivery.svg" />
            <Card
              title={t('AboutPage.card4title')}
              text={t('AboutPage.card4text')}
              image="/support.svg" />

          </div>
        </div>
      </div>
      <div className={styles.contentabout}>

        <img
          src="/images/about2.jpg"
          alt="hefestcam cnc glodanje"
          className={styles.aboutImage}
        />

        <div className={styles.aboutintrotext1}>

          <p>{t('AboutPage.text4')}</p>
          <p>{t('AboutPage.text5')}</p>
          <div className={styles.aboutbutton1}>
          <Button path="/services">{t('AboutPage.button2')}</Button>
        </div>
        </div>

      </div>

    </section >

  );
};
export default AboutPage;