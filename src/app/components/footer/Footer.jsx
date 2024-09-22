import React from "react";
import Link from "next/link";
import "./FooterStyle.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <section className="header">
        <div className="headerInner">
        
          <div className="second">
            <div className="headerLogo">
              <img
                src="/images/logo2.png"
                alt="centar logo"
                
              ></img>
              
            </div>
          </div>
         
        </div>
      </section>
      <section className="body">
        <div className="bodyInner">
          <div className="column about">
            <div>
              <div className="footer-title">
                <h4>Kako do nas?</h4>
              </div>
              <div className="divider">
                <span></span>
              </div>
            </div>
            <ul>
              <li>
                <span className="fa fa-map-marker icon"></span>
                <p>Banjalučki put, Nova Topola, BiH</p>
              </li>
              <li>
                <span className="fa fa-phone icon"></span>

                <p>(+387) 66 954 994</p>
              </li>
              <li>
                <span className="fa fa-paper-plane icon"></span>
                <p>loungebarcentar@yahoo.com</p>
              </li>
            </ul>
          </div>
         <div className="column about">
            <div>
              <div className="footer-title">
                <h4>Radno vrijeme</h4>
              </div>
              <div className="divider">
                <span></span>
              </div>
            </div>
            <ul>
              <li>
                <span className="fa-regular fa-clock icon"></span>
                <p>Ponedeljak - Subota: 06h - 24h</p>
              </li>
             
              <li>
                <span className="fa-regular fa-clock icon"></span>
                <p>Nedelja: 08h-16h</p>
              </li>
            </ul>
          </div>
          <div className="column post">
            <div>
              <div className="footer-title">
                <h4>Naša Lokacija</h4>
              </div>
              <div className="divider">
                <span></span>
              </div>
            </div>
            <div className="postlist">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1640.0595510047672!2d17.306881024393203!3d45.05256868295168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475df7e0dc82a1c9%3A0x375c82f1075eb7b4!2z4oCcQ0VOVEFS4oCdIENhZmU!5e0!3m2!1ssr!2sba!4v1710635359841!5m2!1ssr!2sba"
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
            Copyright {new Date().getFullYear()} lounge bar Centar. All Rights
            Reserved
          </p>
          <div>
          </div>
        </div>
      </section>
    </footer>
  );
};
