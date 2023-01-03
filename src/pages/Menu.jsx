import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Menu({ helmet }) {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenu(JSON.parse(sessionStorage.getItem("menus")));
  }, []);

  return (
    <div className="Menu_page">
      <Helmet>
        <title>{helmet.title} |</title>
        <link rel="canonical" href={`${helmet.href}/Menu`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <section>
        {menu.map((el) => (
          <div key={el.Plat}>
            <h3>{el.Plat}</h3>
            <p>{el.Prix}</p>
            <p>{el.Description}</p>
            <Link to={`/Restaurants/${el.Nom}`}>
              {el.Nom.replace("_", " ")}
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Menu;
