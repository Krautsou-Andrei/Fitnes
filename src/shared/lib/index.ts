import { config } from './config';
import { cryptPassword } from './crypt-password';
import { decryptPassword } from './decrypt-password';
import { getLocalStorage } from './local-storage/get-local-storage';
import { getSessionStorage } from './session-storage/get-session-storage';
import { removeLocalStorage } from './local-storage/remove-local-storage';
import { removeSessionStorage } from './session-storage/remove-session-storage';
import { setLocalStorage } from './local-storage/set-local-storage';
import { setSessionStorage } from './session-storage/set-session-storage';
import { wait } from './wait';
import { wrapSelectedText } from './wrap-selected-text';
import { splitString } from './slpit-string';

export {
    config,
    cryptPassword,
    decryptPassword,
    getLocalStorage,
    getSessionStorage,
    removeLocalStorage,
    removeSessionStorage,
    setLocalStorage,
    setSessionStorage,
    wait,
    wrapSelectedText,
    splitString,
};
