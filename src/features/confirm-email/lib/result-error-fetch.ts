import { push } from 'redux-first-history';
import { type CallHistoryMethodAction } from 'redux-first-history/build/es6/actions';
import { type FetchBaseQueryError } from '@reduxjs/toolkit/query';

import {BASENAME, HistoryStateConfig, PathConfig } from '@shared/config';
import { StatusError } from '@shared/api';

export function resultErrorFetch(error: FetchBaseQueryError): CallHistoryMethodAction {
    if (
        error.data !== undefined &&
        'data' in error &&
        error.data !== null &&
        typeof error.data === 'object' &&
        'message' in error.data
    ) {
        if (
            error.status === StatusError.ERROR_404 &&
            error?.data?.message === StatusError.MESSAGE_NO_EMAIL
        ) {
            return push(`${BASENAME}${PathConfig.RESULT_ERROR_CHECK_EMAIL_NO_EXIST}`, {
                result: HistoryStateConfig.RESULT,
            });
        }
    }

    return push(`${BASENAME}${PathConfig.RESULT_ERROR_CHECK_EMAIL}`, {
        result: HistoryStateConfig.RESULT,
    });
}
