import { Schema, model } from "mongoose";

export interface SummaryType {
    _id: string;
    YearWeekISO: string;
    FirstDose: number;
    FirstDoseRefused: string;
    SecondDose: number;
    DoseAdditional1: number;
    DoseAdditional2: number;
    UnknownDose: number;
    NumberDosesReceived: number;
    NumberDosesExported: string | number;
    Region: string;
    Population: string;
    ReportingCountry: string;
    TargetGroup: string;
    Vaccine: string;
    Denominator: number;
}


const covidSchema = new Schema<SummaryType>(

	{
		"_id": {
			"$oid": {
				"type": "ObjectId"
			}
		},
		"YearWeekISO": {
			"type": "String"
		},
		"FirstDose": {
			"$numberInt": {
				"type": "Date"
			}
		},
		"FirstDoseRefused": {
			"type": "String"
		},
		"SecondDose": {
			"$numberInt": {
				"type": "Date"
			}
		},
		"DoseAdditional1": {
			"$numberInt": {
				"type": "Date"
			}
		},
		"DoseAdditional2": {
			"$numberInt": {
				"type": "Date"
			}
		},
		"UnknownDose": {
			"$numberInt": {
				"type": "Date"
			}
		},
		"NumberDosesReceived": {
			"$numberInt": {
				"type": "Date"
			}
		},
		"NumberDosesExported": {
			"$numberInt": {
				"type": "Date"
			}
		},
		"Region": {
			"type": "String"
		},
		"Population": {
			"type": "String"
		},
		"ReportingCountry": {
			"type": "String"
		},
		"TargetGroup": {
			"type": "String"
		},
		"Vaccine": {
			"type": "String"
		},
		"Denominator": {
			"$numberInt": {
				"type": "String"
			}
		}
	}

);




module.exports = model<SummaryType>("Covid", covidSchema);



export function aggregate(props:any):[] {
	throw new Error("Function not implemented.");
}

