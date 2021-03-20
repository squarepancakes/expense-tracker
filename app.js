const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv/config");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const expenseRouter = require("./routes/expense.route");

app.get("/", (req, res) => res.send("starts"));
app.use("/api/expense", expenseRouter);

mongoose.connect(
	process.env.DB_COLLECTION,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => console.log("connected to db")
);
app.listen(3000);
