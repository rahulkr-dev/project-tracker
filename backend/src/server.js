const express = require("express")
const cors = require('cors')
const app = express();
const {PORT} = require("./config")
const connect = require('./database/connect')
// Default Middleware
app.use(express.json());
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Working fine")
})

app.listen(PORT,async()=>{
    await connect()
    console.log("listening on",PORT)
})