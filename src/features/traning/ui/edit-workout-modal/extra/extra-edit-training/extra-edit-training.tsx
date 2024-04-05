import { Button, Divider, Typography } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

import type { Exercises } from '@entities/training';

import { mapBadge } from '@shared/ui';

import styles from './extra-edit-training.module.less';

const { Text } = Typography;

type ExtraEditTrainingProps = {
    exercises: Exercises[];
    selectTrainingName: string;
    onCloseEditTrainingModal: () => void;
};

export function ExtraEditTraining({
    selectTrainingName,
    exercises,
    onCloseEditTrainingModal,
}: ExtraEditTrainingProps) {
    return (
        <>
            <div className={styles['header-wrapper']}>
                <Button
                    className={styles.button}
                    type='text'
                    size='small'
                    icon={<ArrowLeftOutlined />}
                    onClick={onCloseEditTrainingModal}
                />
                <Text>{selectTrainingName}</Text>
            </div>
            <Divider
                className={styles['training-add-title-divider']}
                style={{ borderColor: `${mapBadge[selectTrainingName]}` }}
            />
            <div className={styles['header-body']}>
                {exercises.map((item, index) => (
                    <div key={item.name + index} className={styles['trainig-item']}>
                        {item.name}
                    </div>
                ))}
            </div>
        </>
    );
}
