import { Training } from '@entities/training/@ex/invite';

export type Invite = {
    id: string;
    from: {
        id: string;
        firstName: string;
        lastName: string;
        imageSrc: string;
    };
    training: Training;
    status: string;
    createdAt: string;
};
