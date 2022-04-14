import React from "react";
export declare type URLString = `https://${string}.${string}`;
export interface IExternalLink {
    link: URLString;
    openNewTab?: boolean;
    children: React.ReactNode;
}
declare function ExternalLink({ link, openNewTab, children }: IExternalLink): JSX.Element;
export default ExternalLink;
