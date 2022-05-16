module.exports = (req, res, next)=>{
    res.ok = (data, code = 200)=>{
        return res.status(code).json({code, data});
    }
    res.unauthorized = (msg, code = 401)=>{
        return res.status(code).json({code, msg});
    }
    res.badRequest = ( msg , code =403)=>{
        return res.status(code).json({code, msg})
    }
    res.notFound = (code = 404, msg)=>{
        return res.status(code).json({code, msg});
    }
    res.serverError = ( msg, error)=>{
        return res.status(500).json({ msg, error})
    }
    next();
}