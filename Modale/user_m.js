const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
     name:{type:String,require:true},
     email:{type:String,require:true},
     passwordHash:{type:String,require:true},
     phone:{type:Number,require:true},
     isAdmin: { type: Boolean, default: false },
     street:{type:String, default: ""},
     apartment:{type:String, default: ""},
     city:{type:String, default: ""},
     zip:{type:String, default: ""},
     country:{type:String ,default: ""},
})

userSchema.virtual("id").get(function () {
     return this._id.toHexString();
   });
   
   userSchema.set("toJSON", {
     virtuals: true,
   });

exports.User = mongoose.model("users",userSchema)
