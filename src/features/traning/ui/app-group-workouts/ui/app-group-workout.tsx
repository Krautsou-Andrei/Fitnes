import { Button, Divider, Typography } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';

import { InvitePals } from './invite-pals';
import { InviteRequests } from './invite-requests';
import { InvitePartners } from './invite-partner';
import { AppDrawer } from '../../app-drawer';
import { AppButtonSaveExercise } from '../../app-button-save-exercise';

import { useGroupWorkouts, useTainingModal } from '@features/traning/hooks';
import { InviteConfig, WorkoutsConfig } from '@features/traning/config';

import { splitString } from '@shared/lib';

import styles from './app-group-workout.module.less';

const { Text, Title } = Typography;

export function AppGroupWorkouts() {
    const { state, functions } = useGroupWorkouts();

    const listTraining = state.listTraining;
    const trainingsDay = state.trainingsDay;

    const {
        isButtonSaveDisabled,
        isOldDay,
        isOpenDrawer,
        onCloseDrawer,
        onOpenDrawer,
        onSave,
        onSelectTraining,
        selectPalForTraining,
        selectOptions,
        selectTrainingName,
    } = useTainingModal({
        listTraining,
        trainingsDay,
    });

    return (
        <>
            <div className={styles['group-workouts-wrapper']}>
                <div className={styles.container}>
                    {state.isOpenInviteList ? (
                        <InvitePals
                            searchValue={state.searchValue}
                            userJointTrainingsList={state.userJointTrainingList}
                            onCloseInviteList={functions.onToggleInviteList}
                            onOpenDrawer={onOpenDrawer}
                            onSearch={functions.onSearch}
                        />
                    ) : (
                        <>
                            <InviteRequests />
                            <div className={styles.description}>
                                <Title level={3}>
                                    {splitString(WorkoutsConfig.GROUP_TITLE_ONE)}
                                </Title>
                                <Text>{WorkoutsConfig.GROUP_DESCRIPTION}</Text>
                                <Divider />

                                <ButtonGroup className={styles['button-group']}>
                                    <Button
                                        type='text'
                                        onClick={functions.getJointTrainingListHandler}
                                    >
                                        {WorkoutsConfig.BUTTON_RANDOM}
                                    </Button>
                                    <Button
                                        type='text'
                                        onClick={functions.getJointTrainingListBestHandler}
                                    >
                                        {WorkoutsConfig.BUTTON_FRIENDS}
                                    </Button>
                                </ButtonGroup>
                            </div>
                            <InvitePartners />
                        </>
                    )}
                </div>
            </div>
            <AppDrawer
                createTraining={state.createTraining}
                isOldDay={isOldDay}
                isOpen={isOpenDrawer}
                onClickClose={onCloseDrawer}
                buttonSave={
                    <AppButtonSaveExercise
                        text={selectPalForTraining ? InviteConfig.BUTTON_SEND_INVITE : undefined}
                        onClick={onSave}
                        disabled={isButtonSaveDisabled}
                    />
                }
                title={InviteConfig.DRAWER_JOINT_TRAINING_TITLE}
                isMyTrainings={true}
                onSelectTraining={onSelectTraining}
                selectOptions={selectOptions}
                selectTrainingName={selectTrainingName}
            />
        </>
    );
}
