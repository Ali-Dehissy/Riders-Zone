const mongoose = require('mongoose');

const userDetailsSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  password: String,
});

mongoose.model("UserInfo", userDetailsSchema);

