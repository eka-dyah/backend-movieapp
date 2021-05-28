const express = require("express");
const { fetchData } = require("../utils/fetchData");
const redirect = require("../utils/redirect");

const route = express.Router();

// category params => top_rated, popular, upcoming, now_playing
// top_rated to get top rated movies
// popular to get popular movies
// upcoming to get upcoming movies
// now_playing to get movies that currently playing
route.route("/:category").get(redirect(1));
route.route("/:category/:page").get(fetchData());

module.exports = route;
