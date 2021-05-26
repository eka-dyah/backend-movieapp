const express = require("express");
const { fetchData } = require("../utils/fetchData");
const redirect = require("../utils/redirect");

const route = express.Router();

route.route("/:idMovie").get(fetchData());
// movieCategory params => credits, similar, recommendations, reviews
// credits, to get people that involve in the movie
// similar, to get list of movies that similar to the movie by id
// recommendations, to get list of recommendation movies based on movie by id
// reviews, to get reviews of movie by id
route.route("/:idMovie/:movieCategory").get(redirect(1));
route.route("/:idMovie/:movieCategory/:page").get(fetchData());

module.exports = route;
