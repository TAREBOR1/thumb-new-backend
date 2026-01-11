const User = require("../model/user")

exports.verifyUser=async(req,res,next)=>{
    try {
        const {userId}=req.session
        const user= await User.findById(userId).select('-password')
        if(!user){
            return  res.status(500).json({
        message:"unauthorised user",
        success:false
    }) 
        }
  req.user = user
    next();
    } catch (error) {
           res.status(500).json({
        message:error.message,
        success:false
    }) 
    }
}


exports.protect=async(req,res,next)=>{
    const {isLoggedIn,userId}=req.session
    if(!isLoggedIn||!userId){
        return res.status(401).json({
            message:"You are not logged In"
        })
    }
    next()
}