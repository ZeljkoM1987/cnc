"use client";
import React from "react";

import styles from "./About1.module.css";

import Button from "../button/Button";

import { Bounce } from "react-awesome-reveal";

import Image from "next/image";

import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export const About1 = () => {
  return (
    <>
      <section className={styles.container}>
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
              <img
                src="/company.svg"
                alt="company"
                className={styles.introstatimage}
              />
              <p>
                Mlada i ambiciozna kompanija specijalizovana za CNC obradu
                metala sa savremenim proizvodnim pogonom
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
                Sa timom posvećenih stručnjaka, težimo da ispunimo najviše
                standarde kvaliteta i preciznosti u izradi metalnih komponenti.
              </p>
            </div>

            <div className={styles.introstat}>
              <img
                src="/graph.svg"
                alt="company"
                className={styles.introstatimage}
              />
              <p>
                Naša misija je jednostavna. Želimo da izgradimo dugoročne odnose
                sa našim klijentima, zasnovane na poverenju, kvalitetu i
                obostranom uspjehu.
              </p>
            </div>
            <Button path="/about">više O nama</Button>
          </div>
        </div>
      </section>
      <ParallaxProvider>
        <Parallax translateY={[0, 30]}>
          <div className={styles.banner}>
            <blockquote className={styles.blockquote}>
              Naša vizija je da svaki projekt pretvorimo u priliku za rast,
              inovaciju i postizanje vrhunskog kvaliteta u CNC obradi metala.
            </blockquote>
          </div>
          <div className={styles.bannerMobile}>
            <blockquote className={styles.blockquote}>
              Naša misija je inovacija i postizanje vrhunskog kvaliteta u CNC
              obradi metala.
            </blockquote>
          </div>
        </Parallax>
      </ParallaxProvider>
      <section className={styles.container1}>
        <div className={styles.introtext2}>
          <h2>Šta mi radimo?</h2>
        </div>

        <div className={styles.iconcontainer}>
          <div className={styles.iconitems}>
            <Bounce>
              <div className={styles.iconimg}>
                <img src="/milling.svg" alt="milling" />
              </div>
              <h4>CNC Glodanje</h4>
            </Bounce>
          </div>

          <div className={styles.iconitems}>
            <Bounce delay={300}>
              <div className={styles.iconimg}>
                <img src="/turning.svg" alt="milling" />
              </div>
              <h4>CNC Tokaranje</h4>
            </Bounce>
          </div>

          <div className={styles.iconitems}>
            <Bounce delay={500}>
              <div className={styles.iconimg}>
                <img src="/CAD.svg" alt="milling" />
              </div>
              <h4>CAM/CAD Programiranje</h4>
            </Bounce>
          </div>
        </div>

        <div className={styles.aboutbutton}>
          <Button path="/services">Više o Servisima</Button>
        </div>
      </section>

      <div className={styles.contacthome}>
        <p>
          Zainteresovani ste za naše usluge ili su vam potrebne dodatne
          informacije?
        </p>
        <p>Naš tim Vam stoji na raspolaganju!</p>

        <div className={styles.aboutbutton}>
          <Button path="/contact">Kontaktirajte nas</Button>
        </div>
      </div>
    </>
  );
};
