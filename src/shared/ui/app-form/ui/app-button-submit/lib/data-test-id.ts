import { DataTestIdConfig } from '@shared/config';
import { type TypeAppForm } from '@shared/ui/app-form/model/types';

export function dataTestId(typeButton: TypeAppForm): string {
    if (typeButton === 'authentification') {
        return DataTestIdConfig.LOGIN_SUBMIT_BUTTON;
    }
    if (typeButton === 'register') {
        return DataTestIdConfig.REGISTRATION_SUBMIT_BUTTON;
    }

    return DataTestIdConfig.CHANGE_SUBMIT_BUTTON;
}
