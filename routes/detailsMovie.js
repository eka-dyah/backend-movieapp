const { default: axios } = require("axios");
const express = require("express");
const fetchData = require("../utils/fetchData");
const HttpError = require("../utils/HttpError");

const route = express.Router();

route.route("/:idMovie").get(fetchData());


module.exports = route;