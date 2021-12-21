const express = require("express");
const router = express.Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
} = require("../controllers/transactions");

const { requiresSignin } = require( "../middlewares") 

router.get("/transactions",requiresSignin,getTransactions)
router.post("/transactions",requiresSignin,addTransaction)
router.delete("/transactions/:_id",requiresSignin,deleteTransaction)

module.exports = router;
