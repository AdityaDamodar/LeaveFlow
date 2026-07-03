const Leave = require("../models/Leave");

const applyLeave = async (req, res) => {

    res.json({
        message: "Apply Leave API Working"
    });

};

const getMyLeaves = async (req, res) => {

    res.json({
        message: "My Leaves API Working"
    });

};

module.exports = {
    applyLeave,
    getMyLeaves,
};