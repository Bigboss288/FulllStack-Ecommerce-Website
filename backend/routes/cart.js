const router = require("express").Router()
const Cart = require("../models/Cart")
const { verifyToken, verifyTokenAuth } = require("./verifyToken")

//Insert new cart
router.post("/", verifyToken, async (req,res)=>{
    const newCart = new Cart(req.body) 

        try{
            const savedCart = await newCart.save()
            res.status(200).json(savedCart)
        }
        catch(err){
            res.status(500).json(err)
        }
    
})

//update existing cart
router.put("/:id", verifyTokenAuth, async (req,res) => {
    try{
        const updateCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body,
            },
            { new:true}
        )

        res.status(200).json(updateCart)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//delete cart
router.delete("/:id",verifyTokenAuth , async (req,res) => {
    try{
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Item deleted")
    }
    catch(err){
        res.status(500).json(err)
    }
})

//get Cart
router.get("/find/:id", verifyTokenAuth, async (req,res) => {
    console.log(req.params.id)
    try{
        const findCart = await Cart.findOne({userId : req.params.userid})
        res.status(200).json(findCart)
    }
    catch(err){
        res.status(500).json(err)
    }
})


module.exports = router
