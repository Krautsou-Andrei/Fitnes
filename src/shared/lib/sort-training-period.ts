import type { Training } from '@entities/training';

export function sortTrainingPeriod(trainings: Training[]) {
    return [...trainings].sort((a, b) => {
        const periodOne = a.training.parameters?.period ?? 0;
        const periodTwo = b.training.parameters?.period ?? 0;

        return periodOne - periodTwo;
    });
}
