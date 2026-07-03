const Leave = require("../models/Leave");
const User = require("../models/User");

// Get All Leave Requests

const getAllLeaves = async (req, res) => {

    try {

        const leaves = await Leave.find()
            .populate("employee", "name email leaveBalance")
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: leaves.length,
            leaves,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};

const approveLeave = async (req, res) => {

    try {

        const leave = await Leave.findById(req.params.id);

        if (!leave) {

            return res.status(404).json({
                success: false,
                message: "Leave request not found"
            });

        }

        if (leave.status !== "Pending") {

            return res.status(400).json({
                success: false,
                message: `Leave is already ${leave.status}`
            });

        }

        const employee = await User.findById(leave.employee);

        if (!employee) {

            return res.status(404).json({
                success: false,
                message: "Employee not found"
            });

        }

        if (employee.leaveBalance < leave.totalDays) {

            return res.status(400).json({
                success: false,
                message: "Insufficient leave balance"
            });

        }

        employee.leaveBalance -= leave.totalDays;

        await employee.save();

        leave.status = "Approved";

        await leave.save();

        res.status(200).json({

            success: true,

            message: "Leave Approved Successfully",

            leave,

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message,

        });

    }

};

const rejectLeave = async (req, res) => {

    try {

        const leave = await Leave.findById(req.params.id);

        if (!leave) {

            return res.status(404).json({
                success: false,
                message: "Leave request not found"
            });

        }

        if (leave.status !== "Pending") {

            return res.status(400).json({
                success: false,
                message: `Leave is already ${leave.status}`
            });

        }

        leave.status = "Rejected";

        await leave.save();

        res.status(200).json({

            success: true,

            message: "Leave Rejected Successfully",

            leave,

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message,

        });

    }

};


module.exports = {
    getAllLeaves,
    approveLeave,
    rejectLeave,
};