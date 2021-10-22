const router = require("express").Router();
const Workout = require("../models/workout");

router.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '../public/index.html'))
);




module.exports = router;