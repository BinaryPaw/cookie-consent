/// <reference types="react" />
import { URLString } from "../Link/ExternalLink";
export interface IThirdPartyProvider {
    name: string;
    desc: string;
    privacyLink: URLString;
    optOutLink: URLString;
}
export interface IThirdPartyList {
    thirdParties: Array<IThirdPartyProvider>;
}
declare function ThirdPartyList({ thirdParties }: IThirdPartyList): JSX.Element;
export default ThirdPartyList;
