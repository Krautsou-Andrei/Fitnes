export type RequesFeedbackBody = {
    message: string;
    rating: number;
};

export type FeedbackDto = {
    fullName: string;
    imageSrc: string;
    message: string;
    rating: number;
    createdAt: Date;
};
