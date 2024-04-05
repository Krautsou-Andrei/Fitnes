import { Button, type ButtonProps } from 'antd';

import { LayoutConfig } from '@shared/config';

import styles from './app-button-save-exercise.module.less';

type AppButtonSaveProps = ButtonProps;

export function AppButtonSaveExercise({ ...rest }: AppButtonSaveProps) {
    return (
        <Button
            block
            className={styles['button-save']}
            form='form-tariff'
            type='primary'
            htmlType='submit'
            {...rest}
        >
            {LayoutConfig.BUTTON_SAVE_EXERCISE}
        </Button>
    );
}
