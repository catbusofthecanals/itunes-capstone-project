import React, { useState } from "react";
import Header from "../Header/Header";
import Search from "../Search/Search";
import Output from "../Output/Output";
import "./home.css";

const Home = ({ fetchFavourites, favourites }) => {
  // set initial states to save search term, media type and search ouput
  const [term, setTerm] = useState("");
  const [media, setMedia] = useState("all");
  const [output, setOutput] = useState({});

  // function to fetch search results
  const fetchOutput = async () => {
    // fetch the API GET request with user input search term an media
    const result = await fetch(`/search?term=${term}&media=${media}`);
    const data = await result.json();
    // set results in output state
    console.log(data);
    setOutput(data.response);
    console.log(output);
  };

  // function to handle the search submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert user if search is empty
    if (term === "") {
      alert("Please enter a serch term");
    } else {
      //run fetch output function
      fetchOutput();
    }
  };

  // function to get search term on change from input and set in term state
  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  // function to get media type on change from input and set in media state
  const handleMediaChange = (e) => {
    setMedia(e.target.value);
  };

  return (
    <div className="home">
      <div className="header-section">
        <Header />
      </div>
      <div className="search-and-output">
        <div className="search-container-section">
          {/* pass props to search container or handle change functions for search term and media type and handle submit */}
          <Search
            handleSubmit={handleSubmit}
            term={term}
            handleTermChange={handleTermChange}
            handleMediaChange={handleMediaChange}
          />
        </div>
        <div className="output-container-section">
          {/* pass props to output section of output state containing search results and favourites */}
          <Output
            output={output}
            fetchFavourites={fetchFavourites}
            favourites={favourites}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
