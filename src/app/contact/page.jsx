"use client";
import React from "react";
import { useState } from 'react';


import styles from "./contactPage.module.css";

import { Fade } from "react-awesome-reveal";
import { useTranslation } from 'react-i18next';
const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://formspree.io/f/mldedwqy', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });


    if (response.ok) {
      setStatus('Thank you for your message!');
      setFormData({ name: '', email: '', message: '' }); // Reset the form
    } else {
      setStatus('Oops! There was a problem.');
    }
  };

  const { t } = useTranslation();
  return (

    <section className={styles.contactPageContainer}>
      <div className={styles.headercontainer}>
        <h1>{t('ContactPage.title')}</h1>
      </div>
      <div>
        <div className={styles.firstBlock}>
          <div className={styles.pitanjatcontainer}>
            <ul className={styles.pitanjatlist}>
              <Fade cascade direction="left">
                <li className={styles.pitanjalistitem}>
                  <i className="fa fa-question fa-2x">
                    <span className={`${styles.pitanjatext} ${styles.pitanje1}`}>
                      {t('ContactPage.intro')}
                    </span>
                  </i>
                </li>

                {/* <li className={styles.pitanjalistitem}>
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
              </li>*/}
              </Fade>
            </ul>

            <hr className={styles.hrr} />
            <ul className={styles.pisitenam}>
              <h2>
                {t('ContactPage.title2')}{" "}
                <i className="fa fa-exclamation" aria-hidden="true"></i>{" "}
                <i className="fa fa-exclamation" aria-hidden="true"></i>
              </h2>
            </ul>
            <hr className={styles.hrr} />

            <div className={styles.radujemo}>
              <h3>{t('ContactPage.answer')}</h3>
            </div>
          </div>

          <div className={styles.widgetcontainer}>
            <Fade direction="left">
              <img
                src="/images/222.png"
                alt="Me sitting with a laptop"
                className={styles.roboImage}
              />
            </Fade>
          </div>
        </div>

        <div className={styles.contactwrapper}>
          <Fade cascade direction="left">
            <form
              name="contact"
              className={styles.formhorizontal}

              onSubmit={handleSubmit}
            >
              {/*<input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" /> */}
              <div className={styles.credencialContainer}>
                <div>
                  <label htmlFor="name" className={styles.label}>
                    {t('ContactPage.ime')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder={t('ContactPage.imeplaceholder')}
                    value={formData.name}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.formControl}`}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={styles.label}>
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder={t('ContactPage.emailplaceholder')}
                    value={formData.email}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.formControl}`}
                  />
                </div>
              </div>
              <div className={styles.messageContainer}>
                <div>
                  <label htmlFor="message" className={styles.label}>
                    {t('ContactPage.message')}
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows="10"
                    placeholder={t('ContactPage.messageplaceholder')}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${styles.textarea} ${styles.formControl}`}
                  ></textarea>
                </div>
              </div>
              <div className={styles.btnContainer}>
                <button type="submit" className={styles.sendtext}> <i className="fa fa-paper-plane"> </i>{t('ContactPage.posalji')}</button>
                {status && <p>{status}</p>}

              </div>
            </form>
          </Fade>
          <Fade cascade direction="left">
            <div className={styles.directcontactcontainer}>
              <ul className={styles.contactlist}>
                {/* <li className={styles.listitem}>
                  <i className="fa fa-map-marker fa-2x">
                
                    <span className={`${styles.contacttext} ${styles.place}`}>
                      Adresa:
                    </span>
                  </i>
                </li>
                <li className={styles.listitem}>
                  <i className="fa fa-map-marker fa-2x">
                  <span className={`${styles.contacttext} ${styles.place}`}>
                      Krajišnik 35, 
                    </span>
                    <span className={`${styles.contacttext} ${styles.place}`}>
                    78418 Nova Topola, Gradiška, BiH
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
               
                */}
                <li className={styles.listitem}>


                  <h3>{t('ContactPage.adresa')}</h3>
                  <div className={styles.listcontent}>
                    <p>Krajišnik 35</p>
                    <p>78418 Nova Topola</p>
                    <p>Grad Gradiška, BiH</p>
                  </div>
                </li>
                <li className={styles.listitem}>
                  <h3>{t('ContactPage.telefon')}</h3>
                  <div className={styles.listcontent}>
                    <a href="tel:+38765415657" title="Give me a call">
                      +387 65 415 657
                    </a>
                  </div>
                </li>
                <li className={styles.listitem}>
                  <h3>E-mail:</h3>
                  <div className={styles.listcontent}>
                    <a href="mailto: hefestcam@gmail.com" title="Send me an email">
                      hefestcam@gmail.com
                    </a>
                  </div>
                </li>
                <li className={styles.listitem}>
                  <h3>{t('ContactPage.radnovrijeme')}</h3>
                  <div className={styles.listcontent}>
                    <p>{t('ContactPage.radnovrijeme1')}</p>
                  </div>
                </li>
              </ul>




            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
