const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv/config");
app.use(express.json());

const expenseRouter = require("./routes/expense.route");

app.get("/", (req, res) => res.send("starts"));
app.use("/expense", expenseRouter);

mongoose.connect(
	process.env.DB_COLLECTION,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => console.log("connected to db")
);
app.listen(3000);
