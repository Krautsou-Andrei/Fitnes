import { Training } from '@entities/training';

export type TrainingsAchievementsDay = Record<string, Training[]>;

export type TrainingsMiddleDays = {
    date: string;
    value: number;
};

export type BestExerciseDaysPeriod = {
    date: string;
    value: string;
};

export type ExercisesWeek = {
    type: string;
    value: number;
};

export const enum AchievementsInfoConfig {
    APPROACHES = 'approaches',
    ALL_VALUE = 'allValue',
    DAY_VALUE = 'dayValue',
    REPLAYS = 'replays',
}

export type InfoAchievements = {
    [key in AchievementsInfoConfig]: number;
};

export type BestTraining = {
    [key: string]: number;
};

export type BestExercise = BestTraining;

export type BestExercisesDays = {
    [key: string]: BestExercise;
};
