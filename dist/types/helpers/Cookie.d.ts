import { ICookie } from "../components/CookiesList/CookiesList";
import { StorageKey } from "./Utility";
export declare class CookieHelper {
    static KEY_COOKIES: StorageKey;
    static KEY_HAS_DECIDED: StorageKey;
    static compareCookies(refCookies: Array<ICookie>, cookies: Array<ICookie>): boolean;
    static mergeCookies(newCookies: Array<ICookie>, cookies: Array<ICookie>): ICookie[];
}
