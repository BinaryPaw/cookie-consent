import React from "react";
import LanguageHelper from "../../helpers/Language";
import ActionButtonsModify from "../Button/ActionButtonsModify";
import ButtonGroup from "../Button/ButtonGroup";
import CookiesList, { ICookie } from "../CookiesList/CookiesList";
import IconTimes from "../Icons/IconTimes";
import Paragraph from "../Text/Paragraph";
import Title from "../Text/Title";
import ThirdPartyList, { IThirdPartyProvider } from "../ThirdParty/ThirdPartyList";
import { URLString } from "./CookieConsent";

export interface IContainerModify {
	name: string;
	preamble: string;
	cookies: Array<ICookie>;
	thirdPartyProvider: Array<IThirdPartyProvider>;
	privacyPolicyLink: URLString;
	cookiePolicyLink?: URLString;
}

function ContainerModify({
	name,
	preamble,
	cookies,
	thirdPartyProvider,
	privacyPolicyLink,
	cookiePolicyLink,
}: IContainerModify) {
	return (
		<div className="cc__container cc__container--modify">
			<div className="wrapper">
				<IconTimes />
				<Title>
					{name} {LanguageHelper.translate("cc-small-TITLE")}
				</Title>
				<Paragraph>{preamble}</Paragraph>
				<div className="cc__scroller cc__scroller--max">
					{cookies.length > 0 && <CookiesList cookies={cookies} />}
					{thirdPartyProvider.length > 0 && (
						<ThirdPartyList thirdParties={thirdPartyProvider} />
					)}
				</div>
				<ButtonGroup
					privacyLink={privacyPolicyLink}
					cookieLink={cookiePolicyLink}
					actionButtons={<ActionButtonsModify />}
				/>
			</div>
		</div>
	);
}

export default ContainerModify;
