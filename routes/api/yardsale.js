const router = require("express").Router();
const yardController = require("../../controllers/yardsales");

// Matches with "/api/yard"
// router.get("/", (req, res, next) => {
//   console.log(req);
// })

router.route("/")
  .get(yardController.findAll)
  .post(yardController.create);

router.route("/:id")
  .get(yardController.findById)
  .delete(yardController.remove);
 

module.exports = router;