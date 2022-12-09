import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Select from "react-select";

function Services({ helmet, setFood }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const foodOptions = [
    { value: "Cari", label: "Cari" },
    { value: "Pain", label: "Pain" },
    { value: "Tapas", label: "Tapas" },
    { value: "Boissons", label: "Boissons" },
    { value: "Rougail Saucisses", label: "Rougail Saucisses" },
    { value: "Rougail Boucané", label: "Rougail Boucané" },
    { value: "Rougail la Morue", label: "Rougail la Morue" },
    { value: "Rougail Zandouille", label: "Rougail Zandouille" },
    { value: "Rougail Sounouk", label: "Rougail Sounouk" },
    { value: "Ti Jak Boucané", label: "Ti Jak Boucané" },
    { value: "Boucané Bringel", label: "Boucané Bringel" },
    { value: "Civet Lapin", label: "Civet Lapin" },
    { value: "Civet Coq", label: "Civet Coq" },
    { value: "Civet Porc", label: "Civet Porc" },
    { value: "Civet Sanglier", label: "Civet Sanglier" },
    { value: "Civet Zourite", label: "Civet Zourite" },
    { value: "Civet Dinde", label: "Civet Dinde" },
    { value: "Civet Tang", label: "Civet Tang" },
    { value: "Civet Canard", label: "Civet Canard" },
    { value: "Civet la Pat Cochon", label: "Civet la Pat Cochon" },
    { value: "Cari Poulet", label: "Cari Poulet" },
    { value: "Cari Poisson", label: "Cari Poisson" },
    { value: "Rôti Porc", label: "Rôti Porc" },
    { value: "Porc Braisé", label: "Porc Braisé" },
    { value: "Daube Chouchou", label: "Daube Chouchou" },
    { value: "Daube Citrouille", label: "Daube Citrouille" },
    { value: "Gratin Chouchou", label: "Gratin Chouchou" },
    { value: "Fricassé de Brèdes", label: "Fricassé de Brèdes" },
    { value: "Shop Suey Poulet", label: "Shop Suey Poulet" },
    { value: "Shop Suey Porc", label: "Shop Suey Porc" },
    { value: "Shop Suey Boeuf", label: "Shop Suey Boeuf" },
    { value: "Shop Suey Crevettes", label: "Shop Suey Crevettes" },
    { value: "Bol renversé", label: "Bol renversé" },
    { value: "Briani Poulet", label: "Briani Poulet" },
    { value: "Briani légumes", label: "Briani légumes" },
    { value: "Massalé Cabri", label: "Massalé Cabri" },
    { value: "Riz Zembrocal", label: "Riz Zembrocal" },
    { value: "Riz Jaune", label: "Riz Jaune" },
    { value: "Riz Cantonnais", label: "Riz Cantonnais" },
    { value: "Sauté Mine", label: "Sauté Mine" },
  ];

  const handleFood = (selectedOptions) => {
    setFood(selectedOptions.map((el) => el.label));
  };

  return (
    <div>
      <Helmet>
        <title> {helmet.title} | Services </title>
        <link rel="canonical" href={`${helmet.href}/Services`} />
        <meta name="description" content={helmet.description} />
      </Helmet>

      <section>
        <Select options={foodOptions} onChange={handleFood} isMulti />
      </section>
    </div>
  );
}

export default Services;
