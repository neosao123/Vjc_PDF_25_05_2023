const JIDeliveryInfoCOntroller = require("../../controllers/JobInstruction controller/JI.deliveryInfo.controller.js");
const auth = require("../../middlewares/auth");
const router = require("express").Router();

router.post('/create', auth, JIDeliveryInfoCOntroller.create);

module.exports = router;