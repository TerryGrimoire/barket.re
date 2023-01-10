import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// import d'images pour le filtre

import creole from "../assets/creole.png";
import chinois from "../assets/chinois.png";
import vegetarien from "../assets/vegetarien.png";
import pains from "../assets/pain.png";
import pizzas from "../assets/pizza.png";
import indien from "../assets/indien.png";
import alcool from "../assets/alcool.png";

function Restaurants({ helmet }) {
  const [restos, setRestos] = useState();
  const [recherche, setRecherche] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    setRecherche(JSON.parse(sessionStorage.getItem("recherche")));
    setRestos(JSON.parse(sessionStorage.getItem("restos")));
    if (
      JSON.parse(sessionStorage.getItem("recherche")).city === undefined ||
      JSON.parse(sessionStorage.getItem("recherche")).choix === undefined
    ) {
      navigate("/");
    }
  }, []);

  /* const foodOptions = [
    { value: "Cari", label: "Cari" },
    { value: "Pain", label: "Pain" },
    { value: "Tapas", label: "Tapas" },
    { value: "Boissons", label: "Boissons" },
    { value: "Rougail Saucisses", label: "Rougail Saucisses" },
    { value: "Rougail Boucané", label: "Rougail Boucané" },
    { value: "Rougail la Morue", label: "Rougail la Morue" },
    { value: "Rougail Zandouille", label: "Rougail Zandouille" },
    { value: "Rougail Sounouk", label: "Rougail Sounouk" },
    { value: "Ti Jak Boucané", label: "Ti Jak Boucané" },
    { value: "Boucané Bringel", label: "Boucané Bringel" },
    { value: "Civet Lapin", label: "Civet Lapin" },
    { value: "Civet Coq", label: "Civet Coq" },
    { value: "Civet Porc", label: "Civet Porc" },
    { value: "Civet Sanglier", label: "Civet Sanglier" },
    { value: "Civet Zourite", label: "Civet Zourite" },
    { value: "Civet Dinde", label: "Civet Dinde" },
    { value: "Civet Tang", label: "Civet Tang" },
    { value: "Civet Canard", label: "Civet Canard" },
    { value: "Civet la Pat Cochon", label: "Civet la Pat Cochon" },
    { value: "Cari Poulet", label: "Cari Poulet" },
    { value: "Cari Poisson", label: "Cari Poisson" },
    { value: "Rôti Porc", label: "Rôti Porc" },
    { value: "Porc Braisé", label: "Porc Braisé" },
    { value: "Daube Chouchou", label: "Daube Chouchou" },
    { value: "Daube Citrouille", label: "Daube Citrouille" },
    { value: "Gratin Chouchou", label: "Gratin Chouchou" },
    { value: "Fricassé de Brèdes", label: "Fricassé de Brèdes" },
    { value: "Shop Suey Poulet", label: "Shop Suey Poulet" },
    { value: "Shop Suey Porc", label: "Shop Suey Porc" },
    { value: "Shop Suey Boeuf", label: "Shop Suey Boeuf" },
    { value: "Shop Suey Crevettes", label: "Shop Suey Crevettes" },
    { value: "Bol renversé", label: "Bol renversé" },
    { value: "Briani Poulet", label: "Briani Poulet" },
    { value: "Briani légumes", label: "Briani légumes" },
    { value: "Massalé Cabri", label: "Massalé Cabri" },
    { value: "Riz Zembrocal", label: "Riz Zembrocal" },
    { value: "Riz Jaune", label: "Riz Jaune" },
    { value: "Riz Cantonnais", label: "Riz Cantonnais" },
    { value: "Sauté Mine", label: "Sauté Mine" },
  ];

  const handleFood = (selectedOptions) => {
    setFood(selectedOptions.map((el) => el.label));
  };
*/
  /*
  const today = new Date();
   const day = today.getDay();
   const dayList = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];

  const close = dayList[day]; */
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <button type="button" className="item_ok" onDragStart={handleDragStart}>
      <img src={creole} alt="" /> <p>Créole</p>
    </button>,
    <button type="button" className="item_ok" onDragStart={handleDragStart}>
      <img src={pains} alt="" /> <p>Pains</p>
    </button>,
    <button type="button" className="item_ok" onDragStart={handleDragStart}>
      <img src={vegetarien} alt="" /> <p>Végétarien</p>
    </button>,
    <button type="button" className="item_ok" onDragStart={handleDragStart}>
      <img src={chinois} alt="" /> <p>Chinois</p>
    </button>,
    <button type="button" className="item_ok" onDragStart={handleDragStart}>
      <img src={indien} alt="" /> <p>Indien</p>
    </button>,
    <button type="button" className="item_ok" onDragStart={handleDragStart}>
      <img src={pizzas} alt="" /> <p>Pizzas</p>
    </button>,
    <button type="button" className="item_ok" onDragStart={handleDragStart}>
      <img src={alcool} alt="" /> <p>Alcool</p>
    </button>,
  ];

  const responsive = {
    0: {
      items: 3.5,
    },
    1024: {
      items: 10,
    },
  };

  return (
    <div className="restaurants">
      <Helmet>
        <title> {helmet.title} | Restautants </title>
        <link rel="canonical" href={`${helmet.href}/Restaurants`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <h1>
        {recherche.choix} à {recherche.city}
      </h1>
      <section>
        <div className="tri">
          <AliceCarousel
            mouseTracking
            disableDotsControls
            disableButtonsControls
            items={items}
            responsive={responsive}
          />
        </div>
      </section>

      <section className="restaurants_container">
        {restos &&
        restos.filter((el) =>
          el.Ville.toLowerCase().includes(recherche.city.toLowerCase())
        ).length > 0 ? (
          restos
            .filter((el) =>
              el.Ville.toLowerCase().includes(recherche.city.toLowerCase())
            )
            .map((restaurant) => (
              <Link
                to={`/restaurants/${restaurant.Nom.replaceAll(" ", "_")}`}
                key={restaurant.id}
              >
                <button type="button" className="carte">
                  <div className="flex justify-left align-center">
                    <h3>{restaurant.Nom} </h3>
                    <p>- Restaurant {restaurant.Type}</p>
                  </div>
                  <img src={restaurant.img} alt={restaurant.Nom} />
                  <div className="flex justify-between align-center">
                    <p>{restaurant.Indication}</p>
                    <small>Ferme à 17h</small>
                  </div>
                </button>
              </Link>
            ))
        ) : (
          <p>
            Malheureusement, aucun restaurants de disponible avec votre
            recherche
          </p>
        )}
      </section>
    </div>
  );
}

export default Restaurants;
