const User = require("../models/userModels");


//start
exports.createUser = async (req, res) => {
    const user = await User.create(req.body);
    res.status(201).json({
        sucess: true,
        user
    })
}

exports.updateUser = async (req, res, next) => {
    let user = await User.findById(req.params.id)
    if (!user) {
        return res.status(500).json({
            sucess: false,
            message: "user not found"
        })
    }
    user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        useFindAndModify: false

    })
    res.status(200).json({
        sucess: true,
    })
}

exports.allUser = async (req, res) => {
    const users = await User.find();
    res.status(200).json({
        sucess: true,
        users
    })
}


exports.singleUserFindById = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.status(200).json({
        sucess: true,
        user
    })
}

exports.deleteUser = async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return next('user does not exist')
    }


    await User.deleteOne();

    res.status(200).json({
        sucess: true,
        message: `User deleted succesfully `
    })
}