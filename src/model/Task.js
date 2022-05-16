import mongoose, { model } from "mongoose";
const TaskSchema = new mongoose.Schema({
    name: String, 
    state: {
        type: Number,
        enum: [0,1]
    }
},
{
    timestamps: true
})

const User = mongoose.model("user",UserSchema);

module.exports = User;