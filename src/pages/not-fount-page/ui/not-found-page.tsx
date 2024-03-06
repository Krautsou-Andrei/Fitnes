import { Result } from 'antd';

import { NotFoundPageConfig } from '../config';

import { StatusError } from '@shared/api';
import { AppBackgroundBlur, AppButtonReturnToHome, AppGuestContent } from '@shared/ui';

export function NotFoundPage() {
    return (
        <AppBackgroundBlur>
            <AppGuestContent>
                <Result
                    status={StatusError.ERROR_404}
                    title={NotFoundPageConfig.TITLE}
                    subTitle={NotFoundPageConfig.SUB_TITLE}
                    extra={
                        <AppButtonReturnToHome>
                            {NotFoundPageConfig.BUTTON_TEXT}
                        </AppButtonReturnToHome>
                    }
                />
            </AppGuestContent>
        </AppBackgroundBlur>
    );
}
