const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({   //Here we define and instatiate a schema which will be used in a mongo collection.
  googleID: String                //Note that the schema is declared with a property name and a property type
});

mongoose.model('users',userSchema); //Here we use mongoose to create a collection in our database called users, with the schema we defined
