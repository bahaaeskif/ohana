import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { NavigationOptions } from "swiper/types";

import p1 from "../Assets/1.jpg";
import p2 from "../Assets/2.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
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
          const navigation = swiper.params.navigation as NavigationOptions;
          navigation.prevEl = navigationPrevRef?.current;
          navigation.nextEl = navigationNextRef?.current;
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
                src={p1}
                alt=""
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                animate={{
                  scale: isActive ? 1.3 : 1,
                }}
                transition={{ duration: 20, ease: "linear" }}
              />
              <motion.button
                className=" text-[#b9b9b6] absolute bottom-24  z-10 uppercase px-4 py-2 border border-[#b9b9b6] rounded-xl hover:border-[#b9b9b6] hover:text-[#b9b9b6]
             "
                initial={{ left: "40%" }}
                animate={{
                  left: isActive ? "50%" : "40%",
                  x: isActive ? "-50%" : 0,
                }}
                transition={{ duration: 0.9, ease: "linear" }}
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
                initial={{ opacity: 1 }}
                animate={{
                  opacity: isActive ? 0.2 : 1,
                }}
                transition={{ duration: 0.9 }}
                className="absolute top-0 left-0 w-full h-full bg-[#000] pointer-events-none z-10"
              ></motion.div>
              <motion.img
                src={p2}
                alt=""
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                animate={{
                  scale: isActive ? 1.3 : 1,
                }}
                transition={{ duration: 20, ease: "linear" }}
              />

              <motion.div
                initial={{ bottom: "0%", opacity: 0 }}
                animate={{
                  bottom: isActive ? "25%" : "0%",
                  opacity: isActive ? 1 : 0,
                }}
                transition={{ duration: 0.9, ease: "linear" }}
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
