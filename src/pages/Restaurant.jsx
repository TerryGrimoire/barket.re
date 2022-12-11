import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import restaurantData from "../data/restaurantsData.json";

function Restaurant({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const resto = restaurantData[id];

  return (
    <div className="restaurant_page">
      <Helmet>
        <title>
          {helmet.title} | {resto.title}
        </title>
        <link rel="canonical" href={`${helmet.href}/Restaurants/${id}`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <section className="top">
        <div>
          <h1>{resto.title}</h1>
          <p>{resto.description}</p>
        </div>
        <iframe src={resto.maps} title={resto.title} />
      </section>
      <section className="contact">
        <h2>Contact</h2>
        <p>Téléphone : {resto.phone}</p>
        <p>Email : {resto.email}</p>
        <p>Site internet : {resto.site}</p>
        <p>Nous trouver : Dans la médiathèque du Port.</p>
        <p>Adresse : {resto.address}</p>
      </section>

      {resto.today && (
        <section className="plats_du_jour">
          <h2>Plats du jour</h2>
          {resto.today.map((today) => (
            <div className="flex justify-between align-center">
              <p>{today.name}</p>
              <p>{today.prix}€</p>
            </div>
          ))}
        </section>
      )}

      <section>
        <h2>La carte</h2>
      </section>
    </div>
  );
}

export default Restaurant;
