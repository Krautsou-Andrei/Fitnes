import { BestExerciseDaysPeriod, TrainingsMiddleDays } from '../model/types';
import { DateFormatConfig } from '@shared/config';
import { formatDate } from '@shared/lib';

type SortNameDaysWeekParams = {
    trainings: TrainingsMiddleDays[] | BestExerciseDaysPeriod[];
    isDay?: boolean;
};

export function sortNameDaysWeek({ trainings, isDay }: SortNameDaysWeekParams) {
    const trainingsCopy = [...trainings];
    const order = [
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
        'Воскресенье',
    ];

    function compareDays(
        a: TrainingsMiddleDays | BestExerciseDaysPeriod,
        b: TrainingsMiddleDays | BestExerciseDaysPeriod,
    ) {
        return (
            order.indexOf(isDay ? a.date : formatDate(a.date, DateFormatConfig.FORMAT_DAY_WEEK)) -
            order.indexOf(isDay ? b.date : formatDate(b.date, DateFormatConfig.FORMAT_DAY_WEEK))
        );
    }

    const sortedData = trainingsCopy.sort(compareDays);

    return sortedData;
}
