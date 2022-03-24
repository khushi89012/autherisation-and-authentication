const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema({
    email : {type:String,required:true,unique:true},
    password : {type:String,required:true},
    role: [{type:String}]
},{
    timestamps:true,
    versionKey:false
})

userSchema.pre("save" , function(next){
    let hash =  bcrypt.hashSync(this.password, 8)
    this.password = hash

    return next()
})
//  we have to decrypt the password

userSchema.methods.checkpassword = function(password){

 return  bcrypt.compareSync(password, this.password)


}









module.exports = mongoose.model("opps", userSchema )
