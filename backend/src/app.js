const express = require("express")
const cors = require('cors')
const app = express();
const {PORT} = require("./config")
const connect = require('./database/connect')
const errorHandler = require('./middleware/errorHandler')
const userRouter = require('./routes');
const path = require('path');
// const generateFakeData = require('./utils/fake.data') 
// Default Middleware
app.use(express.json());
app.use(cors());
app.use("/api",userRouter)


app.use(express.static(path.join(path.resolve(__dirname),"../dist")));

app.get("*",(req,res)=>{
    res.sendFile(path.join(path.resolve(__dirname),"../dist/index.html"))
})




// registered error handler middleware
app.use(errorHandler)



module.exports = app


