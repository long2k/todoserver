import express from "express";
import './service/mongoose';
import 'dotenv/config'
import bodyParser from "body-parser";
const cors = require('cors');



const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(require('./midleware/response'));
app.use(require('./router/index'));


const PORT = process.env.PORT || 3000
app.listen( PORT, ()=>{
    console.log(`server is running on ${PORT}...`);
})
