import { push } from 'redux-first-history';
import { type CallHistoryMethodAction } from 'redux-first-history/build/es6/actions';

import { HistoryStateConfig, PathConfig, BASENAME } from '@shared/config';

export function resultErrorFetch(): CallHistoryMethodAction {
    return push(`${BASENAME}${PathConfig.RESULT_ERROR_CHANGE_PASSWORD}`, {
        result: HistoryStateConfig.RESULT,
    });
}
