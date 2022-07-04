const express = require('express'); //backend framework
const dotenv = require('dotenv'); //allows environement variables (give access to config.env) - variables which value is set outside the program //store port api keys in env file. 
const port = process.env.PORT || 5000;  //runs on port
const receipts = require('./routes/routeReceipt');  //route from routes file
const connectDB = require('./config/db'); 
dotenv.config({ path: './config/config.env' }); 

connectDB(); //starts up connection
const app = express(); //creates express application
app.use(express.json()); //middleware Returns middleware that only parses json  //server receives request...middle ware perorm action and pass onto route or perform action
app.use(express.urlencoded({ extended: false })); //middleware Returns middleware that only parses urlencoded bodies

app.use('/api/routeReceipt', receipts); //decalre route here
app.listen(port, () => console.log(`Server started on port ${port}`)); //listens for connections on port //takes in port number and logs it so we can see if its working

app.get('/api/receipts', (req, res) => {
  res.status(200).json({ message: ' get receipts' }); //testing in postman, gets parsed into json. usually you return json
});
//HTTP Response Status Code 

//server broken into multiple parts, routes,controllers and model. Objective of restAPI is to interactr with the models. TO do that, client will need hit certain routes
//those routes will use the controller and then perform the action required. Mongoose to build the schemas. MongoDB as the database...easy to use and new challenge.
//route>controller>model
// app.listen(
//   PORT,
//   console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`)
// );
