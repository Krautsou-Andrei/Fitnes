import { Id } from '@shared/types/app';

export type FeedbackType = {
    id: Id;
    fullName: string | null;
    imageSrc: string | null;
    message: string | null;
    rating: number;
    createdAt: Date;
};
