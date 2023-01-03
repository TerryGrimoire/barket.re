import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Menu({ helmet }) {
  const [menu, setMenu] = useState([]);
  const [recherche, setRecherche] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenu(JSON.parse(sessionStorage.getItem("menus")));
    setRecherche(JSON.parse(sessionStorage.getItem("recherche")));
  }, []);

  return (
    <div className="menu_page">
      <Helmet>
        <title>{helmet.title} |</title>
        <link rel="canonical" href={`${helmet.href}/Menu`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <main>
        <section className="menu_top">
          <h1>Les Menus du jour</h1>
          <div>
            <p>trier</p>
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
            <h2>Les plats salés du jour</h2>
            {menu
              .filter(
                (el) =>
                  el.Ville.toLowerCase().includes(
                    recherche.city.toLowerCase()
                  ) && el.Type.toLowerCase().includes("repas")
              )
              .map((el) => (
                <div key={el.Plat}>
                  <div className="top">
                    <h3>
                      {el.Plat} de{"  "}
                      <Link to={`/Restaurants/${el.Nom}`}>
                        <span>{el.Nom.replace("_", " ")}</span>
                      </Link>
                    </h3>
                    <h3>{el.Prix}</h3>
                  </div>
                </div>
              ))}
          </section>
          <section>
            <h2>Les desserts du jour</h2>
            {menu
              .filter(
                (el) =>
                  el.Ville.toLowerCase().includes(
                    recherche.city.toLowerCase()
                  ) && el.Type.toLowerCase().includes("dessert")
              )
              .map((el) => (
                <div key={el.Plat}>
                  <div className="top">
                    <h3>
                      {el.Plat} de{"  "}
                      <Link to={`/Restaurants/${el.Nom}`}>
                        <span>{el.Nom.replace("_", " ")}</span>
                      </Link>
                    </h3>
                    <h3>{el.Prix}</h3>
                  </div>
                </div>
              ))}
          </section>
        </section>
      </main>
    </div>
  );
}

export default Menu;
