const path = require('path');
const router = require('express').Router();

router.get("/api/yardsale", (req, res) => {
    res.send({ message: "build routes" })
})

router.use(function(req, res){
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})

module.exports = router;
