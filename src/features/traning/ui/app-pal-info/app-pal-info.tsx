import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { Pal } from '@entities/training';

import styles from './app-pal-info.module.less';
import { AppTrainingDay } from '@shared/ui';
import { Size } from '@shared/config/constants';

type AppPalInfoProps = {
    pal: Pal;
};

export function AppPalInfo({ pal }: AppPalInfoProps) {
    return (
        <div className={styles['pal-info']}>
            <div className={styles['pal-avatar']}>
                <Avatar
                    size={Size.SIZE_8_XL}
                    alt={pal.name}
                    src={pal.imageSrc}
                    icon={!pal.imageSrc && <UserOutlined />}
                />
                <div className={styles['pal-name']}>{pal.name}</div>
            </div>
            <AppTrainingDay name={pal.trainingType} isImplementation={false} />
        </div>
    );
}
