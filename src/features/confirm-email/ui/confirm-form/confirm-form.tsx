import VerificationInput from 'react-verification-input';
import { Typography } from 'antd';
import clsn from 'classnames';

import { useConfirmEmailForm } from './hooks/useConfirmEmailForm';
import { ConfirmPageConfig, confirmConfig } from '../../config';

import { DataTestIdConfig } from '@shared/config';

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
                inputProps={{ 'data-test-id': DataTestIdConfig.VERIFICATION_INPUT }}
            />
            <Text>{confirmConfig[ConfirmPageConfig.CONFIRM_EMAIL].placeholder}</Text>
        </div>
    );
}
