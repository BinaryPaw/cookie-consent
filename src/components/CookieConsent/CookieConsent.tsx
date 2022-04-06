import React from "react";

export type PackageLanguage = "de" | "en";
export type URLString = `https://${string}.${string}`;
export type ColorString = `#${string}`;

export interface IThemeColors {
	text?: ColorString;
	secondary?: ColorString;
	bg?: ColorString;
	accept?: ColorString;
	decline?: ColorString;
	accent?: ColorString;
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
	privacyLink: URLString;
	optOutLink: URLString;
}

export interface ICookieConsentProps {
	name: string;
	activated?: boolean;
	language?: PackageLanguage;

	preamble: string;
	privacyPolicyLink: URLString;
	cookiePolicyLink?: URLString;
	cookies: Array<ICookie>;
	thirdPartyProvider?: Array<IThirdPartyProvider>;

	colors?: IThemeColors;
}

function CookieConsent({}: ICookieConsentProps) {
	return <div className="cc__gimme-cookies"></div>;
}

CookieConsent.defaultProps = {
	activated: true,
	language: "en",
	thirdPartyProvider: [],
};

export default CookieConsent;
