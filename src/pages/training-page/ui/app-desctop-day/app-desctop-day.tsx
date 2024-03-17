import clsn from 'classnames';
import { type Moment } from 'moment';

import type { Training } from '@entities/training';
import { AppTrainingDay } from '@shared/ui';

type DesctopDayProps = {
    date: Moment;
    isToday: boolean;
    onChangeCell: (date: Moment) => void;
    trainingsDay: Training[];
};

export function AppDesctopDay({ date, isToday, onChangeCell, trainingsDay }: DesctopDayProps) {
    return (
        <div
            className={clsn('ant-picker-cell-inner ant-picker-calendar-date', {
                ['ant-picker-calendar-date-today']: isToday,
            })}
            onClick={(e) => {
                e.stopPropagation();
                onChangeCell(date);
            }}
        >
            <div className='ant-picker-calendar-date-value'>
                {date.date().toString().padStart(2, '0')}
            </div>
            <div className='ant-picker-calendar-date-content'>
                {trainingsDay?.map((item) => (
                    <AppTrainingDay
                        key={item.training.id}
                        name={item.training.name}
                        isImplementation={item.training.isImplementation}
                    />
                ))}
            </div>
        </div>
    );
}
