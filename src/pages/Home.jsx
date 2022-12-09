import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Select from "react-select";
import plat from "../assets/plat.png";

export default function Home({ helmet, setCity }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cityOptions = [
    { value: "Le Port", label: "📍Le Port" },
    { value: "Saint-Denis", label: "📍Saint-Denis" },
    { value: "Sainte-Clotilde", label: "📍Sainte-Clotilde" },
  ];

  const handleCity = (selectedOptions) => {
    setCity(selectedOptions.label);
  };

  return (
    <main className="flex-col home">
      <Helmet>
        <title> {helmet.title} | Accueil </title>
        <link rel="canonical" href={helmet.href} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <div className="home_container">
        <h1>Zot manzé kréol préféré, dann zot kartier adoré ! </h1>

        <form>
          <Select
            options={cityOptions}
            onChange={handleCity}
            defaultValue={{ label: "Le Port", value: "Le Port" }}
            isClearable
          />
          <select name="date" id="date">
            <option value="today">⏱Aujourd'hui</option>
            <option value="tomorrow">⏱Demain</option>
          </select>
          <button type="button">Trouver un restaurant</button>
        </form>
        <img
          src={plat}
          alt="assiete rougail saucisse de La Réunion"
          className="plat"
        />
      </div>
    </main>
  );
}
