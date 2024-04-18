import { AchievementsConfig } from '../config';
import { TrainingsMiddleDays } from '../model/types';

import { DateFormatConfig } from '@shared/config';
import { formatDate } from '@shared/lib';

export function getTitleWeek(trainings: TrainingsMiddleDays[]) {
    return `${AchievementsConfig.TITLE_TABLE_WEEK} ${formatDate(
        trainings[0].date,
        DateFormatConfig.FORMAT_DD_MM_DOT,
    )}-${formatDate(trainings[trainings.length - 1].date, DateFormatConfig.FORMAT_DD_MM_DOT)}`;
}
