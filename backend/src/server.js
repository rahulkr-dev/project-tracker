const app = require("./app");
const Config = require("./config");
const connectDB = require("./database/connect");


const startServer = ()=>{
    try {
        connectDB().then(() => {
            app.listen(Config.PORT, () => {
                console.log("listening for requests",Config.PORT);
            })
        })
    } catch (error) {
        
    }
}

startServer()


//Connect to the database before listening
