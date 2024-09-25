"use client";
import React from "react";

import styles from "./contactPage.module.css";
import Button from "../components/button/Button";
import Image from "next/image";
import { Bounce } from "react-awesome-reveal";

const ContactPage = () => {
  return (
    <section className={styles.contactPageContainer}>
      <div className={styles.headercontainer}>
        <h1>KONTAKT</h1>
      </div>
      <div className={styles.firstBlock}>
        <div className={styles.textcontainer}>
          <ul >
            <li>
              <i className="fa fa-question" aria-hidden="true"></i>{" "}
              <p>Ako imate neko pitanje za nas.</p>
            </li>
            <li>
              <i className="fa fa-cogs" aria-hidden="true"></i>{" "}
              <p>Ako imate novi projekat na umu.</p>
            </li>
            <li>
              <i className="fa fa-comment" aria-hidden="true"></i>{" "}
              <p>Ako zelite da ostanete u kontaktu.</p>
            </li>
          </ul>
          {/* 
          <p className={styles.contactheadertext}>
            Budite slobodni da nam posaljete poruku preko nase kontakt forme.
          </p>
          */}
          <div className={styles.pisitename}>
            <h2>
              Pišite nam{" "}
              <i className="fa fa-exclamation" aria-hidden="true"></i>{" "}
              <i className="fa fa-exclamation" aria-hidden="true"></i>
            </h2>
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
                  <a href="tel:1-212-555-5555" title="Give me a call">
                    (212) 555-2368
                  </a>
                </span>
              </i>
            </li>

            <li className={styles.listitem}>
              <i className="fa fa-envelope fa-2x">
                <span className={`${styles.contacttext} ${styles.gmail}`}>
                  <a href="mailto:#" title="Send me an email">
                    hitmeup@gmail.com
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
                <i className="fa-brands fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
          <hr className={styles.hrr} />

          <div className={styles.copyright}>
            &copy; ALL OF THE RIGHTS RESERVED
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
