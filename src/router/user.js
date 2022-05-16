import express  from "express";
import * as controller from "../controller/user";
const Router = express.Router();

Router.post('/login', controller.login);
Router.post('/register', controller.register);

module.exports = Router;
