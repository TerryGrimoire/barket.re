import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Navbar from "../components/Navigation/Navbar";
import logo from "../assets/logo.png";

function Burger({ helmet }) {
  const [user, setUser] = useState({});

  const handleCallbackResponse = (response) => {
    const userObject = jwt_decode(response.credential);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  };

  useEffect(() => {
    /* Global google */
    google.accounts.id.initialize({
      client_id:
        "1058843097770-h5llkvk61uun0246kce0k7q2t894fgbn.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });

    google.accounts.id.prompt();
  }, []);

  const handleSignOut = () => {
    setUser();
    document.getElementById("signInDiv").hidden = false;
  };

  return (
    <header className="flex padding-header justify-between align-center header">
      <Link to="/">
        <img src={logo} alt={`logo de ${helmet.title}`} className="logo" />
      </Link>
      <div id="signInDiv" />
      {user && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h3>{user.name}</h3>
          {Object.keys(user).length !== 0 && (
            <button
              type="button"
              onClick={() => {
                handleSignOut();
              }}
            >
              Sign Out
            </button>
          )}
        </div>
      )}
      <div className="desktop">
        <Navbar setOpenBurger={user} />
      </div>
    </header>
  );
}

export default Burger;
