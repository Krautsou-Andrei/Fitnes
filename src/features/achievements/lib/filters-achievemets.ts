import type {
    BestExercise,
    BestExercisesDays,
    BestTraining,
    InfoAchievements,
    TrainingsAchievementsDay,
    TrainingsMiddleDays,
} from '../model/types';

import { AchievementsDefaultConfig } from '@shared/config';

type GetInfoAchievementsParams = {
    trainings: TrainingsAchievementsDay;
    filter: string;
    quantityDays: number;
};

export function filtersAchievements({
    trainings,
    filter,
    quantityDays,
}: GetInfoAchievementsParams) {
    const filterTrainings: TrainingsMiddleDays[] = [];
    const infoTrainingAchievements: Partial<InfoAchievements>[] = [];
    const bestTraining: BestTraining = {};
    const bestExercise: BestExercise = {};
    const bestExercisesDays: BestExercisesDays = {};

    Object.entries(trainings).forEach(([trainingDay, trainings]) => {
        let totalApproaches = 0;
        let totalCount = 0;
        let totalReplays = 0;
        let totalValue = 0;

        trainings.forEach((training) => {
            bestTraining[training.training.name] = bestTraining[training.training.name]
                ? bestTraining[training.training.name] + 1
                : 1;

            training.training.exercises.forEach((exercise) => {
                if (
                    training.training.name === filter ||
                    filter === AchievementsDefaultConfig.BUTTON_VALUE_ALL
                ) {
                    bestExercise[exercise.name] = bestExercise[exercise.name]
                        ? bestExercise[exercise.name] + 1
                        : 1;

                    totalApproaches += exercise.approaches;
                    totalReplays += exercise.replays;
                    totalValue += exercise.approaches * exercise.replays * exercise.weight;
                    totalCount++;
                }
            });
        });

        bestExercisesDays[trainingDay] = bestExercisesDays[trainingDay]
            ? Object.keys(bestExercisesDays[trainingDay]).reduce(
                  (result, key) => {
                      result[key] = (result[key] || 0) + bestExercisesDays[trainingDay][key];
                      return result;
                  },
                  { ...bestExercise },
              )
            : { ...bestExercise };

        filterTrainings.push({
            date: trainingDay,
            value: totalCount !== 0 ? Number((totalValue / totalCount).toFixed(1)) : 0,
        });

        infoTrainingAchievements.push({
            approaches: totalApproaches,
            allValue: totalValue,
            replays: totalReplays,
        });
    });

    let totalDayValue = 0;

    const sumReducer = (sum: number, value?: number): number => {
        if (value !== undefined) {
            return sum + value;
        }
        return sum;
    };

    infoTrainingAchievements.forEach((training) => {
        if (training.allValue !== 0) {
            totalDayValue += training.allValue ?? 0;
        }
    });

    const infoTrainings: InfoAchievements = {
        allValue: totalDayValue,
        approaches: infoTrainingAchievements.reduce(
            (sum, training) => sumReducer(sum, training.approaches),
            0,
        ),
        dayValue: quantityDays !== 0 ? Number((totalDayValue / quantityDays).toFixed(1)) : 0,
        replays: infoTrainingAchievements.reduce(
            (sum, training) => sumReducer(sum, training.replays),
            0,
        ),
    };
    const bestNameTraining = getBestName(bestTraining);
    const bestNameExercise = getBestName(bestExercise);
    const bestExercisesPeriod = getBestArray(bestExercise);
    const bestExercisesDaysArray = getBestExercisesDaysArray(bestExercisesDays);

    return {
        bestNameExercise,
        bestNameTraining,
        bestExercisesDaysArray,
        bestExercisesPeriod,
        filterTrainings,
        infoTrainings,
    };
}

function getBestName(Names: { [key: string]: number }) {
    if (Object.keys(Names).length !== 0) {
        const [best] = Object.entries(Names).sort((a, b) => b[1] - a[1])[0];
        const bestName = [best][0];
        return bestName;
    }
    return '';
}

function getBestArray(bestObject: { [key: string]: number }) {
    if (Object.keys(bestObject).length !== 0) {
        const bestArray = Object.entries(bestObject).map(([key, value]) => ({
            type: key,
            value: value,
        }));
        return bestArray;
    }
    return [];
}

function getBestExercisesDaysArray(object: BestExercisesDays) {
    const result = Object.entries(object).map(([day, innerObj]) => {
        if (Object.keys(innerObj).length) {
            const maxKey = Object.keys(innerObj).reduce((a, b) =>
                innerObj[a] > innerObj[b] ? a : b,
            );
            return {
                date: day,
                value: maxKey,
            };
        }
        return {
            date: day,
            value: '',
        };
    });
    return result;
}
