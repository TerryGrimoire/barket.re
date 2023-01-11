import React from "react";
import { Link, useLocation } from "react-router-dom";

import grimoirenumerique from "../../assets/grimoirenumerique.png";
import terrygrimoire from "../../assets/terrygrimoire.jpg";

function Footer() {
  const { pathname } = useLocation();
  // you can check a more conditions here
  if (pathname === "/") return null;
  return (
    <footer className="footer">
      <div className="footer_plan">
        <h4>Liens utiles</h4>
        <ul className="flex-col justify-evenly align-start">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/Menu">Menu du jour</Link>
          </li>
          <li>
            <Link to="/Mentions">Mentions Légales</Link>
          </li>
          <li>
            <Link to="/Mentions">Politique de confidentialité</Link>
          </li>
        </ul>
      </div>
      <div className="mentions_obligatoires">
        <h4>Conception</h4>
        <small>
          Ce site a été designé et développé par Terry Grimoire, fondateur du{" "}
          <a
            href="https://www.grimoire-numerique.re"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <strong>Grimoire Numérique</strong>
          </a>
          .
        </small>
        <a
          href="https://www.grimoire-numerique.re"
          target="_blank"
          rel="noreferrer"
        >
          <ul className="flex align-center justify-start terry">
            <li>
              <img src={grimoirenumerique} alt="logo de Facebook" />
            </li>
            <li>
              <img
                src={terrygrimoire}
                alt="logo de Tiktok"
                className="tiktok"
              />
            </li>
          </ul>
        </a>
      </div>
      <div className="footer_bottom">
        <small>Tous droits réservés 2022 ©</small>
      </div>
    </footer>
  );
}

export default Footer;
