import { Rule } from 'antd/lib/form';
import { ErrorValidateConfig, regExpConfig } from '@shared/config';

export const validateLoginRules: Rule[] = [
    { required: true, message: ErrorValidateConfig.EMAIL_REQUIRE },
    { pattern: regExpConfig.email, message: ErrorValidateConfig.EMAIL_NO_VALIDATE },
];
