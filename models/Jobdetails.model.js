const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let jobDetails = new Schema({
    orderNo: {
        type: String,
        required: true
    },
    jobdetails_partReplace: [{
        details: {
            type: String,
            default: ""
        },
        partNo: {
            type: String,
            default: ""
        },
        quantity: {
            type: Number,

        },
        labourHours: {
            type: Number
        },
        Estimation: {
            type: Number,
        },
    }],

    labourTotal: {
        type: String,
        default: ""
    }, partsTotal: {
        type: String,
        default: ""
    },
    grandTotal: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model("jobdetails", jobDetails);
