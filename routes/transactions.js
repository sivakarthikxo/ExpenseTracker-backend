const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Transaction = require('../models/Transaction');

// @desc Get all transactions
router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find(); // Ensure _id is included
    return res.status(200).json({
      success: true,
      data: transactions,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

// @desc Add a transaction
router.post('/', async (req, res) => {
  try {
    const { text, amount } = req.body;
    const transaction = await Transaction.create(req.body);
    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: 'Invalid Data',
    });
  }
});

// @desc Delete a transaction
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the transaction
    const transaction = await Transaction.findByIdAndDelete(id);
    if (!transaction) {
      return res.status(404).json({ success: false, error: "Transaction not found" });
    }

    console.log("Successfully deleted transaction:", id);
    res.status(200).json({ success: true });
    
  } catch (error) {
    console.error("Error during transaction deletion:", error.message);
    res.status(500).json({ success: false, error: "Server Error" });
  }
});

module.exports = router;
