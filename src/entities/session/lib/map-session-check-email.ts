import { type SessionCheckEmailDto } from '../api/types';
import { type SessionCheckEmaiType } from '../model/types';

export function mapSessionCheckEmail(dto: SessionCheckEmailDto): SessionCheckEmaiType {
    return {
        email: dto.email,
        message: dto.message,
    };
}
