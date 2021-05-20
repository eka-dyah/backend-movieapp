const { default: axios } = require("axios");
const express = require("express");
const fetchData = require("../utils/fetchData");
const HttpError = require("../utils/HttpError");
const redirect = require("../utils/redirect");

const route = express.Router();

route.route("/:idMovie").get(fetchData(null, 'credits'));

module.exports = route;
