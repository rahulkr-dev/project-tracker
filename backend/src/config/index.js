const dotenv = require('dotenv')
dotenv.config()

const  {
    PORT,
    DB_URL,
    DEBURG_MODE,
} = process.env

const Config = {
    PORT,
    DB_URL,
    DEBURG_MODE,
}

module.exports = Config