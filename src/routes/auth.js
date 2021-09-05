const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth");

router.post("/sendMail", AuthController.sendMail);
module.exports = router;