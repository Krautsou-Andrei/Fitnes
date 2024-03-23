import { Button, Form, Typography } from 'antd';

import { ProfileConfig } from '@features/profile/config';
import { useProfileForm } from '@features/profile/hooks';

import {
    AutoCompleteConfig,
    AppInputConfirmPassword,
    AppInputLogin,
    AppInputPassword,
    AppInputBirthday,
    AppInputText,
    AppInputUploadAvatar,
} from '@features/inputs/@ex/profile';

import { ErrorValidateConfig, LayoutConfig } from '@shared/config';

import styles from './profile-form.module.less';

const { Title } = Typography;

export function ProfileForm() {
    const { form, initialAvatar, isDisabledSubmit, isImage, isPassword, validateForm, onFinish } =
        useProfileForm();

    return (
        <Form
            form={form}
            className={styles['profile-form']}
            onFieldsChange={validateForm}
            onFinish={onFinish}
        >
            <legend className={styles['person-info-title']}>
                <Title level={5}>{ProfileConfig.TITLE_PERSON_INFO}</Title>
            </legend>
            <div className={styles['person-info-wrapper']}>
                <AppInputUploadAvatar isFile={isImage} initialAvatar={initialAvatar} />
                <div className={styles['inputs-wrapper']}>
                    <AppInputText
                        name={LayoutConfig.INPUT_TYPE_FIRST_NAME}
                        placeholder={ProfileConfig.PLACEHOLDER_FIRSTNAME}
                    />
                    <AppInputText
                        name={LayoutConfig.INPUT_TYPE_LAST_NAME}
                        placeholder={ProfileConfig.PLACEHOLDER_LASTNAME}
                    />
                    <AppInputBirthday
                        name={LayoutConfig.INPUT_TYPE_BIRTH_DAY}
                        placeholder={ProfileConfig.PLACEHOLDER_DATE_PICKER}
                    />
                </div>
            </div>
            <legend>
                <Title level={5}>{ProfileConfig.TITLE_PRIVATE_INFO}</Title>
            </legend>
            <div className={styles['private-info-wrapper']}>
                <AppInputLogin />
                <AppInputPassword
                    type='register'
                    classNames={'input-password'}
                    autoComplete={AutoCompleteConfig.NEW_PASSWORD}
                    isRequire={isPassword}
                    help={ErrorValidateConfig.PASSWORD_NO_VALIDATE}
                />
                <AppInputConfirmPassword isRequire={isPassword} classNames={'input-password'} />
            </div>
            <Button
                className={styles.button}
                type='primary'
                htmlType='submit'
                size='large'
                disabled={isDisabledSubmit}
            >
                {ProfileConfig.BUTTON_SAVE}
            </Button>
        </Form>
    );
}
