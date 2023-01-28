const jwt = require("jsonwebtoken");
const { constant } = require("../config/constant")

exports.signToken = (payload) => {
    const token = jwt.sign(payload, constant.SECRET, {
        expiresIn: "10d"
    })
    return token
}