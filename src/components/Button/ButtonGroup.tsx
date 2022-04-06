import React from "react";
import LanguageHelper from "../../helpers/Language";
import { URLString } from "../CookieConsent/CookieConsent";
import Button from "./Button";

export interface IButtonGroup {
	privacyLink: URLString;
	cookieLink?: URLString;
	actionButtons: React.ReactNode;
}

function ButtonGroup({ cookieLink, privacyLink, actionButtons }: IButtonGroup) {
	return (
		<div className="cc__btn__group">
			<div className="secondary">
				<a href={privacyLink}>
					<Button type="tertiary">
						{LanguageHelper.translate("cc-small-PRIVACY_POLICY")}
					</Button>
				</a>
				{cookieLink && (
					<a href={cookieLink}>
						<Button type="tertiary">
							{LanguageHelper.translate("cc-small-COOKIE_POLICY")}
						</Button>
					</a>
				)}
			</div>
			<div className="action">{actionButtons}</div>
		</div>
	);
}

export default ButtonGroup;
