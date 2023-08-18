const mongoose = require("mongoose");
// const validator = require("vali")


const userSchema  = new mongoose.Schema({
    personalName:{
        type:String,
        require:[true,"Please enter your Personal name"],
    },

    email:{
        type:String,
        required:[true,"please enter your email id "],
    },
    contactInfo:{
        type:String,
        require:[true,"Please enter your Contact Number"],
    },
    userName:{
        type:String,
        require:[true,"Please enter your user Name"],
    },
    profilePicture:{
        public_id:{
            type:String,
            required: false,
        },
        url:{
            type:String,
            require: false
        }
    }
})


module.exports= mongoose.model("User",userSchema);