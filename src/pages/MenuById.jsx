import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Restaurant({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { restaurant, plat } = useParams();

  const menu = JSON.parse(sessionStorage.getItem("menus")).filter((el) =>
    el.Nom.toLowerCase().includes(restaurant.toLowerCase())
  );
  const resto = JSON.parse(sessionStorage.getItem("restos")).filter((el) =>
    el.Nom.toLowerCase().replace(" ", "_").includes(restaurant.toLowerCase())
  );

  return (
    <div className="restaurant_page">
      <Helmet>
        <title>{helmet.title} |</title>
        <link
          rel="canonical"
          href={`${helmet.href}/Restaurants/${restaurant}/${plat}`}
        />
        <meta name="description" content={helmet.description} />
      </Helmet>

      <h1>
        {plat} de {resto[0].Nom}
      </h1>

      <section>
        <div className="menu_by_id">
          {menu
            .filter((el) => el.Plat.toLowerCase().includes(plat.toLowerCase()))
            .map((el) => (
              <div>
                <div className="top">
                  <p>{el.Plat}</p>
                  <p>{el.Prix}</p>
                </div>
                <p>{el.Description}</p>
              </div>
            ))}
        </div>
      </section>

      {resto && menu && (
        <>
          <section>
            <div>
              <h1>Découvrir {resto[0].Nom}</h1>
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
        <h2>Les autres plats de {restaurant}</h2>
        <div className="sel">
          {menu.filter(
            (el) =>
              !el.Plat.toLowerCase().includes(plat.toLowerCase()) &&
              el.Type.toLowerCase().includes("repas")
          ).length > 0 && (
            <div>
              <h3>Les plats salés</h3>
              {menu
                .filter(
                  (el) =>
                    !el.Plat.toLowerCase().includes(plat.toLowerCase()) &&
                    el.Type.toLowerCase().includes("repas")
                )
                .map((el) => (
                  <div>
                    <div className="top">
                      <p>{el.Plat}</p>
                      <p>{el.Prix}</p>
                    </div>
                    <p>{el.Description}</p>
                  </div>
                ))}
            </div>
          )}
        </div>

        <div className="sucre">
          {menu.filter(
            (el) =>
              !el.Plat.toLowerCase().includes(plat.toLowerCase()) &&
              el.Type.toLowerCase().includes("dessert")
          ).length > 0 && (
            <div>
              <h3>Les desserts</h3>
              {menu
                .filter(
                  (el) =>
                    !el.Plat.toLowerCase().includes(plat.toLowerCase()) &&
                    el.Type.toLowerCase().includes("dessert")
                )
                .map((el) => (
                  <div>
                    <div className="top">
                      <p>{el.Plat}</p>
                      <p>{el.Prix}</p>
                    </div>
                    <p>{el.Description}</p>
                  </div>
                ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Restaurant;
