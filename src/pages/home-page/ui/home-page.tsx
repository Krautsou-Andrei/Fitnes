import React from 'react';
import { Content } from 'antd/lib/layout/layout';
import { Col, Row } from 'antd';

import { cardsActionsConfig, cardsInfoConfig } from '@shared/config';
import { AppCardActive, AppCardText } from '@shared/ui';

import styles from './home-page.module.less';

export const HomePage: React.FC = () => {
    return (
        <Content className={styles['content']}>
            <Row className={styles['content-cards']} gutter={[0, 16]}>
                <Col span={24}>
                    <Row gutter={[24, 24]}>
                        {cardsInfoConfig.map((card) => {
                            return (
                                <Col key={card.id} span={24}>
                                    <AppCardText card={card} />
                                </Col>
                            );
                        })}
                    </Row>
                </Col>
                <Col span={24}>
                    <Row gutter={[16, 16]}>
                        {cardsActionsConfig.map((card) => {
                            return (
                                <Col key={card.id} span={8}>
                                    <AppCardActive button={card.button} title={card.title} />
                                </Col>
                            );
                        })}
                    </Row>
                </Col>
            </Row>
        </Content>
    );
};
