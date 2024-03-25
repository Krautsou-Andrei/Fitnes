import { UploadFile } from 'antd';

export function getInitialAvatar(url: string): UploadFile {
    return {
        uid: '1',
        name: '',
        url: url,
    };
}
