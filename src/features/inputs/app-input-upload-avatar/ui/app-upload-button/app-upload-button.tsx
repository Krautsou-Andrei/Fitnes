import { PlusOutlined } from '@ant-design/icons';

import { AppInputUploadAvatarConfig } from '../../config';

import styles from './app-upload-button.module.less';

export function AppUploadButton() {
    return (
        <button className={styles['upload-button']} type='button'>
            <PlusOutlined />
            <div className={styles['button-text']}>
                {AppInputUploadAvatarConfig.UPLOAD_BUTTON_TEXT}
            </div>
        </button>
    );
}
