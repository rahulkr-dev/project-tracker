const jwt = require('jsonwebtoken')
const Config = require('../config')

class JwtService {
    static sign(payload, expiry = '1m', secret =Config.JWT_SECRET) {
        return jwt.sign(payload, secret, { expiresIn: expiry });
    }

    static verify(token, secret = JWT_SECRET) {
        return jwt.verify(token, secret);
    }
}

module.exports = JwtService;