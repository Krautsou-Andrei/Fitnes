import { z } from 'zod';

const envVariables = z.object({
    VITE_APP_API_URL: z.string().url(),
    VITE_APP_API_URL_IMAGE: z.string().url(),
    VITE_APP_SECRET_KEY: z.string(),
});

envVariables.parse(import.meta.env);

export type envVariablesz = z.infer<typeof envVariables>;

export const config = {
    API_ENDPOINT: import.meta.env.VITE_APP_API_URL,
    API_ENDPOINT_IMAGE: import.meta.env.VITE_APP_API_URL_IMAGE,
    SECRET_KEY: import.meta.env.VITE_APP_SECRET_KEY,
    MODE_DEV: import.meta.env.DEV,
} as const;
