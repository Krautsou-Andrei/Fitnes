import { AES } from 'crypto-js';
import { cryptPassword } from '@shared/lib/crypt-password';
import { config } from '@shared/lib/config';

jest.mock('crypto-js', () => ({
    AES: {
        encrypt: jest.fn().mockReturnValue({
            toString: () => 'encryptedPassword',
        }),
    },
}));

jest.mock('@shared/lib/config', () => ({
    config: {
        SECRET_KEY: 'secretKey',
    },
}));

describe('cryptPassword', () => {
    it('should encrypt the password using the SECRET_KEY', () => {
        const password = 'password';
        const encryptedPassword = cryptPassword(password);

        expect(AES.encrypt).toHaveBeenCalledWith(password, config.SECRET_KEY);
        expect(encryptedPassword).toBe('encryptedPassword');
    });
});
