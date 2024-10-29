
import "./CardServices.modules.css";

export const CardServices = () => {
  return (
   <>
    <section className="card">
    <div className="text-content">
      <h3>CNC GLODANJE</h3>
      <p>Naša primarna usluga je CNC obrada metala glodanjem. Specijalizovani smo za pojedinačnu proizvodnju, prema tačnim specifikacijama i serijsku proizvodnju, manjeg i srednjeg obima. U radu koristimo mašine Hurco VMX24t. </p>  
      
    </div>
    <div className="visual">
      <img src="/images/milling.jpg" alt="cnc obrada glodanje gradiska" />
    </div>
  </section> 
   <section className="card">
   <div className="text-content">
     <h3>CNC TOKARENJE</h3>
     <p>Uslugu CNC tokarenja pružamo u saradnji sa našim partnerima, koji raspolažu velikim brojem mašina različitog kapaciteta i funkcionalnosti.
     Na ovaj način u mogućnosti smo da prilagodimo uslugu vašim potrebama. Za više informacija kontaktirajte nas putem nekog od naših
     kanala komunikacije sa korisnicima</p>  
     
   </div>
   <div className="visual">
     <img src="/images/turning.jpg" alt="cnc obrada tokarenje gradiska" />
   </div>
 </section> 
 <section className="card">
   <div className="text-content">
     <h3>CAM/CAD programiranje</h3>
     <p> Naš tim koristi savremene alate kako bi osigurao maksimalnu preciznost i brzu realizaciju, prilagođenu vašim zahtevima. 
        Bilo da vam je potreban prototip ili serijska proizvodnja, garantujemo vrhunski kvalitet i efikasnost.</p>  
     
   </div>
   <div className="visual">
     <img src="/images/camcad.png" alt="cnc obrada gradiska cam cad" />
   </div>
 </section> 

 </>

  );
};