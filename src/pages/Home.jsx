import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import papa from "papaparse";
import Select from "react-select";
import plat from "../assets/plat.png";

export default function Home({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [options, setOptions] = useState();
  const [city, setCity] = useState();

  // On récupère toutes les informations des restaurants

  const prepareData = (data) => {
    // j correspond aux lignes de A à ZZZ sur fichier Excel
    // index
    // line correspond à
    // index correspond à
    // key correspond à

    let obj = {};
    const json = data.map((line, index) => {
      if (index > 0) {
        data[0].forEach((key, j) => {
          if (
            (key.includes("Lundi") ||
              key.includes("Mardi") ||
              key.includes("Mercredi") ||
              key.includes("Jeudi") ||
              key.includes("Vendredi") ||
              key.includes("Samedi") ||
              key.includes("Dimanche")) &&
            line[j] !== ""
          ) {
            obj = { ...obj, date: { ...obj.date, [key]: line[j] } };
          } else if (line[j] !== "" && j > 0) {
            obj = { ...obj, [key]: line[j] };
          }
        });
      }
      return obj;
    });

    json.shift();
    sessionStorage.setItem("restos", JSON.stringify(json));
  };

  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQNiVoP7pAGKKmgJhi964b4IN4uWue-zOuGMYE0r3joChxy0zDcOk9BQE6z-2YkpDXDPwMx4dlC7a_U/pub?output=csv"
    )
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data) => prepareData(data.data));
  }, []);

  const cityOptions = [
    { value: "Le Port", label: "Le Port" },
    { value: "Saint-Denis", label: "Saint-Denis" },
    { value: "Sainte-Clotilde", label: "Sainte-Clotilde" },
  ];

  // get data for all the menus

  const prepareData2 = (data) => {
    // j correspond aux lignes de A à ZZZ sur fichier Excel
    // index
    // line correspond à
    // index correspond à
    // key correspond à

    let obj = {};
    const json = data.map((line, index) => {
      if (index > 0) {
        data[0].forEach((key, j) => {
          if (line[j] !== "" && j > 0) {
            obj = { ...obj, [key]: line[j] };
          }
        });
      }
      return obj;
    });

    json.shift();
    sessionStorage.setItem("menus", JSON.stringify([...new Set(json)]));
  };

  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQNiVoP7pAGKKmgJhi964b4IN4uWue-zOuGMYE0r3joChxy0zDcOk9BQE6z-2YkpDXDPwMx4dlC7a_U/pub?gid=749768856&single=true&output=csv"
    )
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data) => prepareData2(data.data));
  }, []);

  const handleOptions = (selectedOptions) => {
    setOptions(selectedOptions.label);
  };

  const choiceOptions = [
    { value: "Menu du jour", label: "Menu du jour" },
    { value: "Dessert du jour", label: "Dessert du jour" },
    { value: "Restaurants créoles", label: "Restaurants créoles" },
    { value: "Pains et Lords", label: "Pains et Lords" },
    { value: "Restaurants chinois", label: "Restaurants chinois" },
    { value: "Restaurants végétariens", label: "Restaurants végétariens" },
  ];

  const handleCity = (selectedOptions) => {
    setCity(selectedOptions.label);
  };

  const customStyles = {
    menuPortal: (provided) => ({ ...provided, zIndex: 3 }),
    menu: (provided) => ({ ...provided, zIndex: 3 }),
  };

  // When user clicks on "Trouver un restaurant"
  // the function handleClick stores the choices and redirects to the appropriate page

  const navigate = useNavigate();

  const handleClick = () => {
    const recherche = {
      choix: options,
      city,
    };
    sessionStorage.setItem("recherche", JSON.stringify(recherche));
    if (options.includes("du jour")) {
      navigate("/Menu");
    } else {
      navigate("/Restaurants");
    }
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
            options={choiceOptions}
            onChange={handleOptions}
            isClearable
            menuPortalTarget={document.body}
            menuPosition="fixed"
            styles={customStyles}
            placeholder="Kosa ou manz zordi ?"
          />
          <Select
            options={cityOptions}
            onChange={handleCity}
            isClearable
            menuPortalTarget={document.body}
            menuPosition="fixed"
            placeholder="Oussa ou lé ?"
            styles={customStyles}
          />

          <button type="button" onClick={handleClick}>
            Trouver un restaurant
          </button>
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
