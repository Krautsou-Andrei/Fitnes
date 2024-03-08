import { Button, Space } from 'antd';
import { CloseOutlined, EditOutlined } from '@ant-design/icons';

import type { TrainingName } from '@entities/training';
import { LayoutConfig } from '@shared/config';

import { AppBadge } from '@shared/ui';

import styles from './extra-view-training.module.less';

type ExtraViewTrainingProps = {
    date: string;
    onCloseAddTraining: () => void;
    listTraining: TrainingName[] | [];
};

export function ExtraViewTraining({
    date,
    onCloseAddTraining,
    listTraining,
}: ExtraViewTrainingProps) {
    return (
        <>
            <div className={styles['header-wrapper']}>
                <div className={styles['title-wrapper']}>
                    <div className={styles['calendar-cell-title']}>
                        {LayoutConfig.TITLE_MODAL_TRAINING_DATE + date}
                    </div>
                    <div className={styles['calendar-cell-sub-title']}>
                        {LayoutConfig.NO_ACTIVE_TRAINING}
                    </div>
                </div>
                <Button
                    className={styles.button}
                    type='text'
                    size='small'
                    onClick={onCloseAddTraining}
                    icon={<CloseOutlined />}
                />
            </div>
            {listTraining.length > 0 &&
                listTraining.map((item) => (
                    <div key={item.key} className={styles['trainig-item']}>
                        <Space>
                            <AppBadge name={item.name} />
                            {item.name}
                        </Space>
                        <Button type='link' className={styles['button-edit']}>
                            <EditOutlined />
                        </Button>
                    </div>
                ))}
        </>
    );
}
