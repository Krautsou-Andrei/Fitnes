import { List, Space, Typography } from 'antd';

import { useInvitePartners } from '../hooks';
import { PalCard } from '../../pal-card';
import { PalModal } from '../../pal-modal';

import { InviteConfig, WorkoutsConfig } from '@features/traning/config';

import styles from './invite-partner.module.less';

const { Title, Text } = Typography;

export function InvitePartners() {
    const { state, functions } = useInvitePartners();

    return (
        <>
            <div className={styles['invite-partners']}>
                <Title level={4} className={styles.title}>
                    {InviteConfig.MY_PARTNERS_TITLE}
                </Title>
                {state.partners.length ? (
                    <Space className={styles['partners-list']} onClick={functions.onOpenPalModal}>
                        <List
                            dataSource={state.partners.slice(0, WorkoutsConfig.MAX_PARTNERS)}
                            renderItem={(pal, index) => <PalCard pal={pal} index={index} />}
                        />
                    </Space>
                ) : (
                    <Text>{InviteConfig.MY_PARTNERS_NO}</Text>
                )}
            </div>

            <PalModal
                isOpenPalModal={state.isOpenPalModal}
                onClosePalModal={functions.onClosePalModal}
            />
        </>
    );
}
