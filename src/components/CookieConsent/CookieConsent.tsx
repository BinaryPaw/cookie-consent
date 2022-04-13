import React, { useEffect } from "react";
import LanguageHelper, { PackageLanguage } from "../../helpers/Language";
import { IThirdPartyProvider } from "../ThirdParty/ThirdPartyList";
import { ICookie } from "../CookiesList/CookiesList";
import ContainerModify from "./ContainerModify";
import ContainerSmall from "./ContainerSmall";
import { CookieProvider } from "../../helpers/context/CookieContext";
import Init from "../Init/Init";

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
	return (
		<CookieProvider>
			<Init language={language} cookies={cookies} />
			<div className="cc__gimme-cookies">
				<ContainerSmall
					name={name}
					preamble={preamble}
					privacyPolicyLink={privacyPolicyLink}
					cookiePolicyLink={cookiePolicyLink}
				/>
				<ContainerModify
					name={name}
					preamble={preamble}
					cookies={cookies}
					thirdPartyProvider={thirdPartyProvider}
					privacyPolicyLink={privacyPolicyLink}
					cookiePolicyLink={cookiePolicyLink}
				/>
			</div>
		</CookieProvider>
	);
}

export default CookieConsent;
