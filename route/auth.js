const express= require('express')
const { signup, login, verifyUser, logout } = require('../controller/auth')
const { protect } = require('../middleware/auth')


const authRoute=express.Router()


authRoute.post('/signup',signup)
authRoute.post('/login',login)
authRoute.get('/verify',protect,verifyUser)
authRoute.post('/logout',protect,logout)

module.exports=authRoute