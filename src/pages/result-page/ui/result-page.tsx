import { Button } from 'antd';

import { useResultPage } from './hooks/use-result-page';
import { resultConfig } from '../config/result-config';

import { AppResultCard } from '@features/result';

import { AppBackgroundBlur, AppGuestContent } from '@shared/ui';

import styles from './result-page.module.less';

export function ResultPage() {
    const { description, onClick, type } = useResultPage();

    return (
        <AppBackgroundBlur>
            <AppGuestContent className={styles['result-page']}>
                <div></div>
                <AppResultCard
                    title={resultConfig[type].title}
                    icon={resultConfig[type].icon}
                    description={description}
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
