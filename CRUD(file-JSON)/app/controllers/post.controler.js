const { query } = require("express")
const dealWithdata = require("../helper/dealWithdata.helper")



const posts = (req,res) =>{
    const data = dealWithdata.readFromJSON("database/post.json")
   
    res.render("posts/posts" , 
    {
        pageTitle : "Posts" , 
        isEmpty  : data.length,
        data
    })
}


const singlePost = (req,res) =>{
    const data = dealWithdata.readFromJSON("database/post.json")
    const id = req.params.id
    const post = data.find(e =>e.id == id)
   
    res.render("posts/single" , 
    {
        pageTitle : "Posts" , 
        post  
     
    })
}

const addPosts = (req,res) =>{
    res.render("posts/addPosts" ,
    {
        pageTitle : "Add New Post",
        types     : ["Admin" , "Super Admin" , "User" ,"Guest"]
    })
}

const addPostLogic = (req,res) =>{
    const data = dealWithdata.readFromJSON("database/post.json")
    const user = {...req.query , id:Date.now()}
    data.push(user)
   
    dealWithdata.writeFromJSON("database/post.json", data)
    res.redirect("/posts")
}

const delPost = (req,res) =>{
const data = dealWithdata.readFromJSON("database/post.json")
const id = req.params.id

const afterDel = data.filter(e =>e.id != id )
dealWithdata.writeFromJSON("database/post.json" , afterDel)

res.redirect("/posts")


}



module.exports = {
    posts,
    addPostLogic,
    singlePost,
    addPosts,
    delPost
}
