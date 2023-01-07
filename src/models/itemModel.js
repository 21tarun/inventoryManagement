const mongoose =require('mongoose')


const itemSchema= new mongoose.Schema({
    productName:{
        type:String,
        unique:true,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    stockPrice:{
        type:Number,
        required:true
    },
    sellprice:{
        type:Number,
        required:true
    }
},{timestamps:true})

module.exports= mongoose.model("item",itemSchema)