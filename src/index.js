const express= require('express')
const mongoose=require('mongoose')
const app =express()
const route= require('./routes/route')

mongoose.set('strictQuery',true)
app.use(express.json())

mongoose.connect("mongodb+srv://sandy_varanasi:sRzKkk5zN4u6uAZG@sandy-clusture.eimj9vg.mongodb.net/group9InventoryManagement",
{useNewUrlParser:true}
)
.then(()=>console.log("MongoDb is connected"))
.catch(err => console.log(err))



app.use('/',route)

app.listen(3000, function(){
    console.log("server running on port" + 3000)
})