import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

export default function Home({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="flex-col">
      <Helmet>
        <title> {helmet.title} | Accueil </title>
        <link rel="canonical" href={helmet.href} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <div>
        <h1>La gastronomie créole à votre disposition.</h1>

        <div>
          <h3>Qu'est-ce qui vous fait envie aujourd'hui ? </h3>
          <div className="flex">
            <button type="button">Le Port</button>
            <button type="button">Saint Denis</button>
            <button type="button">Sainte Clotilde</button>
          </div>
        </div>
      </div>
    </main>
  );
}
