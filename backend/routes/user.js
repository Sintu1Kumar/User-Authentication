const userController = require("../controllers/user");
const express = require("express");
const router = express.Router();

// signup routes
router.post("/sign-up", userController.createUser);

// login routes
router.post("/login", userController.loginUser);

module.exports = router;
