import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useAppButtonArrow } from '../hooks';

import { DataTestIdConfig } from '@shared/config';

import styles from './app-button-arrow.module.less';

export function AppButtonArrow() {
    const { onClick } = useAppButtonArrow();

    return (
        <Button
            type='text'
            onClick={onClick}
            className={styles['button-arrow']}
            data-test-id={DataTestIdConfig.SETTINGS_BACK}
        >
            <ArrowLeftOutlined />
        </Button>
    );
}
