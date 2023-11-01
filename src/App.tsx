import React from "react";
import Home from "./pages/Home";
import Hero from "./components/Hero";
import Newarrival from "./components/Newarrival";
import Banner from "./components/Banner";
import Choice from "./components/Choice";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import ProductsPage from "./pages/ProductsPage";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductsPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
