import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div>
      <div className="header-container">
        <div className="help-btn">
          {/* Link to help component*/}
          <Link to="/help">Help</Link>
        </div>
        <div className="header">iTunes Search</div>
        <div className="favourite-btn">
          {/* Link to favourites list */}
          <Link to="/favourites">Favourites</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
