const router = require("express").Router();
const yardController = require("../../controllers/yardsales");

// Matches with "/api/yard"
// router.get("/", (req, res, next) => {
//   console.log(req);
// })

router.route("/")
  .get(yardController.findAll)
  .post(yardController.create);
<<<<<<< HEAD

  // router.post('/yardsale', (req, res, next) => {
  //   // const yard = {
  //   //   title: req.body.title,
  //   //   name: req.body.name,
  //   //   location: req.body.location,
  //   //   startTime: req.body.startTime,
  //   //   endTime: req.body.endTime,
  //   //   picture: req.body.picture,
  //   // };
  //   const yard = new Yard ({
  //     _id: new mongoose.Types.ObjectId(),
  //     title: req.body.title,
  //     name: req.body.name,
  //     location: req.body.location,
  //     startTime: req.body.startTime,
  //     endTime: req.body.endTime,
  //     picture: req.body.picture,
  //   });
  //   product.save().then(result => {
  //     console.log(result);
  //   })
  //   .catch(err => console.log(err));
  //   res.status(201).json({
  //     message: "handling POST request to /yard",
  //     createYard: yard
  //   });
  // });
=======
>>>>>>> 1170ef201aa7073c40b62560ae443b29fb097802

router.route("/:id")
  .get(yardController.findById)
  .delete(yardController.remove);
  // .put(yardController.update);
  
  
  // .get(yardController.findAll)
  // .post(yardController.create);

  // router.post('/yardsale', (req, res, next) => {
  //   // const yard = {
  //   //   title: req.body.title,
  //   //   name: req.body.name,
  //   //   location: req.body.location,
  //   //   startTime: req.body.startTime,
  //   //   endTime: req.body.endTime,
  //   //   picture: req.body.picture,
  //   // };
  //   const yard = new Yard ({
  //     _id: new mongoose.Types.ObjectId(),
  //     title: req.body.title,
  //     name: req.body.name,
  //     location: req.body.location,
  //     startTime: req.body.startTime,
  //     endTime: req.body.endTime,
  //     picture: req.body.picture,
  //   });
  //   product.save().then(result => {
  //     console.log(result);
  //   })
  //   .catch(err => console.log(err));
  //   res.status(201).json({
  //     message: "handling POST request to /yard",
  //     createYard: yard
  //   });
  // });

// // Matches with "/api/yard/:id"
// router
//   .route("/:id")
//   .get(yardController.findById)
//   .put(yardController.update)
//   .delete(yardController.remove);

module.exports = router;