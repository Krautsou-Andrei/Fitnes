// import { Button } from 'antd';
import { LayoutConfig } from '@shared/config';

import styles from './app-error-fallback.module.less';

type ErrorFallbackProps = {
    error: Error;
    resetErrorBoundary: () => void;
};

export const AppErrorFallback = ({ error }: ErrorFallbackProps) => {
    return (
        <div role='alert' className={styles.alert}>
            <p className={styles['alert__title']}>{LayoutConfig.ERROR_BOUNDARY_TITLE}</p>
            <p className={styles['alert__subtitle']}>{LayoutConfig.ERROR_BOUNDARY_SUBTITLE}</p>
            <pre className={styles['alert__error']}>{error.message}</pre>       
                {/* <Button onClick={resetErrorBoundary}>
                    {LayoutConfig.BUTTON_RESET_ERROR_BIUNDARY}
                </Button> */}
            
        </div>
    );
};
