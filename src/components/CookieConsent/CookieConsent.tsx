import React from "react";
import { PackageLanguage } from "../../helpers/Language";
import { CookieProvider } from "../../helpers/context/CookieContext";
import { IThirdPartyProvider } from "../ThirdParty/ThirdPartyList";
import { ICookie } from "../CookiesList/CookiesList";
import Init, { IThemeColors } from "../Init/Init";
import { URLString } from "../Link/ExternalLink";
import ContainerModify from "./ContainerModify";
import ContainerSmall from "./ContainerSmall";

export interface ICookieConsentProps {
	name: string;
	activated?: boolean;
	language?: PackageLanguage;

	preamble: string;
	privacyPolicyLink: URLString;
	cookiePolicyLink?: URLString;
	cookies?: Array<ICookie>;
	thirdPartyProvider?: Array<IThirdPartyProvider>;
	onSave?: Function;

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
	onSave,
	colors,
}: ICookieConsentProps) {
	return (
		<CookieProvider>
			<Init language={language} cookies={cookies} colors={colors} saveEventHandler={onSave} />
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
					thirdPartyProvider={thirdPartyProvider}
					privacyPolicyLink={privacyPolicyLink}
					cookiePolicyLink={cookiePolicyLink}
				/>
			</div>
		</CookieProvider>
	);
}

export default CookieConsent;
