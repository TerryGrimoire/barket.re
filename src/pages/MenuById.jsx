import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Restaurant({ helmet }) {
  const { restaurant, plat } = useParams();

  const menu = JSON.parse(sessionStorage.getItem("menus")).filter((el) =>
    el.Nom.toLowerCase().replaceAll(" ", "_").includes(restaurant.toLowerCase())
  );
  const resto = JSON.parse(sessionStorage.getItem("restos")).filter((el) =>
    el.Nom.toLowerCase().replaceAll(" ", "_").includes(restaurant.toLowerCase())
  );

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (
      !JSON.parse(sessionStorage.getItem("recherche")) ||
      !JSON.parse(sessionStorage.getItem("recherche")).city ||
      !JSON.parse(sessionStorage.getItem("recherche")).choix
    ) {
      navigate("/");
    } else if (resto.length <= 0) {
      navigate("/Menu");
    }
  }, []);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="menuById">
      <Helmet>
        <title>{helmet.title} |</title>
        <link
          rel="canonical"
          href={`${helmet.href}/Restaurants/${restaurant}/${plat}`}
        />
        <meta name="description" content={helmet.description} />
      </Helmet>

      {resto.length > 0 && (
        <>
          <h1>
            {plat.replaceAll("_", " ")} de {resto[0].Nom}
          </h1>

          <section>
            <div className="menuById_container">
              {menu
                .filter((el) =>
                  el.Plat.toLowerCase().includes(
                    plat.toLowerCase().replaceAll("_", " ")
                  )
                )
                .map((el) => (
                  <div className="carte" key={el.Plat}>
                    <div className="flex justify-between">
                      <h4>{el.Plat}</h4>
                      <h4>{el.Prix}</h4>
                    </div>
                    <p>{el.Description}</p>
                  </div>
                ))}
            </div>
          </section>

          {resto[0].Nom && menu && (
            <>
              <section>
                <h2>D??couvrir {resto[0].Nom}</h2>
                <p>{resto[0].description}</p>
              </section>
              <iframe src={resto[0].Maps} title={resto[0].Titre} />
              <section className="contact">
                <h2>R??servez d??s maintenant</h2>
                <a href={`tel:+262${resto[0].Num??ro.replace("0", "")}`}>
                  <p>T??l??phone : {resto[0].Num??ro}</p>
                </a>
                <a href={resto[0].Site} target="_blank" rel="noreferrer">
                  <p>Site internet : {resto[0].Site}</p>
                </a>
                <p>Nous trouver : Dans la m??diath??que du Port.</p>
                <p>Adresse : {resto[0].Adresse}</p>
              </section>
              <section>
                <h2>Moyens de paiement accept??s</h2>
                {resto[0].paiement.length <= 1 ? (
                  <p>Esp??ces uniquement</p>
                ) : (
                  resto[0].paiement.map((el) => <p key={el}>{el}</p>)
                )}
              </section>
            </>
          )}

          <section>
            <h2>Les autres plats de {restaurant}</h2>
            <div className="sel">
              {menu.filter(
                (el) =>
                  !el.Plat.toLowerCase().includes(
                    plat.toLowerCase().replaceAll("_", " ")
                  ) && el.Type.toLowerCase().includes("repas")
              ).length > 0 && (
                <div>
                  <h3>Les plats sal??s</h3>
                  {menu
                    .filter(
                      (el) =>
                        !el.Plat.toLowerCase().includes(
                          plat.toLowerCase().replaceAll("_", " ")
                        ) && el.Type.toLowerCase().includes("repas")
                    )
                    .map((el) => (
                      <Link
                        to={`/Menu/${el.Nom.replaceAll(
                          " ",
                          "_"
                        )}/${el.Plat.replaceAll(" ", "_")}`}
                        key={el.Plat.replaceAll(" ", "_")}
                      >
                        <button
                          className="carte"
                          onClick={handleClick}
                          type="button"
                        >
                          <div className="flex justify-between">
                            <h4>{el.Plat}</h4>
                            <h4>{el.Prix}</h4>
                          </div>
                          <p>{el.Description}</p>
                        </button>
                      </Link>
                    ))}
                </div>
              )}
            </div>

            <div className="sucre">
              {menu.filter(
                (el) =>
                  !el.Plat.toLowerCase().includes(
                    plat.toLowerCase().replaceAll("_", " ")
                  ) && el.Type.toLowerCase().includes("dessert")
              ).length > 0 && (
                <div>
                  <h3>Les desserts</h3>
                  {menu
                    .filter(
                      (el) =>
                        !el.Plat.toLowerCase().includes(
                          plat.toLowerCase().replaceAll("_", " ")
                        ) && el.Type.toLowerCase().includes("dessert")
                    )
                    .map((el) => (
                      <Link
                        to={`/Menu/${el.Nom.replaceAll(
                          " ",
                          "_"
                        )}/${el.Plat.replaceAll(" ", "_")}`}
                        key={el.Plat.replaceAll(" ", "_")}
                      >
                        <button
                          className="carte"
                          onClick={handleClick}
                          type="button"
                        >
                          <div className="flex justify-between">
                            <h4>{el.Plat}</h4>
                            <h4>{el.Prix}</h4>
                          </div>
                          <p>{el.Description}</p>
                        </button>
                      </Link>
                    ))}
                </div>
              )}
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default Restaurant;
