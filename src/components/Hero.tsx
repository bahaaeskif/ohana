import p1 from "../Assets/1.jpg";
import p2 from "../Assets/2.jpg";

// types
import { NavigationOptions } from "swiper/types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// library
import { motion } from "framer-motion";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// components
import ButtonSlider from "../Common/ButtonSlider";
// animations
import { fade, parallex, slideIn, slideUp } from "../animation/motion";

const Hero: React.FC = () => {
  // refreance to the buttons which controlling in slider
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className="group">
      {/* define slider */}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          const navigation = swiper.params.navigation as NavigationOptions;
          navigation.prevEl = navigationPrevRef?.current;
          navigation.nextEl = navigationNextRef?.current;
        }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className=" bg-blue-200 relative">
          {({ isActive }) => (
            <div className="w-full h-full relative">
              <motion.div
                {...fade(isActive)}
                className="absolute top-0 left-0 w-full h-full bg-[#000] pointer-events-none z-10"
              ></motion.div>
              <motion.img
                src={p1}
                alt=""
                className="w-full h-full object-cover"
                {...parallex(isActive)}
              />
              <motion.button
                className=" text-[#b9b9b6] absolute bottom-24  z-10 uppercase px-4 py-2 border border-[#b9b9b6] rounded-xl hover:border-[#b9b9b6] hover:text-[#b9b9b6]
             "
                {...slideIn(isActive)}
              >
                shop now
              </motion.button>
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide className=" bg-blue-200 relative">
          {({ isActive }) => (
            <div className="w-full h-full relative">
              <motion.div
                {...fade(isActive)}
                className="absolute top-0 left-0 w-full h-full bg-[#000] pointer-events-none z-10"
              ></motion.div>
              <motion.img
                src={p2}
                alt=""
                className="w-full h-full object-cover"
                {...parallex(isActive)}
              />

              <motion.div
                {...slideUp(isActive)}
                className=" absolute z-10 uppercase flex justify-center items-center flex-col gap-6 right-[50%] !translate-x-[50%] translate-y-[50%] "
              >
                <h2 className="text-[#bab7b6] text-6xl capitalize">PASSION</h2>
                <h2 className="text-[#bab7b6] text-xl capitalize">Fall 23</h2>
                <button className=" text-[#b9b9b6] z-10 uppercase px-4 py-2 border border-[#b9b9b6] rounded-3xl hover:border-[#b9b9b6] hover:text-[#b9b9b6]">
                  more
                </button>
              </motion.div>
            </div>
          )}
        </SwiperSlide>
      </Swiper>

      {/* reusable controler for slider */}
      <ButtonSlider navigationRef={navigationNextRef} isNext={true} />
      <ButtonSlider navigationRef={navigationPrevRef} isNext={false} />
    </div>
  );
};

export default Hero;
