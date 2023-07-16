import React from "react";
import { Link } from "react-router-dom";
import Bin from "./trash-can.png";
import Star from "./greystar.png";
import FavStar from "./star.png";
import "./help.css";

const Help = () => {
  return (
    <div className="help-container">
      <div className="header-section">
        <div className="header-container">
          <div className="back-btn">
            {/* Link back to Home */}
            <Link to="/">Back</Link>
          </div>
          <div className="header">Help</div>
          {/* use to keep heading centred */}
          <div className="blank"></div>
        </div>
      </div>
      <div className="help">
        <div className="help-search">
          <h4>Search for an item:</h4>
          <p>Enter a search term in the search box</p>
          <p>
            Filter your search by media type from the drop-down menu or leave as
            'All Media' to search all formats
          </p>
          <p>Press 'Search'</p>
        </div>
        <div className="help-add-fav">
          <h4>Add to favourites:</h4>
          <p>Find the item you would like to add to your favourites</p>
          <p>
            Select the <img className="logo" src={Star} alt="Favourite" /> icon
            next to that item to add it to your favourites
          </p>
        </div>
        <div className="help-view-fav">
          <h4>View favourites:</h4>
          <p>
            In the header bar, select the 'Favourites' button to see a list of
            your favourited items
          </p>
        </div>
        <div className="help-remove-fav">
          <h4>Remove an item within favourites:</h4>
          <p>
            {" "}
            Select the <img className="logo" src={Bin} alt="Trash Can" /> icon
            next to the item you would like to remove from your favourites
          </p>
        </div>
        <div className="help-remove-fav-home">
          <h4>Remove an item from favourites from the search page:</h4>
          <p>
            If an item has a{" "}
            <img className="logo" src={FavStar} alt="Remove Favourite" /> icon
            then it is in your favourites.
          </p>
          <p>Select the icon to remove this item from your favourites</p>
        </div>
      </div>
    </div>
  );
};

export default Help;
