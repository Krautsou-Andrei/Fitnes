import { Button } from 'antd';

import { ResultConfig } from '../config/result-config';

import { AppResultCard, useResultButtonClick } from '@features/result';

import { AppBackgroundBlur, AppGuestContent } from '@shared/ui';
import type { ResultPageType } from '@shared/types/app';

import styles from './result-page.module.less';

export function ResultPage({ type }: ResultPageType) {
    const typeOnClick = useResultButtonClick({ type });

    const onClick = () => {
        typeOnClick && typeOnClick();
    };

    return (
        <AppBackgroundBlur>
            <AppGuestContent>
                <AppResultCard
                    title={ResultConfig[type].title}
                    icon={ResultConfig[type].icon}
                    description={ResultConfig[type].description}
                    className={styles[`${type}-content`]}
                    classNameIcon={styles[type]}
                >
                    <Button
                        type='primary'
                        onClick={onClick}
                        block={ResultConfig[type].buttonBlock}
                        size='large'
                        data-test-id={ResultConfig[type].testId}
                    >
                        {ResultConfig[type].buttonTitle}
                    </Button>
                </AppResultCard>
            </AppGuestContent>
        </AppBackgroundBlur>
    );
}
