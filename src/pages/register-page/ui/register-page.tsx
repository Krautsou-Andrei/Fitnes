import { AppAuthContent } from '@widgets/app-auth-content';

import { RegisterForm } from '@features/register';

import { AppBackgroundBlur } from '@shared/ui';

export function RegisterPage() {
    return (
        <AppBackgroundBlur>
            <AppAuthContent>
                <RegisterForm />
            </AppAuthContent>
        </AppBackgroundBlur>
    );
}
