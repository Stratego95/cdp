import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import { CurrentUser } from "./App";

const Header = () => {
  const [active, setActive] = useState("home");
  const currentUser = useContext(CurrentUser);
  return (
    <div>
      <div className="ui secondary pointing menu">
        <Link
          className={`item ${active === "home" ? "active" : null}`}
          to="/"
          onClick={() => setActive("home")}
        >
          Home
        </Link>
        <Link
          className={`item ${active === "cdp" ? "active" : null}`}
          to="/elements"
          onClick={() => setActive("cdp")}
        >
          Code de Pointage Elements
        </Link>
        <Link
          className={`item ${active === "gymnasts" ? "active" : null}`}
          to="/gymnasts"
          onClick={() => setActive("gymnasts")}
        >
          Manage Gymnasts
        </Link>
        <div className="right menu">
          <div className="item">{currentUser}</div>
          <div className="item">
            {currentUser && active === "gymnasts" && <AmplifySignOut />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
