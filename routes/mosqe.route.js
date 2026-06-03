const express = require("express");
const { addMosqe } = require("../controllers/mosqe.controller");
const mosqeRouter = express.Router();

mosqeRouter.post("/create", addMosqe);

module.exports = mosqeRouter;