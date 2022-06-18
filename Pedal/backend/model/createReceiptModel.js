const mongoose = require('mongoose');

const createReceiptScheme = mongoose.Schema(
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

module.exports = mongoose.model('createSchema', createReceiptScheme);
