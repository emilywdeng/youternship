var Mongoose = require('mongoose');



var ProfileSchema = new Mongoose.Schema({
  "name": String,
  "age": Number,
  "gender": String,
  "pic": Image,
  "connections": String
  "major": String,
  "pic": Image,
  "mentor": Boolean
});

var GoalSchema = new Mongoose.Schema({
  "goal": String,
  "deadline": Date,
  "image": String,
  "goalStatus": String
})

exports.Profile = Mongoose.model ('Profile', ProfileSchema);
