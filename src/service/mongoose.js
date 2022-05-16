import mongoose from "mongoose";

const option =
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect("mongodb://localhost:27017/todoapp",option)
.then(res =>{
    console.log("Connected to mongoose")
}).catch(err=>{
    console.log(err);
})