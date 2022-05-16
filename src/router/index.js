import express from "express";
const Router = express.Router();


Router.use('/auth', require('./user'));
Router.get('/', async(req, res)=>{
    res.json({server: Date.now()})
})


module.exports = Router;