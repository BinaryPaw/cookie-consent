import React from "react";
import LanguageHelper from "../../helpers/Language";
import { URLString } from "../CookieConsent/CookieConsent";
import ThirdPartyItem from "./ThirdPartyItem";

export interface IThirdPartyProvider {
	name: string;
	desc: string;
	privacyLink: URLString;
	optOutLink: URLString;
}

export interface IThirdPartyList {
	thirdParties: Array<IThirdPartyProvider>;
}

function ThirdPartyList({ thirdParties }: IThirdPartyList) {
	return (
		<div className="cc_list">
			<div className="cc__thirdpartyheader">
				<h5>{LanguageHelper.translate("cc-modify-THIRD_PARTY_PROVIDER")}</h5>
			</div>
			<div className="cc__thirdpartylist">
				{thirdParties.map((thirdParty) => (
					<ThirdPartyItem key={thirdParty.name} thirdParty={thirdParty} />
				))}
			</div>
		</div>
	);
}

export default ThirdPartyList;
