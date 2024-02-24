import { type TypeAppForm } from '@shared/ui/app-form/model/types';

export function dataTestId(typeButton: TypeAppForm): string {
    if (typeButton === 'authentification') {
        return 'login-submit-button';
    }
    if (typeButton === 'register') {
        return 'registration-submit-button';
    }

    return 'change-submit-button';
}
