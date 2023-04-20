const express = require("express")
const tokenObj = require("../Token/token")
module1 = express.Router()

module1.get("/",(req,res)=>
{
    const headToken = req.headers.token
    if(headToken == tokenObj.token)
    {
        res.json({"msg":"inside module1 success","token":tokenObj.token})
    }
    else
    {
        res.json({"msg":"inside module1 fail"})
    }
})

module.exports=module1

// const express = require("express")
// const middleware = require("../middleware/middleware")
// module1 = express.Router()

// module1.get("/",[middleware],(req,res)=>
// {
//         res.json({msg:"inside module1 success in middleware"})
// })

// module.exports=module1