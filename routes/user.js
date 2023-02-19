const { Router } = require("express");
const UserController = require("../controllers/UserController");
const user = new Router();
const Auth = require("../middlewares/auth");

user.post("/auth", UserController.auth);

user.get("/find/:id", Auth.verifyToken, UserController.getById);

module.exports = user;