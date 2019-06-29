const path = require('path');
const router = require('express').Router();
const apiRoutes = require("./api");
const passport = require('passport');

// API Routes
router.use("/api", apiRoutes);

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] }), 
  function(req, res) {
    console.log(req);
    res.redirect("/auth/google/callback");
  }
);
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/", session: false }),
  function(req, res) {
      console.log(req.user)
      var token = req.user.token;
      res.redirect("http://localhost:3000?token=" + token);
  }
);

router.get('/auth/google/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

/* GET Google Authentication API. */

module.exports = router;
