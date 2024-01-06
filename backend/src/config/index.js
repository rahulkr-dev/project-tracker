const dotenv = require('dotenv')
dotenv.config()

const  {
    PORT,
    DB_URL,
    DEBURG_MODE,
    JWT_SECRET
} = process.env

const Config = {
    PORT,
    DB_URL,
    DEBURG_MODE,
    JWT_SECRET
}

module.exports = Config