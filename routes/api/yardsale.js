const router = require("express").Router();
const yardController = require("../../controllers/yardsales");

// Matches with "/api/yard"
router.route("/")
  .get(yardController.findAll)
  .post(yardController.create);

// Matches with "/api/yard/:id"
router
  .route("/:id")
  .get(yardController.findById)
  .put(yardController.update)
  .delete(yardController.remove);

module.exports = router;