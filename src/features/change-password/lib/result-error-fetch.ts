import { push } from 'redux-first-history';
import { type CallHistoryMethodAction } from 'redux-first-history/build/es6/actions';
import { type FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { HistoryStateConfig, PathConfig } from '@shared/config';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function resultErrorFetch(_error: FetchBaseQueryError): CallHistoryMethodAction {
    return push(PathConfig.RESULT_ERROR_CHANGE_PASSWORD, {
        result: HistoryStateConfig.RESULT,
    });
}
