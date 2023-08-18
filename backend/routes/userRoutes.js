const express =require("express");
const { createUser } = require("../coontrollers/userController");
const { allUser } = require("../coontrollers/userController");
const { updateUser } = require("../coontrollers/userController");
const { deleteUser } = require("../coontrollers/userController");
const { singleUserFindById } = require("../coontrollers/userController");

const router = express.Router();

router.route("/user/new").post(createUser);
router.route("/users").get(allUser);
router.route("/user/:id").put(updateUser);
router.route("/user/:id").get(singleUserFindById);
router.route("/user/:id").delete(deleteUser);


module.exports  = router