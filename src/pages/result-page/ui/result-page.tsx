import { Button } from 'antd';
import { useLocation } from 'react-router-dom';

import { resultConfig } from '../config/result-config';

import { AppResultCard, ResultPageConfig, useResultButtonClick } from '@features/result';

import { AppBackgroundBlur, AppGuestContent } from '@shared/ui';

import styles from './result-page.module.less';

export function ResultPage() {
    const location = useLocation();
    const lastPartUrl = location.pathname.split('/').at(-1);
    const type = lastPartUrl as ResultPageConfig;

    const typeOnClick = useResultButtonClick(type);

    const onClick = () => {
        typeOnClick && typeOnClick();
    };

    return (
        <AppBackgroundBlur>
            <AppGuestContent className={styles['result-page']}>
                <div></div>
                <AppResultCard
                    title={resultConfig[type].title}
                    icon={resultConfig[type].icon}
                    description={resultConfig[type].description}
                    className={styles[`${type}-content`]}
                    classNameIcon={styles[type]}
                >
                    <Button
                        type='primary'
                        className={styles.button}
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
