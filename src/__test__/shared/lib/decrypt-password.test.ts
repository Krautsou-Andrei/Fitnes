import { AES } from 'crypto-js';
import { decryptPassword } from '../../../shared/lib/decrypt-password';
import { config } from '../../../shared/lib/config';

jest.mock('crypto-js', () => ({
    AES: {
        decrypt: jest.fn().mockReturnValue({
            toString: jest.fn().mockReturnValue('decryptedPassword'),
        }),
    },
    enc: {
        Utf8: {},
    },
}));

jest.mock('../../../shared/lib/config', () => ({
    config: {
        SECRET_KEY: 'secretKey',
    },
}));

describe('decryptPassword', () => {
    it('should decrypt the encrypted password using the SECRET_KEY', () => {
        const encryptedPassword = 'encryptedPassword';
        const decryptedPassword = decryptPassword(encryptedPassword);

        expect(AES.decrypt).toHaveBeenCalledWith(encryptedPassword, config.SECRET_KEY);
        expect(decryptedPassword).toBe('decryptedPassword');
    });
});
