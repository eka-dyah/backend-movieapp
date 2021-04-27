const { default: axios } = require("axios");
const express = require("express");

const route = express.Router();

route.route("/:idMovie").get(async (req, res, next) => {
	let result;
	try {
		result = await axios.get(
			`https://api.themoviedb.org/3/movie/${req.params.idMovie}?api_key=${process.env.MOVIEDB_API}&language=en-US`
		);
	} catch (error) {
        return next(new HttpError("Something went wrong", 500));
    }

    res.json(result.data);
});


module.exports = route;