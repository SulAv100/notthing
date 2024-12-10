const express = require("express");

const router = express.Router();

const Controllers = require("../Controllers/controller");

router.post("/login", Controllers.postLogin);
router.post("/signup", Controllers.postSignup);
router.get("/getVerify", Controllers.getVerify);

module.exports = router;
