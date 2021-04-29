const { default: axios } = require("axios");
const express = require("express");
const fetchData = require("../utils/fetchData");
const HttpError = require("../utils/HttpError");
const redirect = require("../utils/redirect");

const route = express.Router();

route.route("/:idMovie").get(redirect(1));
route.route("/:idMovie/:page").get(fetchData(null, 'reviews'));

module.exports = route;
