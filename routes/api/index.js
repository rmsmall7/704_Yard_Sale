const router = require("express").Router();
const yardRoutes = require("./yardSaleRoute");

// Book routes
router.use("/yardsale", yardRoutes);

module.exports = router;