import React, { useContext } from "react";
import { CookieContext, ICookieContext } from "../../helpers/context/CookieContext";
import LanguageHelper from "../../helpers/Language";
import ActionButtonsModify from "../Button/ActionButtonsModify";
import ButtonGroup from "../Button/ButtonGroup";
import CookiesList from "../CookiesList/CookiesList";
import IconTimes from "../Icons/IconTimes";
import { URLString } from "../Link/ExternalLink";
import Paragraph from "../Text/Paragraph";
import Title from "../Text/Title";
import ThirdPartyList, { IThirdPartyProvider } from "../ThirdParty/ThirdPartyList";

export interface IContainerModify {
	name: string;
	preamble: string;
	thirdPartyProvider: Array<IThirdPartyProvider>;
	privacyPolicyLink: URLString;
	cookiePolicyLink?: URLString;
}

function ContainerModify({
	name,
	preamble,
	thirdPartyProvider,
	privacyPolicyLink,
	cookiePolicyLink,
}: IContainerModify) {
	const cookieCtx: ICookieContext | null = useContext(CookieContext);

	if (cookieCtx && (cookieCtx.hasDecided || !cookieCtx.modify)) {
		return null;
	}

	const handleClose = () => {
		if (cookieCtx) cookieCtx.toggleModifyState();
	};

	return (
		<div className="cc__container cc__container--modify">
			<div className="wrapper">
				<IconTimes onClick={handleClose} />
				<Title>
					{name} {LanguageHelper.translate("TITLE")}
				</Title>
				<Paragraph>{preamble}</Paragraph>
				<div className="cc__scroller cc__scroller--max">
					{cookieCtx && cookieCtx.cookies.length > 0 && (
						<CookiesList cookies={cookieCtx.cookies} />
					)}
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
