"use client";

import React, { useState } from "react";
import styles from "./Hero1.module.css";
import { Slide } from "react-awesome-reveal";
import { useTranslation } from 'react-i18next';

export const Hero1 = () => {

  const { t } = useTranslation();
  return (
    <>


      <div className={styles.hero}>
        <video loading="lazy" autoPlay muted loop playsInline className={styles.herovideo} src="hero.mp4" ></video>

        <div className={styles.herotext5}>
          <Slide direction="down" >
            <h1>{t('Hero1.title1')}</h1>
            </Slide>
            <Slide direction="left" >
            <h1>{t('Hero1.title2')}</h1>
            </Slide>
            <Slide direction="up" >
            <h1>{t('Hero1.title3')}</h1>
            </Slide>
         
        </div>

      </div>
    </>
  );
};
