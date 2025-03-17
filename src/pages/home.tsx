import Artzone from "../assets/svg/artzone";
import ParallaxText from "../components/parallax-text";
import facebook from "../assets/png/facebook.png";
import phone from "../assets/png/phone.png";
import mail from "../assets/png/mail.png";
import instagram from "../assets/png/instagram.png";
import Slider from "../components/slider";
import Services from "../components/services";
import Contact from "../components/contact";

const Home = () => {
  return (
    <>
      <div className="home--pattern">
        <div className="home">
          <a href="#pocetna" className="hide-element">
            Početna
          </a>
          <Artzone className="home__img" />
          <div className="home__text">
            <div className="home__title type--orbitron">
              ART ZONE <br /> DESIGN
            </div>
            <div className="home__social">
              <a
                className="home__social__link"
                href="https://www.instagram.com/_artzonedesign_"
                target="_blank"
              >
                <img src={instagram} alt="instagram social link - Artzone" />
              </a>
              <a
                className="home__social__link"
                href="https://www.facebook.com/mada7aka"
                target="_blank"
              >
                <img src={facebook} alt="facebook social link - Artzone" />
              </a>
              <a
                className="home__social__link"
                href="mailto:info.artzonedesign@gmail.com"
              >
                <img src={mail} alt="Contact me with mail - Artzone" />
              </a>
              <a className="home__social__link" href="tel:+385993317628">
                <img src={phone} alt="Contact me with phone - Artzone" />
              </a>
            </div>
          </div>
        </div>
        <a href="#novosti" className="hide-element">
          Novosti
        </a>
        <section className="parallax__wrapper">
          <ParallaxText baseVelocity={-1.5}>
            sublimacije & 3D print
          </ParallaxText>
          <ParallaxText baseVelocity={1.5}>Print & Hidrografika</ParallaxText>
        </section>
      </div>
      <a href="#usluge" className="hide-element">
        Usluge
      </a>
      <Services />
      <a href="#o-nama" className="hide-element">
        O nama
      </a>
      <div className="slider__wrapper">
        <Slider />
        <div className="slider__content">
          <h1 className="slider__title">Naši radovi</h1>
          <p className="slider__description">
            Artzone je mjesto gdje vaše ideje postaju stvarnost kroz prilagođene
            otiske na majicama, personalizirane naljepnice, visokokvalitetni 3D
            ispis i razne vrste tiska. Uz stručnost, kreativnost i vrhunsku
            tehnologiju, stvaramo jedinstvene proizvode koji savršeno odgovaraju
            vašim potrebama, bilo da se radi o poklonima, suvenirima ili
            promotivnim materijalima.
          </p>
        </div>
      </div>

      <a href="#kontakt" className="hide-element">
        Kontakt
      </a>
      <Contact />
    </>
  );
};

export default Home;
