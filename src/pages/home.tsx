import Artzone from "../assets/svg/artzone";
import ParallaxText from "../components/parallax-text";

const Home = () => {
  return (
    <>
      <div className="home">
        <Artzone className="home__img" />
        <div className="home__text">
          <div className="home__title type--orbitron">ARTZONE</div>
          <div className="home__subtitle">- Coming soon -</div>
        </div>
      </div>
      <section className="parallax__wrapper">
        <ParallaxText baseVelocity={-3}>Coming soon</ParallaxText>
        <ParallaxText baseVelocity={3}>Print i Hidrografija</ParallaxText>
      </section>
    </>
  );
};

export default Home;
