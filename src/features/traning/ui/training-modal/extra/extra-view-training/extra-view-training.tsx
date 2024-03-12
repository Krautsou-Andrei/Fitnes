import { Button, Empty } from 'antd';
import { CloseOutlined, EditOutlined } from '@ant-design/icons';

import { type Exercises, type TrainingType } from '@entities/training';
import { DataTestIdConfig, LayoutConfig } from '@shared/config';

import { AppTrainingDay } from '@shared/ui';

import { STYLES } from '@shared/config/constants';

import styles from './extra-view-training.module.less';

type ExtraViewTrainingProps = {
    currentDate: string;
    onEditTraining: (id: string, name: string, exercises: Exercises[]) => void;

    onCloseAddTraining: () => void;
    listTraining: TrainingType[];
};

export function ExtraViewTraining({
    currentDate,
    onEditTraining,
    onCloseAddTraining,
    listTraining,
}: ExtraViewTrainingProps) {
    return (
        <>
            <div className={styles['header-wrapper']}>
                <div className={styles['title-wrapper']}>
                    <div className={styles['calendar-cell-title']}>
                        {LayoutConfig.TITLE_MODAL_TRAINING_DATE + currentDate}
                    </div>
                    {!listTraining.length && (
                        <div className={styles['calendar-cell-sub-title']}>
                            {LayoutConfig.NO_ACTIVE_TRAINING}
                        </div>
                    )}
                </div>
                <Button
                    data-test-id={DataTestIdConfig.MODAL_CREATE_TRAINING_BUTTON_CLOSE}
                    className={styles.button}
                    type='text'
                    size='small'
                    onClick={onCloseAddTraining}
                    icon={<CloseOutlined />}
                />
            </div>
            <div className={styles['header-body']}>
                {listTraining.length ? (
                    listTraining.map((item, index) => (
                        <div key={item.id} className={styles['trainig-item']}>
                            <AppTrainingDay
                                name={item.name}
                                isImplementation={item.isImplementation}
                            />
                            <Button
                                data-test-id={`${DataTestIdConfig.MODAL_CREATE_TRAINING_EDIT_BUTTON}${index}`}
                                type='link'
                                className={styles['button-edit']}
                                disabled={item.isImplementation}
                                onClick={() => onEditTraining(item.id, item.name, item.exercises)}
                            >
                                <EditOutlined />
                            </Button>
                        </div>
                    ))
                ) : (
                    <Empty
                        className={styles.empty}
                        image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
                        imageStyle={{ height: STYLES.HEIGHT_EMPTY_TRAINIG_MODAL }}
                    />
                )}
            </div>
        </>
    );
}
