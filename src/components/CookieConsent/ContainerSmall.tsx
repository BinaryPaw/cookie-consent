import React, { useContext } from "react";
import { CookieContext, ICookieContext } from "../../helpers/context/CookieContext";
import LanguageHelper from "../../helpers/Language";
import ActionButtonsSmall from "../Button/ActionButtonsSmall";
import ButtonGroup from "../Button/ButtonGroup";
import IconTimes from "../Icons/IconTimes";
import Paragraph from "../Text/Paragraph";
import Title from "../Text/Title";
import { URLString } from "./CookieConsent";

export interface IContainerSmall {
	name: string;
	preamble: string;
	privacyPolicyLink: URLString;
	cookiePolicyLink?: URLString;
}

function ContainerSmall({ name, preamble, privacyPolicyLink, cookiePolicyLink }: IContainerSmall) {
	const cookieCtx: ICookieContext | null = useContext(CookieContext);

	if (cookieCtx && (cookieCtx.hasDecided || cookieCtx.modify)) {
		return null;
	}

	return (
		<div className="cc__container cc__container--small">
			<div>
				<IconTimes />
				<Title>
					{name} {LanguageHelper.translate("TITLE")}
				</Title>
				<Paragraph>{preamble}</Paragraph>
				<ButtonGroup
					privacyLink={privacyPolicyLink}
					cookieLink={cookiePolicyLink}
					actionButtons={<ActionButtonsSmall />}
				/>
			</div>
		</div>
	);
}

export default ContainerSmall;
