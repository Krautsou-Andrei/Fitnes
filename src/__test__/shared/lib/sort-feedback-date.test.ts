import { sortFeedbackDate } from '../../../shared/lib/sort-feedback-date';
import { FeedbackType } from '../../../entities/feedbacks/model/types';

describe('sortFeedbackDate', () => {
    it('should sort feedbacks by createdAt date in descending order', () => {
        const feedbacks: FeedbackType[] = [
            {
                id: 1,
                createdAt: '2022-01-01T01:58:00Z' as unknown as Date,
                fullName: null,
                imageSrc: null,
                message: null,
                rating: 1,
            },
            {
                id: 2,
                createdAt: '2022-01-01T02:03:00Z' as unknown as Date,
                fullName: null,
                imageSrc: null,
                message: null,
                rating: 1,
            },
            {
                id: 3,
                createdAt: '2022-01-01T01:59:00Z' as unknown as Date,
                fullName: null,
                imageSrc: null,
                message: null,
                rating: 1,
            },
        ];

        const sortedFeedbacks = sortFeedbackDate({ feedbacks });

        expect(sortedFeedbacks).toEqual([
            {
                id: 2,
                createdAt: '2022-01-01T02:03:00Z',
                fullName: null,
                imageSrc: null,
                message: null,
                rating: 1,
            },
            {
                id: 3,
                createdAt: '2022-01-01T01:59:00Z',
                fullName: null,
                imageSrc: null,
                message: null,
                rating: 1,
            },
            {
                id: 1,
                createdAt: '2022-01-01T01:58:00Z',
                fullName: null,
                imageSrc: null,
                message: null,
                rating: 1,
            },
        ]);
    });
});
