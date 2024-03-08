import moment, { Moment } from 'moment';

export function formatDate(date: Moment | string, format: string): string {
    return moment(date).format(format);
}

export const isOldDate = (date?: Moment | string) =>
    Boolean(date && moment(date).isBefore(moment()));
