const JIdeliveryInfo = require("../../models/Job Instruction Model/JI.Delivery.Info.Model");
const BasicInfo = require("../../models/BasicInfo.Model");

exports.create = async (req, res) => {
    try {
        const {
            orderNo,
            cleanlynessExternalInternal,
            protectiveCoverRemoval,
            outerMirrorSeatPostiion,
            clockAudiioAdjust,
            floorMatProperInstallation,
            symptomResolutionGR,
            odometerReadingOut,
            jobCompletionDate,
            jobCompletionTime,
            jobResulutExplanation,
            invoiceExplaination,
            floorMatConformation,
            resultSymptomResolution,
            deliveryDate,
            deliveryTime,
            owner,
            family,
            others,
            doneByName,
            confirmedByName,
            staffName,
            locationCodeKey,
            locationCodeStall,
            locationCodeStaffName,
        } = req.body;

        let existingOrderNo = await BasicInfo.findOne({ orderNo });
        if (existingOrderNo === null) {
            res.status(300).json({ err: 300, msg: "Order number does not exist." });
        } else {

            let existingDeliveryInfo = await JIdeliveryInfo.findOne({ orderNo });
            if (existingDeliveryInfo) {
                // If customer exists, update the data
                const updatedData = {
                    cleanlynessExternalInternal,
                    protectiveCoverRemoval,
                    outerMirrorSeatPostiion,
                    clockAudiioAdjust,
                    floorMatProperInstallation,
                    symptomResolutionGR,
                    odometerReadingOut,
                    jobCompletionDate,
                    jobCompletionTime,
                    jobResulutExplanation,
                    invoiceExplaination,
                    floorMatConformation,
                    resultSymptomResolution,
                    deliveryDate,
                    deliveryTime,
                    owner,
                    family,
                    others,
                    doneByName,
                    confirmedByName,
                    staffName,
                    locationCodeKey,
                    locationCodeStall,
                    locationCodeStaffName,
                };
                const updatedDeliveryInfo = await JIdeliveryInfo.findOneAndUpdate({ orderNo }, updatedData, { new: true });
                if (!updatedDeliveryInfo) {
                    res.status(300).json({ err: 300, msg: "Failed to update data." });
                    return;
                }
                const response = {
                    err: 200,
                    msg: "Info updated successfully",
                    data: updatedDeliveryInfo.toJSON(),
                };
                res.status(200).json(response);

            } else {
                const newDeliveryInfo = await new JIdeliveryInfo({
                    orderNo,
                    cleanlynessExternalInternal,
                    protectiveCoverRemoval,
                    outerMirrorSeatPostiion,
                    clockAudiioAdjust,
                    floorMatProperInstallation,
                    symptomResolutionGR,
                    odometerReadingOut,
                    jobCompletionDate,
                    jobCompletionTime,
                    jobResulutExplanation,
                    invoiceExplaination,
                    floorMatConformation,
                    resultSymptomResolution,
                    deliveryDate,
                    deliveryTime,
                    owner,
                    family,
                    others,
                    doneByName,
                    confirmedByName,
                    staffName,
                    locationCodeKey,
                    locationCodeStall,
                    locationCodeStaffName,
                }).save();
                const response = {
                    err: 200,
                    msg: "Info added successfully",
                    data: newDeliveryInfo.toJSON(),
                };
                res.status(200).json(response);
            }
        }




    } catch (error) {
        res.status(500).json({ err: 500, msg: error.toString() })
    }
}