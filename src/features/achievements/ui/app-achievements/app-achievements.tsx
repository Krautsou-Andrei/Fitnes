import { Radio, Typography } from 'antd';

import { TableAchievements } from '../table-achievements';
import { InfoAchievementsCard } from '../info-achievement-card';
import { ExercisesInfoAchievements } from '../exercise-info-achievements';
import { HistogramAchievements } from '../histogram-achievements';
import { CircleDiagram } from '../circle-diagram';

import { useAppAchievements } from '@features/achievements/hooks';
import { sortNameDaysWeek } from '@features/achievements/lib';
import {
    AchievementsConfig,
    ExercisesInfoAchievementsConfig,
    achievementsCardsConfig,
} from '@features/achievements/config';

import { AchievementsDefaultConfig } from '@shared/config';
import { STYLES } from '@shared/config/constants';

import styles from './app-achievements.module.less';

const { Text } = Typography;

export function AppAchievements() {
    const { state, functions } = useAppAchievements();

    return (
        <div className={styles['achievements-wrapper']}>
            <div className={styles['buttons-filters']}>
                <Text>{AchievementsConfig.TITLE_BUTTON_FILTER}</Text>
                <Radio.Group
                    onChange={functions.handleChangeRadio}
                    defaultValue={AchievementsDefaultConfig.BUTTON_VALUE_ALL}
                >
                    <Radio.Button value={AchievementsDefaultConfig.BUTTON_VALUE_ALL}>
                        {AchievementsConfig.BUTTON_ALL}
                    </Radio.Button>
                    {state.trainingNames.length &&
                        state.trainingNames.map((training) => (
                            <Radio.Button key={training.key} value={training.name}>
                                {training.name}
                            </Radio.Button>
                        ))}
                </Radio.Group>
            </div>
            <div className={styles['graph-wrapper']}>
                <HistogramAchievements
                    achievements={state.filterTrainings}
                    height={STYLES.HEIGHT_HISTOGRAM}
                    width={STYLES.WIDTH_HISTOGRAM}
                />
                <TableAchievements
                    classNames={styles.table}
                    trainings={sortNameDaysWeek({ trainings: state.filterTrainings })}
                    tick={AchievementsConfig.KG_TYPE}
                />
            </div>
            <div className={styles['info-achievements-cards']}>
                {achievementsCardsConfig.map((card) => (
                    <InfoAchievementsCard
                        key={card.title}
                        title={state.infoTrainings[card.title].toLocaleString('ru-RU')}
                        description={card.description}
                    />
                ))}
            </div>
            <div className={styles['exercises-achievements-cards']}>
                {state.selectFilter === AchievementsDefaultConfig.BUTTON_VALUE_ALL && (
                    <ExercisesInfoAchievements
                        description={ExercisesInfoAchievementsConfig.DESCRIPTION_TRAINING}
                        title={state.bestNameTraining}
                    />
                )}
                <ExercisesInfoAchievements
                    description={ExercisesInfoAchievementsConfig.DESCRIPTION_EXERCISES}
                    title={state.bestNameExercise}
                />
            </div>
            <div className={styles['circle-diagram-wrapper']}>
                <CircleDiagram exercises={state.bestExercisesPeriod} />
                <TableAchievements
                    classNames={styles['table-week']}
                    title={AchievementsConfig.TITLE_TABLE_WEEK_EXERCISES}
                    trainings={sortNameDaysWeek({ trainings: state.bestExercisesDaysArray })}
                />
            </div>
        </div>
    );
}
