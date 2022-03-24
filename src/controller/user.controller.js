const express = require("express")
const router = express.Router()
const User = require("../model/user.model")

router.get("",async(req,res)=>{
    try {
        
        const user = await User.find().lean().exec()

        return res.status(200).send({user : user})
    } catch (e) {
        return res.status(400).send(e.message)
    }
  
})

router.post("",async(req,res)=>{
    try {
        
        const user = await User.create()

        return res.status(201).send({user : user})
    } catch (e) {
        return res.status(400).send(e.message)
    }
  
})







module.exports = router