import moment, { Moment } from 'moment';

export function formatDate(date: Moment | string, format: string): string {
    return moment(date).format(format);
}

export function isOldDate(date?: Moment | string) {
    return Boolean(date && moment(date).isBefore(moment()));
}

export function weekDay(date: Moment | string) {
    return moment(date).weekday();
}
