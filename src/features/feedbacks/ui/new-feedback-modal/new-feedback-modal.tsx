import { Form, Modal, Rate } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

import { useFeedbackModal } from './lib/use-feedback-modal';
import { SubmitNewFeedbackButton } from '../submit-new-feedback-button/submit-new-feedback-button';
import { FeedbackConfig } from '../../config/feedback-config';

import { selectIsLoadingn } from '@entities/session';

import { ErrorValidateConfig } from '@shared/config';
import { useAppSelector } from '@shared/hooks';

import styles from './new-feedback-modal.module.less';

type NewFeedbackModalProps = {
    isOpen: boolean;
    onClick: () => void;
};

export function NewFeedbackModal({ isOpen, onClick }: NewFeedbackModalProps) {
    const isLoading = useAppSelector(selectIsLoadingn);
    const { checkRating, form, isValid, onFinish, onSubmit, customCharacter } =
        useFeedbackModal(onClick);

    return (
        <Modal
            className={styles['add-feedback-modal']}
            title={FeedbackConfig.FORM_FEEDBACK_TITLE}
            open={isOpen}
            onCancel={onClick}
            footer={<SubmitNewFeedbackButton isDisabled={isValid} onClick={onSubmit} />}
            centered={true}
        >
            {!isLoading && (
                <Form form={form} onFinish={onFinish}>
                    <Form.Item
                        name={FeedbackConfig.FORM_INPUT_NAME_RATING}
                        rules={[{ required: true, message: ErrorValidateConfig.RATING_REQUIRE }]}
                    >
                        <Rate onChange={checkRating} character={customCharacter}></Rate>
                    </Form.Item>
                    <Form.Item name={FeedbackConfig.FORM_INPUT_NAME_MESSAGE}>
                        <TextArea autoSize />
                    </Form.Item>
                </Form>
            )}
        </Modal>
    );
}
