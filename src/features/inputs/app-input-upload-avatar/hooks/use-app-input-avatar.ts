import { useEffect, useState } from 'react';
import { UploadFile } from 'antd';
import { UploadChangeParam } from 'antd/lib/upload';

import { AcceptConfig, initialAvatarError, initialAvatarErrorMobile } from '../config';

import { profileActions } from '@entities/profile/model/slice';

import { useAppDispatch, useAppMediaQuery, useGetToken } from '@shared/hooks';
import { config } from '@shared/lib';

type UseAppInputAvatarParams = {
    isFile: boolean;
    initialAvatar: UploadFile;
};

type ResponseImage = AcceptConfig & {
    name: string;
    url: string;
};

export function useAppInputAvatar({ isFile, initialAvatar }: UseAppInputAvatarParams) {
    const token = useGetToken();
    const dispatch = useAppDispatch();
    const { isQueryXS } = useAppMediaQuery();

    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [isErrorAvatar, setIsErrorAvatar] = useState<boolean>(false);

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
            setIsErrorAvatar(false);
            return;
        }

        if (isError) {
            setFileList(isQueryXS ? [initialAvatarErrorMobile] : [initialAvatarError]);
            setIsErrorAvatar(true);
        } else {
            setFileList(info?.fileList);
            const response = info?.fileList[0]?.response as ResponseImage;
            const url = response?.url;

            if (url) {
                dispatch(profileActions.setImage(`${config.API_ENDPOINT_IMAGE}${url}`));
            }

            setIsErrorAvatar(false);
        }
    };
    return { token, isErrorAvatar, isQueryXS, fileList, onChange };
}
