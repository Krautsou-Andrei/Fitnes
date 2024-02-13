import { Content } from 'antd/lib/layout/layout';
import { Button, Col, Row } from 'antd';

import { cardsActionsConfig, cardsInfoConfig } from '@shared/config';
import { AppCardActive, AppCardText } from '@shared/ui';

import styles from './home-page.module.less';

export function HomePage() {
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
                    <Row gutter={[16, 8]}>
                        {cardsActionsConfig.map((card) => {
                            return (
                                <Col key={card.id} span={24} md={8}>
                                    <AppCardActive title={card.title}>
                                        <Button type='link' href={card.button.href}>
                                            {card.button.icon}
                                            {card.button.title}
                                        </Button>
                                    </AppCardActive>
                                </Col>
                            );
                        })}
                    </Row>
                </Col>
            </Row>
        </Content>
    );
}
