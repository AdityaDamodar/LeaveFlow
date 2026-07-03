const Leave = require("../models/Leave");

// Apply Leave

const applyLeave = async (req, res) => {

    try {

        const {
            leaveType,
            fromDate,
            toDate,
            reason,
        } = req.body;

        // Validation

        if (!leaveType || !fromDate || !toDate || !reason) {

            return res.status(400).json({
                success: false,
                message: "Please fill all fields",
            });

        }

        // Calculate total leave days

        const start = new Date(fromDate);
        const end = new Date(toDate);

        const totalDays =
            Math.ceil(
                (end - start) / (1000 * 60 * 60 * 24)
            ) + 1;

        if (totalDays <= 0) {

            return res.status(400).json({
                success: false,
                message: "Invalid leave dates",
            });

        }

        const leave = await Leave.create({

            employee: req.user._id,

            leaveType,

            fromDate,

            toDate,

            totalDays,

            reason,

        });

        res.status(201).json({

            success: true,

            message: "Leave Applied Successfully",

            leave,

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message,

        });

    }

};

const getMyLeaves = async (req, res) => {

    try {

        const leaves = await Leave.find({
            employee: req.user._id,
        }).sort({
            createdAt: -1,
        });

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

module.exports = {
    applyLeave,
    getMyLeaves,
};