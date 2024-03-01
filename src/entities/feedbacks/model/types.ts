import { Id } from '@shared/types/app';

export type FeedbackType = {
    id: Id;
    fullName: string;
    imageSrc: string;
    message: string;
    rating: number;
    createdAt: Date;
};
