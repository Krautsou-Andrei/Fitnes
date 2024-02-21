import { Rule } from 'antd/lib/form';
import { InputPasswordType } from '../model/types';

import { ErrorValidateConfig, regExpConfig } from '@shared/config';

export function validatePasswordRules(type: InputPasswordType): Rule[] {
    if (type === 'login') {
        return [{ required: true, min: 8, message: ErrorValidateConfig.PASSWORD_REQUIRE }];
    }
    if (type === 'register') {
        return [
            {
                required: true,
                message: ErrorValidateConfig.PASSWORD_REQUIRE,
            },
            {
                pattern: regExpConfig.password,
                message: ErrorValidateConfig.PASSWORD_NO_VALIDATE,
            },
        ];
    }

    return [];
}
