const otherDetailsModel = require("../models/other.details.Model");
const BasicInfo = require("../models/BasicInfo.Model");
const fs = require("fs");

exports.create = async (req, res) => {
    // try {
        let {
            orderNo,
            tools,
            cigLighter,
            spareWheel,
            radioCassete,
            lightCondition,
            fireExtinguisher,
            damageDent,
            noOfKeys,
            inspectedBy,
            fuelLevel,
            odometerReading,
            signature_InspectedBy,
            good,
            noGood,
            nonGenuine,
            notFixed,
            doubleMat,
            noGoodOthers,
            cash,
            creditCard,
            cheque,
            payMethodOthers,
            replacedParts,
            carWash,
            valuable,
            protectiveCoversSeat,
            protectiveCoversFloor,
            receptionDate,
            receptionTime,
            accessoriesInstallation,
            staffName,
            memoText

        } = req.body;

        let base64img_tools = req.body.img_tools;
        let base64img_cigLighter = req.body.img_cigLighter;
        let base64img_spareWheel = req.body.img_spareWheel;
        let base64img_radioCassete = req.body.img_radioCassete;
        let base64img_lightCondition = req.body.img_lightCondition;
        let base64img_fireExtinguisher = req.body.img_fireExtinguisher;
        let base64img_damageDent = req.body.img_damageDent;
        let base64img_noOfKeys = req.body.img_noOfKeys;
        let base64customerSignature = req.body.customerSignature;

        let existingOrderNo = await BasicInfo.findOne({ orderNo, jobDetailsStep: true });
        if (existingOrderNo === null) {
            res.status(300).json({ err: 300, msg: "Please fill Job Details Step" });
        } else {
            let existingotherDeatails = await otherDetailsModel.findOne({ orderNo });
            if (existingotherDeatails) {
                let updateData = {
                    tools,
                    cigLighter,
                    spareWheel,
                    radioCassete,
                    lightCondition,
                    fireExtinguisher,
                    damageDent,
                    noOfKeys,
                    inspectedBy,
                    fuelLevel,
                    odometerReading,
                    good,
                    noGood,
                    nonGenuine,
                    notFixed,
                    doubleMat,
                    noGoodOthers: {
                        status: noGoodOthers.status,
                        text: noGoodOthers.text
                    },
                    cash,
                    creditCard,
                    cheque,
                    payMethodOthers: {
                        status: payMethodOthers.status,
                        text: payMethodOthers.text
                    },
                    replacedParts,
                    carWash,
                    valuable,
                    protectiveCoversSeat,
                    protectiveCoversFloor,
                    receptionDate,
                    receptionTime,
                    accessoriesInstallation,
                    staffName,
                    memoText
                }
                if (base64img_tools != "") {
                    updateData.img_toolsPath = "otherdetails/" + "imagetools-" + (Math.random() + 1).toString(36).substring(7) + ".png"
                    base64img_tools = base64img_tools.replace(/^data:image\/[a-z]*;base64,/, "");
                    fs.writeFile("uploads/" + updateData.img_toolsPath, base64img_tools, 'base64', function (err) {
                    });
                }
                if (base64img_cigLighter != "") {
                    updateData.img_cigLighterPath = "otherdetails/" + "imagecig-" + (Math.random() + 1).toString(36).substring(7) + ".png";
                    base64img_cigLighter = base64img_cigLighter.replace(/^data:image\/[a-z]*;base64,/, "");
                    fs.writeFile("uploads/" + updateData.img_cigLighterPath, base64img_cigLighter, 'base64', function (err) {
                    });
                }
                if (base64img_spareWheel != "") {
                    updateData.img_spareWeelPath = "otherdetails/" + "imagespwh-" + (Math.random() + 1).toString(36).substring(7) + ".png";
                    base64img_spareWheel = base64img_spareWheel.replace(/^data:image\/[a-z]*;base64,/, "");
                    fs.writeFile("uploads/" + updateData.img_spareWeelPath, base64img_spareWheel, 'base64', function (err) {
                    });
                }
                if (base64img_radioCassete != "") {
                    updateData.img_radioCassetePath = "otherdetails/" + "imagerdcs-" + (Math.random() + 1).toString(36).substring(7) + ".png";
                    base64img_radioCassete = base64img_radioCassete.replace(/^data:image\/[a-z]*;base64,/, "");
                    fs.writeFile("uploads/" + updateData.img_radioCassetePath, base64img_radioCassete, 'base64', function (err) {
                        // Handle any error or perform additional operations if needed
                    });
                }
                if (base64img_lightCondition != "") {
                    updateData.img_lightConditionPath = "otherdetails/" + "imagelig-" + (Math.random() + 1).toString(36).substring(7) + ".png";
                    base64img_lightCondition = base64img_lightCondition.replace(/^data:image\/[a-z]*;base64,/, "");
                    fs.writeFile("uploads/" + updateData.img_lightConditionPath, base64img_lightCondition, 'base64', function (err) {
                        // Handle any error or perform additional operations if needed
                    });
                }
                if (base64img_fireExtinguisher != "") {
                    updateData.img_fireExtinguisherPath = "otherdetails/" + "imagefir-" + (Math.random() + 1).toString(36).substring(7) + ".png";
                    base64img_fireExtinguisher = base64img_fireExtinguisher.replace(/^data:image\/[a-z]*;base64,/, "");
                    fs.writeFile("uploads/" + updateData.img_fireExtinguisherPath, base64img_fireExtinguisher, 'base64', function (err) {
                        // Handle any error or perform additional operations if needed
                    });
                }
                if (base64img_damageDent != "") {
                    updateData.img_damageDentPath = "otherdetails/" + "imagedam-" + (Math.random() + 1).toString(36).substring(7) + ".png";
                    base64img_damageDent = base64img_damageDent.replace(/^data:image\/[a-z]*;base64,/, "");
                    fs.writeFile("uploads/" + updateData.img_damageDentPath, base64img_damageDent, 'base64', function (err) {
                        // Handle any error or perform additional operations if needed
                    });
                }

                if (base64img_noOfKeys != "") {
                    updateData.img_noOfKeysPath = "otherdetails/" + "imagekeys-" + (Math.random() + 1).toString(36).substring(7) + ".png";
                    base64img_noOfKeys = base64img_noOfKeys.replace(/^data:image\/[a-z]*;base64,/, "");
                    fs.writeFile("uploads/" + updateData.img_noOfKeysPath, base64img_noOfKeys, 'base64', function (err) {
                        // Handle any error or perform additional operations if needed
                    });
                }
                if (base64customerSignature != "") {
                    updateData.customerSignaturePath = "otherdetails/" + "imagecust-" + (Math.random() + 1).toString(36).substring(7) + ".png";
                    base64customerSignature = base64customerSignature.replace(/^data:image\/[a-z]*;base64,/, "");
                    fs.writeFile("uploads/" + updateData.customerSignaturePath, base64customerSignature, 'base64', function (err) {
                        // Handle any error or perform additional operations if needed
                    });
                }

                const updatedOtherDetails = await otherDetailsModel.findOneAndUpdate({ orderNo }, updateData, { new: true });
                if (!updatedOtherDetails) {
                    res.status(300).json({ err: 300, msg: "Failed to update data." });
                    return;
                }
                const response = {
                    err: 200,
                    msg: "Info updated successfully",
                    data: updatedOtherDetails.toJSON(),
                };
                let statusUpdate = await BasicInfo.findOneAndUpdate({ orderNo }, { otherDetailsStep: true }, { new: true });
                res.status(200).json(response);
            } else {
                const newOtherDetails = await new otherDetailsModel({
                    orderNo,
                    tools,
                    cigLighter,
                    spareWheel,
                    radioCassete,
                    lightCondition,
                    fireExtinguisher,
                    damageDent,
                    noOfKeys,
                    inspectedBy,
                    fuelLevel,
                    odometerReading,
                    signature_InspectedBy,
                    good,
                    noGood,
                    nonGenuine,
                    notFixed,
                    doubleMat,
                    noGoodOthers: {
                        status: noGoodOthers.status,
                        text: noGoodOthers.text
                    },
                    cash,
                    creditCard,
                    cheque,
                    payMethodOthers: {
                        status: payMethodOthers.status,
                        text: payMethodOthers.text
                    },
                    replacedParts,
                    carWash,
                    valuable,
                    protectiveCoversSeat,
                    protectiveCoversFloor,
                    receptionDate,
                    receptionTime,
                    accessoriesInstallation,
                    staffName,
                    memoText
                })

                if (base64img_tools != "") {
                    newOtherDetails.img_toolsPath = "otherdetails/" + "imagetools-" + (Math.random() + 1).toString(36).substring(7) + ".png"
                    base64img_tools = base64img_tools.replace(/^data:image\/[a-z]*;base64,/, "");
                    fs.writeFile("uploads/" + newOtherDetails.img_toolsPath, base64img_tools, 'base64', function (err) {
                    });
                }
                if (base64img_cigLighter != "") {
                    newOtherDetails.img_cigLighterPath = "otherdetails/" + "imagecig-" + (Math.random() + 1).toString(36).substring(7) + ".png";
                    base64img_cigLighter = base64img_cigLighter.replace(/^data:image\/[a-z]*;base64,/, "");
                    fs.writeFile("uploads/" + newOtherDetails.img_cigLighterPath, base64img_cigLighter, 'base64', function (err) {
                    });
                }
                if (base64img_spareWheel != "") {
                    newOtherDetails.img_spareWeelPath = "otherdetails/" + "imagespwh-" + (Math.random() + 1).toString(36).substring(7) + ".png";
                    base64img_spareWheel = base64img_spareWheel.replace(/^data:image\/[a-z]*;base64,/, "");
                    fs.writeFile("uploads/" + newOtherDetails.img_spareWeelPath, base64img_spareWheel, 'base64', function (err) {
                    });
                }
                if (base64img_radioCassete != "") {
                    newOtherDetails.img_radioCassetePath = "otherdetails/" + "imagerdcs-" + (Math.random() + 1).toString(36).substring(7) + ".png";
                    base64img_radioCassete = base64img_radioCassete.replace(/^data:image\/[a-z]*;base64,/, "");
                    fs.writeFile("uploads/" + newOtherDetails.img_radioCassetePath, base64img_radioCassete, 'base64', function (err) {
                        // Handle any error or perform additional operations if needed
                    });
                }
                if (base64img_lightCondition != "") {
                    newOtherDetails.img_lightConditionPath = "otherdetails/" + "imagelig-" + (Math.random() + 1).toString(36).substring(7) + ".png";
                    base64img_lightCondition = base64img_lightCondition.replace(/^data:image\/[a-z]*;base64,/, "");
                    fs.writeFile("uploads/" + newOtherDetails.img_lightConditionPath, base64img_lightCondition, 'base64', function (err) {
                        // Handle any error or perform additional operations if needed
                    });
                }
                if (base64img_fireExtinguisher != "") {
                    newOtherDetails.img_fireExtinguisherPath = "otherdetails/" + "imagefir-" + (Math.random() + 1).toString(36).substring(7) + ".png";
                    base64img_fireExtinguisher = base64img_fireExtinguisher.replace(/^data:image\/[a-z]*;base64,/, "");
                    fs.writeFile("uploads/" + newOtherDetails.img_fireExtinguisherPath, base64img_fireExtinguisher, 'base64', function (err) {
                        // Handle any error or perform additional operations if needed
                    });
                }
                if (base64img_damageDent != "") {
                    newOtherDetails.img_damageDentPath = "otherdetails/" + "imagedam-" + (Math.random() + 1).toString(36).substring(7) + ".png";
                    base64img_damageDent = base64img_damageDent.replace(/^data:image\/[a-z]*;base64,/, "");
                    fs.writeFile("uploads/" + newOtherDetails.img_damageDentPath, base64img_damageDent, 'base64', function (err) {
                        // Handle any error or perform additional operations if needed
                    });
                }

                if (base64img_noOfKeys != "") {
                    newOtherDetails.img_noOfKeysPath = "otherdetails/" + "imagekeys-" + (Math.random() + 1).toString(36).substring(7) + ".png";
                    base64img_noOfKeys = base64img_noOfKeys.replace(/^data:image\/[a-z]*;base64,/, "");
                    fs.writeFile("uploads/" + newOtherDetails.img_noOfKeysPath, base64img_noOfKeys, 'base64', function (err) {
                        // Handle any error or perform additional operations if needed
                    });
                }
                if (base64customerSignature != "") {
                    newOtherDetails.customerSignaturePath = "otherdetails/" + "imagecust-" + (Math.random() + 1).toString(36).substring(7) + ".png";
                    base64customerSignature = base64customerSignature.replace(/^data:image\/[a-z]*;base64,/, "");
                    fs.writeFile("uploads/" + newOtherDetails.customerSignaturePath, base64customerSignature, 'base64', function (err) {
                        // Handle any error or perform additional operations if needed
                    });
                }
                newOtherDetails.save().then(async (result) => {
                    res.status(200).json({ err: 200, msg: "Info saved successfully", data: result });
                    let statusUpdate = await BasicInfo.findOneAndUpdate({ orderNo }, { otherDetailsStep: true }, { new: true });
                })
            }
        }

    // } catch (error) {
    //     res.status(500).json({ err: 500, msg: error.toString() })
    // }
}