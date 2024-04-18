import { Column } from '@ant-design/charts';

import type { TrainingsMiddleDays } from '@features/achievements/model/types';
import { AchievementsConfig } from '@features/achievements/config';

import { DateFormatConfig } from '@shared/config';
import { formatDate } from '@shared/lib';
import { Gap, STYLES } from '@shared/config/constants';
import { useAppMediaQuery } from '@shared/hooks';

type HistogramAchievementsProps = {
    achievements: TrainingsMiddleDays[];
    isMonth: boolean;
};

export function HistogramAchievements({ achievements, isMonth }: HistogramAchievementsProps) {
    const { isTablet, isQueryXS } = useAppMediaQuery();

    const scrollbarProps = isMonth
        ? { x: { ratio: isTablet ? STYLES.RATIO_MOBILE : STYLES.RATIO, value: STYLES.RATIO_VALUE } }
        : false;

    const config = {
        data: achievements,
        xField: 'date',
        yField: 'value',
        scale: {
            x: { padding: STYLES.HISTOGRAM_SCALE_PADDING },
        },
        axis: {
            x: {
                labelFormatter: (value: string) =>
                    formatDate(value, DateFormatConfig.FORMAT_DD_MM_DOT),
                line: true,
                lineLineDash: [STYLES.LINE_LINE_DASH, STYLES.LINE_LINE_DASH],
                lineStroke: STYLES.AXIS_X_COLOR,
                title: AchievementsConfig.TITLE_HISTOGRAM_AXIS_X,
                titleFontWeight: STYLES.FONT_WEIGHT_NORMAL,
                titleFontSize: isQueryXS ? STYLES.FONT_SIZE_XS : STYLES.FONT_SIZE_2M,
                labelSpacing: isQueryXS ? Gap.GAP_2XS : Gap.GAP_M,
                titleSpacing: isQueryXS ? Gap.GAP_3XS : Gap.GAP_M,
                labelFontSize: isQueryXS ? STYLES.FONT_SIZE_XS : STYLES.FONT_SIZE_S,
                labelAlign: 'horizontal',
            },
            y: {
                labelFormatter: (value: number) => `${value} ${AchievementsConfig.KG_TYPE}`,
                tick: false,
                grid: true,
                gridLineWidth: STYLES.GRID_LINE_WIDTH,
                gridLineDash: [STYLES.GRID_LINE_DASH, STYLES.GRID_LINE_DASH],
                gridStroke: STYLES.GRID_COLOR,
                labelFontSize: isQueryXS ? STYLES.FONT_SIZE_XS : STYLES.FONT_SIZE_S,
                labelSpacing: isQueryXS ? Gap.GAP_2XS : Gap.GAP_M,
            },
        },
        insetRight: STYLES.INSERT_RIGHT,
        sizeField: isQueryXS ? STYLES.SIZE_FIELD_HISTOGRAM_TABLE : STYLES.SIZE_FIELD_HISTOGRAM,
        scrollbar: scrollbarProps,
    };

    return <Column {...config} />;
}
