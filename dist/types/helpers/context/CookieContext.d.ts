import React from "react";
import { ICookie } from "../../components/CookiesList/CookiesList";
export declare type SavingMode = "accept" | "decline" | "close";
export interface ICookieContext {
    cookies: Array<ICookie>;
    hasDecided: boolean;
    modify: boolean;
    loadCookies: Function;
    changeCookieConsent: Function;
    saveChanges: Function;
    toggleModifyState: Function;
    disableConsentTemporarily: Function;
    setSaveEventHandler: Function;
}
export interface ICookieProvider {
    children: React.ReactNode;
}
export declare const CookieContext: React.Context<ICookieContext | null>;
export declare const CookieProvider: ({ children }: ICookieProvider) => JSX.Element;
