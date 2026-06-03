const express = require("express");
const { fetchingRoles, createRole } = require("../controllers/role.controller");
const authintication = require("../middlewares/authintication");
const authorization = require("../middlewares/authorization");
const roleRouter = express.Router();

roleRouter.get("/",authintication,authorization('Admin'), fetchingRoles);
roleRouter.post("/create", createRole);

module.exports = roleRouter;