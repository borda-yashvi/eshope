const express = require("express");
const {Category} = require("../Modale/category_m");
const router = express.Router()

router.get("/:id",async(req, res) =>{    
    const category = await Category.findById(req.params.id)
           
            if(!category) 
            {      res 
                .status(500)
                .json({message:"the category wuth the given ID was not found"});      
            }  
        res.status(400).send(category);    
     });

router.get(`/`,async (req, res) =>{    
        const categoryList = await Category.find()
               
                if(!categoryList) 
                {       
                    res.status(500).json({success:false});      
                }  
            res.status(400).send(categoryList);    
});

router.post("/",async (req,res)=>
{
    let category = new Category({
        id:req.body.id,
        name:req.body.name,
        color:req.body.color,
        icon:req.body.icon,
        image:req.body.image,
    })
    
    category = await category.save()
    if(!category) return res.status(400).send("can not connnect category")
    res.send(category)
})

router.put("/:id",async(req, res) =>{    
    const category = await Category.findByIdAndUpdate(req.params.id,
        {
            name:req.body.name,
            icon:req.body.icon || category.icon,
            color:req.body.color
        },{new:true}
        )
        if(!category) return res.status(400).send("can not create category")
        res.send(category)
})

router.delete("/:id",async(req, res) =>{    
    Category.findByIdAndRemove(req.params.id)
    .then((category)=>
    {
        if(category)
        {
            return res.status(200).json({success:true,message:"the category is delete"})
        }
        else
        {
            return res.status(404).json({success:true,message:"the category is delete"})
        }
    }) 
    .catch((err)=>
    {
        return res.status(500).json({success:true,error:err})   
    })
})

module.exports=router

// {
//     id:"id",
// name:"category",
// color:"color",
// icon:"no",
// image:"IMG"
// }
