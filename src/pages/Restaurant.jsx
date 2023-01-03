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

  return (
    <div className="restaurant_page">
      <Helmet>
        <title>{helmet.title} |</title>
        <link rel="canonical" href={`${helmet.href}/Restaurants/${id}`} />
        <meta name="description" content={helmet.description} />
      </Helmet>

      {resto && (
        <>
          <section className="top">
            <div>
              <h1>{resto[0].Titre}</h1>
              <p>{resto[0].description}</p>
            </div>
            <iframe src={resto[0].Maps} title={resto[0].Titre} />
          </section>
          <section className="contact">
            <h2>Contact</h2>
            <p>Téléphone : {resto[0].Numéro}</p>
            <p>Email : {resto[0].Email}</p>
            <p>Site internet : {resto[0].Site}</p>
            <p>Nous trouver : Dans la médiathèque du Port.</p>
            <p>Adresse : {resto[0].Adresse}</p>
          </section>
        </>
      )}

      <section>
        <h2>La carte</h2>
        <div>
          <h3>Les plats</h3>
          {menu && (
            <>
              {menu
                .filter((el) => el.Type !== "Dessert")
                .map((el) => (
                  <div>
                    <p>{el.Plat}</p>
                    <p>{el.Description}</p>
                    <p>{el.Prix}</p>
                  </div>
                ))}
            </>
          )}
        </div>
        <div>
          <h3>Les desserts</h3>
          {menu && (
            <>
              {menu
                .filter((el) => el.Type === "Dessert")
                .map((el) => (
                  <div>
                    <p>{el.Plat}</p>
                    <p>{el.Description}</p>
                    <p>{el.Prix}</p>
                  </div>
                ))}
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default Restaurant;
