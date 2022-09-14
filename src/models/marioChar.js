const mongoose = require('mongoose');

//  Your code goes here

mongoose.connect("mongodb://localhost/mario", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const Schema = mongoose.Schema;

const marioSchema = new Schema({
  name: { type: String, required: true },
  weight: { type: Number, required: true },
  
});

const marioModel = mongoose.model("MarioModel", marioSchema);


module.exports = marioModel;