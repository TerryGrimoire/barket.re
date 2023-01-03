import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Restaurant({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();

  const menu = JSON.parse(sessionStorage.getItem("menus")).filter((el) =>
    el.Nom.toLowerCase().includes(id.toLowerCase())
  );
  const resto = JSON.parse(sessionStorage.getItem("restos")).filter((el) =>
    el.Nom.toLowerCase().replace(" ", "_").includes(id.toLowerCase())
  );

  console.log(menu);
  console.log(resto);
  return (
    <div className="restaurant_page">
      <Helmet>
        <title>{helmet.title} |</title>
        <link rel="canonical" href={`${helmet.href}/Restaurants/${id}`} />
        <meta name="description" content={helmet.description} />
      </Helmet>

      {/* resto && (
        <>
          <section className="top">
            <div>
              <h1>{resto[id].Titre}</h1>
              <p>{resto[id].description}</p>
            </div>
            <iframe src={resto[id].Maps} title={resto[id].Titre} />
          </section>
          <section className="contact">
            <h2>Contact</h2>
            <p>Téléphone : {resto[id].Numéro}</p>
            <p>Email : {resto[id].Email}</p>
            <p>Site internet : {resto[id].Site}</p>
            <p>Nous trouver : Dans la médiathèque du Port.</p>
            <p>Adresse : {resto[id].Adresse}</p>
          </section>
        </>
      ) */}

      {/* resto.today && (
        <section className="plats_du_jour">
          <h2>Barquettes du jour</h2>
          {resto.today.map((today) => (
            <div className="flex justify-between align-center">
              <p>{today.name}</p>
              <p>{today.prix}€</p>
            </div>
          ))}
        </section>
          ) */}

      <section>
        <h2>La carte</h2>
      </section>
    </div>
  );
}

export default Restaurant;
