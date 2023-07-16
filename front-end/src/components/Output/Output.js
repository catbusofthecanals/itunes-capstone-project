import React from "react";
import OutputItem from "../OutputItem/OutputItem";
import "./output.css";

const Output = ({ output, fetchFavourites, favourites }) => {
  return (
    <div className="output-container">
      {/* Display results when not undefined */}
      {output.results !== undefined ? (
        <>
          {/* display results if there are more than 0 */}
          {output.resultCount !== 0 ? (
            <>
              <h4>Search Results:</h4>
              <div className="output-items">
                {/* map through results and display as output item components */}
                {output &&
                  output.results.map((item) => (
                    // pass props to output items
                    <OutputItem
                      item={item}
                      key={item.trackId}
                      fetchFavourites={fetchFavourites}
                      favourites={favourites}
                    />
                  ))}
              </div>
            </>
          ) : (
            <>
              <div className="error-text">
                Sorry, no results were found for your search.
              </div>
            </>
          )}
        </>
      ) : (
        <>
          {/* else display inital message */}
          <div className="welcome-text">
            Enter an item you would like to search in the iTunes catalogue
          </div>
        </>
      )}
    </div>
  );
};

export default Output;
