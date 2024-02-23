import { Button } from 'antd';

import { resultConfig } from '../config/result-config';

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
                    title={resultConfig[type].title}
                    icon={resultConfig[type].icon}
                    description={resultConfig[type].description}
                    className={styles[`${type}-content`]}
                    classNameIcon={styles[type]}
                >
                    <Button
                        type='primary'
                        onClick={onClick}
                        block={resultConfig[type].buttonBlock}
                        size='large'
                        data-test-id={resultConfig[type].testId}
                    >
                        {resultConfig[type].buttonTitle}
                    </Button>
                </AppResultCard>
            </AppGuestContent>
        </AppBackgroundBlur>
    );
}
