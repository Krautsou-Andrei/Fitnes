import { Exercises } from '../model/types';

export type RequestTrainingBody = {
    name: string;
    date: string;
    isImplementation?: boolean;
    parameters?: {
        repeat: boolean;
        period: number;
        jointTraining: boolean;
        participants?: [string];
    };
    exercises: Exercises[] | [];
};

export type TrainingDto = {
    _id: string;
    name: string;
    date: string;
    isImplementation: boolean;
    userId: string;
    parameters: {
        repeat: boolean;
        period: number;
        jointTraining: boolean;
        participants?: [string];
    };
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
};
export type TrainingNameDto = {
    name: string;
    key: string;
};
