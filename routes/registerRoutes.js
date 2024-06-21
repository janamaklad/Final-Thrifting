const signupControllers = require("../controllers/signupControllers");
const express = require("express");
const app=express();
const bodyParser = require("body-parser");

app.post("/signup", signupControllers.registrationProcess);

module.exports=app;