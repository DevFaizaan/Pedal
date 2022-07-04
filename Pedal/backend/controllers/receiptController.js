const asyncHandler = require('express-async-handler');  //have functions in controller

const receiptSchema = require('../model/createReceiptModel');
// @desc  Get receipt
// @route  GET /api/createReceipt
// @access Private after authentication
const getReceipt = asyncHandler(async (req, res) => {  //would need to use try catch if not using asyncHandler 
  const schema = await receiptSchema.find();   //async await to used for external request and u dont know how long it will take to respond
  res.status(200).json(schema); //univeral standard for communicating with REST apis
});

// @desc   Set receipt
// @route  POST /api/createReceipt
// @access Provate
const setReceipt = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400).json({ message: 'Add a text field' });
    //error handling
  }
  const schema = await receiptSchema.create({
    text: req.body.text,
    cost: req.body.cost,
    location: req.body.location,
  });
  res.status(200).json(schema);
});

// @desc  Update receipt
// @route  UPDATE /api/createReceipt/:id
// @access Provate
const updateReceipt = asyncHandler(async (req, res) => {
  const schema = await receiptSchema.findById(req.params.id);

  if (!schema) {
    res.status(400).json({ message: `Receipt not found` });
  }

  const updateSchema = await receiptSchema.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateSchema);
});
// @desc  Delete receipt
// @route  DELETE /api/createReceipt/:id
// @access Provate
const deleteReceipt = asyncHandler(async (req, res) => {
  const schema = await receiptSchema.findById(req.params.id);
  if (!schema) {
    res.status(400).json({ message: `Receipt not found` });
  }

  await schema.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getReceipt,
  setReceipt,
  updateReceipt,
  deleteReceipt,
};
