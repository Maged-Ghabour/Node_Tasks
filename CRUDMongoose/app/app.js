require("../database/connectDB")
const express = require("express")
const path = require("path")
const hbs = require("hbs")
const app = express()


const userRoutes = require("../routes/user.route")


app.use("view engine","hbs")
app.set("views",path.join(__dirname,"../resources/views"))
hbs.registerPartial(path.join(__dirname,"../resources/layouts"))
app.use(express.static(path.join(__dirname,"../resources/public")))

app.use(express.urlencoded({extended:true}))
app.use(userRoutes)
app.get("*",(req,res)=>{
    res.render("err404")
})
app.set("*",(req,res)=>{
    res.render("err404")
})


module.exports = app