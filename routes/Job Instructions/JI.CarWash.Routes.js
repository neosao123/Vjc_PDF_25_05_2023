const JICarWashController = require("../../controllers/JobInstruction controller/JI.carWash.controller");
const auth = require("../../middlewares/auth");
const router = require('express').Router();

router.post('/create', auth, JICarWashController.create);

module.exports = router;