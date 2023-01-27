const { Orderitem } = require("../Modale/orderitem_m");
const express = require("express");
const { Product } = require("../Modale/product_m");
const router = express.Router()

router.get(`/`,async (req, res) =>{    
    const orderitemList = await Orderitem.find()
           
            if(!orderitemList) 
            {       
                res.status(500).json({success:false});      
            }  
        res.status(400).send(orderitemList);    
});

router.post(`/`,async (req,res)=>{
    let product=await Product.findById(req.body.product)
    if(!product) return res.status(400).send("can not connnect product")
    
    let orderitem = new Orderitem({
        quantity:req.body.quantity,
        product:req.body.product, 
    });
    const orderitem_insert = await orderitem.save()
    if(!orderitem_insert) return res.status(400).send("can not connnect orderitem")
    res.send(orderitem_insert)    
});

router.put("/:id",async(req, res) =>{    
    const orderitem = await Orderitem.findByIdAndUpdate(req.params.id,
        {
            quantity:req.body.quantity,
            product:req.body.product, 
        },{new:true}
        )
        if(!orderitem) return res.status(400).send("can not create orderitem")
        res.send(orderitem)
})

router.delete("/:id",async(req, res) =>{    
    Order.findByIdAndRemove(req.params.id)
    .then((orderitem)=>
    {
        if(orderitem)
        {
            return res.status(200).json({success:true,message:"the orderitem is delete"})
        }
        else
        {
            return res.status(404).json({success:true,message:"the orderitem is delete"})
        }
    }) 
    .catch((err)=>
    {
        return res.status(500).json({success:true,error:err})   
    })
})


module.exports=router

// product:"", 
// quantity:"order item "
