import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Restaurant({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dayList = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];

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

      <section className="horaires_joursferies light_bg">
        <div className="contact_horaires light_bg">
          <h2>Nos horaires</h2>
          {/* Si l'entreprise ne ferme pas le midi */}

          {
            /* Si l'entreprise ferme le midi  */
            resto[0].Lundi20 !== "" && (
              <div>
                <div>
                  Lundi :{" "}
                  {resto[0].LundiO === "Fermé" && resto[0].Lundi2O === "Fermé"
                    ? resto[0].LundiO
                    : `${resto[0].LundiO} - ${resto[0].LundiF} | ${
                        resto[0].Lundi2O === "Fermé" &&
                        resto[0].Lundi2F === "Fermé"
                          ? "Fermé"
                          : `${resto[0].Lundi2O} - ${resto[0].Lundi2F}`
                      }`}
                </div>
                <div>
                  Mardi :{" "}
                  {resto[0].MardiO === "Fermé" && resto[0].Mardi2O === "Fermé"
                    ? resto[0].MardiO
                    : `${resto[0].MardiO} - ${resto[0].MardiF} | ${
                        resto[0].Mardi2O === "Fermé" &&
                        resto[0].Mardi2F === "Fermé"
                          ? "Fermé"
                          : `${resto[0].Mardi2O} - ${resto[0].Mardi2F}`
                      }`}
                </div>
                <div>
                  Mercredi :{" "}
                  {resto[0].MercrediO === "Fermé" &&
                  resto[0].Mercredi2O === "Fermé"
                    ? resto[0].MercrediO
                    : `${resto[0].MercrediO} - ${resto[0].MercrediF} | ${
                        resto[0].Mercredi2O === "Fermé" &&
                        resto[0].Mercredi2F === "Fermé"
                          ? "Fermé"
                          : `${resto[0].Mercredi2O} - ${resto[0].Mercredi2F}`
                      }`}
                </div>
                <div>
                  Jeudi :{" "}
                  {resto[0].JeudiO === "Fermé" && resto[0].Jeudi2O === "Fermé"
                    ? resto[0].JeudiO
                    : `${resto[0].JeudiO} - ${resto[0].JeudiF} | ${
                        resto[0].Jeudi2O === "Fermé" &&
                        resto[0].Jeudi2F === "Fermé"
                          ? "Fermé"
                          : `${resto[0].Jeudi2O} - ${resto[0].Jeudi2F}`
                      }`}
                </div>
                <div>
                  Vendredi :{" "}
                  {resto[0].VendrediO === "Fermé" &&
                  resto[0].Vendredi2O === "Fermé"
                    ? resto[0].VendrediO
                    : `${resto[0].VendrediO} - ${resto[0].VendrediF} | ${
                        resto[0].Vendredi2O === "Fermé" &&
                        resto[0].Vendredi2F === "Fermé"
                          ? "Fermé"
                          : `${resto[0].Vendredi2O} - ${resto[0].Vendredi2F}`
                      }`}
                </div>
                <div>
                  Samedi :{" "}
                  {resto[0].SamediO === "Fermé" && resto[0].Samedi2O === "Fermé"
                    ? resto[0].SamediO
                    : `${resto[0].SamediO} - ${resto[0].SamediF} | ${
                        resto[0].Samedi2O === "Fermé" &&
                        resto[0].Samedi2F === "Fermé"
                          ? "Fermé"
                          : `${resto[0].Samedi2O} - ${resto[0].Samedi2F}`
                      }`}
                </div>
                <div>
                  Dimanche :{" "}
                  {resto[0].DimancheO === "Fermé" &&
                  resto[0].Dimanche2O === "Fermé"
                    ? resto[0].DimancheO
                    : `${resto[0].DimancheO} - ${resto[0].DimancheF} | ${
                        resto[0].Dimanche2O === "Fermé" &&
                        resto[0].Dimanche2F === "Fermé"
                          ? "Fermé"
                          : `${resto[0].Dimanche2O} - ${resto[0].Dimanche2F}`
                      }`}
                </div>
              </div>
            )
          }
        </div>

        <div className="contact_feries light_bg">
          {resto[0].ouvert ? (
            <div>
              <h2> Jours fériés</h2>

              <p>
                Nous sommes fermés les jours fériés à l'exception des jours
                suivants :{" "}
              </p>

              <ul>
                {Object.keys(resto[0].ouvert).map((el) => (
                  <p className="contact_li" key={el}>
                    ▫️ {el}
                  </p>
                ))}
              </ul>
            </div>
          ) : (
            <p>Nous sommes fermés les jours fériés</p>
          )}
        </div>
      </section>

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
