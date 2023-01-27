const express = require("express")
const app=express()
const mongoose = require("mongoose")
const morgan = require("morgan")
const cors = require("cors")
require("dotenv/config")
const authJwt = require("./help/jwt")

app.use(cors())
app.options("*",cors())

mongoose.set("strictQuery",true)
app.use(express.json())
app.use(morgan("tiny"))

const category = require("./Router/category_r")
app.use("/category",category)

const  Product = require("./Router/product_r")
app.use("/product",Product)

const  user = require("./Router/user_r")
app.use("/user",user)

const  order = require("./Router/order_r")
app.use("/order",order)

const  orderitem = require("./Router/orderitem_r")
app.use("/orderitem",orderitem)

app.use(authJwt)

mongoose.connect(process.env.COLLECTION_STRING,
{
    useNewUrlparser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log("connected"))
.catch((err)=>
{
    console.log(err)
})

const PORT =process.env.PORT||3003
app.listen(PORT,()=>
{
    console.log(`server listening port ${PORT}`)
})

