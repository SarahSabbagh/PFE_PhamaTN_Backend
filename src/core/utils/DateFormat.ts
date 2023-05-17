import dayjs, { Dayjs } from "dayjs";

export const DateFormatISO=(date:Dayjs)=>dayjs(date).format("YYYY-MM-DD")