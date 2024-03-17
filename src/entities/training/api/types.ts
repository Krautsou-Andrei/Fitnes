import { Exercises } from '../model/types';

export type RequestTrainingBody = {
    name: string;
    date: string;
    exercises: Exercises[] | [];
    isImplementation?: boolean;
    parameters?: {
        repeat: boolean;
        period: number;
        jointTraining: boolean;
        participants?: [string];
    };
};

export type RequestTrainingEditBody = {
    trainingId: string;
    body: RequestTrainingBody;
};

export type TrainingDto = {
    _id: string;
    name: string;
    date: string;
    isImplementation: boolean;
    userId: string;
    exercises: [
        {
            _id: string;
            name: string;
            replays: number;
            weight: number;
            approaches: number;
            isImplementation: boolean;
        },
    ];
    parameters?: {
        repeat: boolean;
        period: number;
        jointTraining: boolean;
        participants?: [string];
    };
};
export type TrainingNameDto = {
    name: string;
    key: string;
};
