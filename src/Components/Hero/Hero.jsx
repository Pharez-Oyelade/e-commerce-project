import React from "react";
import "./Hero.css";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";
import hero_2 from "../Assets/hero2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import { sliderSettings } from "../../utils/common";

const Hero = () => {
  return (
    <div className="main-swiper">
      <Swiper
        {...sliderSettings}
        modules={[Autoplay]}
        autoplay={true}
        loop={true}
        speed={1200}
      >
        <SwiperSlide className="swipe">
          <div className="hero">
            <div className="hero-left">
              <h2>SHOP OUR NEW ARRIVALS</h2>
              <div>
                <div className="new">
                  <p>New</p>
                </div>
                <p>Endless</p>
                <p>Possibilities</p>
              </div>
              <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
              </div>
            </div>

            <div className="hero-right">
              <img src={hero_image} alt="" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero">
            <div className="hero-left">
              <h2>DISCOVER OUR TOP PICKS</h2>
              <div>
                <div className="new">
                  <p>Elevate</p>
                </div>
                <p>Your</p>
                <p>Style</p>
              </div>
              <div className="hero-latest-btn">
                <div>Top Picks</div>
                <img src={arrow_icon} alt="" />
              </div>
            </div>

            <div className="hero-right">
              <img src={hero_2} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
