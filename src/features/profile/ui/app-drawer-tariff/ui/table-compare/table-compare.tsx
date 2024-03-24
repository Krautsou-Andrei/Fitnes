import { Typography } from 'antd';
import clsn from 'classnames';
import { CheckCircleFilled, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

import { TariffTypeConfig } from '@features/profile';
import { tableCompare } from '@features/profile/config';

import styles from './table-compare.module.less';

const { Text } = Typography;

type TableCompareProps = {
    activeDays?: string;
};

export function TableCompare({ activeDays }: TableCompareProps) {
    return (
        <>
            <div className={styles['tariff-name-wrapper']}>
                <div className={styles['tariff-name']}>{TariffTypeConfig.FREE.toUpperCase()}</div>
                <div className={clsn(styles['tariff-name'], { [styles.active]: activeDays })}>
                    {TariffTypeConfig.PRO.toUpperCase()}
                    {activeDays && <CheckCircleOutlined className={styles['active-icon']} />}
                </div>
            </div>
            <div className={styles['tariff-table-compare']}>
                {tableCompare.map((cell) => {
                    return (
                        <div className={styles['tariff-cell-wrapper']} key={cell.title}>
                            <Text className={styles['cell-title']}>{cell.title}</Text>
                            {cell.tarifFree ? (
                                <CheckCircleFilled className={styles['cell-icon']} />
                            ) : (
                                <CloseCircleOutlined className={styles['cell-icon-disabled']} />
                            )}

                            <CheckCircleFilled className={styles['cell-icon']} />
                        </div>
                    );
                })}
            </div>
        </>
    );
}
