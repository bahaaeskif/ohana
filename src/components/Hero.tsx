import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { fade } from "../animation/motion";

import test from "../Assets/bahaa.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion, useAnimationControls } from "framer-motion";

const Hero: React.FC = () => {
  const controls = useAnimationControls();
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className="group">
      <Swiper
        className=""
        spaceBetween={0}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef?.current;
          swiper.params.navigation.nextEl = navigationNextRef?.current;
        }}
        pagination={{ clickable: true }}
        // onSlideChange={() => {
        //   controls.start("animate");
        //   console.log("start");
        // }}
      >
        <SwiperSlide className=" bg-blue-200 relative">
          {({ isActive }) => (
            <div className="w-full h-full relative">
              <motion.div
                initial={{ opacity: 1 }}
                animate={{
                  opacity: isActive ? 0.2 : 1,
                }}
                transition={{ duration: 1.2 }}
                className="absolute top-0 left-0 w-full h-full bg-[#000] pointer-events-none z-10"
              ></motion.div>
              <motion.img
                src={test}
                alt=""
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                animate={{
                  scale: isActive ? 1.3 : 1,
                }}
                transition={{ duration: 20, ease: "linear" }}
              />
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide className=" bg-blue-200 relative">
          {({ isActive }) => (
            <div className="w-full h-full relative">
              <motion.div
                initial={{ opacity: 1 }}
                animate={{
                  opacity: isActive ? 0.2 : 1,
                }}
                transition={{ duration: 1.2 }}
                className="absolute top-0 left-0 w-full h-full bg-[#000] pointer-events-none z-10"
              ></motion.div>
              <motion.img
                src={test}
                alt=""
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                animate={{
                  scale: isActive ? 1.3 : 1,
                }}
                transition={{ duration: 20, ease: "linear" }}
              />
            </div>
          )}
        </SwiperSlide>
      </Swiper>

      <button
        ref={navigationPrevRef}
        className=" border-transparent text-transparent absolute left-8 
        group-hover:-translate-x-[20%] top-[50%] translate-y-[-50%] group-hover:border-[#fff] border-2 z-10 w-[40px] h-[40px] rounded-full group-hover:text-white hover:bg-[#272829]
        hover:border-[#272829] transition-all duration-400"
      >
        <i className="bx bx-chevron-left text-3xl "></i>
      </button>
      <button
        ref={navigationNextRef}
        className=" border-transparent text-transparent next absolute right-8 top-[50%] translate-y-[-50%] z-10 w-[40px] h-[40px] rounded-full group-hover:translate-x-[20%] group-hover:border-[#fff] border-2 group-hover:text-white hover:bg-[#272829]
        hover:border-[#272829] transition-all duration-400"
      >
        <i className="bx bx-chevron-right text-3xl"></i>
      </button>
    </div>
  );
};

export default Hero;
