import "./App.css";
import React, { useState } from "react";
import Home from "../src/components/Home/Home";
import Help from "../src/components/Help/Help";
import Favourites from "../src/components/Favourites/Favourites";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // set initial state to store favourite items
  const [favourites, setFavourites] = useState();

  // function to fetch the list of favourites
  const fetchFavourites = async () => {
    const result = await fetch("/api");
    const data = await result.json();
    // set the results in favourites state
    setFavourites(data.favourites);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home fetchFavourites={fetchFavourites} favourites={favourites} />
          }
        />
        <Route
          path="/favourites"
          exact
          element={
            <Favourites
              fetchFavourites={fetchFavourites}
              favourites={favourites}
            />
          }
        />
        <Route path="/help" exact element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
