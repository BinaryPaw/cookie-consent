import React from "react";
import { URLString } from "../Link/ExternalLink";
export interface IButtonGroup {
    privacyLink: URLString;
    cookieLink?: URLString;
    actionButtons: React.ReactNode;
}
declare function ButtonGroup({ cookieLink, privacyLink, actionButtons }: IButtonGroup): JSX.Element;
export default ButtonGroup;
