import { DateFormatConfig } from '@shared/config';
import { PickerLocale } from 'antd/es/date-picker/generatePicker';

export const locale: PickerLocale = {
    lang: {
        locale: 'ru_RU',
        placeholder: 'Выберите дату',
        rangePlaceholder: ['Начальная дата', 'Конечная дата'],
        today: 'Сегодня',
        now: 'Сейчас',
        backToToday: 'Вернуться к сегодняшнему дню',
        ok: 'ОК',
        clear: 'Очистить',
        month: 'Месяц',
        year: 'Год',
        timeSelect: 'Выбрать время',
        dateSelect: 'Выбрать дату',
        monthSelect: 'Выберите месяц',
        yearSelect: 'Выберите год',
        decadeSelect: 'Выберите десятилетие',
        yearFormat: DateFormatConfig.LANG_FORMAT_YEAR,
        dateFormat: DateFormatConfig.LANG_FORMAT_DATE,
        dayFormat: DateFormatConfig.LANG_FORMAT_DAY,
        dateTimeFormat: `${DateFormatConfig.LANG_FORMAT_DATE} ${DateFormatConfig.FORMAT_DATE_TIME}`,
        monthFormat: DateFormatConfig.LANG_FORMAT_MONTH,
        monthBeforeYear: true,
        previousMonth: 'Предыдущий месяц (PageUp)',
        nextMonth: 'Следующий месяц (PageDown)',
        previousYear: 'Предыдущий год (Control + влево)',
        nextYear: 'Следующий год (Control + вправо)',
        previousDecade: 'Предыдущее десятилетие',
        nextDecade: 'Следующее десятилетие',
        previousCentury: 'Предыдущий век',
        nextCentury: 'Следующий век',
        shortWeekDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        shortMonths: [
            'Янв',
            'Фев',
            'Мар',
            'Апр',
            'Май',
            'Июн',
            'Июл',
            'Авг',
            'Сен',
            'Окт',
            'Ноя',
            'Дек',
        ],
    },
    timePickerLocale: {
        placeholder: 'Выберите время',
    },
    dateFormat: DateFormatConfig.FORMAT_DD_MM_YYYY_DASHED,
    dateTimeFormat: `${DateFormatConfig.FORMAT_DD_MM_YYYY_DASHED} ${DateFormatConfig.FORMAT_DATE_TIME}`,
    weekFormat: DateFormatConfig.FORMAT_WEEK,
    monthFormat: DateFormatConfig.FORMAT_MONTH,
};
