import moment, { Moment } from 'moment';
import 'moment/locale/ru';

moment.updateLocale('ru', {
    weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
});

export function formatDate(date: Moment | string, format: string): string {
    return moment(date).locale('ru').format(format);
}

export function isOldDate(date?: Moment | string) {
    return Boolean(date && moment(date).isBefore(moment()));
}

export function weekDay(date: Moment | string) {
    return moment(date).weekday();
}
