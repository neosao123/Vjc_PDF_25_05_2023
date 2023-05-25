const router = require("express").Router();
const JIbasicInfoCOntroller = require("../../controllers/JobInstruction controller/JI.basicInfo.controllers");
const auth = require("../../middlewares/auth");

router.post("/create", auth, JIbasicInfoCOntroller.create);

module.exports = router;