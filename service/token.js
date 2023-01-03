const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

exports.signToken = (payload) => {
    const token = jwt.sign(payload, secret, {
        expiresIn: "10d"
    })
    return token
}