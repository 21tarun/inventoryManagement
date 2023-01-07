const orderLineItemModel=require('../models/orderLineitemModel')
const grnLineItemModel=require('../models/grnLineItemModel')


const orderLineItemCreate = async function(req,res){
    try{
        let data = req.body
        if(!data.productName) return res.status(400).send({status:false,msg:"productName is required"})
        if(!data.quantity) return res.status(400).send({status:false,msg:"quantity is required"})
        if(!data.sellprice ) return res.status(400).send({status:false,msg:"sellPrice  is required"})
        const product=await grnLineItemModel.findById(data.productId)
        if(!product) return res.status(404).send({status:false,msg:"you can not order this product"})
        if(product.quantity<data.quantity)    return res.status(201).send({status:false,msg:"you can not order this much quantity"})
           
        const newStockPrice = (product.stockPrice/product.quantity)*data.quantity
        
        const updateGrnLineItem= await grnLineItemModel.findByIdAndUpdate(data.productId,{$inc:{quantity:-data.quantity,stockPrice: -newStockPrice},status:"COMPLETED"},{new:true})
        
        const saveData = await orderLineItemModel.create(data)
        res.status(201).send({status:true,data:saveData})
    }
    catch(err){
        res.status(500).send({status:false,msg:err.message})
    }
}

module.exports.orderLineItemCreate=orderLineItemCreate

