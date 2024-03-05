import { showErrorForDevelop } from '../../../shared/lib/show-error-for-develop';

jest.mock('../../../shared/lib/config', () => ({
    config: {
        MODE_DEV: true,
    },
}));

describe('showErrorForDevelop', () => {
    beforeEach(() => {
        console.error = jest.fn();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should log the name and error when MODE_DEV is true', () => {
        const name = 'Test Error';
        const error = new Error('Test message');

        showErrorForDevelop(name, error);

        expect(console.error).toHaveBeenCalledWith(name, error);
    });
});
