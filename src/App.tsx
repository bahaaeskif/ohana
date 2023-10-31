import React from "react";
import Home from "./pages/Home";
import Hero from "./components/Hero";
import Newarrival from "./components/Newarrival";
import Banner from "./components/Banner";
import Choice from "./components/Choice";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <div className="px-6 sm:px-1 flex justify-center items-center">
        <div className="xl:max-w-[1320px] w-full">
          <Home />
        </div>
      </div>
      <Hero />
      <div className="px-6 sm:px-1 flex justify-center items-center">
        <div className="xl:max-w-[1320px] w-full">
          <Newarrival />
          <Banner />
          <Choice />
          <Footer />
        </div>
      </div>
      <footer className="bg-[#272829] py-2 text-white text-center ">
        ©OHANA 2023 All rights reserved.
      </footer>
    </>
  );
};

export default App;
