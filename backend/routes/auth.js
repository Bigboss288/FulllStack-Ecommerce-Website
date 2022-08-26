const router = require("express").Router()
const User = require("../models/User")
const CryptoJs = require("crypto-js")
const jwt = require("jsonwebtoken")

router.post("/register", async (req,res) =>{       //asynchronous function for registration
    const firstname=req.body.firstname
    const lastname=req.body.lastname
    const email=req.body.email
    const password=req.body.password
    const cpassword=req.body.confirmpassword

    // if(firstname==="" || lastname==="" || email==="" || password==="" || cpassword===""){
    //     res.status(500).json("Input field empty")
    // }else if(password!=cpassword){
    //     res.status(500).json("password doesnt match")
    // }

    const newUser = new User({
        firstname : firstname,
        lastname : lastname,
        email : email,
        //password : CryptoJs.AES.encrypt(password,"Test").toString()  //in realworld always hash password
        password : password
    });
    
   
    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
        
    } catch(err) {
        res.status(500).json(err)
    }
     
})

router.post("/login", async (req,res)=>{                  //this is for login
    try{
        const user = await User.findOne({username:req.body.username})
        !user && res.status(401).json("wrong credentials")  //if no user then return wrong credential

        const hashedpassword = CryptoJs.AES.decrypt(user.password,"Test").toString(CryptoJs.enc.Utf8)
        hashedpassword !== req.body.password && res.status(401).json("wrong credentials");  //if password doesnot match
        
        const accesstoken = jwt.sign({              //creating access token
            id:user._id, 
            isAdmin: user.isAdmin,
        }, "Test", {expiresIn:"2d"})

        const { password,...others } = user._doc;
        res.status(200).json({...others,accesstoken})

    } catch(err){
        res.status(500).json(err)
    }
})


module.exports = router