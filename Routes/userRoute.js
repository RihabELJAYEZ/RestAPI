const express=require('express')
const router=express.Router()

const user=require('../models/User')
// RETURN ALL USERS 

router.get('/',(req,res)=>{
    user.find({},(err,data)=>{
        err?console.log(err):res.json(data)
    })
})

//ADD A NEW USER TO THE DATABASE 

router.post('/newUser', (req,res)=>{
    let newUser=new user(req.body)
    newUser.save((err,data)=>{
        err ? console.log(err) : res.send(data)
    })

})

//EDIT A USER BY ID 
router.put( '/:id', (req,res)=> {
    user.findByIdAndUpdate( {_id:req.params.id},{...req.body},(err,data)=> {
        err ? console.log(err) : res.json({msg:"user was updated"})
    })
})

// DELETE : REMOVE A USER BY ID
router.delete('/:id',(req,res)=>{
    user.findByIdAndRemove({_id:req.params.id},(err,data)=>{
        err ? console.log(err) : res.json(data)
    })
})


module.exports=router