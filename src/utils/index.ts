export function chunkify(a: [], n: number, balanced: boolean) {

    if (n < 2)
        return [a];

    var len = a.length,
        out = [],
        i = 0,
        size;

    if (len % n === 0) {
        size = Math.floor(len / n);
        while (i < len) {
            out.push(a.slice(i, i += size));
        }
    }

    else if (balanced) {
        while (i < len) {
            size = Math.ceil((len - i) / n--);
            out.push(a.slice(i, i += size));
        }
    }

    else {

        n--;
        size = Math.floor(len / n);
        if (len % size === 0)
            size--;
        while (i < size * n) {
            out.push(a.slice(i, i += size));
        }
        out.push(a.slice(size * n));

    }

    return out;
}


export function splitArrayIntoChunksOfLen(arr: any[], len: number) {
    var chunks = [], i = 0, n = arr.length;
    while (i < n) {
        chunks.push(arr.slice(i, i += len + 1));
    }
    return chunks;
}

type midData = {
    _id: {
        YearWeekISO: string
    },
    NumberDosesReceived: string
}

type SummaryDataType = {
    weekStart: string,
    weekEnd: string,
    NumberDosesReceived: number
}


export function getProcessedData(dbdata: [], range: string): SummaryDataType[] {



    const newdata = dbdata.map((e: midData) => {
        return {
            NumberDosesReceived: e.NumberDosesReceived,
            YearWeekISO: e._id.YearWeekISO,
        }
    });
    if (newdata.length > 0) {

        const newdata2 = splitArrayIntoChunksOfLen(newdata, parseInt(range));

        const data: SummaryDataType[] = newdata2.map((item: any) => {
            return {
                weekStart: item[0].YearWeekISO,
                weekEnd: item[item.length - 1].YearWeekISO,
                NumberDosesReceived: item.reduce((a: number, b: any) => a + b.NumberDosesReceived, 0)
            }
        })
        return data;
    }
    return [];


}