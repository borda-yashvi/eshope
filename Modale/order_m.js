const mongoose=require("mongoose"); 
 
const OrdersSchema=new mongoose.Schema({ 
    orderitems: [
        { type: mongoose.Schema.Types.ObjectId, ref: "orderitems", required: true },
      ], 
    shippingAddress1:{type:String,require:true}, 
    shippingAddress2:{type:String,require:true}, 
    city:{type:String,require:true}, 
    zip:{type:String,require:true}, 
    Country:{type:String,require:true}, 
    phone:{type:Number,require:true}, 
    status:{type:String,require:true,default:"Pending"}, 
    totalPrice:{type:Number,require:true},     
    user:{type:mongoose.Schema.Types.ObjectId,ref:"users"}, 
    dateOrdered:{type:Date,default:Date.now} 
}); 
 

OrdersSchema.virtual("id").get(function(){
    return this._id.toHexString()
})
OrdersSchema.set("toJSON",{
    virtuals:true
})
 
 
exports.Orders=mongoose.model("orders",OrdersSchema)