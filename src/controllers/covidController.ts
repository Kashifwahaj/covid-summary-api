import { Request, Response } from "express";
import { getProcessedData } from "../utils";
const Covid = require('../models/covidModel');
const asyncHandler = require('express-async-handler');


type RequestQueryType = {
    c: string;
    dateFrom: string;
    dateTo: string;
    range: string;

}

// @desc    Get Goals
// @route   GET /api/covid/vaccine-summary
// @access  Public
const getVaccineSummary = asyncHandler(async (req: Request<any, any, any, RequestQueryType>, res: Response) => {

    const { dateFrom, dateTo, c, range }: RequestQueryType = req.query;
    // const data: SummaryType[] = await Covid.find({ "YearWeekISO": { "$gte": dateFrom ,"$lte":dateTo},"Region":c }).select(["NumberDosesReceived","YearWeekISO"]);
    const dbdata = await Covid.aggregate([
        { "$match": { "YearWeekISO": { "$gte": dateFrom, "$lt": dateTo }, "Region": c } },

        {
            "$group": {
                "_id": { YearWeekISO: "$YearWeekISO" },
                "NumberDosesReceived": { $sum: "$NumberDosesReceived" }

            }
        },
        { "$sort": { _id: 1 } },

    ]);

    const summary = getProcessedData(dbdata,range);

    
    
    res.status(200).json({ summary });
})


module.exports = { getVaccineSummary }