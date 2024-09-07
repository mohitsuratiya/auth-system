const mongoose = require("mongoose");
const {Schema} = mongoose

const NotesSchema = new Schema({
       titel:{
        type: String,
        require: true
       },

    descripton:{
        type: String,
        require: true,
       },

      tag:{
        type: String,
        defualt: "General"
       },

       date:{
        type: Date,
        default: Date.now
       },

}); 

module.exports = mongoose.model("notes", NotesSchema)