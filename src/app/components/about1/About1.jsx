"use client";
import React from "react";

import styles from "./About1.module.css";

import Button from "../button/Button";

import { Bounce } from "react-awesome-reveal";

import Image from "next/image";

import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { useTranslation } from 'react-i18next';

export const About1 = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className={styles.container}>
        <div className={styles.aboutintro}>
          <img
            src="/images/hero2.jpg"
            alt={t('About1.alt1')}
            className={styles.aboutImage}
          />
          <div className={styles.introtext}>
            {/** <img src="/images/back2.jpg" alt="back" className={styles.introback}/>*/}
            <h2>{t('About1.title1')}</h2>
            <div className={styles.introstat}>
              <img
                src="/company.svg"
                alt="company"
                className={styles.introstatimage}
              />
              <p>
              {t('About1.text1')}
              </p>
            </div>
            <div className={styles.introstat}>
              <Image
                src="/certificate.svg"
                alt="company"
                className={styles.introstatimage}
                height={400}
                width={400}
              />
              <p>
                {" "}
                {t('About1.text2')}
              </p>
            </div>

            <div className={styles.introstat}>
              <img
                src="/graph.svg"
                alt="company"
                className={styles.introstatimage}
              />
              <p>
              {t('About1.text3')}
              </p>
            </div>
            <Button path="/about">{t('About1.button1')}</Button>
          </div>
        </div>
      </section>
      <ParallaxProvider>
        <Parallax translateY={[0, 30]}>
          <div className={styles.banner}>
            <blockquote className={styles.blockquote}>
            {t('About1.banner1')}
            </blockquote>
          </div>
          <div className={styles.bannerMobile}>
            <blockquote className={styles.blockquote}>
            {t('About1.banner2')}
            </blockquote>
          </div>
        </Parallax>
      </ParallaxProvider>
      <section className={styles.container1}>
        <div className={styles.introtext2}>
          <h2> {t('About1.title2')}</h2>
        </div>

        <div className={styles.iconcontainer}>
          <div className={styles.iconitems}>
            <Bounce>
              <div className={styles.iconimg}>
                <img src="/milling.svg" alt="milling" />
              </div>
              <h4>{t('About1.text4')}</h4>
            </Bounce>
          </div>

          <div className={styles.iconitems}>
            <Bounce delay={300}>
              <div className={styles.iconimg}>
                <img src="/turning.svg" alt="milling" />
              </div>
              <h4>{t('About1.text5')}</h4>
            </Bounce>
          </div>

          <div className={styles.iconitems}>
            <Bounce delay={500}>
              <div className={styles.iconimg}>
                <img src="/CAD.svg" alt="milling" />
              </div>
              <h4>{t('About1.text6')}</h4>
            </Bounce>
          </div>
        </div>

        <div className={styles.aboutbutton}>
          <Button path="/services">{t('About1.button2')}</Button>
        </div>
      </section>

      <div className={styles.contacthome}>
        <p>
        {t('About1.banner3')}
        </p>
        <p> {t('About1.banner4')}</p>

        <div className={styles.aboutbutton}>
          <Button path="/contact"> {t('About1.button3')}</Button>
        </div>
      </div>
    </>
  );
};
