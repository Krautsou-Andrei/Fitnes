import { Column } from '@ant-design/charts';

import type { TrainingsMiddleDays } from '@features/achievements/model/types';
import { AchievementsConfig } from '@features/achievements/config';

import { AchievementsDefaultConfig, DateFormatConfig } from '@shared/config';
import { STYLES } from '@shared/config/constants';
import { formatDate } from '@shared/lib';

import styles from './histogram-achievements.module.less';

type HistogramAchievementsProps = {
    achievements: TrainingsMiddleDays[];
    height: number;
    width: number;
};

export function HistogramAchievements({ achievements, height, width }: HistogramAchievementsProps) {
    const config = {
        width: width,
        height: height,
        autoFit: false,
        title: {
            title: AchievementsConfig.TITLE_HISTOGRAM,
            position: 'bottom',
            style: {
                align: STYLES.FONT_POSITION_CENTER,
                titleFontWeight: STYLES.FONT_WEIGHT_NORMAL,
                titleFontSize: STYLES.FONT_SIZE_2M,
            },
        },

        data: achievements,
        xField: 'date',
        yField: 'value',
        scale: {
            x: { padding: 0.5 },
        },
        axis: {
            x: {
                labelFormatter: (value: string) =>
                    formatDate(value, DateFormatConfig.FORMAT_DD_MM_DOT),
                line: true,
                lineLineDash: [4, 4],
                lineStroke: STYLES.AXIS_X_COLOR,
            },
            y: {
                labelFormatter: (value: number) => `${value} ${AchievementsDefaultConfig.KG_TYPE}`,
                tick: false,
                grid: true,
                gridLineWidth: 2,
                gridLineDash: [2, 2],
                gridStroke: STYLES.GRID_COLOR,
            },
        },
    };

    return <Column className={styles.graph} {...config} />;
}
