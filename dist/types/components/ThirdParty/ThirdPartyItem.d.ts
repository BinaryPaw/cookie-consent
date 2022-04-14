/// <reference types="react" />
import { IThirdPartyProvider } from "./ThirdPartyList";
export interface IThirdPartyItem {
    thirdParty: IThirdPartyProvider;
}
declare function ThirdPartyItem({ thirdParty }: IThirdPartyItem): JSX.Element;
export default ThirdPartyItem;
