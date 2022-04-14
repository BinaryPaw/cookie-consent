import { PackageLanguage } from "../../helpers/Language";
import { ICookie } from "../CookiesList/CookiesList";
export declare type ColorString = `#${string}`;
export interface IInit {
    language: PackageLanguage;
    cookies: Array<ICookie>;
    colors?: IThemeColors;
    saveEventHandler?: Function;
}
export interface IThemeColors {
    text?: ColorString;
    secondary?: ColorString;
    bg?: ColorString;
    accept?: ColorString;
    decline?: ColorString;
    accent?: ColorString;
    [key: string]: ColorString | undefined;
}
declare function Init({ language, cookies, colors, saveEventHandler }: IInit): null;
export default Init;
