const express = require("express");

const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const { adminOnly } = require("../middleware/roleMiddleware");

const {
    employeeDashboard,
    adminDashboard,
} = require("../controllers/dashboardController");

router.get("/", protect, employeeDashboard);
router.get(
    "/admin",
    protect,
    adminOnly,
    adminDashboard
);

module.exports = router;