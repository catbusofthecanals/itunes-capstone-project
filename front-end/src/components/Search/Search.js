import React from "react";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormSelect,
} from "react-bootstrap";
import "./search.css";

const Search = ({
  handleSubmit,
  term,
  handleTermChange,
  handleMediaChange,
}) => {
  // array containing objects representing each media type and their corresponding value
  const media = [
    { type: "All media", value: "all" },
    { type: "Movie", value: "movie" },
    { type: "Podcast", value: "podcast" },
    { type: "Music", value: "music" },
    { type: "Music Video", value: "musicVideo" },
    { type: "Audiobook", value: "audiobook" },
    { type: "Short Film", value: "shortFilm" },
    { type: "TV show", value: "tvShow" },
    { type: "Software", value: "software" },
    { type: "Ebook", value: "ebook" },
  ];

  return (
    <div className="search-container">
      <Form onSubmit={handleSubmit}>
        <FormGroup className="form-group search-box">
          {/* search box, run handleterm function on change*/}
          <FormControl
            type="text"
            className="search-bar"
            placeholder="Search item..."
            name="term"
            value={term}
            onChange={handleTermChange}
          />
        </FormGroup>
        <FormGroup className="form-group filter">
          {/* dropdown list of media, run handlemedia function on change*/}
          <FormSelect onChange={handleMediaChange}>
            {/* map through media array to create a list of options to select from */}
            {media &&
              media.map((media) => (
                <option key={media.value} value={media.value}>
                  {media.type}
                </option>
              ))}
          </FormSelect>
        </FormGroup>
        <FormGroup className="submit-btn">
          {/* search function will run on click*/}
          <Button onClick={handleSubmit} className="btn btn-info" type="submit">
            Search
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default Search;
