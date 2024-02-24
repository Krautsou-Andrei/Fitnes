import VerificationInput from 'react-verification-input';
import { Typography } from 'antd';
import clsn from 'classnames';

import { useConfirmEmailForm } from './lib/useConfirmEmailForm';
import { confirmConfig } from '../../config/confirm-config';

import { TypePage } from '@shared/types/app';

import styles from './confirm-form.module.less';

const { Text } = Typography;

export function ConfirmForm() {
    const { isError, onChange, onComplete, valueVerification } = useConfirmEmailForm();

    return (
        <div className={styles['confirm-form']}>
            <VerificationInput
                classNames={{
                    container: styles.container,
                    character: clsn(styles.character, { [styles['character--error']]: isError }),
                    characterInactive: styles['character--inactive'],
                }}
                value={valueVerification}
                autoFocus={false}
                placeholder=''
                onComplete={onComplete}
                onChange={onChange}
                inputProps={{ 'data-test-id': 'verification-input' }}
            />
            <Text>{confirmConfig[TypePage.CONFIRM_EMAIL].placeholder}</Text>
        </div>
    );
}
