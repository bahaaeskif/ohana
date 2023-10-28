import React from "react";
import Home from "./pages/Home";
import Hero from "./components/Hero";

const App: React.FC = () => {
  return (
    <>
      <div className="px-6 sm:px-1 flex justify-center items-center">
        <div className="xl:max-w-[1320px] w-full">
          <Home />
        </div>
      </div>
      <Hero />
    </>
  );
};

export default App;
