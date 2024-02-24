import { Button } from 'antd';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';

import { Extra } from '../extra';

import { LayoutConfig } from '@shared/config';
import { AppCard } from '@shared/ui';

import styles from './app-card-footer.module.less';

export function AppCardFooter() {
    return (
        <AppCard className={styles['footer-card']} extra={<Extra />} bordered={false}>
            <Button type='text'>
                <AndroidFilled />
                <span>{LayoutConfig.BUTTON_ANDROID}</span>
            </Button>
            <Button type='text'>
                <AppleFilled />
                <span>{LayoutConfig.BUTTON_APPLE}</span>
            </Button>
        </AppCard>
    );
}
