import { AppResultCard, useResultButtonClick } from '@features/result';

import { AppBackgroundBlur } from '@shared/ui';
import { ResultConfig } from '@shared/config';
import { ResultPageType } from '@shared/types/app';

import styles from './result-page.module.less';

export function ResultPage({ type }: ResultPageType) {
    const typeOnClick = useResultButtonClick({ type });

    const onClick = () => {
        typeOnClick && typeOnClick();
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
