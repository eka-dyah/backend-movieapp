const { default: axios } = require("axios");
const express = require("express");
const HttpError = require("../utils/HttpError");

const route = express.Router();

route.route("/").get(async (req, res, next) => {
	res.redirect("/now-playing/1");
});
route.route("/:page").get(async (req, res, next) => {
	const page = req.params.page;
    
	let result;
	try {
		result = await axios.get(
			`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.MOVIEDB_API}&language=en-US&page=${page}?`
		);
	} catch (error) {
		return next(new HttpError("Something went wrong", 500));
	}

	res.json(result.data);
});

module.exports = route;
