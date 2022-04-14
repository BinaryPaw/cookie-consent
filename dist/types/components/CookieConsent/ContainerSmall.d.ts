/// <reference types="react" />
import { URLString } from "../Link/ExternalLink";
export interface IContainerSmall {
    name: string;
    preamble: string;
    privacyPolicyLink: URLString;
    cookiePolicyLink?: URLString;
}
declare function ContainerSmall({ name, preamble, privacyPolicyLink, cookiePolicyLink }: IContainerSmall): JSX.Element | null;
export default ContainerSmall;
