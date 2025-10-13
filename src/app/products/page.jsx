"use client";

import React, { useState } from "react";
import styles from "./productPage.module.css";
import { slides } from "../components/data.jsx"
import { useTranslation } from 'react-i18next';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {Images} from "../components/images/Images"

export const ProductPage = () => {
  const { t } = useTranslation();
   const [index, setIndex] = useState(-1);
  return (
    <section className={styles.container} id="about">
      <div className={styles.headercontainer}>
        <h1>{t('ProductsPage.title')}</h1>


      </div>
      <div className={styles.Productblock}>


 <Images data={slides} onClick={(currentIndex) => { setIndex(currentIndex) }} />
      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
      />
</div>
      </section>
      );
    };
      export default ProductPage;