const mongoose = require("mongoose");

const ThumbnailSchema = new mongoose.Schema({


      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User",required:"true" },
    title: { type: String, required: true, trim:true },
    description: { type: String, trim:true },
    style:  { type: String, trim:true, enum:["Bold & Graphic" , "Tech/Futuristic" , "Minimalist", "Photorealistic" , "Illustrated"] }, 
    aspect_ratio:{ type: String, trim:true, enum:["16:9" , "1:1" , "9:16"], default:"16:9" }, 
    color_scheme: { type: String, trim:true, enum:["vibrant" , "sunset" , "forest" , "neon" , "purple" , "monochrome" , "ocean" , "pastel"] },
    text_overlay: { type: Boolean, default:false },
    image_url: { type: String, default:"" },
    prompt_used: { type: String, },
    user_prompt: { type: String,  },
    isGenerating: { type: Boolean, default:true },

}, { timestamps: true });


const Thumbnail= mongoose.model('Thumbnail',ThumbnailSchema)

module.exports=Thumbnail;