const express = require('express')
const router=express.Router()
const grnController=require('../controllers/grnController')
const grnLineItemController=require('../controllers/grnLineItemController')
const orderLineItemController=require('../controllers/orderLineitemController')
const orderController=require('../controllers/orderController')
const itemController=require('../controllers/itemController')




router.post('/grnLineItem',grnLineItemController.grnLineItemCreate)


router.post('/grn',grnController.grnCreate)
router.get('/grn/:vendorId',grnController.grnGet)
router.put('/grn/:vendorId',grnController.grnUpdate)
router.delete('/grn/:vendorId',grnController.grnDelete)
router.post('/grn/update-status/:vendorId',grnController.updateStatus)



router.post('/orderLineItem',orderLineItemController.orderLineItemCreate)


router.post('/order',orderController.orderCreate)
router.get('/order/:customerId',orderController.orderGet)
router.put('/order/:customerId',orderController.orderUpdate)
router.delete('/order/:customerId',orderController.orderDelete)
router.post('/order/update-status/:customerId',orderController.updateStatus)

router.post('/itemCreate',itemController.createItem)
router.get('/items',itemController.getItem)





module.exports=router