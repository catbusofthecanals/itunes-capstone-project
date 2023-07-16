import React from "react";
import { Link } from "react-router-dom";
import Item from "../Item/Item";
import "./favourites.css";

const Favourites = ({ fetchFavourites, favourites }) => {
  return (
    <div className="favourites-container">
      <div className="header-section">
        <div className="header-container">
          <div className="back-btn">
            {/* Link back to Home */}
            <Link to="/">Back</Link>
          </div>
          <div className="header">Favourites</div>
          {/* use to keep heading centred */}
          <div className="blank"></div>
        </div>
      </div>
      <div className="favourites">
        {/* if favourites is empty display message */}
        {favourites === undefined ? (
          <div className="empty">No favourites added yet to display</div>
        ) : (
          <div className="fav-items">
            {/* map through favourites, pass item data as props through Item component */}
            {favourites &&
              favourites.map((item) => (
                // Component representing each item in 'favourites'
                <Item
                  item={item}
                  key={item.id}
                  fetchFavourites={fetchFavourites}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourites;
