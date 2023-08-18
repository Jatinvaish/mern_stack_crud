const app = require("./app");
const conncetDatabase = require("./config/databse.js");
const dotenv = require("dotenv");

conncetDatabase();


dotenv.config({path:"backend/config/config.env"})
app.listen(process.env.PORT, () => {
    console.log(`Server is running on :${process.env.PORT}`)
})