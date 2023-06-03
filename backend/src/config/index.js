const dotenv = require('dotenv')
dotenv.config()

module.exports =  {
    PORT,
    DB_URL,
    DEBURG_MODE,
} = process.env