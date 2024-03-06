import { Form, Modal, Rate } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

import { customIconStars } from '@features/feedbacks/lib';
import { useFeedbackModal } from './hooks/use-feedback-modal';
import { SubmitNewFeedbackButton } from '../submit-new-feedback-button/submit-new-feedback-button';
import { FeedbackConfig } from '../../config/feedback-config';

import { ErrorValidateConfig } from '@shared/config';
import { STYLES } from '@shared/config/constants';

import styles from './new-feedback-modal.module.less';

export function NewFeedbackModal() {
    const { closeModal, checkRating, form, isLoading, isOpenModal, isValid, onFinish, onSubmit } =
        useFeedbackModal();

    return (
        <Modal
            className={styles['add-feedback-modal']}
            title={FeedbackConfig.FORM_FEEDBACK_TITLE}
            open={isOpenModal}
            onCancel={closeModal}
            footer={<SubmitNewFeedbackButton isDisabled={isValid} onClick={onSubmit} />}
            maskStyle={{ backdropFilter: STYLES.BLURE, background: STYLES.BACKGROUND_BLURE }}
            centered={true}
        >
            {!isLoading && (
                <Form form={form} onFinish={onFinish}>
                    <Form.Item
                        name={FeedbackConfig.FORM_INPUT_NAME_RATING}
                        rules={[{ required: true, message: ErrorValidateConfig.RATING_REQUIRE }]}
                    >
                        <Rate
                            className={styles['feedback-rating']}
                            onChange={checkRating}
                            character={customIconStars}
                        ></Rate>
                    </Form.Item>
                    <Form.Item name={FeedbackConfig.FORM_INPUT_NAME_MESSAGE}>
                        <TextArea autoSize className={styles['text-area']} />
                    </Form.Item>
                </Form>
            )}
        </Modal>
    );
}
