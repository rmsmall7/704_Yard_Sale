const router = require("express").Router();
const yardRoutes = require("./yardsale");

// Book routes
router.use("/yardsale", yardRoutes);

module.exports = router;