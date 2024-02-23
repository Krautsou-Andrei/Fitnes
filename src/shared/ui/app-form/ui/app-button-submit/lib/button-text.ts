import { LayoutConfig } from '@shared/config';
import type { TypeAppForm } from '@shared/ui/app-form/model/types';

export function buttonText(typeButton: TypeAppForm): string {
    if (typeButton === 'register' || typeButton === 'authentification') {
        return LayoutConfig.BUTTON_REGISTER;
    } else if (typeButton === 'confirm') {
        return LayoutConfig.BUTTON_SAVE_NEW_PASSWORD;
    }

    return '';
}
