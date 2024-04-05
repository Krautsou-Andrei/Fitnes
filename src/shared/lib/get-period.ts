export type Period = {
    title: string;
    period: number;
};

export const periodOptions: Period[] = [
    { title: 'Через 1 день', period: 1 },
    { title: 'Через 2 дня', period: 2 },
    { title: 'Через 3 дня', period: 3 },
    { title: 'Через 4 дня', period: 4 },
    { title: 'Через 5 дней', period: 5 },
    { title: 'Через 6 дней', period: 6 },
    { title: '1 раз в неделю', period: 7 },
];

export const getPeriodTitles = () =>
    periodOptions.map((option) => ({ label: option.title, value: option.title }));

export const getPeriodFindNumber = (period: number | null | undefined): string => {
    const foundOption = periodOptions.find((option) => option.period === period);

    return foundOption ? foundOption.title : '';
};

export const getPeriodFindTitle = (title: string): number | undefined => {
    const foundOption = periodOptions.find((option) => option.title === title);

    return foundOption ? foundOption.period : undefined;
};
