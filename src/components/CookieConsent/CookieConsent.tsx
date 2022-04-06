import React, { useEffect } from "react";
import LanguageHelper, { PackageLanguage } from "../../helpers/Language";

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
	cookies?: Array<ICookie>;
	thirdPartyProvider?: Array<IThirdPartyProvider>;

	colors?: IThemeColors;
}

function CookieConsent({
	name,
	activated = true,
	language = "en",
	preamble,
	privacyPolicyLink,
	cookiePolicyLink,
	cookies = [],
	thirdPartyProvider = [],
	colors,
}: ICookieConsentProps) {
	useEffect(() => {
		LanguageHelper.setLanguageFile(language);
	}, [language]);

	return <div className="cc__gimme-cookies"></div>;
}

export default CookieConsent;
