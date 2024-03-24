import { Form } from 'antd';

import { SettingsOptionsItem } from './ui/settings-options-item';

import { SettingsConfig, SettingsOptionsConfig } from '@features/profile/config';
import { useSettingsForm } from '@features/profile/hooks';

export function SettingsForm() {
    const { form, onHandleChange, user } = useSettingsForm();

    return (
        <Form form={form} onFieldsChange={onHandleChange}>
            {SettingsOptionsConfig.map((option) => {
                return (
                    <SettingsOptionsItem
                        key={option.ID}
                        name={option.NAME}
                        titleOption={option.TITLE_SETTING}
                        titleTooltip={option.TITLE_TOOLTIP}
                        isDisabled={option.NAME === SettingsConfig.INPUT_TYPE_THEME && !user.tariff}
                    />
                );
            })}
        </Form>
    );
}
