import { type SessionLoginDto } from '../api/types';
import { type SessionLoginType } from '../model/types';

export function mapSessionLogin(dto: SessionLoginDto): SessionLoginType {
    return {
        accessToken: dto.accessToken,
    };
}
