const grnLineItemModel=require('../models/grnLineItemModel')


const grnLineItemCreate = async function(req,res){
    try{
        let data = req.body
        if(!data.productName) return res.status(400).send({status:false,msg:"productName is required"})
        if(!data.quantity) return res.status(400).send({status:false,msg:"quantity is required"})
        if(!data.stockPrice) return res.status(400).send({status:false,msg:"stockPrice is required"})
        const saveData = await grnLineItemModel.create(data)
        res.status(201).send({status:true,data:saveData})
    }
    catch(error){
        res.status(500).send({status:false,msg:error.message})
    }
}

module.exports.grnLineItemCreate=grnLineItemCreate