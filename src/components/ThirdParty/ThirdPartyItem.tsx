import React from "react";
import LanguageHelper from "../../helpers/Language";
import { IThirdPartyProvider } from "./ThirdPartyList";
import Paragraph from "../Text/Paragraph";
import Button from "../Button";
import ExternalLink from "../Link/ExternalLink";

export interface IThirdPartyItem {
	thirdParty: IThirdPartyProvider;
}

function ThirdPartyItem({ thirdParty }: IThirdPartyItem) {
	return (
		<div className="cc__thirdpartylist__item">
			<h4>{thirdParty.name}</h4>
			<Paragraph>{thirdParty.desc}</Paragraph>
			<div className="links">
				<ExternalLink link={thirdParty.privacyLink}>
					<Button type="tertiary">{LanguageHelper.translate("PRIVACY_POLICY")}</Button>
				</ExternalLink>
				<ExternalLink link={thirdParty.optOutLink}>
					<Button type="tertiary">{LanguageHelper.translate("OPT_OUT")}</Button>
				</ExternalLink>
			</div>
		</div>
	);
}

export default ThirdPartyItem;
