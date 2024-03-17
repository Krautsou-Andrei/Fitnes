import clsn from 'classnames';
import styles from './app-mobile-day.module.less';

type AppMobileDayProps = {
    isTraining: boolean;
};

export function AppMobileDay({ isTraining }: AppMobileDayProps) {
    return (
        <div
            className={clsn(
                { [styles['app-mobile-day']]: isTraining },
                { ['training']: isTraining },
            )}
        ></div>
    );
}
