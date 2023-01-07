const itemModel=require('../models/itemModel')





const createItem= async function(req,res){
    try{
        const data=req.body
        if(!data.productName) return res.status(400).send({status:false,msg:"productName is required"})
        if(!data.quantity) return res.status(400).send({status:false,msg:"quantity is required"})
        if(!data.stockPrice) return res.status(400).send({status:false,msg:"stockPrice is required"})
        if(!data.sellprice) return res.status(400).send({status:false,msg:"sellprice is required"})
        const item = await itemModel.findOne({productName:data.productName})
        if(item) return res.status(400).send({status:false,msg:"you already create this item"})
        const saveData=await  itemModel.create(data)
        res.status(201).send({status:true,data:saveData})
    }
    catch(error){
        res.status(500).send({status:false,msg:error.message})
    }
}

const getItem= async function (req,res){
    try{
    
        const Data= await itemModel.find()
        res.status(200).send({status:true,data:Data})
    }
    catch(error){
        res.status(500).send({status:false,msg:error.message})
    }
}



module.exports.createItem=createItem
module.exports.getItem=getItem