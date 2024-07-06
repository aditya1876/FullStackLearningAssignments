const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

//SECRETS
const jwtPassword = "12345";

//incomplete
