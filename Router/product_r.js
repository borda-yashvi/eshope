const { Product } = require("../Modale/product_m");
const express = require("express");
const { Category } = require("../Modale/category_m");
const router = express.Router()

router.get("/:id",async(req, res) =>{    
    const product = await Product.findById(req.params.id)
           
            if(!product) 
            {      res 
                .status(500)
                .json({message:"the category wuth the given ID was not found"});      
            }  
        res.status(400).send(product);    
     });

router.get(`/`,async (req, res) =>{    
        const productList = await Product.find()
               
                if(!productList) 
                {       
                    res.status(500).json({success:false});      
                }  
            res.status(400).send(productList);    
});

router.post("/",async(req,res)=>
{
    let category=await Category.findById(req.body.category)
    if(!category) return res.status(400).send("can not connnect category")
    
    let product = new Product({
            name:req.body.name,
            description:req.body.description,
            richdescription:req.body.richdescription,
            image:"image",
            images:req.body.images,
            brand:req.body.brand,
            price:req.body.price,
            category:req.body.category,
            countlnstock:req.body.countlnstock,
            rating:req.body.rating,
            isFeatured:req.body.isFeatured,
    })
    const product_insert = await product.save()
    if(!product_insert) return res.status(400).send("can not connnect product")
    res.send(product_insert)    

})

router.put("/:id",async(req, res) =>{    
    const product = await Product.findByIdAndUpdate(req.params.id,
        {
            name:req.body.name,
            image:req.body.icon || product.icon,
            images:req.body.color
        },{new:true}
        )
        if(!product) return res.status(400).send("can not create product")
        res.send(product)
})

router.delete("/:id",async(req, res) =>{    
    Product.findByIdAndRemove(req.params.id)
    .then((product)=>
    {
        if(product)
        {
            return res.status(200).json({success:true,message:"the product is delete"})
        }
        else
        {
            return res.status(404).json({success:true,message:"the product is delete"})
        }
    }) 
    .catch((err)=>
    {
        return res.status(500).json({success:true,error:err})   
    })
})


module.exports=router

// {
//     "name":"bhui",
// "description":"bhui",
// "richdescription":"bhui",
// "image":"bhui",
// "images":"njijij",
// "brand":"ghguyuh",
// "price":788799,
// "category":"63cbc72c9b405acce6b3d40e",
// "countlnstock":8989,
// "rating":98469,
// "isFeatured":true,
// "datecreate":Date.now
// }
