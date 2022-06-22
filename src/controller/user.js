const User = require("../model/User");
import { sign, verify } from "../helper/jwt";
const register = async (req, res) => {
    try {
        
        let { email, password, code } = req.body;
        if (!email || email.trim == '') return res.badRequest("Email is required.");
        if (!password || password.trim == '') return res.badRequest("Password is required.");

            let newUser = new User({
                email,
                password
            });
            await newUser.save();
            let token = await sign(newUser);
            console.log(newUser);
            return res.ok({ token });
    } catch (error) {
        return res.serverError("Có lỗi xảy ra ", error)
    }
}
const login = async (req, res) => {
    try {
        let { email, password } = req.body;
        if (!email || email.trim == '') return res.badRequest("Email is required.");
        if (!password || password.trim == '') return res.badRequest("Password is required.");
        let user = await User.findOne({ email });
        if (user.password == password) {
            let token = await sign(user);
            return res.ok({token });
        }
    } catch (error) {
        return res.serverError("Có lỗi xảy ra ", error)
    }
}
module.exports = {
    register,
    login
}