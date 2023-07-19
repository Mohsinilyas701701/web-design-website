"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css";
import "./Hero.scss";

const Hero = () => {
  return (
    <>
      {/*  modules={[Autoplay]} speed={300} autoplay={false} */}
      <Swiper className='mySwiper'>
        <SwiperSlide>
          <div className='slide1'>
            <div className='overlay'>
              <div className='overlay_content'>
                <h1>
                  Let's Talk <br /> <strong>Ideas</strong>
                </h1>
                <p>
                  Dubai's Leading <strong>Web Design Agency</strong> Just Got Better
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide2'>
            <div className='overlay'>
              <div className='overlay_content'>
                <h1>Rising Over the Top</h1>
                <p>
                  Be the best in the <strong> Digital World</strong>{" "}
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide3'>
            <div className='overlay'>
              <div className='overlay_content'>
                <p>Hisense</p>
                <h1 className=''>
                  Digitally Driving <br /> <strong>Global Growth</strong>
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide4'>
            <div className='overlay'>
              <div className='overlay_content'>
                <h1 className=''>
                  Best Web Design Agency In <strong>Dubai</strong>
                </h1>
                <p>Hire us to create exceptional web designs</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
