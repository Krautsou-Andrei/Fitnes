import { push } from 'redux-first-history';
import { type CallHistoryMethodAction } from 'redux-first-history/build/es6/actions';
import { type FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { HistoryStateConfig, PathConfig } from '@shared/config';
import { StatusError } from '@shared/api';

export function resultErrorFetch(error: FetchBaseQueryError): CallHistoryMethodAction {
    if (error.status === StatusError.ERROR_409) {
        return push(PathConfig.RESULT_ERROR_USER_EXIST, {
            result: HistoryStateConfig.RESULT,
        });
    }

    return push(PathConfig.RESULT_ERROR, {
        result: HistoryStateConfig.RESULT,
    });
}
