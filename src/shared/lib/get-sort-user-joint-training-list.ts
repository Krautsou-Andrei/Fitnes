import { Pal } from '@entities/training';

export const getSortUserJointTrainingList = (pals: Pal[]) => {
    if (!pals.length) {
        return [];
    }

    const sortPals = [...pals].sort((a, b) => {
        const statusOrder: Record<string, number> = {
            accepted: 0,
            pending: 1,
            null: 2,
            rejected: 3,
        };

        const statusOne = a.status || 'null';
        const statusTwo = b.status || 'null';

        const [firstNameOne, lastNameOne = ''] = (a.name || '').toLowerCase().split(' ');
        const [firstNameTwo, lastNameTwo = ''] = (b.name || '').toLowerCase().split(' ');

        if (statusOne !== statusTwo) {
            return statusOrder[statusOne] - statusOrder[statusTwo];
        }

        if (a.name === '' || b.name === '') {
            return statusOrder[statusOne];
        }

        const result = firstNameOne.charCodeAt(0) - firstNameTwo.charCodeAt(0);

        return result ? firstNameOne.localeCompare(firstNameTwo) : lastNameOne.localeCompare(lastNameTwo);
    });

    return sortPals;
};
