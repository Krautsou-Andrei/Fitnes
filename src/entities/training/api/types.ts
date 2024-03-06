export type RequestTrainingBody = {
    name: 'string';
    date: Date;
    isImplementation: boolean;
    parameters: {
        repeat: boolean;
        period: number;
        jointTraining: boolean;
        participants?: ['string'];
    };
    exercises: [
        {
            name: 'string';
            replays: number;
            weight: number;
            approaches: number;
            isImplementation: boolean;
        },
    ];
};

export type TrainingDto = {
    _id: 'string';
    name: 'string';
    date: Date;
    isImplementation: boolean;
    userId: 'string';
    parameters: {
        repeat: boolean;
        period: number;
        jointTraining: boolean;
        participants?: ['string'];
    };
    exercises: [
        {
            _id: 'string';
            name: 'string';
            replays: number;
            weight: number;
            approaches: number;
            isImplementation: boolean;
        },
    ];
};
