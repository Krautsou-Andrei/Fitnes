import { LayoutConfig } from '@shared/config';
import type { TypeAppForm } from '@shared/ui/app-form/model/types';

export function buttonText(typeButton: TypeAppForm): string {
    if (typeButton === 'register') {
        return LayoutConfig.BUTTON_REGISTER_GOOGLE;
    }
    return LayoutConfig.BUTTON_AUTHENTIFICATION_COOGLE;
}
