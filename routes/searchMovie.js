const { default: axios } = require("axios");
const express = require("express");
const HttpError = require("../utils/HttpError");
const redirect = require("../utils/redirect");
const route = express.Router();

route.route("/query=:query").get(redirect(1));
route.route("/query=:query/:page").get(async (req, res, next) => {
	const { query, page } = req.params;
	console.log("query is", query);
	let result;
	try {
		// https://api.themoviedb.org/3/search/movie?api_key=5c9b223f1e4758a4d0b838f260b8e8d5&language=en-US&query=metal&page=1&include_adult=false
		result = await axios.get(
			`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIEDB_API}&language=en-US&page=${page}&include_adult=false&query=${query}`
		);
	} catch (error) {
		return next(new HttpError("An error has occured", 500));
	}

	res.json(result.data);
});

module.exports = route;
