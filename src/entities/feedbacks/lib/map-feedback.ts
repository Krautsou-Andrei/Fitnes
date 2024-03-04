import { FeedbackDto } from '../api/types';
import { FeedbackType } from '../model/types';

export function mapFeedback(dto: FeedbackDto): FeedbackType {
    return {
        id: dto.id,
        fullName: dto.fullName,
        imageSrc: dto.imageSrc,
        message: dto.message,
        rating: dto.rating,
        createdAt: dto.createdAt,
    };
}
