const dealWithJSON = require("../helper/dealWithdata.helper")
const home = (req,res) => {
   const data =  dealWithJSON.readFromJSON("database/user.json")
    res.render("users/home",
    {
        pageTitle : "Home Page",
        isEmpty  : data.length,
        data

    });
   
}
// const add = (req,res) => {
//     res.render("users/add" , 
//     {
//         pageTitle : "Add User",

//     });
// }

// const addLogic = (req,res) => {
//     const data = dealWithJSON.readFromJSON("database/user.json")
//     const user = {...req.query,id:Date.now()}
//     data.push(user)
//     dealWithJSON.writeFromJSON("database/user.json" , data)

//     res.redirect("/")
    
// }



const addUser = (req,res) =>{
    res.render("users/add")
}

const addUserLogic = (req,res) =>{
    const data = dealWithJSON.readFromJSON("database/user.json")
    const user = {...req.body,id:Date.now()}
    data.push(user)
    dealWithJSON.writeFromJSON("database/user.json" , data)

    res.redirect("/")
}


const single = (req,res) =>{
    const data = dealWithJSON.readFromJSON("database/user.json")
    const id = req.params.id
    const user = data.find( d => d.id == id)

    res.render("users/single",
    {
        pageTitle :"Single Page",
        user ,
        
    })
   
}

const userDel = (req , res)=>{
    const data = dealWithJSON.readFromJSON("database/user.json")
    const id = req.params.id

    const afterDel = data.filter(d=>d.id != id)

    dealWithJSON.writeFromJSON("database/user.json" , afterDel)

    res.redirect("/")

}

const updateUser = (req , res) => {
    const data = dealWithJSON.readFromJSON("database/user.json")
    const id = req.params.id
    const user = data.find( d => d.id == id)

    res.render("users/edit",
    {
        pageTitle :"Edit Page",
        user ,
        
    })
}

const updateUserLogic = (req , res) =>{
 
    const data = dealWithJSON.readFromJSON("database/user.json")
    const id = req.params.id
    const userIndex = data.findIndex( d => d.id == id)
    data[userIndex] = {...req.body , id : data[userIndex].id}
    dealWithJSON.writeFromJSON("database/user.json" , data)

    res.redirect(`/users/${data[userIndex].id}`)

}

module.exports = {
    home ,
    single,
    userDel,
    addUser,
    addUserLogic,
    updateUser,
    updateUserLogic
    

    
    // add,
    // addLogic,
    
}