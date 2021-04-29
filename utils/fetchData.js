const { default: axios } = require("axios");
const HttpError = require("./HttpError");

const fetchData = (category, movieCategory = null) => {
	return async (req, res, next) => {
		const page = req.params.page;
		const idMovie = req.params.idMovie;
		const mCategory = movieCategory ? `/${movieCategory}` : "";


		const pageUri = page ? `&page=${page}` : "";

		let result;
		try {
			result = await axios.get(
				`https://api.themoviedb.org/3/movie/${category || idMovie}${mCategory}?api_key=${process.env.MOVIEDB_API}&language=en-US${pageUri}?`
			);
		} catch (error) {
			return next(new HttpError("Something went wrong", 500));
		}
	
		res.json(result.data);
	}
} 

module.exports = fetchData;
