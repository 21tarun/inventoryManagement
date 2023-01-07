const mongoose =require('mongoose')
const objectId=mongoose.Schema.Types.ObjectId


const grnSchema =new mongoose.Schema({
    status:{
        type:String,
        enum:['GENERATED','COMPLETED','CANCELLED'],
        default:'GENERATED'
    },
    invoiceNumber:{
        type:Number,
        required:true
    },
    vendorName:{
        type:String,
        required:true
    },
    vendorFullAddress:{
        type:String,
        required:true
    },
    grnLineItems:{
        type:[objectId],
        default:[],
        ref:'grnLineItem'
    },
    date :{
        type:Date,
        default:Date.now()
    },
    deleted:{
        type:Boolean,
        default:false
    },


},{timestamps:true})

module.exports=mongoose.model('grn',grnSchema)