import React from "react";
import Home from "./pages/Home";
import Hero from "./components/Hero";
import Newarrival from "./components/Newarrival";
import Banner from "./components/banner";
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
    </>
  );
};

export default App;
