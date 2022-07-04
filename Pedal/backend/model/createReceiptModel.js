const mongoose = require('mongoose');

const createReceiptScheme = mongoose.Schema(  //blueprint for creating objects similar to classes in OOP
  {
    text: {
      type: String,
      required: true,
      unique: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('createSchema', createReceiptScheme); //converts the schema into a model
