const grnModel =require('../models/grnModel')


const grnCreate = async function(req,res){
    try{
        let data = req.body
        if(!data.invoiceNumber) return res.status(400).send({status:false,msg:"invoiceNumber is required"})
        if(!data.vendorName) return res.status(400).send({status:false,msg:"vendorName is required"})
        if(!data.vendorFullAddress) return res.status(400).send({status:false,msg:"vendorFullAddress is required"})
        const saveData = await grnModel.create(data)
        res.status(201).send({status:true,data:saveData})
    }
    catch(err){
        res.status(500).send({status:false,msg:err.message})
    }
}
const grnGet= async function(req,res){
    const vendorId=req.params.vendorId
    const data= await grnModel.findById(vendorId).populate('grnLineItems')
    return res.status(200).send({status:true,data:data})

}

const grnUpdate =async function(req,res){
    const vendorId=req.params.vendorId
    const data =req.body
    const updatedData=await grnModel.findByIdAndUpdate(vendorId,data,{new:true})
    return res.status(200).send({status:true,data:updatedData})

}

const grnDelete =async function(req,res){
    const vendorId =req.params.vendorId
    const deletedData=await grnModel.findByIdAndUpdate(vendorId,{$se:{deleted:true}})

}

const updateStatus = async function(req,res){
    try{
        const data=req.body
        const vendorId = req.params.vendorId
        const updatedData = await grnModel.findByIdAndUpdate(vendorId,data,{new:true})
        return res.status(200).send({status:true,data:updatedData})
    }
    catch(err){
        res.status(500).send({status:false,msg:error.message})
    }
    
}




module.exports.grnCreate=grnCreate
module.exports.grnGet=grnGet
module.exports.grnUpdate=grnUpdate
module.exports.grnDelete=grnDelete
module.exports.updateStatus=updateStatus