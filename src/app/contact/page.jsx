"use client";
import React from "react";

import styles from "./contactPage.module.css";
import Button from "../components/button/Button";
import { Bounce,Slide, Fade } from "react-awesome-reveal";

const ContactPage = () => {
  return (
    <section className={styles.contactPageContainer}>
      <div className={styles.headercontainer}>
        <h1>KONTAKT</h1>
      </div>
      <div>
        <div className={styles.firstBlock}>
          <div className={styles.pitanjatcontainer}>
            <ul className={styles.pitanjatlist}>
              <Fade cascade direction="left">
              <li className={styles.pitanjalistitem}>
                <i className="fa fa-question fa-2x">
                  <span className={`${styles.pitanjatext} ${styles.pitanje1}`}>
                    Ako imate neko pitanje za nas.
                  </span>
                </i>
              </li>
              
              <li className={styles.pitanjalistitem}>
                <i className="fa fa-cogs fa-2x">
                  <span className={`${styles.pitanjatext} ${styles.pitanje2}`}>
                    Ako imate novi projekat na umu.
                  </span>
                </i>
              </li>

              <li className={styles.pitanjalistitem}>
                <i className="fa fa-comment fa-2x">
                  <span className={`${styles.pitanjatext} ${styles.pitanje3}`}>
                    Ako zelite da ostanete u kontaktu.
                  </span>
                </i>
              </li>
              </Fade>
            </ul>
            
            <hr className={styles.hrr} />
            <ul className={styles.pisitenam}>
              <h2>
                Pišite nam{" "}
                <i className="fa fa-exclamation" aria-hidden="true"></i>{" "}
                <i className="fa fa-exclamation" aria-hidden="true"></i>
              </h2>
            </ul>
            <hr className={styles.hrr} />

            <div className={styles.radujemo}>
              <h3>Radujemo se Vašem dolasku.</h3>
            </div>
          </div>

          <div className={styles.widgetcontainer}>
            <Bounce>
              <img
                src="/images/222.png"
                alt="Me sitting with a laptop"
                className={styles.roboImage}
              />
            </Bounce>
          </div>
        </div>

        <div className={styles.contactwrapper}>
          <Bounce cascade>
            <form
              name="contact"
              className={styles.formhorizontal}
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <div className={styles.credencialContainer}>
                <div>
                  <label htmlFor="name" className={styles.label}>
                    Vaše ime
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Unesite ime"
                    className={`${styles.input} ${styles.formControl}`}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={styles.label}>
                    Vaš email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Unesite Vaš email"
                    className={`${styles.input} ${styles.formControl}`}
                  />
                </div>
              </div>
              <div className={styles.messageContainer}>
                <div>
                  <label htmlFor="message" className={styles.label}>
                    Vaša poruka
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows="10"
                    placeholder="Vaša Poruka"
                    className={`${styles.textarea} ${styles.formControl}`}
                  ></textarea>
                </div>
              </div>
              <div className={styles.btnContainer}>
                <Button path="/">
                  {" "}
                  <i className="fa fa-paper-plane"></i>
                  <span className={styles.sendtext}>Pošalji</span>
                </Button>
              </div>
            </form>
          </Bounce>
          <Bounce cascade>
            <div className={styles.directcontactcontainer}>
              <ul className={styles.contactlist}>
                <li className={styles.listitem}>
                  <i className="fa fa-map-marker fa-2x">
                    <span className={`${styles.contacttext} ${styles.place}`}>
                      Gradiška, BiH
                    </span>
                  </i>
                </li>

                <li className={styles.listitem}>
                  <i className="fa fa-phone fa-2x">
                    <span className={`${styles.contacttext} ${styles.phone}`}>
                      <a href="tel:+38765415657" title="Give me a call">
                      +387 65 415 657
                      </a>
                    </span>
                  </i>
                </li>

                <li className={styles.listitem}>
                  <i className="fa fa-envelope fa-2x">
                    <span className={`${styles.contacttext} ${styles.gmail}`}>
                      <a href="mailto: sajic.nemanj@gmail.com" title="Send me an email">
                      sajic.nemanj@gmail.com
                      </a>
                    </span>
                  </i>
                </li>
              </ul>

              <hr className={styles.hrr} />
              <ul className={styles.socialmedialist}>
                <li>
                  <a href="#" target="_blank" className="contact-icon">
                    <i className="fa-brands fa-github" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" className="contact-icon">
                    <i className="fa-brands fa-codepen" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" className="contact-icon">
                    <i className="fa-brands fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" className="contact-icon">
                    <i
                      className="fa-brands fa-instagram"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
              </ul>
              <hr className={styles.hrr} />

              <div className={styles.copyright}>
                &copy; ALL OF THE RIGHTS RESERVED
              </div>
            </div>
          </Bounce>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
