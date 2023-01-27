const mongoose=require("mongoose"); 
 
const OrderitemSchema=new mongoose.Schema({ 
    quantity:{type:Number,require:true}, 
    product:{type:mongoose.Schema.Types.ObjectId,ref:"products"}, 
}); 
 
OrderitemSchema.virtual("id").get(function(){
    return this._id.toHexString()
})
OrderitemSchema.set("toJSON",{
    virtuals:true
})
 
exports.Orderitem=mongoose.model("orderitems",OrderitemSchema)