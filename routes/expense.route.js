const express = require("express");
const router = express.Router();
const controller = require("../controllers/expense.controller");

router.get("/", controller.getAllExpense);
router.post("/", controller.addExpense);

module.exports = router;
