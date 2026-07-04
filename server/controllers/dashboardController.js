const Leave = require("../models/Leave");
const User = require("../models/User");

const employeeDashboard = async (req, res) => {

    try {

        const pending = await Leave.countDocuments({
            employee: req.user._id,
            status: "Pending",
        });

        const approved = await Leave.countDocuments({
            employee: req.user._id,
            status: "Approved",
        });

        const rejected = await Leave.countDocuments({
            employee: req.user._id,
            status: "Rejected",
        });

        res.status(200).json({

            success: true,

            dashboard: {

                remainingLeave: req.user.leaveBalance,

                pending,

                approved,

                rejected,

            }

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message,

        });

    }

};

const adminDashboard = async (req, res) => {

    try {

        const employees = await User.countDocuments({
            role: "employee",
        });

        const pending = await Leave.countDocuments({
            status: "Pending",
        });

        const approved = await Leave.countDocuments({
            status: "Approved",
        });

        const rejected = await Leave.countDocuments({
            status: "Rejected",
        });

        res.status(200).json({

            success: true,

            dashboard: {

                employees,

                pending,

                approved,

                rejected,

            }

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message,

        });

    }

};

module.exports = {
    employeeDashboard,
    adminDashboard,
};