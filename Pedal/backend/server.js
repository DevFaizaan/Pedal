const express = require('express'); //backend framework
const dotenv = require('dotenv'); //allows environement variables
const port = process.env.PORT || 5000;
const receipts = require('./routes/routeReceipt');
const connectDB = require('./config/db');
dotenv.config({ path: './config/config.env' });

connectDB();
const app = express();
app.use(express.json()); //middleware
app.use(express.urlencoded({ extended: false })); //middleware

app.use('/api/routeReceipt', receipts);
app.listen(port, () => console.log(`Server started on port ${port}`));

app.get('/api/receipts', (req, res) => {
  res.status(200).json({ message: ' get receipts' }); //testing
});

// app.listen(
//   PORT,
//   console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`)
// );
