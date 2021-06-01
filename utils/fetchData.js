const { default: axios } = require("axios");
const HttpError = require("./HttpError");

const fetchData = () => {
	return async (req, res, next) => {
		const page = req.params.page;
		const idMovie = req.params.idMovie;
		const mCategory = req.params.movieCategory
			? `/${req.params.movieCategory}`
			: "";
		const category = req.params.category ? `${req.params.category}` : null;

		const pageUri = page ? `&page=${page}` : "";

		let result;
		try {
			result = await axios.get(
				`https://api.themoviedb.org/3/movie/${
					category || idMovie
				}${mCategory}?api_key=${
					process.env.MOVIEDB_API
				}&language=en-US${pageUri}`
			);
		} catch (error) {
			return next(new HttpError("Something went wrong", 500));
		}

		res.json(result.data);
	};
};

const fetchSearchResult = () => {
	return async (req, res, next) => {
		const { query, page } = req.params;

		let result;
		try {
			result = await axios.get(
				`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIEDB_API}&language=en-US&page=${page}&include_adult=false&query=${query}`
			);
		} catch (error) {
			return next(new HttpError("An error has occured", 500));
		}

		res.json(result.data);
	};
};

const fetchGenre = () => {
	return async (req, res, next) => {

		let result;
		try {
			result = await axios.get(
				`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.MOVIEDB_API}&language=en-US`
			);
		} catch (error) {
			return next(new HttpError("An error has occured", 500));
		}

		res.json(result.data);
	};
};

const fetchPerson = () => {
	return async (req, res, next) => {
		const idPerson = req.params.idPerson;
		const category = req.params.category ? `/${req.params.category}` : "";

		let result;
		try {
			result = await axios.get(
				`https://api.themoviedb.org/3/person/${idPerson}${category}?api_key=${process.env.MOVIEDB_API}&language=en-US`
			);
		} catch (error) {
			return next(new HttpError("An error has occured", 500));
		}

		res.json(result.data);
	};
};

module.exports = {
	fetchData: fetchData,
	fetchGenre: fetchGenre,
	fetchSearchResult: fetchSearchResult,
	fetchPerson: fetchPerson
};
