const mongoose = require('mongoose');

const NotesSchema = new Schema({         //Creating mongoose schema
    title:{
        type: String,
        required: true
    },
    discription:{
        type: String,
        required: true,         
    },
    tag:{
        type: String,
        default: "General"
    },
    date:{
        type: Date,
        default: Date.now       // set default date
    },
  });

  module.exports = mongoose.model('notes', NotesSchema)