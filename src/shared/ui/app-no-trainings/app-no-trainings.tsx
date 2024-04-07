import { Button, Typography } from 'antd';

import { LayoutConfig } from '@shared/config';

import styles from './app-no-trainings.module.less';

const { Text } = Typography;

type AppNoTrainingsProps = {
    text: string;
    isTrainingsNames: boolean;
    onClick: () => void;
};

export function AppNoTrainings({ text, isTrainingsNames, onClick }: AppNoTrainingsProps) {
    return (
        <div className={styles['no-workout']}>
            <div className={styles['content']}>
                <Text>{text}</Text>
            </div>
            {isTrainingsNames && (
                <Button type='primary' onClick={onClick}>
                    {LayoutConfig.BUTTON_CREATE_TRAINING}
                </Button>
            )}
        </div>
    );
}
