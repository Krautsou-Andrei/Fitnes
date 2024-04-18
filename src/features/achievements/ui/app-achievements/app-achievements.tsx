import { Collapse, Radio, Typography } from 'antd';

import clsn from 'classnames';

import { TableAchievements } from '../table-achievements';
import { InfoAchievementsCard } from '../info-achievement-card';
import { ExercisesInfoAchievements } from '../exercise-info-achievements';
import { HistogramAchievements } from '../histogram-achievements';
import { CircleDiagram } from '../circle-diagram';
import { EmptyTraining } from '../empty-training';

import { useAppAchievements } from '@features/achievements/hooks';
import { getTitleWeek, sortNameDaysWeek } from '@features/achievements/lib';
import {
    AchievementsConfig,
    ExercisesInfoAchievementsConfig,
    achievementsCardsConfig,
} from '@features/achievements/config';

import { AchievementsKeyConfig } from '@shared/config';

import styles from './app-achievements.module.less';
import { DownOutlined } from '@ant-design/icons';

const { Text } = Typography;
const { Panel } = Collapse;

type AppAchievementsProps = {
    isMonth: boolean;
    days: number;
};

export function AppAchievements({ isMonth, days }: AppAchievementsProps) {
    const { state, functions } = useAppAchievements({ days: days });

    return (
        <div className={styles['achievements-wrapper']}>
            <div className={styles['buttons-filters']}>
                <Text>{AchievementsConfig.TITLE_BUTTON_FILTER}</Text>
                <Radio.Group
                    onChange={functions.handleChangeRadio}
                    defaultValue={AchievementsKeyConfig.BUTTON_VALUE_ALL}
                >
                    <Radio.Button value={AchievementsKeyConfig.BUTTON_VALUE_ALL}>
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
            {state.isEmptyTraining ? (
                <EmptyTraining isMonth={isMonth} />
            ) : (
                <>
                    <div
                        className={clsn(styles['graph-wrapper'], {
                            [styles['graph-month']]: isMonth,
                        })}
                    >
                        <div className={styles.graph}>
                            <HistogramAchievements
                                achievements={state.filterTrainings}
                                isMonth={isMonth}
                            />
                        </div>
                        <>
                            {isMonth ? (
                                state.isQueryXL ? (
                                    <Collapse
                                        bordered={false}
                                        expandIconPosition='end'
                                        ghost={true}
                                        expandIcon={({ isActive }) => (
                                            <DownOutlined rotate={isActive ? 180 : 0} />
                                        )}
                                    >
                                        {state.filterTrainingsMonth.map((trainings) => (
                                            <Panel
                                                key={trainings[0].date}
                                                header={getTitleWeek(trainings)}
                                                showArrow={state.isQueryXL}
                                            >
                                                <TableAchievements
                                                    classNames={styles.table}
                                                    trainings={trainings}
                                                    tick={AchievementsConfig.KG_TYPE}
                                                />
                                            </Panel>
                                        ))}
                                    </Collapse>
                                ) : (
                                    <div className={styles['table-month']}>
                                        {state.filterTrainingsMonth.map((trainings) => (
                                            <TableAchievements
                                                key={trainings[0].date}
                                                classNames={styles.table}
                                                trainings={trainings}
                                                title={getTitleWeek(trainings)}
                                                tick={AchievementsConfig.KG_TYPE}
                                            />
                                        ))}
                                    </div>
                                )
                            ) : (
                                <TableAchievements
                                    classNames={styles.table}
                                    title={
                                        state.isTablet
                                            ? AchievementsConfig.TITLE_TABLE_ACIEVEMENTS_MOBILE
                                            : AchievementsConfig.TITLE_TABLE_ACIEVEMENTS
                                    }
                                    trainings={sortNameDaysWeek({
                                        trainings: state.filterTrainings,
                                    })}
                                    isDate={true}
                                    tick={AchievementsConfig.KG_TYPE}
                                />
                            )}
                        </>
                    </div>
                    <div className={styles['info-achievements-cards']}>
                        {achievementsCardsConfig.map((card) => (
                            <InfoAchievementsCard
                                key={card.title}
                                title={state.infoTrainings[card.title].toLocaleString('ru-RU')}
                                description={
                                    state.isQueryXS ? card.description_mobile : card.description
                                }
                            />
                        ))}
                    </div>
                    <div className={styles['exercises-achievements-cards']}>
                        {state.selectFilter === AchievementsKeyConfig.BUTTON_VALUE_ALL && (
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
                        <div className={styles['graph-circle']}>
                            <CircleDiagram exercises={state.bestExercisesPeriod} />
                        </div>
                        <TableAchievements
                            classNames={styles['table-week']}
                            title={AchievementsConfig.TITLE_TABLE_WEEK_EXERCISES}
                            trainings={sortNameDaysWeek({
                                trainings: state.bestExercisesDaysArray,
                                isDay: true,
                            })}
                            isDay={true}
                        />
                    </div>
                </>
            )}
        </div>
    );
}
