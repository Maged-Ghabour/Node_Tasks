const router = require("express").Router()
const userRoutes = require("../routes/user.route")

router.get("/",userRoutes.home)






module.exports = router