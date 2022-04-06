import React from "react";
import LanguageHelper from "../../helpers/Language";
import { IThirdPartyProvider } from "./ThirdPartyList";
import Paragraph from "../Text/Paragraph";
import Button from "../Button";

export interface IThirdPartyItem {
	thirdParty: IThirdPartyProvider;
}

function ThirdPartyItem({ thirdParty }: IThirdPartyItem) {
	return (
		<div className="cc__thirdpartylist__item">
			<h4>{thirdParty.name}</h4>
			<Paragraph>{thirdParty.desc}</Paragraph>
			<div className="links">
				<a href={thirdParty.privacyLink} target="_blank" rel="noreferrer noopener nofollow">
					<Button type="tertiary">
						{thirdParty.name} {LanguageHelper.translate("cc-small-PRIVACY_POLICY")}
					</Button>
				</a>
				<a href={thirdParty.optOutLink} target="_blank" rel="noreferrer noopener nofollow">
					<Button type="tertiary">
						{thirdParty.name} {LanguageHelper.translate("cc-modify-OPT_OUT")}
					</Button>
				</a>
			</div>
		</div>
	);
}

export default ThirdPartyItem;
