const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title:{type:String,required:true},
    price:{type:Number,required:true},
    // user_Id : {type : mongoose.Schema.Types.ObjectId, ref:"oops", required : true}
})

module.exports = mongoose.model("product",productSchema)