const router = require("express").Router()

const userControler = require("../app/controllers/user.controler")
const postControler = require("../app/controllers/post.controler")


// User 
router.get("/" , userControler.home )
router.get("/users/:id" , userControler.single )

// router.get("/add" , userControler.add )
// router.get("/addLogic" , userControler.addLogic )



/////// using Post Instead of get ////////////
router.get("/addUser" , userControler.addUser)
router.post("/addUser" , userControler.addUserLogic)
////////////////////////////////////////////////////////

router.get("/updateUser/:id" , userControler.updateUser)
router.post("/updateUser/:id" , userControler.updateUserLogic)









router.get("/userdel/:id" , userControler.userDel )


//Posts

router.get("/addPosts" , postControler.addPosts )


router.get("/posts" , postControler.posts )
router.get("/posts/:id" , postControler.singlePost )


router.get("/addPostLogic" , postControler.addPostLogic )
router.get("/delPost/:id",postControler.delPost)






module.exports = router
