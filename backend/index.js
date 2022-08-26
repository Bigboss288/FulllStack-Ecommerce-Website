const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productroute = require("./routes/product")

mongoose.connect(
    "mongodb+srv://ayan:Bigboss_288@cluster0.geyruxz.mongodb.net/?retryWrites=true&w=majority"
).then(()=>console.log("successful"))
 .catch((err) => console.log(err))

// app.get("/api/test", ()=>{
//     console.log("test is successful")
// })

app.use(cors())
app.use(express.json())
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/product",productroute);

app.listen(5000,()=>{
    console.log("backend is running")
})