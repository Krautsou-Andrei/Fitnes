import { AppBackgroundBlur } from '@shared/ui';
import { AppResultCard } from './app-result-card';

import { ResultConfig } from '@shared/config';

import styles from './result-page.module.less';

type Props = {
    type:
        | 'error'
        | 'errorChangePassword'
        | 'errorCheckEmail'
        | 'errorCheckEmailNoExist'
        | 'errorLogin'
        | 'errorUserExist'
        | 'success'
        | 'successChangePassword';
};

export function ResultPage({ type }: Props) {
    const onClick = () => {
        console.log('type');
    };

    return (
        <AppBackgroundBlur>
            <AppResultCard
                title={ResultConfig[type].title}
                buttonBlock={ResultConfig[type].buttonBlock}
                buttonTitle={ResultConfig[type].buttonTitle}
                description={ResultConfig[type].description}
                classNameIcon={styles[type]}
                onClick={onClick}
            >
                {ResultConfig[type].icon}
            </AppResultCard>
        </AppBackgroundBlur>
    );
}
