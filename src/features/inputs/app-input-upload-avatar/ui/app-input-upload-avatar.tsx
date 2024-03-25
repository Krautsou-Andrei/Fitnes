import { Form, Upload, UploadFile } from 'antd';

import { AppUploadButton } from './app-upload-button';

import {
    AcceptConfig,
    AppInputUploadAvatarConfig,
    ListTypeConfig,
    MaxCountConfig,
} from '../config';
import { useAppInputAvatar } from '../hooks';

import { ApiEndpoints } from '@entities/profile';

import { config } from '@shared/lib';
import { LayoutConfig } from '@shared/config';
import { STYLES } from '@shared/config/constants';

import styles from './app-input-upload-avatar.module.less';

type AppInputUploadAvatarProps = {
    isFile: boolean;
    initialAvatar: UploadFile;
    dataTestId?: string;
};

export function AppInputUploadAvatar({
    isFile,
    initialAvatar,
    dataTestId,
}: AppInputUploadAvatarProps) {
    const { token, isErrorAvatar, isQueryXS, fileList, onChange } = useAppInputAvatar({
        isFile,
        initialAvatar,
    });

    return (
        <Form.Item
            name={LayoutConfig.INPUT_TYPE_AVATAR}
            data-test-id={dataTestId}
            label={
                isQueryXS &&
                !isFile &&
                !isErrorAvatar &&
                AppInputUploadAvatarConfig.UPLOAD_PHOTO_TEXT
            }
            className={styles['app-input-upload-avatar']}
        >
            <Upload
                action={`${config.API_ENDPOINT}${ApiEndpoints.UPLOAD_IMAGE}`}
                headers={{ authorization: `Bearer ${token}` }}
                maxCount={MaxCountConfig.ONE}
                accept={AcceptConfig.IMAGE}
                fileList={fileList}
                listType={isQueryXS ? ListTypeConfig.PICTURE : ListTypeConfig.PICTIRE_CARD}
                onChange={onChange}
                progress={{
                    strokeWidth: STYLES.STROKE_WIDT_UPLOAD_USER_IMAGE,
                    showInfo: false,
                    size: 'default',
                }}
            >
                {fileList[0] ? null : <AppUploadButton />}
            </Upload>
        </Form.Item>
    );
}
