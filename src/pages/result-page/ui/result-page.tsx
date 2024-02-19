import { Button } from 'antd';

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
                icon={ResultConfig[type].icon}
                description={ResultConfig[type].description}
                classNameIcon={styles[type]}
            >
                <Button
                    type='primary'
                    onClick={onClick}
                    block={ResultConfig[type].buttonBlock}
                    size='large'
                >
                    {ResultConfig[type].buttonTitle}
                </Button>
            </AppResultCard>
        </AppBackgroundBlur>
    );
}
