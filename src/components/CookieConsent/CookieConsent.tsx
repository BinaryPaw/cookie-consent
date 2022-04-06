import React from "react";

export type PackageLanguage = "de" | "en";

export interface IThemeColors {
	text?: string;
	secondary?: string;
	bg?: string;
	accept?: string;
	decline?: string;
	accent?: string;
}

export interface ICookie {
	name: string;
	group?: string;
	consent: boolean;
	mandatory: boolean;
	desc: string;
}

export interface IThirdPartyProvider {
	name: string;
	desc: string;
	privacyLink: string;
	optOutLink: string;
}

export interface ICookieConsentProps {
	name: string;
	activated?: boolean;
	language?: PackageLanguage;

	preamble: string;
	privacyPolicyLink: string;
	cookiePolicyLink?: string;
	cookies: Array<ICookie>;
	thirdPartyProvider?: Array<IThirdPartyProvider>;

	colors?: IThemeColors;
}

const CookieConsent = ({}: ICookieConsentProps) => {
	return <div className="cc__gimme-cookies"></div>;
};

export default CookieConsent;
