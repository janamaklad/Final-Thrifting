const signupControllers = require("../controllers/signupControllers");
const express = require("express");
const bodyParser = require("body-parser");
const router=express.Router();
router.use(bodyParser.json());
router.post("/signupControllers", signupControllers.signup);

module.exports=router;