const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let JIbasicInfo = new Schema({
    orderNo: {
        type: String,
        required: true
    },
    priority: {
        type: Boolean
    },
    waiting: {
        type: Boolean
    },
    PM: {
        type: String
    },
    GR: {
        type: Boolean
    },
    internal: {
        type: Boolean
    },
    pickUp: {
        type: Boolean
    },
    appointment: {
        type: Boolean
    },
    walkIn: {
        type: Boolean
    },
    receptionDate: {
        type: String
    },
    receptionTime: {
        type: String
    },
    receptionChanges: {
        type: String
    },
    deliveryDate: {
        type: String
    },
    deliveryTime: {
        tupe: String
    },
    deliveryChanges: {
        type: String
    },
    repairOrderNo: {
        type: String
    },
    repairDate: {
        type: String
    },
    name: {
        type: String
    },
    address: {
        type: String
    },
    mobile: {
        type: Boolean
    },
    home: {
        type: Boolean
    },
    office: {
        type: Boolean
    },
    email: {
        type: Boolean
    },
    others: {
        type: Boolean
    },
    vehicleRegNo: {
        type: String
    },
    modelYear: {
        type: String
    },
    modelCode: {
        type: String
    },
    vinNo: {
        type: String
    },
    colorCode: {
        type: String
    },
});

module.exports = mongoose.model("JIbasicInfo", JIbasicInfo);