/** @format */

// These are the Node.js modules used for this Express app.
// They are installed using NPM
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

//db
const mysql = require("mysql");

// This creates the Express app which is configured below.
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/api", require("./api"));
app.use("/user", require("./user"));
app.use("/db", require("./db"));

// Important later!  This exports the app object as a module.
// This comes into play when we deploy the application to
// Cloud Functions.
module.exports = app;
