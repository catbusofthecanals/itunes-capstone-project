const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const helmet = require("helmet");
// need to install fetch to avoid fetch error, looked up error and found solution here: https://stackoverflow.com/questions/48433783/referenceerror-fetch-is-not-defined
const fetch = require("node-fetch");

/* install middleware, followed tutorial in setting up server available here: https://www.techomoro.com/how-to-create-a-react-frontend-express-backend-and-connect-them-together/ */
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
// secure app with helmet
app.use(helmet());

// set up route to store front end requests
const route = require("./routes/index");
// use /api to handle handle front end requests
app.use("/api", route);

// search iTunes API using GET request
app.get(`/search`, (req, res) => {
  // get search parameters from user input on front end
  const term = req.query.term;
  const media = req.query.media;

  // fetch request to iTunes API using the term and media type input by user
  fetch(`https://itunes.apple.com/search?term=${term}&media=${media}&limit=20`)
    .then((result) => result.json())
    .then((response) => {
      // if search was successful send response
      res.send({ response });
    })
    .catch((error) => {
      // otherwise if error send error message, have to send as JSON message rather than string to avoid error
      res.send({ message: "Error" });
    });
});

// server listening on port 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
