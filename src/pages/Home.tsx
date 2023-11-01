import React from "react";
import Hero from "../components/Hero";
import Newarrival from "../components/Newarrival";
import Banner from "../components/Banner";
import Choice from "../components/Choice";
const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <div className="px-6 sm:px-1 flex justify-center items-center bg-[#1b1b1b]">
        <div className="xl:max-w-[1320px] w-full">
          <Newarrival />
          <Banner />
          <Choice />
        </div>
      </div>
    </div>
  );
};

export default Home;
