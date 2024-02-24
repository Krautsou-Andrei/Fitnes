import { AES, enc } from 'crypto-js';

import { config } from './config';
import type { Password } from '@shared/types/app';

export function decryptPassword(cryptPassword: Password): Password {
    const decryptedBytes = AES.decrypt(cryptPassword, config.SECRET_KEY);
    return decryptedBytes.toString(enc.Utf8);
}
