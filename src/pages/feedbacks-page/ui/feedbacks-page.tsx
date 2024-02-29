import { Col, Row } from 'antd';
import { Content } from 'antd/lib/layout/layout';

import { FeedBackCard } from './feedback-card';

export function FeedbacksPage() {
    return (
        <Content>
            <Row>
                <Col span={24}>
                    <FeedBackCard />
                </Col>
            </Row>
        </Content>
    );
}
