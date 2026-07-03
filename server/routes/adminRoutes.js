const express = require("express");

const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const { adminOnly } = require("../middleware/roleMiddleware");

const {
    getAllLeaves,
    approveLeave,
    rejectLeave,
} = require("../controllers/adminController");

router.get(
    "/leaves",
    protect,
    adminOnly,
    getAllLeaves
);

router.put(
    "/approve/:id",
    protect,
    adminOnly,
    approveLeave
);

router.put(
    "/reject/:id",
    protect,
    adminOnly,
    rejectLeave
);
module.exports = router;