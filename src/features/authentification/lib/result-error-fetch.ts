import { push } from 'redux-first-history';
import { type CallHistoryMethodAction } from 'redux-first-history/build/es6/actions';

import { HistoryStateConfig, BASENAME, PathConfig } from '@shared/config';

export function resultErrorFetch(): CallHistoryMethodAction {
    return push(`${BASENAME}${PathConfig.RESULT_ERROR_LOGIN}`, { result: HistoryStateConfig.RESULT });
}
