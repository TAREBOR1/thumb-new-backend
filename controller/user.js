const Thumbnail = require("../model/thumbnail")
 

// controller to get all user Thumbnail

exports.getUsersThumbnail=async(req,res)=>{
    try {
        const {userId}=req.session
        const thumbnail= await Thumbnail.find({userId}).sort({createdAt:-1})
        res.json({thumbnail})
    } catch (error) {
          res.status(500).json({
        message:error.message,
        success:false
    })
    }
}

// controller to get single thumnail of a user
exports.getThumbnailById=async(req,res)=>{
    try {
        const {userId}=req.session
        const {id}=req.params
        const thumbnail= await Thumbnail.findOne({userId,_id:id})
        res.json({thumbnail})
    } catch (error) {
          res.status(500).json({
        message:error.message,
        success:false
    })
    }
}
