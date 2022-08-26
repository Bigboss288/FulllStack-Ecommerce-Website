const router = require("express").Router()
const { verifyTokenAuth } = require("./verifyToken")
const CryptoJs = require("crypto-js")
const User = require("../models/User")

router.put("/:id", verifyTokenAuth, async (req,res)=>{                    //update
   if(req.body.password){                         //if changing password we encrypt password before adding
    req.body.password =  CryptoJs.AES.encrypt(req.body.password,"Test").toString()
   }

   try{
     const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body
     },{new:true})
     res.status(200).json(updatedUser)
   }
   catch(err){
    res.status(500).json(err)
   }
})



module.exports = router