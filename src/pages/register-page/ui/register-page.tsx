import { AppAuthContent } from '@widgets/app-auth-content';

import { RegisterForm } from '@features/register';

import { AppBackgroundBlur, AppGuestContent } from '@shared/ui';

export function RegisterPage() {
    return (
        <AppBackgroundBlur>
            <AppGuestContent>
                <AppAuthContent>
                    <RegisterForm />
                </AppAuthContent>
            </AppGuestContent>
        </AppBackgroundBlur>
    );
}
