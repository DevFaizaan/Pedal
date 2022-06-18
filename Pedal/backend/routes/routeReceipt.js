const express = require('express');
const router = express.Router();
const {
  getReceipt,
  setReceipt,
  updateReceipt,
  deleteReceipt,
} = require('../controllers/receiptController');

router.route('/').get(getReceipt).post(setReceipt);
router.route('/:id').delete(deleteReceipt).put(updateReceipt);

module.exports = router;
