/// <reference types="react" />
export interface ICookie {
    name: string;
    group: string;
    consent: boolean;
    mandatory: boolean;
    desc: string;
    [key: string]: string | boolean | undefined;
}
export interface ICookiesList {
    cookies: Array<ICookie>;
}
declare function CookiesList({ cookies }: ICookiesList): JSX.Element;
export default CookiesList;
