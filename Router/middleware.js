const tokenObj = require("../Token/token")
const middleware = (req,res,next)=>
{
    if(tokenObj.token == req.headers.token)
    {
        next();
    }
    else
    {
        res.json({"msg":"inside middleware fail"})
    }
}

module.exports = middleware