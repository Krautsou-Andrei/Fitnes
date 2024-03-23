import { useEffect, useState } from 'react';
import { UploadFile } from 'antd';
import { UploadChangeParam } from 'antd/lib/upload';

import { AcceptConfig, AppInputUploadAvatarConfig, initialAvatarError } from '../config';

import { useGetToken } from '@shared/hooks';

type UseAppInputAvatarParams = {
    isFile: boolean;
    initialAvatar: UploadFile;
};

export function useAppInputAvatar({ isFile, initialAvatar }: UseAppInputAvatarParams) {
    const token = useGetToken();

    const [fileList, setFileList] = useState<UploadFile[]>([]);

    useEffect(() => {
        if (isFile) {
            setFileList([initialAvatar]);
        }
    }, [initialAvatar, isFile]);

    const onChange = (info: UploadChangeParam<UploadFile<AcceptConfig.IMAGE>>) => {
        const isError = info?.file?.error;
        const load = document.querySelector('.ant-upload-list-item-thumbnail');

        if (load) {
            load.textContent = AppInputUploadAvatarConfig.UPLOAD_STATUS_LOADING;
        }

        if (isError) {
            setFileList([initialAvatarError]);
        } else {
            setFileList(info?.fileList);
        }
    };
    return { token, fileList, onChange };
}
