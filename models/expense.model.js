const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
	date: {
		type: Date,
		default: Date.now,
	},
	item: {
		type: String,
		required: true,
	},
	category: {
		type: Array,
		required: true,
	},
	price: {
		type: Number,
		required: true,
		min: [0, "Item price cannot be less than 0"],
	},
});

const ExpenseModel = mongoose.model("expense", expenseSchema);

module.exports = ExpenseModel;
