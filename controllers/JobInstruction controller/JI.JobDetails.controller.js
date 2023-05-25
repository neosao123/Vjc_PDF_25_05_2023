const BasicInfoModel = require("../../models/BasicInfo.Model");
const JIJobDetailsModel = require("../../models/Job Instruction Model/JIjobDetails.Model");

exports.create = async (req, res) => {
    try {
        const {
            orderNo,
            jobdetails_partReplace,
            jondetaillabourTotal,
            jobdetailpartsTotal,
            jobdetailgrandTotal,
            startDate,
            startTime,
            startChanges,
            completionDate,
            completionTime,
            completionChanges,
            actualStartDate,
            actualStartTime,
            actualStartChange,
            actualCompletionStartDate,
            actualCompletionStartTime,
            actualCompletionChanges,
            technicianName,
            testDrive,
            problemEliminated,
            actualClockedHours,
            confirmedByName,
            waitingForServiceKey,
            waitingForServiceStall,
            waitingForWashingKey,
            waitingForWashingStall,
            jobStop,
            additionalJobs,
            DIST,
            additionalJobsDate,
            additionalJobsreschedule,
            additionalJobslabourTotal,
            additionalJobspartsTotal,
            additionalJobsGrandTotal
        } = req.body;

        let existingOrderNo = await BasicInfoModel.findOne({ orderNo });
        if (existingOrderNo === null) {
            res.status(300).json({ err: 300, msg: "Order number does not exist." });
        } else {
            let existingInfo = await JIJobDetailsModel.findOne({ orderNo });
            if (existingInfo) {
                const updateData = {
                    jobdetails_partReplace: [],
                    jondetaillabourTotal,
                    jobdetailpartsTotal,
                    jobdetailgrandTotal,
                    startDate,
                    startTime,
                    startChanges,
                    completionDate,
                    completionTime,
                    completionChanges,
                    actualStartDate,
                    actualStartTime,
                    actualStartChange,
                    actualCompletionStartDate,
                    actualCompletionStartTime,
                    actualCompletionChanges,
                    technicianName,
                    testDrive,
                    problemEliminated,
                    actualClockedHours,
                    confirmedByName,
                    waitingForServiceKey,
                    waitingForServiceStall,
                    waitingForWashingKey,
                    waitingForWashingStall,
                    jobStop: [],
                    additionalJobs: [],
                    DIST,
                    additionalJobsDate,
                    additionalJobsreschedule,
                    additionalJobslabourTotal,
                    additionalJobspartsTotal,
                    additionalJobsGrandTotal
                }
                for (let i = 0; i < jobdetails_partReplace.length; i++) {
                    updateData.jobdetails_partReplace.push({
                        details: jobdetails_partReplace[i].details,
                        partNo: jobdetails_partReplace[i].partNo,
                        quantity: jobdetails_partReplace[i].quantity,
                        labourHours: jobdetails_partReplace[i].labourHours,
                        Estimation: jobdetails_partReplace[i].Estimation,
                    });
                }
                for (let i = 0; i < jobStop.length; i++) {
                    updateData.jobStop.push({
                        planStartDate: jobStop[i].planStartDate,
                        planStartTime: jobStop[i].planStartTime,
                        planRestartDate: jobStop[i].planRestartDate,
                        planRestartTime: jobStop[i].planRestartTime,
                        planChanges: jobStop[i].planChanges,
                        actualStartDate: jobStop[i].actualStartDate,
                        actualStartTime: jobStop[i].actualStartTime,
                        actualRestartDate: jobStop[i].actualRestartDate,
                        actualRestartTime: jobStop[i].actualRestartTime,
                        jobStoppageTime: jobStop[i].jobStoppageTime,
                        customerContactDate: jobStop[i].customerContactDate,
                        customerContactTime: jobStop[i].customerContactTime,
                        other: jobStop[i].other,
                        staffName: jobStop[i].staffName
                    })
                }
                for (let i = 0; i < additionalJobs.length; i++) {
                    updateData.additionalJobs.push({
                        details: additionalJobs[i].details,
                        partNo: additionalJobs[i].partNo,
                        quantity: additionalJobs[i].quantity,
                        labourHours: additionalJobs[i].labourHours,
                        Estimation: additionalJobs[i].Estimation,
                    })
                }
                let updateJobDetails = await JIJobDetailsModel.findOneAndUpdate({ orderNo }, updateData, { new: true })
                if (!updateJobDetails) {
                    res.status(300).json({ err: 300, msg: "Failed to update data." });
                    return;
                }
                const response = {
                    err: 200,
                    msg: "Info updated successfully",
                    data: updateJobDetails.toJSON(),
                };
                res.status(200).json(response);
            } else {
                const newJIDetailInfo = await new JIJobDetailsModel({
                    orderNo,
                    jobdetails_partReplace: [],
                    jondetaillabourTotal,
                    jobdetailpartsTotal,
                    jobdetailgrandTotal,
                    startDate,
                    startTime,
                    startChanges,
                    completionDate,
                    completionTime,
                    completionChanges,
                    actualStartDate,
                    actualStartTime,
                    actualStartChange,
                    actualCompletionStartDate,
                    actualCompletionStartTime,
                    actualCompletionChanges,
                    technicianName,
                    testDrive,
                    problemEliminated,
                    actualClockedHours,
                    confirmedByName,
                    waitingForServiceKey,
                    waitingForServiceStall,
                    waitingForWashingKey,
                    waitingForWashingStall,
                    jobStop: [],
                    additionalJobs: [],
                    DIST,
                    additionalJobsDate,
                    additionalJobsreschedule,
                    additionalJobslabourTotal,
                    additionalJobspartsTotal,
                    additionalJobsGrandTotal
                })

                for (let i = 0; i < jobdetails_partReplace.length; i++) {
                    newJIDetailInfo.jobdetails_partReplace.push({
                        details: jobdetails_partReplace[i].details,
                        partNo: jobdetails_partReplace[i].partNo,
                        quantity: jobdetails_partReplace[i].quantity,
                        labourHours: jobdetails_partReplace[i].labourHours,
                        Estimation: jobdetails_partReplace[i].Estimation,
                    });
                }
                for (let i = 0; i < jobStop.length; i++) {
                    newJIDetailInfo.jobStop.push({
                        planStartDate: jobStop[i].planStartDate,
                        planStartTime: jobStop[i].planStartTime,
                        planRestartDate: jobStop[i].planRestartDate,
                        planRestartTime: jobStop[i].planRestartTime,
                        planChanges: jobStop[i].planChanges,
                        actualStartDate: jobStop[i].actualStartDate,
                        actualStartTime: jobStop[i].actualStartTime,
                        actualRestartDate: jobStop[i].actualRestartDate,
                        actualRestartTime: jobStop[i].actualRestartTime,
                        jobStoppageTime: jobStop[i].jobStoppageTime,
                        customerContactDate: jobStop[i].customerContactDate,
                        customerContactTime: jobStop[i].customerContactTime,
                        other: jobStop[i].other,
                        staffName: jobStop[i].staffName
                    })
                }
                for (let i = 0; i < additionalJobs.length; i++) {
                    newJIDetailInfo.additionalJobs.push({
                        details: additionalJobs[i].details,
                        partNo: additionalJobs[i].partNo,
                        quantity: additionalJobs[i].quantity,
                        labourHours: additionalJobs[i].labourHours,
                        Estimation: additionalJobs[i].Estimation,
                    })
                }
                newJIDetailInfo.save();

                const response = {
                    err: 200,
                    msg: "Info added successfully",
                    data: newJIDetailInfo.toJSON(),
                };
                res.status(200).json(response);

            }
        }

    } catch (error) {
        res.status(500).json({ err: 500, msg: error.toString() })
    }
}