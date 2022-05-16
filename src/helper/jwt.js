const jwt = require('jsonwebtoken');
import "dotenv/config";
const verify = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.KEY, (err, decode) => {
            if (err) {
                return reject(null);
            }
            return resolve(decode)
        });

    })
}

const sign = (data) => {
    return new Promise(async (resolve, reject) => {
        let token = await jwt.sign( {...data} , process.env.KEY, { expiresIn: 60 * 60 });
        if (token) return resolve(token);
        return reject(null)
    })
}
module.exports = {
    verify,
    sign
}