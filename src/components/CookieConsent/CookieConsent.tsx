import React, { useEffect } from "react";
import LanguageHelper, { PackageLanguage } from "../../helpers/Language";
import ActionButtonsModify from "../Button/ActionButtonsModify";
import ActionButtonsSmall from "../Button/ActionButtonsSmall";
import ButtonGroup from "../Button/ButtonGroup";
import IconTimes from "../Icons/IconTimes";
import Paragraph from "../Text/Paragraph";
import Title from "../Text/Title";
import ContainerModify from "./ContainerModify";
import ContainerSmall from "./ContainerSmall";

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

	return (
		<div className="cc__gimme-cookies">
			<ContainerSmall>
				<IconTimes />
				<Title>AntiPhishing cookie consent</Title>
				<Paragraph>
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
					tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
					vero eos et accusam et justo duo dolores et ea rebum.
				</Paragraph>
				<ButtonGroup
					privacyLink={privacyPolicyLink}
					cookieLink={cookiePolicyLink}
					actionButtons={<ActionButtonsSmall />}
				/>
			</ContainerSmall>
			<ContainerModify>
				<IconTimes />
				<Title>AntiPhishing cookie consent</Title>
				<Paragraph>
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
					tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
					vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit
					amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
					labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
					et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur
					sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
					magna aliquyam erat, sed diam voluptua.
				</Paragraph>
				<ButtonGroup
					privacyLink={privacyPolicyLink}
					cookieLink={cookiePolicyLink}
					actionButtons={<ActionButtonsModify />}
				/>
			</ContainerModify>
		</div>
	);
}

export default CookieConsent;
