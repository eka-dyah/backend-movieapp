const express = require("express");
const { json } = require("body-parser");
const logger = require("morgan");

const app = express();

const HttpError = require("./utils/HttpError");

const searchMovie = require("./routes/searchMovie");
const movieRoute = require("./routes/movieById");
const moviesRoute = require("./routes/movies");
const genreRoute = require("./routes/genre");
const personRoute = require("./routes/person.js");

app.use(json());
app.use(logger("dev"));

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", process.env.SITE_ALLOW);
	res.header("Access-Control-Allow-Credential", true);
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
	next()
});

app.use("/search", searchMovie);
app.use("/movies", moviesRoute);
app.use("/movie", movieRoute);
app.use("/genre", genreRoute);
app.use("/person", personRoute);

app.use((req, res, next) => {
	const error = new HttpError("Something went wrong", 500);
	throw error;
});

app.use((error, req, res, next) => {
	res.status(error.code || 500).json({
		error: error.message || "An error has occured.",
		code: error.code || 500,
	});
});

app.listen(process.env.PORT || 5500);
