const ExpenseModel = require("../models/expense.model");

const addExpense = async (req, res, next) => {
	try {
		const newExpense = await new ExpenseModel(req.body);
		await newExpense.save();
		res.status(200).send(`Added ${newExpense.item}`);
	} catch (err) {
		res.status(404).send(err);
	}
};

const getAllExpense = async (req, res, next) => {
	try {
		const allExpenses = await ExpenseModel.find();
		res.json(allExpenses);
	} catch (err) {
		res.status(404).send(err);
	}
};

module.exports = { addExpense, getAllExpense };
