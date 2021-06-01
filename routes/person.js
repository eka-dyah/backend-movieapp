const express = require("express");
const { fetchPerson } = require("../utils/fetchData");

const route = express.Router();

//category => movie_credits to get involvement of the person in the movie

route.route("/:idPerson").get(fetchPerson());
route.route("/:idPerson/:category").get(fetchPerson());

module.exports = route;