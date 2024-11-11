/*import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'sr', // podrazumevani jezik
    fallbackLng: 'sr',
    backend: {
      loadPath: '/locales/{{lng}}.json', // putanja do JSON datoteka
    },
    interpolation: {
      escapeValue: false, // React već obezbeđuje zaštitu od XSS
    }
  });

export default i18n; */

import { CardServices } from '@/app/components/cardservices/CardServices';
import { Footer1 } from '@/app/components/footer/Footer1';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      sr: {
        translation: {
          services: "NAŠE USLUGE",
          // ...other translations
          CardServices: {
            title1: "CNC GLODANJE",
            description1: "Naša primarna usluga je CNC obrada metala glodanjem. Specijalizovani smo za pojedinačnu proizvodnju, prema tačnim specifikacijama i serijsku proizvodnju, manjeg i srednjeg obima. U radu koristimo mašine Hurco VMX24t.",
            title2: "CNC TOKARENJE",
            description2: "Uslugu CNC tokarenja pružamo u saradnji sa našim partnerima, koji raspolažu velikim brojem mašina različitog kapaciteta i funkcionalnosti. Na ovaj način u mogućnosti smo da prilagodimo uslugu vašim potrebama. Za više informacija kontaktirajte nas putem nekog od naših kanala komunikacije sa korisnicima.",
            
            title3: "CAM/CAD programiranje",
            description3: "Naš tim koristi savremene alate kako bi osigurao maksimalnu preciznost i brzu realizaciju, prilagođenu vašim zahtevima. Bilo da vam je potreban prototip ili serijska proizvodnja, garantujemo vrhunski kvalitet i efikasnost."
          },
          Footer1: {
            slogan:"Hefest CAM je vaš pouzdan partner za CNC obradu metala.",
            contact:"Kako do nas?",
             location:"Naša lokacija",
             radnovrijeme: "Ponedeljak - Subota: 07h - 15h"
          },
          Navbar2: {
            pocetna:"Početna",
            onama:"O nama",
            usluge:"Usluge",
            kontakt:"Kontakt",
           

          },
          Hero1: {
            title1:"Preciznost",
          title2:"Pouzdanost",
          title3:"Odgovornost",

          },
          About1: {
            alt1: "CNC glodanje metala",
            title1: "Ko smo mi?",
             text1:"Mlada i ambiciozna kompanija specijalizovana za CNC obradu metala sa savremenim proizvodnim pogonom",
             text2: " Sa timom posvećenih stručnjaka, težimo da ispunimo najviše standarde kvaliteta i preciznosti u izradi metalnih komponenti.",
             text3: "Naša misija je jednostavna. Želimo da izgradimo dugoročne odnose sa našim klijentima, zasnovane na poverenju, kvalitetu i obostranom zadovoljstvu.",
             button1:"više O nama",
             banner1: "Naša vizija je da svaki projekt pretvorimo u priliku za rast, inovaciju i postizanje vrhunskog kvaliteta u CNC obradi metala.",
            banner2:"Naša misija je inovacija i postizanje vrhunskog kvaliteta u CNC obradi metala.",
            title2: "Šta mi radimo?",
            text4: "CNC Glodanje",
            text5: "CNC Tokarenje",
            text6:"CAM/CAD Programiranje",
            banner3: "Zainteresovani ste za naše usluge ili su vam potrebne dodatne informacije?",
            banner4: "Naš tim Vam stoji na raspolaganju!",
            button2:"Više o Servisima",
            button3:"Kontaktirajte nas",
            },
            AboutPage: {
        pagetitle:"O NAMA",
        text1:"Hefest CAM je mlada i ambiciozna kompanija specijalizovana za CNC obradu metala  sa fokusom na preciznost, kvalitet i pouzdanost. Sa savremenim proizvodnim pogonom i timom posvećenih stručnjaka, težimo da ispunimo najviše standarde kvaliteta i preciznosti u izradi metalnih komponenti.",
        text2:"Hefest CAM se nalazi na području Grada Gradiška, na 12 km udaljenosti od granice sa Evropskom unijom. Ovaj položaj nam omogućava brzu i efikasnu saradnju sa evropskim partnerima i  čini nas idealnim partnerom za kompanije koje traže kvalitetne CNC usluge uz minimalne logističke izazove.",
        text3: "Naša misija je jednostavna. Želimo da izgradimo dugoročne odnose sa našim klijentima, zasnovane na poverenju, kvalitetu i obostranom zadovoljstvu.",
        banner1:"Ime naše kompanije vuče inspiraciju iz starogrčke mitologije, gde je Hefest, bog vatre i kovačkog zanata, bio poznat po svom umeću u obradi metala. Upravo tako i mi, s posvećenošću i preciznošću, stvaramo proizvode koji odražavaju našu strast i stručnost u ovom zanatu.",
     title2:"Naše karakteristike",
       card1title:"Stručno osoblje",
       card1text:"Naše stručno osoblje, sa višegodišnjim iskustvom, osposobljeno je za uspešno rešavanje i najkompleksnijih zahteva kupaca.",
       card2title:"Preciznost i Kvalitet",
       card2text:"Zahvaljujući modernim CNC mašinama, obezbjeđujemo izuzetno preciznu obradu metala. Svaki proizvod prolazi internu kontrolu kvalitete.",
       card3title:"Brza isporuka",
       card3text:"Pridržavamo se dogovorenih rokova isporuke, kako bismo osigurali važe zadovoljsto i povjerenje.",
       card4title:"Korisnička podrška",
       card4text:"Na raspolaganju smo za konsultacije, podršku i prilagođavanje zahtevima klijenata. Trudimo se da izgradimo dugoročne partnerske odnose kroz transparentnu komunikaciju.",
       text4:" Hefest CAM nudi fleksibilne proizvodne opcije, prilagođene potrebama naših klijenata." ,
       text5:"Specijalizovani smo za pojedinačnu proizvodnju, prema tačnim specifikacijama i serijsku proizvodnju, manjeg i srednjeg obima.",
       button2:"Više o Servisima",

      },
      ContactPage: {
      title:"KONTAKT",
intro:"Voljeli bismo čuti vaše mišljenje! Bilo da imate pitanje, trebate pomoć ili ste zainteresovani za saradnju, stojimo Vam na raspolaganju.",
 title2: "Kontaktirajte nas!",
 answer:"Rado ćemo Vam odgovoriti u najkraćem mogućem roku.",
 ime:"Ime i prezime",
      imeplaceholder:"Unesite vaše ime i prezime",
      emailplaceholder:"Unesite vašu email adresu",
          message:"Vaša poruka",
      messageplaceholder:"Unesite vašu poruku ovde",
      posalji:"Pošalji",
      adresa:"Adresa",
      telefon:"Telefon",
      radnovrijeme:"Radno vrijeme",
      radnovrijeme1: "Ponedeljak - Subota: 07h - 15h"

      },
      RootLayout: {
        title:"HEFEST CAM - CNC obrada metala Gradiška",
         description: "Pouzdan partner za CNC obradu metala. Nalazimo se u Novoj Topoli, grad Gradiška.",
         keywords:"CNC obrada metala, obrada metala Gradiška, CNC obrada Banjaluka, CNC glodanje,CNC tokarenje, pouzdan CNC partner"
      }
  
        }
      },
      en: {
        translation: {
          services: "SERVICES",
          // ...other translations
          CardServices: {
            title1: "CNC Milling",
            description1: "Our primary service is CNC metal milling. We specialize in custom production according to precise specifications, as well as series production on a smaller and medium scale. We use Hurco VMX24t machines in our operations.",
            title2: "CNC Turning",
            description2: "We provide CNC turning services in collaboration with our partners, who have a large number of machines with various capacities and functionalities. This way, we are able to tailor our services to meet your needs. For more information, please contact us through one of our customer communication channels.",
            title3: "CAM/CAD programming",
            description3: "Our team uses modern tools to ensure maximum precision and fast execution tailored to your requirements. Whether you need a prototype or series production, we guarantee top quality and efficiency."
          },
          Footer1: {
          slogan:"Hefest CAM is your reliable business partner for CNC metal processing.",
          contact:"How to reach us?",
          location:"Our location",
           radnovrijeme: "Monday - Saturday: 07:00 - 15:00",
          },
          Navbar2: {
              pocetna:"Home",
              onama:"About Us",
              usluge:"Services",
              kontakt:"Contact",   
                
        },
        Hero1: {
          title1:"Precision",
          title2:"Reliability",
          title3:"Responsibility",

        },
        About1: {
          alt1: "CNC Milling Hefest CAM",
          title1: "Who are we?",
          text1:"Hefest CAM is a young and ambitious company specializing in CNC metal processing. We have a modern production plant that is located in Nova Topola.",
          text2: "Our team of experts strives to meet the highest standards of quality and precision in the production of metal components.",
       text3:"Our mission is simple. We want to build long-term relationships with our clients, based on trust, quality and mutual satisfaction.",
       button1: "Learn More About Us",
       banner1:"Our vision is to turn every project into an opportunity for growth, innovation, and achieving top-quality results in CNC metal machining.",
       banner2:"Our vision is innovation and achieving top quality in CNC metal processing.",  
       title2: "What We Do?",
       text4: "CNC Milling",
       text5: "CNC Turning",
            text6:"CAM/CAD Programming",
            banner3: "Interested in collaborating or need more information? ",
            banner4: "Our team is here to assist you!",
            button2:"Learn More About Services",
            button3:"Contact Us"
        },
      AboutPage: {
        pagetitle:"ABOUT US",
        text1:"Hefest CAM is a young and ambitious company specialized in CNC metal machining, with a focus on precision, quality, and reliability. With a modern production facility and a team of dedicated experts, we strive to meet the highest standards of quality and precision in the manufacturing of metal components.",
        text2:"Hefest CAM is located in the city of Gradiška, just 12 km from the European Union border. This location allows us to maintain fast and efficient cooperation with European partners, making us an ideal choice for companies seeking high-quality CNC services with minimal logistical challenges.",
        text3: "Our mission is simple. We aim to build long-term relationships with our clients, based on trust, quality, and mutual satisfaction.",
     banner1:"The name of our company is inspired by ancient Greek mythology, where Hephaestus (Hefest), the god of fire and blacksmithing, was known for his skill in metalworking. Similarly, with dedication and precision, we create products that reflect our passion and expertise in this craft.",
     title2:"Our Features",
     card1title:"Skilled staff",
     card1text:"Our expert team, with years of experience, is fully equipped to successfully handle even the most complex customer requirements.",
     card2title:"Quality",
       card2text:"Thanks to modern CNC machines, we ensure exceptionally precise metal machining. Each product undergoes internal quality control.",
       card3title:"Fast Delivery",
       card3text:"We adhere to agreed delivery deadlines to ensure your satisfaction and trust.",
       card4title:"Customer Service",
       card4text:"We are available for consultations, support, and tailoring solutions to meet our clients' needs. We strive to build long-term partnerships through transparent communication.",
       text4:"Hefest CAM offers flexible manufacturing options, tailored to the needs of our clients." ,
       text5: "We specialize in single-piece production, based on precise specifications, as well as small and medium-scale serial production.",
       button2:"Learn More About Services",

    },
    ContactPage: {
      title:"CONTACT",
      intro:"We’d love to hear from you! Whether you have a question, need assistance, or simply want to connect, we're here to help.",
      title2: "Get In Touch",
      answer:"We will be happy to answer you in the shortest possible time.",
      ime:"Name and surname",
      imeplaceholder:"First and Last Name",
      emailplaceholder:"Your email for replies",
      message:"Message",
      messageplaceholder:"Enter your message here",
      posalji:"Send",
      adresa:"Address:",
      telefon:"Phone number:",
      radnovrijeme:"Business hours:",
      radnovrijeme1: "Monday - Saturday: 7:00 AM - 3:00 PM"

    },
    RootLayout: {
      title:"HEFEST CAM - CNC Metal Machining Gradiska",
      description: "A reliable partner for CNC metal machining. We are located in Nova Topola, the city of Gradiška.",
     keywords:"CNC metal processing, metal processing Gradiska, CNC processing Banjaluka, CNC milling, CNC turning reliable CNC partner"


    }


    },
  },
    },
    lng: "sr", // default language
    fallbackLng: "sr", // fallback language
    interpolation: {
      escapeValue: false // React already escapes values
    },
    
  });

export default i18n;