import { TrainingDto } from '@entities/training/@ex/invite';

export type InviteDto = {
    _id: string;
    from: {
        _id: string;
        firstName: string;
        lastName: string;
        imageSrc: string;
    };
    training: TrainingDto;
    status: string;
    createdAt: string;
};

export type RequestInviteBody = {
    to: string;
    trainingId: string;
};

export type RequestSendAnswerBody = {
    id: string;
    status: string;
};

export type RequestRejectSend = {
    id: string;
    status: string;
};
