const JIBasicInfoModel = require("../../models/Job Instruction Model/JIbasicInfo.Model");
const BasicInfo = require("../../models/BasicInfo.Model");

exports.create = async (req, res) => {
    try {
        const {
            orderNo,
            priority,
            waiting,
            PM,
            GR,
            internal,
            pickUp,
            appointment,
            walkIn,
            receptionDate,
            receptionTime,
            receptionChanges,
            deliveryDate,
            deliveryTime,
            deliveryChanges,
            repairOrderNo,
            repairDate,
            name,
            address,
            mobile,
            home,
            office,
            email,
            others,
            vehicleRegNo,
            modelYear,
            modelCode,
            vinNo,
            colorCode
        } = req.body;

        let existingOrderNo = await BasicInfo.findOne({ orderNo });
        if (existingOrderNo === null) {
            res.status(300).json({ err: 300, msg: "Order number does not exist." });
        } else {
            let existingInfo = await JIBasicInfoModel.findOne({ orderNo });            
            if (existingInfo) {
                const updateData = {
                    priority,
                    waiting,
                    PM,
                    GR,
                    internal,
                    pickUp,
                    appointment,
                    walkIn,
                    receptionDate,
                    receptionTime,
                    receptionChanges,
                    deliveryDate,
                    deliveryTime,
                    deliveryChanges,
                    repairOrderNo,
                    repairDate,
                    name,
                    address,
                    mobile,
                    home,
                    office,
                    email,
                    others,
                    vehicleRegNo,
                    modelYear,
                    modelCode,
                    vinNo,
                    colorCode
                }
                const updatedInfo = await JIBasicInfoModel.findOneAndUpdate({ orderNo }, updateData, { new: true });
                if (!updatedInfo) {
                    res.status(300).json({ err: 300, msg: "Failed to update data." });
                    return;
                }
                const response = {
                    err: 200,
                    msg: "Info updated successfully",
                    data: updatedInfo.toJSON(),
                };
                res.status(200).json(response);
            } else {
                const newJIBasicInfo = await new JIBasicInfoModel({
                    orderNo,
                    priority,
                    waiting,
                    PM,
                    GR,
                    internal,
                    pickUp,
                    appointment,
                    walkIn,
                    receptionDate,
                    receptionTime,
                    receptionChanges,
                    deliveryDate,
                    deliveryTime,
                    deliveryChanges,
                    repairOrderNo,
                    repairDate,
                    name,
                    address,
                    mobile,
                    home,
                    office,
                    email,
                    others,
                    vehicleRegNo,
                    modelYear,
                    modelCode,
                    vinNo,
                    colorCode
                }).save();

                const response = {
                    err: 200,
                    msg: "Info added successfully",
                    data: newJIBasicInfo.toJSON(),
                };
                res.status(200).json(response);
            }
        }


    } catch (error) {
        res.status(500).json({ err: 500, msg: error.toString() })
    }
}