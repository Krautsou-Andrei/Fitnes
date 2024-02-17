import { z } from 'zod';

const envVariables = z.object({
    VITE_APP_API_URL: z.string().url(),
});

envVariables.parse(import.meta.env);

export type envVariablesz = z.infer<typeof envVariables>; // Fruits

export const config = {
    API_ENDPOINT: import.meta.env.VITE_APP_API_URL,
} as const;
