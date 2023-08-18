const mongoose = require("mongoose");

const connectDb= () => {
mongoose.connect('mongodb://127.0.0.1:27017/crud',{useNewUrlParser: true, useUnifiedTopology:false})
.then((data) =>{
console.log(`DB is running : ${data.connection.host}`)
})
}


module.exports = connectDb;