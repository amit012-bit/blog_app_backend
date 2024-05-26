//import mongoose
const mongoose = require("mongoose");

//route handler
const likeSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post",//reference to post model
    },
    user:{
        type:String,
        required:true,
    },
});

//export
module.exports = mongoose.model("Like",likeSchema);