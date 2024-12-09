import Artzone from "../assets/svg/artzone";
import ParallaxText from "../components/parallax-text";
import facebook from "../assets/png/facebook.png";
import instagram from "../assets/png/instagram.png";
import Slider from "../components/slider";
import Services from "../components/services";
import Contact from "../components/contact";

const Home = () => {
  return (
    <>
      <div className="home">
        <Artzone className="home__img" />
        <div className="home__text">
          <div className="home__title type--orbitron">ARTZONE</div>
          <div className="home__subtitle">- Coming soon -</div>
          <div className="home__social">
            <a href="https://www.instagram.com/_artz0ne__/">
              <img src={instagram} alt="instagram social link" />
            </a>
            <a href="https://www.facebook.com/mada7aka">
              <img src={facebook} alt="facebook social link" />
            </a>
          </div>
        </div>
      </div>
      <section className="parallax__wrapper">
        <ParallaxText baseVelocity={-3}>Coming soon</ParallaxText>
        <ParallaxText baseVelocity={3}>Print i Hidrografika</ParallaxText>
      </section>
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
      <Services />
      <Contact />
    </>
  );
};

export default Home;
