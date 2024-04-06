import { useState } from 'react';
import { List, Space, Typography } from 'antd';

import { PalCard } from '../../pal-card';
import { PalModal } from '../../pal-modal';

import { InviteConfig } from '@features/traning/config';

import { selectPals } from '@entities/training';

import { useAppSelector } from '@shared/hooks';

import styles from './invite-partner.module.less';

const { Title, Text } = Typography;

export function InvitePartners() {
    const partners = useAppSelector(selectPals);
    const [isOpenPalModal, setIsOpenPalModal] = useState<boolean>(false);

    const onClosePalModal = () => {
        setIsOpenPalModal(false);
    };

    const onOpenPalModal = () => {
        setIsOpenPalModal(true);
    };

    return (
        <>
            <div className={styles['invite-partners']}>
                <Title level={4} className={styles.title}>
                    {InviteConfig.MY_PARTNERS_TITLE}
                </Title>
                {partners.length ? (
                    <Space className={styles['partners-list']} onClick={onOpenPalModal}>
                        <List
                            dataSource={partners}
                            renderItem={(pal, index) => <PalCard pal={pal} index={index} />}
                        />
                    </Space>
                ) : (
                    <Text>{InviteConfig.MY_PARTNERS_NO}</Text>
                )}
            </div>

            <PalModal isOpenPalModal={isOpenPalModal} onClosePalModal={onClosePalModal} />
        </>
    );
}
