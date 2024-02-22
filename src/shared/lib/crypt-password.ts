import { AES } from 'crypto-js';

import { config } from './config';
import type { Password } from '@shared/types/app';

export function cryptPassword(password: Password): Password {
    return AES.encrypt(password, config.SECRET_KEY).toString();
}
