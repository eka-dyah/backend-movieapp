const express = require("express");
const { json } = require("body-parser");
const logger = require("morgan");

const app = express();

const HttpError = require("./utils/HttpError");

const popularRoute = require("./routes/popular");
const topRatedRoute = require("./routes/topRated");
const nowPlayingRoute = require("./routes/nowPlaying");
const upcomingRoute = require("./routes/upcoming");
const detailsMovieRoute = require("./routes/detailsMovie");
const similarMoviesRoute = require("./routes/similarMovies");
const recommendationMovieRoute = require("./routes/recommendation");
const reviewsMovie = require("./routes/reviews");
const searchMovie = require("./routes/searchMovie");

app.use(json());
app.use(logger("dev"));

// app.use((req, res, next) => {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Credential", true);
// 	res.setHeader(
// 		"Access-Control-Allow-Headers",
// 		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
// 	);
// 	res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
// });

app.use("/popular", popularRoute);
app.use("/top-rated", topRatedRoute);
app.use("/now-playing", nowPlayingRoute);
app.use("/upcoming", upcomingRoute);
app.use("/details", detailsMovieRoute);
app.use("/similar", similarMoviesRoute);
app.use("/recommendation", recommendationMovieRoute);
app.use("/reviews", reviewsMovie);
app.use("/search", searchMovie);

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
