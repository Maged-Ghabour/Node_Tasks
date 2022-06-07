const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/mongoose2022")

const User = mongoose.model("User",
{
 name : {
     type : String,
     trim : true,
     lowercase:true,
     maxlength:15,
     minlength:3,
     required : true
 },
 age : {
     type:Number , 
     min : 10 , 
     max : 60
 }
})

const userData = new User ({name:"maged" , age : 21})
console.log(userData);

userData.save()
.then(res => console.log(res))
.catch(e => console.log(e))