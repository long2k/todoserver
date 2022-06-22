import mongoose  from "mongoose";
const TaskSchema = new mongoose.Schema({
    title: String, 
    content:String, 
    deadline: Number,
    status: {
        type: Number,
        enum: [0,1,2]
    }
},
{
    timestamps: true
})

const Task = mongoose.model("task",TaskSchema,"task");

module.exports = Task;