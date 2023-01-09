import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Menu({ helmet }) {
  const [menu, setMenu] = useState([]);
  const [recherche, setRecherche] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (
      !JSON.parse(sessionStorage.getItem("recherche")) ||
      !JSON.parse(sessionStorage.getItem("recherche")).city ||
      !JSON.parse(sessionStorage.getItem("recherche")).choix
    ) {
      navigate("/");
    } else {
      setMenu(JSON.parse(sessionStorage.getItem("menus")));
      setRecherche(JSON.parse(sessionStorage.getItem("recherche")));
    }
  }, []);

  const resto = JSON.parse(sessionStorage.getItem("restos"));

  return (
    <div className="menu_page">
      <Helmet>
        <title>{helmet.title} |</title>
        <link rel="canonical" href={`${helmet.href}/Menu`} />
        <meta name="description" content={helmet.description} />
      </Helmet>

      {menu && recherche && (
        <main>
          <section className="menu_top">
            <h1>Les Menus du jour</h1>

            <div className="tri">
              <button type="button">Créole</button>
              <button type="button">Pains</button>
              <button type="button">Végétarien</button>
              <button type="button">Chinois</button>
              <button type="button">Indien</button>
              <button type="button">Desserts</button>
              <button type="button">Pizzas</button>
              <button type="button">Alcool</button>
            </div>
          </section>
          <section
            className={
              recherche.choix === "Menu du jour"
                ? "menu_middle"
                : "menu_middle reverse"
            }
          >
            <section>
              <h2>Les plats du jour à {recherche.city}</h2>
              {menu
                .filter(
                  (el) =>
                    el.Ville.toLowerCase().includes(
                      recherche.city.toLowerCase()
                    ) && el.Type.toLowerCase().includes("repas")
                )
                .map((el) => (
                  <Link
                    to={`/Menu/${el.Nom.replaceAll(
                      " ",
                      "_"
                    )}/${el.Plat.replaceAll(" ", "_")}`}
                  >
                    <div className="top">
                      <h3>{el.Plat}</h3>
                      <h3>{el.Prix}</h3>
                    </div>
                    <div className="bottom">
                      <p>
                        {el.Nom.replaceAll("_", " ")} -{" "}
                        {resto
                          .filter((element) =>
                            element.Nom.toLowerCase()
                              .replace(" ", "_")
                              .includes(el.Nom.toLowerCase())
                          )
                          .map((restaurant) => (
                            <small>{restaurant.Indication}</small>
                          ))}
                      </p>
                    </div>
                  </Link>
                ))}
            </section>
            <section>
              <h2>Les desserts du jour à {recherche.city}</h2>
              {menu
                .filter(
                  (el) =>
                    el.Ville.toLowerCase().includes(
                      recherche.city.toLowerCase()
                    ) && el.Type.toLowerCase().includes("dessert")
                )
                .map((el) => (
                  <Link
                    to={`/Menu/${el.Nom.replaceAll(
                      " ",
                      "_"
                    )}/${el.Plat.replaceAll(" ", "_")}`}
                  >
                    <div className="top">
                      <h3>{el.Plat}</h3>
                      <h3>{el.Prix}</h3>
                    </div>
                    <div className="bottom">
                      <p>
                        {el.Nom.replace("_", " ")} -{" "}
                        {resto
                          .filter((element) =>
                            element.Nom.toLowerCase()
                              .replace(" ", "_")
                              .includes(el.Nom.toLowerCase())
                          )
                          .map((restaurant) => (
                            <small>{restaurant.Indication}</small>
                          ))}
                      </p>
                    </div>
                  </Link>
                ))}
            </section>
          </section>
        </main>
      )}
    </div>
  );
}

export default Menu;
