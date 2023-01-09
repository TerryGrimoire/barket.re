import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navigation/Navbar";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";

function Burger({ helmet }) {
  return (
    <header className="flex padding-header justify-between align-center header pink">
      <Link to="/">
        <img src={logo} alt={`logo de ${helmet.title}`} className="logo" />
      </Link>
      <img src={menu} alt="loupe" className="burger mobile" />
      <div className="desktop">
        <Navbar />
      </div>
    </header>
  );
}

export default Burger;
