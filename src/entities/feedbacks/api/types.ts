import { Id } from '@shared/types/app';

export type RequesFeedbackBody = {
    message: string;
    rating: number;
};

export type FeedbackDto = {
    id: Id;
    fullName: string;
    imageSrc: string;
    message: string;
    rating: number;
    createdAt: Date;
};
