const express = require("express");
const { addCity } = require("../controllers/city.controller");
const cityRouter = express.Router();

cityRouter.post("/create", addCity);

module.exports = cityRouter
