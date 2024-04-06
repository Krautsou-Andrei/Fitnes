export type Exercises = {
    name: string;
    replays: number;
    weight: number;
    approaches: number;
    id?: string;
    isImplementation?: boolean;
};

export type Parametrs = {
    repeat?: boolean;
    period?: number;
    jointTraining?: boolean;
    participants?: [string];
};

export type TrainingType = {
    id: string;
    name: string;
    date: string;
    isImplementation: boolean;
    userId: string;
    exercises: Exercises[] | [];
    parameters?: Parametrs;
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
    parameters?: Parametrs;
};

export type Training = {
    date: string;
    training: TrainingType;
};

export type Pal = {
    id: string;
    name: string;
    trainingType: string;
    imageSrc: string | null;
    avgWeightInWeek: number;
    inviteId: string;
    status: string;
};

export type TrainingBestType = { trainingType?: string; status?: string | null };
