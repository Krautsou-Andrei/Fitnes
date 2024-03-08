export type Exercises = {
    id?: string;
    name: string;
    replays: number;
    weight: number;
    approaches: number;
    isImplementation?: boolean;
};

export type TrainingType = {
    id: string;
    name: string;
    date: string;
    isImplementation: boolean;
    userId: string;
    parameters:
        | {
              repeat: boolean;
              period: number;
              jointTraining: boolean;
              participants?: [string];
          }
        | undefined;
    exercises: Exercises[] | [];
};

export type TrainingName = {
    name: string;
    key: string;
};

export type CreateTraining = {
    name: string;
    date: string;
    exercises: Exercises[] | [];
};

export type Training = {
    date: string;
    traning: TrainingType;
};
