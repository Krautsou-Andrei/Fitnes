import { Form, Upload, UploadFile } from 'antd';

import { AppUploadButton } from './app-upload-button';

import { AcceptConfig, ListTypeConfig, MaxCountConfig } from '../config';
import { useAppInputAvatar } from '../hooks';

import { ApiEndpoints } from '@entities/profile';

import { config } from '@shared/lib';
import { LayoutConfig } from '@shared/config';
import { STYLES } from '@shared/config/constants';

type AppInputUploadAvatarProps = {
    isFile: boolean;
    initialAvatar: UploadFile;
};

export function AppInputUploadAvatar({ isFile, initialAvatar }: AppInputUploadAvatarProps) {
    const { token, fileList, onChange } = useAppInputAvatar({ isFile, initialAvatar });

    return (
        <Form.Item name={LayoutConfig.INPUT_TYPE_AVATAR}>
            <Upload
                action={`${config.API_ENDPOINT}${ApiEndpoints.UPLOAD_IMAGE}`}
                headers={{ authorization: `Bearer ${token}` }}
                maxCount={MaxCountConfig.ONE}
                accept={AcceptConfig.IMAGE}
                fileList={fileList}
                listType={ListTypeConfig.PICTIRE_CARD}
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
