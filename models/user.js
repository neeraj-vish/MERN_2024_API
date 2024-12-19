import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, unique: true, require: true }, 
    password: { type: String, require: true },
    CreatedAt: { type: Date, default: Date.now },
  });
  
  export const User = mongoose.model('user', userSchema);