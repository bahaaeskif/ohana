import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
const Layout: React.FC = () => {
  return (
    <div>
      <div className="px-6 sm:px-1 flex justify-center items-center">
        <div className="xl:max-w-[1320px] w-full">
          <Navbar />
        </div>
      </div>
      <Outlet />
      <Footer />
      <footer className="bg-[#272829] py-2 text-white text-center ">
        ©OHANA 2023 All rights reserved.
      </footer>{" "}
    </div>
  );
};

export default Layout;
