import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
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

  const [city, setCity] = useState();
  const [food, setFood] = useState();
  const [date, setDate] = useState();
  return (
    <BrowserRouter>
      <Header helmet={helmet} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              helmet={helmet}
              setCity={setCity}
              setFood={setFood}
              date={date}
              setDate={setDate}
            />
          }
        />
        <Route
          path="/Restaurants"
          element={
            <Services
              helmet={helmet}
              setCity={setCity}
              city={city}
              date={date}
              food={food}
              setFood={setFood}
            />
          }
        />
        <Route
          path="/Restaurants/:id"
          element={<Restaurant helmet={helmet} />}
        />
        <Route path="/Contact" element={<Contact helmet={helmet} />} />
        <Route path="/Mentions" element={<Mentions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
