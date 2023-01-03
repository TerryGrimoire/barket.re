import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import Menu from "./pages/Menu";
import Restaurant from "./pages/Restaurant";
import Contact from "./pages/Contact";
import Mentions from "./pages/Mentions";

import "./App.css";

function App() {
  const helmet = {
    title: "BARKET.RE",
    href: "https://barket.re",
    description: "Pou cet y aime manzé kréol",
  };

  return (
    <BrowserRouter>
      <HelmetProvider>
        <Header helmet={helmet} />
        <Routes>
          <Route path="/" element={<Home helmet={helmet} />} />
          <Route
            path="/Restaurants"
            element={<Restaurants helmet={helmet} />}
          />
          <Route path="/Menu" element={<Menu helmet={helmet} />} />
          <Route
            path="/Restaurants/:id"
            element={<Restaurant helmet={helmet} />}
          />
          <Route path="/Contact" element={<Contact helmet={helmet} />} />
          <Route path="/Mentions" element={<Mentions />} />
        </Routes>
        <Footer />
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
