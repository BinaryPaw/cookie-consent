import { IThemeColors } from "../components/Init/Init";
export declare type StorageKey = `CC_${string}`;
export default class Utility {
    static prefix: string;
    static generatePrefixedClass(base: string, dynamic?: string): string;
    static changeCustomProperties(colors: IThemeColors): void;
    static retrieveStorageItem(key: StorageKey): any;
    static setStorageItem(key: StorageKey, value: any): void;
    static removeStorageItem(key: StorageKey): void;
}
