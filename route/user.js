const express= require('express')

const { protect } = require('../middleware/auth')
const { getUsersThumbnail, getThumbnailById } = require('../controller/user')



const userRoute=express.Router()

userRoute.get('/fetchAll',protect,getUsersThumbnail)
userRoute.get('/fetch/:id',protect,getThumbnailById)



module.exports=userRoute