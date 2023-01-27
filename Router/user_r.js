const express = require("express");
const  { User }  = require("../Modale/user_m");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const accessToken = jwt.sign(email, JWT_AUTH_TOKEN, { expiresIn: '30s' });
// const refreshToken = jwt.sign(phone, JWT_REFRESH_TOKEN, { expiresIn: '1y' });
const router = express.Router()

router.get("/:id",async(req, res) =>{    
    const user = await User.findById(req.params.id)
           
            if(!user) 
            {      res 
                .status(500)
                .json({message:"the user wuth the given ID was not found"});      
            }  
        res.status(400).send(user);    
     });

router.get(`/`,async (req, res) =>{    
        const userList = await User.find();
               
                if(!userList) 
                {       
                    res.status(500).json({success:false});      
                }  
            res.status(400).send(userList);    
});

router.put("/:id",async(req, res) =>{    
    const user = await User.findByIdAndUpdate(req.params.id,
        {
            name:req.body.name,
            id:req.body.id || product.id,
            email:req.body.email
        },{new:true}
        )
        if(!user) return res.status(400).send("can not create user")
        res.send(user)
})

router.delete("/:id",async(req, res) =>{    
    User.findByIdAndRemove(req.params.id)
    .then((user)=>
    {
        if(user)
        {
            return res.status(200).json({success:true,message:"the user is delete"})
        }
        else
        {
            return res.status(404).json({success:true,message:"the user is delete"})
        }
    }) 
    .catch((err)=>
    {
        return res.status(500).json({success:true,error:err})   
    })
})



router.post("/",async(req,res)=>
{
    let user = new User({
        name:req.body.name,
        email:req.body.email,
        passwordHash:bcrypt.hashSync(req.body.password, 10),
        phone:req.body.phone,
        isAdmin:req.body.isAdmin,
        street:req.body.street,
        apartment:req.body.apartment,
        city:req.body.city,
        zip:req.body.zip,
        country:req.body.country,
    })
    const user_insert = await user.save()
    if(!user_insert) return res.status(400).send("can not connnect user")
    res.send(user_insert)    

})
// "passwordhash":"yashvi"}
router.post("/login",async (req,res)=>
{
    const users = await User.findOne({email:req.body.email})
    const secret =process.env.secret ;
    if(!users)
    {
        return res.status(400).send("user not found")
    }
    if(users&&bcrypt.compareSync(req.body.password,users.passwordHash))
    {
        const token=jwt.sign(
            {
                "name":users.name,
                "email":users.email,
            },
            secret,
            {
                expiresIn:"id"}
        )
        res.status(200).send({user:users.email,token:token})
    }
    else
    {
        res.status(400).send("password is wrong")   
    }
})

module.exports=router

// {
//     "name":"yashasvi",
//         "email":"yashvi@",
//         "passwordHash":"yashvi",
//         "phone":874594869,
//         "isAdmin":true,
//         "street":"vbtgrg",
//         "apartment":"nhrujnv",
//         "city":"nhgtjgn ",
//         "zip":"gtugjvn",
//         "country":"bgythn"
// }
