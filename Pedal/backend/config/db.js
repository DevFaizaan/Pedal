//const { config } = require('dotenv');
const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, { //personal api key   //code snippet from documentation
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
