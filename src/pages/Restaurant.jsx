import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Restaurant({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* const dayList = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
*/

  const { id } = useParams();

  const menu = JSON.parse(sessionStorage.getItem("menus")).filter((el) =>
    el.Nom.toLowerCase().replaceAll(" ", "_").includes(id.toLowerCase())
  );
  const resto = JSON.parse(sessionStorage.getItem("restos")).filter((el) =>
    el.Nom.toLowerCase().replace(" ", "_").includes(id.toLowerCase())
  );

  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
  const yyyy = today.getFullYear();

  today = `${yyyy}${mm}${dd}`;
  return (
    <div className="restaurant_page">
      <Helmet>
        <title>{helmet.title} |</title>
        <link rel="canonical" href={`${helmet.href}/Restaurants/${id}`} />
        <meta name="description" content={helmet.description} />
      </Helmet>

      {resto && (
        <>
          {resto[0].Message &&
            resto[0].Debut &&
            resto[0].Fin &&
            resto[0].Debut - 7 < today &&
            resto[0].Fin > today && (
              <div className="message">
                {resto[0].Message.replaceAll("Nous", `${resto[0].Nom}`)}
              </div>
            )}
          <section className="top">
            <h1>{resto[0].Nom}</h1>
            <p>{resto[0].description}</p>
          </section>
          <iframe src={resto[0].Maps} title={resto[0].Titre} />
          <section className="contact">
            <h2>Contact</h2>
            <a href={`tel:+262${resto[0].Numéro.replace("0", "")}`}>
              <p>Téléphone : {resto[0].Numéro}</p>
            </a>
            <a href={resto[0].Site} target="_blank" rel="noreferrer">
              <p>Site internet : {resto[0].Site}</p>
            </a>
            <p>Nous trouver : Dans la médiathèque du Port.</p>
            <p>Adresse : {resto[0].Adresse}</p>
          </section>
        </>
      )}

      <section className="paiements">
        <h2>Moyens de paiement acceptés</h2>
        {resto[0].paiement.length <= 1 ? (
          <p>Espèces uniquement</p>
        ) : (
          resto[0].paiement.map((el) => <p key={el}>{el}</p>)
        )}
      </section>

      <section className="restaurant_menu">
        <h2>La carte</h2>
        <div>
          <h3>Les plats</h3>
          {menu.filter((okok) => okok.Type !== "Dessert").length > 0 ? (
            <>
              {menu
                .filter((el) => el.Type !== "Dessert")
                .map((el) => (
                  <Link
                    to={`/Menu/${el.Nom.replaceAll(
                      " ",
                      "_"
                    )}/${el.Plat.replaceAll(" ", "_")}`}
                    key={el.Plat.replaceAll(" ", "_")}
                  >
                    <button className="carte" type="button">
                      <div className="flex justify-between">
                        <h4>{el.Plat}</h4>
                        <h4>{el.Prix}</h4>
                      </div>
                      <p>{el.Description}</p>
                    </button>
                  </Link>
                ))}
            </>
          ) : (
            <p>Ce restaurant n'a pas mis à jour son menu.</p>
          )}
        </div>
        <div>
          <h3>Les desserts</h3>
          {menu.filter((ok) => ok.Type === "Dessert").length > 0 ? (
            <>
              {menu
                .filter((el) => el.Type === "Dessert")
                .map((el) => (
                  <Link
                    to={`/Menu/${el.Nom.replaceAll(
                      " ",
                      "_"
                    )}/${el.Plat.replaceAll(" ", "_")}`}
                    key={el.Plat.replaceAll(" ", "_")}
                  >
                    <button className="carte" type="button">
                      <div className="flex justify-between">
                        <h4>{el.Plat}</h4>
                        <h4>{el.Prix}</h4>
                      </div>
                      <p>{el.Description}</p>
                    </button>
                  </Link>
                ))}
            </>
          ) : (
            <p>Ce restaurant ne propose pas de dessert pour le moment.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Restaurant;
