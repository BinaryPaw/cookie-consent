/// <reference types="react" />
import { PackageLanguage } from "../../helpers/Language";
import { IThirdPartyProvider } from "../ThirdParty/ThirdPartyList";
import { ICookie } from "../CookiesList/CookiesList";
import { IThemeColors } from "../Init/Init";
import { URLString } from "../Link/ExternalLink";
export interface ICookieConsentProps {
    name: string;
    activated?: boolean;
    language?: PackageLanguage;
    preamble: string;
    privacyPolicyLink: URLString;
    cookiePolicyLink?: URLString;
    cookies?: Array<ICookie>;
    thirdPartyProvider?: Array<IThirdPartyProvider>;
    onSave?: Function;
    colors?: IThemeColors;
}
declare function CookieConsent({ name, activated, language, preamble, privacyPolicyLink, cookiePolicyLink, cookies, thirdPartyProvider, onSave, colors, }: ICookieConsentProps): JSX.Element;
export default CookieConsent;
