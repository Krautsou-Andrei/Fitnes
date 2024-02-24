/// <reference types="vite/client" />

interface CustomImportMeta extends ImportMeta {    
    env: {
        VITE_APP_API_URL: string;
        VITE_APP_SECRET_KEY: string;
    };
}

declare const importMeta: CustomImportMeta;
