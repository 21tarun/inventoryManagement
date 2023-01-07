const orderModel =require('../models/orderModel')


const orderCreate = async function(req,res){
    try{
        let data = req.body
        if(!data.invoiceNumber) return res.status(400).send({status:false,msg:"invoiceNumber is required"})
        if(!data.customerName) return res.status(400).send({status:false,msg:"customerName is required"})
        if(!data.customerFullAddress) return res.status(400).send({status:false,msg:"customerFullAddress is required"})
        
        const saveData = await orderModel.create(data)
        res.status(201).send({status:true,data:saveData})
    }
    catch(err)
    {
        res.status(500).send({status:false,msg:err.message})
    }
}
const orderGet= async function(req,res){
    const customerId= req.params.customerId
    const data= await orderModel.findById(customerId).populate('orderLineItems')
    res.status(200).send({status:true,data:data})

}

const orderUpdate =async function(req,res){
    const customerId= req.params.customerId
    const data=req.body
    const updatedData= await orderModel.findByIdAndUpdate(customerId,data,{new:true})
    res.status(200).send({status:true,data:updatedData})
}

const orderDelete =async function(req,res){
    const customerId= req.params.customerId
    const deletedData=await orderModel.findByIdAndUpdate(customerId,{$set:{deleted:true}})
    res.status(200).send({status:true,msg:"deleted sucessfully"})
}

const updateStatus = async function(res,res){
    try{
        const customerId= req.params.customerId
        const data=req.body
        const updatedData= await orderModel.findByIdAndUpdate(customerId,data,{new:true})
        return res.status(200).send({status:false,data:updatedData})
    }
    catch(err){
        res.status(500).send({status:false,msg:err.message})
    }
    
}




module.exports.orderCreate=orderCreate
module.exports.orderGet=orderGet
module.exports.orderUpdate=orderUpdate
module.exports.orderDelete=orderDelete
module.exports.updateStatus=updateStatus