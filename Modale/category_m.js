const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
     id:{type:String,require:true},
    name:{type:String,require:true},
    color:{type:String,require:true},
    icon:{type:String,require:true},
    image:{type:String,require:true},
})
exports.Category = mongoose.model("categorys",categorySchema)
