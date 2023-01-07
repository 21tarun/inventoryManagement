const mongoose= require('mongoose')
const objectId=mongoose.Schema.Types.ObjectId

const orderSchema=new mongoose.Schema({
    status:{
        type:String,
        enum:['GENERATED','COMPLETED','CANCELLED'],
        dafault:"GENERATED"
    },
    invoiceNumber:{
        type:Number,
        required:true
    },
    customerName:{
        type:String,
        required:true
    },
    customerFullAddress:{
        type:String,
        required:true
    },
    orderLineItems:{
        type:[objectId],
        default:[],
        ref:'orderLineItem'
    },
    data:{
        type:Date
    },
    deleted:{
        type:Boolean,
        default:false
    },


},{timestamps:true})


module.exports=mongoose.model('order',orderSchema)