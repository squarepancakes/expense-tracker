const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv/config");

app.get("/", (req, res) => res.send("starts"));

mongoose.connect(
	process.env.DB_COLLECTION,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => console.log("connected to db")
);
app.listen(3000);
