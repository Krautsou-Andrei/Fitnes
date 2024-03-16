export type Exercises = {
    name: string;
    replays: number;
    weight: number;
    approaches: number;
    id?: string;
    isImplementation?: boolean;
};

export type TrainingType = {
    id: string;
    name: string;
    date: string;
    isImplementation: boolean;
    userId: string;
    exercises: Exercises[] | [];
    parameters?: {
        repeat: boolean;
        period: number;
        jointTraining: boolean;
        participants?: [string];
    };
};

export type TrainingName = {
    name: string;
    key: string;
};

export type CreateTraining = {
    id: string;
    name: string;
    date: string;
    isImplementation: boolean;
    exercises: Exercises[];
};

export type Training = {
    date: string;
    training: TrainingType;
};
