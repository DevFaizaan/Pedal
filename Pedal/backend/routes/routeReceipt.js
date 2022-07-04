const express = require('express');  
const router = express.Router();   //common syntax otherwise extra steps needed
const {
  getReceipt,
  setReceipt,
  updateReceipt,
  deleteReceipt,
} = require('../controllers/receiptController'); //gets the functions from the controller

router.route('/').get(getReceipt).post(setReceipt); //need / only cus already specific in server.js //http://localhost:5000/api/routereceipt
router.route('/:id').delete(deleteReceipt).put(updateReceipt);  //e.g. http://localhost:5000/api/routereceipt/UUID

module.exports = router;


