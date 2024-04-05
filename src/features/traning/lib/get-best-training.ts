import type { Training, TrainingName } from '@entities/training';

export const getBestTraining = (trainingNames: TrainingName[], trainings: Training[]) => {
    const result: Record<string, number> = {};

    const allTrainigsList = Object.values(trainings).flat();

    allTrainigsList.forEach((training) => {
        if (training.training.exercises && training.training.exercises.length > 0) {
            const key = training.training.name;

            training.training.exercises.forEach((exercise) => {
                const value = exercise.replays * exercise.weight * exercise.approaches;

                result[key] = value;
            });
        }
    });

    if (!(Object.keys(result).length === 0)) {
        const [best] = Object.entries(result).sort((a, b) => b[1] - a[1])[0];
        const bestName = [best][0];

        const selectTraining = trainingNames.find((training) => training.name === bestName);

        return selectTraining?.key;
    }

    return '';
};
