import React from "react";
import Bin from "./trash-can.png";
import "./Item.css";

const Item = ({ item, fetchFavourites }) => {
  //get id from item track ID
  const id = item.favItem.trackId;

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
    // run the async function to remove item
    removeItem();
  };

  return (
    <div className="fav-item">
      <div className="img">
        {/* if the item has artwork then display the artwork or toggle to display the text */}
        {item.favItem.artworkUrl100 ? (
          <img src={item.favItem.artworkUrl100} alt="media artwork" />
        ) : (
          <div className="img-text">No image</div>
        )}
      </div>
      <div className="item-info">
        {/* if there is no 'trackName' then use 'collectionName' or toggle to use 'trackName' */}
        {!item.favItem.trackName ? (
          <div className="collection-name">
            Name:{item.favItem.collectionName}
          </div>
        ) : (
          <div className="track-name">Name:{item.favItem.trackName}</div>
        )}
        <div className="artist-name">Artist: {item.favItem.artistName}</div>
        {/* if the item has 'kind' then display 'kind' or toggle to use display 'wrapperType' */}
        {item.favItem.kind ? (
          <div className="kind">Format: {item.favItem.kind}</div>
        ) : (
          <div className="wrapper-type">Format: {item.favItem.wrapperType}</div>
        )}
      </div>
      <div className="btns">
        <div className="remove-btn">
          {/* on click function to remove from favourites */}
          <button onClick={handleRemove}>
            <img className="logo" src={Bin} alt="Trash Can" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
