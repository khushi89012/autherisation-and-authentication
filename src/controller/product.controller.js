const express = require("express")

const router = express.Router()
const authentication = require("../middleware/authentication")
const authorisation = require("../middleware/autherisation")
const Product = require('../model/product.model')


router.post("",authentication,async(req,res)=>{
    try {
         const product = await Product.create(req.body)

    return res.status(201).send({product:product})
    } catch (e) {

        return res.status(400).send(e.message)
        
    }

   

})

router.patch("/:id",authentication,authorisation(["admin","seller"]),async(req,res)=>{
    try {
         const product = await Product.findByIdAndUpdate(req.params.id, req.body,{new:true})

    return res.status(200).send({product:product})
    } catch (e) {

        return res.status(400).send(e.message)
        
    }

   

})


module.exports = router