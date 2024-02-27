export function getLocalStorage(name: string): string {
    return localStorage.getItem(name) || '';
}
