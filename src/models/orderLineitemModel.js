const mongoose =require('mongoose')
const objectId=mongoose.Schema.Types.ObjectId

const orderLineItemSchema= new mongoose.Schema({
    productId:{
        type:objectId,
        required:true
    },
    productName:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    sellprice:{
        type:Number,
        required:true
    },
    deleted:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

module.exports=mongoose.model('orderLineItem',orderLineItemSchema)