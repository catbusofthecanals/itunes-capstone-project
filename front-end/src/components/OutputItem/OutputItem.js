import React, { useEffect, useState } from "react";
import Star from "./greystar.png";
import FavStar from "./star.png";
import "./OutputItem.css";

const OutputItem = ({ item, fetchFavourites, favourites }) => {
  // set initial state for whether items have been favourited
  const [addFavourite, setAddFavourite] = useState(false);

  //get id from item track ID
  const id = item.trackId;

  // async function to add item to favourites with POST method fetch request
  const addItem = async () => {
    await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        favItem: item,
      }),
    });
    alert("Added to favourites");
    fetchFavourites(); // Run 'fetchFavourites'
  };

  // function to handle adding item to favourites
  const handleAdd = (e) => {
    e.preventDefault();
    //set 'add favourite' state to true
    setAddFavourite(true);
    // run the async function to add item
    addItem();
  };

  // remove item from favourites with DELETE method fetch request
  const removeItem = async () => {
    await fetch(`/api/delete/${id}`, {
      method: "DELETE",
    });
    alert("Removed from favourites");
    fetchFavourites();
  };

  // function to handle removing item from favourites
  const handleRemove = (e) => {
    e.preventDefault();
    // set 'add favourite' state back to false
    setAddFavourite(false);
    // run the async function to remove item
    removeItem();
  };

  // checks if item has already been added
  useEffect(() => {
    // if 'favourites' exists then loop through array to find matching ID
    if (favourites && favourites !== undefined) {
      for (let i = 0; i < favourites.length; i++) {
        // if ID exists in favourites then set add favourite to true
        if (favourites[i].id === id) {
          setAddFavourite(true);
        }
      }
    }
  }, [favourites, id]);

  return (
    <div className="output-item">
      <div className="img">
        {/* if the item has artwork then display the artwork or toggle to display the text */}
        {item.artworkUrl100 ? (
          <img src={item.artworkUrl100} alt="media artwork" />
        ) : (
          <div className="img-text">No image</div>
        )}
      </div>
      <div className="item-info">
        {/* if there is no 'trackName' then use 'collectionName' or toggle to else use 'trackName' */}
        {!item.trackName ? (
          <div className="collection-name">Name: {item.collectionName}</div>
        ) : (
          <div className="track-name">Name: {item.trackName}</div>
        )}
        <div className="artist-name">Artist: {item.artistName}</div>
        {/* if the item has 'kind' then display 'kind'or toggle to display 'wrapperType' */}
        {item.kind ? (
          <div className="kind">Format: {item.kind}</div>
        ) : (
          <div className="wrapper-type">Format: {item.wrapperType}</div>
        )}
      </div>

      <div className="btns">
        {addFavourite ? (
          // toggle between addFavourite states to show button to either add or remove item from favourites
          <button onClick={handleRemove}>
            <img className="logo" src={FavStar} alt="Remove Favourite" />
          </button>
        ) : (
          <button onClick={handleAdd}>
            <img className="logo" src={Star} alt="Favourite" />
          </button>
        )}
      </div>
    </div>
  );
};

export default OutputItem;
