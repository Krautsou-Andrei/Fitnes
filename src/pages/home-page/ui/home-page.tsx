import { Content } from 'antd/lib/layout/layout';
import { Col, Row } from 'antd';

import { cardsActionsConfig, cardsInfoConfig } from '../config/cards-config';

import { AppCardActive } from './app-card-active';
import { AppCardText } from './app-card-text';

import styles from './home-page.module.less';

export function HomePage() {
    return (
        <Content>
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
                    <Row gutter={[16, 8]}>
                        {cardsActionsConfig.map((card) => {
                            return (
                                <Col key={card.id} span={24} md={8}>
                                    <AppCardActive card={card} />
                                </Col>
                            );
                        })}
                    </Row>
                </Col>
            </Row>
        </Content>
    );
}
