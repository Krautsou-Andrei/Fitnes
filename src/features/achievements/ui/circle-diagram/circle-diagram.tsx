import { Pie } from '@ant-design/charts';
import { ExercisesWeek } from '@features/achievements';
import { AchievementsDefaultConfig } from '@shared/config';

import { STYLES } from '@shared/config/constants';
import { useAppMediaQuery } from '@shared/hooks';
import { wrapText } from '@shared/lib';

type CircleDiagramProps = {
    exercises: ExercisesWeek[];
};

export function CircleDiagram({ exercises }: CircleDiagramProps) {
    const { isTablet, isQuerySM } = useAppMediaQuery();

    const config = {
        data: exercises,
        angleField: 'value',
        colorField: 'type',
        innerRadius: isQuerySM
            ? STYLES.CIRCLE_DIAGRAM_INNER_RADIUS_MOBILE
            : STYLES.CIRCLE_DIAGRAM_INNER_RADIUS,
        radius: isQuerySM ? STYLES.CIRCLE_DIAGRAM_RADIUS_MOBILE : STYLES.CIRCLE_DIAGRAM_RADIUS,
        label: {
            text: 'type',
            position: 'outside',

            formatter: (text: string) =>
                isTablet
                    ? wrapText(text, AchievementsDefaultConfig.WRAP_TEXT_QUANTITY_SYMBOL)
                    : text,
            connector: false,
            transform: [{ type: 'overlapDodgeY' }],
            style: {
                fontSize: isTablet ? STYLES.FONT_SIZE_S : STYLES.FONT_SIZE_2M,
                fontWeight: STYLES.FONT_WEIGHT_NORMAL,
            },
        },
        legend: false,
    };
    return <Pie {...config} />;
}
