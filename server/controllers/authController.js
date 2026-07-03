const bcrypt = require("bcryptjs");

const User = require("../models/User");
const generateToken = require("../utils/generateToken");


// Register User

const registerUser = async (req, res) => {
    res.json({
        message: "Register API Working"
    });
};


// Login User

const loginUser = async (req, res) => {
    res.json({
        message: "Login API Working"
    });
};

module.exports = {
    registerUser,
    loginUser,
};