const express = require("express");
const { fetchSearchResult } = require("../utils/fetchData");
const redirect = require("../utils/redirect");
const route = express.Router();

route.route("/query=:query").get(redirect(1));
route.route("/query=:query/:page").get(fetchSearchResult());

module.exports = route;
