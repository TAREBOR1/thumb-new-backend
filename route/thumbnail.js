const express= require('express')

const { protect } = require('../middleware/auth')
const { generateThumbnail, deleteThumbnail } = require('../controller/thumbnail')


const thumbnailRoute=express.Router()

thumbnailRoute.post('/generate',protect,generateThumbnail)
thumbnailRoute.delete('/delete/:id',protect,deleteThumbnail)



module.exports=thumbnailRoute