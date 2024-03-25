import { Rule } from 'antd/lib/form';
import { ErrorValidateConfig, LayoutConfig } from '@shared/config';

export function validateConfirmPasswordRules(isRequired?: boolean): Rule[] {
    return [
        {
            required: isRequired !== undefined ? isRequired : true,
            message: ErrorValidateConfig.PASSWORD_REQUIRE,
        },
        ({ getFieldValue }) => ({
            validator(_, value) {
                if (!value || getFieldValue(LayoutConfig.INPUT_TYPE_PASSWORD) === value) {
                    return Promise.resolve();
                }
                return Promise.reject(new Error(ErrorValidateConfig.PASSWORD_NO_CONFIRM));
            },
        }),
    ];
}
