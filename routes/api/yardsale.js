const router = require("express").Router();
const yardController = require("../../controllers/yardsales");
let Yard = require('../../models/yardsales');
const mongoose = require('mongoose');

router.route("/")
  .get(yardController.findAll)
  .post(yardController.create);

router.route("/:id")
  .get(yardController.findById)
  .delete(yardController.remove);
 

module.exports = router;