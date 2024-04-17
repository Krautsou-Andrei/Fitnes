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
    const { isQueryXS } = useAppMediaQuery();

    const config = {
        data: exercises,
        angleField: 'value',
        colorField: 'type',
        innerRadius: STYLES.CIRCLE_DIAGRAM_INNER_RADIUS,
        radius: STYLES.CIRCLE_DIAGRAM_RADIUS,
        autoWrap: true,
        label: {
            text: 'type',
            position: 'outside',

            formatter: (text: string) =>
                isQueryXS
                    ? wrapText(text, AchievementsDefaultConfig.WRAP_TEXT_QUANTITY_SYMBOL)
                    : text,
            connector: false,
            transform: [{ type: 'overlapDodgeY' }],
            style: {
                fontSize: STYLES.FONT_SIZE_2M,
                fontWeight: STYLES.FONT_WEIGHT_BOLD,
            },
        },
        legend: false,
    };
    return <Pie {...config} />;
}
