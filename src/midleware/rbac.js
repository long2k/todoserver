import {verify} from "../helper/jwt";
module.exports =  async(req, res, next) =>{
    try {
        let token = req.headers.authorization || req.headers.authorization;
        let data =  await verify(token) ;
        req.user= data;
        if(!data && !req.user) return res.unauthorized("Invalid User");
        
    } catch (error) {
        return res.serverError("Có lỗi xảy ra.", error)
    }
    

    next();
}