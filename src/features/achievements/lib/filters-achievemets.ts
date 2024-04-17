import { formatDate } from '@shared/lib';
import type {
    BestExercise,
    BestExercisesDays,
    BestTraining,
    ExercisesWeek,
    InfoAchievements,
    TrainingsAchievementsDay,
    TrainingsMiddleDays,
} from '../model/types';

import { AchievementsDefaultConfig, AchievementsKeyConfig, DateFormatConfig } from '@shared/config';

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
        const trainingExercises: BestExercise = {};
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
                    filter === AchievementsKeyConfig.BUTTON_VALUE_ALL
                ) {
                    bestExercise[exercise.name] = bestExercise[exercise.name]
                        ? bestExercise[exercise.name] + 1
                        : 1;

                    trainingExercises[exercise.name] = trainingExercises[exercise.name]
                        ? trainingExercises[exercise.name] + 1
                        : 1;

                    totalApproaches += exercise.approaches;
                    totalReplays += exercise.replays;
                    totalValue += exercise.approaches * exercise.replays * exercise.weight;
                    totalCount++;
                }
            });
        });

        const currentDay = formatDate(trainingDay, DateFormatConfig.FORMAT_DAY_WEEK);
        bestExercisesDays[currentDay] = bestExercisesDays[currentDay]
            ? Object.keys(bestExercisesDays[currentDay]).reduce(
                  (result, key) => {
                      result[key] = (result[key] || 0) + bestExercisesDays[currentDay][key];
                      return result;
                  },
                  { ...trainingExercises },
              )
            : { ...trainingExercises };

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
    const bestExercisesPeriod = getBestArray(bestExercisesDays);
    const bestExercisesDaysArray = getBestExercisesDaysArray(bestExercisesDays);
    const filterTrainingsMonth = getFilterTrainingsMonth(filterTrainings);
    const isEmptyTraining = filterTrainings.every((item) => item.value === 0);

    return {
        bestNameExercise,
        bestNameTraining,
        bestExercisesDaysArray,
        bestExercisesPeriod,
        filterTrainings,
        filterTrainingsMonth,
        infoTrainings,
        isEmptyTraining,
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

function getBestExersice(Names: { [key: string]: number }): ExercisesWeek {
    if (Object.keys(Names).length !== 0) {
        return Object.entries(Names).reduce(
            (prev, curr) => {
                if (curr[1] > prev.value) {
                    return { type: curr[0], value: curr[1] };
                } else {
                    return prev;
                }
            },
            { type: '', value: -Infinity },
        );
    }
    return { type: '', value: -Infinity };
}

function getBestArray(bestObject: { [key: string]: BestExercise }): ExercisesWeek[] {
    const bestArray: ExercisesWeek[] = [];

    if (Object.keys(bestObject).length !== 0) {
        const exerciseMap: { [key: string]: ExercisesWeek } = {};

        Object.values(bestObject).forEach((exercise) => {
            const bestExercise = getBestExersice(exercise);

            if (bestExercise.value !== -Infinity) {
                const { type, value } = bestExercise;

                if (exerciseMap[type]) {
                    exerciseMap[type].value += value;
                } else {
                    exerciseMap[type] = { type, value };
                }
            }
        });

        bestArray.push(...Object.values(exerciseMap));
        bestArray.sort((a, b) => b.value - a.value);
    }

    return bestArray;
}

function getBestExercisesDaysArray(object: BestExercisesDays) {
    const result = Object.entries(object).map(([day, innerObj]) => {
        if (Object.keys(innerObj).length) {
            const maxKey = Object.keys(innerObj).reduce((a, b) =>
                innerObj[a] >= innerObj[b] ? a : b,
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

function getFilterTrainingsMonth(trainings: TrainingsMiddleDays[]) {
    const chunkSize = AchievementsDefaultConfig.NUMBERS_DAYS_WEEK;

    const chunkedArray = trainings.reduce((resultArray: TrainingsMiddleDays[][], item, index) => {
        const chunkIndex = Math.floor(index / chunkSize);

        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
        }

        resultArray[chunkIndex].push(item);

        return resultArray;
    }, []);

    return chunkedArray;
}
