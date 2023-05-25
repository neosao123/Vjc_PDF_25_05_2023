const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Sample = new Schema({
    imagepath:String
});

module.exports = mongoose.model("sample", Sample);


 