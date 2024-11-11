
import "./CardServices.modules.css";
import { useTranslation } from 'react-i18next';

export const CardServices = () => {
  const { t } = useTranslation();

  return (
   <>
    <section className="card">
    <div className="text-content">
      <h3>{t('CardServices.title1')}</h3>
      <p>{t('CardServices.description1')}</p>  
      
    </div>
    <div className="visual">
      <img src="/images/milling.jpg" alt="cnc obrada glodanje gradiska" />
    </div>
  </section> 
   <section className="card">
   <div className="text-content">
     <h3>{t('CardServices.title2')}</h3>
     <p>{t('CardServices.description2')}</p>  
     
   </div>
   <div className="visual">
     <img src="/images/turning.jpg" alt="cnc obrada tokarenje gradiska" />
   </div>
 </section> 
 <section className="card">
   <div className="text-content">
     <h3>{t('CardServices.title3')}</h3>
     <p>{t('CardServices.description3')}</p>  
     
   </div>
   <div className="visual">
     <img src="/images/camcad.png" alt="cnc obrada gradiska cam cad" />
   </div>
 </section> 

 </>

  );
};