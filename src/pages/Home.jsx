import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Select from "react-select";
import plat from "../assets/plat.png";

export default function Home({ helmet, setCity, setDate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    setCity("📍Le Port");
  }, []);

  const cityOptions = [
    { value: "Le Port", label: "📍Le Port" },
    { value: "Saint-Denis", label: "📍Saint-Denis" },
    { value: "Sainte-Clotilde", label: "📍Sainte-Clotilde" },
  ];

  const handleCity = (selectedOptions) => {
    setCity(selectedOptions.label);
  };

  const customStyles = {
    menuPortal: (provided) => ({ ...provided, zIndex: 3 }),
    menu: (provided) => ({ ...provided, zIndex: 3 }),
  };

  return (
    <main className="flex-col home">
      <Helmet>
        <title> {helmet.title} | Accueil </title>
        <link rel="canonical" href={helmet.href} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <div className="home_container">
        <h1>Toute la gastronomie créole à votre disposition </h1>

        <form>
          <Select
            options={cityOptions}
            onChange={handleCity}
            defaultValue={{ label: "Le Port", value: "Le Port" }}
            isClearable
            menuPortalTarget={document.body}
            menuPosition="fixed"
            styles={customStyles}
          />
          <select
            name="date"
            id="date"
            onChange={(e) => setDate(e.target.value)}
          >
            <option value="today">⏱ Aujourd'hui</option>
            <option value="tomorrow">⏱ Demain</option>
          </select>
          <Link to="/restaurants">
            <button type="button">Trouver un restaurant</button>
          </Link>
        </form>
        <img
          src={plat}
          alt="assiete rougail saucisse de La Réunion"
          className="plat"
        />
      </div>
      <section className="white">
        <h2>
          Promouvoir les petits restaurateurs c'est soutenir l'économie locale.
        </h2>

        <article>
          <h3>Barket.re, Lorem ipsum dolor sit amet. </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            asperiores? Iusto unde tenetur perspiciatis sed quidem corrupti, hic
            cupiditate ex possimus quam itaque eos error laborum praesentium
            dolore repellat laboriosam iure provident est minus quod, recusandae
            sit perferendis. Ea nobis dolor perspiciatis, blanditiis quidem
            nulla laudantium est numquam delectus similique repellendus!
            Reiciendis, sunt.
          </p>

          <p>
            Itaque praesentium id, amet tempora debitis totam ipsa non corporis
            beatae rerum ullam ipsum modi! Similique ipsum molestias
            exercitationem blanditiis placeat temporibus non nemo quia ipsa
            saepe perferendis numquam, veritatis fuga, aspernatur tempore
            voluptas vero officia inventore cupiditate mollitia repellendus
            porro explicabo molestiae! Architecto nesciunt debitis tenetur,
            magni non fuga dolore provident deleniti ducimus excepturi at iusto,
            adipisci saepe expedita reprehenderit soluta cum laudantium
            voluptate ab.
          </p>

          <p>
            Debitis, id? Repudiandae, beatae vero! Quia dolorum odio
            exercitationem ab quis unde aut, facere distinctio possimus nisi
            laborum magnam sunt, debitis dicta nam consectetur eum nemo rerum
            nostrum eligendi impedit illum.
          </p>
        </article>
      </section>
    </main>
  );
}
