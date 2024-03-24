import { CloseOutlined } from '@ant-design/icons';
import { DataTestIdConfig } from '@shared/config';
import { splitString } from '@shared/lib';

export function configTitle(title: string) {
    return (
        <span data-test-id={DataTestIdConfig.MODAL_ERROR_USER_TRAINING_TITLE}>
            {splitString(title)}
        </span>
    );
}

export function configDescription(description: string | undefined) {
    return (
        <span data-test-id={DataTestIdConfig.MODAL_ERROR_USER_TRAINING_SUBTITLE}>
            {description}
        </span>
    );
}

export function configButton(text: string, dataTestId?: string) {
    return (
        <span
            data-test-id={
                dataTestId ? dataTestId : DataTestIdConfig.MODAL_ERROR_USER_TRAINING_BUTTON
            }
        >
            {text}
        </span>
    );
}

export function configIconClose() {
    return <CloseOutlined data-test-id={DataTestIdConfig.MODAL_ERROR_USER_TRAINING_BUTTON_CLOSE} />;
}
