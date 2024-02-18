import { type SessionChangePasswordDto } from '../api/types';
import { type SessionChangePasswordType } from '../model/types';

export function mapSessionChangePassword(dto: SessionChangePasswordDto): SessionChangePasswordType {
    return {
        message: dto.message,
    };
}
