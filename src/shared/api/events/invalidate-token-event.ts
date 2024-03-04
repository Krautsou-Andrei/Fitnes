import { createAction } from '@reduxjs/toolkit';
import { EventApiConfig } from '@shared/config';

export const invalidateAccessToken = createAction(EventApiConfig.INVALIDATE_ACCESS_TOKEN);
