import { Form } from 'antd';

import { SettingsOptionsItem } from './ui/settings-options-item';

import { SettingsConfig, SettingsOptionsConfig } from '@features/profile/config';
import { useSettingsForm } from '@features/profile/hooks';
import { splitString } from '@shared/lib';

export function SettingsForm() {
    const { form, onHandleChange, isQueryXS, user } = useSettingsForm();

    return (
        <Form form={form} onFieldsChange={onHandleChange}>
            {SettingsOptionsConfig.map((option) => {
                const titleSetting = splitString(
                    isQueryXS && option.TITLE_SETTING_MOBILE
                        ? option.TITLE_SETTING_MOBILE
                        : option.TITLE_SETTING,
                );
                return (
                    <SettingsOptionsItem
                        key={option.ID}
                        name={option.NAME}
                        titleOption={titleSetting}
                        titleTooltip={option.TITLE_TOOLTIP}
                        isDisabled={option.NAME === SettingsConfig.INPUT_TYPE_THEME && !user.tariff}
                        dataTestIcon={option.DATA_TEST_ICON}
                        dataTestSwitch={option.DATA_TEST_SWITCH}
                        isQueryXS={isQueryXS}
                    />
                );
            })}
        </Form>
    );
}
