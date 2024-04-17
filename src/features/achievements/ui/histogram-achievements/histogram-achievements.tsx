import { Column } from '@ant-design/charts';

import type { TrainingsMiddleDays } from '@features/achievements/model/types';
import { AchievementsConfig } from '@features/achievements/config';

import { DateFormatConfig } from '@shared/config';
import { formatDate } from '@shared/lib';
import { STYLES } from '@shared/config/constants';

type HistogramAchievementsProps = {
    achievements: TrainingsMiddleDays[];
    isMonth: boolean;
};

export function HistogramAchievements({ achievements, isMonth }: HistogramAchievementsProps) {
    const titleHistogram = isMonth ? AchievementsConfig.TITLE_HISTOGRAM : '';
    const scrollbarProps = isMonth ? { x: { value: 1 } } : false;

    const config = {
        data: achievements,
        title: {
            title: titleHistogram,
            style: {
                titleFontWeight: STYLES.FONT_WEIGHT_NORMAL,
                titleFontSize: STYLES.FONT_SIZE_2M,
            },
        },
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
                title: AchievementsConfig.TITLE_HISTOGRAM_AXIS_X,
                titleFontWeight: STYLES.FONT_WEIGHT_NORMAL,
                titleFontSize: STYLES.FONT_SIZE_2M,
            },
            y: {
                labelFormatter: (value: number) => `${value} ${AchievementsConfig.KG_TYPE}`,
                tick: false,
                grid: true,
                gridLineWidth: 2,
                gridLineDash: [2, 2],
                gridStroke: STYLES.GRID_COLOR,
            },
        },
        scrollbar: scrollbarProps,
    };

    return <Column {...config} />;
}
