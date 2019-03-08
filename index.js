const express = require('express');                                           //import express library (for running the express server and creating route handlers for the site)
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/Users');
require('./services/passport');                                            //import the setup of our passport


mongoose.connect('mongodb+srv://emaily-uocdf.mongodb.net/test',
                  {user: keys.mongoAdminID, pass: keys.mongoAdminPass}
);

app = express();
require('./routes/authRoutes.js')(app);

const PORT = process.env.PORT || 5000;                                        //create variable for PORT to listen on. Use process.env.PORT in Heroku dynamic binding environment
                                                                              //use 5000 on local machine
app.listen(PORT);                                                             //now allow express server to run, listening to HTTP traffic from node for any of the handled routes above


