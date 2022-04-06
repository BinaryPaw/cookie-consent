import React from "react";
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
					<Button type="tertiary">Privacy policy</Button>
				</a>
				<a href={thirdParty.optOutLink} target="_blank" rel="noreferrer noopener nofollow">
					<Button type="tertiary">Opt-Out</Button>
				</a>
			</div>
		</div>
	);
}

export default ThirdPartyItem;
