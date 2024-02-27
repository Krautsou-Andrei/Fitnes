export function getSessionStorage(name: string): string {
    return sessionStorage.getItem(name) || '';
}
