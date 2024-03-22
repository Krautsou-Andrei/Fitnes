import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useAppButtonArrow } from '../hooks';

import styles from './app-button-arrow.module.less';

export function AppButtonArrow() {
    const { onClick } = useAppButtonArrow();

    return (
        <Button type='text' onClick={onClick} className={styles['button-arrow']}>
            <ArrowLeftOutlined />
        </Button>
    );
}
