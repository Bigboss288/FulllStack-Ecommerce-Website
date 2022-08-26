const jwt = require("jsonwebtoken")

const verifyToken = (req,res,next)=>{
    const token = req.headers.token
    if(token){
        jwt.verify(token,"Test", (err,user)=>{
            if(err) res.status(403).json("Token is not valid")
            req.user = user
            next()
        })
    }
    else{
        return res.status(401).json("not authenticated")
    }
}

const verifyTokenAuth = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }
        else{
            res.status(403).json("you are not allowed to do that")
        }
    })
}

module.exports = {verifyToken, verifyTokenAuth}