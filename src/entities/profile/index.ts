import {
    profileApi,
    useGetUserQuery,
    useLazyGetUserQuery,
    useUpdateUserMutation,
} from './api/profile-api';
import { profileSlice, selectGetUser, selectIsProfile } from './model/slice';
import { ApiEndpoints } from './config/api-endpoints';

export type * from './api/types';
export type * from './model/types';

export {
    ApiEndpoints,
    profileApi,
    profileSlice,
    selectGetUser,
    selectIsProfile,
    useGetUserQuery,
    useLazyGetUserQuery,
    useUpdateUserMutation,
};
