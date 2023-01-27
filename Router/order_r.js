const  { Orders }  = require("../Modale/order_m");
const express = require("express");
const  { Orderitem }  = require("../Modale/orderitem_m");
const  { Product }  = require("../Modale/product_m");
const router = express.Router()

router.get(`/`,async (req, res) =>{    
  const orderList = await Orders.find()
           .populate("user","name")
           .sort({dateOrdered:-1})
          if(!orderList) 
          {       
              res.status(500).json({success:false});      
          }  
      res.status(400).send(orderList);    
});

router.get(`/:id`,async (req, res) =>{    
  const orderList = await Orders.find()
  .populate("user","name")
  .populate({
    path:"orderitems",
    populate:{
      path:"product",
      populate:"category",
    },
  });
          if(!orderList) 
          {       
              res.status(500).json({success:false});      
          }  
      res.status(400).send(orderList);    
});

router.post("/", async (req, res) => {
  const orderItemsIds = Promise.all(
    req.body.orderitems.map(async (orderitem) => {
      let newOrderItem = new Orderitem({
        quantity: orderitem.quantity,
        product: orderitem.product,
      });
      newOrderItem = await newOrderItem.save();
      return newOrderItem._id;
    })
  );

  const orderItemsIdsResolved = await orderItemsIds;
  const totalPrices = await Promise.all(
    orderItemsIdsResolved.map(async (orderItemId) => {
      const Orderitems = await Orderitem.findById(orderItemId).populate(
        "product",
        "price"
      );
      const totalPrice = Orderitems.product.price * Orderitems.quantity;
      return totalPrice;
    })
  );

  const totalPrice = totalPrices.reduce((a, b) => a + b, 0);
  let order = new Orders({
    orderitems: orderItemsIdsResolved,
    shippingAddress1: req.body.shippingAddress1,
    shippingAddress2: req.body.shippingAddress2,
    city: req.body.city,
    zip: req.body.zip,
    Country: req.body.Country,
    phone: req.body.phone,
    status: req.body.status,
    totalPrice: totalPrice,
    user: req.body.user,
  });
  const order_insert = await order.save();
  if (!order_insert) return res.status(400).send("the order cannot be created!");
  res.status(200).send(order_insert);
});

module.exports=router

// { "orderitem":"63cead747310765661eb15ab",

// {
//     "orderitems":[
//         {
//             "quantity":3,
//             "product":"63cfc7e8c882c738844a6617"
//         },
//         {
//             "quantity":2,
//             "product":"63cbda6c3952689f01b1cb77"
//         }
//     ],
//     "shippingAddress1":"hyrufnv", 
//     "shippingAddress2":"nuhrrrv", 
//    " city":"nuhrrrv", 
//    " zip":"nuhrrrv", 
//    "Country" :"nuhrrrv", 
//     "phone":677890, 
//     "user":"63ccb3523e1151f12d5f75a5",
// }