const express=require('express')
const app=express()

let mongoose=require('mongoose')
require('dotenv').config({path:'./Config/.env'})
// install and setting mongoose

mongoose.connect(process.env.MONGO_URI,{ useUnifiedTopology: true, useNewUrlParser: true,useFindAndModify:false,},(err)=>{
        
        err ? console.log(err) : console.log('database connected')
    })
// route



//parse the data
app.use(express.json())

app.use('/users',require('./Routes/userRoute'))

// port
const port =7000

app.listen(port,(err)=>{
    err?console.log(err):console.log('the port is runing en 7000')})

