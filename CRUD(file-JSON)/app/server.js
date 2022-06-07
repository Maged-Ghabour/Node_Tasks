require("dotenv").config()
const path = require("path")
const hbs = require("hbs")
const express = require("express")
const app = express();






app.set("view engine", "hbs")


app.set("views" , path.join(__dirname,"../resources/views"))
app.use(express.static(path.join(__dirname,"../resources/public")))
hbs.registerPartials(path.join(__dirname,"../resources/layouts"))

app.use(express.urlencoded({extended:true}))
//Routes
const router = require("../routes/user.route")
app.use(router)


app.get("*", (req,res)=> res.render("users/err404",{
    pageTitle : "Not Fount"
}))

app.post("*", (req,res)=> res.render("users/err404",{
    pageTitle : "Not Fount"
}))


// Post 






module.exports = app 
