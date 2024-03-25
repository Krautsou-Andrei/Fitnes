import { PlusOutlined, UploadOutlined } from '@ant-design/icons';

import { AppInputUploadAvatarConfig } from '../../config';
import { useAppMediaQuery } from '@shared/hooks';

import styles from './app-upload-button.module.less';

export function AppUploadButton() {
    const { isQueryXS } = useAppMediaQuery();
    
    return (
        <button  className={styles['upload-button']} type='button'>
            {isQueryXS ? (
                <>
                    <UploadOutlined />
                    <span className={styles['button-text']}>
                        {AppInputUploadAvatarConfig.UPLOAD_BUTTON_TEXT_MOBILE}
                    </span>
                </>
            ) : (
                <>
                    <PlusOutlined />
                    <div className={styles['button-text']}>
                        {AppInputUploadAvatarConfig.UPLOAD_BUTTON_TEXT}
                    </div>
                </>
            )}
        </button>
    );
}
