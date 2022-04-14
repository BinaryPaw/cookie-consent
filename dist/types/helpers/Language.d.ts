export declare type PackageLanguage = "de" | "en";
export default class LanguageHelper {
    static languageFiles: any;
    static language: string;
    static setLanguageFile(lang: PackageLanguage): void;
    static translate(key: string): any;
}
