const router = require('express').Router();
const JIFollowUpController = require("../../controllers/JobInstruction controller/JI.postServiceFollowUp.controller");
const auth = require("../../middlewares/auth");

router.post('/create', auth, JIFollowUpController.create);

module.exports = router;