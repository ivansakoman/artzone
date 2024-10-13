// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import slika1 from "../assets/jpeg/gallery-1.jfif";
import slika2 from "../assets/jpeg/gallery-2.jfif";
import slika3 from "../assets/jpeg/gallery-3.jfif";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

const Slider = () => {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
      onActiveIndexChange={(test) => {
        console.log(test);
      }}
    >
      <SwiperSlide className="slider__slide">
        <img className="slider__img" src={slika1} alt="hidrografika primjer" />
      </SwiperSlide>
      <SwiperSlide className="slider__slide">
        <img className="slider__img" src={slika2} alt="hidrografika primjer" />
      </SwiperSlide>
      <SwiperSlide className="slider__slide">
        <img className="slider__img" src={slika3} alt="hidrografika primjer" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
