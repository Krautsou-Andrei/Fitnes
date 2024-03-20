import {
    profileApi,
    useGetUserQuery,
    useLazyGetUserQuery,
    useUpdateUserMutation,
} from './api/profile-api';
import { profileSlice, selectGetUser, selectIsProfile } from './model/slice';

export type * from './api/types';
export type * from './model/types';

export {
    profileApi,
    profileSlice,
    selectGetUser,
    selectIsProfile,
    useGetUserQuery,
    useLazyGetUserQuery,
    useUpdateUserMutation,
};
