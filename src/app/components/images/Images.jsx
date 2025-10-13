import React from 'react'
import "./ImagesStyle.css";


import { useTranslation } from 'react-i18next';


export const Images = ({ data, onClick }) => {


  const { t } = useTranslation();

  const handleClickImage = (index) => {
    onClick(index)
  }



  return (
<>

<div className="intro-text-img">
        <h2>{t('Images.intro')}</h2>
      </div>


    
    <div className="images-container-gr">
      {
        data.map((slide, index) => (

          <div
            onClick={() => handleClickImage(index)}
            key={index} className='image-gallery'>
            <img src={slide.src} alt={slide.desc} />

          </div>
        ))
      }
    </div>

    </>
  )
}
