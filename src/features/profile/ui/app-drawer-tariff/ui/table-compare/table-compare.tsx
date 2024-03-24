import { Typography } from 'antd';
import { CheckCircleFilled, CloseCircleOutlined } from '@ant-design/icons';
import { TariffTypeConfig } from '@features/profile';
import { tableCompare } from '@features/profile/config';

import styles from './table-compare.module.less';

const { Text } = Typography;

export function TableCompare() {
    return (
        <>
            <div className={styles['tariff-name-wrapper']}>
                <div className={styles['tariff-name']}>{TariffTypeConfig.FREE.toUpperCase()}</div>
                <div className={styles['tariff-name']}>{TariffTypeConfig.PRO.toUpperCase()}</div>
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
