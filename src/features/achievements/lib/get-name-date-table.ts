import { DateFormatConfig } from '@shared/config';
import { formatDate } from '@shared/lib';

type GetNameDateTableParams = {
    date: string;
    isDay?: boolean;
    isDate?: boolean;
};

export function getNameDateTable({ date, isDate, isDay }: GetNameDateTableParams) {
    return isDate
        ? formatDate(date, DateFormatConfig.FORMAT_DAY_WEEK)
        : isDay
        ? date
        : formatDate(date, DateFormatConfig.FORMAT_DD_MN_YYYY_DOT);
}
