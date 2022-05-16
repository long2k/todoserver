import mongoose, { model } from "mongoose";
const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
},{
    timestamps: true
})

const User = mongoose.model("user",UserSchema);

module.exports = User;