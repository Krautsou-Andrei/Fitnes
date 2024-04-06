import { Button, List } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import Search from 'antd/lib/input/Search';

import { PalCard } from '../../pal-card';

import { InviteConfig } from '@features/traning/config';

import type { Pal } from '@entities/training';

import { Size } from '@shared/config/constants';

import styles from './invite-pals.module.less';

type InvitePalsProps = {
    searchValue: string;
    userJointTrainingsList: Pal[];
    onSearch: (value: string) => void;
    onOpenDrawer: () => void;
    onCloseInviteList: () => void;
};

export function InvitePals({
    userJointTrainingsList,
    searchValue,
    onOpenDrawer,
    onSearch,
    onCloseInviteList,
}: InvitePalsProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.search}>
                <Button onClick={onCloseInviteList} icon={<ArrowLeftOutlined />} type='text'>
                    {InviteConfig.BUTTON_BACK}
                </Button>
                <Search
                    placeholder={InviteConfig.SEARCH_PLACEHOLDER}
                    onSearch={onSearch}
                    className={styles['search-box']}
                />
            </div>
            <List
                className={styles['joint-list']}
                dataSource={userJointTrainingsList}
                renderItem={(pal) => (
                    <PalCard onOpenDrawer={onOpenDrawer} pal={pal} searchValue={searchValue} />
                )}
                pagination={{
                    hideOnSinglePage: true,
                    size: 'small',
                    pageSize: Size.SIZE_S,
                }}
            />
        </div>
    );
}
