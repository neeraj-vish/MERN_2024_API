import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title: { type: String, require: true },
    description: { type: String,  require: true }, 
    imgUrl: { type: String, require: true },
    user:{type:mongoose.Types.ObjectId, ref:"User",require:true},
    CreatedAt: { type: Date, default: Date.now },
  });
  
  export const blog = mongoose.model('blog', blogSchema);