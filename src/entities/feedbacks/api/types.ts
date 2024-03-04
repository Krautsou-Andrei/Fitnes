import { Id } from '@shared/types/app';

export type RequesFeedbackBody = {
    message: string;
    rating: number;
};

export type FeedbackDto = {
    id: Id;
    fullName: string | null;
    imageSrc: string | null;
    message: string | null;
    rating: number;
    createdAt: Date;
};
