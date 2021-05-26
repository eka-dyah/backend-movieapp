const express = require("express");
const { fetchGenre } = require("../utils/fetchData");

const route = express.Router();

route.route("/").get(fetchGenre());

module.exports = route;