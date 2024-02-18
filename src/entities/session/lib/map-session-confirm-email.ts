import { type SessionConfirmEmailDto } from '../api/types';
import { type SessionConfirmEmailType } from '../model/types';

export function mapSessionConfirmEmail(dto: SessionConfirmEmailDto): SessionConfirmEmailType {
    return {
        email: dto.email,
        message: dto.message,
    };
}
