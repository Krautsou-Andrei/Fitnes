import VerificationInput from 'react-verification-input';
import { Typography } from 'antd';

import { confirmEmailConfig } from '@shared/config';
import { TypePage } from '@shared/types/app';

import styles from './confirm-form.module.less';

const { Text } = Typography;
export function ConfirmForm() {
    const onComplete = (event: unknown) => {
        console.log('evebt', event);
    };
    return (
        <div className={styles['confirm-form']}>
            <VerificationInput
                classNames={{
                    container: styles.container,
                    character: styles.character,
                    characterInactive: styles['character--inactive'],
                }}
                placeholder=''
                onComplete={onComplete}
            />
            <Text>{confirmEmailConfig[TypePage.CONFIRM_EMAIL].placeholder}</Text>
        </div>
    );
}
