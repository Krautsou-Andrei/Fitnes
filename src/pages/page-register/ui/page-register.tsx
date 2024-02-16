import { AppAuthContent } from '@widgets/app-auth-content';
import { AppBackgroundBlur, AppForm } from '@shared/ui';

export function PageRegister() {
    return (
        <AppBackgroundBlur>
            <AppAuthContent>
                <AppForm />
            </AppAuthContent>
        </AppBackgroundBlur>
    );
}
