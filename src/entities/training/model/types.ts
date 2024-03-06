export type Exercises = {
    id: 'string';
    name: 'string';
    replays: number;
    weight: number;
    approaches: number;
    isImplementation: boolean;
};

export type TrainingType = {
    id: 'string' | undefined;
    name: 'string' | undefined;
    date: Date | undefined;
    isImplementation: boolean | undefined;
    userId: 'string' | undefined;
    parameters:
        | {
              repeat: boolean;
              period: number;
              jointTraining: boolean;
              participants?: ['string'];
          }
        | undefined;
    exercises: Exercises[] | undefined;
};
