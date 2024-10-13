import Artzone from "../assets/svg/artzone";
import ParallaxText from "../components/parallax-text";
import facebook from "../assets/png/facebook.png";
import instagram from "../assets/png/instagram.png";

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
    </>
  );
};

export default Home;
