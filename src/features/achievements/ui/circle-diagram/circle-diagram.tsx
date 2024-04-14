import { Pie } from '@ant-design/charts';
import { ExercisesWeek } from '@features/achievements';

import { STYLES } from '@shared/config/constants';

type CircleDiagramProps = {
    exercises: ExercisesWeek[];
};

export function CircleDiagram({ exercises }: CircleDiagramProps) {
    const config = {
        width: STYLES.WIDTH_HISTOGRAM,
        height: STYLES.HEIGHT_HISTOGRAM,
        data: exercises,
        angleField: 'value',
        colorField: 'type',
        paddingRight: STYLES.PADDING_RIGHT_CIRLCE_DIAGRAM,
        paddingLeft: STYLES.PADING_LEFT_CIRCLE_DIAGRAM,
        paddingBottom: STYLES.PADDING_BOTTON_CIRCLE_DIAGRAM,
        innerRadius: STYLES.CIRCLE_DIAGRAM_RADIUS,
        label: {
            text: 'type',
            position: 'outside',
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
