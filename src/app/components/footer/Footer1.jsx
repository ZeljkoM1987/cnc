import React from "react";
import { useTranslation } from 'react-i18next';
import Link from "next/link";
import "./FooterStyle.css";

export const Footer1 = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">

      <section className="body">
        <div className="bodyInner">
          <div className="columnlogo">
            <div className="headerLogo">
              <img
                src="/images/logo2.png"
                alt="centar logo"

              ></img>

            </div>
            <p>{t('Footer1.slogan')}</p>
          </div>
          <div className="column about">
            <div>
              <div className="footer-title">
                <h4>{t('Footer1.contact')}</h4>
              </div>
              <div className="divider">
                <span></span>
              </div>
            </div>
            <ul>
              <li>
                <span className="fa fa-map-marker icon"></span>
                <p>Krajišnik 35, 78418 Nova Topola, BiH</p>
              </li>
              <li>
                <span className="fa fa-phone icon"></span>

                <p>(+387) 65 415 657</p>
              </li>
              <li>
                <span className="fa fa-paper-plane icon"></span>
                <p>hefestcam@gmail.com</p>
              </li>
              <li>
                <span className="fa-regular fa-clock icon"></span>
                <p>{t('Footer1.radnovrijeme')}</p>
              </li>
            </ul>
          </div>



          <div className="column post">
            <div>
              <div className="footer-title">
                <h4>{t('Footer1.location')}</h4>
              </div>
              <div className="divider">
                <span></span>
              </div>
            </div>
            <div className="postlist">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d677.091936453523!2d17.321031653618604!3d45.056097863837415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1skrajisnik%2035!5e1!3m2!1shr!2sba!4v1727126532688!5m2!1shr!2sba"

                width="100%"
                height="300"
                style={{ border: "0", overflow: "hidden", margin: "0" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="google map address"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="foot">
        <div className="footInner">
          <p>
            Copyright {new Date().getFullYear()} Hefest CAM. All Rights
            Reserved
          </p>
          <div>
          </div>
        </div>
      </section>
    </footer>
  );
};
