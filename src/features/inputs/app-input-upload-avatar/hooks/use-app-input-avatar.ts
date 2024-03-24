import { useEffect, useState } from 'react';
import { UploadFile } from 'antd';
import { UploadChangeParam } from 'antd/lib/upload';

import { AcceptConfig, initialAvatarError } from '../config';

import { profileActions } from '@entities/profile/model/slice';

import { useAppDispatch, useGetToken } from '@shared/hooks';

type UseAppInputAvatarParams = {
    isFile: boolean;
    initialAvatar: UploadFile;
};

export function useAppInputAvatar({ isFile, initialAvatar }: UseAppInputAvatarParams) {
    const token = useGetToken();
    const dispatch = useAppDispatch();

    const [fileList, setFileList] = useState<UploadFile[]>([]);

    useEffect(() => {
        if (isFile) {
            setFileList([initialAvatar]);
        }
    }, [initialAvatar, isFile]);

    const onChange = (info: UploadChangeParam<UploadFile<AcceptConfig.IMAGE>>) => {
        const isError = info?.file?.error;
        const isRemoved = info?.file?.status === 'removed';

        if (isRemoved) {
            setFileList([]);
            dispatch(profileActions.setImage(''));
            return;
        }

        if (isError) {
            setFileList([initialAvatarError]);
        } else {
            setFileList(info?.fileList);
        }
    };
    return { token, fileList, onChange };
}
