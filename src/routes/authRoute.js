const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");
router.get("/", authController.getIndex);
router.get("/auth/login", authController.getLogin);
router.get("/auth/register", authController.getRegister);
module.exports = router;
