import { config } from './config';

export function showErrorForDevelop(name: string, error: unknown | undefined): void {
    if (config.MODE_DEV) {
        console.error(name, error);
        return;
    }
}
