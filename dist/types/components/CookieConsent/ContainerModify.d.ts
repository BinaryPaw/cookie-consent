/// <reference types="react" />
import { IThirdPartyProvider } from "../ThirdParty/ThirdPartyList";
import { URLString } from "../Link/ExternalLink";
export interface IContainerModify {
    name: string;
    preamble: string;
    thirdPartyProvider: Array<IThirdPartyProvider>;
    privacyPolicyLink: URLString;
    cookiePolicyLink?: URLString;
}
declare function ContainerModify({ name, preamble, thirdPartyProvider, privacyPolicyLink, cookiePolicyLink, }: IContainerModify): JSX.Element | null;
export default ContainerModify;
