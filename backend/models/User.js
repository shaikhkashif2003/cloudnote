const mongoose = require('mongoose');
const {Schema} = mongoose

const UserSchema = new Schema({         //Creating mongoose schema
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true                // takes the unique value
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now       // set default date
    },
  });

  module.exports = mongoose.model('user', UserSchema)