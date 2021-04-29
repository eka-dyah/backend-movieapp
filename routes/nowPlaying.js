const { default: axios } = require("axios");
const express = require("express");
const fetchData = require("../utils/fetchData");
const HttpError = require("../utils/HttpError");
const redirect = require("../utils/redirect");

const route = express.Router();

route.route("/").get(redirect(1))
route.route("/:page").get(fetchData('now_playing'))

module.exports = route;
