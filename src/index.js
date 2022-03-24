const express = require("express")
const {register,login} = require("./controller/auth.controller")
const userController = require("./controller/user.controller")
const productController = require("./controller/product.controller")
const app = express()
const connect = require("./configs/db")
app.use(express.json())

app.use("/users",userController)

app.post("/register",register)
app.post("/login",login)
app.use("/product",productController)

app.listen(9000,async()=>{
    try{
        await connect()


        console.log("Listening on port 9000 alive ")
    }catch(e){
        console.log(e.message)
    }

})